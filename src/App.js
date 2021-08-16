import React, { useState } from "react";
import ListItem from "./ListItem";
import "./styles.css";

function App() {
  const [items, setItems] = useState([]);
  const [newitem, setnewItem] = useState("");
  const addItem = () => {
    items.push(newitem);
    setItems([...items]);
    setnewItem("");
  };
  const newic = (evt) => {
    setnewItem(evt.target.value);
  };

  const onEdit = (editvalue, itemidx) => {
    items[itemidx] = editvalue;
    setItems([...items]);
  };

  const onDelete = (itemidx) => {
    items.splice(itemidx, 1);
    setItems([...items]);
  };

  return (
    <div id="main">
      <h1>TO DO LIST</h1>
      <div id="add-item">
        <textarea
          id="task"
          onChange={newic}
          placeholder="New Item"
          value={newitem}
        ></textarea>
        <button
          id="btn"
          onClick={addItem}
          disabled={newitem.trim().length === 0}
        >
          Add Item
        </button>
      </div>

      {items.map((item, idx) => (
        <ListItem
          item={item}
          key={`${item}_${idx}`}
          idx={idx}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default App;
