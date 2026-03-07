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
  const data = await filesystem.readBinaryFile(input.path);
  const buffer = new Uint8Array(data);
  const outputBuffers: ArrayBuffer[] = [];
  const outputViews: Uint8Array[] = [];

  const outputCount = outputNames.length;
  const outputSize = buffer.length / outputCount;

  for (let i = 0; i < outputCount; i++) {
    outputBuffers[i] = new ArrayBuffer(outputSize);
    outputViews[i] = new Uint8Array(outputBuffers[i]);
  }

  if (dataROM || outputCount <= 2) {
    for (let i = 0; i < buffer.length; i++) {
      const outputIndex = i % outputCount;
      const offset = (i / outputCount) | 0; // Bitwise OR for floor division
      outputViews[outputIndex][offset] = buffer[i];
    }
  } else {
    const halfLen = outputCount / 2;
    const halfBuffer = buffer.length / 2;

    // First half of file is the first two simms
    for (let i = 0; i < halfBuffer; i++) {
      const outputIndex = i % halfLen;
      const offset = (i / halfLen) | 0;
      outputViews[outputIndex][offset] = buffer[i];
    }

    // Second half of file is the second two simms
    for (let i = 0; i < halfBuffer; i++) {
      const outputIndex = (i % halfLen) + halfLen;
      const offset = (i / halfLen) | 0;
      outputViews[outputIndex][offset] = buffer[halfBuffer + i];
    }
  }

  for (let i = 0; i < outputCount; i++) {
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
  const inputViews: Uint8Array[] = [];

  for (let i = 0; i < input.length; i++) {
    const buffer = await filesystem.readBinaryFile(input[i].path);
    inputViews.push(new Uint8Array(buffer));
  }

  const inputCount = inputViews.length;
  const inputSize = inputViews[0].length;
  const outputBuffer = new ArrayBuffer(inputSize * inputCount);
  const outputView = new Uint8Array(outputBuffer);

  if (dataROM || inputCount <= 2) {
    for (let i = 0; i < outputView.length; i++) {
      const inputIndex = i % inputCount;
      const offset = (i / inputCount) | 0;
      outputView[i] = inputViews[inputIndex][offset];
    }
  } else {
    const halfLen = inputCount / 2;
    const halfOutput = outputView.length / 2;

    // First half of file is the first two simms
    for (let i = 0; i < halfOutput; i++) {
      const inputIndex = i % halfLen;
      const offset = (i / halfLen) | 0;
      outputView[i] = inputViews[inputIndex][offset];
    }

    // Second half of file is the second two simms
    for (let i = 0; i < halfOutput; i++) {
      const inputIndex = (i % halfLen) + halfLen;
      const offset = (i / halfLen) | 0;
      outputView[halfOutput + i] = inputViews[inputIndex][offset];
    }
  }

  await filesystem.writeBinaryFile(`${outputDir}/${outputName}`, outputBuffer);
}

export default convertROM;
