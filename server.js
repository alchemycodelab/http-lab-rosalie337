const net = require('net');

const server = net.createServer(() => {

});

server.listen(7890, () => {
  console.log('Application started!');
});