import "@/styles/global.css";
import { Metadata } from "next";
import { Inter, Anton } from "next/font/google";

import Header from "@/components/Header";
import Providers from "@/components/Providers";
import Footer from "@/components/Footer";
import { mc } from "@/utils/helpers";

const anton = Anton({
  subsets: ["latin"],
  display: "swap",
  variable: "--anton",
  weight: "400"
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter"
});

export const metadata: Metadata = {
  title: {
    template: "%s | JeanTivan",
    default: "JeanTivan"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={mc(
          inter.variable,
          anton.variable,
          "bg-background-3 dark:bg-background-1 min-h-screen",
          "grid grid-rows-[min-content_1fr_min-content]"
        )}
      >
        <Providers>
          <Header />
          <main className="bg-background-2 dark:bg-background-1">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
