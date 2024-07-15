"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[100],{8293:(n,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>h});var e=o(4848),s=o(8453);const c={sidebar_position:8},r="Custom hook",i={id:"react-hooks/custom-hook",title:"Custom hook",description:"- Custom hook l\xe0 m\u1ed9t kh\xe1i ni\u1ec7m trong React cho ph\xe9p b\u1ea1n t\xe1i s\u1eed d\u1ee5ng logic stateful v\xe0 side effect gi\u1eefa c\xe1c component.",source:"@site/docs/react-hooks/custom-hook.md",sourceDirName:"react-hooks",slug:"/react-hooks/custom-hook",permalink:"/reactjs/react-hooks/custom-hook",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"useContext()",permalink:"/reactjs/react-hooks/useContext"},next:{title:"Higher-order component (HOC) trong React",permalink:"/reactjs/hoc"}},a={},h=[];function l(n){const t={code:"code",h1:"h1",li:"li",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(t.h1,{id:"custom-hook",children:"Custom hook"}),"\n",(0,e.jsxs)(t.ul,{children:["\n",(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Custom hook"})," l\xe0 m\u1ed9t kh\xe1i ni\u1ec7m trong React cho ph\xe9p b\u1ea1n t\xe1i s\u1eed d\u1ee5ng ",(0,e.jsx)(t.strong,{children:"logic stateful"})," v\xe0 ",(0,e.jsx)(t.strong,{children:"side effect"})," gi\u1eefa c\xe1c component."]}),"\n",(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Custom hook"})," l\xe0 m\u1ed9t function, b\u1eaft \u0111\u1ea7u b\u1eb1ng t\u1eeb kh\xf3a ",(0,e.jsx)(t.code,{children:"use"}),", m\xe0 s\u1eed d\u1ee5ng c\xe1c hook \u0111\xe3 c\xf3 s\u1eb5n c\u1ee7a React, ho\u1eb7c nh\u1eefng ",(0,e.jsx)(t.strong,{children:"custom hook"})," kh\xe1c, \u0111\u1ec3 cung c\u1ea5p m\u1ed9t API m\u1edbi gi\xfap c\xe1c component kh\xe1c c\xf3 th\u1ec3 s\u1eed d\u1ee5ng."]}),"\n",(0,e.jsxs)(t.li,{children:["M\u1ed9t ",(0,e.jsx)(t.strong,{children:"custom hook"})," gi\xfap t\u0103ng kh\u1ea3 n\u0103ng t\xe1i s\u1eed d\u1ee5ng c\u1ee7a code, gi\u1ea3m \u0111\u1ed9 ph\u1ee9c t\u1ea1p c\u1ee7a component, c\u0169ng nh\u01b0 gi\xfap d\u1ec5 d\xe0ng ki\u1ec3m th\u1eed v\xe0 b\u1ea3o tr\xec."]}),"\n",(0,e.jsx)(t.li,{children:"V\xed d\u1ee5 v\u1ec1 m\u1ed9t custom hook \u0111\u1ec3 g\u1ecdi API:"}),"\n"]}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-tsx",children:'import { useState, useEffect } from "react";\n\nfunction useFetch(url) {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(true);\n\n  useEffect(() => {\n    const fetchData = async () => {\n      try {\n        const response = await fetch(url);\n        const json = await response.json();\n        setData(json);\n        setLoading(false);\n      } catch (error) {\n        console.error(error);\n      }\n    };\n\n    fetchData();\n  }, [url]);\n\n  return { loading, data };\n}\n'})}),"\n",(0,e.jsxs)(t.ul,{children:["\n",(0,e.jsx)(t.li,{children:"V\xe0 t\u1eeb m\u1ed9t component kh\xe1c, ta c\xf3 th\u1ec3 s\u1eed d\u1ee5ng custom hook n\xe0y. Vi\u1ec7c s\u1eed d\u1ee5ng khi\u1ebfn code tr\u1edf n\xean ng\u1eafn g\u1ecdn, r\xf5 r\xe0ng h\u01a1n:"}),"\n"]}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-tsx",children:'import React from "react";\nimport useFetch from "./useFetch";\n\nfunction MyComponent() {\n  const { loading, data } = useFetch(\n    "https://jsonplaceholder.typicode.com/posts"\n  );\n\n  if (loading) {\n    return <div>Loading...</div>;\n  }\n\n  return (\n    <ul>\n      {data.map((post) => (\n        <li key={post.id}>{post.title}</li>\n      ))}\n    </ul>\n  );\n}\n\nexport default MyComponent;\n'})})]})}function u(n={}){const{wrapper:t}={...(0,s.R)(),...n.components};return t?(0,e.jsx)(t,{...n,children:(0,e.jsx)(l,{...n})}):l(n)}},8453:(n,t,o)=>{o.d(t,{R:()=>r,x:()=>i});var e=o(6540);const s={},c=e.createContext(s);function r(n){const t=e.useContext(c);return e.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function i(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),e.createElement(c.Provider,{value:t},n.children)}}}]);