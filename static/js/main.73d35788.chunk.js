(this["webpackJsonpusers-recruitment"]=this["webpackJsonpusers-recruitment"]||[]).push([[0],{23:function(e,t,n){e.exports=n(43)},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(9),s=n.n(c),u=n(19),i=n(6),l=n(22);n(28);function o(e){var t=e.title;return a.a.createElement("h1",{className:"title"},t)}n(29);function m(e){var t=e.pageTitle;return a.a.createElement("header",{className:"container"},a.a.createElement(o,{title:t}))}function f(e){var t=e.children;return a.a.createElement("main",null,t)}n(30);function p(e){var t=e.type,n=e.classname,r=e.id,c=e.name,s=e.placeholder,u=e.onChange;return a.a.createElement("input",{className:"input input__text ".concat(n),id:r,type:t,name:c,placeholder:s,onChange:function(e){return u(e.target.value)}})}p.defaultProps={placeholder:""};var d=n(12),E=n(8),h=n.n(E),v=n(10);function b(e){return y.apply(this,arguments)}function y(){return(y=Object(v.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var L=function(){var e=Object(d.a)((function(){return{usersList:[],filteredList:[],loadList:function(){var t=Object(v.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b("https://jsonplaceholder.typicode.com/users");case 2:e.usersList=t.sent,e.filteredList=e.usersList;case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),filterUsersByName:function(t){var n=new RegExp(t.toLowerCase());e.filteredList=e.usersList.filter((function(e){return n.test(e.name.toLowerCase())}))}}}));return e};n(33);function g(e){var t=e.content;return a.a.createElement("ol",{className:"list list__ordered"},t)}function j(e){var t=e.name,n=L();Object(r.useEffect)((function(){n.loadList()}),[n]),Object(r.useEffect)((function(){n.filterUsersByName(t)}),[n,t]);return Object(d.b)((function(){return a.a.createElement(g,{content:n.filteredList.map((function(e){return a.a.createElement("li",{key:e.id,className:"list__ordered--item"},a.a.createElement("span",{className:"name"},e.name),a.a.createElement("span",{className:"username"},"@",e.username))}))})}))}function N(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1];return a.a.createElement(r.Fragment,null,a.a.createElement(m,{pageTitle:"Users list"}),a.a.createElement(f,null,a.a.createElement("div",{className:"container"},a.a.createElement(p,{type:"text",classname:"margin-center",id:"name-filter",name:"filter",placeholder:"Search by user name...",onChange:function(e){return c(e)}}),a.a.createElement(j,{name:n}))))}j.defaultProps={name:""};n(34);var w=function(){return a.a.createElement(u.a,null,a.a.createElement(i.c,null,a.a.createElement(i.a,{path:"/"},a.a.createElement(N,null))))};n(42);s.a.render(a.a.createElement(w,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.73d35788.chunk.js.map