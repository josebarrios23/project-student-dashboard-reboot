import React from "react";
import { Link } from "react-router-dom";

export default function Header() {

return (
   <Link className="home-link" to={`/`}>
     <header>
       <h1 className="home-link">Student Dashboard</h1>
     </header>
   </Link>
  )
}