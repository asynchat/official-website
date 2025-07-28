import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Spark AI - 智能体发布与运营SaaS平台',
  tagline: '兼顾个人与企业，让AI应用全渠道触达终端用户更简单',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://autolearn.cn',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['en', 'zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    metadata: [
      {name: 'keywords', content: 'AI应用开发,智能体开发平台,SaaS平台,低代码开发,多终端部署,智能体管理,AI应用运营,企业AI解决方案,无需企业资质,小程序'},
      {name: 'description', content: 'Spark AI是一个专业的智能体开发与运营SaaS平台，提供低代码开发、多终端部署、跨平台智能体管理等功能。帮助个人和企业轻松构建、发布和管理AI应用，实现全渠道触达终端用户。'},
      {property: 'og:description', content: 'Spark AI - 专业的智能体开发与运营SaaS平台，让AI应用开发和管理更简单。'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:description', content: 'Spark AI - 专业的智能体开发与运营SaaS平台，让AI应用开发和管理更简单。'}
    ],
    navbar: {
      title: 'Spark AI',
      logo: {
        alt: '🎉',
        src: 'img/autolearn-logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '文档',
        },
        {to: 'https://autolearn.cn/sparkai', label: '登录', position: 'right'},
        {
          href: 'https://github.com/asynchat/sparkai',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '介绍',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: '小红书',
              href: 'https://autolearn.cn',
            },
            {
              label: '哔哩哔哩',
              href: 'https://autolearn.cn',
            },
            {
              label: '视频号',
              href: 'https://autolearn.cn',
            },
            {
              label: 'X',
              href: 'https://autolearn.cn',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '博客',
              to: '/',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Spark AI, 灵思信息 Inc. <a href="https://beian.miit.gov.cn">湘ICP备2025116296号-1</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
