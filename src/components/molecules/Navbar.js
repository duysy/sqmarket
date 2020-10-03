import React,{Component} from "react";
import "./styles.css"
import {Link} from "react-router-dom"
export default class extends Component{
    render(){
        return(
           <div className="nav-container">
               <div className="nav-category">
                    <h2>all Categories</h2>
               </div>
               <div className="nav-menu">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        <li><a href="#">History</a></li>
                        <li><a href="#">Guild</a></li>
                        <li><a href="#">Other</a></li>
                    </ul>
               </div>
               <nav>
                    SPECIAL OFFER
                </nav>
           </div>
        );
    }
}