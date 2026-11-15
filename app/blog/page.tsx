
import Link from "next/link";

// TypeScript : structure d'un article
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
    const res = await fetch("http://localhost:3000/api/articles", {
      cache: "no-store",
    });

    // Vérifier si la réponse est correcte
    if (!res.ok) {
      throw new Error("Impossible de récupérer les articles");
    }

    const articles: Article[] = await res.json();

    return articles;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des articles :",
      error
    );

    return [];
  }
}

// Page principale du blog
export default async function BlogPage() {
  const articles = await getArticles();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">

        {/* En-tête de la page blog */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Mon Blog
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez mes {articles.length} articles sur le développement web,
            mes apprentissages et mes réflexions.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6" />
        </div>

        {/* Message si aucun article n'est disponible */}
        {articles.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-4xl" aria-hidden="true">
                📝
              </span>
            </div>

            <h3 className="text-xl text-gray-600">
              Aucun article disponible
            </h3>

            <p className="text-gray-500 mt-2">
              Les articles arrivent bientôt !
            </p>
          </div>
        ) : (
          /* Grille des articles */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/blog/${article.slug}`}
                className="block"
              >
                <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer hover:-translate-y-1">

                  {/* Image placeholder avec gradient selon la catégorie */}
                  <div
                    className={`h-48 bg-gradient-to-br ${
                      article.category === "Tech"
                        ? "from-blue-400 to-purple-500"
                        : "from-green-400 to-blue-500"
                    } relative`}
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />

                    {/* Catégorie */}
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                    </div>

                    {/* Temps de lecture */}
                    <div className="absolute top-4 right-4 text-white bg-black/30 px-2 py-1 rounded text-sm">
                      {article.readTime}
                    </div>
                  </div>

                  {/* Contenu de la carte */}
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {article.title}
                    </h2>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Informations de publication */}
                    <div className="flex justify-between items-center text-sm text-gray-500 gap-2">
                      <span>
                        {new Date(article.date).toLocaleDateString("fr-FR")}
                      </span>

                      <span>Par {article.author}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
