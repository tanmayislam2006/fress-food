import React, { useState } from "react";

const CatagoryName = ({ catagoryName, handleCatagoryBtn, setSelectedMeal }) => {
  const [activeColor, setActiveColor] = useState(0);
  return (
    <div className="flex flex-wrap gap-3 my-5">
      {catagoryName.map((cat) => {
        return (
          <div key={cat.idCategory}>
            <button
              onClick={() => {
                setActiveColor(cat.idCategory);
                handleCatagoryBtn(cat.strCategory);
                setSelectedMeal(cat.strCategory);

              }}
              className={`${
                activeColor === cat.idCategory ? "bg-main-color" : "bg-gray-400"
              } px-4 py-2 font-bold border border-green-200 rounded-lg text-white`}
            >
              {cat.strCategory}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CatagoryName;
