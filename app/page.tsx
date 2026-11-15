
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Container principal */}
      <div className="container mx-auto px-4 py-16">

        {/* En-tête */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Bienvenue sur mon blog !
          </h1>

          <p className="text-xl text-gray-600 mb-2">
            Ceci est ma première page Next.js
          </p>

          <p className="text-lg text-gray-500">
            Je suis très content d'apprendre Next.js et Tailwind CSS.
          </p>
        </div>

        {/* Carte de présentation */}
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="text-center">

            {/* Logo du blog */}
            <div className="w-20 h-20 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">
                Blog
              </span>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Mon premier blog Next.js
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Je documente mon apprentissage du développement web moderne.
              Suivez-moi dans cette aventure passionnante !
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}
