import type { Metadata } from "next";
import "./globals.css";



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
      </body>
    </html>
  );
}
