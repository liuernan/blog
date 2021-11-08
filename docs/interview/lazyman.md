# LazyMan

实现一个 `LazyMan` 满足以下效果：

```javascript
LazyMan('Jack')
// 你好，我是 Jack

LazyMan('Jack').sleep(10)
// 你好，我是 Jack
// (...waiting for 10 seconds)
// 我刚睡了 10 秒钟

LazyMan('Jack').sleep(10).eat('launch')
// 你好，我是 Jack
// (...waiting for 10 seconds)
// 我刚睡了 10 秒钟
// 我在吃午饭

LazyMan('Jack').eat('launch').eat('dinner')
// 你好，我是 Jack
// 我在吃午饭
// 我在吃晚饭

LazyMan('Jack').sleepFirst(10).eat('launch').eat('dinner')
// (...waiting for 10 seconds)
// 我刚睡了 10 秒钟
// 你好，我是 Jack
// 我在吃午饭
// 我在吃晚饭
```

关键词：`queue`、`next/nextTick()`、`Array.prototype.unshift()`、`Array.prototype.shift()`

废话少说，直接上代码：

```javascript
const LazyMan = (name) => {
  let queue = [];

  const next = () => {
    const curTask = queue.shift();
    curTask && curTask();
  };

  const task = () => {
    console.log(`你好，我是 ${name}`);
    next();
  };

  queue.push(task);

  const api = {
    sleep: (n) => {
      const task = () => {
        setTimeout(() => {
          console.log(`我刚睡了 ${n} 秒钟`);
          next();
        }, n * 1000);
      };
      queue.push(task);
      return api;
    },
    eat: (str) => {
      const task = () => {
        const map = {
          launch: '午饭',
          dinner: '晚饭'
        };
        console.log(`我在吃${map[str]}`);
        next();
      };
      queue.push(task);
      return api;
    },
    sleepFirst: (n) => {
      const task = () => {
        setTimeout(() => {
          console.log(`我刚睡了 ${n} 秒钟`);
          next();
        }, n * 1000);
      };
      queue.unshift(task);
      return api;
    }
  };

  setTimeout(() => {
    next();
  }, 0);

  return api;
}

```



