"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[659],{2028:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=n(4848),c=n(8453);const s={sidebar_position:7},r="useContext()",i={id:"react-hooks/useContext",title:"useContext()",description:"React Context l\xe0 g\xec?",source:"@site/docs/react-hooks/useContext.md",sourceDirName:"react-hooks",slug:"/react-hooks/useContext",permalink:"/reactjs/react-hooks/useContext",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"useMemo() / useCallback()",permalink:"/reactjs/react-hooks/useMemo-useCallback"},next:{title:"Custom hook",permalink:"/reactjs/react-hooks/custom-hook"}},a={},l=[{value:"React Context l\xe0 g\xec?",id:"react-context-l\xe0-g\xec",level:2},{value:"V\xed d\u1ee5",id:"v\xed-d\u1ee5",level:2}];function u(t){const e={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",pre:"pre",ul:"ul",...(0,c.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"usecontext",children:"useContext()"})}),"\n",(0,o.jsx)(e.h2,{id:"react-context-l\xe0-g\xec",children:"React Context l\xe0 g\xec?"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"React Context l\xe0 m\u1ed9t t\xednh n\u0103ng trong React.js cho ph\xe9p b\u1ea1n chia s\u1ebb d\u1eef li\u1ec7u gi\u1eefa c\xe1c th\xe0nh ph\u1ea7n con m\xe0 kh\xf4ng c\u1ea7n truy\u1ec1n d\u1eef li\u1ec7u qua c\xe1c th\xe0nh ph\u1ea7n cha. N\xf3 cung c\u1ea5p m\u1ed9t c\xe1ch \u0111\u1ec3 truy\u1ec1n d\u1eef li\u1ec7u xu\u1ed1ng c\xe2y th\xe0nh ph\u1ea7n m\xe0 kh\xf4ng c\u1ea7n th\xf4ng qua c\xe1c th\xe0nh ph\u1ea7n trung gian."}),"\n",(0,o.jsx)(e.li,{children:'V\u1edbi React Context, b\u1ea1n c\xf3 th\u1ec3 t\u1ea1o ra m\u1ed9t "context" (b\u1ed1i c\u1ea3nh) v\xe0 chia s\u1ebb d\u1eef li\u1ec7u qua c\xe1c th\xe0nh ph\u1ea7n con \u1edf b\u1ea5t k\u1ef3 c\u1ea5p \u0111\u1ed9 n\xe0o trong c\xe2y th\xe0nh ph\u1ea7n. Context cung c\u1ea5p m\u1ed9t c\xe1ch \u0111\u1ec3 truy c\u1eadp d\u1eef li\u1ec7u chung m\xe0 kh\xf4ng c\u1ea7n truy\u1ec1n qua nhi\u1ec1u c\u1ea5p th\xe0nh ph\u1ea7n t\u1eeb cha \u0111\u1ebfn con.'}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"v\xed-d\u1ee5",children:"V\xed d\u1ee5"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["T\u1ea1o component ",(0,o.jsx)(e.code,{children:"SocketProvider"})]}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",metastring:'title="src/context/SocketProvider.tsx"',children:'import {\n  FC,\n  PropsWithChildren,\n  createContext,\n  useEffect,\n  useState,\n} from "react";\nimport io, { Socket } from "socket.io-client";\n\nconst SocketContext = createContext<Socket | null>(null);\n\nconst SocketProvider: FC<PropsWithChildren> = ({ children }) => {\n  const [socket, setSocket] = useState<Socket | null>(null);\n\n  useEffect(() => {\n    const socketConnection = io("http://localhost:8080");\n    setSocket(socketConnection);\n    return () => {\n      socket?.disconnect();\n    };\n  }, []);\n\n  return (\n    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>\n  );\n};\n\nexport { SocketContext };\nexport default SocketProvider;\n'})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["B\u1ecdc component ",(0,o.jsx)(e.code,{children:"SocketProvider"})," l\xean tr\xean c\xf9ng bao b\u1ecdc c\xe1c component con mu\u1ed1n s\u1eed d\u1ee5ng ",(0,o.jsx)(e.code,{children:"value"}),":"]}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",metastring:'title="src/App.tsx"',children:'import { BrowserRouter } from "react-router-dom";\nimport AppRoutes from "./routes/AppRoutes";\nimport SocketProvider from "./contexts/SocketContext";\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <SocketProvider>\n        <AppRoutes />\n      </SocketProvider>\n    </BrowserRouter>\n  );\n}\n\nexport default App;\n'})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["T\u1ea1o m\u1ed9t hook t\xean ",(0,o.jsx)(e.code,{children:"useSocket"})," \u0111\u1ec3 l\u1ea5y ra gi\xe1 tr\u1ecb t\u1eeb context:"]}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",metastring:'title="src/hooks/useSocket.ts"',children:'import { useContext } from "react";\nimport { SocketContext } from "src/contexts/SocketContext";\n\nconst useSocket = () => {\n  const socket = useContext(SocketContext);\n\n  return { socket };\n};\n\nexport default useSocket;\n'})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["V\xe0 gi\u1edd ta c\xf3 th\u1ec3 s\u1eed d\u1ee5ng ",(0,o.jsx)(e.code,{children:"value"})," \u1edf b\u1ea5t k\u1ef3 component con n\xe0o m\xe0 kh\xf4ng ph\u1ea3i truy\u1ec1n qu\xe1 nhi\u1ec1u props th\xf4ng qua c\xe1c component:"]}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",metastring:'title="src/pages/Control.tsx"',children:'import { useEffect, useState } from "react";\n\nimport { useSocket } from "src/hooks";\nimport { IMetrics } from "src/types/common.types";\n\nconst Control = () => {\n  const { socket } = useSocket();\n  const [metricsDetail, setMetricsDetail] = useState<IMetrics>();\n  const [fanStatus, setFanStatus] = useState<"ON" | "OFF">();\n\n  useEffect(() => {\n    socket?.on("esp32/metrics", (data) => {\n      setMetricsDetail(data);\n    });\n\n    socket?.on("esp32/fan", (data) => {\n      setFanStatus(data);\n    });\n\n    return () => {\n      socket?.off("esp32/metrics");\n      socket?.off("fan");\n    };\n  }, [socket]);\n\n  return <></>;\n};\n\nexport default Control;\n'})})]})}function h(t={}){const{wrapper:e}={...(0,c.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(u,{...t})}):u(t)}},8453:(t,e,n)=>{n.d(e,{R:()=>r,x:()=>i});var o=n(6540);const c={},s=o.createContext(c);function r(t){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(c):t.components||c:r(t.components),o.createElement(s.Provider,{value:e},t.children)}}}]);