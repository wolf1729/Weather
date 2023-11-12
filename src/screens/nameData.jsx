import { useState } from "react";
import InputTab from "../components/locationInputName";
import { DataComponentForNames } from "../components/dataComponents";
import '../style/namePage.css';

function NameData() {
    const[name, setName] = useState()
    
    const handleName = (e) => {
        setName(e.target.value);
    }
  
    return (
        <>
        <div className="back">
            <div className="inputData">
                <p>Name</p>
                <InputTab value={name} handleChange={handleName}/>
            </div>
            <div>
                <DataComponentForNames name={name}/>
            </div>
        </div>
        </>
    )
}

export default NameData;