import "./globals.css";
import { Inter } from "next/font/google";

import Menu from "./Components/Menu";
import Footer from "./Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VincenzoDePascale",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu />
        <div className="box">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
