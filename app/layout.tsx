import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Bharat Analytica | Political Consulting & Election Management",
  description:
    "India's complete political campaign management platform. We provide reliable political consulting, election management, surveys & analytics, and technology solutions.",
  keywords: [
    "political consulting India",
    "election management",
    "campaign management",
    "voter analytics",
    "political strategy",
    "Bharat Analytica",
  ],
  openGraph: {
    title: "Bharat Analytica | Political Consulting & Election Management",
    description:
      "India's complete political campaign management platform. Digitize your voter database, manage booth operations, and win with data-driven intelligence.",
    url: "https://bharatanalytica.in",
    siteName: "Bharat Analytica",
    locale: "en_IN",
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
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
