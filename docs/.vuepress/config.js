module.exports = {
  title: '二男的博客',
  description: '编程语言 编程思想',
  base: '/blog/',
  cache: false,
  themeConfig: {
    // logo: '/assets/img/logo.png',
    lastUpdated: 'Last Updated',
    nav: [
      {text: 'Docs', link: '/'},
      {text: 'Github', link: 'https://github.com/liuernan/blog'}
    ],
    sidebar: [
      {
        title: '编程语言',
        collapsable: false,
        children: [
          {
            title: 'JavaScript',
            collapsable: false,
            children: [
              'code/javascript/data-type.md',
              'code/javascript/function.md',
              'code/javascript/async-await.md',
              'code/javascript/api.md'
            ]
          }
        ]
      },
      {
        title: '编程思想',
        collapsable: false,
        children: [
          'thoughts/mvc.md'
        ]
      }
    ]
  }
}