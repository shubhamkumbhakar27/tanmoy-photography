import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import { GoogleAnalytics } from "@next/third-parties/google";

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
        url: "https://tanmoyphotographyfilms.com/_next/image?url=/_next/static/media/logo.b3ca5dd5.png&w=256&q=75",
      },
    ],
  },
  icons: {
    icon: [
      {
        url: "https://tanmoyphotographyfilms.com/_next/image?url=/_next/static/media/logo.b3ca5dd5.png&w=256&q=75",
      },
      {
        url: "https://tanmoyphotographyfilms.com/_next/image?url=/_next/static/media/logo.b3ca5dd5.png&w=256&q=75",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "https://tanmoyphotographyfilms.com/_next/image?url=/_next/static/media/logo.b3ca5dd5.png&w=256&q=75",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "https://tanmoyphotographyfilms.com/_next/image?url=/_next/static/media/logo.b3ca5dd5.png&w=256&q=75",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "https://tanmoyphotographyfilms.com/_next/image?url=/_next/static/media/logo.b3ca5dd5.png&w=256&q=75",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "https://tanmoyphotographyfilms.com/_next/image?url=/_next/static/media/logo.b3ca5dd5.png&w=256&q=75",
        type: "image/png",
      },
      {
        url: "https://tanmoyphotographyfilms.com/_next/image?url=/_next/static/media/logo.b3ca5dd5.png&w=256&q=75",
        sizes: "152x152",
        type: "image/png",
      },
      {
        url: "https://tanmoyphotographyfilms.com/_next/image?url=/_next/static/media/logo.b3ca5dd5.png&w=256&q=75",
        sizes: "167x167",
        type: "image/png",
      },
      {
        url: "https://tanmoyphotographyfilms.com/_next/image?url=/_next/static/media/logo.b3ca5dd5.png&w=256&q=75",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={`${roboto.className}`}>
        <div>{children}</div>
        <Footer />
        <GoogleAnalytics gaId="G-D9VHD3FWN6" />
      </body>
    </html>
  );
}
