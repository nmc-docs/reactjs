"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[606],{7690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var c=n(4848),i=n(8453);const s={sidebar_position:2},r="useState()",o={id:"react-hooks/useState",title:"useState()",description:"\u0110\u1ecbnh ngh\u0129a",source:"@site/docs/react-hooks/useState.md",sourceDirName:"react-hooks",slug:"/react-hooks/useState",permalink:"/reactjs/react-hooks/useState",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Gi\u1edbi thi\u1ec7u",permalink:"/reactjs/react-hooks/introduce"},next:{title:"useEffect()",permalink:"/reactjs/react-hooks/useEffect"}},h={},l=[{value:"\u0110\u1ecbnh ngh\u0129a",id:"\u0111\u1ecbnh-ngh\u0129a",level:2},{value:"V\xed d\u1ee5:",id:"v\xed-d\u1ee5",level:2},{value:"L\u01b0u \xfd:",id:"l\u01b0u-\xfd",level:2}];function a(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h1,{id:"usestate",children:"useState()"}),"\n",(0,c.jsx)(t.h2,{id:"\u0111\u1ecbnh-ngh\u0129a",children:"\u0110\u1ecbnh ngh\u0129a"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:"state"})," bi\u1ec3u di\u1ec5n tr\u1ea1ng th\xe1i c\u1ee7a component, ",(0,c.jsx)(t.code,{children:"state"})," l\xe0 ",(0,c.jsx)(t.strong,{children:"private"})," ch\u1ec9 c\xf3 th\u1ec3 thay \u0111\u1ed5i b\xean trong b\u1ea3n th\xe2n c\u1ee7a ch\xednh component \u0111\xf3."]}),"\n",(0,c.jsxs)(t.li,{children:["M\u1ed7i khi gi\xe1 tr\u1ecb c\u1ee7a ",(0,c.jsx)(t.code,{children:"state"})," \u0111\u01b0\u1ee3c thay \u0111\u1ed5i th\xf4ng qua ",(0,c.jsx)(t.code,{children:"setState"}),", component s\u1ebd t\u1ef1 \u0111\u1ed9ng re-render"]}),"\n",(0,c.jsx)(t.li,{children:"C\xfa ph\xe1p:"}),"\n"]}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-tsx",children:"const [state, setState] = useState<T>(initialStateValue);\n"})}),"\n",(0,c.jsxs)(t.admonition,{type:"info",children:[(0,c.jsx)(t.p,{children:"Trong \u0111\xf3"}),(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:"state"}),": \u0111\u1ecbnh ngh\u0129a m\u1ed9t tr\u1ea1ng th\xe1i cho component"]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:"setState"}),": l\xe0 m\u1ed9t function \u0111\u1ec3 update state. Trong function n\xe0y c\xf3 th\u1ec3 l\xe0 m\u1ed9t callback nh\u1eadn parameter l\xe0 ",(0,c.jsx)(t.code,{children:"prevState"})," l\xe0 gi\xe1 tr\u1ecb c\u1ee7a state tr\u01b0\u1edbc \u0111\xf3. Khi th\u1ef1c hi\u1ec7n xong s\u1ebd render l\u1ea1i component"]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:"initialStateValue"}),": l\xe0 gi\xe1 tr\u1ecb kh\u1edfi t\u1ea1o c\u1ee7a state"]}),"\n"]})]}),"\n",(0,c.jsx)(t.h2,{id:"v\xed-d\u1ee5",children:"V\xed d\u1ee5:"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-tsx",children:'import { useState } from "react";\n\nexport default function Counter() {\n  const [count, setCount] = useState<number>(0);\n\n  const handleClick = () => {\n    setCount(count + 1);\n  };\n\n  return (\n    <>\n      <h1>{count}</h1>\n      <button onClick={handleClick}>Click me</button>\n    </>\n  );\n}\n'})}),"\n",(0,c.jsx)(t.h2,{id:"l\u01b0u-\xfd",children:"L\u01b0u \xfd:"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsxs)(t.li,{children:["B\u1ea5t c\u1ee9 khi n\xe0o component \u0111\u01b0\u1ee3c re-render, t\u1ea5t c\u1ea3 c\xe1c bi\u1ebfn c\u1ee5c b\u1ed9 (local) \u0111\u01b0\u1ee3c kh\u1edfi t\u1ea1o l\u1ea1i t\u1eeb \u0111\u1ea7u, v\xe0 gi\xe1 tr\u1ecb c\u1ee7a ",(0,c.jsx)(t.code,{children:"state"})," th\xec ng\u01b0\u1ee3c l\u1ea1i. N\xf3 lu\xf4n \u0111\u01b0\u1ee3c duy tr\xec gi\u1eefa c\xe1c l\u1ea7n render."]}),"\n",(0,c.jsxs)(t.li,{children:["Gi\xe1 tr\u1ecb c\u1ee7a ",(0,c.jsx)(t.code,{children:"state"})," ch\u1ec9 thay \u0111\u1ed5i khi \u0111\u1ebfn l\u1ea7n render ti\u1ebfp theo (t\u1ee9c l\xe0 trong m\u1ed9t l\u1ea7n render, gi\xe1 tr\u1ecb c\u1ee7a ",(0,c.jsx)(t.code,{children:"state"})," lu\xf4n gi\u1eef c\u1ed1 \u0111\u1ecbnh)."]}),"\n",(0,c.jsxs)(t.li,{children:["Khi ta g\u1ecdi \u0111\u1ebfn ",(0,c.jsx)(t.code,{children:"setState()"}),", React s\u1ebd \u0111\u01b0a c\xe1c ho\u1ea1t \u0111\u1ed9ng c\u1eadp nh\u1eadt ",(0,c.jsx)(t.code,{children:"state"})," n\xe0y v\xe0o queue v\xe0 th\u1ef1c hi\u1ec7n theo th\u1ee9 t\u1ef1 l\u1ea7n l\u01b0\u1ee3t (g\u1ecdi tr\u01b0\u1edbc th\u1ef1c hi\u1ec7n tr\u01b0\u1edbc)."]}),"\n",(0,c.jsxs)(t.li,{children:["N\u1ebfu c\xf3 nhi\u1ec1u ",(0,c.jsx)(t.code,{children:"setState()"})," trong m\u1ed9t l\u1ea7n render. React s\u1ebd gom t\u1ea5t c\u1ea3 ch\xfang l\u1ea1i v\xe0 th\u1ef1c hi\u1ec7n c\xf9ng m\u1ed9t l\xfac cho l\u1ea7n render k\u1ebf ti\u1ebfp, \u0111i\u1ec1u n\xe0y gi\xfap tr\xe1nh t\xecnh tr\u1ea1ng render nhi\u1ec1u l\u1ea7n. V\xe0 t\u1ea5t nhi\xean gi\u1eefa c\xe1c ",(0,c.jsx)(t.code,{children:"setState()"})," n\xe0y kh\xf4ng c\xf3 \u0111o\u1ea1n code b\u1ea5t \u0111\u1ed3ng b\u1ed9. N\u1ebfu xu\u1ea5t hi\u1ec7n \u0111o\u1ea1n code b\u1ea5t \u0111\u1ed3ng b\u1ed9 \u1edf gi\u1eefa c\xe1c ",(0,c.jsx)(t.code,{children:"setSate()"}),", React s\u1ebd th\u1ef1c hi\u1ec7n l\u1ea7n l\u01b0\u1ee3t: ch\u1edd \u0111o\u1ea1n code b\u1ea5t \u0111\u1ed3ng b\u1ed9 ch\u1ea1y xong m\u1edbi th\u1ef1c hi\u1ec7n c\xe1c ",(0,c.jsx)(t.code,{children:"setState()"})," \u1edf sau \u0111o\u1ea1n code b\u1ea5t \u0111\u1ed3ng b\u1ed9 \u0111\xf3"]}),"\n",(0,c.jsxs)(t.li,{children:["S\u1ef1 kh\xe1c bi\u1ec7t gi\u1eefa ",(0,c.jsx)(t.code,{children:"setState(value)"})," v\xe0 ",(0,c.jsx)(t.code,{children:"setState(prevValue => \u2026newValue)"}),":"]}),"\n"]}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"setState(value)"}),(0,c.jsx)(t.th,{children:"setState(prevValue => newValue)"})]})}),(0,c.jsx)(t.tbody,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:["Ghi \u0111\xe8 gi\xe1 tr\u1ecb ",(0,c.jsx)(t.code,{children:"state"})," hi\u1ec7n t\u1ea1i b\u1eb1ng ",(0,c.jsx)(t.code,{children:"value"}),", \u0111\u1ea9y v\xe0o queue."]}),(0,c.jsx)(t.td,{children:"L\u1ea5y gi\xe1 tr\u1ecb tr\u01b0\u1edbc \u0111\xf3 v\xe0 th\u1ef1c hi\u1ec7n, tr\u1ea3 v\u1ec1 gi\xe1 tr\u1ecb m\u1edbi d\u1ef1a tr\xean gi\xe1 tr\u1ecb c\u0169, \u0111\u1ea9y v\xe0o queue"})]})})]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var c=n(6540);const i={},s=c.createContext(i);function r(e){const t=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),c.createElement(s.Provider,{value:t},e.children)}}}]);