import matter from "gray-matter";
import marked from "marked";

export async function getAllPost() {
  const context = require.context("../../_posts", false, /\.md$/);
  const posts = [];

  for (const key of context.keys()) {
    const post = key.slice(2);
    const content = await import(`../../_posts/${post}`);
    const meta = matter(content.default);

    posts.push({
      slug: post.replace(".md", ""),
      date: meta.data.date,
      title: meta.data.title,
      description: meta.data.description,
      tags: meta.data.tags,
    });
  }

  return posts;
}

export async function getPostBySlug(slug) {
  const fileContent = await import(`../../_posts/${slug}.md`);

  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://thumbnail-89915mj4v.vercel.app";

  const meta = matter(fileContent.default);
  const content = marked(meta.content);

  const thumbnailUrl = `${baseUrl}/api/thumbnail?title=${
    meta.data.title
  }&thumbnail_bg=${encodeURIComponent(meta.data.thumbnail_bg)}`;

  return {
    title: meta.data.title,
    description: meta.data.description,
    thumbnailUrl,
    content,
  };
}
