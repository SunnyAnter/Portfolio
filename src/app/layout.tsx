import { Roboto_Condensed } from "next/font/google";
import SideNav from "@/components/SideNav";
import SideNavMobile from "@/components/SideNavMobile";
import "./globals.css";

const roboto = Roboto_Condensed({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} flex bg-[rgb(46,46,53)]`}>
        <SideNav />
        <SideNavMobile/>
      <div className="w-full h-screen lg:ml-[15%]">{children}</div> 
      </body>
    </html>
  );
}
