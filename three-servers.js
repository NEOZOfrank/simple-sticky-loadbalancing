const http = require('http');
const hostname = '127.0.0.1';

const server1 = http.createServer((req, res) => {
  res.statusCode = 200;

  if(req.headers.cookie != null){
  	 res.end('3001 with session');
  	 return;	
  }

  res.writeHead(200, {
    'Set-Cookie': 'JSESSIONID=10; Domain=localhost; HttpOnly; Path=/;',
    'Content-Type': 'text/plain'
  });
  res.end('3001');
});

server1.listen(3001, hostname, () => {
  console.log(`s1 running`);
});

const server2 = http.createServer((req, res) => {
  res.statusCode = 200;

  if(req.headers.cookie != null){
  	 res.end('3002 with session');
  	 return;	
  }

  res.writeHead(200, {
    'Set-Cookie': 'JSESSIONID=20; Domain=localhost; HttpOnly; Path=/',
    'Content-Type': 'text/plain'
  });
  res.end('3002');
});

server2.listen(3002, hostname, () => {
  console.log(`s2 running`);
});


const server3 = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if(req.headers.cookie != null){
  	 res.end('3003 with session');
  	 return;	
  }

  res.writeHead(200, {
    'Set-Cookie': 'JSESSIONID=30; Domain=localhost; HttpOnly; Path=/',
    'Content-Type': 'text/plain'
  });
  res.end('3003');
});

server3.listen(3003, hostname, () => {
  console.log(`s3 running`);
});