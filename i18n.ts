import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { locales, defaultLocale, type Locale } from "@/i18n/index";

export default getRequestConfig(async ({ locale }) => {
  const currentLocale = locale || defaultLocale; // fallback manually

  if (!locales.includes(currentLocale as Locale)) notFound();

  return {
    locale: currentLocale,
    messages: (await import(`@/i18n/${currentLocale}.json`)).default,
  };
});
