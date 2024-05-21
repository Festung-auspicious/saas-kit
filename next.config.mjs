/** @type {import('next').NextConfig} */
const nextConfig = {
    "images": {
        "remotePatterns": [
          {
            "protocol": "https",
            "hostname": "daisyui.com",
            "port": "",
          },
          {
            "protocol": "https",
            "hostname": "images.unsplash.com",
            "port": "",
          },
          {
            "protocol": "https",
            "hostname": "nextjs.org",
            "port": "",
          },
        ],
      },
};

export default nextConfig;
