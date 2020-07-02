# new API in ES 6

## Object.assign

```javascript
let a = {a1: 1, a2: 2, a3: 3};
let b = {a1: '1formB', b1: 1, b2: 2};
let c = {a1: '1fromC', c1: 2, c2: 2};
Object.assign(a, b, c);
console.log(a); // 依次把 b、c 的属性添加给 a，重复属性会被后面的覆盖
```

一个数字的拷贝是把值拷贝过去，一个对象的拷贝是把对象的地址拷贝过去

```javascript
let a1 = 1;
let b1 = a1;
b1 = 2;
console.log(a1); // 1

let obj1 = {name: 'Jack'};
let obj2 = obj1;
obj2.name = 'Tom';
console.log(obj1.name); // Tom
```

对于大多数语言来说，完全的深拷贝是不可能的

Object.assign() 是浅拷贝

```javascript
let objA = {a1: 'a'};
let objB = {
    objBB: {
        name: 'b'
    }
};
Object.assign(objA, objB); // 浅拷贝
console.log(objA);

objA.objBB.name = '666';
console.log(objB.objBB.name); // 666
```
Object.assign() 只拷贝可枚举的属性： `enumerable: true`

浅拷贝一个对象的常用写法：

```javascript
let obj1 = {a: 1};
let obj2 = Object.assign({}, obj1);
```

## Array.from 

把不是数组的东西（伪数组）变成数组

```javascript
let fakeArr = {
    0: 'aaa',
    1: 'bbb',
    2: 'ccc',
    length: 3
}
// fakeArr.push('ddd') 会报错

// ES 5
var trueArr1 = Array.prototype.slice.call(fakeArr, 0);
console.log(trueArr1);
// Slice 实际做的事情
function mockSlice (arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }
    return result;
}

// ES 6
let trueArr2 = Array.from(fakeArr);
console.log(trueArr2);
```

其他的写法

```javascript
Array.from('foo'); // ['f', 'o', 'o']

// 创建一个长度为 n 的数组
Array.from({length: 5}); // [undefined, undefined, undefined, undefined, undefined]

// ES 5 的实现方法
new Array(5); // [length: 5]  没有下标，只有个 length，有bug
Array.apply(null, {length: 5}); // 与 Array.from 相同

// 用一个函数创建一个长度为 n 的值为 value 的数组
// ES 6
let creatArr1 = (n, value) => {
    return Array.from({length: n}).map(v => value);
}
// ES 5，并不完美，number 会变成 string
function creatArr2 (n, value) {
    return new Array(n+1).join(value).split('');
}

console.log(creatArr1(6, 6));
console.log(creatArr1(6, '6'));
console.log(creatArr2(7, 7));
console.log(creatArr2(7, '7'));
```

## Array.of 

得到一个由所有传参组成的数组，传参传什么都行

```javascript
let arrOf = Array.of(1, '1', null, undefined, true, false, {},  Symbol());
console.log(arrOf); // [1, "1", null, undefined, true, false, {}, Symbol()]
```

## Array.prototype.fill

```javascript
let arrFill = [1, 2, 3, 4, 5];

arr.fill('fill', 1, 3); // 后面的参数是下标，包前不包后 [start, end)

console.log(arrFill); [1, 'fill', 'fill', 4, 5]
```

## Array.prototype.find 

只接受函数为参数

```javascript
let arrFind = [1, 2, 3, 4, 5];

arrFind.find(v => v === 2); // 注意 find 与 filter 的区别
```

## Array.prototype.copyWithin 

对自身进行浅拷贝覆盖

```javascript
let arrCopy = [1, 2, 3, 4, 5, 6];

arrCopy.copyWithin(0, 3, 6);
// 对原数组，从下标 0 的位置，把下标区间 [3, 6) 的数据取过来覆盖原来的，数组的长度不会变
console.log(a); // [4, 5, 6, 4, 5, 6]
```

## Array.prototype.entries 

返回一个可迭代对象

```javascript
let arrE = [1, 2, 3, 4, 5];

let arrEE = arrE.entries();
// next 按照数组顺序返回 [下标, value]
console.log(arrEE.next().value); // [0, 1]
console.log(arrEE.next().value); // [1, 2]
console.log(arrEE.next().value); // [2, 3]
```

## Array.prototype.keys 

返回一个可迭代对象

```javascript
let arrK = [1, 2, 3, 4, 5];

let arrKK = arrK.keys();

console.log(arrKK.next().value); // 0
console.log(arrKK.next().value); // 1
console.log(arrKK.next().value); // 2
```

## Array.prototype.values 

返回一个可迭代对象

```javascript
let arrV = [1, 2, 3, 4, 5];

let arrVV = arrV.values();

console.log(arrVV.next().value); // 1
console.log(arrVV.next().value); // 2
console.log(arrVV.next().value); // 3
```

## String.prototype.includes

```javascript
let strIncludes = '123456';

strIncludes.includes('234'); // true

// ES 5 的实现方法：
strIncludes.indexOf('234') >=  0; // 根据索引判断
strIncludes.search(/234/) >= 0; // search 可以使用正则
```

## String.prototype.repeat

```javascript
let strR = '12345';
let strRR = strR.repeat(3);
console.log(strRR); // '123451234512345'
```

## String.prototype.startsWith

```javascript
let strS = '12345';
strS.startsWith('123'); // true

// ES 5 的实现
strS.indexOf('123') === 0; // true
```

## String.prototype.endsWith

```javascript
let strE = '12345';
strE.endsWith('5'); // true
strE.endsWith('45'); // true

// ES 5 的实现
strE.lastIndexOf('5') === strE.length - 1; // true
strE.lastIndexOf('45') === strE.length - 2; // true
```

## Number.EPSILON

1 和大于 1 的最小值的差值，是个常量

有什么用？控制 JS 浮点数运算的最小误差

## Number.isInteger

判断是不是整数 `Number.isInteger(data)`

ES 5 的实现方法：`data === parseInt(data, 10)`

## Number.isFinite

有限的数字

```javascript
Number.isFinite(Math.PI); // true
Number.isFinite(Infinity); // false
Number.isFinite(1 / 0); // false
```

## Number.isNaN

`Number.isNaN(NaN); // true`

NaN 是一个数字吗？

[NaN（Not a Number，非数）是计算机科学中数值数据类型的一类值，表示未定义或不可表示的值。常在浮点数运算中使用。首次引入NaN的是1985年的IEEE 754浮点数标准。](https://zh.wikipedia.org/wiki/NaN)

ES 5 实现判断是否是 NaN：
```javascript
function isNaN (n) {
    return n !== n;
}
```

现在 JS 有两个判断 NaN 的方法：
```javascript
window.isNaN('a'); // true  这个方法有毒
Number.isNaN('a'); // false 这个比较靠谱
```

## Math.acosh() 

反双曲余弦值

## Math.hypot() 

参数的平方和再开根号

`Math.hypot(3, 4); // 5 勾股定理哈哈哈`

## Math.imul()


## Math.sign() 

返回数字的符号 1正数 -1负数 0是0  -0是-0 NaN

## Math.trunc 去掉小数部分

parseInt 在处理极大或极小值的时候，有bug

`parseInt(8888881181818181818181818.21313); // 8 JS 里面会把这个数表示成科学计数法 8.888e23，在 parseInt 的时候只看了8`

`Math.trunc(8888881181818181818181818.21313)`

parseInt 还有进制转换的坑
