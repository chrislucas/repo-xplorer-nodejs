var request = require('request');

request('https://www.npmjs.com/package/request', (err, req, body) => {
	console.log(body);
});