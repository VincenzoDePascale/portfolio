import { Inter } from "next/font/google";
import moment from "moment";
import Menu from "./Components/Menu";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VincenzoDePascale",
};

export default function RootLayout({ children }) {
  const currentYear = moment().format("YYYY");
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu />
        {children}
        <div className="footer-container text-xs md:fixed md:bottom-0 md:right-0">
          <div>&copy; {currentYear} Vincenzo De Pascale</div>
        </div>
      </body>
    </html>
  );
}
