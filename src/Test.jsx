import React, { useState, useEffect } from "react";

const Test = () => {
  const [text, setText] = useState({
    title: "",
    id: Date.now(),
    isCompleted: false,
  });

  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("item");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(items));
  }, [items]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([...items, text]);
    setText({ title: "", id: Date.now(), isCompleted: false });
  };

  return (
    <div className="py-[30px]">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text.title}
          className="border p-2"
          onChange={(e) =>
            setText((prevText) => ({
              ...prevText,
              title: e.target.value,
            }))
          }
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Test;
