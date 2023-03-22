import React,{ useEffect, useState } from "react";
import CalcGrid from "../CalcGrid/CalcGrid";
import Meal from "../mealPlan/meal";

function Calculator() {
  const API = {
    ID : "3650d774",
    KEY : "444e82a82953ea23ee421ed442b63697",
    URL : "https://api.edamam.com/search?",
  }
  
const [recipes, setRecipes]=useState([]);
const [query, setQuery]= useState([]);
const [search, setSearch]=useState([]);

useEffect( ()=>{
    getRecipes()
}, [query])
const mealTypes= ["Breakfast","Lunch","Dinner"];
const getRecipes =async ()=>{
const response = await fetch(`${API.URL}q=${query}&app_id=${API.ID}&app_key=${API.KEY}&from=0&to=1&calories=591-722&mealType=${mealTypes[0]}`)
const data=await response.json()
console.log(data)
setRecipes(data.hits)
  }

const getSearch=(e)=>{
  e.preventDefault();
  setQuery(search)
  setSearch("")
  
}

const updateSearch=(e)=>{
    setSearch(e.target.value)
}

  return (
    <div class="container">
  <div class="row">
    <div class="col-sm-12 border rounded">
      <h1>Calorie Calculator</h1>
    </div>
    <div class="col-sm-7 border rounded">
    
    <CalcGrid/>
    
    </div>
    <div class="recipes col-sm-12 border rounded">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}></input>
        <button className="search-button" type="submit">Search</button>
      </form>
      {recipes.map(recipe=>(
      <Meal
      key={recipe.recipe.label}
      title={recipe.recipe.label}
      calories={recipe.recipe.calories}
      image={recipe.recipe.image}
      ingredients={recipe.recipe.ingredients}
      />
      ))}
      
    </div>
  </div>
</div>

  );
  
}

export default Calculator;
