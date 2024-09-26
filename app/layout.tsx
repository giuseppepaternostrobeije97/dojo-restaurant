//  -- NEXT
import type { Metadata } from "next";
// -- MAIN STYLE
import "./globals.scss";
// -- COMPONENTS
import { Navbar } from "./ui/components/navbar";
import { Footer } from "./ui/components/footer";
// -- PLACEHOLDER DATA
import { websiteName } from "./lib/placeholder-data";

export const metadata: Metadata = {
  title: websiteName,
  description: websiteName,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <link rel="stylesheet" href="css/animate.css"></link>
      </head>
      <body className={` antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
