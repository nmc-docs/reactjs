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

## Cài đặt ESLint + Prettier + Lint staged

- Xem cách cài đặt: [tại đây](https://nmc-docs.github.io/eslint-prettier/setting/react-vite-setup)

## Cấu hình lại cho một số file

```json title="tsconfig.app.json"
{
  "compilerOptions": {
    "strict": true,
    "target": "ES2020",
    "module": "ESNext",
    "outDir": "dist",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "importHelpers": true,
    "skipLibCheck": true,
    "allowJs": true,
    "removeComments": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "noUncheckedIndexedAccess": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "forceConsistentCasingInFileNames": true,
    "lib": ["DOM", "DOM.Iterable", "ES2020"],
    "jsx": "react-jsx",
    "baseUrl": ".",
    "paths": {
      "src/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
```

```json title="package.json"
{
  "name": "react-vite",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint --fix .",
    "format": "prettier --write .",
    "preview": "vite preview"
  },
  "lint-staged": {
    "*.{ts,tsx,js,css,scss}": [
      "prettier --write .",
      "eslint --fix .",
      "git add ."
    ]
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@typescript-eslint/eslint-plugin": "^8.5.0",
    "@typescript-eslint/parser": "^8.5.0",
    "@vitejs/plugin-react-swc": "^3.5.0",
    "eslint": "^8.57.0",
    "eslint-config-prettier": "^9.1.0",
    "eslint-import-resolver-typescript": "^3.6.3",
    "eslint-plugin-import": "^2.30.0",
    "eslint-plugin-jsx-a11y": "^6.10.0",
    "eslint-plugin-prettier": "^5.2.1",
    "eslint-plugin-react": "^7.35.2",
    "eslint-plugin-react-hooks": "^4.6.2",
    "eslint-plugin-simple-import-sort": "^12.1.1",
    "lint-staged": "^15.2.10",
    "prettier": "^3.3.3",
    "typescript": "^5.5.3",
    "vite": "^5.4.1",
    "vite-plugin-checker": "^0.8.0",
    "vite-plugin-svgr": "^4.2.0",
    "vite-tsconfig-paths": "^5.0.1"
  }
}
```

```ts title="vite.config.ts"
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

- Sau đó, ta tạo file `svgr.d.ts`:

```ts title="src/types/svgr.d.ts"
declare module "*.svg?react" {
  import { FC, SVGProps } from "react";

  const content: FC<SVGProps<SVGElement>>;
  export default content;
}
```

- Bây giờ, ta có thể sử dụng SVG như một component, ví dụ:

```tsx title="App.tsx"
import { useState } from "react";

import { ReactIcon } from "src/assets";

function App() {
  return (
    <>
      <ReactIcon width={350} height={350} color="red" />
    </>
  );
}

export default App;
```

:::note

- Để có thể custom **width**, **height**, **color** của một SVG, ta phải xóa thuộc tính **width**, **height** trong file `.svg` và thuộc tính `fill`,... phải có giá trị là `"currentColor"`
  :::

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
