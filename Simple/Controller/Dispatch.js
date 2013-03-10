/*
var dispatch = require( 'Simple/Controller/Dispatch' );
dispatch.resource( resource );
*/


module.exports = {
	resource: function( resource, request, response ){

			process.nextTick( function(){
				try{
					var controller = require(resource.module+'/'+resource.controller );

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
}