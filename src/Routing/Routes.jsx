import React from "react";
import { Admin } from "./Admin";
import {Link,Route} from "react-router-dom";
import { Employees } from "./Employees";
const Routes = ()=>{
    return(
        <>
       <Link to="/">Employees</Link>
       <Link to="/admin">Admin</Link>
       <div>
           <Route exact path="/">
               <Employees/>
           </Route>
           <Route exact path="/admin">
               <Admin/>
           </Route>
       </div>
        </>
    )
}
export {Routes}