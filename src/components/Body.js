import React, { useEffect, useState } from "react";
import Cards from "./Cards";

import Loading from "./Loading";
import { Link, useParams } from "react-router-dom";

const Body = () => {
  const [res, setRes] = useState([]);
  const [resList, setresList] = useState([]);
  const [searchText, setsearchText] = useState("");
  const { resId } = useParams();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const api = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4743879&lng=77.50399039999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const raw = await api.json();
    console.log(raw);
    setRes(
      raw?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setresList(
      raw?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  console.log(res);
  return resList.length === 0 ? (
    <Loading />
  ) : (
    <div className="body ">
      <div className="filter flex justify-between items-center">
        <div className="search m-4">
          <input
            type="text"
            className="search-box w-56 border-2 border-black rounded p-2 "
            placeholder="What's to eat ?"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filtered = resList.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setresList(filtered);
            }}
            className="px-4 py-2 text-white bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 m-4 rounded-lg"
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn px-4 py-2 bg-gray-100 m-6 rounded-lg"
          onClick={() => {
            const filteredList = resList.filter(
              (singleRes) => singleRes?.info.avgRating > 4
            );
            setresList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container flex justify-evenly flex-wrap">
        {resList.map((singleRes, index) => {
          return (
            <Link to={`/resturants/${singleRes?.info?.id}`}>
              {" "}
              <Cards key={index} card={singleRes} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
