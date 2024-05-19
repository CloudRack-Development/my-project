import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fuzzy-doodle-69rgpxxqg5j5c4qw9-5000.app.github.dev/api/products');
                console.log('Response:', response.data); // Log the response data
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
                setError(error.message); // Set error state
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Products</h1>
                {error ? (
                    <div>Error: {error}</div> // Display error message if there's an error
                ) : (
                    <ul>
                        {products.map(product => (
                            <li key={product.uniqid}>
                                <h2>{product.title}</h2>
                                <p>{product.description}</p>
                                <button data-sellix-product={product.uniqid} type="submit">
                                    Purchase
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </header>
        </div>
    );
};

export default App;
