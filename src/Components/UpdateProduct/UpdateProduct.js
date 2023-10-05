import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);
    console.log(product);

    const handleUpdateProduct = event => {

        event.preventDefault();
        const productName = event.target.productName.value;
        const productPrice = event.target.productPrice.value;

        const product = { productName, productPrice };
        // console.log(product);

        // post product
        const url = `http://localhost:5000/products/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert("Product successfully updated.");
            });
    };

    return (
        <div>
            <h2>Updating product: {product.productName}</h2>

            <form onSubmit={handleUpdateProduct} action="">
                <input type="text" name="productName" id="" placeholder='Product name' />
                <input type="number" name="productPrice" id="" placeholder='Product price' />
                <input type="submit" value="Update Product" />
            </form>

        </div>
    );
};

export default UpdateProduct;