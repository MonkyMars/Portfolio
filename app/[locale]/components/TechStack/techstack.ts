import { _Translator } from "next-intl";

interface TechStackItem {
  label: string;
  iconSrc: string;
  experience: number;
  note: string;
  className?: string;
  type: "framework" | "service" | "language" | "library" | "tool";
}

export const getTechStack = (t: _Translator): TechStackItem[] => {
  return [
    {
      label: t("items.nextjs.label"),
      iconSrc: "nextjs",
      experience: 2023,
      note: t("items.nextjs.note"),
      type: "framework",
    },
    {
      label: t("items.tailwindcss.label"),
      iconSrc: "tailwindcss",
      experience: 2024,
      note: t("items.tailwindcss.note"),
      type: "framework",
    },
    {
      label: t("items.typescript.label"),
      iconSrc: "typescript",
      experience: 2023,
      note: t("items.typescript.note"),
      type: "language",
    },
    {
      label: t("items.git.label"),
      iconSrc: "git",
      experience: 2023,
      note: t("items.git.note"),
      type: "tool",
    },
    {
      label: t("items.supabase.label"),
      iconSrc: "supabase",
      experience: 2024,
      note: t("items.supabase.note"),
      type: "service",
    },
    {
      label: t("items.go.label"),
      iconSrc: "go",
      experience: 2025,
      note: t("items.go.note"),
      type: "language",
    },
    {
      label: t("items.rust.label"),
      iconSrc: "rust",
      experience: 2025,
      note: t("items.rust.note"),
      type: "language",
      className: "invert",
    },
  ];
};
