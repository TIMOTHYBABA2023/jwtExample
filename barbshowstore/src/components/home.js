import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/api/products/top-six')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the products!', error);
            });
    }, []);

    return (
        <div>
            <h1>Home Page</h1>
            <div className="product-list">
                {products.map(product => (
                    <div key={product.id} className="product-item">
                        <img src={product.imageUrl} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p>{product.category}</p>
                        <p>{product.color}</p>
                        <p>{product.size}</p>
                        <p>{product.quantity}</p>
                        <p>${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );

}
