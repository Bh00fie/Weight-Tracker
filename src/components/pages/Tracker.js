import React from "react";
import { UserData } from "..sections/linechart/Data.js";
import LineChart from "..section/linechart/LineChart.js";
import { useState } from "react";

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
    <div>
      <h1>Weight Tracker</h1>
    </div>
  );
}


export default Tracker;
