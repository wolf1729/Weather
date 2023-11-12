//http://api.weatherapi.com/v1/current.json?key=c7bd9290554b423d8f3145317232008&q=London&aqi=yes
export async function apicallwithCordinates(lat, long){
    try{
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=c7bd9290554b423d8f3145317232008&q=${lat},${long}&aqi=yes`);
        const data = response.json();
        return data;
    }catch(error){
        console.error(error)
    }
}

export async function apicallwithName(name){
    try{
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=c7bd9290554b423d8f3145317232008&q=${name}&aqi=yes`);
        const data = response.json();
        return data;
    }catch(error){
        console.error(error)
    }
}