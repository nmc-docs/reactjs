---
sidebar_position: 4
---

# Higher-order component (HOC) trong React

## HOC là gì?

- Higher-order component (HOC) trong React là một mô hình thiết kế giúp tái sử dụng logic component và chia sẻ nó giữa các component khác nhau. HOC là một hàm nhận một component và trả về một component mới với một số tính năng hoặc thuộc tính mới được thêm vào.

## Ví dụ

```ts
import { ComponentType, Suspense } from "react";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";

interface ISuspenseAndError {
  suspenseFallback: JSX.Element;
  errorFallback?: JSX.Element;
}

const withSuspenseAndError = (
  Component: ComponentType<any>,
  boundary: ISuspenseAndError
) => {
  const TargetComponent = (props: any) => {
    return boundary.errorFallback ? (
      <QueryErrorResetBoundary>
        {() => (
          <ErrorBoundary fallback={boundary.errorFallback!}>
            <Suspense fallback={boundary.suspenseFallback}>
              <Component {...props} />
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    ) : (
      <Suspense fallback={boundary.suspenseFallback}>
        <Component {...props} />
      </Suspense>
    );
  };
  return TargetComponent;
};

export default withSuspenseAndError;
```

:::note

- Trong ví dụ trên, ta có hàm `withSuspenseAndError` nhận vào một component và trả về 1 component mới được bao bọc bởi một số component khác cần thiết

:::
