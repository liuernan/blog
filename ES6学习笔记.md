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

对象浅拷贝
---
```javascript
var obj1 = {name: 'outName', innerObj: {innerName: 'innerName'}}

var obj2 = Object.assign({}, obj1);
console.log(obj2); // 拷贝了 obj1

obj2.name = 'obj2OutName';
obj2.innerObj.innerName = 'obj2InnerName';
console.log(obj1.name); // outName
console.log(obj1.innerObj.innerName); // obj2InnerName

// ES6 的语法糖
var obj3 = {...obj1}
console.log(obj3);

// 对象的合并
var objA = {key1: 'a'}, objB = {key1: 'b'}

var objC = Object.assign({}, objA, objB);
console.log(objC); // {key1: 'b'}

var objD = {...objA, ...objB};
console.log(objD); // {key1: 'b'}
```

对象的深拷贝
---
* `JSON.parse(JSON.stringify(data));`
* 递归

对象的属性加强
---
```javascript
var x = 1, y = 2;
var obj = {x, y};
console.log(obj);

// 混合加强版
var x = 1,
    y = 2,
    obj1 = {name: '绕晕了'}
    
var obj2 = {
    x,
    y,
    z: 666,
    ...obj1,
    add: function () {},
    sayName (name = 'noName') {console.log(name)}
}
console.log(obj2);
obj2.sayName('PonyMa');
obj2.satName();

```

ES6 的字符串
---
```javascript
var text = 'this is a text.';
var str1 = `
    <div>
        <p>${text}</p>
    </div>
`  // 结果包含四个回车
```

函数后面直接跟一个模版字符串的写法
---
```javascript
var name = '胖菊';
var cat = '喵';
function fn () {
    console.log(arguments);
}

fn`${name} 是一只 ${cat}`
```

[styled-components](https://github.com/styled-components/styled-components) 有用到


字面量加强
---
literal

```javascript
// 以下都是字面量
1 2 3 true false [] {}

// 二进制、八进制的写法
var num1 = 0b101010101;
var num2 = 0o777;

```

字符串支持 unicode
---
[阮一峰的博客](http://www.ruanyifeng.com/blog/2014/12/unicode.html)

新增的 `symbol` 数据类型
---
ES 5 的六种数据类型：string number boolean undefined null object

复杂数据类型如 array function date regex 本质都是 object

ES 6 新增的数据类型：symbol --- 胎记

```javascript
var gender = {
    male: Symbol(),
    female: Symbol(),
    unknown: Symbol()
}
function choseGender (opts) {
    if (opts === gender.male) {
        console.log('a male')
    } else if (opts === gender.female) {
        console.log('a female')
    } else if (opts === gender.unknown) {
        console.log('an unknown body')
    }
}

choseGender(gender.unknown);
```

迭代器 & 生成器 & 可迭代对象 & `for...of`
---
生成器是迭代器生层的语法糖

`for...of` 是迭代器访问的语法糖

`for...of` 和 `for...in`

```javascript
// 迭代器

```
