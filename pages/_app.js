import "@/styles/globals.css";
import { Share_Tech_Mono } from "next/font/google"; // ✅ import correcto

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${shareTechMono.variable} font-mono`}>
      <Component {...pageProps} />
    </main>
  );
}
