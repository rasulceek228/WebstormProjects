import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              packed: !item.packed,
            }
          : item,
      ),
    );
  }

  function handleDeleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handleDeleteAll() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?",
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        onToggleItems={handleToggleItem}
        onDeleteItem={handleDeleteItem}
        onDeleteAll={handleDeleteAll}
        items={items}
      />
      <Stats items={items} />
    </div>
  );
}
