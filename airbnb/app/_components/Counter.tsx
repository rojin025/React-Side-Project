"use client";

import { useState } from "react";

import { UserInterface } from "../cabins/page";

/**
fun var name : Is destructured prop from Parent component
{ users }: { users: UserInterface[] }
 */
export default function Counter({ users }: { users: UserInterface[] }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>;
      <p> Total User : {users.length}</p>
    </div>
  );
}
