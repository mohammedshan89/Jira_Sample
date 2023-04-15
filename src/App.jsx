
import { createContext } from "react"
import BoardWrapper from "./Components/BoardWrapper"
import Footer from "./Components/Footer"
import Form from "./Components/Form"
import Header from "./Components/Header"
import { data } from "./Data/data"
import TaskColumn from "./Components/TaskColumn"


const DataItemsContext = createContext()

function App() {
 
  const {categories} = data;
  return (
    <div className="App">
     <Header/>
     <DataItemsContext.Provider value={data}>
     <Form/>
     <BoardWrapper>
     {categories.map((item, index)=> <TaskColumn key={index} status={item}/>)}
     </BoardWrapper>
     <Footer/>
     </DataItemsContext.Provider>
    </div>
  )
}

export default App
