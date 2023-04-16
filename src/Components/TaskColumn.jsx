import React, { useContext } from "react";
import Card from "./Card";
import { DataItemsContext } from "../App";
import Card1 from "./Card1";

const TaskColumn = ({ status }) => {
  const {state,setState} = useContext(DataItemsContext);
  return (
    <div className="taskColumn">
      <div className="columnHeader">
        <h3>{status}</h3>
        {state.map((data) =>
          data.category === status ? <Card key={data.id} item={data} /> : null
        )}
      </div>
    </div>
  );
};

export default TaskColumn;
