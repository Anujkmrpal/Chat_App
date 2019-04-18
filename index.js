var express=require('express');
var app=express();
// var http=require('http').Server(app);
var server = app.listen(3000);
var io = require('socket.io').listen(server);
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
});
io.on('connection',function(socket){
    console.log("user connected");
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
        io.emit('chat message', msg);
      });
})
// http.listen(port,()=>{
//     console.log("4000 listening");
// })
