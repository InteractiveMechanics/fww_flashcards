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


(lib.Blend = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#321F11").s().p("AhoCDQgrg2gBhNQABhMArg2QAsg3A8AAQA9AAAsA3QArA2AABMQAABNgrA2QgsA3g9AAQg8AAgsg3g");
	this.shape.setTransform(14.9,18.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29.7,37.2);


(lib.Path_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#321F11").s().p("AhdBxQgngvAAhCQAAhBAngvQAnguA2AAQA3AAAnAuQAnAvAABBQAABCgnAvQgnAug3AAQg2AAgngug");
	this.shape.setTransform(13.3,15.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26.6,31.9);


(lib.Path_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#321F11").s().p("AhdBxQgngvAAhCQAAhBAnguQAngvA2AAQA3AAAnAvQAnAuAABBQAABCgnAvQgnAug3AAQg2AAgngug");
	this.shape.setTransform(13.3,15.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26.6,31.8);


(lib.Path_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#321F11").s().p("AgECGQgygYgig5Qgig3ACg4QACg3AlgXQAlgWAxAZQAyAYAiA4QAiA4gCA4QgCA3glAWQgSALgUAAQgXAAgZgNg");
	this.shape.setTransform(12.1,14.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.2,29.4);


(lib.Path_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#321F11").s().p("AgECGQgygYgig5Qgig4ADg3QABg3AmgXQAlgWAxAZQAxAZAiA4QAiA3gDA4QgBA3glAWQgSALgUAAQgXAAgZgNg");
	this.shape.setTransform(12.1,14.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,24.1,29.4);


(lib.Path_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#321F11").s().p("AgECGQgzgYghg5Qgig3ADg4QABg4AmgWQAlgWAxAZQAxAYAiA5QAiA3gDA4QgBA4glAWQgSAKgUAAQgXAAgZgNg");
	this.shape.setTransform(12.1,14.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,24.1,29.5);


(lib.Path_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#321F11").s().p("AgOB2QgvgSgbgvQgcgvAGgvQAGgxAlgWQAlgWAtASQAuARAcAvQAcAvgGAvQgHAxglAWQgVAMgXAAQgSAAgTgHg");
	this.shape.setTransform(11.2,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22.4,25.1);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#321F11").s().p("AgvBPQgtgbgSgrQgSgpAUghQAUggAugEQAtgEAtAbQAtAbASArQASApgUAhQgUAgguAEIgMABQgnAAgngYg");
	this.shape.setTransform(11.9,10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23.9,20.6);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#321F11").s().p("AAADPQiDgBhdg9Qhdg9AAhUQAAhWBeg8QBdg8CDABQCEAABdA9QBdA8gBBVQAABWhdA7QhdA9iDAAIgBAAg");
	this.shape.setTransform(31.8,20.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.7,41.3);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#321F11").s().p("AAAA6QhOgBg4gRQg3gRAAgXQAAgXA4gRQA3gRBOAAQBPABA4ARQA4ARgBAWQAAAYg3ARQg3ARhMAAIgEAAg");
	this.shape.setTransform(19,5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38.1,11.5);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#321F11").s().p("AAAA5QhOAAg4gRQg3gRgBgXQABgXA3gRQA4gRBOAAQBQABA3ARQA3ARAAAXQAAAXg4ARQg2ARhLAAIgFgBg");
	this.shape.setTransform(19.1,5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38.1,11.5);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#321F11").s().p("AAAA5Qg7AAgqgRQgqgRAAgXQAAgXAqgRQArgRA6ABQA8AAAqARQAqARAAAXQgBAXgqARQgpAQg5AAIgDAAg");
	this.shape.setTransform(14.4,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.8,11.5);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#321F11").s().p("AAAA5Qg7AAgqgRQgqgRAAgXQABgXAqgRQAqgRA6AAQA8ABAqARQAqARAAAWQAAAYgqARQgqARg5AAIgDgBg");
	this.shape.setTransform(14.4,5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.8,11.5);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#321F11").s().p("AhGApQgdgRAAgYQAAgXAegRQAdgQAogBQApABAeARQAdARAAAWQgBAYgdARQgdARgpAAQgpgBgdgQg");
	this.shape.setTransform(10,5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20,11.5);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#321F11").s().p("AhGApQgdgRAAgYQABgXAdgRQAdgQAogBQAqABAdARQAdARAAAWQAAAYgeARQgdARgpAAQgpgBgdgQg");
	this.shape.setTransform(10,5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20,11.5);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#321F11").s().p("AhGApQgdgRAAgYQABgXAdgRQAdgQAogBQApABAeARQAdARAAAWQAAAYgeARQgdARgpAAQgpgBgdgQg");
	this.shape.setTransform(10,5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20,11.5);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#321F11").s().p("AgvBPQgtgcgSgqQgSgpAUghQAUghAugDQAtgEAtAbQAtAbASAqQASAqgUAgQgUAhguAEIgKABQgoAAgogYg");
	this.shape.setTransform(11.9,10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23.9,20.6);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#321F11").s().p("AlGDyQgZhBAzg/QAdghANgSQAVgfAEgcQAGgkgjhfQghhXAHgMQAUgkCMAVQCIAVAHAdQgShVA2gmQA4gnA+BDQAXAYACBpQAEBxAVAjQAZgSAhgFQApgHASgIQgKASgyCdQgoB8gtAeQgvAfgkgIQgYgGgjgfQgqglgVgKQgsgUg0AMQghBihGAQQgLACgKAAQg6AAgihXg");
	this.shape.setTransform(33.7,32.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,-0.1,67.1,65.9);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#961C1F","#B0605D","#9A4C4A","#7B3031","#681F21","#61191B"],[0,0.498,0.6,0.765,0.902,1],-62.9,0,63,0).s().p("AmcabQiBiBgykIQgmjQAAl4QAJnNAAj9QAApCADiIQAMltAvjaQA6kHB9iCQCLiQDsAAQDuAACKCQQB9CCA6EHQAvDaAMFtQADCJAAJBQAAD9AJHNQAAF5gmDPQgyEIiBCBQiRCQkMAAQkLAAiRiQg");
	this.shape.setTransform(63,183.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125.9,367.1);


(lib.Group_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#321F11").s().p("AhKBsQgjgYgDgxQgDgwAegtQAfgtAvgOQAugPAkAZQAjAYADAxQADAwgfAtQgeAtgvAOQgRAGgQAAQgaAAgXgQg");
	this.shape.setTransform(366.9,633.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#321F11").s().p("AhZCDQgkgYACg4QABg2Amg3QAlg2AzgVQAzgVAjAYQAkAZgCA3QgBA3glA2QgmA2gyAVQgYAKgVAAQgXAAgTgNg");
	this.shape_1.setTransform(398.3,597.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#321F11").s().p("AhZCDQgkgZACg3QABg3Amg2QAlg2AygVQA0gWAjAZQAkAYgCA4QgBA2gmA3QglA2gyAVQgYAKgUAAQgYAAgTgNg");
	this.shape_2.setTransform(429.1,557.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#321F11").s().p("AhZCDQgkgYACg4QABg2Amg3QAlg2AzgVQAzgVAjAYQAkAZgBA3QgCA3glA2QgmA2gyAVQgZAKgUAAQgYAAgSgNg");
	this.shape_3.setTransform(461,510);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#321F11").s().p("AgJCfQg3gEgkgxQgkgxAFhBQAEhBAqgsQAqgsA1ADQA3AEAkAxQAkAxgEBAQgFBCgqAsQgmApgxAAIgIAAg");
	this.shape_4.setTransform(477.7,458);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#321F11").s().p("AgJCfQg3gEgkgxQgkgxAFhBQAEhBAqgsQAqgsA2ADQA2AEAkAxQAkAxgEBAQgEBCgqAsQgnApgxAAIgIAAg");
	this.shape_5.setTransform(494.8,400.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#321F11").s().p("AgpCjQg+gggfhGQgghFAShEQARhDA4gZQA4gZA9AfQA+AgAgBGQAfBFgRBDQgSBEg4AZQgZAMgaAAQgfAAgjgSg");
	this.shape_6.setTransform(422,113.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#321F11").s().p("AgLC5Qg9gEgog5Qgog5AFhMQAFhMAvg0QAvgzA8AEQA9AEAoA5QAoA5gFBMQgFBMgvA0QgrAwg3AAIgJgBg");
	this.shape_7.setTransform(483,226);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#321F11").s().p("AitDJQgsgygFiXQgGieA3gwQA3gwCAAKQB9AKAqAxQAsAyACCJQACCRg2AwQg5Azh7ABIgFAAQh3AAgogug");
	this.shape_8.setTransform(250.2,24.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#321F11").s().p("AgrDrQhIgRgug0QgoguAiiNQAhiNA7g0QA0gtBJAkQA3AbA2A9QAoAugYB7QgZB6g6AzQgmAhg0AAQgVAAgYgFg");
	this.shape_9.setTransform(317.3,36.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#321F11").s().p("AAADcQg7gDhNh9QhNh6AGhPQAEhEBPgbQA5gUBRAFQA9AEBFBpQBGBogGBMQgEBIhIAsQg5Ajg9AAIgOgBg");
	this.shape_10.setTransform(183.5,37);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#321F11").s().p("AhUCoQg3gEgKgrQgGgWAGhhQAFhGBYg2QBPgxBFAEQA2ADAHA3QABANgHB1QgFBHhTArQg+AhhAAAIgRAAg");
	this.shape_11.setTransform(87.2,101.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#321F11").s().p("AgLC5Qg9gEgog5Qgog5AFhLQAFhOAvgzQAvgzA8AEQA9AEAoA5QAoA5gFBMQgFBMgvA0QgrAvg3AAIgJAAg");
	this.shape_12.setTransform(14.9,213.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#321F11").s().p("AgLC5Qg+gEgog5Qgng5AFhMQAFhMAug0QAvgzA9AEQA9AEAoA5QAoA5gFBMQgFBMgvA0QgrAwg3AAIgJgBg");
	this.shape_13.setTransform(497.9,328.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,512.8,645.6);


(lib.edgeBit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1D3C3").s().p("AgDCHIgEiHQgHhvgBgXQgBgWAJgcQAJAZACAYIAICHIACA7QADA9gBAPQAAAWgJAcQgJgagBgYg");
	this.shape.setTransform(308.1,740.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E1D3C3").s().p("AAACHIgHiHQgKhvgBgWQgBgZAIgZQALAaAAAXIAMCGIAEA7QAEA8gBAQQABAXgJAbQgKgagBgYg");
	this.shape_1.setTransform(312.6,740.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E1D3C3").s().p("AADCHIgFhMIgFg6IgOiFQgCgYAHgbQALAZADAYIANCGIAGA5IAFBNQABAZgIAZQgLgagBgXg");
	this.shape_2.setTransform(317.1,740);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E1D3C3").s().p("AAGCHQAAgQgGg7QgGg7gBAAIgRiFQgCgVAGgeQAMAYAEAZIAQCGIAHA6QAGA8ABAPQABAYgIAbQgLgagCgXg");
	this.shape_3.setTransform(321.5,739.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E1D3C3").s().p("AAJCHIgQiGQgRhugDgWQgDgXAGgcQANAYADAYIAUCFIAIA6QAIA9AAAPQACAWgHAcQgMgZgCgXg");
	this.shape_4.setTransform(325.9,739.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E1D3C3").s().p("AAMCGIgKhKIgIg7IgYiEQgDgXAFgbQANAWAFAZIAWCFIAUCFQACAXgHAbQgMgZgDgXg");
	this.shape_5.setTransform(330.3,738.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E1D3C3").s().p("AAPCGIgMhLIgJg6IgbiDQgEgWAFgdQAOAZAEAWIAaCFIAKA5QALA8ABAPQADAZgGAaQgNgZgDgXg");
	this.shape_6.setTransform(334.7,737.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E1D3C3").s().p("AASCFIgNhKIgLg5IgdiDQgFgXAEgcQAPAYAFAWIAcCEQABAAALA6QAMA6ABAQQAEAYgGAbQgOgbgDgVg");
	this.shape_7.setTransform(339.1,737);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E1D3C3").s().p("AAVCFIgPhKQgLg5gBAAIggiDQgFgVADgdQAQAYAFAWQAgCDgBAAQABAAAMA5QANA7ACAQQAEAVgFAdQgOgZgEgWg");
	this.shape_8.setTransform(343.4,736.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E1D3C3").s().p("AAYCEIgeiCQgdhsgFgWQgGgUADgeQAQAXAFAXIAiCCIAPA4IAQBKQAFAYgFAbQgPgagEgVg");
	this.shape_9.setTransform(347.7,735.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E1D3C3").s().p("AAbCEIghiCIgmiAQgGgWADgdQAQAXAGAWIAlCCIAPA4QAQA7ADAPQAFAWgEAcQgPgZgFgVg");
	this.shape_10.setTransform(352.1,734);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E1D3C3").s().p("AAeCDQgDgOgRg7IgPg4QgjhqgGgWQgGgWABgcQARAXAHAWIAnCAIARA4QARA7ADAOQAFAXgDAcQgQgXgFgXg");
	this.shape_11.setTransform(356.3,732.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E1D3C3").s().p("AAhCDIgVhIIgRg4IgriAQgHgUABgeQARAWAHAXIAqB/IASA3IAWBJQAGAYgDAbQgQgWgGgXg");
	this.shape_12.setTransform(360.6,731.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E1D3C3").s().p("AAkCCIgpiAIguh+QgIgVABgdQASAXAIAVIAsB/IATA3QAUA5ADAPQAHAXgDAcQgQgYgGgVg");
	this.shape_13.setTransform(364.8,730.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E1D3C3").s().p("AAmCAIgrh+Igwh9QgIgWAAgbQARAUAJAWIAvB+IAVA3QAUA5AEAPQAHAXgCAbQgRgXgHgWg");
	this.shape_14.setTransform(369,728.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E1D3C3").s().p("AApCAIguh9Igzh8QgIgWgBgcQATAWAIAUIAyB9IAWA2QAVA5AEAPQAIAWgBAcQgRgVgIgXg");
	this.shape_15.setTransform(373.2,727.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E1D3C3").s().p("AArB/QgFgPgWg3QgUg3gBABIg1h7QgJgUgBgeQASAUAKAXIA0B7QABAAAWA2QAWA3AFAQQAIAXgBAbQgSgWgIgWg");
	this.shape_16.setTransform(377.4,725.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E1D3C3").s().p("AAuB+Igzh8Ig4h5QgIgTgCgfQATAWAJAUIA3B6IA0B8QAJAWgBAdQgSgXgIgVg");
	this.shape_17.setTransform(381.6,724);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E1D3C3").s().p("AAxB+IgehGQgXg1gBAAIg6h4QgJgXgDgbQAUAUAKAVIA5B5IA3B7QAIAVABAdQgTgWgIgUg");
	this.shape_18.setTransform(385.7,722.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E1D3C3").s().p("AAzB8QgGgOgZg2QgYg1gBAAIg8h3QgKgVgDgcQAUAUAKAUIA8B4QABAAAZA0QAZA3AGAPQAJAWABAbQgUgWgIgUg");
	this.shape_19.setTransform(389.8,720.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E1D3C3").s().p("AA1B7IgghEIgag0Ig/h2QgKgVgDgcQAVAUAKAUIA+B3IAbA0QAbA2AFAOQAKAXABAbQgUgWgJgUg");
	this.shape_20.setTransform(393.9,718.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E1D3C3").s().p("AA4B6Ig8h3IhBh1QgKgSgFgeQAUATAMAUIBAB1IAcA0QAcA3AFANQAKAWACAbQgUgUgJgVg");
	this.shape_21.setTransform(397.9,716.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E1D3C3").s().p("AA6B5QgGgOgdg0Igbg0IhEh0QgKgTgFgcQAVASAMAUIBBB1QABgBAdAzQAcA1AGAOQALAXACAbQgUgVgKgUg");
	this.shape_22.setTransform(401.9,714.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E1D3C3").s().p("AA8B4QgHgOgdg0QgbgzgBAAIhGhyQgMgUgEgcQAVASAMAUIBFBzIAdAzQAfA1AFANQALAWADAbQgUgTgLgVg");
	this.shape_23.setTransform(405.9,712);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E1D3C3").s().p("AA+B3IglhCIgdgyIhHhxQgMgTgGgcQAVAQANAVIAoBAIAfAyIAeAyQAfA0AGANQALAVAEAcQgVgTgLgUg");
	this.shape_24.setTransform(409.9,709.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E1D3C3").s().p("ABAB2QgGgOgggzIgegyIhJhvQgMgUgHgbQAWARANATIApA/IAfAyQABgBAfAyQAfAzAHAOQALAUAFAcQgVgRgMgVg");
	this.shape_25.setTransform(413.8,707.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E1D3C3").s().p("ABCB1QgHgOgggyIgfgyIhLhuQgNgSgGgcQAWAQANAUQBLBugBAAIAhAxQAgAzAHAOQAMAUAEAcQgVgTgMgTg");
	this.shape_26.setTransform(417.7,705);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E1D3C3").s().p("ABEBzQgHgNghgyQgfgxgBAAIhNhsQgNgSgHgdQAXASANASIBMBtQABAAAgAwQAiAyAHAOQAMATAFAdQgVgSgNgUg");
	this.shape_27.setTransform(421.6,702.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E1D3C3").s().p("ABHByIgqg+QgggxgBABIhPhsQgNgSgIgcQAYARANARIBOBtIBMBvQAMAUAGAbQgXgSgLgTg");
	this.shape_28.setTransform(425.4,699.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E1D3C3").s().p("ABZCFQgJgJgHgMIgrg+IghgvIhShqQgMgRgJgcQAXAPAOATIBQBrIAjAuQAjAyAIANQAMAUAGAbIgSgQg");
	this.shape_29.setTransform(429.2,697.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E1D3C3").s().p("ABKBvIgrg9QgigvgBAAIhShoQgOgTgJgaQAYAPAOASQBTBpgBAAIAjAvQAkAxAIAMQANATAHAcQgWgQgOgUg");
	this.shape_30.setTransform(433,694.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E1D3C3").s().p("ABMBuQgIgMglgwQghgugCgBIhUhmQgPgUgIgZQAYAPAPASIBTBnIAkAuQAlAwAIANQANASAHAcQgXgRgNgSg");
	this.shape_31.setTransform(436.7,691.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E1D3C3").s().p("ABOBtIhRhpIhWhmQgNgQgMgcQAYANAPATIBWBmIAlAtQAlAwAJAMQAOAVAHAZQgXgPgOgTg");
	this.shape_32.setTransform(440.4,688.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E1D3C3").s().p("ABQBsQgKgOglgtQgjgugBABIhYhkQgPgSgKgbQAZAPAPARIBXBlIAmAsQAmAvAIANQAOASAIAcQgYgRgNgRg");
	this.shape_33.setTransform(444.1,685.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E1D3C3").s().p("ABRBqQgJgMgmguIglgsIhahjQgPgRgKgbQAZAOAPARIBZBkIAmArQAnAvAIAMQAPATAIAbQgYgQgOgSg");
	this.shape_34.setTransform(447.8,682.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E1D3C3").s().p("ABTBpIhWhlIhbhhQgQgSgKgaQAYANAQARIBbBjIAmArQAoAuAJAMQAPASAIAbQgXgPgPgSg");
	this.shape_35.setTransform(451.4,679.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E1D3C3").s().p("ABVBoIgyg5IgmgrIhdhgQgPgRgLgaQAZANAQARIBbBhQABgBAnArIAyA5QAOASAJAbQgXgOgPgSg");
	this.shape_36.setTransform(454.9,676.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E1D3C3").s().p("ABWBmQgKgMgogrQgmgrgBAAIheheQgRgSgKgZQAZANAQAQIBdBgIAoApQApAtAKAMQAOARAKAbQgZgPgOgRg");
	this.shape_37.setTransform(458.5,673.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E1D3C3").s().p("ABYBlQgKgMgpgrIgogqIhfhdQgRgRgLgZQAZAMAQAQQBgBegBAAIApApQAqAsAJAMQAPARAKAbQgZgPgOgQg");
	this.shape_38.setTransform(462,670.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E1D3C3").s().p("ABZBjIgzg2IgpgpIhhhbQgPgQgNgaQAaAMAQAQIBgBcIAAAAIAAAAIAqAoIA0A3QAOAQALAcQgZgOgPgRg");
	this.shape_39.setTransform(465.4,666.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E1D3C3").s().p("ABaBiQgKgLgqgrIgogoIhjhaQgQgPgNgaQAbAMAPAPIBiBbIArAoQAqAqAKAMQAPARALAaQgZgNgQgRg");
	this.shape_40.setTransform(468.9,663.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E1D3C3").s().p("ABcBgQgKgLgrgpIgpgoIhkhZQgQgOgOgaQAZALASAPQBkBYgBACIArAmQArArAKALQAQARALAaQgagNgPgRg");
	this.shape_41.setTransform(472.2,659.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E1D3C3").s().p("ABeBgIhghcIhlhXQgQgPgPgZQAaAKASAPIBkBYQAAgBArAoQAsApAKALQAQAQAMAbQgagMgPgQg");
	this.shape_42.setTransform(475.6,656.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E1D3C3").s().p("ABfBeIhihaIhlhWQgRgOgPgZQAbAKARAOIBmBXIAsAmQAsApALALQAQARAMAZQgbgNgPgPg");
	this.shape_43.setTransform(478.9,652.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E1D3C3").s().p("ABgBdQgKgLgtgoIgrgmIhnhUQgSgQgOgXQAaAKASAOIBnBVIAsAmQAuAoAKALQARARALAYQgYgLgSgQg");
	this.shape_44.setTransform(482.2,649.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E1D3C3").s().p("ABiBbQgLgLgugnIgrglIhohSQgTgQgOgXQAaAJASAOIBoBUIAtAlQAuAnAKALQARAQAMAZQgagMgPgPg");
	this.shape_45.setTransform(485.4,645.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E1D3C3").s().p("ABjBaQgLgLgugmIgsglIhphRQgSgOgPgYQAbAJASAOIBoBSIAuAkQAuAnALAKQARARAMAYQgagLgQgPg");
	this.shape_46.setTransform(488.6,641.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E1D3C3").s().p("ABjBZQgKgLgvglIgsglIhrhPQgRgOgQgYQAbAJASANIBqBRIAuAjQAvAmALALQARAPANAZQgbgLgRgOg");
	this.shape_47.setTransform(491.8,637.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E1D3C3").s().p("ABlBXIg6gwIgtgjIhrhOQgTgNgPgYQAaAHATAOIBrBPIAuAjQAwAmAKAKQARAPAPAZQgbgLgRgOg");
	this.shape_48.setTransform(494.9,633.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E1D3C3").s().p("ABmBVIhohRIhthMQgTgPgPgWQAbAHATAOIBsBNQAAgBAvAjQAvAlAMAKQARAQAOAYQgbgKgRgPg");
	this.shape_49.setTransform(497.9,629.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E1D3C3").s().p("ABnBUQgLgKgwgkIgugiIhthLQgMgIgIgJQgGgHgJgMQAaAHAUANIBtBMIAvAhQAxAlALAKQASAQANAYQgagLgSgOg");
	this.shape_50.setTransform(500.9,625.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#E1D3C3").s().p("ABoBTQgLgKgwgjIgvgiIhuhKQgUgMgQgYQAcAIASAMIA/AqIAvAhIAwAhQAxAkALAJQASAPAPAZQgcgKgRgOg");
	this.shape_51.setTransform(503.9,621.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E1D3C3").s().p("ABqBSQgMgKgxgjIgughIhwhIQgSgMgSgXQAcAHATAMIBuBJQABgBAwAhQAxAjALAKQATAPAOAXQgbgIgRgOg");
	this.shape_52.setTransform(506.9,617.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#E1D3C3").s().p("ABqBQQgLgJgxgiIgwghIhwhGQgUgNgQgWQAbAGATAMIBwBIIAxAgQAxAiAMAJQARAOAQAYQgbgIgSgOg");
	this.shape_53.setTransform(509.8,613.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E1D3C3").s().p("ABrBOIg9gqQgvghAAABIhyhFQgTgLgSgXQAbAFAUANIBxBGQAAgBAxAgQAyAhAMAKQARANAQAYQgbgIgSgOg");
	this.shape_54.setTransform(512.6,609.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#E1D3C3").s().p("ABsBNIhuhJIhyhDQgUgNgRgVQAdAGASALIByBEIAxAfQAzAhAMAKQASANAQAYQgagIgUgOg");
	this.shape_55.setTransform(515.4,605.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E1D3C3").s().p("ABuBLIhvhHIhzhCQgUgMgSgWQAbAGAVALIByBEQAAgCAxAfQAzAgAMAKQAUANAPAYQgcgJgRgNg");
	this.shape_56.setTransform(518.2,600.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E1D3C3").s().p("ACFBXQgLgEgMgJQgMgJgzgfIgwgeIh0hAQgUgLgSgXQAaAFAVALIB0BCIAyAeQA0AfALAJQATANAQAXIgXgHg");
	this.shape_57.setTransform(520.9,596.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#E1D3C3").s().p("ABvBJQgMgIgzgfIgxgeIh1g/QgUgMgSgUQAdAEASALIB1BAIAyAdQA0AfAMAIQATAOAQAWQgagGgUgNg");
	this.shape_58.setTransform(523.5,592.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#E1D3C3").s().p("ABwBHQgMgIgzgeIgygdIh2g9QgVgMgSgVQAbAEAVALIB1A/QAAgBAzAdQA0AeAMAJQATANARAWQgcgGgSgNg");
	this.shape_59.setTransform(526.2,587.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E1D3C3").s().p("ABxBGQgMgIg0geIgygcIh2g8QgUgLgTgUQAbADAVALIB1A9QAAgBAzAcQA1AeAMAIQAUAOAQAVQgbgFgTgNg");
	this.shape_60.setTransform(528.7,583.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#E1D3C3").s().p("AByBEIhBglIgygbIh3g6QgVgLgTgVQAcAFAVAKIBDAgIAzAbQAAgBA0AbQA1AeAMAIQATANARAVQgcgGgSgMg");
	this.shape_61.setTransform(531.3,578.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E1D3C3").s().p("AByBDQgNgIg0gcQgygcAAABIh4g5QgTgKgUgUQAcADAUAJIB3A7QABgBAzAbQA0AcANAIQAVANAQAWQgcgHgTgLg");
	this.shape_62.setTransform(533.7,574);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#E1D3C3").s().p("ABzBCQgMgIg1gcIgzgaIh4g3QgUgKgUgVQAcAEAUAJIB4A4IA0AaQA2AcAMAIQAUAMARAWQgcgGgTgLg");
	this.shape_63.setTransform(536.1,569.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#E1D3C3").s().p("ACMBLQgMgEgMgHQgOgIg0gbQgygagBABIh5g2QgVgKgTgUQAbADAVAJIBFAfIA0AYQAAgBA0AaQA1AbAOAIQATAMASAWIgXgGg");
	this.shape_64.setTransform(538.5,564.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#E1D3C3").s().p("AB1A/QgOgIg0gaQgzgagBABIh6g1QgUgIgUgVQAcADAUAIIB5A2IA1AYQA3AbAMAIQAWANAQATQgagEgVgLg");
	this.shape_65.setTransform(540.8,560);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#E1D3C3").s().p("AB2A+QgOgJg1gZQgzgZgBABIh6gzQgVgJgUgUIAYADQALACAOAGIB5A0IA2AXQA2AbANAHQATALATAVQgcgEgTgKg");
	this.shape_66.setTransform(543.1,555.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#E1D3C3").s().p("AB3A8Ih4g4Ih6gxQgVgJgVgUQAbACAWAJIBFAcIA1AWIA2AXQA3AZANAIQATAKATAWQgbgEgUgLg");
	this.shape_67.setTransform(545.3,550.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#E1D3C3").s().p("ACPBEQgLgDgNgGQgNgIg2gYQg0gYgBABIh7gwQgUgIgWgUQAcABAVAJIB7AxQAAgBA2AXQA2AZAOAHQAUALATAUQgQgBgIgDg");
	this.shape_68.setTransform(547.5,545.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#E1D3C3").s().p("AB4A5QgOgHg2gYQg0gXAAABIh9guQgVgJgVgSQAcABAVAIIB8AvQAAgBA2AWQA3AYANAIQAVALATATQgbgCgVgLg");
	this.shape_69.setTransform(549.6,540.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#E1D3C3").s().p("AB4A3QgOgHg2gWQg0gXAAABIh9gtQgVgHgWgUQAcABAWAIIBGAZIA2AVQAAgBA2AWQA3AXANAHQAVALAUAUQgdgEgUgKg");
	this.shape_70.setTransform(551.7,535.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#E1D3C3").s().p("AB5A2QgOgHg2gWQg1gWAAABIh9grQgUgIgXgTQAbABAWAHIB9AtQAAgBA2AUQA4AXANAIQAVAJATAVQgcgDgUgKg");
	this.shape_71.setTransform(553.6,531);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#E1D3C3").s().p("AB5A1QgNgHg3gWIg1gUIh+gqQgVgHgWgSQAbgBAWAIIB9ArQABgBA2AUQA3AWAOAHQAVAJAUAUQgcgCgVgJg");
	this.shape_72.setTransform(555.6,526);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#E1D3C3").s().p("AB6AzQgOgGg3gVQg1gVAAABIh+goQgWgIgWgRQAcgBAWAHIBHAXIA2ATQAAgBA3ATQA4AWAOAGQAWALATATQgdgDgUgJg");
	this.shape_73.setTransform(557.5,521);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#E1D3C3").s().p("AB7AyQgOgHg4gUQg1gUAAABIh/gnQgVgHgWgRQAbgCAWAHIB+AoQAAgBA3ATQA5AVANAHQAWAKATASQgcgBgUgJg");
	this.shape_74.setTransform(559.3,516);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#E1D3C3").s().p("AB8AwQgPgGg3gUQg2gTAAABIh/glQgWgIgWgQQAbgCAWAHIB/AmQAAgBA4ATQA4AUANAGQAWAKAUASQgbgBgVgJg");
	this.shape_75.setTransform(561.1,511);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#E1D3C3").s().p("AB8AvQgNgGg5gTIg2gSIh/gkQgXgHgWgQQAcgCAWAGIB/AlQAAgBA3ASQA5ATAOAHQAVAJAVASQgbAAgWgJg");
	this.shape_76.setTransform(562.8,505.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#E1D3C3").s().p("AB9AtQgPgFg3gTQg3gSAAABIiAgiQgVgGgYgRQAQgBAJABQALABAOADIB/AkQAAgBA4ARQA5ATAOAFQAWAJAUASQgcgBgUgIg");
	this.shape_77.setTransform(564.5,500.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#E1D3C3").s().p("AB9AsIh9goIiAggQgXgHgWgPQAQgCAJABQALAAAOAEIB/AiQAAgBA4AQQA5ASAOAGQAYAJATASQgegBgTgIg");
	this.shape_78.setTransform(566.1,495.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#E1D3C3").s().p("AB+ArQgOgGg5gRQg3gRAAABIiBgfQgUgFgZgQQAcgDAXAFIBIASIA3AOQAAgBA4AQQA6ARAOAGQAXAJATASQgbAAgVgIg");
	this.shape_79.setTransform(567.7,490.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#E1D3C3").s().p("AB+ApQgOgFg5gRQg3gQAAABIiAgdQgXgGgXgPQAbgDAXAFICAAeIA4APQA6ARAOAFQAUAHAXATQgdAAgUgIg");
	this.shape_80.setTransform(569.2,485.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#E1D3C3").s().p("AB+AoQgPgGg4gPQg3gQAAABIiBgcQgWgFgYgPQAbgEAXAFQCBAcAAABIAAAAIAAAAQAAAAA4AOQA6AQAOAFQAVAIAWARIgGABQgYAAgTgHg");
	this.shape_81.setTransform(570.6,480);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#E1D3C3").s().p("AB/AmQgOgFg5gPQg4gPAAABIiBgaQgXgFgXgPQAagEAYAFICBAbQAAgBA4APQA6AOAOAGQAWAHAWARIgHABQgZAAgRgHg");
	this.shape_82.setTransform(572,474.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#E1D3C3").s().p("AB/AlQgPgFg4gOQg4gOAAABIiBgZQgWgFgYgPQAbgEAWAFQCCAYgBACIAAAAIAAAAQABgBA4AOQA7ANAOAGQAVAGAWASIgHAAQgYAAgSgGg");
	this.shape_83.setTransform(573.3,469.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#E1D3C3").s().p("AB/AkQgOgFg5gOQg4gNAAABIiCgXQgWgFgYgOQAbgFAXAEQCBAYAAABQABgBA4ANQA6ANAPAFQAXAHAVARIgLAAQgVAAgSgFg");
	this.shape_84.setTransform(574.5,464.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#E1D3C3").s().p("ACAAiQgPgEg5gNQg4gNAAABQAAgBiCgVQgWgEgYgOIAYgDQALgBAOADIBKAMIA4ALQAAgBA5ANQA7AMAOAEQAWAHAWARIgLAAQgVAAgRgFg");
	this.shape_85.setTransform(575.7,458.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#E1D3C3").s().p("ACaAlQgMgBgOgEIiAgcIiCgUQgYgEgXgNQAOgDALAAQALgBAOACICCAVQAAgBA5ANQA7ALAOAFQAWAGAXAQIgQABIgIAAg");
	this.shape_86.setTransform(576.9,453.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#E1D3C3").s().p("ACaAjQgMAAgNgEQgPgEg5gMQg5gLAAABQAAgCiCgRQgXgEgYgNQAPgDAJgBQAMAAAOACICCATQAAgBA5AMQA7ALAOAEQAXAHAWAPIgTACIgFgBg");
	this.shape_87.setTransform(577.9,448.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#E1D3C3").s().p("ACBAeQgPgEg6gLQg4gLAAABIiCgRQgYgDgXgOQAagFAXADICDASQAAgBA5AKQA7AKAOAFQAYAGAVAQIgRAAQgSAAgOgDg");
	this.shape_88.setTransform(578.9,442.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#E1D3C3").s().p("ACBAcQgPgEg6gKQg4gKAAABIiDgQQgWgCgZgOQAagGAYADIBKAJIA4AHQAAgBA6AKQA7AKAOAEQAVAFAZAQIgUACQgQAAgOgEg");
	this.shape_89.setTransform(579.9,437.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#E1D3C3").s().p("ACBAbQgPgEg5gJQg5gKAAABIg4gFIhKgIQgOgCgMgEIgWgKQAagHAYADIBJAIIA5AHQAAgBA6AJQA7AJAOAEQAXAFAXAQIgUABQgQAAgOgDg");
	this.shape_90.setTransform(580.8,432);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#E1D3C3").s().p("ACCAZQgPgDg6gJQg5gJAAABQAAgBiCgLQgYgDgZgMQAbgHAXADIBLAHIA4AGQAAgBA6AJQA7AIAOADQAWAFAYAPQgMACgLAAQgOAAgMgDg");
	this.shape_91.setTransform(581.6,426.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#E1D3C3").s().p("ACCAYQgPgEg6gIQg5gIAAABIiDgKQgXgCgYgMQAPgEAIgBQAMgCAOACICDALQAAgBA5AIQA8AHAOAEQAXAFAXAOQgNACgLAAQgOAAgLgCg");
	this.shape_92.setTransform(582.3,421.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#E1D3C3").s().p("ACCAWQgOgDg7gIQg5gHAAABIiDgJQgXgCgZgLQAbgIAXACICDAJQAAgBA6AIQA7AHAPADQAWAEAYAPQgPACgNAAQgLAAgLgCg");
	this.shape_93.setTransform(583,415.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#E1D3C3").s().p("ACCAVQgPgDg6gHQg5gHAAABIiDgHQgXgBgZgMQAagHAXABIBLAEIA4AEQAAgBA7AHQA7AGAPADQAYAFAWANQgOACgNAAQgMAAgLgBg");
	this.shape_94.setTransform(583.6,410.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#E1D3C3").s().p("ACDATQgPgDg7gGQg5gGAAABIiDgFQgWgBgagLQAZgIAYAAICDAHQAAgBA6AGQA8AGAPACQAXAEAXAOQgOADgKAAIgEAAIgVgCg");
	this.shape_95.setTransform(584.1,404.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#E1D3C3").s().p("ACDASQgPgDg7gFQg5gFAAABIiDgFQgWgBgagKQAagIAXAAQCDADAAACQAAgBA6AFQA7AGAPADQAVACAaAOQgRADgOAAIgSgBg");
	this.shape_96.setTransform(584.6,399.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#E1D3C3").s().p("ACDAQQiDgMAAABIiDgDQgWAAgagKQAZgJAYABIBKABIA5ACQAAgBA6AEQA8AFAOADQAXACAYANQgQAEgQAAIgRgBg");
	this.shape_97.setTransform(585,393.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#E1D3C3").s().p("ACDAOQgPgCg6gEQg5gEgBABIiCgBQgWAAgcgJQAbgKAXABQCDgBAAACQAAgBA6AEQA8AEAOACQAYADAXANQgRADgQAAIgQgBg");
	this.shape_98.setTransform(585.4,388.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#E1D3C3").s().p("ACDANQgPgCg7gDQg5gDAAABIiDAAQgVAAgbgJQAYgJAYgBICEAAQAAgBA5ADQA8ADAPADQAYADAYALQgWAFgRAAIgLgBg");
	this.shape_99.setTransform(585.7,382.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#E1D3C3").s().p("ACDAMQgOgCg8gCQg5gCAAABQAAgBiDADQgVAAgbgJQAagJAWgBIBLgBIA4gBQAAgBA6ADQA8ACAPACQAXADAYALQgTAFgSAAIgMgBg");
	this.shape_100.setTransform(585.9,377.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#E1D3C3").s().p("ACDAMQgOgCg7gCQg6gBAAABIiDADQgXABgagJQAcgKAVAAIBKgDIA5gBQAAgBA6ACQA8ABAPACQAWACAaAMQgWAFgTAAIgJAAg");
	this.shape_101.setTransform(586,371.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#E1D3C3").s().p("Ai0AFQAZgKAXgBIBLgDIA5gCQAAgBA6ABQA8AAAPACQAVACAaALQgaAHgXgBQgPgCg6gBQg6gBAAABIiCAGIgDAAQgVAAgagIg");
	this.shape_102.setTransform(586.1,366.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#E1D3C3").s().p("Ai0AHQAagKAWgCIBLgEIA5gDQAAgBA6AAQA7AAAPACQAYACAYAKQgaAIgXgCQgPgBg6AAQg6AAAAABIiCAHIgGAAQgVAAgXgHg");
	this.shape_103.setTransform(586.1,360.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#E1D3C3").s().p("Ai0AJQAagKAWgCICEgJQAAgBA5gBQA8gBAPACQAXABAZALQgaAHgWgBQgQgBg6ABQg5AAgBABIiCAJIgHAAQgTAAgYgGg");
	this.shape_104.setTransform(586,355);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#E1D3C3").s().p("AizALQAagLAWgCQCDgMAAABQAAgBA5gBQA8gCAPACQAXABAZALQgbAHgWgBQgOgBg7ABQg5ACAAABQAAgBiDAMIgHAAQgUAAgWgGg");
	this.shape_105.setTransform(585.8,349.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#E1D3C3").s().p("AicASQgIgBgPgEQAZgMAXgBIBJgIIA6gFQAAgBA5gCQA8gCAOABQAYABAZAKQgaAIgXgBQgPgBg6ADQg6ACABABIiDAMIgNABIgNgBg");
	this.shape_106.setTransform(585.6,343.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#E1D3C3").s().p("AizAPQAZgMAXgDQCCgOAAABQAAgBA6gDQA7gDAPABQAXAAAaAKQgcAJgVAAQgPAAg6ACQg6ACAAABIiBAPIgNAAQgRAAgUgFg");
	this.shape_107.setTransform(585.3,337.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#E1D3C3").s().p("AiyARQAZgNAVgCIBKgJIA6gGQAAgBA4gEQA8gEAPABQAXAAAaAKQgcAJgVAAQgOAAg8ADQg4ADAAABQAAgCiCASIgOABQgRAAgSgFg");
	this.shape_108.setTransform(584.9,332.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#E1D3C3").s().p("AiyAUQAXgNAXgDIBKgKIA5gHQAAgBA5gFQA7gFAPABQAXAAAbAJQgaAKgXAAQgPAAg7AEQg4AEAAABIg4AIIhKAKIgOABQgRAAgSgEg");
	this.shape_109.setTransform(584.4,326.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#E1D3C3").s().p("AiyAWQAXgNAXgEIBKgKIA5gIQAAgBA5gGQA7gFAPAAQAWAAAbAJQgbAKgVABQgPgBg7AGQg4AEAAABIiCAUIgPABQgQAAgSgEg");
	this.shape_110.setTransform(583.9,320.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#E1D3C3").s().p("AiyAYQAXgNAXgEIBJgMIA6gJQgBgBA5gGQA7gGAPAAQAXAAAbAIQgZALgYABQgOAAg7AGQg5AFAAABIg3AJIhJAMIgSACQgPAAgRgEg");
	this.shape_111.setTransform(583.3,315.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#E1D3C3").s().p("AiZAeIgYgDQAYgOAWgEIBJgNIA5gKQgBgBA5gHQA7gHAPAAQAYAAAZAIQgZALgXABQgOAAg7AHQg4AGAAABQAAgBiBAYQgLACgKAAIgEAAg");
	this.shape_112.setTransform(582.6,309.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#E1D3C3").s().p("AiZAgIgYgDQAYgOAWgFIBJgNIA4gLQAAgBA5gHQA7gIAPgBQAVgBAcAIQgaAMgWABQgPAAg6AIQg4AGAAABIiAAZQgMADgKAAIgEAAg");
	this.shape_113.setTransform(581.8,304.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#E1D3C3").s().p("AixAfQAYgOAWgFIBIgOIA5gMQAAgBA4gIQA7gJAPAAQAYgBAaAHQgZAMgXABQgQABg5AIQg4AIgBABIh/AaQgLACgNAAQgMAAgOgCg");
	this.shape_114.setTransform(581,298.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#E1D3C3").s().p("AiwAiQAWgPAXgFIBIgQIA5gMQgBgBA5gJQA7gJAPgBQAWgCAbAIIgWAJQgLADgOABQgPABg6AJQg4AIAAABQgBgBh/AeQgMACgOAAQgLAAgMgBgAABAEIAAAAIAAAAg");
	this.shape_115.setTransform(580.1,293.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#E1D3C3").s().p("AivAkQAWgPAXgGIBIgQIA3gNQAAgBA4gKQA7gKAPgBQAYgCAZAHQgZAMgVACQgPABg6AKQg4AJAAABIh/AeQgOADgOAAQgLAAgKgBg");
	this.shape_116.setTransform(579.2,288);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#E1D3C3").s().p("AivAmQAXgPAWgGIBHgRIA4gOQAAgBA4gLQA7gLAPgBQAXgCAaAHQgZAMgWADQgPABg5ALQg4AJAAABIh/AgQgOADgPAAIgUgBg");
	this.shape_117.setTransform(578.1,282.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#E1D3C3").s().p("AivAoQAYgPAVgGIBHgTIA4gOQAAgBA4gMQA6gLAPgBQAWgDAcAGQgaANgVADQgPABg5AMQg4AKAAABQAAgCh+AkQgOADgRAAIgTgBg");
	this.shape_118.setTransform(577,277.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#E1D3C3").s().p("AiuAqQAVgPAXgHIBHgUIA4gOQgBgBA5gMQA6gNAPgBQAVgEAcAHQgXAMgYAEQgPABg5ANQg3ALAAABQAAgBh9AkQgPAEgLAAIgFAAIgTgBgAABAEIAAAAIAAAAg");
	this.shape_119.setTransform(575.9,271.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#E1D3C3").s().p("AitAtQAWgRAVgGIBHgVIA4gPQgBgBA4gNQA6gOAPgBQAXgDAaAFQgZAOgVADQgPACg5ANQg3AMAAABQAAgBh9AmQgOAEgLAAIgJAAIgPAAg");
	this.shape_120.setTransform(574.6,266.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#E1D3C3").s().p("AitAvQAXgRAVgGIBGgXIA3gPQAAgBA4gOQA6gOAOgCQAOgCAMAAQAJABAPADQgXANgXAEQgPACg5AOQg3AMAAABIh9AnQgRAGgWAAIgKgBg");
	this.shape_121.setTransform(573.3,261.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#E1D3C3").s().p("AisAxQAWgRAVgHIBGgXIA3gRQAAgBA3gOQA5gPAPgCQAWgEAcAFQgZAOgUAEQgQACg4APQg4ANABABQAAgBh8AqQgSAGgWAAIgJgBg");
	this.shape_122.setTransform(572,256.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#E1D3C3").s().p("AirA0QAUgRAWgIIB9gpQAAgBA3gPQA5gQAPgCQAVgFAcAFQgYAOgVAFQgPACg4APQg3AOAAABIh7AqQgUAHgXAAIgGAAg");
	this.shape_123.setTransform(570.5,251);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#E1D3C3").s().p("AirA1QAVgRAWgIIBFgZIA3gSQgBgBA3gQQA5gQAPgDQAWgEAcAEQgYAPgWAEQgOADg5AQQg2APAAABIg1ATIhGAZQgSAHgYAAIgHgBg");
	this.shape_124.setTransform(569,245.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#E1D3C3").s().p("AiAAeIBGgaIA2gTQgBgBA2gRQA5gRAPgCQAXgFAbAEQgWAOgXAGQgOADg4AQQg3APAAABIg1AUIhFAaQgWAIgbAAQAVgSAVgIg");
	this.shape_125.setTransform(567.5,240.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#E1D3C3").s().p("AiAAgIBFgbIA2gUQAAgBA2gRQA5gSAOgDQAYgFAaAEQgWAOgXAGQgPADg3ASQg3AQABABIh6AvQgTAHgdABQAVgSAUgIg");
	this.shape_126.setTransform(565.9,235.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#E1D3C3").s().p("Ah/AhIBFgcIA1gUQAAgBA2gSQA4gTAPgDQAWgFAbADQgWAQgWAFQgPADg3ATQg2AQAAABIg0AVIhEAcQgVAIgcABQAVgSAUgJg");
	this.shape_127.setTransform(564.1,230.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#E1D3C3").s().p("Ah/AjQB6gzAAABQAAgBA1gTQA4gTAPgDQAOgEALAAQAJgBAPACQgWAQgWAFQgPAEg3ATQg2ARABABIh4AzQgVAJgbAAQAVgTATgIg");
	this.shape_128.setTransform(562.4,225.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#E1D3C3").s().p("Ah+AkIBEgeIA1gVQgBgBA2gUQA3gUAPgDQAXgHAaADQgWAQgWAHQgOADg3AUQg2ASAAABIh3A0QgUAJgbABQATgSAVgKg");
	this.shape_129.setTransform(560.6,220.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#E1D3C3").s().p("Ah+AmIBEgfIA1gWQgBgBA1gUQA4gVAOgEQAOgEALAAIAZAAQgXARgVAGQgPAEg2AUQg1ATAAABIh3A2QgTAJgcACQAUgUATgJg");
	this.shape_130.setTransform(558.7,215.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#E1D3C3").s().p("Ah9AoIBDggIA0gXQAAgBA1gVQA3gWAOgEQAYgGAaACQgXAQgVAHQgOADg2AWQg1AUAAABQAAgBh2A4QgTAJgdADQAVgVATgIg");
	this.shape_131.setTransform(556.8,211);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#E1D3C3").s().p("Ah8ApIBCggIA0gYQgBgBA1gWQA3gXAOgEQAWgGAcABQgXARgUAHQgOAEg3AWQg0AUAAABIgzAZIhCAhQgUAJgcADQATgUAVgKg");
	this.shape_132.setTransform(554.8,206.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#E1D3C3").s().p("Ah8ArIBCgiIA0gYQgBgBA0gXQA3gXAOgEQAWgHAcABQgWARgVAHQgOAEg2AXQg1AVABABIh0A7QgUAKgcADQAVgVASgJg");
	this.shape_133.setTransform(552.7,201.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#E1D3C3").s().p("Ah7AtIBBgjIAzgZQAAgBA0gXQA2gYAPgFQAVgHAbABQgVASgVAHQgOAEg2AYQg0AVABABIhzA9QgMAGgLADQgJADgQACQASgUAVgLg");
	this.shape_134.setTransform(550.6,196.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#E1D3C3").s().p("Ah6AuIBAgjIAzgaQAAgBAzgYQA2gZAPgEQAWgIAaABQgUARgVAIQgOAFg2AYQgzAWAAABIhyA+QgUALgbAEQASgVAUgLg");
	this.shape_135.setTransform(548.4,191.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#E1D3C3").s().p("Ah6AwIBAgkIAzgbQgBgBAzgYQA2gaAOgFQAWgIAbAAQgVATgVAHQgOAFg0AZQg0AXABABIgxAcIhAAkQgUALgbAEQARgVAUgLg");
	this.shape_136.setTransform(546.2,187.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#E1D3C3").s().p("Ah5AxIByhAQgBgBAzgZQA1gbAOgFQAWgIAbAAQgTASgWAIQgOAFg0AaQg0AYABABIgxAdIg/AlQgUALgbAEQARgVAUgMg");
	this.shape_137.setTransform(543.9,182.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#E1D3C3").s().p("Ah4AzIA/gmIAxgcQAAgBAygaQA1gbAOgFQAWgIAbgBQgUASgVAJQgOAFg0AbQgzAYABABIhvBDQgUAMgbAEQARgVAUgMg");
	this.shape_138.setTransform(541.6,178.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#E1D3C3").s().p("Ah4A1IA/gnIAxgdQgBgBAzgbQA0gbAOgFQAWgJAbgBQgWATgTAIQgOAGgzAbQgzAZABABIhuBEQgTAMgcAFQARgWATgLg");
	this.shape_139.setTransform(539.2,173.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#E1D3C3").s().p("Ah3A2IA+gnIAxgeQgBAAAygcQA0gdAOgFQAVgJAbgCQgTAUgVAJQgNAFg0AcQgyAaABABIgvAeIg+AoQgVAMgZAGQAQgWATgNg");
	this.shape_140.setTransform(536.7,169.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#E1D3C3").s().p("Ah2A4QBshHABABQAAgBAygdQAzgdAOgFQAUgJAcgDQgSATgVAKQgOAGgzAdQgyAaABABIgvAfIg9ApQgUANgaAFQAQgVATgOg");
	this.shape_141.setTransform(534.2,164.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#E1D3C3").s().p("Ah1A5IA9gpIAvgfQAAAAAxgdQAzgfAOgFQAVgJAbgDQgTATgUALQgOAFgyAeQgyAbABABQgBgBhqBKQgSAMgcAHQAQgXATgNg");
	this.shape_142.setTransform(531.6,160.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#E1D3C3").s().p("Ah0A8IA8grIAvgfQgBgBAxgeQAygfAOgGQAVgJAbgDQgTAUgUAKQgNAGgyAeQgxAcABABIhqBKQgTANgaAHQAOgWAUgNg");
	this.shape_143.setTransform(529,156.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#E1D3C3").s().p("AhzA9IA7grIAvggQgBgBAwgfQAygfAOgGQAVgKAbgDQgTAUgUAKQgNAGgxAfQgxAdABABIgtAhIg8ArQgSAMgbAIQAQgXASgNg");
	this.shape_144.setTransform(526.4,151.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#E1D3C3").s().p("AhzA/IA7gsIAvghQgBgBAvgfQAyggAOgGQAVgKAagFQgSAVgUALQgNAGgxAfQgwAeABABIgtAhIg7AsQgSAOgaAIQAOgXASgOg");
	this.shape_145.setTransform(523.6,147.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#E1D3C3").s().p("AhyBBIA6gtIAvgiQgCgBAwggQAxggAOgHQATgLAcgEQgTAWgSAKQgOAHgxAgQgvAeABAAIgsAjIg7AtQgTAOgZAIQAPgXARgOg");
	this.shape_146.setTransform(520.9,143.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#E1D3C3").s().p("AhxBCIA6guIAtgiQgBgBAvghQAxggANgHQAWgMAZgEQgSAWgTALQgNAGgwAhQgvAfABABIgsAjIg6AuQgRANgaAIQAOgXARgOg");
	this.shape_147.setTransform(518,139.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#E1D3C3").s().p("AhvBEQAPgOBWhEQgBAAAugiQAxgiANgHQATgLAcgFQgTAWgSALQgNAHgvAhQgvAgABABIhlBSQgRAOgaAJQAOgYASgOg");
	this.shape_148.setTransform(515.2,135.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#E1D3C3").s().p("AhvBFIA4gvIAtgkQgBgBAugiQAwgiANgHQAUgMAagFQgRAVgTAMQgNAHgvAiQguAhABAAIgrAlIg4AvQgSAPgZAJQAMgXASgQg");
	this.shape_149.setTransform(512.2,131.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#E1D3C3").s().p("AhtBHQAPgPBThGIAtgjQAwgkAMgHQAUgLAbgGQgRAWgTAMQgMAHgvAjIgtAhIhiBWQgRAPgaAJQAOgZARgOgAABAAIAAAAIAAAAg");
	this.shape_150.setTransform(509.2,127.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#E1D3C3").s().p("AhsBJQBghXABAAIAAAAIAAAAQAAgBAsgjQAvgkANgHQASgMAcgGQgRAWgSAMQgNAIguAjQgtAiABABIhhBWQgQAPgaAKQANgYARgPg");
	this.shape_151.setTransform(506.2,123.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#E1D3C3").s().p("AhrBKIA2gyIAqglQgBgBAsgkQAvglANgHQAUgOAZgFQgQAWgSANQgNAHgtAkQgtAjABAAQhPBJgQAQQgQAOgaALQAOgaAPgOg");
	this.shape_152.setTransform(503.1,119.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#E1D3C3").s().p("AhqBMIA1gzIAqgmQgBgBAsgkQAtgmANgHQASgNAbgHQgPAXgTAMQgMAIgtAkQgsAkABAAQgBAAhcBaQgSAQgZAKQAMgYARgQg");
	this.shape_153.setTransform(500,115.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#E1D3C3").s().p("AhpBOIA0g0IAqgnQgBgBAqglQAugmANgIQASgNAbgHQgPAWgTANQgMAJgtAlQgrAkAAAAQAAAAhbBbQgQAQgaALQANgZAPgPgAAAAAIAAAAIAAAAg");
	this.shape_154.setTransform(496.9,112.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#E1D3C3").s().p("AhoBPIA0g0IAogoQgBAAArgmQAsgoANgHQASgNAbgIQgQAYgRAMQgNAJgrAlQgrAlABABIgoAnIgzA1QgPAPgaAMQAMgZAPgQg");
	this.shape_155.setTransform(493.6,108.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#E1D3C3").s().p("AhnBRIAzg1IAogpQgBAAAqgmQAsgoAMgJQATgOAagHQgIANgGAHQgIAJgKAIQgNAIgrAnQgqAlABABQgBgBhYBeQgRARgYALQAMgZAOgQg");
	this.shape_156.setTransform(490.4,105);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#E1D3C3").s().p("AhlBSIAxg2IAogpQgBAAApgnQArgoAMgJQASgNAbgJQgOAYgSANQgMAIgqAoIgqAmIhXBfQgPARgZAMQALgaAPgQg");
	this.shape_157.setTransform(487.1,101.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#E1D3C3").s().p("AhkBUIBXhgQgBgBApgoQArgpAMgIQASgOAagJQgOAYgSAOQgLAIgqAoQgpAnAAAAIgkAqIgyA2QgOARgZANQAJgZAQgRg");
	this.shape_158.setTransform(483.7,98);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#E1D3C3").s().p("AhjBVIAwg3IAngqQgBgBAngoQAqgqAMgJQATgPAZgIQgOAYgRAOQgMAJgpApQgoAnAAAAIgkArIgwA3QgOARgZANQALgaANgRgAAAAAIAAAAIAAAAg");
	this.shape_159.setTransform(480.3,94.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#E1D3C3").s().p("AhhBXIAvg4IAlgrQgBAAAngpQAqgrAMgJQARgOAagKQgOAZgQAOQgMAJgpApQgnAoAAAAIhSBkQgQARgXANQAKgbAOgQg");
	this.shape_160.setTransform(476.9,91.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#E1D3C3").s().p("AhgBYIAug5IAlgrQgBgBAngpQAogrAMgJQARgOAagLQgNAZgRAOQgLAJgoAqQgnApABAAIgkAsIguA5QgOARgYAOQAKgbANgRg");
	this.shape_161.setTransform(473.4,88);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#E1D3C3").s().p("AhfBaIAtg6IAkgrQgBgBAngrQAogrALgJQASgQAYgKQgMAZgQAPQgLAJgoArQgmApAAAAQAAAAhPBmQgOARgXAOQAIgaANgRg");
	this.shape_162.setTransform(469.9,84.8);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#E1D3C3").s().p("AhdBbIAsg6IAjgsQgBgBAmgrQAngsAMgKQAQgPAZgKQgMAZgQAOQgLAKgnArQglAqABAAIgiAtIgsA6QgOASgXAOQAHgZAOgTg");
	this.shape_163.setTransform(466.3,81.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#E1D3C3").s().p("AhbBdIArg7IAigtQgBgBAlgrQAmgtAMgKQARgQAYgKQgMAZgQAPQgLAKglAsQglAqABAAIhNBoQgOATgWAOQAHgaAOgSg");
	this.shape_164.setTransform(462.7,78.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#E1D3C3").s().p("AhaBeIAqg8IAigtQgBgBAkgsQAmgtALgKQARgQAYgLQgMAagPAOQgLAKglAtIgkArIhKBqQgNASgXAPQAHgaANgTg");
	this.shape_165.setTransform(459,75.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#E1D3C3").s().p("AhZBgIBKhrQgBAAAjgtQAmguALgKQAQgQAYgMQgLAagPAPQgKAKglAtQgjAsAAAAIhIBrQgNATgWAPQAFgaANgTg");
	this.shape_166.setTransform(455.4,72.6);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#E1D3C3").s().p("AhXBiQALgTA9hZQgBgBAjgtQAkgvALgKQAPgQAZgNQgMAbgOAPQgKALgkAtQgiAsAAAAQAAAAhHBsQgMATgWAQQAGgbAMgSg");
	this.shape_167.setTransform(451.6,69.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#E1D3C3").s().p("AhVBjIAng+IAfgvQgBgBAiguQAkgvAKgKQAPgQAZgNQgKAZgPAQQgLALgiAuQgiAtABAAIgeAvIgnA+QgMATgXAQQAHgcALgRg");
	this.shape_168.setTransform(447.8,66.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#E1D3C3").s().p("AhTBkQAKgTA6hbQgBAAAhgvQAjgvAKgLQAQgRAXgNQgKAbgOAQQgKAKgiAuQghAtAAABQAAAAhDBvQgLASgWARQAFgcAMgSgAAAAAIAAAAIAAAAg");
	this.shape_169.setTransform(444,64.2);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#E1D3C3").s().p("AhRBlIAkg/IAegvQgBgBAggwQAigvAKgLQAPgRAYgOQgKAbgOAQQgKALghAvQggAuAAAAIhBBvQgLATgWARQAGgaALgUg");
	this.shape_170.setTransform(440.2,61.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#E1D3C3").s().p("AhQBnIBAhwQgBgBAggwQAhgwAKgLQAPgTAXgMQgJAagOARQgJALghAwQgfAuAAAAIgbAwIgkBAQgMAVgUAQQAFgcAKgSg");
	this.shape_171.setTransform(436.3,58.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#E1D3C3").s().p("AhOBoIA+hxQgBgBAegwQAhgxAKgLQAOgSAXgOQgIAagNASQgLALgfAwQgeAvAAAAIgaAxIgjBAQgLAUgUASQAEgbAKgUg");
	this.shape_172.setTransform(432.4,56.4);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#E1D3C3").s().p("AhNBpIAihBIAbgxQgBAAAdgxQAggyAJgLQAOgSAYgOQgIAbgNAQQgKAMgfAwQgdAwAAAAQAAAAg7ByQgLAVgUARQAEgcAJgTg");
	this.shape_173.setTransform(428.5,53.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#E1D3C3").s().p("AhLBqIAhhBIAagyQgBAAAcgxQAfgzAJgLQAPgTAWgOQgHAagOASQgJALgeAyQgcAwAAAAIg5BzQgLAVgTASQADgbAJgVg");
	this.shape_174.setTransform(424.5,51.6);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#E1D3C3").s().p("AhIBsIAehCIAZgyQgBgBAcgyQAegyAKgMQAMgRAYgRQgJAcgMARQgIAMgeAxQgbAxAAAAIgYAyIgfBDQgKATgTATQACgaAKgVg");
	this.shape_175.setTransform(420.5,49.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#E1D3C3").s().p("AhHBtIAfhCIAYgzQgCgBAbgyQAdgzAJgMQANgSAXgQQgHAbgMASQgJALgcAzQgbAxAAAAIgXAzIgeBCQgJAUgUAUQADgcAIgUg");
	this.shape_176.setTransform(416.4,47);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#E1D3C3").s().p("AhFBuIAdhDIAXgzIABAAIgBAAQgBAAAagzQAcg0AJgMQANgTAWgPQgIAcgLARQgIALgcAzQgZAyAAAAIgzB2QgJAUgTAUQACgbAIgVg");
	this.shape_177.setTransform(412.3,44.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#E1D3C3").s().p("AhDBwIAchEIAWgzIABAAIgBAAQgBgBAZgzQAbg0AJgMQANgUAVgQQgFAbgNATQgIAMgbAzQgYAyAAAAIgVA0IgcBDQgIAVgTAUQACgdAHgTg");
	this.shape_178.setTransform(408.2,42.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#E1D3C3").s().p("AhBBxIAwh4QgBgBAYgzQAag1AJgMQANgUAUgQQgFAbgLATQgJAMgZAzQgYAzAAAAIgvB4QgHAVgTAUQABgcAHgUg");
	this.shape_179.setTransform(404,40.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#E1D3C3").s().p("Ag/ByIAZhFIAVg0QgBAAAXg0QAZg2AIgMQAMgUAVgQQgFAbgLATQgIALgYA1QgXAzAAAAIgsB4QgIAWgSAUQAAgbAHgVg");
	this.shape_180.setTransform(399.8,38.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#E1D3C3").s().p("Ag8BzIAYhEIATg1QgBgBAWg0QAYg2AIgMQALgTAVgTQgDAagMAVQgHAMgYA1QgWAzAAAAIgqB5QgHAWgSAVQgBgcAIgVg");
	this.shape_181.setTransform(395.6,37);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#E1D3C3").s().p("Ag6B0IAXhFIASg1QgBAAAVg1QAXg2AIgNQALgUAUgSQgEAbgKAUQgHAMgXA2QgVAzAAAAQAAAAgnB6QgIAWgRAVQgBgdAHgUg");
	this.shape_182.setTransform(391.3,35.2);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#E1D3C3").s().p("Ag4B1IAVhFIARg2QgBAAAVg1QAWg4AHgMQALgUAUgSQgEAcgJATQgIAMgVA2QgUA0AAAAIgQA1IgVBGQgHAWgRAVQgBgbAGgWg");
	this.shape_183.setTransform(387.1,33.6);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#E1D3C3").s().p("Ag2B3IAkh8QgBgBATg1QAVg3AIgOQALgUATgSQgDAbgKAUQgHANgUA2QgTA0AAAAIgjB7QgGAVgQAXQgCgbAFgVg");
	this.shape_184.setTransform(382.8,32);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#E1D3C3").s().p("AgzB3IAShGIAQg2QgCgBATg2QAUg3AHgNQAKgUATgTQgCAcgJATQgHANgUA2QgSA1AAAAIggB8QgGAVgQAXQgDgbAGgWg");
	this.shape_185.setTransform(378.4,30.4);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#E1D3C3").s().p("AgxB4IARhHIAOg2QgBAAASg2QASg4AHgNQAKgUATgUQgCAcgJATQgHAOgSA2QgRA1AAAAIgNA2IgRBHQgFAVgQAXQgDgcAFgVg");
	this.shape_186.setTransform(374,29);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#E1D3C3").s().p("AgvB5IAQhHIANg2QgBgBARg2QARg5AHgNQAIgTAUgVQgCAcgIAUQgHANgRA2QgQA2AAAAIgMA2IgPBHQgGAXgPAWQgDgdAEgUg");
	this.shape_187.setTransform(369.6,27.6);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#E1D3C3").s().p("AgsB6IAOhHIAMg3QgBAAARg3QAPg5AHgNQAIgVATgUQgBAcgIAUQgGANgRA4QgPA1AAAAIgKA3IgPBHQgEAUgPAZQgEgbAEgWg");
	this.shape_188.setTransform(365.2,26.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#E1D3C3").s().p("AgpB7IAXh/QgBAAAPg3QAPg5AGgOQAJgWASgSQgBAdgHASQgGANgQA4QgOA2AAAAIgJA3IgNBHQgFAYgOAVQgEgZAEgXg");
	this.shape_189.setTransform(360.7,25.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#E1D3C3").s().p("AgnB8IAMhIIAKg3QgCAAAPg4QANg5AGgNQAIgWASgUQAAAcgIAUQgIAUgYBnIgVB/QgDAVgOAYQgFgaADgWg");
	this.shape_190.setTransform(356.2,24);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#E1D3C3").s().p("AgkB9IAKhIIAJg4QgBAAANg4QAMg5AGgNQAHgVASgWQABAbgHAVQgIAUgXBoQgBAAgRB/QgDAWgNAYQgGgcADgUg");
	this.shape_191.setTransform(351.7,23);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#E1D3C3").s().p("AghB9IAJhIIAHg3QAUhrAIgVQAHgWARgVQABAbgHAWQgHAUgVBoQgBAAgOB/QgBAOgEALIgKAWQgHgZADgYg");
	this.shape_192.setTransform(347.1,22.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#E1D3C3").s().p("AgfB+IAIhJIAGg3QgBAAALg4QAKg6AFgOQAHgVAQgWQADAbgHAVQgHAUgTBpQgBgBgLCBQgCANgDAMIgKAVQgHgbACgVg");
	this.shape_193.setTransform(342.6,21.2);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#E1D3C3").s().p("AgcB+IAGhIIAFg4QARhrAGgVQAGgWAQgWQACAbgFAWQgHAUgQBpIgEA3IgGBJQgCAWgMAZQgHgbABgWg");
	this.shape_194.setTransform(338,20.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#E1D3C3").s().p("AgZB/IAJiBQgBABAIg5QAJg7AEgNQAGgWAPgWQADAbgFAVQgHAVgOBpIgDA4IgEBIQgCAXgLAYQgIgaABgWg");
	this.shape_195.setTransform(333.3,19.8);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#E1D3C3").s().p("AgWCAIAGiBQAMhsAFgVQAGgXAPgWQADAbgFAWQgGAVgMBpIgCA4IgDBIQgBAWgLAZQgIgaABgVg");
	this.shape_196.setTransform(328.7,19.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#E1D3C3").s().p("AgUCAIAChJIACg4QAKhsAGgVQAFgYAOgVQADAagEAXQgGAUgKBqIgCA4IAABIQgBAXgKAZQgJgcAAgUg");
	this.shape_197.setTransform(324.1,18.7);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#E1D3C3").s().p("AgRCAIAAhIIABg4QAIhsAGgWQADgWAPgXQAEAbgEAWQgGAUgHBqQgBAAAACAQAAAXgJAZQgKgaAAgWg");
	this.shape_198.setTransform(319.4,18.3);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#E1D3C3").s().p("AgNCBIgChJIAAg4QAGhsAFgWQAEgWANgXQAFAbgEAVQgFAVgFBqQgCAAADCBQABAVgJAaQgKgZAAgWg");
	this.shape_199.setTransform(314.7,18);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#E1D3C3").s().p("AgJCBIgDhJIgBg4QADhsAFgVQADgVANgZQAGAbgEAVQgEAVgEBqQgBAAAGCAQAAAXgIAZQgKgYgBgXg");
	this.shape_200.setTransform(310,17.8);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#E1D3C3").s().p("AgFCBIgFhIIgCg5QABhsAFgVQADgXAMgXQAGAbgDAVQgEAVgCBqIADA4IAEBIQABAXgIAZQgKgZgBgWg");
	this.shape_201.setTransform(305.4,17.7);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#E1D3C3").s().p("AgECBIgJiBQgBhrAEgWQACgVAMgZQAGAbgCAVQgEAVABBqIAEA4IAGBIQABAWgIAaQgKgYgCgXg");
	this.shape_202.setTransform(300.8,17.6);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#E1D3C3").s().p("AgCCCIgHhIIgFg6QgDhrADgVQADgXALgYQAHAbgCAVQgEAVADBqIAFA3IAHBIQACAWgHAbQgLgZgCgVg");
	this.shape_203.setTransform(296,17.7);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#E1D3C3").s().p("AAACBIgJhIIgGg4QgFhrADgWQACgWAMgZQAGAagBAWQgCAWAEBpIAGA3IAIBJQACAVgGAbQgMgYgCgXg");
	this.shape_204.setTransform(291.3,17.9);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#E1D3C3").s().p("AABCBIgJhHIgHg4QgIhsADgWQACgWALgZQAHAaAAAWQgDAVAGBqQgBAAASB/QAEAWgHAaQgMgWgEgYg");
	this.shape_205.setTransform(286.5,18.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#E1D3C3").s().p("AADCCIgKhIIgIg4QgKhrACgWQABgWALgZQAJAagBAVQgCAWAIBpIAIA3IAMBIQADAUgGAcQgNgYgEgVg");
	this.shape_206.setTransform(281.8,18.4);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#E1D3C3").s().p("AAGCCIgMhIIgJg4QgMhrACgVQAAgWALgaQAJAZgBAXQgBAVAKBpIAJA3IANBHQAEAYgFAZQgOgYgEgVg");
	this.shape_207.setTransform(277.1,18.9);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#E1D3C3").s().p("AAICCIgOhHIgKg4QgOhrACgWQAAgXAKgYQAJAaAAAVQgBAVAMBpIALA3IAOBHQAEAWgEAaQgPgXgEgVg");
	this.shape_208.setTransform(272.5,19.4);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#E1D3C3").s().p("AALCCIgbh/QgQhqABgWQAAgXAJgZQAKAaABAVQgBAWAOBoIAMA3IAQBGQAEAWgEAbQgPgXgEgVg");
	this.shape_209.setTransform(267.9,20);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#E1D3C3").s().p("AANCBIgQhGIgNg3QgShqABgWQgBgXAJgZQAKAaABAVQAAAVAQBoIANA2IARBHQAFAWgEAaQgOgVgGgXg");
	this.shape_210.setTransform(263.3,20.7);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#E1D3C3").s().p("AAPCBIgRhGIgOg3QgUhpAAgWQgBgYAIgZQALAaABAVQAAAVATBoIAOA2IASBGQAFAVgCAcQgQgWgGgWg");
	this.shape_211.setTransform(258.8,21.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#E1D3C3").s().p("AARCBIgThGIgOg3QgXhpAAgWQgBgWAHgaQAMAZACAWQAAAVAUBnIAPA2IAUBGQAGAVgCAbQgRgXgGgUg");
	this.shape_212.setTransform(254.3,22.4);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#E1D3C3").s().p("AAUCBIgVhGIgQg2QgYhoAAgWQgCgXAHgaQAMAZACAVQABAWAWBmIAQA2IAVBFQAGAVgBAbQgRgWgGgUg");
	this.shape_213.setTransform(249.8,23.3);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#E1D3C3").s().p("AAWCAIgnh7QgahogBgWQgDgXAHgZQAMAXADAWQABAWAZBmIARA1IAWBFQAHAWgBAaQgRgVgHgVg");
	this.shape_214.setTransform(245.3,24.4);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#E1D3C3").s().p("AAYCAIgph6QgchogCgWQgDgWAHgaQANAYADAVQABAWAbBlQgBAAAqB5QAIAVgBAbQgSgVgHgUg");
	this.shape_215.setTransform(240.9,25.5);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#E1D3C3").s().p("AAaB/IgZhDIgSg2QgfhngBgVQgDgWAFgcQANAYAEAWQACAVAcBlQAAAAAsB5QAIATAAAdQgSgWgIgUg");
	this.shape_216.setTransform(236.5,26.7);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#E1D3C3").s().p("AAcB/IgbhEIgTg1QgghmgCgWQgEgWAGgbQAOAaADATQACAWAfBkIAUA0IAaBEQAIAUAAAbQgRgSgJgWg");
	this.shape_217.setTransform(232.1,28);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#E1D3C3").s().p("AAeB+IgchCIgUg1QgihmgDgVQgEgYAFgZQAPAYADAUQADAWAhBjIAUA0IAcBDQAJAVAAAaQgSgTgJgVg");
	this.shape_218.setTransform(227.8,29.4);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#E1D3C3").s().p("AAgB9IgdhBIgVg1QgkhkgDgXQgEgVAEgbQAOAXAFAVQADAVAjBjIAVAzIAdBDQAJAUABAbQgTgTgJgVg");
	this.shape_219.setTransform(223.4,30.9);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#E1D3C3").s().p("AAiB9IgehCIgWgzQgmhlgEgVQgEgWAEgbQAOAXAFAVQAEAVAlBjIAWAyIAeBCQAJATACAcQgTgTgKgUg");
	this.shape_220.setTransform(219.1,32.4);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#E1D3C3").s().p("AAkB8IgghAIgWg0QgphjgDgWQgFgWADgbQAPAXAGAVQAEAVAmBhIAXAzIAgBBQAKAUACAbQgUgTgKgUg");
	this.shape_221.setTransform(214.9,34);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#E1D3C3").s().p("AAnB7IghhAIgYgyQgqhkgEgVQgGgXADgZQAQAVAGAWQACAOAVA1QAUAzACgBIAYAyIAgBAQAKAVADAbQgUgTgKgUg");
	this.shape_222.setTransform(210.6,35.8);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#E1D3C3").s().p("AApB7IgihAIgZgyQgCABgVg0QgXg2gCgPQgHgWADgaQAQAWAGAVQAFAVAqBfIAZAyIAiBAQAKAUADAaQgUgSgKgTg");
	this.shape_223.setTransform(206.4,37.5);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#E1D3C3").s().p("AArB6Ig9hxQguhhgFgVQgGgWACgbQARAXAGATQAFAWAsBeQgCAAA/BxQAKATAEAbQgVgSgKgTg");
	this.shape_224.setTransform(202.2,39.4);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#E1D3C3").s().p("AAtB5Igkg+IgbgyQgBABgYgzQgYg1gDgOQgHgWABgbQARAWAHAUQAFAVAuBeIAbAxIAkA+QALATAEAbQgVgRgLgTg");
	this.shape_225.setTransform(198,41.4);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#E1D3C3").s().p("AAvB4Igmg9IgbgxQgCABgYgzQgZg0gEgPQgHgUABgcQASAWAHAUQAEAOAYAzQAXAxACgBIAbAxIAmA9QALAUAFAaQgWgRgLgTg");
	this.shape_226.setTransform(193.9,43.4);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#E1D3C3").s().p("AAxB4QhEhtABgBQgBABgZgyQgag0gEgOQgIgXABgZQASAVAHAUQAGAUAxBdQgCAABFBsQALASAGAbQgWgQgMgSg");
	this.shape_227.setTransform(189.7,45.5);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#E1D3C3").s().p("AAzB2Igng8IgegwQgBACgagyQgbg0gFgOQgHgWAAgaQASAVAIATQAGAVAzBcQgCABBGBqQAMASAGAbQgVgPgNgUg");
	this.shape_228.setTransform(185.7,47.7);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#E1D3C3").s().p("AA1B1Igpg7IgegvQg2hcgGgWQgJgUAAgcQASAVAJAUQAEANAbAzQAaAvACAAIAeAuIAoA8QANASAGAbQgYgSgLgRg");
	this.shape_229.setTransform(181.6,49.9);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#E1D3C3").s().p("AA3B1Igqg7IgegvQg4hbgHgVQgIgVgBgbQASATAJAVQAHAUA2BaIAeAuIArA6QAMAUAHAZQgXgQgNgRg");
	this.shape_230.setTransform(177.6,52.2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#E1D3C3").s().p("AA5B0Igrg6IgfguQg6hbgHgVQgJgVgBgaQATAVAJASQAHAUA4BZIAfAtIArA6QANATAHAZQgXgPgNgRg");
	this.shape_231.setTransform(173.7,54.6);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#E1D3C3").s().p("AA8BzQgKgLgigvIghgtQg7hZgHgVQgKgUgCgbQATATAKATQAIAUA5BYQgBAABMBmQANARAJAaQgWgOgOgRg");
	this.shape_232.setTransform(169.7,57.1);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#E1D3C3").s().p("AA9ByIgsg5IgigsQgCABgegvQgfgxgGgOQgKgVgBgbQAUAUAJATQAIATA6BXIAiAsIAsA5QAPASAHAZQgXgOgOgRg");
	this.shape_233.setTransform(165.8,59.6);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#E1D3C3").s().p("AA/BxIgug4IgigsQgBABgfgvQgggwgGgOQgKgUgDgbQAUATAKATQAGAOAfAuQAeAuACgBIAiArIAtA4QANARAKAaQgXgMgPgSg");
	this.shape_234.setTransform(161.9,62.3);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#E1D3C3").s().p("ABBBwIgvg4IgjgrQgBABggguQghgwgGgNQgKgUgDgbQAUARAKAUQAGANAgAvQAfAtACgBIBRBiQANAQAKAaQgZgOgNgPg");
	this.shape_235.setTransform(158.1,65);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#E1D3C3").s().p("ABDBuIgwg2IgjgrQgCABgggtQgigwgGgNQgKgUgEgbQAUATALASQAJAUA/BTIAjArIAwA2QAOAQAJAZQgXgNgPgQg");
	this.shape_236.setTransform(154.3,67.7);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#E1D3C3").s().p("ABFBtIgxg1IglgqQhChUgJgUQgKgUgFgbQAUARAMAUQAGANAhAuQAhArACgBIAjAqIAxA1QAOAQAKAaQgYgNgOgQg");
	this.shape_237.setTransform(150.6,70.5);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#E1D3C3").s().p("ABGBsIhWheQhEhTgJgUQgMgUgEgaQAVARALATQAHANAiAtQAhArACgBIAkApIAyA1QAPARAKAYQgYgLgQgRg");
	this.shape_238.setTransform(146.8,73.4);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#E1D3C3").s().p("ABIBqIgzgzIglgpQhFhSgKgTQgMgUgEgaQAVARALASQALATBDBQIAlAoIAyA0QAQARAKAYQgYgLgQgRg");
	this.shape_239.setTransform(143.2,76.4);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#E1D3C3").s().p("ABKBqIgzgzIgmgoQgCABgjgrQglgugHgNQgLgTgGgaQAWARALASQAHANAkArQAiAqACgBIAmAoIAyAzQAQAPALAZQgZgLgPgPg");
	this.shape_240.setTransform(139.5,79.4);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#E1D3C3").s().p("ABLBoIhbhZQhHhQgLgTQgMgTgFgaQAWAQALASQAHAMAlAsQAjApACgBIAmAoIA0AxQAQARALAXQgYgKgRgQg");
	this.shape_241.setTransform(135.9,82.5);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#E1D3C3").s().p("ABNBnIg1gxIgngnQgCABglgpQgmgsgHgNQgNgTgFgaQAWARAMAQQAKATBHBNIBcBXQAPANANAaQgYgJgRgQg");
	this.shape_242.setTransform(132.4,85.7);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#E1D3C3").s().p("ABPBmIg2gwIgognQhKhNgLgTQgMgSgHgaQAWAPANASQALASBIBLIAoAmIA1AwQAQAPAMAYQgZgKgQgOg");
	this.shape_243.setTransform(128.8,88.9);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#E1D3C3").s().p("ABQBkIg2guIgpgmQhLhNgMgSQgMgRgHgcQAXAQAMARQAIAMAmAqQAlAnACgBIAoAlIA2AwQARAPAMAYQgagLgQgOg");
	this.shape_244.setTransform(125.4,92.2);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#E1D3C3").s().p("ABSBjIg3guIgpglQgCABgngoQgogqgIgNQgNgSgHgZQAYAPAMAQQALASBKBJIAqAlIA2AuQARAPANAXQgagJgQgOg");
	this.shape_245.setTransform(122,95.6);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#E1D3C3").s().p("ABUBiIg4gtIgqglQgCACgngoQgpgpgIgNQgNgRgIgaQAYAPANAQQALASBLBIIAqAkIA4AtQARAPANAWQgZgIgRgOg");
	this.shape_246.setTransform(118.6,99);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#E1D3C3").s().p("ABVBhIg5gtIgqgkQgBACgpgnQgpgpgIgMQgOgSgIgZQAYAOANAQQAIAMAoAoQAnAmACgBIAqAjIA4AsQARAOAOAXQgbgJgQgMg");
	this.shape_247.setTransform(115.2,102.5);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#E1D3C3").s().p("ABWBgIg5gsIgrgjQhQhIgMgSQgOgQgJgbQAYAOANARQAJALApAoQAnAlACgBIAqAiIA5AsQARAMAPAYQgZgHgTgNg");
	this.shape_248.setTransform(111.9,106);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#E1D3C3").s().p("ABYBeIg6grQgsghAAgBQgBABgpglQgrgogIgMQgOgRgJgZQAYANANAQQAJAMApAmQAoAlACgBIArAiIA5AqQARAMAPAYQgZgHgSgNg");
	this.shape_249.setTransform(108.7,109.6);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#E1D3C3").s().p("ABZBdIg6gqIgsgiQhThEgNgSQgOgSgJgYQAYANAOAQQAJAMAqAlQAoAkACgBQgBABBmBKQARAMAQAXQgZgGgTgNg");
	this.shape_250.setTransform(105.5,113.3);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#E1D3C3").s().p("ABaBbIg7gpIgsggQhThEgOgRQgPgSgJgYQAZANAOAQQAJALAqAlQApAjACgBIAsAgIA7ApQARANAQAWQgZgGgUgNg");
	this.shape_251.setTransform(102.3,117);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#E1D3C3").s().p("ABcBaIhphIQgBABgrgjQgtgmgJgMQgPgQgJgZQAYAMAPAQQANAQBRBBIBpBIQATAMAPAWQgbgGgSgMg");
	this.shape_252.setTransform(99.2,120.8);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#E1D3C3").s().p("ABdBZIg8goIgugfQAAACgtgkQgsglgKgLQgPgRgKgYQAZANAOAOQAJAMAsAjQAqAjACgCIAtAgIA7AmQASAMARAWQgagFgTgMg");
	this.shape_253.setTransform(96.2,124.6);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#E1D3C3").s().p("ABeBXIg9gmIgugfQgBACgsgiQgtgkgJgMQgQgQgLgZQAZAMAPAPQAJALAsAjQAsAiAAgCIAuAfIA8AlQAUANAPAVQgagFgTgMg");
	this.shape_254.setTransform(93.2,128.5);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#E1D3C3").s().p("AB2BhQgLgEgLgHIg+glQgugeAAgBQhXg9gOgSQgQgPgLgZQAZAMAPAPQAOAQBVA8QgCACBtBBQATAMAQAVQgQgDgHgCg");
	this.shape_255.setTransform(90.2,132.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#E1D3C3").s().p("ABhBUIhthBQgBABgtghQgvgjgJgLQgPgOgNgaQAaALAPAPQAJALAuAiQAsAgABgCIAuAdIA+AkQATAMARAVQgagFgUgLg");
	this.shape_256.setTransform(87.3,136.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#E1D3C3").s().p("ABiBTIg+gjQgwgcABgBQgBACgughQgvgigKgLQgRgQgLgYQAZALAQAPQAKAKAtAhQAtAgABgCIAvAcIA+AkQATALARAVQgcgFgSgKg");
	this.shape_257.setTransform(84.4,140.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#E1D3C3").s().p("ABjBSIg/gjIgvgcQgBABgugfQgwgigKgLQgQgPgMgYQAZALAQAOQAKALAuAgQAtAfABgCIAvAbIA/AjQATAMARATQgagDgUgKg");
	this.shape_258.setTransform(81.6,144.7);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#E1D3C3").s().p("ABkBQIhvg9QgBACgvgfQgvghgLgLQgQgPgMgXQAYAJARAOQAKALAvAgQAtAeABgCQgBABBvA8QATAJASAVQgZgDgVgKg");
	this.shape_259.setTransform(78.8,148.8);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#E1D3C3").s().p("ABlBPIhwg7Qhbg4gQgQQgQgOgNgYQAaAKAQANQAKALAvAfQAtAdACgBQgCABBxA5QATAKATAUQgbgDgUgJg");
	this.shape_260.setTransform(76.1,153);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#E1D3C3").s().p("ABmBNIhAggIgxgZQhcg3gPgPQgRgOgNgYQAZAKARANQALAKAuAeQAvAdABgBIAwAZIBAAgQATAJATAUQgbgDgUgJg");
	this.shape_261.setTransform(73.5,157.3);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#E1D3C3").s().p("ABoBLIhBgeIgxgZQhdg1gQgQQgRgOgNgXQAZAIARAOQAQAOBaA1IBxA2QAVALARATQgZgCgVgKg");
	this.shape_262.setTransform(70.8,161.7);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#E1D3C3").s().p("ABpBKIhBgeIgygYQgBACgwgdQgygegKgKQgRgNgOgYQAZAJARANQALAKAwAdQAvAbABgBIAxAYIBBAdQATAJATAUQgbgDgTgIg");
	this.shape_263.setTransform(68.3,166);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#E1D3C3").s().p("ABqBIIhCgdIgygXQgBACgwgbQgygdgMgLQgPgMgPgZQAZAIARAOQALAJAxAdQAvAaABgBQAAABByAyQAVAJATAUQgbgCgUgJg");
	this.shape_264.setTransform(65.8,170.5);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#E1D3C3").s().p("ABrBHIhCgcQgzgWAAgBQAAACgxgbQgzgcgLgKQgSgOgOgWQAbAIAQAMQALAJAxAcQAwAaABgBIAxAWIBCAcQAUAJAUASQgaAAgVgJg");
	this.shape_265.setTransform(63.4,174.9);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#E1D3C3").s().p("ABsBFIhDgbIgygVQgBABgxgaQgzgcgLgJQgSgNgPgXQAZAHATANQALAJAxAbQAwAZABgBIB0AwQAVAJATASQgbgBgUgIg");
	this.shape_266.setTransform(61,179.5);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#E1D3C3").s().p("ABsBEIhCgZIgzgWQAAACgzgZQgzgcgLgKQgSgMgPgXQAaAGASAOQALAJAxAaQAxAZABgCIAyAVIBCAaQAUAIAVASQgaAAgWgIg");
	this.shape_267.setTransform(58.7,184);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#E1D3C3").s().p("ABuBCIh3gtQhhgtgRgOQgTgNgOgWQAbAHARAMQALAJAyAaQAxAYABgCIAyAUIBDAZQAVAIAUASQgcAAgTgIg");
	this.shape_268.setTransform(56.4,188.6);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#E1D3C3").s().p("ABuBBIhDgYIg0gUQAAACgzgYQg0gagLgJQgTgOgPgVQAaAGASAMQAMAJAyAZQAxAXABgBQgBABB3AqQAUAHAVASIgHABQgXAAgSgHg");
	this.shape_269.setTransform(54.2,193.3);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#E1D3C3").s().p("ABvA/Ih3gqQgBACgzgXQg0gZgMgJQgTgNgPgWQAbAHARALQAMAJAzAYQAxAXABgCIAzATIBDAXQAWAHAUARIgHABQgWAAgTgHg");
	this.shape_270.setTransform(52,198);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#E1D3C3").s().p("ABwA+IhEgWIg0gTQgBACgzgXQg0gYgMgJQgUgMgPgVQAbAFASAMQALAIAzAYQAyAWABgCQgBABB4AnQAUAHAWARIgKAAQgWAAgQgFg");
	this.shape_271.setTransform(49.9,202.8);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#E1D3C3").s().p("ABxA8IhEgVIg1gSQAAACg0gXQg0gWgNgJQgSgMgRgVQAbAFASALQASANBgAmIA0ARIBEAVQAVAHAVARIgLAAQgVAAgQgFg");
	this.shape_272.setTransform(47.9,207.6);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#E1D3C3").s().p("ACKA/QgLgBgOgEIh4gkQgBACg0gXQg1gVgMgJQgTgMgQgVQAaAFATALQARAMBhAlIAzARIBFAUQAVAGAVAQIgQABIgHAAg");
	this.shape_273.setTransform(45.9,212.4);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#E1D3C3").s().p("ACLA9QgLgBgOgDIhEgTIg1gQQgBACg0gWQg1gVgMgJQgTgLgRgVQAbAFASAKQAMAIA0AWQAyAUABgCIA0AQIBFATQAUAGAWAQIgRABIgGAAg");
	this.shape_274.setTransform(44,217.3);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#E1D3C3").s().p("ACMA7QgMgBgNgDIhFgSQg1gPAAgBQAAACg0gVQg2gUgNgIQgTgLgRgVQAbAEASALQAMAIA0AUQA0ATAAgBQAAABB6AgQAVAGAVAQIgTABIgEAAg");
	this.shape_275.setTransform(42.1,222.3);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#E1D3C3").s().p("AB0A2IhFgSIg1gOQgBACg0gUQg3gUgMgIQgUgLgRgUQAcAEASAJQASAMBiAhIA0AOIBGASQAWAGAVAOIgVABQgOAAgNgCg");
	this.shape_276.setTransform(40.3,227.2);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#E1D3C3").s().p("AB0A0IhFgQIg1gOQgBACg0gTQg3gTgNgIQgSgKgTgVQAcAEASAJQANAIA0ATQAzASABgCIB6AeQAVAFAXAPIgVABQgPAAgNgCgAgBADIAAAAIAAAAg");
	this.shape_277.setTransform(38.6,232.2);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#E1D3C3").s().p("AB2AyIh7gcQgBACg1gTQg3gSgNgIQgTgLgSgTQAbADATAJQANAIA0ASQA0ASAAgCIA1ANIBFAPQAXAFAVAPIgVABQgOAAgMgCg");
	this.shape_278.setTransform(36.9,237.3);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#E1D3C3").s().p("AB2AwIh8gaQAAACg2gSQg2gSgNgHQgUgLgSgTQAcADASAJQANAHA1ASQAzARABgCIA1AMIBGAOQAVAFAXAOQgOACgMAAQgMAAgKgCg");
	this.shape_279.setTransform(35.3,242.4);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#E1D3C3").s().p("AB2AuIhGgNIg1gMQgBACg1gRQg3gQgNgIQgVgKgRgTQAZACAVAJQAMAHA2ARQA0AQAAgCQAAACB7AXQAWAFAWAOQgNACgNAAQgLAAgLgCg");
	this.shape_280.setTransform(33.8,247.6);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#E1D3C3").s().p("AB3AsIhGgMIg2gLQAAACg2gQQg3gQgOgIQgUgJgSgTQAZABAWAJQALAHA2ARQA1APAAgCIA1ALIBGAMQAXAEAWAOQgPADgJAAIgDAAQgKAAgLgCg");
	this.shape_281.setTransform(32.3,252.8);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#E1D3C3").s().p("AB4ArIhHgMIg2gKQAAACg2gQQg3gPgNgHQgWgKgRgSQAcACASAIQANAHA1AQQA1AOAAgCIA2AKIBGALQAWAEAWAOQgQADgOAAIgRgBg");
	this.shape_282.setTransform(30.9,258);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#E1D3C3").s().p("AB4ApIhGgLIg2gJQgBACg2gPQg4gOgNgHQgUgJgTgTQAaABAVAJQAMAGA2APQA1AOAAgCIB8AUQAWADAXANQgSAEgPAAIgPgBg");
	this.shape_283.setTransform(29.5,263.2);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#E1D3C3").s().p("AB5AnIh9gSQgBACg2gOQg3gOgOgHQgUgIgTgTQAbABATAIQANAHA2AOQA1ANAAgCIA2AIIBGAKQAWADAXANQgQAEgQAAIgPgBgAgBACIAAAAIAAAAg");
	this.shape_284.setTransform(28.3,268.5);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#E1D3C3").s().p("AB5AlIhGgIQg3gHAAgBQAAACg2gNQg5gNgNgHQgUgIgUgTQAbABAUAIQANAGA2AOQA1AMABgCQgBABB9APQAWADAXAMQgSAFgQAAIgOgBg");
	this.shape_285.setTransform(27,273.8);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#E1D3C3").s().p("AB6AjIhHgHIg2gHQgBACg2gNQg5gMgNgHQgUgIgUgSQAbAAAUAIQANAGA2ANQA1ALABgCIA1AHIBHAIQAWADAXAMIgWAEIgMABIgNgBgAAAABIAAAAIAAAAg");
	this.shape_286.setTransform(25.9,279.2);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#E1D3C3").s().p("AB7AhIhHgGIg3gHQAAACg4gLQg4gMgNgGQgUgIgVgSQAaAAAVAHQANAGA3AMQA1ALABgCIA1AGIBHAHQAVACAZAMQgTAGgTAAIgJgBg");
	this.shape_287.setTransform(24.8,284.6);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#E1D3C3").s().p("AB7AgIhHgGIg3gFQhpgSgUgJQgVgHgUgSQAbAAAUAHQANAGA3ALQA1AKABgCQAAACB8AJQAWACAYAMQgVAGgTAAIgHAAg");
	this.shape_288.setTransform(23.8,290);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#E1D3C3").s().p("AB7AeIh9gJQAAACg3gLQg5gLgOgFQgVgHgVgSQAbAAAVAGQANAGA2ALQA2AJAAgCIA2AFIBHAEQAXACAXALQgXAHgSAAIgGAAg");
	this.shape_289.setTransform(22.9,295.5);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#E1D3C3").s().p("AB8AcIhHgEIg3gEQAAACg4gKQg5gJgNgFQgUgHgWgSQAcgBAUAHQANAFA3AKQA1AJABgCIA2AEIBHADQAVACAZALQgWAHgUAAIgFAAg");
	this.shape_290.setTransform(22,301);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#E1D3C3").s().p("AB8AaIhHgDQg3gCAAgBQAAACg3gJQg6gJgNgFQgWgHgUgRQAagBAVAGQAOAFA3AJQA1AIABgCIA1ADIBIADQAXABAXALIgXAGQgJACgKAAIgFAAg");
	this.shape_291.setTransform(21.2,306.5);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#E1D3C3").s().p("AB9AYIhIgCIg3gCQhqgNgUgHQgVgGgVgRQAbgBAUAFQANAGA4AIQA1AHABgCIA2ADIBHABQAUABAaAKQgXAJgVAAIgCAAgAAAAAIAAAAIAAAAg");
	this.shape_292.setTransform(20.5,312.1);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#E1D3C3").s().p("AA1AVQg2gBgBgBQABADg4gIQg5gIgOgFQgWgGgVgPIAYgBQALAAANAEQANAFA3AHQA2AHABgCIA1ABIBHABQAXABAZAKQgZAJgXAAIgOAAIg5gBgAAAAAIAAAAIAAAAg");
	this.shape_293.setTransform(19.8,317.7);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#E1D3C3").s().p("AA2AUIg3gBQAAADg4gHQg5gHgNgGQgVgEgWgQQAZgDAWAFQAOAFA3AHQA2AGAAgCQAAABB9AAQAVAAAaAJQgYAKgXAAIgaAAIgtAAg");
	this.shape_294.setTransform(19.2,323.2);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#E1D3C3").s().p("AgBATQAAACg3gGQg5gHgPgFQgWgEgVgQQAbgDAUAFQAOAFA3AGQA3AFAAgBQAAABB9gCQAXAAAXAIQgYAKgWABIhHABIg3AAg");
	this.shape_295.setTransform(18.7,328.8);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#E1D3C3").s().p("AAAASQhrgHgVgHQgVgEgWgQQAcgDATAFQAOAEA4AGQA2AEAAgBIA2AAIBHgDQAUAAAbAIIgWAIQgLACgOABIhHACIguABIgIAAg");
	this.shape_296.setTransform(18.3,334.5);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#E1D3C3").s().p("AAAARQhrgFgVgHQgVgFgWgOQAbgEAVAFQATAGBoAFQAAACB9gGQAYgBAXAIQgZAKgWABIhHADIg1ACIgBAAg");
	this.shape_297.setTransform(17.9,340.1);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#E1D3C3").s().p("Ag3AOQg6gEgOgFQgWgFgWgOQAZgDAWAEQAOAEA4AEQA2AEAAgCIA2gCIBHgEQAVgBAaAIQgZAKgVABIhHAEIg3ACIgHABIgwgCg");
	this.shape_298.setTransform(17.6,345.8);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#E1D3C3").s().p("Ag3AOQg6gDgOgFQgUgEgYgOQAagEAVAEQAOAEA4ADQA2ADAAgCIA2gDIBHgFQAWgBAZAIQgYAKgWACIhHAFIg3ADQAAAAgIAAIgvgBg");
	this.shape_299.setTransform(17.4,351.5);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#E1D3C3").s().p("Ag3AOQg5gDgPgEQgVgEgXgOQAagEAVAEQAOAEA4ADQA2ABAAgBQAAABB9gLQAVgCAaAIQgXAKgXADIhGAGIg4ADQAAABgNAAIgqgBg");
	this.shape_300.setTransform(17.3,357.2);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#E1D3C3").s().p("Ag2AQQg6gCgOgEQgXgEgWgNQAOgDAJAAQALAAANACQAOAEA4ABQA2ACAAgCIA2gFIBHgHQAVgBAaAHQgZALgUACIhHAHIg4AEQABABgSAAIglAAg");
	this.shape_301.setTransform(17.2,362.8);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#E1D3C3").s().p("Ag2ARQg5gBgPgEQgXgEgWgMQAOgDAJgBQALAAAOACQAOAEA3ABQA2AAAAgCQAAACB8gPQAWgCAaAHQgYALgVADIhHAIIg3AFQAAABgjAAIgUAAg");
	this.shape_302.setTransform(17.2,368.3);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#E1D3C3").s().p("Ah+APQgWgEgXgMQAcgGAUADQAOAEA3AAQA2AAAAgCIA2gGIBGgJQAWgCAaAGQgXANgWACIhHAJIg3AFQAAACg3AAQg5AAgPgDgAAAgCIAAAAIAAAAg");
	this.shape_303.setTransform(17.3,373.8);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#E1D3C3").s().p("Ah+ARQgWgEgXgNQAZgFAXADQAOACA3AAQA2AAAAgCQAAACB8gSQAVgCAaAGIgVAKQgKAEgOAAIhFAKIg4AHQAAACg3ABIgNAAQguAAgNgDg");
	this.shape_304.setTransform(17.5,379.2);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#E1D3C3").s().p("Ah9ATQgYgDgVgNQAagFAVACQAOADA4gBQA1gCAAgBIA2gIIBGgKQAXgDAZAGQgXANgWADIhGAKIg3AHQAAACg3ACIgiAAQgdAAgJgCg");
	this.shape_305.setTransform(17.7,384.7);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#E1D3C3").s().p("Ah9AVQgWgDgXgMQAZgGAWABQAOADA4gCQA1gCAAgBQAAABB8gUQANgCAMABQAJAAANADQgYAOgUADIhGALIg3AIQAAACg3ACIgnAAQgYAAgJgBg");
	this.shape_306.setTransform(17.9,390.1);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#E1D3C3").s().p("Ah8AXQgXgDgXgMQAZgHAWACQAOADA4gDQA1gCAAgBIA2gJIBGgMQANgDALABQAJAAAOADQgWAOgWAEQgPACg3AJQg2AKgBgBQAAACg2ADIgvABQgSAAgHgBgAAAAAIAAAAIAAAAg");
	this.shape_307.setTransform(18.3,395.5);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#E1D3C3").s().p("Ah8AYQgVgCgZgMQAZgHAWACQAOACA4gDQA1gDAAgBQAAAAB7gXQAWgEAaAFQgVANgXAFIhGANIg2AJQAAACg3ADQghADgSAAQgPAAgGgCg");
	this.shape_308.setTransform(18.7,401);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#E1D3C3").s().p("Ah8AaQgYgCgWgLQAagIAVACQAOACA3gEQA2gEAAgBIA1gKIBGgOQAWgEAZAEQgWAPgWAEQgPAEg2AJQg2ALAAgBQAAACg3AFQgjACgTAAIgSgBg");
	this.shape_309.setTransform(19.3,406.4);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#E1D3C3").s().p("Ah7AcQgXgCgXgLQAagIAVABQAOADA3gFQA1gFAAgBQAAABB7gaQAVgFAaAEQgWAPgVAFIhFAOIg3ALQABACg3AFQglADgTAAIgQgBg");
	this.shape_310.setTransform(19.8,411.8);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#E1D3C3").s().p("Ah7AeQgVgCgZgLQAZgIAWABQAOACA3gFQA2gGgBgBIA1gLIBGgQQAWgEAZADQgWAPgVAFIhFAPIg2AMQAAACg3AFQgpAEgUAAIgLAAg");
	this.shape_311.setTransform(20.4,417.2);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#E1D3C3").s().p("Ah6AfQgXAAgYgLQAagJAVABQAPACA3gGQA0gGAAgCQAAABB6gdQAWgFAaAEQgVAOgWAGIhFAQIg2AMQABACg3AGQgqAFgTAAIgLgBg");
	this.shape_312.setTransform(21.1,422.5);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#E1D3C3").s().p("Ah6AhQgWAAgYgLQAZgJAVABQAOABA3gGQA1gHAAgCQAAACB6gfQAVgFAaADQgWAPgUAGIhFARQg2ANAAgBQABADg3AGQgtAGgSAAIgJgBg");
	this.shape_313.setTransform(21.9,427.9);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#E1D3C3").s().p("Ah5AjQgWgBgZgKQAZgJAWAAQAOACA3gHQA1gIgBgCQAAABB6gfQANgEALAAQAIgBAPACQgVAQgVAFIhFASIg1ANQAAADg2AHQgtAGgTAAIgIAAg");
	this.shape_314.setTransform(22.7,433.2);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#E1D3C3").s().p("Ah5AlQgUAAgagKQAZgKAVAAQAOACA3gIQA0gIAAgCQABACB4giQANgEALgBQAJAAAOABQgUAQgWAGQgOAFg2AOQg1APAAgBQAAACg2AIQgwAHgSAAIgGAAgAAAABIAAAAIAAAAg");
	this.shape_315.setTransform(23.6,438.5);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#E1D3C3").s().p("Ah4AmQgXAAgYgKQAagJAUAAQAOABA3gJQA1gIgBgCIA1gOIBEgUQANgEAKAAIAYAAQgVAQgVAHIh5AiQAAACg2AJQgxAHgRAAIgFAAg");
	this.shape_316.setTransform(24.6,443.9);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#E1D3C3").s().p("Ah4AoQgVAAgZgKQAWgJAYgBQAOABA3gJQAzgJAAgCQAAACB4gmQANgEALAAIAXAAQgVARgUAGIhDAUIg2AQQABACg2AJQgyAJgRAAIgFAAg");
	this.shape_317.setTransform(25.6,449.2);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#E1D3C3").s().p("Ah3AqQgXAAgYgJQAZgKAVgBQAOABA3gKQA0gJgBgCIA1gPIBDgWQAWgHAZACQgVARgUAGIhDAVIg1AQQAAADg1AKQgyAJgSAAIgEAAg");
	this.shape_318.setTransform(26.6,454.4);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#E1D3C3").s().p("AimAjQAagKAUgBQAPABA2gLQA0gKAAgCIA0gQIBCgWQAWgHAZABQgTARgVAHIhDAWQg1ARAAgBQABADg3AKQg3ALgPgBIgFAAQgTAAgYgIg");
	this.shape_319.setTransform(27.8,459.6);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#E1D3C3").s().p("AilAmQAZgLAVgBQAOAAA2gLQA0gLgBgCQABABB2goQAUgIAbABQgTARgWAIIhCAWIg1ASQABACg2ALQg4AMgPgBIgFAAQgUAAgWgHg");
	this.shape_320.setTransform(29,464.8);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#E1D3C3").s().p("AikAoQAZgLAUgCQAOABA2gMQA1gMgBgCIA0gRIBBgYQAVgHAaABQgSAQgVAJIhDAXIg0ASQABACg2AMQg4AMgPgBIgFABQgVAAgVgHg");
	this.shape_321.setTransform(30.2,470);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#E1D3C3").s().p("AikAqQAYgMAVgBQAOAAA2gMQA0gNgBgCIA0gRIBCgZQANgFALgBIAXgBQgUASgUAHIhCAYIg0ATQAAACg1ANQg4ANgPgBIgHAAQgSAAgWgGg");
	this.shape_322.setTransform(31.6,475.2);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#E1D3C3").s().p("AijAsQAYgMAVgBQAOAAA2gNQAzgNAAgCIAzgSIBCgaQATgIAbAAQgTASgUAIIhCAZQgzAUgBgBQABADg2ANQg3ANgPAAIgJAAQgRAAgVgGg");
	this.shape_323.setTransform(32.9,480.4);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#E1D3C3").s().p("AiMAzQgJgBgOgEQAXgLAWgDQAPAAA1gOQAzgNAAgCIAzgTIBBgaQAUgJAbAAQgUATgUAIIhBAZIg0AUQABADg1ANQg4APgOgBIgNABIgMgBg");
	this.shape_324.setTransform(34.4,485.5);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#E1D3C3").s().p("AiiAwQAWgLAXgDQAOAAA1gPQAzgOAAgCQAAABBzgvQAUgIAbgBQgSARgVAJIhBAbQgzAVAAgBQABADg1AOQg4APgPAAIgJAAQgSAAgUgFg");
	this.shape_325.setTransform(35.9,490.6);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#E1D3C3").s().p("AihAyQAYgMAUgDQAPAAA1gPQAzgPgBgCQAAABBzgxQAVgIAZgBQgSASgUAJIhBAbIgzAVQABACg1AQQg3APgPABIgMAAQgRAAgSgFg");
	this.shape_326.setTransform(37.4,495.7);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#E1D3C3").s().p("AihA1QAXgNAWgDQAOAAA1gQQAzgPgBgCIAygVIBBgdQASgIAcgCQgUAUgSAIIhBAcIgzAWQABACg0AQQg3AQgPAAIgOABQgQAAgSgEg");
	this.shape_327.setTransform(39,500.8);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#E1D3C3").s().p("AigA3QAYgOAUgCQAPgBA0gQQAzgQgBgCIAygVIBAgeQAVgJAZgCQgSATgUAKIhAAdIgyAWQABACg1ARQg3AQgPABIgPABQgQAAgQgEg");
	this.shape_328.setTransform(40.7,505.8);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#E1D3C3").s().p("AigA5QAZgOATgDQAOAAA2gRQAygRgBgCIAygWIBAgeQASgJAbgCQgSATgTAKQhxA2gBgCQABACg1ARQg2ASgOAAIgRABQgPAAgRgDg");
	this.shape_329.setTransform(42.5,510.8);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#E1D3C3").s().p("AifA7QAXgOAVgDQAOgBA1gSQAygRgBgCIAygWIA/gfQATgKAbgCQgSATgTAKIhAAfIgyAXQABACg0ASQg3ASgOABIgSABQgOAAgQgDg");
	this.shape_330.setTransform(44.3,515.8);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#E1D3C3").s().p("AiHBAQgJgBgOgDQAWgNAWgEQAOgBA0gSQAygSAAgCQAAACBvg5QAMgGALgDIAXgDQgTAUgSAJIg/AgIgxAYQABACg1ASQg2ATgPABQgLACgJAAIgEAAg");
	this.shape_331.setTransform(46.1,520.8);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#E1D3C3").s().p("AiGBCIgXgDQAWgOAVgEQAPgCAzgSQAygTgBgCIAxgXIA+ghQATgKAbgDQgRAUgUAKIg+AhIgxAYQABACg0ATQg2AUgOABQgLACgKAAIgEAAg");
	this.shape_332.setTransform(48,525.7);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#E1D3C3").s().p("AicBBQAVgOAWgFQAOgBA0gUQAxgTgBgCQABACBug7QAUgKAZgDQgRAUgTAKIg+AiIgxAYQABACg0AUQg1AUgPABQgKACgLAAQgNAAgNgCg");
	this.shape_333.setTransform(50,530.6);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#E1D3C3").s().p("AicBDQAYgPATgEQAPgCAzgUQAxgTAAgCQAAABBtg8QAUgLAZgDQgRAVgSAKIg+AjIgwAYQABADg0AUQg1AUgOACQgLACgNAAQgMAAgNgCg");
	this.shape_334.setTransform(52,535.5);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#E1D3C3").s().p("AibBFQAXgPAUgFQAPgBAzgVQAxgUgBgCIBtg8QASgLAbgEQgQAUgUAMIg9AjIgwAZQABACgzAVQg1AWgPABQgLADgNAAQgLAAgNgCg");
	this.shape_335.setTransform(54,540.3);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#E1D3C3").s().p("AiaBGQAXgOAUgFQAOgCAzgVQAwgVAAgCQAAABBsg+QASgLAbgEQgRAUgSALIg9AkIgwAaQABADgyAVQg2AWgOABQgMADgNAAQgLAAgMgCg");
	this.shape_336.setTransform(56.2,545.1);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#E1D3C3").s().p("AiZBJQAWgPAUgGQAPgCAygVQAxgWgBgCQABACBqhAQAUgMAZgEQgRAVgSALIg8AlIgwAaQACACgzAXQg0AWgPACQgMADgOAAIgWgBg");
	this.shape_337.setTransform(58.3,549.9);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#E1D3C3").s().p("AiYBKQAVgPAVgFQAPgDAygWQAwgWgBgCIBqhAQAUgLAZgFQgRAWgSALIg7AlIgvAbQABACgyAXQg0AXgPACQgMAEgQAAIgUgCg");
	this.shape_338.setTransform(60.6,554.6);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#E1D3C3").s().p("AiXBMQAWgPAUgGQAOgCAygXQAwgWgBgDIAugbIA8gmQARgLAbgGQgPAVgTAMIg7AmIgvAcQABACgyAXQg0AYgOADQgOAEgQAAIgSgCg");
	this.shape_339.setTransform(62.8,559.3);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#E1D3C3").s().p("AiWBOQAVgPAUgHQAPgCAxgYQAwgWgBgDIAugcIA7gmQATgMAZgFQgPAVgTAMIg6AnIgvAcQACACgyAYQg0AZgOACQgNAEgMAAIgFAAIgSgBg");
	this.shape_340.setTransform(65.2,564);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#E1D3C3").s().p("AiVBQQAVgQAUgGQAPgDAxgYQAvgYgBgCQABACBnhGQARgLAbgGQgPAVgSANIg6AnIgvAdQACACgxAYQg0AagOACQgNAEgMABIgFAAIgSgBg");
	this.shape_341.setTransform(67.6,568.6);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#E1D3C3").s().p("AiUBSQAUgQAVgHQAOgCAxgZQAvgYgBgCQABACBmhHQASgNAagGQgPAWgSANIg5AoIguAdQABACgxAZQgzAagPADQgPAFgVAAIgLgBg");
	this.shape_342.setTransform(70,573.2);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#E1D3C3").s().p("AiTBUQAWgRATgGQAOgDAxgZQAvgZgBgCIAtgeIA4gpQATgMAZgGQgQAXgQALIg6ApIgtAeQACACgxAaQgzAagPADQgRAFgSAAIgMAAg");
	this.shape_343.setTransform(72.5,577.7);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#E1D3C3").s().p("AiSBWQAVgRAUgHQAOgDAwgaQAugZAAgCQABABBkhJQAQgMAbgHQgQAXgQAMIg5ApIgtAfQACACgxAaQgyAbgOADQgRAGgVAAIgKAAgAADAGIAAAAIAAAAg");
	this.shape_344.setTransform(75,582.2);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#E1D3C3").s().p("AiQBYQAUgRATgHQAOgEAxgaQAugagCgCIBlhJQASgNAYgHQgOAXgQANIg4AqIgtAfQACACgxAbQgyAcgPADQgRAGgXAAIgGAAg");
	this.shape_345.setTransform(77.6,586.7);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#E1D3C3").s().p("AiPBZQASgRAVgHQAPgEAvgbQAugagBgCIAsgfIA3grQARgOAagHQgPAXgRANIg3ArIgtAgQACACgvAbQgyAcgOAEQgTAHgWAAIgGgBg");
	this.shape_346.setTransform(80.2,591.1);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#E1D3C3").s().p("AiOBbQATgRAUgIQAOgEAvgbQAugbgBgCIArggIA3grQARgOAZgHQgNAWgRAOIg3AsIgsAgQACACgwAcQgxAdgOADQgNAFgLACIgOAAIgJAAg");
	this.shape_347.setTransform(82.9,595.5);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#E1D3C3").s().p("AiNBdQAUgSATgIQAOgEAvgcQAtgbgBgCIArghIA2gsQASgOAYgHQgNAXgRANIg3AtIgrAgQACADgvAcQgxAegPADQgSAIgXAAIgFAAg");
	this.shape_348.setTransform(85.6,599.8);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#E1D3C3").s().p("AhlBFQAOgEAvgdQAsgcgBgCQABABBfhPQARgOAZgIQgOAXgPAOIg2AtIgrAhQABACguAeQgxAegOADQgTAIgcABQATgSAUgIg");
	this.shape_349.setTransform(88.4,604.1);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#E1D3C3").s().p("AhkBGQANgEAvgdQAsgdgBgCQABACBehRQAQgNAZgKQgLAXgSAPIg1AuQgqAiAAgBQACADgvAdQgvAfgPAEQgTAIgcABQAUgSATgJg");
	this.shape_350.setTransform(91.2,608.3);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#E1D3C3").s().p("AhjBHQAOgEAtgeQAsgdgBgCIApgiIA1guQARgPAZgIQgNAYgQANIg0AvIgrAiQACACguAfQgvAfgPAEQgTAIgcABQATgSAUgJg");
	this.shape_351.setTransform(94.1,612.5);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#E1D3C3").s().p("AhiBJQAOgFAtgeQAsgegCgCQABABBchTQARgOAYgJQgLAWgQAQIg1AvIgqAjQADACguAfQgvAggOAEQgNAGgLACIgXACQASgSAUgJg");
	this.shape_352.setTransform(97,616.7);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#E1D3C3").s().p("AhhBKQANgFAugfQArgegCgCIBchTQAQgOAZgKQgNAZgPAOIgzAwQgoAkgBgBQACACgtAgQgvAggOAFQgUAIgbACQATgTATgJg");
	this.shape_353.setTransform(99.9,620.8);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#E1D3C3").s().p("AhgBLQANgEAtggQArgfgCgCIBbhUQAQgPAYgKQgMAZgPAOIgyAxIgpAjQACACgsAhQgvAhgOAEQgUAKgaABQASgTATgJg");
	this.shape_354.setTransform(102.9,624.8);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#E1D3C3").s().p("AhfBNQAOgGAsgfQAqghgCgBIAogkIAygyQARgPAXgKQgLAYgPAQIgzAxIgoAkQACADgsAgQguAigOAFQgMAFgLAEIgXADQARgTAUgKg");
	this.shape_355.setTransform(106,628.8);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#E1D3C3").s().p("AheBOQANgFAsghQAqgggCgCIAnglIAygyQAPgPAYgKQgKAYgPAPIgyAyIgnAlQACACgsAiQguAigOAFQgTAKgaACQARgTATgKg");
	this.shape_356.setTransform(109.1,632.7);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#E1D3C3").s().p("AhdBPQANgFAsgiQApgggBgCQAAABBXhYQAPgQAYgLQgKAZgPAPIgxAzIgnAlQACACgrAiQgtAjgOAFQgTAKgbADQASgUASgKg");
	this.shape_357.setTransform(112.2,636.6);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#E1D3C3").s().p("AhcBRQAOgGAqgiQApghgBgCIAlgmIAwgzQAPgPAYgMQgKAYgOAQIgwA0IgnAmQACACgqAiQgtAkgOAFQgMAHgLADQgIACgOACQAQgUATgKg");
	this.shape_358.setTransform(115.4,640.4);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#E1D3C3").s().p("AhaBRQANgFAqgiQApgigCgCQABABBThbQAQgQAXgLQgLAagNAOIgvA0IgmAmQACADgqAjQgtAjgNAGQgSAKgcAFQASgVASgLg");
	this.shape_359.setTransform(118.6,644.2);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#E1D3C3").s().p("AhaBTQANgGAqgjQAogigBgCQABACBShdQAPgRAXgLQgJAYgOARIguA0IgmAnQACACgpAkQgsAkgOAGQgSALgbAEQAQgUASgLg");
	this.shape_360.setTransform(121.9,647.9);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#E1D3C3").s().p("AhYBUQANgGApgjQAogjgCgCIBShdQAOgQAYgMQgKAagOAPIgtA1IglAoQACACgpAkQgrAmgOAGQgSALgbAEQASgVARgLg");
	this.shape_361.setTransform(125.2,651.6);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#E1D3C3").s().p("AhXBVQANgGApgkQAngjgCgCIBRheQAPgRAWgMQgJAZgNARIgtA1IgkApQACACgpAlQgrAmgNAGQgTALgaAFQAPgUATgNg");
	this.shape_362.setTransform(128.5,655.2);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#E1D3C3").s().p("AhVBXQAMgHApglQAmgjgBgDIAjgoIAsg2QAOgQAWgOQgIAZgOASIgrA2IgkAoQACADgoAlQgqAngOAGQgQALgcAGQAQgWASgLg");
	this.shape_363.setTransform(131.9,658.7);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#E1D3C3").s().p("AhUBYQAMgHAoglQAmglgCgBQABAABNhhQAOgQAWgNQgIAZgNARIgrA3IgjApQACABgnAnQgpAngOAHQgSAMgaAFQAQgWARgLg");
	this.shape_364.setTransform(135.3,662.2);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#E1D3C3").s().p("AhTBZQAMgGAogmQAmglgCgCIAhgpIAqg4QAOgRAWgOQgHAagNARIgrA3IgiAqQACACgnAnQgoAngOAHQgQAMgcAGQAPgVASgNg");
	this.shape_365.setTransform(138.8,665.6);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#E1D3C3").s().p("AhRBaQAMgGAngnQAkgmgBgBIAggqIAqg4QANgSAXgOQgIAagMARIgqA4IgiArQADABgnAoQgoAogNAHQgSAMgaAGQAPgUASgOg");
	this.shape_366.setTransform(142.3,669);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#E1D3C3").s().p("AhQBcQAMgHAmgnQAlgmgCgCQABABBIhkQANgSAWgOQgHAagMARIgpA5IghArQADABgmAoQgoApgNAHQgRANgbAGQAQgXAQgLg");
	this.shape_367.setTransform(145.8,672.2);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#E1D3C3").s().p("AhPBdQANgHAmgoQAjgngCgCIBHhkQANgSAVgOQgFAZgNASIgnA6IghArQADACgmAoQgnAqgNAHQgQANgaAHQAOgWAQgNg");
	this.shape_368.setTransform(149.4,675.5);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#E1D3C3").s().p("AhNBeQANgHAkgoQAjgogCgCIBGhkQAMgTAWgPQgGAagMASIgnA6QgfAtgBgBQADACgkApQgmAqgNAIQgSAMgZAIQAOgXAQgNg");
	this.shape_369.setTransform(153,678.6);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#E1D3C3").s().p("AhMBgQANgIAkgpQAigngCgCIBFhnQALgSAVgPQgFAagLARIgmA8IgfAsQACACgjApQgmArgNAHQgRAOgZAHQANgXAQgMg");
	this.shape_370.setTransform(156.6,681.7);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#E1D3C3").s().p("AhKBhQAMgIAkgqQAhgogCgCQACACBBhpQAMgTAUgPQgFAbgLARIglA8IgeAsQADACgkAqQglArgMAIQgLAJgKAFQgIAEgOAEQAPgXAPgNg");
	this.shape_371.setTransform(160.3,684.7);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#E1D3C3").s().p("AhJBiQAMgIAjgqQAhgpgCgCIBBhoQALgSAVgQQgEAZgLATIgkA8QgdAugBgBQADACgjArQgkArgNAIQgQAOgZAIQAMgWAQgOg");
	this.shape_372.setTransform(164,687.7);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#E1D3C3").s().p("AhHBjQAMgIAigqQAggqgCgBIAcguIAjg8QALgSAVgRQgFAbgKARIgjA9IgdAuQADABgiAsQgjAsgNAJQgPANgaAJQAMgXAQgOg");
	this.shape_373.setTransform(167.8,690.6);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#E1D3C3").s().p("AhFBkQAMgIAhgrQAfgqgCgCQACABA8hrQALgUAUgQQgEAbgKASIgiA9QgbAvgBgBQACACghAsQgiAtgNAIQgPAOgaAKQANgYAPgOg");
	this.shape_374.setTransform(171.6,693.4);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#E1D3C3").s().p("AhDBlQAMgIAggsQAfgrgDgBIAbguIAhg9QAKgTAUgRQgDAbgKASIghA9QgaAvgBAAQADACghAsQghAtgNAJQgQAPgYAJQALgWAQgQg");
	this.shape_375.setTransform(175.4,696.1);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#E1D3C3").s().p("AhBBmQALgIAggtQAdgrgBgBIAagvIAfg+QAKgSAUgSQgDAbgKASIgfA+IgaAwQACABggAtQggAugNAJQgPAPgZAKQAMgYAPgPg");
	this.shape_376.setTransform(179.3,698.8);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#E1D3C3").s().p("AhABoQAMgJAegtQAdgrgCgCIA4htQAKgTAUgSQgDAagJATQg2BvgDAAQADABgeAtQghAvgMAJQgJAJgKAGQgHAFgOAFQALgXAPgPg");
	this.shape_377.setTransform(183.2,701.4);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#E1D3C3").s().p("Ag+BoQALgJAegtQAdgrgCgCIAYgwIAdg/QAKgSATgTQgBAagKAUQgzBwgDgBQADABgeAuQggAwgMAJQgPAPgYALQAKgYAPgQg");
	this.shape_378.setTransform(187.1,703.9);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#E1D3C3").s().p("Ag8BpQALgJAdgtQAcgtgCgBQABAAAzhwQAJgTATgSQgCAagJATIgcBAQgXAxgBgBQADACgdAuQgfAwgMAJQgNAPgaAMQALgYAOgQg");
	this.shape_379.setTransform(191,706.4);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#E1D3C3").s().p("Ag6BrQALgKAdguQAbgtgDgBQACABAwhxQAIgTATgUQAAAagJAUQgxBygBgBQACACgcAvQgeAwgMAJQgIAKgKAHQgHAEgNAHQAKgYAOgQg");
	this.shape_380.setTransform(195,708.7);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#E1D3C3").s().p("Ag4BsQAKgKAcguQAagugCgBQACABAuhyQAIgTASgUQAAAagIAUQgGAQgUAxQgVAxgBAAQACABgbAwQgdAwgLAKQgPARgXALQAIgXAPgRg");
	this.shape_381.setTransform(199,711);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#E1D3C3").s().p("Ag2BtQAKgKAbgvQAagugDgBQABAAAthzQAHgTATgTQAAAZgIAUIgZBCIgVAyQADABgbAvQgcAygLAKQgOAQgYAMQAJgYAOgQg");
	this.shape_382.setTransform(203.1,713.3);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#E1D3C3").s().p("Ag0BuQAKgKAagwQAZgugDgCQACABAqhzQAHgVASgTQAAAbgHAUIgYBBIgUAyQADABgbAxQgaAxgLALQgNAQgYANQAJgZANgQgAAGAEIAAAAIAAAAg");
	this.shape_383.setTransform(207.2,715.4);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#E1D3C3").s().p("AgyBvQAKgKAZgwQAYgvgDgCQABABASgyIAXhCQAHgVARgTQABAZgHAVQgnB1gCAAQADABgaAxQgaAygLAKQgMARgYANQAIgYANgRg");
	this.shape_384.setTransform(211.3,717.4);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#E1D3C3").s().p("AgwBvQAKgKAYgwQAXgvgCgCIARgxIAVhDQAGgSASgWQABAbgGATIgVBCQgRA0gBgBQACABgYAyQgZAygKALQgOARgWAOQAHgaANgRg");
	this.shape_385.setTransform(215.4,719.4);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#E1D3C3").s().p("AguBwQAKgKAXgxQAWgwgCgBIAQgyIAUhDQAHgVAQgUQACAcgGATIgUBDIgRAyIAAAAIAAAAQADABgYAyQgYA0gKAKQgNASgWAOQAGgYANgTg");
	this.shape_386.setTransform(219.6,721.3);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#E1D3C3").s().p("AgsBxQAJgKAXgyQAVgwgDgBQACABAhh3QAGgVAQgUQACAbgGAUIgSBDQgPAzgBAAQADABgXAyQgWA0gLALQgNASgWAOQAHgaAMgRg");
	this.shape_387.setTransform(223.8,723.1);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#E1D3C3").s().p("AgqByQAJgKAWgzQAUgwgDgBIAPgzIARhDQAGgWAPgUQADAagFAUQgeB3gCAAQADABgWAzQgWA0gKALQgMASgWAPQAGgbAMgQgAAGAEIAAAAIAAAAg");
	this.shape_388.setTransform(228.1,724.9);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#E1D3C3").s().p("AgoBzQAJgLAVgyQATgxgDgBIAOg0IAQhDQAGgWAOgUQAEAbgFATIgQBFQgNAzgBAAQADABgVAzQgUA1gKALQgMASgWAPQAFgZAMgSgAAGADIAAABIAAgBg");
	this.shape_389.setTransform(232.3,726.5);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#E1D3C3").s().p("AgmB0QAJgMAUgyQASgxgDgBIANg0IAOhEQAFgVAPgVQAEAagFAUIgOBEQgMA1gBAAQADAAgUA0QgTA1gKAMQgHALgIAIIgSAOQAGgbAKgQgAAGADIAAABIAAgBg");
	this.shape_390.setTransform(236.6,728.1);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#E1D3C3").s().p("AgjB0QAIgLATgzQARgxgDgCQACABAXh4QAEgVAPgWQAEAZgEAVIgNBFQgLA0gBAAQADABgTA0QgSA1gJAMQgLARgWARQAFgZALgTg");
	this.shape_391.setTransform(240.9,729.5);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#E1D3C3").s().p("AgiB1QAJgMARgyQAQgzgCAAQABAAAVh5QAEgWAOgVQAFAYgEAXIgMBEQgJA0gBAAQADABgSA0QgRA2gKAMQgGAMgIAIQgFAGgMAJQAEgZAKgTg");
	this.shape_392.setTransform(245.3,730.9);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#E1D3C3").s().p("AgfB1QAIgMARgzQAPgygDgBQACABASh5QADgWANgWQAGAYgDAWIgLBGQgIA0gBAAQADAAgRA2QgQA1gJAMQgKASgVASQAEgZAKgUg");
	this.shape_393.setTransform(249.7,732.2);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#E1D3C3").s().p("AgeB2QAJgMAPg0QAOgygDgBQACAAAPh5QADgUANgYQAGAagCAUIgJBFIgIA1QADABgQA1QgPA3gJALQgGANgHAIQgGAHgLAJQADgZAJgUg");
	this.shape_394.setTransform(254.1,733.4);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#E1D3C3").s().p("AgbB3QAIgMAOg0QANgzgCgBIAOh6QADgUAMgYQAHAZgDAWIgHBFIgHA1QADABgPA1QgNA3gJAMQgGAMgHAJQgFAGgMAKQADgaAJgTg");
	this.shape_395.setTransform(258.5,734.5);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#E1D3C3").s().p("AgZB3QAIgMANg0QALgzgCgBQABAAAFg1IAGhFQACgVAMgXQAHAYgCAWIgGBFIgGA1QADABgNA1QgOA4gHAMQgJAUgUARQACgZAJgUg");
	this.shape_396.setTransform(263,735.5);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#E1D3C3").s().p("AgXB4QAHgMANg1QAKgzgCgBIAJh6QABgVAMgYQAHAZgBAVIgEBGQgEA1gBAAQADAAgMA2QgNA3gHANQgIAUgUASQADgcAHgRg");
	this.shape_397.setTransform(267.5,736.5);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#E1D3C3").s().p("AgVB4QAIgMALg1QAJg0gDgBIAEg1IADhFQABgTALgaQAIAagBAUIgDBGIgDA1QADABgLA2QgMA3gHANQgIAUgTASQACgZAHgUg");
	this.shape_398.setTransform(272,737.3);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#E1D3C3").s().p("AgTB4QAHgMAKg2QAJgzgDgBQABAAADh6QAAgUALgZQAJAYgBAWIgBBFIgDA1QADAAgKA3QgKA4gGANQgIAVgTASQACgaAGgUgAAEACIAAAAIAAAAIAAAAg");
	this.shape_399.setTransform(276.6,738.1);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#E1D3C3").s().p("AgQB5QAHgNAIg1QAHg0gCgBQABAAAAh6QAAgWAKgXQAJAXAAAWIAABGIgBA1QADAAgJA3QgJA4gHANQgDANgHAJQgEAHgKAKQAAgZAHgUg");
	this.shape_400.setTransform(281.1,738.7);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#E1D3C3").s().p("AgQB5QAHgNAHg1QAHg1gDAAQACAAgDh6QgBgUAKgaQAJAWABAYQADB6gCAAQADAAgHA3QgIA4gHAOQgFATgSAVQgBgaAGgUg");
	this.shape_401.setTransform(285.7,739.2);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#E1D3C3").s().p("AgPB5QAHgNAGg1QAFg1gDAAQACAAgFh6QAAgVAHgZQALAXABAWQABARACA1QACA1gBAAQADAAgHA3QgGA4gHANQgFAVgRAUQgBgbAFgTg");
	this.shape_402.setTransform(290.3,739.7);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#E1D3C3").s().p("AgOB5QAGgNAFg1QAEg1gCAAIgGh6QgCgVAJgZQAKAYABAVIAEBFIADA1QADAAgFA3QgGA5gGANQgFAVgRAUQgBgaAFgUg");
	this.shape_403.setTransform(294.9,740);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#E1D3C3").s().p("AgNB5QAGgNAEg2QADg0gCgBQACAAgMh5QgBgWAHgYQALAXACAVIAGBFIADA2QADgBgEA4QgEA4gGAOQgFAVgQAUQgCgZAFgVgAgCABIAAAAIAAAAg");
	this.shape_404.setTransform(299.4,740.3);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#E1D3C3").s().p("AgLB6QAFgNADg3QADg1gDAAIgMh5QgDgWAIgYQALAYACAUIAHBFIAFA1QADAAgCA3QgDA5gGANQgFAWgPAVQgDgbAFgTg");
	this.shape_405.setTransform(304,740.4);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#E1D3C3").s().p("AgHB5QAFgNABg2QABg1gCAAIgPh5QgDgVAHgZQAMAXACAVIAKBFQAHA1gBAAQADAAgCA3QgCA4gFAOQgFAVgOAVQgDgZAEgVg");
	this.shape_406.setTransform(308.5,740.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,604.1,759);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_0();
	this.instance.parent = this;
	this.instance.setTransform(250.6,145.9,1,1,0,0,0,33.6,32.8);

	this.instance_1 = new lib.Path_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(320.3,663.9,1,1,0,0,0,11.8,10.2);

	this.instance_2 = new lib.Path_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(247.7,577.8,1,1,0,0,0,10,5.8);

	this.instance_3 = new lib.Path_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(247.7,539.9,1,1,0,0,0,10,5.8);

	this.instance_4 = new lib.Path_4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(249.1,503.2,1,1,0,0,0,10,5.8);

	this.instance_5 = new lib.Path_5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(249.2,473.9,1,1,0,0,0,14.3,5.8);

	this.instance_6 = new lib.Path_6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(249,437.3,1,1,0,0,0,14.3,5.7);

	this.instance_7 = new lib.Path_7();
	this.instance_7.parent = this;
	this.instance_7.setTransform(249.1,402.3,1,1,0,0,0,19.1,5.8);

	this.instance_8 = new lib.Path_8();
	this.instance_8.parent = this;
	this.instance_8.setTransform(251,362.7,1,1,0,0,0,19,5.8);

	this.instance_9 = new lib.Path_9();
	this.instance_9.parent = this;
	this.instance_9.setTransform(251,299.5,1,1,0,0,0,31.8,20.7);

	this.instance_10 = new lib.Path_10();
	this.instance_10.parent = this;
	this.instance_10.setTransform(174.4,653.6,1,1,0,0,0,11.8,10.2);

	this.instance_11 = new lib.Group_0();
	this.instance_11.parent = this;
	this.instance_11.setTransform(271.3,322.8,1,1,0,0,0,256.4,322.8);

	this.instance_12 = new lib.Path_11();
	this.instance_12.parent = this;
	this.instance_12.setTransform(122.4,620.7,1,1,0,0,0,11.2,12.5);

	this.instance_13 = new lib.Path_12();
	this.instance_13.parent = this;
	this.instance_13.setTransform(96.8,590.5,1,1,0,0,0,12.1,14.7);

	this.instance_14 = new lib.Path_13();
	this.instance_14.parent = this;
	this.instance_14.setTransform(68.7,548.9,1,1,0,0,0,12.1,14.7);

	this.instance_15 = new lib.Path_14();
	this.instance_15.parent = this;
	this.instance_15.setTransform(39.9,499.6,1,1,0,0,0,12.1,14.7);

	this.instance_16 = new lib.Path_15();
	this.instance_16.parent = this;
	this.instance_16.setTransform(26.5,446.5,1,1,0,0,0,13.2,15.9);

	this.instance_17 = new lib.Path_16();
	this.instance_17.parent = this;
	this.instance_17.setTransform(13.3,387.7,1,1,0,0,0,13.3,15.9);

	this.instance_18 = new lib.Path_17();
	this.instance_18.parent = this;
	this.instance_18.setTransform(14.8,315.6,1,1,0,0,0,14.8,18.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,527.6,674.3);


(lib.WaterPennysimple = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash1.ai
	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(1,-14.8,1,1,0,0,0,263.8,337.1);
	this.instance.alpha = 0.75;

	this.instance_1 = new lib.Path();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-15.1,44.7,1,1,0,0,0,63,183.5);
	this.instance_1.alpha = 0.578;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#947753").ss(1,0,0,4).p("AqfhNQgZAuAtAzQAcAhA+ApQBaA9B5AOQBbALDQgLQDpgMBJAHQAjAEBagOQCLgVBlhcQApgmAOggQAOgigVgOQhohEjBgKQjaAAhggKQjFgUj5AcQkAAdgaAzg");
	this.shape.setTransform(-11.8,225.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-68,0.1,68.1,0.1).s().p("AleCpQh5gOhag9Qg+gpgcghQgtgzAZguQAagzEAgdQD5gcDFAUQBgAKDaAAQDBAKBoBEQAVAOgOAiQgOAggpAmQhlBciLAVQhaAOgjgEQhJgHjpAMQhrAFhLAAQhIAAgtgFg");
	this.shape_1.setTransform(-11.8,225.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#947753").ss(1,0,0,4).p("AkXh7QBZgTDIAFQB7ADCTALQAoADAnAkQAjAhAVAuQAVAsgEAiQgEAmgjAGQhpARkWAEQkyAFhOgaQgpgOgMgkQgLghAQgoQARgpAlgfQAngiAygLg");
	this.shape_2.setTransform(-12.3,259.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-43.2,0,43.3,0).s().p("Al2B1QgpgOgMgkQgLghAQgoQARgpAlgfQAngiAygLQBZgTDIAFQB7ADCTALQAoADAnAkQAjAhAVAuQAVAsgEAiQgEAmgjAGQhpARkWAEIhbABQjkAAhBgWg");
	this.shape_3.setTransform(-12.3,259.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#947753").ss(1,0,0,4).p("AlEkQQBogpDoAKQCRAHCoAYQAuAHAtBPQApBHAYBlQAZBkgFBLQgFBSgpANQh4AnlDAJQljALhbg7QgwgfgOhPQgMhJAThZQAThaArhFQAuhKA5gXg");
	this.shape_4.setTransform(-13.5,307.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-50.1,0,50.2,0).s().p("AmyEAQgwgfgOhPQgMhJAThZQAThaArhFQAuhKA5gXQBogpDoAKQCRAHCoAYQAuAHAtBPQApBHAYBlQAZBkgFBLQgFBSgpANQh4AnlDAJQg1ACgwAAQkMAAhNgyg");
	this.shape_5.setTransform(-13.5,307.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#947753").ss(1,0,0,4).p("ABZnKQgdAbipErQipEogBAYQAAAcALATQAPAcArAbQCcBhAfARQCPBRAbgRQAbgSAViSQALhNAOihQAGhFAgi5QAbiVgGgpQgHg0hQgbQhNgZgaAYg");
	this.shape_6.setTransform(-91.1,276.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-28,0.1,28,0.1).s().p("AgXGUQgfgRichhQgrgbgPgcQgLgTAAgcQABgYCpkoQCpkrAdgbQAagYBNAZQBQAbAHA0QAGApgbCVQggC5gGBFQgOChgLBNQgVCSgbASQgFADgIAAQgnAAh2hDg");
	this.shape_7.setTransform(-91.1,276.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#947753").ss(1,0,0,4).p("AEBmmQglAUkXD0QkXDygMAVQgOAaAAATQABAbAYAfQBRBqAXAbQBTBgAegMQAdgKAWg+QAdhTADgFQAPgXA4hZQAng8AmhAQAuhMBmhqQBaheAMggQATgygtg4Qgsg2ggARg");
	this.shape_8.setTransform(-121.7,246.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-36.4,0,36.4,0).s().p("AjrFVQgXgbhRhqQgYgfgBgbQAAgTAOgaQAMgVEXjyQEXj0AlgUQAggRAsA2QAtA4gTAyQgMAghaBeQhmBqguBMQgmBAgnA8IhHBwQgDAFgdBTQgWA+gdAKIgHACQggAAhKhWg");
	this.shape_9.setTransform(-121.7,246.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#947753").ss(1,0,0,4).p("AE4m3QgpAUlGD9QlGD7gOAWQgSAbgBAUQgDAcAWAhQBQB0ASAXQBPBkAigMQAggLAehAQAohWAEgFQAWgeBChXQAwg/AwhCQA5hPB4huQBrhiARgiQAZg0grg6QgRgXgVgMQgXgLgQAIg");
	this.shape_10.setTransform(-144,213.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-41.5,0,41.6,0).s().p("AkpFiQgSgXhQh0QgWghADgcQABgUASgbQAOgWFGj7QFGj9ApgUQAQgIAXALQAVAMARAXQArA6gZA0QgRAihrBiQh4Bug5BPQgwBCgwA/IhYB1QgEAFgoBWQgeBAggALIgHABQgjAAhHhZg");
	this.shape_11.setTransform(-144,213.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#947753").ss(1,0,0,4).p("AG0mRQgzANmpDAQmoC/gWATQgaAYgHAUQgLAcARAnQA4CFAPAeQA9B4AogFQAmgFAyg7QBDhRAFgEQAlgeBbhHQBGg4BFg6QBUhFChhYQCPhOAbggQAqgwgghFQgNgcgVgQQgVgRgUAFg");
	this.shape_12.setTransform(-160.9,179.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-52.3,0,52.4,0).s().p("Am6EgQgPgeg4iFQgRgnALgcQAHgUAagYQAWgTGoi/QGpjAAzgNQAUgFAVARQAVAQANAcQAgBFgqAwQgbAgiPBOQihBYhUBFQhFA6hGA4IiABlQgFAEhDBRQgyA7gmAFIgDAAQgoAAg6hzg");
	this.shape_13.setTransform(-160.9,179.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#947753").ss(1,0,0,4).p("AIQmAQg7AFn2COQn1CNgbASQggAWgLAWQgPAeANAuQAvCkALAgQA1CRAuACQArABA/g6QBVhPAIgEQAggUB9hHQBUgxBWg3QBng/DBhHQCrg/AigeQA1gvgbhTQgLgigVgWQgVgXgXACg");
	this.shape_14.setTransform(-178,133.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-61.3,0,61.2,0).s().p("AnBGBQgugCg1iRQgLgggvikQgNguAPgeQALgWAggWQAbgSH1iNQH2iOA7gFQAXgCAVAXQAVAWALAiQAbBTg1AvQgiAeirA/QjBBHhnA/QhWA3hUAxIidBbQgIAEhVBPQg+A5grAAIgBAAg");
	this.shape_15.setTransform(-178,133.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#947753").ss(1,0,0,4).p("AJRlEQg/gCooBRQomBQgfAPQgmATgOAUQgUAcAJAwQAgCsAHAeQAnCXAxAHQAtAGBLgzQBkhEAIgDQAmgQCNg4QBggnBigrQB1g0DWgvQC9gqApgbQA9gogShWQgIgjgTgYQgVgZgZgBg");
	this.shape_16.setTransform(-186.9,82.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-66.9,0,67,0).s().p("AobFFQgxgHgniXQgHgeggisQgJgwAUgcQAOgUAmgTQAfgPImhQQIohRA/ACQAZABAVAZQATAYAIAjQASBWg9AoQgpAbi9AqQjWAvh1A0QhiArhgAnIizBIQgIADhkBEQhDAtgrAAIgKAAg");
	this.shape_17.setTransform(-186.9,82.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#947753").ss(1,0,0,4).p("AKziiQhKgQphg2Qpng2ggAKQgqANgSATQgZAbACA3QAIC/AFAnQATCvAzARQA6ATBGAAQBDgBA0gSQAigMBqgkQBpgjBbgTQBGgQE5hFQEcg4AkAhQAUASAVgcQATgYAKgvQAKgvgFglQgGgqgZgFg");
	this.shape_18.setTransform(-194.1,29.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-72.3,0,72.4,0).s().p("Ap/EEQgzgRgTivQgFgngIi/QgCg3AZgbQASgTAqgNQAggKJnA2QJhA2BKAQQAZAFAGAqQAFAlgKAvQgKAvgTAYQgVAcgUgSQgkghkcA4Il/BVQhbAThpAjIiMAwQg0AShDABIgDAAQhFAAg4gTg");
	this.shape_19.setTransform(-194.1,29.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#947753").ss(1,0,0,4).p("AhlnKQAhAbDCErQDCEoABAYQABAcgNATQgRAcgyAbQi1BhgiARQikBRgegRQgggSgYiSQgNhTgPibQgGhFgmi5QgeiVAGgpQAIg0BcgbQBYgZAeAYg");
	this.shape_20.setTransform(64.2,285.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-32.1,0.1,32.2,0.1).s().p("AinHUQgggSgYiSQgNhTgPibQgGhFgmi5QgeiVAGgpQAIg0BcgbQBYgZAeAYQAhAbDCErQDCEoABAYQABAcgNATQgRAcgyAbQi1BhgiARQiHBDgsAAQgKAAgFgDg");
	this.shape_21.setTransform(64.2,285.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#947753").ss(1,0,0,4).p("AknmmQAqAUFCD0QFADyAOAVQAPAaAAATQAAAbgcAgQheBrgZAZQhfBggjgMQghgKgZg+QghhTgEgFQgUgbg+hVQgtg8gshAQg0hMh1hqQhnhegOggQgWgyA0g4QAyg2AkARg");
	this.shape_22.setTransform(99.3,255.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-41.8,0,41.8,0).s().p("ACNGpQghgKgZg+QghhTgEgFIhShwQgtg8gshAQg0hMh1hqQhnhegOggQgWgyA0g4QAyg2AkARQAqAUFCD0QFADyAOAVQAPAaAAATQAAAbgcAgQheBrgZAZQhVBWglAAIgIgCg");
	this.shape_23.setTransform(99.3,255.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#947753").ss(1,0,0,4).p("Almm3QAwAUF2D9QF1D8ARAWQAUAaADAUQADAcgaAhQheB2gTAVQhaBkgngMQglgLgihAQguhWgEgFQgXgbhPhaQg3g+g3hDQhBhPiKhuQh7hhgTgiQgdg0Axg6QAUgYAZgMQAZgLASAIg");
	this.shape_24.setTransform(124.9,222.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-47.6,0,47.7,0).s().p("ADUG6QglgLgihAQguhWgEgFIhmh1Qg3g+g3hDQhBhPiKhuQh7hhgTgiQgdg0Axg6QAUgYAZgMQAZgLASAIQAwAUF2D9QF1D8ARAWQAUAaADAUQADAcgaAhQheB2gTAVQhRBZgnAAIgJgBg");
	this.shape_25.setTransform(124.9,222.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#947753").ss(1,0,0,4).p("AnzmRQA6AMHoDAQHmDAAaASQAeAYAIAUQAMAdgTAmQhACFgSAfQhFB4gvgFQgrgFg5g8QhMhQgHgFQglgahuhLQhQg3hQg6QhghFi5hZQikhOgfgfQgwgwAlhFQAPgcAXgQQAZgRAXAFg");
	this.shape_26.setTransform(144.2,187.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-60,0,60.2,0).s().p("AGIGTQgrgFg5g8QhMhQgHgFQglgahuhLQhQg3hQg6QhghFi5hZQikhOgfgfQgwgwAlhFQAPgcAXgQQAZgRAXAFQA6AMHoDAQHmDAAaASQAeAYAIAUQAMAdgTAmQhACFgSAfQhCBzguAAIgEAAg");
	this.shape_27.setTransform(144.2,187.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#947753").ss(1,0,0,4).p("ApdmAQBEAFI/COQI/CNAgASQAlAWAMAWQASAegPAuQg3CngNAdQg8CRg1ACQgxABhJg6QhihPgIgEQgqgWiKhFQhigyhig2Qh2g/jdhHQjEg/gogeQg8gvAehTQANgiAYgWQAZgXAaACg");
	this.shape_28.setTransform(163.9,141.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-70.2,0,70.4,0).s().p("AGKFIQhihPgIgEIi0hbQhigyhig2Qh2g/jdhHQjEg/gogeQg8gvAehTQANgiAYgWQAZgXAaACQBEAFI/COQI/CNAgASQAlAWAMAWQASAegPAuQg3CngNAdQg8CRg1ACIgCAAQgwAAhIg5g");
	this.shape_29.setTransform(163.9,141.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#947753").ss(1,0,0,4).p("AqnlEQBIgCJ6BRQJ4BQAjAPQArATAQAUQAXAcgKAwQgiCkgLAmQgtCXg4AHQg0AGhWgzQhyhEgKgDQgtgRifg3QhvgnhwgrQiHg0j1gvQjagqgugaQhHgpAVhWQAJgjAXgYQAXgZAdgBg");
	this.shape_30.setTransform(174,91.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-76.7,0,76.9,0).s().p("AHiEYQhyhEgKgDIjMhIQhvgnhwgrQiHg0j1gvQjagqgugaQhHgpAVhWQAJgjAXgYQAXgZAdgBQBIgCJ6BRQJ4BQAjAPQArATAQAUQAXAcgKAwQgiCkgLAmQgtCXg4AHIgLAAQgyAAhNgtg");
	this.shape_31.setTransform(174,91.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#947753").ss(1,0,0,4).p("AsXijQBUgQK7g1QLDg2AlAKQAwAMAUAUQAdAbgDA2QgIC1gGAyQgWCug6ARQhDAUhRgBQhNgBg8gSQifgvgBAAQh4gjhpgTQkKg4itgeQlGg4gqAhQgXASgYgbQgVgZgMguQgMgwAGgkQAHgqAdgGg");
	this.shape_32.setTransform(182.3,38.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-83,0,83,0).s().p("AJMEWQhNgBg8gSIiggvQh4gjhpgTQkKg4itgeQlGg4gqAhQgXASgYgbQgVgZgMguQgMgwAGgkQAHgqAdgGQBUgQK7g1QLDg2AlAKQAwAMAUAUQAdAbgDA2QgIC1gGAyQgWCug6ARQhBAThPAAIgEAAg");
	this.shape_33.setTransform(182.3,38.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#947753").ss(1,0,0,4).p("AsHiBQgcA0AQCLQAGA4AMAdQAMAfANgTQA9hgDdgFQBQgCB4AKQBEAFCAAMQCTAMCgAKQBZAGCrAMQBWAGBPAlQApATAwAZQAOAEALgqQAKgpADg6QAHiTgpgbQhohDjsgQQkFgFhggKQjPgVklAUQk3AWgaAxg");
	this.shape_34.setTransform(-12.3,196.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-79.2,0,79.4,0).s().p("ALzDSQgwgZgpgTQhPglhWgGIkEgSQiggKiTgMQiAgMhEgFQh4gKhQACQjdAFg9BgQgNATgMgfQgMgdgGg4QgQiLAcg0QAagxE3gWQElgUDPAVQBgAKEFAFQDsAQBoBDQApAbgHCTQgDA6gKApQgKAngNAAIgCgBg");
	this.shape_35.setTransform(-12.3,196.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#947753").ss(1,0,0,4).p("AtiiBQgfA0ASCLQAHA4AMAdQAOAfAOgTQBFhgD3gFQBZgCCGAKQBMAFCPAMQCkAMCzAKQBjAGDAAMQBgAGBYAlQAuATA2AZQAPAEAMgqQAMgpADg6QAIiTgugbQh0hDkIgPQkjgGhsgKQjngVlHAUQlcAWgdAxg");
	this.shape_36.setTransform(-12.3,162.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-88.5,0,88.7,0).s().p("ANMDSQg2gZgugTQhYglhggGIkjgSQizgKikgMQiPgMhMgFQiGgKhZACQj3AFhFBgQgOATgOgfQgMgdgHg4QgSiLAfg0QAdgxFcgWQFHgUDnAVQBsAKEjAGQEIAPB0BDQAuAbgICTQgDA6gMApQgLAngOAAIgCgBg");
	this.shape_37.setTransform(-12.3,162.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#947753").ss(1,0,0,4).p("AuQiBQghA0ATCLQAHA4ANAdQAPAfAPgTQBIhgEEgFQBegCCNAKQBQAFCXAMQEcATGAAVQBkAGBeAlQAwATA5AZQAQAEANgqQAMgpADg6QAIiTgwgaQh6hEkWgPQhCgEiegDQiGgDg+gGQj0gVlYAUQluAWgfAxg");
	this.shape_38.setTransform(-12.3,130.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-93.2,0,93.4,0).s().p("AN5DSQg5gZgwgTQheglhkgGQmAgVkcgTQiXgMhQgFQiNgKheACQkEAFhIBgQgPATgPgfQgNgdgHg4QgTiLAhg0QAfgxFugWQFYgUD0AVQA+AGCGADQCeADBCAEQEWAPB6BEQAwAagICTQgDA6gMApQgMAngPAAIgCgBg");
	this.shape_39.setTransform(-12.3,130.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#947753").ss(1,0,0,4).p("AvMiBQgiA0ATCLQAIA5AOAcQAQAgAQgUQBMhgEWgFQBkgCCWAKQBVAFChAMQCxALDPAMQESAOA1ADQBrAGBkAlQAzATA8AZQARAEAOgqQANgoAEg7QAIiTgzgaQiChEkogPQlHgGh4gKQkFgVluAUQmGAWghAxg");
	this.shape_40.setTransform(-12.3,97);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-99.3,0.1,99.5,0.1).s().p("AOyDSQg8gZgzgTQhkglhrgGIlHgRImAgXIj2gRQiWgKhkACQkWAFhMBgQgQAUgQggQgOgcgIg5QgTiLAig0QAhgxGGgWQFugUEFAVQB4AKFHAGQEoAPCCBEQAzAagICTQgEA7gNAoQgNAngPAAIgDgBg");
	this.shape_41.setTransform(-12.3,97);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#947753").ss(1,0,0,4).p("AwbiBQglA0AVCLQAJA4APAdQARAfARgTQBThgEsgFQBrgCCjAKQBcAFCuAMQFHATG6AVQB0AGBrAlQA4ATBBAZQASAEAPgqQAOgoAEg7QAJiTg3gaQiNhElAgPQlhgGiCgKQkZgVmNAUQmlAWgkAxg");
	this.shape_42.setTransform(-13.8,64.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-107.4,0,107.5,0).s().p("AP/DSQhBgZg4gTQhrglh0gGQm6gVlHgTQiugMhcgFQijgKhrACQksAFhTBgQgRATgRgfQgPgdgJg4QgViLAlg0QAkgxGlgWQGNgUEZAVQCCAKFhAGQFAAPCNBEQA3AagJCTQgEA7gOAoQgOAngQAAIgDgBg");
	this.shape_43.setTransform(-13.8,64.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#947753").ss(1,0,0,4).p("AwqifQglA0AVCKQAIA5APAdQARAfARgUQBThgEsgEQBsgCCjAJQBbAGCvAMQDIALEcAPQCcAIEMANQBuAGA6BIQAOARAUAdQAQAUAQgDQAUgEAOgsQAPgqADg4QAJiLg3gaQiVhHlHgqQiOgTllgbQkagVmLAUQmmAVgjAyg");
	this.shape_44.setTransform(-12.3,30.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-108.9,0,109,0).s().p("APtDgQgUgdgOgRQg6hIhugGImogVInkgaIkKgSQijgJhsACQksAEhTBgQgRAUgRgfQgPgdgIg5QgViKAlg0QAjgyGmgVQGLgUEaAVQFlAbCOATQFHAqCVBHQA3AagJCLQgDA4gPAqQgOAsgUAEIgEAAQgOAAgOgRg");
	this.shape_45.setTransform(-12.3,30.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#947753").ss(1,0,0,4).p("Egp0AFFQANAgB1gDQA+gBBegIQBxAACaAGQDtAIA4AQQBWAaFEBaQBrAgB4AeQC7AuA4gEQArgDF/gsQGDgqBzAIQENASCIANQETAbBHAfQBVAmDkgMQBSgFEJgdQA9gGE2gSQFOgUBfgIQBhgJC/gNQCUgOAigZQAUgPAJiVQAKiYgLipQgLjEgih4QgniOhAgDQh4gEp3B7QoYBojTA1QiFAhiUAbQiSAbhSAHQhKAGlvAFQlHAFi4gBQhoAAihgaQivgbhbglQiIg2kJhNQlEhgikgSQg3gGhvgqQgngPikhFQkAhsgjAeQgZAVgoCBQgnB9ghChQhUGSAtBvg");
	this.shape_46.setTransform(-3.9,-52.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-269.1,0,269.2,0).s().p("ALZJbQhHgfkTgbQiIgNkNgSQhzgImDAqQl/AsgrADQg4AEi7guQh4gehrggQlEhahWgaQg4gQjtgIQiagGhxAAQheAIg+ABQh1ADgNggQgthvBUmSQAhihAnh9QAoiBAZgVQAjgeEABsQCkBFAnAPQBvAqA3AGQCkASFEBgQEJBNCIA2QBbAlCvAbQChAaBoAAQC4ABFHgFQFvgFBKgGQBSgHCSgbQCUgbCFghQDTg1IYhoQJ3h7B4AEQBAADAnCOQAiB4ALDEQALCpgKCYQgJCVgUAPQgiAZiUAOQi/ANhhAJQhfAIlOAUQk2ASg9AGQkJAdhSAFQg4ADgwAAQiRAAhAgdg");
	this.shape_47.setTransform(-3.9,-52.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#947753").ss(1,0,0,4).p("EgnXADyQAMA0BgArQBRAjAzAAQArAABCAXQBLAaA4ApQAqAgCFgYQBKgOAYgCQAygFAbANQAqAWCRBSQCRBTAcANQA8AeCiAyQC4A5A2gHQBHgJEegBQE1gCB3ANQC3AUDfAOQEdASBJgNQBugUGahQQAdgFFFhKQEthFBpgPQElgrAkgHQDHglAggoQASgXgoiwQgnivhEjMQhMjjhIiPQhVing7gDQhkgGnmEoQj7CbhoBAQiyBtgyAVQh7AziJArQiGAqhMAKQhGAJlRAIQk2AIiigCQhgAAiUgoQihgrhVg4QgmgZmCk1QlokhhWguQgvgZgzgqQg1gtgWgRQgjgcgWgDQgbgDgVAeQiGDBiOEQQjgGsAmCeg");
	this.shape_48.setTransform(3,-155.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-252.5,0,252.6,0).s().p("AFCM7QjfgOi3gUQh3gNk1ACQkeABhHAJQg2AHi4g5Qiigyg8geQgcgNiRhTQiRhSgqgWQgbgNgyAFQgYAChKAOQiFAYgqggQg4gphLgaQhCgXgrAAQgzAAhRgjQhggrgMg0QgmieDgmsQCOkQCGjBQAVgeAbADQAWADAjAcIBLA+QAzAqAvAZQBWAuFoEhQGCE1AmAZQBVA4ChArQCUAoBgAAQCiACE2gIQFRgIBGgJQBMgKCGgqQCJgrB7gzQAygVCyhtIFjjbQHmkoBkAGQA7ADBVCnQBICPBMDjQBEDMAnCvQAoCwgSAXQggAojHAlQgkAHklArQhpAPktBFQlFBKgdAFQmaBQhuAUQgfAGhEAAQheAAilgLg");
	this.shape_49.setTransform(3,-155.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#947753").ss(1,0,0,4).p("A9/AAQgZAwAxA8QAuA6BkA2QBRAsE3ENQCeCJC0CgQAxApBiAuQBpAxBOAOQBsAUHbAHQIAAHBygiQBhgcDeh8QECiQA1gYQBwgxEGiZQD0iOBchCQBMg1gIg5QgGgng+hOQkCk8k4jsQqEnnqaAJQrRAJocFTQjdCLisC4QiXCiheCug");
	this.shape_50.setTransform(10,-248.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-192.8,0,192.9,0).s().p("AhqPvQnbgHhsgUQhOgOhpgxQhigugxgpQi0igieiJQk3kNhRgsQhkg2gug6Qgxg8AZgwQBeiuCXiiQCsi4DdiLQIclTLRgJQKagJKEHnQE4DsECE8QA+BOAGAnQAIA5hMA1QhcBCj0COQkGCZhwAxQg1AYkCCQQjeB8hhAcQheAclwAAIikgBg");
	this.shape_51.setTransform(10,-248.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#947753").ss(1,0,0,4).p("EAq5AAAQAALBjYKEQjQJtl8HgQl8HgntEHQn+EQouAAQouAAn+kQQnskHl8ngQl8ngjQptQjYqEAArBQAArADYqEQDQpuF8nfQF8ngHskHQH+kQIuAAQIuAAH+EQQHtEHF8HgQF8HfDQJuQDYKEAALAg");
	this.shape_52.setTransform(0.6,-3.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.rf(["#C4A873","#AA863B","#8C6F2D"],[0,0.498,1],0,0,0,0,0,312.6).s().p("EgQsAx5QnskHl8ngQl8ngjQptQjYqEAArBQAArADYqEQDQpuF8nfQF8ngHskHQH+kQIuAAQIuAAH+EQQHtEHF8HgQF8HfDQJuQDYKEAALAQAALBjYKEQjQJtl8HgQl8HgntEHQn+EQouAAQouAAn+kQg");
	this.shape_53.setTransform(0.6,-3.3);

	this.instance_2 = new lib.Blend();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.6,0,1,1,0,0,0,302.1,379.5);
	this.instance_2.alpha = 0.82;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(7));

	// Layer 2 copy
	this.instance_3 = new lib.edgeBit();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-2.9,3.9,1,1,0,0,0,302.1,379.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7));

	// Layer 2
	this.instance_4 = new lib.edgeBit();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-2.9,3.9,1,1,0,0,0,302.1,379.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({rotation:-1.1,x:-2.8},0).wait(1).to({rotation:-2.3,x:-2.9},0).wait(1).to({rotation:-3.4},0).wait(1).to({rotation:-2.3},0).wait(1).to({rotation:-1.1,x:-2.8},0).wait(1).to({rotation:0,x:-2.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-305,-375.6,604.1,759);


// stage content:
(lib._20161214_FWW_TilesAll_v05 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Water Penny Beetle
	this.instance = new lib.WaterPennysimple("synched",6);
	this.instance.parent = this;
	this.instance.setTransform(-156,398.1,0.231,0.231,124.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-2.9,regY:3.9,scaleX:0.23,scaleY:0.23,x:-129.2,y:415.9,startPosition:0},0).wait(1).to({x:-102,y:434.8,startPosition:1},0).wait(1).to({rotation:124.3,x:-74.8,y:453.7,startPosition:2},0).wait(1).to({x:-47.6,y:472.6,startPosition:3},0).wait(1).to({rotation:124.2,x:-20.4,y:491.5,startPosition:4},0).wait(1).to({rotation:124.1,x:6.8,y:510.4,startPosition:5},0).wait(1).to({x:33.9,y:529.3,startPosition:6},0).wait(1).to({rotation:124,x:61.1,y:548.2,startPosition:0},0).wait(1).to({x:88.3,y:567.1,startPosition:1},0).wait(1).to({rotation:123.9,x:115.5,y:586,startPosition:2},0).wait(1).to({x:142.7,y:604.9,startPosition:3},0).wait(1).to({rotation:123.8,x:169.9,y:623.8,startPosition:4},0).wait(1).to({x:197.1,y:642.7,startPosition:5},0).wait(1).to({rotation:123.7,x:224.2,y:661.6,startPosition:6},0).wait(1).to({x:251.4,y:680.5,startPosition:0},0).wait(1).to({rotation:123.6,x:278.6,y:699.4,startPosition:1},0).wait(1).to({x:305.8,y:718.3,startPosition:2},0).wait(1).to({rotation:123.5,x:333,y:737.2,startPosition:3},0).wait(1).to({x:360.2,y:756,startPosition:4},0).wait(1).to({rotation:123.4,x:387.4,y:774.9,startPosition:5},0).wait(1).to({x:414.6,y:793.8,startPosition:6},0).wait(1).to({rotation:123.3,x:441.8,y:812.7,startPosition:0},0).wait(1).to({x:469,y:831.6,startPosition:1},0).wait(1).to({rotation:123.2,x:496.2,y:850.5,startPosition:2},0).wait(1).to({x:523.4,y:869.4,startPosition:3},0).wait(1).to({rotation:123.1,x:550.6,y:888.3,startPosition:4},0).wait(1).to({rotation:56.8,x:577.1,y:908.2,startPosition:5},0).wait(1).to({x:605.8,y:883.7,startPosition:6},0).wait(1).to({x:634.5,y:859.3,startPosition:0},0).wait(1).to({x:663.3,y:834.8,startPosition:1},0).wait(1).to({x:692,y:810.4,startPosition:2},0).wait(1).to({x:720.8,y:785.9,startPosition:3},0).wait(1).to({x:749.5,y:761.5,startPosition:4},0).wait(1).to({x:778.3,y:737.1,startPosition:5},0).wait(1).to({x:807,y:712.6,startPosition:6},0).wait(1).to({x:835.8,y:688.1,startPosition:0},0).wait(1).to({x:864.5,y:663.7,startPosition:1},0).wait(1).to({x:893.3,y:639.2,startPosition:2},0).wait(1).to({x:922,y:614.8,startPosition:3},0).wait(1).to({x:950.8,y:590.3,startPosition:4},0).wait(1).to({x:979.5,y:565.9,startPosition:5},0).wait(1).to({x:1008.3,y:541.4,startPosition:6},0).wait(1).to({x:1037,y:517,startPosition:0},0).wait(1).to({x:1065.8,y:492.5,startPosition:1},0).wait(1).to({x:1094.5,y:468.1,startPosition:2},0).wait(1).to({x:1123.3,y:443.6,startPosition:3},0).wait(1).to({x:1152,y:419.2,startPosition:4},0).wait(1).to({x:1180.8,y:394.7,startPosition:5},0).wait(1).to({x:1209.5,y:370.3,startPosition:6},0).wait(1).to({x:1238.3,y:345.8,startPosition:0},0).wait(1).to({x:1267,y:321.4,startPosition:1},0).wait(1).to({x:1295.8,y:296.9,startPosition:2},0).wait(1).to({x:1324.5,y:272.5,startPosition:3},0).wait(1).to({x:1353.3,y:248,startPosition:4},0).wait(1).to({rotation:128.2,x:1389.5,y:273.6,startPosition:5},0).wait(1).to({x:1424.9,y:300.3,startPosition:6},0).wait(1).to({x:1460.3,y:327,startPosition:0},0).wait(1).to({x:1495.8,y:353.7,startPosition:1},0).wait(1).to({x:1531.2,y:380.4,startPosition:2},0).wait(1).to({x:1566.6,y:407,startPosition:3},0).wait(1).to({x:1602,y:433.7,startPosition:4},0).wait(1).to({x:1637.5,y:460.4,startPosition:5},0).wait(1).to({x:1672.9,y:487.1,startPosition:6},0).wait(1).to({x:1708.3,y:513.8,startPosition:0},0).wait(1).to({x:1743.8,y:540.4,startPosition:1},0).wait(1).to({x:1779.2,y:567.1,startPosition:2},0).wait(1).to({x:1814.6,y:593.8,startPosition:3},0).wait(1).to({x:1850,y:620.5,startPosition:4},0).wait(1).to({x:1885.5,y:647.2,startPosition:5},0).wait(1).to({x:1920.9,y:673.9,startPosition:6},0).wait(1).to({x:1956.3,y:700.5,startPosition:0},0).wait(1).to({x:1991.7,y:727.2,startPosition:1},0).wait(1).to({x:2027.2,y:753.9,startPosition:2},0).to({_off:true},1).wait(166));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(722.1,862.9,164.5,150.9);
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