import type { Metadata } from "next";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackGround";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

export const metadata: Metadata = {
  title: "Портфолио",
  description: "Портфолио Косов Руслан",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="bg-[#030014] overflow-y-scroll overflow-x-hidden">
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
