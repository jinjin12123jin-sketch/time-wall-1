import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  ...(isGithubPages
    ? {
        basePath: "/time-wall-1",
        assetPrefix: "/time-wall-1/",
      }
    : {}),
};

export default nextConfig;
