import Counter from "@/app/_components/Counter";

export interface UserInterface {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

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
