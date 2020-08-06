
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-03-02',
  maxNetworkRetries: 200,
});


exports.handler = async (event, context, callback) => { //= async (event) =>

  
console.log("Start of function");

stripe.customers.list(
  {limit: 3},
  function(err, customers) {
    return {
            statusCode: 200,
            headers: {"Access-Control-Allow-Origin":"*"},
            body: "Hello "
    };
  }  
);
  
 
}; 
  
/*

//const data = JSON.parse(event.body);
//console.log(event.body);
//const cart = JSON.parse(data);
//const len = cart.length;

var email = "vinayak.patel@grynn.in";
  
const https = require('https');

var vurl = "https://api.stripe.com/v1/search?query=vinayak.patel@grynn.in&prefix=false"; // encodeURI('https://api.stripe.com/v1/search?query='+ encodeURIComponent("vinayak.patel@grynn.in") + '&prefix=false');

//var vurl = encodeURI('https://api.stripe.com/v1/search?query='+ encodeURIComponent(vinayak.patel@grynn.in) + '&prefix=false');

var vBearer = 'Bearer ' + process.env.STRIPE_SECRET_KEY ;

console.log(vurl, vBearer);

const options = {
    hostname: vurl ,
    port: 443,
    method: 'GET',
    headers: {
        Authorization: vBearer
    }
}

https.get(options, (response) => {

    var result = ''
    
    response.on('data', function (chunk) {
        result += chunk;
    });

    response.on('end', function () {
        console.log("https: ", result);
      
      
      
        return {
            statusCode: 200,
            headers: {"Access-Control-Allow-Origin":"*"},
            body: result,
        };
      
      
      
    });

});
  
  
  
  
  
  
  
  

const request = require('request');

const roptions = {
  url: vurl ,
  headers: {
    'Authorization': vBearer
  }
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    //const info = JSON.parse(body);
    console.log("Requests: ", body, response, error);
  }
  
  
  
}

request.get(roptions, callback);

*/
  
