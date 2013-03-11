# Simple Components on Node.js




Simple Components helps build their bundled applications simply. Unpretentious way we want to help you save time and less development efforts.

 - Components of library living on Simple folder.
 - Frontend is the folder where the living files of controller.(you can change location setting dispatch.path)
 - Routes is the folder where you save object routes.

## How works

	// In this case its a HTTP server
	http.createServer(function(request, response) {

		var requestParsed = require('url').parse( request.url, true );
		var router = require('Simple/Router/Base');
		router.routes = require( 'Routes/routes' );//inject routes on router..see Routes/routes.js

		//main concept are resource that represent module/method/outputFormat on node.js
		var resource = router.getResourceByUri(requestParsed.pathname);

		//this dispatch resource on system
		var dispatch = require('Simple/Controller/Dispatch');
		dispatch.resource(resource, requestParsed, response);

	}).listen(port);




Truly functional, but work in progress. New components are added constantly

Any question, please send message to:
- Steven Koch <stvkoch@gmail.com>