import { useContext, useState } from "react";
import { AppContext } from "../../AppConText";
import "./Product.css";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import Card from "../card/Card";
import Header from "../../pages/header/Header";
import Footer from "../../pages/footer/Footer";
import React from "react";

export default function Product() {
  const {
    data,
    filterBrand,
    filterSize,
    filterRelease,
    filterPopular,
    filterTrending,
    filterBest,
    list,
    setList,
    type,
    setType,
    check,
    setCheck,
    brandtype,
    setBrand,
    sizetype,
    setSizetype,
    size,
    setSize,
    price,
    setPrice,
    release,
    setRelease,
    title,
    setTitle,
  } = useContext(AppContext);
  const [active, setActive] = useState("");
  const [active1, setActive1] = useState("active");
  return (
    <div id="product">
      <Header />
      <div className="productList">
        <div className={`left ${active1}`}>
          <div className="menu">
            <div className="menuInfo">
              <h5
                onClick={() => {
                  setType("Sneaker");
                  setActive1("active");
                }}
              >
                SNEAKERS
              </h5>
              <h5
                onClick={() => {
                  setActive1("active");
                  setType("Shoes");
                }}
              >
                SHOES
              </h5>
              <h5
                onClick={() => {
                  setActive1("active");
                  setType("Apparel");
                }}
              >
                APPAREL
              </h5>
              <h5
                onClick={() => {
                  setActive1("active");
                  setType("Accessories");
                }}
              >
                ACCESSORIES
              </h5>
              <h5
                onClick={() => {
                  setActive1("active");
                  setType("Electronic");
                }}
              >
                ELECTRONICS
              </h5>
            </div>
            <div className="menuInfo">
              {data &&
                data.map((item, index) => (
                  <div className="brandName" key={index}>
                    <h5
                      onClick={() => {
                        filterBrand(item.brand);
                        setBrand(item.brand);
                        setCheck(true);
                        setActive1("active");
                      }}
                    >
                      {item.brand}
                    </h5>
                  </div>
                ))}
            </div>
            <div className="menuInfo">
              <h4>Size Type</h4>
              <h6>
                <input
                  type="checkbox"
                  checked={
                    sizetype != null && sizetype != "Female" ? true : false
                  }
                  value="Male"
                  onChange={(event) => {
                    setSizetype(event.target.value);
                  }}
                  onClick={() => {
                    let newList;
                    {
                      brandtype != null ||
                      release != null ||
                      price != null ||
                      size != null
                        ? (newList = list.filter(
                            (item) => item.sizetype != "female"
                          ))
                        : (newList = data.filter(
                            (item) => item.sizetype != "female"
                          ));
                    }
                    setCheck(true);
                    setList(newList);
                    setActive1("active");
                  }}
                />{" "}
                Male
              </h6>
              <h6>
                <input
                  type="checkbox"
                  checked={
                    sizetype != null && sizetype != "Male" ? true : false
                  }
                  value="Female"
                  onChange={(event) => {
                    setSizetype(event.target.value);
                  }}
                  onClick={() => {
                    let newList;
                    {
                      brandtype != null ||
                      release != null ||
                      price != null ||
                      size != null
                        ? (newList = list.filter(
                            (item) => item.sizetype != "male"
                          ))
                        : (newList = data.filter(
                            (item) => item.sizetype != "male"
                          ));
                    }
                    setList(newList);
                    setCheck(true);
                    setActive1("active");
                  }}
                />{" "}
                Female
              </h6>
            </div>
            <div className="menuInfo">
              <h5>Sizes</h5>
              <div className="btn_Size">
                {data &&
                  data.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        filterSize(item.size);
                        setSize(item.size);
                        setCheck(true);
                        setActive1("active");
                      }}
                    >
                      {item.size}
                    </button>
                  ))}
              </div>
            </div>
            <div className="menuInfo">
              <h5>Price</h5>
              <h6>
                <input
                  type="checkbox"
                  checked={
                    price != null && price === "Under 100$" ? true : false
                  }
                  value="Under 100$"
                  onChange={(event) => {
                    setPrice(event.target.value);
                  }}
                  onClick={() => {
                    let newList;
                    {
                      brandtype != null ||
                      size != null ||
                      sizetype != null ||
                      release != null
                        ? (newList = list.filter((item) => item.price <= "10"))
                        : (newList = data.filter((item) => item.price <= "10"));
                    }
                    setList(newList);
                    setCheck(true);
                    setActive1("active");
                  }}
                />
                Under 100$
              </h6>
              <h6>
                <input
                  type="checkbox"
                  checked={
                    price != null && price === "100$ - 200$" ? true : false
                  }
                  value="100$ - 200$"
                  onChange={(event) => {
                    setPrice(event.target.value);
                  }}
                  onClick={() => {
                    let newList;
                    {
                      brandtype != null ||
                      size != null ||
                      sizetype != null ||
                      release != null
                        ? (newList = list.filter(
                            (item) => item.price > "10" && item.price <= "20"
                          ))
                        : (newList = data.filter(
                            (item) => item.price > "10" && item.price <= "20"
                          ));
                    }
                    setList(newList);
                    setCheck(true);
                    setActive1("active");
                  }}
                />
                100$ - 200$
              </h6>
              <h6>
                <input
                  type="checkbox"
                  checked={
                    price != null && price === "200$ - 300$" ? true : false
                  }
                  value="200$ - 300$"
                  onChange={(event) => {
                    setPrice(event.target.value);
                  }}
                  onClick={() => {
                    let newList;
                    {
                      brandtype != null ||
                      size != null ||
                      sizetype != null ||
                      release != null
                        ? (newList = list.filter(
                            (item) => item.price > "20" && item.price <= "30"
                          ))
                        : (newList = data.filter(
                            (item) => item.price > "20" && item.price <= "30"
                          ));
                    }
                    setList(newList);
                    setCheck(true);
                    setActive1("active");
                  }}
                />
                200$ - 300$
              </h6>
              <h6>
                <input
                  type="checkbox"
                  checked={
                    price != null && price === "300$ - 400$" ? true : false
                  }
                  value="300$ - 400$"
                  onChange={(event) => {
                    setPrice(event.target.value);
                  }}
                  onClick={() => {
                    let newList;
                    {
                      brandtype != null ||
                      size != null ||
                      sizetype != null ||
                      release != null
                        ? (newList = list.filter(
                            (item) => item.price > "30" && item.price <= "40"
                          ))
                        : (newList = data.filter(
                            (item) => item.price > "30" && item.price <= "40"
                          ));
                    }
                    setList(newList);
                    setCheck(true);
                    setActive1("active");
                  }}
                />
                300$ - 400$
              </h6>
              <h6>
                <input
                  type="checkbox"
                  checked={
                    price != null && price === "400$ - 500$" ? true : false
                  }
                  value="400$ - 500$"
                  onChange={(event) => {
                    setPrice(event.target.value);
                  }}
                  onClick={() => {
                    let newList;
                    {
                      brandtype != null ||
                      size != null ||
                      sizetype != null ||
                      release != null
                        ? (newList = list.filter(
                            (item) => item.price <= "50" && item.price > "40"
                          ))
                        : (newList = data.filter(
                            (item) => item.price <= "50" && item.price > "40"
                          ));
                    }
                    setList(newList);
                    setCheck(true);
                    setActive1("active");
                  }}
                />
                400$ - 500$
              </h6>
              <h6>
                <input
                  type="checkbox"
                  checked={
                    price != null && price === "500$ - 600$" ? true : false
                  }
                  value="500$ - 600$"
                  onChange={(event) => {
                    setPrice(event.target.value);
                  }}
                  onClick={() => {
                    let newList;
                    {
                      brandtype != null ||
                      size != null ||
                      sizetype != null ||
                      release != null
                        ? (newList = list.filter(
                            (item) => item.price > "50" && item.price <= "60"
                          ))
                        : (newList = data.filter(
                            (item) => item.price > "50" && item.price <= "60"
                          ));
                    }
                    setList(newList);
                    setCheck(true);
                    setActive1("active");
                  }}
                />
                500$ - 600$
              </h6>
              <h6>
                <input
                  type="checkbox"
                  checked={price != null && price === "600$ +" ? true : false}
                  value="600$ +"
                  onChange={(event) => {
                    setPrice(event.target.value);
                  }}
                  onClick={() => {
                    let newList;
                    {
                      brandtype != null ||
                      size != null ||
                      sizetype != null ||
                      release != null
                        ? (newList = list.filter((item) => item.price > "60"))
                        : (newList = data.filter((item) => item.price > "60"));
                    }
                    setList(newList);
                    setCheck(true);
                    setActive1("active");
                  }}
                />
                600$ +
              </h6>
            </div>
            <div className="menuInfo">
              <h5>Release</h5>
              {data &&
                data.map((item, index) => (
                  <h6 key={index}>
                    <input
                      type="checkbox"
                      checked={
                        release != null && release == item.release
                          ? true
                          : false
                      }
                      value={item.release}
                      onChange={(event) => {
                        setRelease(event.target.value);
                      }}
                      onClick={() => {
                        filterRelease(item.release);
                        setRelease(item.release);
                        setCheck(true);
                        setActive1("active");
                      }}
                    />
                    {item.release}
                  </h6>
                ))}
            </div>
          </div>
        </div>
        <div className="right">
          <div className="soft">
            <div className="btn_side">
              <button
                onClick={() => {
                  active1 == "" ? setActive1("active") : setActive1("");
                }}
              >
                Filter
              </button>
              {check ? (
                <div className="btn_filterside">
                  <button
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
                    Clear All Filter
                  </button>
                  {brandtype != null ? (
                    <button style={{ background: "lightgray" }}>
                      {brandtype}
                    </button>
                  ) : null}
                  {sizetype != null ? (
                    <button style={{ background: "lightgray" }}>
                      {sizetype}
                    </button>
                  ) : null}
                  {size != null ? (
                    <button style={{ background: "lightgray" }}>{size}</button>
                  ) : null}
                  {price != null ? (
                    <button style={{ background: "lightgray" }}>{price}</button>
                  ) : null}
                  {release != null ? (
                    <button style={{ background: "lightgray" }}>
                      {release}
                    </button>
                  ) : null}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="left_soft">
              <p>Home/{type}</p>
              {check ? (
                <div className="btn_Filter">
                  <button
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
                    Clear All Filter
                  </button>
                  {brandtype != null ? (
                    <button style={{ background: "lightgray" }}>
                      {brandtype}
                    </button>
                  ) : null}
                  {sizetype != null ? (
                    <button style={{ background: "lightgray" }}>
                      {sizetype}
                    </button>
                  ) : null}
                  {size != null ? (
                    <button style={{ background: "lightgray" }}>{size}</button>
                  ) : null}
                  {price != null ? (
                    <button style={{ background: "lightgray" }}>{price}</button>
                  ) : null}
                  {release != null ? (
                    <button style={{ background: "lightgray" }}>
                      {release}
                    </button>
                  ) : null}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="right_soft">
              <table>
                <thead>
                  <tr>
                    <td>
                      <button
                        onClick={() => {
                          setActive("active");
                          {
                            if (active === "active") {
                              setActive("");
                            }
                          }
                        }}
                      >
                        Soft by:{" "}
                        <span style={{ fontWeight: "bold" }}>{title}</span>{" "}
                        {active !== "active" ? (
                          <AiFillCaretDown />
                        ) : (
                          <AiFillCaretUp />
                        )}
                      </button>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th
                      className={`title ${active}`}
                      onClick={() => {
                        setActive("");
                        setTitle("Popular");
                        filterPopular();
                        setCheck(true);
                      }}
                    >
                      Popular
                    </th>
                  </tr>
                  <tr>
                    <th
                      className={`title ${active}`}
                      onClick={() => {
                        setActive("");
                        setTitle("Trending");
                        filterTrending();
                        setCheck(true);
                      }}
                    >
                      Trending
                    </th>
                  </tr>
                  <tr>
                    <th
                      className={`title ${active}`}
                      onClick={() => {
                        setActive("");
                        setTitle("Best Seller");
                        filterBest();
                        setCheck(true);
                      }}
                    >
                      Best Seller
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="info">
            {check || title != "All" ? (
              list == "" ? (
                <h3 style={{ margin: "50px auto" }}>
                  Nothing to see here! Please change your filters!
                </h3>
              ) : (
                list &&
                list.map((item, index) => <Card item={item} key={index} />)
              )
            ) : (
              data &&
              data.map((item, index) => <Card item={item} key={index} />)
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
