import { CLOUDINARY_IMAGE } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resCard } = props;

  const {
    name,
    cuisines,
    cloudinaryImageId,
    avgRating,
    sla: { slaString },
  } = resCard?.info;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 ">
      <img
        className="rounded-lg"
        src={`${CLOUDINARY_IMAGE}${cloudinaryImageId}`}
        alt="dish"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 className="cuisines">{cuisines.join(", ")}.</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
