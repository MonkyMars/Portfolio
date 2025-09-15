import Link from "next/link";

const Footer = () => (
  <footer className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 py-8">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Levi Noppers. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="https://github.com/MonkyMars"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-sm font-medium transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          <Link
            href="mailto:levi.laptop@hotmail.com"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-sm font-medium transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
