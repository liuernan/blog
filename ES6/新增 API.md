Object.assign
---
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
