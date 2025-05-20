import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { BalancerProvider } from "./providers/provider";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const archivo = localFont({
  src: [
    {
      path: "../../public/fonts/archivo/Archivo-Light.ttf",
      weight: "300",
    },
    {
      path: "../../public/fonts/archivo/Archivo-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/archivo/Archivo-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/archivo/Archivo-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../../public/fonts/archivo/Archivo-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "David Umanah",
  description: "David Umanah's Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} antialiased`}>
        <BalancerProvider>{children}</BalancerProvider>
      </body>
    </html>
  );
}
