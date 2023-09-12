import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./utilities/cartSlice";

const MenuList = ({ data, showItems, setShowIndex }) => {
  const { title, itemCards } = data?.card?.card;
  const dispatch = useDispatch();
  //   const { isVeg } = itemCards?.card?.info;
  //   console.log(itemCards);
  console.log(showItems);

  return (
    <>
      <div
        className=" flex justify-between m-4 p-2 cursor-pointer"
        onClick={() => {
          setShowIndex();
        }}
      >
        <span className="text-2xl font-black">
          {title} ({itemCards.length})
        </span>
        <span>{showItems ? "🔼" : "🔽"}</span>
      </div>
      <div className={showItems ? "block" : "hidden"}>
        {itemCards.map((foodName) => {
          return (
            <>
              <div className="flex justify-between m-4">
                <div className="my-auto">
                  <div
                    className={
                      foodName?.card?.info?.isVeg
                        ? "logo border-2 border-green-400 w-4 h-4"
                        : "border-2 border-red-400 w-4 h-4"
                    }
                  >
                    <div
                      className={
                        foodName?.card?.info?.isVeg
                          ? "border-2 border-green-600 rounded-full bg-green-600 w-2 h-2 mx-auto my-[2.5px] "
                          : "border-2 border-red-600 rounded-full bg-red-600 w-2 h-2 mx-auto my-[2.5px]"
                      }
                    ></div>
                  </div>
                  <p className="text-left">{foodName?.card?.info?.name}</p>
                  <p className="w-9 ml-5 text-base font-light text-slate-700">
                    ₹{foodName?.card?.info?.price / 100}
                  </p>
                  <p className="text-sm text-left m-2 text-slate-500">
                    {foodName?.card?.info?.description}
                  </p>
                </div>
                <div className="bg-yellow-50 rounded-xl w-28 h-28">
                  <img
                    src={`https://res.cloudinary.com/swiggy/image/upload/${foodName?.card?.info?.imageId}`}
                    alt=""
                    className="w-28 h-28"
                  />
                  <button
                    className="relative bottom-8 border-2 border-green-600 rounded-md  bg-white text-green-500 w-24 text-center font-mono font-bold text-base hover:shadow-lg hover:bg-green-500 hover:text-white"
                    onClick={() => {
                      dispatch(addItem(foodName));
                    }}
                  >
                    ADD +
                  </button>
                </div>
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </>
  );
};

export default MenuList;
