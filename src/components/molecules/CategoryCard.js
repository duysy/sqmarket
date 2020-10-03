import React,{Component} from "react";
import "./styles.css"
export default class extends Component{
    render(){
        return(
           <div className="category-card">
               <img src="https://loremflickr.com/200/200" alt="" width="100%"/>
               <h4>accessories</h4>
           </div>
           
        );
    }
}