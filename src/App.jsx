// import { Counterreducer } from "./components/Reducercomponents"

import { Route, Routes } from "react-router-dom"
import { Advancedstatemanagement } from "./components/Advancedstatemanagement"
import { Chnagetheme } from "./components/Themechange"
import { Login } from "./components/login"
import { Privateroute } from "./components/privateroutes"
// import { Reducercrud } from "./components/ReducerCrud"

function App() {


  return (
    <>
      {/* <Counterreducer/> */}
      {/* <Reducercrud/> */}
      {/* <Advancedstatemanagement/> */}
      {/* <Chnagetheme/> */}
<Routes>

<Route  path="/"  element={<Login/>}/>
<Route  path="/themechange" element={<Privateroute> <Chnagetheme/>   </Privateroute>}/>
{/* <Route element={<Privateroute/>} >




</Route> */}
</Routes>

    </>
  )
}

export default App
