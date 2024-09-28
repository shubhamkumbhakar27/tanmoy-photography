import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <NextScript
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-D9VHD3FWN6"
        ></NextScript>
        <NextScript>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag(`js`, new Date()); gtag(`config`, `G-D9VHD3FWN6`);
        </NextScript>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
