 import { createContext, useEffect, useState } from "react";

export let Themecontext= createContext();

export  function Themecontextprovider({children}){
    let [user, setuser]=useState()
let [theme, settheme]=useState("dark");

async function fetchdata(obj){
try{
let data= await fetch("https://project-1-728e4-default-rtdb.firebaseio.com/users.json")
let res = await data.json();
  let final =  Object.values(res)
//  setuser([...final])
console.log("themecontext", final)
console.log(obj)
let user1= final.find((v)=> v.password_hash==obj.password)
console.log("logged user",user1)
if(user1){
  setuser(user1)
  alert("login successfully")
  return {success:true,message:"login successfully"}
}else{
  return {success:false,message:"user not found"}
}
}catch(e){
console.log(e.message)
}
}

// useEffect( ()=>{
// fetchdata();
// },[])

function chnagbackground(){
    settheme((pre)=>pre=="dark"?"white":"dark")
}
return (
// if refrence of value will be change , then component will be render where  it call
<Themecontext.Provider  value={{theme,chnagbackground,user,fetchdata}}>

{children}

</Themecontext.Provider>

)
}