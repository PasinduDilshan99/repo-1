import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import Footer from "./Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const username: string = "abc";
  return (
    <html lang="en">
    <body >
    <div className="h-screen">
      <div className="bg-gray-100 h-screen w-full flex flex-col overflow-hidden">
        <Header username={username} />
        <div className=" flex flex-row flex-1 ease-in-out overflow-y-auto">
          <SideBar />
          <div className="">{children}</div>
        </div>
        <Footer />
      </div>
    </div>
    </body>
    </html>
  
  );
}
