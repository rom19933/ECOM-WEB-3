require('dotenv').config();
function sendmail(u,p);
{
    console.log("sent Email to " + u);
}
sendEmail(process.env.USER_EMAIL,process.env.EMAIL_PASS);
const http=require('http');
const app=require('./app');
const port=3030;
const server=http.createServer(app,()=>{console.log("server started")});

server.listen(port);