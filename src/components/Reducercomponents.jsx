import { useReducer } from "react"

function reducer(state, action){
switch(action.type){
case "INCREASE":
    return {count:state.count+1}
case "DECREASE":
    return {count:state.count-1}

case "RESET":
    return {count: 0}
default :
 return state;
}
}


export function Counterreducer(){
// let [count, setcount]=useState(0)
let [state, dispatch]=  useReducer(reducer,{count:0})
return (
<>
<h1>Count:{state.count}</h1>
<button onClick={()=>dispatch({type:"INCREASE"})}>increase</button>
<button onClick={()=>dispatch({type:"DECREASE"})}>decrease</button>
<button onClick={()=>dispatch({type:"RESET"})}>reset</button>
</>
)
}