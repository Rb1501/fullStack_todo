import{useState} from 'react'

export function CreateTodo(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    async function addTodo(){
        
             const response = await fetch("http://localhost:3000/todo", {

                method: "POST",
                 headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title, description})
                

            })
             await response.json();
        
    }
    return(
        <div>
            <input style={{padding:10, margin:10}} type="text" placeholder="title"
                value={title}  onChange={function(e){setTitle(e.target.value)}}            ></input>  <br/>
            <input  value={description}  onChange={function(e){setDescription(e.target.value)}} 
            style={{padding:10, margin:10}} type="text" placeholder="description"></input>  <br/>

            <button onClick={addTodo}
            style={{padding:10, margin:10}}>add a todo</button>

        </div>
    )

}