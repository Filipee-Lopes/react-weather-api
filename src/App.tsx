
import React, { useState } from 'react';
import styles from './App.module.css'
import { api } from './api';
import { Form } from './components/Form/Form';
import {Card} from './components/Card/Card';

function App() {

  const [name, setName] = useState('');
  const [country, setCountry] = useState ('');
  const [temp, setTemp] = useState(0);
  const [weatherIcon, setWeatherIcon] = useState('');
  const [windSpeed, setWindSpeed] = useState(0);
  const [deg, setDeg] = useState('');
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [location, setLocation] = useState('');

  const handleLocation = (e: React.ChangeEvent<HTMLInputElement>)=>{
      setLocation(e.target.value);
  }

  const getWeather = async ()=>{
    setLoading(true);
  
    let response = await api.getWeather(location);
    let json = await response;

 
      if(json && json.cod === 200 ){
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
   
 

  const handleShow = (json:string)=>{
    if(json){
      setShow(true)
    }
  }
  

  return (
    <div className={styles.container}>

      <Form fn={handleLocation}  handleClick={getWeather} />



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
          />
        }

      </div>
    </div>
  )
}

export default App;
