import path from "node:path";
import type { NextConfig } from "next";

// outputFileTracingRoot pins this folder as the workspace root, otherwise
// Next.js picks up an unrelated package-lock.json under the user's home.
const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
