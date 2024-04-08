import { ReactNode, MouseEvent, useState, FormEvent } from "react";

interface Friend {
  id: number;
  name: string;
  image: string;
  balance: number;
}

const initialFriends: Friend[] = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

function Button({ children, onClick }: ButtonProps) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default function App() {
  const [friends, setFriends] = useState<Friend[]>(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleAddFriend(friend: Friend) {
    setFriends([...friends, friend]);
    setShowAddFriend(false);
  }

  function handleSelection(friend: Friend) {
    setSelectedFriend(friend);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends} onSelection={handleSelection} />

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
    </div>
  );
}

interface FriendListProps {
  friends: Friend[];
  onSelection: (friend: Friend) => void;
}

function FriendList({ friends, onSelection }: FriendListProps) {
  return (
    <>
      <ul>
        <h1>Split App</h1>
        {friends.map((friend) => (
          <Friend key={friend.id} friend={friend} onSelection={onSelection} />
        ))}
      </ul>
    </>
  );
}

interface FriendProps {
  friend: Friend;
  onSelection: (friend: Friend) => void;
}

function Friend({ friend, onSelection }: FriendProps) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">You owe X {Math.abs(friend.balance)}</p>
      )}
      {friend.balance > 0 && (
        <p className="green">X owe's you {Math.abs(friend.balance)}</p>
      )}
      {friend.balance === 0 && <p>You and X are even.</p>}
      <Button onClick={() => onSelection(friend)}>Select</Button>;
    </li>
  );
}

interface FormAddFriendProps {
  onAddFriend: (friend: Friend) => void;
}

function FormAddFriend({ onAddFriend }: FormAddFriendProps) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id: Number(id),
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>☕️ Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>😁 Image Url</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add </Button>
    </form>
  );
}

interface FormSplitBillProps {
  selectedFriend: Friend;
}

function FormSplitBill({ selectedFriend }: FormSplitBillProps) {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>😮‍💨 Bill Value</label>
      <input type="text" />

      <label>🥲 Your expense</label>
      <input type="text" />

      <label>🫵 {selectedFriend.name} expenses</label>
      <input type="text" disabled />

      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
