"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[209],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>d});var o=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},c=Object.keys(t);for(o=0;o<c.length;o++)n=c[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(o=0;o<c.length;o++)n=c[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=o.createContext({}),l=function(t){var e=o.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=l(t.components);return o.createElement(i.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},k=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,c=t.originalType,i=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=l(n),k=r,d=p["".concat(i,".").concat(k)]||p[k]||m[k]||c;return n?o.createElement(d,a(a({ref:e},u),{},{components:n})):o.createElement(d,a({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var c=n.length,a=new Array(c);a[0]=k;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s[p]="string"==typeof t?t:r,a[1]=s;for(var l=2;l<c;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2746:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const c={sidebar_position:7},a="useContext()",s={unversionedId:"react-hooks/useContext",id:"react-hooks/useContext",title:"useContext()",description:"React Context l\xe0 g\xec?",source:"@site/docs/react-hooks/useContext.md",sourceDirName:"react-hooks",slug:"/react-hooks/useContext",permalink:"/reactjs/react-hooks/useContext",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"useMemo() / useCallback()",permalink:"/reactjs/react-hooks/useMemo-useCallback"},next:{title:"Custom hook",permalink:"/reactjs/react-hooks/custom-hook"}},i={},l=[{value:"React Context l\xe0 g\xec?",id:"react-context-l\xe0-g\xec",level:2},{value:"V\xed d\u1ee5",id:"v\xed-d\u1ee5",level:2}],u={toc:l},p="wrapper";function m(t){let{components:e,...n}=t;return(0,r.kt)(p,(0,o.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"usecontext"},"useContext()"),(0,r.kt)("h2",{id:"react-context-l\xe0-g\xec"},"React Context l\xe0 g\xec?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"React Context l\xe0 m\u1ed9t t\xednh n\u0103ng trong React.js cho ph\xe9p b\u1ea1n chia s\u1ebb d\u1eef li\u1ec7u gi\u1eefa c\xe1c th\xe0nh ph\u1ea7n con m\xe0 kh\xf4ng c\u1ea7n truy\u1ec1n d\u1eef li\u1ec7u qua c\xe1c th\xe0nh ph\u1ea7n cha. N\xf3 cung c\u1ea5p m\u1ed9t c\xe1ch \u0111\u1ec3 truy\u1ec1n d\u1eef li\u1ec7u xu\u1ed1ng c\xe2y th\xe0nh ph\u1ea7n m\xe0 kh\xf4ng c\u1ea7n th\xf4ng qua c\xe1c th\xe0nh ph\u1ea7n trung gian."),(0,r.kt)("li",{parentName:"ul"},'V\u1edbi React Context, b\u1ea1n c\xf3 th\u1ec3 t\u1ea1o ra m\u1ed9t "context" (b\u1ed1i c\u1ea3nh) v\xe0 chia s\u1ebb d\u1eef li\u1ec7u qua c\xe1c th\xe0nh ph\u1ea7n con \u1edf b\u1ea5t k\u1ef3 c\u1ea5p \u0111\u1ed9 n\xe0o trong c\xe2y th\xe0nh ph\u1ea7n. Context cung c\u1ea5p m\u1ed9t c\xe1ch \u0111\u1ec3 truy c\u1eadp d\u1eef li\u1ec7u chung m\xe0 kh\xf4ng c\u1ea7n truy\u1ec1n qua nhi\u1ec1u c\u1ea5p th\xe0nh ph\u1ea7n t\u1eeb cha \u0111\u1ebfn con.')),(0,r.kt)("h2",{id:"v\xed-d\u1ee5"},"V\xed d\u1ee5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"T\u1ea1o component ",(0,r.kt)("inlineCode",{parentName:"li"},"SocketProvider"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/context/SocketProvider.tsx"',title:'"src/context/SocketProvider.tsx"'},'import {\n  FC,\n  PropsWithChildren,\n  createContext,\n  useEffect,\n  useState,\n} from "react";\nimport io, { Socket } from "socket.io-client";\n\nconst SocketContext = createContext<Socket | null>(null);\n\nconst SocketProvider: FC<PropsWithChildren> = ({ children }) => {\n  const [socket, setSocket] = useState<Socket | null>(null);\n\n  useEffect(() => {\n    const socketConnection = io("http://localhost:8080");\n    setSocket(socketConnection);\n    return () => {\n      socket?.disconnect();\n    };\n  }, []);\n\n  return (\n    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>\n  );\n};\n\nexport { SocketContext };\nexport default SocketProvider;\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"B\u1ecdc component ",(0,r.kt)("inlineCode",{parentName:"li"},"SocketProvider")," l\xean tr\xean c\xf9ng bao b\u1ecdc c\xe1c component con mu\u1ed1n s\u1eed d\u1ee5ng ",(0,r.kt)("inlineCode",{parentName:"li"},"value"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { BrowserRouter } from "react-router-dom";\nimport AppRoutes from "./routes/AppRoutes";\nimport SocketProvider from "./contexts/SocketContext";\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <SocketProvider>\n        <AppRoutes />\n      </SocketProvider>\n    </BrowserRouter>\n  );\n}\n\nexport default App;\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"T\u1ea1o m\u1ed9t hook t\xean ",(0,r.kt)("inlineCode",{parentName:"li"},"useSocket")," \u0111\u1ec3 l\u1ea5y ra gi\xe1 tr\u1ecb t\u1eeb context:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/hooks/useSocket.ts"',title:'"src/hooks/useSocket.ts"'},'import { useContext } from "react";\nimport { SocketContext } from "src/contexts/SocketContext";\n\nconst useSocket = () => {\n  const socket = useContext(SocketContext);\n\n  return { socket };\n};\n\nexport default useSocket;\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"V\xe0 gi\u1edd ta c\xf3 th\u1ec3 s\u1eed d\u1ee5ng ",(0,r.kt)("inlineCode",{parentName:"li"},"value")," \u1edf b\u1ea5t k\u1ef3 component con n\xe0o m\xe0 kh\xf4ng ph\u1ea3i truy\u1ec1n qu\xe1 nhi\u1ec1u props th\xf4ng qua c\xe1c component:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/Control.tsx"',title:'"src/pages/Control.tsx"'},'import { useEffect, useState } from "react";\n\nimport { useSocket } from "src/hooks";\nimport { IMetrics } from "src/types/common.types";\n\nconst Control = () => {\n  const { socket } = useSocket();\n  const [metricsDetail, setMetricsDetail] = useState<IMetrics>();\n  const [fanStatus, setFanStatus] = useState<"ON" | "OFF">();\n\n  useEffect(() => {\n    socket?.on("esp32/metrics", (data) => {\n      setMetricsDetail(data);\n    });\n\n    socket?.on("esp32/fan", (data) => {\n      setFanStatus(data);\n    });\n\n    return () => {\n      socket?.off("esp32/metrics");\n      socket?.off("fan");\n    };\n  }, [socket]);\n\n  return <></>;\n};\n\nexport default Control;\n')))}m.isMDXComponent=!0}}]);