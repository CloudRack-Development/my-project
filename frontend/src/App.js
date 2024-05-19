import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'; // Import BrowserRouter, Link, Route, Switch, and useHistory
import './App.css';
import ProductPopup from './components/ProductPopup.js';
import AboutUs from './components/AboutUs';

const App = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://119f8499-cddf-4dd6-afd6-c0339ccdd724-00-3bswnx6vny50p.spock.replit.dev:3000/api/Products');
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
        setSelectedProduct(uniqid);
    };

    // Function to handle clearing the selected product
    const handleCloseDescription = () => {
        setSelectedProduct(null);
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
        <Router forceRefresh={true}> {/* Pass forceRefresh prop with value true to enable automatic page refresh */}
            <div className="App">
                <nav className="navbar">
                    <h1 className="company-title">RayDaAsians's Store</h1>
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
                    <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
                    <a href="https://discord.com/invite/AdtreC4yk4" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>Discord</a>
                    <a href="https://raydaasian.mysellix.io/contact" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>Contact Me</a>
                    <Link to="/about">About Me</Link>
                </nav>
                <main>
                    <Switch>
                        <Route exact path="/">
                            <header className="App-header">
                                {error ? (
                                    <div>Error: {error}</div>
                                ) : (
                                    <table className="product-table">
                                        <thead>
                                            <tr>
                                                <th>Price</th>
                                                <th>Product Name</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredProducts.map(product => (
                                                <React.Fragment key={product.uniqid}>
                                                    <tr>
                                                        <td>${product.price}USD</td>
                                                        <td>{product.title}</td>
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
                                                </React.Fragment>
                                            ))}
                                        </tbody>
                                    </table>
                                )}
                                {selectedProduct && (
                                    <ProductPopup
                                        product={products.find(product => product.uniqid === selectedProduct)}
                                        onClose={handleCloseDescription}
                                    />
                                )}
                            </header>
                        </Route>
                        <Route path="/about">
                            <AboutUs />
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    );
};

export default App;
