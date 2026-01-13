"use server";

import Link from "next/link";
import { getTranslations } from "next-intl/server";

const Footer = async ({ locale }: { locale: string }) => {
  const t = await getTranslations({ locale, namespace: "footer" });

  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {t("copyright", { year: new Date().getFullYear() })}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/MonkyMars"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-sm font-medium transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("github")}
            </Link>
            <Link
              href="mailto:levi.laptop@hotmail.com"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-sm font-medium transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("email")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
