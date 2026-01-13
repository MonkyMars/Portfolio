"use server";

import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

const Likes = async ({ locale }: { locale: string }) => {
  const t = await getTranslations({ locale, namespace: "likes" });

  return (
    <section
      className="bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-6"
      id="likes"
      aria-labelledby="likes-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-1">
          <h2
            id="likes-heading"
            className="text-2xl font-semibold text-gray-900 dark:text-gray-100 font-doto"
          >
            {t("title")}
          </h2>
          <h2 className="text-2xl font-semibold text-primary-600 dark:text-primary-400 font-doto">
            {t("titleHighlight")}
          </h2>
        </div>

        <div
          className="flex-1 h-px bg-gray-200 dark:bg-gray-700"
          role="separator"
        ></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
        <LikesCard
          label={t("items.go.label")}
          iconSrc="go"
          note={t("items.go.note")}
        />
        <LikesCard
          label={t("items.music.label")}
          iconSrc="spotify"
          note={t("items.music.note")}
        />
        <LikesCard
          label={t("items.linux.label")}
          iconSrc="linux"
          note={t("items.linux.note")}
          link="https://github.com/MonkyMars/dotfiles"
          linkText={t("items.linux.link")}
        />
      </div>
    </section>
  );
};

interface LikesCardProps {
  label: string;
  iconSrc: string;
  note: string;
  link?: string;
  linkText?: string;
}

const LikesCard = ({
  label,
  iconSrc,
  note,
  link,
  linkText,
}: LikesCardProps) => {
  const invertedIcons: string[] = ["spotify"];
  const isInverted = invertedIcons.includes(iconSrc);
  const iconClass = isInverted
    ? "object-contain dark:invert"
    : "object-contain";

  return (
    <div
      className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 transition-colors duration-200 text-center"
      role="listitem"
      itemScope
      itemType="https://schema.org/Thing"
    >
      <div className="w-16 h-16 mx-auto mb-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center">
        <Image
          src={`/icons/${iconSrc}.png`}
          alt={label}
          width={32}
          height={32}
          className={iconClass}
          priority
        />
      </div>

      <h3
        className="text-lg font-extrabold text-gray-900 dark:text-gray-100 mb-3 font-doto"
        itemProp="name"
      >
        {label}
      </h3>

      <p
        className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4"
        itemProp="description"
      >
        {note}
      </p>

      {link && linkText && (
        <Link
          href={link}
          target="_blank"
          className="text-primary-600 dark:text-primary-400 text-sm font-extrabold font-doto hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
        >
          {linkText} →
        </Link>
      )}
    </div>
  );
};

export default Likes;
