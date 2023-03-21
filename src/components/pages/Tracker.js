import React from "react";
import { useState } from "react";
import { UserData } from "../sections/Linechart/Data";
import LineChart from "../sections/Linechart/LineChart";
import "./tracker.css"

function Tracker() {

  const [userData, setUserData] = useState({
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
  
  return (
    <div className="App">
      <h1>Weight Tracker</h1>
      <div className="lineChart" style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div>
    </div>

  );
}


export default Tracker;
