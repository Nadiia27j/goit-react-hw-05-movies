"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[310],{47:function(n,t,e){e.d(t,{e:function(){return v}});var r,a,o,u=e(689),c=e(168),i=e(934),s=e(731),p=i.Z.ul(r||(r=(0,c.Z)(["\n  padding-left: 15px;\n"]))),f=i.Z.li(a||(a=(0,c.Z)(["\n  :not(:last-child) {\n    margin-bottom: 10px;\n  }\n"]))),l=(0,i.Z)(s.rU)(o||(o=(0,c.Z)(["\n font-size: 15px;\n color: black;\n\n :hover {\n    color: blue;\n }\n"]))),d=e(184),v=function(n){var t=n.movies,e=(0,u.TH)();return(0,d.jsx)(p,{children:t.map((function(n){var t=n.id,r=n.original_title;return(0,d.jsx)(f,{children:(0,d.jsx)(l,{to:"/movies/".concat(t),state:{from:e},children:r})},t)}))})}},310:function(n,t,e){e.r(t),e.d(t,{default:function(){return _}});var r,a,o,u,c,i,s,p=e(861),f=e(885),l=e(687),d=e.n(l),v=e(791),x=e(731),h=e(390),Z=e(47),b=e(168),m=e(934),g=m.Z.div(r||(r=(0,b.Z)(["\n  padding: 28px 32px;\n"]))),w=m.Z.form(a||(a=(0,b.Z)(["\n  display: inline-flex;\n  margin-bottom: 28px;\n"]))),k=m.Z.input(o||(o=(0,b.Z)(["\n  padding: 8px;\n  width: 200px;\n  font-size: 18px;\n  outline: transparent;\n  border: 1px solid #e1d3c1;\n  border-radius: 50px;\n  :hover,\n  :focus {\n    border-color: #b4a89a;\n  }\n"]))),y=m.Z.button(u||(u=(0,b.Z)(["\n  width: 70px;\n  height: 40px;\n  font-size: 16px;\n  background-color: gray;\n  border: 1px solid #e1d3c1;\n  border-radius: 50px;\n  :hover {\n    background-color: blueviolet;\n    color: #ffffff;\n  }\n"]))),j=(m.Z.ul(c||(c=(0,b.Z)(["\n  padding-left: 16px;\n"]))),(0,m.Z)(x.rU)(i||(i=(0,b.Z)(["\n  text-decoration: underline;\n  color: black;\n  font-weight: 500;\n  font-size: 20px;\n  color: black;\n  :hover {\n    color: #c27ba0;\n  }\n"]))),m.Z.li(s||(s=(0,b.Z)(["\n  :not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),e(184)),_=function(){var n=(0,v.useState)([]),t=(0,f.Z)(n,2),e=t[0],r=t[1],a=(0,v.useState)(""),o=(0,f.Z)(a,2),u=o[0],c=o[1],i=(0,x.lr)(),s=(0,f.Z)(i,2),l=s[0],b=s[1],m=l.get("query");return(0,v.useEffect)((function(){function n(){return(n=(0,p.Z)(d().mark((function n(){var t;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,h.qF)(m);case 3:t=n.sent,r(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}m&&function(){n.apply(this,arguments)}()}),[m]),(0,j.jsxs)(g,{children:[(0,j.jsxs)(w,{onSubmit:function(n){n.preventDefault(),b({query:u}),c("")},children:[(0,j.jsx)(k,{type:"text",value:u,onChange:function(n){c(n.currentTarget.value.toLowerCase())}}),(0,j.jsx)(y,{type:"submit",children:"Search"})]}),!!e.length&&(0,j.jsx)(Z.e,{movies:e})]})}},390:function(n,t,e){e.d(t,{Df:function(){return c},M1:function(){return p},TP:function(){return s},qF:function(){return i},tx:function(){return f}});var r=e(861),a=e(687),o=e.n(a),u=e(388);u.Z.defaults.baseURL="https://api.themoviedb.org/3",u.Z.defaults.params={api_key:"d2d971f07eb4244bef9c04c57e6caf75",language:"en-US"};var c=function(){var n=(0,r.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/movie/day");case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?query=".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t));case 2:return e=n.sent,console.log(e),n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/credits"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/reviews"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=310.0fd18f2a.chunk.js.map