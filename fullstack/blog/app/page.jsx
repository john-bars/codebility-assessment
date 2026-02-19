import axios from "axios";
import Link from "next/link";

const HomePage = async () => {
  let posts = [];
  try {
    const res = await axios.get("http://localhost:3000/api/posts");
    // console.log("response: ", res);
    posts = res.data;
    // console.log("posts: ", posts);
  } catch (error) {
    console.error("Error fetching posts: ", error);
  }
  return (
    <main>
      <h1 className="mb-10">Blogs</h1>

      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        <div className="flex flex-col gap-10">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/posts/${post.id}`}
              className="cursor-pointer "
            >
              <h1>{post.title}</h1>
              <p>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="mt-2 ">{post.excerpt}</p>
              <p className="opacity-80 hover:opacity-100">Read More &gt; </p>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
};

export default HomePage;
