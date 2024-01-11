"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[83],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>y});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=t.createContext({}),l=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},s=function(e){var n=l(e.components);return t.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,y=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return r?t.createElement(y,c(c({ref:n},s),{},{components:r})):t.createElement(y,c({ref:n},s))}));function y(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},170:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var t=r(7462),o=(r(7294),r(3905));const a={sidebar_position:4},c="Higher-order component (HOC) trong React",i={unversionedId:"hoc",id:"hoc",title:"Higher-order component (HOC) trong React",description:"HOC l\xe0 g\xec?",source:"@site/docs/hoc.md",sourceDirName:".",slug:"/hoc",permalink:"/reactjs/hoc",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Custom hook",permalink:"/reactjs/react-hooks/custom-hook"},next:{title:"T\u1ea1o d\u1ef1 \xe1n Reactjs v\u1edbi Vite",permalink:"/reactjs/vite"}},p={},l=[{value:"HOC l\xe0 g\xec?",id:"hoc-l\xe0-g\xec",level:2},{value:"V\xed d\u1ee5",id:"v\xed-d\u1ee5",level:2}],s={toc:l},u="wrapper";function m(e){let{components:n,...r}=e;return(0,o.kt)(u,(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"higher-order-component-hoc-trong-react"},"Higher-order component (HOC) trong React"),(0,o.kt)("h2",{id:"hoc-l\xe0-g\xec"},"HOC l\xe0 g\xec?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Higher-order component (HOC) trong React l\xe0 m\u1ed9t m\xf4 h\xecnh thi\u1ebft k\u1ebf gi\xfap t\xe1i s\u1eed d\u1ee5ng logic component v\xe0 chia s\u1ebb n\xf3 gi\u1eefa c\xe1c component kh\xe1c nhau. HOC l\xe0 m\u1ed9t h\xe0m nh\u1eadn m\u1ed9t component v\xe0 tr\u1ea3 v\u1ec1 m\u1ed9t component m\u1edbi v\u1edbi m\u1ed9t s\u1ed1 t\xednh n\u0103ng ho\u1eb7c thu\u1ed9c t\xednh m\u1edbi \u0111\u01b0\u1ee3c th\xeam v\xe0o.")),(0,o.kt)("h2",{id:"v\xed-d\u1ee5"},"V\xed d\u1ee5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { ComponentType, Suspense } from "react";\nimport { QueryErrorResetBoundary } from "@tanstack/react-query";\nimport { ErrorBoundary } from "react-error-boundary";\n\ninterface ISuspenseAndError {\n  suspenseFallback: JSX.Element;\n  errorFallback?: JSX.Element;\n}\n\nconst withSuspenseAndError = (\n  Component: ComponentType<any>,\n  boundary: ISuspenseAndError\n) => {\n  const TargetComponent = (props: any) => {\n    return boundary.errorFallback ? (\n      <QueryErrorResetBoundary>\n        {() => (\n          <ErrorBoundary fallback={boundary.errorFallback!}>\n            <Suspense fallback={boundary.suspenseFallback}>\n              <Component {...props} />\n            </Suspense>\n          </ErrorBoundary>\n        )}\n      </QueryErrorResetBoundary>\n    ) : (\n      <Suspense fallback={boundary.suspenseFallback}>\n        <Component {...props} />\n      </Suspense>\n    );\n  };\n  return TargetComponent;\n};\n\nexport default withSuspenseAndError;\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Trong v\xed d\u1ee5 tr\xean, ta c\xf3 h\xe0m ",(0,o.kt)("inlineCode",{parentName:"li"},"withSuspenseAndError")," nh\u1eadn v\xe0o m\u1ed9t component v\xe0 tr\u1ea3 v\u1ec1 1 component m\u1edbi \u0111\u01b0\u1ee3c bao b\u1ecdc b\u1edfi m\u1ed9t s\u1ed1 component kh\xe1c c\u1ea7n thi\u1ebft"))))}m.isMDXComponent=!0}}]);