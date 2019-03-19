和 Promise 结合在一起用，使得异步函数更像是一个同步函数

```javascript
let getPoint = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(function () {
            let n = parseInt(Math.random() * 6 + 1);
            resolve(n)
        }, 3000);
    })
}

getPoint().then(function (n) {
    console.log(n)
}, function () {})
```
