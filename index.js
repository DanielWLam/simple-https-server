const https = require('https');
const fs = require('fs');
const Router = require('./router.js');


const options = {
	key: fs.readFileSync('./key/server-key.pem'),
	ca: [fs.readFileSync('./key/ca-cert.pem')],
	cert: fs.readFileSync('./key/server-cert.pem')
}

https.createServer(options, (req, res) => {
	const router = new Router(req, res)
	router.get('/getList', (req, res) => {
		res.end('jkjlkjlkjl')
	})
	
	res.writeHead(200);
	res.end('hello world\n HTTPS')
}).listen(8000, () => {
	console.log('Listening on port: ', 8000)
});

