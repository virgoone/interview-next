import Link from 'next/link';
import { BookOpen, Code, Brain, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 px-4 py-16">
      <div className="max-w-4xl w-full space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 mb-6">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            前端 & AI 面试题库
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            系统整理前端（React 核心）与 AI 应用（LLM、RAG、Agent 等）领域的高频面试问题，
            包含核心答案与延伸追问，助你高效备战面试
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {/* JavaScript 基础 */}
          <Link
            href="/docs/js/promise"
            className="group relative p-6 rounded-xl border bg-card hover:bg-accent transition-all hover:shadow-lg hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  JavaScript 基础
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Promise、Web Worker、构建工具等核心概念与实现原理
                </p>
                <div className="flex items-center text-sm text-blue-600 dark:text-blue-400 font-medium">
                  开始学习
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>

          {/* CSS 基础 */}
          <Link
            href="/docs/css/selector-priority"
            className="group relative p-6 rounded-xl border bg-card hover:bg-accent transition-all hover:shadow-lg hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-orange-100 dark:bg-orange-900/30 group-hover:bg-orange-200 dark:group-hover:bg-orange-900/50 transition-colors">
                <Code className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  CSS 基础
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  选择器优先级、盒模型、布局、定位、响应式设计等
                </p>
                <div className="flex items-center text-sm text-orange-600 dark:text-orange-400 font-medium">
                  开始学习
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>

          {/* React 面试题 */}
          <Link
            href="/docs/react/hooks"
            className="group relative p-6 rounded-xl border bg-card hover:bg-accent transition-all hover:shadow-lg hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/30 group-hover:bg-purple-200 dark:group-hover:bg-purple-900/50 transition-colors">
                <Code className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  React 面试题
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Hooks、Fiber、合成事件、React 18 新特性、性能优化等
                </p>
                <div className="flex items-center text-sm text-purple-600 dark:text-purple-400 font-medium">
                  开始学习
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>

          {/* 浏览器相关 */}
          <Link
            href="/docs/browser/render-process"
            className="group relative p-6 rounded-xl border bg-card hover:bg-accent transition-all hover:shadow-lg hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-cyan-100 dark:bg-cyan-900/30 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-900/50 transition-colors">
                <Code className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  浏览器相关
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  渲染流程、URL 过程、缓存机制、重绘与回流等
                </p>
                <div className="flex items-center text-sm text-cyan-600 dark:text-cyan-400 font-medium">
                  开始学习
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>

          {/* AI 应用面试题 */}
          <Link
            href="/docs/ai/basics"
            className="group relative p-6 rounded-xl border bg-card hover:bg-accent transition-all hover:shadow-lg hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900/30 group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors">
                <Brain className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  AI 应用面试题
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  LLM、Agent、RAG、Embeddings、向量数据库等核心概念
                </p>
                <div className="flex items-center text-sm text-green-600 dark:text-green-400 font-medium">
                  开始学习
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="pt-8 border-t">
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/docs"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              查看全部文档
            </Link>
            <Link
              href="/docs/js/promise"
              className="px-6 py-3 rounded-lg border hover:bg-accent transition-colors"
            >
              JavaScript 基础
            </Link>
            <Link
              href="/docs/css/selector-priority"
              className="px-6 py-3 rounded-lg border hover:bg-accent transition-colors"
            >
              CSS 基础
            </Link>
            <Link
              href="/docs/browser/render-process"
              className="px-6 py-3 rounded-lg border hover:bg-accent transition-colors"
            >
              浏览器相关
            </Link>
            <Link
              href="/docs/react/hooks"
              className="px-6 py-3 rounded-lg border hover:bg-accent transition-colors"
            >
              React 核心
            </Link>
            <Link
              href="/docs/ai/basics"
              className="px-6 py-3 rounded-lg border hover:bg-accent transition-colors"
            >
              AI 应用
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 pt-8">
          <div className="text-center space-y-2">
            <div className="text-2xl font-bold text-primary">核心答案</div>
            <p className="text-sm text-muted-foreground">
              每个问题都提供清晰的核心答案，直击要点
            </p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-2xl font-bold text-primary">延伸追问</div>
            <p className="text-sm text-muted-foreground">
              涵盖常见延伸问题，全面应对面试场景
            </p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-2xl font-bold text-primary">系统整理</div>
            <p className="text-sm text-muted-foreground">
              按主题分类整理，便于快速查找和复习
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
