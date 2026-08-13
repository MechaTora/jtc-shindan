import type { Metadata } from "next";
import Script from "next/script";
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
  verification: { google: "lIOpRdMI20bcc0U1Rl1lgRkIfUNFebk0yGvk9TENGYQ" },
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
      <body className="min-h-full flex flex-col bg-bg text-ink pb-[70px] md:pb-6">
        {children}

        <div className="hidden md:flex justify-center py-4">
          <div id="im-532c2f8737b24da798472b969df11f66" />
        </div>

        <div
          className="md:hidden"
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            width: "100%",
            background: "rgba(0, 0, 0, 0.7)",
            zIndex: 99998,
            textAlign: "center",
            transform: "translate3d(0, 0, 0)",
          }}
        >
          <div style={{ margin: "auto", zIndex: 99999 }}>
            <div id="im-ced992e810654a9da9943f76361f3908" />
          </div>
        </div>

        <Script
          async
          src="https://imp-adedge.i-mobile.co.jp/script/v1/spot.js?20220104"
          strategy="afterInteractive"
        />
        <Script id="im-adedge-spot-pc" strategy="afterInteractive">
          {`(window.adsbyimobile=window.adsbyimobile||[]).push({pid:84386,mid:595373,asid:1940640,type:"banner",display:"inline",elementid:"im-532c2f8737b24da798472b969df11f66"})`}
        </Script>
        <Script id="im-adedge-spot-mobile" strategy="afterInteractive">
          {`(window.adsbyimobile=window.adsbyimobile||[]).push({pid:84386,mid:595374,asid:1940641,type:"banner",display:"inline",elementid:"im-ced992e810654a9da9943f76361f3908"})`}
        </Script>
      </body>
    </html>
  );
}
