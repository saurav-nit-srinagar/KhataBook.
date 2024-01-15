import "bootstrap/dist/css/bootstrap.min.css";
import Appname from "./component/Appname";
import Addtodo from "./component/addtodo";
// import Todo2 from "./component/todotask2";
import TodoContainer from "./component/todoitem";

import "./App.css";

function App() {
  const todoItems = [
    {
      Name: "Tea",
      date: "12/12/23",
    },
    {
      Name: "sugar",
      date: "10/12/23",
    },
    {
      Name: "Milk",
      date: "10/12/23",
    }
  ];
  return (
    <center>
      <Appname />
      <Addtodo />
      <TodoContainer itemlist={todoItems} />
    </center>
  );
}

export default App;
