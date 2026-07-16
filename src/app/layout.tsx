import type { Metadata } from "next";
import { ViewTransition } from "react";
import { Figtree, Syne } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description: `${site.tagline} Portfolio of ${site.name}, ${site.role}.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} ${syne.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-bg text-ink">
        <ViewTransition>{children}</ViewTransition>
      </body>
    </html>
  );
}
