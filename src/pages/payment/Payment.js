import "./Payment.css";
import React, { useState, useMemo, useContext, useRef } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Select from "react-select";
import countryList from "react-select-country-list";
import hinh1 from "./hinh1.png";
import hinh2 from "./hinh2.png";
import hinh3 from "./hinh3.jpg";
import { AppContext } from "../../AppConText";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function Payment() {
  //country
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const changeHandler = (value) => {
    setValue(value);
  };
  //data
  const { cart, tongbill, sweetalertPayment } = useContext(AppContext);
  //send email
  const form = useRef();

  const sendEmail = (e) => {

    emailjs
      .sendForm(
        "service_30fzlwq",
        "template_dmed6ff",
        form.current,
        "of0EeUCGyyfz-Qj3a"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="payment">
      <div className="payment_Info">
        <div className="payment_Left">
          <div className="custumer">
            <h4>Billing Address</h4>
            <Form ref={form}>
              <Row className="mb-2">
                <Form.Group as={Col} md="5">
                  <Form.Label>Billing Name</Form.Label>
                  <Form.Control required type="text" placeholder="Jonh Smith" />
                </Form.Group>
                <Form.Group as={Col} md="5">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="user_email"
                    placeholder="email@example.com"
                  />
                </Form.Group>
              </Row>
              <Row className="mb-2">
                <Form.Group as={Col} md="6">
                  <Form.Label>Address</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="123 Example St"
                      required
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="text" placeholder="(+84)" required />
                </Form.Group>
              </Row>
              <Row className="mb-2">
                <Form.Group as={Col} md="5">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" placeholder="Hanoi" required />
                </Form.Group>
                <Form.Group as={Col} md="5">
                  <Form.Label>Country</Form.Label>
                  <Select
                    options={options}
                    value={value}
                    onChange={changeHandler}
                    placeholder="Select a country"
                  />
                </Form.Group>
              </Row>
            </Form>
          </div>
          <div className="payment_card">
            <h4>Payment Info</h4>
            <Form>
              <Row className="mb-2">
                <Form.Group as={Col} md="7">
                  <Form.Control
                    required
                    type="text"
                    placeholder="CARD NUMBER"
                  />
                </Form.Group>
                <Form.Group as={Col} md="3">
                  <img src={hinh1} alt="" style={{ width: "100%" }} />
                </Form.Group>
              </Row>
              <Row className="mb-2">
                <Form.Group as={Col} md="7">
                  <Form.Control
                    required
                    type="text"
                    placeholder="CARDHOLDER NAME"
                  />
                </Form.Group>
              </Row>
              <Row className="mb-2">
                <Form.Group as={Col} md="2">
                  <Form.Control required type="text" placeholder="MM" />
                </Form.Group>
                <Form.Group as={Col} md="3">
                  <Form.Control required type="text" placeholder="YYYY" />
                </Form.Group>
                <Form.Group as={Col} md="2">
                  <Form.Control required type="text" placeholder="CVV" />
                </Form.Group>
                <Form.Group as={Col} md="1">
                  <img src={hinh2} alt="" />
                </Form.Group>
              </Row>
            </Form>
          </div>
        </div>
        <div className="payment_Right">
          <h4>Your Cart</h4>
          <Link to="/shoppingcart" style={{ textDecoration: "none" }}>
            <p>Return to Cart</p>
          </Link>
          <div className="bang">
            {cart &&
              cart.map((item, index) => (
                <div className="yourCart" key={index}>
                  <div className="left">
                    <img src={hinh3} alt="" style={{ width: "30%" }} />
                    <p style={{ fontWeight: "bold" }}>{item.name}</p>
                  </div>
                  <div className="right">
                    <p>x{item.qty}</p>
                    <p style={{ fontWeight: "bold" }}>
                      {item.qty * item.price}$
                    </p>
                  </div>
                </div>
              ))}
          </div>
          <div className="total">
            <h5 style={{ fontSize: "15px", marginTop: "20px" }}>CART TOTALS</h5>
            <h4 style={{ fontSize: "23px" }}>{tongbill}$</h4>
          </div>
        </div>
      </div>
      <div className="btn_pay">
        <Link to="/tradingproject">
          <button
            onClick={() => {
              sweetalertPayment();
              sendEmail();
            }}
          >
            Pay ${tongbill}
          </button>
        </Link>
      </div>
    </div>
  );
}
