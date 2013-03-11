/*
exports.dispatch = function( resource ){
	var controller = require( resource.module+'/'+resource.controller );
	controller.call( resource.action, resource.request, resource.response );
}
*/
var IndexController = require('Simple/Controller/Base');

IndexController.actions = {
	index: function(request, response, resource){
		response.writeHead(200);
		response.end("Index\n" + resource.params.join(' - ') );
	},
	show: function(request, response){
		response.writeHead(200);
		response.end("Show\n");
	},
	list: function(request, response){
		response.writeHead(200);
		response.end("List\n");
	},
	notfound: function(request, response){
		response.writeHead(401);
		response.end("NOT FOUND\n");
	},
	errorfound: function(request, response){
		response.writeHead(501);
		response.end("Error\n");
	}
};

module.exports = IndexController;


