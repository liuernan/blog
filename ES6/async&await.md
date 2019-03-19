和 Promise 结合在一起用，使得异步函数更像是一个同步函数

```javascript
let getPoint = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(function () {
            let n = parseInt(Math.random() * 6 + 1);
            resolve(n);
        }, 3000);
    })
}

getPoint().then(function (n) {
    console.log(n)
}, function () {})
```

await 只能放在 async 函数里面，不然代码会报错

```javascript
let getPoint2 = (guess) => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            let n = parseInt(Math.random() * 6 + 1);
            if (n > 3) {
                if (guess === 'big') {
                    resolve(n);
                } else {
                    reject(n);
                }
            } else {
                if (guess === 'small') {
                    resolve(n);
                } else {
                    reject(n);
                }
            }
        }, 1000)
    })
}

// let n = await getPoint2(); // 语法不支持直接这么写，deno将会支持这种写法

async function outerFn () {
    try {
        let n = await getPoint2('big');
        console.log('U win!');
    } catch (error) {
        console.log('U lose! ' + error)
    }
}
outerFn();

// 如果有多个 promise 需要等待
// Promise.all 全部都要成功，Promise.race 只要其中一个成功
Promise.all([getPoint2('big'), getPoint2('big')]).then(
    (x) => {
        console.log('Super win!');
        console.log(x); // x 是个数组，分别是第一个和第二个结果
    },
    (error) => {
        console.log('Super lose! ');
        console.log(error); // erroe 是某一个数字
    }
);

// 多个 Promise 时候，async/await 的写法
async function outerFn2 () {
    try {
        let n = await Promise.all([getPoint2('big'), getPoint2('big')]);
        console.log('Super win! by await');
        console.log(n);
    } catch (error) {
        console.log('Super lose! by await');
        console.log(error);
    }
}
outerFn2();
```

为什么要搞这个东西？

1. 让异步代码看起来像是同步的样式
2. 相对于 Promise，更容易理解 `Promise().then(f1, f2).then(f3, f4).then(f5, f6)` fn 到底执行哪一个，比较复杂

