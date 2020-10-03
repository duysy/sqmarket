import React, { Component } from "react";
import "./styles.css"
import { Header, Navbar, ItemCategory, Banner, Footer, CategoryCard, ProductCard } from "../molecules"
const dataImages = [
    "https://loremflickr.com/1500/500",
    "https://loremflickr.com/1500/501"
]
const dataProduct = [
    {
        linkImage: "https://loremflickr.com/200/200",
        price: "4",
        numberBought: "54",
        title: "Zebronics BT4440 RUCF 60 Watt Bluetooth"
    },
    {
        linkImage: "https://loremflickr.com/201/201",
        price: "4",
        numberBought: "54",
        title: "Zebronics BT4440 RUCF 60 Watt Bluetooth"
    },
    {
        linkImage: "https://loremflickr.com/202/202",
        price: "4",
        numberBought: "54",
        title: "Zebronics BT4440 RUCF 60 Watt Bluetooth"
    },
    {
        linkImage: "https://loremflickr.com/203/203",
        price: "4",
        numberBought: "54",
        title: "Zebronics BT4440 RUCF 60 Watt Bluetooth"
    },
    {
        linkImage: "https://loremflickr.com/203/203",
        price: "4",
        numberBought: "54",
        title: "Zebronics BT4440 RUCF 60 Watt Bluetooth"
    },
    {
        linkImage: "https://loremflickr.com/204/204",
        price: "4",
        numberBought: "54",
        title: "Zebronics BT4440 RUCF 60 Watt Bluetooth"
    },
    {
        linkImage: "https://loremflickr.com/205/205",
        price: "4",
        numberBought: "54",
        title: "Zebronics BT4440 RUCF 60 Watt Bluetooth"
    }
]
export default class extends Component {
    render() {
        return (
            <div className="homepage-container">
                <Header></Header>
                <Navbar></Navbar>
                <div className="homepage-content">
                    <ItemCategory></ItemCategory>
                    <div className="banner">
                        <Banner dataImage={dataImages} timeChange="3000" className="banner"></Banner>
                    </div>
                </div>
                <div className="homepage-category">
                    <CategoryCard></CategoryCard>
                    <CategoryCard></CategoryCard>
                    <CategoryCard></CategoryCard>
                    <CategoryCard></CategoryCard>
                    <CategoryCard></CategoryCard>
                    <CategoryCard></CategoryCard>
                </div>
                <div className="homepage-product">
                    {
                        dataProduct.map((item, index) => (
                            <ProductCard
                                linkImage={item.linkImage}
                                price={item.price}
                                numberBought={item.numberBought}
                                title={item.title}
                            />
                        ))}
                </div>

                <Footer></Footer>
            </div>
        );
    }
}