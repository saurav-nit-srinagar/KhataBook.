import "bootstrap/dist/css/bootstrap.min.css";
import Appname from "./component/Appname";
import Addtodo from "./component/addtodo";
// import Todo2 from "./component/todotask2";
import TodoContainer from "./component/todoitem";

import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./component/welcome";

function App() {
  const intialtodoItems = [
    {
      Name: "Milk",
      date: "12/12/23",
    },
    {
      Name: "sugar",
      date: "10/12/23",
    },
    {
      Name: "tea",
      date: "10/12/23",
    },
  ];
  const [todoItems, settodoitems] = useState(intialtodoItems);

  const handleNewitem = (itemName, itemdate) => {
    console.log(`New item added itemName:${itemName} and itemdate:${itemdate}`);
    const newTodoItems = [
      ...todoItems,
      {
        Name: itemName,
        date: itemdate,
      },
    ];
    settodoitems(newTodoItems);
  };
  
  const handleDeletitem = (deleteName) => {
    const newTodoItem = todoItems.filter(item => item.Name !== deleteName)
    settodoitems(newTodoItem)
    
  }

  return (
    <center>
      <Appname />
      <Addtodo onNewitem={handleNewitem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoContainer itemlist={todoItems} onDeleteKey={handleDeletitem} />
    </center>
  );
}

export default App;
