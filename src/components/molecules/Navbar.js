import React,{Component} from "react";
import "./styles.css"
export default class extends Component{
    render(){
        return(
           <div className="nav-container">
               <div className="nav-categoties">
                    <h2>all Categories</h2>
               </div>
               <div className="nav-menu">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Cart</a></li>
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