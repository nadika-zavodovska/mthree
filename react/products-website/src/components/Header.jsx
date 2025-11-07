import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav>
            <Link to="/" className="mr-3">
                Home
            </Link>
            <Link to="/products" className="mr-3">
                Products
            </Link>
            <Link to="/contact" className="mr-3">
                Contact
            </Link>
            <Link to="/dashboard" className="mr-3">
                Dashboard
            </Link>
        </nav>
    );
}

export default Header