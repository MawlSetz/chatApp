



var net = require('net');

var client = net.Socket();
client.connect(3000, function() {
  console.log('Connected to Server');

  process.stdin.on("data", function(input) {
    var processedInput = input.toString().trim();
    client.write(processedInput);
  });

  client.on('data', function(data){
    console.log(data.toString().trim())
  });

  client.on('end', function() {
    console.log('disconnected from server');
    client.destroy()
  });
});