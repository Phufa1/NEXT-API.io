import { Inter } from "next/font/google";
import Header from "./component/header";
import Footer from "./component/footer";
import './globals.css';
import "./css/swiper-bundle.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Phufa",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <a href="#" class="scrollup" id="scroll-up">
          <box-icon name='up-arrow-alt'></box-icon>
        </a>
        <Header />
        {children}

        <Footer />

      </body>

    </html>
  );
}
