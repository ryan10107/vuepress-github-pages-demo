module.exports = {
  title: 'vuepress利用github actions部署github pages',
  description: '',
  base: '/vuepress-github-pages-demo/', // 这是部署到github相关的配置 下面会讲
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    sidebar: [
      '/intro',
    ]
  }
}
