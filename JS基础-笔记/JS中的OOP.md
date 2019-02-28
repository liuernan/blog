面向对象 VS 函数式

封装、继承、多态，并不是面向对象的专利，只是被面向对象推崇，函数式同样可以实现

主要是编程思维的区别

JS 对面向对象的实现：原型链

`__proto__`

JS 中对象与函数的关系：函数是一组可执行的代码组成的对象

`this` 连接了对象与函数，函数其实与对象并没有关系

```javascript
var person = {
    name: 'Jack',
    say: function () {
        console.log('My name is ' + this.name);
    }
}

var animal = {
    name: 'Cat'
}

person.say();  // this 指向 person，输出 My name is Jack
person.say.call(animal); // this 指向 animal，输出  My name is Cat
person.say.call(); // this 指向 window，输出 My name is（严格模式下会报错）
```

关于 `this`

```javascript
function fn1 () {
    console.log(this);
} // 此时，this 是不确定的，因为函数还没有被调用，没有传参

fn1() // 此时，this 指向 window


function fn2 () {
    'use strict'
    console.log(this);
}
fn2() // this 是 undefined，因为严格模式下，this 必须传


var obj1 = {
    sayThis: fn1
}
obj1.sayThis(); // this 是 obj
obj1.sayThis.call(1) // this 是 call 的第一个参数，这里是一个 value 为1的 Number 对象


// 以下的 this 都是文档规定了默认的，但是如果用 call 的写法调用函数，可以修改
button.onClick = function () {
    console.log(this); 
}
// 浏览器文档规定，this 指向触发事件的元素
button.onClick.call({name: 'Jack'}) // 自己用 call 去调，this 就可以指定


$('#button').on('click', function () {
    console.log(this);
});
// 看 jQuery 文档或控制台：this 指向 button 元素


var vue = new Vue({
    data: function () {
        console.log(this);
    }
})
// Vue 文档规定，这里的 this 指向新声明的 vue 对象
```

`bind` 创建一个新的函数，会 call 原来的函数，可以指定 call 里面的参数
```javascript
function fn1 () {
    console.log(this);
}

fn1() // this 是 window

var fn2 = fn1.bind(1);
fn2() // this 是 value 为1的 Number 对象
```

`new` 
---
批量创建对象  语法糖

习俗：
1. 构造函数首字母大写
2. 构造函数的命名省略掉 creat
3. 构造函数调用的时候如果不传参，可以省略后面的括号

继承
---
ES3 时的写法
ES6 的 class 的写法
