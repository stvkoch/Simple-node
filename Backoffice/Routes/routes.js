module.exports = [
	{
		path:/.*/,
		resource:{
			module:'Backoffice',
			_continue:true
		}
	},
	//STATIC MATCH
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
	{
		path:/^\/$/,
		resource:{
			controller:'index',
			action:'index'
		}
	},


	//--------------------------------------------------
	//Try find default pattern
	//controller/action/params[0]/params[1]/params[2]...
	{
		path:/^\/([^\/]+)\/([^\/]+)\/?(.*)$/,
		resource:{
			controller:1,
			action:2,
			params:3,
			_continue:true
		}
	},
	{
		path:/^\/([^\/]+)\/?$/,
		resource:{
			controller:1,
			action:'index',
			_continue:true
		}
	},
	//--------------------------------------------------

];