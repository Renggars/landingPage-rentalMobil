import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/app/components";

export const metadata: Metadata = {
  title: "Rent Car",
  description: "Discover the best cars with the best price for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
