import Loading from "./Loading";
import { useParams } from "react-router-dom";
import useResturantMenu from "./utilities/useResturantMenu";
import MenuList from "./MenuList";
import { useState } from "react";

const ResturantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);

  const resInfo = useResturantMenu(resId);

  if (resInfo === null) return <Loading />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { cards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;

  // console.log(cards);

  const menuList = cards.filter((item) => {
    return (
      item?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });

  // console.log(menuList);

  return (
    <div className="text-center w-6/12 mx-auto my-8 font-Darker Grotesque text-lg">
      <h1 className="text-4xl">{name}</h1>
      <h2>{cuisines.join(",")}</h2>
      <h2 className="m-4">Menu</h2>
      <div className=" p-4">
        {menuList.map((food, index) => {
          return (
            <>
              <MenuList
                key={food?.card?.card?.itemCards?.card?.info?.id}
                data={food}
                showItems={index === showIndex ? true : false}
                setShowIndex={() =>
                  setShowIndex((prev) => {
                    if (prev === index) return null;
                    else return index;
                  })
                }
              />
              <hr style={{ backgroundColor: "grey", height: 5 }} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ResturantMenu;
