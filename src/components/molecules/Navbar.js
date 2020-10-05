import React, { Component } from "react";
import "./styles.css"
import { Link } from "react-router-dom"
export default class extends Component {
    render() {
        return (
            <div className="nav-container">
                <div className="nav-category">
                    <nav>All Categories</nav>
                </div>
                <div className="nav-menu">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        <li><Link to="/cart">History</Link></li>
                        <li><Link to="/cart">Guild</Link></li>
                        <li><Link to="/cart">Other</Link></li>
                    </ul>
                </div>
                <div className="nav-other">
                    <nav>Try new platform</nav>
                </div>

            </div>
        );
    }
}