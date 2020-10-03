import React, { Component } from "react";
import "./styles.css"
import { Button } from "../atoms";
export default class extends Component {
    render() {
        return (
            <div className="categories-item">
                <ul>
                    <li>
                        <img src="https://loremflickr.com/100/100" alt="" />
                        <a href="#">accessories</a></li>
                    <li>
                        <img src="https://loremflickr.com/100/100" alt="" />
                        <a href="#">camera</a></li>
                    <li>
                        <img src="https://loremflickr.com/100/100" alt="" />
                        <a href="#">componenta</a></li>
                    <li>
                        <img src="https://loremflickr.com/100/100" alt="" />
                        <a href="#">accessories</a></li>
                    <li>
                        <img src="https://loremflickr.com/100/100" alt="" />
                        <a href="#">componenta</a></li>
                    <li>
                        <img src="https://loremflickr.com/100/100" alt="" />
                        <a href="#">headphone</a></li>
                </ul>
            </div>
        );
    }
}