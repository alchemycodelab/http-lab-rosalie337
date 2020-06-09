const net = require('net');

//established connection handler
const server = net.createServer(client => {
  console.log('Client connected!')
  //callback function is evoked
  
  //addEventListener('click', event => {})};
  client.on('data', data => {
  // a request was just sent
    console.log(data);
  });
});

server.listen(7890, () => {
  console.log('Application started!');
});