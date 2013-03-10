
module.exports = [
	
	{
		path:/^.*\/notFound$/,
	  	resource:{
			controller:'index',
			action:'notfound',
			params:''
		}
	},
	{
		path:/^.*\/errorFound$/,
	  	resource:{
			controller:'index',
			action:'errorfound',
			params:''
		}
	},
	{
		path:/^\/([^\/]+)\/([^\/]+)\/?$/,
	  	resource:{
			controller:1,
			action:2,
			params:''
		}
	},
	{path:/^\/$/,
		resource:{
			controller:'index',
			action:'index',
			params:''
		}
	},
	{path:/^\/([^\/]+)\/?$/,
		resource:{
			controller:1,
			action:'index',
			params:''
		}
	},
	
];