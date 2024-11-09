"use client";

import { useState } from "react";

import { UserInterface } from "../cabins/page";

export default function Counter({ users }: { users: UserInterface[] }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>;
      <p> Total User : {users.length}</p>
    </div>
  );
}
