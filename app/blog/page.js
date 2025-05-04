//app/blog/page.js


import HeroHeader from "../components/HeroHeader";

export default async function BlogList() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API}/wp-json/wp/v2/blog`);

  const posts = await res.json();

  return (
    <div className="relative">
      <HeroHeader />

      <section className="max-w-5xl mx-auto mb-12 p-4">
        <ul className="py-4">
          <li>
            <h3 className=" text-5xl sm:text-3xl md:text-5xl uppercase font-thin">
              Nos articles de blog
            </h3>
          </li>
          <li>
            <h2 className=" text-2xl sm:text-3xl mt-2 md:text-3xl uppercase font-thin">
              nos conseils, nos astuces ...
            </h2>
          </li>
        </ul>

        {/* <h1
          className="text-2xl font-bold mb-4 text-[#009996]"
          style={{ fontFamily: "Capriola, sans-serif" }}
        >
          Blog
        </h1> */}

        <div className="space-y-6 mt-8">
          {posts.map((post) => (
            <article key={post.id} className="border-b pb-6">
              <a href={`/blog/${post.slug}`}>
                <h2
                  className="text-xl font-semibold text-[#bd9254] hover:underline"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
              </a>
              <div
                className="prose mt-2 text-sm text-gray-700"
                dangerouslySetInnerHTML={{ __html: post.excerpt?.rendered || '' }}
              />
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
