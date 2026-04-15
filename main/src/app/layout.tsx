import type { Metadata } from "next";
import type { Viewport } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const rubik = Rubik({ subsets: ["latin"] });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sambomatimba.co.za";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sambo Matimba Construction & Projects (Pty) Ltd",
    template: "%s | Sambo Matimba Construction & Projects",
  },
  description:
    "Sambo Matimba Construction & Projects (Pty) Ltd delivers civil engineering, concrete works, road infrastructure, drainage, buildings and project support from Mokopane, South Africa.",
  applicationName: "Sambo Matimba Construction & Projects",
  keywords: [
    "Sambo Matimba",
    "construction company Mokopane",
    "civil engineering South Africa",
    "roads and drainage contractor",
    "concrete works",
  ],
  authors: [{ name: "Sambo Matimba Construction & Projects (Pty) Ltd", url: siteUrl }],
  creator: "Sambo Matimba Construction & Projects (Pty) Ltd",
  publisher: "Sambo Matimba Construction & Projects (Pty) Ltd",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Sambo Matimba Construction & Projects (Pty) Ltd",
    description:
      "Civil engineering, construction, concrete works, roads, bridges, pipelines and project support for public, private and industrial clients.",
    url: siteUrl,
    siteName: "Sambo Matimba Construction & Projects",
    locale: "en_ZA",
    type: "website",
    images: [
      {
        url: "/images/hero-site.jpeg",
        width: 1280,
        height: 720,
        alt: "Sambo Matimba Construction & Projects site operations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sambo Matimba Construction & Projects (Pty) Ltd",
    description:
      "Civil engineering, concrete works, roads, bridges, drainage, buildings and project support from Mokopane, South Africa.",
    images: ["/images/hero-site.jpeg"],
  },
  icons: {
    icon: "/images/logo.jpeg",
    shortcut: "/images/logo.jpeg",
    apple: "/images/logo.jpeg",
  },
};

export const viewport: Viewport = {
  themeColor: "#070707",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA" className="scroll-smooth">
      <body className={rubik.className}>
        {children}
      </body>
    </html>
  );
}
