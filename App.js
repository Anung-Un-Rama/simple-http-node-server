fs.writeFile('hello-world.txt','Hello to this great world', 'utf8');

const http = require('http');
const port = 3000;
const fs = require('fs');

var write = fs.writeFileSync('hello-world.txt','Hello to this great world', 'utf8');
var read = fs.readFileSync('/hello-world.txt');


const requestHandler = (write, read) => {
  response.end(`Handling a request on port ${port}`)
};


const server = http.createServer(requestHandler);


server.listen(port, (err) => {
  if (err) {
    return console.log(`You have an error:  ${err}`);
  }

  console.log(`server is listening on ${port}`);
});
