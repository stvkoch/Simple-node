var proxyServer = require('http-proxy');
var port = parseInt(process.argv[2], 10);
var servers = [
  {
    host: "localhost",
    port: 3000
  },
  {
    host: "localhost",
    port: 3001
  }
];

//create proxy
proxyServer.createServer(function (req, res, proxy) {
  var target = servers.shift();

  proxy.proxyRequest(req, res, target);
  servers.push(target);
}).listen(port);