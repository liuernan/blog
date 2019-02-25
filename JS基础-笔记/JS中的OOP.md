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
