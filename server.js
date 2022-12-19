const http=require('http');

const app=require('./app');
const port=3030;

const server=http.createServer(app,()=>{console.log("server started")});

server.listen(port);