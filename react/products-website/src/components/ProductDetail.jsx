import React from 'react';
import { useParams, Link } from 'react-router-dom';

// "products" as a prop 
function ProductDetail({ products }) {
    // Extract the "id" parameter from the URL
    const { id } = useParams();
    // Find the product that matches the "id" from the URL
    const product = products.find((p) => p.id === id);

    // If no product is found, display a "not found" message
    if (!product) {
        return (
            <>
                <h1>Product not found</h1>
                <Link to="/products">Back to Products</Link>
            </>
        );
    }
    // If the product exists, display its details
    return (
        <>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>
                {/* Product price formatted to two decimal places */}
                <strong>Price:</strong> ${product.price.toFixed(2)}
            </p>
            <Link to="/products">Back to Products</Link>
        </>
    );
}

export default ProductDetail;
