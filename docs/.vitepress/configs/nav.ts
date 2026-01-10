import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: "首页", link: "/" },
  { text: "作品", link: "/books/" },
  {
    text: "友情链接",
    items: [
      { text: "暂无" },
    ]
  }
]
