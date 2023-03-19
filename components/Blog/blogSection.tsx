type BlogSectionProps = {
  sectionName: string;
  children: JSX.Element[] | JSX.Element;
};

export default function BlogSection({
  sectionName,
  children,
}: BlogSectionProps) {
  // navigation and clear separatation of different categories of posts
  return (
    <div className="my-4 mx-8 border-secondary border-4 p-4">
      <h1 className="text-4xl">{sectionName}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2"> {children}</div>
    </div>
  );
}
