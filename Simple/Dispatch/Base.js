/*
var dispatch = require( 'Simple/Controller/Dispatch' );
dispatch.resource( resource );
*/

module.exports = {
	resource: function( request, response, resource ){

			process.nextTick( function(){
				try{
					console.log( '-> Dispatch to: ' + resource.module+'/Controller/'+resource.controller )
					var controller = require( resource.module+'/Controller/'+resource.controller );

					if(controller.has(resource)){
						controller.call( resource, request, response );
					}else{
						throw {
							message: "Simple not found method on '"+resource.module+"' module",
							name: "Not found",
							code:'MODULE_NOT_FOUND'
						};
					}
				}catch( err ){
					if(err.code=='MODULE_NOT_FOUND'){

						response.writeHead(301,
							{Location: request.pathname + '/notFound'}
						);
					}else{
						response.writeHead(301,
							{Location: request.pathname + '/errorFound'}
						);
					}
					response.end();
				}
			});

	}
};