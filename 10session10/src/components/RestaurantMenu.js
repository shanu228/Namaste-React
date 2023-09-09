import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const params = useParams();
  const { resId } = params;

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards);

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-4xl">{name}</h1>
      <p className="text-3xl">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      <h2 className="font-bold text-3xl">Menu</h2>
      <ul className="text-start flex flex-col items-start p-10 border border-black rounded-lg bg-yellow-100 text-black text-lg">
        {itemCards.map((item) => {
          return (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} - {"Rs "}
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
              <br />
              <br />
            </li>
          );
        })}
        <br />
        <br />

        {/* without map */}
        {/* <li>{itemCards[0]?.card?.info?.name}</li>
        <li>{itemCards[1]?.card?.info?.name}</li>
        <li>{itemCards[2]?.card?.info?.name}</li> */}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
