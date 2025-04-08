import React, { useEffect, useState } from "react";
import CatagoryName from "./CatagoryName/CatagoryName";
import SelectedCatagory from "./SelectedCatagory/SelectedCatagory";

const FoodDisplay = () => {
  const [catagoryName, setCatagoryName] = useState([]);
  //   display selected catagory
  const [selectedCatagory, setSelectedCatagory] = useState([]);
  //    selected meal name
  const [selectedMeal, setSelectedMeal] = useState("");
  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedMeal}`
    )
      .then((res) => res.json())
      .then((data) => setSelectedCatagory(data.meals))
      .catch((err) => console.log(err, "error diche ghumao giye"));
  }, [selectedMeal]);
  const handleCatagoryBtn = (selMeal) => {
    console.log(selMeal);
  };
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php#")
      .then((res) => res.json())
      .then((data) => setCatagoryName(data.categories));
  }, []);
  return (
    <div>
      <CatagoryName
        catagoryName={catagoryName}
        handleCatagoryBtn={handleCatagoryBtn}
        setSelectedMeal={setSelectedMeal}
      ></CatagoryName>
      <SelectedCatagory
        selectedCatagory={selectedCatagory}
      ></SelectedCatagory>
    </div>
  );
};

export default FoodDisplay;
