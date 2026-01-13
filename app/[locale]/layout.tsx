import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Locale, locales } from "@/i18n/index";
import React from "react";
import { Metadata } from "next";
import { Poppins, Doto } from "next/font/google";
import { Viewport } from "next/types";
import "../globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const doto = Doto({
  subsets: ["latin"],
  weight: ["400", "900"],
  style: ["normal"],
  variable: "--font-doto",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Levi Noppers | Full Stack Developer - Go, Rust & TypeScript",
    template: "%s | Levi Noppers",
  },
  description:
    "Portfolio of Levi Noppers, a 15-year-old Full Stack Developer from the Netherlands specializing in backend development with Go and Rust. Building fast, scalable web applications with Next.js, TypeScript, and modern technologies. Former Q42 intern.",
  keywords: [
    "Levi Noppers",
    "full stack developer Netherlands",
    "Go developer",
    "Rust developer",
    "backend developer",
    "TypeScript expert",
    "Next.js developer",
    "web developer portfolio",
    "software engineer",
    "React developer",
    "Tailwind CSS",
    "Supabase",
    "PostgreSQL",
    "Frame The Beat",
    "Q42 intern",
    "full stack web development",
    "monkymars github",
    "Dutch developer",
    "young developer",
    "responsive web design",
    "REST API",
    "database design",
    "Git",
    "Linux developer",
    "CachyOS",
    "freelance developer",
    "software development Netherlands",
    "web applications",
    "scalable backend systems",
  ],
  authors: [{ name: "Levi Noppers", url: "https://www.levinoppers.nl" }],
  creator: "Levi Noppers",
  publisher: "Levi Noppers",
  manifest: "/site.webmanifest",
  applicationName: "Levi Noppers Portfolio",
  referrer: "origin-when-cross-origin",
  category: "technology",
  classification: "Portfolio Website",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Levi Noppers | Full Stack Developer - Go, Rust & TypeScript",
    description:
      "15-year-old Full Stack Developer from the Netherlands building fast, scalable applications with Go, Rust, and TypeScript. Former Q42 intern passionate about backend systems and clean code.",
    type: "profile",
    url: "https://www.levinoppers.nl",
    images: [
      {
        url: "https://www.levinoppers.nl/code.png",
        width: 1200,
        height: 630,
        alt: "Levi Noppers - Full Stack Developer Portfolio - Go, Rust & TypeScript Expert",
      },
    ],
    locale: "nl_NL",
    alternateLocale: ["en_US"],
    siteName: "Levi Noppers Portfolio",
    countryName: "Netherlands",
  },
  twitter: {
    card: "summary_large_image",
    title: "Levi Noppers | Full Stack Developer - Go, Rust & TypeScript",
    description:
      "15-year-old Full Stack Developer specializing in backend with Go & Rust. Building scalable web apps. Former Q42 intern. Check out my projects!",
    images: [
      {
        url: "https://www.levinoppers.nl/code.png",
        alt: "Levi Noppers - Full Stack Developer Portfolio",
      },
    ],
    creator: "@levinoppers",
    site: "@levinoppers",
  },
  icons: {
    icon: [
      { url: "/code.png", sizes: "any" },
      { url: "/code.png", type: "image/png", sizes: "32x32" },
      { url: "/code.png", type: "image/png", sizes: "16x16" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/code.png",
      },
    ],
  },
  alternates: {
    canonical: "https://www.levinoppers.nl",
    languages: {
      "en-US": "https://www.levinoppers.nl/en",
      "nl-NL": "https://www.levinoppers.nl/nl",
      en: "https://www.levinoppers.nl/en",
      nl: "https://www.levinoppers.nl/nl",
    },
  },
  verification: {
    google: "verification_token_placeholder",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "NL",
    "geo.placename": "Netherlands",
  },
  metadataBase: new URL("https://www.levinoppers.nl"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f0f9ff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  colorScheme: "light dark",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale as Locale);

  // Providing all messages to the client
  const messages = await getMessages({ locale });

  return (
    <html
      lang={locale}
      dir="ltr"
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var mode = localStorage.getItem('theme');
                  var systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (mode === 'dark' || (!mode && systemPrefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Levi Noppers",
              url: "https://www.levinoppers.nl",
              email: "levinoppers@proton.me",
              image: "https://www.levinoppers.nl/code.png",
              jobTitle: "Full Stack Developer",
              description:
                "Full Stack Developer specializing in backend development with Go, Rust, and TypeScript. Building scalable web applications and backend systems.",
              knowsAbout: [
                "Go Programming",
                "Rust Programming",
                "TypeScript",
                "Next.js",
                "React",
                "Backend Development",
                "Web Development",
                "Supabase",
                "PostgreSQL",
                "Tailwind CSS",
                "Git",
                "Linux",
                "REST API Design",
                "Database Design",
              ],
              knowsLanguage: ["English", "Dutch"],
              nationality: "Dutch",
              address: {
                "@type": "PostalAddress",
                addressCountry: "NL",
                addressRegion: "Netherlands",
              },
              alumniOf: {
                "@type": "Organization",
                name: "Q42",
                sameAs: "https://www.q42.nl",
              },
              sameAs: [
                "https://github.com/monkymars",
                "https://twitter.com/levinoppers",
              ],
              workExample: [
                {
                  "@type": "CreativeWork",
                  name: "Frame The Beat",
                  description:
                    "Album cover collection platform built with Next.js, TypeScript, and Supabase",
                  url: "https://github.com/MonkyMars/framethebeat/",
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Levi Noppers Portfolio",
              alternateName: "Levi Noppers",
              url: "https://www.levinoppers.nl",
              description:
                "Portfolio website showcasing projects and expertise of Full Stack Developer Levi Noppers",
              inLanguage: "en-US",
              author: {
                "@type": "Person",
                name: "Levi Noppers",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://www.levinoppers.nl/#tech-stack?search={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.levinoppers.nl",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "About",
                  item: "https://www.levinoppers.nl#about",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Experience",
                  item: "https://www.levinoppers.nl#experience",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Projects",
                  item: "https://www.levinoppers.nl#projects",
                },
                {
                  "@type": "ListItem",
                  position: 5,
                  name: "Tech Stack",
                  item: "https://www.levinoppers.nl#tech-stack",
                },
                {
                  "@type": "ListItem",
                  position: 6,
                  name: "Likes",
                  item: "https://www.levinoppers.nl#likes",
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfilePage",
              mainEntity: {
                "@type": "Person",
                name: "Levi Noppers",
                alternateName: "monkymars",
                description: "Full Stack Developer from the Netherlands",
                image: "https://www.levinoppers.nl/code.png",
              },
              dateCreated: "2024-01-01",
              dateModified: new Date().toISOString().split("T")[0],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What programming languages does Levi Noppers specialize in?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "I specialize in Go and Rust for backend development, and TypeScript for full-stack web development. I have extensive experience with Next.js, React, and modern web technologies.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Where is Levi Noppers based?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Levi Noppers is based in the Netherlands, Europe.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What kind of projects has Levi Noppers worked on?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "I have worked on various projects including Frame The Beat (album cover platform), e-commerce webstores, electronic learning environments, and personal galleries. I specialize in backend systems and full-stack web applications.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is Levi Noppers' experience level?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "I've started programming in 2022 and have rapidly progressed from Python to modern web development. I completed an 8-week internship at Q42 in early 2025 and I'm currently working as an independent full-stack developer focusing on backend development.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`antialiased bg-gray-100 dark:bg-slate-950 text-gray-900 dark:text-gray-100 transition-colors ${poppins.variable} ${doto.variable}`}
        suppressHydrationWarning
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
