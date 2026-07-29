import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import { Link } from "react-router-dom"

function ProductsPage() {
    return (
        <div className="container">
            <div className="row text-center mt-5 mb-5">
                <h1>Zerodha Products</h1>
                <h3 className="text-muted mt-3 fs-4"  >Sleek, modern, and intuitive trading platforms</h3>
                <p className="mt-3">Check out our <Link to="/" style={{ textDecoration: "None" }}>investment offerings <i class="fa-solid fa-arrow-right"></i></Link></p>
            </div>

            <div className="products-page">

                <LeftSection
                    productName="Kite"
                    productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                    imageURL="/media/images/kite.png"
                    tryDemo="/demo"
                    learnMore="/kite"
                    googlePlay="/googleplay"
                    appStore="/appstore"
                />

                <RightSection
                    productName="Console"
                    productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                    imageURL="/media/images/console.png"
                    learnMore="/console"
                />

                <LeftSection
                    productName="Coin"
                    productDescription={
                        <>
                            Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                            <div className="mt-4">
                                <a href="/coin" className="text-decoration-none " style={{ fontSize: "16px" }}>Coins <i className="fa-solid fa-arrow-right "></i></a>
                            </div>
                        </>
                    }
                    imageURL="/media/images/kite.png"
                    googlePlay="/googleplay"
                    appStore="/appstore"
                />

                <RightSection
                    productName="Kite Connect API"
                    productDescription={
                        <>
                            Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                            <div className="mt-4">
                                <a href="/Kite" className="text-decoration-none " style={{ fontSize: "16px" }}> Kite <i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </>
                    }
                    imageURL="/media/images/console.png"
                />

                <LeftSection
                    productName="Varsity mobile"
                    productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
                    imageURL="/media/images/varsity.png"
                    googlePlay="/googleplay"
                    appStore="/appstore"
                />

                <p className="text-center" style={{ fontSize: "1.25rem" }}>Want to know more about our technology stack? Check out the <a href="/blog" className="text-decoration-none" >Zerodha.tech</a> blog.</p>

                <Universe />
            </div>
        </div>
    );
}

export default ProductsPage;