import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tanmoy Photography & Films",
  description: "Framing the love that leads to forever",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Tanmoy Photography & Films",
    description: "Framing the love that leads to forever",
    type: "website",
    images: [
      {
        url: "/images/profile.png",
      },
    ],
  },
  icons: "/images/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
