"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[543],{5806:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var c=t(4848),r=t(8453);const s={sidebar_position:5},i="useRef()",o={id:"react-hooks/useRef",title:"useRef()",description:"useRef() l\xe0 g\xec?",source:"@site/docs/react-hooks/useRef.md",sourceDirName:"react-hooks",slug:"/react-hooks/useRef",permalink:"/reactjs/react-hooks/useRef",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"useEffect()",permalink:"/reactjs/react-hooks/useEffect"},next:{title:"useMemo() / useCallback()",permalink:"/reactjs/react-hooks/useMemo-useCallback"}},l={},a=[{value:"useRef() l\xe0 g\xec?",id:"useref-l\xe0-g\xec",level:2},{value:"C\xfa ph\xe1p",id:"c\xfa-ph\xe1p",level:2},{value:"\u0110\u1eb7c \u0111i\u1ec3m c\u1ee7a useRef()",id:"\u0111\u1eb7c-\u0111i\u1ec3m-c\u1ee7a-useref",level:2},{value:"V\xed d\u1ee5",id:"v\xed-d\u1ee5",level:2},{value:"S\u1eed d\u1ee5ng useRef() tham chi\u1ebfu \u0111\u1ebfn m\u1ed9t component",id:"s\u1eed-d\u1ee5ng-useref-tham-chi\u1ebfu-\u0111\u1ebfn-m\u1ed9t-component",level:2},{value:"M\u1edf r\u1ed9ng b\xe0i to\xe1n",id:"m\u1edf-r\u1ed9ng-b\xe0i-to\xe1n",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"useref",children:"useRef()"})}),"\n",(0,c.jsx)(n.h2,{id:"useref-l\xe0-g\xec",children:"useRef() l\xe0 g\xec?"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["Trong React, ",(0,c.jsx)(n.code,{children:"useRef()"})," \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 t\u1ea1o tham chi\u1ebfu \u0111\u1ebfn m\u1ed9t ph\u1ea7n t\u1eed ho\u1eb7c gi\xe1 tr\u1ecb c\u1ee5 th\u1ec3. N\xf3 c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 truy c\u1eadp c\xe1c n\xfat DOM ho\u1eb7c \u0111\u1ec3 l\u01b0u tr\u1eef c\xe1c gi\xe1 tr\u1ecb c\xf3 th\u1ec3 thay \u0111\u1ed5i m\xe0 kh\xf4ng thu\u1ed9c tr\u1ea1ng th\xe1i c\u1ee7a m\u1ed9t component."]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"c\xfa-ph\xe1p",children:"C\xfa ph\xe1p"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",children:'import { useRef } from "react";\n\nconst myRef = useRef<T>(initialValue);\n'})}),"\n",(0,c.jsx)(n.h2,{id:"\u0111\u1eb7c-\u0111i\u1ec3m-c\u1ee7a-useref",children:"\u0110\u1eb7c \u0111i\u1ec3m c\u1ee7a useRef()"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"useRef()"})," cho ph\xe9p ta duy tr\xec gi\xe1 tr\u1ecb c\u1ee7a bi\u1ebfn gi\u1eefa c\xe1c l\u1ea7n re-render (t\u01b0\u01a1ng t\u1ef1 ",(0,c.jsx)(n.code,{children:"useState()"}),")"]}),"\n",(0,c.jsxs)(n.li,{children:["Khi thay \u0111\u1ed5i gi\xe1 tr\u1ecb c\u1ee7a bi\u1ebfn ",(0,c.jsx)(n.code,{children:"useRef()"}),", component s\u1ebd ",(0,c.jsx)(n.strong,{children:"KH\xd4NG"})," b\u1ecb re-render"]}),"\n",(0,c.jsxs)(n.li,{children:["\u0110\u1ec3 truy c\u1eadp gi\xe1 tr\u1ecb/\u0111\u1ed1i t\u01b0\u1ee3ng m\xe0 bi\u1ebfn s\u1eed d\u1ee5ng ",(0,c.jsx)(n.code,{children:"useRef()"})," \u0111\u1ea3m nhi\u1ec7m: ",(0,c.jsx)(n.code,{children:"myRef.current"})]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"v\xed-d\u1ee5",children:"V\xed d\u1ee5"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"Khi click v\xe0o button th\xec gi\xe1 tr\u1ecb \xf4 input s\u1ebd l\xe0: \u201cHello World!\u201d:"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",children:'import { Ref, useRef } from "react";\n\nexport default function App() {\n  const inputRef: Ref<HTMLInputElement> = useRef(null);\n  // const inputRef = useRef<HTMLInputElement>(null);\n\n  const handleClick = () => {\n    if (inputRef.current !== null) {\n      inputRef.current.value = "Hello World!";\n    }\n  };\n\n  return (\n    <>\n      <input ref={inputRef} type="text" />\n      <button onClick={handleClick}>Change the input\u2019s value</button>\n    </>\n  );\n}\n'})}),"\n",(0,c.jsx)(n.h2,{id:"s\u1eed-d\u1ee5ng-useref-tham-chi\u1ebfu-\u0111\u1ebfn-m\u1ed9t-component",children:"S\u1eed d\u1ee5ng useRef() tham chi\u1ebfu \u0111\u1ebfn m\u1ed9t component"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["Khi ta \u0111\u1eb7t m\u1ed9t ",(0,c.jsx)(n.code,{children:"ref"})," cho c\xe1c th\u1ebb c\xf3 s\u1eb5n trong HTML, React s\u1ebd \u0111\u1eb7t thu\u1ed9c t\xednh ",(0,c.jsx)(n.code,{children:"ref.current"})," tham chi\u1ebfu t\u01b0\u01a1ng \u1ee9ng v\u1edbi th\u1ebb \u0111\xf3 (v\xed d\u1ee5 nh\u01b0 th\u1ebb ",(0,c.jsx)(n.code,{children:"<input />"}),")"]}),"\n",(0,c.jsxs)(n.li,{children:["Tuy nhi\xean, n\u1ebfu b\u1ea1n c\u1ed1 g\u1eafng \u0111\u1eb7t tham chi\u1ebfu ",(0,c.jsx)(n.code,{children:"ref"})," t\u1edbi m\u1ed9t component c\u1ee7a ri\xeang b\u1ea1n, v\xed d\u1ee5 nh\u01b0 ",(0,c.jsx)(n.code,{children:"<MyInput />"})," th\xec theo m\u1eb7c \u0111\u1ecbnh, b\u1ea1n s\u1ebd nh\u1eadn \u0111\u01b0\u1ee3c gi\xe1 tr\u1ecb r\u1ed7ng"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\ud83d\udd11 V\xec v\u1eady \u0111\u1ec3 s\u1eed d\u1ee5ng ",(0,c.jsx)(n.code,{children:"ref"})," \u0111\u1ed1i v\u1edbi m\u1ed9t component, ta s\u1eed d\u1ee5ng API ",(0,c.jsx)(n.code,{children:"forwardRef"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["Ta s\u1eed d\u1ee5ng ",(0,c.jsx)(n.code,{children:"forwardRef"})," nh\u01b0 m\u1ed9t c\xe1ch \u0111\u1ec3 t\u01b0\u01a1ng t\xe1c v\u1edbi component con t\u1eeb component cha"]}),"\n",(0,c.jsx)(n.li,{children:"C\xfa ph\xe1p:"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",children:"import { forwardRef } from 'react';\n\nconst MyInput = forwardRef<RefType, PropsType>((props, ref)=>{\n  return (\n    /* Your UI code */\n  );\n})\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"V\xed d\u1ee5: ch\u1ec9 \u0111\u01a1n gi\u1ea3n l\xe0 focus v\xe0o th\u1ebb input c\u1ee7a component con t\u1eeb component cha"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",children:'import { ElementRef, forwardRef, useRef } from "react";\n\ninterface IMyInputProps {}\n\nconst MyInput = forwardRef<HTMLInputElement, IMyInputProps>((props, ref) => {\n  return <input ref={ref} />;\n});\n\nexport default function App() {\n  // use React utility ElementRef, TypeScript can infer exact ref type of your component\n  const myInputRef = useRef<ElementRef<typeof MyInput>>(null);\n\n  function handleClick() {\n    myInputRef.current?.focus();\n  }\n\n  return (\n    <>\n      <MyInput ref={myInputRef} />\n      <button onClick={handleClick}>Focus the input</button>\n    </>\n  );\n}\n'})}),"\n",(0,c.jsx)(n.h2,{id:"m\u1edf-r\u1ed9ng-b\xe0i-to\xe1n",children:"M\u1edf r\u1ed9ng b\xe0i to\xe1n"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["Gi\u1ea3 s\u1eed t\u1eeb component cha, ngo\xe0i vi\u1ec7c focus v\xe0o input \u0111\xf3, ta mu\u1ed1n l\xe0m th\xeam m\u1ed9t s\u1ed1 action kh\xe1c, v\xed d\u1ee5 nh\u01b0 \u0111\xf3ng/m\u1edf m\u1ed9t modal, ho\u1eb7c c\u0169ng c\xf3 th\u1ec3 l\xe0m thay \u0111\u1ed5i m\u1ed9t s\u1ed1 tr\u1ea1ng th\xe1i trong component con. V\u1edbi v\u1ea5n \u0111\u1ec1 n\xe0y, ta s\u1ebd s\u1eed d\u1ee5ng m\u1ed9t hook m\xe0 th\u01b0 vi\u1ec7n React cung c\u1ea5p \u0111\xf3 l\xe0: ",(0,c.jsx)(n.code,{children:"useImperativeHandle"})]}),"\n",(0,c.jsx)(n.li,{children:"\u0110\u1ec3 hi\u1ec3u r\xf5 h\u01a1n, ta c\xf3 v\xed d\u1ee5 sau d\u01b0\u1edbi \u0111\xe2y s\u1ebd m\xf4 t\u1ea3 x\u1eed l\xfd vi\u1ec7c \u1ea9n/hi\u1ec3n th\u1ecb c\u1ee7a m\u1ed9t \u1ea3nh trong component con t\u1eeb component cha"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",metastring:'title="MyImage.tsx"',children:'import { forwardRef, useImperativeHandle, useState } from "react";\n\ninterface IMyImageProps {}\ninterface IMyImageRefHandle {\n  showImage: () => void;\n  hideImage: () => void;\n}\n\nconst MyImage = forwardRef<IMyImageRefHandle, IMyImageProps>((props, ref) => {\n  const [open, setOpen] = useState<boolean>(false);\n\n  useImperativeHandle(ref, () => ({\n    showImage: () => {\n      setOpen(true);\n    },\n    hideImage: () => {\n      setOpen(false);\n    },\n  }));\n\n  return open ? (\n    <img\n      src="https://images.unsplash.com/photo-1668774833031-fa514917b190"\n      height="100"\n      width="100"\n      alt=""\n    />\n  ) : null;\n});\n\nexport default MyImage;\n'})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",metastring:'title="App.tsx"',children:'import MyImage from "./MyImage";\nimport { useRef, ElementRef } from "react";\n\nexport default function App() {\n  const imageRef = useRef<ElementRef<typeof MyImage>>(null);\n\n  return (\n    <>\n      <button onClick={() => imageRef.current?.showImage()}>Show image</button>\n      <button onClick={() => imageRef.current?.hideImage()}>Hide image</button>\n      <MyImage ref={imageRef} />\n    </>\n  );\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var c=t(6540);const r={},s=c.createContext(r);function i(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);