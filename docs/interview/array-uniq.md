# 数组去重

"老板，这么多方法满不满足你，不要再问我数组去重啦"

## 1. ES6 语法： Set

```javascript
const arrayUnique = (array)=>{
  return [...new Set(array)]
}

console.log(arrayUnique([1, 2, "2", 3, 3, 4, 5]));
```

利用 `Set` 集合中的元素是唯一的这一特性，一句话搞定，注意返回之前要把 `Set` 集合转为数组

兼容性差一丢丢，比如不能过滤 `{}`

## 2. ES5 无脑硬肝：两层循环

```javascript
function arrayUnique (array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        array.splice(j, 1);
        j--;
      }
    }
  }
  return array;
};

console.log(arrayUnique([1, 2, "2", 3, 3, 4, 5, 1]));
```

太无脑了，应该没有人会喜欢，会被嫌弃太菜了

## 3. indexOf 判断

```javascript
function arrayUnique(array) {
  var result = [];

  for (var i = 0; i < array.length; i++) {
    if (result.indexOf(array[i]) === -1) {
      result.push(array[i]);
    }
  }

  return result;
};

console.log(arrayUnique([1, 2, "2", 3, 3, 4, 5, 1]));
```

显然比方法 2 高级多了

## 4. sort + 遍历

```javascript
function arrayUnique(array) {
  array = array.sort();
  var result = [array[0]];

  for (var i = 1; i < array.length; i++) {
    if (array[i] !== array[i - 1]) {
      result.push(array[i]);
    }
  }

  return result;
};

console.log(arrayUnique([1, 2, "2", 3, 3, 4, 5, 1]));
```

其实感觉有点无聊，但是毕竟也算一种方法

## 5. 利用对象的 key 唯一（hash）

```javascript
function arrayUnique(array) {
  var object = {};
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (object[array[i]]) {
      object[array[i]]++;
    } else {
      object[array[i]] = 1;
      result.push(array[i]);
    }
  }
  return result //  [1, 2, 3, 4, 5]
  // return Object.keys(object); // ["1", "2", "3", "4", "5"]
};

console.log(arrayUnique([1, 2, "2", 3, 3, 4, 5, 1]));
```

数据结构变了，所以兼容性差

## 6. filter

```javascript
function arrayUnique(array) {
  return array.filter((item, index, array) => {
    // 手动从头获取当前 item 的 index，如果一致则说明么有重复
    return array.indexOf(item, 0) === index;
  });
};

console.log(arrayUnique([1, 2, "2", 3, 3, 4, 5, 1]));
```

剩下的都是大同小异，不想写了，反正实际工作中还有 underscore、lodash 之类的库函数可以用