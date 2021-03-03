# 括号正确闭合

## 题目

给定一个只包括 '('，')'，'{'，'}'，'['，']'的字符串，判断字符串是否有效。

有效字符串需满足：

* 左括号必须用相同类型的右括号闭合。

* 左括号必须以正确的顺序闭合。

* 注意空字符串可被认为是有效字符串。

示例 1:

    输入: "()"
    输出: true

示例2:

    输入: "()[]{}"
    输出: true

示例3:

    输入: "(]"
    输出: false

示例4:

    输入: "([)]"
    输出: false

示例5:

    输入: "{[]}"
    输出: true

## 代码

```javascript
// 方法一，自己一开始的思路，发现自己想多了，面试时候记得先问的清清楚楚再开始写代码
// main entrance
const checker = (data) => {
  return isString(data) && notEmptyString(data) && isCorrectlyClosed(data);
};

// methods
const isString = (data) => {
  return typeof data === "string";
};

const notEmptyString = (data) => {
  data = String.prototype.trim.call(data);
  return Boolean(data.length);
};

function isCorrectlyClosed(data) {
  var trimedData = data.trim();
  var leftIndex, rightIndex;

  leftIndex = Math.max(
    String.prototype.lastIndexOf.call(trimedData, "("),
    String.prototype.lastIndexOf.call(trimedData, "["),
    String.prototype.lastIndexOf.call(trimedData, "{")
  );

  if (leftIndex !== -1) {
    var ruleMap = {
      "(": ")",
      "[": "]",
      "{": "}"
    };
    rightIndex = String.prototype.indexOf.call(trimedData, ruleMap[trimedData.charAt(leftIndex)]);

    if (rightIndex === -1) {
      return false;
    } else {
      return isCorrectlyClosed((trimedData.slice(0, leftIndex) + trimedData.slice(rightIndex + 1)));
    }
  } else {
    rightIndex = Math.max(
      String.prototype.indexOf.call(trimedData, "("),
      String.prototype.indexOf.call(trimedData, "["),
      String.prototype.indexOf.call(trimedData, "{")
    );

    return rightIndex === -1;
  }

}

console.log(checker("()"));
console.log(checker("()[]{}"));
console.log(checker("(]"));
console.log(checker("([)]"));
console.log(checker("([)])")); // 自己一开始想错了，认为这种模式要判定为 true
console.log(checker("{[]}"));
// 方法一 end

// 方法二，精准审题后最简单且易懂的写法，数组作为一个栈，先进后出
function checker2(data) {
  var tempStack = [];
  var left = ["(", "[", "{"];
  var right = [")", "]", "}"];

  for (let i = 0; i < data.length; i++) {
    if (data[i] === " ") {
      continue;
    } else if (left.indexOf(data[i]) !== -1) {
      tempStack.push(data[i]);
    } else {
      if (tempStack.pop() !== left[right.indexOf(data[i])]) {
        return false;
      }
    }
  }
  return !tempStack.length
}

console.log('----checher2------');
console.log(checker2("()"));
console.log(checker2("()[]{}"));
console.log(checker2("(]"));
console.log(checker2("([)]"));
console.log(checker2("([)])")); // 与方法一的区别在于这种情况
console.log(checker2("{[]}"));
// 方法二 end

```