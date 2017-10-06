var http = require('http');
var exec = require('child_process').exec;

http.createServer((req, res) => {
	exec("fuser -k -n tcp 3000");
	exec("cd ~/shopping-friday-api && npm run start:production");
}).listen(3001);
