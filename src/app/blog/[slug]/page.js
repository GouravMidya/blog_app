const mockPosts = [
    { id: 1, title: "Post 1", slug: "post-1", content: "This is the content for Post 1." },
    { id: 2, title: "Post 2", slug: "post-2", content: "This is the content for Post 2." },
  ];
  
  export default function BlogPost({ params }) {
    const { slug } = params;
  
    const post = mockPosts.find((post) => post.slug === slug);
  
    if (!post) {
      return <div className="p-4">Post not found!</div>;
    }
  
    return (
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p>{post.content}</p>
      </div>
    );
  }
  