const net = require('net');

const server = net.createServer(client => {
  console.log('Client is connected!')
});

server.listen(7890, () => {
  console.log('Application started!');
});