export default async function BlogPost({ params }) {
  const { slug } = params;

  // Fetch the blog post from the API
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  const post = await res.json();

  if (!post.id) {
    return <div className="p-4">Post not found!</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
  