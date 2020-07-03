(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{357:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mvc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mvc"}},[t._v("#")]),t._v(" MVC")]),t._v(" "),s("p",[t._v("前端为什么会发展出框架")]),t._v(" "),s("p",[t._v("英文世界的前端知识总是最领先的")]),t._v(" "),s("p",[t._v("意大利面条式的代码 -> Backbone.js 的出现")]),t._v(" "),s("p",[t._v("前端 MVC 源自于后端 MVC，最终完善为 MVC 思想")]),t._v(" "),s("ul",[s("li",[t._v("M - Module 负责数据的交互（请求、发送）")]),t._v(" "),s("li",[t._v("V - View 负责页面视图的渲染（HTML）")]),t._v(" "),s("li",[t._v("C - Controller 负责其他（主要是逻辑控制）")])]),t._v(" "),s("p",[t._v("一坨代码不好读，不好维护，所以要分 MVC")]),t._v(" "),s("p",[t._v("每个页面都写一次 MVC 也很烦，所以通过面向对象把这套套路抽离出来，就形成了框架")]),t._v(" "),s("p",[t._v("发布-订阅模式、数据绑定的思想（Angular）、虚拟 DOM 的思想（React）")]),t._v(" "),s("p",[t._v("Vue 既实现了双向绑定，也实现了局部更新。Vue 的双向绑定思想来自于 Angular，Angular 双向绑定的思想来自于 C# 的 WPF")]),t._v(" "),s("p",[t._v("单向绑定--React")]),t._v(" "),s("p",[t._v("双向绑定的问题：两个组件模块用到了同一个 data，数据就乱了")]),t._v(" "),s("p",[t._v("单向绑定的思路：把 data 放在两个模块的父模块再包一层，页面数据不直接回传，而是通过其他的一个监听回传给 data，数据不是双向交互，而是一个单向的循环")]),t._v(" "),s("p",[t._v("单向绑定的页面，实际是“只读”的；")]),t._v(" "),s("p",[t._v("单向绑定其实是加了环节的半自动的双向绑定；双向绑定自己是全自动的双向绑定；")]),t._v(" "),s("p",[t._v("面试：如何理解单向绑定？")]),t._v(" "),s("p",[t._v("要点：1. 单向（Redux 单向数据流的思路）；2. Virtual DOM；")]),t._v(" "),s("p",[t._v("面试：如何实现双向绑定？")]),t._v(" "),s("p",[t._v("答：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Dirty Check: AngularJS 1.x 提供的操作数据的 API 在调用完之后都会再调用一次 Render 去重新渲染页面")])]),t._v(" "),s("li",[s("p",[t._v("Vue 使用ES 6 的新 API，监听到数据被修改")])])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// set 的时候增加监听")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("有个 bug：如果在 data 初始化之后，再新增一个属性，Vue 会监听不到，因为已经初始化完了，没有给属性加监听，Vue 提供了一个 API："),s("code",[t._v("this.$set(obj, key, value)")])]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("Proxy")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" dataProxy "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Proxy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在这里监听更新UI")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);