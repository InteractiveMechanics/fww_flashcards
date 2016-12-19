(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.bkgrtiles = function() {
	this.initialize(img.bkgrtiles);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3046,1050);


(lib.NewPatternSwatch2 = function() {
	this.initialize(img.NewPatternSwatch2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.NewPatternSwatch3 = function() {
	this.initialize(img.NewPatternSwatch3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.NewPatternSwatch6 = function() {
	this.initialize(img.NewPatternSwatch6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.NewPatternSwatch7 = function() {
	this.initialize(img.NewPatternSwatch7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.NewPatternSwatch7_1 = function() {
	this.initialize(img.NewPatternSwatch7_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.NewPatternSwatch8 = function() {
	this.initialize(img.NewPatternSwatch8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.USGS21IntricateSurface = function() {
	this.initialize(img.USGS21IntricateSurface);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,54);


(lib.USGS21IntricateSurface_1 = function() {
	this.initialize(img.USGS21IntricateSurface_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,54);


(lib.USGS22GravelBeach = function() {
	this.initialize(img.USGS22GravelBeach);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,72);


(lib.USGS22GravelBeach_1 = function() {
	this.initialize(img.USGS22GravelBeach_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,72);


(lib.texture = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.USGS21IntricateSurface_1, null, new cjs.Matrix2D(1,0,0,1,-49.5,8.3)).s().p("AtUDcQigh5hkiBQhYh0gShZQgQhXA4gTQA7gVB0BEQAmAXBkBCQBmA/BdAlQETBwE6g1QFZg8DNg8QDVg+CwhfQBGgmBlALQBkAJA3AxQA9A3glBMQgsBZixBgQhlA4jYBLQkGBZj/A0QkZA6jYAAQlLAAixiGg");
	this.shape.setTransform(122.3,35.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,244.5,70.8);


(lib.tail3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E6E6E6").ss(4,1,0,4).p("AFGlaQhiBLgFAsQgFArgmAqQgnArhDATQhEAUgzARQgzARAUB2QAUB3iAgUQiAgUgNCw");
	this.shape.setTransform(3.8,-1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E6E6E6").ss(4,1,0,4).p("AlFFbQBKhqAqgzQAqg0Atg/QAtg/A8gMQA6gLATg+QATg/AmgrQAngqA+gOQA+gOAuhh");
	this.shape_1.setTransform(3.8,-1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#E6E6E6").ss(4,1,0,4).p("AFFlaQAFB2h2gPQh3gPgnAqQgmAqAeBqQAdBohCAIQhCAHhvAHQhuAGAsB8QAsB8iHAj");
	this.shape_2.setTransform(3.8,-1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.7,-38.3,69.1,73.4);


(lib.tail2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E6E6E6").ss(4,1,0,4).p("ADJlKQBBArAQAqQAUA2g/ArQgyAihtAcQgkAKg9AAQhEABgdAFQhpAUgnCQQgQA8gMCx");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E6E6E6").ss(4,1,0,4).p("AjzFLQApgdAXgbQAcgrAlgiQANgSAQgSQA6hDAbgwQAFgJAFgLQAEgIAHgKQAGgQAQgLQAZgeAMgUQAEgIAFgHQAVgqAbgZQAQgOAOgOQAighATgdQAFgKAHgNQAKgeACgl");
	this.shape_1.setTransform(-4.3,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#E6E6E6").ss(4,1,0,4).p("AD0lOQhsAwgaARQgzAhgfA8QgQAeARBEQAKAlATBAQAFAWARAsQAQAqADAVQALBHhSAyQhbA3hAAGQgnADhNgK");
	this.shape_2.setTransform(-4.3,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.7,-35.1,61.5,70.2);


(lib.tail1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E6E6E6").ss(4,1,0,4).p("AEoD2QgzA8hAAPQhLASgghFQgzhuAmiaQAXhaACgNQAHgzgTgfQg2hYh0gcQgjgIhCgHQhFgIgdgG");
	this.shape.setTransform(0,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E6E6E6").ss(4,1,0,4).p("AkpkOQAFAVAkAXQALAIALAJQAXAPAUAOQArAZAsAhQAhAZAfAYQAWASASAZQATASAJAiQAfA8AvA3QAOASARAaQAPAaAVAUQATATAYAGQA1AhAdgX");
	this.shape_1.setTransform(-0.2,-1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#E6E6E6").ss(4,1,0,4).p("AE0D4QgLgRg9h8QgghBglgKQhmgbiGABQg0ABgZgFQglgGgdgXQhGg3gTg9QgRg2Aagy");
	this.shape_2.setTransform(-1.3,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#E6E6E6").ss(4,1,0,4).p("AkGjyQAQASAOAUQAdAYAOAMQAiAbAtAsQAWAVAYASQAEADAEADQAOAOAMALQAFABAAAJQAEAFACAIQAZAiBEBBQAGAFAGAFQAgAdAmArQAKALALAKQA8A6AagS");
	this.shape_3.setTransform(3.2,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.5,-34.1,63.1,70.3);


(lib.planktontexture_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.USGS21IntricateSurface_1, null, new cjs.Matrix2D(1,0,0,1,-38.8,6.2)).s().p("ApvNBQk3jrhVk7QhGkEBckDQA1iYAvgiQArgfApBBQAjA2AqCJQAXBJA3DRQAxC6B9BnQC5CaFDg4QFLg5CliUQCciMgFjQQgEjgg0iqQgwiahIhFQgigfgPgyQgQgwAJgsQAIgvAhgXQAmgZA8AMQA0ALBWBhQBcBoBNCSQDLF/guFtQgaDHjEC/Qi4CzkPBzQkUB1kBAFIgYABQkIAAinh+g");
	this.shape.setTransform(105,95.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210.1,191.8);


(lib.Path_52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#DB6752","#CA4D46","#A24339","#A81330"],[0,0.255,0.647,1],0,0,0,0,0,13.2).s().p("AARCkQgZgLgNgSQgMgRABghQAEglAAgQQABgbgEgOQgFgPgQgWQgSgagEgRQgFgZAQgZQAcgtAxAaQAtAXAOAuQAIAZgJA4QgJA2AHAXQAJAegFAeQgFAYgHAHQgJAJgNAAQgKAAgNgFg");
	this.shape.setTransform(10.6,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,15.3,33.8);


(lib.Path_51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.USGS22GravelBeach, null, new cjs.Matrix2D(1,0,0,1,-57.3,19.4)).s().p("AARCkQgZgLgNgSQgMgRABghQAEglAAgQQABgbgEgOQgFgPgQgWQgSgagEgRQgFgZAQgZQAcgtAxAaQAtAXAOAuQAIAZgJA4QgJA2AHAXQAJAegFAeQgFAYgHAHQgJAJgNAAQgKAAgNgFg");
	this.shape.setTransform(10.6,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,15.3,33.8);


(lib.Path_50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],3.6,8.3,-3.5,-8.5).s().p("Ag5B0QgTAAgZgYQgagaAAgXQACggBDg+QBCg9AggDQAigDAgAeQAhAfgSAbQgeAqgwAtQg+A7glAAIgBAAg");
	this.shape.setTransform(15.8,14.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,25.5,23.3);


(lib.Path_49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],4.1,8.4,-3,-8.4).s().p("AhHB1QgRgBgigvQgjgwABgXQABgeBngqQBagmArgEQAggCAcAyQAcA0gTAbQgUAdhPAmQhPAngqAAIgBAAg");
	this.shape.setTransform(18.7,14.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,31.5,23.4);


(lib.Path_48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],10.1,5.7,-6.2,-6.3).s().p("Ag/CQQgtgpgRgdQgRgdBLhlQBChaAngdQAbgUAiAwQAgAtgBAqQgBAsgqBSQgtBbgoAXQgCABgEAAQgRAAgqglg");
	this.shape.setTransform(15.9,21.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,25.9,36.3);


(lib.Path_47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],4.1,8.4,-3,-8.4).s().p("AhHB1QgRgBgjgvQgigwAAgXQACgeBngqQBagmArgDQAggDAcAzQAcAzgUAbQgTAdhPAnQhNAmgrAAIgCAAg");
	this.shape.setTransform(18.7,14.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3.1,31.5,23.3);


(lib.Path_46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],5.4,8.1,-5.3,-11).s().p("AiABMQgmgzgCgZQgCgdA+gtQA4gqAlgHQAhgHBJAfQBNAgABAgQACA0hlA3QhVAwg6AFIgBAAQgRAAglgxg");
	this.shape.setTransform(19.9,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,33.9,25.1);


(lib.Path_45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],3.2,4.8,-3,-4.9).s().p("AglBAQgXgMgGgOQgIgTAagrQAZgqATgFQATgFAcAOQAeAPgFARQgHAcgRAfQgYApgXADIgEABQgLAAgTgKg");
	this.shape.setTransform(9.8,10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,13.8,14.8);


(lib.Path_44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],3.6,-2.3,-3.6,2.3).s().p("AgSAjQgggVgEgOQgEgPALgUQALgUAOAEQAWAHAWAPQAgAUACARQACAJgJAPQgKARgKADIgGABQgPAAgagSg");
	this.shape.setTransform(8.6,8.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,11.3,10.6);


(lib.Path_43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],4.7,8.5,-5,-6.4).s().p("AhrBQQgNgfAqhGQAphGAggIQAfgJAtAWQAuAXgHAdQgXBcgNAPQgNAPhAALQgbAEgUAAQgwAAgJgXg");
	this.shape.setTransform(14.1,13.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,22.2,20.6);


(lib.Path_42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],4.7,3.8,-4.5,-4).s().p("AgVBPQgagGgIgMQgMgSAPg1QAPg0ASgMQATgLAdAGQAgAHAAAUQAAAggLAlQgOAzgXALQgFADgIAAQgJAAgMgDg");
	this.shape.setTransform(9.1,11.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,12.3,16.4);


(lib.Path_41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],1,-4.9,-0.9,5).s().p("Ag1AtQgQgNgFgeQgFggAQgHQAbgLAkgEQAugGARASQAIAIAEAZQAEAZgHAMQgLASgyAFIgaABQgbAAgLgJg");
	this.shape.setTransform(10.6,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,15.3,10.9);


(lib.Path_40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],1.9,-5.6,-1.8,5.5).s().p("Ag1AwQgRgNgGgeQgHgfARgIQAcgNAkgFQAvgHASAQQAJAIAFAZQAFAZgHAMQgLASgzAIQgSACgOAAQgXAAgLgHg");
	this.shape.setTransform(10.9,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,15.9,11.1);


(lib.Path_39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],2.4,-7.3,-2.4,7.2).s().p("AhGA/QgWgRgIgoQgJgoAWgLQAkgQAwgHQA+gKAYAWQAMAKAGAgQAGAhgJARQgOAXhDAKQgYADgTAAQgeAAgOgJg");
	this.shape.setTransform(13.4,10.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,20.7,14.5);


(lib.Path_38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],5.2,-3.9,-5.5,4).s().p("AgaAwQg4gmgHgVQgIgYAPgbQARgcAWAJQAkAOAoAcQA1AkAGAaQADAOgNAVQgNAWgRADIgEABQgYAAgygkg");
	this.shape.setTransform(12.3,11.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,18.6,16.8);


(lib.Path_37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],5.4,6.5,-2,-5.3).s().p("AgYBJQgpgWABgaQABgVAigqQAhgsATgFQASgEAOASQANATgEATQgDANgFA4QgHA0gXADIgEAAQgQAAgegQg");
	this.shape.setTransform(9.5,11.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,13,17.8);


(lib.Path_36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],-5.3,-6.5,1.9,5.4).s().p("Ag3BJQgNgTAFgTQAEgpAEgbQAJg0AWgDQARgCAiATQAoAWgBAaQgBAVgjAqQgiArgUAFIgGABQgOAAgLgQg");
	this.shape.setTransform(9.6,11.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,13.2,17.8);


(lib.Path_35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],-3.4,-11.6,0.9,10.9).s().p("AhcCIQgfgEgGglQgHgkAWgbQAlg9AbgoQAyhKAkAJQAbAGAmAxQAtA4gUAnQgRAghVAuQhNAqghAAIgGAAg");
	this.shape.setTransform(16.1,16.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,26.4,27.3);


(lib.Path_34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],2.1,-7.2,-1.4,7.3).s().p("AhWA6QgRgLAHgXQAHgWAWgIQApgaAbgPQA2gcATAPQAOALAIAmQAKAsgZARQgTANhBADIgZABQgsAAgOgJg");
	this.shape.setTransform(12.9,9.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3.1,19.8,13.3);


(lib.Path_33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],0.5,-4,-0.4,4.1).s().p("AkrAyQgUgYgCgRQgDgZAtADIEmgbQEXgZAMATQANATADAKQAFAVgXAKQgXALkZATQiqALhJAAQgzAAgFgFg");
	this.shape.setTransform(35.3,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.1,3,64.5,11.1);


(lib.Path_32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],4.5,5.7,-4.4,-6).s().p("Ag1BaQgbgOgGgSQgIgZAkg8QAjg9AYgIQAZgKAhARQAjARgHAYQgMAogZAqQghA7gdAHIgGABQgOAAgVgLg");
	this.shape.setTransform(11.8,13);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,17.6,20.1);


(lib.Path_31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],4.5,5.7,-4.4,-6).s().p("Ag0BaQgcgOgGgSQgIgZAkg8QAjg9AYgJQAagJAhARQAiARgHAYQgLAngZArQgiA7gdAHIgHABQgNAAgUgLg");
	this.shape.setTransform(11.8,13);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,17.7,20.1);


(lib.Path_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],6.3,-2.9,-6.6,3.4).s().p("AhCA3Qgng5AHgeQAIgeAngeQApgfAUAQQAgAYAdArQAnA3gNAiQgGARggAXQghAZgXAAQgeAAgng7g");
	this.shape.setTransform(13,14.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,20,22.7);


(lib.Path_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],8.2,4.3,-6.1,-3.3).s().p("AgSBmQgsgFgMgNQgRgTAUhCQASg/AUgUQAUgTAjABQAnABAEAZIARBaQAEBDgyATQgJADgSAAIgbgBg");
	this.shape.setTransform(11.2,13.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,16.5,20.7);


(lib.Path_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],-6.9,5.8,5.1,-4.4).s().p("AgUBeQgugGABg0QgVgmgJgdQgQg4BBgHQAZgDA1AoQA0AnAKAYQALAZgPAiQgPAjgYgGIgmABQgTAAgOgBg");
	this.shape.setTransform(12.9,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.1,3.1,19.8,19);


(lib.Path_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],7.6,-4.3,-7.1,2.5).s().p("Ag1A0Qgng0gDgcQgDgbAXgdQAYgeAWANIBRApQA4AmgPAyQgFAPgcAeQgeAggSABIgBAAQgYAAgog2g");
	this.shape.setTransform(12.7,13.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,19.3,21.2);


(lib.Path_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],10.7,6.4,-10.3,-4.7).s().p("AABB2Qg7gDgMgNQgTgWgJhFQgJhHARgRQAYgYAggLQAogOASAZQAmAxAYA5QAlBagyATQgMAEgiAAIgaAAg");
	this.shape.setTransform(13.2,14.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,20.4,23.6);


(lib.Path_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],6.2,7.2,-2.8,-7.4).s().p("AgFBFQgtgKgSgOQgYgSANgtQANgtAcgGQAigIAaABQAiABAFARQAVBBACAPQAGAygjAFIgIAAQgTAAghgIg");
	this.shape.setTransform(11.4,10.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,17,15.5);


(lib.Path_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],7.5,5.5,-7.3,-5.9).s().p("AgxCKQgmgJgLgVQgPgeAhhcQAhhcAegUQAegVAuAJQAxAKgFAiQgGA3gYBDQgfBYglAUQgJAGgQAAQgMAAgRgEg");
	this.shape.setTransform(13.3,17.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,20.8,28.4);


(lib.Path_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],3,9.1,-2.5,-9.1).s().p("AAWBbQgVgDgsgXQgvgZgQgTQgVgaAegsQAegrAhACQAiABA5AdQA7AegBAVQgBAfgWAgQgYAlgkAAIgKAAg");
	this.shape.setTransform(14.5,12.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.9,3,23.1,18.3);


(lib.Path_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],2.8,8.3,-2.8,-8.4).s().p("AgbBqQgUgCgggaQghgbgGgWQgHgeA1g1QA0g0AgABQAiAAAoAgQAqAhgLAYQgTAlgmAmQgtAvgkAAIgGAAg");
	this.shape.setTransform(14.9,13.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,23.9,21.3);


(lib.Path_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],-7.8,-6.3,5.8,5.9).s().p("AgpBGQgrg/gEgJQgWgwAkgQQATgIAwgDQAzgEAWAHQAgALAAAyQgBAvgcAPQgjATgcAIQgOAEgLAAQgQAAgGgKg");
	this.shape.setTransform(12.8,11);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.1,3,19.5,15.9);


(lib.Path_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],-10.5,-6.8,7.1,6.8).s().p("AgUBdQg+hRgGgJQgqhCAfgRQAQgJArgFQAugGAVAGQAgAKAgAqQAgAsgOAWQgQAagyAdQgjATgPAAQgJAAgEgFg");
	this.shape.setTransform(14.3,12.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,22.7,19.6);


(lib.Path_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],-13.3,1.2,13.4,4.3).s().p("Ai5BUQgjgBAkg/QAjg7AtgeQAogZBlADQBjAEAhAXQAWAPAIAsQAIAogKATQgUAliZABIgJAAQhOAAh6gIg");
	this.shape.setTransform(23.2,12.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.9,3,40.6,18.5);


(lib.Path_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],2.7,7.7,-7.7,-9).s().p("AglBbQgdgVgShbQgThcAnAWQAfASANACQAOACA9gFQAQgBAKAUQAJASABAbQABBCgoAGQgEABgoAWQgSALgNAAQgIAAgGgFg");
	this.shape.setTransform(12,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.9,3,18.2,19.2);


(lib.Path_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],-5.9,-6.1,10.3,8.7).s().p("AhRBqQgNgXgEgkQgMhZApgSQAEgBAmgpQAegfARALQAhAVAiB2QAiB3gsgUQgjgQgOABQgPABhAAXIgGABQgNAAgLgUg");
	this.shape.setTransform(13.1,15.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,20.4,25.2);


(lib.Path_99 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],3.6,-2.3,-3.7,2.3).s().p("AgSAjQghgVgDgOQgEgPALgUQALgUANAEQAWAHAXAPQAgAUACARQABAJgIAPQgKARgKADIgGABQgPAAgagSg");
	this.shape.setTransform(8.6,8.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,11.3,10.6);


(lib.Path_98 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],1.6,-4,-1.5,4).s().p("AgrAfQgMgKgDgVQgDgYANgEQAVgHAcgCQAmgDAMANQAGAGACASQACASgGAJQgJAMgoACIgMABQgcAAgJgIg");
	this.shape.setTransform(9,6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,12,7.8);


(lib.Path_97 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],0.4,-4.6,-0.3,4.6).s().p("Ag+AZQgQgHgDgQQgDgQATgEQAfgHAlgCQA1gEAQAJQAJAEACAOQACANgKAGQgNAKg3AEIgeAAQgdAAgKgEg");
	this.shape.setTransform(11.3,5.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,16.6,5.9);


(lib.Path_92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],4.6,-5.4,-4.8,5).s().p("AgIBCQg3gLgNgVQgMgWAFgmQAGgpAVgCQAhgEAoAIQA1AKAMAbQAGANgFAeQgFAhgNANQgKAKgZAAQgQAAgWgFg");
	this.shape.setTransform(11.5,10.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,17.1,14.3);


(lib.Path_85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],-7,-3.2,5.4,1.7).s().p("AgNBgQgPgNgCgXQgJgugFgfQgJg7AQgPQALgLAeABQAjACAHAcQAFAXgMA/QgNBBgNAOQgGAIgHAAQgFAAgIgGg");
	this.shape.setTransform(7.8,13.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3.1,9.6,20.3);


(lib.Path_84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],-4.7,7.3,3,-4.2).s().p("AhfAkQgJgOAHghQAIgmAdgDQAXgDA8AXQA9AXAMAPQAMAPgPAPQgQAOgXgBQgvAEgfAAIgIAAQg1AAgKgRg");
	this.shape.setTransform(13.1,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,20.3,10.7);


(lib.Path_78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],8.3,4.3,-6,-3.3).s().p("AgSBmQgsgFgMgNQgRgTAUhCQASg/AVgUQATgTAkABQAmABAEAZQADASAOBIQAEBDgxATQgJADgTAAIgbgBg");
	this.shape.setTransform(11.2,13.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,16.6,20.7);


(lib.Path_76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],-10.1,-3.4,10.1,2.7).s().p("AhDCKQgBgOgKgjQgLgmgCgSQgLhGA1geQAFgDASgfQAWgkANgQQA0g7AdBaQAMAkgWBnQgVBjgWAfQgVAfgnAAQgpgBgDgng");
	this.shape.setTransform(12.4,20.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.1,3.1,18.8,35.5);


(lib.Path_74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],10,-1.4,-9.9,1.4).s().p("AhFBQQgvgvAGghQAGgjApgtQAqgvAXAJQAmAQAjAiQAuAtgLAoQgFAUghAkQgjAlgYAIQgHACgGAAQgeAAgngog");
	this.shape.setTransform(14.2,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,22.4,24.1);


(lib.Path_73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],7.6,-4.3,-7.1,2.4).s().p("Ag1A0Qgng0gDgcQgDgbAXgdQAYgeAWAMQAQAJBBAhQA4AmgPAxQgFAQgbAeQgfAggSABIgBAAQgYAAgog2g");
	this.shape.setTransform(12.7,13.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,19.3,21.3);


(lib.Path_66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],10.1,5.7,-6.2,-6.2).s().p("Ag/CQQgtgpgRgdQgSgdBLhlQBDhZAngdQAbgUAiAvQAgAtgBAqQgCAsgpBTQgtBagoAXQgCABgDAAQgSAAgqglg");
	this.shape.setTransform(15.9,21.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,26,36.3);


(lib.Path_65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],-1,9.4,0.8,-8.8).s().p("AABBeQhZgEgkgVQgQgJgHg6QgHg6AMgUQAPgaBvAMQBhALAoARQAdANAAA5QAAA6geAQQgZANg9AAIghgBg");
	this.shape.setTransform(18,12.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,30.1,19);


(lib.Path_64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],3,-11.1,-2.3,11.2).s().p("Ah9BfQgbgQAKglQAJgjAegPQA8gqAogYQBMgvAeAWQAWARAPA8QASBGgkAbQgcAWhfAIQgcACgWAAQg2AAgUgMg");
	this.shape.setTransform(17.5,13.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,29.2,21.4);


(lib.Path_63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],7.5,5.6,-7.3,-5.8).s().p("AgxCKQgngJgKgVQgPgeAhhcQAhhbAegVQAegVAuAJQAwAKgEAjQgHA3gXBCQgfBYglAUQgJAGgQAAQgNAAgQgEg");
	this.shape.setTransform(13.4,17.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,20.8,28.4);


(lib.Path_62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],3,9.1,-2.5,-9.1).s().p("AAWBbQgVgDgrgXQgwgZgPgTQgWgaAegsQAegrAiACQAiABA4AdQA7AegBAVQgBAfgVAgQgZAlgkAAIgKAAg");
	this.shape.setTransform(14.5,12.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,23.1,18.3);


(lib.Path_61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],2.8,8.3,-2.8,-8.4).s().p("AgbBqQgUgCgggZQghgbgGgWQgHgeA1g1QA0g1AgABQAiAAAoAgQArAhgMAYQgTAlgmAnQgtAugkAAIgGAAg");
	this.shape.setTransform(14.9,13.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,23.9,21.3);


(lib.Path_60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],-7.8,-6.3,5.8,5.9).s().p("AgpBGQgqg9gFgLQgWgwAkgQQATgIAwgDQAzgEAWAHQAgALAAAyQgBAvgcAPQgjATgcAIQgOAEgKAAQgRAAgGgKg");
	this.shape.setTransform(12.7,11);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,19.5,15.9);


(lib.Path_57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],4.1,8.4,-3,-8.4).s().p("AhHB1QgRgBgigvQgjgwABgXQABgeBngqQBagmArgEQAggCAcAyQAcA0gTAbQgUAdhPAmQhPAngqAAIgBAAg");
	this.shape.setTransform(18.7,14.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,31.5,23.4);


(lib.Path_56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],5.4,8.2,-5.3,-10.9).s().p("AiABMQgmgzgCgZQgCgdA+gtQA4gpAlgIQAigHBJAfQBNAhAAAgQACAzhlA3QhVAwg6AFIgBAAQgRAAglgxg");
	this.shape.setTransform(19.9,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,33.8,25.1);


(lib.Path_55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],5.2,-3.9,-5.5,4).s().p("AgbAxQg3gmgIgWQgHgXAPgbQAQgdAXAJQAkAPAnAbQA2AkAGAaQADAOgNAVQgNAWgRADIgEABQgYAAgzgjg");
	this.shape.setTransform(12.3,11.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,18.6,16.8);


(lib.Path_54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],-3.6,-0.1,3.6,0.2).s().p("AApCtIhTisQhNiiAPgNQAPgMAKgEQAUgJAOALQAPALBICnQBLCpgLAKQgTATgQAFQgFACgFAAQgQAAgEgWg");
	this.shape.setTransform(13.8,22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3.1,21.6,39);


(lib.Path_53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],-10.5,-6.8,7.1,6.8).s().p("AgUBdIhEhaQgqhCAfgRQAQgJArgFQAugGAVAGQAgAKAfAqQAhArgOAXQgQAagzAdQgiATgPAAQgJAAgEgFg");
	this.shape.setTransform(14.3,12.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,22.6,19.6);


(lib.Path_52_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],-13.3,1.2,13.4,4.3).s().p("Ai5BUQgjgCAkg+QAjg8AtgdQAngZBmADQBjADAhAXQAWAPAIAtQAIAogKATQgUAliZABIjRgIg");
	this.shape_1.setTransform(23.2,12.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.9,3,40.6,18.5);


(lib.Path_51_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],3.3,10.3,-3,-4.6).s().p("Ah3BNQgngJACghQABgeBngpQBZglAsgEQAggDAcAzQAcAygUAcQgMATgxgVQg3gYgZAPQhBApgsAAQgKAAgIgCg");
	this.shape_1.setTransform(18.8,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.1,3,31.5,15.7);


(lib.Path_50_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],5.4,8.1,-5.3,-11).s().p("AiABMQgmgzgCgZQgCgdA+gtQA4gqAlgHQAigHBJAfQBNAgAAAgQACA0hlA3QhVAwg6AFIgBAAQgRAAglgxg");
	this.shape_1.setTransform(19.9,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,2.9,33.8,25.1);


(lib.Path_49_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],-11.3,-3,16.3,0.2).s().p("AAmBZIg6g3QgjgggZgBQgwgBgfgPQgmgTAlgZQArgbB7gQQB/gRAfAVQAUAOgHA1QgFAngNAcQgdBAghAJIgKACQgWAAgbgWg");
	this.shape_1.setTransform(20.9,14);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,35.9,22.2);


(lib.Path_47_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],2.7,7.8,-7.7,-9).s().p("AglBcQgdgWgShaQgThdAnAWQAfASANACQAOACA9gFQAQgBAKAUQAJATABAbQABBCgoAFQgDABgpAWQgSALgNAAQgIAAgGgEg");
	this.shape_1.setTransform(12,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.9,3,18.2,19.2);


(lib.Path_45_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],-5.8,-6.1,10.3,8.7).s().p("AhRBqQgMgXgFgkQgMhZApgSQAFgCAmgnQAdggARALQAhAVAiB2QAiB3gsgUQgjgQgOABQgPABhAAXIgGABQgMAAgMgUg");
	this.shape_1.setTransform(13.1,15.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,20.4,25.2);


(lib.Path_34_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],2.3,-5.4,-2.2,5.4).s().p("Ag4AsQgQgOgEgeQgFggASgHQAbgKAlgDQAxgEAQARQAJAJADAZQADAZgIAMQgMASgzADIgTABQgjAAgMgKg");
	this.shape_1.setTransform(10.8,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3.1,15.7,10.7);


(lib.Path_33_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],5.5,-3.6,-5.7,3.6).s().p("AgdAvQg1gqgGgWQgHgYASgaQASgbAWALQAjARAlAeQAzAnAFAbQACANgOAVQgQAVgQACIgDAAQgYAAgxgog");
	this.shape_1.setTransform(12.1,11.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,18.2,17.4);


(lib.Path_32_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],2.8,-7.1,-1.7,7.1).s().p("AgGBAQhBgBgRgNQgRgLAKgXQAJgUAVgIQArgXAcgNQA4gZASAQQANAMAGAnQAGAtgaAPQgSAKg2AAIgNAAg");
	this.shape_1.setTransform(12.9,9.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3.1,20,12.8);


(lib.Path_31_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],0.8,-4.1,-0.7,4).s().p("AgDArQkggBgLgOQgTgZAAgRQgCgaAuAHQCbgFCMgCQEXgFAMATQALAUACAJQAEAWgYAJQgXAJj+AAIgcAAg");
	this.shape_1.setTransform(35.2,7.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,64.5,8.5);


(lib.Path_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],10.1,5.7,-6.2,-6.3).s().p("Ag/CQQgsgpgSgdQgRgdBLhlQBChaAngdQAbgUAiAwQAgAtgBAqQgBAsgqBSQgtBbgoAXQgCABgEAAQgRAAgqglg");
	this.shape.setTransform(15.9,21.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,25.9,36.3);


(lib.Path_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],5.8,1.8,-5.7,-1.7).s().p("AgbBQQgSgMgHg3QgHg2AMgRQANgSAegGQAfgGAIASQAMAdAGAoQAHA0gQASQgIAKgZAEIgQACQgOAAgIgFg");
	this.shape.setTransform(8.5,11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,11.1,17);


(lib.Path_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],2.4,-7.3,-2.4,7.2).s().p("AhGA+QgWgQgIgoQgJgpAWgKQAjgQAxgHQA+gKAYAVQAMALAGAgQAGAhgJAQQgOAYhDAKQgXADgSAAQggAAgOgKg");
	this.shape.setTransform(13.3,10.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,20.7,14.5);


(lib.Path_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],-5.2,-6.5,2,5.4).s().p("Ag3BJQgNgTAFgTQAEgpAFgbQAIg0AXgDQAQgCAiATQAoAWgBAaQgBAVgjAqQgiArgTAFIgHABQgOAAgLgQg");
	this.shape.setTransform(9.5,11.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,13.1,17.8);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],3.6,8.3,-3.5,-8.5).s().p("Ag5B0QgTAAgZgYQgagaABgXQABggBEg+QBBg9AhgDQAhgDAgAeQAhAfgSAbQgdAqgwAtQg/A7glAAIgBAAg");
	this.shape.setTransform(15.7,14.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,25.5,23.3);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],1.1,5.7,-1,-5.6).s().p("AgfBDQgMgDgQgSQgRgUAAgPQgBgTAogfQAmgeAUACQAVADAVAXQAVAZgKAOQgRAXgdAXQgdAYgWAAIgIgBg");
	this.shape.setTransform(10.7,9.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3.1,15.5,13.6);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#148029","#00B84F","#06B94E","#37C04A","#60C647","#80CA44","#97CD43","#A4CF41","#A9D041"],[0,0.286,0.294,0.365,0.435,0.502,0.569,0.631,0.686],1.6,6.5,-1.6,-6.5).s().p("Ag9BMQgOgCgOgUQgPgVAFgRQAGgVA8glQA6gkAXACQAZACASAZQATAagSAQQgcAagrAbQgwAfgbAAIgHgBg");
	this.shape.setTransform(13.1,10.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,20.3,15.4);


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#DB6752","#CA4D46","#A24339","#A81330"],[0,0.255,0.647,1],-0.2,-0.1,0,-0.2,-0.1,12.3).s().p("AhnBhQgQgJAAgdQABgbAJgPQAKgQAYgHIApgLQAUgHAKgIQAJgIAMgUQANgXAMgJQARgLAXAHQAqAMgFAzQgEAtgeAZQgRAOgrAHQgrAIgPAMQgTARgZAEIgMABQgJAAgFgDg");
	this.shape.setTransform(15,13);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,24,20);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#DB6752","#CA4D46","#A24339","#A81330"],[0,0.255,0.647,1],1.4,0.5,0,1.4,0.5,13.3).s().p("Ag9CRQgggoAFgvQADgbAfguQAegvACgYQAEggARgZQAMgUALgEQATgIAXAXQAUAUAEAWQAEAVgOAdIgZAvQgLAYgCAPQgCAQAGAbQAHAegEASQgFAYgZARQgRAMgQAAQgYAAgVgZg");
	this.shape.setTransform(11.9,20);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,17.8,34);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.USGS22GravelBeach_1, null, new cjs.Matrix2D(0.29,0.876,-0.743,0.277,-31.4,-45)).s().p("AhnBhQgQgJAAgdQABgbAJgPQAKgQAYgHIApgLQAUgHAKgIQAJgIAMgUQANgXAMgJQARgLAXAHQAqAMgFAzQgEAtgeAZQgRAOgrAHQgrAIgPAMQgTARgZAEIgMABQgJAAgFgDg");
	this.shape.setTransform(15,13);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,24,20);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.USGS22GravelBeach_1, null, new cjs.Matrix2D(-0.917,-0.4,0.4,-0.917,-4.3,-23.3)).s().p("Ag9CRQgggoAFgvQADgbAfguQAegvACgYQAEggARgZQAMgUALgEQATgIAXAXQAUAUAEAWQAEAVgOAdIgZAvQgLAYgCAPQgCAQAGAbQAHAegEASQgFAYgZARQgRAMgQAAQgYAAgVgZg");
	this.shape.setTransform(11.9,20);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,17.8,34);


(lib.color3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00AA4F","#FFDF00","#B0D240"],[0.051,0.482,1],0.6,0,0,0.6,0,89.9).s().p("AtEDiQi2h3hriEQhdh1gNheQgMhaA/gaQBCgbB1A9QARAKB9BQQBsBHBZApQEbCBE2g1QEfgyEIhVQCXgxD8heQCSgyBfAXQBUAWARBGQAQBFg6BOQg+BUh8A1QnGDGmWBSQj1AyjIAAQlJAAjNiHg");
	this.shape.setTransform(-0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123.6,-36,246.8,72.3);


(lib.color2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#AAA800","#FFF6B8","#D2C040"],[0.051,0.482,1],0.5,0,0,0.5,0,100.4).s().p("AptNBQk9jvhVlIQhKkeB1kLQA3h8AtgVQAogSAmBCQAgA4AnCGQAMAnA/DwQAxC6B9BnQC5CaFDg4QFLg5CliUQCciMgFjQQgEjgg0iqQgwiahIhFQgigfgPgyQgQgwAJgsQAIgvAhgXQAmgZA8AMQA0ALBWBhQBcBoBNCSQDLF/guFtQgaDHjEC/Qi4CzkPBzQkUB1kBAFIgYABQkIAAinh+g");
	this.shape.setTransform(-0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.7,-95.8,210.5,191.8);


(lib.color = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00AA4F","#FFDF00","#B0D240"],[0.051,0.482,1],0,0,0,0,0,101).s().p("ApxNPQk6jthRlHQhEkTBnkZQBjkPCNiMQBWhUBMgTIBmgbQAwgLAdAFQBDAOA8CHQgQgLgcgCQg5gDg+AyQiFBrg/CPQhgDXBIEPQAxC5B8BoQC5CZFDg4QFLg5CliUQCciLgEjRQgFjgg0iqQgwiahIhEQg2gzhtAvQh4BCgyAKQhEANgag3QgXgxAXglQAXgkAeggQAogqBAgvQBhhGBFgEQAjgBCYAgQA0ALBWBgQBcBoBNCSQDLF/guFtQgaDHjEC/Qi3CzkQBzQkTB1kBAGIgYAAQkJAAimh9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.7,-97.2,209.5,194.4);


(lib.planton2all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// spots
	this.instance = new lib.Path_13("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(98.3,-0.5,1,1,0,0,0,9.6,11.8);
	this.instance.filters = [new cjs.ColorFilter(0.61, 0.61, 0.61, 1, 84.24, 44.46, 14.82, 0)];
	this.instance.cache(1,1,17,22);

	this.instance_1 = new lib.Path_14("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(53.7,71.7,1,1,0,0,0,13.3,10.2);
	this.instance_1.filters = [new cjs.ColorFilter(0.61, 0.61, 0.61, 1, 84.24, 44.46, 14.82, 0)];
	this.instance_1.cache(1,1,25,19);

	this.instance_2 = new lib.Path_15("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-94.8,22.2,1,1,0,0,0,8.5,11.5);
	this.instance_2.filters = [new cjs.ColorFilter(0.61, 0.61, 0.61, 1, 84.24, 44.46, 14.82, 0)];
	this.instance_2.cache(1,1,15,21);

	this.instance_3 = new lib.Path_16("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-83.7,40.5,1,1,0,0,0,16,21.1);
	this.instance_3.filters = [new cjs.ColorFilter(0.61, 0.61, 0.61, 1, 84.24, 44.46, 14.82, 0)];
	this.instance_3.cache(1,1,30,40);

	this.instance_4 = new lib.Path_45_1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-78.4,10.1,1,1,0,0,0,13.1,15.6);
	this.instance_4.filters = [new cjs.ColorFilter(0.61, 0.61, 0.61, 1, 84.24, 44.46, 14.82, 0)];
	this.instance_4.cache(1,1,24,29);

	this.instance_5 = new lib.Path_47_1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(80.6,-3.2,1,1,0,0,0,12,12.5);
	this.instance_5.filters = [new cjs.ColorFilter(0.61, 0.61, 0.61, 1, 84.24, 44.46, 14.82, 0)];
	this.instance_5.cache(1,1,22,23);

	this.instance_6 = new lib.Path_52_1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-8,68.3,1,1,0,0,0,23.2,12.2);
	this.instance_6.filters = [new cjs.ColorFilter(0.61, 0.61, 0.61, 1, 84.24, 44.46, 14.82, 0)];
	this.instance_6.cache(1,1,45,23);

	this.instance_7 = new lib.Path_53("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-61.6,52.7,1,1,0,0,0,14.3,12.8);
	this.instance_7.filters = [new cjs.ColorFilter(0.61, 0.61, 0.61, 1, 84.24, 44.46, 14.82, 0)];
	this.instance_7.cache(1,1,27,24);

	this.instance_8 = new lib.Path_54("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(59.3,-63.4,1,1,0,0,0,13.8,22.6);
	this.instance_8.filters = [new cjs.ColorFilter(0.61, 0.61, 0.61, 1, 84.24, 44.46, 14.82, 0)];
	this.instance_8.cache(1,1,26,43);

	this.instance_9 = new lib.Path_55("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-52.7,88.7,1,1,0,0,0,12.2,11.3);
	this.instance_9.filters = [new cjs.ColorFilter(0.61, 0.61, 0.61, 1, 84.24, 44.46, 14.82, 0)];
	this.instance_9.cache(1,1,23,21);

	this.instance_10 = new lib.Path_56("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-42.6,68.3,1,1,0,0,0,19.9,15.5);
	this.instance_10.filters = [new cjs.ColorFilter(0.61, 0.61, 0.61, 1, 84.24, 44.46, 14.82, 0)];
	this.instance_10.cache(1,1,38,29);

	this.instance_11 = new lib.Path_57("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(30.8,60.9,1,1,0,0,0,18.8,14.7);
	this.instance_11.filters = [new cjs.ColorFilter(0.61, 0.61, 0.61, 1, 84.24, 44.46, 14.82, 0)];
	this.instance_11.cache(1,1,36,27);

	this.instance_12 = new lib.Path_60("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(-72.8,68.4,1,1,0,0,0,12.8,11);
	this.instance_12.filters = [new cjs.ColorFilter(0.61, 0.61, 0.61, 1, 84.24, 44.46, 14.82, 0)];
	this.instance_12.cache(1,1,24,20);

	this.instance_13 = new lib.Path_61("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(80.6,19.1,1,1,0,0,0,14.9,13.7);
	this.instance_13.filters = [new cjs.ColorFilter(0.61, 0.61, 0.61, 1, 84.24, 44.46, 14.82, 0)];
	this.instance_13.cache(1,1,28,25);

	this.instance_14 = new lib.Path_62("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(36,80.8,1,1,0,0,0,14.5,12.1);
	this.instance_14.filters = [new cjs.ColorFilter(0.61, 0.61, 0.61, 1, 84.24, 44.46, 14.82, 0)];
	this.instance_14.cache(1,1,27,22);

	this.instance_15 = new lib.Path_63("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(83.4,44.3,1,1,0,0,0,13.3,17.1);
	this.instance_15.filters = [new cjs.ColorFilter(0.61, 0.61, 0.61, 1, 84.24, 44.46, 14.82, 0)];
	this.instance_15.cache(1,1,25,32);

	this.instance_16 = new lib.Path_64("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(9.2,88.6,1,1,0,0,0,17.5,13.7);
	this.instance_16.filters = [new cjs.ColorFilter(0.61, 0.61, 0.61, 1, 84.24, 44.46, 14.82, 0)];
	this.instance_16.cache(1,1,33,25);

	this.instance_17 = new lib.Path_65("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(-25.8,88.9,1,1,0,0,0,18,12.4);
	this.instance_17.filters = [new cjs.ColorFilter(0.61, 0.61, 0.61, 1, 84.24, 44.46, 14.82, 0)];
	this.instance_17.cache(1,1,34,23);

	this.instance_18 = new lib.Path_66("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(61.2,44.3,1,1,0,0,0,15.9,21.1);
	this.instance_18.filters = [new cjs.ColorFilter(0.61, 0.61, 0.61, 1, 84.24, 44.46, 14.82, 0)];
	this.instance_18.cache(1,1,30,40);

	this.instance_19 = new lib.Path_76("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(77.2,-33,1,1,0,0,0,12.5,20.8);
	this.instance_19.filters = [new cjs.ColorFilter(0.61, 0.61, 0.61, 1, 84.24, 44.46, 14.82, 0)];
	this.instance_19.cache(1,1,23,40);

	this.instance_20 = new lib.Path_78("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(91.6,-21.3,1,1,0,0,0,11.2,13.3);
	this.instance_20.filters = [new cjs.ColorFilter(0.61, 0.61, 0.61, 1, 84.24, 44.46, 14.82, 0)];
	this.instance_20.cache(1,1,21,25);

	this.instance_21 = new lib.Path_85("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(73.4,-57.4,1,1,0,0,0,7.8,13.2);
	this.instance_21.filters = [new cjs.ColorFilter(0.61, 0.61, 0.61, 1, 84.24, 44.46, 14.82, 0)];
	this.instance_21.cache(1,1,14,24);

	this.instance_22 = new lib.Path_99("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(97.5,24.4,1,1,0,0,0,8.6,8.2);
	this.instance_22.filters = [new cjs.ColorFilter(0.61, 0.61, 0.61, 1, 84.24, 44.46, 14.82, 0)];
	this.instance_22.cache(1,1,15,15);

	this.instance_23 = new lib.Path();
	this.instance_23.parent = this;
	this.instance_23.setTransform(-87.8,-12.6,1,1,0,0,0,11.9,20);
	this.instance_23.alpha = 0.539;
	this.instance_23.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_24 = new lib.Path_1();
	this.instance_24.parent = this;
	this.instance_24.setTransform(-87.8,-12.6,1,1,0,0,0,11.9,20);
	this.instance_24.alpha = 0.82;
	this.instance_24.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(4));

	// color2
	this.instance_25 = new lib.color2();
	this.instance_25.parent = this;
	this.instance_25.setTransform(-1.1,7.4);
	this.instance_25.alpha = 0.77;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(4));

	// texture
	this.instance_26 = new lib.planktontexture_01("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(-1.4,7.4,1,1,0,0,0,105,95.9);
	this.instance_26.alpha = 0.391;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(4));

	// btm color
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6E6E6").s().p("AlFPlIgegEQgIgBgFgGQgFgHABgIIAAgBQABgIAGgEQAHgFAIABIAeAEQAJABAFAGQAFAHgBAHIAAABQgBAIgHAFQgFAEgHAAIgDAAgAgPPZQgHgFgBgIIAAgBQgBgHAEgGQAFgHAIgCIAdgFQAIgBAHAFQAGAEABAGQAAgHAEgGQAEgGAIgCIAdgGQAIgCAHAEQAHAEACAIIAAAAQACAIgFAHQgEAIgIABIgeAHQgIACgHgFQgGgEgCgHQABAHgEAHQgFAGgIACIgdAFIgEAAQgGAAgFgEgAmNPaIgegHQgIgBgFgIQgEgHACgIIAAgBQACgHAHgEQAHgEAIACIAdAGQAIACAFAGQAEAHgBAIIgBAAQgBAJgHAEQgFADgGAAIgEAAgAnUPIIgegJQgHgDgEgIQgEgHADgIIAAAAQADgIAHgDQAIgEAHACIAdAKQAIACAEAIQADAHgCAHIAAABQgCAIgIAEQgEACgFAAIgGgBgAB7O+QgIgEgCgIIAAgBQgCgHAEgHQAEgHAIgDIAdgIQAIgCAHAEQAHAEADAIIAAAAQACAIgEAHQgEAHgIADIgdAIIgGAAQgFAAgEgCgABxOxIAAAAgAoaOvIgcgNQgHgEgDgHQgDgIAEgIQADgHAIgDQAIgDAIAEIAaAMQAIADADAIQADAHgDAIIAAAAQgDAIgIADQgEACgEAAQgEAAgEgCgAC/OrQgHgEgDgIIAAAAQgCgIAEgHQAEgIAHgCIAdgJQAIgDAIAEQAHAEACAIIAAAAQADAIgEAHQgEAIgIACIgdAJIgGABQgEAAgFgCgAEDOVQgIgEgCgHIAAAAQgDgIADgIQAEgHAIgDIAcgKQAHgDAIAEQAHADADAIIAAAAQADAIgEAHQgDAIgIADIgcAKIgHABQgEAAgEgCgApbOOIgbgPQgHgFgCgIQgBgFABgGQgEAEgFABQgIABgHgFIgZgSQgGgFgBgIQgBgIAEgGQgFAFgIABQgIABgHgFIgXgTQgHgFgBgIQAAgJAFgGIAAgBQAGgGAHgBQAJAAAGAFIAXATQAHAFABAIQABAIgEAGQAFgGAHgBQAIgBAHAFIAXASQAHAFABAIQABAFgBAEQADgDAFgBQAIgCAHAFIAaAOQAHAFACAIQACAHgEAIIAAAAQgEAHgIACIgFABQgFAAgFgDgAFGN9QgIgDgDgIIAAgBQgDgHADgHQADgIAIgDIAdgMQAIgEAIADIAFAEIACgHQADgIAHgDIAcgMQAIgDAHADQAIADADAHIAAAAQAEAIgDAIQgDAHgIAEIgcAMQgHADgIgDIgGgDIgBAGQgDAIgIADIgeANQgEACgEAAQgDAAgEgCgAHGNFQgIgCgEgIIAAAAQgDgIADgHQACgIAIgEIAagNQAIgEAHADQAIACAEAIIAAAAQAEAHgDAIQgCAIgHAEIgcANQgEACgEAAIgHgBgAIFMmQgIgDgEgHIAAAAQgDgIACgHQACgIAHgEIAagOQAHgEAIACQAIACAEAGQgEgGACgIQACgIAHgEIAZgQQAHgEAIACQAIABAEAGQgEgGACgHQABgIAHgFIAYgRQAHgFAIACQAIABAEAGQgDgGABgHQABgIAGgGIAYgSQAHgEAIABQAIABAFAGIAAABQAFAGgBAIQgBAIgHAFIgYASQgGAFgIgBQgIgBgFgGQAEAGgBAIQgCAIgHAFIgYARQgHAFgIgCQgIgBgFgHQAEAHgCAHQgBAIgHAFIgaAQQgHAEgIgCQgIgBgFgIQAEAIgCAHQgCAIgHAEIgbAPQgEADgFAAIgGgBgAH5McIAAAAgAsHMOIgWgVQgGgGAAgJQAAgHAFgGIABgBQAGgGAIAAQAJAAAGAGIAVAVQAGAGAAAIQAAAIgFAGIgBAAQgFAGgJABIAAAAQgIAAgGgGgAssLiQgIAAgGgGIgUgXQgGgGAAgIQABgIAFgFIABgBQAGgFAIAAQAJAAAFAGIAUAWQAGAGAAAIQAAAJgGAGIgBAAQgFAFgIAAIgBAAgAtcKtQgIAAgGgGIgUgZQgFgGABgIQABgIAGgFIAAgBQAHgFAIABQAIABAGAGIASAYQAGAGgBAIQAAAIgHAGIAAAAQgGAFgGAAIgCgBgALxKLQgIgBgFgGQgGgHABgIQABgIAGgFIAXgUQAHgFAIAAQAIABAFAGIABAAQAFAGgBAIQAAAIgHAGIgXAUQgGAFgHAAIgCAAgAuJJ1QgIgBgFgHIgSgZQgFgHACgIQABgIAHgFIAAAAQAHgFAIACQAIABAFAHIARAZQAFAHgBAIQgCAIgGAFIgBAAQgFAEgGAAIgDgBgAMoJdQgIAAgGgGIAAgBQgFgGAAgIQAAgIAGgGIAWgVQAGgGAIABIAFAAIAAgFQAAgIAGgGIAUgVQAFgGAIAAQAIAAAFAEQgFgFgBgIQAAgIAFgGIATgXQAGgGAIgBQAGgBAFADQgEgEgBgHQgBgIAFgHIAQgXQAFgGAIgCQAGgBAGACQgEgEgCgFQgCgIAEgIIAOgZQAEgHAIgDQAIgCAHAEIAAAAQAIAEACAIQACAIgEAHIgOAaQgEAIgIACQgHACgGgDQAEAEABAGQACAJgEAGIgSAaQgFAGgIABQgHABgGgDQAFAFABAHQABAIgGAHIgUAXQgFAGgIABQgHAAgGgEQAFAGAAAHQABAIgGAGIgVAXQgGAGgIgBIgFAAIAAAFQABAIgGAGIgYAWQgFAFgIAAIgBAAgAuyI6QgIgCgFgHIgPgaQgEgIACgIQACgIAHgEQAHgEAIACQAIACAEAHIAPAaQAFAHgCAIQgCAIgHAEIgBABQgEADgGAAIgEgBgAvWH8QgIgCgEgIIgOgbQgDgIADgIQACgHAGgDQgGACgHgDQgIgDgDgIIgMgdQgDgIAEgHQADgIAIgDIAAAAQAIgDAHAEQAIADADAIIALAcQADAHgDAIQgDAHgGADQAHgCAGACQAIADADAHIAOAbQAEAHgDAIQgCAIgIAEIAAAAQgEACgFAAIgGgBgAi+H2QgFgFAAgGQgCAGgFAFQgGAGgIgBIgfgDQgIAAgFgHQgEgFgBgGQgCAGgFADQgHAFgIgBIgegHQgIgCgEgHQgEgFABgGQgDAFgGADQgHAEgIgCIgdgLQgIgDgDgIQgDgHADgIIAAAAQADgIAIgDQAHgDAIADIAaAJQAIADAEAIQACAFAAAFQACgFAGgDQAHgFAIADIAbAFQAIACAFAGQADAFAAAGQACgFAFgEQAGgFAIABIAdACQAIABAGAGQAEAEABAGQABgGAEgEQAGgGAIAAIAdgBQAJAAAGAGQAEAEABAGQABgGAEgEQAGgHAIgBIAdgCQAIgBAHAFQAEAEACAEQAAgFADgEQAGgHAIgBIAdgEQAIgCAFAFQAHAFACAIQABAIgFAHQgFAHgHABIgeAFQgIABgHgFQgEgDgCgGQgBAGgEAFQgFAGgIABIgeACQgIABgHgFQgFgFgBgGQgBAGgFAFQgFAGgIABIgfAAIAAAAQgIAAgGgGgAAVHjQgHgFgBgIIAAAAQgCgIAFgHQAFgHAIgBIAegGQAIgCAHAFQAHAEABAIIAAAAQACAJgEAHQgFAGgIACIgfAGIgEABQgGAAgFgEgABcHUQgHgEgCgIIAAAAQgBgIAEgHQAEgHAIgCIAdgHQAIgCAHAEQAGADADAGQgBgGADgGQAEgIAIgCIAcgIQAIgDAHAEQAHAEADAIIAAAAQACAIgDAHQgEAHgIADIgdAJQgIACgHgEQgGgEgDgFQABAGgDAGQgEAHgIACIgfAIIgEABQgGAAgFgEgAmnHGIgcgPQgHgEgCgIQgCgGADgGQgFAEgGABQgIACgHgFIgYgTQgHgFgBgJQAAgIAFgGQgGAFgIAAQgIAAgGgGIgVgXQgFgHABgIQABgIAGgGIABAAQAGgFAIABQAIABAFAGIATAVQAGAGgBAJQAAAGgEAGQAFgFAGgBQAJAAAGAFIAWARQAHAFACAIQABAGgCAEQADgDAFgCQAJgCAHAFIAYANQAIAEACAHQADAIgEAIIAAAAQgDAHgIADIgHABQgEAAgEgCgADlGuQgIgDgDgIIAAAAQgCgIADgHQAEgIAIgDIAcgJQAHgEAIAEQAHADADAHIAAABQAEAHgEAIQgDAIgIACIgdALIgHACQgEAAgEgDgAEnGVQgHgDgDgIIgBAAQgDgHADgIQADgIAIgDIAbgMQAHgEAIADQAGACAEAFQgCgFACgHQACgHAIgEIAZgOQAHgFAIACQAIADAEAHQAEAHgCAIQgCAIgHAEIgbAPQgHAEgIgDQgHgCgEgFQADAGgDAHQgCAHgIAEIgcANQgEACgEAAQgEAAgEgCgAwPF5QgIgEgCgIIgJgeQgCgIAEgHIADgEIgFgDQgHgEgCgIIgGgeQgCgIAFgHQAEgHAIgBQAJgCAGAEQAHAFACAIIAGAdQACAIgEAHIgDAEIAEACQAHAEADAIIAIAcQADAIgEAHQgEAHgIADIAAAAIgGABQgFAAgEgCgAGmFUQgIgCgFgGIAAgBQgEgGABgJQACgIAHgEIAYgRQAHgFAIABQAIABAFAGIAAABQAFAHgBAIQgBAIgHAFIgaASQgFADgGAAIgEAAgAPwFNIAAgBQgHgDgDgHQgDgIADgIIALgaQAEgIAHgDQAGgCAFABQgEgDgDgFQgEgHACgIIAJgeQACgIAHgEQAHgEAHACIABAAQAIACAEAIQAEAHgCAIIgIAeQgDAIgHAEQgGADgHgBQAGAEACAGQAEAHgEAIIgLAbQgEAIgHADIgHACQgEAAgFgCgAo8FAQgIgBgFgHIgRgbQgEgHACgIQACgIAHgEIAAAAQAHgEAIACQAIACAEAIIAPAXQAFAHgBAIQgCAIgHAFQgFAEgGAAIgDgBgAHiEpQgIABgGgGIgBgCQgFgFAAgIQAAgIAGgGIADgDIABgBIAQgOQAGgGAJABQAHAAAGAFIAAABQAGAGAAAIQAAAIgGAGIgRAPIABAAIgDADQgGAFgIAAIgBAAgApiEDQgIgDgEgHIgNgcQgDgIADgIQADgHAIgDQAHgEAIAEQAIADADAHIAMAaQAEAHgDAIQgDAIgHAEIAAAAQgEACgFAAIgGgBgAIFD1IgBAAQgGgGgBgHQAAgIAFgHIASgXQAFgHAIgBQAHgBAFACQgEgDgCgGQgCgIAEgIIAOgZQAEgIAIgCQAHgCAHADIABAAQAIAEACAIQADAIgEAHIgPAbQgEAIgIACQgIACgGgEQAFAFABAHQACAIgFAHIgUAaQgGAGgIABIgCAAQgHAAgFgFgAwxDzQgHgFgBgIIgFgeQgBgIAFgHQAFgHAIgBIABAAQAIAAAGAEQAHAFABAIIAEAeQACAIgFAHQgFAGgIACIAAAAIgEAAQgGAAgFgEgAQfDIIgBAAQgHgBgFgHQgFgGABgJIABgLIABgCIABgLQABgIAGgGQAGgFAIAAQgHAAgGgGQgFgHAAgIIACgdQAAgIAGgGQAGgGAIAAQgIAAgFgFQgGgGAAgJIgBgdQAAgIAGgGQAFgFAIAAQgIAAgGgGQgGgFgBgIIgCgeQgBgIAFgGQAGgHAIAAQAIgBAHAFQAGAFABAJIACAeQABAIgGAHQgFAGgIABQAIgBAGAFQAGAGAAAIIABAeQAAAJgGAGQgGAGgIgBQAIABAFAGQAGAGAAAIIgCAfQAAAIgGAGQgHAFgIgBIAAAAQAIABAFAGQAGAHgBAIIgCANIgBAPQgCAIgGAEQgGAEgGAAIgDAAgAqADCQgHgEgDgIIgLgeQgDgIAEgHQAEgHAIgDIAAAAQAIgCAHADQAHAEADAIIAKAcQADAIgDAIQgEAHgIADIgHACQgEAAgEgCgAJSCAIgBgBQgHgDgDgHQgEgHADgIIAKgcQACgIAIgEQAHgDAHACIABAAQAIACAEAIQAEAHgDAIIgKAeQgDAIgIADQgEACgEAAIgHgBgAqXB6QgHgDgDgIIgBgDIgBgCIgFgXQgCgIAEgHQADgFAEgDQgFABgFgDQgHgEgCgIIgIgdQgCgHAEgIQAEgEAFgDQgGABgGgDQgHgEgCgIIgIgcQgCgIAEgIQADgFAFgCQgGAAgFgDQgHgEgCgIIgIgdQgCgHAEgHQAEgHAIgDIAAAAQAIgCAHAEQAIAEACAIIAHAdQACAIgEAHQgDAFgFACQAGAAAFADQAIAEACAJIAHAbQACAIgEAHQgDAGgGADQAHgBAFADQAIAEACAHIAHAcQACAIgEAHQgDAFgFADQAGAAAFADQAHAEACAIIAGAYIABABQADAIgEAIQgEAHgIACIgBABIgFABQgFAAgEgDgAJoA8IAAAAQgIgBgEgHQgFgHACgIIAFgdQABgIAGgEQAHgFAHABIABAAQAIABAFAHQAFAGgBAIIgFAfQgCAIgHAFQgFADgFAAIgFgBgAJ0gIIgBAAQgHgBgGgFQgFgGAAgJIAAgdQAAgIAGgGIAGgEIgGgFQgGgFAAgIIgCgeQAAgIAFgHQAGgGAIgBIAAAAQAJAAAGAFQAGAGAAAIIACAfQAAAJgGAGIgGAFQAEABADADQAGAGgBAIIAAAfQAAAIgGAGQgGAFgIAAIgBAAgAwpghQgIgBgGgGQgEgHABgIIAEgeQACgIAGgFQAHgEAHABQgHgCgEgHQgEgGABgJIAHgdQACgIAHgEQAHgFAIACIAAAAQAIACAEAHQAFAHgCAIIgHAcQgBAJgHAEQgGAEgHgBQAGACAEAGQAFAHgBAIIgFAcQgBAIgHAFQgFAEgGAAIgDAAgAQVhPQgGgFgBgIIgFgdQgBgIAFgHQAFgHAIgBQAIgCAGAFQAHAFACAIIAEAfQABAIgFAGQgFAHgIABIAAAAIgDAAQgGAAgGgEgArfiMQgIgEgCgIIgIgdQgCgHAEgIIACgDIgEgBQgHgEgDgIIgJgaQgDgIAEgIQADgFAEgDQgFABgGgDQgHgEgDgIIgKgbQgDgIAEgHQACgFAEgDQgFABgGgCQgHgEgEgHIgLgYQgEgIADgIQACgHAHgEIABAAQAHgEAIADQAIACAEAHIAMAbQAEAIgEAHQgCAGgEADQAGgBAFADQAIADADAIIAKAcQADAIgEAIQgDAFgEADQAFgBAGADQAHAEADAHIAJAcQADAIgEAHIgDADIAFACQAHAFADAIIAIAcQACAIgEAHQgEAHgIADIAAAAIgGABQgFAAgEgDgAQKiUQgGgFgCgIIgGgdQgBgIAEgHQAEgHAIgCQAIgCAHAFQAIAEABAIIAHAfQABAIgFAHQgEAHgIABIgBAAIgDABQgGAAgGgEgAJkiXQgGgGgBgIIgCgeQAAgIAFgHQAGgGAHgBIABAAQAIAAAHAGQAGAFAAAIIACAfQABAIgGAGQgFAGgIABIgBAAIgBAAQgHAAgGgFgAwPipIAAAAQgIgCgEgIQgEgHACgIIAJgeQACgHAIgEQAHgEAIADIABAAQAHACAEAHQAEAIgDAIIgIAcQgDAIgHAEQgEACgFAAIgGAAgAP4jdQgFgFgBgIIgHgZQgCgIAEgHQADgGAGgDQgGABgGgDQgHgEgDgIIgJgcQgDgHAEgIQADgGAGgDQgGACgHgDQgHgEgDgHIgKgcQgDgHADgIQAEgIAHgDQAIgDAHAEQAIADADAIIALAcQADAIgEAHQgDAHgHADQAHgCAHAEQAHAEADAIIAJAcQACAHgDAHQgEAHgGADQAHgBAGADQAHAEADAIIAHAdIABAFIAAAAQAAAJgGAGQgEAEgFABIgFAAIAAAAQgIAAgGgFgAJejeQgGgFgBgIIgDgeQgBgIAFgHQAFgGAIgBIAAAAQAIgBAGAFQAHAFABAIIAEAfQABAIgGAHQgFAGgIABIAAAAIgCAAQgHAAgGgFgAv6jsIgCgBQgHgDgEgIQgDgIADgHIADgIIAAACIAJgZQADgHAIgEQAGgDAHACQgGgDgDgHQgDgHAEgIIANgdQAEgHAIgDQAHgDAIAEIAAAAQAHAEADAIQADAIgEAHIgNAbQgDAHgIADQgGADgGgCQAGADACAGQAEAIgDAIIgJAXIgBACIgDAHQgDAHgIADQgDACgEAAIgGgBgAJWkkQgGgFgCgIIgFgeQgCgIAFgHQAEgGAIgCIABAAQAIgCAGAFQAHAEACAIIAGAgQABAIgFAHQgFAGgIACIAAAAIgDAAQgHAAgFgEgAJKlpQgHgEgCgIIgHgeQgCgIAEgHQAFgHAIgCQAIgCAHAEQAHAFACAIIAHAeQACAHgFAHQgEAIgIABIgFABQgFAAgFgDgAvDlyIAAAAQgHgEgCgIQgCgIAEgHQAJgQAJgMQAFgGAIgBQAJgBAGAFIABABQAGAEABAIQABAIgFAHQgIAKgIANQgEAHgIACIgFABQgFAAgFgDgAs9mEQgIgBgEgHQgIgLgIgIQgGgGAAgIIABgGIgEADQgGAFgIgBQgGAAgGADQgGAFgIgBQgIABgGgGIgCgDQgEgFAAgHQAAgIAGgGIABgBIAFgDQATgLATADQAJABAFAGQAFAHgBAIIgBADIABgBQAGgGAIgBQAJAAAGAGQALAKAKAQQAFAHgCAIQgCAIgHAFIAAAAQgFADgFAAIgFgBgAO8mfQgIgDgDgHIgLgbQgEgIADgHQADgGAFgEQgGACgHgCQgHgDgEgIIgNgaQgEgIADgIQACgHAIgEQAHgEAIADQAIACAEAHIAOAcQADAIgDAIQgCAGgFAEQAGgCAGACQAIADADAIIAMAbQADAIgDAIQgDAHgIADIAAAAQgEACgEAAQgDAAgEgCgAI1mwQgFgFgBgHIgIgZQgCgIAEgHQACgEADgDQgEAAgFgCQgHgDgEgHIgLgcQgEgIADgHQADgIAHgDIABAAQAIgEAHADQAIADADAIIAMAcQAEAIgEAIQgCAFgEADQAFAAAFACQAIAEACAIIAJAcIABAFIAAABQAAAJgGAGQgEADgEACIgGABIAAAAQgIAAgGgGgAOCocQgIgDgEgHIgPgcQgEgHACgIQADgIAGgEIABAAQAHgEAIACQAIADAEAHIAPAcQAEAHgCAIQgDAIgHAEIgBAAQgEADgFAAIgFgBgAIJosQgIgCgEgHIgPgZQgEgHABgIQACgIAHgFIAAAAQAHgEAIABQAIACAFAHIAQAbQAEAIgCAIQgDAHgHAEQgEADgFAAIgGgBgANepbQgIgCgEgHIgPgZQgEgHABgIQACgGAEgEQgFACgGgBQgIgCgFgHIgQgYQgEgHABgIQACgGADgEQgFADgFgBQgIgBgGgHIgRgXQgFgHABgIQABgHAFgFQgGAEgHgBQgIgBgGgGIgSgXQgGgGABgIQABgIAGgGQAGgFAIAAQAJABAFAGIATAXQAGAHgBAIQgBAIgGAFQAHgEAHABQAIABAFAGIASAYQAFAHgBAIQgBAGgEAFQAGgDAGACQAIABAFAHIAQAZQAEAHgCAIQgBAGgEAEQAFgCAGABQAIACAFAHIAQAaQAEAHgCAIQgCAIgHAEIgBAAQgEADgFAAIgGgBgAHmpmQgJgBgFgGIgUgVIgBAAQgHgIgIgJQgFgGABgIQABgIAGgFIABgBIgBAAQgHAEgIgDQgIgCgEgHQgGgOgGgQQgDgIADgHQACgFAEgDQgFAAgEgCQgHgFgCgIIgGgfQgBgIAFgHQAFgHAIgBIABgBQAHAAAGAEQAHAFACAIIAFAdQACAIgEAHIgEAFIAGACQAHADADAIIALAaQAEAHgDAIQgCAGgEADQAFgDAGABQAIABAFAGIAMAMIAAABIABAAIAWAYQAFAGAAAIQgBAJgGAFIgBABQgFAEgHAAIgBAAgAGBs4QgGgGAAgIIABgaIAAgCQAAgIAGgGQAGgGAIAAIADAAQAGABAFAFQAGAGAAAIIAAAEIAAACIgBAWQAAAIgGAGQgFAGgIAAIgBAAIAAAAQgIAAgGgGgAK/s5QgIAAgGgGIgJgKIgBgBIgKgLQgGgGAAgIQAAgFACgEQgEACgFAAQgIAAgGgFIgWgTQgGgFgBgIQgBgGADgFQgEADgGABQgIACgHgFIgXgQQgHgEgCgIQgBgFACgFQgDAEgFADQgHAEgIgDIgLgDIAAAAIgPgDQgJgBgFgGQgDgEgBgEQAAAEgDAEQgEAHgIACQgKADgJAGQgHAFgIgBIgGgCIACAFQACAIgEAHQgGAKgDANQgDAIgHADQgHAEgIgCIAAAAQgIgCgEgIQgEgHACgIQAFgRAJgOQAEgHAIgCQAHgCAHADQgEgGABgHQABgIAHgFQAPgMATgEQAIgCAHAEQAHAFACAIIAAABIAAgBQABgIAGgFQAHgFAIABIAUADIAAAAIAOAEQAIACAEAIQAEAHgDAIQAEgHAIgCQAIgCAHAEIAaARQAGAFACAIQABAHgDAFQAFgEAGgBQAIAAAHAFIAXAUQAGAGAAAIQABAGgDAFQAFgDAFAAQAIAAAGAGIAMAMIgBgBIALAMQAFAGAAAIQAAAIgHAGQgFAFgIAAIgBAAg");
	this.shape.setTransform(0.4,6.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#D2C840","#EEE79D","rgba(222,215,165,0.698)","#FCF6CB","#AA9500"],[0,0.239,0.494,0.792,0.988],2.1,-0.9,0,2.1,-0.9,113.2).s().p("AkrPOQABgIgFgGQgFgHgIgBIgegEQgIgBgHAFQgGAFgCAHIgBAAQACgHgFgHQgEgHgIgCIgdgGQgIgCgHAEQgHAFgCAHIgBAAQACgIgEgHQgDgHgIgDIgdgJQgIgDgHAEQgHAEgDAHIgBgBQADgHgDgIQgDgHgIgEIgbgMQgHgDgIADQgIACgDAIIgBgBIAAAAQAEgHgCgIQgCgIgIgEIgZgPQgIgEgIABQgEACgEACQACgEgBgFQgBgIgHgFIgYgRQgGgFgIABQgIABgFAFQAEgGgBgHQAAgJgHgFIgXgTQgHgFgIABQgIABgFAGIgBgBQAGgGAAgIQgBgIgGgGIgVgUQgGgGgIAAQgIAAgGAGIgBAAIAAAAIAAAAQAGgGABgIQAAgIgGgGIgUgWQgGgGgIgBQgIAAgGAGIgBAAIAAgBIAAAAQAGgGABgIQABgIgGgGIgTgXQgFgGgIgBQgIgBgHAFIAAAAIAAAAIAAgBQAHgFABgIQACgIgFgHIgRgYQgFgHgIgCQgIgBgHAEIgBABIAAgBIABAAQAHgEACgIQACgIgFgIIgPgZQgEgHgIgCQgIgCgHAEIgBgBIABAAQAHgEADgIQACgHgEgIIgNgaQgDgIgIgCQgHgDgGACQAGgDADgHQADgHgDgIIgMgcQgDgHgHgEQgHgDgIACIAAAAQAIgCADgHQAEgIgCgIIgJgcQgCgIgHgEIgEgCIADgEQAEgHgCgIIgGgdQgCgIgHgEQgHgFgIACIAAgBQAIgBAEgHQAFgHgBgIIgFgdQgBgIgGgFQgGgFgIABQgLhpANhpQAJABAGgFQAHgFABgIIAEgdQACgIgFgHQgEgFgGgCQAHABAGgEQAHgFABgIIAHgcQACgIgFgIQgEgHgIgCIAAAAQAIACAHgEQAHgEACgIIAJgcQACgIgEgHQgDgHgIgDIAAAAQAHACAHgDQAIgDADgHIADgHIAAgBIAJgYQADgHgDgIQgDgGgFgDQAGABAGgCQAIgDADgIIANgbQADgHgCgIQgDgIgHgDIgBAAIABgBQAHAEAIgCQAIgCAEgIQAIgNAHgKQAFgGgBgJQgBgHgFgFIABgBIACACQAGAGAIAAQAIAAAFgFQAGgDAGABQAJABAGgFIADgEIAAAGQAAAJAGAFQAIAIAHALQAFAHAIACQAIACAHgFIABACQgHAEgCAHQgDAIAEAHIALAYQADAIAIADQAFACAGgBQgEADgDAFQgDAIADAHIAKAcQACAIAIADQAFADAGgBQgFADgCAGQgEAHADAIIAJAaQACAIAIAEIAEACIgCADQgEAHACAIIAIAcQACAIAHAEQAIAEAHgCIABABQgIACgEAHQgEAHACAIIAHAdQACAIAIAEQAFADAGgBQgFADgDAFQgEAHACAIIAHAcQADAIAHAEQAGAEAGgBQgGACgDAGQgEAGACAIIAHAcQADAIAHAEQAFADAFAAQgFACgDAFQgEAIACAHIAGAYIABABIABADQACAIAIAEQAHADAHgCIABADIgBAAQgHADgEAHQgEAIADAIIAKAeQADAIAIADQAHAEAIgDIAAAAQgHADgDAIQgEAIAEAHIANAcQADAIAIACQAIADAIgEIAAAAIAAAAIAAABQgHAEgDAIQgCAIAEAHIARAaQAFAHAIACQAIABAHgFIAAAAIAAABQgHAFAAAIQgBAJAFAGIAVAXQAFAGAJAAQAIABAGgGQgGAHABAIQABAIAGAFIAZATQAHAFAIgBQAGgBAEgFQgCAGACAGQACAIAHAFIAbAOQAIAEAIgDQAHgCAEgIIAAABQgCAHADAIQADAHAIADIAdALQAHADAIgEQAGgDADgGQgBAGADAGQAFAHAIACIAeAGQAIACAHgFQAFgEACgGQAAAGAFAFQAFAHAIABIAeACQAJABAGgGQAFgEABgHQABAHAFAFQAGAGAIgBIAeAAQAJAAAFgGQAFgFABgHQABAGAFAFQAGAFAJAAIAegDQAIAAAFgHQAEgEABgGQACAFAEADQAHAFAIgBIAegEQAHgCAFgHQAFgGgCgIIADgBIAAABQACAIAHAEQAHAFAIgBIAfgHQAIgBAEgHQAFgHgCgIIAAgBIABAAIAAAAQACAJAHAEQAHAEAIgCIAegHQAIgDAEgHQAEgGgBgGQADAGAFADQAIAEAHgCIAegJQAIgCADgIQAEgHgCgIIAAAAIAAAAQADAIAHAEQAIAEAIgDIAdgLQAIgDADgIQADgHgDgIIAAAAIAAAAQAEAHAHADQAIAEAIgEIAcgNQAHgDADgIQACgGgCgHQAEAGAHACQAHADAIgEIAbgPQAHgFACgIQACgIgEgHQAFAHAIABQAIACAHgEIAagTQAGgFABgIQACgIgFgHIgBAAIABAAIABABQAGAGAIAAQAIAAAGgGIADgDIgBABIARgQQAGgFABgIQAAgJgGgGIgBgBIABAAIAAABQAHAFAIgBQAIAAAFgHIAUgZQAFgHgBgIQgBgIgGgEQAHADAHgCQAIgCAEgHIAPgbQAEgIgCgIQgDgHgHgEIgBgBIAAAAIABAAQAHADAIgDQAHgEADgIIALgeQACgHgEgIQgDgHgIgDIgBAAIAAAAIAAAAQAIACAHgFQAHgEACgJIAFgfQABgIgFgGQgFgGgIgBIgBAAIAAgBIABAAQAIABAGgGQAGgGABgIIAAgfQAAgIgGgGQgDgDgDgBIAGgFQAGgGAAgIIgCgfQAAgJgHgFQgGgFgIAAIAAgBIAAAAQAJAAAFgGQAGgHgBgIIgCgeQAAgJgHgFQgGgGgIABIgBAAIAAgBQAIAAAFgHQAFgGAAgJIgEgfQgBgIgHgFQgGgFgIABIgBgBIABAAQAIgBAFgHQAFgHgCgIIgFgfQgCgIgHgFQgHgEgHABIAAAAQAIgCAEgHQAFgHgCgIIgHgeQgCgIgHgEQgIgEgIABIAAAAQAFgBAEgEQAGgGAAgIIAAgBIgBgGIgJgcQgCgIgIgDQgFgDgFAAQAEgDACgFQADgIgDgHIgMgdQgDgHgIgDQgIgDgHADIgBAAIAAAAQAHgEACgIQADgIgEgHIgRgbQgEgHgIgCQgIgCgHAFIgBAAIAAgBIABgBQAGgFABgIQAAgIgFgHIgXgXIAAgBIgBAAIgLgMQgFgHgIgBQgHAAgFADQAFgEACgGQADgIgEgHIgLgaQgDgHgIgEIgGgCIAFgFQAEgHgCgIIgGgcQgBgIgHgFQgGgFgHABIAAgBQAHAAAGgFQAGgGAAgJIABgWIAAgCIAAgEQAAgIgGgGQgFgEgGgBIAAgCQAIACAHgEQAHgEACgIQAEgMAGgLQAEgHgCgIIgCgFIAGACQAIABAHgFQAIgGALgDQAIgBAEgIQADgDAAgFQABAFADADQAFAHAIABIAQACIgBAAIAMADQAIADAHgEQAFgCACgFQgBAFABAGQACAIAHAEIAXAPQAHAFAIgBQAFgBAEgEQgCAFABAGQAAAIAHAFIAWATQAGAGAIgBQAFAAAEgCQgCAEAAAFQAAAJAFAGIALAKIAAABIAKAKQAFAGAJAAQAIABAGgGIABABQgHAFAAAIQgBAJAFAGIATAWQAFAHAJAAQAHABAGgEQgGAFgBAHQgBAJAFAGIASAXQAFAHAIABQAGABAFgCQgEAEgBAFQgCAJAFAGIAQAZQAEAHAIABQAGACAGgDQgFAFgBAGQgCAIAFAHIAPAYQAEAIAIACQAIACAHgEIABgBIAAABQgHAEgCAHQgDAIAEAHIAPAcQAEAIAIACQAIACAHgDIAAAAQgHAEgCAIQgDAIAEAHIANAbQADAHAIADQAGADAHgCQgGADgCAGQgDAIADAHIAMAbQADAIAHADQAIADAIgDIAAAAQgIADgDAHQgDAIADAIIAKAbQADAIAHADQAGADAHgBQgGADgDAGQgEAHADAIIAJAcQACAIAIAEQAGADAGgBQgGACgDAGQgEAHACAIIAHAaQAAAHAFAFQAGAGAJAAIAFgBIAAACQgIACgEAHQgFAHACAIIAGAdQABAIAHAFQAHAFAIgBIAAAAIAAAAQgIACgFAGQgEAHABAIIAEAeQACAIAGAFQAHAFAIgBIAAAAQgJABgFAGQgFAHABAIIACAdQABAIAGAGQAGAFAIAAQgIAAgFAGQgGAFAAAJIABAdQAAAIAFAGQAGAGAIAAQgIAAgGAFQgGAGAAAIIgCAeQAAAIAFAGQAFAGAIABQgIgBgGAGQgHAFAAAIIgCAMIAAABIgBAMQgBAIAFAHQAEAGAIABIAAABQgIgBgGAEQgIAEgCAIIgIAdQgCAIAEAHQACAFAFADQgGgBgFACQgIAEgDAHIgLAbQgEAIADAHQADAIAIADIAAAAQgHgEgIADQgIACgEAHIgOAaQgEAHACAIQABAGAEADQgFgCgGABQgIACgFAHIgQAXQgFAHABAIQABAGAEAFQgFgDgGAAQgJABgFAHIgTAWQgFAHAAAIQABAHAFAFQgGgEgHAAQgIABgGAGIgUAVQgFAGAAAIIAAAEIgFAAQgIAAgGAGIgWAVQgGAFAAAIQgBAJAGAFIgBABIAAgBQgFgGgJgBQgIAAgGAFIgXAUQgHAGAAAIQgBAIAFAGIAAABQgFgHgIgBQgIgBgHAFIgYASQgGAFgCAIQgBAHAEAGQgFgFgHgCQgIgBgHAFIgYAQQgHAFgCAIQgBAHAEAGQgFgFgHgCQgIgCgHAFIgZAPQgHAFgCAIQgCAHADAGQgEgGgHgCQgIgCgHAEIgaAOQgHAEgDAIQgCAIAEAHQgEgHgIgDQgIgCgHAEIgbANQgHAEgDAHQgCAIADAHIAAAAQgEgHgHgDQgIgDgHAEIgcALQgHAEgDAHIgCAHIgGgDQgHgDgIADIgdAMQgIAEgDAHQgDAIACAHIAAAAQgDgHgHgEQgIgDgIADIgcAKQgHADgEAHQgDAHACAIIAAAAQgCgHgIgEQgHgEgIACIgdAJQgIADgEAHQgDAHACAIIgBAAQgCgHgHgEQgHgEgIACIgdAIQgIACgEAHQgEAHACAHQgCgHgHgFQgIgEgIACIgcAGQgIACgFAHQgDAGAAAGQgCgGgFgEQgHgFgIACIgdAFQgIABgFAHQgFAGABAIQhMALhKABIgbABQg0AAgygFg");
	this.shape_1.setTransform(0,6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(4));

	// tail
	this.instance_27 = new lib.tail2("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(-87,-38,1,1,0,0,0,-28.6,33.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109,-106.7,218.1,213.5);


(lib.plankton3all_yellow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// spots
	this.instance = new lib.tail3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(124.1,-32.9,0.999,0.999,15.8,0,0,-27.9,33);

	this.instance_1 = new lib.Path_6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(99.3,-7.3,1,1,0,0,0,13.1,10.7);
	this.instance_1.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);
	this.instance_1.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 116.5, 80, 19, 0)];
	this.instance_1.cache(1,1,24,19);

	this.instance_2 = new lib.Path_7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(67.6,-11,1,1,0,0,0,10.7,9.8);
	this.instance_2.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);
	this.instance_2.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 116.5, 80, 19, 0)];
	this.instance_2.cache(1,1,20,18);

	this.instance_3 = new lib.Path_8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(94,-20.7,1,1,0,0,0,15.8,14.6);
	this.instance_3.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);
	this.instance_3.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 116.5, 80, 19, 0)];
	this.instance_3.cache(1,1,30,27);

	this.instance_4 = new lib.Path_31_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-34.2,12.9,1,1,0,0,0,35.2,7.2);
	this.instance_4.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);
	this.instance_4.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 116.5, 80, 19, 0)];
	this.instance_4.cache(1,1,69,13);

	this.instance_5 = new lib.Path_32_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-18.9,24.9,1,1,0,0,0,13,9.5);
	this.instance_5.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);
	this.instance_5.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 116.5, 80, 19, 0)];
	this.instance_5.cache(1,1,24,17);

	this.instance_6 = new lib.Path_33_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-76.1,15.5,1,1,0,0,0,12.1,11.7);
	this.instance_6.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);
	this.instance_6.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 116.5, 80, 19, 0)];
	this.instance_6.cache(1,1,22,21);

	this.instance_7 = new lib.Path_34_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1.5,23.2,1,1,0,0,0,10.8,8.4);
	this.instance_7.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);
	this.instance_7.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 116.5, 80, 19, 0)];
	this.instance_7.cache(1,1,20,15);

	this.instance_8 = new lib.Path_49_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(6.2,6.6,1,1,0,0,0,20.9,14);
	this.instance_8.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);
	this.instance_8.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 116.5, 80, 19, 0)];
	this.instance_8.cache(1,1,40,26);

	this.instance_9 = new lib.Path_50_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(39.8,13.5,1,1,0,0,0,19.9,15.5);
	this.instance_9.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);
	this.instance_9.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 116.5, 80, 19, 0)];
	this.instance_9.cache(1,1,38,29);

	this.instance_10 = new lib.Path_51_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(41.2,-6.4,1,1,0,0,0,18.8,10.8);
	this.instance_10.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);
	this.instance_10.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 116.5, 80, 19, 0)];
	this.instance_10.cache(1,1,36,20);

	this.instance_11 = new lib.Path_73();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-110,-20,1,1,0,0,0,12.7,13.6);
	this.instance_11.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);
	this.instance_11.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 116.5, 80, 19, 0)];
	this.instance_11.cache(1,1,23,25);

	this.instance_12 = new lib.Path_74();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-93.3,-3.2,1,1,0,0,0,14.2,15);
	this.instance_12.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);
	this.instance_12.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 116.5, 80, 19, 0)];
	this.instance_12.cache(1,1,26,28);

	this.instance_13 = new lib.Path_84();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-48.8,2.6,1,1,0,0,0,13.1,8.3);
	this.instance_13.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);
	this.instance_13.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 116.5, 80, 19, 0)];
	this.instance_13.cache(1,1,24,15);

	this.instance_14 = new lib.Path_92();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-69,0.2,1,1,0,0,0,11.6,10.1);
	this.instance_14.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);
	this.instance_14.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 116.5, 80, 19, 0)];
	this.instance_14.cache(1,1,21,18);

	this.instance_15 = new lib.Path_97();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-26.6,3.6,1,1,0,0,0,11.3,6);
	this.instance_15.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);
	this.instance_15.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 116.5, 80, 19, 0)];
	this.instance_15.cache(1,1,21,10);

	this.instance_16 = new lib.Path_98();
	this.instance_16.parent = this;
	this.instance_16.setTransform(18.3,22.7,1,1,0,0,0,9,6.9);
	this.instance_16.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);
	this.instance_16.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 116.5, 80, 19, 0)];
	this.instance_16.cache(1,1,16,12);

	this.instance_17 = new lib.Path_0();
	this.instance_17.parent = this;
	this.instance_17.setTransform(73.4,1.6,1,1,0,0,0,15,13);
	this.instance_17.alpha = 0.539;
	this.instance_17.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_18 = new lib.Path_1_0();
	this.instance_18.parent = this;
	this.instance_18.setTransform(73.4,1.6,1,1,0,0,0,15,13);
	this.instance_18.alpha = 0.82;
	this.instance_18.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(4));

	// top color
	this.instance_19 = new lib.color3();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-0.2,-0.1,1,1,0,0,0,-0.2,-0.1);
	this.instance_19.alpha = 0.551;
	this.instance_19.filters = [new cjs.ColorFilter(1, 1, 1, 1, 152, -25, -27, 0)];
	this.instance_19.cache(-126,-38,251,76);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(4));

	// texture
	this.instance_20 = new lib.texture("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(1.3,0.8,1,1,0,0,0,122.2,35.4);
	this.instance_20.alpha = 0.328;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(4));

	// bkgr
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6E6E6").s().p("Ak0F9IgfAAQgIAAgGgGQgGgGAAgIIAAgBQABgIAFgFQAGgGAIAAIAfAAQAIAAAGAGQAGAFAAAJIAAAAQAAAIgGAGQgGAGgIAAIAAAAgAkZF3QgGgGgBgIIAAAAQAAgJAGgFQAGgGAIgBIAegBQAJAAAGAGQAGAFAAAJQAAAIgGAGQgFAGgIAAIgfABIAAAAQgIAAgGgFgAl8F8IgegBQgIAAgGgGQgFgHAAgIIAAgBQABgHAFgGQAGgFAJAAIAeABQAIAAAFAGQAGAGAAAIIAAABQAAAIgGAFQgGAGgIAAIgBAAgAjSF1QgGgGgBgIIAAAAQAAgIAFgGQAGgHAIAAIAegCQAIgBAHAGQAGAFAAAIIAAABQABAIgGAGQgFAGgIABIgeACIgCAAQgHAAgGgFgAnEF4IgHgBIAAAAIgUgCQgIgBgGgGQgEgFAAgGQgCAGgFAEQgGAFgJgBIgfgDQgIgCgFgGQgFgHABgIIAAAAQABgIAHgFQAHgFAIABIAdADQAJABAFAHQAEAFAAAGQACgGAFgEQAHgGAIABIAUACIABABIAHABQAIABAFAGQAFAGgBAHIAAACQgBAIgHAFQgFAEgGAAIgDAAgAiLFwQgGgFgBgIIAAgBQAAgIAFgGQAFgGAJgBIAdgCQAIgBAHAFQAGAFABAIIAAABQABAIgGAHQgFAGgIABIgfACIgBAAQgIAAgFgFgAhEFqQgHgFgBgIIAAgBQAAgIAFgGQAFgGAIgBIAegDQAJgCAGAGQAHAEABAIIAAABQABAIgFAHQgFAGgJABIgfAEIgCAAQgHAAgFgFgApPFnIgfgGQgIgCgFgHQgEgHABgIIAAABQgCAIgHAEQgHAEgIgCIgegIQgIgCgEgHQgEgIACgHIAAgBQAhAKAjAIQAiAIAkAGIAAAAQgBAIgHAFQgGADgFAAIgEAAgAACFiQgGgFgBgIIAAgBQgBgIAFgGQAEgHAIgBIAegEQAIgCAHAFQAHAFABAIIAAABQABAHgEAHQgFAHgIABIgfAFIgDAAQgHAAgFgEgABLFZQgHgEgDgIIAAgCQgBgHAEgGQAEgIAIgCIAEgBIACAAIAYgEQAIgBAGAFQAHAEACAJQABAIgFAGQgFAHgIACIgWADIgEABIgFABQgFAAgFgDgACNFNQgGgFgCgIQgBgJAFgGQAFgHAIgBIAdgGQAIgBAHAEQAHAFABAIIAAAAQACAIgEAHQgFAHgIABIgfAGIgDAAQgGAAgGgDgArcFDIgegMQgIgDgDgIQgDgHADgIQAEgIAHgDQAIgDAIADIAcAMQAIACADAIQAEAHgDAIIAAAAQgDAIgIAEQgEABgEAAIgHgBgADTFAQgGgFgCgIIAAAAQgCgIAFgHQAEgHAIgBIAegGQAIgCAHAFQAHAEABAIIAAAAQACAIgEAHQgFAHgIACIgeAGIgEAAQgGAAgFgDgAEYEyQgGgFgCgIIAAAAQgCgIAFgHQAEgHAIgCIAdgGQAIgCAHAEQAHAEACAIQgCgIAEgHQAFgHAIgCIAdgHQAIgCAHAFQAHAEACAIQACAIgFAHQgEAHgIACIgdAHQgIACgHgEQgHgEgCgIQACAIgFAHQgEAHgIACIgeAGIgEABQgGAAgFgDgAsgEmIgcgPQgHgFgCgHQgCgHADgHQgFAGgIABQgIABgHgFIgXgSQgHgFgBgIQgBgHAEgFQgFAEgHABQgIABgHgFIgYgSQgGgGgBgIQgBgIAFgHIAAAAQAFgGAIgBQAIgBAHAFIAXASQAHAFABAJQABAGgDAGQAFgFAGAAQAJgCAGAGIAXARQAHAFABAJQABAFgCAFQAEgEAGgCQAIgCAHAEIAaAOQAHAEADAIQADAHgEAIQgEAHgIADIgGABQgFAAgEgCgAGiERQgIgEgCgIQgCgIAEgHQAEgHAIgCIAdgIQAIgDAHAFQAHAEADAIIAAAAQACAHgEAIQgEAHgIACIgdAIIgGABQgFAAgEgDgAHmD+QgHgEgDgHIAAgBQgCgIAEgHQAEgHAIgCIAcgJQAIgCAIAEQAGADADAHQgCgHAEgHQAEgHAHgDIAcgJQAIgCAHAEQAHADADAGQgCgGADgGQAEgIAIgDIAdgKQAIgCAHADQAEACADADQAAgEACgEQAEgIAHgDIAcgKQAIgDAHAEQAIADADAIIAAAAQADAHgDAIQgEAHgHADIgeALQgHADgIgEQgEgCgCgDQAAAFgDAEQgDAIgIACIgdAKQgIADgHgEQgHgDgDgHQABAHgDAGQgEAIgIACIgcAJQgHADgIgEQgGgDgDgHQACAHgEAHQgEAHgIACIgdAJIgGABQgFAAgEgDgAvPCpIgXgUQgGgGAAgIQAAgJAFgGQAGgGAIAAQAIgBAGAGIAWAUQAHAFAAAJQABAHgFAHIgBAAQgFAGgIABIgCAAQgHAAgGgFgALvCmQgHgEgEgHIAAAAQgDgIAEgIQADgHAIgDIAcgLQAHgDAIADQAHADADAIIAAAAQAEAIgEAHQgDAIgIADIgcALIgHABQgEAAgEgBgAMwCLQgHgDgEgHQgDgIADgIQADgHAIgEIAbgLQAIgEAIADQAGADADAFQgCgGADgGQACgIAIgEIAbgNQAHgDAIADQAHACADAFQgCgGACgHQACgIAIgDIAagOQAHgEAIACQAIACAEAIQAEAHgCAIQgDAIgHAEIgbAOQgHAEgIgDQgHgCgEgGQADAHgDAHQgCAIgIADIgbANQgHAEgIgDQgHgCgDgGQACAHgDAGQgDAIgIADIgbAMQgEACgEAAQgEAAgEgCgAwEB4IgWgVQgGgGAAgIQAAgJAGgFIAAAAQAGgGAIAAQAJAAAGAGIAVAUQAGAGAAAIQAAAJgGAGQgFAGgJAAIAAAAQgIAAgGgGgAwoBMQgIAAgGgGIgVgXQgFgGAAgIQAAgIAGgGIABAAQAGgGAIABQAIAAAGAGIAUAWQAGAGgBAIQAAAJgGAFQgGAGgHAAIgBAAgAPvAvQgIgDgEgHQgEgHACgIQACgIAHgEIAagOQAHgEAIACQAGACAEAEQgCgFABgHQACgIAGgEIAagRQAHgFAIACIAEABIAAgEQACgJAGgEIAXgSQAGgFAIABQAGAAAEADQgDgEAAgGQAAgIAGgGIATgUQAFgHAIgBQAJAAAGAFIAAAAQAHAFAAAIQABAJgFAGQgKAMgLAMQgGAFgJAAQgGAAgFgDQADAFgBAHQAAAIgHAFIgYATQgHAFgIgBIgFgCIAAAFQgCAIgHAFIgaAQQgGAFgJgCQgGgCgFgFQADAHgCAHQgCAHgHAFIgaAPQgFACgFAAIgFAAgAxZAXQgIgBgFgHIgKgNIAAAAIgIgIQgFgHABgIQABgIAHgFQAGgGAIACQAJABAFAGIAHAJIAAABIAKANQAFAGgBAHQgBAIgFAFIgBABQgGAEgGAAIgDAAgAkcgSQgFgFgBgGQgBAGgFAFQgHAFgIAAIgfgDQgIgBgFgGQgFgGAAgJIAAAAIAAABQgBAIgHAFQgGAFgIgBIgfgEQgIgCgFgHQgEgFAAgHQgCAHgGAEQgGAEgJgCIgdgGQgIgCgFgHQgDgGAAgGQgCAGgGADQgHAEgIgCIgdgJQgHgDgEgHQgDgGABgGQgDAFgGADQgIADgHgCIgdgLQgHgDgEgIQgDgIADgHQgDAHgHADQgHADgIgDIgLgFIgBAAIgbgNQgHgEgDgIQgCgIAEgHIAAAAIgBAAQgDAHgIADQgIACgIgEIgagPQgHgEgCgIQgCgGACgGQgEAFgGABQgIACgIgEIgagRQgHgEgCgIQgCgIAEgHIgBABQgFAHgIABQgIABgHgFIgDgCIgVgOQgHgEgCgIQgBgFABgFQgDADgGABQgIACgHgEIgZgQQgHgEgCgIQgBgGACgFQgEAEgFACQgIACgIgEIgYgOQgHgDgDgIQgCgFABgFQgDAEgFACQgIADgHgDIgbgJQgHgDgEgHQgCgFAAgFQgDAEgEADQgHAEgIgCIgcgGQgIgCgFgHQgCgEgBgEQgBAEgEADQgFAGgIAAQgOABgNACQgIACgHgEIgFgFIAAAHQgBAIgHAFQgIAHgFAJQgEAHgIADQgHACgGgDIgCAAQgHgEgDgIQgCgIAEgHQAJgSAPgMQAHgFAIACQAIABAFAGIAAAAQgBgIAEgHQAFgHAIgCQAPgDASgBQAJAAAGAGQAFAFABAHQACgHAFgEQAHgEAIABIAfAHQAIACAEAHQADAFAAAGQADgFAFgCQAIgEAHADIAcAKQAIADADAIQADAFgBAGQADgEAGgCQAHgDAIADIAbAPQAIAEACAIQABAGgCAGQAEgFAGgBQAIgCAHAEIAaAQQAHAEABAIQACAFgCAFQAEgDAFgBQAIgCAHAEIAWAPIABAAIAEADQAHAFABAJQABAHgDAGQAEgHAIgCQAIgCAHAEIAaARQAIAEABAIQACAGgCAGQAEgFAGgBQAIgDAHAFIAZAOQAIAEACAIQACAHgDAHQAEgHAHgCQAIgDAHAEIAaAMIABABIAAAAIABAAIAAAAIAIAEQAIADADAIQADAHgDAHQADgGAHgDQAIgDAHADIAbAKQAIADADAHQADAGgBAGQADgFAFgDQAIgEAHADIAcAIQAIACAEAIQADAFgBAFQADgFAFgDQAHgEAIACIAcAGQAJACAEAHQAEAFgBAHQACgHAGgDQAHgFAIABIAdAFQAIABAFAGQAFAGgBAIQACgIAGgFQAGgGAIABIAeADQAIAAAFAHQAFAEAAAGQABgGAFgEQAGgGAIAAIAdgBQAIAAAGAGQAGAFAAAIQAAgIAFgFQAGgHAIAAIAdgDQAJgBAGAGQAHAFAAAIQABAJgFAGQgFAGgJABIgeADQgJAAgGgFQgGgGgBgIQABAIgGAGQgGAGgIAAIgeABIAAAAQgIAAgGgGgAiPgZQgGgFgBgIIAAgBQgBgHAEgHQAGgGAIgBIAdgEQAIgCAGAFQAHAFABAIIAAABQABAIgFAGQgFAHgIABIgdAEIgDAAQgGAAgGgEgAyEggQgIgCgFgGIgSgaQgEgHABgIQACgIAHgFIAAAAQAHgEAIABQAIACAFAHIAQAYQAFAHgBAIQgCAIgGAFQgGAEgGAAIgDAAgAhFgkQgHgFgBgIIAAAAQgCgJAFgGQAFgHAIgBIAegFQAIgCAHAFQAHAFABAIIAAAAQACAIgFAHQgFAHgIABIgeAFIgEAAQgGAAgFgDgAAAgxQgFgFgCgIQgCgIAFgHQAEgHAHgBIAegGQAJgCAGAFQAHAEACAIIAAABQACAIgFAGQgEAHgJACIgeAGIgEAAQgGAAgFgDgABGg/QgGgEgCgIIAAgBQgCgIAFgHQAEgHAIgBIAdgGQAJgCAGAFQAHAEACAIQgCgIAFgHQAEgHAIgBIAdgGQAJgCAGAFQAHAEACAIQgCgIAEgHQAFgHAIgCIAdgHQAIgCAHAEQAHAEACAHQgBgHADgGQAFgHAIgCIAdgHQAIgCAHAEQAFADACAFQAAgGADgFQAFgHAIgCIAdgHQAIgCAHAEQAGAEACAGQgBgHAEgFQAEgIAIgCIAdgIQAIgCAHAEQAGADACAGQgBgGAEgGQAEgIAIgCIAdgIQAIgCAHAEQAGADACAGQgBgGADgGQAEgHAIgDIAcgJQAIgCAHAEQAHADADAHQgCgHAEgHQAEgHAHgDIAdgJQAIgCAHAEQAHADACAHQgBgHADgHQAEgHAIgDIAbgJQAIgDAHAEQAHADADAHQgCgHADgHQAEgHAIgDIAcgKQAHgDAIAEQAHADADAIQgDgIAEgHQADgIAIgCIAcgKQAIgDAHADQAHADADAGQgCgGADgHQADgHAIgDIAcgLQAHgDAIADQAHADADAHQgDgHAEgIQADgIAIgCIASgIIABAAIAIgDQAIgDAHAEQAIADADAIIAAABQACAHgDAHQgDAIgIADIgHACIgBABIgTAHQgIADgHgDQgHgEgEgHQAEAIgEAHQgDAIgIADIgcALQgHADgIgDQgHgDgDgGQACAGgDAHQgEAHgHADIgcAKQgIADgIgEQgHgDgDgIQADAIgEAHQgDAIgIADIgcAKQgIACgHgDQgHgDgDgHQACAHgDAGQgEAIgHADIgdAJQgIADgHgEQgHgDgDgHQACAHgDAGQgEAIgIACIgdAJQgHADgIgEQgGgEgDgGQACAHgEAGQgEAIgIACIgcAJQgIADgHgEQgHgDgCgHQABAHgEAGQgEAHgIADIgdAIQgIACgHgEQgGgEgCgGQABAHgEAGQgEAHgIADIgdAIQgIACgHgEQgGgEgDgHQABAHgEAHQgEAHgIACIgdAHQgIACgHgFQgFgDgDgFQABAGgEAGQgEAHgIACIgdAHQgIACgHgFQgHgEgCgHQABAHgEAHQgEAHgIACIgdAHQgIACgHgFQgHgEgCgIQACAIgFAHQgEAHgJACIgdAGQgIACgHgFQgGgEgCgIQACAIgFAGQgEAHgJACIgdAGIgEAAQgGAAgFgDgAythcQgIgCgEgHIgPgcQgEgIADgHQADgIAHgEIAAAAQAIgEAHADQAIACAEAIIAOAZQAEAHgCAIQgCAIgHAFQgFACgFAAIgGAAgAS6h/IAAAAQgHgEgCgIQgBgIAEgHQAHgMAFgMQADgIAHgEQAEgCADAAIgFgEQgFgHAAgIQACgMgCgMQgCgIAFgHQADgEAEgCQgFABgFgBQgIgCgEgHIgLgPIAAAAIgEgEQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGIAGAHIAAAAQAIAKAGAKQAEAHgCAIQgBAIgIAEIgBABIACAAQAIgCAHAFQAHAFABAIQADARgCASQAAAIgHAFQgFAFgHAAQAGADACAGQAEAHgDAIQgFAQgKAQQgEAHgIACIgFAAQgGAAgFgDgAzOidQgIgDgDgIQgGgQgFgPQgCgIAEgHQAEgHAIgCIAAAAQAIgDAHAEQAHAEADAIQADANAGAOQADAHgDAIQgDAIgIADIAAAAQgEABgEAAQgDAAgEgBgAzmjkQgGgGgBgIQgDgSABgQQAAgIAGgGQAGgFAJAAIABAAQAIABAEAFQAGAGAAAJQgBAMACAPQABAIgFAHQgFAGgHABIgBABIgDAAQgGAAgGgEgASRk0QgLgIgNgFQgHgDgDgIQgDgHADgHIAAgBQADgIAIgDQAIgDAHADQAQAHAOAJQAHAEABAJQACAIgEAHIgBABQgFAGgHABIgEABQgGAAgFgDgARSliQgVgFgVAAIAAgCQABgIAHgFQAHgFAIABIAYAEIAAAAIAIACQAIACAFAIQAEAHgCAIIAAAAQgNgEgPgDgAPilhQgBgIAFgHQAFgHAIgBQAQgDAQgBQAIAAAGAFQAGAGABAIIAAACQgjgCgjAJIAAgBg");
	this.shape.setTransform(0.1,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#BFBE67","#DED00A","#D7D568"],[0,0.518,0.976],0.4,0,0,0.4,0,91.6).s().p("AkcFpQAAgJgGgFQgGgGgIAAIgeAAQgJAAgGAGQgFAFgBAIIAAAAQAAgIgFgGQgGgGgIAAIgegBQgJAAgGAFQgFAGgBAHIAAAAQAAgHgFgGQgFgGgIgBIgHgBIAAgBIgVgCQgIAAgHAFQgFAEgCAGQAAgGgEgFQgFgHgJgBIgdgDQgIgBgHAFQgGAFgCAIIgBAAQgkgGgigIQgjgIgggKIgBAAQADgIgEgHQgDgIgIgCIgcgMQgIgDgHADQgIADgEAIIAAAAQAEgIgDgHQgDgIgHgEIgagOQgHgEgIACQgGACgEAEQACgFgBgFQgBgJgHgFIgXgRQgGgFgIABQgHAAgFAFQADgGgBgGQgBgJgGgFIgYgSQgHgFgIABQgIABgFAGIAAAAQAFgHAAgHQgBgJgGgFIgXgUQgGgGgIABQgIAAgGAGIgBAAQAGgGAAgJQAAgIgGgGIgVgUQgGgGgJAAQgIAAgFAGIgBgBQAGgFAAgJQABgIgGgGIgUgWQgGgGgIAAQgIgBgGAGIAAgBQAFgFABgIQABgHgFgGIgKgNIAAgBIgHgJQgFgGgJgBQgIgBgGAFIgBgCQAGgFACgIQABgIgFgHIgQgYQgFgHgIgCQgIgBgHAEIAAAAIAAAAQAHgFACgIQACgIgEgHIgOgZQgEgIgIgCQgHgDgIAEIAAgBIAAAAQAIgDADgIQADgIgDgHQgGgOgDgNQgDgIgHgEQgHgEgIADIAAgCQAHgBAFgGQAFgGgBgJQgBgOAAgNQAAgJgFgGQgFgFgIgBIABgCQAGADAHgCQAIgDAEgHQAFgJAJgHQAGgFABgIIAAgHIAFAFQAHAEAIgCQANgCAOgBQAIAAAFgGQAEgDABgEQABAEACAEQAFAHAJACIAbAGQAIACAHgEQAEgDADgEQAAAFACAFQAEAHAIADIAaAJQAHADAIgDQAFgCADgEQgBAFACAFQADAIAHADIAYAOQAIAEAIgCQAFgCAEgEQgCAFACAGQABAIAIAEIAYAQQAHAEAIgCQAGgBADgDQgBAFABAFQACAIAHAEIAWAOIADACQAGAFAIgBQAIgBAFgHIABgBQgEAHACAIQACAIAHAEIAbARQAHAEAIgCQAGgBAFgFQgDAGACAGQACAIAHAEIAbAPQAHAEAIgCQAIgDAEgHIAAAAIAAAAQgEAHACAIQADAIAIAEIAbANIAAAAIALAFQAIADAHgDQAHgDAEgHQgEAHAEAIQADAIAIADIAcALQAIACAHgDQAGgDADgFQgBAGADAGQAEAHAHADIAdAJQAIACAHgEQAGgDACgGQAAAGADAGQAFAHAIACIAdAGQAJACAHgEQAFgEADgHQgBAHAEAFQAFAHAIACIAfAEQAIABAGgFQAHgFABgIIAAgBIAAAAQAAAJAFAGQAFAGAIABIAfADQAIAAAHgFQAFgFABgGQABAGAFAFQAGAGAIAAIAegBQAIAAAGgGQAGgGAAgIQAAAIAGAGQAHAFAIAAIAfgDQAIgBAFgGQAFgGAAgJIAAAAIAAABQABAIAGAFQAHAFAIgBIAdgEQAIgBAGgHQAEgGgBgIIAAgBIAEgBIABAAQABAIAHAFQAHAEAIgBIAegFQAIgBAFgHQAFgHgCgIIAAAAIABgBQACAIAFAFQAHAFAIgCIAegGQAJgCAEgHQAFgGgCgIIABAAQACAIAGAEQAHAFAJgCIAcgGQAJgCAEgHQAFgGgCgIQACAIAHAEQAGAFAIgCIAegGQAIgCAEgHQAFgHgCgIQACAIAHAEQAHAFAIgCIAdgHQAIgCAFgHQADgHgBgHQACAHAHAEQAHAFAIgCIAdgHQAIgCAEgHQAEgGAAgGQACAFAFADQAHAFAIgCIAdgHQAIgCAFgHQADgHgBgHQADAHAGAEQAHAEAIgCIAdgIQAIgDAEgHQAEgGgBgHQACAGAGAEQAHAEAIgCIAdgIQAIgDAEgHQAEgGgBgHQACAHAHADQAHAEAIgDIAdgJQAHgCAEgIQAEgGgCgHQADAHAGADQAIAEAHgDIAdgJQAIgCAEgIQADgGgBgHQACAHAHADQAHAEAIgDIAdgJQAHgDAEgIQADgGgCgHQADAHAHADQAHADAIgCIAcgKQAIgDADgIQAEgHgDgIQADAIAHADQAIAEAIgDIAcgKQAHgDAEgHQADgHgCgGQADAGAHADQAIADAHgDIAcgLQAIgDADgIQAEgHgDgIQADAHAHAEQAHADAIgDIATgHIABgBIAHgCQAIgDADgIQADgHgCgHIABgBQAigJAjACQAVAAAVAFQAPADANAEIABABQgDAHADAHQADAIAIADQAMAGALAHQAHAEAIgCQAHgBAFgGIAAAAQgGAGABAIQgBAJAGAGIAEAEIAAAAIALAPQAEAHAIACQAFABAFgBQgEACgDAEQgFAHACAIQACAMgCAMQAAAIAFAHIAFAEQgDABgEABQgHAEgDAIQgFAMgHAMQgEAHACAIQABAIAHAEIAAABQgGgFgJAAQgIABgFAHIgTAUQgGAGAAAIQAAAGADAEQgEgDgGAAQgIgBgGAFIgXASQgGAEgCAJIAAAEIgEgBQgIgCgHAFIgaARQgGAEgCAIQgBAHACAFQgEgEgGgCQgIgCgHAEIgaAOQgHAEgCAIQgCAIAEAHIgBABQgEgIgIgCQgIgCgHAEIgaAOQgIADgCAIQgCAHACAGQgDgFgHgCQgIgDgHADIgbANQgIAEgCAIQgDAGACAGQgDgFgGgDQgIgDgIAEIgbALQgHAEgDAHQgEAIAEAIIgBAAQgDgIgHgDQgIgDgHADIgcALQgIADgDAHQgEAIAEAIIAAAAIgBAAIAAAAQgDgIgIgDQgHgEgIADIgbAKQgIADgEAIQgCAEAAAEQgDgDgEgCQgHgDgIACIgdAKQgIADgEAIQgDAGACAGQgDgGgHgDQgHgEgIACIgcAJQgHADgEAHQgEAHACAHQgDgHgGgDQgIgEgHACIgdAJQgIACgEAHQgEAHACAIIAAABIAAAAIAAAAQgCgIgIgEQgHgFgIADIgdAIQgIACgEAHQgEAHACAIIAAAAQgCgIgHgEQgHgFgIACIgdAHQgIACgFAHQgEAHACAIQgCgHgHgFQgHgEgIACIgdAGQgIACgEAHQgFAHACAIIAAAAIAAAAQgCgIgHgEQgHgFgIACIgdAGQgJABgEAHQgFAHACAIIAAAAIAAAAQgCgIgHgFQgHgEgIABIgdAGQgIABgFAHQgFAHABAIIAAAAQgCgJgHgEQgGgFgIABIgYAEIgCAAIgEABQgIACgEAIQgEAGABAHIgBAAIAAgBQgBgIgHgFQgHgFgIACIgeAEQgIABgFAHQgEAGABAIIAAAAQgBgIgHgEQgGgFgJABIgdADQgJABgFAGQgFAGABAIIgBAAQgBgIgGgFQgHgFgIABIgdACQgJABgFAGQgFAGAAAIIgBAAQAAgIgGgFQgHgGgIABIgeACQgIAAgFAHQgGAGAAAIIAAAAQAAgJgGgFQgGgGgJAAIgeABQgIABgGAGQgGAGAAAIg");
	this.shape_1.setTransform(-0.3,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.3,-84.1,333.1,123.5);


(lib.plankton3all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// spots
	this.instance = new lib.tail3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(124.1,-32.9,0.999,0.999,15.8,0,0,-27.9,33);

	this.instance_1 = new lib.Path_6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(99.3,-7.3,1,1,0,0,0,13.1,10.7);
	this.instance_1.alpha = 0.871;
	this.instance_1.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_2 = new lib.Path_7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(67.6,-11,1,1,0,0,0,10.7,9.8);
	this.instance_2.alpha = 0.871;
	this.instance_2.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_3 = new lib.Path_8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(94.1,-18.9,1,1,0,0,0,15.8,14.6);
	this.instance_3.alpha = 0.871;
	this.instance_3.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_4 = new lib.Path_31_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-34.2,12.9,1,1,0,0,0,35.2,7.2);
	this.instance_4.alpha = 0.871;
	this.instance_4.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_5 = new lib.Path_32_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-18.9,24.9,1,1,0,0,0,13,9.5);
	this.instance_5.alpha = 0.871;
	this.instance_5.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_6 = new lib.Path_33_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-76.1,15.5,1,1,0,0,0,12.1,11.7);
	this.instance_6.alpha = 0.871;
	this.instance_6.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_7 = new lib.Path_34_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1.5,23.2,1,1,0,0,0,10.8,8.4);
	this.instance_7.alpha = 0.871;
	this.instance_7.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_8 = new lib.Path_49_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(6.2,6.6,1,1,0,0,0,20.9,14);
	this.instance_8.alpha = 0.871;
	this.instance_8.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_9 = new lib.Path_50_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(41.7,13,1,1,0,0,0,19.9,15.5);
	this.instance_9.alpha = 0.871;
	this.instance_9.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_10 = new lib.Path_51_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(41.2,-6.4,1,1,0,0,0,18.8,10.8);
	this.instance_10.alpha = 0.871;
	this.instance_10.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_11 = new lib.Path_73();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-110,-20,1,1,0,0,0,12.7,13.6);
	this.instance_11.alpha = 0.871;
	this.instance_11.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_12 = new lib.Path_74();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-93.3,-3.2,1,1,0,0,0,14.2,15);
	this.instance_12.alpha = 0.871;
	this.instance_12.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_13 = new lib.Path_84();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-48.8,2.6,1,1,0,0,0,13.1,8.3);
	this.instance_13.alpha = 0.871;
	this.instance_13.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_14 = new lib.Path_92();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-69,0.2,1,1,0,0,0,11.6,10.1);
	this.instance_14.alpha = 0.871;
	this.instance_14.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_15 = new lib.Path_97();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-26.6,3.6,1,1,0,0,0,11.3,6);
	this.instance_15.alpha = 0.871;
	this.instance_15.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_16 = new lib.Path_98();
	this.instance_16.parent = this;
	this.instance_16.setTransform(18.3,22.7,1,1,0,0,0,9,6.9);
	this.instance_16.alpha = 0.871;
	this.instance_16.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_17 = new lib.Path_0();
	this.instance_17.parent = this;
	this.instance_17.setTransform(73.4,1.6,1,1,0,0,0,15,13);
	this.instance_17.alpha = 0.539;
	this.instance_17.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_18 = new lib.Path_1_0();
	this.instance_18.parent = this;
	this.instance_18.setTransform(73.4,1.6,1,1,0,0,0,15,13);
	this.instance_18.alpha = 0.82;
	this.instance_18.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(4));

	// top color
	this.instance_19 = new lib.color3();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-0.2,-0.1,1,1,0,0,0,-0.2,-0.1);
	this.instance_19.alpha = 0.672;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(4));

	// texture
	this.instance_20 = new lib.texture("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(1.3,0.8,1,1,0,0,0,122.2,35.4);
	this.instance_20.alpha = 0.328;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(4));

	// bkgr
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6E6E6").s().p("Ak0F9IgfAAQgIAAgGgGQgGgGAAgIIAAgBQABgIAFgFQAGgGAIAAIAfAAQAIAAAGAGQAGAFAAAJIAAAAQAAAIgGAGQgGAGgIAAIAAAAgAkZF3QgGgGgBgIIAAAAQAAgJAGgFQAGgGAIgBIAegBQAJAAAGAGQAGAFAAAJQAAAIgGAGQgFAGgIAAIgfABIAAAAQgIAAgGgFgAl8F8IgegBQgIAAgGgGQgFgHAAgIIAAgBQABgHAFgGQAGgFAJAAIAeABQAIAAAFAGQAGAGAAAIIAAABQAAAIgGAFQgGAGgIAAIgBAAgAjSF1QgGgGgBgIIAAAAQAAgIAFgGQAGgHAIAAIAegCQAIgBAHAGQAGAFAAAIIAAABQABAIgGAGQgFAGgIABIgeACIgCAAQgHAAgGgFgAnEF4IgHgBIAAAAIgUgCQgIgBgGgGQgEgFAAgGQgCAGgFAEQgGAFgJgBIgfgDQgIgCgFgGQgFgHABgIIAAAAQABgIAHgFQAHgFAIABIAdADQAJABAFAHQAEAFAAAGQACgGAFgEQAHgGAIABIAUACIABABIAHABQAIABAFAGQAFAGgBAHIAAACQgBAIgHAFQgFAEgGAAIgDAAgAiLFwQgGgFgBgIIAAgBQAAgIAFgGQAFgGAJgBIAdgCQAIgBAHAFQAGAFABAIIAAABQABAIgGAHQgFAGgIABIgfACIgBAAQgIAAgFgFgAhEFqQgHgFgBgIIAAgBQAAgIAFgGQAFgGAIgBIAegDQAJgCAGAGQAHAEABAIIAAABQABAIgFAHQgFAGgJABIgfAEIgCAAQgHAAgFgFgApPFnIgfgGQgIgCgFgHQgEgHABgIIAAABQgCAIgHAEQgHAEgIgCIgegIQgIgCgEgHQgEgIACgHIAAgBQAhAKAjAIQAiAIAkAGIAAAAQgBAIgHAFQgGADgFAAIgEAAgAACFiQgGgFgBgIIAAgBQgBgIAFgGQAEgHAIgBIAegEQAIgCAHAFQAHAFABAIIAAABQABAHgEAHQgFAHgIABIgfAFIgDAAQgHAAgFgEgABLFZQgHgEgDgIIAAgCQgBgHAEgGQAEgIAIgCIAEgBIACAAIAYgEQAIgBAGAFQAHAEACAJQABAIgFAGQgFAHgIACIgWADIgEABIgFABQgFAAgFgDgACNFNQgGgFgCgIQgBgJAFgGQAFgHAIgBIAdgGQAIgBAHAEQAHAFABAIIAAAAQACAIgEAHQgFAHgIABIgfAGIgDAAQgGAAgGgDgArcFDIgegMQgIgDgDgIQgDgHADgIQAEgIAHgDQAIgDAIADIAcAMQAIACADAIQAEAHgDAIIAAAAQgDAIgIAEQgEABgEAAIgHgBgADTFAQgGgFgCgIIAAAAQgCgIAFgHQAEgHAIgBIAegGQAIgCAHAFQAHAEABAIIAAAAQACAIgEAHQgFAHgIACIgeAGIgEAAQgGAAgFgDgAEYEyQgGgFgCgIIAAAAQgCgIAFgHQAEgHAIgCIAdgGQAIgCAHAEQAHAEACAIQgCgIAEgHQAFgHAIgCIAdgHQAIgCAHAFQAHAEACAIQACAIgFAHQgEAHgIACIgdAHQgIACgHgEQgHgEgCgIQACAIgFAHQgEAHgIACIgeAGIgEABQgGAAgFgDgAsgEmIgcgPQgHgFgCgHQgCgHADgHQgFAGgIABQgIABgHgFIgXgSQgHgFgBgIQgBgHAEgFQgFAEgHABQgIABgHgFIgYgSQgGgGgBgIQgBgIAFgHIAAAAQAFgGAIgBQAIgBAHAFIAXASQAHAFABAJQABAGgDAGQAFgFAGAAQAJgCAGAGIAXARQAHAFABAJQABAFgCAFQAEgEAGgCQAIgCAHAEIAaAOQAHAEADAIQADAHgEAIQgEAHgIADIgGABQgFAAgEgCgAGiERQgIgEgCgIQgCgIAEgHQAEgHAIgCIAdgIQAIgDAHAFQAHAEADAIIAAAAQACAHgEAIQgEAHgIACIgdAIIgGABQgFAAgEgDgAHmD+QgHgEgDgHIAAgBQgCgIAEgHQAEgHAIgCIAcgJQAIgCAIAEQAGADADAHQgCgHAEgHQAEgHAHgDIAcgJQAIgCAHAEQAHADADAGQgCgGADgGQAEgIAIgDIAdgKQAIgCAHADQAEACADADQAAgEACgEQAEgIAHgDIAcgKQAIgDAHAEQAIADADAIIAAAAQADAHgDAIQgEAHgHADIgeALQgHADgIgEQgEgCgCgDQAAAFgDAEQgDAIgIACIgdAKQgIADgHgEQgHgDgDgHQABAHgDAGQgEAIgIACIgcAJQgHADgIgEQgGgDgDgHQACAHgEAHQgEAHgIACIgdAJIgGABQgFAAgEgDgAvPCpIgXgUQgGgGAAgIQAAgJAFgGQAGgGAIAAQAIgBAGAGIAWAUQAHAFAAAJQABAHgFAHIgBAAQgFAGgIABIgCAAQgHAAgGgFgALvCmQgHgEgEgHIAAAAQgDgIAEgIQADgHAIgDIAcgLQAHgDAIADQAHADADAIIAAAAQAEAIgEAHQgDAIgIADIgcALIgHABQgEAAgEgBgAMwCLQgHgDgEgHQgDgIADgIQADgHAIgEIAbgLQAIgEAIADQAGADADAFQgCgGADgGQACgIAIgEIAbgNQAHgDAIADQAHACADAFQgCgGACgHQACgIAIgDIAagOQAHgEAIACQAIACAEAIQAEAHgCAIQgDAIgHAEIgbAOQgHAEgIgDQgHgCgEgGQADAHgDAHQgCAIgIADIgbANQgHAEgIgDQgHgCgDgGQACAHgDAGQgDAIgIADIgbAMQgEACgEAAQgEAAgEgCgAwEB4IgWgVQgGgGAAgIQAAgJAGgFIAAAAQAGgGAIAAQAJAAAGAGIAVAUQAGAGAAAIQAAAJgGAGQgFAGgJAAIAAAAQgIAAgGgGgAwoBMQgIAAgGgGIgVgXQgFgGAAgIQAAgIAGgGIABAAQAGgGAIABQAIAAAGAGIAUAWQAGAGgBAIQAAAJgGAFQgGAGgHAAIgBAAgAPvAvQgIgDgEgHQgEgHACgIQACgIAHgEIAagOQAHgEAIACQAGACAEAEQgCgFABgHQACgIAGgEIAagRQAHgFAIACIAEABIAAgEQACgJAGgEIAXgSQAGgFAIABQAGAAAEADQgDgEAAgGQAAgIAGgGIATgUQAFgHAIgBQAJAAAGAFIAAAAQAHAFAAAIQABAJgFAGQgKAMgLAMQgGAFgJAAQgGAAgFgDQADAFgBAHQAAAIgHAFIgYATQgHAFgIgBIgFgCIAAAFQgCAIgHAFIgaAQQgGAFgJgCQgGgCgFgFQADAHgCAHQgCAHgHAFIgaAPQgFACgFAAIgFAAgAxZAXQgIgBgFgHIgKgNIAAAAIgIgIQgFgHABgIQABgIAHgFQAGgGAIACQAJABAFAGIAHAJIAAABIAKANQAFAGgBAHQgBAIgFAFIgBABQgGAEgGAAIgDAAgAkcgSQgFgFgBgGQgBAGgFAFQgHAFgIAAIgfgDQgIgBgFgGQgFgGAAgJIAAAAIAAABQgBAIgHAFQgGAFgIgBIgfgEQgIgCgFgHQgEgFAAgHQgCAHgGAEQgGAEgJgCIgdgGQgIgCgFgHQgDgGAAgGQgCAGgGADQgHAEgIgCIgdgJQgHgDgEgHQgDgGABgGQgDAFgGADQgIADgHgCIgdgLQgHgDgEgIQgDgIADgHQgDAHgHADQgHADgIgDIgLgFIgBAAIgbgNQgHgEgDgIQgCgIAEgHIAAAAIgBAAQgDAHgIADQgIACgIgEIgagPQgHgEgCgIQgCgGACgGQgEAFgGABQgIACgIgEIgagRQgHgEgCgIQgCgIAEgHIgBABQgFAHgIABQgIABgHgFIgDgCIgVgOQgHgEgCgIQgBgFABgFQgDADgGABQgIACgHgEIgZgQQgHgEgCgIQgBgGACgFQgEAEgFACQgIACgIgEIgYgOQgHgDgDgIQgCgFABgFQgDAEgFACQgIADgHgDIgbgJQgHgDgEgHQgCgFAAgFQgDAEgEADQgHAEgIgCIgcgGQgIgCgFgHQgCgEgBgEQgBAEgEADQgFAGgIAAQgOABgNACQgIACgHgEIgFgFIAAAHQgBAIgHAFQgIAHgFAJQgEAHgIADQgHACgGgDIgCAAQgHgEgDgIQgCgIAEgHQAJgSAPgMQAHgFAIACQAIABAFAGIAAAAQgBgIAEgHQAFgHAIgCQAPgDASgBQAJAAAGAGQAFAFABAHQACgHAFgEQAHgEAIABIAfAHQAIACAEAHQADAFAAAGQADgFAFgCQAIgEAHADIAcAKQAIADADAIQADAFgBAGQADgEAGgCQAHgDAIADIAbAPQAIAEACAIQABAGgCAGQAEgFAGgBQAIgCAHAEIAaAQQAHAEABAIQACAFgCAFQAEgDAFgBQAIgCAHAEIAWAPIABAAIAEADQAHAFABAJQABAHgDAGQAEgHAIgCQAIgCAHAEIAaARQAIAEABAIQACAGgCAGQAEgFAGgBQAIgDAHAFIAZAOQAIAEACAIQACAHgDAHQAEgHAHgCQAIgDAHAEIAaAMIABABIAAAAIABAAIAAAAIAIAEQAIADADAIQADAHgDAHQADgGAHgDQAIgDAHADIAbAKQAIADADAHQADAGgBAGQADgFAFgDQAIgEAHADIAcAIQAIACAEAIQADAFgBAFQADgFAFgDQAHgEAIACIAcAGQAJACAEAHQAEAFgBAHQACgHAGgDQAHgFAIABIAdAFQAIABAFAGQAFAGgBAIQACgIAGgFQAGgGAIABIAeADQAIAAAFAHQAFAEAAAGQABgGAFgEQAGgGAIAAIAdgBQAIAAAGAGQAGAFAAAIQAAgIAFgFQAGgHAIAAIAdgDQAJgBAGAGQAHAFAAAIQABAJgFAGQgFAGgJABIgeADQgJAAgGgFQgGgGgBgIQABAIgGAGQgGAGgIAAIgeABIAAAAQgIAAgGgGgAiPgZQgGgFgBgIIAAgBQgBgHAEgHQAGgGAIgBIAdgEQAIgCAGAFQAHAFABAIIAAABQABAIgFAGQgFAHgIABIgdAEIgDAAQgGAAgGgEgAyEggQgIgCgFgGIgSgaQgEgHABgIQACgIAHgFIAAAAQAHgEAIABQAIACAFAHIAQAYQAFAHgBAIQgCAIgGAFQgGAEgGAAIgDAAgAhFgkQgHgFgBgIIAAAAQgCgJAFgGQAFgHAIgBIAegFQAIgCAHAFQAHAFABAIIAAAAQACAIgFAHQgFAHgIABIgeAFIgEAAQgGAAgFgDgAAAgxQgFgFgCgIQgCgIAFgHQAEgHAHgBIAegGQAJgCAGAFQAHAEACAIIAAABQACAIgFAGQgEAHgJACIgeAGIgEAAQgGAAgFgDgABGg/QgGgEgCgIIAAgBQgCgIAFgHQAEgHAIgBIAdgGQAJgCAGAFQAHAEACAIQgCgIAFgHQAEgHAIgBIAdgGQAJgCAGAFQAHAEACAIQgCgIAEgHQAFgHAIgCIAdgHQAIgCAHAEQAHAEACAHQgBgHADgGQAFgHAIgCIAdgHQAIgCAHAEQAFADACAFQAAgGADgFQAFgHAIgCIAdgHQAIgCAHAEQAGAEACAGQgBgHAEgFQAEgIAIgCIAdgIQAIgCAHAEQAGADACAGQgBgGAEgGQAEgIAIgCIAdgIQAIgCAHAEQAGADACAGQgBgGADgGQAEgHAIgDIAcgJQAIgCAHAEQAHADADAHQgCgHAEgHQAEgHAHgDIAdgJQAIgCAHAEQAHADACAHQgBgHADgHQAEgHAIgDIAbgJQAIgDAHAEQAHADADAHQgCgHADgHQAEgHAIgDIAcgKQAHgDAIAEQAHADADAIQgDgIAEgHQADgIAIgCIAcgKQAIgDAHADQAHADADAGQgCgGADgHQADgHAIgDIAcgLQAHgDAIADQAHADADAHQgDgHAEgIQADgIAIgCIASgIIABAAIAIgDQAIgDAHAEQAIADADAIIAAABQACAHgDAHQgDAIgIADIgHACIgBABIgTAHQgIADgHgDQgHgEgEgHQAEAIgEAHQgDAIgIADIgcALQgHADgIgDQgHgDgDgGQACAGgDAHQgEAHgHADIgcAKQgIADgIgEQgHgDgDgIQADAIgEAHQgDAIgIADIgcAKQgIACgHgDQgHgDgDgHQACAHgDAGQgEAIgHADIgdAJQgIADgHgEQgHgDgDgHQACAHgDAGQgEAIgIACIgdAJQgHADgIgEQgGgEgDgGQACAHgEAGQgEAIgIACIgcAJQgIADgHgEQgHgDgCgHQABAHgEAGQgEAHgIADIgdAIQgIACgHgEQgGgEgCgGQABAHgEAGQgEAHgIADIgdAIQgIACgHgEQgGgEgDgHQABAHgEAHQgEAHgIACIgdAHQgIACgHgFQgFgDgDgFQABAGgEAGQgEAHgIACIgdAHQgIACgHgFQgHgEgCgHQABAHgEAHQgEAHgIACIgdAHQgIACgHgFQgHgEgCgIQACAIgFAHQgEAHgJACIgdAGQgIACgHgFQgGgEgCgIQACAIgFAGQgEAHgJACIgdAGIgEAAQgGAAgFgDgAythcQgIgCgEgHIgPgcQgEgIADgHQADgIAHgEIAAAAQAIgEAHADQAIACAEAIIAOAZQAEAHgCAIQgCAIgHAFQgFACgFAAIgGAAgAS6h/IAAAAQgHgEgCgIQgBgIAEgHQAHgMAFgMQADgIAHgEQAEgCADAAIgFgEQgFgHAAgIQACgMgCgMQgCgIAFgHQADgEAEgCQgFABgFgBQgIgCgEgHIgLgPIAAAAIgEgEQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGIAGAHIAAAAQAIAKAGAKQAEAHgCAIQgBAIgIAEIgBABIACAAQAIgCAHAFQAHAFABAIQADARgCASQAAAIgHAFQgFAFgHAAQAGADACAGQAEAHgDAIQgFAQgKAQQgEAHgIACIgFAAQgGAAgFgDgAzOidQgIgDgDgIQgGgQgFgPQgCgIAEgHQAEgHAIgCIAAAAQAIgDAHAEQAHAEADAIQADANAGAOQADAHgDAIQgDAIgIADIAAAAQgEABgEAAQgDAAgEgBgAzmjkQgGgGgBgIQgDgSABgQQAAgIAGgGQAGgFAJAAIABAAQAIABAEAFQAGAGAAAJQgBAMACAPQABAIgFAHQgFAGgHABIgBABIgDAAQgGAAgGgEgASRk0QgLgIgNgFQgHgDgDgIQgDgHADgHIAAgBQADgIAIgDQAIgDAHADQAQAHAOAJQAHAEABAJQACAIgEAHIgBABQgFAGgHABIgEABQgGAAgFgDgARSliQgVgFgVAAIAAgCQABgIAHgFQAHgFAIABIAYAEIAAAAIAIACQAIACAFAIQAEAHgCAIIAAAAQgNgEgPgDgAPilhQgBgIAFgHQAFgHAIgBQAQgDAQgBQAIAAAGAFQAGAGABAIIAAACQgjgCgjAJIAAgBg");
	this.shape.setTransform(0.1,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#B0D240","#FFDF00","#00AA4F"],[0,0.518,0.949],0.4,0,0,0.4,0,91.6).s().p("AkcFpQAAgJgGgFQgGgGgIAAIgeAAQgJAAgGAGQgFAFgBAIIAAAAQAAgIgFgGQgGgGgIAAIgegBQgJAAgGAFQgFAGgBAHIAAAAQAAgHgFgGQgFgGgIgBIgHgBIAAgBIgVgCQgIAAgHAFQgFAEgCAGQAAgGgEgFQgFgHgJgBIgdgDQgIgBgHAFQgGAFgCAIIgBAAQgkgGgigIQgjgIgggKIgBAAQADgIgEgHQgDgIgIgCIgcgMQgIgDgHADQgIADgEAIIAAAAQAEgIgDgHQgDgIgHgEIgagOQgHgEgIACQgGACgEAEQACgFgBgFQgBgJgHgFIgXgRQgGgFgIABQgHAAgFAFQADgGgBgGQgBgJgGgFIgYgSQgHgFgIABQgIABgFAGIAAAAQAFgHAAgHQgBgJgGgFIgXgUQgGgGgIABQgIAAgGAGIgBAAQAGgGAAgJQAAgIgGgGIgVgUQgGgGgJAAQgIAAgFAGIgBgBQAGgFAAgJQABgIgGgGIgUgWQgGgGgIAAQgIgBgGAGIAAgBQAFgFABgIQABgHgFgGIgKgNIAAgBIgHgJQgFgGgJgBQgIgBgGAFIgBgCQAGgFACgIQABgIgFgHIgQgYQgFgHgIgCQgIgBgHAEIAAAAIAAAAQAHgFACgIQACgIgEgHIgOgZQgEgIgIgCQgHgDgIAEIAAgBIAAAAQAIgDADgIQADgIgDgHQgGgOgDgNQgDgIgHgEQgHgEgIADIAAgCQAHgBAFgGQAFgGgBgJQgBgOAAgNQAAgJgFgGQgFgFgIgBIABgCQAGADAHgCQAIgDAEgHQAFgJAJgHQAGgFABgIIAAgHIAFAFQAHAEAIgCQANgCAOgBQAIAAAFgGQAEgDABgEQABAEACAEQAFAHAJACIAbAGQAIACAHgEQAEgDADgEQAAAFACAFQAEAHAIADIAaAJQAHADAIgDQAFgCADgEQgBAFACAFQADAIAHADIAYAOQAIAEAIgCQAFgCAEgEQgCAFACAGQABAIAIAEIAYAQQAHAEAIgCQAGgBADgDQgBAFABAFQACAIAHAEIAWAOIADACQAGAFAIgBQAIgBAFgHIABgBQgEAHACAIQACAIAHAEIAbARQAHAEAIgCQAGgBAFgFQgDAGACAGQACAIAHAEIAbAPQAHAEAIgCQAIgDAEgHIAAAAIAAAAQgEAHACAIQADAIAIAEIAbANIAAAAIALAFQAIADAHgDQAHgDAEgHQgEAHAEAIQADAIAIADIAcALQAIACAHgDQAGgDADgFQgBAGADAGQAEAHAHADIAdAJQAIACAHgEQAGgDACgGQAAAGADAGQAFAHAIACIAdAGQAJACAHgEQAFgEADgHQgBAHAEAFQAFAHAIACIAfAEQAIABAGgFQAHgFABgIIAAgBIAAAAQAAAJAFAGQAFAGAIABIAfADQAIAAAHgFQAFgFABgGQABAGAFAFQAGAGAIAAIAegBQAIAAAGgGQAGgGAAgIQAAAIAGAGQAHAFAIAAIAfgDQAIgBAFgGQAFgGAAgJIAAAAIAAABQABAIAGAFQAHAFAIgBIAdgEQAIgBAGgHQAEgGgBgIIAAgBIAEgBIABAAQABAIAHAFQAHAEAIgBIAegFQAIgBAFgHQAFgHgCgIIAAAAIABgBQACAIAFAFQAHAFAIgCIAegGQAJgCAEgHQAFgGgCgIIABAAQACAIAGAEQAHAFAJgCIAcgGQAJgCAEgHQAFgGgCgIQACAIAHAEQAGAFAIgCIAegGQAIgCAEgHQAFgHgCgIQACAIAHAEQAHAFAIgCIAdgHQAIgCAFgHQADgHgBgHQACAHAHAEQAHAFAIgCIAdgHQAIgCAEgHQAEgGAAgGQACAFAFADQAHAFAIgCIAdgHQAIgCAFgHQADgHgBgHQADAHAGAEQAHAEAIgCIAdgIQAIgDAEgHQAEgGgBgHQACAGAGAEQAHAEAIgCIAdgIQAIgDAEgHQAEgGgBgHQACAHAHADQAHAEAIgDIAdgJQAHgCAEgIQAEgGgCgHQADAHAGADQAIAEAHgDIAdgJQAIgCAEgIQADgGgBgHQACAHAHADQAHAEAIgDIAdgJQAHgDAEgIQADgGgCgHQADAHAHADQAHADAIgCIAcgKQAIgDADgIQAEgHgDgIQADAIAHADQAIAEAIgDIAcgKQAHgDAEgHQADgHgCgGQADAGAHADQAIADAHgDIAcgLQAIgDADgIQAEgHgDgIQADAHAHAEQAHADAIgDIATgHIABgBIAHgCQAIgDADgIQADgHgCgHIABgBQAigJAjACQAVAAAVAFQAPADANAEIABABQgDAHADAHQADAIAIADQAMAGALAHQAHAEAIgCQAHgBAFgGIAAAAQgGAGABAIQgBAJAGAGIAEAEIAAAAIALAPQAEAHAIACQAFABAFgBQgEACgDAEQgFAHACAIQACAMgCAMQAAAIAFAHIAFAEQgDABgEABQgHAEgDAIQgFAMgHAMQgEAHACAIQABAIAHAEIAAABQgGgFgJAAQgIABgFAHIgTAUQgGAGAAAIQAAAGADAEQgEgDgGAAQgIgBgGAFIgXASQgGAEgCAJIAAAEIgEgBQgIgCgHAFIgaARQgGAEgCAIQgBAHACAFQgEgEgGgCQgIgCgHAEIgaAOQgHAEgCAIQgCAIAEAHIgBABQgEgIgIgCQgIgCgHAEIgaAOQgIADgCAIQgCAHACAGQgDgFgHgCQgIgDgHADIgbANQgIAEgCAIQgDAGACAGQgDgFgGgDQgIgDgIAEIgbALQgHAEgDAHQgEAIAEAIIgBAAQgDgIgHgDQgIgDgHADIgcALQgIADgDAHQgEAIAEAIIAAAAIgBAAIAAAAQgDgIgIgDQgHgEgIADIgbAKQgIADgEAIQgCAEAAAEQgDgDgEgCQgHgDgIACIgdAKQgIADgEAIQgDAGACAGQgDgGgHgDQgHgEgIACIgcAJQgHADgEAHQgEAHACAHQgDgHgGgDQgIgEgHACIgdAJQgIACgEAHQgEAHACAIIAAABIAAAAIAAAAQgCgIgIgEQgHgFgIADIgdAIQgIACgEAHQgEAHACAIIAAAAQgCgIgHgEQgHgFgIACIgdAHQgIACgFAHQgEAHACAIQgCgHgHgFQgHgEgIACIgdAGQgIACgEAHQgFAHACAIIAAAAIAAAAQgCgIgHgEQgHgFgIACIgdAGQgJABgEAHQgFAHACAIIAAAAIAAAAQgCgIgHgFQgHgEgIABIgdAGQgIABgFAHQgFAHABAIIAAAAQgCgJgHgEQgGgFgIABIgYAEIgCAAIgEABQgIACgEAIQgEAGABAHIgBAAIAAgBQgBgIgHgFQgHgFgIACIgeAEQgIABgFAHQgEAGABAIIAAAAQgBgIgHgEQgGgFgJABIgdADQgJABgFAGQgFAGABAIIgBAAQgBgIgGgFQgHgFgIABIgdACQgJABgFAGQgFAGAAAIIgBAAQAAgIgGgFQgHgGgIABIgeACQgIAAgFAHQgGAGAAAIIAAAAQAAgJgGgFQgGgGgJAAIgeABQgIABgGAGQgGAGAAAIg");
	this.shape_1.setTransform(-0.3,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.3,-84.1,333.1,123.5);


(lib.planktonall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_17();
	this.instance.parent = this;
	this.instance.setTransform(176.2,64,1,1,0,0,0,13.1,15.6);
	this.instance.alpha = 0.871;
	this.instance.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_1 = new lib.Path_18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(12.9,146.9,1,1,0,0,0,12,12.5);
	this.instance_1.alpha = 0.871;
	this.instance_1.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_2 = new lib.Path_19();
	this.instance_2.parent = this;
	this.instance_2.setTransform(96.4,184,1,1,0,0,0,23.2,12.2);
	this.instance_2.alpha = 0.871;
	this.instance_2.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_3 = new lib.Path_20();
	this.instance_3.parent = this;
	this.instance_3.setTransform(42.9,168.3,1,1,0,0,0,14.3,12.8);
	this.instance_3.alpha = 0.871;
	this.instance_3.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_4 = new lib.Path_21();
	this.instance_4.parent = this;
	this.instance_4.setTransform(158.7,166.3,1,1,0,0,0,12.8,11);
	this.instance_4.alpha = 0.871;
	this.instance_4.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_5 = new lib.Path_22();
	this.instance_5.parent = this;
	this.instance_5.setTransform(178.1,174.2,1,1,0,0,0,14.9,13.6);
	this.instance_5.alpha = 0.871;
	this.instance_5.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_6 = new lib.Path_23();
	this.instance_6.parent = this;
	this.instance_6.setTransform(174.9,151.8,1,1,0,0,0,14.5,12.1);
	this.instance_6.alpha = 0.871;
	this.instance_6.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_7 = new lib.Path_24();
	this.instance_7.parent = this;
	this.instance_7.setTransform(196.6,151.8,1,1,0,0,0,13.3,17.1);
	this.instance_7.alpha = 0.871;
	this.instance_7.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_8 = new lib.Path_25();
	this.instance_8.parent = this;
	this.instance_8.setTransform(21.1,88.5,1,1,0,0,0,11.4,10.7);
	this.instance_8.alpha = 0.871;
	this.instance_8.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_9 = new lib.Path_26();
	this.instance_9.parent = this;
	this.instance_9.setTransform(33.1,145.2,1,1,0,0,0,13.2,14.8);
	this.instance_9.alpha = 0.871;
	this.instance_9.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_10 = new lib.Path_27();
	this.instance_10.parent = this;
	this.instance_10.setTransform(34.9,188.2,1,1,0,0,0,12.7,13.6);
	this.instance_10.alpha = 0.871;
	this.instance_10.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_11 = new lib.Path_28();
	this.instance_11.parent = this;
	this.instance_11.setTransform(147.6,40.6,1,1,0,0,0,12.9,12.6);
	this.instance_11.alpha = 0.871;
	this.instance_11.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_12 = new lib.Path_29();
	this.instance_12.parent = this;
	this.instance_12.setTransform(14.6,106.3,1,1,0,0,0,11.2,13.3);
	this.instance_12.alpha = 0.871;
	this.instance_12.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_13 = new lib.Path_30();
	this.instance_13.parent = this;
	this.instance_13.setTransform(21.1,166.2,1,1,0,0,0,13,14.3);
	this.instance_13.alpha = 0.871;
	this.instance_13.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_14 = new lib.Path_31();
	this.instance_14.parent = this;
	this.instance_14.setTransform(166.2,48.5,1,1,0,0,0,11.8,13);
	this.instance_14.alpha = 0.871;
	this.instance_14.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_15 = new lib.Path_32();
	this.instance_15.parent = this;
	this.instance_15.setTransform(37.6,78.5,1,1,0,0,0,11.8,13);
	this.instance_15.alpha = 0.871;
	this.instance_15.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_16 = new lib.Path_33();
	this.instance_16.parent = this;
	this.instance_16.setTransform(93.5,198.8,1,1,0,0,0,35.3,8.5);
	this.instance_16.alpha = 0.871;
	this.instance_16.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_17 = new lib.Path_34();
	this.instance_17.parent = this;
	this.instance_17.setTransform(109.6,209.6,1,1,0,0,0,12.9,9.7);
	this.instance_17.alpha = 0.871;
	this.instance_17.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_18 = new lib.Path_35();
	this.instance_18.parent = this;
	this.instance_18.setTransform(155.2,190.1,1,1,0,0,0,16.1,16.6);
	this.instance_18.alpha = 0.871;
	this.instance_18.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_19 = new lib.Path_36();
	this.instance_19.parent = this;
	this.instance_19.setTransform(193.7,84,1,1,0,0,0,9.6,11.9);
	this.instance_19.alpha = 0.871;
	this.instance_19.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_20 = new lib.Path_37();
	this.instance_20.parent = this;
	this.instance_20.setTransform(30.5,102.5,1,1,0,0,0,9.5,11.9);
	this.instance_20.alpha = 0.871;
	this.instance_20.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_21 = new lib.Path_38();
	this.instance_21.parent = this;
	this.instance_21.setTransform(51.7,204.3,1,1,0,0,0,12.2,11.3);
	this.instance_21.alpha = 0.871;
	this.instance_21.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_22 = new lib.Path_39();
	this.instance_22.parent = this;
	this.instance_22.setTransform(197,100.5,1,1,0,0,0,13.3,10.2);
	this.instance_22.alpha = 0.871;
	this.instance_22.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_23 = new lib.Path_40();
	this.instance_23.parent = this;
	this.instance_23.setTransform(129.7,206.7,1,1,0,0,0,10.8,8.5);
	this.instance_23.alpha = 0.871;
	this.instance_23.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_24 = new lib.Path_41();
	this.instance_24.parent = this;
	this.instance_24.setTransform(133.4,193.3,1,1,0,0,0,10.7,8.4);
	this.instance_24.alpha = 0.871;
	this.instance_24.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_25 = new lib.Path_42();
	this.instance_25.parent = this;
	this.instance_25.setTransform(203.8,129.3,1,1,0,0,0,9.1,11.2);
	this.instance_25.alpha = 0.871;
	this.instance_25.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_26 = new lib.Path_43();
	this.instance_26.parent = this;
	this.instance_26.setTransform(126.2,48.3,1,1,0,0,0,14.1,13.2);
	this.instance_26.alpha = 0.871;
	this.instance_26.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_27 = new lib.Path_44();
	this.instance_27.parent = this;
	this.instance_27.setTransform(159.5,35.2,1,1,0,0,0,8.6,8.2);
	this.instance_27.alpha = 0.871;
	this.instance_27.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_28 = new lib.Path_45();
	this.instance_28.parent = this;
	this.instance_28.setTransform(27.9,71.6,1,1,0,0,0,9.8,10.3);
	this.instance_28.alpha = 0.871;
	this.instance_28.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_29 = new lib.Path_46();
	this.instance_29.parent = this;
	this.instance_29.setTransform(61.9,184,1,1,0,0,0,19.9,15.5);
	this.instance_29.alpha = 0.871;
	this.instance_29.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_30 = new lib.Path_47();
	this.instance_30.parent = this;
	this.instance_30.setTransform(135.3,176.5,1,1,0,0,0,18.8,14.7);
	this.instance_30.alpha = 0.871;
	this.instance_30.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_31 = new lib.Path_48();
	this.instance_31.parent = this;
	this.instance_31.setTransform(185.7,127.4,1,1,0,0,0,16,21.1);
	this.instance_31.alpha = 0.871;
	this.instance_31.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_32 = new lib.Path_49();
	this.instance_32.parent = this;
	this.instance_32.setTransform(19.9,126.1,1,1,0,0,0,18.8,14.7);
	this.instance_32.alpha = 0.871;
	this.instance_32.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_33 = new lib.Path_50();
	this.instance_33.parent = this;
	this.instance_33.setTransform(47.6,56.3,1,1,0,0,0,15.8,14.6);
	this.instance_33.alpha = 0.871;
	this.instance_33.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_34 = new lib.Path_51();
	this.instance_34.parent = this;
	this.instance_34.setTransform(178.2,93.6,1,1,0,0,0,10.7,19.8);
	this.instance_34.alpha = 0.539;
	this.instance_34.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_35 = new lib.Path_52();
	this.instance_35.parent = this;
	this.instance_35.setTransform(178.2,93.6,1,1,0,0,0,10.7,19.8);
	this.instance_35.alpha = 0.82;
	this.instance_35.shadow = new cjs.Shadow("rgba(2,30,6,0.369)",0,0,3);

	this.instance_36 = new lib.color();
	this.instance_36.parent = this;
	this.instance_36.setTransform(105.9,123.5);
	this.instance_36.alpha = 0.77;

	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.USGS21IntricateSurface, null, new cjs.Matrix2D(1,0,0,1,-39.1,7.5)).s().p("ApxNPQk6jthRlHQhEkTBnkZQBjkPCNiMQBWhUBMgTIBmgbQAwgLAdAFQBDAOA8CHQgQgLgcgCQg5gDg+AyQiFBrg/CPQhgDXBIEPQAxC5B8BoQC5CZFDg4QFLg5CliUQCciLgEjRQgFjgg0iqQgwiahIhEQg2gzhtAvQh4BCgyAKQhEANgag3QgXgxAXglQAXgkAeggQAogqBAgvQBhhGBFgEQAjgBCYAgQA0ALBWBgQBcBoBNCSQDLF/guFtQgaDHjEC/Qi3CzkQBzQkTB1kBAGIgYAAQkJAAimh9g");
	this.shape.setTransform(105.9,123.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6E6E6").s().p("AixPuQgFgEgBgHQgBAGgFAFQgGAGgIAAIgfgBQgIAAgGgGQgGgGAAgJIAAAAQABgIAGgFQAGgGAIAAIAeABQAIAAAGAFQAFAFABAGQABgFAEgFQAFgGAJAAIAcgBQAIgBAGAGQAGAFAAAIQAAgIAFgGQAGgGAIgBIAdgCQAJgBAGAFQAGAFABAIIAAABQABAIgFAGQgFAHgJABIgeACQgJABgGgGQgGgFgBgIQABAIgGAGQgFAGgJABIgcABIgBAAQgHAAgGgGgAkTPxIgggDQgIgBgFgGQgFgGAAgJIAAAAQABgIAHgFQAGgGAIABIAeADQAIAAAGAGQAFAHAAAIIAAAAQgBAIgGAGQgFAFgIAAIgBAAgAlcPpIgggGQgIgBgEgHQgFgHACgIIAAgBQgCAIgHAFQgHAEgIgCIgfgIQgIgDgEgHQgDgHACgIIAAAAQACgIAIgEQAHgEAIADIAcAHQAIACAEAHQAFAHgCAIIAAAAQACgHAGgFQAHgFAIACIAeAFQAIACAFAGQAFAHgBAIIAAAAQgCAJgGAEQgGAEgGAAIgDAAgAglPlQgHgFgBgIIAAgBQgBgHAFgHQAFgGAIgCIAdgEQAIgBAGAEQAHAFACAIQgCgIAFgGQAFgHAIgCIAdgFQAJgBAGAEQAHAEACAHQgBgHADgGQAFgHAIgCIAcgIQAIgCAHAEQAHAFADAHQACAIgEAHQgEAIgIACIgeAIQgIACgHgFQgHgEgCgIQACAIgFAHQgEAHgJABIgeAGQgIABgHgFQgHgEgBgIQABAIgFAGQgFAHgIABIgdAFIgDAAQgHAAgFgEgAnpPFIgdgLQgIgDgDgHQgEgIADgIIABAAQADgHAHgEQAIgDAHADIAcAKQAIADADAHQAEAIgDAIIAAAAQgCAIgIADQgEACgFAAIgGgBgACrO7QgIgEgCgIIAAAAQgCgIAEgHQAEgHAIgCIAcgIQAIgDAIAEQAHAEACAHIAAABQADAIgEAHQgEAHgIADIgdAIIgGABQgFAAgEgDgAotOpIgbgOQgHgEgDgIQgCgIAEgHIAAAAQAEgIAIgCQAIgCAHAEIAaANQAHADADAIQADAIgEAHIAAABQgEAHgHACIgHACQgFAAgEgCgADvOnQgHgEgDgIIAAAAQgDgHAEgIQAEgHAIgDIAcgJQAIgDAHAEQAHADADAGQgCgGADgHQADgHAIgDIAcgLQAHgDAIADQAHADADAHIAAABQAEAIgEAHQgDAIgIADIgcALQgHADgIgEQgHgDgDgHQACAIgEAGQgDAIgIADIgdAJIgGABQgFAAgEgCgApsOGIgagRQgHgFgCgIQgBgIAEgHIABgBQAEgGAIgCQAIgBAHAFIAZAQQAHAEACAIQACAIgFAHIAAAAQgEAHgIACIgFABQgFAAgFgDgAFwNwIgFgGQgBgDAAgFQAAgIAGgGQAEgEAGgCIATgIQAIgDAHACQAIADAEAIQgDgHACgIQADgIAHgDIAbgNQAIgEAIADQAGACAEAGQgDgHACgGQADgIAHgEIAagOQAIgEAIACQAIADADAHIABABQADAHgCAHQgCAIgIAEIgaAOQgIAEgIgCQgHgCgDgHQACAHgCAHQgDAIgHAEIgbANQgIADgIgDQgHgCgEgIQADAIgDAHQgDAIgHADIgXAKQgEACgEAAIgBAAIAAAAQgIAAgGgGgAqpNbIgXgSQgGgFgBgIQgBgIAFgHIAAAAQAGgGAIgBQAIgBAHAFIAVARQAHAFABAIQABAIgFAHIAAAAQgFAHgIABIgDAAQgGAAgGgEgArfMvIgXgUQgGgFgBgJQgBgIAGgGIAAAAQAGgGAIgBQAIAAAGAFIAXAUQAGAGABAIQAAAIgFAGQgGAHgIAAIgBAAQgHAAgGgFgAIxMaQgIgCgEgHIAAAAQgEgHACgIQACgIAHgEIAagPQAHgEAIACQAIACAEAGQgEgHABgIQACgHAHgFIAZgQQAHgEAIABQAIACAFAGQgFgHACgIQABgIAHgEIAYgRQAHgFAIABQAGABAFAEQgDgFABgHQABgIAGgFIAXgSQAHgGAIABQAIABAFAGQAGAHgBAIQgBAIgGAGIgZATQgGAFgIgCQgHAAgFgFQAEAGgBAGQgBAJgHAFIgZASQgHAEgIgBQgIgCgFgGQAFAHgCAHQgBAJgHAEIgbARQgHAFgIgCQgHgCgFgHQAEAHgCAIQgCAIgHAEIgaAPQgFADgFAAIgFgBgAsUL/IgXgWQgFgGAAgIQAAgIAGgGIAAAAQAGgGAIAAQAJAAAFAGIAVAVQAGAGAAAIQABAIgGAGIAAABQgGAGgIAAIgBAAQgHAAgGgGgAs5LSQgIgBgGgGIgUgXQgGgGABgIQABgIAGgGQAGgFAIAAQAIABAGAGIAUAWQAFAGAAAJQAAAIgHAFQgFAGgIAAIgBAAgAtoKbQgIAAgFgHIgTgYQgFgHABgIQABgIAGgFQgGAEgIgBQgIgCgFgHIgRgaQgEgHACgIQACgIAHgEQAHgFAIACQAIACAEAHIAQAZQAFAHgBAIQgCAHgFAEQAGgDAHABQAIABAFAHIASAXQAFAHgBAIQgBAIgGAFIAAABQgGAEgGAAIgDgBgAMaJ6QgIgBgGgGQgFgGAAgJQABgIAGgFIAXgUQAHgGAIABQAEAAAEACQgCgEAAgFQAAgIAGgGIATgTQAGgGAIAAQAGAAAFADQgEgEAAgHQAAgIAFgGIATgWQAGgGAIgBQAIAAAGAFIABAAQAGAGAAAIQABAIgFAGIgUAXQgGAGgIAAQgHABgFgEQAEAFAAAHQAAAJgGAFIgTATQgGAGgIAAQgFAAgFgCQADAFgBAFQAAAIgHAGIgXAUQgFAFgHAAIgCAAgAu5ImQgIgCgEgHIgPgbQgEgHACgIQADgIAHgEQgHADgIgDQgHgCgEgIIgNgcQgDgIADgHQADgIAIgDIAAgBQAIgCAHADQAIADADAHIAMAbQAEAIgDAHQgDAIgHAEQAHgEAHADQAIACAEAHIAOAaQAEAIgCAHQgCAIgHAEQgFADgFAAIgFgBgAikIEIgegBQgIAAgGgGQgEgFgBgHQgBAGgGAFQgGAFgJgBIgfgEQgIgBgEgHQgDgFgBgFQgCAFgGADQgHAFgIgCIgdgIQgIgCgEgIQgEgHACgIQgDAIgHADQgIAEgIgDIgdgNQgIgDgCgIQgDgIADgHQgEAHgIACQgIACgHgEIgagRQgHgFgBgIQgBgHADgGQgFAFgIABQgIAAgGgFIgWgUQgGgGAAgIQAAgIAFgGQgGAFgIgBQgIgBgFgGIgTgZQgFgGACgJQABgIAHgFIAAAAQAHgEAIABQAIABAFAHIARAWQAFAHgBAIQAAAHgEAEQAFgDAGAAQAJAAAGAFIATASQAGAGABAIQAAAGgDAFQAFgEAGgBQAIgBAHAEIAXAPQAHAFACAIQACAHgDAGQAEgGAHgDQAIgCAHADIAaALQAIADAEAIQADAHgCAGQACgGAHgEQAHgEAIACIAcAIQAIACAEAHQADAEAAAEQACgEAEgDQAHgFAIABIAcAEQAJABAFAGQAEAFAAAGQACgFAEgEQAGgGAJAAIAcABQAJAAAGAFQAEAFABAGQABgGAEgFQAGgGAIAAIAdgCQAIAAAHAFQAEAEACAGQAAgGAEgFQAGgHAIgBIAcgDQAIgBAHAFQAGAFACAIIAAAAQABAIgFAHQgFAGgIABIgeAEQgIABgHgFQgFgFgCgGQAAAHgFAFQgFAHgIAAIgeACQgJAAgGgGQgFgEgBgGQgBAGgEAFQgGAGgIAAIgBAAgAACHvQgGgEgBgJQgCgIAFgHQAEgGAIgCIAegFQAIgBAHAEQAHAFABAIQACAIgEAHQgFAHgIABIgfAGIgEAAQgGAAgFgEgAOdHiIgBAAQgGgGgBgIQgBgIAFgHIASgWQAFgHAIgBQAGgBAFACQgEgDgBgGQgCgIAFgHIAPgZQAEgHAIgCQAGgBAGACQgFgEgCgGQgCgIAEgHIAMgZQAEgIAHgDQAGgCAGABQgFgDgCgFQgEgIADgIIAKgaQADgIAHgEQAHgEAIACIAAABQAIACAEAIQAEAHgDAIIgLAdQgCAIgIADQgGADgGgCQAFAEACAFQADAIgDAIIgOAcQgEAHgIACQgGACgHgCQAGAEABAHQADAIgFAHIgQAZQgEAHgIACQgHACgGgDQAFAEABAGQABAJgFAGIgTAZQgFAGgIABIgCAAQgHAAgFgEgABJHjQgHgFgCgIIAAAAQgCgIAEgHQAFgHAIgCIAegHQAIgCAHAFQAHAEACAIIAAAAQACAIgEAHQgEAHgJACIgeAHIgFABQgFAAgFgDgACQHSQgIgEgCgIIAAAAQgCgIAEgHQAEgHAIgCIAcgIQAIgCAIAEQAHAEACAHQgCgHADgHQAEgHAIgDIAcgKQAIgDAHAEQAIADADAIQADAIgEAHQgEAIgHACIgdALQgIACgHgDQgIgEgDgIIAAgBIAAABQADAIgFAHQgEAHgIACIgcAIIgGABQgFAAgEgDgAEWGnQgHgDgDgHIAAgBQgDgHADgIQAEgIAHgDIAbgLQAIgDAIADQAHADAEAIIAAAAQgEgIADgIQADgHAHgEIAagNQAHgEAIACQAIADAEAHQAEAIgCAHQgDAIgHAEIgbAOQgIAEgIgDQgHgDgEgHQADAHgDAIQgDAIgIADIgdAMIgHABQgEAAgEgCgAv4GmQgHgEgDgIIgKgdQgDgIAEgHQAEgHAIgDIAAAAQAIgCAHADQAIAEACAIIAJAcQADAIgEAHQgDAHgHADIgBAAIgHACQgEAAgEgCgAGYFrQgIgCgFgHIAAAAQgEgHACgIQACgIAHgEIAZgQQAHgFAIABQAHACAFAGQgEgGABgIQABgIAGgFIAXgTQAGgFAIAAQAFABADACQgBgEgBgFQAAgIAGgGIAUgWQAGgHAIAAQAHgBAFAEQgGgFgBgHQgBgIAFgHIAPgXQAEgHAIgCQAIgCAHAEIAAAAQAHAEACAIQACAIgEAHIgRAaQgFAHgIABQgHACgHgFIAAABQAHAFAAAIQABAJgGAGIgVAXQgGAGgIABQgGAAgEgDQACAFAAAFQgBAJgGAFIgYAUQgHAGgIgCQgIAAgFgHIgBAAQAFAHgBAIQgCAIgHAFIgaARQgFADgFAAIgFgBgAwPFiQgHgEgCgIIgIgeQgCgIAEgHQAEgFAFgDQgGAAgFgEQgHgEgBgJIgFgeQgCgIAFgGQAFgHAIgCIAAAAQAIgBAHAFQAHAFABAIIAFAeQACAIgFAHQgDAEgFACQAFAAAFADQAHAFACAIIAHAcQACAIgEAHQgEAHgHADIgBAAIgFABQgFAAgFgDgApDEwQgIgCgEgHIgPgbQgEgHADgIQACgIAIgEQAPAhATAcIgBAAQgEADgFAAIgGgBgAplDxQgHgDgEgHIgMgdQgDgHAEgIQADgHAIgDQgIACgIgEQgHgDgDgIIgJggQgCgIAEgHQAEgHAIgCQgIACgIgEQgHgFgCgIIgGgdQgCgIAFgHQADgGAGgCQgGAAgFgEQgHgEgBgIIgFgdQgBgIAFgHQAFgGAGgBQgHAAgFgFQgGgGgBgIIgCgeQAAgIAGgHQAFgEAGgCQgGgBgFgFQgGgGAAgIIACgeQABgIAGgGQAFgFAIAAQgHgBgFgGQgFgHABgIIAFgeQABgIAHgFQAHgFAIABQgiCeAxC6QAUBIAcA7IgBAAQgEACgEAAIgHgCgAwrDXQgHgFgBgIIgEgfQAAgIAFgHQAFgGAIgBQgIAAgGgFQgGgGAAgIIgBgfQAAgIAGgGQAGgGAIAAQgIAAgGgGQgFgGAAgJIABgeQABgIAGgGQAGgFAIAAIABAAIAAAAIgBAAQgHgBgFgGQgFgFAAgJIAEgfQABgIAHgFQAGgEAIAAIABAAQAIACAFAGQAFAHgBAIIgEAdQAAAIgHAFQgGAFgIgBQAHABAFAGQAGAGgBAIIgBAeQAAAIgGAGQgGAFgIAAQAIAAAGAGQAGAGgBAIIABAdQAAAJgGAGQgFAFgHABQAHAAAGAFQAHAFAAAIIAEAdQABAJgFAGQgFAHgIABIgBAAIgCAAQgHAAgFgEgAJQCgIAAAAQgHgDgDgIQgDgIAEgIIALgZQADgIAHgDQAHgDAHABQgHgCgEgHQgEgHACgIIAHgcQACgIAGgFQAHgEAHABIABABQAJABAEAHQAFAHgCAIIgHAfQgDAIgHAEQgHAEgIgCQAIADADAHQAEAIgDAHQgFAQgHAOQgEAHgHADIgHABQgFAAgEgCgAJ7AbIgBAAQgHgBgFgGQgFgHAAgIIACgbQABgIAGgGQADgDADgBQgDgBgDgEQgGgFAAgJIgBgeQAAgIAGgGQAEgFAGgBQgGgBgFgEQgGgGAAgIIgCgeQAAgIAFgHQAGgFAHgBIABAAQAIgBAHAGQAGAFAAAIIACAfQAAAJgGAGQgEAFgGABQAGABAFAEQAGAGAAAIIABAfQAAAJgGAFQgDAEgEABQAEACADADQAGAGgBAIIgCAeQAAAIgHAGQgGAEgGAAIgDAAgAwZg8IgBAAQgHgBgFgHQgFgGACgJIAFgeQACgIAHgFQAHgFAIACQgIgCgEgHQgEgHABgIIAIgeQACgHAIgFQAGgDAHABQgGgDgEgGQgEgIADgHIAKgdQADgIAHgDQAHgEAIADQAIADADAHQAEAIgDAHIgJAcQgDAIgHADQgGAEgHgCQAGADAEAGQAEAHgCAIIgIAcQgBAIgIAFQgGAEgIgCQAHACAFAHQAEAHgCAIIgFAdQgBAIgHAFQgFAEgGAAIgEgBgAQbhtQgHgEgBgJIgGgdQgBgIAEgHQAFgHAIgBIAAAAQAIgCAHAEQAHAFABAIIAGAfQACAIgFAHQgFAHgIABIgEAAQgGAAgFgEgAQNiyQgGgFgCgIIgHgdQgCgIAEgHQAEgHAIgCIAAAAQAIgCAHAEQAIAEACAIIAHAfQACAIgFAHQgEAHgIACIgBAAIgEAAQgGAAgFgDgAJsi4QgGgGgBgIIgDgeQgBgJAFgGQAGgGAHgBIABAAQAIgBAHAFQAGAGABAIIADAeQABAJgGAGQgFAGgIABIgBAAIgBAAQgHAAgGgEgAqgjzQgFgHACgIIAIgdQACgIAIgEQAHgEAIACIAAAAQgIgCgDgIQgEgHADgIIAMgdQADgHAIgEQAHgCAIADIAAAAIAAABQgPAfgLAgQgLAhgHAiQgIgCgEgHgAP9j3QgHgEgCgIIgJgcQgCgHAEgIQADgGAFgDQgGACgGgDQgHgEgDgIIgKgcQgDgHAEgIQADgGAGgDQgHACgGgDQgIgDgDgIIgLgcQgDgIAEgHQACgGAFgDQgGACgGgDQgHgDgEgHIgMgbQgEgHADgIQADgIAHgDQAIgEAIADQAHADAEAHIANAcQADAHgDAIQgCAGgFADQAGgBAGACQAIAEACAHIALAcQAEAIgEAIQgDAGgGADQAHgBAGADQAIADADAIIAKAcQADAIgEAHQgDAHgGACQAGgBAGADQAIAEACAIIAJAdQACAIgEAHQgEAIgIACIgFABQgFAAgFgDgAJkj/QgGgFgBgIIgFgeQgBgIAFgHQAFgHAIgBQAIgBAGAEQAHAFACAIIAEAgQABAIgFAGQgFAHgIABIAAAAIgDAAQgGAAgGgEgAvikKIAAAAQgIgDgDgHQgEgIADgHIALgcQADgHAIgEQAHgDAIADIAAAAQAIADADAIQADAIgDAHIgKAbQgDAIgIADQgEACgEAAIgHgCgAJalFQgGgEgCgIIgGgeQgCgIAFgHQAEgGAIgCIAAAAQAJgCAGAEQAHAFACAIIAGAeQACAIgFAHQgEAHgJABIAAAAIgEABQgFAAgGgEgAvJlKIAAAAQgHgDgEgIQgDgIADgHIANgcQADgHAIgEQAHgCAIADQAIADADAIQADAIgEAHIgMAcQgDAHgIADQgDACgEAAQgEAAgEgCgApmlwIAAAAQgHgEgDgIQgCgIAEgHIAPgbQAEgHAIgCQAIgCAHAEQAHAEACAIQACAIgEAHIgOAaQgEAHgIACIgFABQgFAAgFgCgAJNm4QgNgtgRgmIABAAQAHgDAIADQAIAEADAHIAKAcQADAIgEAHQgDAHgGADQAGgCAHADQAHAEACAIIAJAeQACAJgEAHQgEAHgIACIgBAAIgNgxgAutmKIAAAAQgHgEgDgIQgDgHAEgIIANgbQAEgHAHgDQAIgDAIAEIAAAAQAHADADAIQADAIgEAHIgNAbQgEAIgHACIgHACQgFAAgEgCgApEmtIAAAAQgHgFgCgIQgBgIAEgHIASgaQAFgGAIgCQAIgBAHAFIAAAAQAGAFACAIQABAIgFAHIgQAYQgFAHgIACIgEAAQgGAAgFgDgAuOnKIAAAAQgHgEgDgIQgCgIAEgHIAPgbQAEgHAIgCQAIgCAHAEQAIAEACAIQACAIgEAHIgPAaQgEAIgIACIgGABQgEAAgFgDgAobnnIAAgBQgGgFgBgIQgBgIAEgGIAGgIIACgCIAOgPQAFgGAIgBQAJAAAGAFQAGAGAAAIQABAJgGAGIgNAOIgGAIQgFAGgIABIgDABQgGAAgGgEgAObn4QgIgCgEgIIgNgZQgEgIACgIQADgHAHgEQAHgEAIACQAIACAEAIIAOAaQAEAIgDAHQgDAIgHAEQgEACgFAAIgGgBgAtsoHQgHgFgCgIQgBgIAEgHIAQgaQAFgGAIgCQAIgCAHAEQgHgEgBgJQgCgIAFgHIASgYQAGgHAIgBQAIgBAGAFIABAAQAGAFABAIQABAIgFAHIgRAYQgFAHgIABQgIABgGgEQAGAFABAHQACAIgEAHIgQAZQgEAHgIACIgFABQgGAAgFgDgAIvoLQgOgigSgdQAHgEAIACQAIADAEAHIAPAcQAEAIgDAIQgDAHgIAEIAAAAgAnsofIAAAAQgGgFgBgIQAAgJAGgGIAVgXQAFgGAJAAQAFgBAFADQgDgEAAgFQgBgIAGgGIAFgGIAAgBQAKgKAKgIQAHgFAIABQAHABAFAFQgCgHADgHQAEgHAIgDQARgGASgBQAIgBAGAGQAGAFABAHQACgGAGgFQAHgEAIACIAIABIgDgGQgCgIAEgHQACgFAEgDQgFABgFgCQgIgDgDgIQgFgNgHgLQgEgHACgIQACgGAEgEQgFADgGAAQgIgBgFgHQgJgKgKgIQgGgFgBgIIAAgHQgDADgEABQgIADgIgEIgBgBIgBAAQgKgDgNgDQgIgBgFgHQgEgGABgIIAAAAQABgJAHgFQAGgEAIABQATADAPAFIABABIACABQAIAEACAIQACAGgBAFQAEgEAHgBQAIgBAHAFQANAKALAOQAGAGgBAIQgBAIgGAFQAHgDAHACQAIACAFAHQAHANAHAPQADAIgDAIQgCAGgGADQAHgBAFADQAIAEACAHIAJAdQACAIgEAHIgFAGIgCAHQgEAIgIACQgIACgHgEQgLgFgNgDQgIgCgFgHQgCgEgBgEQgBAEgDADQgGAGgIABQgMABgMAEQgIACgHgDIgGgFQABAEgBAEQgBAIgGAFQgIAHgIAHIABgBIgFAGQgFAHgIABQgGAAgFgDQACAFAAAFQABAIgGAGIgVAXQgFAGgJABIgBAAQgHAAgGgGgAN6o3QgIgCgEgHIgPgZQgFgHACgIQACgGAEgEQgFACgGgBQgIgCgEgHIgQgZQgFgHACgIQABgHAFgEQgFADgHgBQgIgCgFgHIgRgYQgFgGACgJQABgGAEgEQgFADgHgBQgIgBgFgHIgSgXQgFgGABgIQABgIAGgFIABgBQAGgFAIABQAJABAFAHIASAXQAFAHgBAIQgBAGgFAFQAGgDAHABQAIABAFAHIARAZQAFAHgCAIQgBAHgGAEQAHgDAHACQAIACAEAGIAQAZQAFAHgCAIQgBAHgFAEQAGgCAGABQAIACAEAHIAPAaQAEAHgCAIQgCAIgHAEIAAABQgFACgFAAIgFgBgABqo7QgIgBgFgGQgGgHABgIIAAgCQACgHAFgEQAGgGAIABQANABANgCQAJgBAGAFIAEAEIACgHQAEgHAIgDIAbgKQAIgCAHADQAIADADAIQADAIgDAHQgEAIgHADIgeAKQgIADgHgEQgFgCgCgEQgBAFgDAFQgFAGgJABQgMACgLAAIgLAAgAH/pHQgIgBgFgHIgRgYQgFgGAAgIQABgFACgDQgEACgEAAQgIABgHgFQgJgIgMgFQgHgDgEgIQgCgGACgHIAAgCQAEgIAHgDQAIgDAIADQARAHAOAMQAGAFABAIQABAHgEAFQAGgDAGABQAJABAFAGIATAaQAFAHgBAIQgCAIgHAEIAAABQgFADgGAAIgEAAgAA7pKQgQgJgNgOQgFgGAAgJQAAgIAGgGIACgBQAFgEAIAAQAIABAGAGQAJAJAKAGQAHAFACAHQACAHgDAHIgBACQgEAHgIACIgFABQgFAAgFgDgADopgQgHgEgEgHIAAAAQgDgIADgIQAEgHAHgDIAcgMQAIgDAIADQAHADADAGIABABQADAIgDAHQgDAIgIADIgdANQgDABgEAAQgEAAgEgBgAscp7IAAgBQgHgFgBgIQAAgIAFgHIAUgXQAGgHAIAAQAIgBAGAGIABAAQAGAGAAAHQABAJgGAGIgTAXQgGAGgIABIgCAAQgGAAgGgEgAErp9QgHgCgFgHIAAgCQgDgGACgHQACgIAHgEIAKgGIACgBIAWgHQAIgCAHAEQAHADACAHQAAgIAFgGQAFgGAIgBQASgCAPAAQAJABAFAGQAGAGgBAIIAAABQAAAIgGAFQgGAGgIgBQgNAAgOABQgIACgHgGQgEgDgCgFQAAAGgDAFQgDAHgIACIgSAGIgIAFQgFACgFAAIgGgBgAAQp+QgIgDgDgIQgIgUAAgTQABgIAFgGQAGgFAIAAIABAAQgFgEgBgHQgCgIAEgHIAQgaQAFgHAIgCQAIgCAHAFIAAAAQAHAFABAIQACAIgEAHIgQAYQgEAIgIABIgHABIACACQAGAGgBAIQAAALAFALQAEAIgEAHQgCAHgHAEIgBAAQgEACgEAAIgHgBgArrq0QgGgFgBgJQAAgIAGgGIAXgXQAGgFAIAAQAJABAFAGQAGAGgBAIQAAAIgGAGIgVAUQgGAGgIABIgBAAQgHAAgGgGgAqqrfQgIgBgFgHQgGgGABgIQABgIAGgGIAYgTQAHgFAIABQAJACAEAGIABABQAEAHgBAHQgBAIgHAFIgWASQgGAFgHAAIgCAAgAA6r9QgGgFgCgIQgBgIAEgHIAPgTIAAgBIAFgGQAGgGAIgBQAHAAAGAEQgFgFgBgIQAAgIAGgGIAWgXQAGgGAIAAQAJAAAFAGQAGAGAAAJQAAAIgGAGIgVAVQgFAGgJAAQgGABgGgEQAFAFAAAGQABAJgFAGIgFAGIAAAAIgNARQgEAHgJABIgDAAQgGAAgGgDgAp0sIQgIgCgEgHIAAgBQgEgHADgIQACgIAIgEQAQgIAPgFQAIgCAHADQAHAEADAIIAAABQACAHgDAHQgEAIgIACQgMAEgNAHQgEACgFAAIgGgBgAo1sgQgHgEgCgIQgBgIAEgIQAEgGAIgCIAfgHQAJgBAGAFQAHAFACAIIAAABQABAHgFAHQgEAHgJABIgdAGIgEAAQgGAAgFgDgALAtPQgagcgYgVQAFgGAIgBQAJAAAGAFIAWAVQAGAGgBAIQABAHgEAEQAFgCAGAAQAIAAAGAGIAVAWQAFAGAAAJQAAAIgHAFIAAABQgWgagYgYgAnwssQgGgFgCgIIAAgBQAAgIAFgHQAFgGAJgBQARgBAPAAQAIAAAGAFQAGAGAAAJIAAAAQAAAIgGAGQgGAGgIAAIgdABIgCAAQgHAAgFgEgACkthQgIgBgFgGIgBAAQgFgGABgJQABgIAGgFIAYgTQAHgFAIABQAIABAFAHIABAAQAEAHgBAHQgBAJgHAFIgWASQgGAEgHAAIgCAAgAIcvFQiGgggyAIQgKABgMAEIgBgFQAAgJAGgGQAGgFAIAAIACAAQAMgCAQAAQAIAAAGAGQAGAGAAAIQABgHAGgFQAGgFAJABIAeAEQAIABAFAHQADAFAAAFQADgFAEgDQAHgEAIABIAdAGQAIACAEAHQADAEAAAFQAEgFAFgDQAIgDAIADQAOAFAQAJQAHAEACAIQACAHgCAFQAEgEAGgBQAJgBAGAEIAZATQAHAGAAAIQABAIgFAGIAAABQhBg6gxgLgADfuOQgIgCgFgGIAAgBQgEgHABgIQACgIAHgFIAZgQQAHgEAIACQAIABAEAGQgDgHACgHQADgIAIgDIAcgNQAIgDAHADQAIADADAHIABACQACAHgDAHQgDAHgHAEIgbAMQgHADgIgCQgGgCgDgFQACAGgCAGQgBAIgIAEIgYAQQgFADgGAAIgEAAg");
	this.shape_1.setTransform(106.3,122.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#B0D240","#FFDF00","#00AA4F"],[0,0.518,0.949],0,0,0,0,0,103.2).s().p("AkGPfIAAAAQABgJgGgGQgFgGgJgBIgdgCQgJgBgGAFQgGAGgBAHIgBAAQABgHgFgHQgFgGgIgCIgdgFQgJgCgGAFQgHAEgCAIIAAAAQACgIgEgHQgFgHgIgCIgcgIQgIgCgHAEQgIAEgCAHIAAABIgBAAIABgBQACgHgDgIQgEgHgIgDIgcgKQgHgDgIADQgHADgDAIIgBgBIAAAAQAEgHgDgIQgDgIgHgEIgagNQgHgEgIADQgIACgEAHIAAABIgBgBIABAAQAEgHgCgIQgCgIgHgFIgZgQQgHgEgIABQgHACgFAGIgCgBIABAAQAFgHgCgIQgBgIgGgFIgWgRQgHgFgIAAQgIABgFAHIgBAAIAAAAQAGgGgBgIQgBgJgGgFIgXgUQgGgGgIABQgIABgGAGIAAgBIAAAAQAGgGAAgIQgBgIgGgGIgUgVQgGgGgIAAQgJAAgGAFIAAABIAAgBQAGgFAAgJQAAgIgFgGIgUgWQgFgGgJgBQgIgBgGAGIAAgBIAAAAQAGgFABgIQABgIgFgHIgSgYQgFgGgIgBQgHgBgGADQAFgEACgHQABgIgEgHIgQgZQgFgHgIgCQgIgCgHAEIAAAAQAHgEACgIQACgIgEgHIgOgaQgEgHgHgDQgIgCgHADQAHgDADgIQADgIgEgHIgMgbQgDgIgIgDQgHgDgIADIAAAAQAHgDAEgHQADgIgDgHIgJgcQgCgIgIgEQgHgDgIACIAAgBQAHgCAEgHQAEgHgCgIIgHgdQgCgIgHgEQgFgDgFAAQAFgCADgFQAFgGgCgIIgFgeQgBgIgHgFQgHgFgIABIAAAAIAAAAIABAAQAIgBAFgHQAFgHgBgIIgDgdQgBgIgHgGQgFgEgIAAQAHgBAGgFQAFgGAAgJIAAgdQAAgIgGgGQgGgGgIAAQAIAAAGgGQAGgFAAgIIACgeQAAgIgFgGQgGgGgHgBQAIABAGgGQAHgFABgHIADgdQABgIgFgHQgFgHgIgBIgBAAIAAAAIABAAQAIACAHgFQAHgFABgIIAGgeQABgIgEgHQgFgGgHgCQAIACAHgFQAHgEACgIIAHgcQACgIgEgHQgEgGgGgDQAHABAGgDQAHgEADgIIAJgbQADgIgDgHQgEgIgIgCIACgEIAAAAQAIADAHgDQAIgEADgIIAKgaQADgIgDgHQgDgIgIgDIAAAAIAAAAIAAAAQAIADAIgDQAHgDAEgIIALgbQAEgIgDgHQgDgIgIgDIAAgBIAAAAQAIAEAIgDQAHgCAEgIIANgbQAEgHgDgIQgDgIgHgDIAAgBQAHAEAIgCQAIgDAEgHIAPgaQAEgHgCgIQgCgIgHgEIAAgBQAHAFAIgCQAIgCAEgHIAQgZQAEgHgBgIQgCgIgGgEQAGAEAIgBQAIgCAFgGIASgZQAEgGgBgIQgBgIgGgFIAAgBQAGAGAIgBQAIgBAGgGIAUgYQAFgGAAgIQgBgIgGgFIADgDQAGAGAIgBQAIAAAGgGIAVgUQAGgGABgIQAAgIgGgHIACgBQAFAHAIAAQAIABAHgFIAXgSQAGgFABgIQABgIgEgGIABAAQADAHAIACQAIADAHgEQANgHAMgEQAIgDAEgHQADgHgCgHIACgBQABAJAHAEQAHAEAJgCIAdgFQAIgCAEgHQAFgGgBgIIABAAQABAIAGAFQAGAGAIgBIAdgCQAIABAGgGQAGgGAAgIIABAAQgBAIAEAGQAFAHAJABQAMACALAEIAAAAIACABQAHAEAIgDQAEgBADgDIAAAHQABAIAGAFQAKAIAJAKQAFAHAIAAQAGABAFgDQgEAEgCAGQgCAIAEAHQAHALAFANQADAHAIADQAFADAFgBQgEADgCAEQgEAIADAIIACAGIgIgCQgIgBgHAEQgGAEgCAHQgBgHgGgGQgGgFgIAAQgSACgRAFQgIADgDAIQgEAHACAHQgFgFgHgBQgIgBgHAFQgKAIgJAKIgBABIgFAGQgGAGABAIQABAFACAEQgFgDgFAAQgJABgFAGIgVAXQgGAGABAIQAAAIAGAGIgBABQgGgFgIAAQgJAAgFAGIgOAQIgBABIgGAIQgFAHABAIQABAIAGAFIgBABIAAAAQgHgFgIABQgIACgFAGIgSAaQgEAHACAIQABAIAHAFQgHgEgIACQgIACgEAHIgPAaQgEAIACAIQADAIAHADIAAAAIgBAEIgBAAQgIgEgHADQgIADgDAIIgMAdQgDAHAEAIQAEAHAHADIAAAAQgIgCgHAEQgHAEgDAIIgHAdQgCAIAEAHQAEAHAIACIAAAAQgIgBgHAFQgHAEgBAIIgFAfQgBAIAFAGQAFAGAHACQgHAAgGAFQgGAFgBAIIgBAfQgBAIAGAGQAFAFAGABQgGABgFAFQgGAGABAJIABAeQABAIAGAFQAFAFAIAAQgHACgFAGQgFAHABAIIAFAcQABAJAHAEQAFAEAGAAQgGACgDAFQgFAHACAIIAHAeQABAIAIAEQAHAFAIgCQgIACgEAHQgEAHACAIIAKAgQACAIAIADQAHAEAIgDQgIADgDAIQgEAIAEAHIALAcQAEAIAHADQAIADAIgDIAAAAQgIAEgCAHQgDAIAEAIIAPAbQAEAHAIACQAIACAIgEIAAAAIAAAAIAAAAQgHAFgBAIQgCAIAFAHIATAZQAFAGAJABQAHABAHgFQgGAGABAHQgBAJAGAGIAWAUQAGAFAJgBQAHAAAFgFQgDAGABAHQABAIAHAFIAaARQAHAEAIgCQAIgCAEgHQgDAHADAIQACAHAIAEIAeANQAHADAIgEQAHgDADgIQgCAIAEAHQAEAHAIADIAdAHQAIACAIgEQAFgDACgFQABAFADAEQAEAHAJACIAfAEQAIABAGgGQAGgEABgGQABAGAFAGQAFAGAIAAIAfAAQAIABAGgGQAFgFAAgHQABAHAFAEQAGAGAJgBIAegBQAIgBAGgGQAEgFABgHQABAGAGAEQAGAGAIgBIAegEQAIgBAFgHQAFgGgBgIIAAgBIABAAQABAIAHAFQAGAFAIgBIAfgGQAIgCAFgHQAEgGgBgJIAAAAIAAABQACAIAHAEQAHAFAIgCIAfgHQAIgCAEgHQAEgHgBgIIAAAAIAAgBIAAABQADAIAHAEQAHAEAIgCIAdgIQAHgCAFgHQAEgIgDgIIAAAAIABABQACAIAIADQAHAEAIgDIAdgKQAIgDADgHQAEgIgDgHIAAAAQADAHAHADQAIAEAIgDIAdgMQAHgEADgHQADgIgDgHQAEAHAHADQAIADAIgEIAbgOQAHgEADgIQACgIgEgHIAAAAIABAAQAEAHAIACQAIACAHgFIAagRQAHgEACgIQABgIgEgHIAAAAQAFAGAIABQAIABAHgFIAYgUQAGgGABgIQAAgFgCgFQAEADAGgBQAIAAAGgGIAWgYQAFgGAAgIQgBgIgGgGIgBAAQAHAFAHgCQAIgBAFgHIARgaQAFgHgCgIQgDgIgHgEIAAgBIAAAAIAAAAQAIAEAIgDQAIgDADgHQAHgPAFgPQADgIgDgHQgEgIgIgCQAIACAHgEQAIgEACgIIAHgfQACgIgFgHQgEgHgIgCIgBAAIAAAAIABAAQAIABAGgGQAHgFABgIIACgeQAAgIgGgGQgDgEgEgBQAEgCADgDQAGgGAAgIIAAgfQgBgIgGgGQgFgFgGAAQAGgCAFgEQAFgGAAgJIgBgfQgBgIgGgGQgGgFgJAAIgBAAIAAAAIABAAQAIgBAGgGQAFgHgBgIIgDgfQgBgIgGgFQgHgFgIAAIgBAAIAAAAQAIgBAFgHQAFgGgBgJIgEgfQgCgIgGgFQgHgFgIACIAAgBIABAAQAIgCAEgHQAFgGgCgJIgGgdQgCgIgGgFQgHgEgIABIgBABIAAgBIAAAAQAIgCAEgIQAEgHgCgIIgIgeQgDgIgHgEQgGgDgHABQAGgDADgGQAEgIgDgHIgKgcQgDgHgIgEQgIgDgHADIAAAAQAHgEADgIQADgHgEgIIgPgdQgEgHgIgCQgIgCgHAEIAAgBQAGgEACgJQABgIgEgHIgUgZQgFgHgIgBQgHAAgGADQAEgFgBgHQgBgIgGgGQgOgLgRgHQgIgDgIADQgHADgDAIIgBACIAAAAIAAgBQAAgIgGgHQgFgGgJAAQgPgBgSADQgIABgFAGQgFAGABAHQgDgGgGgEQgIgEgIADIgVAHIgCABIgLAFQgHAFgCAHQgCAIADAGIAAAAQgEgHgHgDQgIgDgHAEIgcALQgIAEgDAHQgEAIAEAHIAAABIgBAAQgDgIgHgDQgIgEgIADIgbAKQgIACgEAIIgCAHIgEgEQgGgFgIABQgOABgMgBQgJAAgGAFQgFAFgCAHIgBgBQADgGgCgHQgCgIgHgEQgKgGgJgKQgGgGgIAAQgIAAgFAEIgBgBQAHgDADgHQADgHgEgIQgFgLABgLQAAgIgGgGIgCgCIAHgBQAIgCAEgHIAQgZQAEgGgBgJQgCgIgHgEIABgBQAGAFAJgBQAIgCAFgHIAMgQIAAgBIAFgFQAFgHAAgIQgBgHgFgFQAGAEAHAAQAIAAAFgHIAVgVQAGgFAAgJQAAgIgFgGIAAAAQAFAGAIABQAIABAHgGIAXgSQAGgFABgIQABgIgEgGIAFgEQAEAHAIABQAIACAHgEIAZgQQAHgEACgJQABgGgCgFQADAEAGACQAIADAHgEIAbgMQAHgDAEgIQACgGgCgHIABgBQAMgDALgCQAygHCFAfQAxAMBBA5QAYAWAbAbQAXAZAWAaIAAAAQgGAFgBAHQgBAJAFAGIASAXQAFAHAJABQAGABAFgDQgEAEgBAGQgCAIAFAHIARAYQAFAHAIACQAHABAGgDQgFAEgCAHQgCAIAFAHIAQAZQAEAHAIABQAGACAFgCQgEAEgBAFQgCAJAEAHIAPAZQAEAHAIACQAIACAHgEIABACQgHAEgDAIQgCAIAEAHIANAaQAEAHAIADQAIADAHgEIAAAAQgHAEgDAIQgDAIAEAHIAMAaQAEAIAHADQAGACAGgBQgFADgCAFQgEAIAEAIIALAcQADAHAHAEQAGACAHgBQgGADgDAGQgEAHADAIIAKAcQADAIAIADQAFADAHgBQgGADgDAGQgEAHADAIIAIAcQACAIAHAEQAHAEAIgCIABABIgBAAQgIACgEAHQgEAHACAIIAHAdQACAIAHAFQAGAEAJgCIAAAAIAAABIAAAAQgIACgFAHQgEAHACAIIAFAdQABAIAHAFQAHAFAIgBQAVCQgRCIQgEAhgJAhQgIgCgHAEQgHAEgDAHIgJAbQgEAIAEAHQACAGAFADQgGgBgGACQgHADgEAHIgMAZQgEAIACAIQACAGAFAEQgGgDgGACQgIACgEAHIgPAZQgFAHACAIQABAFAEAEQgFgCgGABQgIABgFAHIgRAWQgGAHABAIQABAIAGAFIABABIAAAAIAAAAQgHgGgIABQgIABgGAGIgTAVQgFAHAAAIQAAAGAEAFQgFgDgGAAQgIAAgGAGIgTATQgGAGAAAIQAAAFACAEQgEgCgEgBQgIAAgGAFIgXAUQgHAGAAAIQgBAIAGAGIgBABQgGgGgIgBQgIgBgHAFIgWASQgHAGgBAIQgBAGADAGQgFgEgGgBQgIgBgHAEIgYARQgHAFgBAIQgCAIAFAHQgFgHgIgBQgIgCgHAFIgYAQQgIAEgBAIQgCAIAEAHQgEgGgIgCQgIgCgHAEIgaAPQgHAEgCAIQgCAIAEAHIAAAAIAAAAIAAAAQgEgHgIgDQgIgCgHAEIgbAOQgHAEgCAHQgDAHADAGQgEgFgGgCQgIgDgIADIgbANQgHAEgDAIQgCAHADAIQgEgIgHgDQgIgDgIAEIgTAIQgGABgEAFQgGAGAAAIQAAAEACAEIgEABQgDgHgHgDQgIgEgHADIgcALQgIADgDAIQgDAHACAGQgDgGgHgEQgHgDgIACIgcAKQgIADgEAHQgDAHACAIIAAAAQgDgHgHgEQgIgEgHACIgdAJQgIACgEAHQgEAHACAIIAAAAQgCgIgIgEQgHgEgIACIgcAHQgIACgEAHQgEAHABAHQgCgHgGgEQgHgFgIACIgeAFQgIACgFAGQgEAHABAIQgCgIgGgFQgHgFgHACIgeAEQgIABgFAHQgFAGABAIIAAAAQgBgIgHgFQgGgFgIAAIgeADQgIABgFAGQgGAGABAIQgBgIgGgFQgGgGgIAAIgcABQgJABgFAGQgEAEgBAGQgBgGgFgFQgGgGgIAAIgeAAQgIAAgGAFQgGAGAAAIgAwqAKIAAAAIABAAIgBAAIAAAAg");
	this.shape_2.setTransform(107.1,122.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(4));

	// tail
	this.instance_37 = new lib.tail1("synched",0);
	this.instance_37.parent = this;
	this.instance_37.setTransform(112.1,57,1,1,0,0,0,30.7,24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,-2,219.6,226.9);


(lib.fadein = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// plankton3-all
	this.instance = new lib.plankton3all_yellow("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(391,-310.9,0.923,0.895,0,-46.6,-34.6,39.6,-32.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:40.4,regY:-32.1,scaleX:0.92,scaleY:0.9,skewX:-46.9,skewY:-35,y:-309.9,startPosition:1},0).wait(1).to({skewX:-47.1,skewY:-35.2,x:390.3,y:-308.5,startPosition:2},0).wait(1).to({skewX:-47.4,skewY:-35.5,x:389.8,y:-307.2,startPosition:3},0).wait(1).to({skewX:-47.7,skewY:-35.7,x:389.1,y:-305.9,startPosition:0},0).wait(1).to({skewX:-47.9,skewY:-36,x:388.5,y:-304.5,startPosition:1},0).wait(1).to({skewX:-48.2,skewY:-36.3,x:387.8,y:-303.2,startPosition:2},0).wait(1).to({skewX:-48.4,skewY:-36.5,x:387.3,y:-301.8,startPosition:3},0).wait(1).to({skewX:-48.7,skewY:-36.8,x:386.6,y:-300.5,startPosition:0},0).wait(1).to({skewX:-48.9,skewY:-37,x:386,y:-299.1,startPosition:1},0).wait(1).to({skewX:-49.2,skewY:-37.3,x:385.3,y:-297.8,startPosition:2},0).wait(1).to({skewX:-49.5,skewY:-37.6,x:384.8,y:-296.4,startPosition:3},0).wait(1).to({skewX:-49.7,skewY:-37.8,x:384.1,y:-295.1,startPosition:0},0).wait(1).to({skewX:-50,skewY:-38.1,x:383.5,y:-293.7,startPosition:1},0).wait(1).to({skewX:-50.2,skewY:-38.3,x:382.9,y:-292.3,startPosition:2},0).wait(1).to({skewX:-50.5,skewY:-38.6,x:382.3,y:-291,startPosition:3},0).wait(1).to({skewX:-50.8,skewY:-38.8,x:381.6,y:-289.7,startPosition:0},0).wait(1).to({skewX:-51,skewY:-39.1,x:381,y:-288.3,startPosition:1},0).wait(1).to({skewX:-51.3,skewY:-39.4,x:380.4,y:-287,startPosition:2},0).wait(1).to({skewX:-51.5,skewY:-39.6,x:379.8,y:-285.6,startPosition:3},0).wait(1).to({skewX:-51.8,skewY:-39.9,x:379.1,y:-284.3,startPosition:0},0).wait(1).to({skewX:-52,skewY:-40.1,x:378.5,y:-282.9,startPosition:1},0).wait(1).to({skewX:-52.3,skewY:-40.4,x:377.9,y:-281.6,startPosition:2},0).wait(1).to({skewX:-52.6,skewY:-40.7,x:377.3,y:-280.2,startPosition:3},0).wait(1).to({skewX:-52.8,skewY:-40.9,x:376.6,y:-278.9,startPosition:0},0).wait(1).to({skewX:-53.1,skewY:-41.2,x:376,y:-277.5,startPosition:1},0).wait(1).to({skewX:-53.3,skewY:-41.4,x:375.4,y:-276.2,startPosition:2},0).wait(1).to({skewX:-53.6,skewY:-41.7,x:374.8,y:-274.8,startPosition:3},0).wait(1).to({skewX:-53.9,skewY:-41.9,x:374.1,y:-273.4,startPosition:0},0).wait(1).to({skewX:-54.1,skewY:-42.2,x:373.5,y:-272.1,startPosition:1},0).wait(1).to({skewX:-54.4,skewY:-42.5,x:372.9,y:-270.7,startPosition:2},0).wait(1).to({skewX:-54.6,skewY:-42.7,x:372.3,y:-269.4,startPosition:3},0).wait(1).to({skewX:-54.9,skewY:-43,x:371.6,y:-268,startPosition:0},0).wait(1).to({skewX:-55.2,skewY:-43.2,x:371,y:-266.7,startPosition:1},0).wait(1).to({skewX:-55.4,skewY:-43.5,x:370.4,y:-265.4,startPosition:2},0).wait(1).to({skewX:-55.7,skewY:-43.8,x:369.8,y:-264,startPosition:3},0).wait(1).to({skewX:-55.9,skewY:-44,x:369.1,y:-262.6,startPosition:0},0).wait(1).to({skewX:-56.2,skewY:-44.3,x:368.5,y:-261.3,startPosition:1},0).wait(1).to({skewX:-56.4,skewY:-44.5,x:367.9,y:-259.9,startPosition:2},0).wait(1).to({skewX:-56.7,skewY:-44.8,x:367.3,y:-258.6,startPosition:3},0).wait(1).to({skewX:-57,skewY:-45.1,x:366.7,y:-257.3,startPosition:0},0).wait(1).to({skewX:-57.2,skewY:-45.3,x:366,y:-255.9,startPosition:1},0).wait(1).to({skewX:-57.5,skewY:-45.6,x:365.4,y:-254.5,startPosition:2},0).wait(1).to({skewX:-57.7,skewY:-45.8,x:364.8,y:-253.2,startPosition:3},0).wait(1).to({skewX:-58,skewY:-46.1,x:364.1,y:-251.8,startPosition:0},0).wait(1).to({skewX:-58.3,skewY:-46.3,x:363.5,y:-250.5,startPosition:1},0).wait(1).to({skewX:-58.5,skewY:-46.6,x:362.9,y:-249.2,startPosition:2},0).wait(1).to({skewX:-58.8,skewY:-46.9,x:362.3,y:-247.8,startPosition:3},0).wait(1).to({skewX:-59,skewY:-47.1,x:361.6,y:-246.4,startPosition:0},0).wait(1).to({skewX:-59.3,skewY:-47.4,x:361,y:-245.1,startPosition:1},0).wait(1).to({skewX:-59.5,skewY:-47.6,x:360.4,y:-243.8,startPosition:2},0).wait(1).to({skewX:-59.8,skewY:-47.9,x:359.8,y:-242.4,startPosition:3},0).wait(1).to({skewX:-60.1,skewY:-48.2,x:359.1,y:-241,startPosition:0},0).wait(1).to({skewX:-60.3,skewY:-48.4,x:358.5,y:-239.7,startPosition:1},0).wait(1).to({skewX:-60.6,skewY:-48.7,x:357.9,y:-238.4,startPosition:2},0).wait(1).to({skewX:-60.8,skewY:-48.9,x:357.3,y:-237,startPosition:3},0).wait(1).to({skewX:-61.1,skewY:-49.2,x:356.6,y:-235.6,startPosition:0},0).wait(1).to({skewX:-61.4,skewY:-49.4,x:356,y:-234.3,startPosition:1},0).wait(1).to({skewX:-61.6,skewY:-49.7,x:355.4,y:-233,startPosition:2},0).wait(1).to({skewX:-61.9,skewY:-50,x:354.8,y:-231.6,startPosition:3},0).wait(1).to({skewX:-62.1,skewY:-50.2,x:354.1,y:-230.2,startPosition:0},0).wait(1).to({skewX:-62.4,skewY:-50.5,x:353.5,y:-228.9,startPosition:1},0).wait(1).to({skewX:-62.6,skewY:-50.7,x:352.9,y:-227.5,startPosition:2},0).wait(1).to({skewX:-62.9,skewY:-51,x:352.3,y:-226.1,startPosition:3},0).wait(1).to({skewX:-63.2,skewY:-51.3,x:351.6,y:-224.9,startPosition:0},0).wait(1).to({skewX:-63.4,skewY:-51.5,x:351,y:-223.5,startPosition:1},0).wait(1).to({skewX:-63.7,skewY:-51.8,x:350.4,y:-222.1,startPosition:2},0).wait(1).to({skewX:-63.9,skewY:-52,x:349.8,y:-220.8,startPosition:3},0).wait(1).to({skewX:-64.2,skewY:-52.3,x:349.1,y:-219.4,startPosition:0},0).wait(1).to({skewX:-64.5,skewY:-52.5,x:348.5,y:-218.1,startPosition:1},0).wait(1).to({skewX:-64.7,skewY:-52.8,x:347.9,y:-216.7,startPosition:2},0).wait(1).to({skewX:-65,skewY:-53.1,x:347.3,y:-215.3,startPosition:3},0).wait(1).to({skewX:-65.2,skewY:-53.3,x:346.7,y:-214,startPosition:0},0).wait(1).to({skewX:-65.5,skewY:-53.6,x:346,y:-212.7,startPosition:1},0).wait(1).to({skewX:-65.8,skewY:-53.8,x:345.4,y:-211.3,startPosition:2},0).wait(1).to({skewX:-66,skewY:-54.1,x:344.7,y:-210,startPosition:3},0).wait(1).to({skewX:-66.3,skewY:-54.4,x:344.1,y:-208.6,startPosition:0},0).wait(1).to({skewX:-66.5,skewY:-54.6,x:343.5,y:-207.3,startPosition:1},0).wait(1).to({skewX:-66.8,skewY:-54.9,x:342.9,y:-205.9,startPosition:2},0).wait(1).to({skewX:-67,skewY:-55.1,x:342.3,y:-204.5,startPosition:3},0).wait(1).to({skewX:-67.3,skewY:-55.4,x:341.6,y:-203.2,startPosition:0},0).wait(1).to({skewX:-67.6,skewY:-55.7,x:341,y:-201.9,startPosition:1},0).wait(1).to({skewX:-67.8,skewY:-55.9,x:340.4,y:-200.5,startPosition:2},0).wait(1).to({skewX:-68.1,skewY:-56.2,x:339.8,y:-199.1,startPosition:3},0).wait(1).to({skewX:-68.3,skewY:-56.4,x:339.1,y:-197.8,startPosition:0},0).wait(1).to({skewX:-68.6,skewY:-56.7,x:338.5,y:-196.4,startPosition:1},0).wait(1).to({skewX:-68.9,skewY:-56.9,x:337.8,y:-195.1,startPosition:2},0).wait(1).to({skewX:-69.1,skewY:-57.2,x:337.3,y:-193.8,startPosition:3},0).wait(1).to({skewX:-69.4,skewY:-57.5,x:336.7,y:-192.4,startPosition:0},0).wait(1).to({skewX:-69.6,skewY:-57.7,x:336,y:-191.1,startPosition:1},0).wait(1).to({skewX:-69.9,skewY:-58,x:335.4,y:-189.7,startPosition:2},0).wait(1).to({skewX:-70.1,skewY:-58.2,x:334.8,y:-188.3,startPosition:3},0).wait(1).to({skewX:-70.4,skewY:-58.5,x:334.1,y:-187,startPosition:0},0).wait(1));

	// plankton3-all
	this.instance_1 = new lib.plankton3all("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(398,309,1,1,-91,0,0,38.6,-30.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:40.4,regY:-32.1,rotation:-90.8,x:396.1,y:306.2,startPosition:1},0).wait(1).to({rotation:-90.5,x:396,y:305.2,startPosition:2},0).wait(1).to({rotation:-90.2,x:395.9,y:304.3,startPosition:3},0).wait(1).to({rotation:-89.9,x:395.8,y:303.3,startPosition:0},0).wait(1).to({rotation:-89.7,x:395.7,y:302.4,startPosition:1},0).wait(1).to({rotation:-89.4,x:395.6,y:301.4,startPosition:2},0).wait(1).to({rotation:-89.1,x:395.5,y:300.5,startPosition:3},0).wait(1).to({rotation:-88.8,x:395.4,y:299.5,startPosition:0},0).wait(1).to({rotation:-88.6,x:395.3,y:298.6,startPosition:1},0).wait(1).to({rotation:-88.3,x:395.2,y:297.6,startPosition:2},0).wait(1).to({rotation:-88,x:395.1,y:296.7,startPosition:3},0).wait(1).to({rotation:-87.7,x:395,y:295.8,startPosition:0},0).wait(1).to({rotation:-87.5,x:394.9,y:294.8,startPosition:1},0).wait(1).to({rotation:-87.2,x:394.8,y:293.8,startPosition:2},0).wait(1).to({rotation:-86.9,x:394.7,y:292.8,startPosition:3},0).wait(1).to({rotation:-86.6,x:394.6,y:291.9,startPosition:0},0).wait(1).to({rotation:-86.4,x:394.5,y:291,startPosition:1},0).wait(1).to({rotation:-86.1,x:394.4,y:290,startPosition:2},0).wait(1).to({rotation:-85.8,x:394.3,y:289,startPosition:3},0).wait(1).to({rotation:-85.5,x:394.2,y:288.1,startPosition:0},0).wait(1).to({rotation:-85.2,x:394.1,y:287.2,startPosition:1},0).wait(1).to({rotation:-85,x:394,y:286.2,startPosition:2},0).wait(1).to({rotation:-84.7,x:393.9,y:285.3,startPosition:3},0).wait(1).to({rotation:-84.4,x:393.8,y:284.3,startPosition:0},0).wait(1).to({rotation:-84.1,x:393.7,y:283.3,startPosition:1},0).wait(1).to({rotation:-83.9,x:393.6,y:282.4,startPosition:2},0).wait(1).to({rotation:-83.6,x:393.5,y:281.4,startPosition:3},0).wait(1).to({rotation:-83.3,x:393.4,y:280.5,startPosition:0},0).wait(1).to({rotation:-83,x:393.3,y:279.5,startPosition:1},0).wait(1).to({rotation:-82.8,x:393.2,y:278.5,startPosition:2},0).wait(1).to({rotation:-82.5,y:277.6,startPosition:3},0).wait(1).to({rotation:-82.2,x:393,y:276.6,startPosition:0},0).wait(1).to({rotation:-81.9,x:392.9,y:275.7,startPosition:1},0).wait(1).to({rotation:-81.7,x:392.8,y:274.8,startPosition:2},0).wait(1).to({rotation:-81.4,x:392.7,y:273.8,startPosition:3},0).wait(1).to({rotation:-81.1,x:392.6,y:272.9,startPosition:0},0).wait(1).to({rotation:-80.8,x:392.5,y:271.9,startPosition:1},0).wait(1).to({rotation:-80.6,x:392.4,y:271,startPosition:2},0).wait(1).to({rotation:-80.3,x:392.3,y:270,startPosition:3},0).wait(1).to({rotation:-80,x:392.2,y:269,startPosition:0},0).wait(1).to({rotation:-79.7,x:392.1,y:268.1,startPosition:1},0).wait(1).to({rotation:-79.5,x:392,y:267.2,startPosition:2},0).wait(1).to({rotation:-79.2,x:391.9,y:266.2,startPosition:3},0).wait(1).to({rotation:-78.9,x:391.8,y:265.2,startPosition:0},0).wait(1).to({rotation:-78.6,x:391.7,y:264.3,startPosition:1},0).wait(1).to({rotation:-78.4,x:391.6,y:263.3,startPosition:2},0).wait(1).to({rotation:-78.1,y:262.3,startPosition:3},0).wait(1).to({rotation:-77.8,x:391.5,y:261.4,startPosition:0},0).wait(1).to({rotation:-77.5,x:391.3,y:260.4,startPosition:1},0).wait(1).to({rotation:-77.3,x:391.2,y:259.5,startPosition:2},0).wait(1).to({rotation:-77,y:258.5,startPosition:3},0).wait(1).to({rotation:-76.7,x:391,y:257.6,startPosition:0},0).wait(1).to({rotation:-76.4,y:256.7,startPosition:1},0).wait(1).to({rotation:-76.2,x:390.8,y:255.7,startPosition:2},0).wait(1).to({rotation:-75.9,x:390.7,y:254.7,startPosition:3},0).wait(1).to({rotation:-75.6,y:253.8,startPosition:0},0).wait(1).to({rotation:-75.3,x:390.6,y:252.8,startPosition:1},0).wait(1).to({rotation:-75,x:390.5,y:251.9,startPosition:2},0).wait(1).to({rotation:-74.8,x:390.4,y:250.9,startPosition:3},0).wait(1).to({rotation:-74.5,x:390.2,y:249.9,startPosition:0},0).wait(1).to({rotation:-74.2,y:249,startPosition:1},0).wait(1).to({rotation:-73.9,x:390,y:248.1,startPosition:2},0).wait(1).to({rotation:-73.7,y:247.1,startPosition:3},0).wait(1).to({rotation:-73.4,x:389.9,y:246.2,startPosition:0},0).wait(1).to({rotation:-73.1,x:389.8,y:245.3,startPosition:1},0).wait(1).to({rotation:-72.8,x:389.7,y:244.3,startPosition:2},0).wait(1).to({rotation:-72.6,x:389.6,y:243.3,startPosition:3},0).wait(1).to({rotation:-72.3,x:389.5,y:242.4,startPosition:0},0).wait(1).to({rotation:-72,x:389.3,y:241.5,startPosition:1},0).wait(1).to({rotation:-71.7,y:240.5,startPosition:2},0).wait(1).to({rotation:-71.5,x:389.2,y:239.5,startPosition:3},0).wait(1).to({rotation:-71.2,x:389.1,y:238.6,startPosition:0},0).wait(1).to({rotation:-70.9,x:389,y:237.6,startPosition:1},0).wait(1).to({rotation:-70.6,x:388.9,y:236.7,startPosition:2},0).wait(1).to({rotation:-70.4,x:388.8,y:235.7,startPosition:3},0).wait(1).to({rotation:-70.1,x:388.7,y:234.7,startPosition:0},0).wait(1).to({rotation:-69.8,x:388.6,y:233.8,startPosition:1},0).wait(1).to({rotation:-69.5,x:388.5,y:232.9,startPosition:2},0).wait(1).to({rotation:-69.3,x:388.4,y:231.9,startPosition:3},0).wait(1).to({rotation:-69,x:388.3,y:231,startPosition:0},0).wait(1).to({rotation:-68.7,x:388.2,y:230,startPosition:1},0).wait(1).to({rotation:-68.4,x:388.1,y:229.1,startPosition:2},0).wait(1).to({rotation:-68.2,x:388,y:228.1,startPosition:3},0).wait(1).to({rotation:-67.9,x:387.9,y:227.2,startPosition:0},0).wait(1).to({rotation:-67.6,x:387.8,y:226.2,startPosition:1},0).wait(1).to({rotation:-67.3,x:387.7,y:225.3,startPosition:2},0).wait(1).to({rotation:-67.1,x:387.6,y:224.3,startPosition:3},0).wait(1).to({rotation:-66.8,y:223.4,startPosition:0},0).wait(1).to({rotation:-66.5,x:387.4,y:222.4,startPosition:1},0).wait(1).to({rotation:-66.2,y:221.5,startPosition:2},0).wait(1).to({rotation:-65.9,x:387.2,y:220.5,startPosition:3},0).wait(1).to({rotation:-65.7,y:219.6,startPosition:0},0).wait(1));

	// plankton-all
	this.instance_2 = new lib.planktonall("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-307,-331.9,0.8,0.75,0,180,0,106.8,111);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:106.3,regY:111.1,y:-331.7,startPosition:1},0).wait(1).to({x:-306.7,y:-331.3,startPosition:2},0).wait(1).to({x:-306.4,y:-331,startPosition:3},0).wait(1).to({x:-306,y:-330.6,startPosition:0},0).wait(1).to({x:-305.7,y:-330.3,startPosition:1},0).wait(1).to({x:-305.4,y:-329.9,startPosition:2},0).wait(1).to({x:-305.1,y:-329.6,startPosition:3},0).wait(1).to({x:-304.7,y:-329.2,startPosition:0},0).wait(1).to({x:-304.4,y:-328.9,startPosition:1},0).wait(1).to({x:-304.1,y:-328.5,startPosition:2},0).wait(1).to({x:-303.7,y:-328.2,startPosition:3},0).wait(1).to({x:-303.4,y:-327.8,startPosition:0},0).wait(1).to({x:-303.1,y:-327.5,startPosition:1},0).wait(1).to({x:-302.8,y:-327.1,startPosition:2},0).wait(1).to({x:-302.4,y:-326.8,startPosition:3},0).wait(1).to({x:-302.1,y:-326.4,startPosition:0},0).wait(1).to({x:-301.8,y:-326.1,startPosition:1},0).wait(1).to({x:-301.4,y:-325.7,startPosition:2},0).wait(1).to({x:-301.1,y:-325.4,startPosition:3},0).wait(1).to({x:-300.8,y:-325,startPosition:0},0).wait(1).to({x:-300.5,y:-324.7,startPosition:1},0).wait(1).to({x:-300.1,y:-324.3,startPosition:2},0).wait(1).to({x:-299.8,y:-324,startPosition:3},0).wait(1).to({x:-299.5,y:-323.6,startPosition:0},0).wait(1).to({x:-299.1,y:-323.3,startPosition:1},0).wait(1).to({x:-298.8,y:-322.9,startPosition:2},0).wait(1).to({x:-298.5,y:-322.6,startPosition:3},0).wait(1).to({x:-298.2,y:-322.2,startPosition:0},0).wait(1).to({x:-297.8,y:-321.9,startPosition:1},0).wait(1).to({x:-297.5,y:-321.5,startPosition:2},0).wait(1).to({x:-297.2,y:-321.2,startPosition:3},0).wait(1).to({x:-296.8,y:-320.9,startPosition:0},0).wait(1).to({x:-296.5,y:-320.5,startPosition:1},0).wait(1).to({x:-296.2,y:-320.2,startPosition:2},0).wait(1).to({x:-295.9,y:-319.8,startPosition:3},0).wait(1).to({x:-295.5,y:-319.5,startPosition:0},0).wait(1).to({x:-295.2,y:-319.1,startPosition:1},0).wait(1).to({x:-294.9,y:-318.8,startPosition:2},0).wait(1).to({x:-294.5,y:-318.4,startPosition:3},0).wait(1).to({x:-294.2,y:-318.1,startPosition:0},0).wait(1).to({x:-293.9,y:-317.7,startPosition:1},0).wait(1).to({x:-293.6,y:-317.4,startPosition:2},0).wait(1).to({x:-293.2,y:-317,startPosition:3},0).wait(1).to({x:-292.9,y:-316.7,startPosition:0},0).wait(1).to({x:-292.6,y:-316.3,startPosition:1},0).wait(1).to({x:-292.3,y:-316,startPosition:2},0).wait(1).to({x:-291.9,y:-315.6,startPosition:3},0).wait(1).to({x:-291.6,y:-315.3,startPosition:0},0).wait(1).to({x:-291.3,y:-314.9,startPosition:1},0).wait(1).to({x:-290.9,y:-314.6,startPosition:2},0).wait(1).to({x:-290.6,y:-314.2,startPosition:3},0).wait(1).to({x:-290.3,y:-313.9,startPosition:0},0).wait(1).to({x:-290,y:-313.5,startPosition:1},0).wait(1).to({x:-289.6,y:-313.2,startPosition:2},0).wait(1).to({x:-289.3,y:-312.8,startPosition:3},0).wait(1).to({x:-289,y:-312.5,startPosition:0},0).wait(1).to({x:-288.6,y:-312.1,startPosition:1},0).wait(1).to({x:-288.3,y:-311.8,startPosition:2},0).wait(1).to({x:-288,y:-311.4,startPosition:3},0).wait(1).to({x:-287.7,y:-311.1,startPosition:0},0).wait(1).to({x:-287.3,y:-310.7,startPosition:1},0).wait(1).to({x:-287,y:-310.4,startPosition:2},0).wait(1).to({x:-286.7,y:-310.1,startPosition:3},0).wait(1).to({x:-286.3,y:-309.7,startPosition:0},0).wait(1).to({x:-286,y:-309.4,startPosition:1},0).wait(1).to({x:-285.7,y:-309,startPosition:2},0).wait(1).to({x:-285.4,y:-308.7,startPosition:3},0).wait(1).to({x:-285,y:-308.3,startPosition:0},0).wait(1).to({x:-284.7,y:-308,startPosition:1},0).wait(1).to({x:-284.4,y:-307.6,startPosition:2},0).wait(1).to({x:-284,y:-307.3,startPosition:3},0).wait(1).to({x:-283.7,y:-306.9,startPosition:0},0).wait(1).to({x:-283.4,y:-306.6,startPosition:1},0).wait(1).to({x:-283.1,y:-306.2,startPosition:2},0).wait(1).to({x:-282.7,y:-305.9,startPosition:3},0).wait(1).to({x:-282.4,y:-305.5,startPosition:0},0).wait(1).to({x:-282.1,y:-305.2,startPosition:1},0).wait(1).to({x:-281.7,y:-304.8,startPosition:2},0).wait(1).to({x:-281.4,y:-304.5,startPosition:3},0).wait(1).to({x:-281.1,y:-304.1,startPosition:0},0).wait(1).to({x:-280.8,y:-303.8,startPosition:1},0).wait(1).to({x:-280.4,y:-303.4,startPosition:2},0).wait(1).to({x:-280.1,y:-303.1,startPosition:3},0).wait(1).to({x:-279.8,y:-302.7,startPosition:0},0).wait(1).to({x:-279.4,y:-302.4,startPosition:1},0).wait(1).to({x:-279.1,y:-302,startPosition:2},0).wait(1).to({x:-278.8,y:-301.7,startPosition:3},0).wait(1).to({x:-278.5,y:-301.3,startPosition:0},0).wait(1).to({x:-278.1,y:-301,startPosition:1},0).wait(1).to({x:-277.8,y:-300.6,startPosition:2},0).wait(1).to({x:-277.5,y:-300.3,startPosition:3},0).wait(1).to({x:-277.2,y:-299.9,startPosition:0},0).wait(1));

	// planton2-all
	this.instance_3 = new lib.planton2all("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(480.1,-76,0.804,0.673,0,151.7,-33.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:0.4,regY:-0.4,scaleX:0.81,scaleY:0.67,skewX:151.5,skewY:-34,x:480.4,y:-76.8,startPosition:1},0).wait(1).to({skewX:151.2,skewY:-34.2,y:-77.6,startPosition:2},0).wait(1).to({skewX:151,skewY:-34.4,y:-78.5,startPosition:3},0).wait(1).to({skewX:150.8,skewY:-34.7,x:480.3,y:-79.4,startPosition:0},0).wait(1).to({skewX:150.5,skewY:-34.9,y:-80.3,startPosition:1},0).wait(1).to({skewX:150.3,skewY:-35.1,y:-81.1,startPosition:2},0).wait(1).to({skewX:150.1,skewY:-35.3,x:480.2,y:-82,startPosition:3},0).wait(1).to({skewX:149.9,skewY:-35.6,y:-82.9,startPosition:0},0).wait(1).to({skewX:149.6,skewY:-35.8,y:-83.8,startPosition:1},0).wait(1).to({skewX:149.4,skewY:-36,x:480.1,y:-84.6,startPosition:2},0).wait(1).to({skewX:149.2,skewY:-36.3,y:-85.5,startPosition:3},0).wait(1).to({skewX:148.9,skewY:-36.5,y:-86.4,startPosition:0},0).wait(1).to({skewX:148.7,skewY:-36.7,y:-87.3,startPosition:1},0).wait(1).to({skewX:148.5,skewY:-36.9,x:480,y:-88.1,startPosition:2},0).wait(1).to({skewX:148.3,skewY:-37.2,y:-89,startPosition:3},0).wait(1).to({skewX:148,skewY:-37.4,y:-89.9,startPosition:0},0).wait(1).to({skewX:147.8,skewY:-37.6,x:479.9,y:-90.8,startPosition:1},0).wait(1).to({skewX:147.6,skewY:-37.9,y:-91.6,startPosition:2},0).wait(1).to({skewX:147.3,skewY:-38.1,y:-92.5,startPosition:3},0).wait(1).to({skewX:147.1,skewY:-38.3,x:479.8,y:-93.4,startPosition:0},0).wait(1).to({skewX:146.9,skewY:-38.5,y:-94.3,startPosition:1},0).wait(1).to({skewX:146.7,skewY:-38.8,y:-95.1,startPosition:2},0).wait(1).to({skewX:146.4,skewY:-39,y:-96.1,startPosition:3},0).wait(1).to({skewX:146.2,skewY:-39.2,x:479.7,y:-96.9,startPosition:0},0).wait(1).to({skewX:146,skewY:-39.5,y:-97.8,startPosition:1},0).wait(1).to({skewX:145.7,skewY:-39.7,y:-98.7,startPosition:2},0).wait(1).to({skewX:145.5,skewY:-39.9,x:479.6,y:-99.6,startPosition:3},0).wait(1).to({skewX:145.3,skewY:-40.1,y:-100.4,startPosition:0},0).wait(1).to({skewX:145,skewY:-40.4,y:-101.3,startPosition:1},0).wait(1).to({skewX:144.8,skewY:-40.6,x:479.5,y:-102.2,startPosition:2},0).wait(1).to({skewX:144.6,skewY:-40.8,y:-103.1,startPosition:3},0).wait(1).to({skewX:144.4,skewY:-41.1,y:-103.9,startPosition:0},0).wait(1).to({skewX:144.1,skewY:-41.3,x:479.4,y:-104.8,startPosition:1},0).wait(1).to({skewX:143.9,skewY:-41.5,y:-105.7,startPosition:2},0).wait(1).to({skewX:143.7,skewY:-41.8,y:-106.6,startPosition:3},0).wait(1).to({skewX:143.4,skewY:-42,y:-107.4,startPosition:0},0).wait(1).to({skewX:143.2,skewY:-42.2,x:479.3,y:-108.3,startPosition:1},0).wait(1).to({skewX:143,skewY:-42.4,y:-109.2,startPosition:2},0).wait(1).to({skewX:142.8,skewY:-42.7,y:-110.1,startPosition:3},0).wait(1).to({skewX:142.5,skewY:-42.9,x:479.2,y:-110.9,startPosition:0},0).wait(1).to({skewX:142.3,skewY:-43.1,y:-111.8,startPosition:1},0).wait(1).to({skewX:142.1,skewY:-43.4,y:-112.7,startPosition:2},0).wait(1).to({skewX:141.8,skewY:-43.6,x:479.1,y:-113.6,startPosition:3},0).wait(1).to({skewX:141.6,skewY:-43.8,y:-114.4,startPosition:0},0).wait(1).to({skewX:141.4,skewY:-44,y:-115.3,startPosition:1},0).wait(1).to({skewX:141.2,skewY:-44.3,y:-116.2,startPosition:2},0).wait(1).to({skewX:140.9,skewY:-44.5,x:479,y:-117.1,startPosition:3},0).wait(1).to({skewX:140.7,skewY:-44.7,y:-118,startPosition:0},0).wait(1).to({skewX:140.5,skewY:-45,y:-118.8,startPosition:1},0).wait(1).to({skewX:140.2,skewY:-45.2,x:478.9,y:-119.7,startPosition:2},0).wait(1).to({skewX:140,skewY:-45.4,y:-120.6,startPosition:3},0).wait(1).to({skewX:139.8,skewY:-45.6,y:-121.5,startPosition:0},0).wait(1).to({skewX:139.6,skewY:-45.9,x:478.8,y:-122.3,startPosition:1},0).wait(1).to({skewX:139.3,skewY:-46.1,y:-123.2,startPosition:2},0).wait(1).to({skewX:139.1,skewY:-46.3,y:-124.1,startPosition:3},0).wait(1).to({skewX:138.9,skewY:-46.6,x:478.7,y:-125,startPosition:0},0).wait(1).to({skewX:138.6,skewY:-46.8,y:-125.8,startPosition:1},0).wait(1).to({skewX:138.4,skewY:-47,y:-126.7,startPosition:2},0).wait(1).to({skewX:138.2,skewY:-47.2,y:-127.6,startPosition:3},0).wait(1).to({skewX:138,skewY:-47.5,x:478.6,y:-128.5,startPosition:0},0).wait(1).to({skewX:137.7,skewY:-47.7,y:-129.3,startPosition:1},0).wait(1).to({skewX:137.5,skewY:-47.9,y:-130.2,startPosition:2},0).wait(1).to({skewX:137.3,skewY:-48.2,x:478.5,y:-131.1,startPosition:3},0).wait(1).to({skewX:137,skewY:-48.4,y:-132,startPosition:0},0).wait(1).to({skewX:136.8,skewY:-48.6,y:-132.8,startPosition:1},0).wait(1).to({skewX:136.6,skewY:-48.8,x:478.4,y:-133.7,startPosition:2},0).wait(1).to({skewX:136.4,skewY:-49.1,y:-134.6,startPosition:3},0).wait(1).to({skewX:136.1,skewY:-49.3,y:-135.5,startPosition:0},0).wait(1).to({skewX:135.9,skewY:-49.5,y:-136.3,startPosition:1},0).wait(1).to({skewX:135.7,skewY:-49.8,x:478.3,y:-137.2,startPosition:2},0).wait(1).to({skewX:135.4,skewY:-50,y:-138.1,startPosition:3},0).wait(1).to({skewX:135.2,skewY:-50.2,y:-139,startPosition:0},0).wait(1).to({skewX:135,skewY:-50.4,x:478.2,y:-139.8,startPosition:1},0).wait(1).to({skewX:134.8,skewY:-50.7,y:-140.7,startPosition:2},0).wait(1).to({skewX:134.5,skewY:-50.9,y:-141.6,startPosition:3},0).wait(1).to({skewX:134.3,skewY:-51.1,x:478.1,y:-142.5,startPosition:0},0).wait(1).to({skewX:134.1,skewY:-51.4,y:-143.3,startPosition:1},0).wait(1).to({skewX:133.8,skewY:-51.6,y:-144.2,startPosition:2},0).wait(1).to({skewX:133.6,skewY:-51.8,x:478,y:-145.1,startPosition:3},0).wait(1).to({skewX:133.4,skewY:-52,y:-146,startPosition:0},0).wait(1).to({skewX:133.1,skewY:-52.3,y:-146.8,startPosition:1},0).wait(1).to({skewX:132.9,skewY:-52.5,y:-147.7,startPosition:2},0).wait(1).to({skewX:132.7,skewY:-52.7,x:477.9,y:-148.6,startPosition:3},0).wait(1).to({skewX:132.5,skewY:-53,y:-149.5,startPosition:0},0).wait(1).to({skewX:132.2,skewY:-53.2,y:-150.3,startPosition:1},0).wait(1).to({skewX:132,skewY:-53.4,x:477.8,y:-151.2,startPosition:2},0).wait(1).to({skewX:131.8,skewY:-53.7,y:-152.1,startPosition:3},0).wait(1).to({skewX:131.5,skewY:-53.9,y:-153,startPosition:0},0).wait(1).to({skewX:131.3,skewY:-54.1,x:477.7,y:-153.8,startPosition:1},0).wait(1).to({skewX:131.1,skewY:-54.3,y:-154.7,startPosition:2},0).wait(1).to({skewX:130.9,skewY:-54.6,y:-155.6,startPosition:3},0).wait(1).to({skewX:130.6,skewY:-54.8,y:-156.5,startPosition:0},0).wait(1));

	// plankton3-all
	this.instance_4 = new lib.plankton3all_yellow("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-261.9,231.1,0.869,0.877,0,0,180,40.2,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:40.4,regY:-32.1,skewX:0.2,skewY:180.2,x:-262.2,y:229.6,startPosition:1},0).wait(1).to({skewX:0.4,skewY:180.4,x:-262.3,y:229.1,startPosition:2},0).wait(1).to({skewX:0.6,skewY:180.6,x:-262.4,y:228.6,startPosition:3},0).wait(1).to({skewX:0.9,skewY:180.9,y:228.1,startPosition:0},0).wait(1).to({skewX:1.1,skewY:181.1,x:-262.5,y:227.6,startPosition:1},0).wait(1).to({skewX:1.3,skewY:181.3,x:-262.6,y:227.1,startPosition:2},0).wait(1).to({skewX:1.5,skewY:181.5,y:226.7,startPosition:3},0).wait(1).to({skewX:1.7,skewY:181.7,x:-262.7,y:226.1,startPosition:0},0).wait(1).to({skewX:1.9,skewY:181.9,x:-262.8,y:225.6,startPosition:1},0).wait(1).to({skewX:2.1,skewY:182.1,x:-262.9,y:225.2,startPosition:2},0).wait(1).to({skewX:2.4,skewY:182.4,y:224.7,startPosition:3},0).wait(1).to({skewX:2.6,skewY:182.6,x:-263,y:224.2,startPosition:0},0).wait(1).to({skewX:2.8,skewY:182.8,x:-263.1,y:223.7,startPosition:1},0).wait(1).to({skewX:3,skewY:183,x:-263.2,y:223.2,startPosition:2},0).wait(1).to({skewX:3.2,skewY:183.2,y:222.7,startPosition:3},0).wait(1).to({skewX:3.4,skewY:183.4,x:-263.3,y:222.2,startPosition:0},0).wait(1).to({skewX:3.7,skewY:183.7,x:-263.4,y:221.7,startPosition:1},0).wait(1).to({skewX:3.9,skewY:183.9,x:-263.5,y:221.2,startPosition:2},0).wait(1).to({skewX:4.1,skewY:184.1,x:-263.6,y:220.7,startPosition:3},0).wait(1).to({skewX:4.3,skewY:184.3,x:-263.7,y:220.2,startPosition:0},0).wait(1).to({skewX:4.5,skewY:184.5,y:219.8,startPosition:1},0).wait(1).to({skewX:4.7,skewY:184.7,x:-263.8,y:219.2,startPosition:2},0).wait(1).to({skewX:4.9,skewY:184.9,y:218.8,startPosition:3},0).wait(1).to({skewX:5.2,skewY:185.2,x:-263.9,y:218.3,startPosition:0},0).wait(1).to({skewX:5.4,skewY:185.4,x:-264,y:217.8,startPosition:1},0).wait(1).to({skewX:5.6,skewY:185.6,x:-264.1,y:217.3,startPosition:2},0).wait(1).to({skewX:5.8,skewY:185.8,x:-264.2,y:216.8,startPosition:3},0).wait(1).to({skewX:6,skewY:186,x:-264.3,y:216.3,startPosition:0},0).wait(1).to({skewX:6.2,skewY:186.2,x:-264.4,y:215.8,startPosition:1},0).wait(1).to({skewX:6.4,skewY:186.4,y:215.3,startPosition:2},0).wait(1).to({skewX:6.7,skewY:186.7,x:-264.5,y:214.8,startPosition:3},0).wait(1).to({skewX:6.9,skewY:186.9,x:-264.6,y:214.3,startPosition:0},0).wait(1).to({skewX:7.1,skewY:187.1,y:213.8,startPosition:1},0).wait(1).to({skewX:7.3,skewY:187.3,x:-264.7,y:213.4,startPosition:2},0).wait(1).to({skewX:7.5,skewY:187.5,x:-264.8,y:212.8,startPosition:3},0).wait(1).to({skewX:7.7,skewY:187.7,y:212.4,startPosition:0},0).wait(1).to({skewX:8,skewY:188,x:-264.9,y:211.8,startPosition:1},0).wait(1).to({skewX:8.2,skewY:188.2,x:-265,y:211.4,startPosition:2},0).wait(1).to({skewX:8.4,skewY:188.4,x:-265.1,y:210.9,startPosition:3},0).wait(1).to({skewX:8.6,skewY:188.6,x:-265.2,y:210.4,startPosition:0},0).wait(1).to({skewX:8.8,skewY:188.8,x:-265.3,y:209.9,startPosition:1},0).wait(1).to({skewX:9,skewY:189,y:209.4,startPosition:2},0).wait(1).to({skewX:9.2,skewY:189.2,x:-265.5,y:208.9,startPosition:3},0).wait(1).to({skewX:9.5,skewY:189.5,y:208.4,startPosition:0},0).wait(1).to({skewX:9.7,skewY:189.7,x:-265.6,y:207.9,startPosition:1},0).wait(1).to({skewX:9.9,skewY:189.9,y:207.4,startPosition:2},0).wait(1).to({skewX:10.1,skewY:190.1,x:-265.7,y:206.9,startPosition:3},0).wait(1).to({skewX:10.3,skewY:190.3,x:-265.8,y:206.4,startPosition:0},0).wait(1).to({skewX:10.5,skewY:190.5,x:-265.9,y:206,startPosition:1},0).wait(1).to({skewX:10.7,skewY:190.7,x:-266,y:205.4,startPosition:2},0).wait(1).to({skewX:11,skewY:191,y:205,startPosition:3},0).wait(1).to({skewX:11.2,skewY:191.2,x:-266.1,y:204.5,startPosition:0},0).wait(1).to({skewX:11.4,skewY:191.4,x:-266.2,y:203.9,startPosition:1},0).wait(1).to({skewX:11.6,skewY:191.6,x:-266.3,y:203.5,startPosition:2},0).wait(1).to({skewX:11.8,skewY:191.8,x:-266.4,y:203,startPosition:3},0).wait(1).to({skewX:12,skewY:192,y:202.5,startPosition:0},0).wait(1).to({skewX:12.2,skewY:192.2,x:-266.5,y:202,startPosition:1},0).wait(1).to({skewX:12.5,skewY:192.5,y:201.5,startPosition:2},0).wait(1).to({skewX:12.7,skewY:192.7,x:-266.6,y:201,startPosition:3},0).wait(1).to({skewX:12.9,skewY:192.9,x:-266.7,y:200.5,startPosition:0},0).wait(1).to({skewX:13.1,skewY:193.1,x:-266.8,y:200.1,startPosition:1},0).wait(1).to({skewX:13.3,skewY:193.3,x:-266.9,y:199.5,startPosition:2},0).wait(1).to({skewX:13.5,skewY:193.5,y:199.1,startPosition:3},0).wait(1).to({skewX:13.8,skewY:193.8,x:-267,y:198.5,startPosition:0},0).wait(1).to({skewX:14,skewY:194,x:-267.1,y:198.1,startPosition:1},0).wait(1).to({skewX:14.2,skewY:194.2,x:-267.2,y:197.6,startPosition:2},0).wait(1).to({skewX:14.4,skewY:194.4,x:-267.3,y:197.1,startPosition:3},0).wait(1).to({skewX:14.6,skewY:194.6,y:196.6,startPosition:0},0).wait(1).to({skewX:14.8,skewY:194.8,x:-267.5,y:196.1,startPosition:1},0).wait(1).to({skewX:15,skewY:195,y:195.6,startPosition:2},0).wait(1).to({skewX:15.3,skewY:195.3,x:-267.6,y:195.1,startPosition:3},0).wait(1).to({skewX:15.5,skewY:195.5,x:-267.7,y:194.6,startPosition:0},0).wait(1).to({skewX:15.7,skewY:195.7,x:-267.8,y:194.1,startPosition:1},0).wait(1).to({skewX:15.9,skewY:195.9,y:193.7,startPosition:2},0).wait(1).to({skewX:16.1,skewY:196.1,x:-267.9,y:193.1,startPosition:3},0).wait(1).to({skewX:16.3,skewY:196.3,x:-268,y:192.7,startPosition:0},0).wait(1).to({skewX:16.5,skewY:196.5,x:-268.1,y:192.1,startPosition:1},0).wait(1).to({skewX:16.8,skewY:196.8,y:191.7,startPosition:2},0).wait(1).to({skewX:17,skewY:197,x:-268.2,y:191.2,startPosition:3},0).wait(1).to({skewX:17.2,skewY:197.2,x:-268.3,y:190.7,startPosition:0},0).wait(1).to({skewX:17.4,skewY:197.4,x:-268.4,y:190.2,startPosition:1},0).wait(1).to({skewX:17.6,skewY:197.6,x:-268.5,y:189.7,startPosition:2},0).wait(1).to({skewX:17.8,skewY:197.8,y:189.2,startPosition:3},0).wait(1).to({skewX:18.1,skewY:198.1,x:-268.6,y:188.7,startPosition:0},0).wait(1).to({skewX:18.3,skewY:198.3,x:-268.7,y:188.2,startPosition:1},0).wait(1).to({skewX:18.5,skewY:198.5,x:-268.8,y:187.7,startPosition:2},0).wait(1).to({skewX:18.7,skewY:198.7,x:-268.9,y:187.2,startPosition:3},0).wait(1).to({skewX:18.9,skewY:198.9,y:186.7,startPosition:0},0).wait(1).to({skewX:19.1,skewY:199.1,x:-269,y:186.2,startPosition:1},0).wait(1).to({skewX:19.3,skewY:199.3,x:-269.1,y:185.8,startPosition:2},0).wait(1).to({skewX:19.6,skewY:199.6,y:185.3,startPosition:3},0).wait(1).to({skewX:19.8,skewY:199.8,x:-269.3,y:184.8,startPosition:0},0).wait(1));

	// plankton3-all
	this.instance_5 = new lib.plankton3all_yellow("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-247,-189.4,0.674,0.674,-45.1,0,0,38.1,-32.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:40.4,scaleX:0.68,scaleY:0.68,rotation:-45.4,x:-245,y:-189.5,startPosition:1},0).wait(1).to({rotation:-45.6,x:-244.2,y:-188.4,startPosition:2},0).wait(1).to({rotation:-45.8,x:-243.4,y:-187.4,startPosition:3},0).wait(1).to({rotation:-46,x:-242.5,y:-186.4,startPosition:0},0).wait(1).to({rotation:-46.2,x:-241.7,y:-185.4,startPosition:1},0).wait(1).to({rotation:-46.4,x:-240.9,y:-184.4,startPosition:2},0).wait(1).to({rotation:-46.6,x:-240,y:-183.4,startPosition:3},0).wait(1).to({rotation:-46.8,x:-239.2,y:-182.4,startPosition:0},0).wait(1).to({rotation:-47,x:-238.3,y:-181.4,startPosition:1},0).wait(1).to({rotation:-47.2,x:-237.5,y:-180.4,startPosition:2},0).wait(1).to({rotation:-47.4,x:-236.7,y:-179.3,startPosition:3},0).wait(1).to({rotation:-47.6,x:-235.8,y:-178.3,startPosition:0},0).wait(1).to({rotation:-47.8,x:-235,y:-177.3,startPosition:1},0).wait(1).to({rotation:-48,x:-234.1,y:-176.3,startPosition:2},0).wait(1).to({rotation:-48.2,x:-233.3,y:-175.3,startPosition:3},0).wait(1).to({rotation:-48.4,x:-232.5,y:-174.3,startPosition:0},0).wait(1).to({rotation:-48.6,x:-231.6,y:-173.3,startPosition:1},0).wait(1).to({rotation:-48.8,x:-230.8,y:-172.2,startPosition:2},0).wait(1).to({rotation:-49,x:-229.9,y:-171.2,startPosition:3},0).wait(1).to({rotation:-49.2,x:-229.1,y:-170.2,startPosition:0},0).wait(1).to({rotation:-49.4,x:-228.3,y:-169.2,startPosition:1},0).wait(1).to({rotation:-49.6,x:-227.4,y:-168.2,startPosition:2},0).wait(1).to({rotation:-49.8,x:-226.6,y:-167.2,startPosition:3},0).wait(1).to({rotation:-50,x:-225.7,y:-166.2,startPosition:0},0).wait(1).to({rotation:-50.2,x:-224.9,y:-165.2,startPosition:1},0).wait(1).to({rotation:-50.4,x:-224.1,y:-164.1,startPosition:2},0).wait(1).to({rotation:-50.6,x:-223.3,y:-163.1,startPosition:3},0).wait(1).to({rotation:-50.8,x:-222.4,y:-162.1,startPosition:0},0).wait(1).to({rotation:-51,x:-221.6,y:-161.1,startPosition:1},0).wait(1).to({rotation:-51.2,x:-220.7,y:-160.1,startPosition:2},0).wait(1).to({rotation:-51.4,x:-219.9,y:-159,startPosition:3},0).wait(1).to({rotation:-51.6,x:-219,y:-158.1,startPosition:0},0).wait(1).to({rotation:-51.8,x:-218.2,y:-157.1,startPosition:1},0).wait(1).to({rotation:-52,x:-217.4,y:-156,startPosition:2},0).wait(1).to({rotation:-52.2,x:-216.6,y:-155,startPosition:3},0).wait(1).to({rotation:-52.4,x:-215.7,y:-154,startPosition:0},0).wait(1).to({rotation:-52.6,x:-214.8,y:-153,startPosition:1},0).wait(1).to({rotation:-52.8,x:-214,y:-152,startPosition:2},0).wait(1).to({rotation:-53,x:-213.2,y:-151,startPosition:3},0).wait(1).to({rotation:-53.2,x:-212.3,y:-150,startPosition:0},0).wait(1).to({rotation:-53.4,x:-211.5,y:-148.9,startPosition:1},0).wait(1).to({rotation:-53.6,x:-210.6,y:-147.9,startPosition:2},0).wait(1).to({rotation:-53.8,x:-209.8,y:-146.9,startPosition:3},0).wait(1).to({rotation:-54,x:-209,y:-145.9,startPosition:0},0).wait(1).to({rotation:-54.2,x:-208.2,y:-144.9,startPosition:1},0).wait(1).to({rotation:-54.4,x:-207.4,y:-143.9,startPosition:2},0).wait(1).to({rotation:-54.6,x:-206.4,y:-142.9,startPosition:3},0).wait(1).to({rotation:-54.8,x:-205.6,y:-141.9,startPosition:0},0).wait(1).to({rotation:-55,x:-204.8,y:-140.8,startPosition:1},0).wait(1).to({rotation:-55.2,x:-204,y:-139.8,startPosition:2},0).wait(1).to({rotation:-55.4,x:-203.1,y:-138.8,startPosition:3},0).wait(1).to({rotation:-55.6,x:-202.3,y:-137.8,startPosition:0},0).wait(1).to({rotation:-55.8,x:-201.5,y:-136.7,startPosition:1},0).wait(1).to({rotation:-56,x:-200.6,y:-135.7,startPosition:2},0).wait(1).to({rotation:-56.2,x:-199.8,y:-134.8,startPosition:3},0).wait(1).to({rotation:-56.4,x:-198.9,y:-133.8,startPosition:0},0).wait(1).to({rotation:-56.6,x:-198.1,y:-132.7,startPosition:1},0).wait(1).to({rotation:-56.8,x:-197.3,y:-131.7,startPosition:2},0).wait(1).to({rotation:-57,x:-196.4,y:-130.7,startPosition:3},0).wait(1).to({rotation:-57.2,x:-195.6,y:-129.7,startPosition:0},0).wait(1).to({rotation:-57.4,x:-194.7,y:-128.7,startPosition:1},0).wait(1).to({rotation:-57.6,x:-193.9,y:-127.7,startPosition:2},0).wait(1).to({rotation:-57.8,x:-193.1,y:-126.7,startPosition:3},0).wait(1).to({rotation:-58,x:-192.2,y:-125.6,startPosition:0},0).wait(1).to({rotation:-58.2,x:-191.4,y:-124.6,startPosition:1},0).wait(1).to({rotation:-58.4,x:-190.6,y:-123.6,startPosition:2},0).wait(1).to({rotation:-58.6,x:-189.7,y:-122.6,startPosition:3},0).wait(1).to({rotation:-58.8,x:-188.9,y:-121.6,startPosition:0},0).wait(1).to({rotation:-59.1,x:-188,y:-120.6,startPosition:1},0).wait(1).to({rotation:-59.3,x:-187.2,y:-119.6,startPosition:2},0).wait(1).to({rotation:-59.5,x:-186.4,y:-118.5,startPosition:3},0).wait(1).to({rotation:-59.7,x:-185.5,y:-117.5,startPosition:0},0).wait(1).to({rotation:-59.9,x:-184.7,y:-116.5,startPosition:1},0).wait(1).to({rotation:-60.1,x:-183.9,y:-115.5,startPosition:2},0).wait(1).to({rotation:-60.3,x:-183,y:-114.5,startPosition:3},0).wait(1).to({rotation:-60.5,x:-182.2,y:-113.5,startPosition:0},0).wait(1).to({rotation:-60.7,x:-181.4,y:-112.5,startPosition:1},0).wait(1).to({rotation:-60.9,x:-180.5,y:-111.5,startPosition:2},0).wait(1).to({rotation:-61.1,x:-179.6,y:-110.4,startPosition:3},0).wait(1).to({rotation:-61.3,x:-178.8,y:-109.4,startPosition:0},0).wait(1).to({rotation:-61.5,x:-178,y:-108.4,startPosition:1},0).wait(1).to({rotation:-61.7,x:-177.2,y:-107.4,startPosition:2},0).wait(1).to({rotation:-61.9,x:-176.3,y:-106.4,startPosition:3},0).wait(1).to({rotation:-62.1,x:-175.4,y:-105.4,startPosition:0},0).wait(1).to({rotation:-62.3,x:-174.6,y:-104.4,startPosition:1},0).wait(1).to({rotation:-62.5,x:-173.8,y:-103.3,startPosition:2},0).wait(1).to({rotation:-62.7,x:-173,y:-102.3,startPosition:3},0).wait(1).to({rotation:-62.9,x:-172.1,y:-101.3,startPosition:0},0).wait(1).to({rotation:-63.1,x:-171.3,y:-100.3,startPosition:1},0).wait(1).to({rotation:-63.3,x:-170.5,y:-99.3,startPosition:2},0).wait(1).to({rotation:-63.5,x:-169.6,y:-98.3,startPosition:3},0).wait(1).to({rotation:-63.7,x:-168.8,y:-97.2,startPosition:0},0).wait(1));

	// plankton3-all
	this.instance_6 = new lib.plankton3all("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-56.9,96.9,0.868,1.186,0,80.5,-87,39.6,-31.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:40.4,regY:-32.1,skewX:80.1,skewY:-87.2,x:-55.3,y:96.8,startPosition:1},0).wait(1).to({skewX:79.8,skewY:-87.6,x:-54.9,y:97.6,startPosition:2},0).wait(1).to({skewX:79.4,skewY:-88,x:-54.4,y:98.4,startPosition:3},0).wait(1).to({skewX:79,skewY:-88.3,x:-54,y:99.1,startPosition:0},0).wait(1).to({skewX:78.7,skewY:-88.7,x:-53.7,y:99.9,startPosition:1},0).wait(1).to({skewX:78.3,skewY:-89,x:-53.3,y:100.7,startPosition:2},0).wait(1).to({skewX:78,skewY:-89.4,x:-52.9,y:101.4,startPosition:3},0).wait(1).to({skewX:77.6,skewY:-89.8,x:-52.5,y:102.2,startPosition:0},0).wait(1).to({skewX:77.2,skewY:-90.1,x:-52.1,y:103,startPosition:1},0).wait(1).to({skewX:76.9,skewY:-90.5,x:-51.7,y:103.8,startPosition:2},0).wait(1).to({skewX:76.5,skewY:-90.8,x:-51.3,y:104.5,startPosition:3},0).wait(1).to({skewX:76.2,skewY:-91.2,x:-50.9,y:105.3,startPosition:0},0).wait(1).to({skewX:75.8,skewY:-91.6,x:-50.5,y:106.1,startPosition:1},0).wait(1).to({skewX:75.4,skewY:-91.9,x:-50.1,y:106.9,startPosition:2},0).wait(1).to({skewX:75.1,skewY:-92.3,x:-49.7,y:107.7,startPosition:3},0).wait(1).to({skewX:74.7,skewY:-92.6,x:-49.3,y:108.4,startPosition:0},0).wait(1).to({skewX:74.4,skewY:-93,x:-48.9,y:109.2,startPosition:1},0).wait(1).to({skewX:74,skewY:-93.4,x:-48.5,y:110,startPosition:2},0).wait(1).to({skewX:73.6,skewY:-93.7,x:-48.1,y:110.8,startPosition:3},0).wait(1).to({skewX:73.3,skewY:-94.1,x:-47.7,y:111.6,startPosition:0},0).wait(1).to({skewX:72.9,skewY:-94.4,x:-47.3,y:112.3,startPosition:1},0).wait(1).to({skewX:72.6,skewY:-94.8,x:-46.9,y:113.1,startPosition:2},0).wait(1).to({skewX:72.2,skewY:-95.2,x:-46.5,y:113.9,startPosition:3},0).wait(1).to({skewX:71.8,skewY:-95.5,x:-46.1,y:114.7,startPosition:0},0).wait(1).to({skewX:71.5,skewY:-95.9,x:-45.8,y:115.4,startPosition:1},0).wait(1).to({skewX:71.1,skewY:-96.2,x:-45.3,y:116.2,startPosition:2},0).wait(1).to({skewX:70.8,skewY:-96.6,x:-45,y:117,startPosition:3},0).wait(1).to({skewX:70.4,skewY:-97,x:-44.6,y:117.8,startPosition:0},0).wait(1).to({skewX:70,skewY:-97.3,x:-44.1,y:118.5,startPosition:1},0).wait(1).to({skewX:69.7,skewY:-97.7,x:-43.8,y:119.4,startPosition:2},0).wait(1).to({skewX:69.3,skewY:-98,x:-43.3,y:120.1,startPosition:3},0).wait(1).to({skewX:69,skewY:-98.4,x:-42.9,y:120.9,startPosition:0},0).wait(1).to({skewX:68.6,skewY:-98.8,x:-42.6,y:121.6,startPosition:1},0).wait(1).to({skewX:68.2,skewY:-99.1,x:-42.2,y:122.4,startPosition:2},0).wait(1).to({skewX:67.9,skewY:-99.5,x:-41.7,y:123.2,startPosition:3},0).wait(1).to({skewX:67.5,skewY:-99.8,x:-41.4,y:124,startPosition:0},0).wait(1).to({skewX:67.2,skewY:-100.2,x:-41,y:124.7,startPosition:1},0).wait(1).to({skewX:66.8,skewY:-100.6,x:-40.6,y:125.5,startPosition:2},0).wait(1).to({skewX:66.4,skewY:-100.9,x:-40.2,y:126.3,startPosition:3},0).wait(1).to({skewX:66.1,skewY:-101.3,x:-39.8,y:127.1,startPosition:0},0).wait(1).to({skewX:65.7,skewY:-101.6,x:-39.4,y:127.9,startPosition:1},0).wait(1).to({skewX:65.4,skewY:-102,x:-39,y:128.7,startPosition:2},0).wait(1).to({skewX:65,skewY:-102.4,x:-38.6,y:129.4,startPosition:3},0).wait(1).to({skewX:64.6,skewY:-102.7,x:-38.2,y:130.2,startPosition:0},0).wait(1).to({skewX:64.3,skewY:-103.1,x:-37.8,y:131,startPosition:1},0).wait(1).to({skewX:63.9,skewY:-103.4,x:-37.4,y:131.7,startPosition:2},0).wait(1).to({skewX:63.6,skewY:-103.8,x:-37,y:132.6,startPosition:3},0).wait(1).to({skewX:63.2,skewY:-104.2,x:-36.7,y:133.4,startPosition:0},0).wait(1).to({skewX:62.8,skewY:-104.5,x:-36.2,y:134.1,startPosition:1},0).wait(1).to({skewX:62.5,skewY:-104.9,x:-35.9,y:134.9,startPosition:2},0).wait(1).to({skewX:62.1,skewY:-105.2,x:-35.4,y:135.7,startPosition:3},0).wait(1).to({skewX:61.8,skewY:-105.6,x:-35.1,y:136.4,startPosition:0},0).wait(1).to({skewX:61.4,skewY:-106,x:-34.7,y:137.2,startPosition:1},0).wait(1).to({skewX:61,skewY:-106.3,x:-34.3,y:138,startPosition:2},0).wait(1).to({skewX:60.7,skewY:-106.7,x:-33.9,y:138.8,startPosition:3},0).wait(1).to({skewX:60.3,skewY:-107,x:-33.5,y:139.5,startPosition:0},0).wait(1).to({skewX:60,skewY:-107.4,x:-33.1,y:140.3,startPosition:1},0).wait(1).to({skewX:59.6,skewY:-107.7,x:-32.7,y:141.1,startPosition:2},0).wait(1).to({skewX:59.2,skewY:-108.1,x:-32.3,y:141.9,startPosition:3},0).wait(1).to({skewX:58.9,skewY:-108.5,x:-31.9,y:142.6,startPosition:0},0).wait(1).to({skewX:58.5,skewY:-108.8,x:-31.5,y:143.4,startPosition:1},0).wait(1).to({skewX:58.2,skewY:-109.2,x:-31.1,y:144.2,startPosition:2},0).wait(1).to({skewX:57.8,skewY:-109.5,x:-30.7,y:145,startPosition:3},0).wait(1).to({skewX:57.4,skewY:-109.9,x:-30.3,y:145.7,startPosition:0},0).wait(1).to({skewX:57.1,skewY:-110.3,x:-29.9,y:146.5,startPosition:1},0).wait(1).to({skewX:56.7,skewY:-110.6,x:-29.5,y:147.3,startPosition:2},0).wait(1).to({skewX:56.4,skewY:-111,x:-29.1,y:148.1,startPosition:3},0).wait(1).to({skewX:56,skewY:-111.3,x:-28.7,y:148.8,startPosition:0},0).wait(1).to({skewX:55.7,skewY:-111.7,x:-28.4,y:149.6,startPosition:1},0).wait(1).to({skewX:55.3,skewY:-112.1,x:-28,y:150.4,startPosition:2},0).wait(1).to({skewX:54.9,skewY:-112.4,x:-27.6,y:151.2,startPosition:3},0).wait(1).to({skewX:54.6,skewY:-112.8,x:-27.2,y:152,startPosition:0},0).wait(1).to({skewX:54.2,skewY:-113.1,x:-26.8,y:152.8,startPosition:1},0).wait(1).to({skewX:53.9,skewY:-113.5,x:-26.4,y:153.6,startPosition:2},0).wait(1).to({skewX:53.5,skewY:-113.9,x:-26,y:154.3,startPosition:3},0).wait(1).to({skewX:53.1,skewY:-114.2,x:-25.6,y:155.1,startPosition:0},0).wait(1).to({skewX:52.8,skewY:-114.6,x:-25.2,y:155.9,startPosition:1},0).wait(1).to({skewX:52.4,skewY:-114.9,x:-24.8,y:156.7,startPosition:2},0).wait(1).to({skewX:52.1,skewY:-115.3,x:-24.4,y:157.5,startPosition:3},0).wait(1).to({skewX:51.7,skewY:-115.7,x:-24,y:158.3,startPosition:0},0).wait(1).to({skewX:51.3,skewY:-116,x:-23.6,y:159,startPosition:1},0).wait(1).to({skewX:51,skewY:-116.4,x:-23.2,y:159.8,startPosition:2},0).wait(1).to({skewX:50.6,skewY:-116.7,x:-22.8,y:160.6,startPosition:3},0).wait(1).to({skewX:50.3,skewY:-117.1,x:-22.4,y:161.3,startPosition:0},0).wait(1).to({skewX:49.9,skewY:-117.5,x:-22,y:162.1,startPosition:1},0).wait(1).to({skewX:49.5,skewY:-117.8,x:-21.7,y:162.9,startPosition:2},0).wait(1).to({skewX:49.2,skewY:-118.2,x:-21.2,y:163.7,startPosition:3},0).wait(1).to({skewX:48.8,skewY:-118.5,x:-20.8,y:164.5,startPosition:0},0).wait(1).to({skewX:48.5,skewY:-118.9,x:-20.5,y:165.3,startPosition:1},0).wait(1).to({skewX:48.1,skewY:-119.3,x:-20.1,y:166,startPosition:2},0).wait(1).to({skewX:47.7,skewY:-119.6,x:-19.7,y:166.8,startPosition:3},0).wait(1).to({skewX:47.4,skewY:-120,x:-19.3,y:167.6,startPosition:0},0).wait(1));

	// plankton3-all
	this.instance_7 = new lib.plankton3all("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-493,-294.9,0.768,0.768,-115.1,0,0,39.7,-32.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:40.4,regY:-32.1,scaleX:0.77,scaleY:0.77,x:-492.1,y:-294.1,startPosition:1},0).wait(1).to({x:-491.2,y:-292.8,startPosition:2},0).wait(1).to({x:-490.2,y:-291.5,startPosition:3},0).wait(1).to({x:-489.3,y:-290.2,startPosition:0},0).wait(1).to({x:-488.3,y:-288.9,startPosition:1},0).wait(1).to({x:-487.4,y:-287.6,startPosition:2},0).wait(1).to({x:-486.4,y:-286.3,startPosition:3},0).wait(1).to({x:-485.5,y:-285,startPosition:0},0).wait(1).to({x:-484.5,y:-283.7,startPosition:1},0).wait(1).to({x:-483.6,y:-282.4,startPosition:2},0).wait(1).to({x:-482.6,y:-281.1,startPosition:3},0).wait(1).to({x:-481.7,y:-279.8,startPosition:0},0).wait(1).to({x:-480.7,y:-278.5,startPosition:1},0).wait(1).to({x:-479.8,y:-277.2,startPosition:2},0).wait(1).to({x:-478.8,y:-275.9,startPosition:3},0).wait(1).to({x:-477.9,y:-274.6,startPosition:0},0).wait(1).to({x:-476.9,y:-273.3,startPosition:1},0).wait(1).to({x:-476,y:-272,startPosition:2},0).wait(1).to({x:-475,y:-270.7,startPosition:3},0).wait(1).to({x:-474.1,y:-269.4,startPosition:0},0).wait(1).to({x:-473.1,y:-268.1,startPosition:1},0).wait(1).to({x:-472.2,y:-266.7,startPosition:2},0).wait(1).to({x:-471.2,y:-265.4,startPosition:3},0).wait(1).to({x:-470.3,y:-264.1,startPosition:0},0).wait(1).to({x:-469.3,y:-262.8,startPosition:1},0).wait(1).to({x:-468.4,y:-261.5,startPosition:2},0).wait(1).to({x:-467.4,y:-260.2,startPosition:3},0).wait(1).to({x:-466.5,y:-258.9,startPosition:0},0).wait(1).to({x:-465.5,y:-257.6,startPosition:1},0).wait(1).to({x:-464.6,y:-256.3,startPosition:2},0).wait(1).to({x:-463.6,y:-255,startPosition:3},0).wait(1).to({x:-462.7,y:-253.7,startPosition:0},0).wait(1).to({x:-461.7,y:-252.4,startPosition:1},0).wait(1).to({x:-460.8,y:-251.1,startPosition:2},0).wait(1).to({x:-459.8,y:-249.8,startPosition:3},0).wait(1).to({x:-458.9,y:-248.5,startPosition:0},0).wait(1).to({x:-457.9,y:-247.2,startPosition:1},0).wait(1).to({x:-457,y:-245.9,startPosition:2},0).wait(1).to({x:-456,y:-244.6,startPosition:3},0).wait(1).to({x:-455.1,y:-243.3,startPosition:0},0).wait(1).to({x:-454.1,y:-242,startPosition:1},0).wait(1).to({x:-453.2,y:-240.7,startPosition:2},0).wait(1).to({x:-452.2,y:-239.4,startPosition:3},0).wait(1).to({x:-451.2,y:-238.1,startPosition:0},0).wait(1).to({x:-450.3,y:-236.7,startPosition:1},0).wait(1).to({x:-449.3,y:-235.4,startPosition:2},0).wait(1).to({x:-448.4,y:-234.1,startPosition:3},0).wait(1).to({x:-447.4,y:-232.8,startPosition:0},0).wait(1).to({x:-446.5,y:-231.5,startPosition:1},0).wait(1).to({x:-445.5,y:-230.2,startPosition:2},0).wait(1).to({x:-444.6,y:-228.9,startPosition:3},0).wait(1).to({x:-443.6,y:-227.6,startPosition:0},0).wait(1).to({x:-442.7,y:-226.3,startPosition:1},0).wait(1).to({x:-441.7,y:-225,startPosition:2},0).wait(1).to({x:-440.8,y:-223.7,startPosition:3},0).wait(1).to({x:-439.8,y:-222.4,startPosition:0},0).wait(1).to({x:-438.9,y:-221.1,startPosition:1},0).wait(1).to({x:-437.9,y:-219.8,startPosition:2},0).wait(1).to({x:-437,y:-218.5,startPosition:3},0).wait(1).to({x:-436,y:-217.2,startPosition:0},0).wait(1).to({x:-435.1,y:-215.9,startPosition:1},0).wait(1).to({x:-434.1,y:-214.6,startPosition:2},0).wait(1).to({x:-433.2,y:-213.3,startPosition:3},0).wait(1).to({x:-432.2,y:-212,startPosition:0},0).wait(1).to({x:-431.3,y:-210.7,startPosition:1},0).wait(1).to({x:-430.3,y:-209.4,startPosition:2},0).wait(1).to({x:-429.4,y:-208.1,startPosition:3},0).wait(1).to({x:-428.4,y:-206.7,startPosition:0},0).wait(1).to({x:-427.5,y:-205.4,startPosition:1},0).wait(1).to({x:-426.5,y:-204.1,startPosition:2},0).wait(1).to({x:-425.6,y:-202.8,startPosition:3},0).wait(1).to({x:-424.6,y:-201.5,startPosition:0},0).wait(1).to({x:-423.7,y:-200.2,startPosition:1},0).wait(1).to({x:-422.7,y:-198.9,startPosition:2},0).wait(1).to({x:-421.8,y:-197.6,startPosition:3},0).wait(1).to({x:-420.8,y:-196.3,startPosition:0},0).wait(1).to({x:-419.9,y:-195,startPosition:1},0).wait(1).to({x:-418.9,y:-193.7,startPosition:2},0).wait(1).to({x:-418,y:-192.4,startPosition:3},0).wait(1).to({x:-417,y:-191.1,startPosition:0},0).wait(1).to({x:-416.1,y:-189.8,startPosition:1},0).wait(1).to({x:-415.1,y:-188.5,startPosition:2},0).wait(1).to({x:-414.2,y:-187.2,startPosition:3},0).wait(1).to({x:-413.2,y:-185.9,startPosition:0},0).wait(1).to({x:-412.3,y:-184.6,startPosition:1},0).wait(1).to({x:-411.3,y:-183.3,startPosition:2},0).wait(1).to({x:-410.4,y:-182,startPosition:3},0).wait(1).to({x:-409.4,y:-180.7,startPosition:0},0).wait(1).to({x:-408.5,y:-179.4,startPosition:1},0).wait(1).to({x:-407.5,y:-178.1,startPosition:2},0).wait(1).to({x:-406.5,y:-176.7,startPosition:3},0).wait(1).to({x:-405.6,y:-175.4,startPosition:0},0).wait(1));

	// planton2-all
	this.instance_8 = new lib.planton2all("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-516,261,0.887,0.887);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:0.4,regY:-0.4,rotation:-0.2,x:-514.7,y:261.5,startPosition:1},0).wait(1).to({rotation:-0.5,x:-513.8,y:262.3,startPosition:2},0).wait(1).to({rotation:-0.7,x:-512.9,y:263.1,startPosition:3},0).wait(1).to({rotation:-1,x:-512,y:263.9,startPosition:0},0).wait(1).to({rotation:-1.2,x:-511.1,y:264.7,startPosition:1},0).wait(1).to({rotation:-1.5,x:-510.2,y:265.5,startPosition:2},0).wait(1).to({rotation:-1.7,x:-509.3,y:266.3,startPosition:3},0).wait(1).to({rotation:-2,x:-508.4,y:267.1,startPosition:0},0).wait(1).to({rotation:-2.2,x:-507.5,y:268,startPosition:1},0).wait(1).to({rotation:-2.5,x:-506.6,y:268.8,startPosition:2},0).wait(1).to({rotation:-2.7,x:-505.7,y:269.6,startPosition:3},0).wait(1).to({rotation:-2.9,x:-504.8,y:270.4,startPosition:0},0).wait(1).to({rotation:-3.2,x:-503.9,y:271.2,startPosition:1},0).wait(1).to({rotation:-3.4,x:-503,y:272,startPosition:2},0).wait(1).to({rotation:-3.7,x:-502.1,y:272.8,startPosition:3},0).wait(1).to({rotation:-3.9,x:-501.3,y:273.6,startPosition:0},0).wait(1).to({rotation:-4.2,x:-500.4,y:274.4,startPosition:1},0).wait(1).to({rotation:-4.4,x:-499.5,y:275.2,startPosition:2},0).wait(1).to({rotation:-4.7,x:-498.6,y:276,startPosition:3},0).wait(1).to({rotation:-4.9,x:-497.7,y:276.8,startPosition:0},0).wait(1).to({rotation:-5.1,x:-496.8,y:277.6,startPosition:1},0).wait(1).to({rotation:-5.4,x:-495.9,y:278.5,startPosition:2},0).wait(1).to({rotation:-5.6,x:-495,y:279.3,startPosition:3},0).wait(1).to({rotation:-5.9,x:-494.1,y:280.1,startPosition:0},0).wait(1).to({rotation:-6.1,x:-493.2,y:280.9,startPosition:1},0).wait(1).to({rotation:-6.4,x:-492.3,y:281.7,startPosition:2},0).wait(1).to({rotation:-6.6,x:-491.4,y:282.5,startPosition:3},0).wait(1).to({rotation:-6.9,x:-490.5,y:283.3,startPosition:0},0).wait(1).to({rotation:-7.1,x:-489.6,y:284.1,startPosition:1},0).wait(1).to({rotation:-7.4,x:-488.7,y:284.9,startPosition:2},0).wait(1).to({rotation:-7.6,x:-487.9,y:285.8,startPosition:3},0).wait(1).to({rotation:-7.8,x:-487,y:286.6,startPosition:0},0).wait(1).to({rotation:-8.1,x:-486.1,y:287.4,startPosition:1},0).wait(1).to({rotation:-8.3,x:-485.2,y:288.2,startPosition:2},0).wait(1).to({rotation:-8.6,x:-484.3,y:289,startPosition:3},0).wait(1).to({rotation:-8.8,x:-483.4,y:289.8,startPosition:0},0).wait(1).to({rotation:-9.1,x:-482.5,y:290.6,startPosition:1},0).wait(1).to({rotation:-9.3,x:-481.6,y:291.4,startPosition:2},0).wait(1).to({rotation:-9.6,x:-480.7,y:292.2,startPosition:3},0).wait(1).to({rotation:-9.8,x:-479.8,y:293.1,startPosition:0},0).wait(1).to({rotation:-10.1,x:-478.9,y:293.9,startPosition:1},0).wait(1).to({rotation:-10.3,x:-478,y:294.7,startPosition:2},0).wait(1).to({rotation:-10.5,x:-477.1,y:295.5,startPosition:3},0).wait(1).to({rotation:-10.8,x:-476.2,y:296.3,startPosition:0},0).wait(1).to({rotation:-11,x:-475.3,y:297.1,startPosition:1},0).wait(1).to({rotation:-11.3,x:-474.4,y:297.9,startPosition:2},0).wait(1).to({rotation:-11.5,x:-473.5,y:298.7,startPosition:3},0).wait(1).to({rotation:-11.8,x:-472.6,y:299.5,startPosition:0},0).wait(1).to({rotation:-12,x:-471.7,y:300.4,startPosition:1},0).wait(1).to({rotation:-12.3,x:-470.9,y:301.1,startPosition:2},0).wait(1).to({rotation:-12.5,x:-470,y:301.9,startPosition:3},0).wait(1).to({rotation:-12.8,x:-469.1,y:302.7,startPosition:0},0).wait(1).to({rotation:-13,x:-468.2,y:303.6,startPosition:1},0).wait(1).to({rotation:-13.2,x:-467.3,y:304.4,startPosition:2},0).wait(1).to({rotation:-13.5,x:-466.4,y:305.2,startPosition:3},0).wait(1).to({rotation:-13.7,x:-465.5,y:306,startPosition:0},0).wait(1).to({rotation:-14,x:-464.6,y:306.8,startPosition:1},0).wait(1).to({rotation:-14.2,x:-463.7,y:307.6,startPosition:2},0).wait(1).to({rotation:-14.5,x:-462.8,y:308.4,startPosition:3},0).wait(1).to({rotation:-14.7,x:-461.9,y:309.2,startPosition:0},0).wait(1).to({rotation:-15,x:-461,y:310,startPosition:1},0).wait(1).to({rotation:-15.2,x:-460.1,y:310.9,startPosition:2},0).wait(1).to({rotation:-15.4,x:-459.2,y:311.7,startPosition:3},0).wait(1).to({rotation:-15.7,x:-458.3,y:312.5,startPosition:0},0).wait(1).to({rotation:-15.9,x:-457.4,y:313.3,startPosition:1},0).wait(1).to({rotation:-16.2,x:-456.5,y:314.1,startPosition:2},0).wait(1).to({rotation:-16.4,x:-455.6,y:314.9,startPosition:3},0).wait(1).to({rotation:-16.7,x:-454.7,y:315.7,startPosition:0},0).wait(1).to({rotation:-16.9,x:-453.8,y:316.5,startPosition:1},0).wait(1).to({rotation:-17.2,x:-452.9,y:317.3,startPosition:2},0).wait(1).to({rotation:-17.4,x:-452,y:318.2,startPosition:3},0).wait(1).to({rotation:-17.7,x:-451.1,y:319,startPosition:0},0).wait(1).to({rotation:-17.9,x:-450.2,y:319.8,startPosition:1},0).wait(1).to({rotation:-18.1,x:-449.3,y:320.6,startPosition:2},0).wait(1).to({rotation:-18.4,x:-448.4,y:321.4,startPosition:3},0).wait(1).to({rotation:-18.6,x:-447.5,y:322.2,startPosition:0},0).wait(1).to({rotation:-18.9,x:-446.7,y:323,startPosition:1},0).wait(1).to({rotation:-19.1,x:-445.8,y:323.8,startPosition:2},0).wait(1).to({rotation:-19.4,x:-444.9,y:324.7,startPosition:3},0).wait(1).to({rotation:-19.6,x:-444,y:325.5,startPosition:0},0).wait(1).to({rotation:-19.9,x:-443.1,y:326.3,startPosition:1},0).wait(1).to({rotation:-20.1,x:-442.2,y:327.1,startPosition:2},0).wait(1).to({rotation:-20.4,x:-441.3,y:327.9,startPosition:3},0).wait(1).to({rotation:-20.6,x:-440.4,y:328.7,startPosition:0},0).wait(1).to({rotation:-20.8,x:-439.5,y:329.5,startPosition:1},0).wait(1).to({rotation:-21.1,x:-438.6,y:330.3,startPosition:2},0).wait(1).to({rotation:-21.3,x:-437.7,y:331.1,startPosition:3},0).wait(1).to({rotation:-21.6,x:-436.8,y:331.9,startPosition:0},0).wait(1).to({rotation:-21.8,x:-435.9,y:332.7,startPosition:1},0).wait(1).to({rotation:-22.1,x:-435,y:333.5,startPosition:2},0).wait(1).to({rotation:-22.3,x:-434.1,y:334.3,startPosition:3},0).wait(1).to({rotation:-22.6,x:-433.3,y:335.2,startPosition:0},0).wait(1));

	// plankton-all
	this.instance_9 = new lib.planktonall("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(128,-42,0.907,0.681,0,0,0,107,110.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:106.3,regY:111.1,rotation:-1.2,x:127.1,y:-41.1,startPosition:1},0).wait(1).to({rotation:-2.4,x:126.9,y:-40.8,startPosition:2},0).wait(1).to({rotation:-3.6,x:126.7,y:-40.5,startPosition:3},0).wait(1).to({rotation:-4.8,x:126.5,y:-40.2,startPosition:0},0).wait(1).to({rotation:-6,x:126.2,y:-39.9,startPosition:1},0).wait(1).to({rotation:-7.1,x:126,y:-39.6,startPosition:2},0).wait(1).to({rotation:-8.3,x:125.8,y:-39.2,startPosition:3},0).wait(1).to({rotation:-9.5,x:125.6,y:-39,startPosition:0},0).wait(1).to({rotation:-10.7,x:125.4,y:-38.7,startPosition:1},0).wait(1).to({rotation:-11.9,x:125.1,y:-38.4,startPosition:2},0).wait(1).to({rotation:-13.1,x:124.9,y:-38.1,startPosition:3},0).wait(1).to({rotation:-14.3,x:124.7,y:-37.8,startPosition:0},0).wait(1).to({rotation:-15.5,x:124.4,y:-37.5,startPosition:1},0).wait(1).to({rotation:-16.7,x:124.2,y:-37.2,startPosition:2},0).wait(1).to({rotation:-17.9,x:124,y:-36.9,startPosition:3},0).wait(1).to({rotation:-19.1,x:123.8,y:-36.6,startPosition:0},0).wait(1).to({rotation:-20.2,x:123.6,y:-36.4,startPosition:1},0).wait(1).to({rotation:-21.4,x:123.3,y:-36,startPosition:2},0).wait(1).to({rotation:-22.6,x:123.1,y:-35.8,startPosition:3},0).wait(1).to({rotation:-23.8,x:122.9,y:-35.4,startPosition:0},0).wait(1).to({rotation:-25,x:122.7,y:-35.2,startPosition:1},0).wait(1).to({rotation:-26.2,x:122.4,y:-34.9,startPosition:2},0).wait(1).to({rotation:-27.4,x:122.2,y:-34.6,startPosition:3},0).wait(1).to({rotation:-28.6,x:122,y:-34.3,startPosition:0},0).wait(1).to({rotation:-29.8,x:121.8,y:-34,startPosition:1},0).wait(1).to({rotation:-31,x:121.6,y:-33.7,startPosition:2},0).wait(1).to({rotation:-32.2,x:121.4,y:-33.5,startPosition:3},0).wait(1).to({rotation:-33.4,x:121.2,y:-33.2,startPosition:0},0).wait(1).to({rotation:-34.5,x:120.9,y:-32.9,startPosition:1},0).wait(1).to({rotation:-35.7,x:120.7,y:-32.6,startPosition:2},0).wait(1).to({rotation:-36.9,x:120.5,y:-32.3,startPosition:3},0).wait(1).to({rotation:-38.1,x:120.3,y:-32,startPosition:0},0).wait(1).to({rotation:-39.3,x:120.1,y:-31.7,startPosition:1},0).wait(1).to({rotation:-40.5,x:119.9,y:-31.4,startPosition:2},0).wait(1).to({rotation:-41.7,x:119.6,y:-31.2,startPosition:3},0).wait(1).to({rotation:-42.9,x:119.4,y:-30.8,startPosition:0},0).wait(1).to({rotation:-44.1,x:119.2,y:-30.5,startPosition:1},0).wait(1).to({rotation:-45.3,x:119,y:-30.3,startPosition:2},0).wait(1).to({rotation:-46.5,x:118.8,y:-30,startPosition:3},0).wait(1).to({rotation:-47.6,x:118.5,y:-29.7,startPosition:0},0).wait(1).to({rotation:-48.8,x:118.3,y:-29.4,startPosition:1},0).wait(1).to({rotation:-50,x:118.1,y:-29.2,startPosition:2},0).wait(1).to({rotation:-51.2,x:117.9,y:-28.8,startPosition:3},0).wait(1).to({rotation:-52.4,x:117.7,y:-28.6,startPosition:0},0).wait(1).to({rotation:-53.6,x:117.4,y:-28.3,startPosition:1},0).wait(1).to({rotation:-54.8,x:117.2,y:-28.1,startPosition:2},0).wait(1).to({rotation:-56,x:117,y:-27.7,startPosition:3},0).wait(1).to({rotation:-57.2,x:116.7,y:-27.4,startPosition:0},0).wait(1).to({rotation:-58.4,x:116.5,y:-27.2,startPosition:1},0).wait(1).to({rotation:-59.6,x:116.3,y:-27,startPosition:2},0).wait(1).to({rotation:-60.7,x:116.1,y:-26.6,startPosition:3},0).wait(1).to({rotation:-61.9,x:115.9,y:-26.4,startPosition:0},0).wait(1).to({rotation:-63.1,x:115.6,y:-26.1,startPosition:1},0).wait(1).to({rotation:-64.3,x:115.4,y:-25.8,startPosition:2},0).wait(1).to({rotation:-65.5,x:115.2,y:-25.6,startPosition:3},0).wait(1).to({rotation:-66.7,x:115,y:-25.2,startPosition:0},0).wait(1).to({rotation:-67.9,x:114.7,y:-25,startPosition:1},0).wait(1).to({rotation:-69.1,x:114.5,y:-24.7,startPosition:2},0).wait(1).to({rotation:-70.3,x:114.3,y:-24.4,startPosition:3},0).wait(1).to({rotation:-71.5,x:114.1,y:-24.1,startPosition:0},0).wait(1).to({rotation:-72.7,x:113.9,y:-23.9,startPosition:1},0).wait(1).to({rotation:-73.8,x:113.6,y:-23.6,startPosition:2},0).wait(1).to({rotation:-75,x:113.4,y:-23.3,startPosition:3},0).wait(1).to({rotation:-76.2,x:113.2,y:-23.1,startPosition:0},0).wait(1).to({rotation:-77.4,x:113,y:-22.7,startPosition:1},0).wait(1).to({rotation:-78.6,x:112.8,y:-22.5,startPosition:2},0).wait(1).to({rotation:-79.8,x:112.5,y:-22.2,startPosition:3},0).wait(1).to({rotation:-81,x:112.3,y:-21.9,startPosition:0},0).wait(1).to({rotation:-82.2,x:112.1,y:-21.6,startPosition:1},0).wait(1).to({rotation:-83.4,x:111.9,y:-21.4,startPosition:2},0).wait(1).to({rotation:-84.6,x:111.6,y:-21.2,startPosition:3},0).wait(1).to({rotation:-85.8,x:111.4,y:-20.8,startPosition:0},0).wait(1).to({rotation:-87,x:111.2,y:-20.6,startPosition:1},0).wait(1).to({rotation:-88.1,x:111,y:-20.3,startPosition:2},0).wait(1).to({rotation:-89.3,x:110.8,y:-20,startPosition:3},0).wait(1).to({rotation:-90.5,x:110.5,y:-19.8,startPosition:0},0).wait(1).to({rotation:-91.7,x:110.3,y:-19.5,startPosition:1},0).wait(1).to({rotation:-92.9,x:110.1,y:-19.2,startPosition:2},0).wait(1).to({rotation:-94.1,x:109.9,y:-18.9,startPosition:3},0).wait(1).to({rotation:-95.3,x:109.6,y:-18.7,startPosition:0},0).wait(1).to({rotation:-96.5,x:109.4,y:-18.4,startPosition:1},0).wait(1).to({rotation:-97.7,x:109.2,y:-18.1,startPosition:2},0).wait(1).to({rotation:-98.9,x:109,y:-17.8,startPosition:3},0).wait(1).to({rotation:-100.1,x:108.7,y:-17.6,startPosition:0},0).wait(1).to({rotation:-101.2,x:108.5,y:-17.3,startPosition:1},0).wait(1).to({rotation:-102.4,x:108.3,y:-17.1,startPosition:2},0).wait(1).to({rotation:-103.6,x:108.1,y:-16.8,startPosition:3},0).wait(1).to({rotation:-104.8,x:107.8,y:-16.5,startPosition:0},0).wait(1).to({rotation:-106,x:107.6,y:-16.3,startPosition:1},0).wait(1).to({rotation:-107.2,x:107.4,y:-16,startPosition:2},0).wait(1).to({rotation:-108.4,x:107.1,y:-15.8,startPosition:3},0).wait(1).to({rotation:-109.6,x:106.9,y:-15.4,startPosition:0},0).wait(1));

	// plankton3-all
	this.instance_10 = new lib.plankton3all("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(273,61,0.541,0.911,0,-42.6,135,38.8,-31.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:40.4,regY:-32.1,scaleY:0.91,skewY:135.1,x:271.6,y:61.8,startPosition:1},0).wait(1).to({skewX:-42.5,skewY:135.2,x:271.5,y:62.5,startPosition:2},0).wait(1).to({skewX:-42.4,skewY:135.3,x:271.3,y:63.3,startPosition:3},0).wait(1).to({skewX:-42.3,skewY:135.4,x:271.2,y:64.1,startPosition:0},0).wait(1).to({skewX:-42.2,skewY:135.5,x:271,y:64.9,startPosition:1},0).wait(1).to({skewX:-42.1,skewY:135.6,x:270.9,y:65.7,startPosition:2},0).wait(1).to({skewX:-42,skewY:135.7,x:270.6,y:66.5,startPosition:3},0).wait(1).to({skewX:-41.9,skewY:135.8,x:270.5,y:67.3,startPosition:0},0).wait(1).to({skewX:-41.8,skewY:135.9,x:270.3,y:68.1,startPosition:1},0).wait(1).to({skewX:-41.7,skewY:136,x:270.2,y:68.9,startPosition:2},0).wait(1).to({skewX:-41.6,skewY:136.1,x:270,y:69.7,startPosition:3},0).wait(1).to({skewX:-41.5,skewY:136.2,x:269.8,y:70.5,startPosition:0},0).wait(1).to({skewX:-41.4,skewY:136.3,x:269.7,y:71.2,startPosition:1},0).wait(1).to({skewX:-41.3,skewY:136.4,x:269.5,y:72,startPosition:2},0).wait(1).to({skewX:-41.2,skewY:136.5,x:269.4,y:72.8,startPosition:3},0).wait(1).to({skewX:-41.1,skewY:136.6,x:269.2,y:73.6,startPosition:0},0).wait(1).to({skewX:-41,skewY:136.7,x:269,y:74.4,startPosition:1},0).wait(1).to({skewX:-40.9,skewY:136.8,x:268.9,y:75.2,startPosition:2},0).wait(1).to({skewX:-40.8,skewY:136.9,x:268.7,y:76,startPosition:3},0).wait(1).to({skewX:-40.6,skewY:137,x:268.5,y:76.8,startPosition:0},0).wait(1).to({skewX:-40.5,skewY:137.1,x:268.4,y:77.5,startPosition:1},0).wait(1).to({skewX:-40.4,skewY:137.2,x:268.2,y:78.3,startPosition:2},0).wait(1).to({skewX:-40.3,skewY:137.3,x:268.1,y:79.1,startPosition:3},0).wait(1).to({skewX:-40.2,skewY:137.4,x:267.9,y:80,startPosition:0},0).wait(1).to({skewX:-40.1,skewY:137.5,x:267.7,y:80.7,startPosition:1},0).wait(1).to({skewX:-40,skewY:137.6,x:267.5,y:81.6,startPosition:2},0).wait(1).to({skewX:-39.9,skewY:137.7,x:267.4,y:82.3,startPosition:3},0).wait(1).to({skewX:-39.8,skewY:137.8,x:267.2,y:83.1,startPosition:0},0).wait(1).to({skewX:-39.7,skewY:137.9,x:267.1,y:83.9,startPosition:1},0).wait(1).to({skewX:-39.6,skewY:138,x:266.9,y:84.7,startPosition:2},0).wait(1).to({skewX:-39.5,skewY:138.1,x:266.7,y:85.5,startPosition:3},0).wait(1).to({skewX:-39.4,skewY:138.2,x:266.6,y:86.3,startPosition:0},0).wait(1).to({skewX:-39.3,skewY:138.3,x:266.4,y:87.1,startPosition:1},0).wait(1).to({skewX:-39.2,skewY:138.4,x:266.3,y:87.8,startPosition:2},0).wait(1).to({skewX:-39.1,skewY:138.5,x:266.1,y:88.6,startPosition:3},0).wait(1).to({skewX:-39,skewY:138.6,x:265.9,y:89.4,startPosition:0},0).wait(1).to({skewX:-38.9,skewY:138.7,x:265.8,y:90.2,startPosition:1},0).wait(1).to({skewX:-38.8,skewY:138.8,x:265.6,y:91,startPosition:2},0).wait(1).to({skewX:-38.7,skewY:138.9,x:265.4,y:91.8,startPosition:3},0).wait(1).to({skewX:-38.6,skewY:139.1,x:265.3,y:92.6,startPosition:0},0).wait(1).to({skewX:-38.5,skewY:139.2,x:265.1,y:93.4,startPosition:1},0).wait(1).to({skewX:-38.4,skewY:139.3,x:265,y:94.2,startPosition:2},0).wait(1).to({skewX:-38.3,skewY:139.4,x:264.8,y:95,startPosition:3},0).wait(1).to({skewX:-38.2,skewY:139.5,x:264.7,y:95.8,startPosition:0},0).wait(1).to({skewX:-38.1,skewY:139.6,x:264.4,y:96.6,startPosition:1},0).wait(1).to({skewX:-38,skewY:139.7,x:264.3,y:97.4,startPosition:2},0).wait(1).to({skewX:-37.9,skewY:139.8,x:264.1,y:98.1,startPosition:3},0).wait(1).to({skewX:-37.8,skewY:139.9,x:264,y:98.9,startPosition:0},0).wait(1).to({skewX:-37.7,skewY:140,x:263.8,y:99.7,startPosition:1},0).wait(1).to({skewX:-37.6,skewY:140.1,x:263.7,y:100.5,startPosition:2},0).wait(1).to({skewX:-37.5,skewY:140.2,x:263.5,y:101.3,startPosition:3},0).wait(1).to({skewX:-37.4,skewY:140.3,x:263.3,y:102.1,startPosition:0},0).wait(1).to({skewX:-37.3,skewY:140.4,x:263.1,y:102.9,startPosition:1},0).wait(1).to({skewX:-37.2,skewY:140.5,x:263,y:103.7,startPosition:2},0).wait(1).to({skewX:-37.1,skewY:140.6,x:262.8,y:104.5,startPosition:3},0).wait(1).to({skewX:-37,skewY:140.7,x:262.7,y:105.2,startPosition:0},0).wait(1).to({skewX:-36.9,skewY:140.8,x:262.5,y:106.1,startPosition:1},0).wait(1).to({skewX:-36.8,skewY:140.9,x:262.3,y:106.8,startPosition:2},0).wait(1).to({skewX:-36.7,skewY:141,x:262.2,y:107.6,startPosition:3},0).wait(1).to({skewX:-36.6,skewY:141.1,x:262,y:108.5,startPosition:0},0).wait(1).to({skewX:-36.5,skewY:141.2,x:261.9,y:109.2,startPosition:1},0).wait(1).to({skewX:-36.4,skewY:141.3,x:261.7,y:110.1,startPosition:2},0).wait(1).to({skewX:-36.3,skewY:141.4,x:261.5,y:110.8,startPosition:3},0).wait(1).to({skewX:-36.2,skewY:141.5,x:261.4,y:111.6,startPosition:0},0).wait(1).to({skewX:-36.1,skewY:141.6,x:261.2,y:112.4,startPosition:1},0).wait(1).to({skewX:-36,skewY:141.7,x:261.1,y:113.2,startPosition:2},0).wait(1).to({skewX:-35.9,skewY:141.8,x:260.9,y:113.9,startPosition:3},0).wait(1).to({skewX:-35.8,skewY:141.9,x:260.7,y:114.8,startPosition:0},0).wait(1).to({skewX:-35.7,skewY:142,x:260.6,y:115.5,startPosition:1},0).wait(1).to({skewX:-35.6,skewY:142.1,x:260.4,y:116.4,startPosition:2},0).wait(1).to({skewX:-35.5,skewY:142.2,x:260.3,y:117.1,startPosition:3},0).wait(1).to({skewX:-35.4,skewY:142.3,x:260.1,y:117.9,startPosition:0},0).wait(1).to({skewX:-35.3,skewY:142.4,x:259.9,y:118.7,startPosition:1},0).wait(1).to({skewX:-35.2,skewY:142.5,x:259.8,y:119.5,startPosition:2},0).wait(1).to({skewX:-35.1,skewY:142.6,x:259.6,y:120.3,startPosition:3},0).wait(1).to({skewX:-35,skewY:142.7,x:259.4,y:121.1,startPosition:0},0).wait(1).to({skewX:-34.9,skewY:142.8,x:259.3,y:121.8,startPosition:1},0).wait(1).to({skewX:-34.8,skewY:142.9,x:259.1,y:122.7,startPosition:2},0).wait(1).to({skewX:-34.7,skewY:143,x:258.9,y:123.4,startPosition:3},0).wait(1).to({skewX:-34.6,skewY:143.1,x:258.8,y:124.3,startPosition:0},0).wait(1).to({skewX:-34.5,skewY:143.2,x:258.6,y:125,startPosition:1},0).wait(1).to({skewX:-34.4,skewY:143.3,x:258.4,y:125.8,startPosition:2},0).wait(1).to({skewX:-34.3,skewY:143.4,x:258.3,y:126.6,startPosition:3},0).wait(1).to({skewX:-34.2,skewY:143.5,x:258.1,y:127.4,startPosition:0},0).wait(1).to({skewX:-34.1,skewY:143.6,x:258,y:128.2,startPosition:1},0).wait(1).to({skewX:-34,skewY:143.7,x:257.8,y:129,startPosition:2},0).wait(1).to({skewX:-33.9,skewY:143.8,x:257.6,y:129.8,startPosition:3},0).wait(1).to({skewX:-33.8,skewY:143.9,x:257.5,y:130.6,startPosition:0},0).wait(1).to({skewX:-33.7,skewY:144,x:257.3,y:131.4,startPosition:1},0).wait(1).to({skewX:-33.6,skewY:144.1,x:257.1,y:132.2,startPosition:2},0).wait(1).to({skewX:-33.5,skewY:144.2,x:257,y:133,startPosition:3},0).wait(1).to({skewX:-33.4,skewY:144.3,x:256.8,y:133.8,startPosition:0},0).wait(1));

	// plankton3-all
	this.instance_11 = new lib.plankton3all("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-241,76,0.681,0.681,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regX:40.4,regY:-32.1,scaleX:0.68,scaleY:0.68,rotation:6.9,x:-212.3,y:56.9,startPosition:1},0).wait(1).to({rotation:7.2,x:-213.4,y:56.3,startPosition:2},0).wait(1).to({rotation:7.5,x:-214.6,y:55.7,startPosition:3},0).wait(1).to({rotation:7.8,x:-215.7,y:55.2,startPosition:0},0).wait(1).to({rotation:8.2,x:-217,y:54.6,startPosition:1},0).wait(1).to({rotation:8.5,x:-218.1,y:54,startPosition:2},0).wait(1).to({rotation:8.8,x:-219.3,y:53.4,startPosition:3},0).wait(1).to({rotation:9.1,x:-220.5,y:52.9,startPosition:0},0).wait(1).to({rotation:9.5,x:-221.7,y:52.3,startPosition:1},0).wait(1).to({rotation:9.8,x:-222.8,y:51.8,startPosition:2},0).wait(1).to({rotation:10.1,x:-224,y:51.2,startPosition:3},0).wait(1).to({rotation:10.4,x:-225.2,y:50.7,startPosition:0},0).wait(1).to({rotation:10.8,x:-226.3,y:50.1,startPosition:1},0).wait(1).to({rotation:11.1,x:-227.6,y:49.5,startPosition:2},0).wait(1).to({rotation:11.4,x:-228.7,y:49,startPosition:3},0).wait(1).to({rotation:11.7,x:-229.9,y:48.4,startPosition:0},0).wait(1).to({rotation:12.1,x:-231.1,y:47.8,startPosition:1},0).wait(1).to({rotation:12.4,x:-232.3,y:47.3,startPosition:2},0).wait(1).to({rotation:12.7,x:-233.5,y:46.7,startPosition:3},0).wait(1).to({rotation:13,x:-234.6,y:46.2,startPosition:0},0).wait(1).to({rotation:13.3,x:-235.8,y:45.6,startPosition:1},0).wait(1).to({rotation:13.7,x:-237,y:45,startPosition:2},0).wait(1).to({rotation:14,x:-238.2,y:44.5,startPosition:3},0).wait(1).to({rotation:14.3,x:-239.4,y:43.9,startPosition:0},0).wait(1).to({rotation:14.6,x:-240.6,y:43.4,startPosition:1},0).wait(1).to({rotation:15,x:-241.8,y:42.8,startPosition:2},0).wait(1).to({rotation:15.3,x:-243,y:42.3,startPosition:3},0).wait(1).to({rotation:15.6,x:-244.2,y:41.7,startPosition:0},0).wait(1).to({rotation:15.9,x:-245.3,y:41.1,startPosition:1},0).wait(1).to({rotation:16.3,x:-246.5,y:40.6,startPosition:2},0).wait(1).to({rotation:16.6,x:-247.7,y:40.1,startPosition:3},0).wait(1).to({rotation:16.9,x:-249,y:39.5,startPosition:0},0).wait(1).to({rotation:17.2,x:-250.1,y:38.9,startPosition:1},0).wait(1).to({rotation:17.6,x:-251.4,y:38.4,startPosition:2},0).wait(1).to({rotation:17.9,x:-252.6,y:37.9,startPosition:3},0).wait(1).to({rotation:18.2,x:-253.8,y:37.3,startPosition:0},0).wait(1).to({rotation:18.5,x:-255,y:36.8,startPosition:1},0).wait(1).to({rotation:18.9,x:-256.2,y:36.2,startPosition:2},0).wait(1).to({rotation:19.2,x:-257.4,y:35.7,startPosition:3},0).wait(1).to({rotation:19.5,x:-258.6,y:35.1,startPosition:0},0).wait(1).to({rotation:19.8,x:-259.8,y:34.6,startPosition:1},0).wait(1).to({rotation:20.2,x:-261,y:34,startPosition:2},0).wait(1).to({rotation:20.5,x:-262.2,y:33.5,startPosition:3},0).wait(1).to({rotation:20.8,x:-263.4,y:32.9,startPosition:0},0).wait(1).to({rotation:21.1,x:-264.6,y:32.4,startPosition:1},0).wait(1).to({rotation:21.4,x:-265.8,y:31.8,startPosition:2},0).wait(1).to({rotation:21.8,x:-267.1,y:31.3,startPosition:3},0).wait(1).to({rotation:22.1,x:-268.3,y:30.8,startPosition:0},0).wait(1).to({rotation:22.4,x:-269.5,y:30.2,startPosition:1},0).wait(1).to({rotation:22.7,x:-270.7,y:29.6,startPosition:2},0).wait(1).to({rotation:23.1,x:-271.9,y:29.1,startPosition:3},0).wait(1).to({rotation:23.4,x:-273.2,y:28.6,startPosition:0},0).wait(1).to({rotation:23.7,x:-274.4,y:28,startPosition:1},0).wait(1).to({rotation:24,x:-275.6,y:27.4,startPosition:2},0).wait(1).to({rotation:24.4,x:-276.8,y:26.9,startPosition:3},0).wait(1).to({rotation:24.7,x:-278,y:26.4,startPosition:0},0).wait(1).to({rotation:25,x:-279.3,y:25.8,startPosition:1},0).wait(1).to({rotation:25.3,x:-280.5,y:25.3,startPosition:2},0).wait(1).to({rotation:25.7,x:-281.8,y:24.8,startPosition:3},0).wait(1).to({rotation:26,x:-282.9,y:24.2,startPosition:0},0).wait(1).to({rotation:26.3,x:-284.2,y:23.7,startPosition:1},0).wait(1).to({rotation:26.6,x:-285.4,y:23.1,startPosition:2},0).wait(1).to({rotation:27,x:-286.7,y:22.6,startPosition:3},0).wait(1).to({rotation:27.3,x:-287.9,y:22,startPosition:0},0).wait(1).to({rotation:27.6,x:-289.1,y:21.5,startPosition:1},0).wait(1).to({rotation:27.9,x:-290.3,y:20.9,startPosition:2},0).wait(1).to({rotation:28.3,x:-291.6,y:20.5,startPosition:3},0).wait(1).to({rotation:28.6,x:-292.8,y:19.9,startPosition:0},0).wait(1).to({rotation:28.9,x:-294.1,y:19.3,startPosition:1},0).wait(1).to({rotation:29.2,x:-295.3,y:18.8,startPosition:2},0).wait(1).to({rotation:29.5,x:-296.5,y:18.3,startPosition:3},0).wait(1).to({rotation:29.9,x:-297.8,y:17.7,startPosition:0},0).wait(1).to({rotation:30.2,x:-299,y:17.2,startPosition:1},0).wait(1).to({rotation:30.5,x:-300.3,y:16.7,startPosition:2},0).wait(1).to({rotation:30.8,x:-301.5,y:16.1,startPosition:3},0).wait(1).to({rotation:31.2,x:-302.8,y:15.6,startPosition:0},0).wait(1).to({rotation:31.5,x:-304,y:15,startPosition:1},0).wait(1).to({rotation:31.8,x:-305.2,y:14.5,startPosition:2},0).wait(1).to({rotation:32.1,x:-306.5,y:14,startPosition:3},0).wait(1).to({rotation:32.5,x:-307.7,y:13.4,startPosition:0},0).wait(1).to({rotation:32.8,x:-309,y:12.9,startPosition:1},0).wait(1).to({rotation:33.1,x:-310.3,y:12.4,startPosition:2},0).wait(1).to({rotation:33.4,x:-311.5,y:11.8,startPosition:3},0).wait(1).to({rotation:33.8,x:-312.8,y:11.2,startPosition:0},0).wait(1).to({rotation:34.1,x:-314,y:10.8,startPosition:1},0).wait(1).to({rotation:34.4,x:-315.3,y:10.2,startPosition:2},0).wait(1).to({rotation:34.7,x:-316.5,y:9.6,startPosition:3},0).wait(1).to({rotation:35.1,x:-317.8,y:9.1,startPosition:0},0).wait(1).to({rotation:35.4,x:-319.1,y:8.6,startPosition:1},0).wait(1).to({rotation:35.7,x:-320.4,y:8,startPosition:2},0).wait(1).to({rotation:36,x:-321.6,y:7.5,startPosition:3},0).wait(1).to({rotation:36.4,x:-322.9,y:7,startPosition:0},0).wait(1));

	// planton2-all
	this.instance_12 = new lib.planton2all("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(-125.2,-143.3,0.68,0.68,-140.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({regX:0.4,regY:-0.4,scaleX:0.68,scaleY:0.68,x:-123.3,y:-144.4,startPosition:1},0).wait(1).to({x:-121.2,y:-145.6,startPosition:2},0).wait(1).to({x:-119,y:-146.8,startPosition:3},0).wait(1).to({x:-116.8,y:-148,startPosition:0},0).wait(1).to({x:-114.6,y:-149.2,startPosition:1},0).wait(1).to({x:-112.5,y:-150.4,startPosition:2},0).wait(1).to({x:-110.3,y:-151.6,startPosition:3},0).wait(1).to({x:-108.1,y:-152.8,startPosition:0},0).wait(1).to({x:-106,y:-154,startPosition:1},0).wait(1).to({x:-103.8,y:-155.2,startPosition:2},0).wait(1).to({x:-101.6,y:-156.4,startPosition:3},0).wait(1).to({x:-99.4,y:-157.6,startPosition:0},0).wait(1).to({x:-97.3,y:-158.7,startPosition:1},0).wait(1).to({x:-95.1,y:-159.9,startPosition:2},0).wait(1).to({x:-92.9,y:-161.1,startPosition:3},0).wait(1).to({x:-90.8,y:-162.3,startPosition:0},0).wait(1).to({x:-88.6,y:-163.5,startPosition:1},0).wait(1).to({x:-86.4,y:-164.7,startPosition:2},0).wait(1).to({x:-84.2,y:-165.9,startPosition:3},0).wait(1).to({x:-82.1,y:-167.1,startPosition:0},0).wait(1).to({x:-79.9,y:-168.3,startPosition:1},0).wait(1).to({x:-77.7,y:-169.5,startPosition:2},0).wait(1).to({x:-75.6,y:-170.7,startPosition:3},0).wait(1).to({x:-73.4,y:-171.9,startPosition:0},0).wait(1).to({x:-71.2,y:-173,startPosition:1},0).wait(1).to({x:-69,y:-174.2,startPosition:2},0).wait(1).to({x:-66.9,y:-175.4,startPosition:3},0).wait(1).to({x:-64.7,y:-176.6,startPosition:0},0).wait(1).to({x:-62.5,y:-177.8,startPosition:1},0).wait(1).to({x:-60.4,y:-179,startPosition:2},0).wait(1).to({x:-58.2,y:-180.2,startPosition:3},0).wait(1).to({x:-56,y:-181.4,startPosition:0},0).wait(1).to({x:-53.9,y:-182.6,startPosition:1},0).wait(1).to({x:-51.7,y:-183.8,startPosition:2},0).wait(1).to({x:-49.5,y:-185,startPosition:3},0).wait(1).to({x:-47.3,y:-186.2,startPosition:0},0).wait(1).to({x:-45.2,y:-187.3,startPosition:1},0).wait(1).to({x:-43,y:-188.5,startPosition:2},0).wait(1).to({x:-40.8,y:-189.7,startPosition:3},0).wait(1).to({x:-38.7,y:-190.9,startPosition:0},0).wait(1).to({x:-36.5,y:-192.1,startPosition:1},0).wait(1).to({x:-34.3,y:-193.3,startPosition:2},0).wait(1).to({x:-32.1,y:-194.5,startPosition:3},0).wait(1).to({x:-30,y:-195.7,startPosition:0},0).wait(1).to({x:-27.8,y:-196.9,startPosition:1},0).wait(1).to({x:-25.6,y:-198.1,startPosition:2},0).wait(1).to({x:-23.5,y:-199.3,startPosition:3},0).wait(1).to({x:-21.3,y:-200.5,startPosition:0},0).wait(1).to({x:-19.1,y:-201.7,startPosition:1},0).wait(1).to({x:-16.9,y:-202.8,startPosition:2},0).wait(1).to({x:-14.8,y:-204,startPosition:3},0).wait(1).to({x:-12.6,y:-205.2,startPosition:0},0).wait(1).to({x:-10.4,y:-206.4,startPosition:1},0).wait(1).to({x:-8.3,y:-207.6,startPosition:2},0).wait(1).to({x:-6.1,y:-208.8,startPosition:3},0).wait(1).to({x:-3.9,y:-210,startPosition:0},0).wait(1).to({x:-1.7,y:-211.2,startPosition:1},0).wait(1).to({x:0.4,y:-212.4,startPosition:2},0).wait(1).to({x:2.6,y:-213.6,startPosition:3},0).wait(1).to({x:4.7,y:-214.8,startPosition:0},0).wait(1).to({x:6.9,y:-216,startPosition:1},0).wait(1).to({x:9.1,y:-217.1,startPosition:2},0).wait(1).to({x:11.2,y:-218.3,startPosition:3},0).wait(1).to({x:13.4,y:-219.5,startPosition:0},0).wait(1).to({x:15.6,y:-220.7,startPosition:1},0).wait(1).to({x:17.7,y:-221.9,startPosition:2},0).wait(1).to({x:19.9,y:-223.1,startPosition:3},0).wait(1).to({x:22.1,y:-224.3,startPosition:0},0).wait(1).to({x:24.3,y:-225.5,startPosition:1},0).wait(1).to({x:26.4,y:-226.7,startPosition:2},0).wait(1).to({x:28.6,y:-227.9,startPosition:3},0).wait(1).to({x:30.8,y:-229.1,startPosition:0},0).wait(1).to({x:32.9,y:-230.3,startPosition:1},0).wait(1).to({x:35.1,y:-231.4,startPosition:2},0).wait(1).to({x:37.3,y:-232.6,startPosition:3},0).wait(1).to({x:39.5,y:-233.8,startPosition:0},0).wait(1).to({x:41.6,y:-235,startPosition:1},0).wait(1).to({x:43.8,y:-236.2,startPosition:2},0).wait(1).to({x:46,y:-237.4,startPosition:3},0).wait(1).to({x:48.1,y:-238.6,startPosition:0},0).wait(1).to({x:50.3,y:-239.8,startPosition:1},0).wait(1).to({x:52.5,y:-241,startPosition:2},0).wait(1).to({x:54.7,y:-242.2,startPosition:3},0).wait(1).to({x:56.8,y:-243.4,startPosition:0},0).wait(1).to({x:59,y:-244.6,startPosition:1},0).wait(1).to({x:61.2,y:-245.7,startPosition:2},0).wait(1).to({x:63.3,y:-246.9,startPosition:3},0).wait(1).to({x:65.5,y:-248.1,startPosition:0},0).wait(1).to({x:67.7,y:-249.3,startPosition:1},0).wait(1).to({x:69.9,y:-250.5,startPosition:2},0).wait(1).to({x:72,y:-251.7,startPosition:3},0).wait(1).to({x:74.2,y:-252.9,startPosition:0},0).wait(1));

	// plankton-all
	this.instance_13 = new lib.planktonall("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(144.3,170,0.682,0.682,0,0,0,105.9,112.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({regX:106.3,regY:111.1,rotation:0.5,x:144.4,y:169.9,startPosition:1},0).wait(1).to({rotation:1,x:144.3,y:170.8,startPosition:2},0).wait(1).to({rotation:1.6,x:144.2,y:171.7,startPosition:3},0).wait(1).to({rotation:2.1,y:172.6,startPosition:0},0).wait(1).to({rotation:2.6,x:144,y:173.4,startPosition:1},0).wait(1).to({rotation:3.1,x:143.9,y:174.3,startPosition:2},0).wait(1).to({rotation:3.6,y:175.2,startPosition:3},0).wait(1).to({rotation:4.2,x:143.8,y:176,startPosition:0},0).wait(1).to({rotation:4.7,x:143.6,y:176.9,startPosition:1},0).wait(1).to({rotation:5.2,x:143.5,y:177.8,startPosition:2},0).wait(1).to({rotation:5.7,x:143.4,y:178.7,startPosition:3},0).wait(1).to({rotation:6.2,x:143.3,y:179.6,startPosition:0},0).wait(1).to({rotation:6.8,x:143.2,y:180.4,startPosition:1},0).wait(1).to({rotation:7.3,y:181.3,startPosition:2},0).wait(1).to({rotation:7.8,x:143,y:182.2,startPosition:3},0).wait(1).to({rotation:8.3,x:142.9,y:183,startPosition:0},0).wait(1).to({rotation:8.9,x:142.8,y:183.9,startPosition:1},0).wait(1).to({rotation:9.4,x:142.7,y:184.8,startPosition:2},0).wait(1).to({rotation:9.9,y:185.6,startPosition:3},0).wait(1).to({rotation:10.4,x:142.6,y:186.5,startPosition:0},0).wait(1).to({rotation:10.9,x:142.5,y:187.4,startPosition:1},0).wait(1).to({rotation:11.5,x:142.4,y:188.3,startPosition:2},0).wait(1).to({rotation:12,x:142.3,y:189.2,startPosition:3},0).wait(1).to({rotation:12.5,x:142.1,y:190.1,startPosition:0},0).wait(1).to({rotation:13,y:190.9,startPosition:1},0).wait(1).to({rotation:13.5,x:141.9,y:191.8,startPosition:2},0).wait(1).to({rotation:14.1,y:192.7,startPosition:3},0).wait(1).to({rotation:14.6,x:141.8,y:193.5,startPosition:0},0).wait(1).to({rotation:15.1,x:141.6,y:194.5,startPosition:1},0).wait(1).to({rotation:15.6,y:195.3,startPosition:2},0).wait(1).to({rotation:16.1,x:141.5,y:196.2,startPosition:3},0).wait(1).to({rotation:16.7,x:141.4,y:197.1,startPosition:0},0).wait(1).to({rotation:17.2,x:141.3,y:197.9,startPosition:1},0).wait(1).to({rotation:17.7,x:141.2,y:198.8,startPosition:2},0).wait(1).to({rotation:18.2,x:141.1,y:199.7,startPosition:3},0).wait(1).to({rotation:18.7,x:141,y:200.6,startPosition:0},0).wait(1).to({rotation:19.3,x:140.9,y:201.4,startPosition:1},0).wait(1).to({rotation:19.8,x:140.8,y:202.3,startPosition:2},0).wait(1).to({rotation:20.3,x:140.6,y:203.2,startPosition:3},0).wait(1).to({rotation:20.8,y:204,startPosition:0},0).wait(1).to({rotation:21.4,x:140.5,y:205,startPosition:1},0).wait(1).to({rotation:21.9,x:140.4,y:205.8,startPosition:2},0).wait(1).to({rotation:22.4,x:140.3,y:206.7,startPosition:3},0).wait(1).to({rotation:22.9,x:140.2,y:207.5,startPosition:0},0).wait(1).to({rotation:23.4,x:140.1,y:208.4,startPosition:1},0).wait(1).to({rotation:24,x:140,y:209.3,startPosition:2},0).wait(1).to({rotation:24.5,x:139.8,y:210.2,startPosition:3},0).wait(1).to({rotation:25,y:211.1,startPosition:0},0).wait(1).to({rotation:25.5,x:139.7,y:211.9,startPosition:1},0).wait(1).to({rotation:26,x:139.6,y:212.8,startPosition:2},0).wait(1).to({rotation:26.6,x:139.5,y:213.7,startPosition:3},0).wait(1).to({rotation:27.1,x:139.4,y:214.6,startPosition:0},0).wait(1).to({rotation:27.6,x:139.3,y:215.5,startPosition:1},0).wait(1).to({rotation:28.1,x:139.2,y:216.3,startPosition:2},0).wait(1).to({rotation:28.6,x:139.1,y:217.3,startPosition:3},0).wait(1).to({rotation:29.2,x:139,y:218.1,startPosition:0},0).wait(1).to({rotation:29.7,x:138.9,y:219,startPosition:1},0).wait(1).to({rotation:30.2,x:138.8,y:219.8,startPosition:2},0).wait(1).to({rotation:30.7,x:138.7,y:220.7,startPosition:3},0).wait(1).to({rotation:31.2,x:138.6,y:221.6,startPosition:0},0).wait(1).to({rotation:31.8,x:138.4,y:222.5,startPosition:1},0).wait(1).to({rotation:32.3,y:223.4,startPosition:2},0).wait(1).to({rotation:32.8,x:138.2,y:224.2,startPosition:3},0).wait(1).to({rotation:33.3,y:225.1,startPosition:0},0).wait(1).to({rotation:33.9,x:138.1,y:226,startPosition:1},0).wait(1).to({rotation:34.4,x:138,y:226.9,startPosition:2},0).wait(1).to({rotation:34.9,x:137.8,y:227.8,startPosition:3},0).wait(1).to({rotation:35.4,x:137.7,y:228.7,startPosition:0},0).wait(1).to({rotation:35.9,y:229.6,startPosition:1},0).wait(1).to({rotation:36.5,x:137.6,y:230.4,startPosition:2},0).wait(1).to({rotation:37,x:137.5,y:231.3,startPosition:3},0).wait(1).to({rotation:37.5,x:137.4,y:232.1,startPosition:0},0).wait(1).to({rotation:38,x:137.3,y:233,startPosition:1},0).wait(1).to({rotation:38.5,x:137.2,y:233.9,startPosition:2},0).wait(1).to({rotation:39.1,x:137,y:234.8,startPosition:3},0).wait(1).to({rotation:39.6,y:235.7,startPosition:0},0).wait(1).to({rotation:40.1,x:136.9,y:236.6,startPosition:1},0).wait(1).to({rotation:40.6,x:136.8,y:237.5,startPosition:2},0).wait(1).to({rotation:41.1,x:136.7,y:238.3,startPosition:3},0).wait(1).to({rotation:41.7,x:136.6,y:239.2,startPosition:0},0).wait(1).to({rotation:42.2,x:136.5,y:240,startPosition:1},0).wait(1).to({rotation:42.7,x:136.4,y:240.9,startPosition:2},0).wait(1).to({rotation:43.2,x:136.2,y:241.9,startPosition:3},0).wait(1).to({rotation:43.7,x:136.1,y:242.7,startPosition:0},0).wait(1).to({rotation:44.3,y:243.6,startPosition:1},0).wait(1).to({rotation:44.8,x:136,y:244.5,startPosition:2},0).wait(1).to({rotation:45.3,x:135.8,y:245.3,startPosition:3},0).wait(1).to({rotation:45.8,x:135.7,y:246.3,startPosition:0},0).wait(1).to({rotation:46.4,x:135.6,y:247.1,startPosition:1},0).wait(1).to({rotation:46.9,x:135.5,y:248,startPosition:2},0).wait(1).to({rotation:47.4,x:135.4,y:248.9,startPosition:3},0).wait(1).to({rotation:47.9,x:135.3,y:249.7,startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-612.7,-430.1,1171,905.7);


// stage content:
(lib._20161214_FWW_TilesAll_v05 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Phytoplankton
	this.instance = new lib.fadein("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(887,596.7,1.656,1.656,0,0,0,-12.8,17.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-12.4,regY:16.6,x:887.6,y:594.7,alpha:0.111,startPosition:1},0).wait(1).to({alpha:0.222,startPosition:2},0).wait(1).to({alpha:0.333,startPosition:3},0).wait(1).to({alpha:0.444,startPosition:4},0).wait(1).to({alpha:0.556,startPosition:5},0).wait(1).to({alpha:0.667,startPosition:6},0).wait(1).to({alpha:0.778,startPosition:7},0).wait(1).to({alpha:0.889,startPosition:8},0).wait(1).to({alpha:1,startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:30},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({startPosition:42},0).wait(1).to({startPosition:43},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:45},0).wait(1).to({startPosition:46},0).wait(1).to({startPosition:47},0).wait(1).to({startPosition:48},0).wait(1).to({startPosition:49},0).wait(1).to({startPosition:50},0).wait(1).to({startPosition:51},0).wait(1).to({startPosition:52},0).wait(1).to({startPosition:53},0).wait(1).to({startPosition:54},0).wait(1).to({startPosition:55},0).wait(1).to({startPosition:56},0).wait(1).to({startPosition:57},0).wait(1).to({startPosition:58},0).wait(1).to({startPosition:59},0).wait(1).to({startPosition:60},0).wait(1).to({startPosition:61},0).wait(1).to({startPosition:62},0).wait(1).to({startPosition:63},0).wait(1).to({alpha:0.889,startPosition:64},0).wait(1).to({alpha:0.778,startPosition:65},0).wait(1).to({alpha:0.667,startPosition:66},0).wait(1).to({alpha:0.556,startPosition:67},0).wait(1).to({alpha:0.444,startPosition:68},0).wait(1).to({alpha:0.333,startPosition:69},0).wait(1).to({alpha:0.222,startPosition:70},0).wait(1).to({alpha:0.111,startPosition:71},0).wait(1).to({alpha:0,startPosition:72},0).to({_off:true},1).wait(167));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(853.6,395.1,1939,1496.5);
// library properties:
lib.properties = {
	width: 1920,
	height: 1080,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"./assets/animations/images/bkgrtiles.png", id:"bkgrtiles"},
		{src:"./assets/animations/images/NewPatternSwatch2.png", id:"NewPatternSwatch2"},
		{src:"./assets/animations/images/NewPatternSwatch3.png", id:"NewPatternSwatch3"},
		{src:"./assets/animations/images/NewPatternSwatch6.png", id:"NewPatternSwatch6"},
		{src:"./assets/animations/images/NewPatternSwatch7.png", id:"NewPatternSwatch7"},
		{src:"./assets/animations/images/NewPatternSwatch7_1.png", id:"NewPatternSwatch7_1"},
		{src:"./assets/animations/images/NewPatternSwatch8.png", id:"NewPatternSwatch8"},
		{src:"./assets/animations/images/USGS21IntricateSurface.png", id:"USGS21IntricateSurface"},
		{src:"./assets/animations/images/USGS21IntricateSurface_1.png", id:"USGS21IntricateSurface_1"},
		{src:"./assets/animations/images/USGS22GravelBeach.png", id:"USGS22GravelBeach"},
		{src:"./assets/animations/images/USGS22GravelBeach_1.png", id:"USGS22GravelBeach_1"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;