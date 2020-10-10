import React, { Component } from "react";
import { Link } from "react-router-dom";
import { StarRate } from "../atoms"
export default class extends Component {
    render() {
        return (
            <div className="card-comment">
                <div className="overview-comment">
                    <h4>0x54BD5967aB40D1f4F3719412DBFa2237E7Cb3C76</h4>
                    <nav>09 Jun, 2020</nav>
                    <StarRate numberStar="4" />
                    <a href="https://etherscan.io/address/0x54BD5967aB40D1f4F3719412DBFa2237E7Cb3C76">See on hash expoler</a>
                </div>
                <div className="commnet-content">
                    <p>Curabitur Vehicula, Magna Vel Blandit Lacinia, Ex Augue Sagittis Eros, At Vehicula Mauris Lectus Id Neque. Morbi Semper Dui Lacinia Convallis Ullamcorper</p>
                </div>
                <div className="commnet-image">
                    <div className="comment-list-image">
                        <img src="https://loremflickr.com/2023/203" alt="" height="100%"/>
                        <img src="https://loremflickr.com/203/203" alt="" height="100%" />
                        <img src="https://loremflickr.com/203/203" alt="" height="100%" />
                        <img src="https://loremflickr.com/203/203" alt="" height="100%" />
                        <img src="https://loremflickr.com/203/203" alt="" height="100%" />
                    </div>
                    <div className="comment-image-main display-block">
                        <img src="https://loremflickr.com/203/203" alt="" height="100%" />
                    </div>
                </div>
            </div>
        )
    }
}