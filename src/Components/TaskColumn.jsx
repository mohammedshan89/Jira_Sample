import React from "react";

const TaskColumn = ({status}) => {
  return (
    <div className="taskColumn">
      <div class="columnHeader">
        <h3>{status}</h3>
      </div>
    </div>
  );
};

export default TaskColumn;
