/*
run server:
node server.js 8080 true #if run like cluster
node server.js 8080 false #if run single instance
*/
var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;
var port = parseInt(process.argv[2], 10);


if (cluster.isMaster && process.argv[3] ) {
	// Fork workers.
	for (var i = 0; i < numCPUs; i++) {
		cluster.fork();
	}

	cluster.on('exit', function(worker, code, signal) {
		console.log('worker ' + worker.process.pid + ' died');
	});
	cluster.on( 'online', function(worker, code, signal) {
		console.log('worker ' + worker.process.pid + ' online');
	});

} else {
	// Workers can share any TCP connection
	// In this case its a HTTP server
	http.createServer(function(request, response) {

		var requestParsed = require('url').parse( request.url, true );
		var router = require('Simple/Router/Base');
		router.routes = require( 'Frontend/Routes/routes' );
		router.defaultResource = require('Simple/Resource/Base');
		var resource = router.getResourceByUri(requestParsed.pathname);
		var dispatch = require('Simple/Dispatch/Base');
		dispatch.resource(resource, requestParsed, response);

	}).listen(port);
}