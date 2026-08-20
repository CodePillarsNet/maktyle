import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maktyle | Personalized Gifts & Custom Phone Covers Online",
  description:
    "Design personalized phone covers, photo frames, mugs, LED lamps, t-shirts, and unique custom gifts online. Upload your photos, add text, and create memorable gifts with Maktyle.",
  keywords: [
    "Maktyle",
    "Personalized Gifts",
    "Custom Gifts",
    "Custom Phone Covers",
    "Photo Frames",
    "Personalized Mugs",
    "LED Photo Lamp",
    "Custom T-Shirts",
    "Photo Gifts",
    "Online Gift Store",
    "Personalized Mobile Covers",
    "Birthday Gifts",
    "Anniversary Gifts",
    "Gift Printing",
  ],
  applicationName: "Maktyle",
  authors: [{ name: "Maktyle" }],
  creator: "Maktyle",
  publisher: "Maktyle",
  metadataBase: new URL("https://maktyle.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Maktyle | Personalized Gifts & Custom Phone Covers",
    description:
      "Create beautiful personalized gifts including phone covers, mugs, LED lamps, photo frames, and more.",
    url: "https://maktyle.com",
    siteName: "Maktyle",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maktyle Personalized Gifts",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maktyle | Personalized Gifts",
    description:
      "Design personalized gifts online with your photos and text.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <GoogleTagManager gtmId="GTM-PX7GB3L4" />
      <body className="min-h-full flex flex-col">
        <Navbar />
        <NextTopLoader
         color="#8348de"
         showSpinner={false}
          />
        {children}
        <Footer />
        </body>
        <GoogleAnalytics gaId="G-YLLC47H69G" />
    </html>
  );
}
