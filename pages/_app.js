import "@/styles/globals.css";
import { Share_Tech_Mono } from "next/font/google"; // ✅ import correcto
import Head from "next/head";

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${shareTechMono.variable} font-mono`}>
      <Head>
        <title>Losttime.miss;</title>
        <meta
          name="description"
          content="Esta es una aplicación Next.js con fuente personalizada."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
