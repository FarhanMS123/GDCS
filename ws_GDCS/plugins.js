/*
	PLUGINS
	Divided by 3 functions
	begin, it will run after declaring express and respond function
	middle, it will run after set variable for express and before declaring route
	last, it will run after execute listen function
	
	Plugins are putted in lib directory and required by require function
*/

module.exports.begin = function(){
	console.log("Plugin Execute : begin");
}
module.exports.middle = function(){
	//Standard Modules
	global.path = require("path");
	global.fs = require("fs");
	global.util = require("util");
	
	//Included Functions
	global.bodyParser = require('body-parser');
	global.multer = require('multer');
	
	//Main Modules
	
	//Declaration Functions
	//WebRequest
	s_exp.use(bodyParser.json()); // for parsing application/json
	s_exp.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
	s_exp.use(multer({dest:"./web/tmp"}).any()); //for parsing multiform
	
	console.log("Plugin Execute : middle");
}
module.exports.last = function(){
	//Standard Modules
	global.path = require("path");
	global.fs = require("fs");
	global.util = require("util");
	
	//Included Functions
	
	//Main Modules
	
	//Declaration Functions
	//Web Socket
	global.ws = require("ws");
	
	global.wss = new ws.Server({server:s_exp.get("applisten")});
	
	wss.on("error", function(err){
		console.log("WebSocket Error");
		console.log(err);
	});

	wss.on("connection", function(ws, req){
		ws.req = req;
		req.ws = ws;
		
		removeModule(require.resolve("./htconfig.js"), true);
		var fullpath = require("./htconfig.js")(req,ws,(function(){}),"ws");
		fullpath = path.resolve(typeof fullpath=="string" ? fullpath : path.join(s_exp.get("web"), decodeURIComponent(url.parse(req.url).pathname)));
		
		console.log(`Request [WebScoket] ${req.url}`);
		console.log(`Respond [WebScoket] ${fullpath}`);
		
		if(fs.existsSync(fullpath)){
			var pathstat = fs.statSync(fullpath);
			if(pathstat.isFile()){
				if(path.extname(fullpath) == ".ws"){
					removeModule(require.resolve(fullpath), true);
					require(fullpath)(ws,req);
				}else{
					ws.send("Error 415 : Unsupported media type");
					ws.close();
				}
			}else{
				ws.send("Error 415 : Unsupported media type");
				ws.close();
			}
		}else{
			ws.send("Error 404 : Not found");
			ws.close();
		}
		//ws.send(util.inspect(req));
	});
	
	//GDCS
	require("./lib/GDCS.js")();
	
	console.log("Plugin Execute : last");
}