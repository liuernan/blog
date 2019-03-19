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
        console.log('U win! ' + n);
    } catch (error) {
        console.log('U lose! ' + error)
    }
}

outerFn();
```
