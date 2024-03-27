import type { Metadata } from "next";
import { Inter, Cedarville_Cursive } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
 
export const metadata: Metadata = {
  title: "Evasion à Baaba",
  description: "Découvrez nos gîtes en Nouvelle Calédonie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.webp" />
        <link rel="icon" type="image/webp" sizes="32x32" href="/favicon.webp"/>
        <link rel="icon" type="image/webp" sizes="16x16" href="/favicon.webp"/>

      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
