import logo from './logo.svg';
import './App.css';
import getDollarValue from './helper/cattodolar';
import React, { useEffect, useState } from "react"

const App = () => {
  const [cusd, setCusd] = useState()

  const round = (v) => {
    return Math.ceil(v / 10) * 10;
  }

  const calculateCusd = () => {
    fetch("https://api.bluelytics.com.ar/v2/latest")
      .then(response => {
        return response.json()
      })
      .then(data => {
        var busd = round(data.blue.value_sell - ((data.blue.value_sell * 10) / 100));
        setCusd(busd)
      })
  }

  useEffect(() => {
    calculateCusd()
  }, [])

  return (
    <div className='App'>
      <div>
        <h1>Cattodolar = {cusd}</h1>
      </div>
      <div>
        <p>SECUENCIA BIEN HIJO DE PUTA</p>
      </div>
    </div>
  );
}

export default App;
