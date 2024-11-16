import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import LiveChat from "@/components/live-chat/LiveChat";
import ClientLoader from "@/components/loader/ClientLoader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Visa-Tea",
  description: "Visa-Tea",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <ClientLoader>
            <LiveChat />
            <Header />
            {children}
            <Footer />
          </ClientLoader>
        </ClerkProvider>
      </body>
    </html>
  );
}
