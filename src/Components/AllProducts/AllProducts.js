import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleProductDelete = _id => {
        console.log("delete: ", _id)
        const proceed = window.confirm("Are you sure?");
        if (proceed) {
            const url = `http://localhost:5000/products/${_id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log(data);
                        const remaining = products.filter(product => product._id !== _id);
                        setProducts(remaining);
                    }
                    // setProducts(data);
                });
        } else {

        }
    };


    return (
        <div>
            <h1>All Products Results: {products.length}</h1>
            <div >
                {
                    products.map(product => <div key={product._id}>
                        <h3>{product.productName}</h3>
                        <p>${product.productPrice}</p>
                        <Link to={`/updateproduct/${product._id}`}><button>Update</button></Link>
                        <button onClick={() => handleProductDelete(product._id)}>X</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllProducts;