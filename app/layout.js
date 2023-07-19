import Nav from "@/components/Nav";
import "./globals.css";
import { Inter } from "next/font/google";
import Search from "@/components/Search";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WeatherHub",
  description: "Weather Hub",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <Search />
        {children}
      </body>
    </html>
  );
}
