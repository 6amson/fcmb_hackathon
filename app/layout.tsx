"use client";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import SideBar from "./components/sidebar";
import Header from "./components/header";
import { usePathname } from "next/navigation";
import MainContextProvider from "./components/MainContext/MainContext";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin", "devanagari"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isHome = pathname === "/home";
  return (
    <html lang="en">
      <body className={poppins.className + " bg-lightGray font-poppins"}>
        <div
          className={`w-full bg-white h-[77px] fixed top-0 lg:pl-[200px] z-30 block ${
            isHome && "hidden "
          }`}
        >
          <Header></Header>
        </div>
        <MainContextProvider>
          <div className="lg:flex">
            <div
              className={`lg:w-[200px] lg:h-[100vh] h-[60px] w-full bg-black z-40 fixed block bottom-0 lg:left-0  ${
                isHome && "hidden "
              }`}
            >
              <SideBar></SideBar>
            </div>

            <div
              className={`w-full  ${
                isHome
                  ? "mt-0 pl-0 lg:pl-0 lg:mt-0"
                  : "w-full mt-[100px] lg:pl-[200px]"
              }`}
            >
              {" "}
              {children}
            </div>
          </div>
        </MainContextProvider>
      </body>
    </html>
  );
}
