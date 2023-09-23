---
sidebar_position: 1
slug: /
---

# Tổng quan về ReactJS

## Reactjs là gì?

- **ReactJS** là một thư viện JavaScript phổ biến được sử dụng để xây dựng các ứng dụng web động, đặc biệt là các ứng dụng đơn trang (**Single Page Application** - **SPA** ).
- **ReactJS** được thiết kế để tạo ra các giao diện người dùng có thể đáp ứng được nhanh chóng, dễ dàng bảo trì và có khả năng tái sử dụng cao.
- **ReactJS** sử dụng một cơ chế gọi là **Virtual DOM** để cập nhật chỉ các thành phần có thay đổi, thay vì cập nhật toàn bộ giao diện người dùng. Điều này giúp giảm thời gian phản hồi của ứng dụng và cải thiện trải nghiệm người dùng.

## JSX/TSX là gì?

- **JSX/TSX** là một phần mở rộng cú pháp của JavaScript, được sử dụng để định nghĩa các phần tử giao diện người dùng trong React.
- **JSX/TSX** cho phép lồng các phần tử **HTML** vào trong mã JavaScript và cũng cho phép định nghĩa các thành phần React như các hàm và lớp JavaScript. Nó giúp cho việc tạo ra các thành phần UI trở nên dễ dàng hơn, bởi vì JSX cho phép định nghĩa UI dưới dạng các câu lệnh tương tự như **HTML** , giúp code dễ đọc và dễ hiểu hơn.
- Ví dụ về **JSX/TSX**:

```tsx
const myElement = <h1>Welcome to Reactjs</h1>;
```

- Để viết code logic trong **JSX** , ta viết code JavaScript trong dấu `{}`:

```tsx
const courses = ["JavaScript", "PHP", "Java", "Python"];
const myElement = (
  <ul>
    {courses.map((course) => (
      <li>{course}</li>
    ))}
  </ul>
);
```

- Phần tử **JSX** tuân theo **One Top Level Element** , tức là luôn chỉ có một thẻ duy nhất là thẻ cha bao bọc các thẻ con trong nó. Để viết nhiều thẻ, ta bọc lại bằng thẻ `<></>`. Ví dụ:

```tsx
const myElement = (
  <>
    <h1>ReactJs</h1>
    <h1>JavaScript</h1>
  </>
);
```

- Để sử dụng **attribute** `class` trong thẻ, ta sử dụng từ khóa `className` thay vì `class` như ở **HTML**
- Để sử dụng **attribute** `for` trong thẻ `<label>`…, ta sử dụng từ khóa `htmlFor` thay vì `for` như ở **HTML**

```tsx
const myElement = (
  <>
    <h1 className="text">ReactJs</h1>
    <label htmlFor="firstName">First Name</label>
  </>
);
```
