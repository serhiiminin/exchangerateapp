(window.webpackJsonpexchangerateapp=window.webpackJsonpexchangerateapp||[]).push([[0],{58:function(e,t,n){e.exports=n(67)},67:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(7),o=n.n(c),u=n(9),i=n(8),l=n(44),s=n(30);function f(){var e=Object(u.a)(["\n  padding: 1rem;\n"]);return f=function(){return e},e}function d(){var e=Object(u.a)(["\n  background: ",";\n  color: ",";\n  height: 50px;\n  display: flex;\n  align-items: center;\n"]);return d=function(){return e},e}function m(){var e=Object(u.a)(["\n  border: 1px solid ",";\n"]);return m=function(){return e},e}var g=i.default.article(m(),(function(e){return e.theme.colors.text})),b=i.default.header(d(),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.light})),h=i.default.div(f()),p=function(e){var t=e.header,n=e.children;return a.a.createElement(g,null,a.a.createElement(b,null,t),a.a.createElement(h,null,n))},O=n(103),y=function(e){var t=e.value,n=e.label,r=e.onChange,c=e.name;return a.a.createElement(O.a,{type:"number",name:c,label:n,value:t,onChange:r,margin:"normal",variant:"outlined"})},v=n(101),j=n(102),E=function(e){var t=e.value,n=e.onChange,r=e.items,c=e.name;return a.a.createElement(v.a,{value:t,onChange:n,displayEmpty:!0,name:c},r.map((function(e){return a.a.createElement(j.a,{key:e,value:e},e)})))},C=function(e){var t=e.sourceCurrency,n=e.targetCurrency,r=e.chosenRate;return a.a.createElement("footer",null,a.a.createElement("h5",null,"Your rate:"),a.a.createElement("span",null,"".concat(t," 1 = ").concat(n," ").concat(r)))},P=["AUD","BGN","BRL","CAD","CHF","CNY","CZK","DKK","EUR","GBP","HKD","HRK","HUF","IDR","ILS","INR","ISK","JPY","KRW","MXN","MYR","NOK","NZD","PHP","PLN","RON","RUB","SEK","SGD","THB","TRY","USD","ZAR"],w=["EUR","GBP","CAD","MXN","JPY"],R=n(49),x=n(11),V=n(34),D=n(10),N=n(51);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(n,!0).forEach((function(t){Object(x.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var T=function(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t},I=function(e){return e.json()},A=function(e){return function(t){var n=t.endpoint,r=t.body,a=t.headers,c=Object(N.a)(t,["endpoint","body","headers"]),o=new Request(n,k({body:JSON.stringify(r),headers:new Headers(k({accept:"application/json","content-type":"application/json"},a))},c));return e(o).then(T).then(I)}},L=Object({NODE_ENV:"production",PUBLIC_URL:"/exchangerateapp",REACT_APP_API_ENDPOINT:"https://api.exchangeratesapi.io",REACT_APP_PROXY_ENDPOINT:"https://cors-anywhere.herokuapp.com/"}),_=L.REACT_APP_API_ENDPOINT,B=L.REACT_APP_PROXY_ENDPOINT,U={endpoints:{latest:"".concat(_,"/latest"),history:"".concat(_,"/history")},proxy:B};function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var Y,H,F,G=U.proxy,J=function(e){return function(t){var n=t.endpoint;return e(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(n,!0).forEach((function(t){Object(x.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{endpoint:"".concat(G).concat(n)}))}}(A(window.fetch)),X=(Y=U.endpoints,{getBased:function(e){return J({endpoint:"".concat(Y.latest,"?base=").concat(e)})}}),M=function(e,t){return e.toFixed(t)},W=function(e,t){return e/t},Z=function(e,t){return e*t};Object(D.d)({enforceActions:"observed"});var z=function(e){return Object.fromEntries(Object.entries(e).map((function(e){var t=Object(V.a)(e,2),n=t[0],r=t[1];return[n,String(M(r,4))]})))},q=function(e){return function(t,n){return r=t,parseFloat(r)===Number(r)?function(e){return function(t,n){return String(M(e(Number(t),Number(n)),2))}}(e)(t,n):"";var r}},$=function(e,t){return q(Z)(e,t)},Q=Object(r.createContext)(Object(D.f)((H={},Object(x.a)(H,"rates",null),Object(x.a)(H,"loading",!1),Object(x.a)(H,"error",null),Object(x.a)(H,"sourceCurrency","USD"),Object(x.a)(H,"targetCurrency","ILS"),Object(x.a)(H,"sourceValue","1000.00"),Object(x.a)(H,"targetValue",""),Object(x.a)(H,"chosenRate",""),"todayRates",(F={}).todayRates=F.todayRates||{},F.todayRates.get=function(){var e=this,t=this.rates||{},n=[this.sourceCurrency,this.targetCurrency].includes("ILS");return w.map((function(r,a){var c=n||0!==a?r:"ILS",o=c===e.sourceCurrency?"USD":c;return[o,t[o]]}))},Object(x.a)(H,"setValue",(function(e,t){this[e]=t})),Object(x.a)(H,"changeCurrency",(function(e,t){this.setValue(e,t),this.targetValue=$(this.sourceValue,this.chosenRate)})),Object(x.a)(H,"changeSourceValue",(function(e,t){this.setValue(e,t),this.targetValue=$(t,this.chosenRate)})),Object(x.a)(H,"changeTargetValue",(function(e,t){this.setValue(e,t),this.sourceValue=function(e,t){return q(W)(e,t)}(t,this.chosenRate)})),Object(x.a)(H,"startLoading",(function(){this.loading=!0})),Object(x.a)(H,"finishLoading",(function(){this.loading=!1})),Object(x.a)(H,"cleanRates",(function(){this.rates=null})),Object(x.a)(H,"getRates",(function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.sourceCurrency;this.startLoading(),X.getBased(t).then((function(t){var n=t.rates,r=z(n),a=r[e.targetCurrency]||"";e.setValue("rates",r),e.setValue("chosenRate",a),e.setValue("targetValue",$(e.sourceValue,a))})).catch((function(t){e.setValue("error",t)})).finally(this.finishLoading)})),Object(R.a)(H,F),H),{getRates:D.b.bound,setValue:D.b.bound,changeCurrency:D.b.bound,changeSourceValue:D.b.bound,changeTargetValue:D.b.bound,startLoading:D.b.bound,finishLoading:D.b.bound,cleanRates:D.b.bound}));function ee(){var e=Object(u.a)(["\n  background: ",";\n  color: ",";\n  font-weight: bold;\n  min-width: 200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return ee=function(){return e},e}function te(){var e=Object(u.a)(["\n  padding: 0;\n  margin: 0;\n  position: relative;\n  height: 100%;\n  display: flex;\n  flex-flow: row wrap;\n  list-style: none;\n"]);return te=function(){return e},e}var ne=i.default.ul(te()),re=i.default.li(ee(),(function(e){return e.theme.colors.light}),(function(e){return e.theme.colors.background})),ae=function(e){var t=e.items;return a.a.createElement(ne,null,t.map((function(e){var t=e.title,n=e.path;return a.a.createElement(re,{key:n},t)})))};function ce(){var e=Object(u.a)(["\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  gap: 1rem;\n  margin-bottom: 2rem;\n"]);return ce=function(){return e},e}var oe=i.default.div(ce()),ue=function(e){return function(t){e(t.target.name,t.target.value)}},ie=Object(s.a)((function(){var e=Object(r.useContext)(Q),t=e.sourceValue,n=e.targetValue,c=e.sourceCurrency,o=e.targetCurrency,u=e.chosenRate,i=e.changeCurrency,l=e.changeSourceValue,s=e.changeTargetValue;return a.a.createElement(p,{header:a.a.createElement(ae,{items:[{title:"Currency converter",path:"/"}]})},a.a.createElement(oe,null,a.a.createElement(y,{name:"sourceValue",label:"From",value:t,onChange:ue(l)}),a.a.createElement(E,{name:"sourceCurrency",items:P,onChange:ue(i),value:c}),a.a.createElement(y,{name:"targetValue",label:"To",value:n,onChange:ue(s)}),a.a.createElement(E,{name:"targetCurrency",items:P,onChange:ue(i),value:o})),a.a.createElement(C,{sourceCurrency:c,targetCurrency:o,chosenRate:u}))}));function le(){var e=Object(u.a)(["\n  color: ",";\n  margin: 0;\n"]);return le=function(){return e},e}function se(){var e=Object(u.a)(["\n  margin-bottom: 40px;\n  background: ",";\n  height: 70px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return se=function(){return e},e}var fe=i.default.header(se(),(function(e){return e.theme.colors.background})),de=i.default.h1(le(),(function(e){return e.theme.colors.light})),me=function(){return a.a.createElement(fe,null,a.a.createElement(de,null,"Rate app"))};function ge(){var e=Object(u.a)(["\n  width: 1200px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  grid-auto-columns: 1fr;\n  gap: 1rem;\n"]);return ge=function(){return e},e}var be=i.default.main(ge()),he=function(e){var t=e.children;return a.a.createElement(be,null,t)},pe=n(99),Oe=n(100);function ye(){var e=Object(u.a)(["\n  display: grid;\n  grid-template-columns: auto auto;\n  justify-content: space-between;\n  align-items: center;\n"]);return ye=function(){return e},e}function ve(){var e=Object(u.a)(["\n  padding: 0;\n  list-style: none;\n  display: grid;\n  row-gap: 0.5rem;\n"]);return ve=function(){return e},e}var je=i.default.ul(ve()),Ee=i.default.li(ye()),Ce=function(e){var t=e.rates;return a.a.createElement(je,null,t.map((function(e){var t=Object(V.a)(e,2),n=t[0],r=t[1];return a.a.createElement(Ee,{key:n},a.a.createElement("span",null,n),a.a.createElement("span",null,r))})))};function Pe(){var e=Object(u.a)(["\n  display: grid;\n  align-items: center;\n  justify-content: center;\n"]);return Pe=function(){return e},e}function we(){var e=Object(u.a)(["\n  padding: 0 1rem;\n"]);return we=function(){return e},e}var Re=Object(i.default)(pe.a)(we()),xe=i.default.div(Pe()),Ve=Object(s.a)((function(){var e=Object(r.useContext)(Q),t=e.getRates,n=e.cleanList,c=e.loading,o=e.sourceCurrency,u=e.todayRates;return Object(r.useEffect)((function(){return t(o),n}),[t,n,o]),a.a.createElement(p,{header:a.a.createElement(Re,{container:!0,justify:"space-between",alignItems:"center"},a.a.createElement(pe.a,{item:!0},"Today's rates"),a.a.createElement(pe.a,{item:!0},"1 ".concat(o," =")))},c?a.a.createElement(xe,null,a.a.createElement(Oe.a,null)):a.a.createElement(Ce,{rates:u}))}));Ve.defaultProps={sourceCurrency:"USD"};var De=Ve;function Ne(){var e=Object(u.a)(["\n  body {\n    overflow-x: hidden;\n    color: ",";\n    margin: 0;\n  } \n  * {\n    box-sizing: border-box;\n  }\n"]);return Ne=function(){return e},e}var Se={colors:{background:"#121aa0",text:"#000",light:"#fff"}},ke=Object(i.createGlobalStyle)(Ne(),(function(e){return e.theme.colors.text})),Te=function(){return a.a.createElement(i.ThemeProvider,{theme:Se},a.a.createElement(a.a.Fragment,null,a.a.createElement(l.Normalize,null),a.a.createElement(ke,null),a.a.createElement(me,null),a.a.createElement(he,null,a.a.createElement(ie,null),a.a.createElement(De,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(Te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[58,1,2]]]);
//# sourceMappingURL=main.b5b217a0.chunk.js.map