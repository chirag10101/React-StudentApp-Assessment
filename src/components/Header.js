import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from 'react-router-dom';


export default function Header() {
    const navigate = useNavigate();
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="navbar-brand ms-3  bg-transparent" >Students App</div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <button className="nav-item nav-link   "  onClick={()=>{navigate("/showstudents");}} >Show Students </button>
      <button className="nav-item nav-link  " onClick={()=>{navigate("/addstudent");}}>Add Students</button>
    </div>
  </div>
</nav>
    </div>
  )
}
