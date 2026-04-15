"use client";
import { FaFileDownload } from "react-icons/fa";

export default function DownloadResumeButton() {
  return (
    <button
      type="button"
      aria-label="Download resume PDF in a new tab"
      className="btn-secondary flex h-auto min-h-[3.25rem] w-full max-w-md flex-row items-center justify-center gap-2 py-3 sm:w-auto"
      onClick={() => {
        window.open("/Ben_Flanders_Resume.pdf", "_blank");
      }}
    >
      <span className="text-sm font-semibold">Download Resume</span>
      <FaFileDownload className="h-5 w-5 shrink-0 opacity-90" aria-hidden />
    </button>
  );
}
