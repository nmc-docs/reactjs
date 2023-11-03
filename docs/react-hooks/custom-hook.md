---
sidebar_position: 8
---

# Custom hook

- **Custom hook** là một khái niệm trong React cho phép bạn tái sử dụng **logic stateful** và **side effect** giữa các component.
- **Custom hook** là một function, bắt đầu bằng từ khóa `use`, mà sử dụng các hook đã có sẵn của React, hoặc những **custom hook** khác, để cung cấp một API mới giúp các component khác có thể sử dụng.
- Một **custom hook** giúp tăng khả năng tái sử dụng của code, giảm độ phức tạp của component, cũng như giúp dễ dàng kiểm thử và bảo trì.
- Ví dụ về một custom hook để gọi API:

```tsx
import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [url]);

  return { loading, data };
}
```

- Và từ một component khác, ta có thể sử dụng custom hook này. Việc sử dụng khiến code trở nên ngắn gọn, rõ ràng hơn:

```tsx
import React from "react";
import useFetch from "./useFetch";

function MyComponent() {
  const { loading, data } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default MyComponent;
```
