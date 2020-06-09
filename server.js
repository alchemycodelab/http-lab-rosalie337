const net = require('net');

//established connection handler
const server = net.createServer(client => {
  console.log('Client connected!')
//callback function is evoked
});

server.listen(7890, () => {
  console.log('Application started!');
});