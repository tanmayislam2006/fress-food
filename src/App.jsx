import React from 'react';
import Navbar from './Component/Navbar/Navbar';
import FoodDisplay from './Component/FoodDisplay/FoodDisplay';

const App = () => {
  return (
    <div className=' font-sora max-w-6xl mx-auto'>
      <Navbar></Navbar>
      <FoodDisplay></FoodDisplay>
    </div>
  );
};

export default App;