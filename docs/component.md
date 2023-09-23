---
sidebar_position: 2
---

# Component

## Component là gì?

- Trong ReactJS, một **component** là một phần tử độc lập, đóng gói các phần tử liên quan và chức năng tương tự như một phần tử HTML.
- Các **component** giúp tách biệt code ra thành các phần nhỏ và tái sử dụng lại được nhiều lần.

## Cách viết một component

- Component được thể hiện bằng function, và return về một JSX
- Ví dụ:

```tsx
const Home = () => {
  return (
    <>
      <h1>Started with ReactJs</h1>
      <p>You must learn JavaScript first</p>
    </>
  );
};
```

- Để gọi một **component** , ta viết nó giống viết tên thẻ trong **HTML** . Ví dụ với **component** trên:

```tsx
<Home></Home> // Cách 1
<Home/> // Cách 2, khi component không có children
```

- Ta cũng có thể lồng **component** vào một **component** khác:

```tsx
const Header = () => {
  return <h1>This is header</h1>;
};
const Homepage = () => {
  return (
    <>
      <Header />
      <h1>Started with ReactJs</h1>
      <p>You must learn JavaScript first</p>
    </>
  );
};
```

## Props trong component

- Trong React, `props` là một **object** chứa các thuộc tính được truyền vào component khi nó được khởi tạo. Thuộc tính này cho phép bạn truyền dữ liệu từ cha đến con trong cấu trúc cây component.
- Khi một component được khởi tạo, bạn có thể truyền vào các `props` như sau:

```tsx
<MyComponent name="John" age={25} />
```

:::note

Ở ví dụ trên, ta truyền vào `props` với hai thuộc tính: `name` và `age`. Trong component `MyComponent`, bạn có thể sử dụng các `props` này bằng cách truy cập đến các thuộc tính của đối tượng `props`.

:::

```tsx
function MyComponent(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}
```

Ở đây, component `MyComponent` nhận vào đối tượng `props` và sử dụng các giá trị của thuộc tính `name` và `age` để hiển thị trên giao diện.

## Thuộc tính "children" trong props

- Trong ReactJS, `props.children` là một thuộc tính đặc biệt của các components, cho phép ta truyền một hoặc nhiều components làm children của component đó. `props.children` có thể là một đối tượng React component, một chuỗi, hoặc một số phần tử DOM.
- Ví dụ, nếu ta có component sau:

```tsx
function Card(props) {
  return <div className="card">{props.children}</div>;
}
```

- Ta có thể sử dụng component `Card` như sau:

```tsx
<Card>
  <h2>Hello World</h2>
  <p>This is a card</p>
</Card>
```

:::note

Trong đó, `h2` và `p` được truyền vào làm children của component `Card`. Trong component `Card`, `props.children` sẽ chứa các elements này.

:::

## Event trong component

- Trong React, event là một đối tượng đại diện cho hành động người dùng, chẳng hạn như nhấp chuột, di chuyển chuột, phím bấm,...
- Trong các component của React, ta có thể sử dụng event để xử lý các hành động người dùng, bằng cách định nghĩa các hàm xử lý event và gán chúng cho các phần tử DOM trong component.
- Ví dụ, ta có thể định nghĩa một hàm xử lý sự kiện nhấp chuột trong một component và gán nó cho một phần tử button như sau:

```tsx
import React from "react";

function Button() {
  const handleClick = (event) => {
    console.log("Button clicked!");
  };

  return <button onClick={handleClick}>Click me!</button>;
}
```

Ở đây, ta định nghĩa hàm `handleClick` để xử lý sự kiện nhấp chuột, và gán nó cho attribute `onClick` của thẻ `button`
