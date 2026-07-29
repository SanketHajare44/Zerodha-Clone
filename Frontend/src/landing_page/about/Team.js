import React from "react";

function Team() {
    return (
        <div className="container py-5">
            <div className="row align-items-center">
                <div>
                    <h1 className="text-center display-6 fw-normal mb-5">People</h1>
                </div>

                <div className="col-md-6 text-center mb-5 mb-md-0">
                    <img src="/media/images/nithinKamath.jpg" alt="Nithin Kamath" className="img-fluid rounded-circle" style={{ width: "55%" }} />
                    <h4 className="mt-4 mb-1">Nithin Kamath</h4>
                    <p className="text-muted">Founder, CEO</p>
                </div>

                <div className="col-lg-6" style={{ lineHeight: "1.8" }}>
                    <article>
                        <p className="mb-4">
                            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he
                            faced during his decade-long stint as a trader. Today, Zerodha has changed
                            the landscape of the Indian broking industry.
                        </p>

                        <p className="mb-4">
                            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and
                            the Market Data Advisory Committee (MDAC).
                        </p>

                        <p className="mb-4">
                            Playing basketball is his zen.
                        </p>

                        <p>
                            <a href="/">Homepage</a> /{" "}
                            <a href="/">TradingQnA</a> /{" "}
                            <a href="/">Twitter</a>
                        </p>
                    </article>
                </div>

            </div>
        </div>
    );
}

export default Team;