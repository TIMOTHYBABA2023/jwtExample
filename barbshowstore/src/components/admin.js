import React, { useState } from 'react';
import axios from 'axios';


export default function Admin() {
        const [product, setProduct] = useState({
            name: '',
            category: '',
            quantity: 0,
            size: '',
            color: '',
            imageUrl: '',
            price: 0
        });

        const handleChange = (e) => {
            const {name, value} = e.target;
            setProduct({...product, [name]: value});
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            axios.post('/api/products/add', product)
                .then(response => {
                    alert('Product added successfully!');
                })
                .catch(error => {
                    console.error('There was an error adding the product!', error);
                });
        };

        return (
            <div>
                <h1>Admin Page - Add Product</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Name" onChange={handleChange}/>
                    <input type="text" name="category" placeholder="Category" onChange={handleChange}/>
                    <input type="number" name="quantity" placeholder="Quantity" onChange={handleChange}/>
                    <input type="text" name="size" placeholder="Size" onChange={handleChange}/>
                    <input type="text" name="color" placeholder="Color" onChange={handleChange}/>
                    <input type="text" name="imageUrl" placeholder="Image URL" onChange={handleChange}/>
                    <input type="number" name="price" placeholder="Price" onChange={handleChange}/>
                    <button type="submit">Add Product</button>
                </form>
            </div>
        );

}


