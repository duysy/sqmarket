import React, { Component } from "react";
import "./styles.css"
import { Header, Navbar, CartCardItem, Footer } from "../molecules";
import { GoTopPage } from "../atoms";
export default class extends Component {
    render() {
        return (
            <div className="cart-container">
                <Header></Header>
                <Navbar></Navbar>
                <GoTopPage/>
                <div className="cart-content">
                    <div className="cart-products">
                        <CartCardItem
                            urlImage="https://loremflickr.com/240/240"
                            urlRedirect="/product_detail"
                            title="Máy Tính Bảng Samsung Galaxy Tab A8 8 T295 (2019) - Bạc - Hàng Chính Hãng"
                            price="$4000"
                            numberItem="2"
                        />
                    </div>
                    <div className="cart-to-pay">
                        <div className="cart-total-prices">
                            <div className="cart-code-discount">
                                <nav>code discount</nav>
                                <input type="text" placeholder="Please enter code" />
                            </div>
                            <div className="cart-total-price">
                                <ul>
                                    <li>
                                        <nav>BTC : 0.001 BTC</nav>
                                        <input type="button" value="Pay" />
                                    </li>
                                    <li>
                                        <nav>USD : 10 USD</nav>
                                        <input type="button" value="Pay" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}