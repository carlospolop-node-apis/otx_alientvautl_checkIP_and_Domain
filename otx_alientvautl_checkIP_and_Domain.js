const request = require('request');

var otx_apikey = "";

function checkIP(ip){
    var promise = new Promise(function(resolve, reject) {
        if (otx_apikey == "") reject(Error("Please set the OTX alientvault API key"));

        if (ip.indexOf(':') > -1){
            ip_type = "IPv6"
        }
        else{
            ip_type = "IPv4"
        }

        var url = 'https://otx.alienvault.com/api/v1/indicators/'+ip_type+'/'+ip+'/general';
        request({url: url}, function (error, response, body) {
            if (error) reject(Error("Error accessing otx.alienvault.com: "+error));
            if (body) resolve(JSON.parse(body));
        });
    });
    return promise;
}


function checkDomain(domain){
    var promise = new Promise(function(resolve, reject) {
        if (otx_apikey == "") reject(Error("Please set the OTX alientvault API key"));

        var url = 'https://otx.alienvault.com/api/v1/indicators/domain/'+domain+'/general';
        request({url: url}, function (error, response, body) {
            if (error) reject(Error("Error accessing otx.alienvault.com: "+error));
            if (body) resolve(JSON.parse(body));
        });
    });
    return promise;
}


exports.setApiKey = function(key){ otx_apikey = key; }
exports.checkIP = checkIP;
exports.checkDomain = checkDomain;