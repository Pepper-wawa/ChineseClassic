import DefaultTheme from 'vitepress/theme'
import './style.css' // 导入自定义样式

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 全局注册Vue组件
  }
}