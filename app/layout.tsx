import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WeAreDevelopers | Next.js App Router Example",
  description: "This repository accompanies an article on WeAreDevelopers.com.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* The route is passed in as a prop here */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
