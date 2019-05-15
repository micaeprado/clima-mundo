const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima('40.419998', '-3.700000')
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {

    try {
        const coord = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coord.lat, coord.lng);

        return `El clima de la ciudad ${coord.direccion} es de ${temp}`;

    } catch (error) {
        return `No se pudo determinar el clima de ${coord.direccion}`
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);