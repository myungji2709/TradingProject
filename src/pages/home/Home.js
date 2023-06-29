import Banner from "./banner/Banner";
import "./Home.css";
import { useContext } from "react";
import { AppContext } from "../../AppConText";
import hinh from "./hinh.jpg";
import hinh2 from "./hinh2.jpg";
import hinh3 from "./hinh3.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import Card from "../../component/card/Card";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import React from "react";

export default function Home() {
  const { data, details, setType } = useContext(AppContext);
  console.log(details);
  return (
    <div id="home">
      <Header />
      <div className="info_product">
        <div className="menu_home">
          <div className="info_menu">
            <ul>
              <li onClick={() => setType("Sneaker")}>
                <Link
                  to="/sneaker"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Sneakers
                </Link>
              </li>
              <li onClick={() => setType("Shoes")}>
                <Link
                  to="/shoes"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Shoes
                </Link>
              </li>
              <li onClick={() => setType("Apparels")}>
                <Link
                  to="/apparels"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Apparels
                </Link>
              </li>
              <li onClick={() => setType("Accessories")}>
                <Link
                  to="/accessories"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Accessories
                </Link>
              </li>
              <li onClick={() => setType("Electronics")}>
                <Link
                  to="/electronics"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Electronics
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="banner">
          <Banner />
        </div>
        <div className="lists">
          <div className="productLiked">
            <div className="title_home">
              {" "}
              <h4>Recommended For You</h4>
            </div>{" "}
            <div className="info">
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
          <div className="popularBrand">
            <div className="title_home">
              <h4>Popular Brands</h4>
            </div>
            <div className="info">
              <ul>
                <li>
                  <img
                    src={hinh3}
                    alt=""
                    style={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                    }}
                  />
                </li>
                <li>
                  <img
                    src={hinh3}
                    alt=""
                    style={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                    }}
                  />
                </li>
                <li>
                  <img
                    src={hinh3}
                    alt=""
                    style={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                    }}
                  />
                </li>
                <li>
                  <img
                    src={hinh3}
                    alt=""
                    style={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                    }}
                  />
                </li>
                <li>
                  <img
                    src={hinh3}
                    alt=""
                    style={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                    }}
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="trendingSneakers">
            <div className="title_home">
              <h4>Trending Sneakers</h4>
              <p className="seeAll">
                See All <AiOutlineArrowRight style={{ color: "green" }} />
              </p>
            </div>
            <div className="info">
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
          <div className="poster">
            <img src={hinh} alt="" />
            <img src={hinh2} alt="" />
          </div>
          <div className="popularBrand">
            <div className="title_home">
              <h4>Popular Footwear Brands</h4>
            </div>
            <div className="info">
              <ul>
                <li>
                  <img
                    src={hinh3}
                    alt=""
                    style={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                    }}
                  />
                </li>
                <li>
                  <img
                    src={hinh3}
                    alt=""
                    style={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                    }}
                  />
                </li>
                <li>
                  <img
                    src={hinh3}
                    alt=""
                    style={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                    }}
                  />
                </li>
                <li>
                  <img
                    src={hinh3}
                    alt=""
                    style={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                    }}
                  />
                </li>
                <li>
                  <img
                    src={hinh3}
                    alt=""
                    style={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                    }}
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="clothing">
            <div className="title_home">
              <h4>Apparel</h4>
              <div className="seeAll">
                See All <AiOutlineArrowRight style={{ color: "green" }} />
              </div>
            </div>
            <div className="info">
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
          <div className="accessories">
            <div className="title_home">
              <h4>Accessories</h4>
              <p className="seeAll">
                See All <AiOutlineArrowRight style={{ color: "green" }} />
              </p>
            </div>
            <div className="info">
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
          <div className="electronic">
            <div className="title_home">
              <h4>Electronic</h4>
              <p className="seeAll">
                See All <AiOutlineArrowRight style={{ color: "green" }} />
              </p>
            </div>
            <div className="info">
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
      </div>
      <Footer />
    </div>
  );
}
