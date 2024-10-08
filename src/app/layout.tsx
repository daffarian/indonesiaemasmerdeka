import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 800 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yayasanindonesiaemas.com"),
  title: "Yayasan Indonesia Emas Merdeka",
  description:
    "Dukung program kesehatan, pemerataan akses pendidikan, pemberdayaan UMKM, dan pelestarian lingkungan untuk meningkatkan kualitas hidup masyarakat Indonesia secara berkelanjutan.",
  openGraph: {
    images: "https://yayasanindonesiaemas.com/opengraph-image.png?552dec655558f188",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>{children}</body>
    </html>
  );
}
