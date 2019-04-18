var express=require('express');



var app=express();


var http=require('http').createServer(app);


var io = require('socket.io')(http);

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


http.listen(4000,()=>{
    console.log("4000 listening");
})
