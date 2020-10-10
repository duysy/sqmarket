import React, { Component } from "react";
import "./styles.css"
import { Header, Navbar, ListCategory, Footer, CardComment } from "../molecules"
import { StarRate, GoTopPage, TabView } from "../atoms";
const dataImages = [
    "https://loremflickr.com/1500/500",
    "https://loremflickr.com/1500/501"
]
const dataTabView = [
    {
        title: "Description1",
        content: <div>
            <CardComment></CardComment>
            <CardComment></CardComment>
            <CardComment></CardComment>
            <CardComment></CardComment>
            <CardComment></CardComment>
            <CardComment></CardComment>
        </div>

    },
    {
        title: "Description",
        content: <Footer></Footer>

    }
]
export default class extends Component {
    render() {
        return (
            <div className="homepage-container">
                <Header></Header>
                <Navbar></Navbar>
                <GoTopPage />
                <div className="homepage-content">
                    <ListCategory></ListCategory>
                    <div className="product-view">
                        <div className="product-view-image">
                            <div className="main-image">
                                <img src="https://loremflickr.com/500/500" alt="" width="100%" />
                            </div>
                            <div className="scroll-bar-x">
                                <div className="product-list-image">
                                    <div className="product-item-image">
                                        <img src="https://loremflickr.com/500/500" alt="" width="100%" />
                                    </div>
                                    <div className="product-item-image">
                                        <img src="https://loremflickr.com/500/500" alt="" width="100%" />
                                    </div>
                                    <div className="product-item-image">
                                        <img src="https://loremflickr.com/500/500" alt="" width="100%" />
                                    </div>
                                    <div className="product-item-image">
                                        <img src="https://loremflickr.com/500/500" alt="" width="100%" />
                                    </div>
                                    <div className="product-item-image">
                                        <img src="https://loremflickr.com/500/500" alt="" width="100%" />
                                    </div>
                                    <div className="product-item-image">
                                        <img src="https://loremflickr.com/500/500" alt="" width="100%" />
                                    </div>
                                    <div className="product-item-image">
                                        <img src="https://loremflickr.com/500/500" alt="" width="100%" />
                                    </div>
                                    <div className="product-item-image">
                                        <img src="https://loremflickr.com/500/500" alt="" width="100%" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-view-bag">
                            <div className="product-view-title">
                                <h3>Zebronics BT4440 RUCF 60 Watt Bluetooth</h3>
                            </div>
                            <div className="product-view-parameter">
                                <ul>
                                    <li>
                                        <span>Brand:</span> Product 16
                                    </li>
                                    <li>
                                        <span>Product Code:</span> Product 16
                                    </li>
                                    <li>
                                        <span>Reward Points:</span> Product 16
                                    </li>
                                    <li>
                                        <span>Availability:</span> Product 16
                                    </li>
                                </ul>
                                <h4>$602.00</h4>
                                <input type="button" />
                                <div className="product-option">
                                    <input type="button" className="product-option-item" value="option" />
                                    <input type="button" className="product-option-item" value="option" />
                                    <input type="button" className="product-option-item" value="Product 16" />
                                    <input type="button" className="product-option-item" value="option" />
                                    <input type="button" className="product-option-item" value="Xl" />
                                    <input type="button" className="product-option-item" value="option" />
                                    <input type="button" className="product-option-item" value="Product 16" />
                                    <input type="button" className="product-option-item" value="option" />
                                    <input type="button" className="product-option-item" value="Xl" />
                                    <input type="button" className="product-option-item" value="Ah" />
                                    <input type="button" className="product-option-item" value="option" />
                                </div>
                                <div className="product-action">
                                    <input type="button" value="Add To Cart" />
                                    <input type="button" value="Watch list" />
                                    <input type="button" value="Report" />
                                </div>
                                <div className="product-info-report">
                                    <div className="product-rate">
                                        <StarRate numberStar="3" />
                                    </div>
                                    <div className="product-count-bought">
                                        <i className="fa fa-credit-card" aria-hidden="true">&nbsp; 30 Bought</i>
                                    </div>
                                    <h5> Write A Review</h5>
                                </div>
                                <div className="product-share">
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                    <i className="fa fa-telegram" aria-hidden="true"></i>
                                    <i className="fa fa-github" aria-hidden="true"></i>
                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-tab">
                    <TabView dataTabView={dataTabView}></TabView>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}