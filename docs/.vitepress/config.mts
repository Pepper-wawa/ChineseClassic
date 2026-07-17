import { defineConfig } from 'vitepress'

export default defineConfig({
  // ========== 全局站点配置 ==========
  lang: 'zh-CN',                // 网站语言
  title: '我的项目文档',         // 浏览器标签标题
  description: '基于VitePress搭建技术文档', // SEO描述
  base: '/ChineseClassic/',                     // 部署子路径（github pages填仓库名 /xxx/）
  lastUpdated: false,            // 显示页面更新时间
  appearance: 'force-auto',            // 主题 auto/light/dark

  head: [ // 页面头部标签（图标、统计）
    ['link', { rel: 'icon', href: '/logo.svg' }]
  ],

  markdown: {
    lineNumbers: true,           // 代码块显示行号
  },

  // ========== 默认主题配置 themeConfig ==========
  themeConfig: {
    logo: '/logo.svg',          // 顶部导航logo（放public）
    siteTitle: '文档教程',       // logo右侧文字

    // 1. 顶部导航栏 nav
    nav: [
      { text: '首页', link: '/' },
      { text: '快速上手', link: '/guide/' },
      { text: 'API文档', link: '/api/' },
      {
        text: '更多',
        items: [ // 下拉菜单
          { text: 'Github', link: 'https://github.com', target: '_blank' }
        ]
      }
    ],

    // 2. 左侧侧边栏（多分类侧边栏）
    sidebar: {
      '/guide/': [ // 访问/guide/下页面显示此侧边栏
        {
          text: '基础入门',
          collapsed: false, // 是否默认折叠分组
          items: [
            { text: '安装教程', link: '/guide/install' },
            { text: '配置详解', link: '/guide/config' }
          ]
        },
        {
          text: '进阶',
          items: [{ text: '部署', link: '/guide/deploy' }]
        }
      ],
      '/api/': [
        { text: '接口列表', items: [{ text: '用户接口', link: '/api/user' }] }
      ]
    },

    // 3. 右上角github图标链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/xxx' }
    ],

    // 4. 全文搜索（内置本地搜索）
    search: {
      provider: 'local'
    },

    // 页脚文字
    footer: {
      copyright: '没有版权，欢迎转发，功德无量。————by Pepper'
    }
  }
})