import React from "react";

const Display = ({ select }) => {
  const { strMeal, strMealThumb } = select;
  return (
    <div className="border rounded-lg p-2 py-4">
      <div className="h-40">
        <img
          src={strMealThumb}
          className="w-full h-full object-cover rounded-lg"
          alt=""
        />
      </div>
      <div className="my-2">
        <p className="text-xl font-bold">{strMeal}</p>
        <div className="mt-4">
          <button className="text-white bg-main-color px-4 py-2 rounded-lg">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Display;
