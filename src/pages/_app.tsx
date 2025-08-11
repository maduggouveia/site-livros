// pages/_app.tsx
import type { AppProps } from 'next/app';
import '../styles/globals.css'; // seu global

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
