Reflect
---
Reflect -> Proxy -> Node.js 

Reflect 反射、映射

```javascript
var obj1 = {
    a: 1,
    b: 2,
    get c() {
        return this.a + this.b;
    }
}

console.log(obj1.c);

var obj2 = {
    a: 3,
    b: 3
}
Reflect.get(obj1, 'c', obj2); // 6
```

Reflect.set 同上，一个是取值，一个是赋值

Reflect.apply

```javascript
var min = (...args) => Reflect.apply(Math.min, undefined, args);

min(3, 4, 2, 1);
```

API 基本上和 Object 的 API 的功能一样

