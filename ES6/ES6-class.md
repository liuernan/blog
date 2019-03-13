JavaScript 的历史
---
1995年，Branden Eich，网景，Navigator，IE

《Code Rush》纪录片，Navigator, open source, Firefox, Mozilla

Branden Eich, CEO, one week

网景让 Branden Eich 去开发 Javascript 语言，要求这门语言像 Java，但是 BE 不喜欢 Java

ES 6 之前，class 是一个保留字，通过原型来实现了类

原型 -> 原型链
---
当我们写一句 `var obj = {}` 时，我们到底写了什么？

变量是变量，对象是对象，变量实际存的是对象在内存中的一个地址

当我们写一句 `obj.toString()` 是，我们到底写了什么？

`obj.__proto__ === window.Object.prototype`

`obj.toString === window.Object.prototype.toString`

`obj.toString()` 是 `window.Object.prototype.tiString.call(obj)` 的语法糖

`this` 是 call 的隐藏的真正的第一个参数，参考 Python

通过原型实现类：

```javascript
function creatPerson (name, age) {
    var obj = {};
    obj.name = name || '';
    obj.age = age || '';
    
    return obj;
}

creatPerson('Jack', 99);
```

原型 -> 构造函数 -> 类

`class` 的语法
---
```javascript
class Person {
    constructor(name, age) {
        this.name = name || '无名氏',
        this.age = age || 0
    }
    
    walk() {
        console.log('walking');
    }
}

let p1 = new Person('Jack', 18);
let p2 = new Person('Pony', 22);

p1.walk === p2.walk; // true
```

