(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[971],{5152:function(e,n,r){"use strict";r.d(n,{Oo:function(){return p}});var t=r(7294),a=r(8870),i=r(9065),c=r(917),l=r(8153),o=r(9154);var u={name:"1jfkd3a",styles:"flex-shrink:0;width:10px;height:10px;position:relative;top:1px"};const d=()=>(0,c.tZ)(i.XC,{color:"border",weight:"bold",css:u}),s=({children:e,"aria-label":n})=>(0,c.tZ)("nav",{"aria-label":n},(0,c.tZ)(l.kC,{as:"ol",gap:.5,alignItems:"center"},e)),f=e=>{const{children:n,href:r}=e;return(0,c.tZ)(l.xu,{as:"li"},r?(0,c.tZ)(o.hh,e):(0,c.tZ)(o.xv,null,n))},p=({"aria-label":e="breadcrumb",links:n})=>(0,c.tZ)(s,{"aria-label":e},n.map((({label:e,...r},i)=>(0,c.tZ)(t.Fragment,{key:i},0==i?null:(0,c.tZ)(d,null),(0,c.tZ)(f,r,e,i===n.length-1?(0,c.tZ)(a.TX,null," (current page)"):null)))))},5732:function(e,n,r){"use strict";var t=r(4730),a=r(7294),i=r(4866),c=r(5944),l=["linkComponent","link","as","dark","type","block","className","children","onClick"],o=(0,a.forwardRef)((function(e,n){e.linkComponent;var r=e.link,a=e.as,o=void 0===a?"primary":a,u=(e.dark,e.type,e.block,e.className),d=e.children,s=e.onClick;(0,t.Z)(e,l);return void 0===r?(0,c.tZ)(i.zx,{onClick:s,variant:o,className:u,children:d}):(0,c.tZ)(i.ZP,{variant:o,href:r,className:u,children:d})}));o.displayName="AUbutton",n.Z=o},7510:function(e,n,r){"use strict";var t=r(9499),a=r(4730),i=r(6439),c=(r(7294),r(5944)),l=["level","size","children"];function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var d=function(e){var n=e.level,r=e.size,t=e.children,o=(0,a.Z)(e,l);return(0,c.tZ)(i.X,u(u({as:"h".concat(n),fontSize:r},o),{},{children:t}))};d.displayName="AUheading",n.Z=d},3824:function(e,n,r){"use strict";r.d(n,{f:function(){return c}});var t=r(8153),a=r(8547),i=r(5944),c=function(e){var n=e.navigator,r=e.gap,c=void 0===r?1:r,l=e.children;return(0,i.BX)(a.o,{children:[n?(0,i.tZ)(a.s,{columnSpan:{xs:12,md:4,lg:3},children:n}):null,(0,i.tZ)(a.s,{columnSpan:{xs:12,md:8},columnStart:{lg:5},children:(0,i.tZ)(t.Kq,{gap:c,children:l})})]})}},5486:function(e,n,r){"use strict";r.d(n,{BU:function(){return l}});var t=r(3534),a=r(5944);var i=(0,t.Z)("div",{target:"e51wucl1"})({name:"9b0nwv",styles:"background-color:var(--agds-background-body);background-color:#e8eaec;padding:2em;box-shadow:4px 3px 10px #00000038,0 0 0 3px #221c19;outline:3px dashed #e5cd22;&::before{font-size:3rem;content:'\ud83d\udea7';}"}),c=(0,t.Z)("span",{target:"e51wucl0"})({name:"umaze5",styles:"font-weight:normal;color:var(--agds-foreground-muted);border-bottom:2px dashed var(--agds-foreground-muted)"}),l=function(e){var n=e.children;e.href;return(0,a.tZ)(c,{children:n})};n.ZP=i},2429:function(e,n,r){"use strict";r.d(n,{R:function(){return f}});r(7294);var t=r(8153),a=r(9154),i=r(1163),c=r(5944),l=function(e){var n=e.backHref,r=(0,i.useRouter)();return(0,c.tZ)(t.xu,{children:(0,c.tZ)(a.hh,{onClick:function(){if(n)return r.push(n);r.back()},children:"\u2190 Back"})})},o=r(7510),u=r(5152),d=function(e){var n=e.items;return(0,c.tZ)(u.Oo,{links:n})},s=r(3824),f=function(e){var n=e.title,r=e.children,t=e.backHref,a=e.breadcrumbs,i=e.frontmatter,u=e.backbreadcrumb,f=void 0===u||u,p=e.navigator;return(0,c.BX)(s.f,{navigator:p,children:[a?(0,c.tZ)(d,{items:a}):null,f?(0,c.tZ)(l,{backHref:t}):null,void 0===i?null:i,(0,c.tZ)(o.Z,{size:"xxl",level:"1",paddingTop:1,children:n}),r]})}},5279:function(e,n,r){"use strict";r.r(n);var t=r(5732),a=r(2429),i=r(5486),c=r(5944);n.default=function(){return(0,c.tZ)(a.R,{title:"Paypal",backbreadcrumb:!1,children:(0,c.tZ)(i.ZP,{children:(0,c.tZ)("div",{children:(0,c.tZ)(t.Z,{link:"/make-payment/paid",children:"Pay"})})})})}},98:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/make-payment/paypal-pay",function(){return r(5279)}])}},function(e){e.O(0,[3634,9774,2888,179],(function(){return n=98,e(e.s=n);var n}));var n=e.O();_N_E=n}]);