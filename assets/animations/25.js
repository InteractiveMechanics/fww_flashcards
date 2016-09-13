(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1920,
	height: 1080,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/bkgrtiles.png", id:"bkgrtiles"},
		{src:"images/NewPatternSwatch2.png", id:"NewPatternSwatch2"},
		{src:"images/NewPatternSwatch3.png", id:"NewPatternSwatch3"},
		{src:"images/NewPatternSwatch6.png", id:"NewPatternSwatch6"},
		{src:"images/NewPatternSwatch7.png", id:"NewPatternSwatch7"},
		{src:"images/NewPatternSwatch7_1.png", id:"NewPatternSwatch7_1"},
		{src:"images/NewPatternSwatch8.png", id:"NewPatternSwatch8"},
		{src:"images/USGS21IntricateSurface.png", id:"USGS21IntricateSurface"},
		{src:"images/USGS21IntricateSurface_1.png", id:"USGS21IntricateSurface_1"},
		{src:"images/USGS22GravelBeach.png", id:"USGS22GravelBeach"},
		{src:"images/USGS22GravelBeach_1.png", id:"USGS22GravelBeach_1"}
	]
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
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


(lib.guide = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bkgrtiles, null, new cjs.Matrix2D(2.199,0,0,2.199,-1116.3,-823.4)).s().p("EikFA2PMAAAhsdMFILAABMAAAAgDMAAAA0AQAAMMgHMNg");
	this.shape.setTransform(0,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1050.2,-346.8,2100.6,694.2);


(lib.Blend = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#321F11").s().p("AhoCDQgrg2AAhNQAAhLArg3QAsg2A8AAQA9AAAsA2QArA3AABLQAABNgrA2QgsA2g9AAQg8AAgsg2g");
	this.shape.setTransform(14.9,18.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29.7,37.2);


(lib.Path_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#321F11").s().p("AhdBwQgngvAAhBQAAhAAngvQAogvA1AAQA2AAAnAvQAoAvAABAQAABBgoAvQgnAvg2AAQg1AAgogvg");
	this.shape.setTransform(13.3,15.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26.6,31.9);


(lib.Path_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#321F11").s().p("AhcBwQgngvAAhBQAAhBAnguQAngvA1AAQA3AAAmAvQAnAuAABBQAABBgnAvQgmAug3AAQg1AAgngug");
	this.shape.setTransform(13.3,15.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26.6,31.8);


(lib.Path_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#321F11").s().p("AgECGQgygZgig4Qghg2ACg5QACg3AlgWQAlgWAwAZQAyAYAiA4QAhA3gCA3QgCA4glAWQgRAKgVAAQgWAAgZgMg");
	this.shape.setTransform(12.1,14.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.2,29.4);


(lib.Path_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#321F11").s().p("AgDCGQgzgZghg4Qgjg3ADg4QACg3AlgWQAlgWAwAZQAyAYAhA5QAjA2gDA3QgCA4glAWQgRAKgVAAQgWAAgYgMg");
	this.shape.setTransform(12.1,14.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,24.1,29.4);


(lib.Path_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#321F11").s().p("AgDCGQgzgZghg4Qgjg3ADg3QACg4AlgWQAlgWAwAYQAyAZAhA4QAjA3gDA4QgCA3glAWQgSALgUAAQgWAAgYgNg");
	this.shape.setTransform(12.1,14.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,24.1,29.5);


(lib.Path_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#321F11").s().p("AgOB1QgugRgcgvQgcgvAHgvQAGgwAlgWQAlgWAsARQAuARAbAvQAcAvgGAvQgGAwglAWQgVANgYAAQgSAAgSgIg");
	this.shape.setTransform(11.2,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22.4,25.1);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#321F11").s().p("AguBPQgtgcgSgqQgSgpAUggQAUghAtgEQAsgEAtAcQAtAbASAqQASApgUAgQgTAhguAEIgMAAQgmAAgngXg");
	this.shape.setTransform(11.9,10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23.9,20.6);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#321F11").s().p("AAADOQiDgBhdg8Qhdg+AAhTQABhWBdg8QBeg7CBAAQCEAABdA9QBdA9AABUQgBBVhdA8QhcA8iDAAIgBAAg");
	this.shape.setTransform(31.8,20.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.7,41.3);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#321F11").s().p("AAAA5QhNAAg4gSQg4gQAAgXQAAgXA4gRQA4gQBNAAQBPAAA3ARQA4ASAAAVQAAAYg4AQQg2ARhMAAIgEAAg");
	this.shape.setTransform(19,5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38.1,11.5);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#321F11").s().p("AAAA5QhNgBg4gRQg4gRAAgWQAAgXA4gRQA3gQBOAAQBPAAA4ARQA3ARAAAWQAAAYg4ARQg2AQhMAAIgEAAg");
	this.shape.setTransform(19.1,5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38.1,11.5);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#321F11").s().p("AAAA5Qg6AAgqgRQgqgRAAgXQAAgXAqgQQAqgRA6AAQA7AAAqARQAqARAAAWQAAAYgqARQgpAQg5AAIgDAAg");
	this.shape.setTransform(14.4,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.8,11.5);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#321F11").s().p("AAAA5Qg6AAgqgRQgqgRAAgXQAAgXAqgRQAqgQA6AAQA7AAAqARQAqARAAAWQAAAYgqAQQgpARg5AAIgDAAg");
	this.shape.setTransform(14.4,5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.8,11.5);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#321F11").s().p("AhFAoQgdgRAAgXQAAgWAdgSQAdgQAoAAQApAAAdARQAdARAAAWQAAAXgdARQgeARgoAAQgoAAgdgRg");
	this.shape.setTransform(10,5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20,11.5);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#321F11").s().p("AhFAoQgdgRAAgXQAAgWAdgSQAegQAnAAQApABAdAQQAdARAAAWQAAAXgdARQgdARgpAAQgoAAgdgRg");
	this.shape.setTransform(10,5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20,11.5);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#321F11").s().p("AhFAoQgdgRAAgXQAAgWAdgSQAegQAnAAQApAAAdARQAdARAAAWQAAAXgdARQgdARgpAAQgoAAgdgRg");
	this.shape.setTransform(10,5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20,11.5);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#321F11").s().p("AguBOQgtgbgSgqQgSgpAUggQAUghAtgEQAsgEAtAbQAtAcASAqQASAogUAhQgUAhgtAEIgLAAQgmAAgogYg");
	this.shape.setTransform(11.9,10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23.9,20.6);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#321F11").s().p("AlFDxQgahBAzg/QAdghANgSQAWgeAEgdQAFgjgiheQghhYAHgMQAUgkCMAWQCGAVAIAdQgShVA1gnQA4gmA/BDQAWAXADBqQADBwAVAjQAagRAhgGQApgGARgIQgKASgyCbQgoB9gtAeQguAegkgIQgYgFgkggQgqgkgUgLQgrgUg1AMQghBihGAQQgKADgKAAQg7AAghhYg");
	this.shape.setTransform(33.7,32.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,-0.1,67.1,65.9);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#961C1F","#B0605D","#9A4C4A","#7B3031","#681F21","#61191B"],[0,0.498,0.6,0.765,0.902,1],-62.9,0,63,0).s().p("AmbabQiBiBgykJQgnjPABl4QAInNAAj9QAApBAEiIQALluAvjZQA6kIB+iCQCKiQDsAAQDtAACKCQQB9CCA7EIQAvDZALFuQAECIAAJBQAAD9AIHNQABF4gnDPQgxEJiCCBQiQCQkMAAQkKAAiRiQg");
	this.shape.setTransform(63,183.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125.9,367.1);


(lib.Group_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#321F11").s().p("AhJBsQgjgZgEgxQgDgvAfgtQAfgtAvgOQAtgOAjAYQAkAZADAwQADAvgfAtQgfAtgvAPQgPAFgQAAQgbAAgWgPg");
	this.shape.setTransform(366.9,633.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#321F11").s().p("AhZCDQgjgZABg3QACg2Alg2QAmg3AxgVQA0gVAjAZQAjAYgBA4QgCA1glA2QglA3gyAVQgYAKgUAAQgYAAgTgNg");
	this.shape_1.setTransform(398.3,597.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#321F11").s().p("AhZCCQgjgYABg4QACg1Alg2QAlg3AygVQAzgVAkAYQAjAZgBA3QgCA2glA2QglA3gyAVQgYAKgUAAQgYAAgTgOg");
	this.shape_2.setTransform(429.1,557.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#321F11").s().p("AhZCDQgjgZABg3QACg2Alg2QAmg3AxgVQAzgVAkAZQAjAYgBA4QgBA1gmA3QglA2gyAVQgYAKgVAAQgXAAgTgNg");
	this.shape_3.setTransform(461,510);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#321F11").s().p("AgJCeQg3gDgjgyQgkgxAEg/QAEhCAqgsQAqgsA1AEQA3ADAkAxQAjAxgEBAQgEBCgqAsQgnApgwAAIgIgBg");
	this.shape_4.setTransform(477.7,458);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#321F11").s().p("AgJCeQg3gDgjgyQgkgxAEg/QAEhCAqgsQAqgsA1AEQA3ADAkAxQAjAxgEBAQgEBCgqAsQgnApgwAAIgIgBg");
	this.shape_5.setTransform(494.8,400.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#321F11").s().p("AgoCiQg+gfgghGQgfhEARhEQAShDA4gaQA4gZA8AgQA+AfAfBGQAfBFgRBDQgRBEg4AZQgZALgaAAQgfAAgigSg");
	this.shape_6.setTransform(422,113.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#321F11").s().p("AgKC5Qg+gEgog5Qgog5AFhLQAGhNAugzQAvgzA8ADQA9AEAoA5QAoA5gFBLQgFBNgvAzQgsAwg2AAIgIAAg");
	this.shape_7.setTransform(483,226);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#321F11").s().p("AitDIQgsgygFiWQgFieA2gvQA4gxB/ALQB8AKArAwQArAyADCJQACCRg3AwQg5Ayh6ABIgFAAQh2AAgpgug");
	this.shape_8.setTransform(250.2,24.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#321F11").s().p("AgqDqQhJgRgug0QgngtAhiNQAiiNA7gzQAzguBJAlQA2AaA2A+QApAugZB5QgYB7g7AzQgmAhg0AAQgTAAgYgGg");
	this.shape_9.setTransform(317.3,36.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#321F11").s().p("AAADcQg7gEhNh9QhMh5AFhOQAFhEBOgbQA6gUBPAFQA9AEBGBpQBFBogFBLQgFBHhHAsQg5Ajg+AAIgNAAg");
	this.shape_10.setTransform(183.5,37);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#321F11").s().p("AhUCnQg3gDgKgrQgFgXAGhgQAFhFBYg3QBOgxBFAEQA1AEAHA3QACANgIB0QgEBGhTAsQg+AhhAAAIgRgBg");
	this.shape_11.setTransform(87.2,101.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#321F11").s().p("AgLC5Qg9gEgog6Qgog5AFhKQAFhNAvgzQAvg0A7AFQA+ADAoA5QAoA6gFBKQgFBNgvA0QgsAvg2AAIgJAAg");
	this.shape_12.setTransform(14.9,213.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#321F11").s().p("AgLC5Qg9gEgog5Qgog5AFhLQAFhNAvgzQAvgzA7ADQA+AEAoA5QAoA5gGBLQgFBNguAzQgsAwg2AAIgJAAg");
	this.shape_13.setTransform(497.9,328.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,512.8,645.6);


(lib.edgeBit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1D3C3").s().p("AgCCGIgFiGQgHhuAAgXQgCgXAJgbQAIAZACAYIAICGIADA6QACA9AAAPQgBAXgJAbQgHgZgBgZg");
	this.shape.setTransform(308.1,740.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E1D3C3").s().p("AAACHIgGiHQgKhugBgWQgCgZAIgaQALAaAAAXIALCGIAEA6QAEA9AAAPQAAAYgJAaQgKgaAAgXg");
	this.shape_1.setTransform(312.6,740.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E1D3C3").s().p("AACCGIgDhLIgGg7IgOiEQgCgYAIgaQALAYADAYIAMCGIAFA5IAGBMQAAAZgIAaQgLgbgBgXg");
	this.shape_2.setTransform(317.1,740);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E1D3C3").s().p("AAGCGQgBgQgFg7QgFg6gBAAIgRiEQgDgWAHgdQAMAYADAYIAPCGIAHA5QAHA9AAAPQABAYgHAaQgMgZgBgYg");
	this.shape_3.setTransform(321.5,739.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E1D3C3").s().p("AAJCGIgPiFQgShtgCgXQgEgWAHgdQAMAZAEAXIASCGIAIA5QAIA8ABAPQACAXgHAcQgNgagBgXg");
	this.shape_4.setTransform(325.9,739.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E1D3C3").s().p("AAMCFIgLhKIgHg6IgXiDQgEgYAGgbQAMAWAFAaIAVCEIAUCEQADAYgHAbQgMgZgDgYg");
	this.shape_5.setTransform(330.3,738.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E1D3C3").s().p("AAPCFIgMhKIgJg6IgaiCQgEgWAFgdQAOAZAEAWIAYCEIALA5QAKA8ACAPQADAYgGAaQgNgZgDgXg");
	this.shape_6.setTransform(334.7,737.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E1D3C3").s().p("AASCFIgOhLIgKg5IgdiCQgEgWAEgcQAOAXAFAXIAbCEQABgBALA5QAMA7ACAPQADAYgFAbQgOgagDgVg");
	this.shape_7.setTransform(339.1,737);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E1D3C3").s().p("AAVCFIgPhLQgLg5gBAAIggiBQgEgVADgdQAPAXAFAXQAfCDgBAAQABAAANA3QANA7ACAQQAEAWgFAdQgOgagEgVg");
	this.shape_8.setTransform(343.4,736.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E1D3C3").s().p("AAYCEIgdiDQgehqgFgWQgFgUACgfQAQAYAGAWIAhCCIAOA4IARBKQAEAXgEAcQgPgbgEgUg");
	this.shape_9.setTransform(347.7,735.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E1D3C3").s().p("AAaCDIgfiBIgmiAQgGgVACgeQAQAYAHAWIAjCBIAQA3QAQA7ACAPQAFAXgEAcQgPgZgFgWg");
	this.shape_10.setTransform(352.1,734);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E1D3C3").s().p("AAdCDQgDgPgQg6IgPg5QgihogGgWQgHgWACgdQARAXAGAWIAnCBIARA3QAQA6ADAPQAGAXgDAcQgQgYgGgWg");
	this.shape_11.setTransform(356.3,732.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E1D3C3").s().p("AAgCCIgVhIIgQg4Igrh+QgHgUABgfQARAXAIAWIApB/IASA3IAVBJQAGAYgDAaQgPgWgHgXg");
	this.shape_12.setTransform(360.6,731.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E1D3C3").s().p("AAjCBIgoh/Igth9QgIgWABgcQARAWAIAVIAsB/IATA2QATA6AEAPQAGAWgCAcQgRgXgGgWg");
	this.shape_13.setTransform(364.8,730.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E1D3C3").s().p("AAmCAIgqh+Igxh8QgIgXAAgbQASAVAJAWIAuB+IAUA2QAVA5AEAOQAGAYgBAbQgRgXgHgWg");
	this.shape_14.setTransform(369,728.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E1D3C3").s().p("AApB/Igth9Igzh6QgIgWgBgdQATAXAIAUIAxB9IAVA1QAWA5AEAPQAHAVgBAcQgRgVgHgXg");
	this.shape_15.setTransform(373.2,727.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E1D3C3").s().p("AArB/QgFgQgWg3QgUg2gBAAIg1h5QgIgVgCgdQASAUAKAWIAzB8QABgBAWA1QAWA4AFAPQAIAXgBAbQgRgVgIgWg");
	this.shape_16.setTransform(377.4,725.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E1D3C3").s().p("AAuB9Igyh7Ig4h5QgJgSgCgfQATAWAKATIA2B7IA0B7QAIAWAAAcQgSgWgIgWg");
	this.shape_17.setTransform(381.6,724);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E1D3C3").s().p("AAwB9IgehFQgVg2gBABIg6h4QgKgWgCgbQATATAKAVIA5B6IA2B6QAIAVABAcQgTgWgIgUg");
	this.shape_18.setTransform(385.7,722.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E1D3C3").s().p("AAyB8QgFgPgag2QgWg1gBAAIg9h2QgKgVgCgcQAUAUAKAVIA6B4QABgBAZA0QAaA2AFAPQAJAWABAcQgTgWgJgUg");
	this.shape_19.setTransform(389.8,720.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E1D3C3").s().p("AA0B7IgghEIgYg0Ig/h1QgLgWgDgbQAVAUAKAUIA9B3IAbAyQAbA3AFAOQAKAWABAbQgTgWgKgTg");
	this.shape_20.setTransform(393.9,718.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E1D3C3").s().p("AA3B5Ig7h2IhBh0QgKgSgFgfQAVATALAVIA/B1IAcAzQAcA2AGANQAJAXADAbQgUgUgKgWg");
	this.shape_21.setTransform(397.9,716.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E1D3C3").s().p("AA5B5QgGgOgdg1Igag0IhDhyQgLgTgEgdQAUATAMATIBBB1QABgBAcAyQAdA1AGAPQAKAXACAaQgTgUgLgUg");
	this.shape_22.setTransform(401.9,714.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E1D3C3").s().p("AA8B4QgHgOgdg0QgbgzgBAAIhFhxQgMgVgEgbQAUASANAUIBDBzIAeAxQAeA1AGAOQALAVACAbQgUgSgKgVg");
	this.shape_23.setTransform(405.9,712);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E1D3C3").s().p("AA+B2IglhBIgdgyIhHhwQgMgTgGgdQAVARANAVIApA/IAdAyIAfAxQAfA1AGANQALAVADAcQgUgUgLgUg");
	this.shape_24.setTransform(409.9,709.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E1D3C3").s().p("ABAB1QgHgNgfg0IgdgxIhKhvQgMgTgGgcQAWARAMAUIAqA/IAeAxQABAAAeAwQAgAzAHAOQAKAUAFAdQgUgSgMgVg");
	this.shape_25.setTransform(413.8,707.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E1D3C3").s().p("ABCB0QgHgNgggzIgegxIhMhuQgMgSgHgcQAWAQANAUQBLBugBABIAgAwQAhAzAHANQALAUAFAcQgVgSgMgUg");
	this.shape_26.setTransform(417.7,705);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E1D3C3").s().p("ABEBzQgIgOgggyQgegwgCAAIhMhsQgNgSgHgcQAXASANARIBKBuQACgBAgAwQAhAyAHAOQAMATAFAcQgVgSgMgTg");
	this.shape_27.setTransform(421.6,702.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E1D3C3").s().p("ABGBxIgpg+QgfgwgBAAIhPhrQgNgRgIgcQAXAQANASIBOBtIBMBtQAMAUAFAbQgWgRgMgUg");
	this.shape_28.setTransform(425.4,699.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E1D3C3").s().p("ABYCEQgIgIgIgMIgrg+IgggvIhRhpQgNgRgJgcQAXAPAPASIBPBrIAiAuQAkAyAHANQANATAGAcIgTgRg");
	this.shape_29.setTransform(429.2,697.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E1D3C3").s().p("ABKBvIgsg9QgggvgBAAIhThoQgOgSgIgbQAXAQAOARQBTBqgCAAIAkAtQAkAxAIANQAMATAHAcQgWgQgNgUg");
	this.shape_30.setTransform(433,694.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E1D3C3").s().p("ABMBuQgJgNgkgwQghgugBAAIhVhmQgPgTgHgaQAYAQAOARIBSBoIAkAtQAmAwAHANQANASAIAcQgYgSgMgRg");
	this.shape_31.setTransform(436.7,691.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E1D3C3").s().p("ABNBsIhPhpIhXhkQgNgQgLgdQAYAOAPASIBVBnIAlAsQAlAvAJANQANAUAHAaQgXgQgOgTg");
	this.shape_32.setTransform(440.4,688.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E1D3C3").s().p("ABPBrQgJgNglguQgjgtgBAAIhXhjQgPgSgKgaQAZAPAOAQIBWBmIAmArQAmAvAJAMQANATAIAbQgYgQgNgSg");
	this.shape_33.setTransform(444.1,685.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E1D3C3").s().p("ABRBqQgKgNglgtIgkgtIhahiQgQgRgJgaQAYANAPASIBYBjIAmArQAoAuAIANQAOASAIAbQgYgPgNgSg");
	this.shape_34.setTransform(447.8,682.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E1D3C3").s().p("ABSBoIhUhlIhchgQgQgSgJgZQAXAMAQASIBaBiIAnAqQAoAuAJAMQAPATAHAaQgXgOgPgTg");
	this.shape_35.setTransform(451.4,679.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E1D3C3").s().p("ABUBnIgxg4IglgsIhdheQgQgRgLgaQAZANAQAQIBbBhQAAgBAnAqIAyA6QAOASAKAaQgXgOgQgSg");
	this.shape_36.setTransform(454.9,676.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E1D3C3").s().p("ABVBmQgJgMgogsQgmgrgBABIheheQgQgRgLgaQAZANAQARIBcBfIApApQApAsAJAMQAOARALAbQgZgPgPgQg");
	this.shape_37.setTransform(458.5,673.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E1D3C3").s().p("ABXBkQgKgMgpgrIgmgqIhghbQgRgSgLgYQAZALARARQBeBdgBABIApAoQAqAsAKALQAPASAKAaQgagOgOgRg");
	this.shape_38.setTransform(462,670.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E1D3C3").s().p("ABZBjIg0g2IgngqIhhhaQgQgPgNgaQAbAMAPAPIBfBcIAAAAIAAAAIAqAoIA0A3QAOAQAMAbQgZgNgPgRg");
	this.shape_39.setTransform(465.4,666.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E1D3C3").s().p("ABaBhQgKgLgqgqIgogoIhjhZQgQgQgMgaQAaAMAQAPIBhBbIAqAoQArAqAJALQAPASALAaQgZgNgPgSg");
	this.shape_40.setTransform(468.9,663.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E1D3C3").s().p("ABcBgQgLgLgqgqIgpgnIhjhYQgRgPgNgaQAZALASAPQBiBZgBABIArAmQAsAqAKALQAQASAKAZQgZgNgPgQg");
	this.shape_41.setTransform(472.2,659.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E1D3C3").s().p("ABdBfIhfhcIhlhWQgQgOgOgZQAZAJASAQIBjBYQABgBArAmQArApALAMQAPAQAMAbQgZgNgQgQg");
	this.shape_42.setTransform(475.6,656.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E1D3C3").s().p("ABfBdIhhhaIhmhUQgQgOgPgaQAbAKARAPIBkBXIAsAlQAtApAKALQARARALAYQgbgNgOgPg");
	this.shape_43.setTransform(478.9,652.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E1D3C3").s().p("ABgBcQgKgLgtgnIgqgmIhohTQgSgQgNgYQAaAKASAPIBlBVIAsAkQAuAoAKALQASARALAZQgZgLgRgRg");
	this.shape_44.setTransform(482.2,649.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E1D3C3").s().p("ABhBbQgLgLgtgnIgqgmIhphRQgTgPgNgYQAaAJASAPIBmBTIAtAkQAvAoAKAKQAQAQANAaQgbgMgPgPg");
	this.shape_45.setTransform(485.4,645.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E1D3C3").s().p("ABiBZQgLgKgtgmIgrglIhqhQQgSgPgPgYQAbAJASAOIBoBSIAtAkQAuAmALALQASARAMAYQgagLgRgQg");
	this.shape_46.setTransform(488.6,641.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E1D3C3").s().p("ABjBYQgKgKgvgmIgrgkIhrhPQgSgNgQgZQAbAJASAOIBqBQIAuAjQAuAmALAKQARAQAOAZQgbgLgRgPg");
	this.shape_47.setTransform(491.8,637.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E1D3C3").s().p("ABlBWIg7gvIgsgkIhrhNQgSgNgQgYQAbAIASAOIBqBPIAvAiQAvAlALAKQARAPAOAaQgbgLgQgPg");
	this.shape_48.setTransform(494.9,633.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E1D3C3").s().p("ABmBVIhnhSIhthLQgTgOgPgXQAaAIATANIBrBOQABgBAuAiQAwAkALALQASAPANAZQgagKgRgPg");
	this.shape_49.setTransform(497.9,629.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E1D3C3").s().p("ABnBUQgLgKgwgkIgtgiIhuhLQgLgIgJgIQgGgHgJgNQAbAHATAOIBsBLIAwAhQAwAkALAKQASAQAOAYQgagKgSgOg");
	this.shape_50.setTransform(500.9,625.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#E1D3C3").s().p("ABoBTQgMgLgwgiIgtgiIhvhJQgTgNgQgXQAcAIASAMIA+ApIAvAhIAwAhQAxAjALAKQASAOAOAZQgbgKgRgNg");
	this.shape_51.setTransform(503.9,621.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E1D3C3").s().p("ABpBRQgLgJgxgjIgughIhwhHQgSgMgRgYQAbAHATANIBuBJQAAgBAwAgQAxAjAMAKQATAPANAXQgagIgSgPg");
	this.shape_52.setTransform(506.9,617.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#E1D3C3").s().p("ABqBQQgMgKgxgiIguggIhxhGQgTgMgRgXQAbAGAUANIBuBHIAxAfQAyAiALAKQARANARAZQgbgJgSgNg");
	this.shape_53.setTransform(509.8,613.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E1D3C3").s().p("ABrBOIg9grQgvggAAABIhxhEQgTgMgSgXQAbAFAUANIBvBGQABgBAxAfQAyAhAMAKQARANAQAZQgcgJgRgNg");
	this.shape_54.setTransform(512.6,609.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#E1D3C3").s().p("ABsBNIhthJIhyhDQgVgNgQgVQAdAGASALIBwBFIAyAdQAyAiAMAJQASANAQAYQgagHgTgOg");
	this.shape_55.setTransform(515.4,605.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E1D3C3").s().p("ABtBLIhthHIh0hBQgUgMgSgWQAcAGAUALIBxBDQAAgBAyAeQAzAgAMAJQAUAOAOAXQgbgIgSgNg");
	this.shape_56.setTransform(518.2,600.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E1D3C3").s().p("ACEBXQgKgFgMgJQgMgIgzggIgwgdIh0hAQgUgLgSgWQAbAFAVALIByBCIAyAcQA0AfAMAKQASAMARAYIgYgHg");
	this.shape_57.setTransform(520.9,596.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#E1D3C3").s().p("ABvBIQgMgIg0gfIgwgdIh0g+QgVgMgSgVQAdAFATALIBzBAIAzAbQA0AfAMAJQATANAQAXQgbgHgTgNg");
	this.shape_58.setTransform(523.5,592.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#E1D3C3").s().p("ABwBHQgMgIg0geIgwgeIh2g8QgVgLgSgVQAbAEAVALIB0A+QAAgBAzAdQA0AdAMAJQATANARAXQgcgHgSgMg");
	this.shape_59.setTransform(526.2,587.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E1D3C3").s().p("ABwBGQgMgJg0geIgxgcIh2g6QgUgLgTgVQAbAEAVALIB1A8QAAgBAzAcQA0AdANAJQATANARAWQgbgGgUgMg");
	this.shape_60.setTransform(528.7,583.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#E1D3C3").s().p("ABxBEIhBglIgwgbIh4g6QgUgLgTgUQAbAEAVAKIBEAhIAyAbQAAgCAzAbQA1AdANAIQATANARAWQgdgHgSgLg");
	this.shape_61.setTransform(531.3,578.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E1D3C3").s().p("AByBCQgNgIg0gcQgxgbAAAAIh4g3QgUgKgUgVQAcADAUAKIB3A6QAAgBA0AaQA0AcANAIQAVANAQAWQgcgHgTgLg");
	this.shape_62.setTransform(533.7,574);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#E1D3C3").s().p("ABzBBQgNgHg0gcIgygaIh5g3QgUgJgUgVQAcADAVAJIB2A5IA1AZQA1AcANAIQAUALARAWQgcgGgTgLg");
	this.shape_63.setTransform(536.1,569.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#E1D3C3").s().p("ACMBLQgMgFgNgGQgNgJg0gaQgygbgBACIh4g1QgVgKgUgUQAcADAVAJIBEAeIAzAZQABgBA0AZQA1AaANAJQAUAMASAVIgXgFg");
	this.shape_64.setTransform(538.5,564.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#E1D3C3").s().p("AB0A+QgNgHg1gbQgygZAAABIh6g0QgUgJgVgUQAdADAUAIIB4A2IA1AXQA2AaANAIQAVANARAUQgbgFgVgLg");
	this.shape_65.setTransform(540.8,560);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#E1D3C3").s().p("AB1A9QgNgIg1gZQgzgaAAACIh6gzQgVgJgVgTIAZACQALADANAFIB5A1IA1AWQA3AaAMAHQATALAUAWQgcgEgUgLg");
	this.shape_66.setTransform(543.1,555.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#E1D3C3").s().p("AB2A8Ih2g4Ih7gxQgVgJgVgTQAcABAWAJIBFAcIA0AXIA1AVQA3AaANAIQAUAKASAVQgbgEgUgKg");
	this.shape_67.setTransform(545.3,550.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#E1D3C3").s().p("ACPBDQgMgDgNgGQgNgHg1gYQg0gZAAABIh7guQgVgIgWgUQAcABAWAJIB5AwQABgBA1AXQA3AYANAHQAVAMASAUQgQgCgHgDg");
	this.shape_68.setTransform(547.5,545.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#E1D3C3").s().p("AB3A4QgNgGg3gYQgzgYAAABIh8gtQgVgIgVgTQAcABAVAIIB6AvQABAAA1AVQA3AXAOAIQAVALASAUQgbgDgVgLg");
	this.shape_69.setTransform(549.6,540.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#E1D3C3").s().p("AB4A3QgPgHg2gXQgzgXAAACIh9gsQgVgIgVgTQAcABAVAIIBHAZIA0AVQABgCA1AVQA3AYAOAHQAVAKATAUQgcgDgUgKg");
	this.shape_70.setTransform(551.7,535.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#E1D3C3").s().p("AB5A1QgOgHg3gVQg0gXAAABIh9gqQgUgHgXgTQAcAAAWAHIB7AtQAAgBA3AUQA3AXAOAHQAVAKATAUQgcgDgUgKg");
	this.shape_71.setTransform(553.6,531);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#E1D3C3").s().p("AB5A0QgOgGg3gWIg0gVIh+goQgUgIgXgSQAbAAAXAHIB8ArQAAgBA2AUQA4AVAOAHQAUAKAUAUQgcgDgUgJg");
	this.shape_72.setTransform(555.6,526);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#E1D3C3").s().p("AB6AzQgOgHg3gVQg1gUAAABIh+goQgWgHgVgSQAcAAAVAHIBHAXIA2ASQAAgBA3ATQA4AVANAHQAWAKATATQgcgCgUgJg");
	this.shape_73.setTransform(557.5,521);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#E1D3C3").s().p("AB6AxQgOgGg3gVQg1gUAAABIh+gmQgWgGgWgSQAbgBAXAHIB8AoQABgBA3ASQA4AUAOAHQAWAKATATQgcgCgVgJg");
	this.shape_74.setTransform(559.3,516);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#E1D3C3").s().p("AB7AwQgOgHg4gTQg1gUAAABIh/gkQgVgHgXgRQAbgBAXAGIB9AnQABgBA3ARQA4AUAOAHQAWAJAUATQgcgCgVgIg");
	this.shape_75.setTransform(561.1,511);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#E1D3C3").s().p("AB7AuQgNgFg4gUIg2gSIh/giQgWgHgWgRQAcgBAWAGIB9AlQAAgBA4ARQA5ATANAGQAVAJAVATQgbgBgWgJg");
	this.shape_76.setTransform(562.8,505.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#E1D3C3").s().p("AB8AtQgPgGg3gTQg2gRAAAAIh/ghQgWgGgXgQQAQgBAJABQALAAAOADIB+AkQAAgBA4AQQA4ATAPAGQAVAJAVASQgdgBgUgIg");
	this.shape_77.setTransform(564.5,500.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#E1D3C3").s().p("AB9AsIh9goIh/ggQgXgGgWgQQAPgBAJAAQAMABANADIB/AiQAAgBA4AQQA5ASAOAGQAXAJATARQgdgBgTgHg");
	this.shape_78.setTransform(566.1,495.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#E1D3C3").s().p("AB9AqQgOgFg5gRQg2gRAAABIiAgeQgUgGgZgQQAbgDAXAGIBIARIA3APQAAgBA4APQA5ARAPAGQAXAJATARQgcAAgVgIg");
	this.shape_79.setTransform(567.7,490.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#E1D3C3").s().p("AB+ApQgPgGg5gQQg2gQAAABIiAgdQgXgFgXgQQAcgDAWAFIB/AfIA5ANQA6ARAOAFQAUAIAWASQgcAAgUgHg");
	this.shape_80.setTransform(569.2,485.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#E1D3C3").s().p("AB+AnQgPgFg5gQQg2gPAAABIiAgbQgXgFgXgQQAbgDAXAFQCAAbgBACIAAAAIAAAAQABgBA4AOQA5APAPAGQAVAHAWASIgHAAQgYAAgSgHg");
	this.shape_81.setTransform(570.6,480);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#E1D3C3").s().p("AB+AmQgOgFg5gPQg3gPAAABIiAgaQgYgFgXgPQAbgDAXAEICAAcQAAgBA5AOQA6AOAOAFQAWAHAWASIgIAAQgYAAgSgGg");
	this.shape_82.setTransform(572,474.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#E1D3C3").s().p("AB/AlQgPgFg5gOQg3gPAAABIiBgYQgWgEgYgPQAcgEAWAEQCBAZgBABIAAAAIAAAAQABgBA4AOQA6ANAOAFQAWAHAWARIgIAAQgYAAgRgFg");
	this.shape_83.setTransform(573.3,469.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#E1D3C3").s().p("AB/AjQgOgFg6gNQg3gOAAABIiBgWQgXgEgXgPQAbgEAWAEQCBAXAAABQAAgBA5AOQA6AMAOAFQAXAHAVAQIgKAAQgWAAgRgFg");
	this.shape_84.setTransform(574.5,464.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#E1D3C3").s().p("AB/AiQgPgFg5gNQg3gNAAABQAAgBiBgTQgXgFgYgOIAYgDQAMAAAOACIBKANIA3AKQAAgBA5ANQA6ALAOAFQAXAGAWARIgLABQgWAAgRgFg");
	this.shape_85.setTransform(575.7,458.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#E1D3C3").s().p("ACZAkQgMAAgNgEIiAgcIiBgTQgYgEgXgOQAOgDAKAAQALAAAOACICCAVQAAgBA4AMQA7ALAOAEQAWAGAXARIgQABIgIgBg");
	this.shape_86.setTransform(576.9,453.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#E1D3C3").s().p("ACZAjQgMgBgNgDQgPgFg5gLQg4gMAAABQAAgBiBgQQgYgEgYgOQAPgDAJAAQAMgBAPACICAAUQABgBA5ALQA6AKAPAFQAXAGAWAQIgUABIgFAAg");
	this.shape_87.setTransform(577.9,448.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#E1D3C3").s().p("ACAAdQgOgEg6gLQg4gLAAABIiCgPQgXgEgYgNQAbgGAXADICBASQAAgBA5ALQA7AJAPAEQAXAHAWAPIgRABQgSAAgPgEg");
	this.shape_88.setTransform(578.9,442.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#E1D3C3").s().p("ACAAcQgOgEg6gLQg4gKAAABIiCgOQgWgDgZgNQAagGAXADIBKAIIA4AIQAAgBA5AKQA7AIAPAEQAVAGAYAQIgUABQgQAAgOgDg");
	this.shape_89.setTransform(579.9,437.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#E1D3C3").s().p("ACAAaQgOgEg6gJQg4gJAAABIg4gFIhKgIQgOgBgMgEIgVgKQAagHAXADIBKAIIA4AGQAAgBA5AKQA7AHAPAEQAXAGAXAPIgUABQgQAAgPgDg");
	this.shape_90.setTransform(580.8,432);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#E1D3C3").s().p("ACBAZQgPgEg5gIQg5gJAAABQAAgBiCgKQgXgDgZgMQAagHAXACIBLAHIA4AGQAAgBA5AJQA7AHAPAEQAVAFAZAPQgMABgMAAQgOAAgMgCg");
	this.shape_91.setTransform(581.6,426.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#E1D3C3").s().p("ACBAXQgOgDg7gIQg4gIAAABIiDgKQgWgCgZgMQAPgEAJgBQALgBAPABICBALQABgBA5AIQA8AHAOADQAXAFAXAPQgNACgMAAQgNAAgMgDg");
	this.shape_92.setTransform(582.3,421.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#E1D3C3").s().p("ACCAWQgPgEg6gHQg5gIAAABIiCgHQgYgDgYgLQAbgHAWABICCAKQAAgBA6AHQA7AHAPACQAXAFAXAOQgOADgNAAQgMAAgKgCg");
	this.shape_93.setTransform(583,415.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#E1D3C3").s().p("ACCAUQgPgDg6gHQg5gGAAABIiCgGQgYgCgZgLQAbgIAXABIBKAEIA4AEQAAgBA6AHQA7AHAPABQAYAFAWAOQgOACgNAAQgMAAgKgCg");
	this.shape_94.setTransform(583.6,410.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#E1D3C3").s().p("ACCATQgOgDg7gGQg5gGAAABIiCgFQgWgBgbgLQAagIAYABICCAGQAAgBA6AGQA7AGAPACQAYAEAXANQgPADgJAAIgFAAIgVgBg");
	this.shape_95.setTransform(584.1,404.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#E1D3C3").s().p("ACCARQgOgCg7gGQg5gFAAABIiCgFQgWAAgbgJQAbgJAWABQCCADAAACQAAgBA6AFQA8AFAPADQAVABAaAOQgRADgPAAIgSgBg");
	this.shape_96.setTransform(584.6,399.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#E1D3C3").s().p("ACCAPQiCgLAAABIiCgDQgWgBgbgIQAagJAXAAIBKACIA4ABQAAgBA6AFQA8AEAPADQAXACAYANQgRAEgPAAIgSgCg");
	this.shape_97.setTransform(585,393.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#E1D3C3").s().p("ACCAOQgOgCg7gEQg5gEAAABIiCgCQgWABgbgJQAagJAXAAQCDAAAAABQgBgBA6AFQA8AEAPACQAXADAYALQgRAEgRAAIgQgBg");
	this.shape_98.setTransform(585.4,388.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#E1D3C3").s().p("ACDANQgPgDg7gDQg5gDAAABIiCAAQgWAAgbgHQAYgKAZAAICCAAQAAgBA6ADQA8ADAPACQAYADAXALQgVAEgRAAIgLAAg");
	this.shape_99.setTransform(585.7,382.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#E1D3C3").s().p("ACDAMQgPgCg7gCQg5gDAAABQAAgBiCADQgWAAgbgIQAbgJAWAAIBKgCIA4AAQAAgBA6ACQA8ACAOACQAYADAYAKQgUAFgRAAIgMAAg");
	this.shape_100.setTransform(585.9,377.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#E1D3C3").s().p("ACDALQgPgCg7gBQg5gCAAABIiCAEQgYAAgZgJQAbgIAVgBIBLgCIA4gBQAAgBA6ABQA7ACAPACQAXACAZAKQgWAGgTAAIgIgBg");
	this.shape_101.setTransform(586,371.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#E1D3C3").s().p("AizAEQAZgIAXgBIBKgEIA5gCQAAgBA5ABQA9ABAOACQAWABAaAKQgbAIgXgCQgOgBg7gBQg5gBAAABIiCAFIgDAAQgVAAgZgIg");
	this.shape_102.setTransform(586.1,366.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#E1D3C3").s().p("AizAGQAagJAWgBIBKgEIA5gDQAAgBA5AAQA7AAAPABQAYADAZAJQgbAHgXgBQgPgCg6AAQg5AAAAABIiCAHIgFAAQgVAAgXgHg");
	this.shape_103.setTransform(586.1,360.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#E1D3C3").s().p("AizAIQAZgJAXgCICDgJQAAgBA5AAQA8gBAOABQAXACAaALQgaAGgXgBQgPgCg7ABQg5ABAAABIiCAJIgGAAQgTAAgYgHg");
	this.shape_104.setTransform(586,355);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#E1D3C3").s().p("AizAKQAagKAWgBQCDgMAAABQAAgBA5gCQA7gBAPABQAXABAaALQgcAGgVAAQgPgCg7ACQg5ABAAABQAAgBiBAMIgIAAQgTAAgXgGg");
	this.shape_105.setTransform(585.8,349.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#E1D3C3").s().p("AibASQgIgBgQgEQAagNAWAAIBKgHIA5gFQAAgBA4gCQA8gDAPABQAYABAYALQgaAGgWAAQgPgBg6ACQg6ACAAABIiBANIgOAAIgMAAg");
	this.shape_106.setTransform(585.6,343.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#E1D3C3").s().p("AiyAPQAZgMAWgDQCDgNAAABQAAgBA4gDQA8gEAOABQAYABAaAKQgcAIgWAAQgOAAg7ABQg5ADAAABIiBAOIgMABQgSAAgTgFg");
	this.shape_107.setTransform(585.3,337.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#E1D3C3").s().p("AiyARQAagNAVgDIBKgHIA5gHQAAgBA4gDQA8gEAPAAQAXAAAZAKQgbAKgVAAQgPgBg7ACQg5AEAAABQAAgCiAASIgPABQgQAAgTgFg");
	this.shape_108.setTransform(584.9,332.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#E1D3C3").s().p("AiyATQAXgMAYgEIBKgIIA4gIQAAgBA5gEQA6gFAQAAQAWAAAbAKQgaAKgWAAQgPgBg7AEQg5AEAAABIg3AHIhJALIgPABQgQAAgTgFg");
	this.shape_109.setTransform(584.4,326.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#E1D3C3").s().p("AiyAWQAXgNAYgEIBKgJIA4gJQAAgBA4gFQA8gGAPABQAVgBAbAJQgaALgVAAQgQAAg6AFQg5ADAAABIiAAUIgQABQgPAAgTgDg");
	this.shape_110.setTransform(583.9,320.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#E1D3C3").s().p("AixAYQAXgOAXgEIBJgKIA5gJQAAgBA4gGQA7gHAPABQAXgBAaAJQgZAKgXABQgPAAg6AGQg5AEAAABIg3AJIhJANIgSABQgPAAgQgDg");
	this.shape_111.setTransform(583.3,315.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#E1D3C3").s().p("AiZAdIgYgDQAZgOAVgEIBJgLIA5gKQAAgBA4gHQA7gHAPAAQAYgBAZAIQgaALgWABQgPABg6AHQg5AEAAABQAAgBh/AYQgMACgKAAIgEAAg");
	this.shape_112.setTransform(582.6,309.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#E1D3C3").s().p("AiYAfIgZgDQAYgOAWgEIBJgNIA5gKQAAgBA3gIQA7gIAPAAQAWgBAcAIQgaALgWABQgPABg6AIQg5AFAAABIh/AZQgMACgKAAIgDAAg");
	this.shape_113.setTransform(581.8,304.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#E1D3C3").s().p("AiwAfQAXgPAXgEIBIgOIA4gLQAAgBA4gJQA7gIAPgBQAXgBAaAIQgZALgWACQgQAAg5AJQg5AGAAABIh/AbQgLACgMAAQgNAAgNgCg");
	this.shape_114.setTransform(581,298.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#E1D3C3").s().p("AiwAhQAWgOAYgGIBIgOIA4gMQAAgBA3gJQA7gKAPAAQAXgCAbAHIgXAJQgLAEgOABQgPABg6AJQg4AGAAACQAAgCh+AeQgMADgOAAQgLAAgNgCgAAAAEIAAAAIAAAAg");
	this.shape_115.setTransform(580.1,293.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#E1D3C3").s().p("AivAjQAWgOAXgGIBIgQIA4gMQAAgCA3gJQA7gLAOAAQAZgDAZAIQgZAMgWACQgPABg6AKQg4AIAAABIh9AeQgOADgPAAQgKAAgLgCg");
	this.shape_116.setTransform(579.2,288);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#E1D3C3").s().p("AivAmQAXgQAWgFIBIgRIA4gNQAAgBA3gLQA6gLAPgBQAXgDAbAHQgaANgVACQgPABg6ALQg4AJAAABIh9AgQgOADgQAAIgUgBg");
	this.shape_117.setTransform(578.1,282.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#E1D3C3").s().p("AiuAoQAXgQAVgGIBIgSIA4gOQgBgBA3gLQA7gMAPgBQAWgCAbAGQgZANgWACQgOACg6ALQg4AJAAABQAAgBh9AjQgOAEgRAAIgSgBg");
	this.shape_118.setTransform(577,277.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#E1D3C3").s().p("AitAqQAVgQAXgGIBHgUIA4gOQgBgBA3gMQA6gMAPgCQAWgDAcAGQgYANgXADQgPACg5AMQg4AKAAABQAAgBh8AkQgOAEgLABIgGAAIgSgBgAAAADIAAAAIAAAAg");
	this.shape_119.setTransform(575.9,271.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#E1D3C3").s().p("AitAsQAXgQAVgHIBHgVIA3gOQAAgBA2gNQA6gNAPgCQAXgDAbAGQgZAOgVADQgPABg5AOQg4AKAAABQAAgBh8AmQgNAEgMABIgIAAIgQgBg");
	this.shape_120.setTransform(574.6,266.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#E1D3C3").s().p("AisAvQAWgRAVgHIBHgWIA3gPQAAgBA2gNQA6gPAPgBQAOgDALABQAKAAAOADQgXAOgXAEQgOACg5AOQg4ALAAABIh7AnQgRAFgWAAIgKAAg");
	this.shape_121.setTransform(573.3,261.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#E1D3C3").s().p("AirAxQAVgSAWgGIBFgYIA3gPQAAgBA3gOQA5gPAPgCQAWgEAbAFQgYAOgVAEQgPACg5APQg3AMAAABQAAgBh7ApQgSAGgVAAIgJAAg");
	this.shape_122.setTransform(572,256.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#E1D3C3").s().p("AirAzQAVgRAWgIIB8goQAAgBA2gPQA6gQAOgCQAWgEAcAFQgZAOgVAEQgOADg5APQg3ANAAABIh6AqQgTAGgXAAIgHAAg");
	this.shape_123.setTransform(570.5,251);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#E1D3C3").s().p("AiqA1QAUgRAWgIIBGgZIA2gRQAAgBA2gQQA5gRAPgCQAWgEAbAEQgXAOgWAFQgPACg4ARQg3ANAAABIg0ATIhFAZQgTAHgYAAIgGAAg");
	this.shape_124.setTransform(569,245.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#E1D3C3").s().p("Ah/AdIBFgaIA2gRQAAgCA1gQQA5gRAPgDQAWgFAbAEQgWAPgXAFQgOADg4ARQg3AOAAABIg0AUIhFAaQgVAHgcAAQAWgSAVgIg");
	this.shape_125.setTransform(567.5,240.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#E1D3C3").s().p("Ah/AfIBFgbIA2gSQgBgBA2gSQA4gSAPgCQAXgGAaAEQgWAPgXAGQgOACg4ASQg2APAAABIh4AvQgUAIgdABQAVgSAVgJg");
	this.shape_126.setTransform(565.9,235.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#E1D3C3").s().p("Ah+AhIBEgcIA2gUQgBgBA1gSQA5gTAOgCQAXgFAbADQgWAPgXAGQgOADg4ASQg2AQABABIg0AVIhEAcQgVAIgcABQAVgTAVgIg");
	this.shape_127.setTransform(564.1,230.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#E1D3C3").s().p("Ah+AiQB5gxAAABQAAgBA0gTQA5gUAOgDQAOgDAMgBQAJAAAPABQgXAQgVAGQgPADg3ATQg2ARABABIh3AyQgWAJgbABQAVgTAUgJg");
	this.shape_128.setTransform(562.4,225.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#E1D3C3").s().p("Ah9AkIBDgeIA1gVQAAAAA0gUQA4gUAOgEQAYgGAaADQgXAQgVAGQgPADg2AVQg2AQAAABIh2A1QgUAIgcACQAUgTAVgJg");
	this.shape_129.setTransform(560.6,220.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#E1D3C3").s().p("Ah9AmIBDgfIA1gWQgBgBA0gUQA4gVAPgDQANgEAMgBIAYABQgXAQgVAGQgOAEg2AUQg2ASABABIh2A2QgUAKgcABQAVgUATgIg");
	this.shape_130.setTransform(558.7,215.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#E1D3C3").s().p("Ah8AnIBCggIA1gWQgBgBA0gVQA3gWAPgDQAXgHAaACQgWARgVAGQgOAEg3AVQg1ATAAABQAAgBh0A5QgUAJgcACQAVgUATgJg");
	this.shape_131.setTransform(556.8,211);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#E1D3C3").s().p("Ah8AoIBCggIA0gXQAAgBAzgWQA3gWAPgEQAVgHAcACQgWARgVAGQgOAEg2AWQg1AUAAABIgxAZIhCAgQgVAKgbACQATgTAUgLg");
	this.shape_132.setTransform(554.8,206.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#E1D3C3").s().p("Ah7AqIBBghIA0gYQgBgBA0gWQA2gYAPgEQAWgGAbAAQgVARgWAIQgOAEg2AXQg0AUAAABIhyA7QgVAKgbADQAUgVATgKg");
	this.shape_133.setTransform(552.7,201.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#E1D3C3").s().p("Ah6AsIBAgiIA0gZQgBgBA0gXQA2gYAOgEQAVgIAcABQgWASgVAHQgOAFg1AXQg0AVABABIhzA8QgMAHgLADQgJACgPACQASgUAVgLg");
	this.shape_134.setTransform(550.6,196.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#E1D3C3").s().p("Ah6AuIBBgjIAzgZQgBgBAzgYQA2gZAOgFQAXgHAaAAQgVASgVAIQgOAEg1AYQg0AWABABIhyA+QgTAKgcAEQATgVATgKg");
	this.shape_135.setTransform(548.4,191.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#E1D3C3").s().p("Ah5AwIBAglIAygZQAAgBAygZQA2gZAOgFQAVgIAcAAQgWASgUAIQgOAFg1AZQgzAWAAABIgwAbIhAAlQgUAKgbAEQASgUAUgLg");
	this.shape_136.setTransform(546.2,187.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#E1D3C3").s().p("Ah4AxIBxhAQgBAAAygaQA2gaAOgFQAWgIAaAAQgSARgXAJQgOAFg0AZQgzAYAAAAIgvAdIg/AlQgVALgaAEQAQgUAVgMg");
	this.shape_137.setTransform(543.9,182.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#E1D3C3").s().p("Ah4AzIA/gmIAygbQgBgBAygaQA1gcAOgEQAWgJAagBQgUATgVAJQgNAFg0AaQgzAYAAABIhuBCQgUAMgaAFQAQgVAUgMg");
	this.shape_138.setTransform(541.6,178.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#E1D3C3").s().p("Ah3A0IA+gmIAygcQgBgBAxgbQA1gcAOgFQAVgJAbgBQgVATgTAJQgOAFg0AbQgyAZAAAAIhtBFQgTALgbAGQARgWATgMg");
	this.shape_139.setTransform(539.2,173.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#E1D3C3").s().p("Ah2A2IA+goIAwgcQAAgBAwgbQA0gdAOgFQAWgKAbgBQgUATgUAKQgOAFgzAbQgyAaAAABIguAeIg+AnQgUAMgaAGQAQgWAUgMg");
	this.shape_140.setTransform(536.7,169.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#E1D3C3").s().p("Ah2A4QBthHABABQAAgBAwgcQA0gdANgGQAVgJAcgCQgTATgVAKQgNAGg0AcQgxAaABABIgvAfIg8AoQgUANgbAFQARgVASgNg");
	this.shape_141.setTransform(534.2,164.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#E1D3C3").s().p("Ah1A5IA9gpIAwgeQgBgBAwgdQAzgeAOgGQAVgJAbgCQgSATgVAKQgOAGgyAdQgxAbABAAQgBAAhqBJQgSAMgbAIQAPgXATgNg");
	this.shape_142.setTransform(531.6,160.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#E1D3C3").s().p("Ah0A7IA8gqIAwgfQgBgBAvgdQAzgfAOgGQAUgKAcgDQgUAUgTAKQgOAGgxAeQgxAcAAAAIhpBLQgSANgbAHQAPgWATgOg");
	this.shape_143.setTransform(529,156.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#E1D3C3").s().p("AhzA9IA7gsIAvgfQgBgBAwgeQAyggAOgGQAUgKAbgDQgTAUgTALQgNAGgxAfQgxAcAAAAIgsAhIg7ArQgSANgbAIQAPgXASgNg");
	this.shape_144.setTransform(526.4,151.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#E1D3C3").s().p("AhyA+IA7gsIAuggQgBgBAvgeQAyghAOgGQAUgKAbgEQgTAVgTAKQgNAGgxAgQgwAdAAAAIgrAiIg7AsQgTANgaAIQAPgXASgOg");
	this.shape_145.setTransform(523.6,147.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#E1D3C3").s().p("AhxBAIA6gtIAughQgBgBAugfQAxghAOgHQAUgKAcgEQgUAVgSAKQgNAHgxAgQgvAeAAAAIgrAjIg6AtQgTANgZAIQAOgXASgOg");
	this.shape_146.setTransform(520.9,143.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#E1D3C3").s().p("AhwBCIA5guIAughQgBgBAughQAwghAOgHQAVgLAagEQgSAVgTALQgNAHgwAhQgvAeAAAAIgrAjIg5AuQgRANgbAJQAOgXASgOg");
	this.shape_147.setTransform(518,139.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#E1D3C3").s().p("AhvBEQAQgPBWhCQgBgBAtghQAxgiANgIQASgKAdgFQgUAWgRAKQgOAHgvAiQguAfABAAIhkBTQgRAOgaAIQAOgXARgOg");
	this.shape_148.setTransform(515.2,135.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#E1D3C3").s().p("AhuBFIA4gwIAsgiQgBgBAtgiQAwgjANgHQAUgMAbgEQgSAVgTAMQgMAHgvAiQguAgAAAAIgqAkIg4AwQgRAOgaAJQANgXASgPg");
	this.shape_149.setTransform(512.2,131.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#E1D3C3").s().p("AhtBHQAQgPBThFIArgjQAwgkANgHQATgMAbgFQgRAWgSALQgNAHgvAjIgtAhIhgBVQgRAPgaAJQAOgYAQgOgAAAAAIAAAAIAAAAg");
	this.shape_150.setTransform(509.2,127.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#E1D3C3").s().p("AhsBIQBhhWAAABIAAAAIAAAAQAAgBArgjQAwgkANgHQARgMAdgGQgSAWgSAMQgMAHgvAjQgsAiABAAIhgBXQgRAOgaALQANgZARgPg");
	this.shape_151.setTransform(506.2,123.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#E1D3C3").s().p("AhrBKIA2gyIArglQgBgBArgjQAuglANgIQAUgNAagFQgQAWgTAMQgMAIguAkQgsAiAAAAQhOBJgPAPQgRAPgaAKQAOgZAPgOg");
	this.shape_152.setTransform(503.1,119.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#E1D3C3").s().p("AhpBLIA1gyIApgmQgBgBArgkQAugmANgHQASgNAbgGQgPAWgTANQgMAIguAkQgrAjABAAQgBAAhcBaQgRAPgZALQAMgZARgQg");
	this.shape_153.setTransform(500,115.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#E1D3C3").s().p("AhoBNIA0gzIApgnQgBAAAqglQAtgnANgHQASgOAbgGQgPAVgSAOQgNAIgtAmQgqAjAAAAQAAAAhbBbQgQAPgZAMQAMgaAQgPgAAAAAIAAAAIAAAAg");
	this.shape_154.setTransform(496.9,112.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#E1D3C3").s().p("AhnBPIAzg1IApgmQgBgBApgmQAtgnAMgIQASgNAbgHQgPAXgSANQgMAIgsAmQgqAkAAAAIgmAoIgzA0QgQAQgZALQAMgZAPgPg");
	this.shape_155.setTransform(493.6,108.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#E1D3C3").s().p("AhmBQIAyg1IApgnQgCAAAqgnQAsgoAMgIQATgOAagHQgJANgGAHQgHAIgLAJQgNAHgrAoQgpAkAAAAQAAAAhYBeQgQAQgYAMQAMgaAOgQg");
	this.shape_156.setTransform(490.4,105);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#E1D3C3").s().p("AhlBRIAyg2IAngnQAAgBAognQAqgoANgIQASgOAbgJQgOAYgTAOQgLAHgrApIgpAlIhWBfQgQAQgZAMQAMgZAOgRg");
	this.shape_157.setTransform(487.1,101.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#E1D3C3").s().p("AhkBTIBYhfQgBAAAngoQAsgpAMgJQARgOAagIQgOAYgRANQgLAIgrAoQgoAnAAAAIgkAqIgxA2QgPAQgZAOQAKgZAPgSg");
	this.shape_158.setTransform(483.7,98);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#E1D3C3").s().p("AhiBVIAwg4IAmgoQgBgBAngpQAqgpAMgJQATgPAYgIQgNAXgRAPQgMAJgqAoQgnAnAAAAIgjAqIgxA4QgNAQgZANQAKgaAOgQgAAAAAIAAAAIAAAAg");
	this.shape_159.setTransform(480.3,94.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#E1D3C3").s().p("AhhBXIAvg5IAlgpQgBgBAngpQApgqAMgJQASgPAZgJQgNAYgRAOQgLAJgpAqQgnAnAAAAIhSBjQgQASgWAMQAJgaAOgQg");
	this.shape_160.setTransform(476.9,91.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#E1D3C3").s().p("AhfBYIAug5IAkgqQgBgBAmgqQApgrAMgJQAQgOAagKQgNAZgQAOQgMAJgoAqQgmAoAAAAIgiArIguA5QgPASgXANQAJgaAOgRg");
	this.shape_161.setTransform(473.4,88);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#E1D3C3").s().p("AheBaIAtg7IAkgqQgBAAAlgrQApgsALgIQASgRAYgJQgMAYgRAPQgLAKgnAqQgmApAAAAQAAAAhOBlQgOASgYAOQAJgaANgRg");
	this.shape_162.setTransform(469.9,84.8);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#E1D3C3").s().p("AhcBbIAsg7IAjgrQgBgBAkgrQAogsALgJQARgQAZgKQgNAZgPAPQgLAJgnAsQglApAAAAIghAsIgsA7QgOARgXAPQAIgZAOgTg");
	this.shape_163.setTransform(466.3,81.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#E1D3C3").s().p("AhbBcIArg7IAjgrQgBgBAjgsQAngsALgKQASgRAYgKQgNAagPAPQgLAJgmAsQgkAqAAAAIhLBoQgOATgXAOQAIgaANgTg");
	this.shape_164.setTransform(462.7,78.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#E1D3C3").s().p("AhZBeIAqg9IAhgsQgBgBAjgsQAmgsALgLQARgQAYgLQgMAagPAPQgKAJgmAuIgjAqIhJBpQgOASgWAQQAGgbAOgSg");
	this.shape_165.setTransform(459,75.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#E1D3C3").s().p("AhYBfIBKhpQgBgBAigsQAlgvALgJQAQgRAZgLQgLAZgPAQQgLAKglAtQgiArAAAAIhIBqQgNATgWAPQAGgZANgUg");
	this.shape_166.setTransform(455.4,72.6);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#E1D3C3").s().p("AhWBhQALgTA9hYQgBAAAhguQAlguAKgKQAQgQAZgNQgMAagOAPQgLALgjAtQgiAsAAAAQAAAAhGBrQgNATgWAQQAGgaANgTg");
	this.shape_167.setTransform(451.6,69.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#E1D3C3").s().p("AhUBiIAng+IAfguQgBAAAgguQAkgwALgJQAOgRAZgNQgKAagPAQQgKALgjAtQghAtAAAAIgdAvIgnA9QgMAUgWAPQAGgcAMgRg");
	this.shape_168.setTransform(447.8,66.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#E1D3C3").s().p("AhTBkQALgTA6haQgBgBAggvQAigvALgKQAPgRAYgNQgKAagOAQQgLALgiAuQggAtAAAAQAAAAhCBuQgMATgWAQQAGgbALgSgAAAAAIAAAAIAAAAg");
	this.shape_169.setTransform(444,64.2);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#E1D3C3").s().p("AhRBlIAlg/IAdgvQgBgBAfgvQAigwALgLQAOgRAYgNQgJAagOARQgKAKgiAvQgfAuAAAAIhABvQgLASgWASQAFgbALgTg");
	this.shape_170.setTransform(440.2,61.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#E1D3C3").s().p("AhQBnIBBhwQgBAAAegwQAhgxAKgLQAQgSAXgMQgKAagNARQgKAKghAwQgeAuAAAAIgbAwIgkBAQgMAUgUAQQAFgbAKgSg");
	this.shape_171.setTransform(436.3,58.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#E1D3C3").s().p("AhNBoIA+hxQgBAAAdgwQAhgyAKgLQAOgRAXgOQgIAagOARQgKALgfAwQgeAvAAAAIgaAxIgiBAQgMAUgUARQAEgbALgTg");
	this.shape_172.setTransform(432.4,56.4);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#E1D3C3").s().p("AhMBpIAihBIAbgwQgBgBAcgwQAggzAJgLQAOgSAYgOQgJAbgNARQgKALgeAxQgdAvAAAAQAAAAg6ByQgLAVgVARQAFgcAJgTg");
	this.shape_173.setTransform(428.5,53.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#E1D3C3").s().p("AhKBqIAghCIAagwQgBAAAcgyQAegzAKgLQAPgSAWgOQgIAZgNATQgJALgeAxQgcAwAAAAIg5BzQgKAVgUASQADgcAKgUg");
	this.shape_174.setTransform(424.5,51.6);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#E1D3C3").s().p("AhIBrIAfhBIAZgyQgBAAAbgyQAegzAJgLQANgSAXgQQgIAbgMASQgJALgdAyQgbAwAAAAIgXAyIggBCQgJAUgUATQACgbAKgVg");
	this.shape_175.setTransform(420.5,49.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#E1D3C3").s().p("AhGBtIAehDIAYgyQgBAAAagyQAdg0AJgLQANgTAWgPQgHAagMASQgIAMgdAyQgaAxAAAAIgWAyIgeBDQgKAUgTATQACgcAJgTg");
	this.shape_176.setTransform(416.4,47);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#E1D3C3").s().p("AhFBuIAehDIAXgyIAAAAIAAAAQgBgBAZgyQAbg0AJgMQANgTAWgQQgHAdgLAQQgJAMgbAzQgZAxAAAAIgzB2QgIAUgUAUQACgbAIgVg");
	this.shape_177.setTransform(412.3,44.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#E1D3C3").s().p("AhCBvIAchDIAWgzIAAAAIAAAAQgBAAAYgzQAag1AKgMQAMgTAWgQQgGAagMATQgJAMgaAzQgYAyAAAAIgUAzIgcBEQgJAUgTAUQACgcAIgUg");
	this.shape_178.setTransform(408.2,42.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#E1D3C3").s().p("AhABwIAwh3QgBAAAXg0QAZg1AJgMQANgUAUgPQgFAagLATQgIAMgZA0QgYAyAAAAIguB3QgIAVgSAUQABgbAHgVg");
	this.shape_179.setTransform(404,40.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#E1D3C3").s().p("Ag+BxIAZhEIAUgzQgBgBAWg0QAZg1AJgNQAMgTAVgRQgGAcgKASQgIAMgZA0QgWAzAAAAIgsB4QgIAWgSAUQAAgbAIgWg");
	this.shape_180.setTransform(399.8,38.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#E1D3C3").s().p("Ag8BzIAYhFIATg0QgBAAAWg1QAYg2AIgMQALgTAVgSQgEAagLAUQgIAMgXA1QgWAzAAAAIgpB5QgHAVgSAVQgBgbAHgVg");
	this.shape_181.setTransform(395.6,37);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#E1D3C3").s().p("Ag5B0IAWhGIASgzQgBgBAVg0QAXg3AHgMQALgUAVgSQgEAbgKATQgIANgWA1QgVAzAAAAQAAAAgnB6QgHAVgRAVQgBgcAHgUg");
	this.shape_182.setTransform(391.3,35.2);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#E1D3C3").s().p("Ag4B1IAWhGIARg1QgBABATg2QAWg3AIgMQALgUAUgTQgEAdgKATQgHAMgWA2QgTAzAAAAIgQA1IgVBFQgHAXgQAUQgCgbAGgVg");
	this.shape_183.setTransform(387.1,33.6);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#E1D3C3").s().p("Ag1B2IAkh7QgBAAASg2QAVg2AHgOQALgUATgTQgDAcgJAUQgHANgUA1QgTA0AAAAIgiB7QgHAVgQAXQgCgcAGgVg");
	this.shape_184.setTransform(382.8,32);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#E1D3C3").s().p("AgzB3IAThHIAPg1QgBAAASg2QATg3AHgNQALgVATgSQgDAbgJAUQgHAMgTA3QgSA0AAAAIggB8QgFAVgQAWQgDgbAFgVg");
	this.shape_185.setTransform(378.4,30.4);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#E1D3C3").s().p("AgwB4IARhHIAOg1QgBgBASg2QARg4AHgNQAJgUAUgTQgDAbgIAUQgHANgTA3QgQA0AAAAIgMA2IgRBGQgGAWgPAWQgDgcAFgUg");
	this.shape_186.setTransform(374,29);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#E1D3C3").s().p("AguB5IAQhIIANg1QgBAAARg3QAQg4AGgNQAJgUATgUQgBAcgJATQgGANgSA3QgPA1AAAAIgLA2IgQBHQgFAWgPAWQgDgcAEgUg");
	this.shape_187.setTransform(369.6,27.6);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#E1D3C3").s().p("AgrB6IAOhIIAMg1QgBgBAQg3QAPg4AGgNQAJgVASgUQgBAbgIAVQgGANgQA3QgPA1AAAAIgKA2IgOBHQgEAVgPAYQgFgaAFgWg");
	this.shape_188.setTransform(365.2,26.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#E1D3C3").s().p("AgpB6IAYh9QgBgBAPg2QANg6AHgNQAJgWARgTQgBAdgHATQgGANgPA3QgOA2AAAAIgJA3IgNBHQgFAXgNAWQgFgaAEgXg");
	this.shape_189.setTransform(360.7,25.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#E1D3C3").s().p("AgmB7IALhIIAKg2QgBAAAOg3QAMg5AGgOQAJgVARgVQAAAcgHAUQgIAUgZBnIgTB+QgEAWgNAYQgGgbAEgWg");
	this.shape_190.setTransform(356.2,24);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#E1D3C3").s().p("AgjB8IAKhIIAJg3QgCABANg4QAMg5AFgOQAIgUARgXQABAcgHAVQgIAUgWBnQgBAAgQB/QgEAVgNAZQgFgcADgVg");
	this.shape_191.setTransform(351.7,23);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#E1D3C3").s().p("AghB9IAJhJIAIg2QAShrAIgUQAIgWAQgVQACAagHAWQgIAUgUBoQgBAAgNB/QgCANgEAMIgKAVQgGgZACgXg");
	this.shape_192.setTransform(347.1,22.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#E1D3C3").s().p("AgeB9IAHhIIAHg3QgCAAALg4QAJg5AGgOQAGgWARgWQACAbgHAWQgHAUgSBoQgBAAgLB/QgBAOgEALIgJAWQgHgbACgWg");
	this.shape_193.setTransform(342.6,21.2);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#E1D3C3").s().p("AgbB+IAFhJIAGg2QAQhsAFgVQAHgWAQgVQACAagGAWQgHAUgQBpIgDA3IgGBIQgCAWgMAZQgHgbACgVg");
	this.shape_194.setTransform(338,20.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#E1D3C3").s().p("AgYB+IAIh/QgBAAAJg5QAIg6ADgOQAGgVAQgWQADAbgGAVQgGAVgOBoIgCA3IgFBIQgBAYgMAXQgHgZABgXg");
	this.shape_195.setTransform(333.3,19.8);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#E1D3C3").s().p("AgWB/IAGiAQAMhsAFgUQAGgYAOgVQAEAbgFAVQgGAVgMBpIgCA4IgCBIQgBAWgLAZQgJgaABgWg");
	this.shape_196.setTransform(328.7,19.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#E1D3C3").s().p("AgTB/IABhJIADg2QAJhsAGgWQAEgXAPgVQADAZgEAXQgGAVgKBpIgCA3IAABJQAAAXgLAYQgIgcAAgUg");
	this.shape_197.setTransform(324.1,18.7);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#E1D3C3").s().p("AgQCAIAAhJIABg3QAHhsAGgVQADgXAOgWQAEAbgEAVQgFAVgIBpQgBAAAACAQAAAWgIAaQgJgaAAgWg");
	this.shape_198.setTransform(319.4,18.3);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#E1D3C3").s().p("AgNCAIgBhJIAAg3QAFhsAFgVQAEgWANgYQAFAcgEAVQgFAVgGBpQgBAAADCAQAAAVgHAbQgKgagBgWg");
	this.shape_199.setTransform(314.7,18);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#E1D3C3").s().p("AgICBIgDhJIgCg4QAEhrAFgWQADgUAMgaQAFAbgDAWQgFAVgDBpQgCAAAGCAQABAWgJAaQgIgZgBgWg");
	this.shape_200.setTransform(310,17.8);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#E1D3C3").s().p("AgFCBIgEhJIgDg4QAChrAEgWQAEgXAKgXQAHAcgEAVQgEAVgBBpIADA3IAEBJQABAXgIAZQgJgagCgVg");
	this.shape_201.setTransform(305.4,17.7);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#E1D3C3").s().p("AgDCBIgKiBQgBhrAEgVQADgWALgZQAGAbgCAWQgEAVABBpIAEA3IAFBIQABAXgHAaQgKgYgBgXg");
	this.shape_202.setTransform(300.8,17.6);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#E1D3C3").s().p("AgCCBIgHhIIgFg5QgDhrAEgVQADgXAKgYQAGAcgCAUQgDAVADBqIAFA3IAHBIQACAWgHAaQgLgYgCgWg");
	this.shape_203.setTransform(296,17.7);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#E1D3C3").s().p("AAACBIgIhIIgGg5QgGhqAEgWQABgVAMgZQAGAZgCAWQgBAWADBpIAGA3IAJBIQACAWgGAbQgNgYgBgXg");
	this.shape_204.setTransform(291.3,17.9);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#E1D3C3").s().p("AABCBIgIhIIgIg4QgHhqADgWQABgXAMgYQAGAaAAAWQgCAVAFBpQgBAAASB+QADAWgGAbQgNgXgDgXg");
	this.shape_205.setTransform(286.5,18.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#E1D3C3").s().p("AADCBIgKhHIgIg4QgKhrADgVQABgXALgZQAIAbgBAVQgCAVAHBpIAJA3IALBHQADAVgFAcQgNgYgEgWg");
	this.shape_206.setTransform(281.8,18.4);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#E1D3C3").s().p("AAFCCIgLhIIgJg4QgMhqACgWQABgVAKgaQAJAZAAAWQgCAVAJBpIAKA3IANBHQADAXgFAaQgNgYgFgVg");
	this.shape_207.setTransform(277.1,18.9);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#E1D3C3").s().p("AAHCBIgMhHIgLg4QgNhpABgWQAAgXAKgZQAKAaAAAVQgCAWAMBoIAKA2IAOBHQAFAXgFAaQgOgXgFgWg");
	this.shape_208.setTransform(272.5,19.4);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#E1D3C3").s().p("AAKCBIgZh+QgQhpABgWQAAgXAJgZQAKAZAAAWQgBAVAOBoIALA2IAQBHQAFAVgEAbQgPgXgFgVg");
	this.shape_209.setTransform(267.9,20);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#E1D3C3").s().p("AAMCBIgPhGIgNg4QgShpABgWQAAgWAIgaQALAbAAAUQAAAWAPBnIANA2IARBGQAFAXgDAaQgPgWgGgWg");
	this.shape_210.setTransform(263.3,20.7);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#E1D3C3").s().p("AAPCBIgRhGIgOg3QgUhpAAgWQAAgXAIgZQALAZABAWQAAAVARBnIAOA2IATBGQAFAUgDAcQgQgWgFgVg");
	this.shape_211.setTransform(258.8,21.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#E1D3C3").s().p("AARCBIgShGIgPg3QgWhoAAgWQgCgXAIgaQAMAaABAVQAAAVAUBnIAPA1IAUBGQAGAWgDAaQgQgWgGgUg");
	this.shape_212.setTransform(254.3,22.4);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#E1D3C3").s().p("AATCAIgThFIgQg3QgYhngBgWQgCgWAIgaQAMAZABAVQABAVAWBmIAQA2IAVBFQAGAUgCAcQgQgXgHgUg");
	this.shape_213.setTransform(249.8,23.3);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#E1D3C3").s().p("AAVB/Iglh6QgbhogBgVQgCgYAHgZQAMAYADAWQABAVAXBmIARA1IAXBEQAHAWgCAbQgQgWgIgVg");
	this.shape_214.setTransform(245.3,24.4);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#E1D3C3").s().p("AAYB/Igoh6QgdhmgBgWQgDgWAGgbQAOAYACAWQACAVAZBlQAAAAAqB5QAHAVgBAbQgRgWgHgUg");
	this.shape_215.setTransform(240.9,25.5);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#E1D3C3").s().p("AAaB/IgahEIgRg2QgehmgCgVQgDgWAGgbQANAYADAVQACAWAcBkQAAAAAsB4QAHAUAAAcQgSgVgHgUg");
	this.shape_216.setTransform(236.5,26.7);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#E1D3C3").s().p("AAbB+IgahDIgSg1QghhlgCgWQgDgWAFgbQAOAaADATQADAWAeBjIATA0IAbBDQAIAVAAAbQgSgTgJgWg");
	this.shape_217.setTransform(232.1,28);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#E1D3C3").s().p("AAdB+IgchDIgSg0QgjhlgCgWQgEgXAFgaQAOAZAEAUQACAVAhBjIAUA0IAbBCQAJAWABAaQgTgUgJgUg");
	this.shape_218.setTransform(227.8,29.4);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#E1D3C3").s().p("AAgB9IgdhCIgUg0QglhkgDgWQgEgWAEgbQAPAYAEAUQAEAWAiBiIAVAzIAdBDQAIAUACAaQgTgSgJgVg");
	this.shape_219.setTransform(223.4,30.9);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#E1D3C3").s().p("AAiB9IgfhCIgVgzQgmhkgDgWQgFgWAEgaQAPAWAFAWQADAUAlBiIAVAzIAfBBQAIAUADAbQgUgSgJgUg");
	this.shape_220.setTransform(219.1,32.4);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#E1D3C3").s().p("AAkB8IgghBIgWgzQgohjgEgWQgFgWAEgaQAPAWAFAVQAEAVAnBhIAWAzIAfBAQAKAVACAaQgUgSgJgUg");
	this.shape_221.setTransform(214.9,34);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#E1D3C3").s().p("AAmB7IghhAIgXgzQgphigEgVQgGgXADgaQAQAWAFAVQADAPAVA1QAUAxABAAIAXAyIAhBAQAJAUADAbQgUgTgKgTg");
	this.shape_222.setTransform(210.6,35.8);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#E1D3C3").s().p("AAoB6Igig/IgYgzQgBABgWgzQgWg2gDgOQgGgXADgaQAQAWAGAVQAEAVArBfIAXAyIAiA/QALAVADAaQgVgSgKgUg");
	this.shape_223.setTransform(206.4,37.5);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#E1D3C3").s().p("AAqB5Ig8hwQgthggFgWQgHgWADgbQARAYAFATQAFAVAtBeQgCAAA9BwQALATAEAbQgVgRgLgUg");
	this.shape_224.setTransform(202.2,39.4);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#E1D3C3").s().p("AAtB5Iglg/IgZgxQgCABgXgyQgYg1gEgPQgHgVACgbQAQAWAIAUQAFAVAuBdIAZAxIAlA+QAKATAFAbQgVgSgLgSg");
	this.shape_225.setTransform(198,41.4);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#E1D3C3").s().p("AAuB4Iglg+IgbgxQgBABgYgxQgag1gDgOQgHgUABgcQARAVAHAUQAEAOAYA0QAYAwABgBIAbAwIAlA+QAMATAEAaQgVgRgMgSg");
	this.shape_226.setTransform(193.9,43.4);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#E1D3C3").s().p("AAxB3QhDhsABgBQgCABgZgxQgag0gEgPQgHgWAAgaQASAVAHAUQAGAVAyBbQgCAABDBtQAMASAFAbQgWgRgLgSg");
	this.shape_227.setTransform(189.7,45.5);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#E1D3C3").s().p("AAzB2Igog8IgcgwQgCABgagxQgbgzgEgOQgIgWAAgbQASAWAIATQAGAVAzBaQgBACBFBpQAMASAGAbQgWgPgMgTg");
	this.shape_228.setTransform(185.7,47.7);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#E1D3C3").s().p("AA1B1Igpg7IgdgvQg2hcgHgVQgIgVAAgbQASAVAIATQAFAOAbAyQAaAvABgBIAdAvIApA7QAMATAGAaQgXgSgLgQg");
	this.shape_229.setTransform(181.6,49.9);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#E1D3C3").s().p("AA3B0Igqg7IgeguQg3hbgIgVQgIgVgBgaQASASAJAVQAIAVA1BYIAeAuIAqA7QANAUAGAYQgXgPgMgSg");
	this.shape_230.setTransform(177.6,52.2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#E1D3C3").s().p("AA5BzIgrg6IgfguQg5hZgIgVQgIgVgCgbQAUAVAIATQAHAUA4BXIAfAuIArA6QAMASAIAaQgXgPgNgSg");
	this.shape_231.setTransform(173.7,54.6);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#E1D3C3").s().p("AA7ByQgKgLgiguIgfgtQg8hZgHgVQgJgUgCgbQATATAJAUQAIATA5BYQgBgBBMBnQANAQAIAbQgWgOgOgSg");
	this.shape_232.setTransform(169.7,57.1);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#E1D3C3").s().p("AA8BxIgsg4IghgtQgBABgeguQgfgxgGgOQgKgVgCgaQAVAUAJASQAHAUA7BWIAhAsIAsA4QAOASAHAZQgXgOgOgRg");
	this.shape_233.setTransform(165.8,59.6);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#E1D3C3").s().p("AA/BwIgug4IghgsQgCACgfguQgggwgGgPQgJgTgDgbQAUASAKATQAFAOAfAvQAfAtABgBIAhArIAuA4QANAQAJAbQgXgNgOgSg");
	this.shape_234.setTransform(161.9,62.3);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#E1D3C3").s().p("ABBBvIgvg3IgigsQgCABgggtQgggwgGgNQgLgUgDgbQAUASALATQAGAOAgAvQAfArABAAIBQBiQAOAQAJAZQgYgNgNgQg");
	this.shape_235.setTransform(158.1,65);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#E1D3C3").s().p("ABDBuIgwg2IgjgrQgBABghgsQgigwgGgNQgKgVgEgaQAVASAKATQAJATA/BSIAjArIAvA2QAOAQAKAaQgYgNgOgQg");
	this.shape_236.setTransform(154.3,67.7);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#E1D3C3").s().p("ABEBtIgwg1IgkgrQhChTgKgUQgKgTgEgbQAUARALATQAHANAhAuQAhArABgBIAjApIAwA2QAPAQAKAZQgYgMgPgQg");
	this.shape_237.setTransform(150.6,70.5);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#E1D3C3").s().p("ABGBsIhWheQhDhTgKgTQgLgVgEgZQAUARAMASQAGANAjAuQAhAqABgBIAkApIAxA0QAQARAJAYQgXgLgQgQg");
	this.shape_238.setTransform(146.8,73.4);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#E1D3C3").s().p("ABIBqIgzgzIgkgqQhFhQgKgUQgMgUgFgaQAWASALASQAKASBDBPIAlApIAxAzQAQARAKAZQgXgMgQgQg");
	this.shape_239.setTransform(143.2,76.4);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#E1D3C3").s().p("ABJBpIgygyIgmgpQgCABgjgqQgkgtgIgNQgLgTgGgbQAWARALASQAIANAkAsQAiApACgBIAkAoIAzAyQAPAQAMAZQgZgMgQgPg");
	this.shape_240.setTransform(139.5,79.4);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#E1D3C3").s().p("ABLBoIhahaQhIhOgKgUQgMgTgGgaQAWARAMARQAHANAkArQAkApABgBIAmAnIAzAyQARAQALAYQgYgKgRgQg");
	this.shape_241.setTransform(135.9,82.5);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#E1D3C3").s().p("ABMBnIg0gxIgngnQgBABglgpQgmgsgIgNQgMgTgGgaQAXARALARQALASBHBMIBbBXQAOAOAOAaQgZgKgRgPg");
	this.shape_242.setTransform(132.4,85.7);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#E1D3C3").s().p("ABOBlIg1gwIgngmQhLhMgLgTQgMgSgHgbQAXAQAMARQALASBIBLIAnAmIA1AwQAQAPANAYQgZgKgRgPg");
	this.shape_243.setTransform(128.8,88.9);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#E1D3C3").s().p("ABQBkIg3gvIgngmQhMhLgLgSQgMgSgIgbQAYAQALAQQAIANAnApQAlAnABgBIAoAlIA2AvQARAPAMAYQgagLgQgNg");
	this.shape_244.setTransform(125.4,92.2);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#E1D3C3").s().p("ABRBjIg2guIgpgmQgBACgngnQgogqgJgNQgMgSgIgaQAYAQAMAQQAMASBKBIIAoAkIA3AvQAQAOAOAYQgagKgRgNg");
	this.shape_245.setTransform(122,95.6);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#E1D3C3").s().p("ABTBiIg4guIgogkQgCABgogmQgpgqgHgMQgNgSgJgaQAZAPAMARQAMARBLBHIApAkIA4AtQAQAPANAXQgYgIgSgOg");
	this.shape_246.setTransform(118.6,99);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#E1D3C3").s().p("ABUBgIg4gsIgqgkQgBABgogmQgqgpgIgMQgOgSgHgZQAXAOANARQAIAMApAnQAnAlABgBIApAjIA4AtQARAOAOAXQgagJgRgNg");
	this.shape_247.setTransform(115.2,102.5);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#E1D3C3").s().p("ABWBfIg5grIgqgjQhQhHgNgSQgOgRgIgaQAXANAOARQAIAMApAoQAoAkABgCIAqAjIA5AsQAQAMAPAYQgZgHgSgOg");
	this.shape_248.setTransform(111.9,106);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#E1D3C3").s().p("ABXBdIg6gqQgqgiAAgBQgBACgqglQgqgngJgMQgOgRgJgaQAYANAOARQAIALAqAnQAoAjABgBIAqAiIA6ArQARAMAPAYQgagIgSgNg");
	this.shape_249.setTransform(108.7,109.6);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#E1D3C3").s().p("ABZBcIg7gqIgrghQhShEgNgSQgPgRgJgZQAZAOANAPQAJAMAqAmQApAjABgCQgBABBmBKQARAMAQAYQgagHgSgNg");
	this.shape_250.setTransform(105.5,113.3);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#E1D3C3").s().p("ABaBbIg7gpIgsghQhThCgNgSQgPgRgJgZQAYAOAOAPQAJAMArAlQApAiABgBIArAgIA7ApQASAMAPAXQgYgGgUgNg");
	this.shape_251.setTransform(102.3,117);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#E1D3C3").s().p("ABbBZIhnhIQgBACgrgjQgtglgJgMQgPgQgKgaQAYAMAPAQQANARBSBAIBoBHQASANAPAWQgagHgTgMg");
	this.shape_252.setTransform(99.2,120.8);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#E1D3C3").s().p("ABdBYIg9gnIgsggQgBACgsgiQgtglgJgMQgPgRgLgXQAZAMAOAPQAKALArAkQArAhABgBIAsAfIA8AmQASANARAVQgagEgTgNg");
	this.shape_253.setTransform(96.2,124.6);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#E1D3C3").s().p("ABeBWIg9gmIgtgeQgBABgsghQgtgkgKgLQgQgRgKgZQAZAMAPAPQAJAMAsAiQArAhABgCIAtAfIA8AmQATAMAQAVQgbgFgSgMg");
	this.shape_254.setTransform(93.2,128.5);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#E1D3C3").s().p("AB2BgQgLgEgMgHIg9glQgugdAAgBQhXg9gOgRQgPgQgLgZQAYAMAPAPQAOAQBVA8QgBACBrBAQAUANAPAUQgPgCgHgDg");
	this.shape_255.setTransform(90.2,132.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#E1D3C3").s().p("ABgBUIhshCQgBACgsggQgvgjgJgLQgQgPgMgZQAZAKAPAPQAKALAtAiQAsAfABgBIAtAdIA+AkQAUALAQAVQgZgEgVgLg");
	this.shape_256.setTransform(87.3,136.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#E1D3C3").s().p("ABiBSIg/gjQgugcAAgBQgBACgtgfQgvgigKgLQgRgRgLgXQAZAKAQAPQAJALAuAhQAsAeABgBIAuAcIA+AjQATALARAVQgbgFgSgKg");
	this.shape_257.setTransform(84.4,140.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#E1D3C3").s().p("ABjBRIg/gjIgvgcQgBACgugeQgwgigJgLQgQgPgNgYQAaAKAPAOQAKALAuAgQAtAeABgBIAuAbIA/AiQAUAMARAUQgagDgUgLg");
	this.shape_258.setTransform(81.6,144.7);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#E1D3C3").s().p("ABkBPIhvg8QAAABgvgeQgwgggKgLQgRgPgMgYQAZAJARAPQAKAKAuAgQAuAdAAgBQAAABBuA7QATAKASAVQgagDgUgLg");
	this.shape_259.setTransform(78.8,148.8);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#E1D3C3").s().p("ABlBOIhwg7Qhbg2gPgQQgRgPgMgYQAaALAPANQALAKAuAfQAuAdABgCQgBACBwA5QASAJATAVQgbgDgTgKg");
	this.shape_260.setTransform(76.1,153);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#E1D3C3").s().p("ABmBMIhBgfIgvgZQhdg2gOgQQgRgNgNgYQAZAJAQANQALAKAvAfQAvAcABgCIAuAaIBAAfQATAKAUAUQgbgDgUgKg");
	this.shape_261.setTransform(73.5,157.3);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#E1D3C3").s().p("ABnBLIhAgfIgxgZQhdg0gPgPQgSgPgNgXQAZAJASAOQAPAOBaAzIBxA3QAUAKASAUQgagDgVgJg");
	this.shape_262.setTransform(70.8,161.7);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#E1D3C3").s().p("ABoBJIhBgdIgwgYQgCABgwgbQgxgegLgKQgRgOgOgXQAaAIARANQAKAKAwAdQAvAbACgCIAvAYIBBAeQATAIAUAUQgcgCgTgJg");
	this.shape_263.setTransform(68.3,166);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#E1D3C3").s().p("ABqBIIhCgdIgxgYQgBACgxgaQgxgdgMgKQgQgNgPgYQAaAIARANQAKAJAxAdQAwAaABgCQgBACByAyQAUAJATATQgbgCgTgIg");
	this.shape_264.setTransform(65.8,170.5);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#E1D3C3").s().p("ABqBGIhCgbQgxgWAAgBQgBACgxgaQgzgdgLgKQgRgNgOgXQAaAIARAMQALAKAxAcQAvAZABgCIAxAWIBCAcQAUAJATATQgagBgVgJg");
	this.shape_265.setTransform(63.4,174.9);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#E1D3C3").s().p("ABrBFIhCgbIgygWQAAACgygaQgzgbgLgKQgRgMgPgYQAYAHATANQALAJAxAbQAwAZABgCIBzAxQAWAIASATQgbgCgUgHg");
	this.shape_266.setTransform(61,179.5);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#E1D3C3").s().p("ABsBEIhDgaIgxgVQgBACgygZQgzgbgMgKQgSgNgPgXQAaAHASANQAMAJAxAaQAwAYABgBIAxAUIBDAbQATAHAWATQgbAAgVgIg");
	this.shape_267.setTransform(58.7,184);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#E1D3C3").s().p("ABtBCIh1gtQhhgsgRgOQgTgOgOgVQAaAHASALQALAJAyAaQAwAXABgBIAyAUIBDAZQAUAHAUASQgbAAgUgHg");
	this.shape_268.setTransform(56.4,188.6);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#E1D3C3").s().p("ABuBAIhEgYIgygUQgBACgygXQg0gagMgJQgTgNgOgVQAaAGASAMQALAJAyAZQAxAWABgCQgBACB2AqQAUAHAVASIgGAAQgXAAgSgHg");
	this.shape_269.setTransform(54.2,193.3);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#E1D3C3").s().p("ABvA/Ih3gqQAAACgzgXQg1gZgLgJQgTgMgPgWQAbAGARALQALAJAzAYQAxAWABgCIAyATIBEAXQAVAIAUARIgGAAQgXAAgSgGg");
	this.shape_270.setTransform(52,198);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#E1D3C3").s().p("ABvA9IhEgWIgygSQgBACgzgXQg1gXgMgJQgTgNgPgVQAaAGASALQAMAJAzAXQAxAVABgBQAAABB2AnQAVAGAVARIgKABQgVAAgRgGg");
	this.shape_271.setTransform(49.9,202.8);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#E1D3C3").s().p("ABwA8IhDgWIg0gRQgBACgzgXQg1gVgMgJQgTgMgQgWQAaAGATALQARAMBgAmIAzARIBFAVQAUAHAVAQIgLABQgUAAgRgFg");
	this.shape_272.setTransform(47.9,207.6);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#E1D3C3").s().p("ACJA+QgKAAgOgEIh4glQAAACg1gWQg1gVgMgJQgTgMgQgUQAbAEASALQASAMBhAlIAyAQIBEAUQAVAGAWARIgRAAIgHAAg");
	this.shape_273.setTransform(45.9,212.4);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#E1D3C3").s().p("ACKA8QgLAAgNgEIhFgTIgzgQQgBACg0gWQg1gUgNgIQgTgLgRgVQAbAEASALQAMAIA0AVQAzATABgBIAzAPIBEATQAVAGAWARIgRAAIgHAAg");
	this.shape_274.setTransform(44,217.3);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#E1D3C3").s().p("ACLA6QgLAAgNgEIhFgSQg0gOAAgBQgBACg0gVQg2gTgMgJQgUgLgQgUQAaAEATAKQAMAIA0AVQAzASABgCQAAACB4AgQAVAGAWAPIgTABIgFAAg");
	this.shape_275.setTransform(42.1,222.3);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#E1D3C3").s().p("ABzA1IhFgRIg0gPQAAACg1gUQg2gTgNgIQgTgLgRgUQAbAEASAKQASALBjAhIAzAOIBFARQAWAGAVAPIgUABQgPAAgNgDg");
	this.shape_276.setTransform(40.3,227.2);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#E1D3C3").s().p("AB0AzIhGgQIg0gOQAAACg1gTQg2gSgNgIQgTgKgSgVQAbAEATAKQAMAHA1AUQAzARABgCIB4AeQAVAFAXAPIgVABQgOAAgNgDgAAAADIAAAAIAAAAg");
	this.shape_277.setTransform(38.6,232.2);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#E1D3C3").s().p("AB1AxIh6gcQAAACg2gSQg3gSgMgIQgUgKgRgUQAaADAUAKQAMAHA1ATQAzAQABgCIA0ANIBFAPQAWAFAVAPIgVACQgNAAgNgDg");
	this.shape_278.setTransform(36.9,237.3);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#E1D3C3").s().p("AB1AwIh6gbQgBACg1gSQg3gQgNgIQgUgKgRgUQAcADASAJQAMAIA1ASQA0APABgCIAzAMIBGAPQAVAEAXAPQgNACgMAAQgMAAgLgCg");
	this.shape_279.setTransform(35.3,242.4);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#E1D3C3").s().p("AB2AuIhGgOIg1gLQAAACg2gRQg3gQgNgHQgUgLgSgTQAaACAUAKQANAHA1ARQA0APABgCQgBABB7AYQAWAEAWAOQgOADgMAAQgMAAgKgCg");
	this.shape_280.setTransform(33.8,247.6);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#E1D3C3").s().p("AB2AsIhGgMIg1gLQAAACg2gRQg3gPgNgHQgUgKgTgTQAaACAVAJQAMAHA2AQQA0APABgCIA0AKIBGANQAWAEAWANQgOADgJABIgEAAQgJAAgMgCg");
	this.shape_281.setTransform(32.3,252.8);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#E1D3C3").s().p("AB3AqIhGgLIg1gKQgBACg2gQQg3gOgNgHQgVgKgSgTQAdADARAIQANAHA2APQA0AOABgCIA0AJIBGAMQAWAEAXANQgQAEgOAAIgSgCg");
	this.shape_282.setTransform(30.9,258);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#E1D3C3").s().p("AB4AoIhHgKIg1gJQAAACg2gPQg4gOgNgHQgVgJgSgSQAZAAAVAJQANAHA2APQA0ANABgCIB7ATQAVAEAXANQgSADgOAAIgPgBg");
	this.shape_283.setTransform(29.5,263.2);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#E1D3C3").s().p("AB4AmIh8gRQAAACg3gPQg3gMgNgHQgVgJgTgSQAcABASAIQANAGA3AOQA0AMABgCIA1AJIBGAJQAVADAYANQgRAEgPAAIgQgBgAAAABIAAAAIAAAAg");
	this.shape_284.setTransform(28.3,268.5);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#E1D3C3").s().p("AB5AlIhHgIQg1gHAAgBQAAACg3gOQg4gMgNgGQgVgJgTgSQAbABATAHQANAHA3ANQA0ALABgCQAAACB7APQAWADAXAMQgRAEgRAAIgNAAg");
	this.shape_285.setTransform(27,273.8);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#E1D3C3").s().p("AB5AjIhGgIIg2gHQAAACg3gNQg4gLgNgGQgVgJgUgRQAcAAATAHQANAGA3ANQA1ALAAgCIA1AHIBGAHQAWADAYAMIgXAFIgMAAIgNAAgAAAABIAAAAIAAAAg");
	this.shape_286.setTransform(25.9,279.2);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#E1D3C3").s().p("AB6AhIhHgHIg2gGQAAACg3gMQg4gKgOgHQgTgHgVgSQAZgBAWAIQANAGA2AMQA1AKABgCIA1AGIBGAGQAWACAYAMQgTAGgSAAIgKAAg");
	this.shape_287.setTransform(24.8,284.6);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#E1D3C3").s().p("AB6AfIhHgFIg2gGQhpgSgUgHQgUgIgUgRQAbAAAUAGQANAGA2AMQA2AJAAgCQAAACB7AJQAWABAYAMQgVAGgTAAIgHAAg");
	this.shape_288.setTransform(23.8,290);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#E1D3C3").s().p("AB7AdIh9gJQAAACg3gKQg5gLgNgEQgVgIgVgRQAagBAVAHQAOAGA2AKQA1AJABgCIA1AEIBHAFQAWABAYAMQgXAGgSAAIgGAAg");
	this.shape_289.setTransform(22.9,295.5);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#E1D3C3").s().p("AB7AbIhHgDIg2gEQAAACg3gKQg5gKgOgEQgUgHgVgRQAcgBATAGQANAGA3AKQA2AHAAgCIA1AEIBHAEQAVABAZALQgWAHgUAAIgFAAg");
	this.shape_290.setTransform(22,301);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#E1D3C3").s().p("AB7AZIhHgCQg1gDgBgBQABACg4gJQg5gJgOgEQgVgHgUgQQAagCAVAGQANAGA3AJQA2AHAAgCIA1ADIBHADQAXABAYAKIgXAHQgJABgLAAIgFAAg");
	this.shape_291.setTransform(21.2,306.5);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#E1D3C3").s().p("AB8AXIhIgBIg1gDQhqgMgUgHQgWgGgVgQQAbgCAUAGQANAFA4AJQA2AGAAgCIA1ACIBHACQAVAAAZALQgWAIgWAAIgCAAgAAAAAIAAAAIAAAAg");
	this.shape_292.setTransform(20.5,312.1);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#E1D3C3").s().p("AA1AVQg2gBAAgBQAAACg3gIQg6gHgNgFQgWgGgVgPIAYgBQAKABANADQANAGA4AHQA2AFAAgBIA1ABIBHABQAWAAAZALQgYAJgXAAIgPAAIg4gBgAAAAAIAAAAIAAAAg");
	this.shape_293.setTransform(19.8,317.7);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#E1D3C3").s().p("AA1AUIg2gBQABACg4gHQg5gHgOgFQgVgEgWgQQAagDAWAGQANAFA3AHQA2AEAAgBQAAAAB8AAQAWAAAZAKQgXAJgYABIgaAAIgtAAg");
	this.shape_294.setTransform(19.2,323.2);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#E1D3C3").s().p("AAAASQAAACg4gGQg5gGgOgFQgXgEgUgPQAagDAVAFQANAFA4AGQA2AEAAgBQAAABB9gBQAWAAAYAHQgYAKgWAAIhHACIg2gBg");
	this.shape_295.setTransform(18.7,328.8);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#E1D3C3").s().p("AAAARQhrgGgUgIQgWgDgVgPQAbgDAUAEQANAFA4AFQA2AEAAAAIA1gBIBHgCQAUgBAbAHIgWAIQgLADgNAAIhHADIgvABIgHgBg");
	this.shape_296.setTransform(18.3,334.5);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#E1D3C3").s().p("AAAAQQhqgFgVgHQgVgEgWgOQAagEAVAFQAUAGBnAGQAAABB9gGQAXAAAXAGQgZALgVABIhHADIg1ABIgBAAg");
	this.shape_297.setTransform(17.9,340.1);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#E1D3C3").s().p("Ag3ANQg5gEgPgEQgWgFgWgNQAagEAWAEQANAFA4AEQA2ADAAgCIA2gCIBGgEQAVgBAbAIQgaAJgUACIhHAEIg3ACIgGABIgxgDg");
	this.shape_298.setTransform(17.6,345.8);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#E1D3C3").s().p("Ag3ANQg5gDgPgEQgTgEgZgNQAagFAVAEQAPAEA3AEQA2ADAAgCIA1gDIBHgFQAXgBAYAHQgXAKgXABIhGAFIg3ADQAAABgIAAIgvgCg");
	this.shape_299.setTransform(17.4,351.5);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#E1D3C3").s().p("Ag2ANQg5gCgPgEQgWgFgWgMQAZgFAWAFQAOAEA4ACQA1ACAAgCQAAACB9gMQAVgBAaAIQgXAJgXACIhGAGIg4ADQAAACgMAAIgqgCg");
	this.shape_300.setTransform(17.3,357.2);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#E1D3C3").s().p("Ag2APQg5gBgPgEQgXgFgVgLQANgDAKAAQALgBANACQAOAEA3ACQA2ABAAgCIA2gEIBGgHQAVgCAaAHQgYAKgVACIhHAHIg3AFQAAABgQAAIgmgBg");
	this.shape_301.setTransform(17.2,362.8);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#E1D3C3").s().p("Ag2ARQg5gBgPgEQgWgEgXgMQAPgDAJAAQAKgBAOACQAOAEA3ABQA2ABAAgCQAAACB8gPQAWgDAZAHQgXALgWACIhHAIIg3AFQAAACghAAIgVAAg");
	this.shape_302.setTransform(17.2,368.3);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#E1D3C3").s().p("Ah9AOQgWgEgXgLQAbgFAUADQAOADA4AAQA1AAAAgCIA1gFIBHgJQAVgCAaAGQgXAMgWABIhGAJIg3AGQAAACg2AAQg6AAgOgEgAAAgCIAAAAIAAAAg");
	this.shape_303.setTransform(17.3,373.8);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#E1D3C3").s().p("Ah9AQQgXgDgWgNQAZgEAWADQAOABA4AAQA1AAAAgBQAAABB8gRQAUgDAbAGIgVAKQgLAEgNAAIhGAKIg4AGQABACg2ABIgOAAQgtAAgNgDg");
	this.shape_304.setTransform(17.5,379.2);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#E1D3C3").s().p("Ah9ASQgXgDgWgNQAagDAVABQAOACA4gBQA1gBAAAAIA1gIIBHgKQAWgEAZAGQgXAOgWACIhGAJIg3AIQAAACg2ABIghABQgdAAgKgDg");
	this.shape_305.setTransform(17.7,384.7);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#E1D3C3").s().p("Ah8AUQgWgDgYgMQAagFAWABQAOADA3gCQA1gCAAAAQAAAAB7gTQAOgCALAAQAJABAOADQgZAOgTADIhGAJIg3AIQAAACg2ACIgnABQgZAAgIgCg");
	this.shape_306.setTransform(17.9,390.1);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#E1D3C3").s().p("Ah8AWQgWgDgYgMQAagGAWACQAOACA3gCQA1gDAAAAIA1gIIBGgNQAOgCALAAQAIABAOADQgWANgWAEQgPACg2AJQg3AJAAgBQAAACg2ADIguACQgSAAgIgCgAAAAAIAAAAIAAAAg");
	this.shape_307.setTransform(18.3,395.5);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#E1D3C3").s().p("Ah7AYQgWgCgYgMQAYgHAXABQAOADA3gDQA1gEAAAAQAAAAB7gWQAWgEAZAEQgUAOgXAFIhGALIg3AJQABACg2AEQghACgTAAQgOAAgGgBg");
	this.shape_308.setTransform(18.7,401);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#E1D3C3").s().p("Ah8AaQgXgDgWgLQAagHAUABQAOADA4gEQA1gEAAgBIA1gJIBFgPQAWgEAaAFQgXAOgVAEQgPAEg3AJQg1ALgBgBQABACg3AEQgjADgTAAIgSgBg");
	this.shape_309.setTransform(19.3,406.4);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#E1D3C3").s().p("Ah7AbQgWgBgYgMQAagHAVABQAOACA4gEQA0gFAAgBQAAAAB6gZQAVgEAbAEQgWAOgVAFIhGANIg2ALQAAACg2AFQglADgTAAIgQgBg");
	this.shape_310.setTransform(19.8,411.8);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#E1D3C3").s().p("Ah6AdQgVgBgZgLQAYgIAWABQAPACA3gGQA0gFAAgBIA1gKIBFgQQAWgFAaAEQgWAPgVAFIhGAOIg2ALQABACg2AGQgqAEgTAAIgLgBg");
	this.shape_311.setTransform(20.4,417.2);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#E1D3C3").s().p("Ah5AfQgXgBgYgLQAZgIAWAAQAOACA3gGQA0gGAAgBQAAABB5gcQAXgFAZADQgVAPgVAGIhFAPIg2AMQAAACg1AGQgqAEgTAAIgLAAg");
	this.shape_312.setTransform(21.1,422.5);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#E1D3C3").s().p("Ah5AhQgXgBgYgLQAagIAVAAQAOACA3gHQA0gGAAgCQAAACB5gfQAVgFAbADQgXAQgUAFIhFAQQg1AOgBgBQABACg2AHQgsAFgTAAIgIAAg");
	this.shape_313.setTransform(21.9,427.9);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#E1D3C3").s().p("Ah5AiQgWAAgYgKQAZgJAVAAQAPABA3gHQAzgHAAgCQAAABB5gfQANgDALgBQAJAAAOABQgVAQgVAGIhEAQIg2AOQABACg2AIQgtAGgTAAIgIgBg");
	this.shape_314.setTransform(22.7,433.2);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#E1D3C3").s().p("Ah4AkQgVAAgagKQAagJAUAAQAPABA3gIQAzgIAAgCQAAADB5giQANgEALAAQAIgBAPACQgUAPgWAHQgPAFg1AMQg1APgBgBQABADg2AIQgwAGgSAAIgFAAgAAAAAIAAAAIAAAAg");
	this.shape_315.setTransform(23.6,438.5);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#E1D3C3").s().p("Ah4AmQgXAAgYgKQAagKAUAAQAPABA3gIQAzgJAAgCIA1gMIBDgVQANgDALgBIAXABQgVAPgUAHIh6AhQABACg2AJQgwAIgSAAIgFAAg");
	this.shape_316.setTransform(24.6,443.9);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#E1D3C3").s().p("Ah4AnQgUAAgagJQAXgKAXAAQAPABA2gJQAzgKAAgCQAAADB3glQANgEAMgBIAXABQgVAQgUAHIhEATIg2APQACACg2AKQgxAJgSAAIgFgBg");
	this.shape_317.setTransform(25.6,449.2);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#E1D3C3").s().p("Ah3ApQgWABgZgJQAagKAUgBQAPABA3gKQAzgKgBgCIA0gOIBEgWQAWgGAYABQgUARgUAHIhEAUIg1AQQABACg1AKQgxAJgSAAIgFAAg");
	this.shape_318.setTransform(26.6,454.4);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#E1D3C3").s().p("AilAjQAagLAUgBQAOABA3gKQAygLAAgCIA0gOIBDgXQAVgHAaACQgTAQgWAHIhCAVQg1ASAAgBQAAACg1ALQg4ALgPgBIgEAAQgTAAgYgIg");
	this.shape_319.setTransform(27.8,459.6);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#E1D3C3").s().p("AilAlQAZgLAVgBQAPABA2gLQAygLAAgCQAAABB3goQAUgHAaABQgSAQgWAIIhDAWIg1ARQABACg1AMQg3ALgQAAIgEAAQgUAAgXgIg");
	this.shape_320.setTransform(29,464.8);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#E1D3C3").s().p("AikAnQAZgLAUgBQAPAAA2gLQAzgMAAgCIAzgQIBCgYQAUgIAbABQgTARgVAIIhDAWIg0ASQABACg1ANQg4AMgPgBIgFAAQgUAAgWgHg");
	this.shape_321.setTransform(30.2,470);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#E1D3C3").s().p("AikApQAZgLAUgCQAPABA2gNQAygMAAgCIAzgRIBDgZQAMgEALgCIAYgBQgVASgUAIIhCAXIg0ASQABADg1AMQg3ANgQAAIgGAAQgSAAgXgHg");
	this.shape_322.setTransform(31.6,475.2);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#E1D3C3").s().p("AijAsQAZgMAUgCQAPAAA1gNQAzgNgBgCIAzgRIBCgaQAUgHAbAAQgTARgVAIIhBAZQg0AUAAgBQAAACg0ANQg4AOgPgBIgIAAQgRAAgWgFg");
	this.shape_323.setTransform(32.9,480.4);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#E1D3C3").s().p("AiMAzQgIgBgOgEQAWgMAXgCQAOAAA2gOQAygOgBgCIAzgRIBBgbQAVgIAaAAQgUASgTAIIhCAZIgzAUQABACg1AOQg3AOgPAAIgNAAIgMAAg");
	this.shape_324.setTransform(34.4,485.5);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#E1D3C3").s().p("AiiAwQAXgMAWgDQAPAAA1gOQAygOgBgCQABABBzgvQATgIAcgBQgTASgUAJIhBAaQgzAVgBgBQABACg0APQg3APgPAAIgKAAQgRAAgVgFg");
	this.shape_325.setTransform(35.9,490.6);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#E1D3C3").s().p("AihAyQAYgNAVgCQAOgBA1gOQAygPAAgCQAAABBzgwQAUgJAagBQgSATgVAJIhAAaIg0AVQABACg0APQg2AQgPAAIgMABQgRAAgTgFg");
	this.shape_326.setTransform(37.4,495.7);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#E1D3C3").s().p("AigA0QAXgMAVgDQAPgBA1gPQAxgQAAgCIAygTIBAgdQATgJAbgBQgTATgTAJIhAAbIgzAVQABACg0AQQg3AQgPABIgOAAQgPAAgSgEg");
	this.shape_327.setTransform(39,500.8);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#E1D3C3").s().p("AigA2QAZgNAUgDQAOAAA1gRQAxgQAAgCIAxgUIBAgeQAVgJAagBQgSATgUAJIhAAdIgzAVQABADgzAQQg3ARgPAAIgQABQgPAAgRgEg");
	this.shape_328.setTransform(40.7,505.8);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#E1D3C3").s().p("AifA4QAZgNATgDQAOgBA1gRQAxgQAAgCIAxgVIBAgfQATgIAbgDQgTAUgTAJQhwA1gBgCQAAADgzARQg3ARgOABIgRABQgPAAgQgEg");
	this.shape_329.setTransform(42.5,510.8);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#E1D3C3").s().p("AieA6QAWgNAWgEQAOgBA0gRQAxgRAAgCIAxgWIA/gfQAUgJAagDQgRAUgUAKIhAAfIgxAVQABADgzARQg3ATgPAAIgRACQgOAAgQgEg");
	this.shape_330.setTransform(44.3,515.8);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#E1D3C3").s().p("AiHA/QgJAAgNgDQAWgOAVgEQAOgBA1gSQAxgRgBgDQAAACBwg3QAMgGAKgDIAYgEQgUAVgRAJIg/AgIgyAWQABACgzATQg3ATgOAAQgLADgKAAIgEgBg");
	this.shape_331.setTransform(46.1,520.8);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#E1D3C3").s().p("AiGBBIgWgDQAWgOAVgEQAOgBA0gTQAwgSAAgCIAxgXIA+ggQATgKAbgDQgSAUgTAKIg+AhIgyAWQACACgzAUQg2ATgPABQgLACgKAAIgEAAg");
	this.shape_332.setTransform(48,525.7);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#E1D3C3").s().p("AicBAQAVgNAWgFQAPgCAzgTQAxgTgBgCQAAABBug5QAUgLAagDQgSAUgTALIg+AhIgxAYQABACgyATQg2AUgOACQgLACgLAAQgNAAgNgDg");
	this.shape_333.setTransform(50,530.6);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#E1D3C3").s().p("AibBCQAYgOATgFQAPgBAzgUQAwgUgBgCQAAABBug6QAUgLAZgDQgRAUgSALIg+AiIgxAYQABACgyAUQg2AVgOABQgLACgMAAQgMAAgNgCg");
	this.shape_334.setTransform(52,535.5);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#E1D3C3").s().p("AiaBEQAWgPAVgEQAOgCAzgUQAwgVgBgCIBtg7QATgKAagEQgQATgTAMIg9AjIgxAZQABACgyAVQg1AVgOACQgLACgNAAQgMAAgMgCg");
	this.shape_335.setTransform(54,540.3);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#E1D3C3").s().p("AiZBGQAXgPATgFQAOgCA0gVQAvgVgBgCQAAABBsg9QATgLAagEQgQAVgTALIg9AkIgwAZQACACgyAVQg1AWgOACQgMADgOAAQgKAAgMgCg");
	this.shape_336.setTransform(56.2,545.1);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#E1D3C3").s().p("AiYBIQAVgPAVgFQAOgCAzgWQAvgVgBgCQABABBrg/QATgMAZgDQgQAVgSALIg9AkIgvAaQABACgxAWQg1AXgPACQgMACgOAAIgVgBg");
	this.shape_337.setTransform(58.3,549.9);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#E1D3C3").s().p("AiXBKQAVgPAUgGQAPgCAzgWQAugWAAgCIBqg/QATgMAagEQgRAWgSAKIg8AmIgvAaQABACgwAXQg1AXgPACQgMADgPAAIgUgBg");
	this.shape_338.setTransform(60.6,554.6);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#E1D3C3").s().p("AiWBMQAVgQAUgGQAPgCAygXQAvgWgBgCIAugbIA7gmQASgLAagFQgPAUgSANIg8AmIgvAbQACACgxAXQg0AYgPACQgNAEgQAAIgSgBg");
	this.shape_339.setTransform(62.8,559.3);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#E1D3C3").s().p("AiWBOQAWgQAUgGQAPgDAxgXQAvgXgCgCIAugbIA8gnQASgMAagFQgQAWgSAMIg7AmIgvAcQACACgwAYQg1AYgOADQgNADgLABIgFAAIgTgBg");
	this.shape_340.setTransform(65.2,564);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#E1D3C3").s().p("AiUBPQAVgQATgGQAPgCAygZQAtgXAAgCQABABBmhEQASgLAagHQgPAWgRAMIg7AoIguAbQABACgwAZQgzAZgPADQgNAEgMAAIgEABIgSgCg");
	this.shape_341.setTransform(67.6,568.6);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#E1D3C3").s().p("AiTBSQATgQAWgHQAOgDAxgZQAugYgBgCQABACBmhGQASgMAZgGQgOAWgSAMIg6AoIguAdQACACgwAZQg0AagOACQgPAFgVAAIgLAAg");
	this.shape_342.setTransform(70,573.2);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#E1D3C3").s().p("AiSBTQAWgRASgGQAOgDAxgZQAugZgBgCIAtgcIA5gpQATgNAYgGQgPAXgQAMIg6ApIguAdQACACgwAZQgzAbgOADQgRAFgTAAIgLgBg");
	this.shape_343.setTransform(72.5,577.7);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#E1D3C3").s().p("AiRBVQAVgRATgGQAOgDAxgaQAtgZgBgDQABACBkhIQARgNAagHQgPAYgQALIg5AqIgtAeQABACgvAaQgzAbgOADQgQAGgWAAIgJgBgAACAFIAAAAIAAAAg");
	this.shape_344.setTransform(75,582.2);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#E1D3C3").s().p("AiQBXQAVgRATgHQAOgDAxgbQAtgagCgCIBkhHQATgOAYgGQgPAXgQAMIg4AqIgtAfQACACgvAbQgyAbgPADQgRAGgXAAIgHAAg");
	this.shape_345.setTransform(77.6,586.7);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#E1D3C3").s().p("AiPBZQATgRAVgIQAOgDAvgbQAugbgCgCIAsgeIA3grQASgNAZgHQgPAXgQAMIg3ArIgtAfQACACgvAcQgxAcgPADQgSAHgXAAIgGAAg");
	this.shape_346.setTransform(80.2,591.1);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#E1D3C3").s().p("AiOBbQATgRAVgIQAOgEAvgcQAsgbgBgCIArgeIA3gsQASgNAZgIQgOAWgQAOIg4AsIgrAfQABACguAdQgxAcgPAEQgNAFgLABIgOABIgJAAg");
	this.shape_347.setTransform(82.9,595.5);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#E1D3C3").s().p("AiNBcQAVgSATgHQANgEAvgcQAtgcgCgCIArgfIA2gsQASgOAZgIQgOAXgQAOIg3AsIgrAgQABACgtAdQgyAdgOAEQgTAIgWAAIgGgBg");
	this.shape_348.setTransform(85.6,599.8);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#E1D3C3").s().p("AhlBFQAOgEAvgeQAsgcgCgBQABABBghPQAQgNAZgIQgNAXgQAOIg2AtIgrAgQACACguAdQgxAfgOADQgSAIgcABQASgTAUgHg");
	this.shape_349.setTransform(88.4,604.1);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#E1D3C3").s().p("AhkBGQAOgEAvgeQArgcgBgCQABABBdhQQARgNAZgJQgMAWgRAPIg1AuQgqAigBgBQACACgtAeQgwAfgOADQgUAIgbABQATgSATgIg");
	this.shape_350.setTransform(91.2,608.3);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#E1D3C3").s().p("AhiBHQANgEAugeQArgegCgCIAqghIA1guQARgPAYgIQgNAYgQAOIg0AuIgqAiQACACgtAeQgwAfgOAFQgTAIgcABQASgSAVgJg");
	this.shape_351.setTransform(94.1,612.5);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#E1D3C3").s().p("AhiBIQAOgEAugfQArgegCgCQABABBchRQAQgPAYgJQgKAXgRAPIg0AvIgqAiQACACgtAgQguAfgPAFQgMAFgLACIgYADQASgSAUgKg");
	this.shape_352.setTransform(97,616.7);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#E1D3C3").s().p("AhhBJQAOgEAtgfQAqgegBgCIBchSQAPgOAZgKQgNAZgOANIg0AwQgoAjgBAAQACABgsAgQgvAhgOAEQgUAJgaACQASgTATgKg");
	this.shape_353.setTransform(99.9,620.8);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#E1D3C3").s().p("AhgBLQAOgEAtggQApgggBgBIBbhUQAQgOAYgKQgMAZgPANIgzAxIgoAjQACACgsAgQguAhgPAFQgTAKgbABQATgTASgJg");
	this.shape_354.setTransform(102.9,624.8);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#E1D3C3").s().p("AhfBMQAOgFAsggQApgggBgCIAngjIAygxQARgPAXgKQgKAYgQAPIgyAyIgoAjQACACgrAhQguAhgOAFQgMAGgLADIgXADQAQgTAUgKg");
	this.shape_355.setTransform(106,628.8);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#E1D3C3").s().p("AheBNQAOgFAsghQAogggBgCIAngjIAxgyQAQgPAYgLQgLAYgPAQIgxAyIgoAkQACACgrAhQgtAjgOAEQgUAKgaADQARgTATgLg");
	this.shape_356.setTransform(109.1,632.7);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#E1D3C3").s().p("AhcBOQANgEArgiQApgggCgCQABAABWhXQAPgQAYgLQgKAZgPAQIgwAyIgnAlQACABgrAjQgtAjgOAFQgSAKgbACQARgTATgLg");
	this.shape_357.setTransform(112.2,636.6);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#E1D3C3").s().p("AhbBQQANgFArgiQAogigCgCIAmgkIAwgzQAOgPAZgMQgKAYgPAQIgwAzIgmAlQACACgqAjQgtAjgNAGQgMAGgLADQgIADgPABQARgTATgLg");
	this.shape_358.setTransform(115.4,640.4);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#E1D3C3").s().p("AhaBRQANgGArgiQAnghgCgDQACABBThaQAQgQAWgLQgKAagOAPIgvA0IgmAlQACACgpAjQgsAkgOAGQgRAKgcAEQARgVASgKg");
	this.shape_359.setTransform(118.6,644.2);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#E1D3C3").s().p("AhZBSQANgGAqgjQAngigCgCQABACBThcQAPgRAXgLQgKAZgOAQIguA1IglAmQABACgoAjQgsAlgOAGQgSALgbAEQARgUASgMg");
	this.shape_360.setTransform(121.9,647.9);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#E1D3C3").s().p("AhXBUQANgGApgkQAmgjgBgCIBRhbQAPgQAXgMQgKAZgNAQIgtA1IglAnQABACgoAkQgqAlgOAGQgTALgaAEQARgVASgKg");
	this.shape_361.setTransform(125.2,651.6);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#E1D3C3").s().p("AhWBVQANgGApgkQAmgkgCgCIBQhcQAPgRAWgMQgIAZgOAQIgtA2IgkAnQACACgnAlQgrAmgOAGQgTAMgZAEQAPgUATgMg");
	this.shape_362.setTransform(128.5,655.2);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#E1D3C3").s().p("AhVBXQANgHAoglQAlgkgBgCIAjgnIAsg2QAOgRAWgNQgHAYgOASIgsA2IgkAoQACACgmAlQgqAngOAGQgRALgbAGQAQgVARgLg");
	this.shape_363.setTransform(131.9,658.7);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#E1D3C3").s().p("AhUBYQANgHAoglQAlglgCgCQABABBNhgQAOgRAWgNQgIAagNAQIgrA3IgjApQACABgmAmQgqAogNAGQgSAMgbAFQAQgVARgLg");
	this.shape_364.setTransform(135.3,662.2);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#E1D3C3").s().p("AhTBZQANgHAngmQAlglgCgCIAigoIAqg4QANgRAXgNQgIAagNAQIgqA4IgiApQACACgmAmQgpAogNAHQgRAMgbAFQAPgVARgMg");
	this.shape_365.setTransform(138.8,665.6);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#E1D3C3").s().p("AhRBaQANgHAmgmQAkgmgCgCIAhgoIApg5QANgRAXgOQgHAZgNASIgqA4IghAqQACABglAnQgoAogNAIQgTAMgZAGQAOgVASgNg");
	this.shape_366.setTransform(142.3,669);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#E1D3C3").s().p("AhQBbQANgHAmgnQAjgmgCgCQACACBHhkQANgRAWgPQgHAagMARIgoA5IghAqQACACglAoQgoApgNAHQgRAMgaAHQAQgXAPgMg");
	this.shape_367.setTransform(145.8,672.2);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#E1D3C3").s().p("AhOBcQAMgHAmgoQAigmgCgCIBIhjQANgSAVgOQgGAYgMATIgoA5IggArQACABgkApQgnApgNAIQgQAMgbAHQAOgWARgNg");
	this.shape_368.setTransform(149.4,675.5);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#E1D3C3").s().p("AhMBeQAMgIAkgoQAjgngDgCIBHhkQAMgSAVgPQgFAagMARIgoA7QgeArgBAAQACABgiAqQgnApgNAIQgSANgZAHQAOgWARgNg");
	this.shape_369.setTransform(153,678.6);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#E1D3C3").s().p("AhLBfQAMgHAlgpQAggogBgCIBEhlQAMgSAVgPQgFAagMARIglA7IggArQACACgiApQgmArgMAIQgRANgaAHQAOgWAQgNg");
	this.shape_370.setTransform(156.6,681.7);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#E1D3C3").s().p("AhJBgQAMgIAjgpQAggpgBgBQABABBBhoQAMgSAVgPQgFAagLASIglA7IgfAsQADACgiAqQglArgNAIQgKAIgKAFQgIAEgOAEQAOgXAQgNg");
	this.shape_371.setTransform(160.3,684.7);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#E1D3C3").s().p("AhIBhQAMgIAjgqQAggogCgCIBBhoQALgRAVgRQgFAagLASIgkA8QgcAtgBAAQACABghArQglAsgMAIQgRAOgZAIQANgXAQgOg");
	this.shape_372.setTransform(164,687.7);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#E1D3C3").s().p("AhHBjQAMgJAjgqQAegpgBgCIAbgtIAjg7QALgSAWgRQgFAagKASIgjA8IgdAuQADABgiAsQgjAsgMAIQgQANgaAKQAMgYAQgNg");
	this.shape_373.setTransform(167.8,690.6);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#E1D3C3").s().p("AhFBkQAMgJAhgqQAfgrgCgBQABAAA8hqQALgTAUgQQgEAagKATIgiA9QgbAtgBAAQADABggAsQgjAtgMAJQgQAOgZAJQAMgYAPgNg");
	this.shape_374.setTransform(171.6,693.4);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#E1D3C3").s().p("AhDBlQAMgJAggrQAegrgCgCIAagtIAhg9QAKgSAVgSQgEAbgKASIghA+QgaAugBAAQADABgfAsQgiAugMAJQgQAPgZAJQALgXAQgPg");
	this.shape_375.setTransform(175.4,696.1);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#E1D3C3").s().p("AhBBmQALgJAggsQAdgrgCgCIAagtIAgg+QAJgTAVgRQgDAagKATIggA+IgaAuQADACgfAsQghAvgMAIQgQAPgZAKQAMgYAPgOg");
	this.shape_376.setTransform(179.3,698.8);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#E1D3C3").s().p("Ag/BnQALgJAfgsQAcgsgCgBIA4htQAJgTAUgSQgCAagJAUQg3BtgCAAQACABgdAuQghAugMAJQgJAKgKAGQgGAEgOAGQALgYAPgPg");
	this.shape_377.setTransform(183.2,701.4);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#E1D3C3").s().p("Ag+BoQAMgJAegtQAcgsgDgCIAZguIAdg/QAKgTASgSQgBAagJATQg0BvgCgBQADACgdAuQghAvgLAJQgPAPgYALQAKgYAOgPg");
	this.shape_378.setTransform(187.1,703.9);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#E1D3C3").s().p("Ag8BpQALgJAeguQAbgsgDgCQACABAyhvQAJgUATgSQgBAagJAUIgdBAQgWAvgBAAQACABgcAvQgfAwgLAJQgOAPgZAMQALgZANgPg");
	this.shape_379.setTransform(191,706.4);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#E1D3C3").s().p("Ag6BqQAMgJAcguQAagtgDgCQACABAxhwQAHgSAUgUQgBAZgIAVQgxBwgCAAQACABgbAvQgdAwgMAKQgJAKgJAGQgHAFgOAGQAKgYAOgQg");
	this.shape_380.setTransform(195,708.7);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#E1D3C3").s().p("Ag4BrQALgJAcgvQAZgtgCgCQACABAthxQAIgTATgUQAAAagJAUQgFAQgVAxQgVAxgBgBQADACgaAvQgdAxgMAKQgOAQgYAMQAJgYAOgRg");
	this.shape_381.setTransform(199,711);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#E1D3C3").s().p("Ag2BsQALgKAbguQAYgvgCgBQABABAshyQAIgTASgUQAAAagHAUIgZBCIgVAwQACABgaAwQgbAygMAJQgNAQgYANQAJgZANgQg");
	this.shape_382.setTransform(203.1,713.3);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#E1D3C3").s().p("Ag0BtQALgKAagvQAXgvgCgBQABABAqhzQAIgUARgTQAAAbgHATIgYBCIgTAwQACACgaAwQgZAygLAKQgNAQgYANQAIgZANgQgAAGAEIAAAAIAAAAg");
	this.shape_383.setTransform(207.2,715.4);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#E1D3C3").s().p("AgyBuQALgKAZgwQAWgvgCgBQABAAARgxIAXhBQAIgVAQgUQACAagHAVQgnBzgDAAQADABgaAxQgYAzgLAKQgNAQgXAOQAHgZANgRg");
	this.shape_384.setTransform(211.3,717.4);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#E1D3C3").s().p("AgwBvQAKgKAZgxQAWgugDgCIASgxIAVhCQAGgTARgWQACAbgHATIgVBDQgRAygBAAQADABgZAxQgXAzgLALQgNAQgXAOQAIgZAMgRg");
	this.shape_385.setTransform(215.4,719.4);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#E1D3C3").s().p("AgtBwQAJgLAYgxQAVgvgDgCIARgxIAUhCQAHgVAQgUQABAcgFASIgUBDIgRAyIAAAAIAAAAQACABgXAyQgXAzgKALQgNARgXAOQAHgYANgSg");
	this.shape_386.setTransform(219.6,721.3);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#E1D3C3").s().p("AgsBxQAKgLAWgxQAUgwgCgCQABABAhh1QAHgVAPgUQADAbgGATIgTBDQgPAzgBAAQADAAgXAzQgVA0gKAKQgOATgVANQAHgZALgRg");
	this.shape_387.setTransform(223.8,723.1);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#E1D3C3").s().p("AgqByQAKgLAVgyQATgwgCgBIAOgyIAShEQAGgVAPgVQADAbgFAUQgeB2gDAAQADABgWAzQgUA0gKALQgMASgWAOQAGgaALgQgAAGADIAAABIAAgBg");
	this.shape_388.setTransform(228.1,724.9);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#E1D3C3").s().p("AgnBzQAJgMAUgyQASgwgCgCIANgyIAQhEQAGgWAPgTQADAbgFATIgQBEQgMAzgBgBQACABgUAzQgUA1gKALQgMATgVAPQAFgZAMgSgAAGADIAAAAIAAAAg");
	this.shape_389.setTransform(232.3,726.5);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#E1D3C3").s().p("AglBzQAJgLATgzQARgwgCgCIAMgzIAPhDQAFgVAOgVQAEAagEAUIgPBEQgLAzgBAAQACABgTAzQgTA1gJAMQgHALgJAIIgRAOQAFgaALgRgAAGADIAAAAIAAAAg");
	this.shape_390.setTransform(236.6,728.1);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#E1D3C3").s().p("AgjB0QAJgMASgyQAQgygCgBQABAAAYh3QAEgUAOgXQAFAagEAVIgNBEQgLA0gBAAQADAAgTA0QgRA2gKALQgKASgWARQAEgaALgSg");
	this.shape_391.setTransform(240.9,729.5);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#E1D3C3").s().p("AghB0QAIgLASgzQAPgygDgBQACABAVh5QAEgVANgWQAFAYgDAXIgMBEQgKA0gBAAQADAAgSA1QgQA2gJALQgHAMgHAIQgGAGgLAKQADgaALgTg");
	this.shape_392.setTransform(245.3,730.9);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#E1D3C3").s().p("AgfB1QAJgMAQgzQAOgzgDAAQACAAASh4QAEgVANgWQAGAYgEAWIgKBFQgJAzgBAAQADABgQA1QgPA2gJAMQgKARgVATQAEgaAJgTg");
	this.shape_393.setTransform(249.7,732.2);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#E1D3C3").s().p("AgdB2QAIgMAQg0QAMgygCgCQACABAPh4QADgUANgYQAGAZgDAVIgJBFIgIA0QADABgPA1QgOA2gJAMQgGAMgIAIQgFAHgLAKQADgZAJgUg");
	this.shape_394.setTransform(254.1,733.4);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#E1D3C3").s().p("AgaB2QAIgMAOg0QAMgzgDgBIAPh4QACgVAMgXQAHAZgCAVIgIBGIgHA0QADAAgOA2QgNA2gJAMQgFAMgIAJQgFAGgLAKQADgZAJgUg");
	this.shape_395.setTransform(258.5,734.5);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#E1D3C3").s().p("AgZB3QAIgMANg1QALgzgDgBQABABAFg0IAGhFQACgVAMgYQAIAYgCAWIgGBGIgGA0QADAAgOA2QgNA3gHAMQgJAVgTARQACgZAIgUg");
	this.shape_396.setTransform(263,735.5);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#E1D3C3").s().p("AgXB3QAIgMAMg0QAKg0gDgBIAJh5QACgVALgYQAIAZgBAWIgFBFQgEA0gBAAQADAAgMA2QgMA4gHANQgHATgUASQACgcAHgRg");
	this.shape_397.setTransform(267.5,736.5);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#E1D3C3").s().p("AgUB4QAHgMALg2QAJg0gDAAIADg0IADhFQABgTAMgaQAIAagBAUIgDBGIgEA0QADAAgLA3QgLA3gGAMQgIAVgTASQABgaAIgTg");
	this.shape_398.setTransform(272,737.3);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#E1D3C3").s().p("AgSB4QAHgNAKg1QAHg0gDAAQABgBADh5QABgTAKgaQAJAYAAAWIgCBGIgCA0QADAAgKA2QgKA5gGANQgIAUgSASQABgaAHgTgAADACIAAAAIAAAAIAAAAg");
	this.shape_399.setTransform(276.6,738.1);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#E1D3C3").s().p("AgQB4QAHgMAJg2QAGg0gDAAQABAAAAh5QABgWAKgYQAJAYAAAWIAABFIgBA1QADAAgJA2QgJA4gHANQgDANgGAJQgFAIgKAKQAAgZAHgVg");
	this.shape_400.setTransform(281.1,738.7);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#E1D3C3").s().p("AgPB4QAHgMAHg2QAFg0gDgBQACABgDh6QAAgUAJgZQAKAWABAXQADB6gCAAQADAAgHA3QgIA4gHANQgEAUgTAUQAAgZAGgVg");
	this.shape_401.setTransform(285.7,739.2);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#E1D3C3").s().p("AgOB5QAGgNAGg2QAFg0gDgBQACABgEh6QgBgVAHgZQAKAYABAWQACARABA0QACA0gBAAQADAAgGA3QgHA5gGANQgEAUgSAVQgBgbAGgTg");
	this.shape_402.setTransform(290.3,739.7);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#E1D3C3").s().p("AgOB5QAHgNAFg2QADg0gBgBIgHh5QgBgVAIgZQAJAYACAVIAEBGIACA0QADAAgFA3QgFA4gHAOQgDAVgRAUQgCgaAFgUg");
	this.shape_403.setTransform(294.9,740);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#E1D3C3").s().p("AgMB5QAGgNADg2QADg0gCgBQACAAgLh5QgCgVAIgZQAJAYACAVIAGBFIAEA0QADAAgEA3QgEA5gGANQgFAVgPAVQgCgZAFgVgAgCABIAAAAIAAAAg");
	this.shape_404.setTransform(299.4,740.3);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#E1D3C3").s().p("AgLB5QAGgNACg2QADg1gDAAIgMh5QgCgWAHgYQAKAYACAUIAIBGIAFA0QADAAgDA3QgDA5gGANQgFAVgOAVQgCgbAEgTg");
	this.shape_405.setTransform(304,740.4);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#E1D3C3").s().p("AgHB5QAFgNACg3QAAg0gBAAIgPh4QgDgWAHgZQAMAXABAVIAJBFQAHA1gBAAQADAAgBA2QgCA5gGANQgEAWgOAVQgDgaAEgUg");
	this.shape_406.setTransform(308.5,740.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,604.1,759);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_0();
	this.instance.setTransform(250.6,145.9,1,1,0,0,0,33.6,32.8);

	this.instance_1 = new lib.Path_1();
	this.instance_1.setTransform(320.3,663.9,1,1,0,0,0,11.8,10.2);

	this.instance_2 = new lib.Path_2();
	this.instance_2.setTransform(247.7,577.8,1,1,0,0,0,10,5.8);

	this.instance_3 = new lib.Path_3();
	this.instance_3.setTransform(247.7,539.9,1,1,0,0,0,10,5.8);

	this.instance_4 = new lib.Path_4();
	this.instance_4.setTransform(249.1,503.2,1,1,0,0,0,10,5.8);

	this.instance_5 = new lib.Path_5();
	this.instance_5.setTransform(249.2,473.9,1,1,0,0,0,14.3,5.8);

	this.instance_6 = new lib.Path_6();
	this.instance_6.setTransform(249,437.3,1,1,0,0,0,14.3,5.7);

	this.instance_7 = new lib.Path_7();
	this.instance_7.setTransform(249.1,402.3,1,1,0,0,0,19.1,5.8);

	this.instance_8 = new lib.Path_8();
	this.instance_8.setTransform(251,362.7,1,1,0,0,0,19,5.8);

	this.instance_9 = new lib.Path_9();
	this.instance_9.setTransform(251,299.5,1,1,0,0,0,31.8,20.7);

	this.instance_10 = new lib.Path_10();
	this.instance_10.setTransform(174.4,653.6,1,1,0,0,0,11.8,10.2);

	this.instance_11 = new lib.Group_0();
	this.instance_11.setTransform(271.3,322.8,1,1,0,0,0,256.4,322.8);

	this.instance_12 = new lib.Path_11();
	this.instance_12.setTransform(122.4,620.7,1,1,0,0,0,11.2,12.5);

	this.instance_13 = new lib.Path_12();
	this.instance_13.setTransform(96.8,590.5,1,1,0,0,0,12.1,14.7);

	this.instance_14 = new lib.Path_13();
	this.instance_14.setTransform(68.7,548.9,1,1,0,0,0,12.1,14.7);

	this.instance_15 = new lib.Path_14();
	this.instance_15.setTransform(39.9,499.6,1,1,0,0,0,12.1,14.7);

	this.instance_16 = new lib.Path_15();
	this.instance_16.setTransform(26.5,446.5,1,1,0,0,0,13.2,15.9);

	this.instance_17 = new lib.Path_16();
	this.instance_17.setTransform(13.3,387.7,1,1,0,0,0,13.3,15.9);

	this.instance_18 = new lib.Path_17();
	this.instance_18.setTransform(14.8,315.6,1,1,0,0,0,14.8,18.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,527.6,674.3);


(lib.WaterPennysimple = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash1.ai
	this.instance = new lib.Group();
	this.instance.setTransform(1,-14.8,1,1,0,0,0,263.8,337.1);
	this.instance.alpha = 0.75;

	this.instance_1 = new lib.Path();
	this.instance_1.setTransform(-15.1,44.7,1,1,0,0,0,63,183.5);
	this.instance_1.alpha = 0.578;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#947753").ss(1,0,0,4).p("AqfhNQgYAuAtAzQAbAgA+ApQBbA+B5AOQBaAKDQgLQDogMBJAIQAjADBbgNQCKgWBlhcQAqgmANgfQAPgigWgOQhohDjBgKQjaAAhggKQjDgVj5AcQkAAdgbAzg");
	this.shape.setTransform(-11.8,225.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-68,0.1,68.1,0.1).s().p("AldCpQh5gOhbg+Qg+gpgbggQgtgzAYguQAbgzEAgdQD5gcDDAVQBgAKDaAAQDBAKBoBDQAWAOgPAiQgNAfgqAmQhlBciKAWQhbANgjgDQhJgIjoAMQhqAGhMAAQhIAAgsgFg");
	this.shape_1.setTransform(-11.8,225.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#947753").ss(1,0,0,4).p("AkXh6QBagTDGAFQB8ADCTALQAoADAmAkQAjAgAWAuQAVAsgEAiQgFAlgjAGQhoARkXAFQkxAFhOgbQgpgOgMgkQgLghARgnQAQgpAlgfQAogiAxgKg");
	this.shape_2.setTransform(-12.3,259.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-43.2,0,43.3,0).s().p("Al2B0QgpgOgMgkQgLghARgnQAQgpAlgfQAogiAxgKQBagTDGAFQB8ADCTALQAoADAmAkQAjAgAWAuQAVAsgEAiQgFAlgjAGQhoARkXAFIhaAAQjjAAhCgWg");
	this.shape_3.setTransform(-12.3,259.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#947753").ss(1,0,0,4).p("AlDkQQBngpDnALQCRAGCpAZQAuAHAtBOQAoBIAZBlQAYBjgFBLQgFBSgoANQh4AmlEAKQliAKhag6QgwgfgOhPQgNhJAUhYQAThaAqhFQAuhLA6gXg");
	this.shape_4.setTransform(-13.5,307.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-50.1,0,50.2,0).s().p("AmxEAQgwgfgOhPQgNhJAUhYQAThaAqhFQAuhLA6gXQBngpDnALQCRAGCpAZQAuAHAtBOQAoBIAZBlQAYBjgFBLQgFBSgoANQh4AmlEAKQg0ABgwAAQkMAAhMgxg");
	this.shape_5.setTransform(-13.5,307.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#947753").ss(1,0,0,4).p("ABZnJQgdAbioEqQipEogBAXQgBAcALAUQAPAbAsAbQCcBhAfASQCOBRAagRQAcgSAViTQALhNANigQAGhFAhi4QAaiVgFgqQgIg0hQgaQhMgagaAZg");
	this.shape_6.setTransform(-91.1,276.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-28,0.1,28,0.1).s().p("AgWGUQgfgSichhQgsgbgPgbQgLgUABgcQABgXCpkoQCokqAdgbQAagZBMAaQBQAaAIA0QAFAqgaCVQghC4gGBFQgNCggLBNQgVCTgcASQgFACgIAAQgmAAh1hCg");
	this.shape_7.setTransform(-91.1,276.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#947753").ss(1,0,0,4).p("AEBmlQglAUkWDzQkYDxgLAWQgOAZAAAUQAAAaAYAgQBRBqAXAaQBTBgAfgLQAcgLAWg9QAehUACgEQAPgYA3hYQAng8AnhBQAthKBmhqQBaheANghQATgygug3Qgsg2gfARg");
	this.shape_8.setTransform(-121.7,246.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-36.4,0,36.4,0).s().p("AjrFUQgXgahRhqQgYggAAgaQAAgUAOgZQALgWEYjxQEWjzAlgUQAfgRAsA2QAuA3gTAyQgNAhhaBeQhmBqgtBKQgnBBgnA8IhGBwQgCAEgeBUQgWA9gcALIgHABQghAAhKhWg");
	this.shape_9.setTransform(-121.7,246.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#947753").ss(1,0,0,4).p("AE4m3QgqAVlFD9QlFD6gPAWQgRAagCAUQgDAdAXAhQBQB0ASAWQBPBkAigLQAggLAdhAQAphXADgFQAWgdBBhXQAxg/AvhDQA5hNB5hvQBrhhAQgiQAZg0gqg6QgSgYgVgLQgWgMgQAIg");
	this.shape_10.setTransform(-144,213.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-41.5,0,41.6,0).s().p("AkoFhQgSgWhQh0QgXghADgdQACgUARgaQAPgWFFj6QFFj9AqgVQAQgIAWAMQAVALASAYQAqA6gZA0QgQAihrBhQh5Bvg5BNQgvBDgxA/IhXB0QgDAFgpBXQgdBAggALIgIABQgjAAhGhag");
	this.shape_11.setTransform(-144,213.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#947753").ss(1,0,0,4).p("AG0mQQgzAMmoDAQmoDAgWARQgaAYgIAUQgKAdAQAmQA4CFAQAfQA8B3ApgFQAlgEAyg8QBDhQAGgFQAlgeBbhHQBFg4BFg5QBThFCihYQCPhOAbgfQApgwgghFQgNgcgUgQQgWgRgTAFg");
	this.shape_12.setTransform(-160.9,179.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-52.3,0,52.4,0).s().p("Am5EgQgQgfg4iFQgQgmAKgdQAIgUAagYQAWgRGojAQGojAAzgMQATgFAWARQAUAQANAcQAgBFgpAwQgbAfiPBOQiiBYhTBFQhFA5hFA4IiABlQgGAFhDBQQgyA8glAEIgEAAQgnAAg6hyg");
	this.shape_13.setTransform(-160.9,179.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#947753").ss(1,0,0,4).p("AIPl/Qg7AFn0CNQn1CNgbATQghAWgKAVQgQAfANAsQAvClAMAgQA0CRAuABQArABBAg6QBVhOAHgFQAhgTB8hIQBVgxBVg2QBng+DBhHQCqg/AjgfQA1gvgbhTQgLgigVgVQgWgXgXACg");
	this.shape_14.setTransform(-178,133.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-61.3,0,61.2,0).s().p("AnBGAQgugBg0iRQgMgggvilQgNgsAQgfQAKgVAhgWQAbgTH1iNQH0iNA7gFQAXgCAWAXQAVAVALAiQAbBTg1AvQgjAfiqA/QjBBHhnA+QhVA2hVAxIidBbQgHAFhVBOQg/A5gqAAIgCAAg");
	this.shape_15.setTransform(-178,133.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#947753").ss(1,0,0,4).p("AJRlEQhAgComBRQonBRgfAPQglASgOAUQgUAcAIAwQAgCsAIAdQAmCXAxAHQAuAGBLgyQBkhEAIgEQAmgQCMg4QBggmBhgsQB2gzDVguQC+grAogaQA+gogThWQgHgjgUgZQgVgZgYgBg");
	this.shape_16.setTransform(-186.9,82.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-66.9,0,67,0).s().p("AobFEQgxgHgmiXQgIgdggisQgIgwAUgcQAOgUAlgSQAfgPInhRQImhRBAACQAYABAVAZQAUAZAHAjQATBWg+AoQgoAai+ArQjVAuh2AzQhhAshgAmIiyBIQgIAEhkBEQhDAtgsAAIgKgBg");
	this.shape_17.setTransform(-186.9,82.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#947753").ss(1,0,0,4).p("AKyiiQhKgQpgg1Qpng2ggAKQgqAMgSAUQgZAbACA2QAJC+AEAoQAUCuAyARQA6AUBHgBQBCgBA1gSQAhgLBqglQBqgiBagUQBGgPE4hGQEcg4AkAhQAVASAUgbQATgZAKgtQALgwgGglQgGgpgZgGg");
	this.shape_18.setTransform(-194.1,29.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-72.3,0,72.4,0).s().p("Ap/EDQgygRgUiuQgEgogJi+QgCg2AZgbQASgUAqgMQAggKJnA2QJgA1BKAQQAZAGAGApQAGAlgLAwQgKAtgTAZQgUAbgVgSQgkghkcA4Il+BVQhaAUhqAiIiLAwQg1AShCABIgEAAQhEAAg5gTg");
	this.shape_19.setTransform(-194.1,29.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#947753").ss(1,0,0,4).p("AhlnJQAiAbDAEqQDCEnABAYQABAcgMAUQgSAbgyAbQi0BigiARQijBRgfgRQgfgSgYiTQgOhTgOiaQgHhFgmi4QgeiVAGgqQAIg0BcgaQBYgaAeAZg");
	this.shape_20.setTransform(64.2,285.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-32.1,0.1,32.2,0.1).s().p("AinHUQgfgSgYiTQgOhTgOiaQgHhFgmi4QgeiVAGgqQAIg0BcgaQBYgaAeAZQAiAbDAEqQDCEnABAYQABAcgMAUQgSAbgyAbQi0BigiARQiGBCgtAAQgJAAgGgCg");
	this.shape_21.setTransform(64.2,285.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#947753").ss(1,0,0,4).p("AkmmlQAqAUFAD0QFBDxANAVQAQAaAAATQAAAbgcAfQhfBsgZAZQhfBfgjgLQgggLgZg9QgihTgEgFQgTgcg9hUQgtg9gshAQg1hKh0hqQhohegOghQgVgyAzg3QAzg2AkARg");
	this.shape_22.setTransform(99.3,255.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-41.8,0,41.8,0).s().p("ACMGpQgggLgZg9QgihTgEgFIhQhwQgtg9gshAQg1hKh0hqQhohegOghQgVgyAzg3QAzg2AkARQAqAUFAD0QFBDxANAVQAQAaAAATQAAAbgcAfQhfBsgZAZQhUBVglAAIgJgBg");
	this.shape_23.setTransform(99.3,255.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#947753").ss(1,0,0,4).p("Allm3QAwAVF0D9QF2D6ARAWQAUAaACAVQADAcgaAhQhdB2gTAUQhbBkgngLQgkgLgihAQguhXgFgFQgXgahNhaQg3g/g3hDQhChOiKhtQh6higTgiQgdgzAxg7QAUgYAYgLQAagMASAIg");
	this.shape_24.setTransform(124.9,222.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-47.6,0,47.7,0).s().p("ADTG6QgkgLgihAQguhXgFgFIhkh0Qg3g/g3hDQhChOiKhtQh6higTgiQgdgzAxg7QAUgYAYgLQAagMASAIQAwAVF0D9QF2D6ARAWQAUAaACAVQADAcgaAhQhdB2gTAUQhRBagoAAIgJgBg");
	this.shape_25.setTransform(124.9,222.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#947753").ss(1,0,0,4).p("AnzmRQA7ANHmDAQHnC/AZASQAeAYAJAUQALAcgSAnQhACEgSAfQhGB4gugFQgsgEg4g8QhNhQgHgFQgkgahvhLQhOg3hQg7QhghEi5hYQikhOgfggQgwgwAkhFQAPgcAYgQQAZgRAWAFg");
	this.shape_26.setTransform(144.2,187.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-60,0,60.2,0).s().p("AGIGSQgsgEg4g8QhNhQgHgFQgkgahvhLQhOg3hQg7QhghEi5hYQikhOgfggQgwgwAkhFQAPgcAYgQQAZgRAWAFQA7ANHmDAQHnC/AZASQAeAYAJAUQALAcgSAnQhACEgSAfQhDB0gtAAIgEgBg");
	this.shape_27.setTransform(144.2,187.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#947753").ss(1,0,0,4).p("Apcl/QBDAFI/CNQI/CNAfATQAlAWANAVQARAfgPAsQg3CngMAeQg8CRg1ABQgxAChJg7QhihPgIgEQgrgWiKhFQhhgxhig2Qh2g+jdhHQjEg/gngfQg9gvAfhTQAMgiAYgVQAZgXAbACg");
	this.shape_28.setTransform(163.9,141.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-70.2,0,70.4,0).s().p("AGKFHQhihPgIgEIi1hbQhhgxhig2Qh2g+jdhHQjEg/gngfQg9gvAfhTQAMgiAYgVQAZgXAbACQBDAFI/CNQI/CNAfATQAlAWANAVQARAfgPAsQg3CngMAeQg8CRg1ABIgDAAQgwAAhHg5g");
	this.shape_29.setTransform(163.9,141.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#947753").ss(1,0,0,4).p("AqnlEQBJgCJ4BRQJ4BRAkAPQAqASAQAUQAXAcgKAwQgiCkgLAlQgsCXg4AHQg1AGhVgyQhzhEgJgEQgtgQigg4QhugmhwgsQiHg0j1gtQjZgrgvgaQhHgoAWhWQAIgjAXgZQAYgZAcgBg");
	this.shape_30.setTransform(174,91.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-76.7,0,76.9,0).s().p("AHiEYQhzhEgJgEIjNhIQhugmhwgsQiHg0j1gtQjZgrgvgaQhHgoAWhWQAIgjAXgZQAYgZAcgBQBJgCJ4BRQJ4BRAkAPQAqASAQAUQAXAcgKAwQgiCkgLAlQgsCXg4AHIgMABQgyAAhMgtg");
	this.shape_31.setTransform(174,91.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#947753").ss(1,0,0,4).p("AsXiiQBVgQK7g1QLBg2AlAJQAwANAVATQAcAbgCA3QgIC0gGAxQgXCvg6ARQhCAThSAAQhMgBg8gSQiggwAAAAQh5gihogUQkKg4itgdQlGg4gpAhQgYASgXgcQgWgYgMgtQgMgwAGglQAIgqAcgFg");
	this.shape_32.setTransform(182.3,38.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-83,0,83,0).s().p("AJLEWQhMgBg8gSIiggwQh5gihogUQkKg4itgdQlGg4gpAhQgYASgXgcQgWgYgMgtQgMgwAGglQAIgqAcgFQBVgQK7g1QLBg2AlAJQAwANAVATQAcAbgCA3QgIC0gGAxQgXCvg6ARQhBAThPAAIgEAAg");
	this.shape_33.setTransform(182.3,38.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#947753").ss(1,0,0,4).p("AsHiAQgbA0APCJQAHA5ALAcQAMAgANgUQA9hgDegFQBPgCB4AKQBEAFCBAMQCRAMCgALQBZAGCsALQBWAGBPAlQApATAwAaQANAEALgrQALgoADg7QAGiSgogaQhohEjsgPQkFgFhggKQjPgWkkAVQk4AVgaAyg");
	this.shape_34.setTransform(-12.3,196.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-79.2,0,79.4,0).s().p("ALzDSQgwgagpgTQhPglhWgGIkFgRQiggLiRgMQiBgMhEgFQh4gKhPACQjeAFg9BgQgNAUgMggQgLgcgHg5QgPiJAbg0QAagyE4gVQEkgVDPAWQBgAKEFAFQDsAPBoBEQAoAagGCSQgDA7gLAoQgKAngMAAIgCAAg");
	this.shape_35.setTransform(-12.3,196.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#947753").ss(1,0,0,4).p("AtiiAQgeA0ARCJQAHA5ANAcQAOAgAOgUQBEhgD4gFQBYgCCGAKQBMAFCQAMQCjAMCyALQBkAGDAALQBfAGBZAlQAuATA1AaQAPAEANgrQALgoADg7QAIiRgtgbQh1hEkHgPQkkgFhrgKQjngWlHAVQlbAVgeAyg");
	this.shape_36.setTransform(-12.3,162.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-88.5,0,88.7,0).s().p("ANLDSQg1gagugTQhZglhfgGIkkgRQiygLijgMQiQgMhMgFQiGgKhYACQj4AFhEBgQgOAUgOggQgNgcgHg5QgRiJAeg0QAegyFbgVQFHgVDnAWQBrAKEkAFQEHAPB1BEQAtAbgICRQgDA7gLAoQgMAngNAAIgDAAg");
	this.shape_37.setTransform(-12.3,162.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#947753").ss(1,0,0,4).p("AuQiAQggA0ASCJQAIA5ANAcQAOAgAPgUQBIhgEFgFQBdgCCOAKQBPAFCYAMQEbAUF/AVQBlAGBdAlQAxATA4AZQAQAEANgrQANgoADg7QAIiRgwgbQh7hDkVgQQhCgDifgEQiGgDg9gFQjzgWlZAVQluAVgfAyg");
	this.shape_38.setTransform(-12.3,130.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-93.2,0,93.4,0).s().p("AN4DSQg4gZgxgTQhdglhlgGQl/gVkbgUQiYgMhPgFQiOgKhdACQkFAFhIBgQgPAUgOggQgNgcgIg5QgSiJAgg0QAfgyFugVQFZgVDzAWQA9AFCGADQCfAEBCADQEVAQB7BDQAwAbgICRQgDA7gNAoQgMAngOAAIgDAAg");
	this.shape_39.setTransform(-12.3,130.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#947753").ss(1,0,0,4).p("AvLiAQgjA0AUCJQAIA5AOAdQAPAfAQgUQBNhgEVgFQBkgBCXAJQBVAGChAMQCvALDQALQERAPA2ADQBrAGBjAlQA0ATA8AZQARAEAOgrQANgoADg7QAJiRgzgbQiDhDkngQQlHgFh5gKQkDgVlvAUQmGAVggAyg");
	this.shape_40.setTransform(-12.3,97);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-99.3,0.1,99.5,0.1).s().p("AOyDSQg8gZg0gTQhjglhrgGIlHgSIl/gWIj2gSQiXgJhkABQkVAFhNBgQgQAUgPgfQgOgdgIg5QgUiJAjg0QAggyGGgVQFvgUEDAVQB5AKFHAFQEnAQCDBDQAzAbgJCRQgDA7gNAoQgNAngPAAIgDAAg");
	this.shape_41.setTransform(-12.3,97);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#947753").ss(1,0,0,4).p("AwaiAQglA0AVCJQAIA5APAcQARAgARgUQBThgEsgFQBsgCCjAKQBbAFCvAMQFFAUG6AVQB0AGBsAlQA3ATBBAZQATAEAPgrQAOgoAEg7QAJiRg3gbQiOhEk/gPQligFiCgKQkYgWmMAVQmmAVgjAyg");
	this.shape_42.setTransform(-13.8,64.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-107.4,0,107.5,0).s().p("AP+DSQhBgZg3gTQhsglh0gGQm6gVlFgUQivgMhbgFQijgKhsACQksAFhTBgQgRAUgRggQgPgcgIg5QgViJAlg0QAjgyGmgVQGMgVEYAWQCCAKFiAFQE/APCOBEQA3AbgJCRQgEA7gOAoQgOAngRAAIgDAAg");
	this.shape_43.setTransform(-13.8,64.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#947753").ss(1,0,0,4).p("AwqifQglA0AVCKQAJA5APAcQARAgARgUQBThgEsgFQBrgCCjAKQBcAFCuAMQDHAMEdAOQCcAIELANQBvAGA6BIQAOASATAdQAQATARgDQATgDAPgsQAOgqAEg4QAIiKg3gbQiUhHlIgqQiOgSlkgcQkZgVmMAUQmlAWgkAxg");
	this.shape_44.setTransform(-12.3,30.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-108.9,0,109,0).s().p("APsDgQgTgdgOgSQg6hIhvgGImngVInkgaIkKgRQijgKhrACQksAFhTBgQgRAUgRggQgPgcgJg5QgViKAlg0QAkgxGlgWQGMgUEZAVQFkAcCOASQFIAqCUBHQA3AbgICKQgEA4gOAqQgPAsgTADIgEABQgPAAgOgRg");
	this.shape_45.setTransform(-12.3,30.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#947753").ss(1,0,0,4).p("Egp0AFFQANAfB2gCQA+gCBdgHQByAACaAFQDtAJA3AQQBXAaFDBaQBsAgB3AeQC8AuA3gEQAsgDF+gtQGDgpB0AHQEMASCHANQETAbBHAgQBWAmDjgNQBTgEEIgdQA9gHE3gSQFNgUBfgIQBigIC+gNQCVgOAhgZQAVgQAJiUQAJiYgKioQgMjEghh4QgoiPhAgCQh4gEp2B6QoZBpjSA0QiFAiiUAbQiTAbhSAGQhJAGlvAGQlHAEi4AAQhogBiggZQivgchcgkQiIg2kIhOQlFhfikgSQg3gGhugrQgngPilhFQj/hsgkAfQgYAUgoCBQgnB+giChQhUGRAtBvg");
	this.shape_46.setTransform(-3.9,-52.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-269.1,0,269.2,0).s().p("ALYJbQhHggkTgbQiHgNkMgSQh0gHmDApQl+AtgsADQg3AEi8guQh3gehsggQlDhahXgaQg3gQjtgJQiagFhyAAQhdAHg+ACQh2ACgNgfQgthvBUmRQAiihAnh+QAoiBAYgUQAkgfD/BsQClBFAnAPQBuArA3AGQCkASFFBfQEIBOCIA2QBcAkCvAcQCgAZBoABQC4AAFHgEQFvgGBJgGQBSgGCTgbQCUgbCFgiQDSg0IZhpQJ2h6B4AEQBAACAoCPQAhB4AMDEQAKCogJCYQgJCUgVAQQghAZiVAOQi+ANhiAIQhfAIlNAUQk3ASg9AHQkIAdhTAEQg4ADgwAAQiQAAhBgcg");
	this.shape_47.setTransform(-3.9,-52.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#947753").ss(1,0,0,4).p("EgnXADyQANA0BfAqQBRAkAzAAQArAABCAWQBMAaA3AqQArAgCEgZQBLgNAXgDQAzgEAaANQArAVCRBTQCRBSAbAOQA8AeCjAyQC4A4A1gGQBIgJEegCQE1gCB3AOQC1AUDfAOQEdASBJgNQBugUGahQQAegGFEhKQEuhEBogQQElgrAkgGQDIglAfgoQASgXgnixQgniuhEjLQhMjkhJiOQhVing7gEQhkgGnmEoQj6CbhoBAQiyBtgzAWQh7AyiIAqQiHAqhMAKQhFAKlRAIQk2AHiigBQhggBiUgnQihgshVg2QgmgZmBk2QlpkhhWguQgugZg0gqQg1gtgVgRQgkgcgVgDQgbgDgVAfQiGDBiPEQQjgGqAmCfg");
	this.shape_48.setTransform(3,-155.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-252.5,0,252.6,0).s().p("AFBM7QjfgOi1gUQh3gOk1ACQkeAChIAJQg1AGi4g4Qijgyg8geQgbgOiRhSQiRhTgrgVQgagNgzAEQgXADhLANQiEAZgrggQg3gqhMgaQhCgWgrAAQgzAAhRgkQhfgqgNg0QgmifDgmqQCPkQCGjBQAVgfAbADQAVADAkAcIBKA+QA0AqAuAZQBWAuFpEhQGBE2AmAZQBVA2ChAsQCUAnBgABQCiABE2gHQFRgIBFgKQBMgKCHgqQCIgqB7gyQAzgWCyhtIFijbQHmkoBkAGQA7AEBVCnQBJCOBMDkQBEDLAnCuQAnCxgSAXQgfAojIAlQgkAGklArQhoAQkuBEQlEBKgeAGQmaBQhuAUQgeAFhEAAQheAAimgKg");
	this.shape_49.setTransform(3,-155.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#947753").ss(1,0,0,4).p("A9+AAQgaAvAxA9QAvA6BkA2QBQArE3ENQCfCKC0CgQAwAoBiAuQBqAyBOAOQBsATHaAHQIAAHByghQBhgdDeh8QEBiQA2gXQBwgxEFiZQD0iPBdhBQBLg2gIg4QgFgog+hNQkCk8k4jsQqEnmqaAIQrQAJocFTQjeCLisC5QiWChheCug");
	this.shape_50.setTransform(10,-248.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.188,0.388,0.588,0.804,1,1],-192.8,0,192.9,0).s().p("AhqPuQnagHhsgTQhOgOhqgyQhigugwgoQi0igifiKQk3kNhQgrQhkg2gvg6Qgxg9AagvQBeiuCWihQCsi5DeiLQIclTLQgJQKagIKEHmQE4DsECE8QA+BNAFAoQAIA4hLA2QhdBBj0CPQkFCZhwAxQg2AXkBCQQjeB8hhAdQhfAclvAAIikgCg");
	this.shape_51.setTransform(10,-248.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#947753").ss(1,0,0,4).p("EAq4AAAQAALAjXKEQjRJul8HgQl8HfnsEHQn+EQouAAQotAAn+kQQntkHl7nfQl8ngjRpuQjXqEAArAQAArADXqDQDRpuF8ngQF7nfHtkHQH+kQItAAQIuAAH+EQQHsEHF8HfQF8HgDRJuQDXKDAALAg");
	this.shape_52.setTransform(0.6,-3.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.rf(["#C4A873","#AA863B","#8C6F2D"],[0,0.498,1],0,0,0,0,0,312.6).s().p("EgQrAx4QntkHl7nfQl8ngjRpuQjXqEAArAQAArADXqDQDRpuF8ngQF7nfHtkHQH+kQItAAQIuAAH+EQQHsEHF8HfQF8HgDRJuQDXKDAALAQAALAjXKEQjRJul8HgQl8HfnsEHQn+EQouAAQotAAn+kQg");
	this.shape_53.setTransform(0.6,-3.3);

	this.instance_2 = new lib.Blend();
	this.instance_2.setTransform(0.6,0,1,1,0,0,0,302.1,379.5);
	this.instance_2.alpha = 0.82;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(7));

	// Layer 2 copy
	this.instance_3 = new lib.edgeBit();
	this.instance_3.setTransform(-2.9,3.9,1,1,0,0,0,302.1,379.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7));

	// Layer 2
	this.instance_4 = new lib.edgeBit();
	this.instance_4.setTransform(-2.9,3.9,1,1,0,0,0,302.1,379.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({rotation:-1.1,x:-2.8},0).wait(1).to({rotation:-2.3,x:-2.9},0).wait(1).to({rotation:-3.4},0).wait(1).to({rotation:-2.3},0).wait(1).to({rotation:-1.1,x:-2.8},0).wait(1).to({rotation:0,x:-2.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-305,-375.6,604.1,759);


// stage content:



(lib.FWW_TilesAll_v01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// water pennytile bloacker (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuDOEIAA8GIcGAAIAAcGg");
	mask.setTransform(750.1,534.5);

	// Layer 1
	this.instance = new lib.guide();
	this.instance.setTransform(960.4,532.2,0.917,0.917,0,0,0,0.1,0.1);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},110).wait(130));

	// Water Penny Beetle
	this.instance_1 = new lib.WaterPennysimple("synched",6);
	this.instance_1.setTransform(754,537,0.231,0.231,-27.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-2.9,regY:3.9,scaleX:0.23,scaleY:0.23,rotation:-27,x:746.8,y:524.7,startPosition:0},0).wait(1).to({rotation:-26.6,x:739.9,y:511.3,startPosition:1},0).wait(1).to({rotation:-26.2,x:733,y:497.9,startPosition:2},0).wait(1).to({rotation:-25.8,x:726.1,y:484.5,startPosition:3},0).wait(1).to({rotation:-25.5,x:719.2,y:471.2,startPosition:4},0).wait(1).to({rotation:-25.1,x:712.3,y:457.8,startPosition:5},0).wait(1).to({rotation:-24.7,x:705.4,y:444.4,startPosition:6},0).wait(1).to({rotation:-24.3,x:698.5,y:431,startPosition:0},0).wait(1).to({rotation:-23.9,x:691.6,y:417.6,startPosition:1},0).wait(1).to({rotation:-23.5,x:684.7,y:404.3,startPosition:2},0).wait(1).to({rotation:-23.1,x:677.7,y:390.9,startPosition:3},0).wait(1).to({rotation:-22.7,x:670.8,y:377.5,startPosition:4},0).wait(1).to({rotation:-22.3,x:663.9,y:364.1,startPosition:5},0).wait(1).to({rotation:-21.9,x:657,y:350.7,startPosition:6},0).wait(1).to({rotation:-21.5,x:650.1,y:337.4,startPosition:0},0).wait(1).to({rotation:-21.2,x:643.2,y:324,startPosition:1},0).wait(1).to({rotation:-20.8,x:636.2,y:310.6,startPosition:2},0).wait(1).to({rotation:-20.4,x:629.3,y:297.2,startPosition:3},0).wait(1).to({rotation:-20,x:622.4,y:283.8,startPosition:4},0).wait(1).to({rotation:-19.6,x:615.5,y:270.5,startPosition:5},0).wait(1).to({rotation:-19.2,x:608.6,y:257,startPosition:6},0).wait(1).to({rotation:-18.8,x:601.7,y:243.7,startPosition:0},0).wait(1).to({rotation:-18.4,x:594.8,y:230.3,startPosition:1},0).wait(1).to({rotation:-18,x:587.9,y:216.9,startPosition:2},0).wait(1).to({rotation:-17.6,x:580.9,y:203.5,startPosition:3},0).wait(1).to({rotation:-17.2,x:574,y:190.1,startPosition:4},0).wait(1).to({rotation:-16.8,x:567.1,y:176.8,startPosition:5},0).wait(1).to({rotation:-16.5,x:560.2,y:163.4,startPosition:6},0).wait(1).to({rotation:-16.1,x:553.3,y:150,startPosition:0},0).wait(1).to({rotation:-15.7,x:546.4,y:136.6,startPosition:1},0).wait(1).to({rotation:75.7,x:538.9,y:121.8,startPosition:2},0).wait(1).to({rotation:76.1,x:555.6,y:120.9,startPosition:3},0).wait(1).to({rotation:76.5,x:572.4,y:120,startPosition:4},0).wait(1).to({rotation:76.9,x:589.2,y:119.2,startPosition:5},0).wait(1).to({rotation:77.3,x:605.9,y:118.3,startPosition:6},0).wait(1).to({rotation:77.7,x:622.7,y:117.5,startPosition:0},0).wait(1).to({rotation:78.1,x:639.5,y:116.6,startPosition:1},0).wait(1).to({rotation:78.5,x:656.2,y:115.7,startPosition:2},0).wait(1).to({rotation:78.9,x:673,y:114.8,startPosition:3},0).wait(1).to({rotation:79.3,x:689.8,y:114,startPosition:4},0).wait(1).to({rotation:79.7,x:706.6,y:113.1,startPosition:5},0).wait(1).to({rotation:80.1,x:723.3,y:112.2,startPosition:6},0).wait(1).to({rotation:80.5,x:740.1,y:111.4,startPosition:0},0).wait(1).to({rotation:80.9,x:756.9,y:110.5,startPosition:1},0).wait(1).to({rotation:81.3,x:773.6,y:109.7,startPosition:2},0).wait(1).to({rotation:81.7,x:790.4,y:108.8,startPosition:3},0).wait(1).to({rotation:82.1,x:807.2,y:107.9,startPosition:4},0).wait(1).to({rotation:82.5,x:824,y:107,startPosition:5},0).wait(1).to({rotation:82.9,x:840.7,y:106.2,startPosition:6},0).wait(1).to({rotation:83.3,x:857.5,y:105.3,startPosition:0},0).wait(1).to({rotation:83.7,x:874.3,y:104.5,startPosition:1},0).wait(1).to({rotation:84.1,x:891.1,y:103.6,startPosition:2},0).wait(1).to({rotation:84.6,x:907.8,y:102.7,startPosition:3},0).wait(1).to({rotation:85,x:924.6,y:101.9,startPosition:4},0).wait(1).to({rotation:85.4,x:941.4,y:101,startPosition:5},0).wait(1).to({rotation:85.8,x:958.1,y:100.1,startPosition:6},0).wait(1).to({rotation:86.2,x:974.9,y:99.2,startPosition:0},0).wait(1).to({rotation:86.6,x:991.7,y:98.4,startPosition:1},0).wait(1).to({rotation:87,x:1008.4,y:97.5,startPosition:2},0).wait(1).to({rotation:87.4,x:1025.2,y:96.7,startPosition:3},0).wait(1).to({rotation:87.8,x:1042,y:95.8,startPosition:4},0).wait(1).to({rotation:88.2,x:1058.8,y:95,startPosition:5},0).wait(1).to({rotation:108.2,x:1072.1,y:100.9,startPosition:6},0).wait(1).to({rotation:128.2,x:1085.6,y:107,startPosition:0},0).wait(1).to({rotation:128.6,x:1098.7,y:113.3,startPosition:1},0).wait(1).to({rotation:129,x:1111.8,y:119.6,startPosition:2},0).wait(1).to({rotation:129.4,x:1124.9,y:125.8,startPosition:3},0).wait(1).to({rotation:129.8,x:1138,y:132.1,startPosition:4},0).wait(1).to({rotation:130.2,x:1151.1,y:138.3,startPosition:5},0).wait(1).to({rotation:130.7,x:1164.2,y:144.6,startPosition:6},0).wait(1).to({rotation:131.1,x:1177.3,y:150.9,startPosition:0},0).wait(1).to({rotation:131.5,x:1190.4,y:157.1,startPosition:1},0).wait(1).to({rotation:131.9,x:1203.5,y:163.4,startPosition:2},0).wait(1).to({rotation:132.3,x:1216.6,y:169.7,startPosition:3},0).wait(1).to({rotation:132.8,x:1229.7,y:175.9,startPosition:4},0).wait(1).to({rotation:133.2,x:1242.8,y:182.2,startPosition:5},0).wait(1).to({rotation:133.6,x:1255.9,y:188.5,startPosition:6},0).wait(1).to({rotation:134,x:1269,y:194.7,startPosition:0},0).wait(1).to({rotation:134.4,x:1282.1,y:201,startPosition:1},0).wait(1).to({rotation:134.9,x:1295.2,y:207.2,startPosition:2},0).wait(1).to({rotation:135.3,x:1308.3,y:213.5,startPosition:3},0).wait(1).to({rotation:135.7,x:1321.4,y:219.8,startPosition:4},0).wait(1).to({rotation:136.1,x:1334.5,y:226.1,startPosition:5},0).wait(1).to({rotation:136.5,x:1347.6,y:232.3,startPosition:6},0).wait(1).to({rotation:137,x:1360.7,y:238.6,startPosition:0},0).wait(1).to({rotation:137.4,x:1373.8,y:244.9,startPosition:1},0).wait(1).to({rotation:137.8,x:1386.9,y:251.1,startPosition:2},0).wait(1).to({rotation:138.2,x:1400,y:257.4,startPosition:3},0).wait(1).to({rotation:138.6,x:1413.1,y:263.6,startPosition:4},0).wait(1).to({rotation:139,x:1426.2,y:269.9,startPosition:5},0).wait(1).to({x:1435.6,y:277.5,startPosition:6},0).wait(1).to({x:1445,y:285,startPosition:0},0).wait(1).to({x:1454.4,y:292.6,startPosition:1},0).wait(1).to({x:1463.8,y:300.1,startPosition:2},0).wait(1).to({x:1473.2,y:307.7,startPosition:3},0).wait(1).to({x:1482.6,y:315.3,startPosition:4},0).wait(1).to({x:1491.9,y:322.8,startPosition:5},0).wait(1).to({x:1501.4,y:330.4,startPosition:6},0).wait(1).to({x:1510.7,y:338,startPosition:0},0).wait(1).to({x:1520.1,y:345.5,startPosition:1},0).wait(1).to({x:1529.5,y:353.1,startPosition:2},0).wait(1).to({x:1538.9,y:360.6,startPosition:3},0).wait(1).to({x:1548.3,y:368.2,startPosition:4},0).wait(1).to({x:1557.7,y:375.8,startPosition:5},0).wait(1).to({x:1567.1,y:383.3,startPosition:6},0).wait(1).to({x:1576.5,y:390.9,startPosition:0},0).wait(1).to({x:1585.9,y:398.4,startPosition:1},0).wait(1).to({x:1595.3,y:406,startPosition:2},0).wait(1).to({x:1604.7,y:413.6,startPosition:3},0).wait(1).to({x:1614.1,y:421.1,startPosition:4},0).wait(1).to({x:1623.5,y:428.7,startPosition:5},0).wait(1).to({x:1632.9,y:436.3,startPosition:6},0).wait(1).to({x:1642.3,y:443.8,startPosition:0},0).wait(1).to({x:1651.7,y:451.4,startPosition:1},0).wait(1).to({x:1661,y:458.9,startPosition:2},0).wait(1).to({x:1670.4,y:466.5,startPosition:3},0).wait(1).to({x:1679.8,y:474.1,startPosition:4},0).wait(1).to({x:1689.2,y:481.6,startPosition:5},0).wait(1).to({x:1698.6,y:489.2,startPosition:6},0).wait(1).to({x:1708,y:496.8,startPosition:0},0).wait(1).to({x:1717.4,y:504.3,startPosition:1},0).wait(1).to({x:1726.8,y:511.9,startPosition:2},0).wait(1).to({x:1736.2,y:519.4,startPosition:3},0).wait(1).to({x:1745.6,y:527,startPosition:4},0).wait(1).to({x:1755,y:534.6,startPosition:5},0).wait(1).to({x:1764.4,y:542.1,startPosition:6},0).wait(1).to({x:1773.8,y:549.7,startPosition:0},0).wait(1).to({x:1783.2,y:557.2,startPosition:1},0).wait(1).to({x:1792.6,y:564.8,startPosition:2},0).wait(1).to({x:1802,y:572.4,startPosition:3},0).wait(1).to({x:1811.3,y:579.9,startPosition:4},0).wait(1).to({x:1820.7,y:587.5,startPosition:5},0).wait(1).to({x:1830.1,y:595.1,startPosition:6},0).wait(1).to({x:1839.5,y:602.6,startPosition:0},0).wait(1).to({x:1848.9,y:610.2,startPosition:1},0).wait(1).to({x:1858.3,y:617.7,startPosition:2},0).wait(1).to({x:1867.7,y:625.3,startPosition:3},0).wait(1).to({x:1877.1,y:632.9,startPosition:4},0).wait(1).to({x:1886.5,y:640.4,startPosition:5},0).wait(1).to({x:1895.9,y:648,startPosition:6},0).wait(1).to({x:1905.3,y:655.5,startPosition:0},0).wait(1).to({x:1914.7,y:663.1,startPosition:1},0).wait(1).to({x:1924.1,y:670.7,startPosition:2},0).wait(1).to({x:1933.5,y:678.2,startPosition:3},0).wait(1).to({x:1942.9,y:685.8,startPosition:4},0).wait(1).to({x:1952.2,y:693.3,startPosition:5},0).wait(1).to({x:1961.6,y:700.9,startPosition:6},0).wait(1).to({x:1971,y:708.5,startPosition:0},0).wait(1).to({x:1980.4,y:716,startPosition:1},0).wait(1).to({x:1989.8,y:723.6,startPosition:2},0).wait(1).to({x:1999.2,y:731.2,startPosition:3},0).wait(1).to({x:2008.6,y:738.7,startPosition:4},0).wait(1).to({x:2018,y:746.3,startPosition:5},0).wait(1).to({x:2027.4,y:753.9,startPosition:6},0).to({_off:true},1).wait(85));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1620.1,984.5,180,180);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;