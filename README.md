# 前端 & AI 面试题库

一个系统整理前端（React 核心）与 AI 应用（LLM、RAG、Agent 等）领域高频面试问题的文档站点。

## 功能特性

- 📚 **系统整理**：按主题分类整理，便于快速查找和复习
- 💡 **核心答案**：每个问题都提供清晰的核心答案，直击要点
- 🔍 **延伸追问**：涵盖常见延伸问题，全面应对面试场景
- 🎨 **美观界面**：基于 Fumadocs 构建，界面简洁美观

## 内容结构

### JavaScript 基础
- Promise 核心概念与实现原理
- Web Worker
- Vite vs Webpack

### React 面试题
- React Hooks
- React Fiber
- React 合成事件
- React 18 新特性
- React 性能优化
- React State 更新过程
- React 渲染机制
- React Keep-Alive

### AI 应用面试题
- AI 基础核心问题（LLM、Agent、MCP）
- AI 应用核心组件（Embeddings、LangChain、向量数据库）
- AI 应用进阶（RAG + Agent + Fine-tuning）

## 开始使用

### 开发环境

```bash
npm install
npm run dev
```

打开 http://localhost:3000 查看效果。

### 构建生产版本

```bash
npm run build
npm start
```

## 技术栈

- [Next.js](https://nextjs.org/) - React 框架
- [Fumadocs](https://fumadocs.dev) - 文档框架
- [Tailwind CSS](https://tailwindcss.com/) - 样式框架
- [TypeScript](https://www.typescriptlang.org/) - 类型安全

## 项目结构

```
├── content/docs/          # 文档内容（MDX 格式）
│   ├── js/               # JavaScript 基础
│   ├── react/            # React 面试题
│   └── ai/               # AI 应用面试题
├── src/
│   ├── app/              # Next.js 应用路由
│   ├── lib/              # 工具函数和配置
│   └── mdx-components.tsx # MDX 组件配置
└── source.config.ts      # Fumadocs 配置
```

## 使用建议

1. 面试前重点背诵"核心回答"，确保基础知识点不遗漏
2. 延伸问题结合自身项目经验补充细节，提升可信度
3. 针对目标岗位侧重复习：前端岗位重点看 React 相关章节，AI 应用岗位重点看 AI 基础与进阶章节
4. 回答时遵循"先核心后细节""先结论后原因"的逻辑，贴合面试沟通场景

## License

MIT
