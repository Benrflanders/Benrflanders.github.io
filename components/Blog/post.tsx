type BlogPostProps = {
  postID: string;
};

export default function Post({ postID }: BlogPostProps) {
  return <div>Post: {postID}</div>;
}
