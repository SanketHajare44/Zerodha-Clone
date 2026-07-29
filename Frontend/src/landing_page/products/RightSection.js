import React from "react";

function RightSection(props) {
    let { imageURL, productName, productDescription, learnMore } = props;

    return (
        <div className="container my-5 py-4">
            <div className="row align-items-center gy-5">

                <div className="col-md-6">
                    <h1 className="product-title mb-3">{productName}</h1>
                    <p className="product-desc mb-4">{productDescription}</p>

                    {learnMore && (
                        <div className="mb-3">
                            <a href={learnMore} className="text-decoration-none ">
                                Learn More <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                    )}
                </div>

                <div className="col-md-6 d-flex justify-content-center">
                    <div className="product-img-wrap">
                        <img src={imageURL} className="product-img" alt={productName} />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default RightSection;