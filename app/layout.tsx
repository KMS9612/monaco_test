import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RecoilWrapper from "@/src/recoil/recoilWrapper";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "monaco",
  description: "MonacoEditor Test",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{ width: "100vw", height: "100vh" }}
      >
        <RecoilWrapper>{children}</RecoilWrapper>
      </body>
    </html>
  );
}
