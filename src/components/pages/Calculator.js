import React,{useEffect, useState } from "react";
import CalcGrid from "../sections/CalcGrid/CalcGrid";
import MealList from "../sections/mealPlan/mealdata";
import "./calculator.css";

const currentUserData = {
  height:  "",
  age: "",
  gender: "",
  exercise: ""
}    




function Calculator() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);
  const [userData, setUserData] = useState(() => {
    const savedUserData = localStorage.getItem("userData");
    const initialValue = JSON.parse(savedUserData);
    return initialValue || "";
  });
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
    if(currentUserData.age !== "" || currentUserData.height !== "" )
    return;
    
    const userDataArray = JSON.parse(localStorage.getItem("userData") || "[]");
    userDataArray.push(currentUserData);
    localStorage.setItem("userData", JSON.stringify(userDataArray));
    
  }
  return (
    <div class="container">
  <div class="row">
    <div class="col-sm-12 border rounded">
    <form>
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
        <label htmlFor="NewAge">Age</label>
        <input id="NewAge"
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder=""
        />
      </div>

      <div className="genderInput">
        <label htmlFor="NewGender">Gender</label>
        {/* <input id="NewGender"
        type="text"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder=""
        /> */}
        <select onChange={(e) => setGender(e.target.value)} id="NewGender"> 
            <option value="male">---</option>          
            <option value="male">male</option>
            <option value="female">female</option>
        </select>

      </div>
      <div className="exerciseInput">
        <label htmlFor="NewExercise">Exercise amount</label>
        {/* <input id="NewGender"
        type="text"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder=""
        /> */}
        <select onChange={(e) => setExercise(e.target.value)} id="NewExercise"> 
            <option value="no-exercise">---</option>           
            <option value="no-exercise">No exercise</option>
            <option value="light-exercise">Light exercise</option>
            <option value="moderate-exercise">Moderate exercise</option>
            <option value="heavy-exercise">Heavy exercise</option>
        </select>
      </div>
      <br></br>
      <button className="submitButton" onClick={submitData}>Submit</button>
    </form>
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
