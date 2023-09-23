---
sidebar_position: 2
---

# useState()

## Định nghĩa

- `state` biểu diễn trạng thái của component, `state` là **private** chỉ có thể thay đổi bên trong bản thân của chính component đó.
- Mỗi khi giá trị của `state` được thay đổi thông qua `setState`, component sẽ tự động re-render
- Cú pháp:

```tsx
const [state, setState] = useState<T>(initialStateValue);
```

:::info

Trong đó

- `state`: định nghĩa một trạng thái cho component
- `setState`: là một function để update state. Trong function này có thể là một callback nhận parameter là `prevState` là giá trị của state trước đó. Khi thực hiện xong sẽ render lại component
- `initialStateValue`: là giá trị khởi tạo của state

:::

## Ví dụ:

```tsx
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClick}>Click me</button>
    </>
  );
}
```

## Lưu ý:

- Bất cứ khi nào component được re-render, tất cả các biến cục bộ (local) được khởi tạo lại từ đầu, và giá trị của `state` thì ngược lại. Nó luôn được duy trì giữa các lần render.
- Giá trị của `state` chỉ thay đổi khi đến lần render tiếp theo (tức là trong một lần render, giá trị của `state` luôn giữ cố định).
- Khi ta gọi đến `setState()`, React sẽ đưa các hoạt động cập nhật `state` này vào queue và thực hiện theo thứ tự lần lượt (gọi trước thực hiện trước).
- Nếu có nhiều `setState()` trong một lần render. React sẽ gom tất cả chúng lại và thực hiện cùng một lúc cho lần render kế tiếp, điều này giúp tránh tình trạng render nhiều lần. Và tất nhiên giữa các `setState()` này không có đoạn code bất đồng bộ. Nếu xuất hiện đoạn code bất đồng bộ ở giữa các `setSate()`, React sẽ thực hiện lần lượt: chờ đoạn code bất đồng bộ chạy xong mới thực hiện các `setState()` ở sau đoạn code bất đồng bộ đó
- Sự khác biệt giữa `setState(value)` và `setState(prevValue => …newValue)`:

| setState(value)                                              | setState(prevValue => newValue)                                                          |
| ------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| Ghi đè giá trị `state` hiện tại bằng `value`, đẩy vào queue. | Lấy giá trị trước đó và thực hiện, trả về giá trị mới dựa trên giá trị cũ, đẩy vào queue |
