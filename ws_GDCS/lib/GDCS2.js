/*
	Karya Tulis Ilmiah Rekayasa Teknologi
	Garbage Discharge Count System
	Karya Program : Farhan Muhammad Sabran
	
	Bahasa	: NodeJS
	Modul	: express, ws, opencv4nodejs
	
	Rute 	:
		/					--> (route) /index.html
		/index.html			--> (file) ./index.html
		/video 				--> (route) /video/index.html
		/video/index.html	--> (file) ./video/index.html
		/video/*.mp4		--> (file) ./video/index.html
		/img.ws				--> (handled) (file) ./img.ws
		/ctrl.ws			--> (file) ./ctrl.ws
		/dt.ws				--> (handled) (file) ./dt.ws
		
	Algorithm 	:
		1. MSERDetector	detectRegions			
		
*/

module.exports = function(){
	try{
		global.ocv = require("opencv4nodejs");
		global.gm = require("gm").subClass({imageMagick: true});
		global.ffmpeg = require("fluent-ffmpeg");
		
		function buffer2stream(b){
			var str = new require("stream").Duplex();
			str.push(b);
			str.push(null);
			return str;
		}
		
		global.cam = new ocv.VideoCapture(0);
		
		setInterval(function(){
			if(!fs.existsSync("./web/config.json")) fs.writeFileSync("./web/config.json", JSON.stringify({last:0, full:0, line:0.3333, zoom:[0,0,0]}));
			var opt = (function(p, de){try{return JSON.parse(fs.readFileSync(p))}catch(e){fs.unlinkSync(p);fs.writeFileSync(p, JSON.stringify(de));return de}})
					("./web/config.json", {last:0, full:0, line:0.3333, zoom:[0,0,0]});
			if(opt.last==undefined) opt.last = 0;
			if(opt.full==undefined) opt.full = 0;
			if(opt.line==undefined) opt.line = 0.3333;
			if(opt.zoom==undefined) opt.zoom = [0,0,0]; //optical, x, y
			
			var _cam = cam.read();
			
			gm(ocv.imencode('.jpg', _cam)).crop(_cam.sizes[1] - (_cam.sizes[1] * opt.zoom[0]), _cam.sizes[0] - (_cam.sizes[0] * opt.zoom[0]), _cam.sizes[1] * opt.zoom[1], _cam.sizes[0] * opt.zoom[2]).toBuffer(function(e,b){
				_cam = ocv.imdecode(b).resize(new ocv.Size(_cam.sizes[1], _cam.sizes[0])).resize(_cam.rows, _cam.cols);
				
				var frm = _cam;
				
				frm[0] = frm[1] == 0 ? frm2 : frm[1];
				frm[1] = frm2;
				
				var dt = dt_mser.bboxes;
				
				var nid = Math.round(10000 * Math.random());
				//frm2.drawLine(new ocv.Point(0, frm2.sizes[0] - (frm2.sizes[0]*opt.line)), new ocv.Point(frm2.sizes[1], frm2.sizes[0] - (frm2.sizes[0]*opt.line)), new ocv.Vec(0,255,0), 5)
				var det = [];
				for(var i in dt){
					var c = new ocv.Vec(Math.round(255 * Math.random()), Math.round(255 * Math.random()), Math.round(255 * Math.random()));
					frm2.drawRectangle(dt[i], c)
				}
				
				var json;
				if(!fs.existsSync("./web/config.json")) fs.writeFileSync("./web/config.json", JSON.stringify({last:0, full:0, line:0.3333}));
				var json = (function(p, de){try{return JSON.parse(fs.readFileSync(p))}catch(e){fs.unlinkSync(p);fs.writeFileSync(p, JSON.stringify(de));return de;}})("./web/config.json", {last:0, full:0, line:0.3333, zoom:[0,0,0]});
				
				if(json.last==undefined) json.last = 0;
				if(json.full==undefined) json.full = 0;
				if(opt.line==undefined) opt.line = 0.3333;
				if(opt.zoom==undefined) opt.zoom = [0,0,0]; //optical, x, y
				
				var co = det.length - json.last;
				json.full += co < 0 ? 0 : co;
				json.last = det.length;
				fs.writeFileSync("./web/config.json", JSON.stringify(json));
				
				frm2.putText(`full : ${json.full}`, new ocv.Point(30,30), 0, 1, new ocv.Vec(0,0,0));
				frm2.putText(`full : ${json.full}`, new ocv.Point(30,60), 0, 1, new ocv.Vec(255,255,255));
				
				global._frm = frm2;
				
				wss.clients.forEach(function(ws){
					if(ws.req.url == "/img.ws"){
						var b64 = ocv.imencode('.jpg', frm2).toString('base64');
						if(ws.readyState==1) ws.send(b64);
					}
					if(ws.req.url == "/dt.ws"){
						if(ws.readyState==1) ws.send(JSON.stringify(json));
					}
				});
			});
		},1000);
		
		/*function writeVid(){
			// year_month_date_hour_minutes_second_ms_time.mp4
			var date = new Date();
			var file_name = path.resolve(`./web/video/${date.getYear()+1900}_${date.getMonth()+1}_${date.getDate()}_${date.getHours()}_${date.getMinutes()}_${date.getSeconds()}_${date.getMilliseconds()}_${date.getTime()}.avi`);
			if(fs.existsSync(file_name)) fs.unlinkSync(file_name);
			global.save_file = new ocv.VideoWriter(file_name, ocv.VideoWriter.fourcc("MPV4"), 4, new ocv.Size(global._frm.sizes[0], global._frm.sizes[1]));
			global._wrtVid_timer = setInterval(function(){
				save_file.write(global._frm);
				if(date.getHours() != new Date().getHours()){
					clearInterval(global._wrtVid_timer);
					save_file.release();
					writeVid();
				}
			}, 100);
			console.log("saving video to " + file_name);
		}*/
		function writeVid(){
			// year_month_date_hour_minutes_second_ms_time.mp4
			var date = new Date();
			global.file_name = path.resolve(`./web/video/${date.getYear()+1900}_${date.getMonth()+1}_${date.getDate()}_${date.getHours()}_${date.getMinutes()}_${date.getSeconds()}_${date.getMilliseconds()}_${date.getTime()}.avi`);
			if(fs.existsSync(file_name)) fs.unlinkSync(file_name);
			ffmpeg(file_name).output(file_name).run();
			global._wrtVid_timer = setInterval(function(){
				ffmpeg(file_name).input(buffer2stream(ocv.imencode('.jpg', global._frm))).output(global.file_name).run();
				if(date.getHours() != new Date().getHours()){
					clearInterval(global._wrtVid_timer);
					writeVid();
				}
			}, 1);
			console.log("saving video to " + file_name);
		}
		global._timerwait = setInterval(function(){
			if(global._frm != undefined){
				writeVid();
				clearInterval(global._timerwait);
			}
		},1);
		
		process.on("exit", function(){
			save_file.release();
			cam.release();
		});
		
		console.log("");
		console.log(new Date());
		console.log("  Rekayasa Teknologi Kelompok");
		console.log("       SMAN 85 Jakarta ");
		console.log("-------------------------------");
		console.log("Garbage Discharge Count System");
		console.log("NodeJS, OpenCV, MSER Algorithm");
		console.log("");
		console.log("[System Active]");
		console.log("");
	}catch(e){
		switch(true){
			case (e.message=="VideoCapture::New - failed to open capture"):
				console.log(`Error Handling : ${e.message}`);
				console.log(e);
				process.exit();
				break;
			default:
				console.log(`Error Unhandled : ${e.message}`);
				console.log(e);
		}
	}
}