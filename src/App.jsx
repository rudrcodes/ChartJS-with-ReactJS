import { useState } from "react";
import { BarChart } from "./components/BarChart";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [easy, setEasy] = useState(null);
  const [medium, setMedium] = useState(null);
  const [hard, setHard] = useState(null);

  return (
    <div className="App">
      <h2>Rudransh Aggarwal's Assignment</h2>
      <BarChart data={data} />
      <label>Easy : </label>
      <input
        type="number"
        placeholder="Enter easy value"
        value={easy || ""}
        // value={data[0] || 0}
        onChange={(e) => {
          if (e.target.value > 100) return;
          setEasy(e.target.value);
        }}
      />
      {/* <button
        onClick={() => {
          data[0] = easy;
          // setData()
          console.log(data[0]);
        }}
      >
        Easy
      </button> */}
      <br />
      <label>Medium : </label>
      <input
        type="number"
        placeholder="Enter easy value"
        value={medium || ""}
        // value={data[1] || 0}
        onChange={(e) => {
          if (e.target.value > 100) return;

          setMedium(e.target.value);
        }}
      />
      <br />

      {/* <button
        onClick={() => {
          data[1] = medium;
          console.log(data[1]);
        }}
      >
        Medium
      </button> */}
      <label>Easy : </label>
      <input
        type="number"
        placeholder="Enter easy value"
        value={hard || ""}
        // value={data[2] || 0}
        onChange={(e) => {
          if (e.target.value > 100) return;

          setHard(e.target.value);
        }}
      />
      <br />
      <br />
      <button
        onClick={() => {
          const newArr = [easy, medium, hard];
          setData(newArr);
          console.log(data[2]);
        }}
      >
        Refresh
      </button>
    </div>
  );
}

export default App;
