import HomeModal from "./HomeModal";

function CombinedModal() {
  const combinedFiles = [10, 20, 30, 31, 40, 41, 50, 51, 60, 61];

  return (
    <HomeModal linkText="What is a Combined ROM?" modalID="combined-modal">
      <h3 className="font-bold text-lg">What's a Combined ROM?</h3>
      <p className="pt-4">
        This is an older ROM format that saw use with FightCade 1 and older
        versions of Mame and Final Burn Alpha. It's also the ROM format used in
        a few different modding tools such as X.C.O.P.Y or the Stardust Sound
        Patcher.
      </p>
      <p className="pt-4">
        Each file holds a little over 8MB of data, ranging in use from assembly
        code to sound effects, palette data, etc.
      </p>
      <div className="pt-4 flex flex-wrap gap-2 justify-between">
        {combinedFiles.map((num) => (
          <div className="card card-border bg-base-100" key={num}>
            <div className="card-body flex justify-center items-center">
              <p className="text-lg font-bold">{num}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-4">
        <details
          className="collapse bg-base-100 border border-base-300"
          name="my-accordion-det-1"
        >
          <summary className="collapse-title font-semibold">10 file</summary>
          <div className="collapse-content text-sm">
            Contains the assembly code for the game among other things such as
            attack properties and song data.
          </div>
        </details>
        <details
          className="collapse bg-base-100 border border-base-300"
          name="my-accordion-det-1"
        >
          <summary className="collapse-title font-semibold">20 file</summary>
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
            30/31 files
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
            40/41/50/51/60/61 files
          </summary>
          <div className="collapse-content text-sm">
            Primarily graphics and palette data. The 51 file is only used in
            Second Impact, Heritage for the Future, and Third Strike. The 60/61
            files are exclusively used in Third Strike.
          </div>
        </details>
      </div>
    </HomeModal>
  );
}

export default CombinedModal;
