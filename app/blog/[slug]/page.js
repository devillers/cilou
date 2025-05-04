'use client';

import { useEffect, useState } from 'react';
import { useParams, notFound } from 'next/navigation';

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!slug) return;

    fetch(`http://localhost:8888/pause_reflexo/wp-json/wp/v2/blog?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data || data.length === 0) {
          setError(true);
        } else {
          setPost(data[0]);
        }
      })
      .catch(() => setError(true));
  }, [slug]);

  if (error) return <div className="p-6">Article introuvable.</div>;
  if (!post) return <div className="p-6">Chargement…</div>;

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
