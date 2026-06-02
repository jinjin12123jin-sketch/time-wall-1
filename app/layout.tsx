import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Timewall",
  description: "A color-first time wall for low-friction daily reflection.",
  applicationName: "Timewall",
  appleWebApp: {
    capable: true,
    title: "Timewall",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
