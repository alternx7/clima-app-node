const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUlr = encodeURI(dir);

    const instance = axios.create({
        //baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUlr}`,
        //headers: { 'x-rapidapi-key': 'eb72b3129fmsh0fa00f4ec77cf0bp1bbd51jsnbc0897ed1df0' }
        //baseURL: `http://api.openweathermap.org/data/2.5/weather?q=${encodedUlr}&APPID=61600d612e365f3e3929661e9ea54d84`

        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodedUlr}`,
        headers: { 'x-rapidapi-key': 'eb72b3129fmsh0fa00f4ec77cf0bp1bbd51jsnbc0897ed1df0' }
    });

    const resp = await instance.get();

    if (resp.data.cod !== 200) {
        throw new Error(`No hay resultados para ${ dir }`);

    }

    const data = resp.data;
    const direccion = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}