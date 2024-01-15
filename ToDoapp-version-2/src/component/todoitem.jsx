import Todo from "./todotask1";

function TodoContainer({itemlist})
{
    return (
        <div className="Todo-conatiner">
            {itemlist.map((item) =>
                <Todo itemName={item.Name} itemdate={item.date}></Todo>)}
            
        </div>
        
    )

}
export default TodoContainer;
