/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["upload.wikimedia.org"],
  },
  // async headers() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       headers: [
  //         {
  //           key: "X-Custom-Header",
  //           value: "Custom Header Value",
  //         },
  //         {
  //           key: "Cache-Control",
  //           value: "no-store",
  //         },
  //       ],
  //     },
  //   ]
  // },
}

module.exports = nextConfig
