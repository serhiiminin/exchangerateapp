(window.webpackJsonpexchangerateapp=window.webpackJsonpexchangerateapp||[]).push([[0],{58:function(e,t,n){e.exports=n(67)},67:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(7),u=n.n(c),o=n(10),i=n(8),l=n(44),s=n(30);function f(){var e=Object(o.a)(["\n  padding: 1rem;\n"]);return f=function(){return e},e}function d(){var e=Object(o.a)(["\n  background: ",";\n  color: ",";\n  height: 50px;\n  display: flex;\n  align-items: center;\n"]);return d=function(){return e},e}function g(){var e=Object(o.a)(["\n  border: 1px solid ",";\n"]);return g=function(){return e},e}var h=i.default.article(g(),(function(e){return e.theme.colors.text})),m=i.default.header(d(),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.light})),b=i.default.div(f()),p=function(e){var t=e.header,n=e.children;return a.a.createElement(h,null,a.a.createElement(m,null,t),a.a.createElement(b,null,n))},O=n(103),y=function(e){var t=e.value,n=e.label,r=e.onChange,c=e.name;return a.a.createElement(O.a,{type:"number",name:c,label:n,value:t,onChange:r,margin:"normal",variant:"outlined"})},v=n(101),j=n(102),E=function(e){var t=e.value,n=e.onChange,r=e.items,c=e.name;return a.a.createElement(v.a,{value:t,onChange:n,displayEmpty:!0,name:c},r.map((function(e){return a.a.createElement(j.a,{key:e,value:e},e)})))},C=function(e){var t=e.sourceCurrency,n=e.targetCurrency,r=e.chosenRate;return a.a.createElement("footer",null,a.a.createElement("h5",null,"Your rate:"),a.a.createElement("span",null,"".concat(t," 1 = ").concat(n," ").concat(r)))},P=["AUD","BGN","BRL","CAD","CHF","CNY","CZK","DKK","EUR","GBP","HKD","HRK","HUF","IDR","ILS","INR","ISK","JPY","KRW","MXN","MYR","NOK","NZD","PHP","PLN","RON","RUB","SEK","SGD","THB","TRY","USD","ZAR"],w=["EUR","GBP","CAD","MXN","JPY"],R=n(49),V=n(11),x=n(34),D=n(9),S=n(51);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(n,!0).forEach((function(t){Object(V.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=function(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t},I=function(e){return e.json()},A=function(e){return function(t){var n=t.endpoint,r=t.body,a=t.headers,c=Object(S.a)(t,["endpoint","body","headers"]),u=new Request(n,T({body:JSON.stringify(r),headers:new Headers(T({accept:"application/json","content-type":"application/json"},a))},c));return e(u).then(k).then(I)}},L=Object({NODE_ENV:"production",PUBLIC_URL:"/exchangerateapp",REACT_APP_API_ENDPOINT:"https://api.exchangeratesapi.io",REACT_APP_PROXY_ENDPOINT:"https://cors-anywhere.herokuapp.com/"}),_=L.REACT_APP_API_ENDPOINT,B=L.REACT_APP_PROXY_ENDPOINT,U={endpoints:{latest:"".concat(_,"/latest"),history:"".concat(_,"/history")},proxy:B};function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var Y,H,F,G=U.proxy,J=function(e){return function(t){var n=t.endpoint;return e(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(n,!0).forEach((function(t){Object(V.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{endpoint:"".concat(G).concat(n)}))}}(A(window.fetch)),X=(Y=U.endpoints,{getBased:function(e){return J({endpoint:"".concat(Y.latest,"?base=").concat(e)})}}),M=function(e,t){return e.toFixed(t)},W=function(e,t){return e/t},Z=function(e,t){return e*t};Object(D.d)({enforceActions:"observed"});var z=function(e){return Object.fromEntries(Object.entries(e).map((function(e){var t=Object(x.a)(e,2),n=t[0],r=t[1];return[n,String(M(r,4))]})))},q=function(e){return function(t,n){return r=t,parseFloat(r)===Number(r)?function(e){return function(t,n){return String(M(e(Number(t),Number(n)),2))}}(e)(t,n):"";var r}},$=function(e,t){return q(Z)(e,t)},Q=Object(r.createContext)(Object(D.f)((H={},Object(V.a)(H,"rates",null),Object(V.a)(H,"loading",!1),Object(V.a)(H,"error",null),Object(V.a)(H,"sourceCurrency","USD"),Object(V.a)(H,"targetCurrency","ILS"),Object(V.a)(H,"sourceValue","1000.00"),Object(V.a)(H,"targetValue",""),Object(V.a)(H,"chosenRate",""),"todayRates",(F={}).todayRates=F.todayRates||{},F.todayRates.get=function(){var e=this,t=this.rates||{},n=[this.sourceCurrency,this.targetCurrency].includes("ILS");return w.map((function(r,a){var c=n||0!==a?r:"ILS",u=c===e.sourceCurrency?"USD":c;return[u,t[u]]}))},Object(V.a)(H,"setValue",(function(e,t){this[e]=t})),Object(V.a)(H,"changeSourceCurrency",(function(e,t){this.setValue(e,t),this.setValue("targetValue",$(this.sourceValue,this.chosenRate))})),Object(V.a)(H,"changeTargetCurrency",(function(e,t){var n=this.rates[t]||"";this.setValue(e,t),this.setValue("chosenRate",n),this.setValue("targetValue",$(this.sourceValue,n))})),Object(V.a)(H,"changeSourceValue",(function(e,t){this.setValue(e,t),this.setValue("targetValue",$(t,this.chosenRate))})),Object(V.a)(H,"changeTargetValue",(function(e,t){this.setValue(e,t),this.setValue("sourceValue",function(e,t){return q(W)(e,t)}(t,this.chosenRate))})),Object(V.a)(H,"startLoading",(function(){this.setValue("loading",!0)})),Object(V.a)(H,"finishLoading",(function(){this.setValue("loading",!1)})),Object(V.a)(H,"cleanRates",(function(){this.setValue("sourceValue",null)})),Object(V.a)(H,"getRates",(function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.sourceCurrency;this.startLoading(),X.getBased(t).then((function(t){var n=t.rates,r=z(n),a=r[e.targetCurrency]||"";e.setValue("rates",r),e.setValue("chosenRate",a),e.setValue("targetValue",$(e.sourceValue,a))})).catch((function(t){e.setValue("error",t)})).finally(this.finishLoading)})),Object(R.a)(H,F),H),{getRates:D.b.bound,setValue:D.b.bound,changeSourceCurrency:D.b.bound,changeTargetCurrency:D.b.bound,changeSourceValue:D.b.bound,changeTargetValue:D.b.bound,startLoading:D.b.bound,finishLoading:D.b.bound,cleanRates:D.b.bound}));function ee(){var e=Object(o.a)(["\n  background: ",";\n  color: ",";\n  font-weight: bold;\n  min-width: 200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return ee=function(){return e},e}function te(){var e=Object(o.a)(["\n  padding: 0;\n  margin: 0;\n  position: relative;\n  height: 100%;\n  display: flex;\n  flex-flow: row wrap;\n  list-style: none;\n"]);return te=function(){return e},e}var ne=i.default.ul(te()),re=i.default.li(ee(),(function(e){return e.theme.colors.light}),(function(e){return e.theme.colors.background})),ae=function(e){var t=e.items;return a.a.createElement(ne,null,t.map((function(e){var t=e.title,n=e.path;return a.a.createElement(re,{key:n},t)})))};function ce(){var e=Object(o.a)(["\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  gap: 1rem;\n  margin-bottom: 2rem;\n"]);return ce=function(){return e},e}var ue=i.default.div(ce()),oe=function(e){return function(t){e(t.target.name,t.target.value)}},ie=Object(s.a)((function(){var e=Object(r.useContext)(Q),t=e.sourceValue,n=e.targetValue,c=e.sourceCurrency,u=e.targetCurrency,o=e.chosenRate,i=e.changeSourceCurrency,l=e.changeTargetCurrency,s=e.changeSourceValue,f=e.changeTargetValue;return a.a.createElement(p,{header:a.a.createElement(ae,{items:[{title:"Currency converter",path:"/"}]})},a.a.createElement(ue,null,a.a.createElement(y,{name:"sourceValue",label:"From",value:t,onChange:oe(s)}),a.a.createElement(E,{name:"sourceCurrency",items:P,onChange:oe(i),value:c}),a.a.createElement(y,{name:"targetValue",label:"To",value:n,onChange:oe(f)}),a.a.createElement(E,{name:"targetCurrency",items:P,onChange:oe(l),value:u})),a.a.createElement(C,{sourceCurrency:c,targetCurrency:u,chosenRate:o}))}));function le(){var e=Object(o.a)(["\n  color: ",";\n  margin: 0;\n"]);return le=function(){return e},e}function se(){var e=Object(o.a)(["\n  margin-bottom: 40px;\n  background: ",";\n  height: 70px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return se=function(){return e},e}var fe=i.default.header(se(),(function(e){return e.theme.colors.background})),de=i.default.h1(le(),(function(e){return e.theme.colors.light})),ge=function(){return a.a.createElement(fe,null,a.a.createElement(de,null,"Rate app"))};function he(){var e=Object(o.a)(["\n  width: 1200px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  grid-auto-columns: 1fr;\n  gap: 1rem;\n"]);return he=function(){return e},e}var me=i.default.main(he()),be=function(e){var t=e.children;return a.a.createElement(me,null,t)},pe=n(99),Oe=n(100);function ye(){var e=Object(o.a)(["\n  display: grid;\n  grid-template-columns: auto auto;\n  justify-content: space-between;\n  align-items: center;\n"]);return ye=function(){return e},e}function ve(){var e=Object(o.a)(["\n  padding: 0;\n  list-style: none;\n  display: grid;\n  row-gap: 0.5rem;\n"]);return ve=function(){return e},e}var je=i.default.ul(ve()),Ee=i.default.li(ye()),Ce=function(e){var t=e.rates;return a.a.createElement(je,null,t.map((function(e){var t=Object(x.a)(e,2),n=t[0],r=t[1];return a.a.createElement(Ee,{key:n},a.a.createElement("span",null,n),a.a.createElement("span",null,r))})))};function Pe(){var e=Object(o.a)(["\n  display: grid;\n  align-items: center;\n  justify-content: center;\n"]);return Pe=function(){return e},e}function we(){var e=Object(o.a)(["\n  padding: 0 1rem;\n"]);return we=function(){return e},e}var Re=Object(i.default)(pe.a)(we()),Ve=i.default.div(Pe()),xe=Object(s.a)((function(){var e=Object(r.useContext)(Q),t=e.getRates,n=e.cleanList,c=e.loading,u=e.sourceCurrency,o=e.todayRates;return Object(r.useEffect)((function(){return t(u),n}),[t,n,u]),a.a.createElement(p,{header:a.a.createElement(Re,{container:!0,justify:"space-between",alignItems:"center"},a.a.createElement(pe.a,{item:!0},"Today's rates"),a.a.createElement(pe.a,{item:!0},"1 ".concat(u," =")))},c?a.a.createElement(Ve,null,a.a.createElement(Oe.a,null)):a.a.createElement(Ce,{rates:o}))}));xe.defaultProps={sourceCurrency:"USD"};var De=xe;function Se(){var e=Object(o.a)(["\n  body {\n    overflow-x: hidden;\n    color: ",";\n    margin: 0;\n  } \n  * {\n    box-sizing: border-box;\n  }\n"]);return Se=function(){return e},e}var Ne={colors:{background:"#121aa0",text:"#000",light:"#fff"}},Te=Object(i.createGlobalStyle)(Se(),(function(e){return e.theme.colors.text})),ke=function(){return a.a.createElement(i.ThemeProvider,{theme:Ne},a.a.createElement(a.a.Fragment,null,a.a.createElement(l.Normalize,null),a.a.createElement(Te,null),a.a.createElement(ge,null),a.a.createElement(be,null,a.a.createElement(ie,null),a.a.createElement(De,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(a.a.createElement(ke,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[58,1,2]]]);
//# sourceMappingURL=main.12250a03.chunk.js.map