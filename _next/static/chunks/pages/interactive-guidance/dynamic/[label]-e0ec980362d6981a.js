(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7640],{1128:function(t,n,e){"use strict";e.d(n,{CS:function(){return p},MB:function(){return s},YS:function(){return f},Zb:function(){return l}});var r=e(917),o=e(8153),i=e(8275),u=e(7294);const a="0 2px 4px rgba(0, 0, 0, 0.3)",c="0 1px 1px rgba(0, 0, 0, 0.3)",l=({as:t,background:n="body",children:e,shadow:u,clickable:l})=>(0,r.tZ)(o.xu,{as:t,display:"block",border:!0,borderColor:"muted",background:n,rounded:!0,css:(0,r.iv)({position:"relative",overflow:"hidden",...l&&{"&:focus-within":i.lB.outline},...u&&{boxShadow:a,"&:hover":l?{boxShadow:c}:void 0}},"","")},e),s=({children:t})=>(0,r.tZ)(o.xu,{padding:1.5},t);function d(){return d=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},d.apply(this,arguments)}const f=t=>{const n=(0,i.yF)();return(0,r.tZ)(n,d({css:[o.Wf,'display:flex;justify-content:space-between;&:focus{outline:none;}&:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;}',""]},t))},p=({children:t,gap:n=1.5,templateColumns:e})=>{const i=h({templateColumns:e,gap:n});return(0,r.tZ)(o.xu,{as:"ul",css:i},u.Children.map(t,(t=>(0,u.isValidElement)(t)?(0,u.cloneElement)(t,{as:"li"}):t)))},h=({gap:t,templateColumns:n})=>(0,i.mq)({display:"grid",gridGap:(0,i.qz)(t,i.XH),gridTemplateColumns:(0,i.qz)(n,(t=>`repeat(${t}, 1fr)`))})},6573:function(t,n,e){"use strict";e.d(n,{R:function(){return i}});var r=e(8153),o=e(917);function i({children:t}){return(0,o.tZ)(r.kC,{flexDirection:"column",gap:2},t)}},7549:function(t,n,e){"use strict";e.r(n);var r=e(6835),o=e(1128),i=e(6439),u=e(8153),a=e(2428),c=e(7536),l=e(1163),s=e(583),d=e(7294),f=e(2523),p=e(6573),h=e(4866),g=e(9154),b=e(5944);n.default=function(){(0,l.useRouter)().query.label;var t=(0,c.cI)(),n=t.register,e=t.handleSubmit,m=((0,a.UD)("exit"),(0,a.Cm)(),(0,d.useState)(new Set([]))),v=(m[0],m[1],(0,d.useState)(new Set([]))),Z=(v[0],v[1],(0,d.useState)("0")),w=(Z[0],Z[1],(0,d.useState)("meat_use")),x=w[0],S=w[1],y=(0,d.useState)([]),_=y[0],C=y[1],k=s.iI[x],E=_.map((function(t){return s.bY[t]}));return console.log({currentQuestion:x}),(0,b.BX)(b.HY,{children:[(0,b.tZ)(i.H1,{children:"What do you want to export?"}),(0,b.tZ)("form",{onSubmit:e((function(t){var n;console.log({data:t});var e=null!==(n=t[x])&&void 0!==n?n:[],o=s.Fv.flatMap((function(t){var n=(0,r.Z)(t,3),e=n[0],o=n[1],i=n[2];return e===x?[[o,i]]:[]})),i=new Map(o),u=e.find((function(t){return i.get(t)})),a=u?i.get(u):i.get("*");console.log({gg:i,target:a}),a&&((0,s.AZ)(a)&&C([a]),(0,s.KX)(a)&&S(a))})),children:(0,b.BX)(p.R,{children:[(0,b.tZ)(s.HN,{question:k,register:function(){return n(x)},component:"radio"===k.kind?f.Y8:f.XZ}),E.map((function(t,n){return(0,b.tZ)(o.Zb,{children:(0,b.tZ)(o.MB,{children:(0,b.BX)(u.Kq,{gap:1,children:[(0,b.tZ)(u.xu,{as:"h3",children:(0,b.tZ)(o.YS,{href:"#",children:t.label})}),(0,b.tZ)(g.xv,{children:t.description})]})})},n)})),(0,b.tZ)(h.hE,{children:(0,b.tZ)(h.zx,{type:"submit",children:"Continue"})})]})})]})}},1635:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/interactive-guidance/dynamic/[label]",function(){return e(7549)}])}},function(t){t.O(0,[3634,3283,2523,3792,583,9774,2888,179],(function(){return n=1635,t(t.s=n);var n}));var n=t.O();_N_E=n}]);