import { useState } from "react";
import axios from 'axios';
import Form from "./components/Form";
import Table from "./components/Table";
import './style.css';
import AnimatedFons from "./components/AnimatedFons";
import AnimatedFonsP2 from "./components/AnimatedFonsP2";

function App() {

  const [data, setData] = useState({});

  const getWeather = (city) => {
    const KEY = 'f4833cf990dc92ef43563c9b00da2a78';
    const APIlink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`;
    axios(APIlink)
      .then(({ data }) => {
        console.log(data);
        setData(data);
      })
      .catch(() => {
        setData({});
      });
  }

  return (
    <div className="wrapper" >

      <div className="item">
        <AnimatedFons />
      </div>

      <div className="item">
        <Form getWeather={getWeather} />

        <Table data={data} />
      </div>

      <div className="item">
        <AnimatedFonsP2 />
      </div>

    </div >
  );
}

export default App;
