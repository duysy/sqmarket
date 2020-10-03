import React, { Component } from "react";
import "./styles.css"
import {Link} from "react-router-dom"
export default class extends Component {
    render() {
        return (
            <div className="product-card">
                <img src={this.props.linkImage} alt="" width="100%" />
                <div className="product-info">
                    <div className="product-price">
                        <i class="fa fa-usd" aria-hidden="true">&nbsp;{this.props.price}</i>
                    </div>
                    <div className="product-rate">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="product-count-bought">
                        <i class="fa fa-credit-card" aria-hidden="true">&nbsp; {this.props.numberBought}</i>
                    </div>

                </div>
                <Link to="/">{this.props.title}</Link>
                <div className="product-function">
                    <i class="fa fa-cart-plus" aria-hidden="true">
                        <div className="detail">Add Cart</div>
                    </i>
                    <i class="fa fa-th-list" aria-hidden="true">
                        <div className="detail">Add Cart1</div>
                    </i>
                    <i class="fa fa-flag" aria-hidden="true">
                        <div className="detail">Add Cart2</div>
                    </i>
                </div>
            </div>

        );
    }
}