import React from "react";

function Awards() {
    return (
        <div className="container mt-5">

            <div className="row">
                <div className="col-6 p-5">
                    <img src="/media/images/largestBroker.svg" alt="" />
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1>Largest stock broker in India</h1>
                    <p className="mb-5">2+ million Zerodha clients contribute to over 15% of all retail order volumes in india daily by trading and investing in: </p>
                        <div className="row">
                            <div className="col-6">
                                <ul>
                                    <li>Future and Options</li>
                                    <li>Commodity derivatives</li>
                                    <li>Currency derivatives</li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul>
                                    <li>Stock & IPOs</li>
                                    <li>Driect mutual funds</li>
                                    <li>Bonds and Goverment Securities</li>
                                </ul>
                            </div>
                            <img src="/media/images/pressLogos.png" style={{width: "90%",}} alt="Press Logos" />
                        </div>
                </div>
            </div>

        </div>
    );
}

export default Awards;