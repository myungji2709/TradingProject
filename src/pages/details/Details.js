import { useContext, useState } from "react";
import { AppContext } from "../../AppConText";
import {
  AiOutlinePlusCircle,
  AiOutlineHeart,
  AiFillCaretDown,
  AiFillCaretUp,
} from "react-icons/ai";
import { IoMdExit } from "react-icons/io";
import hinh1 from "./hinh1.jpg";
import "./Details.css";
import Card from "../../component/card/Card";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import React from "react";

export default function Details() {
  const {
    data,
    details,
    name,
    addCart,
    buyNow,
    sweetalertLike,
    sweetalertAdd,
  } = useContext(AppContext);
  const [active, setActive] = useState("active");
  return (
    <div id="detail">
      <Header />
      <div className="detail_inside">
        <div className="top">
          <div className="topLeft">
            <p>Home/{name}</p>
          </div>
          <div className="topRight">
            <AiOutlinePlusCircle
              style={{
                fontSize: "25px",
                marginRight: "15px",
                marginTop: "2px",
              }}
              onClick={() => {
                addCart(details.id);
                sweetalertAdd();
              }}
            />
            <AiOutlineHeart
              onClick={() => sweetalertLike()}
              style={{
                fontSize: "25px",
                marginRight: "15px",
                marginTop: "2px",
              }}
            />
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <IoMdExit style={{ fontSize: "25px" }} />
            </Link>
          </div>
        </div>
        <div className="mid">
          <h4>{details.name}</h4>
          <div className="info_Detail">
            <div className="leftInfo">
              <img src={hinh1} alt="" />
            </div>
            <div className="rightInfo">
              <h4>Product Details</h4>
              <div className={`des ${active}`}>
                <h5>Product Description</h5>
                <p>
                  Nike and Jordan Brand are returning back to the Spider-Verse
                  for their second Spider-Man themed Air Jordan 1, with the
                  release of the Air Jordan 1 High OG Spider-Man Across the
                  Spider-Verse. Also known as the Next Chapter, the Jordan 1
                  High OG Spider-Man Across the Spider-Verse is the next
                  iteration of the original Air Jordan 1 Chicago colorway. The
                  limited edition sneakers are constructed using various
                  leathers, suedes, and other premium materials across the
                  uppers. The patterns used across the sneakers are designed to
                  mimic the Miles Morales/Spider-Man animation style. The Air
                  Jordan 1 High OG Spider-Man Across the Spider-Verse released
                  May 20, 2023, with a retail price of $200.
                </p>
              </div>
              <div className={`readmore ${active}`}>
                <p
                  onClick={() => {
                    active == "" ? setActive("active") : setActive("");
                  }}
                >
                  Read More{" "}
                  {active == "" ? <AiFillCaretUp /> : <AiFillCaretDown />}
                </p>
                <div className="des_Info">
                  <h5>Style</h5>
                  <p>DV1748-601</p>
                </div>
                <div className="des_Info">
                  <h5>Colorway</h5>
                  <p>UNIVERSITY RED/BLACK/WHITE</p>
                </div>
                <div className="des_Info">
                  <h5>Retail Price</h5>
                  <p>$200</p>
                </div>
                <div className="des_Info">
                  <h5>Release Date</h5>
                  <p>05/20/2023</p>
                </div>
                <div className="btn_Buy">
                  <Link to="/shoppingcart">
                    <button
                      onClick={() => {
                        buyNow(details.id);
                      }}
                    >
                      Buy Now For {details.price}$
                    </button>
                  </Link>
                </div>
                <div className="btn_See">
                  <Link to="/sneaker" style={{ textDecoration: "none" }}>
                    <button>See More Products In Store</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <h4>Recently Viewed</h4>
          <div className="product">
            <ul>
              {data &&
                data.map((item, index) => (
                  <li>
                    <Card item={item} key={index} />
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
