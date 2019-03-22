前端为什么会发展出框架

英文世界的前端知识总是最领先的

意大利面条式的代码 -> Backbone.js 的出现

前端 MVC 源自于后端 MVC，最终完善为 MVC 思想

* M - Module 负责数据的交互（请求、发送）
* V - View 负责页面视图的渲染（HTML）
* C - Controller 负责其他（主要是逻辑控制）

一坨代码不好读，不好维护，所以要分 MVC

每个页面都写一次 MVC 也很烦，所以通过面向对象把这套套路抽离出来，就形成了框架

发布-订阅模式、数据绑定的思想（Angular）、虚拟 DOM 的思想（React）

Vue 既实现了双向绑定，也实现了局部更新。Vue 的双向绑定思想来自于 Angular，Angular 双向绑定的思想来自于 C# 的 WPF

单向绑定--React
---
双向绑定的问题：两个组件模块用到了同一个 data，数据就乱了

单向绑定的思路：把 data 放在两个模块的父模块再包一层，页面数据不直接回传，而是通过其他的一个监听回传给 data，数据不是双向交互，而是一个单向的循环

单向绑定的页面，实际是“只读”的；

单向绑定其实是加了环节的半自动的双向绑定；双向绑定自己是全自动的双向绑定；

面试：如何理解单向绑定？

要点：1. 单向（Redux 单向数据流的思路）；2. Virtual DOM；

面试：如何实现双向绑定？

答：

1. Dirty Check: AngularJS 1.x 提供的操作数据的 API 在调用完之后都会再调用一次 Render 去重新渲染页面

2. Vue 使用ES 6 的新 API，监听到数据被修改
```javascript
Object.defineProperty(obj, key, {
    get() {},
    set(data) {}  // set 的时候增加监听
})
```
有个 bug：如果在 data 初始化之后，再新增一个属性，Vue 会监听不到，因为已经初始化完了，没有给属性加监听，Vue 提供了一个 API：`this.$set(obj, key, value)`

3. Proxy 
```javascript
let data = {}
let dataProxy = new Proxy(data, {
    get(target, key) {},
    set(target, key, value) {} // 在这里监听更新UI
})
```
