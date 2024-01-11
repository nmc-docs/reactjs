"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[862],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>v});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,v=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(v,l(l({ref:t},s),{},{components:n})):r.createElement(v,l({ref:t},s))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5482:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:5},l="T\u1ea1o d\u1ef1 \xe1n Reactjs v\u1edbi Vite",o={unversionedId:"vite",id:"vite",title:"T\u1ea1o d\u1ef1 \xe1n Reactjs v\u1edbi Vite",description:"Kh\u1edfi t\u1ea1o Vite",source:"@site/docs/vite.md",sourceDirName:".",slug:"/vite",permalink:"/reactjs/vite",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Higher-order component (HOC) trong React",permalink:"/reactjs/hoc"}},c={},p=[{value:"Kh\u1edfi t\u1ea1o Vite",id:"kh\u1edfi-t\u1ea1o-vite",level:2},{value:"C\xe0i \u0111\u1eb7t th\xeam c\xe1c th\u01b0 vi\u1ec7n c\u1ea7n thi\u1ebft",id:"c\xe0i-\u0111\u1eb7t-th\xeam-c\xe1c-th\u01b0-vi\u1ec7n-c\u1ea7n-thi\u1ebft",level:2},{value:"C\u1ea5u h\xecnh l\u1ea1i cho m\u1ed9t s\u1ed1 file",id:"c\u1ea5u-h\xecnh-l\u1ea1i-cho-m\u1ed9t-s\u1ed1-file",level:2},{value:"C\u1ea5u h\xecnh th\xeam cho Vite",id:"c\u1ea5u-h\xecnh-th\xeam-cho-vite",level:2},{value:"S\u1eed d\u1ee5ng component svg trong Vite",id:"s\u1eed-d\u1ee5ng-component-svg-trong-vite",level:2},{value:"S\u1eed d\u1ee5ng bi\u1ebfn m\xf4i tr\u01b0\u1eddng (environment variables) trong Vite",id:"s\u1eed-d\u1ee5ng-bi\u1ebfn-m\xf4i-tr\u01b0\u1eddng-environment-variables-trong-vite",level:2},{value:"Ch\u1ea1y, build d\u1ef1 \xe1n",id:"ch\u1ea1y-build-d\u1ef1-\xe1n",level:2}],s={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"t\u1ea1o-d\u1ef1-\xe1n-reactjs-v\u1edbi-vite"},"T\u1ea1o d\u1ef1 \xe1n Reactjs v\u1edbi Vite"),(0,i.kt)("h2",{id:"kh\u1edfi-t\u1ea1o-vite"},"Kh\u1edfi t\u1ea1o Vite"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"M\u1edf terminal trong th\u01b0 m\u1ee5c d\u1ef1 \xe1n v\xe0 g\xf5 l\u1ec7nh:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm create vite@latest .\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Ch\u1ecdn y\xeau c\u1ea7u theo d\u01b0\u1edbi \u0111\xe2y:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Select a framework: ",(0,i.kt)("strong",{parentName:"li"},"React")),(0,i.kt)("li",{parentName:"ul"},"Select a variant: ",(0,i.kt)("strong",{parentName:"li"},"TypeScript + SWC")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"C\xe0i \u0111\u1eb7t c\xe1c th\u01b0 vi\u1ec7n:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,i.kt)("h2",{id:"c\xe0i-\u0111\u1eb7t-th\xeam-c\xe1c-th\u01b0-vi\u1ec7n-c\u1ea7n-thi\u1ebft"},"C\xe0i \u0111\u1eb7t th\xeam c\xe1c th\u01b0 vi\u1ec7n c\u1ea7n thi\u1ebft"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -D vite-tsconfig-paths vite-plugin-checker vite-plugin-svgr\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"vite-tsconfig-paths")," : gi\xfap ta ch\u1ec9 c\u1ea7n c\u1ea5u h\xecnh alias path trong file tsconfig.json, kh\xf4ng c\u1ea7n ph\u1ea3i c\u1ea5u h\xecnh th\xeam trong file vite.config.ts"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"vite-plugin-checker")," : ki\u1ec3m tra v\xe0 th\xf4ng b\xe1o l\u1ed7i li\xean quan v\u1ec1 TypeScript (c\xfa ph\xe1p, type,...) v\xe0 c\xe1c l\u1ed7i li\xean quan \u0111\u1ebfn ESLint trong project."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"vite-plugin-svgr")," : cho ph\xe9p export default m\u1ed9t file .svg v\xe0 s\u1eed d\u1ee5ng nh\u01b0 m\u1ed9t component."))),(0,i.kt)("h2",{id:"c\u1ea5u-h\xecnh-l\u1ea1i-cho-m\u1ed9t-s\u1ed1-file"},"C\u1ea5u h\xecnh l\u1ea1i cho m\u1ed9t s\u1ed1 file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "strict": true,\n    "target": "ESNext",\n    "module": "ESNext",\n    "outDir": "dist",\n    "moduleResolution": "bundler",\n    "resolveJsonModule": true,\n    "importHelpers": true,\n    "skipLibCheck": true,\n    "removeComments": true,\n    "allowSyntheticDefaultImports": true,\n    "esModuleInterop": true,\n    "noUncheckedIndexedAccess": true,\n    "forceConsistentCasingInFileNames": true,\n    "lib": ["DOM", "DOM.Iterable", "ESNext"],\n    "jsx": "react-jsx",\n    "baseUrl": ".",\n    "paths": {\n      "src/*": ["./src/*"]\n    },\n    "types": ["vite-plugin-svgr/client"]\n  },\n  "include": ["src"],\n  "exclude": ["node_modules"],\n  "references": [{ "path": "./tsconfig.node.json" }]\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "composite": true,\n    "skipLibCheck": true,\n    "module": "ESNext",\n    "moduleResolution": "bundler",\n    "allowSyntheticDefaultImports": true\n  },\n  "include": ["vite.config.ts"]\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "react-vite",\n  "private": true,\n  "version": "0.0.0",\n  "type": "module",\n  "scripts": {\n    "dev": "vite",\n    "build": "tsc && vite build",\n    "preview": "vite preview"\n  },\n  "dependencies": {\n    "react": "^18.2.0",\n    "react-dom": "^18.2.0"\n  },\n  "devDependencies": {\n    "@types/react": "^18.2.39",\n    "@types/react-dom": "^18.2.17",\n    "@vitejs/plugin-react-swc": "^3.5.0",\n    "typescript": "^5.3.2",\n    "vite": "^5.0.2",\n    "vite-plugin-checker": "^0.6.2",\n    "vite-plugin-svgr": "^4.2.0",\n    "vite-tsconfig-paths": "^4.2.1"\n  }\n}\n')),(0,i.kt)("h2",{id:"c\u1ea5u-h\xecnh-th\xeam-cho-vite"},"C\u1ea5u h\xecnh th\xeam cho Vite"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { defineConfig } from "vite";\nimport react from "@vitejs/plugin-react-swc";\nimport checker from "vite-plugin-checker";\nimport tsconfigPaths from "vite-tsconfig-paths";\nimport svgr from "vite-plugin-svgr";\n\nexport default defineConfig({\n  plugins: [svgr(), react(), checker({ typescript: true }), tsconfigPaths()],\n  server: {\n    port: 3000,\n  },\n});\n')),(0,i.kt)("h2",{id:"s\u1eed-d\u1ee5ng-component-svg-trong-vite"},"S\u1eed d\u1ee5ng component svg trong Vite"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0110\u1ec3 c\xf3 th\u1ec3 s\u1eed d\u1ee5ng c\xe1c file ",(0,i.kt)("inlineCode",{parentName:"li"},".svg")," nh\u01b0 m\u1ed9t component, sau \u0111\u01b0\u1eddng d\u1eabn import, ta th\xeam ",(0,i.kt)("inlineCode",{parentName:"li"},"?react"),", v\xed d\u1ee5:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import ReactIcon from "./reactjs.svg?react";\n\nexport { ReactIcon };\n')),(0,i.kt)("h2",{id:"s\u1eed-d\u1ee5ng-bi\u1ebfn-m\xf4i-tr\u01b0\u1eddng-environment-variables-trong-vite"},"S\u1eed d\u1ee5ng bi\u1ebfn m\xf4i tr\u01b0\u1eddng (environment variables) trong Vite"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0110\u1ec3 s\u1eed d\u1ee5ng bi\u1ebfn m\xf4i tr\u01b0\u1eddng trong Vite, \u0111\u1ea7u ti\xean h\xe3y t\u1ea1o m\u1ed9t file ",(0,i.kt)("inlineCode",{parentName:"li"},"env.development")," v\xe0 khai b\xe1o c\xe1c bi\u1ebfn m\xf4i tr\u01b0\u1eddng t\u1ea1i file n\xe0y, l\u01b0u \xfd, t\xean bi\u1ebfn ph\u1ea3i b\u1eaft \u0111\u1ea7u b\u1edfi ti\u1ec1n t\u1ed1 ",(0,i.kt)("strong",{parentName:"li"},"VITE","_"),", v\xed d\u1ee5:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-env"},"VITE_API_URL=localhost:8080\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sau \u0111\xf3, \u0111\u1ec3 s\u1eed d\u1ee5ng bi\u1ebfn m\xf4i tr\u01b0\u1eddng n\xe0y, ta s\u1eed d\u1ee5ng c\xfa ph\xe1p:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import.meta.env.VITE_API_URL;\n")),(0,i.kt)("h2",{id:"ch\u1ea1y-build-d\u1ef1-\xe1n"},"Ch\u1ea1y, build d\u1ef1 \xe1n"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"npm run dev")," : Ch\u1ea1y project \u1edf m\xf4i tr\u01b0\u1eddng ph\xe1t tri\u1ec3n (development)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"npm run build")," : Build project"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"npm run preview")," : Ch\u1ea1y th\u1eed project sau khi \u0111\u01b0\u1ee3c build"))))}m.isMDXComponent=!0}}]);