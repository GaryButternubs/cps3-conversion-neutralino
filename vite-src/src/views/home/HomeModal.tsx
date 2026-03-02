import { ReactNode } from "react";

function HomeModal({
  linkText,
  modalID,
  children,
}: {
  linkText: string;
  modalID: string;
  children: ReactNode;
}) {
  if (modalID === "") return <></>;

  return (
    <>
      <button
        className="link link-info"
        onClick={() => {
          const modal: HTMLDialogElement | null = document.querySelector(
            `#${modalID}`,
          );
          if (modal) modal.showModal();
        }}
      >
        {linkText}
      </button>
      <dialog id={modalID} className="modal">
        <div className="modal-box max-h-[90vh]">
          {children}
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default HomeModal;
