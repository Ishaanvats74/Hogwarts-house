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

        <div className="relative h-screen w-full bg-center bg-cover bg-no-repeat text-white" style={{ backgroundImage: "url(/back.jpg)" }}>
          {children}
          <Analytics/>
        </div>
      </body>
    </html>
  );
}
