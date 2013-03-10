/*
module.exports = [
	{path:/sadasd/,
	  resource:{
		controller:'$1',
		action:'$2',
		params:'$3'
		}
	},
	{path:/sadasd/,
	  resource:{
		controller:'$1',
		action:'$2',
		params:'$3'
		}
	}
];

router = require('Simple/Router/Base');
router.routes = require( 'Config/routes' );
var resource = router.translate( request.uri );

var dispatch = require('Simple/Controller/Dispatch');
dispatch.byResource( resource );

*/
module.exports = {
	routes:[],
	defaultResource:{
		module:'Frontend',
		controller:'index',
		action:'index',
		format:'html',
		params:{}
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
		var _routes = this.routes;
		var _continue = false;
		for( var ix in _routes){

			var _regex = _routes[ix].path;

			var resourceRoute = _routes[ix].resource;
			var matches = uri.match(_regex);

			if( matches != null){

				if( typeof resourceRoute._continue != 'undefined' ){
					_continue = resourceRoute._continue;
					delete resourceRoute._continue;
				}
				for( var resourceType in _routes[ix].resource ){
					if(typeof _routes[ix].resource[resourceType] === 'number'){
						_resource[resourceType] = matches[_routes[ix].resource[resourceType]];
					}else if(_routes[ix].resource[resourceType].indexOf('$')!= -1){
						_resource[resourceType] = uri.replace(_regex,_routes[ix].resource[resourceType]);
					}else{
						_resource[resourceType] = _routes[ix].resource[resourceType];
					}
				}
				if( !_continue )
					break;
			}
		}

		return _resource;
	}
};

