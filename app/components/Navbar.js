
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">
                MB
              </span>
            </div>

            <span className="text-xl font-bold text-gray-800">
              Mon Blog
            </span>
          </Link>

          {/* Menu de navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-blue-600 transition duration-300 font-medium"
            >
              Accueil
            </Link>

            <Link
              href="/about"
              className="text-gray-600 hover:text-purple-600 transition duration-300 font-medium"
            >
              À propos
            </Link>

            <Link
              href="/blog"
              className="text-gray-600 hover:text-green-600 transition duration-300 font-medium"
            >
              Blog
            </Link>
          </div>

          {/* Bouton mobile */}
          <div className="md:hidden">
            <button
              type="button"
              aria-label="Ouvrir le menu de navigation"
              className="text-gray-600 hover:text-blue-600"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}
