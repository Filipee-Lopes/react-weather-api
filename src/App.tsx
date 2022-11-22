
import React, { useState } from 'react';
import styles from './App.module.css'
import {Card} from './components/Card/Card';




function App() {
  const keyApi = 'd87217871465379050f52d66973c2a5c';
  const [location, setLocation] = useState('');
  const [name, setName] = useState('');
  const [country, setCountry] = useState ('');
  const [temp, setTemp] = useState(0);
  const [weatherIcon, setWeatherIcon] = useState('');
  const [windSpeed, setWindSpeed] = useState(0);
  const [deg, setDeg] = useState('');
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);






  const getWeather = async ()=>{
    setLoading(true);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(location)}&appid=${keyApi}&units=metric&lang=pt_br`);
    const json = await response.json();
      if(json.cod === 200){
        console.log(json);
        setName(json.name);
        setCountry(json.sys.country);
        setTemp(json.main.temp);
        setWeatherIcon(`http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`);
        setWindSpeed(json.wind.speed);
        setDeg(json.wind.deg);

        handleShow(json);
        setLoading(false);
        setError(false)
      }else{
        setError(true);
        setLoading(false);
        setShow(false);
      } 





  }
   
  const handleLocation = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setLocation(e.target.value);
  }

  const handleShow = (json:string)=>{
    if(json){
      setShow(true)
    }
  }
  


  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Clima</h1>
        <input onChange={handleLocation} placeholder='Digite a cidade...' type="text" />
        <button onClick={getWeather} type="submit">Buscar</button>
      </div>
      <div className={styles.card}>
        {loading &&
          <div>Carregando...</div>
        }

        {error &&
          <div>Localização não encontrada</div>
        }


        {show &&
          <Card name={name} 
          country={country} 
          temp={temp}
          weather={weatherIcon}
          wind={windSpeed}
          deg={deg}
          ></Card>
        }

      </div>
    </div>
  )
}

export default App;
