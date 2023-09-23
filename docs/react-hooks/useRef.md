---
sidebar_position: 5
---

# useRef()

## useRef() là gì?

- Trong React, `useRef()` được sử dụng để tạo tham chiếu đến một phần tử hoặc giá trị cụ thể. Nó có thể được sử dụng để truy cập các nút DOM hoặc để lưu trữ các giá trị có thể thay đổi mà không thuộc trạng thái của một component.

## Cú pháp

```tsx
import { useRef } from "react";

const myRef = useRef<T>(initialValue);
```

## Đặc điểm của useRef()

- `useRef()` cho phép ta duy trì giá trị của biến giữa các lần re-render (tương tự `useState()`)
- Khi thay đổi giá trị của biến `useRef()`, component sẽ **KHÔNG** bị re-render
- Để truy cập giá trị/đối tượng mà biến sử dụng `useRef()` đảm nhiệm: `myRef.current`

## Ví dụ

- Khi click vào button thì giá trị ô input sẽ là: “Hello World!”:

```tsx
import { Ref, useRef } from "react";

export default function App() {
  const inputRef: Ref<HTMLInputElement> = useRef(null);
  // const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current !== null) {
      inputRef.current.value = "Hello World!";
    }
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Change the input’s value</button>
    </>
  );
}
```

## Sử dụng useRef() tham chiếu đến một component

- Khi ta đặt một `ref` cho các thẻ có sẵn trong HTML, React sẽ đặt thuộc tính `ref.current` tham chiếu tương ứng với thẻ đó (ví dụ như thẻ `<input />`)
- Tuy nhiên, nếu bạn cố gắng đặt tham chiếu `ref` tới một component của riêng bạn, ví dụ như `<MyInput />` thì theo mặc định, bạn sẽ nhận được giá trị rỗng

🔑 Vì vậy để sử dụng `ref` đối với một component, ta sử dụng API `forwardRef`

- Ta sử dụng `forwardRef` như một cách để tương tác với component con từ component cha
- Cú pháp:

```tsx
import { forwardRef } from 'react';

const MyInput = forwardRef<RefType, PropsType>((props, ref)=>{
  return (
    /* Your UI code */
  );
})
```

- Ví dụ: chỉ đơn giản là focus vào thẻ input của component con từ component cha

```tsx
import { ElementRef, forwardRef, useRef } from "react";

interface IMyInputProps {}

const MyInput = forwardRef<HTMLInputElement, IMyInputProps>((props, ref) => {
  return <input ref={ref} />;
});

export default function App() {
  // use React utility ElementRef, TypeScript can infer exact ref type of your component
  const myInputRef = useRef<ElementRef<typeof MyInput>>(null);

  function handleClick() {
    myInputRef.current?.focus();
  }

  return (
    <>
      <MyInput ref={myInputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
```

## Mở rộng bài toán

- Giả sử từ component cha, ngoài việc focus vào input đó, ta muốn làm thêm một số action khác, ví dụ như đóng/mở một modal, hoặc cũng có thể làm thay đổi một số trạng thái trong component con. Với vấn đề này, ta sẽ sử dụng một hook mà thư viện React cung cấp đó là: `useImperativeHandle`
- Để hiểu rõ hơn, ta có ví dụ sau dưới đây sẽ mô tả xử lý việc ẩn/hiển thị của một ảnh trong component con từ component cha

```tsx title="MyImage.tsx"
import { forwardRef, useImperativeHandle, useState } from "react";

interface IMyImageProps {}
interface IMyImageRefHandle {
  showImage: () => void;
  hideImage: () => void;
}

const MyImage = forwardRef<IMyImageRefHandle, IMyImageProps>((props, ref) => {
  const [open, setOpen] = useState<boolean>(false);

  useImperativeHandle(ref, () => ({
    showImage: () => {
      setOpen(true);
    },
    hideImage: () => {
      setOpen(false);
    },
  }));

  return open ? (
    <img
      src="https://images.unsplash.com/photo-1668774833031-fa514917b190"
      height="100"
      width="100"
      alt=""
    />
  ) : null;
});

export default MyImage;
```

```tsx title="App.tsx"
import MyImage from "./MyImage";
import { useRef, ElementRef } from "react";

export default function App() {
  const imageRef = useRef<ElementRef<typeof MyImage>>(null);

  return (
    <>
      <button onClick={() => imageRef.current?.showImage()}>Show image</button>
      <button onClick={() => imageRef.current?.hideImage()}>Hide image</button>
      <MyImage ref={imageRef} />
    </>
  );
}
```
