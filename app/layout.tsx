import type { Metadata } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "My Assignment Buddies Guides",
    template: "%s | My Assignment Buddies",
  },
  description:
    "Helpful academic guides, resources and articles from My Assignment Buddies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black antialiased">
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}