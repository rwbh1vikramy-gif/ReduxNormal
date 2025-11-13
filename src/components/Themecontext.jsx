 import { createContext, useState } from "react";

export let Themecontext= createContext();


export  function Themecontextprovider({children}){
let [theme, settheme]=useState("dark");

function chnagbackground(){
    settheme((pre)=>pre=="dark"?"white":"dark")
}


return (

<Themecontext.Provider  value={{theme,chnagbackground}}>

{children}

</Themecontext.Provider>




)
}