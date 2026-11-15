
import Link from "next/link";
import { notFound } from "next/navigation";

// Données des articles
const articles: Record<
  string,
  {
    title: string;
    date: string;
    readTime: string;
    category: string;
    content: string;
  }
> = {
  "mon-premier-article": {
    title: "Mon premier article",
    date: "15 Janvier 2025",
    readTime: "3 min",
    category: "Personnel",
    content: `Ceci est mon tout premier article ! Je suis très content de partager mes idées avec vous.

Ce blog va me permettre de documenter mon parcours d'apprentissage en développement web.`,
  },

  "apprendre-nextjs": {
    title: "Comment apprendre Next.js",
    date: "16 Janvier 2025",
    readTime: "8 min",
    category: "Tech",
    content: `Next.js est un framework fantastique ! Voici comment l'apprendre étape par étape.

Commencez par maîtriser React, puis explorez les fonctionnalités avancées de Next.js.`,
  },

  "react-vs-nextjs": {
    title: "React vs Next.js",
    date: "17 Janvier 2025",
    readTime: "5 min",
    category: "Tech",
    content: `React et Next.js sont complémentaires. React permet de construire des interfaces avec des composants, tandis que Next.js apporte notamment le routage et les optimisations.

Next.js ajoute le routing, l'optimisation et bien plus encore.`,
  },
};

// Page dynamique
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Récupérer le slug depuis l'URL
  const { slug } = await params;

  // Rechercher l'article
  const article = articles[slug];

  // Vérifier si l'article existe
  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">

        {/* Bouton retour */}
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors duration-300"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
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

          {/* En-tête de l'article */}
          <div className="h-64 bg-gradient-to-br from-blue-500 to-purple-600 relative">

            <div className="absolute inset-0 bg-black/30"></div>

            <div className="absolute bottom-8 left-8 right-8">

              <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                {article.category}
              </span>

              <h1 className="text-4xl font-bold text-white mb-2">
                {article.title}
              </h1>

              <div className="flex items-center text-white/90 space-x-4">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime} de lecture</span>
              </div>

            </div>
          </div>

          {/* Contenu de l'article */}
          <div className="p-8">
            <div className="max-w-none">

              <p className="text-lg text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
                {article.content}
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur.
              </p>

            </div>

            {/* Pied de l'article */}
            <div className="mt-12 pt-8 border-t border-gray-200">

              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">

                <div className="text-sm text-gray-500">
                  Article publié le {article.date}
                </div>

                <Link
                  href="/blog"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Voir plus d'articles
                </Link>

              </div>

            </div>
          </div>
        </article>

      </div>
    </div>
  );
}
