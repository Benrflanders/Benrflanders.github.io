type BlogEntryProps = {
  children: string;
};

export default function BlogEntry({ children }: BlogEntryProps) {
  return <div>Entry: {children}</div>;
}
