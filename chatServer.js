var net = require('net');
var port = 3000;
var history = [];
var client = [];


var server = net.createServer(function(socket) {
  console.log('client connected');
  socket.write('Welcome to chat!' + history);

  	clients.push(socket);

   socket.on('end', function() {
    console.log('client disconnected');
 	if (data.length > 0) {
        JSON.stringify(var history === push.data.toString().trim());
    } else{
    	console.log('err');
    }
	});


   var history = JSON.stringify(history[i]);
       for (var i=0; i < clients.length; i++) {
			console.log(history[i]);
             };

  socket.on('data', function(data) {
    console.log(data.toString().trim());
  });


 function broadcast(message, sender) {
    clients.forEach(function (client) {
      if (client === sender) return;
      client.write(message);
    });

server.listen(port, function() { 
  console.log('listening on port ' + port );
});


