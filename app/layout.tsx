import type { Metadata } from "next";
import { Inter, Nunito_Sans} from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Head from "next/head";
import Link from "next/link";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Corbit",
  description: "Corbit - Web Development Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <Navigation/>
        {children}
      </body>
    </html>
  );
}
