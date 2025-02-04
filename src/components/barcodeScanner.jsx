import React, { useState } from "react";
import Camera from "./Camera";
import Results from "../components/Results";


const BarcodeScanner = () => {
    const [barcode, setBarcode] = useState("");
    const [product, setProduct] = useState(null);

    const scanBarcode = async () => {
        const response = await fetch("http://localhost:5000/scan");
        const data = await response.json();
        setBarcode(data.barcode);

        const productResponse = await fetch(`http://localhost:5000/lookup?barcode=${data.barcode}`);
        const productData = await productResponse.json();
        setProduct(productData);
    };

    return (
        <div>
            <Camera />
            <button onClick={scanBarcode}>Scan Barcode</button>
            {barcode && <p>Scanned Barcode: {barcode}</p>}
            {product && <pre>{JSON.stringify(product, null, 2)}</pre>}
            <Results barcode = {barcode} product = {product} />
        </div>

       
    );
};

export default BarcodeScanner;
