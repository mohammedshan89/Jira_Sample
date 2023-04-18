import React, { useContext } from "react";
import { DataItemsContext } from "../App";

const Card1 = ({ item }) => {
  const { state, setState } = useContext(DataItemsContext);

  const handleUpdate = (status, id) => {
    status = "pending"
      ? setState((prev) =>
          prev.filter((item) =>
            item.id === id ? [...item, (category = "ongoing")] : item
          )
        )
      : "";
  };

  return (
    <div>
      <div className="taskItems">
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
      </div>
    </div>
  );
};

export default Card1;
