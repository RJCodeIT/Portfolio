import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Metadata, Viewport } from "next";
import ClientLayout from "../components/layout/ClientLayout";
import Analytics from "../components/Analytics";
import Clarity from "../components/Clarity";
import JsonLd from "../components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0a0a14',
  colorScheme: 'dark',
};

export const metadata: Metadata = {
  title: "RJ Code IT | Profesjonalne Rozwiązania Webowe i Mobilne",
  description: "Tworzymy nowoczesne strony internetowe, aplikacje webowe i mobilne dostosowane do indywidualnych potrzeb biznesowych. Skontaktuj się z nami!",
  keywords: "tworzenie stron internetowych, aplikacje webowe, aplikacje mobilne, React, Next.js, React Native, rozwój oprogramowania",
  authors: [{ name: "RJ Code IT" }],
  creator: "RJ Code IT",
  publisher: "RJ Code IT",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://rjcode.pl"),
  alternates: {
    canonical: "/",
    languages: {
      "pl": "/",
      "en": "/en",
    },
  },
  openGraph: {
    title: "RJ Code IT | Profesjonalne Rozwiązania Webowe i Mobilne",
    description: "Tworzymy nowoczesne strony internetowe, aplikacje webowe i mobilne dostosowane do indywidualnych potrzeb biznesowych.",
    url: "https://rjcode.pl",
    siteName: "RJ Code IT",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RJ Code IT - Profesjonalne Rozwiązania Webowe i Mobilne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RJ Code IT | Profesjonalne Rozwiązania Webowe i Mobilne",
    description: "Tworzymy nowoczesne strony internetowe, aplikacje webowe i mobilne dostosowane do indywidualnych potrzeb biznesowych.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" dir="ltr">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#8a2be2" />
        <meta name="msapplication-TileColor" content="#8a2be2" />
        <meta name="theme-color" content="#0a0a14" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
        <Clarity />
        <JsonLd />
      </body>
    </html>
  );
}