import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import WeatherCards from './components/WeatherCards'
import Loading from './components/Loading'

function App() {
  const [coords, setCoords] = useState()
  const [weather, setweather] = useState()
  const [temperature, setTemperature] = useState()


  useEffect (() => {
    const success = pos =>{
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
     
      setCoords(obj);
  }
  navigator.geolocation.getCurrentPosition(success)
  }, [])

  console.log(coords);

  useEffect(() => {
    if (coords){
    const APIKEY = '3f7291956718ad405bfe69dc84d039c9'
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`
  axios.get(URL)
  .then(res => {
    const celsius = (res.data.main.temp - 273.15).toFixed(0)
    const farenheit = (celsius * 9 / 5 + 32).toFixed(0)
    setTemperature({celsius, farenheit})
    setweather(res.data) 
  })
  .catch(err => console.log(err)
)
  
  }
  }, [coords]) 
  
  return (
    <div className="App">
      {
        weather ?
     <WeatherCards weather= {weather} temperature={temperature}/>
    :
    <Loading/>
    }
    </div>
  )
}

export default App
