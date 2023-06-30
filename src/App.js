import { AppProvider } from "./AppConText";
import Product from "./component/product/Product";
import Header from "./pages/header/Header";
import Footer from "./pages/footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import Cart from "./pages/cart/Cart";
import Payment from "./pages/payment/Payment";
import News from "./pages/news/News";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import React from "react";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Routes>
          <Route path="/tradingproject" element={<Home />} />
          <Route path="/:type" element={<Product />} />
          <Route path="/detail" element={<Details />} />
          <Route path="/shoppingcart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/accounts" element={<Login />} />
        </Routes>
      </AppProvider>
    </div>
  );
}

export default App;
