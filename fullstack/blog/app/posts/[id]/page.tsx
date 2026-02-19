type PostPageProps = {
  params: Promise<{ id: string }>;
};

const Post = async ({ params }: PostPageProps) => {
  const { id } = await params;
  return (
    <div>
      <h1>Params Test</h1>
      <p>Post ID: {id}</p>
    </div>
  );
};

export default Post;
