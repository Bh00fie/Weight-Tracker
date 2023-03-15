import React from "react";

function Calculator() {

  const weight=80;
  const height=180;
  const age=32;
  const gender="male";
  const exercise="high-exercise"
  let bmr=0;
  let weightloss=0;
  let mildloss=0;
  let loss=0;
  let extremeloss=0;
  // bmr calculation
  if(gender==="male"){
    bmr=(9.99*weight)+(6.25*height)-(4.92*age)+5;
  }else if(gender==="female"){
    bmr=(9.99*weight)+(6.25*height)-(4.92*age)-161;
  }
  //weight loss calculator
  if(exercise==="no-exercise"){
    weightloss=bmr*1.2;
    mildloss=weightloss*0.88;
    loss=weightloss*0.76;
    extremeloss=weightloss*0.53;
  }else if(exercise==="light-exercise"){
    weightloss=bmr*1.375;
    mildloss=weightloss*0.9;
    loss=weightloss*0.79;
    extremeloss=weightloss*0.59;
  }else if(exercise==="moderate-exercise"){
    weightloss=bmr*1.55;
    mildloss=weightloss*0.9;
    loss=weightloss*0.81;
    extremeloss=weightloss*0.61;
  }else if(exercise==="high-exercise"){
    weightloss=bmr*1.725;
    mildloss=weightloss*0.92;
    loss=weightloss*0.84;
    extremeloss=weightloss*0.67;
  }


  

  return (
    <div class="container">
  <div class="row">
    <div class="col-sm-12 border">
      <h1>Calorie Calculator</h1>
    </div>
    <div class="col-sm-12 border">
    <p> To maintain: {weightloss} calories </p>
    <p> To lose 0.25 kg/week you have to consume: {mildloss} calories</p>
    <p>To lose 0.5 kg/week you have to consume: {loss} calories</p>
    <p> To lose 1 kg/week you have to consume: {extremeloss} calories</p>
    </div>
    <div class="col-sm-12 border">
      <h4>Your diet:</h4>
    </div>
  </div>
</div>
  );
}

export default Calculator;
