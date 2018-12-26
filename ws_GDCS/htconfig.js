/*
	htconfig.js
	
	Is a function to reroute file that exist or not.
*/

module.exports = function(req,res,next,type){
	//Standard Module
	global.path=require("path");
	global.url = require("url");
	
	//Main Module
	
	//Included Function
	
	//Main Declaration
	var p = path.join(s_exp.get("web"), decodeURIComponent(req.path))
	if(type=="ws") p=path.join(s_exp.get("web"), decodeURIComponent(url.parse(req.url).pathname));
	return p;
}