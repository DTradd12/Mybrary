// const unirest = require('unirest');
//
// function mathApi (number) {
//     let request = unirest("GET", `https://numbersapi.p.rapidapi.com/${number}/math`)
//
//     request.query({
//         "fragment": "true",
//         "json": "true"
//     });
//
//     request.headers({
//         "x-rapidapi-host": "numbersapi.p.rapidapi.com",
//         "x-rapidapi-key": "0d32c2c122msh238ec181926f3e0p1722b1jsnff8f2e7348b3",
//         "useQueryString": true
//     });
//
//     return request.end(function (res) {
//         console.log(res.body);
//         return res.body
//     })
// }
//
// module.exports.mathApi = mathApi;