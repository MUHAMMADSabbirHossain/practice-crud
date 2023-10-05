import React from 'react';

const AddProduct = () => {


    const handleAddProduct = event => {
        event.preventDefault();
        const productName = event.target.productName.value;
        const productPrice = event.target.productPrice.value;

        const product = { productName, productPrice };
        // console.log(product);

        // post product
        fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert("Product successfully added");
            });
    };


    return (
        <div>
            <h2>Add Product</h2>

            <form onSubmit={handleAddProduct} action="">
                <input type="text" name="productName" id="" placeholder='Product name' />
                <input type="number" name="productPrice" id="" placeholder='Product price' />
                <input type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;