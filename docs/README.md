# vuepress github pages 利用github action部署

1. 复制该项目文件夹
2. 修改package.json的name
3. build.sh是用来自己手动部署gh-pages的，有需要用到需要修改
```bash
git push -f git@github.com:ryan10107/vuepress-github-pages-demo.git master:gh-pages
```
4. github action的部署文件 vuepress-deploy.yml
```yml
TARGET_REPO: ryan10107/vuepress-github-pages-demo
```
5. 一定要创建一个Access Tokens
  - settings
  - Developer settings
  - Personal access tokens 创建token后，记录该token值
6. 回到项目主页https://github.com/ryan10107/vuepress-github-pages-demo/settings
  - Secrets
  - Actions
  - New Repository Secrect
  - Name填ACCESS_TOKEN（这里对应vuepress-deploy.yml的ACCESS_TOKEN）
  - Value填入第5步创建的Access tokens的值
