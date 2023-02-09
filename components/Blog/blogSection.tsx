type BlogSectionProps = {
  sectionName: string;
};

export default function BlogSection({ sectionName }: BlogSectionProps) {
  // navigation and clear separatation of different categories of posts
  return <div>{sectionName}</div>;
}
