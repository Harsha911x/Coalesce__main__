import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoginPage from "@/Loginpage/Login"
import Hero from "@/components/Hero"
import "../styles/globals.css";
import Body from "@/components/Body"
import Snip from "@/components/Snip"
const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Header />
        <Hero/>
        <Snip/>
        <Body/>
        <LoginPage/>
        <Footer/>
        {children}
      </body>
    </html>
  )
}