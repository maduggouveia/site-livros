import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

import { Noto_Sans } from 'next/font/google'

export const metadata: Metadata = {
  title: "Madu e Os Livros",
  description: "Site oficial da autora Madu Gonçalves, com informações sobre seus livros, serviços editoriais e muito mais.",
};

const noto_sans = Noto_Sans({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={noto_sans.className}>

      <body>

        <Header />

        <main>

          {children}

        </main>

        <Footer />
      
      </body>
    </html>
  );
}
