import React from 'react';
import ReactMarkdown from 'react-markdown';
import './ProductPopup.css'; // Import the CSS file for ProductPopup styling

const ProductPopup = ({ product, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="close-button-circle">
                    <button className="close-button" onClick={onClose}>
                        &times;
                    </button>
                </div>
                <h2 className="product-title">{product.title}</h2>
                <ReactMarkdown className="product-description" children={product.description} />
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
            </div>
        </div>
    );
};

export default ProductPopup;
