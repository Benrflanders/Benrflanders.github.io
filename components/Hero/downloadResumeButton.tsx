"use client";
import { FaFileDownload } from "react-icons/fa";

export default function DownloadResumeButton() {
  return (
    <button
      className="h-14 btn btn-square btn-secondary w-3/5 max-w-xs md:max-w-sm flex flex-col items-center justify-center"
      onClick={() => {
        window.open("/Ben_Flanders_Resume.pdf", "_blank");
      }}
    >
      <div className="flex flex-row">
        <p className="my-auto text-lg">Download Resume</p>
        <FaFileDownload className="my-auto mx-auto self-center h-10 w-10 ml-2" />
      </div>
    </button>
  );
}
