import "./globals.css";
import { Inter } from "next/font/google";
import ThemeProvider from "./components/ThemeProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import type { ReactNode } from "react";
import { I18nProvider } from "./i18n-client";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sebastian Pablo Rossi Grad - Portfolio",
  description: "Fullstack developer portfolio of Sebastian Pablo Rossi Grad",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <I18nProvider>
          <body className={`${inter.className} bg-black text-white`}>
            <Header />
            <main>{children}</main>
            <Footer />
          </body>
        </I18nProvider>
      </ThemeProvider>
    </html>
  );
}
