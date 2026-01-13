"use server";

import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import Link from "next/link";

import { getTranslations } from "next-intl/server";

const EMAIL = "levinoppers@proton.me";

const Aside = async ({ locale }: { locale: string }) => {
  const t = await getTranslations({ locale, namespace: "aside" });

  return (
    <aside
      className="md:col-span-4 lg:col-span-3"
      aria-label="Profile information"
      itemScope
      itemType="https://schema.org/Person"
    >
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6 max-w-sm mx-auto">
        {/* Header Section */}
        <div className="text-center mb-6">
          <h1
            className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2 font-doto"
            itemProp="name"
          >
            {t("name")}
          </h1>
          <p
            className="text-primary-600 dark:text-primary-400 font-medium"
            itemProp="jobTitle"
          >
            {t("role")}
          </p>
        </div>

        {/* GitHub Button */}
        <Link
          href="https://www.github.com/monkymars"
          prefetch
          target="_blank"
          className="w-full flex items-center justify-center gap-3 bg-gray-900 dark:bg-gray-800 text-white py-3 px-4 rounded-lg font-medium font-doto transition-colors duration-200 hover:bg-gray-800 dark:hover:bg-gray-700 mb-6"
          itemProp="sameAs"
          aria-label="Visit GitHub profile"
        >
          {t("github")}
          <Image
            src="/icons/github.png"
            alt="GitHub"
            width={18}
            height={18}
            className="invert opacity-90"
          />
        </Link>

        {/* Contact Information */}
        <div
          className="space-y-4"
          itemProp="contactPoint"
          itemScope
          itemType="https://schema.org/ContactPoint"
        >
          <Link
            className="block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors duration-200 border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
            href={`mailto:${EMAIL}`}
            prefetch
            target="_blank"
            itemProp="email"
            aria-label="Send email to Levi Noppers"
          >
            <div className="flex items-center gap-3 mb-2">
              <Mail
                className="text-primary-500 dark:text-primary-400"
                size={18}
                strokeWidth={1.5}
              />
              <span className="font-extrabold text-gray-900 dark:text-gray-100 font-doto">
                {t("email")}
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 pl-7">
              {EMAIL}
            </p>
          </Link>

          <Link
            className="block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors duration-200 border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
            href="https://www.google.com/maps/place/Nederland"
            prefetch
            target="_blank"
            aria-label="View location on Google Maps"
          >
            <div className="flex items-center gap-3 mb-2">
              <MapPin
                className="text-primary-500 dark:text-primary-400"
                size={18}
                strokeWidth={1.5}
              />
              <span className="font-extrabold text-gray-900 dark:text-gray-100 font-doto">
                {t("location")}
              </span>
            </div>
            <p
              className="text-sm text-gray-600 dark:text-gray-400 pl-7"
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <span itemProp="addressCountry">{t("country")}</span>,{" "}
              {t("continent")}
            </p>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
