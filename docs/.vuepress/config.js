module.exports = {
  title: '二男的博客',
  description: '学习笔记 面试题',
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
        title: '面试',
        collapsable: false,
        children: [
          'interview/array-unique.md',
          'interview/vertical-align-middle.md'
        ]
      },
      {
        title: '笔记',
        collapsable: false,
        children: [
          {
            title: 'JavaScript',
            collapsable: false,
            children: [
              'code/javascript/data-type.md',
              'code/javascript/function.md',
              'code/javascript/promise.md',
              'code/javascript/async-await.md',
              'code/javascript/reflect-proxy.md',
              'code/javascript/class.md',
              'code/javascript/module.md',
              'code/javascript/api.md'
            ]
          },
          {
            title: 'Express',
            // collapsable: false,
            children: [
              'code/express/start.md'
            ]
          },
          {
            title: '设计模式',
            // collapsable: false,
            children: [
              'code/thoughts/mvc.md'
            ]
          }
        ]
      }
    ]
  }
}