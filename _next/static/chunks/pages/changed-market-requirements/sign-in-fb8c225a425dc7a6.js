(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1355],{5152:function(e,r,t){"use strict";t.d(r,{Oo:function(){return h}});var n=t(7294),i=t(8870),c=t(9065),o=t(917),a=t(8153),l=t(9154);var u={name:"1jfkd3a",styles:"flex-shrink:0;width:10px;height:10px;position:relative;top:1px"};const s=()=>(0,o.tZ)(c.XC,{color:"border",weight:"bold",css:u}),d=({children:e,"aria-label":r})=>(0,o.tZ)("nav",{"aria-label":r},(0,o.tZ)(a.kC,{as:"ol",gap:.5,alignItems:"center"},e)),f=e=>{const{children:r,href:t}=e;return(0,o.tZ)(a.xu,{as:"li"},t?(0,o.tZ)(l.hh,e):(0,o.tZ)(l.xv,null,r))},h=({"aria-label":e="breadcrumb",links:r})=>(0,o.tZ)(d,{"aria-label":e},r.map((({label:e,...t},c)=>(0,o.tZ)(n.Fragment,{key:c},0==c?null:(0,o.tZ)(s,null),(0,o.tZ)(f,t,e,c===r.length-1?(0,o.tZ)(i.TX,null," (current page)"):null)))))},5732:function(e,r,t){"use strict";var n=t(4730),i=t(7294),c=t(4866),o=t(5944),a=["linkComponent","link","as","dark","type","block","className","children","onClick"],l=(0,i.forwardRef)((function(e,r){e.linkComponent;var t=e.link,i=e.as,l=void 0===i?"primary":i,u=(e.dark,e.type,e.block,e.className),s=e.children,d=e.onClick;(0,n.Z)(e,a);return void 0===t?(0,o.tZ)(c.zx,{onClick:d,variant:l,className:u,children:s}):(0,o.tZ)(c.ZP,{variant:l,href:t,className:u,children:s})}));l.displayName="AUbutton",r.Z=l},7510:function(e,r,t){"use strict";var n=t(9499),i=t(4730),c=t(6439),o=(t(7294),t(5944)),a=["level","size","children"];function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var s=function(e){var r=e.level,t=e.size,n=e.children,l=(0,i.Z)(e,a);return(0,o.tZ)(c.X,u(u({as:"h".concat(r),fontSize:t},l),{},{children:n}))};s.displayName="AUheading",r.Z=s},3824:function(e,r,t){"use strict";t.d(r,{f:function(){return o}});var n=t(8153),i=t(8547),c=t(5944),o=function(e){var r=e.navigator,t=e.gap,o=void 0===t?1:t,a=e.children;return(0,c.BX)(i.o,{children:[r?(0,c.tZ)(i.s,{columnSpan:{xs:12,md:4,lg:3},children:r}):null,(0,c.tZ)(i.s,{columnSpan:{xs:12,md:8},columnStart:{lg:5},children:(0,c.tZ)(n.Kq,{gap:o,children:a})})]})}},2265:function(e,r,t){"use strict";var n=t(917),i=t(8275),c=t(5944);r.Z=function(){return(0,c.tZ)("hr",{css:(0,n.iv)({boxSizing:"content-box",height:0,margin:0,overflow:"visible",border:"none",borderTopWidth:i.TV.borderWidth.sm,borderTopStyle:"solid",borderColor:i._X.borderMuted,width:"100%"},"","")})}},9885:function(e,r,t){"use strict";t.d(r,{H1:function(){return f},P:function(){return d},n:function(){return s}});var n=t(9499),i=t(8275),c=t(6439),o=t(9154),a=t(5944);function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var s=function(e){var r=e.children;return(0,a.tZ)(o.xv,{as:"p",fontSize:"md",color:"muted",children:r})},d=function(e){return(0,a.tZ)(o.xv,u({as:"p",maxWidth:i.TV.maxWidth.bodyText},e))},f=function(e){return(0,a.tZ)(c.H1,u({maxWidth:"42rem"},e))}},2429:function(e,r,t){"use strict";t.d(r,{R:function(){return f}});t(7294);var n=t(8153),i=t(9154),c=t(1163),o=t(5944),a=function(e){var r=e.backHref,t=(0,c.useRouter)();return(0,o.tZ)(n.xu,{children:(0,o.tZ)(i.hh,{onClick:function(){if(r)return t.push(r);t.back()},children:"\u2190 Back"})})},l=t(7510),u=t(5152),s=function(e){var r=e.items;return(0,o.tZ)(u.Oo,{links:r})},d=t(3824),f=function(e){var r=e.title,t=e.children,n=e.backHref,i=e.breadcrumbs,c=e.frontmatter,u=e.backbreadcrumb,f=void 0===u||u,h=e.navigator;return(0,o.BX)(d.f,{navigator:h,children:[i?(0,o.tZ)(s,{items:i}):null,f?(0,o.tZ)(a,{backHref:n}):null,void 0===c?null:c,(0,o.tZ)(l.Z,{size:"xxl",level:"1",paddingTop:1,children:r}),t]})}},4492:function(e,r,t){"use strict";t.r(r);var n=t(5732),i=t(2429),c=t(7510),o=t(2265),a=t(9885),l=t(5944);r.default=function(){return(0,l.BX)(i.R,{title:"Sign in to your Export Service account",backbreadcrumb:!1,breadcrumbs:[{label:"Home",href:"/todo"},{label:"Sign in"}],children:[(0,l.tZ)(a.n,{children:"Access our export services and manage your transactions with us."}),(0,l.tZ)("div",{style:{marginTop:"3em"},children:(0,l.tZ)(n.Z,{link:"/changed-market-requirements/upload-document",children:"Sign in"})}),(0,l.tZ)(o.Z,{}),(0,l.tZ)(c.Z,{level:2,size:"lg",children:"Don\u2019t have an account yet?"}),(0,l.tZ)("div",{style:{marginTop:"3em"},children:(0,l.tZ)(n.Z,{as:"secondary",children:"Create an account"})})]})}},7111:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/changed-market-requirements/sign-in",function(){return t(4492)}])}},function(e){e.O(0,[3634,9774,2888,179],(function(){return r=7111,e(e.s=r);var r}));var r=e.O();_N_E=r}]);