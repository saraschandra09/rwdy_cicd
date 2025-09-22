// import { useState } from 'react'
import './App.css'
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutUs from './components/Aboutus';
import Formals from './components/Formals';
import Casuals from './components/Casuals';
import Streetwear from './components/Streetwear.jsx';
import Addons from './components/Addons';
import Home from './components/Home'
import ProductPage from './components/ProductPage'
import Cart from './components/Cart';
import Payment from './components/Payment';
import Orders from './components/Orders';



function App() {
  // const [count, setCount] = useState(0);
  
  return (
    <>
    <Router basename="/S109">
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<AboutUs />} />
          <Route path="home" element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="Formals" element={<Formals />} />
          <Route path="Casuals" element={<Casuals />} />
          <Route path="Streetwear" element={<Streetwear />} />
          <Route path="Addons" element={<Addons />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="productpage" element={<ProductPage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="payment" element={<Payment />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
