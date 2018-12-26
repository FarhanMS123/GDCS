module.exports = function(){
	var ocv = require("opencv4nodejs");
	var path = require("path");
	var fs = require("fs");
	
	var path_here = path.dirname(module.filename);
	
	//training
	var train_data = JSON.parse(fs.readFileSync(path.join(path_here,"./train.json")));
	
	//var meth = new ocv.TrackerMedianFlow();
	
	//var parm = new ocv.TrackerMILParams();
	//var meth = new ocv.TrackerMIL(parm);
	
	//var meth = new ocv.TrackerTLD();
	
	var meth = new ocv.MultiTracker();
	meth.init = meth.addMEDIANFLOW;
	
	for(i=0; i<train_data.length;i++){
		console.log(`train data ${JSON.stringify(train_data[i])}`);
		meth.init(ocv.imread(path.join(path_here,train_data[i].link)), new ocv.Rect(train_data[i].box[0], train_data[i].box[1], train_data[i].box[2], train_data[i].box[3]));
	}
	
	global.ocv = ocv;
	global.path_here = path_here;
	global.train_data = train_data;
	global.meth = meth;
	
	global.MT = function(meth, mat){
		var mat = mat.copy();
		var detect = [];
		
		var loop = true;
		while(loop){
			var rect = meth.update(mat);
			if(rect){
				detect.push(rect);
				mat.drawFillConvexPoly([new ocv.Point(rect.x, rect.y), new ocv.Point(rect.x + rect.width, rect.y), new ocv.Point(rect.x + rect.width, rect.y + rect.height), new ocv.Point(rect.x, rect.y + rect.height), new ocv.Point(rect.x, rect.y)]);
			}else{
				loop=false
			}
		}
		
		return {mat:mat, detect:detect};
	}
}