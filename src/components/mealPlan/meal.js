import React from "react";


const Meal =({title,calories,image,ingredients}) =>{
    
    
  return (
    <div >
        <h1>{title}</h1>
        <ol>
            {ingredients.map(ingredient =>(
            <li>{ingredient.text}</li>
            ))}
        </ol>
        <p>Calories: {calories.toFixed()}</p>
        <img src={image} alt=""  />  
        </div>
  );
}

export default Meal;