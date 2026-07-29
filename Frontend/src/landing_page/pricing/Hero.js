import React from "react";

function Hero() {
    const partner = [
        {
            Name: "Free equity delivery",
            URL: "/media/images/pricing0.svg",
            ref: "/charges/equity-delivery",
            description: ["All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.."],
        },
        {
            Name: "Intraday and F&O trades",
            URL: "/media/images/other-trades.svg",
            ref: "/charges/intraday",
            description: "Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.",
        },
        {
            Name: "Free direct MF",
            URL: "/media/images/pricing0.svg",
            ref: "/charges/other",
            description: "All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.",
        },
    ];

    return (
        <div className="container my-5">
            <div className="row text-center mb-5">
                <h1>Charges</h1>
                <p className="text-muted fs-5">List of all charges and taxes</p>
            </div>

            <div className="row g-4 justify-content-center">
                {partner.map((item) => (
                    <div className="col-12 col-md-4 text-center" key={item.Name}>
                        <a href={item.ref} className="charge-img-box d-block mx-auto mb-3">
                            <img src={item.URL} alt={item.Name} className="charge-img" style={{ width: "150px" }} />
                        </a>
                        <h5 className="mb-2">{item.Name}</h5>
                        <p className="charge-desc">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Hero;