(window.webpackJsonpexchangerateapp=window.webpackJsonpexchangerateapp||[]).push([[0],{57:function(e,n,t){e.exports=t(66)},66:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),u=t(7),c=t.n(u),o=t(10),i=t(9),l=t(43),s=t(29);function f(){var e=Object(o.a)(["\n  padding: 1rem;\n"]);return f=function(){return e},e}function g(){var e=Object(o.a)(["\n  background: ",";\n  color: ",";\n  height: 50px;\n  display: flex;\n  align-items: center;\n"]);return g=function(){return e},e}function m(){var e=Object(o.a)(["\n  border: 1px solid ",";\n"]);return m=function(){return e},e}var d=i.default.article(m(),(function(e){return e.theme.colors.text})),h=i.default.header(g(),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.light})),b=i.default.div(f()),p=function(e){var n=e.header,t=e.children;return a.a.createElement(d,null,a.a.createElement(h,null,n),a.a.createElement(b,null,t))},y=t(102),v=function(e){var n=e.value,t=e.label,r=e.onChange,u=e.name;return a.a.createElement(y.a,{type:"number",name:u,label:t,value:n,onChange:r,margin:"normal",variant:"outlined"})},E=t(100),O=t(101),j=function(e){var n=e.value,t=e.onChange,r=e.items,u=e.name;return a.a.createElement(E.a,{value:n,onChange:t,displayEmpty:!0,name:u},r.map((function(e){return a.a.createElement(O.a,{key:e,value:e},e)})))},C=function(e){var n=e.sourceCurrency,t=e.targetCurrency,r=e.targetRate;return a.a.createElement("footer",null,a.a.createElement("h5",null,"Your rate:"),a.a.createElement("span",null,"".concat(n," 1 = ").concat(t," ").concat(r)))},w=["AUD","BGN","BRL","CAD","CHF","CNY","CZK","DKK","EUR","GBP","HKD","HRK","HUF","IDR","ILS","INR","ISK","JPY","KRW","MXN","MYR","NOK","NZD","PHP","PLN","RON","RUB","SEK","SGD","THB","TRY","USD","ZAR"],R=["EUR","GBP","CAD","MXN","JPY"],x=t(33),V=t(8),S=t(48),P=t(50);function k(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function D(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?k(t,!0).forEach((function(n){Object(S.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var L,N=function(e){if(e.status>=200&&e.status<300)return e;var n=new Error(e.statusText);throw n.response=e,n},T=function(e){return e.json()},B="https://cors-anywhere.herokuapp.com/https://api.exchangeratesapi.io",I=function(e){return function(n){var t=n.endpoint,r=n.body,a=n.headers,u=Object(P.a)(n,["endpoint","body","headers"]),c=new Request(t,D({body:JSON.stringify(r),headers:new Headers(D({accept:"application/json","content-type":"application/json"},a))},u));return e(c).then(N).then(T)}}(window.fetch),K=(L=B,{getLatest:function(e){return I({endpoint:"".concat(L,"/latest?").concat(e)})},getBased:function(e){return I({endpoint:"".concat(L,"/latest?base=").concat(e)})},getHistory:function(e){return I({endpoint:"".concat(L,"/history?").concat(e)})}}),U=function(e,n){return e.toFixed(n)},A=function(e,n){return e/n},H=function(e,n){return e*n};Object(V.d)({enforceActions:"observed"});var F=function(e){return Object.fromEntries(Object.entries(e).map((function(e){var n,t=Object(x.a)(e,2),r=t[0],a=t[1];return[r,String(U((n=a,Math.floor(1e4*n)/1e4||n),4))]})))},Y=function(e,n){return(e||{})[n]||""},G=function(e){return function(n,t){return r=n,parseFloat(r)===Number(r)?function(e){return function(n,t){return String(U(e(Number(n||0),Number(t)),2))}}(e)(n,t):"";var r}},J=function(e,n){return G(H)(e,n)},M=Object(r.createContext)(Object(V.f)({rates:null,loading:!1,error:null,sourceCurrency:"USD",targetCurrency:"ILS",sourceValue:"1000.00",targetValue:"",get todayRates(){return function(e){var n=e.rates,t=e.sourceCurrency,r=e.targetCurrency,a=n||{},u=[t,r].includes("ILS");return R.map((function(e,n){var r=u||0!==n?e:"ILS",c=r===t?"USD":r;return[c,a[c]]}))}({rates:this.rates||{},sourceCurrency:this.sourceCurrency,targetCurrency:this.targetCurrency})},get targetRate(){return Y(this.rates,this.targetCurrency)},changeValue:function(e,n){this[e]=n},changeCurrency:function(e,n){this.changeValue(e,n),this.targetValue=J(this.sourceValue,Y(this.rates,this.targetCurrency))},changeSourceValue:function(e,n){this.changeValue(e,n),this.targetValue=J(n,Y(this.rates,this.targetCurrency))},changeTargetValue:function(e,n){this.changeValue(e,n),this.sourceValue=function(e,n){return G(A)(e,n)}(n,Y(this.rates,this.targetCurrency))},setTargetAmount:function(e){this.targetValue=e},startLoading:function(){this.loading=!0},finishLoading:function(){this.loading=!1},setRates:function(e){this.rates=e},cleanRates:function(){this.rates=null},setError:function(e){this.error=e},getRates:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.sourceCurrency;this.startLoading(),K.getBased(n).then((function(n){var t=n.rates,r=F(t);e.setRates(r),e.setTargetAmount(J(e.sourceValue,Y(r,e.targetCurrency)))})).catch((function(n){e.setError(n)})).finally(this.finishLoading)}},{getRates:V.b.bound,changeValue:V.b.bound,changeCurrency:V.b.bound,changeSourceValue:V.b.bound,changeTargetValue:V.b.bound,startLoading:V.b.bound,finishLoading:V.b.bound,cleanRates:V.b.bound,setRates:V.b.bound,setTargetAmount:V.b.bound,setError:V.b.bound}));function W(){var e=Object(o.a)(["\n  background: ",";\n  color: ",";\n  font-weight: bold;\n  min-width: 200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return W=function(){return e},e}function Z(){var e=Object(o.a)(["\n  padding: 0;\n  margin: 0;\n  position: relative;\n  height: 100%;\n  display: flex;\n  flex-flow: row wrap;\n  list-style: none;\n"]);return Z=function(){return e},e}var z=i.default.ul(Z()),X=i.default.li(W(),(function(e){return e.theme.colors.light}),(function(e){return e.theme.colors.background})),q=function(e){var n=e.items;return a.a.createElement(z,null,n.map((function(e){var n=e.title,t=e.path;return a.a.createElement(X,{key:t},n)})))};function $(){var e=Object(o.a)(["\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  gap: 1rem;\n  margin-bottom: 2rem;\n"]);return $=function(){return e},e}var Q=i.default.div($()),_=function(e){return function(n){e(n.target.name,n.target.value)}},ee=Object(s.a)((function(){var e=Object(r.useContext)(M),n=e.sourceValue,t=e.targetValue,u=e.sourceCurrency,c=e.targetCurrency,o=e.targetRate,i=e.changeCurrency,l=e.changeSourceValue,s=e.changeTargetValue;return a.a.createElement(p,{header:a.a.createElement(q,{items:[{title:"Currency converter",path:"/"}]})},a.a.createElement(Q,null,a.a.createElement(v,{name:"sourceValue",label:"From",value:n,onChange:_(l)}),a.a.createElement(j,{name:"sourceCurrency",items:w,onChange:_(i),value:u}),a.a.createElement(v,{name:"targetValue",label:"To",value:t,onChange:_(s)}),a.a.createElement(j,{name:"targetCurrency",items:w,onChange:_(i),value:c})),a.a.createElement(C,{sourceCurrency:u,targetCurrency:c,targetRate:o}))}));function ne(){var e=Object(o.a)(["\n  color: ",";\n  margin: 0;\n"]);return ne=function(){return e},e}function te(){var e=Object(o.a)(["\n  margin-bottom: 40px;\n  background: ",";\n  height: 70px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return te=function(){return e},e}var re=i.default.header(te(),(function(e){return e.theme.colors.background})),ae=i.default.h1(ne(),(function(e){return e.theme.colors.light})),ue=function(){return a.a.createElement(re,null,a.a.createElement(ae,null,"Rate app"))};function ce(){var e=Object(o.a)(["\n  width: 1200px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  grid-auto-columns: 1fr;\n  gap: 1rem;\n"]);return ce=function(){return e},e}var oe=i.default.main(ce()),ie=function(e){var n=e.children;return a.a.createElement(oe,null,n)},le=t(98),se=t(99);function fe(){var e=Object(o.a)(["\n  display: grid;\n  grid-template-columns: auto auto;\n  justify-content: space-between;\n  align-items: center;\n"]);return fe=function(){return e},e}function ge(){var e=Object(o.a)(["\n  padding: 0;\n  list-style: none;\n  display: grid;\n  row-gap: 0.5rem;\n"]);return ge=function(){return e},e}var me=i.default.ul(ge()),de=i.default.li(fe()),he=function(e){var n=e.rates;return a.a.createElement(me,null,n.map((function(e){var n=Object(x.a)(e,2),t=n[0],r=n[1];return a.a.createElement(de,{key:t},a.a.createElement("span",null,t),a.a.createElement("span",null,r))})))};function be(){var e=Object(o.a)(["\n  display: grid;\n  align-items: center;\n  justify-content: center;\n"]);return be=function(){return e},e}function pe(){var e=Object(o.a)(["\n  padding: 0 1rem;\n"]);return pe=function(){return e},e}var ye=Object(i.default)(le.a)(pe()),ve=i.default.div(be()),Ee=Object(s.a)((function(){var e=Object(r.useContext)(M),n=e.getRates,t=e.cleanList,u=e.loading,c=e.sourceCurrency,o=e.todayRates;return Object(r.useEffect)((function(){return n(c),t}),[n,t,c]),a.a.createElement(p,{header:a.a.createElement(ye,{container:!0,justify:"space-between",alignItems:"center"},a.a.createElement(le.a,{item:!0},"Today's rates"),a.a.createElement(le.a,{item:!0},"1 ".concat(c," =")))},u?a.a.createElement(ve,null,a.a.createElement(se.a,null)):a.a.createElement(he,{rates:o}))}));Ee.defaultProps={sourceCurrency:"USD"};var Oe=Ee;function je(){var e=Object(o.a)(["\n  body {\n    overflow-x: hidden;\n    color: ",";\n    margin: 0;\n  } \n  * {\n    box-sizing: border-box;\n  }\n"]);return je=function(){return e},e}var Ce={colors:{background:"#121aa0",text:"#000",light:"#fff"}},we=Object(i.createGlobalStyle)(je(),(function(e){return e.theme.colors.text})),Re=function(){return a.a.createElement(i.ThemeProvider,{theme:Ce},a.a.createElement(a.a.Fragment,null,a.a.createElement(l.Normalize,null),a.a.createElement(we,null),a.a.createElement(ue,null),a.a.createElement(ie,null,a.a.createElement(ee,null),a.a.createElement(Oe,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(Re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[57,1,2]]]);
//# sourceMappingURL=main.0df88b7f.chunk.js.map