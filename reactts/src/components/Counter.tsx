import { useState } from "react";
export function Counter() {
  const [count, setcount] = useState<number>(0);
  return (
    <div>
      <p>Cups ordered: {count} </p>
      <button onClick={() => setcount((c) => c + 1)}>Order onemore</button>
    </div>
  );
}
