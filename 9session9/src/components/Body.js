import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //useState() Hook
  const [restaurantList, setResList] = useState([]);
  const [filteredRes, SetFilteredRes] = useState([]);

  const [searchText, setSearchText] = useState("");

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

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
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

        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurants = restaurantList.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            console.log("Top Rated Filtered Restaurants", filteredRestaurants);
            setResList(filteredRestaurants);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRes.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {" "}
              <RestaurantCard resCard={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
