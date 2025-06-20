import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import WhatsAppButton from "./components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vellore Optical | Premium Eyewear in Vaughan, ON",
  description: "Vellore Optical offers premium eyeglasses and direct insurance billing in Vaughan, Ontario. Book your appointment today!",
  openGraph: {
    title: "Vellore Optical | Premium Eyewear in Vaughan, ON",
    description: "Vellore Optical offers premium eyeglasses and direct insurance billing in Vaughan, Ontario. Book your appointment today!",
    url: "https://velloreoptical.com",
    siteName: "Vellore Optical",
    images: [
      {
        url: "/vellore-logo.png",
        width: 800,
        height: 600,
        alt: "Vellore Optical Logo"
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vellore Optical | Premium Eyewear in Vaughan, ON",
    description: "Vellore Optical offers premium eyeglasses and direct insurance billing in Vaughan, Ontario. Book your appointment today!",
    images: ["/vellore-logo.png"],
    site: "@velloreoptical",
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
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
