import React from "react";

function LeftSection(props) {
    let { imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore } = props;

    return (
        <div className="container my-5 py-4">
            <div className="row align-items-center gy-5">

                <div className="col-md-6 d-flex justify-content-center">
                    <div className="product-img-wrap">
                        <img src={imageURL} className="product-img" alt={productName} />
                    </div>
                </div>

                <div className="col-md-6">
                    <h1 className="product-title mb-3">{productName}</h1>
                    <p className="product-desc mb-4">{productDescription}</p>

                    <div className="mb-4">
                        {tryDemo && (
                            <a href={tryDemo} className="me-4 text-decoration-none">
                                Try Demo <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        )}

                        {learnMore && (
                            <a href={learnMore} className="text-decoration-none">
                                Learn More <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        )}

                    </div>

                    {googlePlay && appStore && (
                        <div className="d-flex gap-3">
                            <a href={googlePlay}>
                                <img src="/media/images/googlePlayBadge.svg" alt="Google Play" height="40" />
                            </a>
                            <a href={appStore}>
                                <img src="/media/images/appstoreBadge.svg" alt="App Store" height="40" />
                            </a>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}

export default LeftSection;