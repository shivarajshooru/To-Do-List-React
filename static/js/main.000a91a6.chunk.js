(this["webpackJsonpto-do-app"]=this["webpackJsonpto-do-app"]||[]).push([[0],{14:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c(8),a=c.n(i),s=c(5),d=c(2),j=(c(7),c(0));var r=function(e){var t=Object(n.useState)(e.item),c=Object(d.a)(t,2),i=c[0],a=c[1],s=Object(n.useState)(!1),r=Object(d.a)(s,2),l=r[0],o=r[1];return Object(j.jsx)("div",{className:"list",children:l?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("textarea",{className:"editTask",onChange:function(e){a(e.target.value)},placeholder:"Edit task",value:i}),Object(j.jsx)("button",{className:"saveTask",onClick:function(){e.onEdit(i,e.idx),o(!1)},disabled:0===i.trim().length,children:"Save Task"})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{children:e.item}),Object(j.jsxs)("div",{id:"edit-delete",children:[Object(j.jsx)("button",{className:"edit",onClick:function(){return o(!0)},children:"edit"}),Object(j.jsx)("button",{className:"delete",onClick:function(){return e.onDelete(e.idx)},children:"delete"})]})]})})};var l=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)(""),l=Object(d.a)(a,2),o=l[0],b=l[1],u=function(e,t){c[t]=e,i(Object(s.a)(c))},O=function(e){c.splice(e,1),i(Object(s.a)(c))};return Object(j.jsxs)("div",{id:"main",children:[Object(j.jsx)("h1",{children:"TO DO LIST"}),Object(j.jsxs)("div",{id:"add-item",children:[Object(j.jsx)("textarea",{id:"task",onChange:function(e){b(e.target.value)},placeholder:"New Item",value:o}),Object(j.jsx)("button",{id:"btn",onClick:function(){c.push(o),i(Object(s.a)(c)),b("")},disabled:0===o.trim().length,children:"Add Item"})]}),c.map((function(e,t){return Object(j.jsx)(r,{item:e,idx:t,onEdit:u,onDelete:O},"".concat(e,"_").concat(t))}))]})},o=document.getElementById("root");a.a.render(Object(j.jsx)(n.StrictMode,{children:Object(j.jsx)(l,{})}),o)},7:function(e,t,c){}},[[14,1,2]]]);
//# sourceMappingURL=main.000a91a6.chunk.js.map