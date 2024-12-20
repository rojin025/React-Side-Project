import { useState } from "react";
import { faker } from "@faker-js/faker";
import "./App.css";

import List from "./components/List";

const users = Array.from({ length: 20 }, () => {
  return {
    username: faker.internet.username(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate()
  };
});

// console.log("users: ", users);
const books = Array.from({ length: 10 }, () => {
  return {
    title: faker.book.title(),
    author: faker.book.author(),
    genre: faker.book.genre()
  };
});

function BookItem({ book }) {
  return (
    <li className="book">
      <p className="book-title">{book.title}</p>
      <p className="book-author">{book.author}</p>
      <p className="book-genre">{book.genre}</p>
    </li>
  );
}
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="list-container">
        <h1>React Advance render pattern</h1>
        <div className="col-2">
          <div>
            <h3>Books</h3>

            <p>
              {books.map((book) => (
                <BookItem key={book.title} book={book} />
              ))}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
