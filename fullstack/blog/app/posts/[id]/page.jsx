import axios from "axios";
import Link from "next/link";

const PostPage = async ({ params }) => {
  const { id } = await params;
  let post = null;

  try {
    const res = await axios.get(`http://localhost:3000/api/posts/${id}`);
    post = res.data;
    // console.log(post);
  } catch (error) {
    console.error("Error fetching post: ", error);
  }

  return (
    <main>
      <Link href="/">Back to Blogs</Link>
      <div className="mt-10">
        <h1>{post.title}</h1>
        <p>
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <h2>{post.excerpt}</h2>
        <div>{post.content}</div>
      </div>
    </main>
  );
};

export default PostPage;
