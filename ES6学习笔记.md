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

展开操作
---
```javascript
var arr1 = [1, 2, 3, 4, 5, 6, 7];

var [, , , ...arr2] = arr1;
console.log(arr2); // [4, 5, 6, 7]

var arr3 = [0, ...arr1, 8, 9];
console.log(arr3); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

解构赋值
-
```javascript
var a = 1,
    b = 2;
// a b 的值位置互换
[a, b] = [b, a];
console.log(a, b); // [2, 1]

// 取数组剩余的数据
var [, , ...rest] = [1, 2, 3, 4, 5, 6, 7];
console.log(rest); // [3, 4, 5, 6, 7]

// 默认值 + 解构赋值
var [a = 1, b = 2] = [0];
console.log(a, b); // 0 2

// 对象的解构赋值
var {name, age, sex} = {name: 'Tom', age: 27, sex: 'Male'}
console.log(name, age, sex); // Tom 27 Male

// 对象的解构赋值 + 重命名
var {name: XingMing, age: NianLing, sex: XingBie} = {name: 'Tom', age: 27, sex: 'Male'}
console.log(XingMing, NianLing, XingBie); // Tom 27 Male
console.log(name, age, sex); // 会报错，未定义，但是要注意 windown.name 是存在的


// 对象的解构赋值加强版
var {child: {name, age, gender}} = {name: 'Tom', age: 27, sex: 'Male', child: {name: 'Jerry', age: 2, sex: 'Female'}}
console.log(name, age, sex); // Jerry 2 Male
console.log(child); // 报错 child 不会被声明

// 对象的解构赋值加强版 + 重命名 + 默认值
var {child: {name: XingMing = 'noName', age: NianLing = -1, sex: XingBie = 'unknown'}} = {name: 'Tom', age: 27, sex: 'Male', child: {}}
console.log(XingMing, NianLing, XingBie); // noName -1 unknown
console.log(name, age, sex); // 会报错，未定义，但是要注意 windown.name 是存在的
console.log(child); // 报错 child 不会被声明

```
