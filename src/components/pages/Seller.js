import React, { Component } from "react";
import "./seller_styles.css";
import { Link } from "react-router-dom";
export default class extends Component {
    render() {
        return (
            <div className="seller-menu">
                <div className="seller-menu-logo">
                    <h2>SqMarket for Seller</h2>
                </div>
                <ul>
                    <li>
                        <nav>Sản phẩm</nav>
                        <ul className="seller-chird-menu">
                            <li><Link>Quản lý sản phẩm</Link></li>
                            <li><Link>Thêm sản phẩm</Link></li>
                            <li><Link>Thư viện hình ảnh</Link></li>
                            <li><Link>Quản lý hình ảnh</Link></li>
                        </ul>
                    </li>
                    <li>
                        <nav>Đơn hàng & Đánh giá</nav>
                        <ul className="seller-chird-menu">
                            <li><Link>Quản lý đơn hàng</Link></li>
                            <li><Link>Đơn hàng đổi trả</Link></li>
                            <li><Link>QUản lý đánh giá</Link></li>
                        </ul>
                    </li>
                    <li><Link to="#">Khuyến mại</Link></li>
                    <li><Link to="#">Gian Hàng</Link></li>
                    <li><Link to="#">Hỗ trợ</Link></li>
                    <li><Link to="#">Tài khoản</Link></li>
                    <li><Link to="#">Phản hồi</Link></li>
                </ul>
            </div>
        )
    }
}