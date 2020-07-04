# Promise

回调是函数调用的一种形式，把一个函数传给另一个函数调用，就是回调

回调地狱：回调嵌套层级太多（超过三到五层），还都是匿名回调，就很难理解

不同环境下，回调的方式语法不一样，Node.js/jQuery，需要看文档

Promise 解决了回调地狱

```javascript
function getData () {
    return new Promise(function (resolve, reject) {
       if (true) {
           resolve(data)
       } else {
           reject()
       }
    })
}

// Promise 链，后面的 then 的成功和失败函数的调用，是看第一层 then 不论调用的是成功或失败，是否返回了 reject
getData()
  .then(fn1(), fn2()) // fn 成功则调用 fn1，fn 失败则调用 fn2
  .then(fn3(), fn4()) // 不论上面执行的是 fn1 还是 fn2：如果没有报错并且没有返回 reject，则执行 fn3，如果代码报错或者返回了 reject 则执行 fn4
  .then(fn5(), fn6()) // 同上
```
`Promise.catch()` 只处理失败的情况，`Promise.finally()` 不论成功或失败都执行同样的函数，其实都是 `Promise.then()` 的语法糖

其他语法看 MDN 的文档

`async` and `await`：是否等待 Promise 的结果

```javascript
try {
    let result = await getData();
} catch (error) { // 不写 catch ，promise失败的情况下会报错
    console.log(error)
}

```

