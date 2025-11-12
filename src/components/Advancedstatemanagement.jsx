import { useEffect, useReducer } from "react"
import { reducer } from "./Reducerf";
import { useDispatch, useSelector } from "react-redux";
export let initialstate={
data:[],
loading:false,
error:""
}

export function Advancedstatemanagement(){
// let [state,dispatch]=useReducer(reducer, initialstate)
let dispatch=useDispatch();
let data1= useSelector((state)=>state.data)
console.log(data1)

async function fetchdata()
{
   try{
 dispatch({type:"FETCHLOADING"})

let data = await fetch("https://blog-25-ad626-default-rtdb.firebaseio.com/posts.json")

let res = await data.json();
// console.log(Object.values(res))
dispatch({type:"FETCHSUCCESS", payload: Object.values(res)})
   }catch(e){
dispatch({type:"FETCHFAILED", payload:e.message})
   }


}

useEffect(()=>{

if(data1.length==0){
   fetchdata();
}

},[])

// if(state.loading){
//     return <div style={{color:"red", fontSize:"30px"}}>DATA IS LOADING</div>
// }


return (
<>
{/* <h1>This is Advancedstatemanagement </h1>
{state.data.map((v,i)=>
<div key={i}>
<p>{v.body}</p>
</div>
)} */}




</>

)


}