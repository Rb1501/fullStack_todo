export function Todos({todos, setTodos}){
    return(
        <div>
          {todos.map(function(todo){
            return(
                <div>
                    <h1 >{todo.title}</h1>
                    <h2 >{todo.description}</h2>
                    <button onClick={
                        async function(){
                        const response = await fetch("http://localhost:3000/completed",{
                                method: "PUT",
                                headers:{"Content-Type":"application/json"},
                                body: JSON.stringify({
                                    id: todo._id,
                                    completed: !todo.completed
                                })
                            })
                              await response.json()
                              if (response.ok) {
    setTodos(function (oldTodos) {
        return oldTodos.map(function (item) {
            if (item._id === todo._id) {
                return { ...item, completed:!item.completed};
            }
            return item;
        });
    });
}
                        }
                    } >{ todo.completed == true ? "completed" : "mark as completed"}</button>

                    
                </div>
            )
          })}
            
           
        </div>
    )

}
