import Todo from "./todotask1";

function TodoContainer({itemlist , onDeleteKey})
{
    return (
        <div className="Todo-conatiner">
            {itemlist.map((item) =>
                <Todo ondeleteKey={onDeleteKey} itemName={item.Name} itemdate={item.date}></Todo>)}
            
        </div>
        
    )

}
export default TodoContainer;
