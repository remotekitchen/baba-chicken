import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./(home)/components/Footer";
import Header from "./(home)/components/Header";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Baba Chicken",
  description: "Baba Chicken details",
  openGraph: {
    title: "Baba Chicken",
    description:
      "Experience the rich, authentic taste of Punjabi cuisine with mouth-watering dishes crafted by Baba Chicken's culinary experts.",
    url: "https://www.babasabbotsford.ca/",
    siteName: "Baba Chicken",
    images: [
      {
        url: "/logo2.png",
        width: 1200,
        height: 630,
        alt: "Baba Chicken",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo2.png" sizes="any" />
      <body className={`${interFont.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
