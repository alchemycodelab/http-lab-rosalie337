const net = require('net');

//established connection handler
const server = net.createServer(client => {
  console.log('Client connected!')
  //callback function is evoked
  
  //addEventListener('click', event => {})};
  client.on('data', data => {
  // a request was just sent
  
    console.log(data.toString()); 
    //received data and convert to a string 
    
    const [ , path] = data.toString().split(' ');
    //if I got to '/' send an h1 with hello
    if(path ==='/') {
      const body = '<h1>Hello!<h1>';
    
      //res.send(body) constructed response below
      client.end(`HTTP/1.1 200 OK
    Date: Mon, 08 June 2020 23:40 GMT
    Content-Length: ${body.length}
    Context-Type: text/html
    
    ${body}`);
        //send a response the browser understands
      }

    //if I got to '/dogs' send json with dog
    else if(path ==='dogs') {
      const body = JSON.stringify({
        name: 'Spot',
        age: 5,
        weight: '20 lbs'
      });

      
      //res.json(body) constructed response below
      client.end(`HTTP/1.1 200 OK
      Date: Mon, 08 June 2020 23:40 GMT
      Content-Length: ${body.length}
      Context-Type: application/json
      
      ${body}`);
    }
      //send a response the browser understands
  });
});

server.listen(7890, () => {
  console.log('Application started!');
});