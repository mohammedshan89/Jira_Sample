import { createContext, useState } from "react";
import BoardWrapper from "./Components/BoardWrapper";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Header from "./Components/Header";
import { data } from "./Data/data";

import TaskColumn from "./Components/TaskColumn";

export const DataItemsContext = createContext();

function App() {
  const { categories, tasks } = data;
  const [state, setState] = useState(tasks);
  const values = { state, setState };

  return (
    <div className="App">
      <Header />
      <DataItemsContext.Provider value={values}>
        <Form />
        <BoardWrapper>
          {categories.map((item, index) => (
            <TaskColumn key={index} status={item} />
          ))}
        </BoardWrapper>
        <Footer />
      </DataItemsContext.Provider>
    </div>
  );
}

export default App;
