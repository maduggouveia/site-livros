// pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        {/* Metadados globais */}
        <title>Madu e Os Livros</title>
        <meta
          name="description"
          content="Site oficial Madu Gonçalves, autora de romance e fantasia"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

        {/* Open Graph */}
        <meta property="og:title" content="Madu e Os Livros" />
        <meta
          property="og:description"
          content="Site oficial Madu Gonçalves, autora de romance e fantasia"
        />
        <meta property="og:image" content="/capa.png" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Madu e Os Livros" />
        <meta
          name="twitter:description"
          content="Site oficial Madu Gonçalves, autora de romance e fantasia"
        />
        <meta name="twitter:image" content="/capa.png" />

        {/* Fontes */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
