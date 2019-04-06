let request = require('request');
require('../config/config');

function googleReq(address){

    let URL ='https://maps.googleapis.com/maps/api/geocode/json?address='+address+'&key='+googleAPI;

    return new Promise(function(resolve, reject){
        request(URL, function (error, response, body) {
            // in addition to parsing the value, deal with possible errors
            if(error){
                reject(error);
            }
            resolve(body);
        });
    });
}



module.exports = {googleReq};

