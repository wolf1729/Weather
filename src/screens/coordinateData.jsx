import { useState } from "react";
import InputTab from "../components/locationInputName";
import { DataComponentForCoordinates } from "../components/dataComponents";
import '../style/coorPage.css';

function CoordinateData() {
    const[lat, setLat] = useState()
    const[long, setLong] = useState()
    
    const handleLat = (e) => {
        setLat(e.target.value);
    }

    const handleLong = (e) => {
        setLong(e.target.value);
    }
  
    return (
        <>
        <div className="back">
            <div className="dataContainer">
                <div className="data1">
                    <div><p id="label">Latitude</p></div>
                    <div><InputTab value={lat} handleChange={handleLat}/></div>
                </div>
                <div className="data2">
                    <p id="label">Longitude</p>
                    <InputTab value={long} handleChange={handleLong}/>
                </div>
            </div>
            <div>
                <DataComponentForCoordinates lat={lat} long={long}/>
            </div>
        </div>
        </>
    )
}

export default CoordinateData;