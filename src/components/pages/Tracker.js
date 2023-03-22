import React from "react";
import { useState, useEffect } from "react";
import LineChart from "../sections/linechart/LineChart";
import "./tracker.css"

const currentWeightData = {
  weight: "",
  date: ""
};

const Tracker = () => {
  const [weightData, setWeightData] = useState(() => {
    const savedWeightData = localStorage.getItem("weightData");
    const initialValue = JSON.parse(savedWeightData);
    return initialValue || [];
  });

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

  const ChartData = JSON.parse(localStorage.getItem("weightData")) || [];

  const [newChartData, setChartData] = useState({
    labels: ChartData.map((data) => data.date),
    datasets: [
      {
        label: "Weight Journey",
        data: ChartData.map((data) => data.weight),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "blue",
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    currentWeightData.weight = weight;
    localStorage.setItem("weight", JSON.stringify(weight));
  }, [weight]);

  useEffect(() => {
    currentWeightData.date = date;
    localStorage.setItem("date", JSON.stringify(date));
  }, [date]);

  function removeData(index) {
    const weightDataArray = [...weightData];
    weightDataArray.splice(index, 1);
    localStorage.setItem("weightData", JSON.stringify(weightDataArray));
    setWeightData(weightDataArray);
  
    const newLabels = weightDataArray.map((data) => data.date);
    const newWeights = weightDataArray.map((data) => data.weight);
  
    setChartData((prevState) => ({
      ...prevState,
      labels: newLabels,
      datasets: [
        {
          ...prevState.datasets[0],
          data: newWeights,
        },
      ],
    }));
  }
  
  
  function submitData() {
    if (currentWeightData.date !== "" && currentWeightData.weight !== "") {
      const weightDataArray = JSON.parse(localStorage.getItem("weightData") || "[]");
      weightDataArray.push(currentWeightData);
      localStorage.setItem("weightData", JSON.stringify(weightDataArray));
      setWeightData(weightDataArray);
    }
  }

  return (
    <div className="App">
      <h1>Weight Tracker</h1>
      <form>
        <div className="weightInput">
          <label htmlFor="NewWeight">Weight:</label>
          <input
            id="NewWeight"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder=""
          />
        </div>
        <div className="dateInput">
          <label htmlFor="NewDate">Date</label>
          <input
            id="NewDate"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder=""
          />
        </div>
        <br />
        <button className="submitButton" onClick={submitData}>
          Submit
        </button>
      </form>
      <div className="lineChart" style={{ width: 700 }}>
        <LineChart chartData={newChartData} />
      </div>
      <table>
        <thead>
          <tr className="tableHeader">
            <th>Date</th>
            <th>Weight</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {weightData.map((data, index) => (
            <tr key={index} className="tableBody">
              <td>{data.date}</td>
              <td>{data.weight}</td>
              <td>
                <button onClick={() => removeData(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tracker
