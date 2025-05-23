import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { DarkModeProvider } from "~/components/darkModeProvider";

export const metadata: Metadata = {
  title: "Leonardo Marinović portfolio",
  description: "Leonardo Marinović portfolio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <DarkModeProvider>
        <body>{children}</body>
      </DarkModeProvider>
    </html>
  );
}
