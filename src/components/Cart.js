import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuList from "./MenuList";
import { clearCart } from "./utilities/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.item);
  const dispatch = useDispatch();
  console.log(cartItems[0]?.card?.info?.name);
  return (
    <div className=" w-5/6 mx-auto">
      <div className="border-2 border-slate-100 shadow-xl rounded-lg p-2 ">
        {cartItems.map((item) => {
          return (
            <div className="flex w-11/12 h-28 p-2 mx-auto border-b-2 border-slate-300 justify-between">
              <div>
                <p>
                  {item?.card?.info?.name} - ₹{item?.card?.info?.price / 100}
                </p>
                <p className="text-xs m-2 w-4/5">
                  {item?.card?.info?.description}
                </p>
              </div>
              <div className="rounded-xl w-24 h-16 ">
                <img
                  src={`https://res.cloudinary.com/swiggy/image/upload/${item?.card?.info?.imageId}`}
                  alt=""
                  className="rounded-lg"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center m-4">
        <button
          className="border-2 border-purple-600 bg-purple-500 text-white rounded-md p-1 w-32 text-lg font-sans font-semibold"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>

        {cartItems.length === 0 && (
          <h1 className="text-lg font-serif font-medium m-4">
            {" "}
            Cart is Empty ! try something new.{" "}
          </h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
