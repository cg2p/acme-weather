import { resolve } from "uri-js";

export default function handler(request, response) {

    // http://api.weatherapi.com/v1/current.json?key=9137c37de7274c02b7b35912211308&q=London&aqi=no
    
    const apikey = `9137c37de7274c02b7b35912211308`;
    // const apikey = process.env.WEATHER_KEY;
    if (apikey == null) {
        response.status(401);
    }
    
    const loc = request.body.location;
    console.log("get weather for location ", loc);

    const settings = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Origin': 'http://localhost:3000/'
        }
    };

    return new Promise((resolve, reject) => {
        const fetchResponse = fetch('http://api.weatherapi.com/v1/current.json?' + new URLSearchParams({
            key: apikey,
            q: loc,
            }),
            settings
        );

        fetchResponse.then(res => {
            return res.json();
        })
        .then((data) => {
            if(data.hasOwnProperty('error')) {
                console.log(data.error.code);
                response.status(400).json({ error: data.error.message });
                resolve();
            }
            
           const obj = {
                temp : data.current.temp_c,
                condition: data.current.condition.text
            };    
            console.log(obj);
            
            response.status(200).send(obj);
            resolve();
        })
        .catch(error => {
            reject();
        });
    });

}
