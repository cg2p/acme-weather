export default function handler(request, response) {

    const loc = request.body.location;
    console.log("loc", loc);
    
    response.status(200).json({ location: loc });
}
