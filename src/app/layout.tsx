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
        url: "../../public/images/profile.jpg",
      },
    ],
  },
  icons: {
    icon: [
      { url: "../../public/images/logo1230x630.jpg" },
      {
        url: "../../public/images/logo1230x630.jpg",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "../../public/images/logo1230x630.jpg",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "../../public/images/logo1230x630.jpg",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "../../public/images/logo1230x630.jpg",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: [
      { url: "../../public/images/logo1230x630.jpg", type: "image/png" },
      {
        url: "../../public/images/logo1230x630.jpg",
        sizes: "152x152",
        type: "image/png",
      },
      {
        url: "../../public/images/logo1230x630.jpg",
        sizes: "167x167",
        type: "image/png",
      },
      {
        url: "../../public/images/logo1230x630.jpg",
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-D9VHD3FWN6"></script>
                <script>
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', 'G-D9VHD3FWN6');
                </script>
              `,
          }}
        />
      </head>
      <body className={`${roboto.className}`}>
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
