import { getAllPost, getPostBySlug } from "./api/posts";
import Blog from "../components/Blog";

export default function Post({ title, description, content, thumbnailUrl }) {
  return (
    <Blog
      title={title}
      description={description}
      content={content}
      thumbnailUrl={thumbnailUrl}
    />
  );
}

export async function getStaticProps(context) {
  return {
    props: await getPostBySlug(context.params.slug)
  };
}

export async function getStaticPaths() {
  let paths = await getAllPost();

  paths = paths.map(post => {
    return {
      params: { slug: post.slug }
    };
  });

  return {
    paths: paths,
    fallback: false
  };
}
