import { Hanken_Grotesk } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const hkGrotesk = Hanken_Grotesk({
  weight: ["200", "300", "500"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={hkGrotesk.className}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
