import React from "react";
import { Link, link } from "react-router-dom";
import useOnlineStatus from "./utilities/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const status = useOnlineStatus();
  const cartItems = useSelector((store) => {
    return store.cart.item;
  });

  console.log(cartItems);
  return (
    <div className="flex justify-between items-center shadow-lg m-2">
      <div className="logo-container flex">
        <Link to={"/"}>
          <img
            src="https://i.pinimg.com/736x/b3/8a/a1/b38aa1b21050b0e769a97eb751d12829.jpg"
            alt="logo"
            className="w-24"
          />
        </Link>
        <p className="my-auto text-orange-500 text-5xl font-extrabold">
          Swiffy
        </p>
      </div>
      <div className="nav-items text-xl">
        <ul className="flex items-center p-4 m-4">
          <li className="px-4 hover:underline underline-offset-8 decoration-pink-600">
            Online Status : {status ? "🟢" : "🔴"}
          </li>
          <li className="px-4 hover:underline underline-offset-8 decoration-pink-600">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4 hover:underline underline-offset-8 decoration-pink-600">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-4 hover:underline underline-offset-8 decoration-pink-600">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="px-4 hover:underline underline-offset-8 decoration-pink-600">
            <Link to={"/cart"}>
              <i
                style={{ fontSize: "30px" }}
                className="fa fa-shopping-cart p-1"
              ></i>
              -(
              {cartItems.length} items)
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
