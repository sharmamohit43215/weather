import React,{useState} from 'react'
import Button from './Button';
export default function TodayWeather(props) {
    const {city,States} = props;
    const [showForecast,setShowForecast] = useState(false);
   
    const nextFiveDaysWeather=(forecast)=>{
        return forecast.map((item,key)=>(
         
                <ul>
                    <li key={key}> <span>Date:</span> {item.Date}</li>
                    <li key={key}> <span>Time:</span> {item.Time}</li>
                    <li key={key}> <span>Temperature:</span> {item.temprature}</li>
                </ul>
            
        ));
    }
    const findNextFiveDaysWeather=()=>{
       return States && Object.keys(States).map((state,stateKey)=>(
              States[state].cities.map((currentCity,currentKey)=>{
                  if(city===currentCity.name){
                      return nextFiveDaysWeather(currentCity.forecast)
                  }
              })
        ));
    }
    return (
        <div>
            {
                States && Object.keys(States).map((state,stateKey)=>{
                  return  States[state].cities.map((currentCity,currentKey)=>{
                        if(city===currentCity.name){
                            return (
                                <ul>
                                    <li key={currentKey}> <span>Current Date:</span> {States[state].currentdate}</li>
                                    <li key={currentKey}> <span>Current Time:</span> {States[state].time}</li>
                                </ul>
                            )
                        }
                    })
                })
            }
            
            <Button onClick={()=>setShowForecast(true)} text="Next Five Days Weather"/>
            {showForecast && <div>{findNextFiveDaysWeather()}</div>}
        </div>
    )
}
