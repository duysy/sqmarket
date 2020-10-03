import React,{ Component } from "react";
import "./styles.css"
export default class extends Component {
    render() {
        return (
           <input type="button" className="btn" value={this.props.children}/>
        );
    }
}