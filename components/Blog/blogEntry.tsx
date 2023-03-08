import Link from "next/link";

type BlogEntryProps = {
  title: string;
  content: string;
  url: string | null;
  buttonName: string;
};

export default function BlogEntry({
  title,
  content,
  url,
  buttonName,
}: BlogEntryProps) {
  return (
    <div className="card m-4 bg-neutral-400 shadow-xl">
      <div className="card-body">
        <h1 className="text-2xl card-title text-secondary-content">{title}</h1>
        <h4 className="text-secondary-content">{content}</h4>
        <div className="card-actions justify-end">
          {url ? (
            <Link href={url} className="btn btn-secondary">
              {buttonName}
            </Link>
          ) : (
            <button className="btn btn-secondary">Coming Soon</button>
          )}
        </div>
      </div>
    </div>
  );
}
