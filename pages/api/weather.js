export default function handler(request, response) {

    // http://api.weatherapi.com/v1/current.json?key=9137c37de7274c02b7b35912211308&q=London&aqi=no
    const apikey = `9137c37de7274c02b7b35912211308`;
    
    const loc = request.body.location;
    console.log("loc", loc);

    const settings = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Origin': 'http://localhost:3000/'
        }
    };

    try {
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
           // const obj = data.map((entry) => (
           //     entry.location
           // );
            
           console.log(data);
           const obj = {
                temp : data.current.temp_c,
                condition: data.current.condition.text
            };    
            console.log(obj);
            
            response.status(200).send(obj);
        });
    
    } catch (e) {
        return e;
    }  
//        const data = fetchResponse.json();
  //      console.log('data ', data);
 
     //   response.status(200).json({ temp_c: data.temp_c, condition: data.condition.text });

      /*
    try {
        const fetchResponse = fetch('http://api.weatherapi.com/v1/current.json?' + new URLSearchParams({
                key: apikey,
                q: loc,
            }),
            settings
        );
        const data = fetchResponse.json();
        console.log('data ', data);
 
        response.status(200).json({ temp_c: data.temp_c, condition: data.condition.text });
    } catch (e) {
        return e;
    }    
    */
}
