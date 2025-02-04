import React from "react";

const Results = ({ barcode, product }) => {
    return (
        <div>
            <h2>Scanned Barcode: {barcode}</h2>
            {product ? (
                <div>
                    <h3>Product Details:</h3>
                    <pre>{JSON.stringify(product, null, 2)}</pre>
                </div>
            ) : (
                <p>No product found</p>
            )}
        </div>
    );
};

export default Results;
