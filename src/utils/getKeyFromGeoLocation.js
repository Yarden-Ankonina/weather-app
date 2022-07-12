import fetchApi from "./fetchApi";

export const getKeyFromGeoLocation= async ()=>{
    const getPosition = ()=>{
        if (navigator.geolocation) {
            return new Promise((res, rej) => {
                navigator.geolocation.getCurrentPosition(res, rej);
            });
        }
    }
    const coords = await getPosition().then(val =>{return val.coords})
    const url = `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${process.env.REACT_APP_API_KEY}&q=${coords.latitude}%2C${coords.longitude}`
    return fetchApi(url);
}
