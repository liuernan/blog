# 多年不变的垂直居中问题

先上 HTML：

```html
  <div class="outer">
    <div class="inner">
      innerinnerinnerinnerinnerinnerinnerinnerinnerinnerinnerinnerinnerinnerinnerinnerinnerinnerinnerinnerinnerinnerinner
    </div>
  </div>
```

**首先，如果外面元素没有写 `height`，只需要给外面的元素加上 `padding: 10px 0;` 就能将子元素垂直居中。**

**如果外面元素写死了 `height`，就需要使用其它方法垂直居中。**

**建议：在实际开发中，尽量不要写死高度**

这里顺便提一下中文页面不常遇到的问题，单词过长会顶出去，有多长顶多长。设置 `word-break: break-all;` 即可。

*简单说一下历史原因：最初的浏览器和 `HTML` 的诞生，完全就是为了看文档的，
`HTML` 的发明是为了文档的结构更清晰，而 `CSS` 的发明则是为了文档的排版更好看，就像真实的报纸、书的排版一样，可以看到那些搞 `CSS` 字体库设计的，
都是艺术设计相关的背景。感兴趣的同学可以去了解一下 `CSS` 的发展过程，对理解 `CSS` 更有帮助。*

## 1. 首选 `flex`

```css
  .outer {
    width: 500px;
    height: 500px; /* 外面容器的高度写死了 */
    border: 1px solid black;
    background-color: lightblue;
    display: flex;
    align-items: center; /* 子元素垂直居中 */
    justify-content: center; /* 子元素水平居中 */
  }

  .inner { /* 子元素啥都不用写 */
    border: 1px solid red;
    background-color: pink;
  }
```

## 2. `vertical-align`

```css
  .outer {
    width: 500px;
    height: 500px; /* 外面容器的高度写死了 */
    border: 1px solid black;
    background-color: lightblue;
  }

  .outer::after { /* 需要给外面容器加个伪类 */
    content: "";
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  }

  .inner {
    border: 1px solid red;
    background-color: pink;
    width: 100px;
    display: inline-block; /* vertical-align 生效的条件 */
    vertical-align: middle;
  }
```

## 3. 负 `margin`

```css
  .outer {
    width: 500px;
    height: 500px; /* 外面容器的高度写死了 */
    border: 1px solid black;
    background-color: lightblue;
    position: relative; /* 外面元素相对定位 */
  }

  .inner {
    border: 1px solid red;
    background-color: pink;
    position: absolute;
    top: 50%; /* 子容器的顶部到达父容器垂直 50% 处 */
    height: 100px; /* 子容器高度固定 */
    margin-top: -50px; /* 子容器负 margin 1/2 的高度，实现居中 */
  }
```

## 4. `marigin: auto`

```css
  .outer {
    width: 500px;
    height: 500px; /* 外面容器的高度写死了 */
    border: 1px solid black;
    background-color: lightblue;
    position: relative; /* 父容器相对定位 */
  }

  .inner {
    border: 1px solid red;
    background-color: pink;
    position: absolute; /* 子容器绝对定位 */
    width: 200px; /* 子容器宽度固定可以设置水平居中 */
    height: 200px; /* 子容器高度固定可以设置垂直居中 */
    margin: auto; 
    top: 0; /* top bottom 控制垂直居中 */
    bottom: 0;
    left: 0; /* left right 控制水平居中 */
    right: 0;
  }
```

## 5. `transform`
```css
  .outer {
    width: 500px;
    height: 500px; /* 外面容器的高度写死了 */
    border: 1px solid black;
    background-color: lightblue;
    position: relative; /* 外面元素相对定位 */
  }

  .inner {
    border: 1px solid red;
    background-color: pink;
    position: absolute;
    top: 50%; /* 子容器的顶部到达父容器垂直 50% 处 */
    transform: translateY(-50%); /* 不写死高度的情况下，子容器 Y 轴移动 -50% 子容器高度 */
    left: 50%; /* 同理可实现水平居中 */
    transform: translate(-50%, -50%);
  }
```

## 6. `table`

```html
  .outer {
    width: 500px;
    height: 500px; /* 外面容器的高度写死了 */
    border: 1px solid black;
    background-color: lightblue;
    display: table; /* table 自带垂直居中，也可以在 HTML 直接使用 table 布局 */
  }

  .inner {
    border: 1px solid red;
    background-color: pink;
    display: table-cell; /* table 自带垂直居中，也可以在 HTML 直接使用 table 布局 */
  }
```

总结：

* 最好用的是 `flex`，不接受反驳

* 其次好一点的是 `transform` 方法，因为不用写死高度

* 两个 `margin` 的方法差不多，但是写死高度总归是不好的

* `vertical-align` 需要设置 `inline-block` ，这个很容易有别的坑

* `table` 个人觉得不太好用，修改原生样式时可能会产生影响