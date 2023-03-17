import React from "react";
import CalcGrid from "../CalcGrid";

function Calculator() {

  

  

  return (
    <div class="container">
  <div class="row">
    <div class="col-sm-12 border rounded">
      <h1>Calorie Calculator</h1>
    </div>
    <div class="col-sm-7 border rounded">
    
    <CalcGrid/>
    
    </div>
    <div class="col-sm-12 border rounded">
      <h4>Your diet:</h4>
    </div>
  </div>
</div>
  );
}

export default Calculator;
