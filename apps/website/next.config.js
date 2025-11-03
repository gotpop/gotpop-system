/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "@gotpop/ui",
    "@gotpop/server",
    "@gotpop/icons",
    "@gotpop/tokens",
    "@gotpop/utils",
  ],
}

module.exports = nextConfig
