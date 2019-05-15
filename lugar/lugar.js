const axios = require('axios');

const encodeURL = encodeURI(argv.direccion);

const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
    headers: { 'X-RapidAPI-Key': '795fbeb9e3msh14b9162b6209548p175f6ajsn37aa5aa2bc1e' }
});

instance.get()
    .then((result) => {
        console.log(result.data.Results[0]);
    }).catch((err) => {
        console.log('Error !!', err);
    })