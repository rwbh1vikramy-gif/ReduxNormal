import { useContext } from "react"
import { Themecontext } from "./Themecontext"

export function Chnagetheme(){

let {theme,chnagbackground}=useContext(Themecontext)

console.log("theme",theme)

    return (

        <>
        
        <div style={{height:"100vh", width:"100vw"}}>

<h1>This is theme change</h1>
<button onClick={()=>chnagbackground()}>onClick</button>

        </div>
        
        </>
    )
}