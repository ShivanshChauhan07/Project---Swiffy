import React from "react";

const Cards = ({ card }) => {
  const { name, cuisines, sla, avgRating, cloudinaryImageId, costForTwo } =
    card?.info;
  return (
    <div className="res-card m-4 p-4 w-[270px] flex flex-col justify-evenly hover:bg-slate-100 rounded-lg">
      <img
        src={`https://res.cloudinary.com/swiggy/image/upload/${cloudinaryImageId}`}
        alt=""
        className="res-logo w-96 h-40 mx-auto rounded-3xl"
      />
      <h3 className="font-Darker Grotesque font-bold text-2xl">{name}</h3>
      <div className="text-xs font-sans font-medium">
        <h4>{cuisines.join(",")}</h4>
      </div>
      <h4>{avgRating}⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default Cards;
