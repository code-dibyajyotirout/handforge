import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "HandForge — Spatial Hand-Gesture 3D Sculpting & Animation Studio",
  description:
    "HandForge is a browser-based spatial sculpting studio powered by WebGPU, MediaPipe hand & body tracking, and real-time mesh deformation. Sculpt, animate, and export 3D models using your hands in mid-air.",
  keywords: [
    "3D sculpting",
    "WebGPU",
    "hand tracking",
    "MediaPipe",
    "spatial computing",
    "mesh deformation",
    "browser 3D",
    "animation studio",
    "HandForge",
    "gesture control",
    "body tracking",
  ],
  authors: [{ name: "HandForge Studio" }],
  creator: "HandForge",
  metadataBase: new URL("https://handforge.pages.dev"),
  openGraph: {
    type: "website",
    title: "HandForge — Sculpt in 3D with Your Hands",
    description:
      "A zero-install, browser-based 3D sculpting studio. Use hand gestures and body tracking to sculpt, animate, and export models. Powered by WebGPU.",
    siteName: "HandForge",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HandForge 3D Sculpting Studio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HandForge — Sculpt in 3D with Your Hands",
    description:
      "Browser-based spatial sculpting with WebGPU & hand tracking. No install required.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" }
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#090a0f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="google-adsense-account" content="ca-pub-6920661391833487" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6920661391833487"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
