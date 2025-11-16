import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: '前端 & AI 面试题库',
    template: '%s | 前端 & AI 面试题库',
  },
  description: '系统整理前端（React 核心）与 AI 应用（LLM、RAG、Agent 等）领域的高频面试问题，包含核心答案与延伸追问，助你高效备战面试',
  keywords: ['前端面试', 'React 面试', 'AI 面试', 'LLM', 'RAG', 'Agent', '面试题库'],
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="zh-CN" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
