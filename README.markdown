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
		router.routes = require( 'Frontend/Routes/routes' );
		router.defaultResource = require('Simple/Resource/Base');

		router.resourceByRequest(requestParsed, response, function( request, response, resource ){
			var dispatch = require('Simple/Dispatch/Base');
			dispatch.resource(request, response, resource);
		});


	}).listen(port);

## Routes

Routes are nested objects that represents paths e resources

Basic routes are (Routes/routes.js):


	module.exports = [

		//STATIC MATCH notfound page and errorPage
		{
			path:/^.*\/notFound$/,
			resource:{
				controller:'index',
				action:'notfound'
			}
		},
		{
			path:/^.*\/errorFound$/,
			resource:{
				controller:'index',
				action:'errorfound'
			}
		},

		//index common pattern ---- match first!
		{
			path:/^\/$/,
			resource:{
				controller:'index',
				action:'index'
			}
		},
		//controller/action/params[0]/params[1]/params[2]...
		{
			path:/^\/([^\/]+)\/([^\/]+)\/?(.*)$/,
			resource:{
				controller:1,
				action:2,
				params:3
				//,_continue:true //if you have personal pattern you need passed common patterns until find default pattern
			}
		},
		{
			path:/^\/([^\/]+)\/?$/,
			resource:{
				controller:1,
				action:'index'
				//,_continue:true //if you have personal pattern you need passed common patterns until find default pattern
			}
		},
		//--------------------------------------------------

		//(NOTE: _continue:true are disabled on above common patter, the loop match cannot pass this item, because already finded pattern on common pattern. uncomment _continue:true if you like create alias or personal patterns)
		//--------------------------------------------------
		//after match default pattern, rename to personal pattern
		{
			path:/^\/home.*/,
			resource:{
				controller:'index'
			}
		}

	];





## Run example

This code is really useful.

 Frontend folder contain you own routes and server, you can add your View and Helper-Model layer

 
 ### Install

 	git clone git@github.com:stvkoch/Simple-node.git yourSimpleApp
 	cd yourSimpleApp
 	#run single server
 	node Frontend/Server/server.js 3000

 	#run cluster mode
 	node Frontend/Server/server.js 3000 true



 	open browser
 	http://localhost:3000/home/index/a/b
 	http://localhost:3000/home/show
 	http://localhost:3000/index/index









Truly functional, but work in progress. New components are added constantly

Any question, please send message to:
- Steven Koch <stvkoch@gmail.com>


[https://github.com/stvkoch/Simple-node/wiki]( Wiki on Github/stvkoch/Simple-node/wiki )
