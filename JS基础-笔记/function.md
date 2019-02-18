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
