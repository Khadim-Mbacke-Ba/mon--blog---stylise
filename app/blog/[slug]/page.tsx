
import Link from "next/link";
import { notFound } from "next/navigation";

// Structure TypeScript d'un article
type Article = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
};

// Fonction pour récupérer les articles depuis l'API
async function getArticles(): Promise<Article[]> {
  try {
    const res = await fetch("http://localhost:3001/api/articles", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Erreur lors de la récupération des articles");
    }

    const articles: Article[] = await res.json();

    return articles;
  } catch (error) {
    console.error("Erreur API :", error);
    return [];
  }
}

// Page dynamique d'un article
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Récupérer le slug depuis l'URL
  const { slug } = await params;

  // Récupérer les articles depuis l'API
  const articles = await getArticles();

  // Rechercher l'article correspondant au slug
  const article = articles.find((item) => item.slug === slug);

  // Afficher une page 404 si l'article n'existe pas
  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">

        {/* Bouton retour au blog */}
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors duration-300"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>

          Retour au blog
        </Link>

        {/* Article */}
        <article className="bg-white rounded-xl shadow-lg overflow-hidden">

          {/* En-tête */}
          <header
            className={`h-64 relative bg-gradient-to-br ${
              article.category === "Tech"
                ? "from-blue-500 to-purple-600"
                : "from-green-500 to-blue-600"
            }`}
          >
            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute bottom-8 left-8 right-8">
              <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                {article.category}
              </span>

              <h1 className="text-4xl font-bold text-white mb-2">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center text-white/90 gap-4">
                <span>
                  {new Date(article.date).toLocaleDateString("fr-FR")}
                </span>

                <span aria-hidden="true">•</span>

                <span>{article.readTime} de lecture</span>
              </div>
            </div>
          </header>

          {/* Contenu de l'article */}
          <div className="p-8">
            <div className="max-w-none">

              <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line mb-8">
                {article.content}
              </p>

              {/* Informations complémentaires */}
              <div className="border-t border-gray-200 pt-6">
                <p className="text-gray-500 text-sm">
                  Publié par{" "}
                  <span className="font-semibold text-gray-700">
                    {article.author}
                  </span>
                </p>
              </div>

            </div>

            {/* Pied de l'article */}
            <footer className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">

                <p className="text-sm text-gray-500">
                  Article publié le{" "}
                  {new Date(article.date).toLocaleDateString("fr-FR")}
                </p>

                <Link
                  href="/blog"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Voir plus d'articles
                </Link>

              </div>
            </footer>
          </div>
        </article>
      </div>
    </div>
  );
}
