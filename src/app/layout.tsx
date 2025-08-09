import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

export const metadata: Metadata = {
  title: "Madu e Os Livros",
  description: "Site oficial da autora Madu Gonçalves, com informações sobre seus livros, serviços editoriais e muito mais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">

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
