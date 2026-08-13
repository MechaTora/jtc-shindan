import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://jtc-shindan-tawny.vercel.app";
const TITLE = "JTC診断";
const DESCRIPTION = "社内の独特な言葉づかいと会社の属性から、あなたの会社のJTC度を0〜100%で診断。";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: `%s | ${TITLE}` },
  description: DESCRIPTION,
  keywords: ["JTC診断", "JTC", "伝統的日本企業", "企業文化診断", "社畜", "会社あるある"],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: SITE_URL,
    siteName: TITLE,
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export const viewport = {
  themeColor: "#2b5c3f",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-bg text-ink">{children}</body>
    </html>
  );
}
