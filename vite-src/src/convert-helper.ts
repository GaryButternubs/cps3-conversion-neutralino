import { DirectoryEntry, filesystem } from "@neutralinojs/lib";
import { Dispatch, SetStateAction } from "react";
import { GameData, GameList } from "./types/types";

async function convertROM(
  type: string,
  game: string,
  files: DirectoryEntry[],
  outputDir: string,
  setProgress: Dispatch<SetStateAction<number>>,
  setText: Dispatch<SetStateAction<string>>,
) {
  if (type !== "" && game !== "") {
    const combFiles = GameData[game as keyof GameList].combinedFiles;
    const splitFiles = GameData[game as keyof GameList].splitFiles;

    for (let i = 0; i < combFiles.length; i++) {
      if (type === "combined") {
        setText(`Splitting ${files[i].entry} file...`);
        await split(
          files[i],
          splitFiles[i],
          outputDir,
          files[i].entry === "10" || files[i].entry === "20",
        );
      } else if (type === "split") {
        setText(`Combining ${splitFiles[i].join(", ")}...`);
        const inputFiles = files.filter((file) =>
          splitFiles[i].includes(file.entry),
        );
        await combine(
          inputFiles,
          combFiles[i],
          outputDir,
          combFiles[i] === "10" || combFiles[i] === "20",
        );
      }

      setProgress(Math.round((i + 1) * (100 / combFiles.length)));
      setText("Progress: 100%");
    }
  } else {
    console.log("Error: No type specified!");
  }
}

async function split(
  input: DirectoryEntry,
  outputNames: string[],
  outputDir: string,
  dataROM = false,
) {
  // Read binary file
  console.log(`Reading ${input.entry} file`);
  const data = await filesystem.readBinaryFile(input.path);
  const buffer = new Uint8Array(data);
  const outputBuffers: ArrayBuffer[] = [];
  const outputViews: Uint8Array[] = [];

  console.log(`Creating simm files.`);

  for (let i = 0; i < outputNames.length; i++) {
    outputBuffers[i] = new ArrayBuffer(buffer.length / outputNames.length);
    outputViews[i] = new Uint8Array(outputBuffers[i]);
  }

  if (dataROM || outputViews.length <= 2) {
    for (let i = 0; i < buffer.length; i++) {
      outputViews[i % outputViews.length][i / outputViews.length] = buffer[i];
    }
  } else {
    const halfLen = outputViews.length / 2;

    // First two simm files are first half of combined file
    for (let i = 0; i < buffer.length / 2; i++)
      outputViews[i % halfLen][i / halfLen] = buffer[i];

    // Second two simm files are latter half of combined file
    for (let i = buffer.length / 2; i < buffer.length; i++) {
      outputViews[(i % halfLen) + halfLen][(i - buffer.length / 2) / halfLen] =
        buffer[i];
    }
  }

  for (let i = 0; i < outputViews.length; i++) {
    console.log(`Writing to: ${outputDir}/${outputNames[i]}`);
    await filesystem.writeBinaryFile(
      `${outputDir}/${outputNames[i]}`,
      outputBuffers[i],
    );
  }
}

async function combine(
  input: DirectoryEntry[],
  outputName: string,
  outputDir: string,
  dataROM = false,
) {
  const inputBuffers: ArrayBuffer[] = [];
  const inputViews: Uint8Array[] = [];

  for (let i = 0; i < input.length; i++) {
    console.log(`Reading ${input[i].entry}`);
    const buffer = await filesystem.readBinaryFile(input[i].path);
    inputBuffers.push(buffer);
    inputViews.push(new Uint8Array(inputBuffers[i]));
  }

  const outputBuffer = new ArrayBuffer(
    inputViews[0].length * inputViews.length,
  );
  const outputView = new Uint8Array(outputBuffer);

  console.log(`Creating file ${outputName}`);

  if (dataROM || inputViews.length <= 2) {
    for (let i = 0; i < outputView.length; i++) {
      outputView[i] = inputViews[i % inputViews.length][i / inputViews.length];
    }
  } else {
    const halfLen = inputViews.length / 2;
    for (let i = 0; i < outputView.length / 2; i++)
      outputView[i] = inputViews[i % halfLen][i / halfLen];

    for (let i = outputView.length / 2; i < outputView.length; i++) {
      outputView[i] =
        inputViews[(i % halfLen) + halfLen][
          (i - outputView.length / 2) / halfLen
        ];
    }
  }

  console.log(`Writing to file ${outputDir}/${outputName}`);
  await filesystem.writeBinaryFile(`${outputDir}/${outputName}`, outputBuffer);
  console.log(`Finished writing to ${outputName}`);
}

export default convertROM;
