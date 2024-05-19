import React from 'react';
import ReactMarkdown from 'react-markdown';

const ProductPopup = ({ product, onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
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
