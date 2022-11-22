import { Children, ReactNode } from 'react';
import styles from './Card.module.css';

export type Props = {
    name: string,
    country: string,
    temp: number,
    weather: string,
    wind: number,
    deg: number | string
    
}

export const Card = ({name, country,  temp, weather, wind, deg}: Props)=>{
   return (
    <div className={styles.cardArea}>
        
        <h1>{name}, {country}</h1>
        <div className={styles.cardInfo}>
            <div>
                <p>Temperatura</p>
                <h2>{temp}<sup>°C</sup></h2>
            </div>
            <div>
            <p>Vento</p>
                 <h2>{wind} Km/h</h2> 
            </div>
        </div>

        <div className={styles.cardInfo}>
            <div className={styles.weather}>
                 <img src={weather} width={120} alt="" /> 
            </div>
            <div className={styles.degArea}>
                <div className={styles.degItem}>
                    <div style={{transform: `rotate(${deg as number -90}deg)`}} className={styles.degInfo}></div>
                </div>
            </div>
        </div>
    </div>
   )
}