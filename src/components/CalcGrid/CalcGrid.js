import { Grid } from 'gridjs-react';
import React from "react";



function CalcGrid() {
    
      const weight=80;
      const height=180;
      const age=32;
      const gender="male";
      const exercise="heavy-exercise"
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
      }else if(exercise==="heavy-exercise"){
        weightloss=bmr*1.725;
        mildloss=weightloss*0.92;
        loss=weightloss*0.84;
        extremeloss=weightloss*0.67;
      }
    const data= [
        ['0kg/week (maintain)', weightloss.toFixed()],
        ['0.25kg/week', mildloss.toFixed()],
        ['0.5kg/week', loss.toFixed()],
        ['1kg/week', extremeloss.toFixed()]
      ]
    const style= {
        container: {
        
            
            'border-radius': '5px',
            
          },
        table: {
        
          'border-bottom': '2px solid #ccc',
          'width': '100%',
          
        },
        th: {
          'background-color': 'rgba(0, 0, 0, 0.1)',
          
          color: '#000',
          
          'border-bottom': '2px solid #ccc',
          
        },
        
        
      }
    return (
      <div>
              
        <Grid
          data={data}
          style={style}
          columns={['Weight reduction', 'Daily Calories']}
          
        />
        
      </div>
    );
  }

export default CalcGrid;
