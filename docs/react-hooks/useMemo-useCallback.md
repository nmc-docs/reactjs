---
sidebar_position: 6
---

# useMemo() / useCallback()

## React.memo()

❗️Giả sử ta có một component con được sử dụng ở trong một component cha khác, khi component cha được re-render thì component con cũng được re-render theo

🔑 Để khắc phục trình trạng này, ta sử dụng một HOC (High Order Component) của React là `memo`

- Cú pháp:

```tsx
React.memo(<Component />);
```

⚠ Lưu ý: nếu component con có `props` mà `props` đó bị thay đổi thì cũng sẽ bị re-render.

## useMemo(), useCallback()

- Như đã đề cập ở trên, nếu component con có `props` mà `props` đó bị thay đổi thì cũng sẽ bị re-render.
- Các kiểu dữ liệu cơ bản của JavaScript như `string`, `number`, `boolean` được truyền dưới dạng `props` sẽ hoạt động tốt với `React.memo()`
- Tuy nhiên, `Arrays`, `Objects`, `Functions` được truyền dưới dạng `props` sẽ không hoạt động khi sử dụng với `React.memo()`. Mặc dù ta truyền `props` với kiểu `arrays`, `objects`, `functions` và ta không thay đổi hay động chạm gì đến nó nhưng component vẫn bị re-render. Lý do là bởi sau mỗi lần re-render, tất cả các `arrays`, `objects` hay `functions` bên trong component sẽ được tạo mới lại, gây ra sự thay đổi đến tham chiếu và React sẽ ghi nhận có sự thay đổi nên sẽ re-render lại component.

:::tip

🔑 Do đó ta sử dụng 2 hook đó là `useMemo()` và `useCallback()`

:::

- Cú pháp:

```tsx
useCallback(fn, dependencies);
useMemo(calculateValue, dependencies);
```

:::info

Trong đó:

- `fn`, `calculateValue`: là function mà ta không muốn bị tạo mới tham chiếu.
- `dependencies`: là mảng phụ thuộc (hoạt động giống `dependencies` trong `useEffect()`

:::

- Sự giống nhau giữa `useMemo()` và `useCallback()`:

  - Nhận vào 2 tham số: 1 là `function`, 2 là `dependencies`.
  - Return memoized callback
  - Chỉ tạo ra function/value mới khi `dependencies` thay đổi.
  - Nếu dùng `empty dependencies` thì không bao giờ tạo ra function/ value mới.

- Vậy khi nào dùng `useMemo()`, khi nào dùng `useCallback()` ?
- `useCallback()` thường được áp dụng cho **Functions**
- `useMemo()` thường được áp dụng cho **Arrays** , **Objects** .
- Ví dụ:

```tsx
const getData = useCallback((type) => {
  return fetch(`https://reqres.in/api/${type}`);
}, []);
```

```tsx
const fruits = useMemo(() => ["Orange", "Apple", "Banana"], []);
```

:::tip

`React.memo()` và 2 hook `useCallback()` và `useMemo()` đều giúp component tránh bị re-render nhiều lần. Và lưu ý rằng nó chỉ cải thiện một phần nhỏ trong hiệu năng. Ta không nên quá lạm dụng việc sử dụng `React.memo()` và 2 hook `useCallback()` và `useMemo()`, nếu sử dụng nhiều sẽ gây quá tải bộ nhớ (vì phải ghi nhớ nhiều). Chỉ khi những function xử lý nặng, tốn nhiều thời gian hay các component nặng chứa các animations, chart,… thì ta mới nên sử dụng nó.

:::
