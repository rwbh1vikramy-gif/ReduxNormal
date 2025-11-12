

export async function fetchdata()
{
   try{
 dispatch({type:"FETCHLOADING"})
let data = await fetch("https://blog-25-ad626-default-rtdb.firebaseio.com/posts.json")

let res = await data.json();
console.log(Object.values(res))
dispatch({type:"FETCHSUCCESS", payload: Object.values(res)})
   }catch(e){
dispatch({type:"FETCHFAILED", payload:e.message})
   }


}
