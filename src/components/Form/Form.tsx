import styles from './Form.module.css';
import { ChangeEvent } from 'react';

type Props ={
    handleClick: () => void,
    fn: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Form = ({handleClick, fn}: Props)=>{
    return(
    <div className={styles.card}>
        <h1>Clima</h1>
        <input onChange={fn} placeholder='Digite a cidade...' type="text" />
        <button onClick={handleClick} type="submit">Buscar</button>
    </div>
    )
}