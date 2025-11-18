import { useContext } from "react"
import { Themecontext } from "./Themecontext"

export function Chnagetheme(){

let {theme,chnagbackground,users}=useContext(Themecontext)

console.log("theme",theme)
console.log("theme",users)

    return (

        <>
        
        <div style={{height:"100vh", width:"100vw", backgroundColor: theme=="dark"?"black" :"white"}}>

<h1  style={{color:theme=="dark"?"white" :"black"}}>This is theme change</h1>
<button onClick={()=>chnagbackground()}>onClick</button>

        </div>
        
        </>
    )
}