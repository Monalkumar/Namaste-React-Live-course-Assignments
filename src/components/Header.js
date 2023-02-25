import {React,useEffect,useState} from "react";
import { Link } from "react-router-dom";
const Title=()=>(
    
        
        <a href="/">
      <img className="logo" alt="logo" src="https://img.freepik.com/free-vector/hand-drawn-world-food-day_23-2148289851.jpg?w=2000"/>
      </a>
      
    )



const Header=()=>{
const [islogedIn, setIsLoggedIn]=useState(false);

useEffect(()=>{

    console.log("useEffect")
    
    },[])
    
    console.log("render")
    return(
        <div className="header">
       
        <Title/>
        <div className="nav-items">
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li>Cart</li>
        </ul>
        </div>

        {islogedIn ? <button onClick={()=>{setIsLoggedIn(false)}}>Logout</button>  :  <button onClick={()=>{setIsLoggedIn(true)}}>Login</button> }
      
        </div>
        )
    }
export default Header;