import React, { useContext } from "react";
import { DataItemsContext } from "../App";

const Card = ({ item }) => {
  const { state, setState } = useContext(DataItemsContext);

  const handleUpdate = (status, id) => {
    status === "pending"
      ? setState((prev) =>
          prev.map((item) =>
            item.id === id ? { ...item, category: "ongoing" } : item
          )
        )
      : status === "ongoing"
      ? setState((prev) =>
          prev.map((item) =>
            item.id === id ? { ...item, category: "completed" } : item
          )
        )
      : status === "completed"
      ? setState((prev) => {
          return prev.filter((item) => item.id !== id);
        })
      : null;
  };

  return (
    <div className="taskItem">
      <p>{item.task}</p>
      <button
        onClick={() => handleUpdate(item.category, item.id)}
        className={
          item.category === "completed"
            ? "taskButton delete"
            : "taskButton move"
        }
      >
        {item.category === "completed" ? "Delete" : "Move"}
      </button>
    </div>
  );
};

export default Card;
