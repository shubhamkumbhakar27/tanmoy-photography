/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.vecteezy.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "scontent.fblr1-7.fna.fbcdn.net",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "scontent.fblr1-10.fna.fbcdn.net",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
