const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//recordar que una función async siempre devuelve una promesa

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(19.08, -102.35)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        return `El clima de ${direccion} es ${await clima.getClima(coords.lat, coords.lng)}`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);