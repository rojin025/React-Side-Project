import { useState } from "react";
import { de, faker } from "@faker-js/faker";
import "./App.css";

const users = Array.from({ length: 20 }, () => {
  return {
    username: faker.internet.username(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate().toDateString()
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

function UserItem({ user, defaultVisibility }) {
  const [isVisible, setIsVisible] = useState(defaultVisibility);

  return (
    <li
      className="user"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <p className="user-name">{user.username}</p>
      {isVisible && (
        <p className="user-birthdate">
          <strong>DOB: </strong>
          {user.birthdate}
        </p>
      )}
    </li>
  );
}

// Render Pattern
function List({ title, items, render }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const displayItems = isCollapsed ? items.slice(0, 3) : items;

  function toggleOpen() {
    setIsOpen((isOpen) => !isOpen);
    setIsCollapsed(false);
  }

  return (
    <div className="list-container">
      <div className="heading">
        <h2>{title}</h2>
        <button onClick={toggleOpen}>
          {isOpen ? <span>&or;</span> : <span>&and;</span>}
        </button>
      </div>

      {isOpen && <ul className="list">{displayItems.map(render)}</ul>}

      <button onClick={() => setIsCollapsed(!isCollapsed)}>
        {isCollapsed ? `Show all ${items.length}` : "Show less"}
      </button>
    </div>
  );
}

function App() {
  return (
    <>
      <div>
        <h1>React Advance render pattern</h1>
        <div>
          <div className="col-2">
            <List
              title="Books"
              items={books}
              render={(book) => <BookItem key={book.title} book={book} />}
            />

            <List
              title="User"
              items={users}
              render={(user) => (
                <UserItem
                  key={user.username}
                  user={user}
                  defaultVisibility={false}
                />
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
