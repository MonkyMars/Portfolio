import Link from "next/link";

const Footer = () => (
  <footer className="bg-white border-t border-gray-100 dark:bg-slate-900/95 dark:border-primary-600 py-6" id="footer">
    <div className="container mx-auto px-4 text-center text-gray-600">
      <div className="mb-2"></div>© {new Date().getFullYear()} All Rights
      Reserved By Levi Noppers
    </div>
    <div className="flex justify-center space-x-4 text-primary-500 text-sm mt-4">
      <Link
        prefetch
        href="https://github.com/MonkyMars"
        className="hover:text-primary-600"
        target="_blank"
      >
        GitHub
      </Link>
      <Link
        prefetch
        href="mailto:levi.laptop@hotmail.com"
        className="hover:text-primary-600"
        target="_blank"
      >
        Email
      </Link>
    </div>
  </footer>
);

export default Footer;
