import hinh from "./logo.png";
import hinh1 from "./hinh1.jpg";
import { AiOutlineSearch, AiFillCloseCircle } from "react-icons/ai";
import { MdMenu, MdNavigateNext, MdClose } from "react-icons/md";
import "./Header.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AppContext } from "../../AppConText";
import React from "react";

export default function Header() {
  const {
    data,
    setList,
    setType,
    filterBrand,
    setCheck,
    setBrand,
    setSizetype,
    setSize,
    setPrice,
    setRelease,
    setTitle,
    setCheckLogin,
    setCheckSignup,
    addDetails,
    addName,
    active2,
    setActive2,
  } = useContext(AppContext);
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const searchlist = data.filter((item) => item.name.match(input));
  const [active, setActive] = useState("");
  const [active1, setActive1] = useState("active");
  return (
    <div id="header">
      <div className={`menuside ${active}`}>
        <div className="borderSidetop">
          <div className="sidetop">
            <div className="btn_side">
              <MdClose
                style={{ fontSize: "30px" }}
                onClick={() => {
                  setActive("");
                }}
              />
            </div>
            <Link
              to="/tradingproject"
              onClick={() => {
                setCheck(false);
                setList(null);
                setBrand(null);
                setSizetype(null);
                setSize(null);
                setPrice(null);
                setRelease(null);
                setTitle("All");
              }}
              className="sidelogo"
            >
              <img src={hinh} alt="" className="logo" />
            </Link>
          </div>
        </div>
        <div className="navside">
          <p>Browser</p>
          <span style={{ fontSize: "15px" }}>
            <Link
              to="/sneakers"
              style={{ textDecoration: "none", color: "darkgreen" }}
            >
              Browser All
            </Link>
          </span>
        </div>
        <Link to="/sneakers" style={{ textDecoration: "none", color: "black" }}>
          <div className="itemside" onClick={() => setType("Sneaker")}>
            <p>Sneakers</p>
            <MdNavigateNext style={{ fontSize: "25px", marginRight: "10px" }} />
          </div>
        </Link>
        <Link to="/shoes" style={{ textDecoration: "none", color: "black" }}>
          <div className="itemside" onClick={() => setType("Shoes")}>
            <p>Shoes</p>
            <MdNavigateNext style={{ fontSize: "25px", marginRight: "10px" }} />
          </div>
        </Link>
        <Link to="/apparels" style={{ textDecoration: "none", color: "black" }}>
          <div className="itemside" onClick={() => setType("Apparels")}>
            <p>Apparels</p>
            <MdNavigateNext style={{ fontSize: "25px", marginRight: "10px" }} />
          </div>
        </Link>
        <Link
          to="/accessories"
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="itemside" onClick={() => setType("Accessories")}>
            <p>Accessories</p>
            <MdNavigateNext style={{ fontSize: "25px", marginRight: "10px" }} />
          </div>
        </Link>
        <Link
          to="/electronics"
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="itemside" onClick={() => setType("Electronics")}>
            <p>Electronics</p>
            <MdNavigateNext style={{ fontSize: "25px", marginRight: "10px" }} />
          </div>
        </Link>
        <Link to="/news" style={{ textDecoration: "none", color: "black" }}>
          <div className="navside">News</div>
        </Link>
        <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
          <div className="navside">About</div>
        </Link>
        <Link
          to="/shoppingcart"
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="navside">Shopping Cart</div>
        </Link>
        <div className="loginside">
          <Link to="/accounts">
            <button
              className="btn_login"
              onClick={() => {
                setCheckLogin("active");
                setCheckSignup("");
              }}
            >
              Login
            </button>
          </Link>
          <Link to="/accounts">
            <button
              className="btn_signup"
              onClick={() => {
                setCheckLogin("");
                setCheckSignup("active");
              }}
            >
              Sign Up
            </button>
          </Link>
        </div>
      </div>
      <div className="menureposive">
        <div className="btn_side">
          <MdMenu
            style={{ fontSize: "30px" }}
            onClick={() => {
              setActive("active");
            }}
          />
        </div>
        <div className={`sidelogo ${active1}`}>
          <Link
            to="/tradingproject"
            onClick={() => {
              setCheck(false);
              setList(null);
              setBrand(null);
              setSizetype(null);
              setSize(null);
              setPrice(null);
              setRelease(null);
              setTitle("All");
            }}
          >
            <img src={hinh} alt="" className="logo" />
          </Link>
        </div>
        <div className={`searchside ${active1}`}>
          <AiOutlineSearch className="buttonSearch" />
          <input
            required
            type="search"
            placeholder="Search for name"
            value={input}
            onChange={handleChange}
          />
          <div className="searchInfo">
            {input.length > 0
              ? searchlist.map((item, key) => (
                  <Link to="/detail" style={{ textDecoration: "none" }}>
                    <div
                      key={key}
                      className="search_info"
                      onClick={() => {
                        addDetails(item.id);
                        addName(item.id);
                      }}
                    >
                      <div className="search_img">
                        <img src={hinh1} alt="" />
                      </div>
                      <div className="search_title">
                        <h3 style={{ fontSize: "20px" }}>{item.name}</h3>
                        <p>{item.brand}</p>
                      </div>
                    </div>
                  </Link>
                ))
              : ""}
          </div>
        </div>
        <div className="btn_searchside">
          {active1 == "active" ? (
            <AiOutlineSearch
              onClick={() => {
                setActive1("");
              }}
            />
          ) : (
            <AiFillCloseCircle
              onClick={() => {
                setActive1("active");
              }}
            />
          )}
        </div>
      </div>
      <div className="menu">
        <div className="menuLeft">
          <Link
            to="/tradingproject"
            onClick={() => {
              setCheck(false);
              setList(null);
              setBrand(null);
              setSizetype(null);
              setSize(null);
              setPrice(null);
              setRelease(null);
              setTitle("All");
            }}
          >
            <img src={hinh} alt="" className="logo" />
          </Link>
          <div className="search">
            <AiOutlineSearch className="buttonSearch" />
            <input
              required
              type="search"
              placeholder="Search for name"
              value={input}
              onChange={handleChange}
            />
            <div className="searchInfo">
              {input.length > 0
                ? searchlist.map((item, key) => (
                    <Link to="/detail" style={{ textDecoration: "none" }}>
                      <div
                        key={key}
                        className="search_info"
                        onClick={() => {
                          addDetails(item.id);
                          addName(item.id);
                        }}
                      >
                        <div className="search_img">
                          <img src={hinh1} alt="" />
                        </div>
                        <div className="search_title">
                          <h3>{item.name}</h3>
                          <p>{item.brand}</p>
                        </div>
                      </div>
                    </Link>
                  ))
                : ""}
            </div>
          </div>
        </div>
        <div className="menuRight">
          <ul className="navbar">
            <li className="sneaker">
              <Link
                to="/sneaker"
                style={{ textDecoration: "none", color: "black" }}
              >
                Browser
              </Link>
              <ul className="sneaker2">
                <li onClick={() => setType("Sneaker")}>
                  <Link
                    to="/sneaker"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Sneakers
                  </Link>
                  <ul className="sneaker3">
                    {data &&
                      data.map((item, index) => (
                        <li key={index}>
                          <Link
                            to="/sneaker"
                            style={{ textDecoration: "none", color: "black" }}
                            onClick={() => {
                              filterBrand(item.brand);
                              setBrand(item.brand);
                              setCheck(true);
                            }}
                          >
                            {item.brand}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </li>
                <li onClick={() => setType("Shoes")}>
                  <Link
                    to="/shoes"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Shoes
                  </Link>
                  <ul className="sneaker3">
                    {data &&
                      data.map((item, index) => (
                        <li key={index}>
                          <Link
                            to="/shoes"
                            style={{ textDecoration: "none", color: "black" }}
                            onClick={() => {
                              filterBrand(item.brand);
                              setBrand(item.brand);
                              setCheck(true);
                            }}
                          >
                            {item.brand}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </li>
                <li onClick={() => setType("Apparels")}>
                  <Link
                    to="/apparels"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Apparels
                  </Link>
                  <ul className="sneaker3">
                    {data &&
                      data.map((item, index) => (
                        <li key={index}>
                          <Link
                            to="/apparels"
                            style={{ textDecoration: "none", color: "black" }}
                            onClick={() => {
                              filterBrand(item.brand);
                              setBrand(item.brand);
                              setCheck(true);
                            }}
                          >
                            {item.brand}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </li>
                <li onClick={() => setType("Accessories")}>
                  <Link
                    to="/accessories"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Accessories
                  </Link>
                  <ul className="sneaker3">
                    {data &&
                      data.map((item, index) => (
                        <li key={index}>
                          <Link
                            to="/accessories"
                            style={{ textDecoration: "none", color: "black" }}
                            onClick={() => {
                              filterBrand(item.brand);
                              setBrand(item.brand);
                              setCheck(true);
                            }}
                          >
                            {item.brand}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </li>
                <li onClick={() => setType("Electronics")}>
                  <Link
                    to="/electronics"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Electronics
                  </Link>
                  <ul className="sneaker3">
                    {data &&
                      data.map((item, index) => (
                        <li key={index}>
                          <Link
                            to="/electronics"
                            style={{ textDecoration: "none", color: "black" }}
                            onClick={() => {
                              filterBrand(item.brand);
                              setBrand(item.brand);
                              setCheck(true);
                            }}
                          >
                            {item.brand}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/news"
                style={{ textDecoration: "none", color: "black" }}
              >
                News
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "black" }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/shoppingcart"
                style={{ textDecoration: "none", color: "black" }}
              >
                Shopping Cart
              </Link>
            </li>
          </ul>
          <div className="login">
            <Link to="/accounts">
              <button
                className="btn_login"
                onClick={() => {
                  setCheckLogin("active");
                  setCheckSignup("");
                }}
              >
                Login
              </button>
            </Link>
            <Link to="/accounts">
              <button
                className="btn_signup"
                onClick={() => {
                  setCheckLogin("");
                  setCheckSignup("active");
                }}
              >
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
