import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gior Bali Tour - Premium Car Rental with Driver",
  description: "Premium car rental services with professional drivers in Bali. Comfortable travel with fuel included and 24/7 support. Book your perfect Bali experience now!",
  keywords: ["Gior Bali Tour", "Car Rental Bali", "Driver Service", "Bali Transportation", "Premium Service", "Bali Travel", "Tour Operator"],
  authors: [{ name: "Gior Bali Tour Team" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Gior Bali Tour - Premium Car Rental with Driver",
    description: "Your trusted partner for premium car rental services with professional drivers in Bali",
    url: "https://gior-bali-tour.com",
    siteName: "Gior Bali Tour",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gior Bali Tour - Premium Car Rental with Driver",
    description: "Premium car rental services with professional drivers in Bali",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
