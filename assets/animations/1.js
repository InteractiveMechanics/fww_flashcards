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


(lib.Path_33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAEgdIAoAZQAOAJgYgFQgZgCgeAOQgQAJgLAJg");
	this.shape.setTransform(5,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10,6.1);


(lib.Path_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgBAjQgkgZgVgSQgUgUgjg1IANACQAEALALAPQASAaA6AvQAUATBDAqQgjgMgsgigAgngcQgNgJgWgnIAKABIgBgDIAcAFIAMgBIAAAEIgngFQAFAKAdAfICQBrgAgPgvQgJgPgBgIIAPABQAMAcAoAlQAUARASANQhIgngXgigAgIhEIAOACIAsAhIAZAegAhkhPIAAgCIAYACIACADg");
	this.shape.setTransform(11.5,8.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22.9,16.4);


(lib.Path_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AmwBdIi9gwQh1gfg0gTQg3gXhPgoIhWgtQBVAjBRAPQAZAEB4ArQBkAhAxgDQAbgRgfgYIgkgUQCPgaBeAAQBIABAFALQACAGgqAXQgrAYAAAFQAAADgYALQgWALgUADQCwAfDogEQDEgECzgbQA9gKCvhEQC2hIAWgFQAqgIBLAPQA9AMAjAQQgjgEgogDQhSgEgdAJIi7BXQiuBOhYATQj4A3jFAAIgDAAQi2AAiygtg");
	this.shape.setTransform(101.2,13.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,202.3,27.7);


(lib.Path_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AhcguQAbgBBRAvQApAXAkAZQgqgSiPhMg");
	this.shape.setTransform(9.4,4.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.7,9.6);


(lib.Path_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAoAsIgngjIh7hSQAmAYAuAaQBnA4AxAEIgFALQgCANAQANQg3gLgcgTg");
	this.shape.setTransform(13.4,8.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.1,0.8,24.7,15);


(lib.Path_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgVgCQgmgVgegUQAcAICXBPQglgGhKgog");
	this.shape.setTransform(9.1,4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.2,8.9);


(lib.Path_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AAeAzQACgIgUgEIgSgCQgrgDg0gOQhQgUgEgcQABgNALgGQACgCAFgBQAKgBARAJQAjASAjAMIAbAIQgpgMhKguQBGAlA3AXIACABQBgAoAwABQAcABARgMQAKgHAQgQIAAAIQgXAjgxAKQgRAEgQAAQgbAAgXgMg");
	this.shape.setTransform(18.6,6.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,37.2,12.6);


(lib.Path_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#58595B").s().p("AAAgDIgQgTIgOgTQARAPAPARQAhAigEAQQgagogFgEg");
	this.shape.setTransform(3.1,4.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6.3,8.4);


(lib.Path_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAUARIgngVIg5g1ICZBrQgLgCgCAFIAAAFg");
	this.shape.setTransform(7.8,5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.5,11.6);


(lib.Path_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhGg4QBdBNAeANIAMAEIABAHQABAGAEAGQiBhagMgXg");
	this.shape.setTransform(7.2,5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.4,11.5);


(lib.Path_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgggbIBBAvIgCABQgCADgBAEQgmgcgWgbg");
	this.shape.setTransform(3.4,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6.7,5.7);


(lib.Path_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSgMIAkANQgFACgDADQgCAEABADg");
	this.shape.setTransform(1.9,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.8,2.6);


(lib.Path_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApGAzQAigQAugSQBZgiA4gKQCAgZBUgFQCpgLCPApQCMAlCYAaQBMANAwAFQjJgJhZgUQhegZg3gKQhkgVhQAEQgmABiAgEQhQgCgrANQhkAmg3AUQg7AVgZABQgQAAgCgKg");
	this.shape.setTransform(58.3,6.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,116.6,12.2);


(lib.Path_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjAAQAsgUArABQgGACAbARQgVAHgngCQgagBgZAEQgWAEgMAIQAOgLAXgJg");
	this.shape.setTransform(7.4,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.7,4.1);


(lib.Path_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVBQQgFgUAOgNQAcgaAEgHQAOgTgTgQQgdgagRgXQgVgfAeAEQAQAKAOAOQAgAaABANQABAZg3BrQgFgHgDgLg");
	this.shape.setTransform(4.1,9.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.2,19.8);


(lib.Path_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEXArQhOgIgjACQipAGhNgdQhMgbgPgEQgygOgrAFQg3AGgcgEQgggFAagRQASAAAaACQAzADAjAKQBSAVB/ARQC5AdCGgHQAeAAATAHQAUAHgQAEIgJAAQgTAAgzgEg");
	this.shape.setTransform(36.6,4.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,73.2,9.6);


(lib.Path_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AidBfQAUgGAWgMQAugXAPgdQATgiA+grQBKgyA5ADQgqANg4AgQgWAMhYBKQhNBCgXADg");
	this.shape.setTransform(15.9,10.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31.7,20.2);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AhZAaQArggAXgJIBBgcQAugPAnABQgvAPgtAQQghANguAXQgxAZgiAXQARgPAVgRg");
	this.shape.setTransform(12.8,5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25.6,11.7);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AhvATQApgNAwgKQBfgXAnACQi6AxgfACg");
	this.shape.setTransform(11.2,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22.5,5.4);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgaAJQgagEgOgFIgcgRQCdAgAgACIgOABQg8AAgvgJg");
	this.shape.setTransform(9.5,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.1,3.6);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AAiAjQh1g6gRgWIgaghQgEgFAXATQAbAXBgA5QBJAtAnATQgugVgwgYg");
	this.shape.setTransform(12.9,8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0.1,25.7,16.1);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgygLQgggUgUgQQgUgPAPAIQAjAUC6BbQhGgLheg5g");
	this.shape.setTransform(11.4,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-0.1,23,11.6);


(lib.Path_5_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABVhGIgGArQgqAVgjATIhWA6QB1hmA0gng");
	this.shape.setTransform(8.6,7.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17.2,14.3);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#58595B").s().p("AAAgIQgLgBgLAJQgFADgEAFQAGgLAFgFQAKgJAQACQASACAFAOQADAIgBAHQgNgWgSgCg");
	this.shape.setTransform(3.2,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6.4,3.3);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXAJQA3gsAwgCIgYAcIgaAEIhsArQAogSAPgLg");
	this.shape.setTransform(12.3,3.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.3,0,16,7.8);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrAIQAugYAegHQAvgKAGACIgPATIgYACIiEAqQASgLAYgNg");
	this.shape.setTransform(8.7,3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17.3,6.6);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUgBQA8gVAkAGIgqAQIhtASQAYgLAfgIg");
	this.shape.setTransform(7.7,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.3,3.8);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA6AeIgxgRIhcgsQAZAKAgAJQBAAOAugHQgHADgFAFQgIANAPAQg");
	this.shape.setTransform(8.4,3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.8,6.6);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#58595B").s().p("AgWAJQgFgHgDgOQADAIAGAFQAOAOAPgEQAFgDAGgGQALgJABgMQABAKgCAJQgFATgTABIgCAAQgRAAgJgLg");
	this.shape.setTransform(3.2,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6.4,4.1);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DEE3E6","#FFFDE5","#F0ECD8","#D6CDC1","#EDEDEE","#D8D5BB"],[0.004,0.251,0.396,0.596,0.788,1],0,13.8,0,-40.5).s().p("AgHBWQhZgVg4gXQhLgfANgZQAEgSAGgDQAJgEAjAWQBIAqAgADQAQACACgHQgNgDgagLQg0gUg4grQAPgYApAMIA3ARQA5AABbgbQBRgWAeAGQAWAFAHAbQAHAbgNAfQgiBPhyAGQgGABgHAEIgMAGg");
	this.shape.setTransform(21.8,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,43.5,19);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgCABQACgGAAgCQAAgBAAAAQAAAAAAAAQAAAAABAAQAAABAAABQABAFACgBQgDACgCAJQgEgBADgHg");
	this.shape.setTransform(158.7,61.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgCABQAAgDgBgDQABAAABAAQAAAAABAAQAAAAAAAAQAAABAAAAQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAQgBABAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIABADIgEgBQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQgCgDAAgCg");
	this.shape_1.setTransform(159,60);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgFAFQAEAIABgKQAEgGgBgJQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAgBQACAHgEAHQgBAEgEALQgHgFADgFg");
	this.shape_2.setTransform(209.5,58.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgDALQADgEAAgHIAAgKQAAAAABAGQAAAEADABIgCAHQgCADgBAAIgCAAg");
	this.shape_3.setTransform(207.1,56.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgBAAQABgFAAgDQACAAACADIgCAIQgBAFgEABQAAgEACgFg");
	this.shape_4.setTransform(112.1,53.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgHAOIAHgOQAEgHAAgHQAGADgEANQgDANgGAAIgEgBg");
	this.shape_5.setTransform(104.4,51.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgHADQAEgCADgDIAFgIQADACAAAEIgDABQgCABABACQgEAAAAABIgBAFQgBgBAAAAQgBAAAAgBQgBAAAAABQAAAAgBAAQgBACAAADIAAABQgBAAAAgIg");
	this.shape_6.setTransform(214.3,41.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAAAAQgGgHgEgDQADgBAHAKIALAMQgFgDgGgIg");
	this.shape_7.setTransform(100.1,90.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAAABQgNgKgGgKQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAEAAQACAKAOALQAPANABAHQgFgGgPgOg");
	this.shape_8.setTransform(99,90.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAMAgQgTgQgjglQAOAHAlAhQAiAdAbAJQgegQgjgdQglgggUgRQANAGApAfQAiAZAZACQgQgEgcgTQghgWgMgGQANAAAUAMQAYAMAOACIgDgEQgNgCgagNIglgTQAVABBCAZQgOgJgbgHIgqgNQAJgGAMAEIATAHQgVgQgjADIAIACQAFABAAAFQgDgDgOgEQgBABAAAAQAAAAAAABQAAAAABABQAAAAABABIAEAEQACACgPgKQgCADAFAEIgIgEQgIgDgBAHIgDgEQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAOABAjgHQgCgHgQgCQgRgCgDgFQASABAHADQANAEAEAIQAPAGAhAGQAdAIAKAOIgCAHIADAGQgBADgGACIAHADQAFAAgBAEQABADgEACQgDABgCgCIAGAFQAFADAAAFIgDACIgDADIACACIABABQABAAAAAAQAAgBAAAAQAAgBAAgBQAAgBgBgBQANAVgDAKQABADAEACQADADAAADQgkgJgigcg");
	this.shape_9.setTransform(106.4,93);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ACIBPQgLgFgEgIQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAABIgDABIABgFQgogKg6g1Qg7g1gfgLQgPAEgVgDIgrgIQgCAEgCABIgGABQAAgBAAAAQAAgBAAAAQAAAAAAAAQABgBAAABQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAIgBgHQABgDgHgEQAbAOANgBIgBgEIAAgEIAUAJQAOAFADgGQAHAEAMgBIATgCQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABIgCABQARANAgAeQAcAcASAOQAIgEALALQAPANAGACIgRgQQgLgKgCgGQASATAcASQAQALAlAUQhXg0g8hHQAVATApAmQAmAhAoAMQAJAIgBAIIAFAFQACACAAADIgGAAQgKAAgLgEg");
	this.shape_10.setTransform(99.3,94.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag5AJQABgBAFgBQAEAAABgCQgBgCgHAEQAAgBAAgBQAAAAgBgBQAAAAAAAAQAAAAgBAAQAJgDARAAQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAIADgBIADAAIgCgCQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAJAAANAAIAWAAQgBgBAAgBQAAAAgBgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAgBAAAAQABAAAAgBQgBAAAAAAQADADAKgBQAJgBAHgDIANAHQABABgLABQgPgBgTABIgiAHQAAAAAAAAQABAAAAABQAAAAABAAQAAAAABAAIgQABIgMABIgMgBg");
	this.shape_11.setTransform(112.1,86.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgNAAIgDgGQACAFANABQAOADAEADIgRgBQgIgCgFAEQABgEgBgDgAgQgHIAAABIAAgBg");
	this.shape_12.setTransform(80.7,86.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgCAEQgHgEgEACQgCgCgBgGQADAEAOACQAOAAACAGQgEgCgDAAIgJgBQABAEAFgBIgDABQgDAAgDgDg");
	this.shape_13.setTransform(76.7,86.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AABACQgMgCgIACQABAAAAgBQABgBAAAAQAAAAAAAAQAAAAAAAAIAAgGIAUAEQAMACAFAIIgTgGg");
	this.shape_14.setTransform(72.6,85.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgQAGQgBAAAAgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQAPgDAXgIQgBABABABQAAAAAAAAQAAABABAAQABAAABAAIgCABIgBgBQgBAAAAABQgBAAAAAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQgBAAAAAAQgaAAgDAHIgCACIgBgDg");
	this.shape_15.setTransform(140,82.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("ACFAlIgTgHQAAABgBAAQAAAAAAAAQgBABAAAAQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAAAAAIgZgKQgRgGgJAEIhsgcQhDgSghgNQAAgBAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAIAHAFQAFADACADQAIgGANAIQAPAJAIgDQgBAEAIAEIANAFIADgEIABgDQAGAFANAGIATAIIACgFIAHgGQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQAAABAAAAQACgCAHAFQAIAFADAAQACAAgBgDQADADAIADIAQAEQABgCgBgEQAAgDACgBQABADALAGQALAGAHgFQABABAAABQABABAAAAQAAABgBAAQAAAAAAABQAGAAAMAEQAOAGAJAAIAFAJQAEAAAAgJQAFAEASADQAOACACALQgIgGgJgCg");
	this.shape_16.setTransform(50.5,80.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ag6A1QgdgDgugOIAKACQAHABAFAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQgBAAgBAAQgDgBgBgCIALgDQgDAFAHgDQAGgCgCAEQAFgEABgDIAEACQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQgGAAADgDQgDAAgDAEQAXACAKADIACgCIABgBQgBgEgFABIgHADQAAgEgFAAQgFABgBgEIAOAAQgGgDgIgBQgJgBgDAFQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAgBAAgBQAAAAgBgBQAAAAAAAAQgBAAgBAAIAAAFQgBABgGgBQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAAAABAAIADABQABgEgGABQgGABAAgFIADABIADAAQAAgEgEABIgIAAQAJgEAFAAIAMAAIgDADQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQgCAEgCgBQAJAEALgBQAGAAALgDQgDgCgIAAIgJgBQACgCAIAAIAMAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQgJgCgVACQgUABgEgBIAHgCQAEgBABgDQgBAAAAgBQAAAAgBAAQAAAAgBABQgBAAAAAAQgDACgCgEQAEAAADgCIAHgEQgGgBgEgFQAAAAgBABQAAAAAAAAQAAABAAAAQAAABABAAQAAABABAAQAAABAAABQABAAAAAAQAAABAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgEACgCgBQgBAAAAgBQAAAAAAgBQAAAAABAAQAAgBABAAQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQABgCADgCIAGgCQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAgBAAQgDAAgBgDQACgCADACQABABAAgGQADAIAOgFIACAGQACAAABgEQABgDADAAIgGAJQgEAGADACQgIABABAHQAAABABAAQAAgBABAAQAAAAAAgBQABAAAAgBQAAgBAAgBQAAAAABgBQAAAAAAAAQABAAAAAAQAAAJANgDIATgFIALACQAIACAEgDQgBgBAAgCIgaABQgPAAgFAEQgDgDAEgBQAGAAAAgBQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBAAgBABQgCABAAgDQgCgBgBAFQAAAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAAAgBAAQAAgBgBAAQAGgBgBgFIACADQABAAAAAAQABgBAAAAQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQALgBgBABQAAABgJADQAAAAABABQAAAAABAAQAAAAABAAQABAAABAAQABgBAAAAQABAAABAAQAAAAABABQAAAAAAAAQAFgCgBgFQADAGAJgCIAOgEQgDgBgJACQgIACgDgDQA5gNBVgNQg2ADhsAWQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQABgBABAAIgEgCQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQAEgCANgCQAMgBAEgEQABADAEAAQAFgCADABIgCgCIgEAAQAQgHAHAGQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIABgCQAOAEAQgEQAWgFAMAAQgGgEgKADIACgDQgEAAgCABQgCAAgBAAQAAAAABAAQABgBACAAIAQgDQAUgBAaABQAgABABAFQAFgCAGABQAHABAAAGQABAAAAAAQAAAAABgBQAAAAAAgBQABgBAAgBQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAQACAJgQAIIgaAJQAAAAAAAAQAAABAAAAQAAAAABgBQAAAAAAAAQACABgGAEQgFADAFACIgLACQgHADgEgBQABABAAAAQABAAAAABQAAAAAAABQAAAAAAAAQgBACgEAAIACACQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQABACgJAGQgIAEACAFQgFADgMAEQAAgDgFgBQgFgBgCACIAHACQAFABABACIgCABQgBABAAAAQAAAAAAAAQABAAAAABQAAAAABAAQgRAEgCAHQgUAOggAAIgQgBgAg3AyQAUACgFgFQAJAAgEADQADgBAGABQAEAAACgDIgcgBQgUgBgKgCQACAFAVACgAguApQAIABADgCQgGgFgHAEQADgDgGAAQgHgBgBgBIAAAGIADAAIAKABgAg0AeQAJAAAVAFQAVADAMgEQgDgCgNABQgLAAAFgDQgEgBgBACIgEACQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgHABgLgBIgGgBQgFAAgEACgAgRAYQARAAAOgEQgjAAgYgCQAHAGAVAAgAACANQAeAAALgGQgwABglgBQAAAAAAABQAAAAAAABQAAAAAAAAQABABABAAQAAAAAAAAQABAAAAABQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAAAAAQAAAAABAAQAAAAABAAIAGgCQAJAEAagBgAhCAKQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABIAJAAQAFAAAAgDIgCgCIACgBQAAgBgBAAQgBAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBQgDgBgEACQgDABgCgCQAAAAAAABQAAAAAAABQAAAAABAAQAAABABAAgAggABQAugBAxgGIgqACQgVAAgHADQgEgCgGAAQgGAAAEADIgHgCQgEgBgDADIAGgBQAAAAABAAQAAAAAAABQABAAAAAAQAAAAABAAIgFAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAABAAAAgAg4gHQgDABgPAAQgLABgCAFQAHAAACgDQACADAIgDIAPgDQABAAACAAQABAAAAAAQABAAAAAAQAAAAgBgBIgEAAIgDAAgAATgPQgbADgQAFQAYgBAbgFIAxgHIg5AFg");
	this.shape_17.setTransform(61.3,72.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgDAEQgBgEABgDIADACIAAgFQADABACAHQAAABgBAAQAAAAAAAAQAAAAgBAAQAAAAAAgBIgDgCIAAADQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAAAIgBABQAAAAAAAAQAAAAgBgBQAAAAAAgBQgBAAAAgBg");
	this.shape_18.setTransform(124.9,66.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAAAEQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAABIADAAIgCgDQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQgDAAgBADIgFgDQAAAAAAAAQAAAAABAAQAAgBAAAAQABgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAAAQABgBABAAQAAAAABAAQAAAAABABQAAAAAAABQAAAEAEgDQAAABAAAAQAAABAAAAQABABAAAAQABAAABAAQAAAGgGABQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAAAg");
	this.shape_19.setTransform(212.6,66.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAAAFQgCgCAAgDIgBgGQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAQAAAAABgBQAAAAAAgBQAGgGgGAIQgBABAAABQAAAAAAAAQAAABAAAAQAAgBgBAAQAAAAABABQAAAAgBAAQAAABAAAAQAAAAAAAAQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAABABAAQAAABAAAAQABAAAAAAQgCABgCAHIAAAAIACgGg");
	this.shape_20.setTransform(128.8,66.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAFAHIABgCQgBAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABQgHgGgDgJIADABQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQAFgBAGANIABADQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBg");
	this.shape_21.setTransform(130,66);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAAAAQgJgJgDgFIAMANQAKAHADAJIgNgPg");
	this.shape_22.setTransform(151.7,66.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAFAGQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgEABgBADQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBABAAQABgCgBgCQgBAAAAAAQAAAAgBABQAAAAAAABQAAAAAAAAQAAAAAAABQAAABgBAAQAAAAAAAAQgBAAgBAAQACgCAAgFQAEgBAAAFQACADAFgCQgBABAAABQAAABAAAAQAAABAAAAQAAAAABABIgBABIgBAAg");
	this.shape_23.setTransform(141.4,64.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhrBYQgsgggbgFQgLABgWAFQgRAEgNgBQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQALgDAigEIABgGQABgEADADQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQACgDgBgCQACgBAEACIgDgCQAAAAAAAAQAAAAAAAAQAAgBAAAAQABgBAAAAQADADgCAGIgFAIQADACACgEQADgGACgBQAAABABAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgBACQACgEAIgCQAKgDACgGQACAEAHgBQABAEgFAAQAJAHAUAMIAgAUQAGAAABgCQAAAEAFAAIAPACIgpgVQgYgMgJgOQgBADgFgCQgDgBgBgDQAEgBAEACIgCgDIgBgEQAEADAGgCQAGgCADgFQAGAMATAMQATALAOAAQAAABAAAAQAAABABABQAAAAAAAAQABABAAAAIAHACQAAAAABgBQAAAAABAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAABQABAAAAAAQABAAABAAQAAAAABAAQABABAAABQAAAAgBAAQAAABAAAAQAAAAgBAAIgDACQADAFAGgFQAAAAgBgBQAAAAAAAAQAAAAAAAAQAAAAAAAAIgEABQABgFADAAQgKgFgZgJQgYgJgKgNQADAAACADIADADQAAAAAAgBQABAAAAgBQAAgBgBAAQAAgBAAAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQADgEAEADIAHAEQAEALAXAHIAjAKIgDgDQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQgFgEgTgIQgRgHgGgJQgDAEgDgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBAAAAAAQgEACgDgCQAAAAAAgBQAAAAAAAAQABAAAAAAQABAAABgBQABAAAAAAQABAAAAAAQAAAAgBgBQAAAAgBAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAABAAQAAABABAAQAAAAAAABQACgBAAgFQAIAMAXAJQAUAIAUABQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQABgBAAAAQABAAABAAQAAAAABAAIgPgHQgIgEgKgBQgCgFgIgEQgHgEgFAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQABAAAAgBQAAgBABAAQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQABABAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQgCAIAPAGQAJADAQAEQAAAAAAAAQABAAAAgBQAAAAgBgBQAAgBAAgBIALAAQgHgBgRgKQgOgHgFABIgIgDQACABAEgCQAAAAABgBQABAAAAABQABAAAAAAQAAABAAAAIAEgCQAAAAAAgBQAAAAABgBQAAgBAAAAQAAgBAAgBQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABAAQAAAAAAAAQAAgBAAAAQADAHALAFIAVAHQABgCAFABQAFAAAAgEQAAgCgEgCQgFgBABgCQgHgBgKgEQgLgFgGAAQAEgBAHgHQAFgEAEgBQgCABAGAEQAGAEgDACQgDgBAAgFIgCAEQAAABgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAQANAUABQABAAABgBQAAAAABAAQAAAAAAAAQAAAAAAAAIgBgDIAGACIAIABQgLgHglgNQAAgFAIgEQAIgEAKgCQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAgBAAQALABAUgNQAMADACgJQAVAPAcACIgEgDQgBgCAAgDQAAAAAAAAQAAAAAAABQAAAAAAABQgBABAAABQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQgIgEgKgBIgQgEQABgDAFADQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAEABAEgDQAEgEACAAQAAAFABADQABAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQgCgDABgCQAEABACgEQACgDAEACQAFgFATgJQAUgJAIgHQAegNATgCQAegEAVAQIgDADQAAABAAAAQABAAAAABQAAAAABAAQAAAAABAAQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAQAAABAAAAQABABAAABIgDABQgBAAgBABQAAAAAAAAQgBABAAAAQAAABABAAQgFgDgGAEQgGADAEACQgBABgDgBIgIAAQABAEgGAAQgHAAAAAFQgGAAgCgDQgCAGgDACQgGgBgFAFQgEAEgEgCIAAAEQACADgDACIgJAAQgGAAAAgDIgCAGQgDAEABACQgBAAAAABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAAAgBAAIgFAHQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAQgCACAAADIgCAFQgDgCgDABQgBABAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBQgBACgFAFQgFAEgBAFQgDgBgCAAIgHABIgEAMIgFgCQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAgBQgBABAAAAQAAAAAAAAQAAABAAAAQAAABABAAQAAAEAAACQgFAAgBADIAAADQgKABgJAGQgIAFgDAGQgGgCgEAGQgDAFADAGIgIACQgFACgFAAQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAAAABIAAAEQgBgDgEAAIgDAFQgDADADACIgKAGQgDAEAAAGIgSAOQgKAJgBAJIgIAAQgCAFgBACIACACQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgaAAgpgegAhqBLQABAAAAABQABAAAAAAQAAAAAAAAQAAAAAAAAQgBAAgBAAQgBABgBAAQAAAAgBAAQAAAAAAAAQAEABAFAFQAFAEAEABQADgFgHgFQgGgDgEAAIgBAAgAiDA8QAQANAHAAIgcgTIgcgTQgBACAGAGQAGAFgDADIAFAAQAJAAALAJgAhNBAQAGAEAFgBQAAgEgFAAQgBAAgBgBQAAAAgBAAQAAgBAAgBQABAAAAgBQgMgEgXgPQgVgOgMgCQAFALAUAMIAeAQIADgBQADAAADACgAisAsQAFADAAADIAJAAQgLgMgDAAQABABAAABQABAAAAAAQAAABAAAAQgBAAAAgBIgFgCQAAAEAEACgAAjgKQAAgHgOgDQgNgDAAgFQgFADgDgCIgIgCIAAADQgBAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAQAEAFANAFQAOAFAMAAIAAAAgAA6gSQAAABAAABQABAAAAAAQAAAAABAAQAAgBABgBQgBAAAAAAQAAAAAAAAQAAAAABgBQAAAAABAAQABAAABgBQAAAAABAAQAAgBAAAAQABAAAAgBQgEgCgTgHQgOgFgBgEQAAADgHAAQgHAAACAEQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAABQAAAAABABQAAAAAAABQgHAAgCACQAgANALgBIgCgBQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAIADAAIgCADgAAqgtQAEABgCABQgFADAAABQAgANAMgGIgUgJQgJgFgHAAIgFABgABxgzIAAAAQgGgCgBgCQACgBAEABQABABABAAQAAAAABAAQAAAAABAAQAAgBAAAAQgDgDgMgDQgJgCAAgEIgFADQgCABgDgBQgBAIANACIATADIAAAAgABuhJQADAFgKABQADACAIABIAMADQACgIgIgDIgHgBIgDAAg");
	this.shape_24.setTransform(166.2,75.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AADAHQgBgBAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAgCgDgEQgDgCACgEQADAAABAFQACADAEAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAABAAIgBABIgBAAg");
	this.shape_25.setTransform(146.4,64.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAAACQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAABAAQgBAAgDgCQgEgFAGAAQgBABAFAGQAGAFgHADQABgCgDgEg");
	this.shape_26.setTransform(116.1,64.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgFADIgCgMQAFABAAAEQAAAEABABQAEAAAAgBQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAQABABAAABQAAAAAAABQAAAAABAAQAAAAAAAAQAAABAAABQAAABgBAAQAAAAgBAAQgBAAAAAAQgDgBgBgCIgBACQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIAAABQgEAAAAgHg");
	this.shape_27.setTransform(133.1,64.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgIAEQADgEAFgBQAEgDAFABQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAAAAAgBQgDACgCADQgBAAgCABIgEABIgBAAg");
	this.shape_28.setTransform(40.7,64.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgEADIgCgMQAKAEADAKQgFAAgBgFQgBAAAAAAQAAAAAAAAQAAABAAABQAAAAAAABIAAAFQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAIgDgBQAAABAAAAQAAAAAAAAQAAABABAAQAAAAAAAAIAAAAQgBAAgBgHg");
	this.shape_29.setTransform(165.1,64.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgBAJIABgBQgBgEAAgEIAAgJQABACACgBIAAAGQgBgBAAAFQAAAIgBAAIgBgBg");
	this.shape_30.setTransform(167.9,63.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgCACQAAgEgCgCQABAAABAAQABAAABgBQAAAAAAAAQAAAAAAgBQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAABQgBACABABQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAABAAQAAAAAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABQAAAAAAABIgBAAQgBAAgCgFg");
	this.shape_31.setTransform(132.3,62.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAAAFQgFgHgFgEQgBAAAAABQgBAAAAABQAAAAAAABQAAAAABABQAAABAAABQAAAAABAAQAAAAAAAAQABAAAAAAIgCABQAAABgBAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQABAAAAAAQABgBAAAAQAAgBAAAAQABgBAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQABAAAAAAQgEgCABgHQAEgCAEABQgCAEABACQACAEAAADQADgBACACQABABAAAAQAAAAAAAAQAAAAAAAAQAAAAABgBQAEABgFACIACACQADACgEAAIAHAEQAEACAAAEIADgBIgCgCQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAEABAAADQABAEABABIgEgCIgDADQgEgDgHgKg");
	this.shape_32.setTransform(119.7,63.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgCAHIgBgJQgBgEgDAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAgBQABABAAABQAAAAABABQAAAAAAABQABAAAAAAIAEgBIABAFQAAABABAAQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAABIACAFQAAAAABAAQAAAAABgBQAAAAAAgBQABAAAAgBIABACIAAAEg");
	this.shape_33.setTransform(140.4,62.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAAAJQAAgBAAAAQAAgBAAAAQAAAAAAAAQgBAAAAABQABgGgEgBQgBgBAAAAQAAAAAAAAQAAAAAAAAQABgBABgBIgEgEQgDgDABgDIAEAAQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQABAFAGACQAEACADgEQAFACgLACIAFAHQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAgBQAAgBAFAAIgEAEQgCACAEAAIgCADQgBAAABAAQAAAAAAABQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAABQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABAAAAIAAAAQgCAAgBgEg");
	this.shape_34.setTransform(127.8,63);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgDABQgCgJgDgGQABAAAAABQABAAAAAAQABAAAAAAQAAgBAAAAIABADQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABABQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAgBQABADAAAGQACABADADIAEAHQAAABAAAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAIgBAEQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAIgCgOg");
	this.shape_35.setTransform(144.8,63.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAHASQABgEgCgBQgBAAAAAAQAAABgBAAQAAAAAAABQABAAAAABQAAAAAAABQABAAAAAAQgBAAAAABQAAAAgBAAIgOgmQAAAAABAAQAAAAAAgBQAAAAAAAAQABAAAAAAIADAAQgBABAAABQAAAAAAABQAAAAAAABQABAAAAAAQAEAAABADQAAAEgEABIADAFQAAAAABAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAEACABAGQABAEgFACQABABAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQADgCACABQAEAQgGADQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBg");
	this.shape_36.setTransform(136.1,63.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AA2AjIgggQIgBgEQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQgtgOg9gtQAxAeARAIQAqAUAeADQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBABgBAAQAAAAAAAAQAAAAgBAAQAAABAAAAQAAABAAABQgFAAgJgGQgDABAEABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBgBIgFgBQAKAIAVAKQAZAMAIAEQgQgDgTgKg");
	this.shape_37.setTransform(12.8,66.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AADADIgDABQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBgBAAIgEgBQgBAAAAAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAIACAFQAEAAACAAIABACIgBAEQgBgBAAgBQAAAAgBgBQAAAAAAAAQgBAAAAAAg");
	this.shape_38.setTransform(178.4,61.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAAACQAAAAAAgBQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQABAAABAAQABgDAAgDQAGADgCADIgBAEQAAADgFAAQABgBABgEg");
	this.shape_39.setTransform(137.6,61.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgFAAQgKgVgCgJIARAcQAHAPALAHQgEADgFgGQgHgHgCgBQACANgEAJQADgLgGgUg");
	this.shape_40.setTransform(161.4,63.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAEALIgEAJQACgQgFgQQgHgPgKgJQADgDALAPQAIAQgBAIIANATQAGAIABAKQgJgQgIgKg");
	this.shape_41.setTransform(154.4,64.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgBAYQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAAAABIgDAAQAFgIAAgQIgEgZIAIACQAAAAAAAAQAAABAAAAQgBAAAAABQgBAAgBAAQAAABgBAAQAAAAAAAAQAAABAAAAQABAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQgEAAADAHQACAGACgDIACAMIABAJQgDAAAAgEQgDABABAEQABABAAAAQAAABABABQAAAAAAAAQABABAAAAIgCADQgBADAAACQgBAAAAAAQAAgBAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAg");
	this.shape_42.setTransform(148.6,62.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgBALQABgIACgBQAAgBAAAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIgCgBQACgIgDgLQgFgBAEAAQABAAABABQAAAAAAAAQAAABABAAQAAAAgBABQACgFAAAEQACAHADAAIgCAGQAAADADACQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIgDgBQAEADgBAIQgCAHgDAFQgDgDACgIg");
	this.shape_43.setTransform(121.6,62.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AADAFQgBAAgBAAQAAABgBAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQgDABgFgBQABgBAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBABAAABQgBgBgBAAQAAgBAAAAQAAAAAAgBQAAAAABgBQADgDgBgCQACgDAAAEQAAABgBABQAAABAAABQAAAAAAAAQgBABAAAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAABgBIADgBQAFAFgDADQAAAAABAAQAAAAABAAQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAABAAIgCAIQAFgCAAgEQAEAGgIADIgDAAQgEAAADgGg");
	this.shape_44.setTransform(210.5,66.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("ABaBAQhFgogjgSQgWgUgxgcQg4gggTgQQgqgDgOgFQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAAAAAIAEACQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAIgBAQADQAOADAGgDQADgBgCAIIALAAQADAAAFAEQAAAAABAAQAAAAAAAAQAAgBAAAAQgBAAAAAAIgDgCQACgCAFADIAHAEQABgBAAAAQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAABAAQAAgBAAAAQAFABgCAEQgEAGABADQAHAAABgHQAEACgBAEIgCAHQABAAABAAQABAAAAAAQABAAAAgBQAAAAABgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQABAAABAAQAAAAABAAQAAABAAAAQAAAAAAABIgBAEQAAABAAAAQAAABAAAAQABAAAAgBQAAAAABAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABABQAAAAABABQAAAAAAABQAAABAAABQgBAEACABQACgEAEACQADADABAFQAGAAAHAFQAHAEAEAHQADgCADABQAAAAABAAQAAABAAAAQAAABAAAAQgBABAAABQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABgBIADgBIgBAGIAGAAIgBgDQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAQgBgDgHAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAgBIgEACIgEgCQgBgCAFgBQABAAABgBQAAAAAAAAQAAgBAAAAQAAAAgBgBQABAAAAgBQABAAAAAAQABAAABABQAAAAABABQACADgBAEQAAAAABABQAAAAAAAAQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgCACIAEgBQABAAAAgBQABAAAAAAQABAAABAAQAAABABAAQgCAEAFAAQAEABgBADIADgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIA9AsQAkAZAdAQQgBAAAAABQAAAAAAABQAAAAAAAAQAAABABAAIAEACQABAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAQAHAUANQgBgEgIgFQgHgEAAgGIgEABIgCgDIgBAAIABABIgBgBIAAAAIhIgwQgwgfgagQIACgFQABAAAAgBQAAgBABAAQAAgBAAAAQAAgBAAAAQABAAABABQAAAAABABQAAAAAAABQAAAAgBABQgCAEAAACQAGABAAgFIAAgIIA/AmIBBAkQADgEAFACQAGACgCAEIAEAAQAEAAACADQAAgBAAgBQgBgBAAgBQAAAAABAAQAAAAAAAAIAGACQgCgDgIgCQgHgBABgFIgDADQgUgPg3gcQgxgdgUgQIgDgDQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAIgFABQgEABABgGQAFgBADACIAIAFQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAABAAQBJAwAmAHIgBAGQAAAAAAABQAAAAAAABQAAAAABABQAAAAABAAQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAAgBAAgBQABAAAAgBQAAAAABAAQAAAAABAAIgJgEQgFgCgBgEQAAAAgBAAQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBIABgDQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAABIgBADQgSgIACgGIgtgXQgegRgOgOIgDADQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQABgEgBgCIAFAHIADgCQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABQgBAAAAABQAAABAAABQAAAAAAABQAAAAAAABQABAAAAABQAEAAABgGQARAJAaAMIAuASQACgBABgDQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIABABQABAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAABABQAAAAAAAAQAAAAAAABQAAAAAAAAIgDABQACACADABQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAgBIAAgCIAFgBQAAAAABAAQABAAAAABQAAAAAAAAQAAABAAAAQABAEgDgCIgDgCQgBAFAIgBQAAAAAAAAQABAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAgBQAAAAAAAAQABgBAAAAIADACQAAAAAAABQABAAAAAAQABAAAAABQAAAAABAAIgCABIgBACIAUAJQAMAGAIgBIgBADIABACQASgBAJAQQANAVACACQgBAGgDAAQAGAIAFgEIABAHQABACAEABIAAAGQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAgBAAQAOASAWAzQgBAEgGADQg5gKg/ghgAB9AyQAPAMAJADIgYgTQgOgMgMgDIAaATgACOAnQAIAFACgGQgGgBgFgEQgCgDgEACIAAgGIgEAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAgBIgEABIgFgBIAAAFQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAIgDABQgGgGgCADQAGAFANAHQAAgDgEgCQgEgCAAgCIAGADQADABACgCIgBACQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAIADgBQAFAAAGAFgAC0AaIgagNQgQgJgCgEQgEACgIgDQgIgFgDABIAFACQAAABAAAAQABAAAAABQAAAAgBABQAAAAAAAAQAIAAAVALQAXANAKACIAAAAgABggpIANAJQAIAFAGgBQgEgBgLgHQgIgFgDAAIgBAAgABXAyQABAAAAgBQABAAAAAAQABAAAAABQAAAAABAAIABABIgFgBg");
	this.shape_45.setTransform(218.9,72.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("ABTAsQgGgDgDACIAAgDQAAgDgGACQAAAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAIAFAAQgIgEgagJQgagIgGgDQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAgBQgSgNhDgZQgCgDABgDIABgIQgBAAAAAAQgBAAAAAAQgBABAAAAQAAABgBAAQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQgBgDABgCIABgFQACABADAAQADgBACABQgBAFAFACQAIgFAVAKQAWAKAHgCIAIAHQAEADAEgEIABAGIAfAKQATAEAPADQAIANASAXQgBADgDAAIgEgBg");
	this.shape_46.setTransform(223.4,64.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAAAAIgEgMQAEABABAIQADAHABABQABAEgCAEQgBgGgDgHg");
	this.shape_47.setTransform(113.7,60.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAAACQAAgHADgBQgBAAAAgBQgBAAAAAAQAAgBAAgBQgBAAAAgBQAAgDADgCIAAARQAAAKgFADQACgDAAgKg");
	this.shape_48.setTransform(161.7,61);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AACgCQgCgGgHgHQAHAAAEAMQAHAMgFAHQAAgLgEgHg");
	this.shape_49.setTransform(170.3,61);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AACAAQgGgTgGANQABgCAAgRQAAgJADAQQAMANgCAHQADAEAEAMQgBAJgCACQABgNgHgQg");
	this.shape_50.setTransform(67,62.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgCAFQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBAAQADgBAAgCIAAgIIAAADQAAABABAAQAAAAAAABQABAAAAAAQABAAABAAIgDgCIAAgDQAEADgBAFIAAAFQgEgCAAACIgBAEQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBABgBg");
	this.shape_51.setTransform(188.3,59.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgIACIgCAGQgCAEgFAAQgBgCACgIQACgEgDgGQAAAAABAAQAAAAABgBQAAAAAAAAQABgBAAgBQACAEAEgBQgDAIAEACQAAAAABAAQAAABABAAQABAAAAAAQABAAABAAQAHACABgLIAGAGIAHAEQgDACgDAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBgBIgEgCQgBAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABIAAAFIgEAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAAAABQgFgGABgEg");
	this.shape_52.setTransform(184.8,60);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AACATQAAAAAAgBQABgBAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAAAABIgDAAQABgMgCgHIgJgPIAEACQAAABABAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAABAAQAAABABAAQAAAAABAAQABAAAAAAQgFACACAEIADAGIAAgCQABgBAAAAQABAAAAAAQAAAAABAAQAAAAABAAQgBgDAAgEQABgEgCgCQABAAAAAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAAAQAAAAAAgBQABAAgBgBQAFADgDAGQgEAGABADIgDgCIgEABIABAEIADABQgCAAADALQACALgGABQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBg");
	this.shape_53.setTransform(177.1,61);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAAAAIAAgIQADACgBAGQgCADAEAAIgEADQgCABgBACQgBgDAEgGg");
	this.shape_54.setTransform(202.9,59.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAMAYQAAgBAAgBQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgGgHQABAEgCAJQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBABIgDAAQAEgEgBgKQAAgKACAAIAAgCQAAgBAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgDABIgBgQQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAABQAAAAgBAAQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAAAQgBgBAAABQgBAAgBAAQACgEgCgDQgEgFABgCIAFAHIAJANQACgCACgHQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAgBABgBQAAAAAAAAQABAAAAABQAAABABABQABADgBADQgBAAgBAAQgBAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAAAAAQgBAAgBAAQACAJAEAHIAOAOIgDACQAAAAAAAAQAAAAgBABQAAAAAAABQAAAAAAABQgDgBABgEg");
	this.shape_55.setTransform(174.8,61.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AhAgJQAAgDACgCQACgDgBgDQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQAAABABABQAAAAAAABQABAAAAABQABAAAAAAQAKgHARAGQAUAIADAAQAAAAAAABQgBAAAAAAQgBAAgBAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAABAAAAQgBAAAAABIAlAIQAAgEgGAAQgHgBgBgCQAAAAAAAAQAAgBAAAAQABAAAAAAQABAAABABQABAAAAAAQABAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAABAAQAAAAABAAQABAAABAAQADACgBADQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAQgBABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAIADAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQgFgEgLgDIgOgEQAAgDAGACQAHACADgBQgHgDgXgDQgVgDgGgIIAIgDQAGgBABgFIASADIARAAQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAABQAEABAEgDQACAMAHAHQAEAFAJAIQAAAAAAAAQAAAAgBAAQAAAAgBAAQgBAAgBAAQgDgCgCACQAAAAAAAAQABAAAAAAQAAABABAAQABABAAAAIAFACQAAAAABAAQAAAAABgBQAAAAAAgBQAAAAAAgBQAIAFAEAIQAAAAAAAAQAAABAAAAQgBAAAAAAQgBAAgBAAIAIALQAFAHACAGQhBgYhAgYg");
	this.shape_56.setTransform(222.7,60.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgkBBQgCgBAAAAQgBAAABAAQAAgBACAAQABAAADAAQAQgBAMgHQAHgGALgLIAHgSQAFgKgBgKQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIgCABQAEgPgGgSIgNggQANAJAFAZIAGAwQABAAAAAAQAAAAABgBQAAAAABgBQAAAAAAgBQABAHAFAFQgNACgFASQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQgMAJggAMIgGAAIgHAAg");
	this.shape_57.setTransform(34.4,62.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAAAeQABgMgEgEQAAAAgBAAQAAAAgBAAQAAABgBAAQAAABAAABQgCADgCABQgCgDADgIQAFgIgEgEIgCACQAAAAgBABQAAAAgBAAQAAAAgBgBQAAAAgBAAQgDABAAAFQgDAAABgFQADgCADABQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAQgEgEAAgIQgCgJgDgCQAFABAEAHIACgDIABgEQAAAAABABQAAAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAAAABAAQAAABABAAQAAAAAAgBQABABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIgHgCIAEALQADAHACgFIAAAQQAFAGABACQALgIADgJQADAAACAHQgFgCgFAHQgEAIgEgBIABAGQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAIgBAAg");
	this.shape_58.setTransform(206.6,58.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AABAEQgBgHgIgBIADgMQgBAEAGAMQAJAOAAAEQgEgCgEgMg");
	this.shape_59.setTransform(51,55.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AACABQgCgNgEgBIgDgKQAIAKAFANQAFAQgLAIQAFgIgDgPg");
	this.shape_60.setTransform(183.2,55.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgBABIgBgKQAAABABAAQAAAAABAAQAAAAAAAAQAAAAAAgBIAAABIAAABIABADIACAEQgCABAAAEIABAFQgCgCgBgHg");
	this.shape_61.setTransform(113.4,53.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AADgDQgDgQgIgHQAJAFAFAPQAGAPgFASQgBgWgDgIg");
	this.shape_62.setTransform(102.7,55);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgHARIgCgKQAIACgBAMQALgJgFgOIgJgbQAIAJAEAHQAFAMgCANQgEADgFAFIgGAKQAAgHgCgGg");
	this.shape_63.setTransform(192,54);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgDAAIgDABQACgIgDgGIAFAFQADAGgBACQAEAAACADQACAFAAAGQgIgEgDgKg");
	this.shape_64.setTransform(34.7,52.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgCASQgDACgCAAQACgBACgDQACgEACABQgBgEACgJQAEgLgCgIQAFAGgCANQgCALgFAJQAAgBAAAAQAAgBAAAAQgBgBAAABQgBAAAAAAg");
	this.shape_65.setTransform(115.6,52.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAAgDIACgNQAEgCgCAIQgCAIADgBIgEAKQgBAHgEAEQADgIABgNg");
	this.shape_66.setTransform(108.5,52);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AABAMQgEgPgEgEQAAAAAAAAQABgBAAAAQABABAAAAQABABABAAQACAEAAACQABAAAAgLQACACACAJQACAJACADg");
	this.shape_67.setTransform(130.4,51.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgEASIgBABIAFgRQAEgKAAgKQACAOAAAEQgBAKgGAJIgDgBg");
	this.shape_68.setTransform(132.2,50.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AACAFQABAAABgBQAAAAAAAAQABgBAAgBQAAAAgBgBQgBgBgDAAIgEABQAAgBABgCIACgDIgFABIgFAAQACgEAJADIAAADQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAAAIACgEQACgEAFABIgDACQACABAAAFQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAAAgBQAFABgGADQgJAEAAABQAAAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAg");
	this.shape_69.setTransform(32.9,49.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgKBBIAKgLQABgEgBgBQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQACABAAAEQAHgFADgJQAEgMgKgDQABgBAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAQACADADgBQAEgUgKgcQgKgkAAgMQADAAADAJQADAKAEgCQAAAFADAFQAEAHABAHIgGAAQAEAHABASQABAQAFAHQgCABgCADQgCADgCAAQAEAVgOAPQgFAHgWAMIAMgLg");
	this.shape_70.setTransform(28.8,56.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgDABQgBgHAFgHIAAANQAAAJADAFQgFgEgCgJg");
	this.shape_71.setTransform(14.5,50.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgCARQgIgDgBgPQgCgRANACQAAAEAFAJQAEAEgDAGQAHAAgEgOQAEACAAAJQgCABgCAFQgBAEgEAAQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBQgDAAgCAFQgCAEgBAAIgBAAg");
	this.shape_72.setTransform(16.3,50.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgBAQQgCgLgEgBQABgDAGAIIABgFQABgDgBgBQgCAAgCgFIgEgJQADABAAgEQAAgFABgBIADAHQAAADAEgCQgCADAAADQABADAFgBQgCADgBAHQgBAIgEABQAAABAAAFQAAAEACABIgBABQgBAAgBgIg");
	this.shape_73.setTransform(206.7,50);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAAADQAGgLgBgNQAEADADAIQAEAKgCAGQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBIAAgEQgCADgGAIQAAABAAAAQAAABABAAQAAAAABABQAAAAABAAQABAAABAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAQgDAEAAAEQgEgBgIACQAKgGADgNg");
	this.shape_74.setTransform(138.9,49.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AAEAEQgEgGgEABQAEgBAFgEIAAAHQAAAEgEACQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAABAAg");
	this.shape_75.setTransform(111.6,46.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgGAEQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAQAAABABgBQAAAAABAAQAAAAAAgBQAAgBAAgBIAGAEQgCACAFgBQgCAFgDgDQgDgDABgBQAAABgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBABQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQAAABgBAAIgBgBg");
	this.shape_76.setTransform(104,44.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgCAAIAFgJQABAAAAAAQAAAAAAAAQAAAAAAABQgBAAAAABQgDAEADAAQgDACAAADIgCAIQgDgFADgFg");
	this.shape_77.setTransform(60.4,45.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAFAGIgEABQAAgEgBABIgIAAQgBAAAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQABgBAAAAQAAAAAAAAQABgBgBAAQAAAAAAAAQADABADgCIAEgFIACADQAAAAAAABQAAAAABAAQAAABABAAQABAAABAAQgDABAAACQABADgBACIgCgBg");
	this.shape_78.setTransform(37.4,42.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgHAEQABgCADAKQADABADgJQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIACgCIgBgBQgBAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBIABACQABABAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIgCgFQgCgEABgEIADABQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAgBIACAKIABAKIgEACQgBABAAAAQAAABAAAAQAAABAAABQAAAAABABIgDgBQAAAAgBAAQAAAAAAAAQAAABAAAAQAAABAAAAIgBABQgGAAAAgLg");
	this.shape_79.setTransform(72.2,43.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AACARIgDgRQgDgKgDgBQAAgBgBAAQAAAAAAgBQAAAAAAgBQABAAAAgBQADgCADABIABAIQABAEgBADQAAAAAAABQAAAAAAAAQAAAAAAAAQAAgBABAAQAAgBABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIACADQAAAAAAAAQABABAAgBQAAAAAAAAQABgBAAAAIgDAKQgCAHAIADQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgFAAg");
	this.shape_80.setTransform(92.8,43.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgNAFQABAAABAAQAAAAABABQAAAAAAABQAAAAAAABIABAFQAGgGACgHIABgRQAAAGAFAIQAHAGACAGQgCgBgEgGQgCgCgDgBQgDABgBAJQgCAIgGABIgEgNg");
	this.shape_81.setTransform(66.6,42.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgGgEIADgEQABAAAAgBQAAAAABgBQAAAAABAAQAAAAAAAAIAAAFQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAABAAQAEgIgBAAQAEAAgCAHQgBAGgEABIABAEQABADgBADgAAEgLIAAAAIAAAAg");
	this.shape_82.setTransform(60.5,41.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AAHAWIAAgIQgDACABgEQABgGgFABIADgDQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBABAAIACAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAAAgBABQAAAAgBAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAgFgCgFQgBgBAAAAQAAgBgBgBQAAAAAAgBQABAAAAAAQAAgCgGAAIgCgEQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABgBQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQADgCAAgCQADADAGAIQACAHAFADQAAABAAAAQAAAAgBAAQAAABgBAAQgBAAgBAAQAAAAAAAAQAAAAABABQAAAAAAAAQABAAAAAAIAEAAQgBADAEAAQAAADgFACQAAADAIgBIgBAFIADgBQABADgCADIgDgDQgCgCgCgBIAEAGQACAEAAAFIABgCQAEACgLACQABgCgBgEg");
	this.shape_83.setTransform(75.1,42);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgMAHQAKgLAOgEQAAAIgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgDABgDgBQACgBAFgBQAAgBAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQgBABAAAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAgBABQAAAAAAAAQAAAAgBABQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIABACQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAABIgCgFQAAAAAAABQgBAAAAAAQAAAAAAABQAAABAAAAIAAAFIgCAAIgHgCg");
	this.shape_84.setTransform(216.1,46.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgNAFIgCgDIAGAAQgCAFADABQADAAgBAGQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABABAAAAQgDgFAFgGQAHgKgCgIQAAAAABAAQAAABAAAAQABABAAAAQAAABAAABQAAAAABABQAAABAAAAQABAAAAAAQABAAABAAQgEAFALAFQgBAHAHAEQgDACgCgBQgBAAAAAAQgBAAAAgBQAAAAAAgBQABgBAAgBIgBACQgBABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgDgCgCIgDgDQAAAAAAAAQgBAAAAAAQAAAAAAABQAAABAAABIgCAFQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBIABgCQgDABgEAIQgBAGgFABQgEgLgDgEgAgPACIgJgFQACgDAFACQAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAIABACIAAAAg");
	this.shape_85.setTransform(136.5,44.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AARAJIgIgBQgBgEgIgCQgGgCgBgCIgJAAQABAAAAgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIACAAQAKAEACAEQAEAAAGADIALAFQABAAABAAQAAAAAAABQAAAAAAAAQAAAAAAAAIgCAAg");
	this.shape_86.setTransform(10.9,62.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AtkF6QgRgFgOgJQgggLgigVIAoASIAqATQAIgOAFgFQAAgDgFAAIgGgCQAcgHANgHQAWgLgIgbQAIAFgCALIgCAQQAugIAZgZQAdgcAAgvIgXATQgRANgMAEQADgDAAgEIAAgLQABACAEAAQAAAJgBABQAOgIACgCQgCgEgEgCQABAAAAgBQAAAAABAAQAAAAABABQABAAAAABIAFADQALgEAIgLQAIgKACgLQgCgEAAgFIAAgNQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQAAgBgBAAQAAgEACACQABAAAAABQABAAAAAAQABAAAAAAQABAAAAgBQABgBAAgEQgBgDABgCQgFgIgBgOIgBgaQgBgOgJgaQgIgYgBgNQgBgRgZgDQgXgDgWAIQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAgBABAAQAAABABAAQAAAAAAABQAAAAAAABQgWANgJADQgTAFgNgNQADgJAFAEQgBgEgFABQgFABgBgDIgUAHQgMAEgHgBQgLAGgOAfQgGgCgCAJQgBAMgEACQABAAAAAAQAAABABAAQAAAAAAgBQABAAAAgBQACgDADABQgBADgCACQgCAAACAFQgBAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQADADgBACQAAgBgBgBQAAAAgBgBQAAAAgBAAQAAAAAAABQgCABACAEQgEgBgBAEQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABABQgDADgHAGQgFAFgBAHQgFABgKAFQgIAEgHABIACgCQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAgBgBQgCACgHABQgHAAgDACQgCgEAIgBIAMgBQAMgPgHgTQgIgUgVADQABACAFABQAFAAABABIgPABQgIABgHAEQAAAAgBgBQAAAAAAgBQAAAAABgBQAAAAAAAAIADgDQgNAHgBASQgBATAPAEQAAAAAAAAQAAgBAAAAQAAgBgBgBQAAAAgBgBIgEgGIAKAGQAIAFACAFQgDgCgCAAIgHgBQABAFgNgFQgNgGgCAFQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAgBQgIACgIgCIgNgEQADgLABgGQAHAEAGgGQgDABAFgGQAGgGAEgCQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAHgCACgDQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAIgIAEQgFADgDAEQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIAAgDIgIALQgFAHACAFIgGAAQgGABgDgBQAAgFgFgBQgFgBgEABQABgDADAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAgBQgBAAAAAAIABABIACAAQgFAEADAGQADAGgBAGIAEgBQAFAAgGABQAAABAAAAQAAABABAAQAAAAAAAAQABAAABgBQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQACADAFACIAGABQABAAAAAAQAAgBAAAAQABAAAAgBQAAgBABAAQAAgBAAgBQAAAAAAAAQAAgBAAAAQgBAAAAAAIACgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQgBACgCACQgBAAAAABQAAAAAAABQAAAAAAABQAAAAABABIgKACQgFABgBAFQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBgBAAAAIgDgDQgCAEAEABQAEACgBADQgHgDgDgHQgCAHAIAGIANAHQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAAAgBIgCgCQADAHAUAGQAVAGAGAIQAQgBATAJQARAIANANQACgBgDgFQgCgGABgEQAAABABAAQAAABABAAQAAAAAAgBQAAAAAAgBQAAgHACgCQAFABABAKQgCgCgEAAIAGALQAEAHgEAEQADABAAAEQABAGADACQADAAgBgFQAAgFgEAAQAEgCAAgEIABgHQAEAWATAKIAUgGQAKgEAFgIQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIADAAQgCAHgIAEQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIACgCQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBABgBABQgDADAAADQgWAKgUgKQABADAGAEQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAABQAAAAgBAAQAAAAAAABQAQAEAdAAQgBABAAABQgBAAAAABQAAAAAAABQAAAAAAAAIAGgBQgGAIgQgBQgQgBgEAGQAAgEgFACQgBABgBABQAAAAAAABQgBAAAAABQABAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgCgCQAAABgGABQgHAAgCgCQgBgEACgBIADgEQgcgCgIABQAEgDAOgCQAOgCAEgDQgCgDACgDQACgEAAgDIgNgSQgKgPgOABQgCgIgOgGIgcgIQAHAJAIABQAHAdApAaIgOAAQgDgEgQgIIgZgOIABgBIACAAQgVgGgFgOQAHADAMAKIACgCQAAgBAAAAQAAAAAAAAQAAAAABABQAAAAAAAAIABgDQAAgBAAAAQAAAAABgBQAAAAABAAQABgBAAAAQgEAAgBgEIgDgHQgBADgEgHQgGgIgDgBQADgBADACIADADQADgCAAgFQAAABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgEgEQgDAAgCADIgngUIgFgHQgGgGgCAEIgCgDIgCgEQAAAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAABQAAABAAAAQgBAAAAgBQAAAAAAAAQAAgBAAgBQgDABAAAFQABADgDgCQAGAMAEAOQABAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAMARQAHALAHABQgCAEAGAEIANAHQAAABAAAAQAAAAAAAAQgBABAAAAQgBAAAAAAQAEAEAHACIgBABIgCAAIADADQABAAAAAAQABAAAAAAQABAAAAAAQAAgBAAAAQADAEAKAEQAKAEADADQAHACAJAHQAIAGgOgGIgHAAIgdgOQgQgIgJgKIAAAJQgEgBABgEIACgFIgKgDQAAACAEADQADACAAADQgHgFgTgSQgSgRgLgGQAAAJAFAJQAGALABAGIgJgJQgEgFgCgFIgCADIgCgCQABAIAIAIQAHAIAIAFQgQgEgLgOQgOgRAHgUQAGACAMgCQANgDADAAIgJgYQgFgOAAgOQABAAAAAAQABAAAAABQAAAAABAAQAAABAAABIADgEIABgGQAZgLDhhzQCZhQB1gcQASgIAngHQAqgIASgGQAOAAAsgIQArgHAVABIABgDQA8AFAvg3QAbgfAxhDQAJgUAZgaQACgFAGgGIAKgHQACADAAADIgCAHIADADQADADACgDIAEARQACAHgBAHQAAAAAAAAQAAABABAAQAAAAAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAABQAAACADADQADAEgBAFIAEgBIAEAAQAAAGgCACQAAABAAAAQABABAAAAQABAAABAAQAAAAABAAIAGgCQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQACACADgBQABADgCACQACgBAIgBQgDADACACQAAABABAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAgBQAAAAABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQgBABAAABQgBAAAAABQAAAAAAAAQAAABAAAAIAEABIAAAIIAFgBIAGAAQgCACABAEQABAEAAADQAAAAAAAAQAAABABAAQAAAAAAgBQABAAAAAAQABgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQgCAEADADQABABABAAQAAABABAAQAAAAABgBQAAAAABAAQACABgBAEQAAABAAAAQAAABAAAAQABAAABAAQABAAABAAQABAAAAABQAAAAAAABQAAAAgBABQAAAAAAABIgBADQAAABAAAAQABAAAAAAQABAAAAgBQABAAABAAQADgCADABQgBAFAFADQAFACAAAEQAFgBAFAEQAEAFAFgEIADAIQADAEAFgBQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAIAFAAQgBADACACQABABAAAAQABABAAAAQAAABAAAAQAAABAAAAQATAGASAMIAhAWQAAAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQACgBABAFQAGgBAHAEIANAHQgLAJgUAGIgjAIQAAADgEACQgFACgGgBQBwAdDbBEQDYBCBzAdQAwAMA0gBQA5gBAngQQAhgXBCg9QA+g6AogaQAIgFA3gnQAmgbAfgLQACAHgEAIQgEAIABAIQgIAHgDASQgCAQgIAFQgCAGgFAjQgEAZgLAJQAFAGgEAHQgDAFgHADQABALgOAKQgMALABADQgaAkg6BkQACAFAIADQABAEgDADQACACAGADQAEADgBAGQgSgDgEACQgEgDAFgBIAEgBQg2gEgZgGQAAAAAAAAQgBAAAAgBQAAAAAAgBQABgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAIAYgEQASgDALAEIADgDQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQADACAEAAIAKABQgGgIgQAFQgCgEgPAAQgPABgDgEQgGABABADQgFgGgEAAQAGgFAOACQAOABAHAFQAMgBADgJQAAAAAAgBQAAAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBIgKAAQAEgFAMgCQAQgDADgCQgGgFgPAEQgSAGgGABQABgDgDgCQgDgCAAAEQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQgBgEgDAAQADgEANgDQAMgEAEgFQACACADAAQADAAABgEQAEADAEgDQAEgCAEACQgCgDAIgCQAHgCAHAAQAEgGAPgHQgHAAgRAGQgQAHgIgBQgJAFgPAEQgRAFgHgBQgFAGgFgCIABgDQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAHAAQADAAABgEQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABIgBACQAFgBAAgDQABgFABgBQAJAFADgLQAFADAEgDQAFgDgBgGQADACADgCQADgEADAAIABAEQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIAAgEIAGAAIAhgOQASgJAKgKQgDAAgBACQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIANgKQAKgGADgEIgXAOQgPAIgLAEQAEADgBABIgGADIgBgCQAAAAAAAAQgBAAAAAAQgBABAAAAQgBABAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQABAAABgBIAFgDQgGACgZANQgUALgLgBQgBAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIgFABQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgEgJAEgBIADAHQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQgCgDABgCQAHgCAJgIQAJgIAHgCQgFgCgJADQgJADgDAFQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAgBABAAQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIACABQAAAAAAABQABAAAAAAQAAABAAAAQAAAAAAABQgGAAABgGQAAAAgBABQAAAAAAABQgBAAABABQAAABAAABIABAFIgFABQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAgBIgFAFQAAABgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBQgBAAAAABQAAAAAAAAQgBABAAAAQAAABAAABQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAgBQgBAAAAAAIgDgCIAFgCQADgBAAgFQAJAFgBgKQAOgIAZgWQAcgWAOgJQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAIgDAAIAIgFIAKgFQgKABgXASQgXARgJAAQgCAAAAAFQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBAAIgCgCQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAAAIgCAFQgCADgDgBQAAgGgCAGQgDAKgEgFQAAgBAAAAQABAAAAAAQAAAAAAgBQABAAAAAAIAEAAQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgDgBQAogrA/grQgBgDgEAEQgDADAAgEIg3AqQgeAVgVAVIgHAAQgBgDADgCQACgDADADQgCgDADgDQAEgDAEgBQgCgCAAgEQADgCADACQAMgRAcgZQAggcAJgLQgUAOgdAbIgvArQgBgBABgEIACgFIgFADQgDADgCABQAIgNAfgaQAegbAJgPQAFACACgGQADgGAEAAQgCgDADgCQAEgDABgDQgMAGgXAYQgYAYgMAGQAAAAAAAAQgBABAAAAQAAAAAAABQABAAAAABQAAABAAABQAAABAAAAQAAABAAAAQgBAAAAABQgDgFgCAFIgEAIQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQgBAHgEAEQgEAFgEgEQAAAAAAAAQgBABAAAAQAAABAAABQABAAAAABQAAAEgBACQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAgBgBAAIgCgCQAAAAAAAAQgBABAAAAQAAABAAAAQAAABAAABIAAADQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIAAAFIgHAAIABAEQAAAAAAAAQABABAAAAQAAABAAAAQAAABgBAAIgFgCQAAAAgBABQAAAAAAABQAAAAABAAQAAABAAAAIABAEIgCgCQAAgBgBAAQAAAAAAgBQgBAAgBAAQAAAAgBABQAGgIAPgOQAOgPAGgKQgDADgLAKQgJAHgCAHQgFgBgBADQgBAEgCABQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAAAAAQgCABgCAHQgBAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAgBQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAABIgBAFQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIgDAGIgDAGIgEgDQACACgDAEIgDAFQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBAAgBIgEALQgDAAAAgEQgCACABAEQAAAAAAABQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAIgBgDQgCABAAAFQAAAGgBABQgDgBAAgDQgBAAAAAAQAAAAAAABQgBAAAAABQAAAAAAABIAAAFQgEgDgBADIAAAJIABgDQAFACgIAEIgDgEQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQACAFAHAIQAAAEgCADQgCAEABAEQgFgBgFgGQgFgHAFACIgGgFQgDgEgEgBIAIANQADAIgDAIIgJgGQgGgDgBgGQAAABgBAAQAAAAAAABQAAAAAAABQAAABABAAQACAEAAABQgDgCgBAGIgCAIQgDAAgDgCQgCgCgEABQABgFgCgDIgBALQABAIgEACQAAAAAAABQAAAAABABQAAAAABAAQAAAAABgBQABAAAAgBQAAAAABgBQAAAAgBgBQAAgBAAAAQABABACAGQACgCAAgDIgBgJQADADAFgCQAEgCAAgFQAAAAABAAQAAAAABAAQAAABABAAQAAABAAABQAAABABABQAAAAABABQAAAAABAAQAAAAABAAQACAAgDgJQAFACAJAXQgEgFAAAIQgBAKgCACIgCgCQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAIACABIgBAFIgCgCIgBABIAAgJQAAgHgEgDQAAgBAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAgBQABAAAAAAQABAAAAgBQgHgJACgIQgFACgGgDQAAADAEAFQADAEAAAFQgDgDgCABIgFADQAAABAAAAQABAAAAAAQAAABABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAIgDADQAEgBgCAGQgCAHADACQgBAAgEADQgBABAAAAQgBAAAAgBQAAAAAAgBQABAAAAgBQAAAAgBAAQAAAAAAAAQgBABAAAAQAAABgBABIgBAEQADgLgBgNQgCgRgMgDQABAFAHANQgJgCgDACQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAABQABAAAAAAQAAABgBAAQAAAAAAAAQgBAAgBAAIAIAOQADAKgEAHQgDgFgDgJQgCgJAAgGQgBAAAAABQgBAAAAAAQgBABAAAAQAAAAAAABIABAFQgCgBgDAFQgDAGgDAAIABgHQABgDADAAQACgLgEgHQgCgFgGgIQgBADAEAHQAEAHgCAGQgDgCAAgGQgDAAgCABQgDACgEAAQANAKABAWQAAAWgOAGQgCgDgJgUQAAAAABAAQAAAAAAAAQABABAAAAQAAAAgBABIACABIAEAAQAAADADAEQACAEgBAEQANgLgFgSQgDgNgJgKQgEAOgJADQALgMgHgSQgBACAAAEQAAAEgCADIgBgFIAAgHIgJADQgGACgDgEQAAAGAHAKQAIAKAAAIQgGAAgBgIQgCgIgGABQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQgBgDgDAAIgDAGQgCAEgEABQAFgKAAgFIgCgCQgBAAAAgBQAAAAAAgBQgBAAAAgBQABAAAAgBIgFADIADABIgBAEQgDgBAAgFIAAgJQgBAAAAAAQgBAAAAABQgBAAAAAAQgBABgBAAQgCACgDgBQgDABAAAFIAAAIQgFAAgBAFQAAABgBAAQAAABAAAAQgBAAgBAAQAAAAgBgBQAHASgMAOQAJgQgWgeQAIACAIAMQAFgCABgHIACgIIgFgKQgCACACAEQADAFgDACQgFgFABgHIgMACQgFACgCAFQAAAAABABQAAAAABAAQAAAAABAAQAAgBABAAQgHAGgDASQgCASgIAHQABAOgHADQAEgNgHgUQAEABACAFQACAGABABQAMgSgMgeQAIAHABAIQAHgVgGgRQAAADABAJQAAAIgFACQABgCgEgFQgEgFABgBQgIAEgFAAIADAHQABABAAABQAAABABAAQAAAAAAAAQABAAAAAAIgGANQgEAKABAIQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBIgDAAQAAAAAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQgGgGAAgHIgFgCQgDgBgBgDQABAAAAABQABAAAAAAQABAAAAAAQABgBAAAAQABgDADAAIADAIIACAGIACgBQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAABAAIgBgIQgBgEACgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgFgBQABgBAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAQgCgCAAgDQgKgCgJAFQABACAAAHQABAFADABIgIANQgEAJAGAEQgFABgBAIQgCAJgCACIACgVQAAgOgFgIIgEAAIgCgCIADgBQABgCgBgEQAEABACAGIAEAKQADgBABgFIACgIIgEgCQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABgBIgDADIgGAAIgCgKQgCgGABgBQgIAEgGABIAEAJQABABAAABQAAABAAAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAABABAAQAAAAABAAQAAAAABgBQAAAAABgBQAAAAABAAQAAAAAAABQAAAAAAABQgLAGAAAPQAAAUgEAIQgBgBACgJQABgJgFgBQADgBgBgFIgBgMQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAABQAAAAgBAAQAAABgBgBQAAAAgBAAIgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAIAAgCIABABIACABQAFgCgIgGQADgCADAFIAEAIQAEgCgBgKQgBgLABgBQgFgDgEgJQgEgKgDgDQgCAFAEAHIAFALIgCADQAAAAgBAAQAAABAAAAQAAABAAAAQAAABAAAAIABgBIABgCQABABAAAAQAAABABAAQAAABgBAAQAAABAAAAQgDABgDgCQABgJgDgEQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAgBABQgBADgEgCQgBAEACAFQADAEgDACQADgBAEAEQAEADgCADIgGgGQABAGgHAMQgGAMACAFQgJgEgEgUQAEACACAGIADAKQADAAAAgEQABgFADAAQADgLgFgQQgFgPgJgKQgCACADAEQADAGAAACQgDAAgDADQgDACgCgCIgDAXQgEAOgJAEQALgNgEgUQgEgVgNgIQgBADAFAHQAFAHABAEQgBABAAAAQgBAAAAAAQgBgBAAAAQAAgBgBAAIgCgHQgIADgGAAIABAEIgCACQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIADADQgFAVgFAJQAMg1gbgIQAAACAFAGIAHAKQgBABgFgBQgFgBgBgCQgBADgKAAQABgCAAgEQgDAFACAPQABAPgFAKQgBgDgBgSQAAgRgEgHIgFAHQAAgBgBAAQAAgBAAAAQAAgBAAAAQABgBAAAAQADgDgBgDQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBABAAAAQAAABAAAAQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgEgDQAAADgGAEIADACIADAAQABAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAIgFgBQADABACAEQABAEADACQgDADgEgGIgKAbQgCgHADgRQADgQgDgFQAAAAAAABQgBAAAAABQAAAAAAABQAAABAAABQgDgEgDgMQgDgMgEgEQgCAHADAKQADAKAAADIgEgBQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAgBAAAAIgGAOQABAAABAAQABAAAAgBQABAAAAgBQAAAAAAgBIABgEIACAFQAAABAFgCIgCACIABABQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQgEgBgBACIABADQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIgDADQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQABADAFAAQgDABgBADQAAABAAAAQAAABAAAAQAAAAABAAQAAgBABAAQgCACgCAFIgGAKQAGgSgEgWQgDgXgMgMQACAIAHAQQgBADgEgEQgDgEgBAFQgBAAgBAAQAAgBAAAAQgBAAAAgBQAAAAABAAIADgDQgBgCgFADQgGADgEgEIALAhQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAgBIgCgFQgCAGgCASQgCAMgGgBQAIgRgDgWQgCgVgLgPQgCAIgFAJQAGgCgCgFQAEABABAFQABAFgDACQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAgBgBAAIgDgBQABAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAgBQABAAAAAAQgBgCgFAAQgFAAABgEIgDADQAAABgBAAQAAAAgBAAQAAABgBAAQAAgBgBAAQAAABAAAAQABABAAAAQABAAAAAAQABAAAAgBQABAAABAAQAAAAABAAQAAAAAAAAQABAAAAABQAAADgEABQAAAAgBAAQgBAAAAABQgBAAAAABQAAAAAAABQAAABAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAABABQgDAEgBAGIAAAJIgDgKQgCgGACgDIgIgNQgFgJgFgEQAAAAgBAAQAAABAAAAQgBABABAAQAAABAAABIABAEQAAAAgBgBQgBAAAAAAQgBABAAAAQgBABAAABQAAAAAAABQAAAAABAAQAAgBAAAAQAAgBAAgBQAFACgEADIgFAEQACABgEAEQgFAEgHADQABgDgDgDQAAAAAAAAQgBgBABAAQAAAAAAAAQABgBABAAQgDgBgFgHQgEgHgDABQAAAAAAAAQAAAAgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAQAAABABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAABQgBAAAAAAQgBAAAAABQgBAAAAABQgBAAAAABQgCACAEAAQAAACgGAAQAAAEADAAIgCACIgEAAQAEAGgJACQADgHAEgPQAEgPADgGQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABABIACACQgBgFgDgBQgDACAAAEQgHgUgOgGQgBAEAGAJQAHAIgBAIIgEABQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAABQAAABAAAAQABAAAAABQABAAABAAQgFADgCgDQgBgBgBgFQgCADgGgBQgGgBgCADQAAABABAAQAAABAAAAQABAAAAAAQABAAAAgBIAEgBQgBAFAEgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQgBACgJADQgBAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAAAAAQgBgBAAAAQgGABABAGIAEAKQgDAAgCADQgBAEgCAAIAAgIQAAgEADgCIgCgCQgBgBAAAAQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAIgDAAQACgEgCgEQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAIACgDIAAgDQgFACgEgBQgBgGgGgFIgKgJQgGAFABAIQABgBAAAAQAAAAAAgBQABAAAAgBQAAgBAAgBIABgFQADAAABAEIACAEQAAAAgBAAQAAAAgBAAQAAAAgBABQgBAAAAAAQgEACgEgBIACADQAAABgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAAAABQAAABAAAAQABAAAAABQABAAABAAQAAAAgBAAQAAAAAAAAQgBABgBAAQAAAAgBAAQgDAAABAFQgCgCgDACQgEAEgDAAIAFgMQAEgKgHgBQAAgBAAAAQAAgBABAAQAAAAABAAQABAAABAAQABAAABAAQAAAAABAAQAAAAAAABQAAAAAAABQAEgBgBgEQAAgFABgCQADABgBAFQAEgEgCgJIgCgPQAOgKgEgVQgEgVgNgJQAJAVACALQAEASgLALQAAgEgDgDIgGgGIgDACQAAABACAEQABABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAFACABAIIABAQQgBgCgFAAQAAgDACgCQACgBgBgEQgCAFgJgDQgIgDgDAHIABgJQAHgOAAgUQgBgYgPgJQARAkgLAcQgEgBgEgHQgDgIgEgBIgDABQAAAFAGAKQAEAGgFAEQADgHgIgDQAAAAAAAAQgBAAAAAAQAAABABAAQAAAAAAAAQABABABAAQAAABAAAAQAAABAAAAQAAABAAABQgHgBgEAJQgFAJAEAGIgEABQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAgBIgIAgQgCAEgBgEQgBgBAAgBQgBAAAAgBQAAAAgBABQAAAAAAABQAGgYAAgOQABgZgTgFIAFAIQABAEAAAFQgGgCgFAGQgEAGgFgEIAEAIQADAEADgCQACACgBADIgBAFIABgCQABAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQgDAEAEAEIAGAHQgOgHABgMQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBABIgDAEQAAAAABAAQAAABABAAQAAAAABgBQABAAABAAIgDADQAAABAAAAQAAABAAAAQAAAAABAAQABAAABAAQgEAFABAGQgEgBABgFQgCAAgBAEIgCAGQABAAAAABQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgBgBAAQABAAAAAAQAAAAABAAQAAABAAAAQAAABAAABQAAAAABABQAAABAAAAQAAAAABAAQAAAAABAAIgFAEQgBAAAAABQgBAAAAABQAAAAAAABQAAAAABABQAAAAgBABQAAAAAAAAQAAABgBgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAABgBIgDAKQgFABAEgGQgCABgCADQgCADAEgBQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAgOgGgLQgHgMgBgIQgBAAAAAAQAAAAgBABQAAAAAAAAQAAABgBABQAAAAAAABQAAABAAAAQAAABAAAAQABAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAEADACQgEgBgDAGQgEAFAFAEQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAIgDgBIADADQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAAAAAIgDgBQgCACgBADQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAABAAQABAAAAABQAAAAAAABQAAABgBAAQAAAAAAAAQAAAAgBAAIgCgCQgBACAAADQABAEgBADIgJgSQgFgMgEgFQAAAAAAAAQgBAAAAAAQAAABAAAAQABABAAAAQABADgBACQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBABAAIgCAAIgDABQAAACAEADQAAAAAAAAQAAABAAAAQgBAAgBAAQAAAAgCAAQAAAAABABQAAAAAAAAQABAAABAAQAAAAABAAQAEAAgCgDQAFAEgGACQgIADABADQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQgCACgDAHQgCAGgFAAQABgDAAgDQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAIgEABQADgDgEAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBAAABQABAAAAAAQAAABABAAQAAABAAABQADgBACgEIADgGQAAgBAAAAQAAAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAABgBQAAgBAAgBIgDAFQgBADAEgBQAAABgBABQAAAAAAAAQgBABAAAAQAAAAgBAAIgDAAIACgRIAFAAQgFgBgCgGQgCgHAEgGQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAgBIgCgIQgCACABAEIABAGQgDgBgBAEIgCALQgCgBgEADQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAgBQAAAAgBAAQgBgCABgEQAAABgBAAQAAAAgBABQAAAAAAAAQAAABAAAAQgEgBAGgDQgDgHAFgDQAAgBgBAAQAAAAgBAAQAAAAgBAAQgBAAgBAAQgEACgBgBQgDABAAAGIADgCIAAgEQAFABgBAIQgFgDACAHQADAKgBACIAFgCIAFgEIAAAFQABABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQABAAABgBQAAAAABAAQAAAAABgBQAAAAAAAAIAAgEQACAAgCAHIAAgBIACgCQgCgKgBAEIgBAAIABgBIgCgCQACgBABABQAEACABAAQgDgDACgEQABgFgBgDQAFAGgBAHIgBANIgHABQgCAAgCACQAEAAgEAIQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAAAQABABAAAAQABAAAAAAQAAAAABAAIgCADQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAIACADQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAABQAAAAAAABIgEgJIgGgJIgFATQgEALgNgBIAKgTQAAAAAAAAQAAgBgBAAQAAAAgBABQAAAAgBAAQgDADgCgBQABgEADAAQAEAAACgCQgDgFACgBQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAgFQAAAAAAAAQABgBAAAAQABAAABAAQAAAAABAAQABgDgCgDQgDgDABgDIgBAEQgLgRABgHQgGADABAEQABAEgCACQAAAAAAAAQABABAAAAQAAAAABAAQAAAAABAAIADACQgBAEACAEQACAEAAAEQgCgBgBgFQgBACgEACQgIAEAKgFIgCgMQgBgCgDAAQgBgBgBAAQAAABgBAAQAAAAgBABQAAAAAAABQgBAEAFAAQABAAAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAQgBAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAEABABADQABAEgDACQABAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBIgCAGQgBABAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgDADgBgHQgEAJAFAJIAKAOQgDABgEgGIgHgKIgFAHQgCAEAAAEIgEABIgBADIgEgBIACABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIgHAFQAAgGAEgIIAJgOQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAgBABIgDAAIADgGQAAAAAAgBQAAAAgBgBQAAAAgBAAQgBgBgBAAQAAgBABAAQAAgBABAAQAAAAABAAQABAAAAABQgDgFgCgJQgBgIACgEQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAgBAAAAIACABQABAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAgBQgDAAgCgFIgFgLQAAAFgCAFQAAAAAAgBQABAAAAAAQAAAAABABQAAAAAAABQACAFgEAAQAAgBAAAAQAAgBAAAAQgBAAAAAAQgBAAAAABIgGAEIAIAHQAAAAgBAAQgBABAAgBQgBAAAAAAQgBgBAAAAIgGgFQgGAJACALQACALAIAEQgBADAEAFQAEAHAAADQgKgKgEgOQgFAUgNAJQAAgDgFgHQgEgGACgEQgEgDgGgIIgJgMQgKAWgKAIIAEAJQgCAAgIgRQAHACAHgOQAHgOgIgIIAFACQgMgUgDgMQgCABgBAGQAAACAAABQAAAAABABQAAAAAAABQAAAAABgBQgEAHgGACIABAJQgCAAgCAEIgDAFQAAAAAAABQAAAAABAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAAAAABAAQgFAEANATQgFAEgDgOQgCAKgHATQgEAAgEADQgEADgFgBQAXgZgHgZIgDADQgBACgEgBQAAgBABAAQAAgBAAAAQABAAAAgBQABAAABAAQADAAgBgEIgGgHQgFgFgBgEQgHACgBAIQgEgEgDAFQgDAFgCgCQAAABAAAAQABABAAAAQAAABAAAAQABABAAABQABAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQgCgFgCAAIgEACQgBgJgEgIQgDABACAHQADAKgBADQgDgEgDgNQgDgLgCgCQgEACgFAQQgFAPgFAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAgBAAAAIACgDQgEABADgEQAAgBgBAAQAAAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBIACgDQABAAAAgBQAAAAAAAAQgBgBAAAAQgBAAgBgBQAAgCADgDQACgCABAFQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAABQAAAAAAABQABAAAAABIACAEIABgBIgBgCQAPgNgEgXQgDgTgSgSQgDAEADAGQAEAIAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAABIgBgBIgDAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAgBAAQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAAAAAIABADQAAAAABABQAAAAABAAQAAAAABAAQABAAABgBQAAACgFABQgBAAAAAAQgBAAAAABQgBAAAAABQAAAAAAABQgDgDAAgCIAAgEQgLAIAOAVQgHABADgGQgDABABAGQABAHgCADQABAAAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQAAACgCAHQgCAGgDACIABgEQABgBAAAAQAAgBAAgBQAAAAAAAAQAAgBgBAAQgIAHAAAbQABAZgPAEQAIgGAAgRQgBgSACgDQgCgCgDACQgEACgCgCQACgFgBgEQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAQABAAAAAAQABgDgDgEQgCgDABgCQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAgBQgBAAAAAAIgFgIQgDgFAAgFIgEAQQgCALgCAGIgEAAIgCABQgKgIgJgiQgDACgDAAQABgDgCgDIgDgEQAAAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQADAHAEAAQgCAGgCAOQgBAMgFALQAEAFgBAHQAAAIgGACQAAgJAGgDQgEgIgCgCQADgDAAgDIADgIQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAQAKgegWghIgGAAIACgBQABgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQgFAEAAAKIAAARQgDAEgDgCQgEAHABAIIABALQgEgGgDgLQgFgNACgFQAJAHgEAGQAOgQgEgYQgFgWgOgQQgHAFAFAJIAJAPQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAAAgBABIgBADIgBgBIgBgCQAAAAAAABQgBAAAAABQAAAAAAABQABAAAAABQAAADgBACQgCgBgBgFIgFAFIgFAFIAJAKQAGAIACAFQgEAAgCgFQgCgGgCgBQAAAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAABAAAAQAAABAAABQABAAAAABQAAAAABABQgCACgCgIQgCgFADgCQgEgCgCgGIgDgLQACgBAEAAIgEgFQgBAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABIgBADIgHgHQgFgEgBgFQgFABACAHQAAABAAABQAAABAAABQAAAAAAAAQgBAAAAAAQAAAEAHADQgNAEgEAPQgCgDADgHQAEgJAAgDQgEADAAAGQgFABgDgDQgDgEgCAAQAAgCACgDQADgDgBgFIgFgEQAAABgDADQAAABgBAAQAAABAAAAQAAAAAAABQAAAAABAAQACgDAFADQgBABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQABAGADADQAAABAAAAQABABAAAAQAAABAAAAQABABAAAAQABABAAAAQABABAAAAQAAABAAAAQAAABAAABQABAAAAAAQABAAAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQgCAFgEAAQgBgIgGgHQgHgKgCgEIgCARQgBALgEAFQABAAAAAAQABAAAAAAQAAAAAAAAQABAAAAABIACAEQgEABgFAJQgDAHgBAGIgVgcIgEANQgDAKgEAEQgIgJgLgVQgKgVgJgJQgKARgCAEQgDAMAMAHQgCADgFgJIgEABQgBAAAAABQgBAAAAABQAAAAAAABQAAABAAABQgGgHADgHQgCgBgDgHIgGgKIgEANQgCAKgHABQADAHACAMQgCABgCALQgCALgFACQAJgNgDgUQgDgSgNgIIgBAPQgCAGgHADQAHgIgCgTQgCgUgLgGIgDACQAGASAFAIQgGgIgEAEIgFAJQAPAWANAYQgDABgDgFIgGgHQgEAPABALIgHAFQABAEAFAFIAHAHQgDACgDgDIgGgGIgEAQQgCgBgEAAQAAAAgBAAQgBAAAAAAQAAAAgBgBQAAAAAAgBQgEABAGAGQAAAAAAAAQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAADgDAEQgEACABAFIgFgNQgFgKgEgEQgDAKgJAKQAFgIAAgOQABgQgGgLQgDACgCAJQgCAJgEACQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIACgFQgCACgEAAQAAALAIAPQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBQgCAHAGAPQAIAUABAFQgFgEgFgOIgEAKQgCAHgGAAQAMgRgJgaQgNgdgDgNQgDACgCAGIgFAKQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAgBABAAQACgDgDgCQAJgHgEgOIgKgXQgNAOAGAIIgEgEQgEgFgBgDQgDAEgLACQAEgFgBgJQgCgIgEgDQgCAAgBAFQAAADgDAAQAAAEAEADIAGAGIgHAAQABADAEACIAHACQAOAYAIAuIALBUQgBgBAAAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQAGAEAAAMIgBAUIgCACQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQADATgMAjQAFABgDAMIgEAOQgNAGgNAJQAUAAAggEQAkgGAPAAQgPADgkAFQgkAEgRAFIAAgEQgLACgLAFIgVALQgCgDgIADQgJACgCAAQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABIgBAEQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAABQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAABgBIABgDQgCACgDgCIAAAEQABAAAAABQAAAAAAAAQAAABgBAAQAAAAAAABQgFABAAgFIgFADQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAgBQgFAFACABQgaADAAAQQAFABAKAHQAJAHAFgBQgDACgFAAQgHAAgLgEgAvZD5QAAAHgBAEQAHABgBgFQgDgCABgDIABgIQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBQAAAAgBgBQAAAAAAAAQgBgBgBAAQAAAAgBAAQADAEABAHgAMpBuIgDAUQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAIADgCIAAgTQAAgKgJgHQAGAIgBALgAMJB4QACAEgEAEIAJgDIAAgOQABgIgEgCQAAANgDADQgCgFgEAAIAFAIgAM9B4IADgCIgCgCQAAAAgBAAQAAAAAAABQAAAAAAABQAAABAAABgAvcBqQABAHAEABIABgOQABgIAHgDIACADQABAAAAAAQAAABAAAAQgBAAAAABQAAAAgBABQAKgCADgPQACgRAGgEIgBgDIACAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAQABAEgEgBQAAgBAAAAQgBAAAAABQAAAAABAAQAAABAAABQgDACgHgBQgEgBADACQgEgBgCACIgDAEQgBgDgEACQgGACgCgBQABADgFACQgGACAAADQAOAAADgCQgCAEACACIgDgBIADAGIABADIgGgDIgSgCQAAAGADAFIAGAGQgBgEAEgBIAAAFQABAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAIACALgAH8BrIAAAAIAAgCIAAACgAH4BUIAEAVQADgOgEgNQgFgPgKgEQAIAHAEASgAh9BEIgCACQAFABAHAPQAHARAFACIAFgPQAEgNgHADIABgFIADABIAAgJQgJgRgCgRQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQAAAAgBAAQABABAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAQAAAAAAABQgBAAAAAAQAAAAAAABQAAAAABAAQAAAAABAAQAAABAAAAQABABAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBAAQgCADACACQADAEgBADIAEgBQABAAAAAAQAAAAAAABQAAAAABABQAAABAAABQgBABgBAAQgBABgBAAQAAABgBgBQAAAAAAgBQABAAAAgBQABAAAAgBQAAAAAAAAQgBgBAAAAQgFAAgBgDQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAQgEAAgCAGQgDAFgEAAIABAFQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBABQACADADgCQABAAABgBQAAAAABAAQAAgBABAAQAAAAAAABIgCACQAAAAgBAAQAAABAAAAQAAABAAAAQAAABAAAAIAFgDQAEgDAEgBIgBgFQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAIACADQABABAAAAQAAABABAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAQADAEAAAJIgDABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABgBAAIgCgDQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAgAIaBMQAFAPgFANQAKgLgHgSQgHgSgKgBQAJAHAFANgAHVBKQAEAQgCAMQAHgOgGgSQgFgSgKgCQAIAIAEAQgAI4BMIADAXQAGgKgGgOQgGgOgIgBQAIAEADAMgAEtBUIgDACQACACACAEQABAEADAAIAFgOQACgJAFgDQABgJgFgFQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAgBAAQAAAFABAGIABAKQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBAAgBABQgBAAAAAAQgBABAAAAQgBAAABABQAAAAABAAIAEgBQABAHgFAEQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAIACgCIgDgBIgCAAgABRBJQAHANAAAFQAFgIAEgLIAHgWQgDgDgGgSQgEgOgIgBQAIADgFALQAHgBgBAJIgCgBQAAAAAAAAQAAAAAAAAQgBABAAAAQAAABAAAAIADADQgEACgFgBIABgJQAAgEgDgEQACANgLAAQABAAAAABQAAAAABAAQAAABAAAAQAAABgBABQgBADADACIgFAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAgBAAAAIAEAHQACAEADgFQgBAJAGAMgAJOA+QAGADADAIIAEAQQAAgDABgDIACgEQgCgBgFgKQgEgHgDAAIgCABgAGYA1QACAGgCAIIgCANQALgLgHgWQgHgTgIgEQAEAPAJAOgAAsBQIAJAAQANgwgXgMQAEAGgEAIIADAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQgDABgCAEQgDAFAEAAQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAABAAIgBAHQgBAEgCABQAAgBAAgBQAAAAgBgBQAAAAgBAAQgBAAgBAAQgDgBgCACQADACAAAEIgEABQgBAAgBAAQAAABgBgBQAAAAAAAAQgBgBAAAAQAEAAgBgEIgFAAQgCAGAEAEIAGAHQABgEACACQADAEACgBQABgDgCgDQgCgCABgDQAHAFAAADIgCgBQAAAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAQAAAAABABQAAAAAAAAQAAAAAAABQAAAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQABABAAAAIAFACIAEgDQgBAHgEgCIgHgFQAAAEAEAEgAQaBHQgKAFgEADQAbgHACgJQgEAEgLAEgAF6AwQAEASgIAMQAMgDgEgZQgEgYgLgGQAJAWACAGgAqTATIADALQgDADgBAHQgCAHACAFIgEAEQgDACAAAEIAIAJQABACABAAQAAABABABQAAAAAAAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQABAAAAAAIACADQADgOAHAEIgFgQIgFgQIADAEQADADADAAQACAAACgFQACgEAEAAQAAgJgDgJIgGgNQgFABgBAIQgBALgGAAQAGgKgDADQAAAAgBABQAAABgBAAQAAAAgBAAQAAAAgBAAIgCgCQgBADACAGgAG3AxIAFAYQADgNgEgPQgFgOgHgDQAFAHADAOgADtBFIAEABQABgEAHgLQAGgKgEgFQgBADgEAAIAAALQgBAFgEABQgFABgBgDIgBgFQgFAGAGAHQABgBAAgBQAAAAAAgBQABAAAAAAQAAgBABAAIADAAIgEAHgAQCBCQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABIABgCIADgBQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAIgBADgAFZBFQAHgKgFgNQgFgNgKgFQANASAAAXgAlIA5QAAABAAABQAAAAABABQAAAAAAAAQABAAAAAAQAFgNABgRQABgTgEgMQgEgBgBAGQgCAHgEgDQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBQgEABgDgCQAAgBgBAAQAAAAAAABQgBAAgBAAQAAABgBAAQABgDgDgCQgDAAgCABQAEAEgMAGQABgIAEgDQgGgCAGgKQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgCgEQgBgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAQAAADADgBQABAAABAAQABgBAAAAQABAAAAABQAAAAAAAAQADgFgBgCQgEAHAAgLQAAgOgBgFQgEAAgBgHQgCgIgDgBIAFAXQACAKgBAJQgFgBgBADQAAABAAABQgBABAAAAQAAABgBAAQAAAAgBAAIAAgBIgBABIABABIgBACQgBgEABgDQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAgBABQAAAAgBgBQAAAAgBAAQAAAAgBgBIAHAMQAFAHAAAEIAWAWQALANACAPIAAAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABgAH+AuQACAHAAAHQAFgEgDgKQgDgIgFgEIAEAMgAkjA6IACACQAEgHACgPQACgSACgGQgDgBgCgEQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBABAAQgGgBgEgIQgEgKgFgCQgDAEgDAAQAAAEADADQAEADgBACIgCAAQAAgBAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAIgBABIgBACQAAAAAAgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQAAgBAAAAQgBAAAAAAIgGAIQABAAAAAAQABAAAAAAQABgBAAAAQABgBAAAAQABgBAAAAQABgBAAAAQABAAABAAQAAAAABAAIAAAEQgIgBgCAGQgCAIAGgKQgBAJAEABQgCAFAEAKIAHAMIgBgDQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQABAEgCABIgDAEQABAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQgBADADADQACADgCACIABAAIADABgAEuAlIADALQABAGADACQAFgEgEgIQgFgHAAgBQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAgAjWA4IACgCIAEAAIACgIQAAgBAAgBQAAAAAAAAQAAAAgBAAQAAABgBABQALgRgHgaQgGgTgLgMIAAAMIgDgBIABAEIgDgBQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAIgBADQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBIADgEQABAFgCAEIAEgBIADAHQACAHgBAHQgEAAgGAHQgEAGgEgDQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQgDAFAEgCQADgDgBgDIgEABQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBgBIgBAKQgBAFACABQAAgEAEAEQABAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAAAgBQgBAAABgBQAAAAAAgBIAEABIABgCQABABAAAAQAAABABAAQAAAAABAAQAAgBAAAAQABgBAAgBQABAAAAAAQABAAAAAAQABAAABABQgDABACAIQACAHgJgCQADgDgEgBQAAABAAAAQAAABAAABQAAAAAAABQAAAAABABIACACQAAAAABAAQAAAAABAAQAAAAABAAQABgBAAAAIAEgCQgDAJAFAGgAg6A1QABABAAAAQABAAAAAAQABABAAAAQABgBABAAIgDgEQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAIgBADQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAABAAQADgEAAgEQABgDAEgCQgCAAgCgDQAAAAABABQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQgBAAAAAAQAAgBgBAAQgCAAgBgLQAAgMABAGIAAgGQgGgCABgGQABgIgBgCQgDgBgGAEQACAHgCAJQgCALgEgDQAAAAAAABQAAABAAAAQAAABAAAAQABAAAAABQABAAABAAQAAAAABABQAAAAAAAAQAAAAAAABIgCABIgGgDQAAABAAAAQAAABAAAAQAAABABAAQABABAAAAIAEADQAAgDAFAAQAAABAAABQAAAAABABQAAAAABAAQAAABABAAQAFAAAAACQgBAAgBAAQgBAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQABAAAAAAQAAAAABAAQAAAAABgBQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQABAFgBACIgDAEIABgBQABAAAAABQABAAAAAAQAAAAABAAQAAABAAAAgAHeAnQADAJADAEQgBgTgMgIQADAEAEAKgAiuAMQACAIgEAOQgEAMAFAEQAOgKgCgaQgCgUgKgOQgBAFgDgBIgCgDQACAEgBAFIgBAGQAAgBAAAAQABgBAAAAQAAAAABgBQABAAAAAAIgDAGQAEgBABACIABAFQgGABAAAEQgBAFgCACQAAgBAAAAQgBgBAAAAQgBAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQAAgDgFgEQAAAEgDABQgCACAAADQAAAAABAAQAAAAAAABQABAAAAABQAAABAAABQAAABABAAQAAABAAABQAAAAAAABQABAAAAAAQAAgFADAAIgBACQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAABAAQADAAACgCQgBAAgBAAQgBAAgBgBQAAAAAAAAQgBAAAAgBIAFgFQAAAAAAAAQAAABAAAAQABAAAAABQABAAAAAAgAAUAuQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQABgDgBgGQAAgBAAAAQAAgBABAAQAAAAABABQABAAABABIACgEQAAgBAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAOgFgDgVQgDgQgJgLQAAAHAEAMQAEAJAAAIQAAAAgBAAQAAAAAAAAQAAABAAABQAAABAAABQAAAAAAABQAAAAAAAAQgBAAAAgBQgBAAgBgBIABADQAAABAAAAQABAAAAABQAAAAAAABQAAAAgBABQgDACgCgBQACgCgCgJIACgCIgHADQADABACACIgCAEQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQgBABAAAFIADAFIgBAAQgFgBABAEQgDgCAAgCQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAAAgBQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAABgBAAQAAABAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAEgHgDAAQgDACACAIQABAIADgFIABACIgBAEIAEAAIACABIgBAAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAgAgLAvQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAABABAAQAAAAAAABIgCABIgBABQABAAABAAQABAAAAgBQABAAAAAAQABgBAAAAQAAgDgDgBQAFABABgEIABgNQACgQgDgGQARgEABgcQAAgcgQgMQAJASABAVQAAAZgMAHIgIgKQgEgGgGgCQAAAFgEANQgDAOAHAIIAFAAIAEAAIAAgFQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABABIgCgGQgBgCADgEQADAegMALQABgBAAgBQABgBAAAAQAAgBAAAAQAAAAAAAAIgIABQgBgGgDgBQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAgBAAIgCgBIACgBIABgBQgGABACADQADADADAAQAAAAgBABQgBAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAABAAQAAAAAAAAQAAAAABgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAABQABABAAABQABAAAAABQABAAAAAAQAAAAABAAIACAAIAAAAIAFABgAFBARQAAAUgHAJQAFAAAFgNQAFgOgCgOIgFgKQgDgHgEAAQAHAKgBATgAvUAuQAcgJAFgEQgZAFgIAIgAq/ANQgEADgBAEIAFANQADAJAFACIAEgFQACgDADACQACgPgOgQIgFAGgAEhArQAOgJgGgSQgFgQgMgHQATAfgKATgAhbAlQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABABAAQAAAAAAAAQAAABABAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBQgBAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAKgJgFgUQgHgWACgFQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBgBIgCgCQgEAJABAIQABAHAFABQAAAHgDABQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAgBABAAQAAgBAAgBQABAAgBgBQAAAAAAgBQgBAAgBAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAKADABQgDACgDAAQAAgFgBgBQgDAEAEADQAEACACgDIAAALQAFAAAAACQAAABAAABQAAAAABABQAAAAAAABQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQAAABAAAAIgDAHQAAABAAABQgBAAAAABQAAABABAAQAAAAAAABQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAAAIABAAgADrALIAIANQADAIAAAJQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAgBIADgDQgBgIgGgKQgGgIgEAAIgBAAgAgRApQgCgDACgEQADgDAEACQADgGgDAAQAAABAAABQAAABAAAAQgBABAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAgBIgDAAIgDACQADAAADAEQAAAAAAAAQgBABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgBgFQAAgDgEgBQAAADACACQABAAAAAAQAAAAgBABQAAAAAAAAQgBABgBAAQACABACADQABABAAAAQAAABABAAQAAABABAAQAAAAABAAIAAAAgAqcAmQAEADADgBIABgRQgBgJgFgEQABAIgHADQAAgFgCABQgBAAAAAAQAAAAgBAAQAAABAAAAQAAABAAABQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAAAIgCgFQgEADAAAGQADABADAFQADAGACABQABgBAAAAQAAgBAAAAQABAAAAAAQAAgBABAAIABABgAFiAmQAGgNgFgSQgGgPgJgCQAMAKACAmgACJAbQAAAAgBABQAAAAAAAAQgBAAAAABQAAAAgBABQAGAAgBACIgDAFIALgDIgEgBQAMgNgDgUQgDgVgNgJQAYAogUAUQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBAAAAAAIgBAAgAiMAaQgBAFACADQAMgBABgLQABgEgEgSQgCADAAAFIgBAJIgDABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgBAIgAGEARQgEAKACAGIAGgQQADgKgDgHQAAAEgEANgAA5AXIAAAFIAEgCIAFABQAWgYgZgjQgBAEADAEQACAFgBADQgGgBgCAFQgBADAAAJIAGAAQADABADgBQgCgCABgCIABgFQAEAJgBAJQgCAKgHAGIgCgCIgCgBIgCABgABpgCQAEANgEAOQALgJgGgRQgFgQgKgJIAKAYgAnyAIIgEAEQACABACAFQACAEADABQABgEgBgGQgBgFABgDQgDABgCACgAojgNIALASQAHALAHAHQAFgGgFgRQgDgMAFACQgKgVgFgHQgEAHACAFIgDgCQgBAHADACQgBAAgBABQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAABAAAAQAAAAAAABQAAAAABAAQAAAAAAABIACABIgEgBQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAAAABgAQvAGQgQAHgHAIQAMgDARgJQAPgIAGgEIgbAJgAq6AAIADABIgBADQAGACAEAOQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABgBAAAAQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAgFgEgHQgDgFADgBQgCABgDAAIgCAAIgEAAgAAPAAQgEAGgBAIQAFAEAFgBQABgGAGgGQgBgDAAgEQABgGgDgCQgFABgEAJgAEDgGQAFALAAAMQAJgYgWgWIAIAXgAuDAFQgDAFgKAHQBEgZAmgUIAAgFQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQACADABALQAAAJADADQACgEgDgJQgCgJAAgDQAEACADAAQABgGADgBIAIABQgBgIAFgCIADAVQACgLgCgGQADgBAFgIQADgFAKADIADgEIACgFIgWAIQgMAEgCAFQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQgNAQgUgBIgGAGQgEADgCACQgGAAgQALQgRALgLACQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQgFAAgCACIgFAGQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAIgBAAgArIgHQgCAHgEACIAFAFQACADAAAEQAKgHgBgIQgBgHgIgOIgBAPgAriAAQABAIAGAGQAFgIgBgHQgCgJgGgGQgFAIACAIgAkWgjQADAUgJAIQABABABAGQAAAFAEAAQAHgRgCgUQgCgYgNgLQAIAQACAQgAiEAAQAAAAAAAAQABgBAAAAQAAAAABAAQABAAAAABQgCgLgJgJQABAHgDAAIgEgDQAFABgFgFQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIACAMQACAGADABQAAAAABAAQAAAAABAAQAAAAABAAQABAAABAAQAAgEABAAQABAEADAAgAQ2AAIARgJQALgHACgEQgaAMgEAIgABWAAQABAAALAAQAEgHgHgBQgHAAgCAIgAgggmQADAWgGAPQANgOgEgYQgEgXgNgKQAIAOADAUgAjAgHIABAGIABgDIAAgDIgBgCQgBAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAgBQAHgDgFgBIAFgDQgCgUgCgJQgDgRgIgCQAHAKABAUQABAVgHAJIAEgBQAAAAABAAQAAAAAAAAQAAAAABABQAAAAAAAAgAjvgUQgDABAAAHQAAAGACADQARgegagjQAMAVgIAbQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAIABgBIABACgAh2glQABAVgJAMQAPgJgBgYQgCgVgMgNQAHASABAQgAptgUQAEABAEAHQAEAGAEACQAEgEABgHIACgNIgDAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQACABABAEQgBgBAAAAQgBAAAAAAQgBABAAAAQAAAAgBABIgCACQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIgCgCQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAIAAAHQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAgBQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIACADQgBAAAAAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgDgFQgBgBAAgBQAAAAgBAAQAAgBAAABQgBAAAAAAQADAIgFABIABgEIgCgEQAAAEgDAEgAhGgiQAAARgHALQANgIAAgUQAAgTgLgLQAFAOAAAQgAikhXQAAAKgFAGQANADgCAcQgBAOgDATQAJgJAAgWQAAgXgMgOQADgDAAgIQABgHgCgEQADAAAEgDQAEgCADgBQAAACAFABQABABABAAQAAAAAAABQAAAAAAABQAAABgBAAQADABADgBIAFgBQAEASgJARQAGgEACgLQABgLgCgJIAGAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAAAABQAJAAAJADIAPAFQAAAHgEAHIgGALQAHgBADgMQADgMAFgCQAIADAMACQAOABAGgEQADAFAMAAIAOAAQAAAAgBABQAAAAAAABQAAAAAAAAQABAAAAAAQABAAABABQABAAAAAAQABAAAAABQAAAAAAAAQgCAIgGAKQAIgDADgSQAJABAFgFQgBgBgFgBQgBAAAAAAQgBAAAAAAQAAgBABAAQAAgBABAAQgCgBgBACQgDABgDgBQgBgLgCgBQgDAAAEALQgMAAACABQAGAAAAABQgMAAgBgCQABAAABAAQAAAAAAgBQABAAAAAAQAAAAAAAAIgCgEQgCgBgKACQgIABgDgFQABgHgFgLQgEgJgCAAIAGAPQADAJgDAFQgRgFgNgBIgDgEQgBgCABgDIgcAAIACgFQAAgBAAgBQAAgBAAAAQAAgBgBAAQAAgBgBAAQgBAIgCACIgHACQgFABgCgDQABgBAFgBQAEgBAAgCQgagCgHAAQADgIgCAAQgDABAAAJQgBgCgEgBQgFgBgBACQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAQgHgBgHACQgIADgHgBQAGACAAALIgBAWQAGgDgBgMQgCgPACgDIAJABQAEAAADgBQAFAGAAALgAqygXQAAABgBAAQAAABAAAAQAAABgBAAQAAABAAAAQABAEAEACIAFADQABgBAAgBQAAAAABgBQAAAAAAAAQABAAAAAAQgDgHgHgIQABADgCACgAqXggQABAAAAABQAAAAAAAAQAAAAAAABQAAAAgBAAQgDADACACIADAFQABADgBAEIADABQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQgCgCAAgLQgBgHgDAAIgBAAgApNgdQAAAAABAAQAAABAAAAQAAAAAAAAQAAAAAAAAIgCACQADABACAGQADAGADABQAHgOAAgEQgCgDgCgQQgCgPgHgDQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABIgFAEIAEAKQABAFAHgCQgBAEACAEQACAFAAADIgDAAIADACIgDABIgCACQgCgCACgDQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgBgBIgCABgArlgRIgEABQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIADgCQACgCAEAAQABgPgFgFIABATgAlDgUQACAGACABQADABgFgHQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAgBIABgCIAAAFQAAAAAAABQAAABAAAAQABAAAAAAQAAAAABAAQAHgMgIgTQgHgRgKgFIALAUQAFAMACANIgCgBQgCAAgEAEgArVgWQACAHAEAAQADgBAAgIIAAgMQgDABgDgEIgCgCIAEAHQACAEgBAFIgBAAQgDAAgCADgADpglQgBARABAEQAEgKgBgNQAAgNgFgEQACADAAAQgAA1gQQADgOgCgOQgCgQgGgHQAGAOABAlgACdgRQAGgNgBgOQgCgNgHgIQAJAfgFARgAQ4gfQgKAGABAGIAEgHQADABAHgFQAHgEAAgCQgFAFAAgEIAHgDQAEgDgEgBQgCADgMAIgAn5gdQAAAEgDACQAHAAACADIgCAAIgBABIADgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIgCgKQgCgFgFgBQgBACAAAFgARhgfIgKAJIALgFQAGgDACgFQABABAAAAQABAAAAAAQAAAAABAAQAAAAAAgBIgDAAQgEAAgFAEgAB5gyQAAALgBARQAGgLgCgTQgCgVgIgCQAGAGABATgAqkgjQgCAKAFADQADgWgGgHQADAFgDALgABSgrQADAKgCAKQAGgIgDgMQgDgNgHgDIAGAQgAoPg6QADAGAGABQACAQgCAHIgCACQAKgEgDgSQgCgSgJACIADgCQAAAAAAgBQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAQAAAAAAgBQgBgBAAAAQAAgBgBAAQAAAAAAgBQAAAAgBAAQgDAHADAGgAmgg5QADARgKAKQAMADgBgYQgBgYgLgJQAHATABAIgAnrggQAJgIgCgRQgCgSgKgFIgEAJQgCAEAGACQAAAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAIACgDQAIAbgGALgApZggQgDgQgKgLQAAAFADAFIAFAHQgDAAgCgDIgEgEQgHAIAVAJIAAAAgAnJg7QAHAOgCALIABAAQABAAABgBQAAAAABAAQAAAAABgBQAAAAAAAAQgDgogQgHQAAAGAJASgAopg7QAAAEACAIQACAHgCAEQAFAAAAgDIgCgGIADABQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAgBIgBgHIAAgHIgEgBIABgFQgDAAgBgGIgEABIgEgCQgBABAAAJQABAAAAAAQABAAAAAAQABABAAAAQAAABAAABIADgBIABAAIAAABgAC6gvQgBAHAEACQACgEAAgHQAAgHgDAAIgCAJgABhg2QgBAJgCADQAEgEACgGQADgIgCgFIgEALgAREgrQAKgIAXgOQAXgNAKgJQgzAegPAOgAqQgtQAIABgBgPQgCgPgHgDQALASgJAOgABCg6QgBALgFACQAHgBACgIIADgOQgGAAAAAKgAl8hNQAFAQgGANQALgKgFgUQgFgTgJgEQAIATABAFgAp0hFIAAARQAFgHgDgNQgCgNgHgCQAGAFABANgAAjhBQAAAEgBAFQAEAAgBgEIAAgHQAFgBAEgDQAEgEgBgDQgGACgFgEQgEgDgBAAQABABAAAFIgHAAIgBADIAAADQAEACABgBIADgFIABAKgAq4hUQADACACALQACALgBAEQAEgEgCgJQgCgIgDgEQADgBABgDIgEABIgCAAIgBAAgAkshiQAFAagGAOQAMgOgHgaQgGgVgLgMQAIAJAFAYgAkKhlQAEAJAAAJQgHAPABAGQAPgHgMglQgCgBgCgEIgEgGIAHAQgAm7hPQgFAMAEAFQAEgIABgLQACgMgEgFQADAHgFAMgARKhBQAZgLAXgSQghASgPALgAlYhaQAFANgDAMQAIgJgHgRQgGgQgIgEIALAVgARlhiQgKAGADACQgMAGgOAJQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAABAAQABABAAAAQAIgKAVgLQAWgLAKgLQgcASgIACQACgEAIgFQAIgEACgFIgPALgAjXhXQAAAJgGAEIAEABIAEgBIAAgOQAAgMgFgDQADAIAAAIgAmZhvQACAPgDANQAJgNgEgUQgFgUgLgDQAJAKADASgAobhiQAFAIABAGQABgJgEgHIgKgLQACAGAFAHgAnbhXQADgGgBgIQgCgIgEgCgARjhqQgPALgDAHQAHgHAUgMQARgLAHgLQgFAAgDAFQgCAFgDgBIACgCQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAQgEAGgRALgARShtQgNAHgCAFIAZgNQAPgHACgJQgBAEgCABQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQgEAIgBgFQgDAEgPAHgAnRh4QADALgFAJQAHgGgCgPQgBgPgHgGIAFAWgARfiBQgXAPgLANQAsgeAdgYIgnAagAlyhtQACgIgEgIQgEgIgGgCQAGAHAGATgAkbh6QgCAJABACQADgEACgIQABgJgGgDQADAEgCAJgAnth8QABAJAEACIgDgOQgCgHgDgEIADAOgAgciPQgIAFgCADIAJAAQADgEAHgFQAJgFADgEQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBAAQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAgBAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAIABAEIgEgBQgCAEgHAFgAgliTQgFAGAAAFIAJgJQAFgFACgFQgGACgFAGgAg3iPQASgQAKgPQgUALgIAUgAg+ipQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBABQAAAAABABQAAAAAAABQAAAAAAABQgBABAAAAQAAABAAAAQgBAAABAAQAAABAAAAQABAAAAAAIgDACIgCABQACADgEADIgGAFQAKgCAKgLIALgNIgCABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQADABADgFQACgEgCgBQgKAGgDAIIgCgCIgBgBIgBAAgAheiVQALgBAPgTQARgXAIgFQgZANgaAjgAhTi2QABAAABAAQAAABABAAQAAAAAAAAQAAABAAAAQgJABgKAJQgKANgFAFQAEABADgCQAAgBABAAQAAAAABAAQAAABABAAQABAAAAABQACgEAGgGQAHgGADgEQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQACgDAGgBQAGgCABgDIgCgDIgCACQABgGAJgHQAIgHgBgBQgVAOgBAIQAAAAABgBQAAAAAAAAQAAAAABAAQAAgBABAAIABABgAhli8IgaAhQANgIASgXQAVgZAJgIQgRAMgSATgAhqjPQgLAMgDAAQAAAJgKAKIgQASQAGACAIgHQAHgHABgHIAEACQABgDAIgJQAGgIgDgDQACAAAEgJQADgJAFADQgBgEAGgDIACgDQgIADgLANgAihieQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAIAGAAQAEgIASgWQAOgSABgHQAEgBAGgGIALgKIgVAPQgLAJgCAJQgHAEgLAPIgPAVIAAAAIABACIAAAAgAi2ikQAOgHANgOQAJgKALgSQgEgBgCAEQgCAEgDAAQAGgJAIgHQABACgEAEQAAAAAAABQgBAAABABQAAAAAAAAQABABABAAQACgHAFgIIAJgMQgwAtgRAfgAjFikQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAAAQgEAAACgDQAAgBABgBQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAABQAAABAAAAQAAAAABABQAAAAAAAAIABgDIgBgDQAHgCAIgKQAHgKgDgBQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAIAFABQgBgBAAgBQAAgBAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABgBQgBAAAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBQABgEADAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABgBQAAgBABgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQgBAEgGAEQAAAAAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAAAQgBABAAAAQgJABgNAQQgMAPgDAKQAAgBAAgBQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABIAFgCQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAABgAjiiuQgFAFACADIAJgCQAFgCgCgFQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIACgBIADABIACgFQAAgDADgCQAAAAAAABQAAABAAAAQAAAAABABQAAAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAIACgCQABgCgBgDQAAgBgBAAQAAgBAAAAQAAgBABAAQAAAAAAAAIADACQAAABAAAAQABAAAAAAQAAAAAAgBQABAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgEgBgCIADgBIAAADQABAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBQgEABAAgFQgIAKgKAIQgMAIgIAJIAEAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAgBAAAAIgDgBIAFgEQADgCAEAAQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAIgBAAQgCAAgDADgAkPjLQgQATgHAQQAIABAFgHQAEgFABgGQAbggAEgTQgEAIgWAZgAj6jLQgHAKACADQgGADgFAHIgHAMQAEgBAHgIIAAAFQAAAAAAABQAAABAAAAQABAAAAABQAAAAABAAIABgGQAAgDgBgCIACACIADAAIAEgIQADgFgBgEQAHgBAIgPQAIgQAFAAQABgIARgPQAPgOABgKQABAAAAAAQABABAAgBQABAAAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAAACIAAABQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAgBAAAAQABgBAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAEgFAHgIQgwAtgGAQQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAABABQgHACgDAFQgEAFACAHIgEABIgBgCQgBAAgFAGgAkRjrQgCAEgHAJQgEAGgBAGQgDABgHAJQgGAKACAAQgFADgCAHQgCAIgDADQAUgTALgfQAAABABAAQAAAAABAAQAAAAAAAAQABAAAAgBIAAgFIADABQgBgDADgFQABgBAAgBQAAgBAAAAQAAAAAAgBQAAAAAAAAIAAAAgAiukFQgTAXgKAIQgPALgPATQgQAVAGAFQgBgFAFABQAAgBAAAAQAAgBAAgBQAAAAgBAAQAAgBAAAAQAEACABgHQABgGAEADQgBgDADgCQABAAABgBQAAAAABgBQAAAAABgBQAAAAAAAAIgCgCIgBgDQAAABABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAABAAAAQAAABAAAAQAAAAAAABQABAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAIADADQABAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQABABAAAAQABAAAAAAQABAAAAAAQAAgBAAgBQAAgFACAAIAEADQAKgOASgTIAhgjQgLAGgRAUgAjDjPQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAgBQAAgBAAAAQABgBAAgBQAAAAAAAAQABgBAAAAQAAABAAABQAAAAABAAQAAABAAAAQAAAAAAAAIAAgDIACgDIACACQAAAAAAABQABAAAAAAQAAAAABAAQAAAAAAAAQgDgCACgEQAAgBABgBQAAAAABAAQAAAAABABQABAAAAABIAAgGQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABABIABgEQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAgBgBIAEgCQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAABQADgKANgMIAQgQQgWARglAuIABgBQABAAAAAAQAAAAAAABQAAAAABAAQAAABAAAAgAibjdQAAABgBABQAAAAAAABQAAAAABABQAAAAAAAAQgBgFAGAAIgBgCIgCgCQADACADgDQAEgDgGADQAXgVAHgKIgVARIgVASIAEgBQABAAAAAAQAAAAABAAQAAABAAAAQAAABAAABgAjykXQgKAMACAFQABgEAMgNQALgOgDgIQgCAJgLANgAjJk0QgLAFgJAYQACgBADgEQADgEADAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAIgCgBQAFAAAAgDIABgFQAAABAAABQABAAAAABQAAAAABAAQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAgBIgCgBIAFAAIAEgBQgIgEAGgHQABAAAAABQAAAAAAAAQAAABABABQAAAAAAABQAAABAAABQAAAAAAABQAAAAABAAQAAABAAAAQgBgDAEgDQABgBAAgBQABAAAAgBQAAAAAAgBQAAAAgBAAQgCAEgDAAQAAgGADgDQAAABAAABQAAAAAAABQABAAAAAAQABAAAAAAQgBgCACgGQABgGAEACIAAgCQABAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAgBQgBAAAAgBQAAAAgBAAQAAAAAAAAQAAAGgGAJIgLARIADgBIAAAAIABABgAIHCNQgGgQgEgFQASASABAWQgDgEgGgPgAFsCWQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAAAABIABABIgDAAgAvWBRQAAAAAAAAQABAAAAgBQABAAAAAAQABAAABAAQgBADACADIgFgFgApqBLIgDgCQAEgCAAgDIgCgIQAFAGgCgNIgDgSIAOAeQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAgBgBQgBAAAAgBQgBAAAAAAQgBAAAAAAQgDADAAAJgAAXAeQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQACAGgDAAQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAg");
	this.shape_87.setTransform(119.2,38.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgbAAQAAAAAAAAQgBAAAAgBQAAgBABAAQAAgBAAAAQACADAOAAQAOgCAGADIgBgCIgBgDQACABAJgBQAIgBADADQAAACgIAAQgHgCAAAEQgNAAgZADIgDgFg");
	this.shape_88.setTransform(120.6,85.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgRADQgEgDACgDQAMACALAAQAMAAAFABIgRABQgJACgFgDQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAIACABQgBABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAIgDgBg");
	this.shape_89.setTransform(125.9,84.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgOACQgCgCgDAAIABAAIACAAIAAgDQAGADAKgBQANgCAHADQgFABgMAAQgKAAgDADQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_90.setTransform(129.9,84.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AABADQgMgDgGAEQgDgCAAgDQAAgGgCgDQAVAKAJgBQgFABAGAAQAGABABgBQAHAEAAAHIgWgIg");
	this.shape_91.setTransform(68,84.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgVgBIAVgBQASAAAFADIgXACIAAAAQgOAAgHgEg");
	this.shape_92.setTransform(135.3,83.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AACABIgPAAQADgCAKABIAOAAQgDABgHAAIgCAAg");
	this.shape_93.setTransform(28.8,69.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgWACQAhgFAMADIgWAAQgKACgKAAIgDAAg");
	this.shape_94.setTransform(56.6,67.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AADAJQgPgIgIgBQgMAAAHgBQAHgDACADQABgDAGgCQAGgBAAgEQABAAAAABQABAAAAAAQABAAAAAAQAAgBAAAAQABABgBAFQAAAFgEAAIAOAFQALAFAHABIgIABQgHAAgKgDg");
	this.shape_95.setTransform(21.7,67.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AAAAIQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBQAAAAABAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAQgFAAADAEQgHgBABgDIADgJQABADADACQAGADACABQAAABgEACQgDADABAEIgCgCg");
	this.shape_96.setTransform(214.2,67);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AAAAHQgBgEACAAQgBgDgBgIQACABAAgFIACAMIAAAMQgDgCAAgDg");
	this.shape_97.setTransform(113.2,65.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgCADIgEgFQABgDAFAAIgBABIgCACQAAAAAAABQABAAAAAAQAAAAABAAQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQABAAABAAQgHALAAAIQAAgBgCgGg");
	this.shape_98.setTransform(124.4,64.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgIAEQgOABgCgFQAWAAAOgEQAAABABAAQAAABAAAAQABABABAAQAAAAABAAQAAAAABAAQABAAAAAAQABgBAAAAQAAgBAAgBIAEACQABABAAAAQAAAAABABQAAAAAAAAQAAAAAAAAIgKAAQgGAAAAAFQgDgCgOABg");
	this.shape_99.setTransform(189.9,63.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgMABQAGgCAGABIANAAQgFACgJAAIgLgBg");
	this.shape_100.setTransform(195.6,62.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AADADQgBgDgCAAQAAAAAAAAQABAAAAAAQAAABgBAAQAAAAAAAAIgFACIgEgKQAEAAABAHQABAAAAAAQAAAAAAAAQABAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAGABAIAKIgBABQgFAAgBgFg");
	this.shape_101.setTransform(181,60.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgBADQABgEgBgCQABAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBIAAgFQAEAHgCAEIgDAKQgBgCABgGg");
	this.shape_102.setTransform(165.2,60.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AAAAFQgKgBgIgDQgBgBAAAAQAAAAAAAAQAAAAAAAAQABAAABAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBgBgBQABACAFAAQAEABAAABQABAAAAAAQAAAAAAAAQAAAAABgBQAAAAAAgBIADACIABAAQADAAASAAQgHAFgLAAIgCAAgAgRgEIAAAAIAAAAg");
	this.shape_103.setTransform(215.7,55.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgJADIgCgJQAEADACADIAEAKQAGgIgBgOQABACAEAAIAAAEQAAABABABQAAAAAAAAQABAAAAAAQABAAABAAIgHAJQgFAGgEABQgEgDgCgGg");
	this.shape_104.setTransform(200.5,56.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AAAACQgEgGABgFQAGADACAQIgBAAQgEAAAAgIg");
	this.shape_105.setTransform(194.1,55.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgBAAQABgFAAgEQAAABAEAAQAAAIgFAKQgDgDADgHg");
	this.shape_106.setTransform(195.2,55.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AAAAAIgGgLQAJAIAEAPQgEgEgDgIg");
	this.shape_107.setTransform(188.6,55.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AAAABQAAgKgCgIIAEAAIABARQACANgIAEIADgQg");
	this.shape_108.setTransform(203.8,55.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AAAAAQgKgIgBgJIAOAQQAKAJgBAKQgCgIgKgKg");
	this.shape_109.setTransform(36.7,53.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AAGAHIgEABQgFgIgEgIQAMAIADAJg");
	this.shape_110.setTransform(43.7,51.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgBADIgBgNQACADABAHIACALQgDgCgBgGg");
	this.shape_111.setTransform(126,51.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgHAVQAHgHACgNQADgLgCgKQAHAKgEAPQgEAQgIAAIgBAAg");
	this.shape_112.setTransform(119.8,52.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgBADQABgIgBgGQAEACAAANQgDgEABAEIACAIQgFgCABgHg");
	this.shape_113.setTransform(133.4,50.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AAAgTQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAAAAAAAQgCAIAIgCQgBACAAAEIgJgIQACAKgDAJQgCAMgIAEQAJgXABgQg");
	this.shape_114.setTransform(128.2,50.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AAAAAQAEgKgFgGQAGgCABAOQAAALAEAAQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBAAQgDABgBgDQgCAAAAAHQgCgCgCACQgDADgCAAIAJgRg");
	this.shape_115.setTransform(136.2,49.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AAAADQAAAAAAgBQAAAAAAAAQgBAAAAAAQgBABgBAAIADgIQAFAFgBAGIgEgDg");
	this.shape_116.setTransform(208,47.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgFgPQAFACAAAKQAAAGAEAAQAAADABAEIABAGQgIgOgDgRg");
	this.shape_117.setTransform(145.4,48.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgBACQADgGgCgIQAGADgCAKQgCALgFABQgCgEAEgHg");
	this.shape_118.setTransform(86.4,47.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgBAAQABgHAAgCQAEABgBAHIgBAIIgCAAQAAAAgBAAQAAAAAAABQAAAAAAABQgBAAAAABQgCgDADgHg");
	this.shape_119.setTransform(94.8,47.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AAAAAQABgLADgIQAFAKgEAMQgEAOgGADQADgGACgOg");
	this.shape_120.setTransform(97.9,47.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AAAAAQgCgTgFgKQAHAKAEASQAFAPgBAQIgIgeg");
	this.shape_121.setTransform(47.7,47.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgCgCQAFgHAEAGQgIADgCAGQgGgDAHgFg");
	this.shape_122.setTransform(210.4,42.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgBAAQgDgHABgHQAFAJACAGQACALgGADQAAgGgBgJg");
	this.shape_123.setTransform(46.7,42.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgIgTQAKAJABAKQADAAgCgEIgCgGIADABIABgBQAEAGgCAEQgDAEABAEIgEgBIAAAIQgBAFgCAAQADgQgKgXg");
	this.shape_124.setTransform(63.7,41.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgDABIADgDQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQACgBACgFQACABgBAEIgDAEQgCgDgBADQgBAEgDABQAAgDACgEg");
	this.shape_125.setTransform(215.1,39.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240.7,102.8);


(lib.AmericanShad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash1.ai
	this.instance = new lib.Path_23();
	this.instance.setTransform(159.7,23,1.627,1.627,0,0,0,13.4,8.2);
	this.instance.alpha = 0.449;

	this.instance_1 = new lib.Path_1();
	this.instance_1.setTransform(157.3,10,1.627,1.627,0,0,0,8.4,3.2);
	this.instance_1.alpha = 0.449;

	this.instance_2 = new lib.Path_2();
	this.instance_2.setTransform(156.7,-6.5,1.627,1.627,0,0,0,7.7,1.9);
	this.instance_2.alpha = 0.449;

	this.instance_3 = new lib.Path_3();
	this.instance_3.setTransform(157,-14.5,1.627,1.627,0,0,0,8.7,3.2);
	this.instance_3.alpha = 0.449;

	this.instance_4 = new lib.Path_4();
	this.instance_4.setTransform(166.7,-25.4,1.627,1.627,0,0,0,12.3,3.9);
	this.instance_4.alpha = 0.449;

	this.instance_5 = new lib.Path_5_0();
	this.instance_5.setTransform(166,-34.4,1.627,1.627,0,0,0,8.6,7.1);
	this.instance_5.alpha = 0.449;

	this.instance_6 = new lib.Path_6();
	this.instance_6.setTransform(157.9,15.5,1.627,1.627,0,0,0,11.3,5.7);
	this.instance_6.alpha = 0.578;

	this.instance_7 = new lib.Path_7();
	this.instance_7.setTransform(159.8,27.3,1.627,1.627,0,0,0,12.8,8.1);
	this.instance_7.alpha = 0.578;

	this.instance_8 = new lib.Path_8();
	this.instance_8.setTransform(150.4,3.4,1.627,1.627,0,0,0,9.5,1.8);
	this.instance_8.alpha = 0.578;

	this.instance_9 = new lib.Path_9();
	this.instance_9.setTransform(151.6,-8.8,1.627,1.627,0,0,0,11.2,2.6);
	this.instance_9.alpha = 0.578;

	this.instance_10 = new lib.Path_10();
	this.instance_10.setTransform(158.5,-15,1.627,1.627,0,0,0,12.8,5.9);
	this.instance_10.alpha = 0.578;

	this.instance_11 = new lib.Path_11();
	this.instance_11.setTransform(155.1,-18.9,1.627,1.627,0,0,0,15.8,10.1);
	this.instance_11.alpha = 0.578;

	this.instance_12 = new lib.Path_12();
	this.instance_12.setTransform(22,-20.4,1.627,1.627,0,0,0,36.6,4.8);
	this.instance_12.alpha = 0.449;

	this.instance_13 = new lib.Path_13();
	this.instance_13.setTransform(-125.2,-7.3,1.627,1.627,0,0,0,4.1,9.8);
	this.instance_13.alpha = 0.449;

	this.instance_14 = new lib.Path_14();
	this.instance_14.setTransform(-166.7,-9.6,1.627,1.627,0,0,0,7.4,2);
	this.instance_14.alpha = 0.449;

	this.instance_15 = new lib.Path_15();
	this.instance_15.setTransform(-42.1,-30.5,1.627,1.627,0,0,0,58.3,6.2);
	this.instance_15.alpha = 0.449;

	this.instance_16 = new lib.Path_16();
	this.instance_16.setTransform(-16.2,62.1,1.627,1.627,0,0,0,1.9,1.3);
	this.instance_16.alpha = 0.449;

	this.instance_17 = new lib.Path_17();
	this.instance_17.setTransform(-17.5,66.1,1.627,1.627,0,0,0,3.4,2.8);
	this.instance_17.alpha = 0.449;

	this.instance_18 = new lib.Path_18();
	this.instance_18.setTransform(-18.9,69.5,1.627,1.627,0,0,0,7.2,5.8);
	this.instance_18.alpha = 0.449;

	this.instance_19 = new lib.Path_19();
	this.instance_19.setTransform(-21.3,72.1,1.627,1.627,0,0,0,7.8,5.8);
	this.instance_19.alpha = 0.449;

	this.instance_20 = new lib.Path_20();
	this.instance_20.setTransform(-120.4,-18.1,1.627,1.627,0,0,0,3.1,4.2);
	this.instance_20.alpha = 0.988;

	this.instance_21 = new lib.Path_0();
	this.instance_21.setTransform(-170.5,-0.4,1.627,1.627,0,0,0,3.2,2);
	this.instance_21.alpha = 0.988;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKgHIAXADIgWAMQgFgIAEgHg");
	this.shape.setTransform(-172,-2.7,1.627,1.627);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_1.setTransform(-170.7,-3,1.627,1.627);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF799").s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIg");
	this.shape_2.setTransform(-170.7,-3,1.627,1.627);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AgVAWQgJgKAAgMQAAgLAJgKQAJgJAMAAQAMAAAKAJQAJAKAAALQAAAMgJAKQgKAJgMAAQgMAAgJgJg");
	this.shape_3.setTransform(-170.7,-3,1.627,1.627);

	this.instance_22 = new lib.Path_5();
	this.instance_22.setTransform(-170.6,-5.9,1.627,1.627,0,0,0,3.2,1.7);
	this.instance_22.alpha = 0.988;

	this.instance_23 = new lib.Path_21();
	this.instance_23.setTransform(-166.6,15.1,1.627,1.627,0,0,0,18.6,6.3);
	this.instance_23.alpha = 0.41;

	this.instance_24 = new lib.Group_1();
	this.instance_24.setTransform(1.2,-0.8,1.627,1.627,0,0,0,120.3,51.4);

	this.instance_25 = new lib.Path_22();
	this.instance_25.setTransform(-176.6,12.4,1.627,1.627,0,0,0,9.1,4.5);
	this.instance_25.alpha = 0.41;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(196,176,59,0.039)","#54541F","#464012","#414020","#334042","#29405A","#234069","#21406E"],[0,0.412,0.714,0.741,0.812,0.878,0.941,0.992],0,12.7,0,-12.6).s().p("ACNByQgXgRhlgEQhugCgigEQgrgGhRgDIhbgDQgcgBgTgKIghgOQgugOiYAjQgQgdB2gqQA/gYBqglQA2gZB1gTQCIgWCNACQBTABDXA4QDOA2AQAPQANAPgbAaQgbAagagMQgXgJg8ARQhIAYgfAJQhAATg5AHQgbADgVAAQgnAAgRgMg");
	this.shape_4.setTransform(-53.8,-28.4,1.627,1.627);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AguAAIgBgEIAsACQArACAIAFg");
	this.shape_5.setTransform(-102.1,38.5,1.627,1.627);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("Ag8AAIgBgCIA4AAQA3ABAMAEg");
	this.shape_6.setTransform(-99.9,36.1,1.627,1.627);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AhNAAIBFgBQBGgBAQAEIiYABg");
	this.shape_7.setTransform(-98.3,33.3,1.627,1.627);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AhcACIBSgFQBUgFATAGIi2AJg");
	this.shape_8.setTransform(-96.8,30.9,1.627,1.627);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AhxAEIBkgHQBngJAYAGIjgAPg");
	this.shape_9.setTransform(-95.2,28.2,1.627,1.627);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#1A1A1A","#1F1E19","#2D2B17","#453F12","#464012","#54541F"],[0.031,0.161,0.314,0.478,0.486,0.886],12.3,0,-12.6,0).s().p("Ag6ArQgpgGgFgCQgBgBAIgGQAKgHgGgPQgMgbgjgFICAgRQAigFA3ABQA1ABAIAFQAHADgHAEIgKAFQgJAHgJACIgIABQgEACgFAFQgMAMgKACQgFACgKAJIgRANQgmAWgIAAQgKAAgpgFg");
	this.shape_10.setTransform(-96.3,33.2,1.627,1.627);

	this.instance_26 = new lib.Path_24();
	this.instance_26.setTransform(-173,10.9,1.627,1.627,0,0,0,9.4,4.8);
	this.instance_26.alpha = 0.41;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AAggNIAYgjQgCAMgOAXQgQAWgOAJQgSALgvAUQA1gZAiglg");
	this.shape_11.setTransform(-139.9,18.9,1.627,1.627);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#1A1A1A","#1F1E19","#2D2B17","#453F12","#464012","rgba(84,84,31,0.157)"],[0.031,0.2,0.396,0.608,0.62,1],14.9,0.1,-15.2,0.1).s().p("AB2E5QgggPiRhTQgTgLgYgWQgWgVgrgXQAIgmADgtQAHhYgVgiQAogJAOgZQAeg2ASgVQAkgqBbg7QBcg7gDASQgTByhRBrQglAvgLASQgVAeADARQAEAeBiCJQBfCAgJAJQgFAFgKAAQgOAAgXgLg");
	this.shape_12.setTransform(169.1,-1.4,1.627,1.627);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AgyBRQAngRALgQQATgYAmg9QAVgkAKgVIgPAtQgfBNgjAaQgjAbgXAJQgPAFgVAAg");
	this.shape_13.setTransform(-131.2,11.4,1.627,1.627);

	this.instance_27 = new lib.Path_28();
	this.instance_27.setTransform(-25,35.2,1.627,1.627,0,0,0,101.2,13.8);
	this.instance_27.alpha = 0.238;

	this.instance_28 = new lib.Path();
	this.instance_28.setTransform(-161,14.1,1.627,1.627,0,0,0,21.8,9.5);
	this.instance_28.alpha = 0.48;

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#A7A9AC","#D1D3D4","#E0E0E0","#A5AFBE","#7084A0","#49648A","#32517D","#294A78"],[0,0,0.365,0.522,0.682,0.82,0.929,1],0,33.4,0,-33.3).s().p("AiKFMQjPgFjBgrQikglhCgqQgxgOg7gWQh1gtgxgsQB7AYBOAGIixhuQgSgNADADQALAKgKADQAUAmgJAEQgIAFgQgVQgRgXADgTQACgbAlgMQCDhKAqgSQBAgkBGggQCGg9CdghIBtgSIA5gFIBDgCQCAgFFDBcQA5AQCeA4QCDAuA4AKQCgAcARABQA6ACBhgiQBAhEABBHQAAAngSBGQgEAQAMBSQAGBEgmgTQhlg1haAHQhQAGiPA+QjkBjiXAkQiVAkioAAIgvgBg");
	this.shape_14.setTransform(-17.3,3.9,1.627,1.627);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#1A1A1A","#1F1E19","#2D2B17","#453F12","#464012","#54541F"],[0.031,0.161,0.314,0.478,0.486,0.886],-24.1,0,24.1,0).s().p("AhYBpQgYgJgYgQQgVgOgrgRIgogOQDHgsBwg6IA+ghQAYgMAVAAQAgAAASAPQAKAIADAIQiTAyhPBNQgwBCgMABIgEAAQgRAAgWgIg");
	this.shape_15.setTransform(75.6,36.6,1.627,1.627);

	this.instance_29 = new lib.Path_30();
	this.instance_29.setTransform(-24.6,68.8,1.627,1.627,0,0,0,11.5,8.2);
	this.instance_29.alpha = 0.578;

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#8B949A","#657076","#788187","#9FA3AA","#AEB0B7","#A4A5A7","#9B9B98"],[0,0.282,0.396,0.647,0.78,0.867,0.965],-2.8,13.7,6.9,-9.3).s().p("AB5CKQgigBiRgjQiSgjAEgFQAzhABuiIQADAUAJAVQARAqAXAJQASAGBIA1QBGA2AdAJIhdAeQgFAFAYAQQAQAMgUAAIgDgBg");
	this.shape_16.setTransform(-22.5,-60.9,1.627,1.627);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#1A1A1A","#1F1E19","#2D2B17","#453F12","#464012","#54541F"],[0.031,0.161,0.314,0.478,0.486,0.886],12.5,1.2,-12.8,-1.2).s().p("AAuBIQgfgMgmgdQgqgfgUgXIgyhDQAHgFATADIAzAJQAhAFA0ARQA0ARgCAEQgVAiAmA0QATAbAXAVQgzgGgngQg");
	this.shape_17.setTransform(-23.4,69.2,1.627,1.627);

	this.instance_30 = new lib.Path_33();
	this.instance_30.setTransform(3.4,-48.4,1.627,1.627,0,0,0,5,3.1);
	this.instance_30.alpha = 0.449;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_30},{t:this.shape_17},{t:this.shape_16},{t:this.instance_29},{t:this.shape_15},{t:this.shape_14},{t:this.instance_28},{t:this.instance_27},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.instance_26},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-196.9,-84.4,393.9,168.9);


(lib.AmericanShadall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.AmericanShad();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-196.9,-84.4,393.9,168.9);


// stage content:



(lib.FWW_TilesAll_v01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// AmericanShad-all
	this.instance = new lib.AmericanShadall("synched",0);
	this.instance.setTransform(1913.9,475.9,0.664,0.664,0,0,0,0.1,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).wait(1).to({regX:0,regY:0,x:1855.1,y:470.8,startPosition:1},0).wait(1).to({x:1796.4,y:465.8,startPosition:2},0).wait(1).to({x:1737.7,y:460.8,startPosition:3},0).wait(1).to({x:1679,y:455.8,startPosition:4},0).wait(1).to({x:1620.3,y:450.7,startPosition:5},0).wait(1).to({x:1561.6,y:445.7,startPosition:0},0).wait(1).to({x:1502.9,y:440.7,startPosition:1},0).wait(1).to({x:1444.1,y:435.7,startPosition:2},0).wait(1).to({x:1385.4,y:430.6,startPosition:3},0).wait(1).to({x:1326.7,y:425.6,startPosition:4},0).wait(1).to({x:1268,y:420.6,startPosition:5},0).wait(1).to({x:1209.3,y:415.6,startPosition:0},0).wait(1).to({x:1150.6,y:410.6,startPosition:1},0).wait(1).to({x:1091.9,y:405.5,startPosition:2},0).wait(1).to({x:1033.1,y:400.5,startPosition:3},0).wait(1).to({x:974.4,y:395.5,startPosition:4},0).wait(1).to({x:915.7,y:390.5,startPosition:5},0).wait(1).to({x:857,y:385.4,startPosition:0},0).wait(1).to({x:798.3,y:380.4,startPosition:1},0).wait(1).to({x:739.6,y:375.4,startPosition:2},0).wait(1).to({x:680.9,y:370.4,startPosition:3},0).wait(1).to({x:622.2,y:365.3,startPosition:4},0).wait(1).to({x:563.4,y:360.3,startPosition:5},0).wait(1).to({x:530.4,y:366.3,startPosition:0},0).wait(1).to({x:497.3,y:372.3,startPosition:1},0).wait(1).to({x:464.2,y:378.3,startPosition:2},0).wait(1).to({x:431.2,y:384.3,startPosition:3},0).wait(1).to({x:398.1,y:390.3,startPosition:4},0).wait(1).to({x:365,y:396.2,startPosition:5},0).wait(1).to({x:332,y:402.2,startPosition:0},0).wait(1).to({x:298.9,y:408.2,startPosition:1},0).wait(1).to({x:265.8,y:414.2,startPosition:2},0).wait(1).to({x:232.7,y:420.2,startPosition:3},0).wait(1).to({x:199.7,y:426.2,startPosition:4},0).wait(1).to({x:166.6,y:432.2,startPosition:5},0).wait(1).to({x:133.5,y:438.2,startPosition:0},0).wait(1).to({x:100.5,y:444.1,startPosition:1},0).wait(1).to({x:67.4,y:450.1,startPosition:2},0).wait(1).to({x:34.3,y:456.1,startPosition:3},0).wait(1).to({x:1.2,y:462.1,startPosition:4},0).wait(1).to({x:-31.8,y:468.1,startPosition:5},0).wait(1).to({x:-64.9,y:474.1,startPosition:0},0).wait(1).to({x:-98,y:480.1,startPosition:1},0).wait(1).to({x:-131,y:486.1,startPosition:2},0).wait(1).to({x:-164.1,y:492,startPosition:3},0).wait(1).to({x:-197.2,y:498,startPosition:4},0).wait(1).to({x:-230.3,y:504,startPosition:5},0).wait(1).to({x:-263.3,y:510,startPosition:0},0).wait(1).to({x:-296.4,y:516,startPosition:1},0).to({_off:true},1).wait(183));

	// AmericanShad-all
	this.instance_1 = new lib.AmericanShadall("synched",0);
	this.instance_1.setTransform(2161.4,302.8,0.789,0.789);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).wait(1).to({x:2188.6,y:289.4,startPosition:1},0).wait(1).to({x:2215.9,y:276.1,startPosition:2},0).wait(1).to({x:2243.2,y:262.8,startPosition:3},0).wait(1).to({x:2198.8,y:265.2,startPosition:4},0).wait(1).to({x:2154.4,y:267.6,startPosition:5},0).wait(1).to({x:2110.1,y:270,startPosition:0},0).wait(1).to({x:2065.7,y:272.5,startPosition:1},0).wait(1).to({x:2021.3,y:274.9,startPosition:2},0).wait(1).to({x:1977,y:277.3,startPosition:3},0).wait(1).to({x:1932.6,y:279.7,startPosition:4},0).wait(1).to({x:1888.2,y:282.2,startPosition:5},0).wait(1).to({x:1843.8,y:284.6,startPosition:0},0).wait(1).to({x:1799.4,y:287,startPosition:1},0).wait(1).to({x:1755,y:289.4,startPosition:2},0).wait(1).to({x:1710.7,y:291.9,startPosition:3},0).wait(1).to({x:1666.3,y:294.3,startPosition:4},0).wait(1).to({x:1622,y:296.7,startPosition:5},0).wait(1).to({x:1577.6,y:299.1,startPosition:0},0).wait(1).to({x:1533.2,y:301.6,startPosition:1},0).wait(1).to({x:1488.8,y:304,startPosition:2},0).wait(1).to({x:1444.4,y:306.4,startPosition:3},0).wait(1).to({x:1400,y:308.8,startPosition:4},0).wait(1).to({x:1355.7,y:311.3,startPosition:5},0).wait(1).to({x:1311.3,y:313.7,startPosition:0},0).wait(1).to({x:1266.9,y:316.1,startPosition:1},0).wait(1).to({x:1206.6,y:315.6,startPosition:2},0).wait(1).to({x:1146.2,y:315.1,startPosition:3},0).wait(1).to({x:1085.8,y:314.6,startPosition:4},0).wait(1).to({x:1025.5,y:314.1,startPosition:5},0).wait(1).to({x:965.1,y:313.6,startPosition:0},0).wait(1).to({x:904.8,y:313.1,startPosition:1},0).wait(1).to({x:844.5,y:312.6,startPosition:2},0).wait(1).to({x:784,y:312.1,startPosition:3},0).wait(1).to({x:723.8,y:311.5,startPosition:4},0).wait(1).to({x:663.3,y:311,startPosition:5},0).wait(1).to({x:603,y:310.5,startPosition:0},0).wait(1).to({x:542.6,y:310,startPosition:1},0).wait(1).to({x:482.3,y:309.5,startPosition:2},0).wait(1).to({x:422,y:309,startPosition:3},0).wait(1).to({x:361.6,y:308.5,startPosition:4},0).wait(1).to({x:301.2,y:308,startPosition:5},0).wait(1).to({x:240.8,y:307.5,startPosition:0},0).wait(1).to({x:180.5,y:307,startPosition:1},0).wait(1).to({x:120.2,y:306.5,startPosition:2},0).wait(1).to({x:59.7,y:306,startPosition:3},0).wait(1).to({x:-0.6,y:305.4,startPosition:4},0).wait(1).to({x:-61,y:304.9,startPosition:5},0).wait(1).to({x:-121.3,y:304.4,startPosition:0},0).wait(1).to({x:-181.7,y:303.9,startPosition:1},0).wait(1).to({x:-242,y:303.4,startPosition:2},0).wait(1).to({x:-302.4,y:302.9,startPosition:3},0).to({_off:true},1).wait(183));

	// AmericanShad-all
	this.instance_2 = new lib.AmericanShadall("synched",0);
	this.instance_2.setTransform(2305.3,407);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).wait(1).to({x:2276.3,startPosition:1},0).wait(1).to({x:2247.3,startPosition:2},0).wait(1).to({x:2218.3,startPosition:3},0).wait(1).to({x:2189.3,startPosition:4},0).wait(1).to({x:2160.3,startPosition:5},0).wait(1).to({x:2126.2,y:407.6,startPosition:0},0).wait(1).to({x:2092.1,y:408.2,startPosition:1},0).wait(1).to({x:2058,y:408.8,startPosition:2},0).wait(1).to({x:2023.9,y:409.4,startPosition:3},0).wait(1).to({x:1989.8,y:410,startPosition:4},0).wait(1).to({x:1955.7,y:410.6,startPosition:5},0).wait(1).to({x:1921.6,y:411.2,startPosition:0},0).wait(1).to({x:1887.5,y:411.9,startPosition:1},0).wait(1).to({x:1853.4,y:412.5,startPosition:2},0).wait(1).to({x:1819.3,y:413.1,startPosition:3},0).wait(1).to({x:1785.2,y:413.7,startPosition:4},0).wait(1).to({x:1751.1,y:414.3,startPosition:5},0).wait(1).to({x:1717,y:414.9,startPosition:0},0).wait(1).to({x:1682.9,y:415.5,startPosition:1},0).wait(1).to({x:1648.8,y:416.1,startPosition:2},0).wait(1).to({x:1614.7,y:416.8,startPosition:3},0).wait(1).to({x:1580.6,y:417.4,startPosition:4},0).wait(1).to({x:1546.5,y:418,startPosition:5},0).wait(1).to({x:1512.4,y:418.6,startPosition:0},0).wait(1).to({x:1478.3,y:419.2,startPosition:1},0).wait(1).to({x:1444.2,y:419.8,startPosition:2},0).wait(1).to({x:1410.1,y:420.4,startPosition:3},0).wait(1).to({x:1338.3,y:419.9,startPosition:4},0).wait(1).to({x:1266.5,y:419.4,startPosition:5},0).wait(1).to({x:1194.7,y:418.9,startPosition:0},0).wait(1).to({x:1122.9,y:418.4,startPosition:1},0).wait(1).to({x:1051.1,y:417.9,startPosition:2},0).wait(1).to({x:979.4,y:417.4,startPosition:3},0).wait(1).to({x:907.6,y:416.8,startPosition:4},0).wait(1).to({x:835.8,y:416.3,startPosition:5},0).wait(1).to({x:764.1,y:415.8,startPosition:0},0).wait(1).to({x:692.2,y:415.3,startPosition:1},0).wait(1).to({x:620.4,y:414.8,startPosition:2},0).wait(1).to({x:548.6,y:414.3,startPosition:3},0).wait(1).to({x:476.8,y:413.8,startPosition:4},0).wait(1).to({x:405.1,y:413.3,startPosition:5},0).wait(1).to({x:333.3,y:412.7,startPosition:0},0).wait(1).to({x:261.5,y:412.2,startPosition:1},0).wait(1).to({x:189.7,y:411.7,startPosition:2},0).wait(1).to({x:118,y:411.2,startPosition:3},0).wait(1).to({x:46.2,y:410.7,startPosition:4},0).wait(1).to({x:-25.7,y:410.2,startPosition:5},0).wait(1).to({x:-97.5,y:409.7,startPosition:0},0).wait(1).to({x:-169.2,y:409.2,startPosition:1},0).wait(1).to({x:-241,y:408.6,startPosition:2},0).wait(1).to({x:-312.8,y:408.1,startPosition:3},0).wait(1).to({x:-384.5,y:407.6,startPosition:4},0).wait(1).to({x:-456.4,y:407.1,startPosition:5},0).to({_off:true},1).wait(183));

	// AmericanShad-all
	this.instance_3 = new lib.AmericanShadall("synched",0);
	this.instance_3.setTransform(2288.9,194.9,0.745,0.745);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).wait(1).to({x:2248.2,startPosition:1},0).wait(1).to({x:2207.5,startPosition:2},0).wait(1).to({x:2166.8,startPosition:3},0).wait(1).to({x:2126.1,startPosition:4},0).wait(1).to({x:2085.4,startPosition:5},0).wait(1).to({x:2044.8,startPosition:0},0).wait(1).to({x:1984,y:195.5,startPosition:1},0).wait(1).to({x:1923.3,y:196.1,startPosition:2},0).wait(1).to({x:1862.7,y:196.7,startPosition:3},0).wait(1).to({x:1801.9,y:197.3,startPosition:4},0).wait(1).to({x:1741.2,y:197.9,startPosition:5},0).wait(1).to({x:1680.5,y:198.5,startPosition:0},0).wait(1).to({x:1619.8,y:199.1,startPosition:1},0).wait(1).to({x:1559,y:199.7,startPosition:2},0).wait(1).to({x:1498.3,y:200.3,startPosition:3},0).wait(1).to({x:1437.6,y:200.9,startPosition:4},0).wait(1).to({x:1376.9,y:201.5,startPosition:5},0).wait(1).to({x:1316.2,y:202.2,startPosition:0},0).wait(1).to({x:1255.4,y:202.8,startPosition:1},0).wait(1).to({x:1194.8,y:203.4,startPosition:2},0).wait(1).to({x:1134.1,y:204,startPosition:3},0).wait(1).to({x:1073.3,y:204.6,startPosition:4},0).wait(1).to({x:1012.6,y:205.2,startPosition:5},0).wait(1).to({x:951.8,y:205.8,startPosition:0},0).wait(1).to({x:891.1,y:206.4,startPosition:1},0).wait(1).to({x:830.4,y:207,startPosition:2},0).wait(1).to({x:769.7,y:207.6,startPosition:3},0).wait(1).to({x:709,y:208.2,startPosition:4},0).wait(1).to({x:659.1,y:207.7,startPosition:5},0).wait(1).to({x:609.2,y:207.2,startPosition:0},0).wait(1).to({x:559.3,y:206.7,startPosition:1},0).wait(1).to({x:509.4,y:206.2,startPosition:2},0).wait(1).to({x:459.5,y:205.7,startPosition:3},0).wait(1).to({x:409.6,y:205.2,startPosition:4},0).wait(1).to({x:359.7,y:204.7,startPosition:5},0).wait(1).to({x:309.8,y:204.2,startPosition:0},0).wait(1).to({x:259.9,y:203.6,startPosition:1},0).wait(1).to({x:210,y:203.1,startPosition:2},0).wait(1).to({x:160.1,y:202.6,startPosition:3},0).wait(1).to({x:110.2,y:202.1,startPosition:4},0).wait(1).to({x:60.3,y:201.6,startPosition:5},0).wait(1).to({x:10.5,y:201.1,startPosition:0},0).wait(1).to({x:-39.4,y:200.6,startPosition:1},0).wait(1).to({x:-89.4,y:200.1,startPosition:2},0).wait(1).to({x:-139.3,y:199.6,startPosition:3},0).wait(1).to({x:-189.1,y:199.1,startPosition:4},0).wait(1).to({x:-239,y:198.6,startPosition:5},0).wait(1).to({x:-289,y:198.1,startPosition:0},0).wait(1).to({x:-338.9,y:197.5,startPosition:1},0).wait(1).to({x:-388.8,y:197,startPosition:2},0).wait(1).to({x:-438.7,y:196.5,startPosition:3},0).wait(1).to({x:-488.6,y:196,startPosition:4},0).wait(1).to({x:-538.4,y:195.5,startPosition:5},0).wait(1).to({x:-588.3,y:195,startPosition:0},0).to({_off:true},1).wait(183));

	// AmericanShad-all
	this.instance_4 = new lib.AmericanShadall("synched",0);
	this.instance_4.setTransform(2438.1,551.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({_off:false},0).wait(1).to({x:2456.3,y:522.8,startPosition:1},0).wait(1).to({x:2474.5,y:493.9,startPosition:2},0).wait(1).to({x:2408.7,y:493.7,startPosition:3},0).wait(1).to({x:2343,y:493.5,startPosition:4},0).wait(1).to({x:2277.3,y:493.3,startPosition:5},0).wait(1).to({x:2211.5,y:493.1,startPosition:0},0).wait(1).to({x:2145.8,y:492.9,startPosition:1},0).wait(1).to({x:2080.1,y:492.7,startPosition:2},0).wait(1).to({x:2014.4,y:492.5,startPosition:3},0).wait(1).to({x:1948.6,y:492.3,startPosition:4},0).wait(1).to({x:1882.9,y:492.1,startPosition:5},0).wait(1).to({x:1817.1,y:491.9,startPosition:0},0).wait(1).to({x:1751.4,y:491.7,startPosition:1},0).wait(1).to({x:1685.7,y:491.5,startPosition:2},0).wait(1).to({x:1619.9,y:491.3,startPosition:3},0).wait(1).to({x:1554.2,y:491.1,startPosition:4},0).wait(1).to({x:1488.5,y:490.9,startPosition:5},0).wait(1).to({x:1422.7,y:490.7,startPosition:0},0).wait(1).to({x:1357,y:490.5,startPosition:1},0).wait(1).to({x:1291.2,y:490.3,startPosition:2},0).wait(1).to({x:1225.5,y:490.1,startPosition:3},0).wait(1).to({x:1159.8,y:489.9,startPosition:4},0).wait(1).to({x:1094,y:489.7,startPosition:5},0).wait(1).to({x:1028.3,y:489.5,startPosition:0},0).wait(1).to({x:963.7,y:491.9,startPosition:1},0).wait(1).to({x:899,y:494.3,startPosition:2},0).wait(1).to({x:834.4,y:496.7,startPosition:3},0).wait(1).to({x:769.7,y:499.1,startPosition:4},0).wait(1).to({x:705.1,y:501.5,startPosition:5},0).wait(1).to({x:640.4,y:503.9,startPosition:0},0).wait(1).to({x:575.8,y:506.3,startPosition:1},0).wait(1).to({x:511.1,y:508.7,startPosition:2},0).wait(1).to({x:446.5,y:511.1,startPosition:3},0).wait(1).to({x:381.8,y:513.5,startPosition:4},0).wait(1).to({x:317.2,y:515.9,startPosition:5},0).wait(1).to({x:252.5,y:518.3,startPosition:0},0).wait(1).to({x:187.9,y:520.7,startPosition:1},0).wait(1).to({x:123.3,y:523.1,startPosition:2},0).wait(1).to({x:58.6,y:525.5,startPosition:3},0).wait(1).to({x:-6.1,y:527.9,startPosition:4},0).wait(1).to({x:-70.7,y:530.3,startPosition:5},0).wait(1).to({x:-135.3,y:532.7,startPosition:0},0).wait(1).to({x:-200,y:535.1,startPosition:1},0).wait(1).to({x:-264.7,y:537.5,startPosition:2},0).wait(1).to({x:-329.3,y:539.9,startPosition:3},0).wait(1).to({x:-394,y:542.3,startPosition:4},0).wait(1).to({x:-458.6,y:544.7,startPosition:5},0).wait(1).to({x:-523.3,y:547.1,startPosition:0},0).wait(1).to({x:-587.9,y:549.5,startPosition:1},0).wait(1).to({x:-652.6,y:551.9,startPosition:2},0).to({_off:true},1).wait(183));

	// AmericanShad-all
	this.instance_5 = new lib.AmericanShadall("synched",0);
	this.instance_5.setTransform(2248.1,506.6,0.789,0.789);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({_off:false},0).wait(1).to({x:2224.6,y:518.5,startPosition:1},0).wait(1).to({x:2201.1,y:530.3,startPosition:2},0).wait(1).to({x:2177.7,y:542.2,startPosition:3},0).wait(1).to({x:2111.8,y:540.4,startPosition:4},0).wait(1).to({x:2045.9,y:538.7,startPosition:5},0).wait(1).to({x:1980.1,y:536.9,startPosition:0},0).wait(1).to({x:1914.2,y:535.2,startPosition:1},0).wait(1).to({x:1848.4,y:533.4,startPosition:2},0).wait(1).to({x:1782.6,y:531.7,startPosition:3},0).wait(1).to({x:1716.7,y:529.9,startPosition:4},0).wait(1).to({x:1650.8,y:528.2,startPosition:5},0).wait(1).to({x:1584.9,y:526.4,startPosition:0},0).wait(1).to({x:1519,y:524.7,startPosition:1},0).wait(1).to({x:1453.2,y:522.9,startPosition:2},0).wait(1).to({x:1387.4,y:521.2,startPosition:3},0).wait(1).to({x:1321.5,y:519.5,startPosition:4},0).wait(1).to({x:1255.7,y:517.7,startPosition:5},0).wait(1).to({x:1189.8,y:516,startPosition:0},0).wait(1).to({x:1123.9,y:514.2,startPosition:1},0).wait(1).to({x:1058,y:512.5,startPosition:2},0).wait(1).to({x:992.2,y:510.7,startPosition:3},0).wait(1).to({x:926.3,y:509,startPosition:4},0).wait(1).to({x:860.4,y:507.2,startPosition:5},0).wait(1).to({x:794.6,y:505.5,startPosition:0},0).wait(1).to({x:728.7,y:503.7,startPosition:1},0).wait(1).to({x:668.4,y:503.8,startPosition:2},0).wait(1).to({x:608.2,y:504,startPosition:3},0).wait(1).to({x:547.9,y:504.1,startPosition:4},0).wait(1).to({x:487.7,y:504.2,startPosition:5},0).wait(1).to({x:427.4,y:504.3,startPosition:0},0).wait(1).to({x:367.1,y:504.4,startPosition:1},0).wait(1).to({x:306.9,y:504.5,startPosition:2},0).wait(1).to({x:246.6,y:504.7,startPosition:3},0).wait(1).to({x:186.4,y:504.8,startPosition:4},0).wait(1).to({x:126.1,y:504.9,startPosition:5},0).wait(1).to({x:65.8,y:505,startPosition:0},0).wait(1).to({x:5.5,y:505.1,startPosition:1},0).wait(1).to({x:-54.7,y:505.2,startPosition:2},0).wait(1).to({x:-114.9,y:505.4,startPosition:3},0).wait(1).to({x:-175.2,y:505.5,startPosition:4},0).wait(1).to({x:-235.5,y:505.6,startPosition:5},0).wait(1).to({x:-295.8,y:505.7,startPosition:0},0).wait(1).to({x:-356,y:505.8,startPosition:1},0).wait(1).to({x:-416.2,y:505.9,startPosition:2},0).wait(1).to({x:-476.6,y:506.1,startPosition:3},0).wait(1).to({x:-536.8,y:506.2,startPosition:4},0).wait(1).to({x:-597.1,y:506.3,startPosition:5},0).wait(1).to({x:-657.4,y:506.4,startPosition:0},0).wait(1).to({x:-717.6,y:506.5,startPosition:1},0).wait(1).to({x:-777.8,y:506.6,startPosition:2},0).wait(1).to({x:-838.1,y:506.8,startPosition:3},0).to({_off:true},1).wait(183));

	// AmericanShad-all
	this.instance_6 = new lib.AmericanShadall("synched",0);
	this.instance_6.setTransform(2294.8,704.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).wait(1).to({x:2300.2,startPosition:1},0).wait(1).to({x:2305.7,startPosition:2},0).wait(1).to({x:2311.1,startPosition:3},0).wait(1).to({x:2316.6,startPosition:4},0).wait(1).to({x:2264.9,y:703,startPosition:5},0).wait(1).to({x:2213.3,y:701.7,startPosition:0},0).wait(1).to({x:2161.7,y:700.5,startPosition:1},0).wait(1).to({x:2110,y:699.3,startPosition:2},0).wait(1).to({x:2058.3,y:698.1,startPosition:3},0).wait(1).to({x:2006.7,y:696.9,startPosition:4},0).wait(1).to({x:1955.1,y:695.7,startPosition:5},0).wait(1).to({x:1903.4,y:694.5,startPosition:0},0).wait(1).to({x:1851.7,y:693.3,startPosition:1},0).wait(1).to({x:1800.1,y:692.1,startPosition:2},0).wait(1).to({x:1748.4,y:690.8,startPosition:3},0).wait(1).to({x:1696.8,y:689.6,startPosition:4},0).wait(1).to({x:1645.1,y:688.4,startPosition:5},0).wait(1).to({x:1593.5,y:687.2,startPosition:0},0).wait(1).to({x:1541.8,y:686,startPosition:1},0).wait(1).to({x:1490.1,y:684.8,startPosition:2},0).wait(1).to({x:1438.5,y:683.6,startPosition:3},0).wait(1).to({x:1386.8,y:682.4,startPosition:4},0).wait(1).to({x:1335.2,y:681.2,startPosition:5},0).wait(1).to({x:1283.5,y:679.9,startPosition:0},0).wait(1).to({x:1231.9,y:678.7,startPosition:1},0).wait(1).to({x:1180.2,y:677.5,startPosition:2},0).wait(1).to({x:1105.1,y:678.6,startPosition:3},0).wait(1).to({x:1029.9,y:679.6,startPosition:4},0).wait(1).to({x:954.8,y:680.6,startPosition:5},0).wait(1).to({x:879.6,y:681.6,startPosition:0},0).wait(1).to({x:804.5,y:682.7,startPosition:1},0).wait(1).to({x:729.3,y:683.7,startPosition:2},0).wait(1).to({x:654.3,y:684.7,startPosition:3},0).wait(1).to({x:579,y:685.8,startPosition:4},0).wait(1).to({x:504,y:686.8,startPosition:5},0).wait(1).to({x:428.7,y:687.8,startPosition:0},0).wait(1).to({x:353.6,y:688.9,startPosition:1},0).wait(1).to({x:278.4,y:689.9,startPosition:2},0).wait(1).to({x:203.3,y:690.9,startPosition:3},0).wait(1).to({x:128.2,y:691.9,startPosition:4},0).wait(1).to({x:53,y:693,startPosition:5},0).wait(1).to({x:-22.2,y:694,startPosition:0},0).wait(1).to({x:-97.3,y:695,startPosition:1},0).wait(1).to({x:-172.4,y:696.1,startPosition:2},0).wait(1).to({x:-247.6,y:697.1,startPosition:3},0).wait(1).to({x:-322.8,y:698.1,startPosition:4},0).wait(1).to({x:-397.9,y:699.2,startPosition:5},0).wait(1).to({x:-473.1,y:700.2,startPosition:0},0).wait(1).to({x:-548.2,y:701.2,startPosition:1},0).wait(1).to({x:-623.4,y:702.2,startPosition:2},0).wait(1).to({x:-698.5,y:703.3,startPosition:3},0).wait(1).to({x:-773.7,y:704.3,startPosition:4},0).to({_off:true},1).wait(183));

	// AmericanShad-all
	this.instance_7 = new lib.AmericanShadall("synched",0);
	this.instance_7.setTransform(2483.7,395,0.745,0.745);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({_off:false},0).wait(1).to({x:2488.3,startPosition:1},0).wait(1).to({x:2493,startPosition:2},0).wait(1).to({x:2497.6,startPosition:3},0).wait(1).to({x:2502.3,startPosition:4},0).wait(1).to({x:2506.9,startPosition:5},0).wait(1).to({x:2432.8,y:396.4,startPosition:0},0).wait(1).to({x:2358.7,y:397.8,startPosition:1},0).wait(1).to({x:2284.7,y:399.2,startPosition:2},0).wait(1).to({x:2210.6,y:400.6,startPosition:3},0).wait(1).to({x:2136.5,y:402,startPosition:4},0).wait(1).to({x:2062.5,y:403.5,startPosition:5},0).wait(1).to({x:1988.4,y:404.9,startPosition:0},0).wait(1).to({x:1914.2,y:406.3,startPosition:1},0).wait(1).to({x:1840.2,y:407.7,startPosition:2},0).wait(1).to({x:1766.1,y:409.1,startPosition:3},0).wait(1).to({x:1692,y:410.5,startPosition:4},0).wait(1).to({x:1618,y:412,startPosition:5},0).wait(1).to({x:1543.8,y:413.4,startPosition:0},0).wait(1).to({x:1469.8,y:414.8,startPosition:1},0).wait(1).to({x:1395.7,y:416.2,startPosition:2},0).wait(1).to({x:1321.6,y:417.6,startPosition:3},0).wait(1).to({x:1247.5,y:419,startPosition:4},0).wait(1).to({x:1173.4,y:420.5,startPosition:5},0).wait(1).to({x:1099.3,y:421.9,startPosition:0},0).wait(1).to({x:1025.2,y:423.3,startPosition:1},0).wait(1).to({x:951.1,y:424.7,startPosition:2},0).wait(1).to({x:877.1,y:426.1,startPosition:3},0).wait(1).to({x:814.2,y:424.9,startPosition:4},0).wait(1).to({x:751.3,y:423.7,startPosition:5},0).wait(1).to({x:688.4,y:422.5,startPosition:0},0).wait(1).to({x:625.5,y:421.4,startPosition:1},0).wait(1).to({x:562.6,y:420.2,startPosition:2},0).wait(1).to({x:499.7,y:419,startPosition:3},0).wait(1).to({x:436.9,y:417.8,startPosition:4},0).wait(1).to({x:373.9,y:416.6,startPosition:5},0).wait(1).to({x:311.1,y:415.4,startPosition:0},0).wait(1).to({x:248.1,y:414.2,startPosition:1},0).wait(1).to({x:185.3,y:413,startPosition:2},0).wait(1).to({x:122.4,y:411.8,startPosition:3},0).wait(1).to({x:59.5,y:410.6,startPosition:4},0).wait(1).to({x:-3.4,y:409.4,startPosition:5},0).wait(1).to({x:-66.2,y:408.2,startPosition:0},0).wait(1).to({x:-129.2,y:407,startPosition:1},0).wait(1).to({x:-192.1,y:405.8,startPosition:2},0).wait(1).to({x:-254.9,y:404.6,startPosition:3},0).wait(1).to({x:-317.8,y:403.5,startPosition:4},0).wait(1).to({x:-380.8,y:402.3,startPosition:5},0).wait(1).to({x:-443.6,y:401.1,startPosition:0},0).wait(1).to({x:-506.5,y:399.9,startPosition:1},0).wait(1).to({x:-569.4,y:398.7,startPosition:2},0).wait(1).to({x:-632.3,y:397.5,startPosition:3},0).wait(1).to({x:-695.1,y:396.3,startPosition:4},0).wait(1).to({x:-758.1,y:395.1,startPosition:5},0).to({_off:true},1).wait(183));

	// AmericanShad-all
	this.instance_8 = new lib.AmericanShadall("synched",0);
	this.instance_8.setTransform(2214.3,627.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2).to({_off:false},0).wait(1).to({x:2159.7,startPosition:1},0).wait(1).to({x:2105.1,startPosition:2},0).wait(1).to({x:2050.5,startPosition:3},0).wait(1).to({x:1995.9,startPosition:4},0).wait(1).to({x:1941.3,startPosition:5},0).wait(1).to({x:1886.7,startPosition:0},0).wait(1).to({x:1832.1,startPosition:1},0).wait(1).to({x:1777.5,startPosition:2},0).wait(1).to({x:1722.9,startPosition:3},0).wait(1).to({x:1668.3,startPosition:4},0).wait(1).to({x:1613.7,startPosition:5},0).wait(1).to({x:1559.1,startPosition:0},0).wait(1).to({x:1504.5,startPosition:1},0).wait(1).to({x:1449.9,startPosition:2},0).wait(1).to({x:1395.3,startPosition:3},0).wait(1).to({x:1340.7,startPosition:4},0).wait(1).to({x:1286.1,startPosition:5},0).wait(1).to({x:1231.5,startPosition:0},0).wait(1).to({x:1176.9,startPosition:1},0).wait(1).to({x:1122.3,startPosition:2},0).wait(1).to({x:1067.7,startPosition:3},0).wait(1).to({x:1013.1,startPosition:4},0).wait(1).to({x:958.5,startPosition:5},0).wait(1).to({x:903.9,startPosition:0},0).wait(1).to({x:849.3,startPosition:1},0).wait(1).to({x:794.7,startPosition:2},0).wait(1).to({x:740.1,startPosition:3},0).wait(1).to({x:685.5,startPosition:4},0).wait(1).to({x:644.7,startPosition:5},0).wait(1).to({x:604,startPosition:0},0).wait(1).to({x:563.2,startPosition:1},0).wait(1).to({x:522.5,startPosition:2},0).wait(1).to({x:481.7,startPosition:3},0).wait(1).to({x:441,startPosition:4},0).wait(1).to({x:400.3,startPosition:5},0).wait(1).to({x:359.5,y:627.2,startPosition:0},0).wait(1).to({x:318.8,startPosition:1},0).wait(1).to({x:278,startPosition:2},0).wait(1).to({x:237.3,startPosition:3},0).wait(1).to({x:196.5,startPosition:4},0).wait(1).to({x:155.8,startPosition:5},0).wait(1).to({x:115.1,startPosition:0},0).wait(1).to({x:74.3,startPosition:1},0).wait(1).to({x:33.5,startPosition:2},0).wait(1).to({x:-7.2,startPosition:3},0).wait(1).to({x:-47.9,startPosition:4},0).wait(1).to({x:-88.7,startPosition:5},0).wait(1).to({x:-129.5,startPosition:0},0).wait(1).to({x:-170.2,startPosition:1},0).wait(1).to({x:-211,startPosition:2},0).wait(1).to({x:-251.7,startPosition:3},0).wait(1).to({x:-292.5,startPosition:4},0).wait(1).to({x:-333.2,startPosition:5},0).wait(1).to({x:-373.9,startPosition:0},0).to({_off:true},1).wait(183));

	// AmericanShad-all
	this.instance_9 = new lib.AmericanShadall("synched",0);
	this.instance_9.setTransform(2111.4,362.7,0.675,0.675);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({x:2073.6,startPosition:1},0).wait(1).to({x:2035.9,startPosition:2},0).wait(1).to({x:1998.2,startPosition:3},0).wait(1).to({x:1960.4,startPosition:4},0).wait(1).to({x:1922.7,startPosition:5},0).wait(1).to({x:1885,startPosition:0},0).wait(1).to({x:1847.3,startPosition:1},0).wait(1).to({x:1809.5,startPosition:2},0).wait(1).to({x:1771.8,startPosition:3},0).wait(1).to({x:1734.1,startPosition:4},0).wait(1).to({x:1696.4,startPosition:5},0).wait(1).to({x:1658.6,startPosition:0},0).wait(1).to({x:1620.9,startPosition:1},0).wait(1).to({x:1583.2,startPosition:2},0).wait(1).to({x:1545.5,startPosition:3},0).wait(1).to({x:1507.7,startPosition:4},0).wait(1).to({x:1470,startPosition:5},0).wait(1).to({x:1432.3,startPosition:0},0).wait(1).to({x:1394.6,startPosition:1},0).wait(1).to({x:1356.8,y:362.8,startPosition:2},0).wait(1).to({x:1319.1,startPosition:3},0).wait(1).to({x:1281.4,startPosition:4},0).wait(1).to({x:1243.7,startPosition:5},0).wait(1).to({x:1205.9,startPosition:0},0).wait(1).to({x:1168.2,startPosition:1},0).wait(1).to({x:1130.5,startPosition:2},0).wait(1).to({x:1092.7,startPosition:3},0).wait(1).to({x:1055,startPosition:4},0).wait(1).to({x:1017.3,startPosition:5},0).wait(1).to({x:979.6,startPosition:0},0).wait(1).to({x:936.4,startPosition:1},0).wait(1).to({x:893.3,startPosition:2},0).wait(1).to({x:850.1,startPosition:3},0).wait(1).to({x:807,startPosition:4},0).wait(1).to({x:763.8,startPosition:5},0).wait(1).to({x:720.6,startPosition:0},0).wait(1).to({x:677.5,startPosition:1},0).wait(1).to({x:634.3,startPosition:2},0).wait(1).to({x:591.2,startPosition:3},0).wait(1).to({x:548,startPosition:4},0).wait(1).to({x:504.9,startPosition:5},0).wait(1).to({x:461.7,startPosition:0},0).wait(1).to({x:418.6,startPosition:1},0).wait(1).to({x:375.5,startPosition:2},0).wait(1).to({x:332.3,startPosition:3},0).wait(1).to({x:289.1,startPosition:4},0).wait(1).to({x:246,startPosition:5},0).wait(1).to({x:202.9,startPosition:0},0).wait(1).to({x:159.7,startPosition:1},0).wait(1).to({x:116.5,startPosition:2},0).wait(1).to({x:73.3,startPosition:3},0).wait(1).to({x:30.2,startPosition:4},0).wait(1).to({x:-13,startPosition:5},0).wait(1).to({x:-56.1,startPosition:0},0).wait(1).to({x:-99.2,startPosition:1},0).wait(1).to({x:-142.4,startPosition:2},0).to({_off:true},1).wait(183));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2938.4,845.7,266,114.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;