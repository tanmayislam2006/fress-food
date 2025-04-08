import React from "react";
import Display from "./Display";

const SelectedCatagory = ({ selectedCatagory}) => {
  console.log(selectedCatagory);

  return (
    <div className="grid grid-cols-4 gap-2">
      {selectedCatagory?.map((select) => (
        <Display key={select.idMeal} select={select}></Display>
      ))}
      {/* {
                selectedCatagory.map(select=><div>{console.log(select)}</div>)
            } */}
    </div>
  );
};

export default SelectedCatagory;
