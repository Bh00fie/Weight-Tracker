import React,{ useState } from "react";
import CalcGrid from "../sections/CalcGrid/CalcGrid";
import MealList from "../sections/mealPlan/mealdata";

function Calculator() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=b0e25ff39f57465fa8c406e7361ae022&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  function handleChange(e) {
    setCalories(e.target.value);
  }

  return (
    <div class="container">
  <div class="row">
    <div class="col-sm-12 border rounded">
      <h1>Calorie Calculator</h1>
    </div>
    <div class="col-sm-12 p-0 border rounded">
    
    <CalcGrid/>
    
    </div>
    <div class="recipes col-sm-12 border rounded">
    <div className="App">
      <section className="controls">
        {/* <input
          type="number"
          placeholder="Input calories for your desired weight loss"
          onChange={handleChange}
        /> */}
        <label>
          Pick your diet calories:
          <select onChange={handleChange}>            
            <option value="1500">1500</option>
            <option value="2000">2000</option>
            <option value="3000">3000</option>
            <option value="4000">4000</option>
          </select>
        </label>
        <button onClick={getMealData}>Get Daily Meal Plan</button>
      </section>
      {mealData && <MealList mealData={mealData} />}
    </div>
      
             
      </div>
    </div>
  </div>

  );
  
}

export default Calculator;
