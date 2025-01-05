import React,{useEffect, useState } from "react";
import CalcGrid from "../sections/CalcGrid/CalcGrid";
import MealList from "../sections/mealPlan/mealdata";

const currentUserData = {
  height:  "",
  age: "",
  gender: "",
  exercise: ""
}    

function Calculator() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);
  
  const [age, setAge] = useState(() => {
    const savedAge = localStorage.getItem("age");
    const initialValue = JSON.parse(savedAge);
    return initialValue || "";
  });
  const [height, setHeight] = useState(() => {
    const savedHeight = localStorage.getItem("height");
    const initialValue = JSON.parse(savedHeight);
    return initialValue || "";
  });
  const [gender, setGender] =  useState(() => {
    const savedGender = localStorage.getItem("gender");
    const initialValue = JSON.parse(savedGender);
    return initialValue || "";
  });
  const [exercise, setExercise] =  useState(() => {
    const savedExercise = localStorage.getItem("exercise");
    const initialValue = JSON.parse(savedExercise);
    return initialValue || "";
  });

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
  useEffect(() => {
    currentUserData.age = age;
    localStorage.setItem("age", JSON.stringify(age));
  }, [age]);
  
  useEffect(() => {
    currentUserData.height = height;
    localStorage.setItem("height", JSON.stringify(height));
  }, [height]);

  useEffect(() => {
    currentUserData.gender = gender;
    localStorage.setItem("gender", JSON.stringify(gender));
  }, [gender]);
  useEffect(() => {
    currentUserData.exercise = exercise;
    localStorage.setItem("exercise", JSON.stringify(exercise));
  }, [exercise]);

  function handleChange(e) {
    setCalories(e.target.value);
  }

  function submitData() {
 
    const userDataArray = JSON.parse(localStorage.getItem("userData") || "[]");
    userDataArray.push(currentUserData);
    localStorage.setItem("userData", JSON.stringify(userDataArray));
    
  }
  return (
    <div class="container">
      <div class="row">
        <div>
          <h1>Calorie Calculator</h1>
          <form id="calorieForm">
            <div className="heightInput">
              <label htmlFor="NewHeight">Height:</label>
              <input id="NewHeight"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder=""
              />
            </div>
            <div className="ageInput">
              <label htmlFor="NewAge">Age:</label>
              <input id="NewAge"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder=""
              />
            </div>
            <div className="genderInput">
              <label htmlFor="NewGender">Gender:</label>
              <select onChange={(e) => setGender(e.target.value)} id="NewGender"> 
                  <option value="male">---</option>          
                  <option value="male">Male</option>
                  <option value="female">Female</option>
              </select>
            </div>
            <div className="exerciseInput">
              <label htmlFor="NewExercise">Exercise amount:</label>
              <select onChange={(e) => setExercise(e.target.value)} id="NewExercise"> 
                  <option value="no-exercise">---</option>           
                  <option value="no-exercise">No exercise</option>
                  <option value="light-exercise">Light</option>
                  <option value="moderate-exercise">Moderate</option>
                  <option value="heavy-exercise">Heavy</option>
              </select>
            </div>
            <br></br>
            <button className="submitButton" onClick={submitData}>Submit</button>
          </form>
        </div>

        <CalcGrid/>

        <div class="recipes">
          <h1>Recipes Finder</h1>
          <section className="controls">
            <input
              type="number"
              placeholder="Calories Input"
              onChange={handleChange}
              id="caloriesInput"
            />
            <button id="getRecipesButton" onClick={getMealData}>Get recipes!</button>
          </section>
        {mealData && <MealList mealData={mealData} />}
      </div>
    </div>
  </div>
  );
}

export default Calculator;
