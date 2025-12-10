import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gregory Mac-Commick - Tech Portfolio",
  description: "Computer Science graduate specializing in web and mobile development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}