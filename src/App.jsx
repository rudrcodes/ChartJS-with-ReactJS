import { useState } from "react";
import { BarChart } from "./components/BarChart";
import styled from "styled-components";
import "./App.css";

const Cont = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & div {
    margin: 5px;
  }
`;
function App() {
  const [data, setData] = useState([]);
  const [easy, setEasy] = useState(null);
  const [medium, setMedium] = useState(null);
  const [hard, setHard] = useState(null);

  return (
    <div className="App">
      <h2>
        <a href="https://www.linkedin.com/in/rudransh-aggarwal-33653a1b6/">
          Rudransh Aggarwal's
        </a>
        Assignment
      </h2>
      <h3>Enter value between 0-100 only</h3>
      <BarChart data={data} />
      <Cont>
        <div>
          <label>Easy : </label>
          <input
            type="number"
            placeholder="Enter easy value"
            value={easy || ""}
            onChange={(e) => {
              if (e.target.value > 100) return;
              setEasy(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Medium : </label>
          <input
            type="number"
            placeholder="Enter easy value"
            value={medium || ""}
            onChange={(e) => {
              if (e.target.value > 100) return;

              setMedium(e.target.value);
            }}
          />
          <br />
        </div>
        <div>
          <label>Hard : </label>
          <input
            type="number"
            placeholder="Enter easy value"
            value={hard || ""}
            onChange={(e) => {
              if (e.target.value > 100) return;

              setHard(e.target.value);
            }}
          />
        </div>

        <button
          onClick={() => {
            const newArr = [easy, medium, hard];
            setData(newArr);
          }}
        >
          Refresh
        </button>
      </Cont>
    </div>
  );
}

export default App;
