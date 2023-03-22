import React,{ useState } from "react";
import CalcGrid from "../CalcGrid/CalcGrid";
import MealList from "../mealPlan/mealdata";

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
        <input
          type="number"
          placeholder="Input calories for your desired weight loss"
          onChange={handleChange}
        />
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
