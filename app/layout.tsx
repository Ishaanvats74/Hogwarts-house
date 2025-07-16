import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"



export const metadata: Metadata = {
  title: "HogWards House",
  description: "Created By Ishaan vats",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
