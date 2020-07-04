# Module

1. ES 5 没有模块
2. 其他语言有模块
3. 其他语言的程序员，如何把模块引入 JS

## 什么是模块？

只要能从逻辑上分隔开，就算是模块化：不同的文件分隔、注释分隔等等

## 为什么前端需要模块？

局部变量污染了全局变量

ES 5 通过立即执行函数的方式解决

ES 6 可以通过在代码段外面加上一个 `{}` 包裹来解决

模块化可以做到，控制什么时候执行某个某块，每个模块都有自己的变量互不影响

模块 && 依赖 && 导出

```javascript
<script type='module' src='main.js'>

export default bbb && export ccc; export ddd

import xxx, {ccc as ccc1, ddd} from './aaa.js'
```

只 import ，不做其他事，会执行引入 js 的代码，不执行函数（函数等着被调用）

[MDN 文档](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)

ES 6 的模块化语法旧的浏览器不支持 -> 用 Babel 转译 -> 又需要用到 Webpack

[Parcel](https://github.com/parcel-bundler/parcel)

