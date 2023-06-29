import hinh from "./hinh1.jpg";
import { AiOutlineHeart } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import "./Card.css";
import { useContext } from "react";
import { AppContext } from "../../AppConText";
import { Link } from "react-router-dom";
import React from "react";

export default function Card(props) {
  const { addDetails, addName, addCart, sweetalertAdd, sweetalertLike } =
    useContext(AppContext);
  const { item } = props;
  return (
    <div className="card">
      <Link to="/detail" style={{ textDecoration: "none", color: "black" }}>
        <div className="thumb">
          <img
            src={hinh}
            alt=""
            onClick={() => {
              addDetails(item.id);
              addName(item.id);
            }}
          />
        </div>
        <p
          className="title"
          onClick={() => {
            addDetails(item.id);
            addName(item.id);
          }}
        >
          {item.name}
        </p>
      </Link>
      <div className="like">
        <AiOutlineHeart
          onClick={() => sweetalertLike()}
          style={{ fontSize: "20px", color: "black" }}
        />
      </div>
      <div className="buy">
        <h5 className="price" style={{ fontWeight: "bold" }}>
          {item.price} $
        </h5>
        <FaShoppingCart
          style={{ fontSize: "25px" }}
          onClick={() => {
            addCart(item.id);
            sweetalertAdd();
          }}
        />
      </div>
    </div>
  );
}
