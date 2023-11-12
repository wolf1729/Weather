import { apicallwithCordinates, apicallwithName } from "../services/APIcalls";
import { useState, useEffect } from 'react';
import '../style/DataComp.css';

// eslint-disable-next-line react/prop-types
export function DataComponentForCoordinates({lat, long}){
    const[tempf, setTempf] = useState('none')
    const[tempc, setTempc] = useState('none')
    const[condition, setCondition] = useState('none')
    const[humidity, setHumidity] = useState('none')
    const[wind, setWind] = useState('none')

    useEffect(() => {
        const fetchDataFunction = async () => {
            try{
                const fetchData = await apicallwithCordinates(lat, long);
                setTempf(fetchData.current.temp_f);
                setTempc(fetchData.current.temp_c);
                setCondition(fetchData.current.condition.text);
                setHumidity(fetchData.current.humidity);
                setWind(fetchData.current.wind_mph);
            }catch(error){
                console.error(error)
            }
          };

        fetchDataFunction();
    },[lat, long])
    
    return(
        <>
        <div className="cont">
            <p>Tempreture in F : {tempf}</p>
            <p>Tempreture in C : {tempc}</p>
            <p>Condition : {condition}</p>
            <p>Humidity : {humidity}</p>
            <p>Wind Speed in m/h : {wind}</p>
        </div>
        </>
    )
}

// eslint-disable-next-line react/prop-types
export function DataComponentForNames({name}){
    const[tempf, setTempf] = useState('none')
    const[tempc, setTempc] = useState('none')
    const[condition, setCondition] = useState('none')
    const[humidity, setHumidity] = useState('none')
    const[wind, setWind] = useState('none')

    useEffect(() => {
        const fetchDataFunction = async () => {
            try{
                const fetchData = await apicallwithName(name);
                setTempf(fetchData.current.temp_f);
                setTempc(fetchData.current.temp_c);
                setCondition(fetchData.current.condition.text);
                setHumidity(fetchData.current.humidity);
                setWind(fetchData.current.wind_mph);
            }catch(error){
                console.error(error)
            }
          };

        fetchDataFunction();
    },[name])
    
    return(
        <>
        <div className='cont'>
            <p>Tempreture in F : {tempf}</p>
            <p>Tempreture in C : {tempc}</p>
            <p>Condition : {condition}</p>
            <p>Humidity : {humidity}</p>
            <p>Wind Speed in m/h : {wind}</p>
        </div>
        </>
    )
}
