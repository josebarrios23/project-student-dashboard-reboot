import React from "react";
import { Link } from "react-router-dom";

export default function Header() {

return (
   <Link to={`/`}>
     <header>
       <h1>Student Dashboard</h1>
     </header>
   </Link>
  )
}