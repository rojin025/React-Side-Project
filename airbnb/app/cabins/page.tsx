import Counter from "@/app/_components/Counter";

import { UserInterface } from "./_types";

export const metadata = {
  title: "Cabins",
};

export default async function page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: UserInterface[] = await res.json();

  return (
    <div>
      <h1>Cabins</h1>
      <ul>
        {users.map((user: UserInterface) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <Counter users={users} />
    </div>
  );
}
