// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.

import { Divider, Input } from 'antd';

import { useState } from "react";

function AddFoodForm(props) {
   
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("")

  const handleNameInput = (e) => {
    setName(e.target.value);
  };

  const handleImageInput = (e) => {
    setImage(e.target.value);
  };

  const handleCalories = (e) => {
    setCalories(e.target.value);
};

const handleServings = (e) => {
    setServings(e.target.value);
};
   
    function onSubmit(e)  {
     e.preventDefault()
        const newRecipe = {
            name, image, calories, servings
        }
        console.log(newRecipe)
    props.comida(newRecipe);
    
  
    // Reset the state
    setName("");
    setImage("");
    setCalories("");
    setServings("");
  };

// Iteration 4

    
  return (
    <form onSubmit = {onSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name: </label>
      <Input value={name} type="text" onChange={handleNameInput} />

      <label> Image: </label>
      <Input value={image} type="text" onChange= {handleImageInput} />
      {/* render antd <Input /> type="text" here */}

      <label> Calories: </label>
      <Input value={calories} type="text" onChange={handleCalories}/>
      {/* render antd <Input /> type="number" here */}

      <label>Servings: </label>
      <Input value={servings} type="text" onChange= {handleServings} />
      {/* render antd <Input /> type="number" here */}

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
