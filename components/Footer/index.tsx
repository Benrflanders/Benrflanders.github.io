import Image from "next/image";

export default function Footer() {
  // A section that includes social media links, contact information, and a copyright notice.
  return (
    <footer className="footer grid grid-cols-2 w-full content-between text-accent-content  bg-neutral-200 min-h-96">
      <div className="flex pl-8 p-4 bg-neutral-200 place-content-start">
        <p>All Rights Reserved by Benjamin Flanders, 2023</p>
      </div>
      <div className="flex flex-row pr-8 bg-neutral-200 justify-self-end">
        <div>
          <a
            href="https://github.com/Benrflanders"
            className="btn btn-ghost btn-square"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src="/github-mark.svg"
              height={30}
              width={30}
              alt="Link to github.com"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/benjamin-flanders/"
            className="btn btn-ghost btn-square"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src="/LI-In-Bug.png"
              height={30}
              width={30}
              alt="Link to linkedin.com"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
