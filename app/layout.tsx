import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Doto, Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

const doto = Doto({
  subsets: ['latin'],
  weight: ['400', '900'],
  variable: '--font-doto',
});

export const metadata: Metadata = {
  title: "Levi Noppers | Full Stack Developer",
  description:
    "Portfolio of Levi Noppers. Full Stack Developer specializing in creating modern, responsive web applications with React, Next.js, and Tailwind CSS.",
  keywords: [
    "full stack developer",
    "web developer",
    "software engineer",
    "software developer",
    "React developer",
    "Node.js",
    "Next.js",
    "web applications",
    "React",
    "JavaScript",
    "TypeScript",
    "portfolio",
    "levi",
    "noppers",
    "levi noppers",
    "frontend developer",
    "backend developer",
    "web design",
    "responsive design",
    "UI/UX",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "REST API",
    "GraphQL",
    "database",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "agile development",
  ],
  authors: [{ name: "Levi Noppers", url: "https://levinoppers.nl" }],
  creator: "Levi Noppers",
  publisher: "Levi Noppers",
  manifest: "/site.webmanifest",
  applicationName: "Levi Noppers Portfolio",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Levi Noppers | Full Stack Developer",
    description:
      "Full-stack developer building clean, responsive web apps with Next.js, TypeScript, and modern tooling. I focus on shipping real projects that feel fast, look good, and solve actual problems.",
    type: "website",
    url: "https://levinoppers.nl",
    images: [
      {
        url: "https://levinoppers.nl/code.png",
        width: 1200,
        height: 630,
        alt: "Levi Noppers - Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    siteName: "Levi Noppers Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Levi Noppers | Full Stack Developer",
    description:
      "Full Stack Developer crafting exceptional web experiences. View my portfolio to see my latest projects and technical expertise.",
    images: [
      {
        url: "https://levinoppers.nl/code.png",
        alt: "Levi Noppers - Full Stack Developer Portfolio",
      },
    ],
    creator: "@levinoppers",
    site: "@levinoppers",
  },
  icons: {
    icon: [
      { url: "/code.png", sizes: "any" },
      { url: "/code.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  alternates: {
    canonical: "https://www.levinoppers.nl",
    languages: {
      "en-US": "https://www.levinoppers.nl",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://www.levinoppers.nl"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  themeColor: "#f0f9ff",
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className="scroll-smooth" suppressHydrationWarning>
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
              "@type": "ItemList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "About Levi Noppers",
                  url: "https://levinoppers.nl#about",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Experience",
                  url: "https://levinoppers.nl#experience",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Portfolio Projects",
                  url: "https://levinoppers.nl#projects",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Tech Stack",
                  url: "https://levinoppers.nl#techstack",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`antialiased bg-gray-100 dark:bg-slate-900 text-gray-900 dark:text-gray-100 transition-colors ${poppins.variable} ${doto.variable}`}>
        {children}
      </body>
    </html>
  );
}
