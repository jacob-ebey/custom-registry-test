import { h } from "preact";
import { useState } from "preact/hooks";

export function Counter() {
  const [count, setCount] = useState(0);
  return h("button", { onClick: () => setCount(count + 1) }, `Count: ${count}`)
}
