
exports.has = function( resource ){
	return ( typeof this.actions[resource.action] == 'function' );
};

exports.call= function( resource, request, response ){
	return this.actions[resource.action](request, response, resource);
};