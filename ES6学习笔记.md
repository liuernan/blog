### 块级作用域

为了不污染全局变量

ES5，立即执行函数的解决方案

立即执行函数

### var let const

* ES6 之前，不写 var，直接写 a = 1，真的是直接在全局声明了一个 a 吗？


let 
---

1. let 的作用域，在最近的 {} 之间；

2. 如果在 let a 之前使用 a ，报错；

3. 如果重复 let a，报错；

const
---

1、2、3 同 let

4. 只有一次赋值机会，且必须在申明的时候立即赋值；

JS 代码的执行顺序问题

for循环里面魔法的let

函数
---
ES3 具名函数 & 匿名函数

箭头函数的基本写法及简化写法

为什么要有剪头函数？（解决 this 的问题）

this 有什么问题？

CoffeeScript && Ruby

函数参数的默认值的语法糖
---
```javascript
function sum (a = 0, b = 0) {
    return a + b;
}

// 等价于ES5 ：
function sumES5 (a, b) {
    a = a || 0;
    b = b || 0;
    return a + b;
}

sum();
```

函数的剩余参数的语法糖
---
```javascript
function sum (msg, ...numbers) {
    var result = 0;
    for (var i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return msg + result;
}

sum('结果是', 1, 2, 3, 4, 5)
```
