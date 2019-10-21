# panda - 一个 Vue UI 组件
[![Build Status](https://travis-ci.org/wyx318/panda.svg?branch=master)](https://travis-ci.org/wyx318/panda)

 作者：wyx 
 ## 介绍
 本框架是作者在学习 Vue过程中 做的一个UI框架 不足之处 欢迎指正 希望本框架对你有所帮助
 ## 开始使用  
 
1.安装 
   
   使用本框架前，请在css中开启border-box
     
     ```
     *,*::befor,*::after{ box-sizing: border-box;}
     ```
 IE 8及以上浏览器都支持此样式。
 
 需要设置默认的颜色等变量(后续会改为 scss 变量 )
 ```
    html {
          --button-height: 32px;
          --font-size: 14px;
          --button-bg: white;
          --button-active-bg: #eee;
          --border-radius: 4px;
          --color: #333;
          --border-color: #999;
          --border-color-hover: #666;
        }

```
  IE 15及以上浏览器都支持此样式
  
 2.安装 ipanda 
 ```
npm i --save ipanda01
```

3.引入 ipanda
```
  import {Button, ButtonGroup, Icon} from 'ipanda01'
  import 'ipanda01/dist/index.css'

  export default {
    name: 'app',
    components: {
      'g-button': Button
    }
  }
```
 ## 文档 
 
 ## 提问 
 
 ## 变更记录
 
 ## 联系方式
 
## 贡献代码 
 
 
