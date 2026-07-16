---
sidebar_position: 4
---

# `useLayoutEffect()`

## `useLayoutEffect` là gì?

:::info

- `useLayoutEffect` là một Hook trong React dùng để xử lý các side effects có liên quan đến DOM. Điểm đặc biệt của nó là: **nó chạy đồng bộ (synchronously) ngay sau khi DOM được cập nhật, nhưng TRƯỚC KHI trình duyệt kịp vẽ (paint) lại màn hình.**
- Nói cách khác, `useLayoutEffect` chặn quá trình vẽ của trình duyệt cho đến khi code bên trong nó hoàn tất.

:::

## So sánh chi tiết `useEffect` vs `useLayoutEffect`

| Tiêu chí                        | `useEffect`                                                                                                 | `useLayoutEffect`                                                                                                                                                   |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Thời điểm chạy**              | Chạy **bất đồng bộ (async)** sau khi trình duyệt đã vẽ (paint) xong giao diện.                              | Chạy**đồng bộ (sync)** sau khi DOM cập nhật nhưng **trước khi** trình duyệt vẽ (paint).                                                                             |
| **Chặn vẽ màn hình**            | Không chặn. Người dùng nhìn thấy giao diện ngay lập tức.                                                    | **Có chặn** . Trình duyệt sẽ đợi nó chạy xong mới hiển thị ra ngoài.                                                                                                |
| **Hiệu năng (Performance)**     | Tối ưu hơn, không làm giật lag giao diện.                                                                   | Nặng hơn, nếu xử lý quá lâu sẽ làm màn hình bị đơ (giật) khi tải.                                                                                                   |
| **Tác động thị giác**           | Có thể gây ra hiện tượng**nhấp nháy (flicker)** vì người dùng thấy trạng thái cũ trước khi chuyển sang mới. | **Không gây nhấp nháy** vì mọi thay đổi đều hoàn tất trước khi người dùng nhìn thấy.                                                                                |
| **Server Side Rendering (SSR)** | An toàn (không chạy trên server).                                                                           | **Cảnh báo (Warning)** nếu chạy trên server vì nó cần DOM. Phải khắc phục bằng `useEffect` hoặc kiểm tra `window`.                                                  |
| **Trường hợp sử dụng**          | Gọi API, lắng nghe sự kiện global, setInterval, log, cập nhật state không liên quan đến bố cục DOM.         | Đo kích thước (width, height, offset), vị trí của DOM, hoặc thay đổi DOM để đồng bộ với state ngay trước khi người dùng thấy (tooltip, modal căn chỉnh, chặn cuộn). |

## Ví dụ cụ thể (Phân biệt bằng Flicker)

Giả sử ta có một thẻ div có chiều cao ngẫu nhiên khi render, và ta muốn lấy chiều cao đó set vào `state` để dùng cho phần khác.

### ❌ Dùng `useEffect` (Bị nhấp nháy):

```TSX
import React, { useState, useRef, useEffect } from 'react';

function RandomHeightBox() {
  const [height, setHeight] = useState(0);
  const divRef = useRef(null);

  useEffect(() => {
    // Chạy SAU KHI paint
    if (divRef.current) {
      const newHeight = divRef.current.getBoundingClientRect().height;
      setHeight(newHeight); // Cập nhật state -> gây re-render
    }
  }, []);

  return (
    <div>
      {/* Lúc đầu height = 0, sau paint nó mới nhảy lên 150px => bị giật nháy */}
      <div style={{ height: `${height}px`, background: 'blue', width: '100px' }} ref={divRef}>
        {height > 0 ? `${height}px` : 'Loading...'}
      </div>
    </div>
  );
}
```

**Kết quả:** User thấy chữ "Loading..." trong 1 frame, sau đó vụt nhảy thành "150px" (hiện tượng flicker).

### ✅ Dùng `useLayoutEffect` (Không bị nhấp nháy)

```TSX
import React, { useState, useRef, useLayoutEffect } from 'react';

function RandomHeightBox() {
  const [height, setHeight] = useState(0);
  const divRef = useRef(null);

  useLayoutEffect(() => {
    // Chạy TRƯỚC KHI paint, chặn trình duyệt vẽ
    if (divRef.current) {
      const newHeight = divRef.current.getBoundingClientRect().height;
      setHeight(newHeight); // Cập nhật state ngay trước khi vẽ
    }
  }, []);

  return (
    <div>
      {/* Khi trình duyệt vẽ lần đầu tiên, height đã là 150px rồi */}
      <div style={{ height: `${height}px`, background: 'blue', width: '100px' }} ref={divRef}>
        {height}px
      </div>
    </div>
  );
}
```

**Kết quả:** User thấy ngay lập tức box cao 150px, hoàn toàn mượt mà, không có cảm giác bị nhảy size.

## Ví dụ thực tế khác: Tooltip

- Khi bạn cần hiển thị một cái tooltip ngay bên cạnh một nút bấm. Bạn phải đo vị trí (`getBoundingClientRect`) của nút đó. Nếu dùng `useEffect`, tooltip có thể xuất hiện ở vị trí (0,0) trong tích tắc rồi mới nhảy về đúng vị trí cạnh nút => rất tệ. **Dùng `useLayoutEffect`** để tính toán vị trí trước, đảm bảo tooltip được vẽ đúng vị trí ngay từ đầu.

## Quy tắc vàng (Best Practice)

> **💡 Hãy luôn ưu tiên dùng `useEffect` làm mặc định.** Chỉ chuyển sang `useLayoutEffect` khi bạn gặp vấn đề về nhấp nháy (flicker) khi thao tác với DOM.

> ⚠️ Nếu bạn không chắc chắn, hãy dùng `useEffect`. Việc lạm dụng `useLayoutEffect` sẽ khiến ứng dụng của bạn bị chậm và giật vì nó chặn toàn bộ quá trình vẽ của trình duyệt.
