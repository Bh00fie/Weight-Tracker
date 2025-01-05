import { Grid } from 'gridjs-react';
import React from "react";

const weightDataArray = JSON.parse(localStorage.getItem("weightData") || "[]");
const UserData = JSON.parse(localStorage.getItem("userData") || "[]");
let lastweight=0;
let lastuser=0;
let weight=0;
let height=0;
let age=0;
let gender="";
let exercise="";

if(weightDataArray.length >= 1 && UserData.length >= 1 ){
  lastweight=weightDataArray.length-1;
  lastuser=UserData.length-1;
  weight=weightDataArray[lastweight].weight;
  height=UserData[lastuser].height;
  age=UserData[lastuser].age;
  gender=UserData[lastuser].gender;
  exercise=UserData[lastuser].exercise;
}

function CalcGrid() {

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
    weightloss=(bmr*1.2).toFixed();
    mildloss=(weightloss*0.88).toFixed();
    loss=(weightloss*0.76).toFixed();
    extremeloss=(weightloss*0.53).toFixed();
  }else if(exercise==="light-exercise"){
    weightloss=(bmr*1.375).toFixed();
    mildloss=(weightloss*0.9).toFixed();
    loss=(weightloss*0.79).toFixed();
    extremeloss=(weightloss*0.59).toFixed();
  }else if(exercise==="moderate-exercise"){
    weightloss=(bmr*1.55).toFixed();
    mildloss=(weightloss*0.9).toFixed();
    loss=(weightloss*0.81).toFixed();
    extremeloss=(weightloss*0.61).toFixed();
  }else if(exercise==="heavy-exercise"){
    weightloss=(bmr*1.725).toFixed();
    mildloss=(weightloss*0.92).toFixed();
    loss=(weightloss*0.84).toFixed();
    extremeloss=(weightloss*0.67).toFixed();
  }
  
  const griddata= [
      ['0 Kg/Week', weightloss],
      ['0.25 Kg/Week', mildloss],
      ['0.5 Kg/Week', loss],
      ['1 Kg/Week', extremeloss]
    ]
  const style= {
      th: {
        color: 'orange',
        'border-bottom': '2px solid #ccc',
      },
    }
  return (
    <div className='caloriesTable'>
      <Grid
        data={griddata}
        style={style}
        columns={['Weight reduction', 'Daily Calories']}
      />
    </div>
  );
}

export default CalcGrid;
  

