import React from 'react';
import { Link } from 'react-router-dom';

function Products({ products }) {
    return (
        <>
            <h1>Products</h1>
            <ul>
                {/* Loop through each product in the "products" array */}
                {products.map((p) => (
                    // Each list item must have a unique "key" (React requirement for lists)
                    <li key={p.id}>
                        {/* Use a <Link> component instead of a normal <a> tag
                            so navigation happens without reloading the page.
                            The "to" prop defines the URL to navigate to, using the product's ID.*/}
                        <Link to={`/products/${p.id}`}>{p.name}</Link> — ${p.price.toFixed(2)}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Products
