---
sidebar_position: 7
---

# useContext()

## React Context là gì?

- React Context là một tính năng trong React.js cho phép bạn chia sẻ dữ liệu giữa các thành phần con mà không cần truyền dữ liệu qua các thành phần cha. Nó cung cấp một cách để truyền dữ liệu xuống cây thành phần mà không cần thông qua các thành phần trung gian.
- Với React Context, bạn có thể tạo ra một "context" (bối cảnh) và chia sẻ dữ liệu qua các thành phần con ở bất kỳ cấp độ nào trong cây thành phần. Context cung cấp một cách để truy cập dữ liệu chung mà không cần truyền qua nhiều cấp thành phần từ cha đến con.

## Ví dụ

- Tạo component `SocketProvider`

```tsx title="src/context/SocketProvider.tsx"
import {
  FC,
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import io, { Socket } from "socket.io-client";

const SocketContext = createContext<Socket | null>(null);

const SocketProvider: FC<PropsWithChildren> = ({ children }) => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socketConnection = io("http://localhost:8080");
    setSocket(socketConnection);
    return () => {
      socket?.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export { SocketContext };
export default SocketProvider;
```

- Bọc component `SocketProvider` lên trên cùng bao bọc các component con muốn sử dụng `value`:

```tsx title="src/App.tsx"
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import SocketProvider from "./contexts/SocketContext";

function App() {
  return (
    <BrowserRouter>
      <SocketProvider>
        <AppRoutes />
      </SocketProvider>
    </BrowserRouter>
  );
}

export default App;
```

- Tạo một hook tên `useSocket` để lấy ra giá trị từ context:

```ts title="src/hooks/useSocket.ts"
import { useContext } from "react";
import { SocketContext } from "src/contexts/SocketContext";

const useSocket = () => {
  const socket = useContext(SocketContext);

  return { socket };
};

export default useSocket;
```

- Và giờ ta có thể sử dụng `value` ở bất kỳ component con nào mà không phải truyền quá nhiều props thông qua các component:

```tsx title="src/pages/Control.tsx"
import { useEffect, useState } from "react";

import { useSocket } from "src/hooks";
import { IMetrics } from "src/types/common.types";

const Control = () => {
  const { socket } = useSocket();
  const [metricsDetail, setMetricsDetail] = useState<IMetrics>();
  const [fanStatus, setFanStatus] = useState<"ON" | "OFF">();

  useEffect(() => {
    socket?.on("esp32/metrics", (data) => {
      setMetricsDetail(data);
    });

    socket?.on("esp32/fan", (data) => {
      setFanStatus(data);
    });

    return () => {
      socket?.off("esp32/metrics");
      socket?.off("fan");
    };
  }, [socket]);

  return <></>;
};

export default Control;
```
