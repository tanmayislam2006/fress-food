import React from "react";
import Logo from "../../assets/food-logo.jpg"
import CoinLogo from"../../assets/coin.png"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center max-w-6xl mx-auto py-3 bg-blue-100 px-2 rounded-lg sticky top-0 z-10">
      {/* logo and bandname  */}
      <div className="flex items-center gap-2">
        <div className="w-12 h-12">
          <img className="rounded-xl" src={Logo} alt="" />
        </div>
        <div className="text-2xl font-bold">Fress Food</div>
      </div>
      {/* nav itmes  */}
      <div className="flex items-center gap-20">
        <ul className="flex gap-10">
          <a href="" className="hover:underline"><li className="text-gray-600">Home</li></a>
          <a href="" className="hover:underline"><li className="text-gray-600">Itmes</li></a>
          <a href="" className="hover:underline"><li className="text-gray-600">Trems &Condition</li></a>
          <a href="" className="hover:underline"><li className="text-gray-600">Contact</li></a>
        </ul>
        <div className="">
          <button className=" flex gap-2 items-center border border-gray-400 rounded-lg px-4 py-2 font-bold ">
            $ 2000<img src={CoinLogo} alt="" className="w-6 h-6" /> 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
