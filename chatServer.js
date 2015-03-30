var net = require('net');
var port = 3000;
var history = [];
var participant = [];

var server = net.createServer(function(socket) {
  console.log('client connected');
  socket.write('Welcome to chat!' + history);

  if (data.length > 0) {
        var history === push.data.toString().trim();
    }

  socket.on('data', function(data) {
    console.log(data.toString().trim());
  });


  	/* after 
  } else { // log and broadcast the message
                console.log((new Date()) + ' Received Message from '
                            + userName + ': ' + message.utf8Data);
                
                // we want to keep history of all sent messages
                var obj = {
                    time: (new Date()).getTime(),
                    text: htmlEntities(message.utf8Data),
                    author: userName,
                    color: userColor
                };
                */



  socket.on('end', function() {
    console.log('client disconnected');
  });
  if (history.length > 0) {
        connection.sendUTF(JSON.stringify( { type: 'history', data: history} ));
    }
});

server.listen(port, function() { 
  console.log('listening on port ' + port );
});


