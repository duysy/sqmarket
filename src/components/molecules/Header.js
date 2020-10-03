import React, { Component } from "react";
import "./styles.css"
import { Button } from "../atoms";
export default class extends Component {
    render() {
        return (
            <div className="header-container">
                <div className="header-logo">
                    <h1>SqMarket</h1>
                </div>
                <div className="header-search">
                    <input type="input" className="header-search_input" />
                    <select name="select category" id="#" className="header-search_category">
                        <option value="xxxx">category</option>
                    </select>
                    <Button>Search</Button>
                </div>
                <div className="header-contact">
                    <h4>duyduysysy@gmail.com</h4>
                </div>
                <div className="header-cart">
                    <i class="fa fa-shopping-cart" aria-hidden="true">&nbsp;My Cart(0)</i>
                </div>
            </div>
        );
    }
}