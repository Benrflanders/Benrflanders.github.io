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
    <article className="flex flex-col rounded-2xl border border-white/[0.08] bg-slate-900/50 p-6 shadow-card backdrop-blur-sm transition duration-300 hover:border-cyan-500/15 hover:shadow-card-hover">
      <h3 className="font-display text-xl font-semibold text-slate-100">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
        {content}
      </p>
      <div className="mt-6 flex justify-end border-t border-white/[0.06] pt-5">
        {url ? (
          <a
            href={url}
            className="btn-secondary text-xs sm:text-sm"
            rel="noopener noreferrer"
            target="_blank"
          >
            {buttonName}
          </a>
        ) : (
          <span className="rounded-xl border border-dashed border-white/15 px-4 py-2 text-xs font-medium text-slate-500">
            Coming soon
          </span>
        )}
      </div>
    </article>
  );
}
