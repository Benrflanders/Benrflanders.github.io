import type { ReactNode } from "react";

type BlogSectionProps = {
  sectionName: string;
  children: ReactNode;
};

export default function BlogSection({
  sectionName,
  children,
}: BlogSectionProps) {
  return (
    <div className="mb-16 px-4 sm:px-6 lg:px-8">
      <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
        {sectionName}
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">{children}</div>
    </div>
  );
}
