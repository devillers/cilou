import { notFound } from "next/navigation";

export default async function BlogPost({ params }) {
  const { slug } = params;

  const res = await fetch(`http://localhost:8888/pause_reflexo/wp-json/wp/v2/blog?slug=${slug}`, {
    cache: "no-store",
  });

  const posts = await res.json();

  if (!posts || posts.length === 0) {
    notFound();
  }

  const post = posts[0];

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1
        className="text-3xl font-bold mb-4"
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </main>
  );
}

export async function generateMetadata({ params }) {
  const res = await fetch(`http://localhost:8888/pause_reflexo/wp-json/wp/v2/blog?slug=${params.slug}`);
  const posts = await res.json();

  if (!posts || posts.length === 0) return { title: "Article introuvable" };

  const post = posts[0];
  return {
    title: post.title.rendered,
    description: post.excerpt?.rendered.replace(/<[^>]+>/g, "").slice(0, 150),
  };
}
