import React from "react";

function Universe() {
    const groups = [
        {
            id: "group1",
            items: [
                {
                    name: "smallcaseLogo",
                    logo: "/media/images/smallcaseLogo.png",
                    link: "/smallcase",
                    description: "Invest in baskets of stocks based on themes and strategies.",
                },
                {
                    name: "streakLogo",
                    logo: "/media/images/streakLogo.png",
                    link: "/streak",
                    description: "Create and backtest trading strategies without coding.",
                },
            ],
        },
        {
            id: "group2",
            items: [
                {
                    name: "sensibullLogo",
                    logo: "/media/images/sensibullLogo.svg",
                    link: "/sensibull",
                    description: "Options trading platform with strategy builder and analytics.",
                },
                {
                    name: "smallcaseLogo2",
                    logo: "/media/images/smallcaseLogo.png",
                    link: "/smallcase",
                    description: "Diversify your portfolio with curated smallcases.",
                },
            ],
        },
        {
            id: "group3",
            items: [
                {
                    name: "zerodhaFundhouse",
                    logo: "/media/images/zerodhaFundhouse.png",
                    link: "/fundhouse",
                    description: "Simple, direct mutual funds managed by Zerodha.",
                },
                {
                    name: "streakLogo2",
                    logo: "/media/images/streakLogo.png",
                    link: "/streak",
                    description: "Automate your strategies with algo-based execution.",
                },
            ],
        },
    ];

    return (
        <div className="container my-5">
            <div className="row text-center mb-5">
                <h1 style={{ fontSize: "24px" }}>The Zerodha Universe</h1>
                <p style={{ fontSize: "16px" }} className="text-muted">
                    Extend your trading and investment experience even further with our partner platforms
                </p>
            </div>

            <div className="row g-4 justify-content-center">
                {groups.map((group) => (
                    <div className="col-12 col-md-4" key={group.id}>
                        <div className="d-flex flex-column align-items-center gap-4">
                            {group.items.map((item) => (
                                <div className="text-center" key={item.name}>
                                    <a href={item.link} className="partner-logo-box d-block mx-auto mb-2">
                                        <img src={item.logo} alt={item.name} className="partner-logo" />
                                    </a>
                                    <p className="universe-desc">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Universe;