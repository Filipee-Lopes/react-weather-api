import axios from "axios";


const keyApi = 'd87217871465379050f52d66973c2a5c';


export const api = {

    getWeather: async (location: string)=>{
        try{
            let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(location)}&appid=${keyApi}&units=metric&lang=pt_br`);
            return response.data;
        }catch(err){
            console.log(err)
        }
    },
}