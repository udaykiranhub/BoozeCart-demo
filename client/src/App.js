import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Registration from './components/Registration';
import Login from './components/Login';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Checkout from './components/CheckOut';
import OrderConfirmation from './components/OrderConfirmation';
import Profile from './components/Profile';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Contact from './components/Contact';
import Buy from './components/Buy';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/buy" element={<Buy/>}/>
      </Routes>
    </Router>
  );
}

export default App;