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

通过原型链用构造函数实现类：

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
class Animal {
    constructor() {
        
    }
    
    move() {
        console.log('moving');
    }
}

class Person extends Animal {
    constructor(name, age) {
        super() // 继承超类（eg. 父类、基类）的构造函数，必须在 使用 this 之前调用
        this._name = name || '无名氏';
        this.age = age || 0;
    }
    
    // 属性封装，可以对属性的读写做控制
    get name() {
        return this._name
    }
    
    set name(value) {
        if (value.length > 4) {
            console.log('不要瞎 JB 改名字');
        } else if (value.length < 2) {
            console.log('改名字能不能认真点');
        } else {
            this._name = value;
        }
    }
    
    walk() {
        console.log('walking');
    }
    
    // 静态方法，通过类名可以访问，类生成的对象不能访问
    static die() {
        console.log('人类灭亡了');
    }
}

let p1 = new Person('Jack', 18);
let p2 = new Person('Pony', 22);

p1.walk === p2.walk; // true
```

目前 JS 的 class 还不太完善，不如直接用原型链，但是最终会取代原型链，因为这样较为严格的标准规范，使得大家都能写出结构规范良好的代码，培养大家都写“工业化代码”，大家都成为码农，没什么技术含量，老员工走人了也不用担心新员工看不懂以前的代码（如果语言规范不再有大的更新的话）
