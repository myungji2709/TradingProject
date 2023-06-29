import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert";
import React from "react";

export const AppContext = createContext({});
export const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [list, setList] = useState(null);
  const [type, setType] = useState("Sneaker");
  const [check, setCheck] = useState(false);
  const [brandtype, setBrand] = useState(null);
  const [sizetype, setSizetype] = useState(null);
  const [size, setSize] = useState(null);
  const [price, setPrice] = useState(null);
  const [release, setRelease] = useState(null);
  const [title, setTitle] = useState("All");
  const [details, setDetails] = useState([]);
  const [name, setName] = useState(null);
  const [cart, setCart] = useState([]);
  const [checkLogin, setCheckLogin] = useState("");
  const [checkSignup, setCheckSignup] = useState("");

  const getData = async () => {
    const url = `https://645cd5a1250a246ae30f99fc.mockapi.io/list`;

    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  const filterBrand = (brand) => {
    let newList;
    {
      {
        title === "All"
          ? sizetype != null || size != null || price != null || release != null
            ? (newList = list.filter((item) => item.brand === brand))
            : (newList = data.filter((item) => item.brand === brand))
          : (newList = list.filter((item) => item.brand === brand));
      }
    }
    setList(newList);
  };
  const filterSize = (size) => {
    let newList;
    {
      {
        title === "All"
          ? brandtype != null ||
            sizetype != null ||
            price != null ||
            release != null
            ? (newList = list.filter((item) => item.size === size))
            : (newList = data.filter((item) => item.size === size))
          : (newList = list.filter((item) => item.size === size));
      }
    }
    setList(newList);
  };
  const filterRelease = (release) => {
    let newList;
    {
      {
        title === "All"
          ? brandtype != null ||
            sizetype != null ||
            price != null ||
            size != null
            ? (newList = list.filter((item) => item.release === release))
            : (newList = data.filter((item) => item.release === release))
          : (newList = list.filter((item) => item.release === release));
      }
    }
    setList(newList);
  };
  const filterPopular = () => {
    let newList;
    {
      brandtype != null ||
      sizetype != null ||
      price != null ||
      size != null ||
      sizetype != null
        ? (newList = list.filter((item) => item.popular === true))
        : (newList = data.filter((item) => item.popular === true));
    }
    setList(newList);
  };
  const filterTrending = () => {
    let newList;
    {
      brandtype != null ||
      sizetype != null ||
      price != null ||
      size != null ||
      sizetype != null
        ? (newList = list.filter((item) => item.trending === true))
        : (newList = data.filter((item) => item.trending === true));
    }
    setList(newList);
  };
  const filterBest = () => {
    let newList;
    {
      brandtype != null ||
      sizetype != null ||
      price != null ||
      size != null ||
      sizetype != null
        ? (newList = list.filter((item) => item.bestseller === true))
        : (newList = data.filter((item) => item.bestseller === true));
    }
    setList(newList);
  };
  const addDetails = (id) => {
    let kq = data.find((item) => item.id === id);
    setDetails(kq);
  };
  const addName = (id) => {
    let kq = data.find((item) => item.id === id);
    setName(kq.name);
  };
  const addCart = (id) => {
    let kq = data.find((item) => item.id === id);
    const index = cart.findIndex((item) => item.id === id);
    if (index >= 0) {
      let newList = cart;
      newList[index]["qty"]++;
      setCart(newList);
    } else {
      setCart([...cart, { ...kq, qty: 1 }]);
    }
  };
  const buyNow = (id) => {
    let kq = data.find((item) => item.id === id);
    const index = cart.findIndex((item) => item.id === id);
    if (index >= 0) {
      let newList = cart;
      newList[index]["qty"]++;
      newList[index]["checked"] = true;
      setCart(newList);
    } else {
      setCart([...cart, { ...kq, qty: 1, checked: true }]);
    }
  };
  const changeQty = (id, num) => {
    const kq = cart.map((item) =>
      item.id == id ? { ...item, qty: item["qty"] + num } : item
    );
    setCart(kq);
  };
  const xoa = (id) => {
    let newList;
    newList = cart.filter((item) => item.id != id);
    setCart(newList);
  };
  const checkCart = (id) => {
    setCart(
      cart.map((value) =>
        value.id === id ? { ...value, checked: !value.checked } : value
      )
    );
  };
  const checkCartall = () => {
    let newList = cart;
    for (let i = 0; i < newList.length; i++) {
      newList[i].checked = true;
    }
    setCart(newList);
  };
  const tien = cart.map((item) =>
    item.checked == false ? 0 : item.price * item.qty
  );
  let tongtien = 0;
  for (let i = 0; i < tien.length; i++) {
    tongtien += tien[i];
  }
  let ship = (tongtien * 0.05).toFixed(2);
  let tax = (tongtien * 0.1).toFixed(2);
  let tongbill = (Number(tongtien) + Number(ship) + Number(tax)).toFixed(2);
  const sweetalertAdd = () => {
    Swal({
      title: "Success.",
      text: "Product is added to your cart.",
      icon: "success",
      timer: 1000,
      button: false,
    });
  };
  const sweetalertLike = () => {
    Swal({
      title: "Success.",
      text: "This product has been added to your favorites.",
      icon: "success",
      timer: 1000,
      button: false,
    });
  };
  const sweetalertPayment = () => {
    Swal({
      title: "Payment Success.",
      text: "We will send an email about order confirmation and successful payment result for you.",
      icon: "success",
      timer: 2000,
      button: false,
    });
  };
  const sweetalertError = () => {
    Swal({
      title: "Checkout Fail.",
      text: "Please check your cart again.",
      icon: "error",
      timer: 1000,
      button: false,
    });
  };
  const sweetalertLogin = () => {
    Swal({
      title: "You are logged in successfully.",
      icon: "success",
      timer: 1000,
      button: false,
    });
  };
  const sweetalertSignin = () => {
    Swal({
      title: "Sign up successfully! Please log in.",
      icon: "success",
      timer: 1000,
      button: false,
    });
  };
  return (
    <AppContext.Provider
      value={{
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
        details,
        addDetails,
        name,
        addName,
        addCart,
        buyNow,
        cart,
        changeQty,
        xoa,
        checkCart,
        tongtien,
        ship,
        tax,
        tongbill,
        sweetalertAdd,
        sweetalertLike,
        sweetalertPayment,
        sweetalertError,
        checkLogin,
        setCheckLogin,
        checkSignup,
        setCheckSignup,
        sweetalertLogin,
        sweetalertSignin,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
