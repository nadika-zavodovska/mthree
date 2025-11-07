import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { initialProducts } from './data/products';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';

function App() {
    // useState, pass via props. Store the initial list of products in state (only reading it, not changing it)
    const [products] = useState(initialProducts);

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/products" element={<Products products={products} />} />
                <Route path="/products/:id" element={<ProductDetail products={products} />} />
                <Route path="/dashboard/*" element={<Dashboard />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App
