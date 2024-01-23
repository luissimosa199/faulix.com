import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Faulix",
  description: "Desarrollo de software a su medida",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const agentCookie = cookies().get("user_agent_id")?.value;

  return (
    <html lang="es">
      <body className={inter.className}>
        <Header agentCookie={agentCookie} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
