module.exports={
	middlewaresBefore:[],
	middlewaresAfter:[],
	middleware:{
		addBefore:function( callback ){
			this.middlewaresBefore.push(callback);
		},
		addAfter:function( callback ){
			this.middlewaresAfter.push(callback);
		}
	}.bind(this),
	_hasAction:function( resource ){
		return ( typeof this.actions[resource.action] == 'function' );
	},
	_callAction: function( request, response, resource ){
		return this.actions[resource.action](request, response, resource);
	}
}