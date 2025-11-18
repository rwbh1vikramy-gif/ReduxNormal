import { useContext } from "react";
import { Themecontext } from "./Themecontext";
import { Navigate } from 'react-router-dom';

export function Privateroute({children}){
let {user}=useContext(Themecontext)
console.log(user, "users in private routes")
return user ? children:<Navigate to="/"/>
}