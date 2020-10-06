import React, { Component } from "react";
import "./styles.css"
import { Link } from "react-router-dom";
import {StarRate} from "../atoms";
export default class extends Component {
    render() {
        return (
            <div className="product-card">
                <img src={this.props.linkImage} alt="" />
                <div className="product-info">
                    <div className="product-price">
                        <i className="fa fa-usd" aria-hidden="true">&nbsp;{this.props.price}</i>
                    </div>
                    <StarRate numberStar={this.props.numberStar}></StarRate>  
                    <div className="product-count-bought">
                        <i className="fa fa-credit-card" aria-hidden="true">&nbsp; {this.props.numberBought}</i>
                    </div>
                </div>
                <Link to="/product_detail">{this.props.title}</Link>
                <div className="product-function">
                    <i className="fa fa-cart-plus" aria-hidden="true">
                        <div className="detail">Add Cart</div>
                    </i>
                    <i className="fa fa-th-list" aria-hidden="true">
                        <div className="detail">Watch list</div>
                    </i>
                    <i className="fa fa-flag" aria-hidden="true">
                        <div className="detail">Report</div>
                    </i>
                </div>
            </div>

        );
    }
}