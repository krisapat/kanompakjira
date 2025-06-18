import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="kanit-black antialiased bg-white">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
