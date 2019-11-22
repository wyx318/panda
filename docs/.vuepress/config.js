module.exports = {
  title: 'panda UI ',
  description: '一个简洁易用的UI框架',
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: '文档', link: '/guide/'},
      {text: '交流', link: 'https://google.com'}
    ],
    sidebar: [
      {
        title: '入门',
        children: [
          '/install/',
          '/get-started/',
        ]
      },

      {
        title: '组件s',
        children: ['/components/button']
      },
    ]
  }

};