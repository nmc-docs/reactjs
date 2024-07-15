"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[925],{6315:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=r(4848),t=r(8453);const s={sidebar_position:4},c="Higher-order component (HOC) trong React",a={id:"hoc",title:"Higher-order component (HOC) trong React",description:"HOC l\xe0 g\xec?",source:"@site/docs/hoc.md",sourceDirName:".",slug:"/hoc",permalink:"/reactjs/hoc",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Custom hook",permalink:"/reactjs/react-hooks/custom-hook"},next:{title:"T\u1ea1o d\u1ef1 \xe1n Reactjs v\u1edbi Vite",permalink:"/reactjs/vite"}},i={},l=[{value:"HOC l\xe0 g\xec?",id:"hoc-l\xe0-g\xec",level:2},{value:"V\xed d\u1ee5",id:"v\xed-d\u1ee5",level:2}];function d(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"higher-order-component-hoc-trong-react",children:"Higher-order component (HOC) trong React"}),"\n",(0,o.jsx)(e.h2,{id:"hoc-l\xe0-g\xec",children:"HOC l\xe0 g\xec?"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Higher-order component (HOC) trong React l\xe0 m\u1ed9t m\xf4 h\xecnh thi\u1ebft k\u1ebf gi\xfap t\xe1i s\u1eed d\u1ee5ng logic component v\xe0 chia s\u1ebb n\xf3 gi\u1eefa c\xe1c component kh\xe1c nhau. HOC l\xe0 m\u1ed9t h\xe0m nh\u1eadn m\u1ed9t component v\xe0 tr\u1ea3 v\u1ec1 m\u1ed9t component m\u1edbi v\u1edbi m\u1ed9t s\u1ed1 t\xednh n\u0103ng ho\u1eb7c thu\u1ed9c t\xednh m\u1edbi \u0111\u01b0\u1ee3c th\xeam v\xe0o."}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"v\xed-d\u1ee5",children:"V\xed d\u1ee5"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:'import { ComponentType, Suspense } from "react";\nimport { QueryErrorResetBoundary } from "@tanstack/react-query";\nimport { ErrorBoundary } from "react-error-boundary";\n\ninterface ISuspenseAndError {\n  suspenseFallback: JSX.Element;\n  errorFallback?: JSX.Element;\n}\n\nconst withSuspenseAndError = (\n  Component: ComponentType<any>,\n  boundary: ISuspenseAndError\n) => {\n  const TargetComponent = (props: any) => {\n    return boundary.errorFallback ? (\n      <QueryErrorResetBoundary>\n        {() => (\n          <ErrorBoundary fallback={boundary.errorFallback!}>\n            <Suspense fallback={boundary.suspenseFallback}>\n              <Component {...props} />\n            </Suspense>\n          </ErrorBoundary>\n        )}\n      </QueryErrorResetBoundary>\n    ) : (\n      <Suspense fallback={boundary.suspenseFallback}>\n        <Component {...props} />\n      </Suspense>\n    );\n  };\n  return TargetComponent;\n};\n\nexport default withSuspenseAndError;\n'})}),"\n",(0,o.jsx)(e.admonition,{type:"note",children:(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Trong v\xed d\u1ee5 tr\xean, ta c\xf3 h\xe0m ",(0,o.jsx)(e.code,{children:"withSuspenseAndError"})," nh\u1eadn v\xe0o m\u1ed9t component v\xe0 tr\u1ea3 v\u1ec1 1 component m\u1edbi \u0111\u01b0\u1ee3c bao b\u1ecdc b\u1edfi m\u1ed9t s\u1ed1 component kh\xe1c c\u1ea7n thi\u1ebft"]}),"\n"]})})]})}function u(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},8453:(n,e,r)=>{r.d(e,{R:()=>c,x:()=>a});var o=r(6540);const t={},s=o.createContext(t);function c(n){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),o.createElement(s.Provider,{value:e},n.children)}}}]);