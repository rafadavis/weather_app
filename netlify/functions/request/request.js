const fetch = require('node-fetch');

const key = process.env.SECRET_API_KEY;

exports.handler = async function(event, context) {
   try { 
       const zip = event.queryStringParameters || "11377";
       const uri = `http://api.openweathermap.org/data/2.5/weather?zip=${zip}`;

       const response = await fetch(`{uri}&appid=${key}`);
       if (!response.ok) {
           return { statusCode: response.status, body: response.statusText };
       }

       const data = await response.json();
       return {
           statusCode: 200,
           headers: { "content-type": "application/json" },
           body: JSON.stringify(data)
       };
   } catch (err) {
       console.log("invocation error:", err);
       return {
           statusCode: 500,
           body: err.message
       };
   }
};

