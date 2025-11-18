import { useContext, useState } from "react"
import { Themecontext } from "./Themecontext";
import { useNavigate } from "react-router-dom";

export function Login (){
    let navigate=useNavigate()
let [formdata, setformdata]=useState({email:"", password:""})
let {fetchdata}=useContext(Themecontext)
async function handlesubmit(e){
    e.preventDefault();
    console.log(formdata)
let obj= await fetchdata(formdata)
if(obj?.success){
navigate("/themechange")
}else{
    alert("user not found")
}
}


    return (
<>
<h1></h1>

<div className="form">
<form onSubmit={handlesubmit}>
<input type="email" name="email" id="email"  onChange={(e)=>setformdata({...formdata, email:e.target.value})} />
<input type="password" name="password" id="password" onChange={(e)=>setformdata({...formdata, password:e.target.value})}/>
<input type="submit" value="Submit" />
</form>

</div>



</>

    )
}