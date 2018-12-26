var fs = require("fs");
var path = require("path");
var util = require("util");

var file_path = path.resolve("./web/config.json");

module.exports = function(req,res){
	global.bodyParser = require('body-parser');
	global.multer = require('multer');
	
	//bodyParser.json()(req,res,function(){}); // for parsing application/json
	//bodyParser.urlencoded({ extended: true })(req,res,function(){}); // for parsing application/x-www-form-urlencoded
	//multer({dest:"./web/tmp"}).any()(req,res,function(){}); //for parsing multiform
	
	var json;
	if(!fs.existsSync(file_path)) fs.writeFileSync(file_path, JSON.stringify({last:0, full:0, line:0.3333}));
	var json = (function(p, de){try{return JSON.parse(fs.readFileSync(p))}catch(e){fs.unlinkSync(p);fs.writeFileSync(p, JSON.stringify(de));return de;}})(file_path, {last:0, full:0, line:0.3333});
	
	json.last = parseFloat(req.body.last) != NaN ? parseFloat(req.body.last) : (typeof json.last == "number" ? json.last : 0);
	json.full = parseFloat(req.body.full) != NaN ? parseFloat(req.body.full) : (typeof json.full == "number" ? json.full : 0);
	json.line = parseFloat(req.body.line) != NaN ? parseFloat(req.body.line) : (typeof json.line == "number" ? json.line : 0.3333);
	json.zoom = typeof req.body.zoom == "string" ? JSON.parse(req.body.zoom) : (typeof json.zoom == "object" ? json.zoom : [0,0,0]);
	
	fs.writeFileSync(file_path, JSON.stringify(json));
	
	res.send("");
}