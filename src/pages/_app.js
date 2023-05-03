import "@/styles/globals.css";
import { Poppins } from "next/font/google";
const roboto = Poppins({
  subsets: ["latin"],
  weight: ["400", "900",  "700"],
})
export default function App({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
}
