// src/App.js
import './App.css';
import foods from './foods.json';
import { useState } from "react";
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';


function App() {

  const [foodArr, setFoodArr] = useState(foods)
  function newRecipe(newRecipe){
    const nuevaComida = [...foodArr, newRecipe]
    setFoodArr(nuevaComida)
  }




  return <div className="App">
  {foodArr.map((recipe) => {
    
       return <FoodBox name = {recipe.name} image={recipe.image} calories={recipe.calories} servings={recipe.servings} />
       
  }
     
  )}
  <AddFoodForm comida = {newRecipe} />

 
  </div>;
  
}
export default App;