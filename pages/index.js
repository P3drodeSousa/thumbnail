import { getAllPost } from "./api/posts";
import Link from "next/link";

export default function Home({ posts }) {
  return (
    <div>
      <h1>Blog de Ramon Rodriguez</h1>
      {posts.map((post, id) =>
        <div key={id}>
          <Link href={post.slug}>
            <a>
              {post.title}
            </a>
          </Link>
          <span>
            {post.date}
          </span>
          <span>
            {post.tags}
          </span>
          <p>
            {post.description}
          </p>
        </div>
      )}
    </div>
  );
}
export const getStaticProps = async () => {
  const allPosts = await getAllPost();

  return {
    props: {
      posts: allPosts
    }
  };
};
