import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    const handlePurchase = (productId) => {
        // Implement logic to handle purchase for the product with productId
        console.log(`Product ${productId} purchased`);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fuzzy-doodle-69rgpxxqg5j5c4qw9-5000.app.github.dev/api/Products');
                console.log('Response:', response.data);
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
                setError(error.message);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Products</h1>
                {error ? (
                    <div>Error: {error}</div>
                ) : (
                    <ul>
                        {products.map(product => (
                            <li key={product.uniqid}>
                                <h2>{product.title}</h2>
                                <p>{product.description}</p>
                                <button
                                    data-sellix-product={product.uniqid}
                                    type="submit"
                                    alt="Buy Now with sellix.io"
                                    onClick={() => handlePurchase(product.uniqid)}
                                >
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
