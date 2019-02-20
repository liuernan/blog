函数的声明
---
* 匿名函数



* 具名函数

函数的作用域问题
```javascript
var fn1 = function fn2 () {
    console.log(1);
}
// fn2 的作用域？
```

* 箭头函数

```javascript
/* 写法1：最多一个参数且只有一句话 */
let fn3 = i => ++i;

fn3(1); // 返回2


/* 写法2：有多个参数，但只有一句话 */
let fn4 = (i, j) => i + j;

fn4(2, 3); // 返回5


/* 写法3：有多句话 */
let fn5 = (a, b, c) => {
    console.log(a);
    return a * b *c;
}

fn5(4, 5, 6); // 打印4，返回120
```

词法作用域
---
词法分析、词法树（只分析语义，即变量，不分析变量的值）
```javascript
let a = 1;
let fn5 = a => console.log(a);

a = 2;

fn5(a);  // 打印出2，而不是1
```

Call Stack
---
堆栈：先进后出

递归函数
```javascript
/* 斐波那契数列第 n 位的数字
   1 1 2 3 5 8 13 21 34 */
let fab = (n) => {
    if (n >= 3) {
        return fab(n-1) + fab(n-2)
    } else {
        return 1
    }
}

fab(5);
fab(8);
```

`this` & `arguments`
---
tips: chrome 的 console 显示的`Window{...}`实际是`window{...}`，`window`是小写

`this`是`call`的第一个参数

```javascript
function fn () {
    console.log(this);
    console.log(arguments);
}

fn.call(); // window []
fn.call({name: '二男'}); // {name: '二男'} []
fn.call({name: '二男'}, 1, 'str') // {name: '二男'} [1, 'str']
```

推荐使用`call`的写法，而不要用 JS 的语法糖

`call` & `apply`
---
参数长度未知的时候，`apply`应运而生
```javascript
function sum () {
    var n = 0;
    for (var i = 0; i < arguments.length; i++) {
        n += arguments[i];
    }
    return n
}

var arr = [1, 2, 3, 4, 5]
// call 和 apply 的写法，第一个参数永远是this
sum.apply(undefined, arr);
sum.apply(null, [1, 2, 3]);
```

bind
---
```javascript
var view = {
    element: $('#div1'),
    bindEvents: function () {
        this.element.onClick = this.onClick.bind(this);
    },
    onClick: function () {
        this.element.addClass('active');
    }
}
```

参考 mdn 上的 bind

柯里化
---
```javascript
// 早期模版引擎的一种写法
function templateHandler (template) {
    return function (data) {
       return template.replace('{{name}}', data.name);
    }
}

var t = templateHandler('<p>Hi, my name is {{name}}</p>');

t({name: 'Jack'});
```

高阶函数
---
函数的入参或出参是函数

underscore.js
