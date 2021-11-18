# 手写 Promise

自己实现 JS 的 Promise

代码在这里：[https://github.com/liuernan/promise-demo](https://github.com/liuernan/promise-demo)

这是顺便写的单元测试的执行结果：

```javascript
Promise
    ✓ 是一个类
    ✓ new Promise() 如果接受的不是一个函数就报错
    ✓ new Promise(fn) 会生成一个对象，对象有 then 方法
    ✓ new Promise(fn) 中的 fn 立即执行
    ✓ new Promise(fn) 中的 fn 执行的时候接受 resolve 和 reject 两个函数
    ✓ Promise 的初始状态是 pending
    ✓ new Promise(fn) 中的 fn 执行的时候调用了 resolve，这个 Promise 的状态变成 fulfilled
    ✓ new Promise(fn) 中的 fn 执行的时候调用了 reject，这个 Promise 的状态变成 rejected
    ✓ new Promise(fn) 状态变成 fulfilled 就不能再改变，也就是不能再调用 reject 了
    ✓ new Promise(fn) 状态变成 rejected 就不能再改变，也就是不能再调用 resolve 了
    ✓ promise.then(success) 中的 success 会在且仅在 resolve 被调用之后执行
    ✓ promise.then(onFulfilled) 中的 onFulfilled 接受 resolve 传来的参数，且只能被调用一次
    ✓ promise.then(null, fail) 中的 fail 会在且仅在 reject 被调用之后执行
    ✓ promise.then(onFulfilled, onRejected) 中的 onRejected 接受 reject 传来的参数，且只能被调用一次
    ✓ promise.then(onFulfilled, onRejected) 中的 onFulfilled 和 onRejected 都是非必传
    ✓ promise.then(onFulfilled, onRejected) 中的 onFulfilled 如果不是一个函数，就忽略
    ✓ promise.then(onFulfilled, onRejected) 中的 onRejected 如果不是一个函数，就忽略
    ✓ promise.then(onFulfilled, onRejected) 当前的执行环境上下文未执行完成前，不能执行 then 里面的 onFulfilled
    ✓ promise.then(onFulfilled, onRejected) 当前的执行环境上下文未执行完成前，不能执行 then 里面的 onRejected
    ✓ promise.then(onFulfilled, onRejected) 中的 onFulfilled 调用时没有 this
    ✓ promise.then(onFulfilled, onRejected) 中的 onRejected 调用时没有 this
    ✓ promise.then(onFulfilled, onRejected) 中的 then 可以在同一个 promise 里被多次调用，多个 onFulfilled 按顺序执行
    ✓ promise.then(onFulfilled, onRejected) 中的 then 可以在同一个 promise 里被多次调用，多个 onRejected 按顺序执行


23 passing (40ms)
```
