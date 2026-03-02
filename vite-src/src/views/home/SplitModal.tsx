import HomeModal from "./HomeModal";

function SplitModal() {
  const combinedFiles = [10, 20, 30, 31, 40, 41, 50, 51, 60, 61];
  const splitFiles = [
    ["simm1.0", "simm1.1", "simm1.2", "simm1.3"],
    ["simm2.0", "simm2.1", "simm2.2", "simm2.3"],
    ["simm3.0", "simm3.1", "simm3.2", "simm3.3"],
    ["simm3.4", "simm3.5", "simm3.6", "simm3.7"],
    ["simm4.0", "simm4.1", "simm4.2", "simm4.3"],
    ["simm4.4", "simm4.5", "simm4.6", "simm4.7"],
    ["simm5.0", "simm5.1", "simm5.2", "simm5.3"],
    ["simm5.4", "simm5.5", "simm5.6", "simm5.7"],
    ["simm6.0", "simm6.1", "simm6.2", "simm6.3"],
    ["simm6.4", "simm6.5", "simm6.6", "simm6.7"],
  ];

  return (
    <HomeModal linkText="What is a Split ROM?" modalID="split-modal">
      <h3 className="font-bold text-lg">What's a Split ROM?</h3>
      <p className="pt-4">
        This is more modern ROM format utilized by FightCade 2, more recent
        versions of Mame, and all revisions of Final Burn Neo. If you're playing
        CPS3 games nowadays, it's probably using this format.
      </p>
      <p className="pt-4">
        In contrast to the combined ROM, there are (with exceptions) 4 times as
        many files, as each of the 8MB or so files are split into 4 SIMM files.
      </p>
      <p className="pt-4">
        For example, the 30 file is split into simm3.0 simm3.1, simm3.2, and
        simm3.3. For files that share the same value in the 10s place, such as
        the 31 file, the simm numbers continue from the the previous set. So the
        31 file has simm3.4, simm3.5, simm3.6, and simm3.7.
      </p>
      <div className="pt-4 flex flex-wrap gap-2 justify-between">
        {combinedFiles.map((num, index) => (
          <div className="flex flex-col justify-center gap-1 w-[47%]" key={num}>
            <div className="card card-border bg-base-100">
              <div className="card-body flex justify-center items-center">
                <p className="text-lg font-bold">{num}</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-between">
              {splitFiles[index].map((name) => (
                <div className="card card-border bg-base-100" key={name}>
                  <div className="p-2">
                    <p className="text-sm">{name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="pt-4">
        <details
          className="collapse bg-base-100 border border-base-300"
          name="my-accordion-det-1"
        >
          <summary className="collapse-title font-semibold">
            simm1.0 - simm1.3
          </summary>
          <div className="collapse-content text-sm">
            Contains the assembly code for the game among other things such as
            attack properties and song data.
          </div>
        </details>
        <details
          className="collapse bg-base-100 border border-base-300"
          name="my-accordion-det-1"
        >
          <summary className="collapse-title font-semibold">
            simm2.0 - simm2.3
          </summary>
          <div className="collapse-content text-sm">
            Additional game data. In the context of JoJo's Bizarre Adventure
            (which I know the best), this is used primarily to store frame data.
            Unused in New Generation and Red Earth.
          </div>
        </details>
        <details
          className="collapse bg-base-100 border border-base-300"
          name="my-accordion-det-1"
        >
          <summary className="collapse-title font-semibold">
            simm3.0 - simm3.7
          </summary>
          <div className="collapse-content text-sm">
            All sounds, such as instrument samples, sound effects, and voice
            lines.
          </div>
        </details>
        <details
          className="collapse bg-base-100 border border-base-300"
          name="my-accordion-det-1"
        >
          <summary className="collapse-title font-semibold">
            simm4.0 - simm4.7, simm5.0 - simm5.7, simm6.0 - simm6.7
          </summary>
          <div className="collapse-content text-sm space-y-2">
            <p>Primarily graphics and palette data.</p>
            <p>
              Simm files from simm5.2 onwards are only used in Second Impact,
              Heritage for the Future, and Third Strike. Simm files from simm6.0
              to simm6.7 files are exclusively used in Third Strike.
            </p>
          </div>
        </details>
      </div>
    </HomeModal>
  );
}

export default SplitModal;
