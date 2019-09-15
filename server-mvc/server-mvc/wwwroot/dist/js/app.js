(function(t){function n(n){for(var o,i,s=n[0],u=n[1],l=n[2],c=0,f=[];c<s.length;c++)i=s[c],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);p&&p(n);while(f.length)f.shift()();return a.push.apply(a,l||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],o=!0,i=1;i<e.length;i++){var u=e[i];0!==r[u]&&(o=!1)}o&&(a.splice(n--,1),t=s(s.s=e[0]))}return t}var o={},r={app:0},a=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+".js"}function s(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.e=function(t){var n=[],e=r[t];if(0!==e)if(e)n.push(e[2]);else{var o=new Promise((function(n,o){e=r[t]=[n,o]}));n.push(e[2]=o);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(t);var l=new Error;a=function(n){u.onerror=u.onload=null,clearTimeout(c);var e=r[t];if(0!==e){if(e){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,e[1](l)}r[t]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(n)},s.m=t,s.c=o,s.d=function(t,n,e){s.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,n){if(1&n&&(t=s(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)s.d(e,o,function(n){return t[n]}.bind(null,o));return e},s.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(n,"a",n),n},s.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=n,u=u.slice();for(var c=0;c<u.length;c++)n(u[c]);var p=l;a.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var o=e("64a9"),r=e.n(o);r.a},"177b":function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var o=e("2b0e"),r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"nav"}},[e("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" |\n    "),e("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),e("router-view")],1)},a=[],i=(e("034f"),e("2877")),s={},u=Object(i["a"])(s,r,a,!1,null,null,null),l=u.exports,c=e("8c4f"),p=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"home"},[e("HelloWorld",{attrs:{msg:"Vue.js App compiled and running under Asp Core MVC server app."}})],1)},f=[],d=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"hello"},[e("h1",[t._v(t._s(t.msg))]),e("hr"),e("div",[e("button",{on:{click:function(n){return t.getGithubUsers()}}},[t._v("Get api data from public site")]),e("span",[t._v("This call is made directly from browser. No Cors is reqd. This is public api from github users...")])]),e("div",[e("button",{on:{click:function(n){return t.getDataFromLocalApi()}}},[t._v("Get api data from another domain")]),e("span",[t._v("This api is running in separate domain. (https://localhost:5001). JS brower calls the MVC server and server calls the api and returns the data...")])]),e("div",[e("button",{on:{click:function(n){return t.postData()}}},[t._v("Post Jsondata ")]),e("span",[t._v("Post data to another domain using axios")])]),e("hr"),e("p",[t._v("Result:")]),e("p",[t._v(t._s(t.info))])])},h=[],v=e("bc3a"),m=e.n(v),g={name:"HelloWorld",props:{msg:String},data:function(){return{info:"..."}},methods:{getGithubUsers:function(){var t=this;console.log("getting messages from public api"),m.a.get("https://api.github.com/users").then((function(n){return t.info=n}))},getDataFromLocalApi:function(){var t=this;console.log("getting data from local api");var n="/api/transactions";m.a.get(n).then((function(n){console.log("data retrieved successfully"),console.log(">>>raw resp: ",n),t.info=n.data})).catch((function(n){console.log(n),t.info=n})).finally((function(){console.log("done")}))},postData:function(){var t=this;console.log("posting data to local api");var n="/api/transactions",e={id:999,userid:"user1",description:"McDonalds Restaurant",transType:"DR",amount:40.99};m()({method:"post",url:n,data:e}).then((function(n){console.log("data posted successfully"),console.log(">>>raw resp: ",n),t.info=n.data})).catch((function(n){console.log(n),t.info=n})).finally((function(){console.log("done")}))}}},b=g,y=(e("9956"),Object(i["a"])(b,d,h,!1,null,"d4891d24",null)),_=y.exports,w={name:"home",components:{HelloWorld:_}},j=w,O=Object(i["a"])(j,p,f,!1,null,null,null),P=O.exports;o["a"].use(c["a"]);var k=new c["a"]({routes:[{path:"/",name:"home",component:P},{path:"/about",name:"about",component:function(){return e.e("about").then(e.bind(null,"f820"))}}]}),x=e("2f62");o["a"].use(x["a"]);var T=new x["a"].Store({state:{},mutations:{},actions:{}});o["a"].config.productionTip=!1,new o["a"]({router:k,store:T,render:function(t){return t(l)}}).$mount("#app")},"64a9":function(t,n,e){},9956:function(t,n,e){"use strict";var o=e("177b"),r=e.n(o);r.a}});
//# sourceMappingURL=app.js.map