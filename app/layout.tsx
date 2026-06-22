import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Piyush Chirote | Full Stack Developer & MCA Student",
  description:
    "Portfolio of Piyush Chirote — Full Stack Developer, MCA Student, and AI Enthusiast from Indore, India. Specialized in React, Node.js, Spring Boot, and AI-powered web applications.",
  keywords: [
    "Piyush Chirote",
    "Full Stack Developer",
    "React Developer",
    "MCA Student",
    "Node.js",
    "Spring Boot",
    "Indore Developer",
    "Portfolio",
    "AI Web Development",
  ],
  authors: [{ name: "Piyush Chirote", url: "https://piyush-chirote.vercel.app" }],
  creator: "Piyush Chirote",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://piyush-chirote.vercel.app",
    title: "Piyush Chirote | Full Stack Developer",
    description:
      "Full Stack Developer & MCA Student building scalable web apps and AI-powered experiences.",
    siteName: "Piyush Chirote Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Piyush Chirote | Full Stack Developer",
    description: "Full Stack Developer & MCA Student from Indore, India.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body suppressHydrationWarning className="antialiased">
        {children}
      </body>
    </html>
  );
}
