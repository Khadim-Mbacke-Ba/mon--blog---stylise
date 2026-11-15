
import Link from "next/link";

export default function BlogPage() {
  // Liste des articles
  const articles = [
    {
      slug: "mon-premier-article",
      title: "Mon premier article",
      excerpt:
        "Découvrez comment j'ai commencé mon aventure dans le blogging...",
      date: "15 Janvier 2025",
      readTime: "3 min",
      category: "Personnel",
    },
    {
      slug: "apprendre-nextjs",
      title: "Comment apprendre Next.js",
      excerpt:
        "Guide complet pour maîtriser Next.js étape par étape...",
      date: "16 Janvier 2025",
      readTime: "8 min",
      category: "Tech",
    },
    {
      slug: "react-vs-nextjs",
      title: "React vs Next.js",
      excerpt:
        "Comparaison détaillée entre React et Next.js pour choisir...",
      date: "17 Janvier 2025",
      readTime: "5 min",
      category: "Tech",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">

        {/* En-tête de la page blog */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Mon Blog
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez mes derniers articles sur le développement web,
            mes apprentissages et mes réflexions.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6"></div>
        </div>

        {/* Grille des articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
            >
              <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer">

                {/* Image placeholder */}
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 relative">

                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>

                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>

                </div>

                {/* Contenu de l'article */}
                <div className="p-6">

                  <h2 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {article.title}
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Informations de l'article */}
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{article.date}</span>

                    <span>{article.readTime} de lecture</span>
                  </div>

                </div>
              </article>
            </Link>
          ))}

        </div>
      </div>
    </div>
  );
}
