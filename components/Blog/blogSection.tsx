type BlogSectionProps = {
  sectionName: string;
  children: JSX.Element;
};

export default function BlogSection({
  sectionName,
  children,
}: BlogSectionProps) {
  // navigation and clear separatation of different categories of posts
  return (
    <>
      <h1 className="text-4xl">{sectionName}</h1>
      {children}
    </>
  );
}
