import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import WhatsAppButton from "./components/WhatsAppButton";
import Chatbot from "./components/Chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Canadian Vision Opticals | Premium Eyewear in St. Catharines, ON",
  description: "Canadian Vision Opticals offers premium eyeglasses and direct insurance billing in St. Catharines, Ontario. Book your appointment today!",
  openGraph: {
    title: "Canadian Vision Opticals | Premium Eyewear in St. Catharines, ON",
    description: "Canadian Vision Opticals offers premium eyeglasses and direct insurance billing in St. Catharines, Ontario. Book your appointment today!",
    url: "https://canadianvisionopticals.com",
    siteName: "Canadian Vision Opticals",
    images: [
      {
        url: "/canadian-vision-logo.png",
        width: 800,
        height: 600,
        alt: "Canadian Vision Opticals Logo"
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Canadian Vision Opticals | Premium Eyewear in St. Catharines, ON",
    description: "Canadian Vision Opticals offers premium eyeglasses and direct insurance billing in St. Catharines, Ontario. Book your appointment today!",
    images: ["/canadian-vision-logo.png"],
    site: "@canadianvisionopticals",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        <main>{children}</main>
        <WhatsAppButton />
        <Chatbot />
      </body>
    </html>
  );
}
