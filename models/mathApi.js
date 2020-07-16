const axios = require('axios');

async function mathApi (number) {
    return await axios.get(`https://numbersapi.p.rapidapi.com/${number}/math`, {
        params: {
            fragment: 'true',
            json: 'true'
        },
        headers: {
            "x-rapidapi-host": "numbersapi.p.rapidapi.com",
            "x-rapidapi-key": "0d32c2c122msh238ec181926f3e0p1722b1jsnff8f2e7348b3",
        }
    }).then(response => {
        return response.data.text
    })
}

module.exports= mathApi;
