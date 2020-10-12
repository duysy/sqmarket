import React, { Component } from "react";
import "./styles.css"
import { Header, Navbar, ListCategory, Banner, Footer, CategoryCard, ProductCard } from "../molecules"
import { GoTopPage } from "../atoms";
const dataImages = [
    "https://loremflickr.com/1500/500",
    "https://loremflickr.com/1500/501",
    "https://loremflickr.com/1500/502",
    "https://loremflickr.com/1500/503"
]
const dataProduct = [
    {
        linkImage: "https://loremflickr.com/2300/200",
        price: "4078",
        numberBought: "5453",
        title: "Combo 3 Tinh",
        numberStar: "2"
    },
    {
        linkImage: "https://loremflickr.com/501/2001",
        price: "4",
        numberBought: "54",
        title: "Zebronics BT4440 RUCF 60 Watt Bluetooth t Bluetoot Bluetooth t Blt Bluetooth t Blt Bluetooth t Blt Bluetooth t Blt Bluetooth t Blth",
        numberStar: "2"
    },
    {
        linkImage: "https://loremflickr.com/2702/2302",
        price: "4",
        numberBought: "54",
        title: "Zebronics BT4440 RUCF 60 Watt Bluetooth",
        numberStar: "2"
    },
    {
        linkImage: "https://loremflickr.com/2203/1203",
        price: "4",
        numberBought: "54",
        title: "Zebronics BT4440 RUCF 60 Watt Bluetooth",
        numberStar: "0"
    },
    {
        linkImage: "https://loremflickr.com/2051/2301",
        price: "412",
        numberBought: "54",
        title: "Zebronics BT4440 RUCF 60 Watt Bluetooth",
        numberStar: "2"
    },
    {
        linkImage: "https://loremflickr.com/202/202",
        price: "4",
        numberBought: "54",
        title: "Zebronics BT4440 RUCF 60 Watt Bluetooth",
        numberStar: "2"
    },
    {
        linkImage: "https://loremflickr.com/203/203",
        price: "4",
        numberBought: "54",
        title: "Zebronics BT4440 RUCF 60 Watt Bluetooth",
        numberStar: "2"
    },
    {
        linkImage: "https://loremflickr.com/203/203",
        price: "4",
        numberBought: "54",
        title: "Zebronics BT4440 RUCF 60 Watt Bluetooth",
        numberStar: "2"
    },
    {
        linkImage: "https://loremflickr.com/204/204",
        price: "4",
        numberBought: "54",
        title: "Zebronics BT4440 RUCF 60 Watt Bluetooth",
        numberStar: "2"
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
                <GoTopPage />
                <div className="homepage-content">
                    <ListCategory></ListCategory>
                    <div className="banner">
                        <Banner dataImage={dataImages} timeChange="3000" className="banner"></Banner>
                        <div className="homepage-category-top">
                            <CategoryCard></CategoryCard>
                            <CategoryCard></CategoryCard>
                            <CategoryCard></CategoryCard>
                            <CategoryCard></CategoryCard>
                        </div>
                    </div>
                    <div className="quick-notification">
                        <CategoryCard></CategoryCard>
                        <CategoryCard></CategoryCard>
                    </div>
                </div>
                <div className="homepage-category-top">
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
                                key={index}
                                linkImage={item.linkImage}
                                price={item.price}
                                numberBought={item.numberBought}
                                numberStar={item.numberStar}
                                title={String(item.title).length < 30 ? String(item.title) : String(item.title).substring(0, 45) + "..."}
                            />
                        ))
                    }

                </div>

                <Footer></Footer>
            </div>
        );
    }
}