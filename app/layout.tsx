import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import SideBar from "./components/sidebar";
import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin", "devanagari"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className + " bg-lightGray"}>
        <div className="w-full bg-white h-[77px] fixed top-0 pl-[200px] z-30 lg:block hidden">
          <Header></Header>
        </div>
        <div className="flex">
          <div className="w-[200px] h-[100vh] bg-black z-40 fixed lg:block hidden">
            <SideBar></SideBar>
          </div>

          <div className="w-full mt-[100px] lg:pl-[200px]"> {children}</div>
        </div>
      </body>
    </html>
  );
}