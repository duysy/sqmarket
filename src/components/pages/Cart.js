import React, { Component } from "react";
import "./styles.css"
import { Header, Navbar, ItemCategory, Banner, Footer, CategoryCard, ProductCard } from "../molecules"
const dataImages = [
    "https://loremflickr.com/1500/500",
    "https://loremflickr.com/1500/501"
]
export default class extends Component {
    render() {
        return (
            <div className="homepage-container">
                <Header></Header>
                <Navbar></Navbar>
                <div className="homepage-content">
                    <ItemCategory></ItemCategory>
                    <div className="product-view">
                        <div className="product-view-image">
                            <div className="main-image">
                                <img src="https://loremflickr.com/500/500" alt="" width="100%" />
                            </div>
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
                                <div className="product-option">
                                    <div className="product-option-item">option</div>
                                    <div className="product-option-item">option</div>
                                    <div className="product-option-item">Product 16</div>
                                    <div className="product-option-item">option</div>
                                    <div className="product-option-item">Xl</div>
                                    <div className="product-option-item">option</div>
                                    <div className="product-option-item">Product 16</div>
                                    <div className="product-option-item">option</div>
                                    <div className="product-option-item">Xl</div>
                                    <div className="product-option-item">Ah</div>
                                    <div className="product-option-item">option</div>
                                </div>
                                <div className="product-action">
                                    <input type="button" value="Add To Cart" />
                                    <input type="button" value="Watch list" />
                                    <input type="button" value="Report" />
                                </div>
                                <div className="product-info-report">
                                    <div className="product-rate">
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                    <div className="product-count-bought">
                                        <i class="fa fa-credit-card" aria-hidden="true">&nbsp; 30 Bought</i>
                                    </div>
                                    <h5> Write A Review</h5>
                                </div>
                                <div className="product-share">
                                    <i class="fa fa-facebook" aria-hidden="true"></i>
                                    <i class="fa fa-telegram" aria-hidden="true"></i>
                                    <i class="fa fa-github" aria-hidden="true"></i>
                                    <i class="fa fa-twitter" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}