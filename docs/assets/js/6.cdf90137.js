(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{137:function(t,s,a){"use strict";a.r(s);var r=a(0),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"jim前端架构设计与开发规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jim前端架构设计与开发规范","aria-hidden":"true"}},[t._v("#")]),t._v(" JIM前端架构设计与开发规范")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("本篇中开发规范带有强烈个人色彩，斟酌阅读")])]),t._v(" "),a("h2",{attrs:{id:"项目规划"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目规划","aria-hidden":"true"}},[t._v("#")]),t._v(" 项目规划")]),t._v(" "),a("p",[t._v("目前JIM的业务范围是为第三方提供IM服务，包括sdk集成，第三方数据接入和JIM独立版。\n前端分为3大模块，也是3个子项目，分别处理相关业务。")]),t._v(" "),a("p",[t._v("Portal: JIM的独立版本\nAdmin: 提供给第三方的系统配置，包括用户导入，角色管理，权限管理，品牌管理等\nSDK: 提供给第三方的\bIM入口，目前考虑以iframe方式集成至目标系统")]),t._v(" "),a("h2",{attrs:{id:"代码结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码结构","aria-hidden":"true"}},[t._v("#")]),t._v(" 代码结构")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" app"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" doc "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Vuepress文档服务器")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" portal"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Portal根目录")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" modules "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 各个模块的代码")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" boarding "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \b登录、注册入口")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" chat "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 聊天模块")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" contact "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 联系人模块")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" common "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 共用工具类，组件等")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" images "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 图片")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" layout "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 排版组件")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" store "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Vuex")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" theme "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 公共样式")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Vue的根组件")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 项目配置 待定")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" build "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// build脚本")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" isdk "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// internal sdk，用来处理api call，常量，缓存。相当于ui层的end point")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),a("h2",{attrs:{id:"开发规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发规范","aria-hidden":"true"}},[t._v("#")]),t._v(" 开发规范")]),t._v(" "),a("blockquote",[a("p",[t._v("\b开发规范会以一小点一小点总结，后续会归纳整理")])]),t._v(" "),a("ol",[a("li",[t._v("嵌套结构数据获取")])]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" _get "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lodash/get'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fetchAndProcess")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("params")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" response "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("api")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 严禁出现此类数据嵌套和获取方式")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" user "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 推荐")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" user "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data.data.list.0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("组件定义与使用规范")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("严禁使用毫无意义的名称，例如 'list', 'IndexList', 'UserInfo'")])]),t._v(" "),a("li",[a("p",[t._v("严禁使用index.vue和main.vue之类的类根组件文件")])]),t._v(" "),a("li",[a("p",[t._v("组件文件名使用大驼峰，组件内name要求与文件名一致，方便debug和一致性")])]),t._v(" "),a("li",[a("p",[t._v("向外暴露的根组件使用Im作为前缀。")])]),t._v(" "),a("li",[a("p",[t._v("不向外暴露的组件且只为某些个别组件服务的子组件，不需要使用Im开头")]),t._v(" "),a("p",[t._v("例如：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" common"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" components"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" selector"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" ImUserSelector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对外暴露的共用组件")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" UserSelectorItem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不期望外界引入的子组件，服务于ImUserSelector")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" UserSelectorSearchBar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不期望外界引入的子组件，服务于ImUserSelector")]),t._v("\n")])])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);