import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: '前端 & AI 面试题库',
    },
    links: [
      {
        text: '文档',
        url: '/docs',
        active: 'nested-url',
      },
    ],
  };
}
