import "bootstrap/dist/css/bootstrap.min.css";
import Appname from "./component/Appname";
import Addtodo from "./component/addtodo";
import Todo from "./component/todotask1";
import Todo2 from "./component/todotask2";
import "./App.css"

function App() {
  return (
    <center>
      <Appname/>
      <Addtodo />
      <Todo />
      <Todo2/>
    </center>
  );
}

export default App;
