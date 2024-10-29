import { Navbar } from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`mx-auto`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
