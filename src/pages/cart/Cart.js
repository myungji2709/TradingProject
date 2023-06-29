import { useContext, useState } from "react";
import { AppContext } from "../../AppConText";
import { Link } from "react-router-dom";
import hinh1 from "./hinh1.jpg";
import "./Cart.css";
import { FiDelete } from "react-icons/fi";
import { FcNext } from "react-icons/fc";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import React from "react";

function Cart() {
  const {
    cart,
    changeQty,
    xoa,
    checkCart,
    tongtien,
    ship,
    tax,
    tongbill,
    sweetalertError,
  } = useContext(AppContext);
  const newpay = cart.filter((item) => item.checked == true);
  console.log(cart);
  return (
    <div id="cart">
      <Header />
      <div className="cart_inside">
        <div className="top_shop">
          <h1>Your Bag</h1>
          <p>
            <Link to="/sneaker" style={{ color: "black" }}>
              Continue Shopping
            </Link>
          </p>
        </div>
        <div className="title_shop">
          <p style={{ fontSize: "15px" }}>Home/ShoppingCart</p>
          <p style={{ fontSize: "15px", textAlign: "right" }}>
            {cart.length} items in the bag
          </p>
        </div>
        <table className="table table-condensed">
          <thead>
            <tr>
              <th style={{ width: "5%" }}>#</th>
              <th style={{ width: "25%" }}>Product</th>
              <th style={{ width: "30%", textAlign: "left" }}>Product Name</th>
              <th style={{ width: "10%" }}>Price</th>
              <th style={{ width: "10%" }}>Quantity</th>
              <th style={{ width: "10%" }}>Total</th>
              <th style={{ width: "5%" }}>Remove</th>
              <th style={{ width: "5%" }}></th>
            </tr>
          </thead>
          <tbody>
            {cart &&
              cart.map((item, index) => (
                <tr key={index}>
                  <td data-th="#">
                    <h5>{index + 1}</h5>
                  </td>
                  <td data-th="Product">
                    <img src={hinh1} alt="" />
                  </td>
                  <td data-th="Product Name" style={{ textAlign: "left" }}>
                    <p>{item.name}</p>
                  </td>
                  <td data-th="Price">{item.price}$</td>
                  <td data-th="Quantity">
                    <AiFillMinusCircle
                      onClick={() => {
                        item.qty === 1 ? xoa(item.id) : changeQty(item.id, -1);
                      }}
                    />
                    <span style={{ padding: "0 10px" }}>{item.qty}</span>
                    <AiFillPlusCircle
                      onClick={() => {
                        changeQty(item.id, 1);
                      }}
                    />
                  </td>
                  <td
                    className="total_Product"
                    style={{ fontWeight: "bold", textAlign: "center" }}
                  >
                    <p>{item.price * item.qty}$</p>
                  </td>
                  <td className="xoaitem" style={{ textAlign: "center" }}>
                    <FiDelete
                      onClick={() => {
                        xoa(item.id);
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => checkCart(item.id)}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <table className="tableside table-condensed">
          <tbody>
            {cart &&
              cart.map((item, index) => (
                <tr key={index}>
                  <td style={{ width: "10%" }}>
                    <img src={hinh1} alt="" />
                  </td>
                  <td style={{ width: "60%" }}>
                    <p>{item.name}</p>
                    <AiFillMinusCircle
                      onClick={() => {
                        item.qty === 1 ? xoa(item.id) : changeQty(item.id, -1);
                      }}
                    />
                    <span style={{ padding: "0 10px" }}>{item.qty}</span>
                    <AiFillPlusCircle
                      onClick={() => {
                        changeQty(item.id, 1);
                      }}
                    />
                  </td>
                  <td style={{ fontWeight: "500", width: "5%" }}>
                    {item.price}$
                  </td>
                  <td
                    className="xoaitem"
                    style={{ width: "15%", textAlign: "center" }}
                  >
                    <FiDelete
                      onClick={() => {
                        xoa(item.id);
                      }}
                    />
                  </td>
                  <td style={{ width: "10%",textAlign:"center" }}>
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => checkCart(item.id)}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="total">
          <div className="total_Left">
            <p>Have A Promo Code?</p>
            <InputGroup className="mb-3">
              <Form.Control
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
              />
              <Button variant="outline-secondary" id="button-addon1">
                <FcNext />
              </Button>
            </InputGroup>
          </div>
          <div className="total_Right">
            <table>
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td>${tongtien}</td>
                </tr>
                <tr>
                  <td>Shipping</td>
                  <td>${ship}</td>
                </tr>
                <tr>
                  <td>Tax</td>
                  <td>${tax}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold" }}>Total</td>
                  <td style={{ fontWeight: "bold" }}>${tongbill}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="checkout">
          {newpay != "" ? (
            <Link to="/payment">
              <button>Check Out</button>
            </Link>
          ) : (
            <button onClick={() => sweetalertError()}>Check Out</button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Cart;
