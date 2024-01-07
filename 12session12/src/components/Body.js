import resList from "../utils/mockData";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  //useState() Hook
  const [restaurantList, setResList] = useState([]);
  const [filteredRes, SetFilteredRes] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  console.log("Body Rendered", restaurantList);

  //useEffect() Hook
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const allRes = await response.json();

    const cardsWithRestaurants = allRes.data.cards.filter(
      (card) =>
        card?.card?.card?.gridElements?.infoWithStyle?.restaurants !== undefined
    );
    console.log("Cards With Restaurants", cardsWithRestaurants);

    const combinedRestaurants = cardsWithRestaurants.reduce((acc, card) => {
      const restaurants =
        card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      if (Array.isArray(restaurants)) {
        return [...acc, ...restaurants];
      }
      return acc;
    }, []);

    console.log("Combined restaurants:", combinedRestaurants);

    //To remove duplicates
    const uniqueArray = Array.from(
      new Set(combinedRestaurants.map((obj) => obj.info.id))
    ).map((id) => {
      return combinedRestaurants.find((obj) => obj.info.id === id);
    });

    console.log("Unique Restaurant", uniqueArray);

    setResList(uniqueArray);
    SetFilteredRes(uniqueArray);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection
      </h1>
    );
  }

  const { loggedInUser, setUserName } = useContext(UserContext);

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              // Filter the restaurant cards and update the UI

              console.log("state:", searchText);

              const filteredList = restaurantList.filter((res) => {
                console.log(res.info.name);
                console.log(res?.info?.id);
                // return res?.info?.name.includes(searchText);
                return res?.info?.name
                  ?.toLowerCase()
                  ?.includes(searchText?.toLowerCase());
              });

              console.log(filteredList);
              SetFilteredRes(filteredList);
            }}
          >
            Search
          </button>
        </div>

        <div className="m-4 p-4 flex items-center -mx-6">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg "
            onClick={() => {
              const filteredRestaurants = restaurantList.filter(
                (restaurant) => restaurant.info.avgRating > 4.5
              );
              console.log(
                "Top Rated Filtered Restaurants",
                filteredRestaurants
              );
              // setResList(filteredRestaurants);
              SetFilteredRes(filteredRestaurants);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>

        <div className="m-4 p-4 flex items-center ">
          <label htmlFor="username">UserName: </label>
          <input
            type="text"
            name="username"
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        {filteredRes.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {/* if the restaurant is promoted then add a promoted label to it */}
              {restaurant.info.promoted ? (
                <RestaurantCardPromoted resCard={restaurant} />
              ) : (
                <RestaurantCard resCard={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
