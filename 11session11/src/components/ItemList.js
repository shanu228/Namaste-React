import { CLOUDINARY_IMAGE } from "../utils/constants";

const ItemList = ({ items }) => {
  //   console.log("From ItemList Component", items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span>
                - ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>

          <div className="w-3/12  relative">
            <img src={CLOUDINARY_IMAGE + item?.card?.info?.imageId} alt="" />
            <button className="flex items-center justify-between px-3 h-10  rounded-lg bg-white shadow-lg absolute mx-[17%] -mt-8 flex items-center ">
              <span className="text-green-900 text-6xl -mx-3">-</span>
              <span className="mt-2 text-sm ml-8 ">Add</span>
              <span className="text-green-900 text-4xl ml-5">+</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
