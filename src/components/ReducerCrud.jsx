import { useReducer, useState } from "react"

function reducer(state, action){
switch(action.type){
case "ADD" :
    return {todolist:[...state.todolist, {...action.tododata}]  }
case "DELETE":
    let updateddata= state.todolist.filter((s,i)=> i != action.id)
    return {todolist:[...updateddata]}
case "update":   
      return  
default:
    return state;
}
}
          
let initialstate={
todolist:[]
}

export function Reducercrud(){
let [data,setdata]=useState({name:"",description:""})
let [state,dispatch]=useReducer(reducer,initialstate)

function handlesubmit (e){
    e.preventDefault()
console.log(data)
dispatch({tododata:{...data}, type:"ADD"})
}

function deleteddata(id){

dispatch({type:"DELETE",id:id})

}

return (
<>
<h1>this is crud </h1>
<div>
<form onSubmit={handlesubmit} >
<input type="text" name="name" id="id"  onChange={(e)=>setdata({...data,name:e.target.value})}/>
<input type="text" name="description" id="description" onChange={(e)=>setdata({...data, description:e.target.value})} />
<input type="submit" value="submit" />
</form>


</div>

{state.todolist.map((v,i)=>
<div key={i}>
<h1>{v.name}</h1>
<p>{v.description}</p>
<button onClick={()=>deleteddata(i)}>delete</button>
</div>
)}


</>
)
}