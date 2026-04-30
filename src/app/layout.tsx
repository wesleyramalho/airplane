import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Airplane",
  description: "3D Airplane Experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-background text-foreground">
        <main>{children}</main>
      </body>
    </html>
  );
}
