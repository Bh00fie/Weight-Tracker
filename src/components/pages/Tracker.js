import React from "react";
import { useState, useEffect } from "react";
import { UserData } from "../sections/linechart/Data";
import LineChart from "../sections/linechart/LineChart";
import "./tracker.css"

    
      

const Tracker = () => {

  const [weight, setWeight] = useState(() => {
    const savedWeight = localStorage.getItem("weight");
    const initialValue = JSON.parse(savedWeight);
    return initialValue || "";
  });
  const [date, setDate] = useState(() => {
    const savedDate = localStorage.getItem("date");
    const initialValue = JSON.parse(savedDate);
    return initialValue || "";
  });
  const [userData, setUserData ] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem("weight", JSON.stringify(weight));
  }, [weight]);
  useEffect(() => {
    // storing input name
    localStorage.setItem("date", JSON.stringify(date));
  }, [date]);
  

  return (
    <div className="App">
      <h1>Weight Tracker</h1>

      <form>
      <div className="weightInput">
        <label htmlFor="NewWeight">Weight:</label>
        <input id="NewWeight"
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        placeholder=""
        />
        {/* <input type="submit" value="Submit"></input> */}
      </div>
      <div className="dateInput">
        <label htmlFor="NewDate">Date</label>
        <input id="NewDate"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder=""
        />
      </div>
      <br></br>
      <button className="submitButton">Submit</button>
    </form>

      <div className="lineChart" style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div>
    </div>

  );
};

// {/* <label htmlFor={'upload-button'}>
//     <div className={classes.chooseFile}>
//         <SomeIconElement style={{marginRight: 10}}/> Upload File
//     </div>
// </label> */}

export default Tracker;
