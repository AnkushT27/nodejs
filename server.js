const http  = require('http');
const app = require('./app');

app.set('port',process.env.PORT || 3000)
const server = http.createServer(app);



//dynamically injected by node 
server.listen(process.env.PORT || 3000);

console.log('HERE IS')