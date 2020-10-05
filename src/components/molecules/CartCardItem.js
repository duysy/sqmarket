import React, { Component } from "react";
import "./styles.css"
import { Link } from "react-router-dom"
export default class extends Component {
    constructor(props) {
        super(props);
        this.clickButtonReduce = this.clickButtonReduce.bind(this);
        this.clickButtonIncrease = this.clickButtonIncrease.bind(this);
        this.state = {
            numberItem: this.props.numberItem
        }
    }
    clickButtonReduce() {
        if (this.state.numberItem > 0) {
            this.setState({
                numberItem: parseInt(this.state.numberItem) - 1
            });
        }

    }
    clickButtonIncrease() {
        this.setState({
            numberItem: parseInt(this.state.numberItem) + 1
        });
    }
    render() {
        return (
            <div className="cart-item">
                <div className="cart-item-image">
                    <img src={this.props.urlImage} alt="" height="100%" />
                </div>
                <div className="cart-item-title">
                    <Link to={this.props.urlRedirect}>{this.props.title}</Link>
                    <nav>
                        <input type="button" value="Delete" />
                        <input type="button" value="Buy later" />
                    </nav>
                </div>
                <div className="cart-item-price">
                    <nav>{this.props.price}</nav>
                </div>
                <div className="cart-item-number">
                    <input type="button" className="cart-btn-reduce" value="-" onClick={this.clickButtonReduce} />
                    <input type="text" className="cart-btn-amount" value={this.state.numberItem} />
                    <input type="button" className="cart-btn-increase" value="+" onClick={this.clickButtonIncrease} />
                </div>
            </div>
        );
    }
}