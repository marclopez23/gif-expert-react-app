(this["webpackJsonpgif-expert"]=this["webpackJsonpgif-expert"]||[]).push([[0],{14:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),r=n(7),i=n.n(r),s=(n(14),n(2)),u=n(9),j=n(0),o=function(t){var e=t.func,n=Object(c.useState)(""),a=Object(s.a)(n,2),r=a[0],i=a[1];return Object(j.jsx)("form",{onSubmit:function(t){t.preventDefault(),r.trim().length>0&&e((function(t){return[r].concat(Object(u.a)(t))})),i("")},children:Object(j.jsx)("input",{type:"text",name:"category",id:"category",onChange:function(t){i(t.target.value)},value:r})})},l=function(t){var e=t.alt,n=t.url;return Object(j.jsxs)("article",{className:"card animate__animated animate__fadeIn",children:[Object(j.jsx)("img",{src:n,alt:e}),Object(j.jsx)("p",{className:"title",children:e})]})},d=n(6),f=n.n(d),b=n(8),h=function(){var t=Object(b.a)(f.a.mark((function t(e){var n,c,a,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=66ATDnouzCZjgxnHcxBaTHGHTbO9lvof"),t.next=3,fetch(n);case 3:return c=t.sent,t.next=6,c.json();case 6:return a=t.sent,r=a.data,t.abrupt("return",r.map((function(t){return{id:t.id,title:t.title,url:t.images.downsized_medium.url}})));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(s.a)(e,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){h(t).then((function(t){return r({data:t,loading:!1})}))}),[t]),a},x=function(t){var e=t.category,n=O(e),c=n.loading,a=n.data;return Object(j.jsxs)("section",{children:[Object(j.jsx)("h3",{children:e}),c?Object(j.jsx)("h4",{className:"animate__animated animate__flash",children:"Cargando ..."}):Object(j.jsx)("article",{className:"card-grid ",children:a.map((function(t){var e=t.id,n=t.title,c=t.url;return Object(j.jsx)(l,{alt:n,url:c},e)}))})]})},m=function(){var t=Object(c.useState)(["React"]),e=Object(s.a)(t,2),n=e[0],a=e[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"GifExpertAPP"}),Object(j.jsx)(o,{func:a}),Object(j.jsx)("hr",{}),Object(j.jsx)("article",{children:Object(j.jsx)("ol",{children:n.map((function(t){return Object(j.jsx)(x,{category:t},t)}))})})]})};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.f5eb0005.chunk.js.map