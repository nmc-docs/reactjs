---
sidebar_position: 5
---

# Tạo dự án Reactjs với Vite

## Khởi tạo Vite

- Mở terminal trong thư mục dự án và gõ lệnh:

```bash
npm create vite@latest .
```

- Chọn yêu cầu theo dưới đây:

  - Select a framework: **React**
  - Select a variant: **TypeScript + SWC**

- Cài đặt các thư viện:

```bash
npm install
```

## Cài đặt thêm các thư viện cần thiết

```bash
npm install -D vite-tsconfig-paths vite-plugin-checker vite-plugin-svgr
```

:::info

- **vite-tsconfig-paths** : giúp ta chỉ cần cấu hình alias path trong file tsconfig.json, không cần phải cấu hình thêm trong file vite.config.ts
- **vite-plugin-checker** : kiểm tra và thông báo lỗi liên quan về TypeScript (cú pháp, type,...) và các lỗi liên quan đến ESLint trong project.
- **vite-plugin-svgr** : cho phép export default một file .svg và sử dụng như một component.

:::

## Cấu hình lại cho một số file

```json
{
  "compilerOptions": {
    "strict": true,
    "target": "ESNext",
    "module": "ESNext",
    "outDir": "dist",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "importHelpers": true,
    "skipLibCheck": true,
    "removeComments": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "noUncheckedIndexedAccess": true,
    "forceConsistentCasingInFileNames": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "jsx": "react-jsx",
    "baseUrl": ".",
    "paths": {
      "src/*": ["./src/*"]
    },
    "types": ["vite-plugin-svgr/client"]
  },
  "include": ["src"],
  "exclude": ["node_modules"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```

```json
{
  "name": "react-vite",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.39",
    "@types/react-dom": "^18.2.17",
    "@vitejs/plugin-react-swc": "^3.5.0",
    "typescript": "^5.3.2",
    "vite": "^5.0.2",
    "vite-plugin-checker": "^0.6.2",
    "vite-plugin-svgr": "^4.2.0",
    "vite-tsconfig-paths": "^4.2.1"
  }
}
```

## Cấu hình thêm cho Vite

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import checker from "vite-plugin-checker";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [svgr(), react(), checker({ typescript: true }), tsconfigPaths()],
  server: {
    port: 3000,
  },
});
```

## Sử dụng component svg trong Vite

- Để có thể sử dụng các file `.svg` như một component, sau đường dẫn import, ta thêm `?react`, ví dụ:

```ts
import ReactIcon from "./reactjs.svg?react";

export { ReactIcon };
```

## Sử dụng biến môi trường (environment variables) trong Vite

- Để sử dụng biến môi trường trong Vite, đầu tiên hãy tạo một file `env.development` và khai báo các biến môi trường tại file này, lưu ý, tên biến phải bắt đầu bởi tiền tố **VITE\_**, ví dụ:

```env
VITE_API_URL=localhost:8080
```

- Sau đó, để sử dụng biến môi trường này, ta sử dụng cú pháp:

```ts
import.meta.env.VITE_API_URL;
```

## Chạy, build dự án

:::info

- **npm run dev** : Chạy project ở môi trường phát triển (development)
- **npm run build** : Build project
- **npm run preview** : Chạy thử project sau khi được build

:::
