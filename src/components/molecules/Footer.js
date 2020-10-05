import React, { Component } from "react";
import "./styles.css";
export default class extends Component {
    render() {
        return (
            <div className="footer">
                <div className="hr"></div>
                <div className="footer-content">
                    <div className="footer-payment">
                        <h4>Payment</h4>
                        <div>
                            <i className="fa fa-btc" aria-hidden="true"></i>
                            <i className="fa fa-jpy" aria-hidden="true"></i>
                            <i className="fa fa-gbp" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="footer-app">
                        <h4>Apps</h4>
                        <div>
                            <i className="fa fa-android" aria-hidden="true"></i>
                            <i className="fa fa-apple" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="footer-social">
                        <h4>Social</h4>
                        <div>
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                            <i className="fa fa-telegram" aria-hidden="true"></i>
                            <i className="fa fa-github" aria-hidden="true"></i>
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="footer-feedback">
                        <h4>Feedback</h4>
                        <div>
                            <input type="text" placeholder="Your email address" />
                            <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
                <div className="hr"></div>
            </div>
        );
    }
}