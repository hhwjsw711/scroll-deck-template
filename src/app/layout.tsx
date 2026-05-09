import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "履约汇报幻灯片",
  description: "基于 Next.js 构建的全屏滚动吸附演示幻灯片",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased bg-black">{children}</body>
    </html>
  );
}
