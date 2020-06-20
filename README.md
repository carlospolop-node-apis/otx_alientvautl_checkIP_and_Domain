# otx_alientvautl_checkIP_and_Domain

Check in Node for malicious IPs and domains in [OTX Alientvault](https://otx.alienvault.com)

## Install
`npm install otx_alientvautl_checkip_and_domain`

## How to use

```javascript
const otxalient = require('otx_alientvautl_checkip_and_domain');
otxalient.setApiKey("<API KEY>");

// A promise will be returned
ip = "8.8.8.8";
otxalient.checkIP(ip).then(function(result){ 
        console.log(result);
    }, function(err) {
        console.log(err);
});

domain = "bandroxoma.com"
otxalient.checkDomain(domain).then(function(result){ 
        console.log(result);
    }, function(err) {
        console.log(err);
});
```
