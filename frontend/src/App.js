import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);

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

    // Function to handle showing description for a product
    const handleDescription = (uniqid) => {
        setSelectedProduct(uniqid === selectedProduct ? null : uniqid);
    };

    // Function to handle clearing the search term
    const handleClearSearch = () => {
        setSearchTerm('');
    };

    // Filter products based on search term
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="App">
            <div className="navbar">
                <h1 className="company-title">Your Company Name</h1>
                <div className="search-container">
                    <input
                        className="search-bar"
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                    {searchTerm && (
                        <button className="clear-search" onClick={handleClearSearch}>
                            X
                        </button>
                    )}
                </div>
            </div>
            <header className="App-header">
                {error ? (
                    <div>Error: {error}</div>
                ) : (
                    <table className="product-table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredProducts.map(product => (
                                <React.Fragment key={product.uniqid}>
                                    <tr>
                                        <td>{product.title}</td>
                                        <td>${product.price}</td>
                                        <td>
                                            <button
                                                data-sellix-product={product.uniqid}
                                                className="purchase-button"
                                                type="button"
                                                onClick={() => window.Sellix.pay({
                                                    product_id: product.uniqid,
                                                    quantity: 1,
                                                    returnUrl: window.location.href
                                                })}
                                            >
                                                Purchase
                                            </button>
                                            <button
                                                className="description-button"
                                                onClick={() => handleDescription(product.uniqid)}
                                            >
                                                Description
                                            </button>
                                        </td>
                                    </tr>
                                    {selectedProduct === product.uniqid && (
                                        <tr>
                                            <td colSpan="3">{product.description}</td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                )}
            </header>
        </div>
    );
};

export default App;
