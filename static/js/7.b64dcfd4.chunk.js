(window.webpackJsonpuniswap=window.webpackJsonpuniswap||[]).push([[7],{1e3:function(e,n,t){"use strict";t.r(n);var r=t(10),a=t.n(r),o=t(22),c=t(7),u=t(2),i=t(0),l=t.n(i),d=t(71),s=t(11),f=t(13),m=t(3),v=t(60),b=t(127),p=t(18),h=t(986),j=t(984),O=t(73),E=t(82),g=t(90);function x(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 2rem;\n\n  button {\n    max-width: 20rem;\n  }\n"]);return x=function(){return e},e}function w(){var e=Object(u.a)(["\n  font-size: 0.75rem;\n  color: ",";\n"]);return w=function(){return e},e}function y(){var e=Object(u.a)(["\n  color: ",";\n  text-align: center;\n  margin-top: 1rem;\n  padding-top: 1rem;\n"]);return y=function(){return e},e}function k(){var e=Object(u.a)(["\n  flex: 1 1 auto;\n  width: 0;\n  color: ",";\n"]);return k=function(){return e},e}function C(){var e=Object(u.a)(["\n  ",";\n  align-items: center;\n  color: ",";\n  font-size: 0.75rem;\n  padding: 0.25rem 1rem 0;\n"]);return C=function(){return e},e}function W(){var e=Object(u.a)(["\n  ",";\n  padding: 1rem 0;\n"]);return W=function(){return e},e}var A=m.d.div(W(),function(e){return e.theme.flexColumnNoWrap}),S=m.d.div(C(),function(e){return e.theme.flexRowNoWrap},function(e){return e.theme.doveGray}),z=m.d.span(k(),function(e){return e.theme.doveGray}),G=m.d.div(y(),function(e){return e.theme.doveGray}),N=m.d.div(w(),function(e){var n=e.error,t=e.theme;return n&&t.salmonRed}),R=m.d.div(x());n.default=Object(d.g)(function(e){var n=e.history,t=e.location,r=Object(v.b)().t,u=Object(s.useWeb3Context)().account,d=Object(O.f)(),m=Object(i.useState)({address:"",name:""}),x=Object(c.a)(m,2),w=x[0],y=x[1],k=Object(i.useState)(),C=Object(c.a)(k,2),W=C[0],B=C[1],q=Object(E.c)(w.address),I=q.name,J=q.symbol,T=q.decimals,D=q.exchangeAddress,F=Object(g.e)();Object(i.useEffect)(function(){t.state&&n.replace(t.pathname)},[]);var L=Object(i.useState)(!u&&r("noWallet")),P=Object(c.a)(L,2),Z=P[0],H=P[1];function K(){return(K=Object(o.a)(a.a.mark(function e(){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.estimate.createExchange(w.address);case 2:n=e.sent,d.createExchange(w.address,{gasLimit:n}).then(function(e){b.a.event({category:"Pool",action:"CreateExchange"}),F(e)});case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}Object(i.useEffect)(function(){return W?H(r("invalidTokenAddress")):void 0===J||void 0===T||void 0===D?H():null===J?H(r("invalidSymbol")):null===T?H(r("invalidDecimals")):D!==f.ethers.constants.AddressZero?H(r("exchangeExists")):H(u?null:r("noWallet")),function(){H()}},[w.address,J,T,D,u,r,W]);var M=null===Z;return l.a.createElement(l.a.Fragment,null,l.a.createElement(h.a,{title:r("tokenAddress"),initialInput:t.state&&t.state.tokenAddress||"",onChange:y,onError:B}),l.a.createElement(j.a,{hideBottom:!0},l.a.createElement(A,null,l.a.createElement(S,null,l.a.createElement(z,null,r("name")),l.a.createElement("span",null,I||" - ")),l.a.createElement(S,null,l.a.createElement(z,null,r("symbol")),l.a.createElement("span",null,J||" - ")),l.a.createElement(S,null,l.a.createElement(z,null,r("decimals")),l.a.createElement("span",null,T||0===T?T:" - ")))),l.a.createElement(G,null,l.a.createElement(N,null,Z||r("enterTokenCont"))),l.a.createElement(R,null,l.a.createElement(p.b,{disabled:!M,onClick:function(){return K.apply(this,arguments)}},r("createExchange"))))})},986:function(e,n,t){"use strict";t.d(n,"a",function(){return W});var r=t(7),a=t(2),o=t(0),c=t.n(o),u=t(3),i=t(60),l=t(11),d=t(15),s=t(5),f=t(73);function m(){var e=Object(a.a)(["\n  font-size: 1rem;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  width: 0;\n  background-color: ",";\n\n  color: ",";\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  ::placeholder {\n    color: ",";\n  }\n"]);return m=function(){return e},e}function v(){var e=Object(a.a)(["\n  ","\n  align-items: center;\n  padding: 0.25rem 0.85rem 0.75rem;\n"]);return v=function(){return e},e}function b(){var e=Object(a.a)(["\n  flex: 1 1 auto;\n  width: 0;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n"]);return b=function(){return e},e}function p(){var e=Object(a.a)(["\n  ","\n  align-items: center;\n  color: ",";\n  font-size: 0.75rem;\n  line-height: 1rem;\n  padding: 0.75rem 1rem;\n"]);return p=function(){return e},e}function h(){var e=Object(a.a)(["\n  flex: 1;\n"]);return h=function(){return e},e}function j(){var e=Object(a.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 1.25rem;\n  border: 1px solid ",";\n\n  background-color: ",";\n"]);return j=function(){return e},e}function O(){var e=Object(a.a)(["\n  ","\n  box-shadow: 0 4px 8px 0 ",";\n  position: relative;\n  border-radius: 1.25rem;\n  background-color: ",";\n  z-index: 1;\n"]);return O=function(){return e},e}var E=u.d.div(O(),function(e){return e.theme.flexColumnNoWrap},function(e){var n=e.theme;return Object(d.c)(.95,n.shadowColor)},function(e){return e.theme.inputBackground}),g=u.d.div(j(),function(e){var n=e.error,t=e.theme;return n?t.salmonRed:t.mercuryGray},function(e){return e.theme.inputBackground}),x=u.d.div(h()),w=u.d.div(p(),function(e){return e.theme.flexRowNoWrap},function(e){return e.theme.doveGray}),y=u.d.div(b()),k=u.d.div(v(),function(e){return e.theme.flexRowNoWrap}),C=u.d.input(m(),function(e){return e.theme.inputBackground},function(e){var n=e.error,t=e.theme;return n?t.salmonRed:t.royalBlue},function(e){return e.theme.placeholderGray});function W(e){var n=e.title,t=e.initialInput,a=void 0===t?"":t,u=e.onChange,d=void 0===u?function(){}:u,m=e.onError,v=void 0===m?function(){}:m,b=Object(i.b)().t,p=Object(l.useWeb3Context)().library,h=Object(o.useState)(a),j=Object(r.a)(h,2),O=j[0],W=j[1],A=Object(f.c)(O,150),S=Object(o.useState)({address:void 0,name:void 0}),z=Object(r.a)(S,2),G=z[0],N=z[1],R=Object(o.useState)(!1),B=Object(r.a)(R,2),q=B[0],I=B[1];return Object(o.useEffect)(function(){d({address:G.address,name:G.name})},[d,G.address,G.name]),Object(o.useEffect)(function(){v(q)},[v,q]),Object(o.useEffect)(function(){var e=!1;if(Object(s.q)(A))try{p.lookupAddress(A).then(function(n){e||(n?W(n):(N({address:A,name:""}),I(null)))}).catch(function(){e||(N({address:A,name:""}),I(null))})}catch(n){N({address:A,name:""}),I(null)}else if(""!==A)try{p.resolveName(A).then(function(n){e||(n?(N({address:n,name:A}),I(null)):I(!0))}).catch(function(){e||I(!0)})}catch(t){I(!0)}return function(){e=!0}},[A,p,d,v]),c.a.createElement(E,null,c.a.createElement(g,{error:""!==O&&q},c.a.createElement(x,null,c.a.createElement(w,null,c.a.createElement(y,null,c.a.createElement("span",null,n||b("recipientAddress")))),c.a.createElement(k,null,c.a.createElement(C,{type:"text",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",placeholder:"0x1234...",error:""!==O&&q,onChange:function(e){void 0===G.address&&void 0===G.name||N({address:void 0,name:void 0}),void 0!==q&&I();var n=e.target.value,t=Object(s.q)(n);W(t||n)},value:O})))))}}}]);
//# sourceMappingURL=7.b64dcfd4.chunk.js.map