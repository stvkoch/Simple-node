/*
exports.dispatch = function( resource ){
	var controller = require( resource.module+'/'+resource.controller );
	controller.call( resource.action, resource.request, resource.response );
}
*/
var ProductController = require('Simple/Controller/Base');

ProductController.actions = {
	index: function(request, response, resource){
		response.writeHead(200);
		response.end("ProductController Index\n" + resource.params.join(' - ') );
	},
	show: function(request, response){
		response.writeHead(200);
		response.end("ProductController Show\n");
	},
	list: function(request, response){
		response.writeHead(200);
		response.end("ProductController List\n");
	}
};

module.exports = ProductController;


