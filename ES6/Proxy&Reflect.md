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

Proxy
---
什么是代理？

代理有什么用？

```javascript
var beProxy = {name: 'Jack'};
var proxy = new Proxy(beProxy, {
    get: function (target, key) {
        console.log('target: ' + target);
        console.log('key: ' + key);
        return Reflect.get(target, key);
    },
    set: function (target, key, value) {
        console.log('target: ' + target);
        console.log('key: ' + key);
        console.log('value: ' + value);
        return Reflect.set(target, key, value);
    }
});

proxy.name; // 看 console
proxy.age = 18; // 看 console
```

[无限代理（真杰宝腻害）](https://hacks.mozilla.org/2015/07/es6-in-depth-proxies-and-reflect/)
