/*

*/
module.exports = {
		routes:[],
		defaultResource: {
			module:'Frontend',
			controller:'index',
			action:'index',
			format:'html',
			params:null
		},
		setRoutes:function(routes){
			this.routes=routes;
		},
		setResource:function(resource){
			this.defaultResource=resource;
		},
		getResourceByUri: function(uri){
			return this.translate(uri);
		},
		translate:function(uri){

			var _resource = this.defaultResource;

			var _continue = false;

			for( var ix in this.routes){

				var _regex = this.routes[ix].path;

				var matches = uri.match(_regex);
				var resourceFromRoute = this.routes[ix].resource;

				if( matches !== null){
					if( typeof resourceFromRoute._continue != 'undefined' ){
						_continue = resourceFromRoute._continue;
						//delete resourceFromRoute._continue;
					}

					for( var resourceType in resourceFromRoute ){
						if(typeof resourceFromRoute[resourceType] === 'number'){
							_resource[resourceType] = matches[resourceFromRoute[resourceType]];
						}else if(typeof resourceFromRoute[resourceType] == 'string' && resourceFromRoute[resourceType].indexOf('$')!= -1){
							_resource[resourceType] = uri.replace(_regex,resourceFromRoute[resourceType]);
						}else{
							_resource[resourceType] = resourceFromRoute[resourceType];
						}
					}
					if( !_continue )
						break;
				}
			}

			if(typeof _resource.params == 'string') _resource.params = _resource.params.split('/');

			return _resource;
		}
	};


