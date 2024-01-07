import ItemList from "./ItemList";

const ResCategory = ({ data, showItems, setShowIndex, showClick }) => {
  //   console.log("From ResCategory Component", data);

  const handleClick = () => {
    // console.log("Clicked");
    // setShowIndex();
    showClick();
  };

  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4  ">
        <div
          className=" flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>

        {/* Accordian Body */}

        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default ResCategory;
