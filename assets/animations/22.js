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


(lib.Rmid = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#654F26").s().p("AgRgDQAIgeAdgWIgXBvQgWgeAIgdg");
	this.shape.setTransform(16.1,-12.3,0.397,0.397);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#654F26").s().p("AgEgEQAWgeAbgSIhZBpQAZgoAPgRg");
	this.shape_1.setTransform(10,-11.6,0.397,0.397);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#654F26").s().p("AgUgKQATgbAjgFIhBBVQgIgeATgXg");
	this.shape_2.setTransform(3.9,-11.7,0.397,0.397);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#654F26").s().p("AgHAAQADgUAMgXIgIBXQgKgZADgTg");
	this.shape_3.setTransform(-3.4,-13,0.397,0.397);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#654F26").s().p("AhKgqICVBVQhbglg6gwg");
	this.shape_4.setTransform(-4.5,4,0.397,0.397);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#654F26").s().p("AgCAEQgVgMglgdIB5BLQgegMghgWg");
	this.shape_5.setTransform(-6,-1.1,0.397,0.397);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#654F26").s().p("Ag3gtIBvBcQhUgjgbg5g");
	this.shape_6.setTransform(-5.8,-5.7,0.397,0.397);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#654F26").s().p("AgMAVQhCghhLg9IEzCTQhSgHhUgug");
	this.shape_7.setTransform(-3.6,-10.7,0.397,0.397);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#654F26").s().p("AhuB9QgUgDgLgbQgLgdAFgsQABgSAEgNQAKgwCMgmQBHgTBEgKQANAwg6AbQghAPhAAKQgWAEAGBEQAFBCgagEQgdgEgFg3IgCgfQgCgLgIAIQgLAMgCA1QgCArgPAAIgCAAg");
	this.shape_8.setTransform(-17.1,14.1,0.397,0.397);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#654F26").s().p("AhKCQQAFhtARhdQAPhUAdhJQAfhTAfgIQAagGgFAdIgKA+QABATgTCbQgUCggBAwQgBA5goAyQgVAagUAOQgXgfAFiFg");
	this.shape_9.setTransform(-10.4,-3.2,0.397,0.397);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#654F26").s().p("AlMAzQg+gYgLgJQgVgRAagbQAagcFhgFQFWgFApAQQAmAOAMAhQANAhgmAGQhCALknAJQhwAEhOAAQiNAAgbgLg");
	this.shape_10.setTransform(6.6,-16.7,0.397,0.397);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,-19.1,46.1,38.2);


(lib.Rfront = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#654F26").s().p("AgMABQgDgWAQgXIANBZQgXgSgDgag");
	this.shape.setTransform(10.2,-10.5,0.397,0.397);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#654F26").s().p("AgEgBQAIgdAOgSIgjBiQAHglAGgOg");
	this.shape_1.setTransform(6,-8.7,0.397,0.397);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#654F26").s().p("AgOgDQAHgYAYgMIgXBPQgOgWAGgVg");
	this.shape_2.setTransform(1.3,-7.6,0.397,0.397);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#654F26").s().p("AgGgiIAPBFQgXgfAIgmg");
	this.shape_3.setTransform(-4.2,-7.1,0.397,0.397);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#654F26").s().p("AhDgRICHAjQhMgJg7gag");
	this.shape_4.setTransform(-0.2,6.1,0.397,0.397);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#654F26").s().p("AAAADQgSgEglgPIBvAhQgagDgegLg");
	this.shape_5.setTransform(-2.8,2.5,0.397,0.397);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#654F26").s().p("Ag1gYIBsAxQhJgKgjgng");
	this.shape_6.setTransform(-4,-1.1,0.397,0.397);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#654F26").s().p("AgCARQg6gOhJgeIELA0QgWADgYAAQgrAAgvgLg");
	this.shape_7.setTransform(-3.8,-5.2,0.397,0.397);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#654F26").s().p("AgTA/QgPgKARghQAIgPAAgEQABgFgNADQgRABgrAeQgkAYgKgGQgNgIAPgSQAPgUAmgVIAegRQA2gdBIABQBIACggAiQgVAVgBAHQgDgBgNgEQgUgFglAqQgcAhgNAAQgEAAgDgCg");
	this.shape_8.setTransform(-9,13.7,0.397,0.397);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#654F26").s().p("AgTB8QgzhXgfhPQgahGgCg+QgDhHAigJQAegIAJAYIAUA0QAMAQA4CAQA9CEAZAnQAdAugZAuQgNAWgSAOQgtgXg+hug");
	this.shape_9.setTransform(-6.4,2,0.397,0.397);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#654F26").s().p("AjoBrQg0gHgKgFQgVgJALgaQALgbEDhIQD5hHAjAEQAgAEATAXQATAXgbANQgsAVjXA/QjXBCguAAIgFAAg");
	this.shape_10.setTransform(2.1,-12,0.397,0.397);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.3,-16.2,28.7,32.6);


(lib.Rback = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#654F26").s().p("AgQgPQAggNAtAFIh5AwQAJgbAjgNg");
	this.shape.setTransform(69,23.1,0.397,0.397);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#654F26").s().p("AAAgDQAvgEAmAEIipAJQA4gGAcgDg");
	this.shape_1.setTransform(63.2,20,0.397,0.397);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#654F26").s().p("AgGgLQAlgEAkAPIiFAMQAWgTAmgEg");
	this.shape_2.setTransform(54.9,11.1,0.397,0.397);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#654F26").s().p("AgGgLQAlgFAkAQIiFANQAWgUAmgEg");
	this.shape_3.setTransform(58.4,16.4,0.397,0.397);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#654F26").s().p("AAsgVIhXArQAbgiA8gJg");
	this.shape_4.setTransform(49.5,6.7,0.397,0.397);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#654F26").s().p("AgPgfIAfA/QgfgeAAghg");
	this.shape_5.setTransform(32.8,15.4,0.397,0.397);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#654F26").s().p("AgBABQAAgIADgWIAAA7QgEgMABgRg");
	this.shape_6.setTransform(36.1,11.6,0.397,0.397);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#654F26").s().p("AAJguIgCBeQgfgwAhgug");
	this.shape_7.setTransform(40.1,7.9,0.397,0.397);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#654F26").s().p("AgMAGQADgdAXgtIgBCJQgdgXAEgog");
	this.shape_8.setTransform(43.6,5.2,0.397,0.397);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#654F26").s().p("Ak5BHQgPgGAdgXQAdgYBAggIAxgYQBKgjCOADQBHABA5AJIBWAKQBNASg0AkQgyAkhogeQhpglgagCQgZgChHA2QhCAzgRgHQgSgIAngoQARgSACgCQAEgIgTAFQgaAFhJApQg2AdgPAAIgEAAg");
	this.shape_9.setTransform(12.7,20.9,0.397,0.397);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#654F26").s().p("AkuD2IAHgcQAWghByh1QBzh1BOhIQA2gwBdgvQBfgvAXAMQAVALhbBEQhBAxg8AkQgNAIiNCPQiNCQg0AcQghASgOAAQgLAAgBgIg");
	this.shape_10.setTransform(35.4,10.1,0.397,0.397);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#654F26").s().p("AFJEpQgzgZk1jkQk9jngVgiQgbgwgBgKQgBgWAvgCQAugCFWEBQFND3AUAiQARAdgUAaQgNAQgSAAQgMAAgPgHg");
	this.shape_11.setTransform(62.9,12.7,0.397,0.397);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78.7,24.8);


(lib.Lmid = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#654F26").s().p("Ag3AGQAdgWAcACQAhABAVAcg");
	this.shape.setTransform(-17,11.8,0.397,0.397);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#654F26").s().p("AgBgFQATgIAugNIh/A1QAZgUAlgMg");
	this.shape_1.setTransform(-14.3,6.3,0.397,0.397);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#654F26").s().p("AgDgTQAbgJAbAQIhmAkQASggAegLg");
	this.shape_2.setTransform(-12.6,0.3,0.397,0.397);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#654F26").s().p("AgqgEQAagHARADQAWAEAVAOg");
	this.shape_3.setTransform(-11.7,-6.9,0.397,0.397);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#654F26").s().p("AgShUQAeBKAHBfg");
	this.shape_4.setTransform(4.9,-2.9,0.397,0.397);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#654F26").s().p("AgRhFQARAuAEAXQALAlADAhg");
	this.shape_5.setTransform(0.5,-5.9,0.397,0.397);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#654F26").s().p("AgbhCQAwAqAGBcg");
	this.shape_6.setTransform(-4,-7.1,0.397,0.397);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#654F26").s().p("AgcioQAiBZAOBKQARBegRBQg");
	this.shape_7.setTransform(-9.2,-6.4,0.397,0.397);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#654F26").s().p("AidB1IBFh7QBPh8AvAFIAhAFQArAJAYATQAYASgEAVQgDAQgrgLQgzgPgPAHQgKAFAJAGIAdALQAzAVgFAbQgEAag9gZQg/gYgLAUQgdA5gYAbQgcAfgcAAQgPAAgOgJg");
	this.shape_8.setTransform(18.1,-12.4,0.397,0.397);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#654F26").s().p("ACTBHQgugNiegeQiagcgSgFIg+gIQgegEAPgYQAQgbBagHQBPgGBTAMQBfAMBoAcQCBAhAWAfQgTAQgfAMQglAPgiAAQgXAAgVgHg");
	this.shape_9.setTransform(-0.3,-10.5,0.397,0.397);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#654F26").s().p("Ah5GGQgbgWgDgoQgDgsBslFQBtlPAjgQQAigQALAZQAFANAEBCQAEAuhpEqQhfEWgfA8QgKAVgPAAQgJAAgMgJg");
	this.shape_10.setTransform(-18.3,1.6,0.397,0.397);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.3,-17.4,48.8,34.8);


(lib.Lfront = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#654F26").s().p("AgngQQAagKAUAKQAXAKALAcg");
	this.shape.setTransform(-13.2,8.6,0.397,0.397);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#654F26").s().p("AAAgDQAQAAAlADIhpAEQAXgHAdAAg");
	this.shape_1.setTransform(-10.1,4.9,0.397,0.397);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#654F26").s().p("AgpAKQAUgTAWAAQAYABARASg");
	this.shape_2.setTransform(-7.7,0.6,0.397,0.397);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#654F26").s().p("AgegRQAnADAVAgg");
	this.shape_3.setTransform(-5.5,-4.3,0.397,0.397);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#654F26").s().p("AAAhFQAKA/gNBMg");
	this.shape_4.setTransform(6,3.4,0.397,0.397);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#654F26").s().p("AAAg6QABAnAAATQABAhgDAag");
	this.shape_5.setTransform(3.3,-0.1,0.397,0.397);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#654F26").s().p("AgIg6QAaAvgOBGg");
	this.shape_6.setTransform(0.3,-2.3,0.397,0.397);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#654F26").s().p("AAMiHQAUCtgwBig");
	this.shape_7.setTransform(-3.8,-3.3,0.397,0.397);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#654F26").s().p("AhSA9QAVhDAtgtIAXgXQAhgdAYgIQAVgJAEAOQACAMghAbQgpAggJAQQgGALAHABQADABARgDQAlgHAFAQQAFARgyAVQgzAXgBAUQgBAOACAEQgIgCgaANQgKAFgHAAQgVAAAPg2g");
	this.shape_8.setTransform(15.6,-2.7,0.397,0.397);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#654F26").s().p("ABaCXQgegihshjQhphdgLgPIgrgjQgVgQARgaQATgeBDAYQA6AVA7AuQBCA1BEBJQBVBeAIAyQgSAOgZAFQgKACgJAAQgmAAgdgig");
	this.shape_9.setTransform(3.8,-3.8,0.397,0.397);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#654F26").s().p("AinEFQgQgZAGgfQAHgjCPjYQCSjhAdgCQAdgDACAXQACALgKA0QgGAkiJDFQh8C5giAlQgKAKgIAAQgKAAgJgOg");
	this.shape_10.setTransform(-12,0.3,0.397,0.397);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.1,-11.1,38.3,22.4);


(lib.Lback = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#654F26").s().p("AgKgUQAVgeAfABIhTBjQAJgsAWgag");
	this.shape.setTransform(-2.9,28.2,0.397,0.397);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#654F26").s().p("AgEAAQAIgaAag1Ig8CfQAIgmASgqg");
	this.shape_1.setTransform(-4.1,21.7,0.397,0.397);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#654F26").s().p("AgNgLQANgjAbgPIgzB7QgGgnARgig");
	this.shape_2.setTransform(-9.9,11.2,0.397,0.397);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#654F26").s().p("AgOgLQAOgjAbgPIgzB7QgGgnAQgig");
	this.shape_3.setTransform(-5.9,16.1,0.397,0.397);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#654F26").s().p("AgDgIQAPgSAWgIIhDBGQAOgdAQgPg");
	this.shape_4.setTransform(-12.7,4.6,0.397,0.397);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#654F26").s().p("AgZgYQAgAKATAng");
	this.shape_5.setTransform(0.6,-8.6,0.397,0.397);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#654F26").s().p("AgbgIQAWACAIADQAQADAJAJg");
	this.shape_6.setTransform(-4,-6.5,0.397,0.397);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#654F26").s().p("AgsgJQA0gUAmAtg");
	this.shape_7.setTransform(-8.8,-3.7,0.397,0.397);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#654F26").s().p("AhAgQQBsgYAVA/g");
	this.shape_8.setTransform(-12.5,-1,0.397,0.397);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#654F26").s().p("AiRDvIAQhWQAJg5AUhFQAoiHA4g8IAkgoQAzgyAggVQAfgUABAPQABANgzAwQg9A6gOAWQgLARAJgCQAEAAAXgLQAxgaADAUQACAShGAwQhHAzgHAaQgGAYAGBwQgCBsgyAlQgRAMgLAAQgWAAAEg0g");
	this.shape_9.setTransform(12.5,-25.9,0.397,0.397);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#654F26").s().p("AlKDSQgEgaBJhMQBIhLA+gjQBdg2CShLQCShJAmgLIAdABQAUAKgvAsQgqApi0BbQizBbgMAKQg1AvhBAvQhFAxgUAAQgHAAgBgGg");
	this.shape_10.setTransform(-5.2,-7.8,0.397,0.397);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#654F26").s().p("ABqG9QgbgdiHmJQiOmTAQgsQAQgrAUAHQAKAEAlAoQAbAeB9F1QB8FqAHA5QAGAoggAMQgJAEgJAAQgTAAgPgRg");
	this.shape_11.setTransform(-11,19.2,0.397,0.397);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.3,-37.5,36.7,75);


(lib.head_antenaR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#654F26").s().p("Ao2SrQgJgHAWg3QAbg9AHgRUAANgAhAP6giIQAQgkAYADQAYAEgKAsQgJAooBQwQnlP3guBbIgtBYQgUAlgKAAIgEgBg");
	this.shape.setTransform(0,0,0.397,0.397);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.6,-47.4,45.2,95);


(lib.head_antenaL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#654F26").s().p("AVSDbIg1gGUgAXgABgpkgF0QgZgDgCgZQgBgZAcgGQAagFUnDFQUMDAAzALIA8ANQAeAIgDAMQgCALgbAAIgKgBg");
	this.shape.setTransform(-53.2,-7,0.397,0.397,0,0,0,-134.1,-17.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.6,-8.7,111.2,17.5);


(lib.Path_36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("ABwL/IjajzQiQiphkh+Qhlh/hAhfQgigxgkhPQgnhagVgsQg5iBg2h+QgfhLgQgqIgKgdQgEgHACgPQACgQAIgGQAMgMAQgJIATgLQAMgHgCgUIgHgoQgDgaALgXQAFgMAQgTQARgTATgOIAOgKIAOgJQATgMAZgJQAkgNAngCQAiABASAJQAOAFAMAVQAFAIAAgBQACADALgGIAagKQApgNAfAYIArAsQAWAVAbAOQAvAkA7A3IBmBjQCpCrAjAmQBxB6A3BhQAvBLBSByQBHBfAQAeQBfCoA8B5QA7B2BACXQg5hkhbibIikkbQgPgdhGheQhShygvhLQg4hhhth2QgSgTi4i8IhnhjQg5g2grggQgpgUg3g+QgIgMgZAKQglAMgbgBQgTgGgKgXQgCgEgGgCQgJgFgYAAQggAAgfAMQgUAHgRALIgMAIIgMAIQgQAMgPAQQgXAaADAVIAIAtQADAPgHAQQgGATgPAKQgIAGgRAJQgNAHgDAEQgDgBADAKIAJAZQAPAoAfBLQA2B+A5CBQAVArAmBaQAkBOAgAwQA2BOBtCLQB0CTB+CSQBIBPCKCrQBwCIBVBTQhvhXhrhxg");
	this.shape.setTransform(81.7,96.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#91360D","#943E12","#9B551F","#A67933","#AA863B","rgba(196,168,115,0)"],[0,0.157,0.404,0.71,0.808,1],-70.7,-89.3,60.9,79.1).s().p("ACQMNQiDiWgjgnQhkhuipjRQjZkMgthdQg7h9hbjTQhnjuAAgTQAAgQAYgOQAegQAFgIQALgOgBgQIgJgwQgFgeAhgkQAdgfAsgXQAqgWAwgBQA0gCALAZQAKAYAZgHIA1gRQAVgDAbAfQAkAqAhARQBEAjGOGgQATAUB4CzQB4CzATASQAbAcCSEKQCNEBAkBSInnFEQg0goh8iJg");
	this.shape_1.setTransform(82.7,97.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,163.5,193.6);


(lib.Path_34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7C4510").s().p("AluFcQhVhMgIgUQgRgtgCgcQgHg+AnggIEbjkQEGjWAsgZQBBgmASgFQAjgKAjAZQAlAbBCBOQBBBNADAUQABAOALAlQAGAjgSAQQgSAQgQAhIggA+QgUAjg/BUQg9BTgPAMIgaAgQgRAVgXAGQgaAIiLAxQiCAugZAKIgyAXQgjAPgXAAQgaAAhYhRg");
	this.shape.setTransform(48.1,42.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,96.2,85.9);


(lib.Path_33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#534741").ss(2,0,0,4).p("AB2qzQhBgFgRCjQgIBUgBB4QgEAbgIBsQgKBngXAkQgWAehagEQhrgLgrAAQgWAAiRgXQhygRgqARQgxAUgVBAQgSA7AQAdQANAWCACYQB4CRAqAuQAlAoB+BAQB+A/BTAUQAUAGAiACQAlADAKACQBJANAZADQBOAJAGgUQAGgWCHh3QCDhzAhgSQAegQAmijQAAgBAOgtQANguAAgZQAAgnhkjlQhrj2g7hJQinjLiEgKg");
	this.shape.setTransform(69.3,70.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#654F26").s().p("ADHKyQgZgDhJgNQgKgCglgDQgigCgUgGQhTgUh+g/Qh+hAglgoQgqguh4iRQiAiYgNgWQgQgdASg7QAVhAAxgUQAqgRByARQCRAXAWAAQArAABrALQBaAEAWgeQAXgkAKhnQAIhsAEgbQABh4AIhUQARijBBAFQCEAKCnDLQA7BJBrD2QBkDlAAAnQAAAZgNAuIgOAuQgmCjgeAQQghASiDBzQiHB3gGAWQgEANgnAAQgRAAgYgCg");
	this.shape_1.setTransform(69.3,70.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,0,138.8,140.6);


(lib.Path_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7C4510").s().p("ABNHkQghgKgKgKIgEgIQgMAIgRAIQghAPgXgEQgXgDgXgcQgZgkgSgTQgVgWgxgBQhkgCgIgBQg1gHgvg9QgshFgNgTQgTgaAPhKQAOhFAZgoQARgZCig1QCng2AJgLQAogqArhfQAmhXAVgQIBYhKQBEgvArARQA0AUBGBMQBHBNALAwQAHAggXBUQgVBKAOAOQAbAbAPAYQAVAfgIARQgNAbgqAgIAWAEQAXAGAIARQAJATgbA7QgYA2gVAYQgPAQhJA8IhTBFQgSARg4AWQgvARgfAAQgNAAgKgCg");
	this.shape.setTransform(49.1,48.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.2,97.4);


(lib.Path_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#534741").ss(2,0,0,4).p("AFuoAQB3CUBUDSQAGAQABAgQAAAMAnCtQAkCwgLAfQgtB9h7BrQiXCCimgQQgzgEisgyQifgugZgMQhKgjhEg8Qh9h+hIh3QiPjrEHAlQAygBBEADQCKAGBhAUQAYAFAygGQAzgHATgLQAMgIAEhCQAEhRAGgWQAQg2AShZQAXhyAFgWQAiiRA3gUQA0gUBvCKg");
	this.shape.setTransform(65.2,64.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#654F26").s().p("ACbJ4QgzgEisgyQifgugZgMQhKgjhEg8Qh9h+hIh3QiPjrEHAlQAygBBEADQCKAGBhAUQAYAFAygGQAzgHATgLQAMgIAEhCQAEhRAGgWQAQg2AShZIAciIQAiiRA3gUQA0gUBvCKQB3CUBUDSQAGAQABAgQAAAMAnCtQAkCwgLAfQgtB9h7BrQiHB0iTAAQgSAAgRgCg");
	this.shape_1.setTransform(65.2,64.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,0,131.6,129.2);


(lib.butt_antena = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.NewPatternSwatch7, null, new cjs.Matrix2D(0.872,0,0,0.872,114.4,81.3)).s().p("AQtK6QhBgN/pz+Qg6glgXgRQgogfAMgPQANgPA1AaQAdAOAuAbQATAKQBJoIQeJ3QAjAUgOAkQgMAcgfAAQgIAAgKgCg");
	this.shape.setTransform(-6.3,27.9,0.397,0.397);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.NewPatternSwatch7, null, new cjs.Matrix2D(0.872,0,0,0.872,115.9,81.6)).s().p("AgTUDUgAXgA+gAbglbQAAhFACgdQAEgyAUADQAUACAHA7QADAgACA1QADAVAlSrIApTNQACAogmAIIgKABQgcAAgPgmg");
	this.shape_1.setTransform(48.5,-3.3,0.397,0.397);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.2,-55.7,102.5,111.4);


(lib.neck = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#202020").s().p("AAAAAIAAAAIAAAAg");
	this.shape.setTransform(17.2,13.6,0.397,0.397);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#202020").s().p("AB1CYQgFABgCgFQgEgFgDgBQABgBAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAQgKAAAAgQIABAAIgCgBIgDgBIACgBIgCAAIgBAAIACgEIgCABQgBAAgBABQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAgBAAIACgBQgEAAgDgDIgFgFIACgCQAAAAgBAAQgBABAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAAAAAAAIAAgBQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIABgCQAAAAgBABQAAAAAAAAQgBAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAIgBABQgBAAABgBIgBgBIAAAAIgBgCIgDABIADgBIACgCQgFgCgJgLIACgDQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAIABgBQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIACgCIgCAAIgCgBIACAAQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAIgCgCIADAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAABAAAAQgBAAAAgBQAAAAAAAAIACgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgCgCIABAAIgFgEQABgBABgBQABAAAAgBQAAAAAAAAQAAgBAAAAIgEABQAAgBAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQgBgEgBAAIACgCIACgBIABgCQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQAAAAAAAAIgIABQABAAAAgBQABAAAAAAQAAAAABgBQAAAAABgBIgHACQAAAAAAgBQABAAAAAAQAAgBAAAAQAAAAAAAAIgCABIgBgBQgBAAAAgBQAAAAABAAQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAgBABAAIgDgBIABAAQgBgBAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgDACIABgBQABAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAIACgBQgDAAgDgBIACgBQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIgBABQAAgBABAAQAAgBAAAAQAAAAAAAAQAAAAgBAAIgCgBIABAAIgCgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIgDABIgBgBIACgBIAAAAIgBgBIAAgBIgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIACgBIgCgBIgBAAIgCABIgBgBQAAgBAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAIACgCIgEACIABgBQgBAAAAAAQAAAAAAAAQgBABAAgBQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAABQgCgDACgDQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAgBAAAAIACAAQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIABgDQgCAAgDABQABgBAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQABAAABgBQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAIgCADQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAAAAAQABgBAAAAIgBgBIgCABQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQgBgCABgDIgCAAIACgBQABgBgBAAQAAAAAAAAQAAAAgBAAQgBAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAgBAAAAIABgBIgDAAQgBgBAFgDIgDAAIACgDIgCABIgBgBIABAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBAAAAAAIgBADIgDAAQABgBAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAIgCABQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAQAAABABAAIAAgCQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAAAAAIACgBIAAgCIgBABIAAAAIgBAAQgBgBAAAAQAAAAAAAAQgBAAAAAAQAAAAAAABIAAgDIAAAAQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAgBAAIgDAAQAHgGgDABIgDABIgCACIgCgDQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBIgCABQgGgDACgFIADgCQgBABAAgBIgBAAQAAAAgBABQAAAAAAABQgBAAAAAAQAAABAAAAQgEgCACgDIgDABIADgCQAAAAgBAAQAAgBAAAAQAAAAAAAAQgBAAAAAAIgCABIACgBIgCABQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAAAAAAAIABgCQgBAAAAABQgBAAgBAAQAAgBAAAAQgBAAABgBIABgCQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABAAAAIABgFQgIABgEgHIACAAQAAgBAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgCABIAEgDQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgDAAIgBABIAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAABIADgDIgBAAIAEgCIAFgDIgBAAQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAIgEABIgCADIgEABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAIACgBIABAAQABgBAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIgCgBIgCACIgBAAQAAAAABAAQAAgBAAAAQAAAAABgBQAAAAgBAAIgDACQAAAAgBAAQAAABAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBAAAAABQAGgDAAgCIgDABIgEADQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAIgCgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAIgDABIACgDIgCAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAIgBAAIgCABQgBABABAAIAAABQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIgDABIACgBIgDAAIACgCIgDABQAAAAAAAAQAAAAAAAAQAAAAAAgBQABAAAAAAIABgCIADAAQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIgGADQABgBAAAAQAAAAAAAAQAAAAAAAAQAAgBgBABIACgBQABAAABgBQAAAAABgBQAAAAAAgBQAAAAAAgBIgEABIAAAAIgBABIAAgBIAAACIAAgBIgCAAIADgFIAEgCIgBAAQADgBABgDQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBACgEABIgEADQgBgBAAAAQAAAAABgBQAAAAABgBQAAgBABAAQACgDgDACIgCABIgBABIgCAAQAAAAAAAAQAAABgBAAQAAAAAAgBQAAAAAAAAIADgCIADgCQgBAAAAAAQAAABAAAAQAAAAAAAAQAAAAABAAQABgBAAAAQABgBAAAAQABgBAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQAAAAAAABIgBABIgBABIAAgCIgDABQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBABIgCAAIACgBQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIABgDQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBIABABQABgBABgBQAAgBAAAAQABgBAAAAQAAAAAAAAIABgBQgBgBAFgEIgCAAIgDADQgCgDgEACQABgBAAgBQAAgBABAAQAAAAABAAQAAAAABAAQgCgBgCgEQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIgBAAIACgCQAAAAAAAAQgBgBAAAAQAAAAABAAQAAAAAAAAIABgCIgGgBQABAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBAAIgCgCIADgEQgBAAAAABQAAAAgBAAQAAAAAAAAQAAAAAAgBIAAAAIgBgBQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIABgBIAAAAIACgCQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAgBAAIgBAAIgBACQgBAAAAgBQgBAAAAAAQAAAAAAAAQgBgBAAAAIgBgCIACgBIgCAAIACgCIAAgBIAEAAQAAAAAAAAQAAABgBAAQAAAAgBABQgBAAAAAAIAAACQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIgCgBIAFgCIAAgBIACABIgBACQAAgBABAAQAAAAABAAQAAAAAAAAQABABAAABQgBAAAAAAQAAAAAAABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAIgGACIAAACQAFgCABAAIgBABIACAAQABgBAAAAQAAAAABAAQAAAAAAABQAAAAABAAIADAHIgCABQABgBAAAAQABAAAAAAQABAAAAAAQAAABAAAAIADACQAAAAAAAAQAAABABAAQAAAAAAABQABAAABABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAIAFACADIgDACQAAgBABAAQAAAAAAAAQAAABgBAAQAAAAgBABIADgBIACAAQAAADAGAAIgCACQABgBABAAQAAAAABABQAAAAABAAQAAABAAAAIABAEIgCACIAGAAQACACAAADQADABADADIAGAFIgBACQAEAAADAFQADAEABABIgDACQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAABAAIADgBIABACQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAABAAQAAAAAAABQABAAAAAAQABAAABAAQAAACADACIgCACIACACQAAAAABAAQAAAAAAgBQABAAAAAAQABgBAAAAQAAAAAAABQAAAAABABQAAAAAAABQABAAABABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABIACgBIABADIADADIgCABQAAAAABAAQAAAAAAAAQAAAAABAAQAAgBABAAQACABABAEIACAGIAHAGIAGAHIgBABQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABABAAQAAABAAAAQABAAAAAAQABAAAAAAIgBACQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAABQABAAAAABQAAAAABAAQAAABAAAAQAAAAAAAAIAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABABAAIABADIgCABQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAABgBAAIACgBQABADAFADIAHAEQAAACgDACQAAAAAAAAQgBABABAAQAAAAAAAAQAAAAABAAIABAAIgBACQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIAEgCIgBAEQAAAAAAAAQAAAAAAABQAAAAABAAQAAAAABAAIgCABIAFABQACABADgBIAaAbIAMAOQAHAJACAGIAAAEQAAAAAAABQAAAAABAAQAAAAAAABQABAAAAAAIgBABQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIADAAIAIALIgCABIACAAIAAAAQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABAAQAFAEAFAKQAGAMADADQAAACAGAFQAEASAIAFQgGADgDAAIgCAAgAgwggIABgBIAAABgAh1hvQAAgBAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAIABgBQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIABAAIgBABIgDACIgEgBgAh4h3QAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIABgBIABgBQAAADgEABg");
	this.shape_1.setTransform(21.3,17.3,0.397,0.397);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#202020").s().p("AAAAAIAAAAIAAAAg");
	this.shape_2.setTransform(15.1,16.1,0.397,0.397);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#202020").s().p("AAAAAIAAAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_3.setTransform(14.9,16,0.397,0.397);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#202020").s().p("ABzCMQgFABgCgEQgDgFgDAAQABgBAAgBQAAAAABAAQAAgBAAAAQAAAAgBAAQgJAAgBgPIACgBIgCAAQgBAAAAAAQgBgBAAAAQAAAAAAAAQgBAAAAAAIACgBIgEgBIACgDIgCABQgBAAgBABQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBgBgBQAAAAAAgBQgBAAAAAAQAAAAgBAAIACgBQgEgBgDgCIgGgFIADgCQgCACgDgCQAAAAABAAQAAgBgBAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAgBIgBAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIABgCQAAAAgBABQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAABIgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAAAIAAAAIgBgBIgCAAIACgBIACgBQgGgDgHgJIABgDQAAgBgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIAAgCIgBAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIADgCIgDAAIgCAAIACgBQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAAAIgBgBIACgBQAAgBAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQAAAAAAAAIACgBQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIgDgBIABgBQgCgDgCAAIACgCQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIgDABQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAgBABQAAgBAAgBQgBgBAAAAQAAgBgBAAQAAAAAAAAIAEgDIABgCQAAAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAIgCgBIgIABIADgDIgHADQABgBAAAAQABgBAAAAQAAAAAAAAQAAAAgBAAIgCABIgBgBQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAIgCgBQAAgBAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAABIABgBQABAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIACgBIgHgBIACAAQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIgBABQAAgBAAAAQABgBAAAAQAAAAAAAAQgBAAAAAAIgBgBIAAAAQgDAAAAgFIgCABIgCAAIACgBIAAgCQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAAAgBQAAAAAAAAIgCAAIgBAAIgCABIgBgBIABgCIADgCIgFACIABgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQgCgDACgCQgBAAAAAAQgBAAgBAAQAAAAAAgBQgBAAAAAAIACAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIABgEIgEACQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIgDACQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIgBgBIgCABQAAgBAAAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQgCgCACgDIgCABQgBABACgBIgCABQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQAAgBgBAAQAAAAAAABQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIgDABIAEgEIgDgBIACgCIgBABIgBgBIAAAAQABAAAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAIgBADIgCAAIABgBIgBgCIgCABQAAAAAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAIAAABQAAABABgBQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBABgBAAQAAABgBAAQAAAAAAAAQAAAAAAgBIACgBIAAgCIgBABIgCAAIgCABIAAgDQADgDgFACQAAgBAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAGgGgCABIgDABIgCACIgCgCQgBgBAAAAQAAAAgBgBQAAAAAAAAQAAgBABAAIgCABQgGgDACgFIADgCIAAAAIgCAAIgCADQgEgBABgDIgCABQABgBABAAQABgBAAgBQAAAAgBAAQAAAAgBAAIgBABIABgCQgBABgBAAQAAAAgBAAQAAABAAgBQAAAAAAAAIACgCQgCAAAAABQgBAAgBAAQAAgBgBAAQAAAAAAgBIACgCQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAABAAAAIABgFQgHACgFgHQgBAAABAAIADgDQAAgBAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIgDABIgBAAIAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIAEgCIgCAAIAEgDQADgBACgCIgBAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQgDAAgCAEIgEABQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBAAAAAAIgBAAQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAAAAAIgEACQAAAAAAAAQgBABAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAAAABQAFgDAAgCIgDABIgDADQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAIgCAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAAAIgCABIABgCQgEAAADgCIgBgBIgCACIABAAIgBACQAAAAABgBQAAAAAAAAQAAAAgBAAQAAAAAAAAIgCAAIABgBIgDAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAIABgCIACgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIgGAEQABgBAAAAQAAAAAAAAQAAgBAAAAQgBAAAAABIACgBIABgCIABgCIgDABIgBAAIgCABIACgFIAEgCIgBAAQADgBABgCIgCgBIgEAEIgFACQAAAAAAAAQAAAAAAgBQABAAAAgBQAAgBABAAQADgDgEABIgCADIgCAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABgBQAAAAAAAAIADgCIAAABIAAAAQABgBABgBQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAABIgBABQAAgBAAAAQgBAAAAAAQAAAAgBAAQAAAAgBABQAAAAAAAAQAAAAAAABQAAAAgBABQgBAAgBABIgBAAIABgBQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAgBQAAAAAAAAIACgCQAAgBAAAAQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAABAAQAAAAAAgBQAAAAABAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAIABAAQAEgFgEABIgCACIgFgBQABAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIACgBQgBAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAABAAQAAABAAAAQABAAAAgBQABAAAAAAIACgBQAAAAABABQAAAAAAAAQAAAAABAAQAAgBAAAAIAEgFIgBAAIgEADQgBgCgEABIACgCIABAAQgDgDAAgCQAAABgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgBAAIADgDQgBABAAgBIABgCIgFgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBgBAAAAIgDgBIAEgFQgBABAAAAQgBABAAAAQAAAAgBAAQAAAAAAgBIABAAIgBgCQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAIADgBIgBAAIADgCQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAIgCAAIgBACQgBAAAAgBQAAAAgBAAQAAAAAAAAQAAgBAAAAIgBgBIABgCIgBAAIABgBIAAgBIAFgBQAAABgEACIAAABIACAAIgBAAIAEgDIAAAAQAAgBAAAAQABAAAAAAQAAAAABABQAAAAAAAAIgCACQABgBABAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAAAAAQABABAAAAIACAAQgEADgCAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAABABQAEgDACAAIgCACIADgBQAAgBAAAAQABAAAAAAQAAABAAAAQABAAAAAAIADAGIgCACQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABIACABQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAAAgBABIAKAIIgDABQAAgBAAAAQABAAAAABQAAAAAAAAQAAAAAAAAIABAAIACAAQAAADAGAAIgBABQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAIAAAEIgBACIAGAAQACABAAAEQADAAADADIAGAFIgCABQAEABADAEQADAEACAAIgDADQAAAEAEgFIACACQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAABAAQAAAAABAAQABAAAAAAQABACADACIgCACIABABQAAAAABAAQAAAAAAAAQABAAAAgBQABAAAAgBQAAABAAAAQABABAAAAQAAAAABABQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAABIACgBIABADQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIgCACIACgBQADAAABAEIACAFIAHAGIAGAHIgBAAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAABQAAAAAAABQABAAAAAAQAAAAABAAQAAAAABAAIgBACQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAABQAAAAABAAQAAABAAAAQAAAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAIgCABQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAABgBAAIACgBQABADAEADIAHADQAAAAAAABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQAAAAAAAAQAAAAABABQAAAAABAAQgBABABgBQAAAAABAAQAAAAAAAAQAAAAgBABQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAAAAAQABAAAAAAIADgBIgBADQAAAAAAABQABAAAAAAQAAAAAAAAQABABAAAAIgBABQACgBADABQAAAAABAAQAAABABAAQAAAAABgBQABAAAAAAIAaAYIALANQAHAIADAGIAAAFIACABIgBABQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIACAAQADAEAGAFIgCABIgBABIADgBIgBABQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQAFAEAFAKQAGALADADQAAADAGADQAEASAIAEQgFADgEAAIgCAAgAgng+IAAAAIAAAAgAgng+IAAAAgAh2hsQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIACgBQgBADgDACg");
	this.shape_4.setTransform(19.1,19.5,0.397,0.397);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#202020").s().p("AAAAAIAAAAIAAAAg");
	this.shape_5.setTransform(27.8,22.2,0.397,0.397);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#202020").s().p("Ag6EWQABgBAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAIgBgDQAAABgBAAQAAAAAAAAQgBAAAAAAQAAgBgBAAIADAEQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAIgCgDIgBABIAAACQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBABABAAQAAAAAAABIABADIgEgBIgDgBQAAgGACADIgCgEIgBgBIAAAAQADAEABgBIgCgFQgBAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIABAAIAAACQAAABAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAABQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAIAAgEQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAABAAIABgBQAAAAAAAAQAAABAAAAQAAAAAAABQABAAAAAAIADABQAAgBAAAAQgBAAAAgBQAAAAABAAQAAgBAAAAIgCgCIADgGQACgDADABIAAgDQABABAEgFQABABAAAAQAAAAABABQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBgBgBQAAAAAAgBQABAAAAAAIACABQABAAAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIACAAIgBgDIABAAQAAAAAAgBQABAAgBAAQAAgBAAAAQAAAAgBAAIgDAAIABgBQgDgBACgFIACADIACACQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIgCgBIACgBIAAABQABAAABAAQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAIgCgBQAAAAABABQAAAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAAAAAAAQABAAgBgBQAAgBAAAAQAAgBAAgBIgDgBIAAgBIgEAAQAEgBADACIAAgCIAAgCQAAAAABABQAAAAAAAAQAAAAABAAQAAAAAAAAIAAAFQABAAAAgBQABAAAAAAQABAAAAABQABAAAAABQABAAABABQAAAAAAABQABAAAAAAQAAABAAAAQABAAAAAAQABAAABAAQAAAAABgBQAAAAAAAAIgDgEIAEACQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIgBgCQgCABgDgDIgCgEQAAAAABABQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAABAAIABgCQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAIABAAIgCgBIAAgCIACAAIgCgEIADgCQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAABIgBgCIADABQABAAAAAAQABABAAAAQABAAAAgBQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQABAAABAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAgBQABAAAAAAQAAAAABABQABAAAAABIACgEQAAgDgDgCIADACIAAgBIABgBQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAABAAQABAAAAABQACgEgFAAQAEAAAAgEIgBgFIAEABQgBgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQABgBABAAQAAAAABgBQAAAAAAAAQAAgBAAAAIABABIABgCIgDgBIgDgBQACgDAEAAQAEgBACACIgBgFIgBABQACgCgCgEQgCgEABgDQAAgBAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAABgBgBQAAAAAAAAQAAAAgBAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAABQABAAAAAAQABABAAAAQAAAAABAAQAAABABAAQAAgBABAAQAAAAABABQAAAAAAAAQABAAAAABQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAIgBgCQAAABAFACIADgDQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAQABAAgBAAQAAgBAAAAIAEgBIgBgDQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAgBAAQAAABAAAAQAAAAAAAAQABABAAAAIADgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQABAAAAAAIACABIACgEIgBgCIgCAAIACgEIAAgBIABABQABAAAAgBQABAAAAAAQABAAAAAAQAAgBAAAAIABACIgBAAIADABIgDgGQgCgEACgDQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQABgBgBAAQAAAAAAgBQAAAAgBAAIABAAIABgEIABACQAAAAgBABQAAAAAAAAQAAAAAAAAQABAAAAABQABgEADgBQAAABAAABQgBAAABABQAAAAAAABQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBIAAgEIgCgBIACgDIACgEIgDgCQAAAAgBAAQAAAAgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAIABgDIAHABQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABAAIACgBQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQABgDAFADQADACgCgEIgDgBQABgBAAAAQABgBAAAAQABgBgBAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAIABABIAAAAIABACQAEACADgFIAAABQAAAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAIgBgDQAAAAABAAQAAABABAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAgBgBQAAAAAAAAIgDgBIABgCIgCgBQAAAAAAAAQABAAAAgBQAAAAAAgBQAAgBgBgBIAHAJQgBAAAAAAQgBAAAAABQABAAAAAAQAAABABABQABgBAAAAQAAAAAAgBQABgBgBAAQAAgBAAgBQAAgBAAAAQAAgBAAgBQAAAAAAAAQABAAAAAAQgDgCgCABIgBgEIABABIADgDQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABABQAAgBABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAAgDIABADQABAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIgCgBIgCAAIgBgCQAAgBAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAIADgFIABADQABgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAAgCQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIgCgCIACAAIADABQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgCgEQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABgBIADgDIAAgCIACgCQgBAAAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAQABAAAAABQAAAAAAAAQgBAAAAAAQAAAAgBAAIAAgDIABAAQACgBgCgGQgCgHADgCIACABIABABQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIACgEIACACIACAAIgCgCIACAAIgBAAIAFABIgEgEQABgCgCgGIgFgJQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQABAAgBAAQAAAAAAgBQAAAAgBAAIACgBQgCgFABgDIgDACQABgBAAgBQABAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAgBgBAAIgCgCIADABIACAAQAAgBAAgBQAAAAAAAAQgBgBAAAAQgBAAgBAAIACAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAIgBABIAAABQgCgBgBgFQgBgEgCgCIABAAIgCgCQABAAAAAAQAAAAABAAQAAAAAAgBQABAAAAgBIABgBIgBgBQgBAAAAAAQgBAAAAABQAAAAgBAAQAAABgBABQAAAAAAAAQgBAAAAAAQgBABAAgBQgBAAAAAAQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQgCgDgEgDQgGgDgBgCIAEgFIgCAAIAAAAQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAABIABAAIAAACQAAAAAAgBQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIABgBIgBgBIgDACQgDgHgLgJQgEgHACgCQgBgCgIgFIgDgDQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAABgBIgEABIABgBIgBgBIAAgCIgCACQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBgBAAIgEgDIAAgBIgBAAIgBgBIABgCQgGgBgFgGQgGgIgDgCQAAgDgDgCQgEgCABgFQAAgBgBAAQAAAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQAAABAAAAQAAAAABAAIgRgMQgGgFgFAAQgDgBgJAAQgJAAgEgCIABACQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBIgBgCIgDAEIACACQgEAAgIACQgHADgFgCIAAACQgBABgGgBQgGgCgCAEIABgCQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAAAAAAAQgEADgIgBQgLgCgEABQABAAAAgBQAAAAAAAAQAAgBgBAAQAAgBAAAAIgDACQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIABgCQgBAAAAAAQAAAAgBABQAAAAAAAAQAAABAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAgBABIgCAAQAAABAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAQABAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAIgFADQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBABAAQgBgBAAAAQgBAAAAAAQAAAAgBAAQAAAAgBABQAAABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAgBIgCAEIgBgBQABgBAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIgDACQAAgBAAgBQAAgBgBAAQAAAAAAAAQgBgBAAABQAAAAgBAAQAAAAAAAAQABABAAAAQAAAAAAAAQABAAAAABQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIgDgBIAAAAIgBgCQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIABAAQgBgBAAABQgBAAAAAAQAAAAgBABQAAAAAAABIAAAFQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAIABAEQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAAAAAABIgBAAIABgBQgBgBgBgEIgCgEQgBgBABABQABAAAAAAQAAAAABAAQAAABAAgBQAAAAAAAAIgBgDIAAgEQADgMAUgQQAUgRAbgMQAkgSAxAIQAGAGACgDQgBADAGADQACgBAGACIAAABQABADAIgBIACAFQAGACACAAQASAQAHACQgBADADADIAEAEIgBACIAEgBQAAAAgBAAQAAAAAAAAQAAABAAAAQAAABAAAAIABADIACgBQAAAAAAAAQgBAAABAAQAAABAAAAQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAHABAHADIgCABQABAAABAAQAAAAAAABQABAAAAABQAAABgBABQgBADAEgBQAJAFAGANIADACIgBgFIADAFIgBAAQACADAMAIQACAFAIALQAHAKABAGIAFgCIgEAFQACACAEgDIgBAEQABgBAAAAQABAAAAAAQAAABABAAQAAABAAABQABAEAEgBQgBAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAABABAAQAAAAAAABQABAAAAAAQAAAAABABIgCABQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAABIADABIgBAEQAAAAAAABQAAAAAAABQAAAAAAAAQABABAAAAIgCAAQAAAAAAAAQAAAAAAABQABAAAAAAQAAABABAAIADACIABgBIACgBQgBABAAABQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAABQABAAAAAAQAAAAABAAQAAAAABAAQAAAAAAAAIABgCIAEAKQAAgBgBAAQAAAAAAAAQAAAAAAAAQAAAAAAABIgBACIAAAAIAAAAQADgBAEADIgDADIACAAIgBABIAEABQgDAGADAAIACgCIAAADQAAAAAAAAQAAABAAAAQABABAAAAQAAAAABAAIgDABQABAEAHAOIgBAAQAAACAGAGQAEAMgDAUIACACIgCAAQAAAHgFAIIgIAMIADAAQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAABQAAAAAAAAQAAAAgBAAQAAABgBgBQAAAAgBAAIgDAOQAAgBAAAAQgBAAAAAAQAAAAgBAAQAAABAAAAIgDACQABAAAAABQAAABAAAAQABABgBAAQAAAAAAABQgBAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABIgBgBIgBAEIgBAAQgDACABADIgCAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAABAAAAQABABABAFIgBAAQgBAAgBABQAAAAgBAAQAAABAAAAQAAABAAAAIgBgBIgBADIgCACIgCAEIgBgBQgDAIgDADIgBgBIABAGIgCgCIgBACIgBAAQABADgEABQgFACgBACIAAgBQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBABIgCACQADADAAADIgCgDIgBACIAAgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAIgBABQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABQAAgBgBAAQAAAAAAAAQAAABgBAAQAAAAAAABQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgBAHIgBgBQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBAAIAAgCQAAAAAAABQgBAAAAAAQAAABAAABQgBAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAIAAACIABABQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAABIgCADIgBgCQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBABIgBgCIgCADIgCAEIABAAQgDACgCAJIAAgCQAAgBAAAAQAAAAgBAAQAAgBAAAAQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIACADIgCgBQAAgBAAAAQAAAAAAAAQgBgBAAAAQAAAAgBABIACAEIgDgCQAAAEgHAFQgHAEACAFIADACQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIAAABIgDgBIADAEIgCgCIAAACIgCgBQABABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAQAAABAAABIgBgCQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQgBAAAAABQAAAAgBAAQAAABAAAAIgCgBIgCADIACABIgDAAIAAACIgBgBQgBAFgBACQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQAAABgDAFQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAABQAAAAAAABQABAAAAAAQABABAAAAIABgBQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABgBAAIAAgBQAAgBAAAAQAAABgBAAQAAAAAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQAAgBAAAAQAAAAgBgBIgBACIAAACIACAAIgEAGIgDgCIAAABIAAAAQgBAAAAAAQgBAAAAAAQgBABAAABQAAAAAAABQgBAEgDAAIABAAIAAACQAAAAgBAAQAAABAAAAQAAAAAAAAQABAAAAABQgBgBAAAAQAAAAgBAAQAAAAAAABQAAAAgBABIgCACQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgDACgFgCQABAEgCAGQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAABQAAAAgBAAQAAABAAABQgBAAAAABQgBAEgDAAIACACQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAABAAAAIACABIgDAEQAAgBAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAABAAgBQAAAAAAAAQgBAAAAAAIAAACIgBgBQAAABAAAAQAAABAAAAQAAAAAAABQAAAAABAAIgDAAIADADIgCAAIgDgBIAAADIAAgBIAAADIgCgDQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAIABADQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAABQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQAAAAgBgBQAAAAAAgBIgEALQAAgBgBgBQgBAAAAAAQAAAAgBAAQAAABAAABIgCAEIgBgBIgDAEQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAAAAAAAIgDgBIABAFIgDgFQAAgBAAAAQAAABAAAAQgBAAAAAAQAAABAAAAIAAAAIgCADIgBgDQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAIgBgBIABAGQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAIgBAAg");
	this.shape_6.setTransform(28.8,13.9,0.397,0.397);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#202020").s().p("AimDDQgEgBgCgEQAAAAAAgBQgBAAAAAAQgBgBgBAAQAAAAgBAAIABgBQgIgEgHgHQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAABAAAAIAAACIgBgDQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQABABgBAAQAAABAAAAQAAAAgBAAQgBAAgBgBQgDgBgCgCIAEABQAAABABAAQAAAAABAAQAAAAAAgBQABAAAAgBIgDgDIgEAAIADgBQgEgBgBgEQgBgEgEgBIABACQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQgEgCgEgGQgDgGgCgCIAAgBIgCgDQAAABABAAQAAAAAAgBQABAAAAAAQAAgBABgBIAAgBIgCgCQgBAAAAABQAAAAgBAAQAAABgBAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQABAAAAAAQABAAAAgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQgCgFgGgFQgGgFgCgEQACgDADgCIgDgBIABAAQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAAAABIABABIAAACQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAgBgBgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIACAAIgCgCIgDABIgMgaIgBgGQAAgEABgBQAAgEgHgJQABgBgCgEQAAgBgBgBQAAAAAAgBQABAAAAgBQAAAAABgBIgEgCIACAAIgBgCIAAgCIgDABIgBgFIgCgGIAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIACgBQgGgFgBgKQgBgLgCgFQACgDgDgGQgDgFAFgEQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAABQgEgWgBgLQgBgSADgZQAGgRAKgOQAKgOAJgDIgDAAQABgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIACACIADgHIgDAAIAPgMQAJgGAHgBIgBgBQADgCAHgBQAHAAACgEIgBADQAAAAAAAAQAAABAAAAQABAAAAAAQAAABAAAAQAFgFAKAAQANAAAEgBQAAABAAAAQgBAAAAABQAAAAAAABQAAABAAAAIADgCQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIgBACQABAAABAAQAAAAAAgBQAAAAABAAQAAgBgBgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABABAAAAQAAABABAAQAAAAABAAQAAAAABAAIACgBIABgBQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAAAAAIAAABIAGgDIABABQABABAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQABABAAAAQABAAAAAAQABAAAAAAQABAAAAgBQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAAAIACgDQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABIACgCQAAABABABQAAABAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAgBQABABAAABQgBABAAAAQAAABAAAAQgBAAAAAAIADAAIgBABQABABAAAAQABABAAAAQABAAAAAAQABAAAAAAIAAAAQABABAAgBQABAAAAAAQABAAAAgBQAAgBAAgBIgBgFQABABABAAQAAAAABAAQAAAAABAAQAAAAABAAIgCgEQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAgBIABgBIgBACQADAAABAEQABABAAAAQABABAAAAQABAAAAABQAAAAABgBQAAABAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQABABAAAAQABAAAAABQAAAAAAABQAAAAAAABIgBAEQgFAPgYATIgoAeQgPAMgHALIgFAHIgCABQAAAAAAAAQAAAAAAAAQAAABABAAQAAAAABAAQgEgBgBACQADABgBAFIgBgBQgBADAFADIgDADQACAFABABQABAVAGAHQgDABABAEIABAGIgCABIADACIgBABIgCADIADAAIAAACQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIAJAMIgCgBQABABAAAAQABABAAAAQAAABgBAAQAAAAgBAAQAAAAAAABQgBAAABABQAAAAAAABQABAAABABQAEAGAAAQIADADIABgFIAAAGIgBAAIAJAOQAAAGAEALQAEALAAAGIAFgCIgEAEQACACAEgCIgCADQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQABABAAAAQABAAAAAAQABAAABAAQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQABABAAAAQAAAAABAAQAAAAAAAAIgBACQAAAAgBAAQAAABAAAAQAAAAAAAAQAAABAAAAQABgBAAAAQABAAAAAAQABgBAAAAQAAAAAAAAIACABQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBAAIAAADIgBAAQAAAAAAAAQAAABAAAAQABAAAAAAQAAABAAAAIADABIACgCIABgBIgBADQAAAAgBABQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAABAAAAQAAAAABAAQAAABAAAAQAAAAABAAIADgBIAAgCIAEAGIgBADIADgBIADAAIgCADIABgBIAAABIADgBQAAACAAAAQAAABAAAAQAAABAAAAQABAAAAgBIABgCIAAACQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIgCACQACADAGAAIAAAAQABABAAAAQAAAAABAAQAAgBABAAQAAgBABgCQAAABAOABIABgCIAAACQAEgBAGACQAIACACgBIAAgCQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAABAAAAIALgGQABADAEgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAABAAQABABAAAAQABAAAAAAQABAAAAAAQABgBAAAAIgBABIAFgDIAAABQAEABACgDIABACQABAAAAAAQAAABAAAAQABAAAAAAQAAAAABgBIACgFIACAAQABABAAAAQABAAAAAAQABAAAAAAQABgBAAAAIAAABIADgBIAAABIADgBQABABABAAQAAAAABgBQAAAAABAAQAAgBABAAIgBABQAIgEAFgBIAAACIAFgFIAAADIADgBIAAABQABgDAFACQAFACACgBIgBAAQACADAEgBQgBgFADgCIAAADIABAAIAAABIACAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQAAABABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAABgBQAAAAABAAQAAAAABABQAAAAAAAAIAGgEIAAACQACgEACAAIgCACQACABADgDQABAAAAAAQABgBAAAAQABAAAAABQABAAAAAAQABAAAAAAQAAAAAAgBQABAAgBgBQAAAAAAgBQABACAGgDIgBACQABAAAAAAQAAAAABAAQAAAAABAAQAAgBABAAQAAABgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAGgBACgCIAAgBQAEACAIgHIgCACQAAABAAAAQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBIAAACQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAAAIACgEIABADQADgDAJABQAJAAACgFIgBgDQAAAAABABQAAAAABAAQAAAAABAAQABAAAAgBQABAAABAAQAAAAABABQAAAAABAAQAAABABAAIAAgBIACACIAAgEIABADIABgCIABACQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAQABgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQADAAACgBIAAADQAAAAABAAQABAAAAgBQABAAAAAAQABgBAAAAIgBgCIADACIABgCIAAACQADgBAEgEQAAABgBABQAAAAAAABQABAAAAAAQAAABABAAIAGgDIABABIABgCQABAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAgBIgCABQABgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAQABABAAAAQABAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAIgBABQABABAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQAAABgBAAQABABAAAAQABAAAAgBQABAAAAgBQABAAAAgBIgCgCIAIgCIAAADIACgBIgBABQADABADgCQACgDADACIgBgDIAAABQAAAAABAAQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAABQABAAAAAAQAAAAABAAQAAAAABgBIAEAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQADAAAEAEQABgCADgCIAFgDQAAABABAAQAAABAAAAQAAABgBAAQAAAAgBAAQACABADgDQADgDADACIgBgDQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAAAABAAQAAAAAAAAQABAAAAgBIgCgBIAFgDQAAABAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIABgBIABAAQABAAAAAAQABgBAAAAQAAgBAAAAQgBAAAAgBIACABIgBgDQABAAABAAQAAABABAAQAAAAABABQAAAAAAABIACgDIAAABIABgCQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABABAAQAAAAAAABQABAAAAAAIABgDQABgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAQAAABgBAAQAAAAAAABQABAAAAAAQAAAAABAAQABABAAAAQABAAAAAAQAAABAAAAQAAABgBAAQAGgDADgEQABABAAABQAAAAABAAQAAABABgBQAAAAABgBIADgDQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIACADIAFgDQAAABAAAAQAAAAAAAAQAAABAAAAQABAAAAAAIABACIACgFIAAAFQABABAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAIABAAIADgCIAAADQAAAAAAABQAAAAAAAAQAAAAAAAAQABAAAAAAIACgCIAAABIACgGQABgEAEACQgBAAAAABQAAAAAAAAQgBABAAAAQAAABAAAAIABADQABAAAAgBQAAAAAAAAQABAAAAAAQAAABAAAAIABABIgBgFQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIACADQABAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAIACAAIAAACQABAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAIAAgDQAEAAACgBQACgBAEAAIgCAFQgCACgDgBQAAABABAAQAAABAAAAQAAABABAAQAAAAABAAQABABAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAABgBABQAAAAgBABQAAAAgBAAQAAAAgBAAIgCgCQAAAAgBgBQAAAAgBAAQAAAAgBABQAAAAgBAAQgBACACADQAAABAAABQAAAAAAABQAAAAgBABQgBAAgBAAIgBAAQABAAAAgBQABAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAABgBABIgCAEQgBAAAAAAQAAgBgBAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAQgBgBAAAAIgDACQABgBAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAIgDgCIAAAAIAAAAQABABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAABABIgIAFQgEACgDgDIABACIgBACIgIABQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBAAgBAAQABABAAABQAAAAAAABQgBAAAAABQAAAAgBAAIgDgCQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgCgBIgCAEIAAgBQgDABAGADIgCABQAAAAABABQAAAAAAABQAAAAAAABQAAAAgBAAIgDACQAAAAAAAAQABAAAAgBQAAAAAAgBQAAAAgBgBIgBgDQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIgCAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIACACIgDAAIAAgBIgEgCIAAACIgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAIgBABQAAAAAAABQABAAgBAAQAAABAAAAQAAABgBAAQgBABAAABQAAAAAAABQAAABAAAAQABABAAAAQAAAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAIgBADIACACIAAABIADABQgFAAgBgEIgCADIgCgBQABgDACgCQgEACABgIQgEgCgBABIAAAEIgCgDIgCABIAAACQACABAAAEIAAAFIgBgCQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAgBAAQABAAAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAIgDABQAAABAAAAQgBAAAAAAQAAABABAAQAAABAAAAIgCABQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIgBACIgBgCIgBAFQgHABgCgCIgBACIgCgDQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAgBQgBAAAAAAQgBgBAAABQgBAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBIgEADQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABIgBgDIgBACIgCAAQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgBABAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBQgCABADAEQgEgDgDADIgDAFIgDgDQABABAAABQAAAAgBAAQAAAAAAABQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIAAgBIgDABIACADIACADQgDABgEgCQgDgCgBgDIgDAFIACAAQgDAAgBAFQgCAFgDABIACACQAAAAABABQAAAAAAAAQABAAAAAAQAAABgBAAQgFAEgDgDQABgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAABAAAAQgBABAAAAQAAABAAABIgCgGIgFACIABABQABABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgCgBIgCABQAAAAAAAAQAAgBgBAAQAAAAgBAAQgBAAgBAAQgBAFgCgDIABgCIgDgBQAAABABAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAAAQABAAAAAAQAAABAAABQAAAAgBAAQAAABgBAAQgBAAgBAAIABgCIAAgCIgGACIAAACIABACIgEABIAAACQABABAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQABAAAAgBQgBAAAAgBQAAAAAAgBQgBAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIAAgBIABAAIgBgDIgDAHQgBAEgEABQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAABIgBgBIgEACIACgBQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQgEACgDgBQABAAABgBQABAAAAAAQAAgBAAAAQAAgBAAgBIgEADIgEADIABACIgIADIAAADQABABAAAAQABAAAAAAQABAAAAAAQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAgBAAIgEACQgBgDgDgCQgDACgEgCQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABQgBAAAAAAQgCABgCgFQgBgEgBAFIABADQgBAAgBAAQgBAAAAAAQgBABAAAAQAAAAAAABQAAAAAAgBQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAAAAQABAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgFAAIABgBQAAAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAAAIgCADIAAAAQAAgBAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBACACADIgCABIAAAEQAAgBAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQABgCAAgIQACABgCgEQAAAAgCAEQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBgBIADAEIgCAEIABgBIgGAAQAAAAgBABQgBAAAAAAQgBAAAAABQAAAAgBAAIAAgBIgDABIgCADIABgDQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAABgBAAIgCABQAAABAAABQAAAAAAABQABAAAAABQABAAAAAAIgBACQAAABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAgBAAAAQgFAAgCACIABgDQAAAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAIgCACQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAgBgBAAIAAADQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIgCgDQgDABgCAGQgBgBgEAAQgDAAgCgBQgCAEgCgBQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAAAABQABAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAQABgBAAAAQAAAAAAAAQAAAAABABQAAAAAAAAIgDADIAAgBQgEAAgEAGQgEAGgFgBQAAAAABAAQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAIgNADQABgBABAAQAAgBAAAAQAAAAAAgBQAAAAgBAAIgEgCIgBAEQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAAAAAgBIABgBIgEACIgBgFQgIADgCADIgYADIgHABQgOAAgLgEgACmBjIAAAAIAAAAgACIBHIAAAAIAAAAg");
	this.shape_7.setTransform(14.4,25.4,0.397,0.397);

	this.instance = new lib.Path_34();
	this.instance.setTransform(19.1,17,0.397,0.397,0,0,0,48.1,42.9);
	this.instance.alpha = 0.469;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3C200B").s().p("AluFcQhVhMgIgUQgRgtgCgcQgHg+AnggIEbjkQEGjWAsgZQBBgmASgFQAjgKAjAZQAlAbBCBOQBBBNADAUQABAOALAlQAGAjgSAQQgSAQgQAhIggA+QgUAjg/BUQg9BTgPAMQgJAIgRAYQgRAVgXAGQgaAIiLAxQiCAugZAKIgyAXQgjAPgXAAQgaAAhYhRg");
	this.shape_8.setTransform(19.1,17,0.397,0.397);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38.2,34.1);


(lib.head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// head_antena-L
	this.instance = new lib.head_antenaL();
	this.instance.setTransform(-21,-52,1,1,0,0,0,-55.2,-8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,rotation:-2.5,x:34.5,y:-46.3},0).wait(1).to({rotation:-4.9,x:34.7,y:-48.7},0).wait(1).to({rotation:-7.4,x:34.8,y:-51.1},0).wait(1).to({rotation:-9.9,y:-53.6},0).wait(1).to({rotation:-12.4,x:34.6,y:-56},0).wait(1).to({rotation:-14.8,x:34.4,y:-58.4},0).wait(1).to({rotation:-17.3,x:34.1,y:-60.8},0).wait(1).to({rotation:-15.6,x:34.3,y:-59.1},0).wait(1).to({rotation:-14,x:34.5,y:-57.5},0).wait(1).to({rotation:-12.3,x:34.6,y:-55.9},0).wait(1).to({rotation:-10.6,x:34.7,y:-54.3},0).wait(1).to({rotation:-8.9,x:34.8,y:-52.6},0).wait(1).to({rotation:-7.3,y:-51},0).wait(1).to({rotation:-5.6,x:34.7,y:-49.4},0).wait(1).to({rotation:-3.9,x:34.6,y:-47.7},0).wait(1).to({rotation:-2.2,x:34.5,y:-46.1},0).wait(1).to({rotation:0.2,x:34.2,y:-43.8},0).wait(1).to({rotation:2.6,x:33.8,y:-41.4},0).wait(1).to({rotation:5.1,x:33.3,y:-39.1},0).wait(1).to({rotation:7.5,x:32.7,y:-36.8},0).wait(1).to({rotation:9.9,x:32,y:-34.6},0).wait(1).to({rotation:12.3,x:31.2,y:-32.4},0).wait(1).to({rotation:14.7,x:30.3,y:-30.2},0).wait(1).to({rotation:15.9,x:29.9,y:-29.1},0).wait(1).to({rotation:17,x:29.4,y:-28.1},0).wait(1).to({rotation:18.2,x:28.9,y:-27.1},0).wait(1).to({rotation:19.3,x:28.4,y:-26.1},0).wait(1).to({rotation:20.5,x:27.9,y:-25.2},0).wait(1).to({rotation:21.6,x:27.4,y:-24.2},0).wait(1).to({rotation:19.3,x:28.4,y:-26.2},0).wait(1).to({rotation:17,x:29.5,y:-28.2},0).wait(1).to({rotation:14.6,x:30.4,y:-30.3},0).wait(1).to({rotation:12.3,x:31.2,y:-32.4},0).wait(1).to({rotation:10,x:32,y:-34.5},0).wait(1));

	// head_antena-R
	this.instance_1 = new lib.head_antenaR();
	this.instance_1.setTransform(-44,-31,1,1,4,0,0,23.4,-46.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0,regY:0,rotation:0.2,x:-67.7,y:15.1},0).wait(1).to({rotation:-3.6,x:-64.5,y:16.6},0).wait(1).to({rotation:-7.5,x:-61.3,y:17.8},0).wait(1).to({rotation:-11.3,x:-58,y:18.9},0).wait(1).to({rotation:-15.1,x:-54.6,y:19.7},0).wait(1).to({rotation:-18.9,x:-51.2,y:20.3},0).wait(1).to({rotation:-22.8,x:-47.8,y:20.6},0).wait(1).to({rotation:-20.5,x:-49.9,y:20.4},0).wait(1).to({rotation:-18.1,x:-52,y:20.2},0).wait(1).to({rotation:-15.8,x:-54,y:19.8},0).wait(1).to({rotation:-13.5,x:-56.1,y:19.4},0).wait(1).to({rotation:-11.1,x:-58.1,y:18.8},0).wait(1).to({rotation:-8.8,x:-60.1,y:18.2},0).wait(1).to({rotation:-6.5,x:-62.1,y:17.5},0).wait(1).to({rotation:-4.1,x:-64.1,y:16.7},0).wait(1).to({rotation:-1.8,x:-66,y:15.9},0).wait(1).to({rotation:0.5,x:-67.9,y:14.9},0).wait(1).to({rotation:2.6,x:-69.5,y:14.1},0).wait(1).to({rotation:4.6,x:-71.1,y:13.1},0).wait(1).to({rotation:6.7,x:-72.7,y:12.1},0).wait(1).to({rotation:8.7,x:-74.2,y:11.1},0).wait(1).to({rotation:10.8,x:-75.7,y:10},0).wait(1).to({rotation:12.8,x:-77.1,y:8.8},0).wait(1).to({rotation:6.6,x:-72.6,y:12.2},0).wait(1).to({rotation:0.4,x:-67.8,y:15},0).wait(1).to({rotation:-5.8,x:-62.7,y:17.3},0).wait(1).to({rotation:-11.9,x:-57.4,y:19},0).wait(1).to({rotation:-18.1,x:-52,y:20.2},0).wait(1).to({rotation:-24.3,x:-46.4,y:20.7},0).wait(1).to({rotation:-17.1,x:-52.8,y:20},0).wait(1).to({rotation:-10,x:-59.1,y:18.5},0).wait(1).to({rotation:-2.8,x:-65.2,y:16.3},0).wait(1).to({rotation:4.4,x:-70.9,y:13.2},0).wait(1).to({rotation:11.5,x:-76.2,y:9.5},0).wait(1));

	// head
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRASQgHgIAAgKQAAgJAHgIQAIgHAJAAQAKAAAIAHQAHAIAAAJQAAAKgHAIQgIAHgKAAQgJAAgIgHg");
	this.shape.setTransform(-50.4,-37.6,0.397,0.397);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRASQgHgIAAgKQAAgJAHgIQAIgHAJAAQAKAAAIAHQAHAIAAAJQAAAKgHAIQgIAIgKAAQgJAAgIgIg");
	this.shape_1.setTransform(-26.8,-58.8,0.397,0.397);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#89702A").s().p("Aj/DLIgEgMQgkgjBIgNQA2gJAuAFQBAAHAPg4IAMgyQAIgcARgMQAtgmAlAIQArAJAfgSQAVgLAGgZQADgMgBgiQgBg/AogQQATgHARAMQARAMACASQgqAGgMARQgGAKgIAwQgDAWgCAhQgFAagWAOQgNAJgsACQgfABABAcQAAAQAfAgQAdAdgEASQgRAPgYgOQgYgOAAgVQAAgSgWgLQgWgKgVAHIgPAtQgNAggBAOQgbAJgngIQgxgKgOABQgSABgkAWQgeARgTAAIgFAAg");
	this.shape_2.setTransform(-32.8,-40.1,0.397,0.397);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AglAcQAAgRAJgLQAIgKARgNQAXgRAHAAQAHAAADARQAHAngcAMQgWAKgLACIgHABQgNAAAAgNg");
	this.shape_3.setTransform(-33.8,-41.3,0.397,0.397);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgaAhQg1gwAogTQANgGADABQAIAEAWAAQAegBgBAUQAAALgHAIIATAFQAQAGgMAFIgnASQgLADgGAAQgNAAgJgHg");
	this.shape_4.setTransform(-33.9,-48.5,0.397,0.397);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgRAuIAFgTQgMABgKgFQgSgKAQgXQAOgUAAgKQABgDAMgIQAlgZAQBIQAEARgWASIgjAZQgEACgCAAQgFAAADgMg");
	this.shape_5.setTransform(-41.3,-43.5,0.397,0.397);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgZBSQgegVgMgnQgNglALgjQALgiAdgJQAcgJAbAVQAeAVAMAnQANAlgLAiQgLAigdAKQgIADgJAAQgSAAgUgPg");
	this.shape_6.setTransform(-25.1,-57.5,0.397,0.397);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AggBAQgkgTgQggQgRgeAOgaQAOgbAjgGQAjgGAjATQAlATAQAgQAQAegNAbQgOAagkAGIgQABQgZAAgdgOg");
	this.shape_7.setTransform(-50.3,-35.7,0.397,0.397);

	this.instance_2 = new lib.Path_16();
	this.instance_2.setTransform(-36,-44,0.397,0.397,0,0,0,49.1,48.6);
	this.instance_2.alpha = 0.469;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3C200B").s().p("ABNHkQghgKgKgKIgEgIQgMAIgRAIQghAPgXgEQgXgDgXgcQgZgkgSgTQgVgWgxgBQhkgCgIgBQg1gHgvg9QgshFgNgTQgTgaAPhKQAOhFAZgoQARgZCig1QCng2AJgLQAogqArhfQAmhXAVgQQA0gwAkgaQBEgvArARQA0AUBGBMQBHBNALAwQAHAggXBUQgVBKAOAOQAbAbAPAYQAVAfgIARQgNAbgqAgIAWAEQAXAGAIARQAJATgbA7QgYA2gVAYQgPAQhJA8IhTBFQgSARg4AWQgvARgfAAQgNAAgKgCg");
	this.shape_8.setTransform(-36,-44,0.397,0.397);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.instance_2},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.5,-63.3,186.3,125.7);


(lib.body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_33();
	this.instance.setTransform(21.4,33.3,0.397,0.397,0,0,0,69.4,70.4);
	this.instance.alpha = 0.469;

	this.instance_1 = new lib.Path_12();
	this.instance_1.setTransform(4.1,8.8,0.397,0.397,0,0,0,65.2,64.4);
	this.instance_1.alpha = 0.469;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#988575").ss(0.1,0,0,4).p("AAtB2QgCAAgFAEQgEABgEgBQgIgXgWgrQgVgsgHgVQgGgSgCgmQgCgngGgS");
	this.shape.setTransform(7.4,12.8,0.397,0.397);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#988575").ss(0.1,0,0,4).p("AAtA4QgJgCgigwQgng2gHgH");
	this.shape_1.setTransform(14.5,9.5,0.397,0.397);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#988575").ss(0.1,0,0,4).p("ABQB0QgkgDgugTQg5gXgLgaQgJgWAKg4QAKg8gJgZ");
	this.shape_2.setTransform(15.4,21.6,0.397,0.397);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#988575").ss(0.1,0,0,4).p("Ag0BjQAGgCAQgpQAVgzAEgFQAFgNAZglQAWggAGgQ");
	this.shape_3.setTransform(9.7,16.5,0.397,0.397);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#988575").ss(0.1,0,0,4).p("AgnBSQAEhgAlgpQAMgNAOgFQAHgDAFAA");
	this.shape_4.setTransform(21.9,24.3,0.397,0.397);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#988575").ss(0.1,0,0,4).p("AghEWQAmg5gFjhIgQjXIAyg6");
	this.shape_5.setTransform(20.5,16,0.397,0.397);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#988575").ss(0.1,0,0,4).p("AATgRIgkAk");
	this.shape_6.setTransform(20.6,-0.7,0.397,0.397);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#988575").ss(0.1,0,0,4).p("AALmbIACCrQgCCzgXAnIAKDFQAHDOgGAd");
	this.shape_7.setTransform(19.4,6.9,0.397,0.397);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#988575").ss(0.1,0,0,4).p("AiygdIBSBBQBOBNgZAuIAyCSQA/CbA2ApIAiA1QAegYgQhPIgVhJQgWgOgckdIgXkZQAbg7gmibIgtiP");
	this.shape_8.setTransform(13.2,5.4,0.397,0.397);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#988575").ss(0.1,0,0,4).p("AiKEBQAdgLDvjQQAFgvAAiDIgBh5");
	this.shape_9.setTransform(4.9,6.2,0.397,0.397);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#988575").ss(0.1,0,0,4).p("AgOAEIAKADQAJgBAGgP");
	this.shape_10.setTransform(15.9,4.6,0.397,0.397);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#988575").ss(0.1,0,0,4).p("AgXoaIAFAOQAEASgFAYQgQBNhoBrIAnAxQAuA8AjA7QBwC6giBqIAuCuQAtCygJAZ");
	this.shape_11.setTransform(13.8,4.9,0.397,0.397);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#988575").ss(0.1,0,0,4).p("ABIAJQhQghgmARQgMAFgHAHQgDAFAAAE");
	this.shape_12.setTransform(13.9,29.2,0.397,0.397);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#988575").ss(0.1,0,0,4).p("AD/AnQg0AMjNguIjFguIg3AV");
	this.shape_13.setTransform(6.4,26.8,0.397,0.397);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#988575").ss(0.1,0,0,4).p("AgRAIIAjgP");
	this.shape_14.setTransform(-8.2,22.7,0.397,0.397);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#988575").ss(0.1,0,0,4).p("AlohnICNBDQCUBBAkgFIGOBQ");
	this.shape_15.setTransform(-1.1,22.9,0.397,0.397);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#988575").ss(0.1,0,0,4).p("AgRjwIATBgQAdBfApgDICjBQQCpBfAcA9IAoAxQgYAPg/gsIg7guQgIgXj+hVIj6hOQg0AAh8hcIhyhc");
	this.shape_16.setTransform(-1.9,19.5,0.397,0.397);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#988575").ss(0.1,0,0,4).p("AhlAAIAtgGQA2gFAnAMIAZAHQAcADAIgL");
	this.shape_17.setTransform(-5.9,12.7,0.397,0.397);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#988575").ss(0.1,0,0,4).p("AAFgJIAAAJQgCAHgMgC");
	this.shape_18.setTransform(-3.4,20.9,0.397,0.397);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#988575").ss(0.1,0,0,4).p("AnHjhIAKAKQAPAKAVAFQBCAQBlgtIDWCkQDnCkBcANIBFA6QBJA6AWAD");
	this.shape_19.setTransform(-2.3,19.2,0.397,0.397);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#988575").ss(0.1,0,0,4).p("AgqBSQAEhhAogoQANgNAPgFQAIgDAFAA");
	this.shape_20.setTransform(40.5,49.6,0.397,0.397);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#988575").ss(0.1,0,0,4).p("AgkEWQAqg5gGjhIgRjXIA2g6");
	this.shape_21.setTransform(39,41.3,0.397,0.397);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#988575").ss(0.1,0,0,4).p("AAUgRIgnAk");
	this.shape_22.setTransform(39,24.6,0.397,0.397);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#988575").ss(0.1,0,0,4).p("AAMmbIACCrQgDCzgYAnIALDFQAHDOgGAe");
	this.shape_23.setTransform(37.7,32.2,0.397,0.397);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#988575").ss(0.1,0,0,4).p("AjCgeIAdAUQAjAWAaAYQBUBNgbAuIA3CSQBECaA7ApIAkA2QAggYgRhPIgXhKQgYgNgdkeIgZkYQAdg7gqibIgwiP");
	this.shape_24.setTransform(31,30.7,0.397,0.397);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#988575").ss(0.1,0,0,4).p("AiVEBQAfgMEEjQQAFguAAiDIgBh5");
	this.shape_25.setTransform(22,31.5,0.397,0.397);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#988575").ss(0.1,0,0,4).p("AgPAEIALADQAKgBAGgP");
	this.shape_26.setTransform(34,29.8,0.397,0.397);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#988575").ss(0.1,0,0,4).p("AgZoaIAGAOQAEASgFAYQgSBNhxBrIAqAwQAyA8AmA7QB6C7glBqIAyCtQAwCzgJAZ");
	this.shape_27.setTransform(31.7,30.2,0.397,0.397);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#231F20").s().p("AAAAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABg");
	this.shape_28.setTransform(-40.3,-40,0.397,0.397);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#231F20").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIAAABIAAgBg");
	this.shape_29.setTransform(-40.5,-39.7,0.397,0.397);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#231F20").s().p("AAAAAIAAAAIAAAAIAAABIAAgBg");
	this.shape_30.setTransform(-42.1,-39.3,0.397,0.397);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#231F20").s().p("AigCVQAAAAgBABQAAAAAAAAQAAAAAAAAQgBgBAAAAIgBAAIAAgDIAAAAQAEACAAAEIgBgDgAiWCTQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQgCAAgDgHIgBACIADAGQgDAAAAAGIgCgDIAAgCQgDADgFAAQAAAAAAABQABAAAAABQAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAABABIgDgFQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAAAAAAAIgEAGQgBAAgBAAQAAgBgBAAQAAAAgBABQgBAAAAAAIgEADIgDgHIAAACQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIAAgBIgCAAQgBAAAAABQgBAAAAAAQAAABAAABQAAAAAAABIAAgEIgBABIgBgEQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBAAAAABIgCABIABADQgCACgFgCIABgDIgCACQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIgBAAIADgGQABACgBAEQAAABAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAQABAAAAgBIgCABIACgGIgBAAQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQgBAAAAAAQAAABAAAAQAAAAAAABQAAAAABABQAAgBAAgBQAAAAAAgBQABAAAAgBQABAAABAAQAAABAAAAQAAAAABAAQAAAAAAAAQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAAAQAAAGgBACQAAAAAAAAQABABAAAAQAAAAABAAQAAAAAAAAQAAgHACgBIAAACIABgDQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAIAJgBIABADQgBgBAAgBQABAAAAgBQAAAAAAgBQABAAABAAIACgDQABAAAAAAQABAAAAAAQABAAAAAAQABgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABQAIgJAFgBIAAADIABAAIACABIgBgDIAAgDQAEABACgIIABACQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAIAFgBIADACIABgIQADgCADABQACgEAFgEQAGgEACgDIABACQACgEAGgEQAIgDABgDIACAFQAAAAAAAAQABAAAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBIADgBQAAgBAAAAQAAAAABAAQAAAAAAABQABAAAAAAQABAAAAAAQAAAAABgBQAAAAAAgBQAAgBAAgBQAEAAADgDQAAABAAAAQAAABAAAAQABABAAAAQAAAAABgBIACgBQAAgBAAAAQAAAAAAgBQAAAAAAgBQgBgBAAAAQACAAADgCQADgDADABIAAgDQAHAAABgEIABACQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIgBgDQACgDAFAAIAHgCQAEgEAGgDIALgGIABABQAAAAAAgBQAAAAAAgBQABAAABAAQAAAAABAAQABAAABAAQAAgBAAAAQABgBAAAAQAAgBAAgBIABAAIACACQAAgBAAAAQAAgBAAAAQABAAABAAQAAgBABAAQAAAAAAAAQAAAAABgBQAAAAAAgBQABAAAAgBIAAABQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIAAACQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABABQAAAAABABIgCgCQAFgBAFgFIAIgHQAEAAABADQAAAAABAAQAAAAAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAABQABAAAAAAQABAAAAABQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIgBgCIAAAAIAFAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAgBIABABQAAgCACgDQACgDgBgDIAUgPIASgOIATgNQALgJAIgEIAFABIACgEIAAABIABgCQAAAAAAAAQABgBAAAAQAAAAgBgBQAAAAAAAAIALgMIABACIACABIgBgDIAAABQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBgBQAEgFAKgJQAKgJADgGQADgCABgIQAPgIgBgRIAFACQAFADABADQAEAEgCAGQgDAIABADIgCAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAABQADAFgFAHQgEAFgHADIgBgBIAAADQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAAAAAIgCgBQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAIAAADIgFgCIACADQADADgDACQgBABAAAAQgBABAAAAQgBABAAAAQAAABAAAAIgBgBQAAAFgDAFIgGAIQAAgBgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQACACgBAEQgBAAAAgBQAAAAgBABQAAAAAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBAAQAAAAAAAAIAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAABABIgDgCQAAABABAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAgBAAQAAAAAAAAQAAAAgBAAQAAAAABABIAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIAAAAIgCACQgBAAAAAAQAAAAAAAAQAAABAAAAQABAAAAABQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQgDAGgOAMIgEgCIgBAFIgCgCQgBAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAIgBgDIgCAGIgBgCQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAAAABIgBgDQgBAAAAAAQgBAAAAABQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQgBAAAAAAIgBgDQABAFgFADIAAgBIgFAFIgCgCQgBgBAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQABAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABABAAQAAABABAAQgGACAAABIgCgDQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIgCgCQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAgBgBQAAABgBABQAAAAAAABQgBAAAAABQAAAAAAAAIAAAFQAAABAAABQAAABAAAAQAAABgBAAQAAAAAAABQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAIgBgCIABAHIgBAAIgBAAIAAACQgCACgDgDQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIgBABIgBAAQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQABABAAAAQAAABABAAIgBgBQAAgBABAAQAAAEgCABIgBgDQAAAEgDAEIAAgCQgBAAAAAAQgBAAAAAAQgBAAAAABQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIABACIgBgBIgBAAIgCACIAAgBIgCAEQgDADgDgBIABADIgBACIgBgCQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIAAgBIgBABIABAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAAAgBIgCgDQAAABgBAAQAAAAAAABQAAAAAAAAQAAABAAAAIAAACQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIAAACIgCAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBIgBgDIAAAGIgBgBQAAAAABABQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAABABAAIgEABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBABAAABQAAABgBABQAAAAAAAAQgBAAAAAAIAAgCQAAAAgBAAQAAAAAAABQAAAAAAAAQAAABAAAAIgGgDIACAGQAAAAgBAAQAAgBAAAAQgBAAAAABQAAAAAAABQgBABAAAAQAAAAgBAAQAAABgBgBQAAAAAAAAQAAgBgBgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQAAAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABAAAAQgBAAAAAAIADADQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAIgBABIABACQgCAAgEACQgDACgBgDIgBABIAAABIgBgCQAAAAgBAAQAAAAAAAAQAAABAAABQAAAAAAABQAAABAAABQAAABAAAAQAAABAAAAQAAAAgBAAIgCgBIAAADQgBABgDgGIgBADIgDgCIABACIgBABIAAgBQgBAAAAgBQAAAAAAABQgBAAAAAAQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIAAAEIgCgCIgCABIAAACQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAgBIgCgBIgBABQAAABABABQAAABAAAAQAAABAAAAQAAAAgBAAIAAgDIgCgBIABADIgBgBIAAACQgBAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABIgDgBIgCAAQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAABAAIgBAAQAAAAgBAAQAAAAAAAAQAAABAAAAQAAABAAAAIgDgEQgBAAAAgBQgBAAAAAAQAAAAAAAAQAAAAAAABQgCABADAFIgDACQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBIAAADIgFADQgDACgDgCIgCgDQAAABAAgBQgBAAAAAAQAAAAAAAAQAAABAAAAQAAAAABABQAAAAAAABQABABAAAAQAAABABAAQAAAAABAAQgEAFgDgCIABACQgDgFgBAEIABACIgCgCIABADQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAgBIgCgCQAAAHgCgCIgDgCIAAACIABABIgGgCQAAAJgJAEIgBgCQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAABABAAIAAABQgDgCAAgDQgBAAAAAAQAAAAAAAAQgBABAAAAQAAABABAAIAAAEQAAABAAgBQAAgBAAAAQAAAAAAAAQAAAAABABQAAAAAAAAIgBABQAAAAAAABQgBAAAAAAQAAAAAAAAQAAAAAAABIgCgEIAAACQgBgBgBgFQgBgEgCgCIgBABIgBgDQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAGADABIABAFQAAABABABQAAABAAAAQAAABAAAAQgBAAAAAAIAAgBIAAgDQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAABAAAAIgBACQADABAAAEIgCgCIgBgBIABADIABACQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABABAAQgDgHgCAAIABADQAAADACACQgCgBgBgEQAAAAAAAAQgBAAAAABQAAAAAAAAQAAABAAABQAAAAAAAAQAAABAAgBQgBAAAAAAQAAgBgBAAIACADIgDgDIgBADQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAgBAAAAIgBABQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAABQAAAAAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAQAAAAgBAAQAAgBAAAAQgBAAAAABQAAAAAAAAIABADIgBgBIgBABIAAACIgBgDIABADQgBABAAAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQgBAAAAAAQAAAAAAAAQgBAAAAAAIAAgDIgBAAIgBAAIADAHIgBAAIgBAAIAAgCIgCgCIgCgBIAAADQAAABAAAAQAAABAAAAQABAAAAAAQAAABABAAQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABIgGgEIgBgEIgBAAQgCgCgBgDIgBACQACACABAEQABAFABABQgBACgDgFQgDgDABAFQAAABAAABQABAAAAABQAAAAAAABQABAAAAAAIAAACQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAIgCgDQAAgBgBAAQAAgBAAgBQgBAAAAgBQAAAAAAgBIACABIAAgBIgCgCQAAgBAAAAQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAABQAAAAABABQAAAAAAAAQAAABAAAAQABAAAAAAQAAgBAAAAIABABIgDABIABADQAAgBAAABQAAAAABAAQAAABABAAQAAABABABIgBACIAAgCQgBAAAAAAQAAAAAAABQgBAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgDgDQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBgBAAgBQAAABAAABQgBAAAAABQAAAAgBAAQAAAAAAAAIAAgBIgCgDQgBAAAAAAQgBgBAAABQAAAAgBAAQAAABAAAAIACAEQgCACgBADQgBAAAAgBQAAAAAAAAQAAAAgBAAQAAAAAAAAgAAvAbgAA+ASIABAAIAAAAIgBAAg");
	this.shape_31.setTransform(-35.5,-45.2,0.397,0.397);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#231F20").s().p("AAAAAIAAAAQAAAAAAAAQAAAAABAAQAAAAgBAAQAAAAAAABg");
	this.shape_32.setTransform(-35.1,-32,0.397,0.397);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#231F20").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIgBAAIAAAAg");
	this.shape_33.setTransform(-36.4,-31.5,0.397,0.397);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#231F20").s().p("AAAAAIAAAAIAAABQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_34.setTransform(-37.3,-31.3,0.397,0.397);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#231F20").s().p("AjBCtQAAABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAgBIgBAAIAAgCIADACIABADIgBgDgAjcCmIAAACQABABAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIAAgBIgCABQgBAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAABIAAgDQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgBgDQAAgBgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIgCACIACADIgEACIgEAAIAAgCIgBACIgBgDIgBAAIACgHQACACgBAEQAAABAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIgBACIAAgDIAAgDIgBAAQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQABABAAAAQgBgFAEABQAAABABAAQAAAAAAAAQABAAAAAAQABgBAAAAIACgDQAAAGgBACQAAABABAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAgHABgBIABACIABgDQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIALgBIAAACQAAgDADgBIADgDIAFgCQABAAABgBQAAAAABAAQABAAAAAAQABAAAAABQALgJAGgBIAAAEQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIABABQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIABgDQAEABAEgIIABACQAAgBAAAAQABgBAAgBQAAAAABAAQAAgBABAAIAFAAQABAAAAABQABABAAAAQAAAAABAAQAAAAAAAAQAAgEACgFQAFgBADAAQACgEAGgEQAGgFACgDIACACQACgFAHgEQAHgEACgDIACAFQAAAAABAAQAAAAABgBQAAAAAAAAQAAgBAAAAQABgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIADgCQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQACgBAAgEQAEgBADgEQAAABABAAQAAABAAAAQAAAAABAAQAAAAAAAAIACgCQABAAAAgBQAAAAAAgBQAAAAgBgBQAAAAgBgBQACABAEgEQADgEADABIgBgDQAIgCABgEIACACIgBgDQACgDAGgCIAHgEQAEgFAHgFIALgJIABABQAAgCAEgBQAEgBgCgEIACAAIACABQAAAAAAgBQAAAAABgBQAAAAABAAQABgBABAAQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAgBQACAAACgCIAEgDIAAACQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAAAQABAAAAAAQAAAAABABIgCgCQAFgCAGgEIAJgKQADgBADADQAAABAAAAQABAAAAAAQAAgBAAAAQAAgBAAAAIAAgBQAAgBAAAAQABAAAAAAQAAAAABABQAAAAABAAQABABAAAAQABAAAAAAQAAAAAAAAQABAAgBgBIgBgCIAAgCIAFAAQABAAAAAAQABAAAAAAQAAgBABAAQAAgBAAAAIAAACQAAgDADgEQACgDgBgEQAfgYASgLIAYgNQAPgJAKgDIAGABIADgEIABgBQABAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBIAQgLIAAACIACABIgBgDIABABQAAgBAAAAQABgBgBAAQAAgBAAAAQAAAAgBgBQAFgGAOgIQANgJAFgGQAFgDABgHQASgLgDgQIAFACQAFACABAEQAFAFgDAHQgEAJAAAEIgCgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAABQACAHgGAGQgGAGgIACIgBgBQAAAAgBAAQAAAAAAABQAAAAAAABQAAAAAAABIgBADIgCgCQABABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABIgBACIgEgCIABADQACAEgEACQgEACAAACIgBgBQgBAFgFAFIgJAIQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQACAEgDADQAAgBgBAAQAAAAAAABQAAAAgBAAQAAABAAAAQAAABAAABQgBAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBABABAAQAAABAAAAIgDgBQABAAAAABQAAAAAAAAQAAABgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAABIAAABQAAAAAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAIgCAAIAAAAIgDACQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBgBQgEAGgHAFIgMAHIgEgCIgBACQAAABgBAAQAAAAAAABQAAAAAAAAQAAABAAAAIgCgCQAAAAgBAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAgBAAQABgBAAAAQAAAAgBgBQAAAAAAgBQAAgBgBAAQAAACgDAEIgBgDQAAABAAAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAABIAAgDQgBAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBAAIgBgDQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBABIgDADIgBgBIgHAFIgBgCQAAgBgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQABABAAAAQAAABAAAAQAAAAgBABQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAABABQgHABAAACIgCgDQAAgBgBAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIgCgBQAAAAAAgBQABAAAAAAQAAAAgBgBQAAAAAAAAIgEADQAAAJgBABQAAAAAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAIgCgCIAAAAIAAAAIABAJIgBgBQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAAAgBABIABADQgDADgDgEQABAAAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAABgBAAQAAABAAAAQAAABgBAAIAAAAQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAABIABgBQAAABgBABQAAAAAAABQAAAAgBAAQAAABgBAAIgBgDQAAAEgCAFIgBgDQgCAAgCAEQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIABABIgCAAQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAABAAAAQgBgBAAABIgBACIAAgBIgCAFQgDADgDAAIABADIgBACIgBgCIgCAAIAAAAIAAAAQgBABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIgCgBQAAAAgBAAQAAABAAAAQAAABAAAAQAAAAAAABIAAACQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIAAABIgCABQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBgBAAAAIgCgDIABAGIgBgBQAAAAABABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAABQAAAAgBAAQAAAAAAABQAAAAAAABQgEADgDgCQAAAFgDAAIAAgCQAAAAAAAAQAAAAgBAAQAAAAAAABQAAABgBAAIgGgCIADAGQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAgBAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAABAAAAQAAAAAAABQAAABAAABQAAABAAAAQgBABAAAAQAAAAgBAAIADADQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBgBIAAACQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIgEADQgEADgDgDIgBABIABACQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAgBAAABIABACQgDAAgBgDQAAAAgBAAQAAAAAAABQAAAAAAABQAAAAAAABQABABAAABQAAABAAABQAAAAgBAAQAAABgBAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIAAAEQgBAAgEgFIgBAEIgEgCIABABIAAACIAAgBQAAAAgBgBQAAAAAAABQAAAAgBAAQAAABAAAAIAEABIgBAEQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBAAgBABIABADQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAgBgBQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIgCgCQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAQABABAAABQABABAAABQAAAAAAAAQAAABgBAAIgBgDIgDAAIACACIgBgBQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABIgBACQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIAAgBQgBAAAAAAQgBAAAAABQAAAAAAABQgBABAAABIAAgBQgBAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABIgEgDQgBgBAAAAQAAgBgBAAQAAAAAAABQAAAAAAAAQAAAAAAABQgBAAAAAAQAAABABAAQAAABAAABIACADQAAAAgBAAQAAAAgBAAQAAABgBAAQAAABgBABQgCACgDgBIABADIgFAEQgDADgEgBIgCgEQAAABAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIAAABIAEADQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBgBAAAAIABADQAAgBgBAAQAAgBgBAAQAAAAAAAAQgBAAAAAAIgCABIACACIgDgBIABACQABABAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIgCgCQAAAHgCgBIgDgCIAAACQAAAAAAAAQAAABAAAAQAAAAAAAAQABAAAAAAQgGAAgCgBQAAAJgLAHIgBgCQAAAAAAAAQAAAAAAABQgBAAABAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQgCgDgBgCQAAAAAAAAQgBAAAAAAQAAABAAAAQAAABAAAAIAAADQAAABAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIAAAAIgBABQAAAAgBABQAAAAAAAAQAAAAAAABQAAAAAAABIgCgFIgBACQgBgBgBgEQAAgFgCgBIgBABIgBgEQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAgBAAQAAAHAEABQgBABABAEQABABAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAAgCQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABAAAAIgBACQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAIAAADIgCgCQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBAAAAAAIAAADIACACQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAABQgCgIgDAAIABAEQAAAAABABQAAABAAAAQAAABABAAQAAABAAAAQgDgBAAgDQAAAAAAAAQAAAAAAAAQgBAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAAAgBQgBAAAAgBIABADIgEgCIgBADQAAAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAgBIgBACQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAABQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQAAgBAAAAQgBAAAAABQAAAAAAABQgBABAAABIgBgBIgBADIgBgDIAAADQAAAAAAABQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAAAAAAAIAAgDIgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIACAIIgBAAQgBgBAAABIAAgDIgBgCIgDAAIAAADQAAAAAAABQAAAAABABQAAAAAAAAQABAAAAAAQgBABAAAAQgBAAAAAAQgBgBAAAAQAAgBAAgBIAAACQAAABAAAAQAAAAABAAQAAABAAAAQAAAAgBABIgGgEIgBgFIgBABIgBgDQAAgBAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIgCADQADACAAAEIABAHQgBABgDgFQgDgDAAAFQABABAAABQAAAAAAABQABAAAAAAQAAABAAAAIAAACQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAgBAAQABAAgBgBQAAAAAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQAAgBAAgBQgBAAAAgBQAAAAAAgBQABABAAAAQAAAAABAAQAAAAAAAAQABAAAAgBQgDgFgCABIgBACQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAIACABIABABIgDABQAAAAAAAAQgBAAAAABQAAAAABAAQAAABAAABQACgCABAFIgBACIAAgCQgBAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAAAQAAAAgBAAIgDgDQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAABAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIABgCIgDgCIgCgBIAAgCQgCABgEgHIgBACIADAFQgEAAgBAGIgBgCIAAgCQgEADgFAAQAAAAABABQAAAAAAAAQAAABAAAAQAAAAgBABIgBACIgCgFQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQgDAFgDACQgCgCgDACQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAAAAAQgCgFgCgBgAi3CqQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAgBQABABAAAAQABAAAAAAQAAAAABAAQAAAAABAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQABAAAAAAIABAAIgBABIACAEIgFAFQAAgBAAAAQAAAAAAAAQgBgBAAAAQAAAAgBAAg");
	this.shape_35.setTransform(-29.4,-38.1,0.397,0.397);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#231F20").s().p("AAAAAIAAAAIAAAAg");
	this.shape_36.setTransform(-24,-28,0.397,0.397);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#231F20").s().p("AAAAAIAAAAQAAAAAAAAQAAAAABAAQAAAAgBAAQAAAAAAABg");
	this.shape_37.setTransform(-31,-23.4,0.397,0.397);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#231F20").s().p("AAAAAIAAAAIAAAAIAAABIAAgBg");
	this.shape_38.setTransform(-33.4,-22.6,0.397,0.397);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#231F20").s().p("AjiDFIAAgCQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgBAAIAAgDQAEABAAAFIgBgBgAkAC+QAAAAAAAAQgBAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIAAgBIgDAAQAAAAgBABQAAAAAAAAQgBAAAAABQAAAAAAABIAAgDIgBABIgBgDQAAgBgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgCADIABACQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAIgEABIgBgDIgBACIgBgCIgBgBIADgGIAAADQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQABABAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIgCACIAAgEIABgCIgBAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAgBQAAABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAgFAEAAQAAABABAAQAAAAAAAAQABAAAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBQAAAAAAAAIgCAIIAEABQAAgHABgCIABADIABgEQABAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAIAMgCIABACQAAgBAAgBQAAAAABgBQAAAAABgBQAAAAABAAQADgCABgBQACAAAEgCQADgCACABQAKgJAIgDIABAEQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAABIABAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIABgDQAGABADgJIABADQAAgEADAAIAGgCQABABABAAQAAABABAAQAAAAAAAAQABAAAAAAIACgIQAFgDAEABQACgFAHgFQAHgFADgEIACADQACgGAIgEQAJgFACgDIACAFQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAgBgBQAAAAgBgBIADgCQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAABQADgBAAgEQAEgBAFgEQAAABAAAAQAAABABAAQAAAAAAAAQABAAAAAAIADgCQAAAAAAgBQABAAgBAAQAAgBAAgBQAAAAgBgBQACAAAFgEQAEgEADABIAAgDQAJgBABgEIABABQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQADgEAGgBQAIgCACgBQAFgFAIgGIAOgIIAAABQABgCAEgBQAEgBAAgDIACAAIABABQABgCAEgBQAEgBABgCQACAAADgCQABgDACAAIAAACQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAABQAAAAABAAIgCgCQAGgCAGgGIALgKQAEgBACAEQABAAAAAAQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABABQAAAAABAAQABABAAAAQABAAAAAAQABAAAAAAQAAAAAAgBIgCgCIAAAAIAGAAQAAAAABAAQAAAAABAAQAAgBAAAAQABgBAAAAIABABQAAgCACgEQADgDgBgEIAvgrQAGgFASgQQAPgNAKgGQAFAAACgBIADgEIABABQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBgBAAIASgQIAAADQABAAAAAAQAAABAAAAQAAAAAAAAQABAAAAgBIAAgDIABABQAAgBAAAAQABgBgBAAQAAgBAAAAQgBgBgBAAQAJgJARgJQATgLAGgFQAFgCAGgJQAXgIAJgSQAIAIgDAGQABAHgGAGQgIAIgBADIgCgBQgBgBAAAAQAAAAgBAAQAAAAAAAAQAAAAgBABQgDAPgYAEIAAgBQAAAAAAAAQgBAAAAABQAAAAAAABQAAAAgBABIgBADIgCgCQABAAAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBACIgEgCIABADQABAFgEABQgFACAAADQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAAAAAAAQgCAFgGAGIgJAJIgCgEQABADgCAEQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAAAABQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAABQAAAAAAABIgDgCQABABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAIABABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIAAgBIgDADQAAABAAAAQAAAAAAAAQAAABAAAAQABAAAAABQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAgBgBAAQgEAHgHAGIgMALIgEgBIgCAFIgDAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAIgDAHIgBgCQABAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAAAABQgBAAAAAAIgBgCQAAAAAAAAQgBAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBAAIgBgDQABAFgGAFIAAgBIgEADIgDAEIgCgCQAAAAgBAAQAAgBAAAAQgBAAAAABQAAAAgBAAQABABAAAAQAAAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABAAAAQAAABABAAQAAAAABABQgHADgBACIgCgDQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIgDgBQAAgBAAAAQAAAAAAAAQAAAAABAAQAAgBAAAAIgBgBQgCAFgBAAQABAJgCACQABAAAAgBQgBAAAAAAQAAgBAAAAQgBAAAAgBIgCgBIACAJIgCgBQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIAAADQgDAEgDgDIAAgCIgBgBIgCAEIgBAAQAAAAAAAAQAAAAgBABQAAAAAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAABAAQAAABAAAAQAAAAgCACIgCgCQAAAEgDAEIAAgCQgDAAgCAEQgCAEgDgBIACACIgDAAIgBAAQAAgBAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAIgBACIAAgBQAAACgDADQgDADgEABIAAADIgBACIgBgCIgCAAIgBAAIgBACQAAAAAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgBgCIgBgBQgBAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAIAAACQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIABACIgCAAQAAABgBAAQAAAAAAAAQgBAAAAgBQAAAAgBgBIgBgDQgBABABAFIgBgBQAAABABAAQAAABAAAAQAAABAAAAQgBAAAAAAQgBAAAAABQAAAAAAAAQgBAAAAABQAAAAAAABIgEABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgCAFgCAAIAAgCIgCACIgGgCQAAACACAEQAAgBgBAAQAAAAgBAAQAAAAAAABQgBAAAAABQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQAAgBABgBQAAgBAAAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQAAAAgBAAQAAAAAAABQAAAAgBABQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAAAIACADQAAAAgBAAQAAAAAAAAQAAAAgBABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIgCABQAAAAAAABQAAAAAAAAQAAAAAAABQABAAAAABQgDgBgFAEQgEACgDgDIgBABIAAACIACAAIAAABQAAAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBQgBAAAAABQAAAAAAAAQgBABAAABQAAAAAAABQAAABAAABQAAABAAABQAAAAgBAAQAAABgBAAQAAgBAAAAQgBAAAAAAQAAgBgBAAQAAABAAAAIgBAEQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIgCgEQgBABAAAAQgBABAAABQAAAAAAAAQAAABAAAAIgDgCQAAAAAAAAQAAABAAAAQABAAAAAAQAAABgBAAIgBABIAAgBIgCABQAAABABAAQAAAAABAAQAAABABAAQAAAAABAAIgBADQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBAAAAAAIgCABQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABIAAABQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQABAAAAABQAAAAABAAQAAAAAAgBQAAAAAAAAIgCgCQAAAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAIABADQAAABAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgBgDIgCAAIAAABIgBADQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAIgEAAQgBAAAAAAQgBAAAAAAQgBABAAABQAAAAgBABIAAAAQAAAAAAAAQgBAAAAABQAAAAAAABQgBAAAAABIgEgEQAAAAAAgBQgBAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAIACADQgCAAgDADQgCACgDgBIAAADIgGAEQgEADgEgBIAAgCIgCgCQABAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAIABABQAAABABABQAAAAABABQAAAAAAAAQABABAAAAQgEAFgEgBIAAAAIAAAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAgBAAIABACIgCgBIAAACQABABAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIgBgCQgBAHgDgBIgDgCIAAACIABACIgIgCQgBAKgMAHIgBgCQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQgDgDAAgCQAAAAAAAAQgBAAAAAAQAAABAAAAQAAABAAAAIgBAEQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBABABIgCABQAAAAAAABQAAAAAAAAQgBABABAAQAAAAAAABQgCgBgBgEIAAADQgCgBgBgFQAAgEgCgCIgBABQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABIACADQgBABACAEQAAABAAABQABABAAAAQAAABgBAAQAAAAAAABQAAAAAAgBQgBAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAgBgBQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAIAAADQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAIAAADIACACQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAAAAAQAAABAAAAIgCgFQAAgBgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAIABAEQAAABAAABQAAAAAAABQABAAAAABQAAAAABABQgCAAgBgEQAAAAgBAAQAAAAAAAAQAAAAAAABQAAABgBAAQAAABAAAAQAAAAAAAAQgBAAAAgBQgBAAAAgBIABADIgDgCIgCADQAAABgBAAQAAAAAAAAQAAAAgBgBQAAAAAAgBIgBACQAAAAAAAAQgBABABAAQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAABQAAAAABAAQAAAAAAABQAAgBAAAAQgBAAAAAAQAAAAAAAAQgBAAAAABIAAADIgBgCIgBAEIgCgCIABACQAAABAAAAQgBAAAAAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAAAAAAAIAAgDIAAAAIAAAAIgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAABIACAHIgCAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAAgEIgCgBIgDgBQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAQABAAAAAAQgDACAAgEIAAACIAAADIgHgEIAAgFIgBABQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIgCgDQAAAAgBAAQAAABAAAAQAAAAgBABQAAABAAAAQADACAAAFQAAAEABACQgBABgEgEQgDgDAAAFIACACIABABIgBACQABABAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAABAAAAQAAAAABAAQAAAAAAAAQABAAAAgBIgCgDQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBABAAAAQgBABAAABQAAAAAAABQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIgDAAQAAAAAAAAQgBABAAAAQAAAAAAABQAAABAAAAQACgBADAFIgCACIAAgCQgBAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAAAQAAAAgBAAIgDgDIACgCQAAAAABAAQAAAAAAgBQAAAAAAgBQAAAAgBgBIgCACQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIABgBIgDgDIgCgBIAAgBQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIgDgEIgBACIADAFQgFABgBAFQAAAAgBgBQAAgBgBAAQAAgBAAAAQAAgBABAAQgDADgHABQAAAAABABQAAAAAAABQAAAAAAAAQAAABgBAAIgBABIgCgEQAAAAAAAAQAAABgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAIgGAHQgDgBgDACIgFADQgCgGgCAAgAjWDAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAABABAAQAAAAABAAQAAAAABAAQAAAAABgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAAAQABgBAAAAIABAAIgBABIACAEQgDACgCAEQAAgBAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAg");
	this.shape_39.setTransform(-24.1,-30.3,0.397,0.397);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#231F20").s().p("AAAAAIABABIgBAAg");
	this.shape_40.setTransform(-15.8,-25,0.397,0.397);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#231F20").s().p("AAAAAIAAAAIAAAAg");
	this.shape_41.setTransform(-20.6,-21.4,0.397,0.397);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#231F20").s().p("AAAAAIAAAAQAAAAAAAAQAAAAAAAAQABAAgBAAQAAAAAAABg");
	this.shape_42.setTransform(-27.7,-16.6,0.397,0.397);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#231F20").s().p("AAAAAIAAAAIABAAIgBAAIAAABIAAgBg");
	this.shape_43.setTransform(-28,-16.3,0.397,0.397);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#231F20").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_44.setTransform(-29,-15.8,0.397,0.397);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#231F20").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAABg");
	this.shape_45.setTransform(-30,-15.3,0.397,0.397);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#231F20").s().p("AkaDYIAAgDIgCACQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAIAEgHQAAAAABABQAAAAAAAAQAAABAAAAQgBAAAAABIAAADQAAAAABABQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAIgCABQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAIABgCIgCAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAABABQgBgFAEABQABAAAAABQAAAAABAAQAAgBAAAAQABAAAAgBQABgBAAAAQABgBAAAAQABgBAAAAQAAAAABAAQAAAGgCADIACAAIACAAQAAgHABgCIABACQAAgFADAAQAIgBAEgDIABADQgBgEADgBIAEgEQACAAAEgDQADgCACABQANgNAEgCIABAEQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIACABQgBgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIABgEQAFAAACgJIACACQAAgEADgBIAGgCIAEABIABgJQAEgCAFgBQACgGAGgFIAKgKIACABQADgGAHgFQAKgGACgDIACAFQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIAEgDQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABABQACgBABgEQAEgCAFgDQAAABAAAAQAAABABAAQAAAAAAAAQABAAAAAAIADgCQABAAAAgBQAAAAAAgBQAAAAgBgBQAAAAgBgBQADAAAFgDQAEgEAEABIgBgDQAKgCACgEIABABQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAABAAIgBgDQADgEAHgBIAKgDQAFgFAJgFIAPgIIAAABQABgDAFgBQAEAAgBgEIACAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAgCAFgBQAEgBABgDIAAABQACAAAEgCQABgDACAAIAAACQAAAAAAAAQABAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQAAAAABABQAAAAABABQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBgBAAQAHgCAGgFIAMgLQAEgBACAEQAAAAAAAAQAAAAABAAQAAAAAAgBQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAABABQAAAAABAAQABAAABABQAAAAAAAAQABAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAgBIAGAAQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBABAAIAAABQAAgDAEgDQADgEgBgDIA0grQAJgFASgOQARgNAKgGQAFABABgBIAEgFIABACQgBgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIASgQQAAABAAAAQAAABABAAQAAABAAAAQAAgBABAAIgBgCIABAAQAAgBAAAAQAAgBAAgBQgBAAAAAAQAAAAgBAAQAGgIAQgNQAPgMAGgJQAFgDAFgMIAUgOQAKgJAFgLIADAFQACAGgBAEQABAHgHAHQgIAIAAAFIgCgBQgBAAAAAAQgBgBAAAAQAAAAAAABQgBAAAAAAQAAAQgXAKIgBgBQgBAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAABQAAAAgBABQAAAAAAABQAAAAAAAAIgCgCQAAAAABABQAAAAAAABQAAAAAAAAQgBABAAAAIAAADIgFgBIABADQACAEgDADQgFADAAACIgBgBQgCAFgFAHIgIAKIgDgDQACADgDAEQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAABQAAABgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABIgDgCQABABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAABAAAAIAAABQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAAIgDADIgBAAIAAAAQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQgEAHgHAGIgOALIgEgBIgBACQgBAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgDgBQAAAAAAAAQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAADgEAEIAAgDQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAAAQAAABAAAAIgBgCQAAAAgBAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQAAABgBAAQAAAAAAAAIgBgCQAAAFgGAEIgBgBIgHAHIgDgCQAAgBAAAAQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQgBAAAAABQAAAAAAAAQAAABABAAQAAABABAAQgIAEAAABIgCgDQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAIgDgBQABgBAAAAQAAAAAAAAQAAgBAAAAQAAAAgBgBQgCAFgCAAQAAAKgBABQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAgBgBAAIgBgCIAAAAIAAAAIAAAKIgBgBQgBAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIABADQgDAEgDgDQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAIgDAEIAAAAQgBAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAQAAAAABABIAAgBQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABACgEACIgBgCQAAACgEAGIAAgCQgDAAgCAEQgDADgCgBIABACIgCAAQgBgBAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgBADIAAgCQAAADgDADQgEADgDAAIAAADIgBADIgCgDIgCABIAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgBgCIgBgBQgBABAAAAQgBABAAAAQAAAAAAABQAAAAAAABIAAACQAAAAAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIgCABQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAgBIgCgDIAAAGIgBgBQABAAAAABQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAQAAAAgBAAQAAABAAAAQAAABAAAAQgGADgCgCQgCAFgCAAIAAgCIgCAAIgBACIgGgCIACAGQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABgBABQAAAAgBABQAAAAgBAAQAAABgBAAQAAgBgBAAQABgBAAgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAABQAAAAAAABQAAABgBABQAAABAAAAQAAAAAAABQAAAAAAAAIABADQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAgBIgCACQAAAAAAAAQAAAAAAAAQAAABAAAAQAAABABAAIgIADQgEADgEgDIgBABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIABAAIAAACQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAgBQgBAAAAAAQgBAAAAABQAAAAAAABQAAABAAABQAAAFgCAAQAAgBgBAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIgBAEQgBAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIgCgEIgCAEIgDgCQABAAAAABQAAAAAAAAQAAABgBAAQAAAAgBABIAAgBIgCABIAEABIgBAEQAAAAgBgBQAAAAAAAAQAAAAgBAAQAAgBAAABIgDABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAAACIgBgBQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAgBIgBgBQgBAAAAAAQAAAAAAAAQAAAAAAAAQgBABAAAAIABADQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAIAAgEIgDAAIABADIgBgBIAAACQgBAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBgBQgBAAgBAAIAAAAQgBgBAAABQgBAAAAAAQAAABgBAAQAAABAAABIAAAAQgBAAAAAAQAAAAgBAAQAAABAAAAQgBABAAABQgBAAgCgEQgBgBAAAAQAAgBgBAAQAAAAAAAAQAAABAAAAQgBAAAAABQAAAAAAAAQAAABAAAAQAAABAAABIACADQgCAAgDADQgDACgDgBQAAAAABABQAAAAAAAAQAAABAAAAQgBAAAAABIgGAEQgEADgEgCIAAgCIgCgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIAAACQABAAAAABQAAABABAAQAAABABAAQAAAAABAAQgGAFgDgBQAAAAAAABQABAAAAAAQAAAAAAABQgBAAAAABQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAABIABACIgCgCQAAABAAABQAAABAAAAQAAABAAAAQgBAAAAAAIgCgCQgBAHgCgBIgDgCQgBAAAAABQAAABAAAAQABAAAAABQAAAAABAAIgIgBQAAAKgMAIIgBgCQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAABABAAQAAAAAAABQAAAAAAAAQAAAAAAABQgBAAAAAAQgDgCAAgDQgBAAAAAAQAAAAAAABQgBAAAAABQAAAAAAABIAAADQAAAAABAAQAAABAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABIgBABQgBAAAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQgCAAgBgEIAAACQgCgBgBgEQgBgEgCgCIgBACQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAHAEABQgBABACAEQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBABAAAAIgBADQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAABIABACIgCgBQAAgBAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIABADQAAAAAAABQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAQAAABAAAAIgCgEQgBgBAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAIACAEQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAQgCAAgBgEQgBAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAABgBAAQAAAAAAAAQAAAAgBAAQAAgBgBAAIACACIgEgBIgBADQAAAAgBAAQAAABAAgBQAAAAgBAAQAAAAgBgBIgBACQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAABQABAAAAAAQAAgBAAAAQABAAAAAAQAAgBAAAAIACABQAAAAgBAAQAAAAAAAAQgBABAAABQAAAAAAACIgBgBIgBABIAAABIgCgBIABADQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAABIABgDIgCAAQAAgBAAAAQAAAAgBAAQAAABAAAAQAAAAAAAAIADAHQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAgBAAIAAAAIAAgDQgDgDgDACIAAADQAAABABAAQAAAAAAABQABAAAAAAQAAAAABAAIgCAAIgBgBQgBAAAAAAQAAAAAAABQAAAAAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAIgIgCIgBgFIgBABQAAgBAAAAQAAgBgBAAQAAAAAAgBQAAAAgBAAIgCgCQAAAAAAAAQgBAAAAAAQAAABAAAAQAAABAAABQADABABAFQAAAEACACQgBABgFgDQgDgDABAFQAAABAAABQABAAAAABQAAAAABAAQAAAAAAAAIABACQAAABAAAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQgDgCABgDQAAAAAAAAQABABAAgBQAAAAAAAAQABAAAAAAQgDgFgCACQAAAAgBABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAQAAAAABAAQAAAAAAAAIABABQAAAAAAAAQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAABAAABQACgCADAFIgBACIgBgCQgBAAAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgEgCQAAgBAAAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAgBgBAAQAAgBAAAAIgCACQAAAAAAABQAAAAgBAAQAAAAAAABQAAAAgBAAIABgCIgDgCQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAABAAABIACAEIgFAGQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBgBAAABQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAABAAQAAAAABgBQACgCgBgDQAAAAAAgBQgBAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAgBAAAAQABgBAAAAQgBgBAAAAQgBABgGgGQAAAAAAAAQAAAAgBABQAAAAAAABQAAAAAAABIAEAEQgFACAAAFIgCgCIAAgCQgEADgGACQAAAAABABQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAABQgBAAAAABQAAAAABAAQAAABAAAAQAFAAABAFQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIgBgCQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAIAAgBIgBgCIgDgFQAAAAgBABQAAAAAAAAQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAgBgBABQgCAGgDACQgDgBgEACIgFADIgCgDIgCgCQgBAAAAAAQAAAAAAAAQAAAAABABQAAAAAAABQAAAAABAAQAAAAgBABQAAAAAAAAQAAAAgBAAIAAgBIgDAAQAAAAgBABQAAAAAAAAQgBABAAAAQAAABAAAAIAAgDIgCACIAAgEQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAAAABIgDACIACACQgCACgEAAIgEAAg");
	this.shape_46.setTransform(-20.7,-23.7,0.397,0.397);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#231F20").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_47.setTransform(-21.7,-9.9,0.397,0.397);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#231F20").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIgBAAIAAABIAAgBg");
	this.shape_48.setTransform(-22.1,-9.5,0.397,0.397);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#231F20").s().p("AAAAAIABAAIgBAAIAAAAIAAAAg");
	this.shape_49.setTransform(-23.1,-9.1,0.397,0.397);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#231F20").s().p("AAAAAIAAAAIAAAAIAAABIAAgBg");
	this.shape_50.setTransform(-24.2,-8.8,0.397,0.397);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#231F20").s().p("AkbDVIAAgDIgCACIgBgCIgBgBIADgGIABADQAAAAAAABQgBAAAAAAQAAABABAAQAAABAAAAQAAAAABABQAAAAAAAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBIgCACIAAgEIABgCIgBAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQgBgFAEAAQABAAAAABQABAAAAAAQABgBAAAAQAAAAABgBQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAAAGgCACIAEAAQgBgGACgCIABACIABgEQAAAAABgBQAAAAAAAAQAAAAAAgBQABAAAAAAIAMgDIABACQAAgDADgBIAEgEQACAAAEgCQADgDACACQAOgMAFgCIAAAEQAAgBABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIACABQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIABgDQAFAAADgJIACACQAAgDADgBIAGgCQABABAAAAQABAAAAABQABAAAAAAQABAAAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIACgEQAFgDADAAQADgFAHgFQAIgGACgEIACACQACgGAIgFQAIgGACgCIACAEQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBIADgCQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABABQAAAAABgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIABgEQAEgBAEgEQABAAAAAAQAAABAAAAQABAAAAABQAAAAABAAIACgDQABgBAAAAQAAgBAAAAQAAAAgBgBQAAAAgBgBQADAAADgFQAEgEAEAAIgBgDIAGgDQADgCABgDIABACQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQACgEAHgCIAJgFQAEgGAJgHIANgLIAAABQAAgCAFgCQAEgBgBgEIACAAIACABQAAgCAFgCQADgBABgCQADAAADgEQADgDACAAIAAACQABAAAAAAQAAAAABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAAAQABAAAAAAQAAAAABABQAAgBAAAAQAAAAAAAAQAAAAAAgBQgBAAgBAAQAFgDAGgFIALgLQAEgBACADQABAAAAABQAAAAAAAAQABgBAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAAAgBQAAAAgBAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAABABQABAAAAAAQABAAAAAAQAAAAABAAQAAgBgBAAIgBgCIAAgCIAGAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBAAAAIABABQAAgDADgEQADgDAAgEQAkgcAUgMIAcgRQASgLALgFIAHABIAEgFIABgBQABgBAAAAQABAAAAgBQAAAAAAgBQAAAAgBAAIAUgOQAAABAAABQAAABABAAQAAAAAAAAQAAAAAAAAIAAgDIABABQABgBAAgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQAHgHASgLQARgKAHgHQAEgCAGgKQAYgNACgSIAFAEQAEAEAAAEQACAHgFAIQgIAJAAAEIgCgBQAAgBgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAQgBAQgZAHIgBgBIgBADQAAAAAAABQAAABAAAAQgBAAAAABQAAAAgBAAIgBgCQAAABAAAAQAAAAAAABQAAAAAAAAQAAABgBAAIgBADIgEgCIABADQABAFgEACQgFACAAACIgBgBQgCAFgGAGIgKAJIgDgEQACADgEAEQAAAAAAAAQAAAAgBAAQAAAAAAABQAAAAgBABQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQABABgBAAQAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAAAABIgDgCQAAABAAAAQAAABAAAAQAAAAAAAAQgBABAAAAQgBgBAAAAQgBAAAAAAQAAAAAAABQgBAAAAAAIABABIgCABIgCABIAAgBIgDADQAAAAgBAAQAAAAAAABQAAAAAAAAQABABAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgHAIgVANQgBgBAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIgDAEIgCAAQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAAgBABQAAABAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBgBAAAAIgCAEIgCACIgBgCQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAABIAAgDQgBAAAAAAQAAAAgBABQAAAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQgBAAAAAAIgBgCQgBAFgGADIAAAAIgEACIgEADIgCgCQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQgHABgBADIgCgDQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIgDgBIAAgBQABgBAAAAQAAAAAAAAQAAAAAAAAQAAgBgBAAIgEAEIgBAGQAAAEgCACQABgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBAAIgBgCIAAAJIgCAAQAAgBAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIAAADQgDAEgDgEQABAAAAgBQAAAAAAAAQAAAAgBgBQAAAAgBAAIgDAEIAAgBQAAAAAAAAQAAABgBAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQABABAAAAQAAAAAAAAQAAADgDACIAAgEQAAAEgEAGIgBgDQgCAAgDAEQgCAEgDgBIACACIgDAAIgBAAQAAgBAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAIgBACIAAgBQgEAHgGAAIAAADIgBACIgBgCIgDABIgBABQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAIAAgCIgCgBQAAABAAAAQgBABAAAAQAAAAAAABQAAAAAAABIgBACIAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAABABIgCAAQAAAAgBABQAAAAgBAAQAAgBAAAAQgBAAAAgBIgCgDQgBABACAFIgBgBQAAABABAAQAAABAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAABQAAAAAAABIgEACQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgCAFgBAAIAAgCQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAABIAAACIgHgCQAAACADAEQgBAAAAgBQgBAAAAAAQgBABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAQAAgBAAgBQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBAAAAABQAAAAAAABQAAABAAABQAAABgBAAQAAAAAAABQgBAAAAAAIADADQAAgBAAABQgBAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQAAAAAAgBQgBAAAAAAIgCABQAAAAAAABQAAAAAAAAQABABAAAAQAAAAAAABQgCAAgFAEQgEADgEgCIAAABIAAACIgCgDQAAAAAAAAQgBABAAAAQAAABAAAAQAAABAAABQABAFgCAAQAAAAgBgBQAAAAAAAAQAAAAgBAAQAAAAgBABIAAADQAAAAAAAAQgBABAAAAQAAgBgBAAQAAAAgBAAIgCgEQgBAAAAABQAAABAAAAQgBABAAAAQAAABAAAAIgDgBIABABIgBACIAAgBIgCABQAAAAAAABQABAAAAAAQABAAAAAAQABAAABAAIgBAEQAAgBAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIgCABIAAADQAAAAAAAAQgBABAAgBQAAAAgBAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIgCgBQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQABABABABQAAABAAAAQAAABAAAAQAAABgBAAIgBgDIgDAAIACACIgBgBIgBADQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAIAAgBQgBAAAAAAQgBABAAAAQgBAAAAABQAAABAAABQgBAAAAAAQAAABgBAAQAAAAAAABQAAAAAAABIgEgDQgBAAAAgBQgBAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAABIADADIgFADQgCADgDgBIABADQgHAJgHgBIgCgDQAAAAAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAIAAABQABABABAAQAAABABAAQAAABABAAQAAAAAAAAQgDAGgFgBIABADQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAgBABIACACIgDgCIABADQABAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAIgCgCQgBAHgCAAIgDgCIAAACIAAABQgGABgCgBQAAAKgMAJIgBgCQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAABIAAABQgDgCAAgDQgBAAAAAAQAAAAgBABQAAAAAAABQAAAAAAABIAAADQAAAAAAABQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAABIgCABQAAAAgBAAQAAABAAAAQAAAAAAABQAAAAAAABQgBgBgCgEIAAADQgCgBAAgFQgBgEgCgCIgBACQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAHAEABQgBABABAEQABAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAAAQgBAAAAgBQAAAAABAAQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABgBAAIgBACQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABIABACIgCgBQAAgBAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIABADQAAAAAAABQAAAAAAAAQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAABAAAAQgBAAAAABIgCgFQAAgBgBAAQAAgBAAAAQAAAAgBAAQAAgBgBABIABAEQAAAAABABQAAABAAAAQAAABABAAQAAABAAAAQgCAAgBgEQAAAAAAAAQAAAAAAAAQgBABAAAAQAAABAAABQAAAAAAAAQgBABAAAAQAAgBgBAAQAAAAgBgBIACADIgEgCIgCADQAAAAAAABQAAAAgBAAQAAgBAAAAQgBAAAAgBIgBACQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAABABIACgBQAAgBAAAAQAAAAAAAAQABABAAAAQAAAAABABQgBgBAAAAQAAAAgBAAQAAAAAAAAQAAABAAAAIgBADIgBgBIgBABIAAABIgCgBIABADQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAAAgBAAIABgDIgCAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAABIACAHIgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAABIAAgEQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQAAAAgBABIAAADQABABAAAAQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAgBgBAAIgBgCIAAADIABACIgIgDIAAgFIgBABQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgCgCQAAAAAAAAQAAAAgBAAQAAABAAAAQAAABAAABQADACAAAEQAAAFACABQgCACgEgEQgDgDABAFQAAABABAAQAAABAAAAQAAABABAAQAAAAAAAAIAAACQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgCgDQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAABAAAAQAAAAABAAQAAAAAAAAQABAAAAgBIgCgDQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAAAgBABQAAAAgBABQAAAAAAABQAAABAAAAQAAABAAAAQABAAAAABQAAAAAAAAQABAAAAAAQAAAAAAAAIABABQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAABAAAAQAAABAAABQADgCACAFIgBACIgBgCQAAAAgBAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAIgDgDQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAABgBQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAAAgBABQAAABAAAAQgBABAAAAQgBAAgBAAIABgCIgDgCQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAIAAgCQgDABgEgHIgBADIADAFQgFABAAAGIgCgCIAAgDQgEAEgGABQABAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABIgBABIgCgEQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAAAAAAAQgDAFgDACQgDgBgEACIgFAEQgCgGgCAAIAAACQABAAAAABQAAAAAAAAQAAAAgBAAQAAAAgBAAIAAgBIgDABQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAABIAAgEQAAgBAAAAQgBAAAAABQAAAAAAAAQAAABAAAAIgBgEQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAABIgDACIACACQgCACgEAAIgDAAgAjnDRQAAAAAAAAQAAAAAAABQAAAAgBgBQAAAAgBAAIAAAAIgBgCIADABQABAAAAABQABAAAAABQAAAAAAAAQAAABAAAAIgCgCgAjaDNQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAABABAAQAAAAABAAQAAAAABAAQAAAAABgBQACgCAAgDQAAAAgBgBQAAAAAAAAQAAAAAAgBQABAAAAAAIABAAIgBABIACAEQgDACgCAEQAAgBAAAAQAAAAAAAAQgBgBAAAAQgBAAAAABg");
	this.shape_51.setTransform(-14.7,-17.1,0.397,0.397);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#231F20").s().p("AAAAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABg");
	this.shape_52.setTransform(-17.6,-4.2,0.397,0.397);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#231F20").s().p("AkMDNIgBAAIgBgGQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAABABIABACQAAAAABABQAAAAABAAQAAAAAAAAQABgBAAAAIgBgDIAAACIgCgGIgBABQAAgCACgCQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABAAQgDgEAEgBQABABAAAAQABAAAAgBQABAAAAAAQAAgBABAAIACgEQACAFgBADQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAIgBgJIACACQgBgFADgBIALgFIACACQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAIAEgEQACAAAEgCQADgCACABQAMgJAHgDIABAEQAAAAAAAAQAAgBAAAAQAAAAABAAQAAABAAAAIACABQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIABgEQAGACADgJIACADQAAgEADAAIAHAAIACACIAEgIQAEgCAFABQADgFAIgDQAIgEACgDIACACQADgFAIgDQAJgDACgDIACAFQAAAAAAAAQABAAAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIAEgCQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQACAAABgFQAEAAAFgEQAAABAAAAQABABAAAAQAAAAAAABQABAAAAAAIADgCQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBgBAAAAQADAAAEgDQAEgEADABIAAgDQAJgBABgEIABABQAAABABAAQAAAAAAAAQAAAAAAAAQAAAAABAAIgBgDQADgDAGgBQAHgCADgBIAagSIABABQAAgDAEAAQABAAABgBQABAAAAAAQABgBAAgBQAAAAgBgBIADAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAgCAEgBQADgBAAgDIAAABQADAAACgDIAFgDIAAACQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABABQAAAAAAAAIgBgCQAFgCAHgGIAKgLQADgBACAEQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAABABQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAgBgBIgBgCIAAgBIAGgBQAAAAAAAAQABAAAAgBQAAAAABAAQAAgBAAgBIABACQAAgDACgEQACgDgBgCQAKgIANgPIAUgXIAWgVQAOgPAJgHIAGgBQABgBACgEIABABQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBgBAAQAAgBAAAAIAPgRQAAABAAABQABAAAAABQAAAAAAAAQAAAAAAgBIAAgCIAAAAQABgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAQAFgKAPgNQARgRAFgFIAMgOIAWgMQAOgHAJgHIAAAGQAAAHgDADQgBAGgJAFQgIAGgCAFIgCgCQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQgCAOgYAJIAAgCQAAAAgBABQAAAAAAAAQAAABAAAAQAAABAAABIgBADIgCgBQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABIAAACIgGgBIACADQACAEgDACQgEADAAADIgCgBQAAAFgEAHIgHALIgDgDQACACgCAFQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABIgDgBQAAABABAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAIABABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIgBAAIgCADQAAABAAAAQAAAAAAAAQAAABAAAAQABAAAAABQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgEAIgQASIgFgBIAAADIgBADIgBgBIgBAAQgBAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBAAIAAAEIgCADIgBgCQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIgCgCQAAAAgBABQAAAAAAAAQAAAAAAABQAAAAAAABQABAAAAABQABAAAAAAQAAABAAAAQgBAAAAAAIgCgCQABAFgEAFIgBgBIgEADIgCAEIgCgBQgBgBAAAAQgBAAAAAAQAAAAAAAAQgBAAAAABQAAAAABABQAAAAAAAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAAAABQABAAAAAAQAAABABAAQgHAEAAACIgCgDQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAABAAIgEgBQABAAAAgBQAAAAAAAAQAAAAAAgBQAAAAgBAAQgCAEgBAAIABAGQABAEgBACQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAAAAAAAIgDgCIADAIIgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIABACQgCAEgEgDIAAgBIgBgBIgCAEIgBAAQAAAAAAAAQAAAAAAAAQAAABAAAAQgBAAAAABQABAAAAABQAAAAAAAAQAAABABAAQAAAAABAAIgBgBQgBAAACAAQABADgEADIgBgDQAAADgCAGIgBgCQgDAAgCAEQgBAEgDgBIABACIgCAAIgBAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBABIAAACIAAgBIgDAFQgDAEgDAAIAAADIgBADIgBgDIgBABIgBAAIAAAAQgBABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAIgBgCQAAgBAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABIAAABIAAACQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgBABQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAIgCgDQgBABABAFIgBgBQABAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAIgEACQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAFgCAAIAAgCQgBAAAAAAQAAAAAAAAQgBAAAAABQAAABAAAAIgHgBQgBABADAFQAAgBgBAAQAAAAgBAAQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBABAAAAQAAAAAAABQAAABAAABQgBAAAAABQAAAAgBAAQAAAAAAAAIACAEQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAgBIgCACQAAAAgBAAQAAAAAAABQAAAAABAAQAAABABAAQgDAAgFADQgCADgDgDIgBABIAAACQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAgBQAAgBAAABIAAACQAAAAgBgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQgBAAAAAAQAAAAAAABQgBAAAAABQAAABAAABQABAEgCABQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAAAgBAAIAAAEQgBABgEgGIgCAEIgCgCIAAABIgBACIAAgBQAAAAgBgBQAAAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQABAAAAAAQABABAAAAQABAAAAAAIAAADQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAAAAAAAIgDABIAAADQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAgBgBQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAgBIgCgBQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAABIABADQABAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAIAAgDIgDAAIACACIgBgBIgBADQAAAAgBABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAIAAgBQgBAAgBAAQAAAAgBAAQAAABAAAAQAAABAAABQgBAAgBABQAAAAAAAAQgBABAAAAQAAABAAAAIgEgEQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABIACADIgFADQgCACgDgBIAAADIgHAEQgEACgEgCQABAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAABAAAAQAAAAAAAAQAAgBAAAAIAAACQAAABABAAQAAABABAAQAAABAAAAQABAAAAAAQgEAFgFgBQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQgCgFgCAEIABACIgCgBQAAABAAABQAAAAAAABQAAAAAAAAQgBABAAgBIgCgCIgCAEQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAIgDgDIAAACIABACIgIgCQgCAJgOAGIgBgCQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAAACQgDgDAAgDQAAAAgBAAQAAAAAAAAQgBABAAAAQAAABAAAAIgBAEIABAAQAAgBABACIgDAAQAAAAAAABQAAAAgBAAQAAAAAAABQAAAAAAABQgBgCAAgDIgBACQgCgCABgEQAAgEgBgCIgBABQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAIAAAEIACAEQgBABAAAEQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAABIgCACQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBAAIgBgCQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAIAAADIABACQABAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAAAABIgCgFQAAgBAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAIAAAEQAAADABACQgCgBAAgEIgCADQAAAAAAAAQAAABgBAAQAAgBAAAAQgBgBAAAAIABADIgDgDIgCADQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBIgBACQgBAAAAAAQAAABAAAAQAAAAAAABQABAAAAAAIACAAIACABQAAAAgBAAQAAgBgBAAQAAAAAAABQAAAAgBAAIAAADIgBgCIgBAEQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIAAADQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAIABgCIAAAAIAAAAIgCgBIAAAIIAAAAIgBABIAAgEIgBgCQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAQgBAGADAAIgCAAIgBgCIAAACIAAACIgGgEIAAgFIgCABQABgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBgBAAAAIgCACQADADgBAEQAAAEABACQAAACgEgFQgCgEAAAFIABADIAAABIAAACQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAIgCgEQAAAAgBgBQAAgBAAAAQgBgBAAAAQAAgBAAAAIABABIABgBIgBgDQAAAAgBgBQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAABQgBABAAAAQAAABAAAAQAAABABAAIAAABQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgCABQgBAAAAAAQAAAAAAAAQAAABAAAAQAAABABABQACgDABAGIgBACIgBgCQAAAAAAAAQgBABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQgBABAAAAIgDgEQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAABgBQAAAAAAAAQAAgBAAAAQgBgBAAgBQAAAAAAAAQgBAAAAABQAAAAAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIABgCIgDgCQAAAAAAAAQgBgBAAABQAAAAgBAAQAAAAAAABIACAEQgDACgCADQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAAAAAgBQABAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBQgDABgEgHIAAACIACAGQgDAAgBAGQgBgBgBAAQAAgBgBgBQAAAAAAgBQAAAAABgBQgEAEgFABQAAAAAAABQABAAAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQAAAAAAABQABAAAAAAIAEACQAAAAAAABQAAAAABAAQAAABAAAAQAAABAAAAIgCgCQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgBgBIgBgCIgDgFQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAAAAAAAQgCAEgDADQgCgBgDACIgEAEQgEgEgBAAIABACQAAAAAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAIAAgBQAAAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAQAAABAAAAQAAABAAAAIgBgDIgBACIgCgDQgBAAAAgBQAAAAgBABQAAAAAAAAQAAAAAAABIgCACIADACQgCAEgFABIgBgCIAAADIgCgCgAA5AqIAAgBIAAgBIAAACgAiICcIABgBQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAg");
	this.shape_53.setTransform(-10.9,-11.2,0.397,0.397);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#231F20").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_54.setTransform(-13.9,0.3,0.397,0.397);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#231F20").s().p("AAAAAIAAAAIABAAIgBAAIAAABIAAgBg");
	this.shape_55.setTransform(-14.2,0.6,0.397,0.397);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#231F20").s().p("AAAAAIABAAIgBAAIAAAAIAAAAg");
	this.shape_56.setTransform(-15.1,1,0.397,0.397);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#231F20").s().p("AAAAAIAAAAIAAAAIAAABIAAgBg");
	this.shape_57.setTransform(-15.9,1.5,0.397,0.397);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#231F20").s().p("AkLDLIgBABIgBgIQACABABAFQABAAAAAAQAAAAABAAQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIgBACQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAgCIgBABQAAgBAAAAQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAAAABQABAAAAABQAAAAABAAQAAAAABABQgDgEAEgCQAAAAABAAQAAAAAAAAQABAAAAAAQAAgBABAAIACgEQABAEAAADQAAABABAAQAAAAABgBQAAAAABAAQAAAAABgBQgDgGABgCIABACQgBgFACgBIALgHIACACQgBgDACgBQABgBABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQACAAAEgEQADgDACACQAJgKAHgFIABAEQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIACABQAAgBgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAgDQAFgBADgIIABACQABgDADgBIAGgCQAAABABAAQAAAAABABQAAAAABAAQAAAAAAAAQAAgDACgGQAFgDAEABQACgGAHgEQAIgFACgDIACACQACgGAIgEQAJgEACgDIABAEQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBIADgCQABAAAAgBQABAAAAAAQABAAAAAAQAAABABAAQACAAABgFQAEgBAEgEQAAABAAABQAAAAAAAAQABABAAAAQABAAAAAAIADgDQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAgBgBgBQADAAAEgDQAEgFADABIAAgCQAJgCABgFIABACIABAAIgBgDQACgDAHgBIAJgEQAFgFAIgGIANgIIABABQAAgDAFAAQAEgBgBgEIACAAIABABQAAgCAFgBQADgBABgCQADAAADgDQADgCACgBIAAADQAAAAAAAAQABAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAABAAQAAAAAAAAQABABAAAAQAAAAABAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAEgCAGgEIALgKQAEgBACADQAAABABAAQAAAAAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQABABAAAAQABAAAAAAQAAAAABAAQAAAAAAgBIgCgCIAAgBIAGAAQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAABgBIABACQAAgEADgDQADgDgBgEIAZgTIAYgTQAIgFARgNQAPgNAKgEIAHAAIADgFIABABQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAIAIgHIAJgJIAAADIACAAIgBgDIABABQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBAAQAHgJAQgKQARgLAGgHQAEgCAHgKQAOgHAGgEQAKgHAFgJIADAFQACAGgBADQAAAHgHAGQgIAGgBAFIgCgBQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAABAAAAQgCAPgXAGIAAgBQgBAAAAAAQAAAAAAABQgBAAAAABQAAAAAAABIgBADIgCgCQABABAAAAQAAAAAAABQAAAAgBAAQAAABAAAAIgBADIgFgCIACADQABAEgEACQgEACgBADIgBgCQgBAFgFAGIgJAJIgDgDQACADgCAFQgBgBAAAAQAAAAgBABQAAAAAAAAQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAAAAAIgBAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAABABABIgDgCQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAABAAAAIAAABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgCAAIAAAAIgDADQgBAAAAABQAAAAAAAAQAAAAABABQAAAAAAABQAAgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAgBgBAAQgEAGgTARIgEgCIgCACQAAAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAIgCgBQAAAAAAAAQAAAAgBABQAAAAAAAAQAAABAAAAQAAABAAABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIgBAEIgCADIgBgCQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAQAAABAAAAIgBgCQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAABABQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAIgBgCQAAAFgGAEIAAgBIgEADIgDADIgDgCQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAABABQAAAAABAAIgIAFIgCgEQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIgCgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQgDAEgBgBQAAALgCAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAIgCgCIAAAAIAAAAIABAKIgBgBQgBAAAAgBQAAAAAAAAQAAAAAAAAQgBAAAAABIABACIgCACQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAABAAQAAgBgBAAQAAAAAAAAQAAAAgBAAIgCADIgBgBQAAAAAAABQAAAAgBAAQAAAAAAABQAAAAAAAAQAAABAAABQAAAAAAABQAAAAABAAQAAAAAAABIAAgBQAAgBABAAQAAADgDACIgBgCQgBAEgDAFIAAgDQgDAAgCAEQgCABgDgBIACACIgDgBQAAAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAIgCADIAAgCQgEAJgGAAIAAADIAAABIgCgCIgCABQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAIgCgBQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAAAIgBACQAAAAABABQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgCABQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAIgCgEQgBABACAFIgBgBQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIgEACQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAAAgBAAIgDAEIAAgBIgCAAIgBABIgGgBIACAGQAAgBgBAAQAAAAgBAAQAAAAAAAAQgBABAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBAAAAAAQAAgBAAgBQAAgBgBgBQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABAAABQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBAAIADADQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAABQAAAAAAAAQgBAAAAgBQAAAAAAgBIgCACQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAABABQgCAAgFACQgEADgEgDIgBABIABACQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAgBQAAAAABAAIAAACQgBAAAAAAQgBAAAAgBQgBAAAAgBQgBgBAAgBQAAAAgBABQAAAAAAAAQAAABAAABQAAABAAABQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAAAgBAAQAAAAAAAAIAAADQgCABgDgFQgBAAAAABQAAABgBAAQAAABAAAAQAAABAAAAIgDgCIABABIgCABIABgBQgBAAAAAAQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAABAAQAAABAAAAQABAAABAAQAAAAABAAIgBAEQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBAAgBABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAAABQAAABgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIgBgBQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAABAAAAQABABABABQAAABAAABQAAAAAAAAQgBABAAgBIgBgDIgDAAIACACIgBAAIgBADQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAABABIgEAAIAAgBQgBAAgBAAQAAAAgBABQAAAAAAABQAAAAAAABIgBAAQAAAAgBAAQAAAAAAABQgBAAAAABQAAABAAABIgDgFQgBAAAAAAQgBgBAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIACAEQgBAAgDADQgCACgDgBIAAADIgGAEQgEADgDgCIgCgDQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAAAAAIAAABIADADQgDAHgFgCIABACQgDgFgCAEIABACIgCgBIABACQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgCgDQgBAIgDgCIgDgBIAAABQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAABAAQgHAAgBgBQgBAKgNAHIAAgCQgBAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAABIAAABQgDgDAAgDQgBAAAAABQAAAAAAAAQgBAAAAABQAAAAAAABIAAADQAAABAAAAQAAAAAAAAQAAAAAAAAQABAAAAgBQAAgBAAACIgBABQgBAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQgCgBAAgDIgBACQgCgBAAgEQAAgFgCgBIgBAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAAAgBAAIABAEQAAABAAABQABAAAAAAQAAABAAAAQABAAAAAAQgBACACAEQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAIAAgCQAAAAABAAQAAgBAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBABAAAAIgBACQAAAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAABIAAADIACABQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAAAABQgBAAAAAAQAAAAAAAAQAAABAAAAQgCgIgDABIABADQAAABAAABQAAAAABABQAAAAAAABQABAAAAABQgDgBAAgEQAAAAAAABQAAAAgBAAQAAAAAAABQAAAAAAABQAAABgBAAQAAAAAAAAQAAAAgBAAQAAgBgBgBIACAEIgEgDIgBADQgBAAAAAAQAAABAAgBQgBAAAAAAQAAAAgBgBIgBACQAAAAAAAAQAAABAAAAQAAAAABAAQAAABAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIAAADIgBgBIgBABIAAADIgCgDIABADQAAAAAAAAQAAABgBgBQAAAAAAAAQgBAAAAgBQgBgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIABgDIgBAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIADAIIgBAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAAgDIgCgCIgDAAIAAADQAAAAAAABQABAAAAABQAAAAAAAAQABAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAIgHgDIgBgEIgBABIgBgEIgCgCQgBAAAAAAQAAAAAAABQgBAAAAABQAAAAAAABQADACABAEQAAAEACACQgBACgEgFQgEgDABAGQABAAAAABQAAABABAAQAAABAAAAQAAAAABAAIAAACQAAABAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBgBAAAAQAAgBAAAAQAAgBAAAAIABAAIABgBQgDgEgCABQAAABgBAAQAAABAAAAQAAABAAAAQAAABABABQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIABABQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAABQABABABABIgBACIgBgCQAAAAgBAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAgBAAQAAAAAAAAIgEgCQAAAAAAgBQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBgBIgBADQAAAAgBABQAAAAAAAAQAAAAAAAAQgBAAAAAAIABgBIgDgDQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAABIACAEQgCACgBAEQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAAAgBAAIgBgCQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQgBAAAAgBQgBABgGgFIgBACIAEAEQgEACABAFQgEgCABgCQgCAEgGACQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAIgBABIgDgEQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBADgDAFQgDAAgCACIgDAFQgEgFgCAAIABACQABAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAABIgBgBIgCABQgBAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABIgBgCIgBABQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQAAAAAAABQgBAAAAABIgBACIADABQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAAAAAIgCgBIAAACIgCgCgAjcC7QAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAgBIgBAAIgBgBQABgBAAAAQAAAAABABQAAAAABAAQAAAAABABIACACIgCgCgAA5ACIAAAAIAAAAIAAAAg");
	this.shape_58.setTransform(-6.9,-6,0.397,0.397);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#231F20").s().p("AAAAAIABABIgBAAg");
	this.shape_59.setTransform(-0.8,-4,0.397,0.397);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#231F20").s().p("AAAAAIAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAgBAAg");
	this.shape_60.setTransform(-10,4.3,0.397,0.397);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#231F20").s().p("AjwDAIgCACIgBgCIgBAAIACgEIgBgCIAAACQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAABAAAAQABAAAAAAQABAAAAAAQABAAAAAAQgFgBAEgEQAAAAABAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAAAgBQABAAAAAAIAFAGQABAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAIgGgGIACABQgEgEACgCIAFgKIADABQgCgCAAgDIABgFQACgBAAgFQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAEgOAEgFIADACQAAAAgBAAQAAgBAAAAQAAAAABAAQAAAAAAAAIACAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAgBgBIgBgDQAFgCgCgJIADACQgCgEADgCIAEgDIAEAAQgCgDAAgGQADgDAEgCQABgFAEgGIAHgLIACABQABgGAFgGIAIgKIAEAEQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBgBAAQAAgBAAgBQAAAAgBAAQAAgBgBAAIADgDQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAIAAgDQAEgCADgEQAAAAABABQAAAAAAAAQABAAAAAAQAAAAAAAAIADgCQAAgBAAAAQAAAAAAgBQgBAAAAgBQgBAAgBgBQADAAADgFQADgEADAAIgBgDQAJgDABgCQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAIgBgBQACgEAGgCIAIgEQAFgHATgOIAAABQAAgDAFAAQAEgBgBgEIACAAQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAQABgCAEgBQAEgBAAgDIAAABQACAAADgDQADgCACAAIAAACQAAAAAAAAQAAAAABAAQAAAAAAgBQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQAFgCAGgGIAKgJQAEAAACADQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAgBIAAgBQAAAAAAAAQABAAAAAAQAAAAABAAQABAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAAAIgCgCIAAgCIAGAAQAAAAABAAQAAAAABAAQAAgBAAAAQABgBAAAAIAAACQABgDACgEQADgDAAgDQAfgYARgKQAHgDASgLQAQgJAKgEIAHABIAEgEIAAABQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAUgLQAAABAAABQAAAAAAABQAAAAAAAAQABABAAgBIAAgDIABABQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAJgHASgFIAdgIQAIgBAIgFIAYABQAMABAKgEQgBAKgGAEQgEAFgIAAQgKABgDAEIgBgCQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAQgGAJgYgCIAAgBIgCACQgBAAAAABQAAABgBAAQAAAAAAABQAAAAgBAAIgBgDQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAIgCACIgDgEIAAAEQAAAEgEABQgFAAgBADIAAgCQgDAEgGAEIgKAHIgCgEQABADgDADQAAAAAAAAQAAAAgBAAQAAAAAAABQAAAAgBABQAAABAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIgDgBQABAAAAABQAAAAAAAAQgBABAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIAAABQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgCABIAAgBIgDACQAAAAgBABQAAAAAAAAQAAAAAAABQABAAAAABQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBAAQgFAGgUAMIgDgCIgDAEIgCgBQAAAAgBAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAQABAAAAgBQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAABgDAFIgBgDQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAQAAAAAAABIgBgDQAAAAAAAAQgBABAAAAQAAAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIgBgDQAAAFgGADIgBgBIgHAGIgCgDQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAAAAAQAAABABAAQAAABAAAAQgGACgBABIgCgDQAAAAAAAAQAAgBgBAAQAAAAAAgBQABAAAAAAIgDgCQABAAAAAAQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAABgBABQAAABgBAAQAAABAAAAQgBAAAAAAIAAAGQAAABAAAAQgBABAAABQAAAAgBABQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAIgCgDIAAAKIgBgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAABAAAAIAAADQgDADgCgEQAAAAAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAIgDADIAAAAIgCABQAAABAAAAQABABAAAAQAAAAAAABQAAAAABAAIAAgBQgBgBABABQABADgEACIAAgDQgBADgDAGIgBgDQgCAAgCADQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIACACIgCAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAgBQAAAAAAAAQAAAAAAABQgBAAAAAAIAAABIAAAAQgDAIgHAAIAAACIAAADIgBgDIgDABQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAQABAAAAAAQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAABAAAAQAAAAAAABIAAACIAAABQAAAAgBAAQAAAAAAAAQAAABABAAQAAAAAAAAIgCABQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAIgCgEQgBABACAFIgCgBQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAQAAABAAAAIgEABQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBAFgCAAIAAgCQAAAAgBAAQAAAAAAAAQAAAAgBABQAAABAAAAIgGgCQgBACADAEQAAgBgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQAAABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAAAAAQAAAAgBABQAAAAAAABQAAABAAAAQAAABAAABQAAAAgBAAQAAAAAAAAIADADQAAAAgBAAQAAAAAAAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAQAAgBAAAAIgCABIABADQgCAAgEADQgEACgEgDIAAACIAAABIgCgCQAAAAAAAAQAAAAgBABQAAAAAAABQABAAAAABQABADgCAAQgBAAAAgBQAAAAgBAAQAAAAAAAAQAAAAgBAAIABAEQgCAAgEgEIgBADIgDgCIABACIgBABIAAgBQgBAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAABQAAAAABAAQAAAAAAABQABAAAAAAQABAAABAAIAAADQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAAAgBAAIgBABIgBABIgCgBQAAAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAIACADQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAIgBgEIgCABIABACIgBgBIAAADQAAAAgBAAQAAABAAAAQAAAAAAABQABAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQgBAAgBAAIAAgBQgDgBABAFIgBgBQAAABAAAAQgBAAAAABQAAAAAAABQAAAAAAABIgEgEQgBAAAAAAQgBgBAAAAQAAAAAAABQAAAAAAAAIAAADQABABAAAAQAAABAAAAQABABAAAAQAAAAABAAQgBAAAAAAQAAABgBAAQAAAAgBABQAAABgBAAQgCADgDgBIABADIgEAFQgDADgEgBIgCgDQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQABABAAAAQAAAAAAABIAEACQgCAGgEgBQAAAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAgBQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAAAAAABQgBAAAAAAQAAAAAAABQAAAAAAAAIABACIgCgBQAAABABABQAAABAAAAQAAABAAAAQAAAAgBAAIgCgCQAAAGgBAAIgEgBIABABIABABQgFACgDgBQACAJgIAJIgBgCQgBAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIABABQgEgBAAgDQgBAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABIABADIAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIgBACQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAABAAIgEgDIAAACQgCgBgCgEQgCgEgCgBIgBACQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIADAEIADACQAAABAAAAQAAABABAAQAAABAAAAQABABAAABQABAAAAABQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQgBAAAAABQAAAAAAAAIADABIABADIgCgCQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAIACADQAAAAAAAAQABABAAAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABIgDgDQgBgBAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAIADADQAAAAAAABQABAAAAABQABAAAAABQABAAAAAAQgCAAgCgDQAAAAgBAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBgBQAAAAgBAAIACACIgEgBIAAADQAAABAAAAQAAAAgBAAQAAAAAAAAQgBgBAAAAIgBABQAAABAAAAQABAAAAABQAAAAAAAAQABABAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIADABQgBAAAAgBQgBAAAAAAQAAAAAAABQAAAAAAAAIABADIgCgBIAAACIAAAAIgBAAIACACQAAAAAAAAQgBABAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQAAABAAAAIgBgCIgCAAIAFAGIgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIgCgDIgCAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQACAFADAAIgBAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAABABAAIABABIgHAAIgDgDIgBABQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAIgDgCQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAEABACADIAEAFQAAABgFgCQgEgBADAEQABABAAAAQABABABAAQAAAAAAAAQABAAAAAAIABACQAAAAAAAAQABABAAAAQAAAAgBAAQAAABAAAAIgEgCQAAAAgBgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAIgDgCQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAABQgBABABAAQAAABAAAAQABABAAAAIACAAQAAAAAAgBQAAAAAAAAQAAAAABABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAAAQAAAAAAABQAAAAABAAQAAABABAAQAAgCAFADIAAACIgCgBQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAgBAAIgEAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAgBgBAAQAAAAAAgBQgBAAgBAAIAAACIgBACIAAgCIgDAAQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAQABAAAAABQABAAABAAQgBADAAADQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAABIgCgCQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQgBABgHgDQAAABgBAAQAAAAAAAAQAAABABAAQAAAAAAABIAGACQgEADAEAEQgBAAgBAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBADgDAFQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAIABACIgFgCQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAIACAIQgFACABAHQgCABgFgBQAAAAAAAAQABAAAAABQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAIgBAAIgBACQAAABAAAAQAAAAAAABQAAAAAAAAQABAAAAABIgDgCIABACIgEgBQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAAAABIAAADIADgBIAAAEIgHAGgAjwC/QAAABAAAAQABAAAAAAQAAAAABAAQAAgBABAAQAAgBAAgBQAAAAAAgBQAAAAAAAAQgBAAAAAAIAAACIgCgBIAAACgAjVCfIABAAQAEgCADADIgDgBQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIgBABIgDgCgAhcALQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIABABIgBABIgBgCg");
	this.shape_61.setTransform(-2.8,-0.4,0.397,0.397);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#988575").ss(0.1,0,0,4).p("AAxB2QgIAGgJgCQgIgXgYgsQgXgsgIgUQgGgSgCgmQgDgngGgS");
	this.shape_62.setTransform(24.8,38.1,0.397,0.397);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#988575").ss(0.1,0,0,4).p("AAxA4QgJgCgmgwQgrg2gHgH");
	this.shape_63.setTransform(32.4,34.8,0.397,0.397);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#988575").ss(0.1,0,0,4).p("ABXB0QgngDgzgTQg9gXgMgaQgLgWALg3QALg8gJga");
	this.shape_64.setTransform(33.4,46.9,0.397,0.397);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#988575").ss(0.1,0,0,4).p("Ag5BjQAHgCASgpQAXg0ADgEQAGgNAcglQAXggAHgQ");
	this.shape_65.setTransform(27.2,41.8,0.397,0.397);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#988575").ss(0.1,0,0,4).p("AEVAnQg5AMjfguIjVguIg7AV");
	this.shape_66.setTransform(23.7,52.1,0.397,0.397);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#231F20").ss(0.1,0,0,4).p("AgSAIIAlgP");
	this.shape_67.setTransform(8.4,44.2,0.397,0.397);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#988575").ss(0.1,0,0,4).p("AmHhoICZBEQChBBAmgGIGwBR");
	this.shape_68.setTransform(15.5,48.1,0.397,0.397);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#988575").ss(0.1,0,0,4).p("AgSjwIAVBgQAfBfAsgDICyBRQC3BfAeA8IArAxQgZAPhFgrIg/guQgKgYkThVIkQhOQg4AAiHhcIh7hc");
	this.shape_69.setTransform(14.6,44.8,0.397,0.397);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#988575").ss(0.1,0,0,4).p("AhuAAIAygGQA6gFArAMIAbAHQAeADAJgL");
	this.shape_70.setTransform(10.3,38,0.397,0.397);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#988575").ss(0.1,0,0,4).p("AAFgJIABAJQgCAHgOgC");
	this.shape_71.setTransform(13.1,46.1,0.397,0.397);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#988575").ss(0.1,0,0,4).p("AnujhIAMAKQAPAKAXAFQBHAQBugtIDoCkQD7CkBkANIBLA6QBPA6AYAD");
	this.shape_72.setTransform(14.2,44.4,0.397,0.397);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#202020").s().p("AAAAAIAAAAIAAAAg");
	this.shape_73.setTransform(41.5,49.7,0.397,0.397);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#202020").s().p("AheCHIAAgEIgDACQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIAAgCQAAAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAIgCgBQAAABAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAIAAgCIgEABIgBgCQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAgBQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBIgCACIAAgCIgCAAIAAgDIgBABQABABgBgBQAAAAAAAAQgBAAAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAIgBgCIAAAAQABgBAAAAQAAgBgBgBQAAAAAAAAQAAgBgBAAIABAAQAAAAAAgBQgBAAAAAAQAAABAAAAQgBAAAAABIgCAEIgBgDIgBAEQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAIAAAAIABgBIABgFIABgDIABAAIACgHIABgBQgNgGAFgBIgBggQABgBABgBQABAAAAgBQAAAAAAAAQgBAAgBAAQABAAABgBQABAAAAAAQAAgBABAAQAAgBAAgBQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIgBgCIABAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBAAAAgBIgDgCIADgCQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgNgGgEQABAAABgBQAAAAABgBQAAAAAAgBQAAAAAAgBIgBgEIACgBIgDgBIADgDIgBABIgBgBQAAAAAAgBQAAAAAAAAQABAAAAAAQABAAABgBIgJgHIACAAQAAAAgBgBQAAAAAAAAQAAgBABAAQAAAAABgBQABAAAAgBQAAAAAAAAQAAgBAAAAQgBAAgBgBQgEgCAEgLIgCgDIgCAEIABgFIABABIgFgMQACgEAAgKQAAgIAEgFIgGgCIAGgBQAAgCgFAAIADgCQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQABAAAAgBQAAgBAAAAQAAgBgBAAQAAAAgBgBQAAAAABAAQAAAAABAAQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQABABABAAQABAAAAAAQABAAAAgBQAAAAAAgBQgBAAAAAAQgBgBAAAAQAAAAAAAAQgBAAAAgBIAAgDQAAAAAAAAQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAgBAAAAIAAABIABgCQAAgBABAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIgCgBQAAABAAAAQgBAAAAAAQAAgBAAAAQAAAAgBAAQAFgBABACIABgCQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAIgCABIAHgKQAAABAAAAQAAAAABAAQAAABABgBQAAAAABAAQgBgCABgDIABgEIAEABIgBgBIACAAIAAgFQABABAAAAQABAAAAAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAgBAAAAQAAgBAAAAIgCgBQAEAAABgCIABACQAIgDALgHIAAABQADgBAIgEQARgBALAIIACgCIgBACQAFABADAFQAEAFACABIABgDQAAABAAAAQAAAAABABQAAAAAAAAQABAAAAAAIgBACIAKABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAIABACQABAAAAgBQABAAAAAAQABAAAAAAQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAAAQABAAAAAAIAAAAIADABIgBABQABABAAAAQABABAAAAQABAAAAAAQABAAABAAIgBACQAAAAAAAAQAAABAAAAQAAAAAAAAQABAAAAAAIAEgCQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAABAAAAQAAABABAAQAAAAAAAAQAAAAABAAIgCABIACABIAAAAIAAACQAAAAAAABQAAAAABAAQAAAAAAAAQABAAAAAAIgBAAIAIAFIgBABIAEgBIgBABIABACQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAABAAAAQABAFABAAIgBABQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABQADgEACAAIgCACIABABIAAAAQAAAAgBABQAAAAAAAAQAAAAAAAAQABAAAAAAIAAABQABABAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIABgBQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQAAABAAAAQAAAAAAABIAEAAIgBACQABgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAIgCABQAAAAAAABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBQAAABAAAAQAAABAAAAQABAAAAABQABAAABAAIgCABIACABIgCABIACACQABAAAAABQAAAAABAAQAAAAAAAAQABAAAAAAIAAgBQABACAGAAIgCACQACABADgDIgBABIgBACIADgCIgCACQADAAACAFQADAEADgDIABgDQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABQAAABgBAAIABgBIAAADIACgEIgBADIABgBIgBACQABAAAAgBQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIAAABQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAABIACABIgBACIACAAIAAgCIAAADIABgCIAAACQAAAAAAAAQABAAAAAAQABAAAAgBQAAAAABgBIAAAEIABAAIABgBIABACIAAgDIABABIAAgBIABAAIAAACQABABAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIgBgCIADAAIABADIAAAAQAAAAABABQAAAAAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAABABIgBgBIAAgCQAAABABAAQAAAAABAAQAAAAAAAAQABAAAAgBIgBgCIAGACQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgCIADACQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAAAABAAIgDgBIADAAQABABAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIgCgBIAAgCIACAAIABAAIAAgBIABAAQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAIACAAIgDgBIABgBIADAAIgCgBIABAAIgBgCIADACIADAAQgBAAgBgBQAAAAgBgBQAAAAAAAAQAAgBABAAQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAgBABABQAAAAABAAQAAAAAAAAQABgEgCgDQABAAABAAQAAAAABAAQAAAAAAAAQAAgBAAAAIgCgDIACAAIgBgDQABAAAAAAQAAABABAAQABAAAAgBQABAAABAAIgEgDIAFACQAAAAABAAQAAAAAAAAQAAAAAAAAQAAgBgBAAIABAAIAAgCQABAAAAABQABAAAAAAQAAAAABAAQAAAAAAAAIgBgCIABAAIgEgDQAAgBgBAAQAAAAAAgBQAAAAABAAQAAgBABAAIABACIAEAAQAAAAAAAAQgBAAABAAQAAAAAAgBQAAAAAAAAIACAAIgFgBIADgBIADABQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAIABgBIABABQABAAAAgBQAAAAAAAAQAAAAgBgBQAAAAAAAAIgDgBQABAAAAgBQABAAAAAAQABgBAAAAQAAAAAAgBIADgDQAGAEgFABQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAIACgBIAAABIgEABQAAAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAAAIAFACQABAAABAAQAAAAAAABQABAAAAABQAAAAgBAAIAAABIgCgCQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAABIADADQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBAAAAAAIAAACQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAAAgBAAIgCABIACABIADAAIABAGQAAADgEABIACAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQgCAAAAAEQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIgDAAIACABIgCAAIACADIgBAAQAAAAAAABQABAAAAAAQABAAABAAQABAAABgBIgBACQADgBAAAFQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAAAgBgBIgDgBQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgBABQAAABAAAAQABABAAAAQABAAAAAAQABAAABgBIgCACIgBgBIgDABQAAABAAAAQABAAAAAAQABABAAAAQABAAABgBQgFACgCgDQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAABQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAABQABAAAAAAQABABAAAAQABAAAAAAIABABIABADIACAAIABAAIADAAQgDACgEgCIABACQAAABAAAAQAAAAABABQAAAAAAAAQgBABAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIgBgFQgCADgFgGIgDABQAAAAAAAAQgBABAAAAQAAAAAAAAQAAAAAAAAIADADIgEgBQAAAAAAAAQgBABABAAQAAABAAAAQABAAAAABQACgBADADIAEADIgEAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgBgBAAAAIgBADIACACIgBABIABABIABABIgCAAIACAEQgFAEgCgBIAAACIgDgCQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAAAgBAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABABAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBgBgBIgDADQAAABAAAAQAAABAAAAQgBABAAAAQAAABABABIgBgDQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAgBgBQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAABgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQgDABAEAEQgEgDgDACIgDAEIgCgEQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAAAgBAAIABgCIgDABQgBACACADQgDAAgCgCQgBgEABgCIgEADIAAABQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBABgBAAQgDADgDAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABABAAAAIgBACQgEABgBgEQAAAAABAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIgCABIgCADIADgHIgDgCQAAABAAABQAAAAAAABQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAgBAAABQAAAAgBAAIgBgDIgCABQAAABgBAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIgBgDQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAgBIABgCIgDgBIgCADIgDgBIgBABQAAABAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAIABgEQAAAAABgBQAAAAgBgBQAAAAAAAAQAAAAAAgBIABgBIAAABIABgDIgFAEQgDACgCgBQAAAAgBAAQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQgBAAAAABQAAAAgBAAIAAAAIgDgBIACAAIABgBQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBgBgBIACABIACgCQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIgEABIgBACIgCgCIgCgBIgCACQAAABAAABQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIAAgBIAAgGIAAgCIAAgBIgDABQgBAAADgFQAAgBABAAQAAgBgBAAQAAAAAAABQgBAAgBAAIgBADQgBgBAAAAQAAgBgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQABAAABgBIgBABIACgBQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAIgBgCIABAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAAAgBAAIgCABQABAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBAAQgCAAgBAFIgCgBIgCACQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQACAAAGgGQAAABAAAAQAAAAABAAQAAAAAAAAQABgBAAgBQAAAAAAAAQAAgBAAAAQgBAAgBAAQAAABgBAAQgBAAAAAAQgBABAAAAQAAgBAAAAQAAAAAAgBIgCAEIgCACIgCgDQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBAAAAAAIABgBIgCgBIgCABIACgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAgBAAIgCAAQAAAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAQgBABgBABQAAAAgBAAQAAAAAAAAQAAgBAAgBIABABIABgBIgDgCIACgBQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAAAgBAAIgCABIABgDIgCACIABgEIgDAAIgDACQAAAAABgBQAAAAAAAAQgBgBAAAAQAAAAAAgBIgCgDQAAABgBAAQAAAAgBAAQAAAAAAAAQAAgBgBAAQgBADgDABQAAAAAAAAQABABAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAABQAAAAgBAAQgBAAAAgBIABAAQgBgCgGADQgEADgBgDIABgCQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgCACIgEgDQAAAAABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAAgCIAAAAIAAAAIgBABIABACIgHAAIACABIgBAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAABAAIACAAIAAgBIABAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAIgCAAIABABIADAAQgBAFACAHIgBADQAAABAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQgBABAEAFIAAADQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAIADABIgCAAQABABAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAIADAAIABADQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAIgBAAIABABIAAABIgCAAQAEADAAAGQgBAFACACQgCACACADQACADgEADQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAQAAAAAAgBQACAGABANIADATIAAAPQAAAKgEAEIgBAAIAEAEIABgBIgBANQgBAIgFAEIACAAQAAADgGAEQgEADAAAEQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAQgCALgTAAIgFAAgAhJg5QACACADAAIABgBIABAAIgBgBIABgCIAAAAIABAAIgBAAIAAAAIgBgBIAAAAIAAAAIgBgBIAAABIABAAIgBAAIAAgBIAAABIAAAAIAAAAIgDADIgCgBIAAABgAhCg4IAAABIAAgBgAhDg8IABAAIAAAAIAAAAIgBAAgAhDg9IAAgBIgBAAgABZglIgBgBIABABgAhDg4IgBAAIABAAIAAAAIAAAAg");
	this.shape_74.setTransform(36.2,51.3,0.397,0.397);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#231F20").s().p("AAAAAIABABIgBAAg");
	this.shape_75.setTransform(2.3,-0.4,0.397,0.397);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#231F20").s().p("AAAAAIAAAAIAAAAg");
	this.shape_76.setTransform(-1.3,3.2,0.397,0.397);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#231F20").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_77.setTransform(-6.3,8.7,0.397,0.397);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#231F20").s().p("AjoDEIACABIAEAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAIABACIgEgBIgCgBIAAABIAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAABABAAQAAAAAAAAQABAAAAAAQABAAAAgBQgFAAADgEQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBgBAAIgBgEQAGACABADIACgDQgGgDgBgCIACAAQgEgDABgCIAFgLIADAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAIAAgFQACgBABgFQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQABgMAGgIIADADQAAgBgBAAQAAAAAAAAQAAAAABAAQAAAAAAAAIACAAIgCgCIgBgEQAEgBgBgJIACABQgBgDADgCIAEgDQABAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQgBgDAAgGQADgDAEgBQAAgGAFgGQAGgIABgDIACACQABgGAGgGQAGgGABgDIADAEQABAAAAgBQABAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBIADgCQAAgBAAAAQABAAAAAAQAAgBABAAQAAABABAAQAAAAAAgBQABAAAAAAQAAAAAAgBQAAAAAAgBIAAgDQAEgBADgEQAAAAABABQAAAAAAAAQABABAAgBQAAAAABAAIACgCQAAgBAAAAQAAAAAAgBQgBAAAAgBQgBAAgBgBQADAAADgFQADgEADAAQAAAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAFgDQADgBAAgDQABABAAAAQAAABABAAQAAAAAAAAQABAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgEAGAAQAHgDABgCQADgFAHgHIALgKIABABQAAAAAAgBQAAAAAAgBQABAAABgBQAAAAABAAQAEgCgBgDIACgBIABABQAAAAABgBQAAAAAAgBQABAAAAAAQABgBABAAQADgCAAgCIAAAAQADAAACgDQACgCACgBIAAACQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQABAAAAAAQABAAAAABIgCgCQAFgDAFgGIAIgMQAEgBADADQAAABAAAAQAAAAABgBQAAAAAAAAQAAgBAAgBIAAgBQAAAAAAAAQAAAAABAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAIgCgEIAGAAQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBIABACQAAgDACgEQACgDgBgEQAbgdAQgNIAagQQAPgKAMgEIAGABIAFgEIAAACQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBIAKgFIALgFQAAABAAABQAAABAAAAQAAAAAAAAQAAABABgBIAAgDIABABQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAAAgBgBQALgGASgDIAegEQAFAAAMgEIAXAFQAMADAKgDQgDAKgGADQgEAFgJgBQgJgBgEACIAAgCQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAAAAAAAQgKAKgVgHIAAgBIgCACQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIAAgDQAAABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAAAIgDgEIAAAEQgBAEgEAAQgEABgBACIgBgCQgDAEgGADIgLAGQAAgBAAAAQAAgBAAgBQAAAAgBAAQAAgBAAAAQABADgEADQAAgBAAAAQgBAAAAAAQAAAAgBABQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQAAAAgBAAIAAgBQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAABIgDgCQABAAAAABQAAAAAAABQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAAAAAQAAAAAAABIAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAIgCABIAAgBIgDACQAAAAgBAAQAAAAAAABQAAAAAAAAQABABAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQgHAIgSAJIgDgCIgCACIgBACIgBAAIgBAAQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBIgDAGIgBgCQAAABAAAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAQAAAAAAABIgBgDQAAAAgBAAQAAAAAAABQAAAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIgBgDQAAAFgFAEIgBgBIgGAGIgCgCQgBgBAAAAQAAAAgBAAQAAAAAAAAQAAAAgBABQABAAAAABQAAAAAAAAQAAABAAABQAAAAgBABQAAAAAAABQAAAAAAAAQAAABABAAQAAABABAAQgHACAAACIgCgDQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIgDgBQABAAAAgBQAAAAAAAAQAAAAAAgBQAAAAgBAAQgCAEgBAAIABAFIgBAFIgCgCIgCgCIACAJIgBgBQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIABADQgCAEgDgEQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAgBgBAAIgBAEIgBgBIgBADQAAAAAAABQABAAAAAAQAAABAAAAQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgBgDQAAADgCAHIgBgDQgCAAgBAEQAAABAAAAQAAABAAAAQgBABgBAAQAAAAgBAAIACABIgDAAIgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAABIAAACIAAgBIgCAFQgDADgDABQACAEgBABIgCgCQgBAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIAAABQAAABgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgDgCQAAAAAAABQgBAAAAABQAAAAAAAAQABABAAAAIgBACIABABIAAACIgBAAQgBAAAAABQAAAAgBAAQAAAAAAgBQgBAAAAAAIgCgDIABAFIAAgBQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQgBAAAAABQAAAAAAAAQgBAAAAABQABAAAAABIgEABQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAFgCAAIAAgCQgBAAAAAAQAAAAAAABQgBAAAAAAQAAABAAAAIgGAAQAAABADAEQAAgBgBAAQAAAAgBABQAAAAAAAAQgBABAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBAAIADADQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAQAAgBAAAAIgBABQAAAAgBABQAAAAAAAAQAAABABAAQAAAAAAABQgCAAgEAEQgDACgEgCIAAABIABABQABAAgBAAQAAgBABABIAAAAQgCAAgCgBQAAAAAAAAQgBAAAAABQAAAAAAAAQABAAAAABQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAAAAAIAAAEQgBABgEgFIgBAEIgEgCIABACIAAABIAAgBIgCACIAEABIAAADQAAAAgBAAQAAgBgBAAQAAAAgBABQAAAAgBAAIAAADQAAABAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIgCgBQAAAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAQABABABABQAAABABABQAAAAgBAAQAAABgBAAIgBgDIgCAAIACACIgCgBQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBAAIAAADQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIAAAAQgBAAAAAAQgBAAAAABQAAAAAAABQAAABAAABIgBgBQAAAAgBAAQAAABAAAAQAAABAAAAQAAABAAABIgEgDQgBgBAAAAQgBgBAAAAQAAAAAAABQAAAAAAAAIAAAEIADACIgEAEQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIABACIgFAGQgDADgDgBIgDgDQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABABAAIAEADQgDAFgDAAIABACQgBgBAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAABIACACIgDgBQABABAAAAQAAABAAABQAAAAAAAAQAAAAAAAAIgCgBQAAAGgCAAIgDgCIAAACIACABIgEABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQACAJgJAIIgBgBQAAAAgBAAQAAAAAAABQAAAAAAAAQABAAAAABIAAABQgDgCgBgCQgBAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIABAEIABAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAABIgBABQgBABAAAAQAAAAAAAAQAAABAAAAQAAAAABABIgEgEIAAACQgCAAgCgFQgBgEgDgBIAAACQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQABAGAEABQAAAAAAAAQAAABABAAQAAABAAABQABAAAAABQAAAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAABIAAACIADABIABADQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIgCgBIABADQABABAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAIgDgDQgBgBAAAAQgBgBAAAAQgBAAAAAAQAAAAgBAAIACADQABABAAAAQAAABABAAQAAAAABABQAAAAABAAQgCABgCgEQAAAAgBAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAgBAAQAAgBgBAAIACACIgEgBIAAADQAAABAAAAQAAAAgBAAQAAAAAAAAQgBgBAAAAIgBACIACACIABgBQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAAAABQAAgBAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAIABADIgCgBIAAACIAAAAIgBAAIABACQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAAAAAABIgBgDIgBAAQgBAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAIAGAGQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIAAABIgCgDIgCgBIgDABIACADQAAAAAAABQABAAAAAAQAAAAABAAQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAgBQgBAAAAgBIABACIACACIgIAAIgDgEIAAABIgDgCIgDgCQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQADABADADIAEAFQAAABgFgCQgEgBADAEIADABIABABIABABQAAABAAAAQABABAAAAQAAAAgBAAQAAABAAAAIgEgCQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAQgEgDgBABQAAABAAABQAAABAAAAQAAABABAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAAAAAQABAAAAgBIABABQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAABABQAAAAABABQAAgCAFADIAAACIgBgBQgBAAAAAAQAAAAAAABQAAAAAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAIgFgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIAAADIgBABIgBgBIgDgBQgBAAAAAAQgBAAAAABQAAAAAAAAQAAABABAAIADADIABAGQgBgBAAAAQAAAAgBAAQAAAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAgBgBAAQABAAAAAAQABgBAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQAAAAgBAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAABgIgCIABACIAFACQgCADADAFIgDgBIgBgBQgBAEgDADQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAIABACIgFgCQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAIACAIQAAAAgBAAQgBABAAAAQAAABgBAAQAAABAAABIABAFIgEAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAIACABQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAgBABIgBAAIAAACQAAABAAAAQAAAAAAABQAAAAABAAQAAABABAAIgEgBIABABIgDAAQgBAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAABIABADIADgBQABAAAAABQAAAAAAAAQAAABAAABQAAAAAAABIAAADIgDAAIABACQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIAAABgAjPCjIABAAIADgBIAEACIgDgBQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgBABIgDgCg");
	this.shape_78.setTransform(0.8,3.8,0.397,0.397);

	this.instance_2 = new lib.Path_36();
	this.instance_2.setTransform(-15.7,-18.9,0.397,0.397,0,0,0,81.7,96.7);
	this.instance_2.alpha = 0.629;

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#3C200B").s().p("ALjXnQg/gFhIgZQjLhHiaixQlGl6g2jYQgNg3AChGQACg3gPgXQgagriAiWQi/jghHhVQlxnFhfkIQhRi7gqh4QhQjiA9gmIDOiYQA5gkC4C5QAxAxBdBgQBMBNAjATQDMBtE5HxQBnCjBxDJQA7BqBCB3QAOAZAzAGQBLAJAzAXQDXBhEWHFQCEDDALCsQAEA+gOAvQgLAngQAKIlpEhQgLAHgbAAIgfgCg");
	this.shape_79.setTransform(-0.6,-0.8,0.397,0.397);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_79},{t:this.instance_2},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(25));

	// butt wigglers
	this.instance_3 = new lib.butt_antena();
	this.instance_3.setTransform(-40,-52.9,1,1,1.3,0,0,43.1,50.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:0,regY:0,rotation:-3.2,x:-85.9,y:-101.3},0).wait(1).to({rotation:-7.6,x:-89.5,y:-97.6},0).wait(1).to({rotation:-12,x:-92.8,y:-93.6},0).wait(1).to({rotation:-13.7,x:-93.9,y:-92.1},0).wait(1).to({rotation:-15.3,x:-95,y:-90.6},0).wait(1).to({rotation:-12.4,x:-93,y:-93.3},0).wait(1).to({rotation:-9.6,x:-91,y:-95.9},0).wait(1).to({rotation:-6.7,x:-88.8,y:-98.4},0).wait(1).to({rotation:-3.8,x:-86.4,y:-100.8},0).wait(1).to({rotation:-1,x:-84,y:-103},0).wait(1).to({rotation:-2.3,x:-85.1,y:-102},0).wait(1).to({rotation:-3.7,x:-86.3,y:-100.9},0).wait(1).to({rotation:-5,x:-87.4,y:-99.8},0).wait(1).to({rotation:-2,x:-84.9,y:-102.2},0).wait(1).to({rotation:1,x:-82.2,y:-104.5},0).wait(1).to({rotation:4,x:-79.5,y:-106.7},0).wait(1).to({rotation:7,x:-76.6,y:-108.7},0).wait(1).to({rotation:5.9,x:-77.7,y:-108},0).wait(1).to({rotation:4.8,x:-78.7,y:-107.2},0).wait(1).to({rotation:4.1,x:-79.4,y:-106.7},0).wait(1).to({rotation:3.4,x:-80,y:-106.2},0).wait(1).to({rotation:2.7,x:-80.7,y:-105.7},0).wait(1).to({rotation:2,x:-81.3,y:-105.2},0).wait(1).to({rotation:1.3,x:-82,y:-104.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134.5,-159.5,183.4,220.7);


(lib.Stonefly = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.body();
	this.instance.setTransform(-25,-12,1,1,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(152));

	// head
	this.instance_1 = new lib.head();
	this.instance_1.setTransform(30,59,1,1,0,0,0,-38.5,-48.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-9.3,regY:-6.2,x:59.2,y:100.9},0).wait(22).to({rotation:3.9,x:54.9,y:104.4},0).wait(1).to({rotation:7.7,x:50.6,y:107.8},0).wait(1).to({rotation:11.6,x:46.1,y:111},0).wait(4).to({rotation:7.4,x:51.8,y:108.4},0).wait(1).to({rotation:3.2,x:57.4,y:105.6},0).wait(1).to({rotation:-1,x:62.8,y:102.5},0).wait(4).to({rotation:-0.7,x:61.6,y:101.9},0).wait(1).to({rotation:-0.3,x:60.4,y:101.4},0).wait(1).to({rotation:0,x:59.2,y:100.9},0).wait(39).to({regX:-38.5,regY:-48.1,x:30,y:59},0).wait(1).to({regX:-9.3,regY:-6.2,x:59.2,y:100.9},0).wait(22).to({rotation:3.9,x:54.9,y:104.4},0).wait(1).to({rotation:7.7,x:50.6,y:107.8},0).wait(1).to({rotation:11.6,x:46.1,y:111},0).wait(4).to({rotation:7.4,x:51.8,y:108.4},0).wait(1).to({rotation:3.2,x:57.4,y:105.6},0).wait(1).to({rotation:-1,x:62.8,y:102.5},0).wait(4).to({rotation:-0.7,x:61.6,y:101.9},0).wait(1).to({rotation:-0.3,x:60.4,y:101.4},0).wait(1).to({rotation:0,x:59.2,y:100.9},0).wait(39));

	// neck
	this.instance_2 = new lib.neck();
	this.instance_2.setTransform(20.1,46,1,1,0,0,0,19.1,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({rotation:5.3,x:19.2,y:46.9},0).wait(1).to({rotation:10.7,x:18.4,y:47.7},0).wait(1).to({rotation:16,x:17.6,y:48.6},0).wait(4).to({rotation:9.3,x:18.8},0).wait(1).to({rotation:2.7,x:20,y:48.7},0).wait(1).to({rotation:-4,x:21.2},0).wait(4).to({rotation:-2.7,x:20.8,y:47.8},0).wait(1).to({rotation:-1.3,x:20.4,y:46.9},0).wait(1).to({rotation:0,x:20.1,y:46},0).wait(62).to({rotation:5.3,x:19.2,y:46.9},0).wait(1).to({rotation:10.7,x:18.4,y:47.7},0).wait(1).to({rotation:16,x:17.6,y:48.6},0).wait(4).to({rotation:9.3,x:18.8},0).wait(1).to({rotation:2.7,x:20,y:48.7},0).wait(1).to({rotation:-4,x:21.2},0).wait(4).to({rotation:-2.7,x:20.8,y:47.8},0).wait(1).to({rotation:-1.3,x:20.4,y:46.9},0).wait(1).to({rotation:0,x:20.1,y:46},0).wait(39));

	// R back
	this.instance_3 = new lib.Rback();
	this.instance_3.setTransform(-27.9,8,1,1,0,0,0,76.4,20.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:39.4,regY:12.4,rotation:-7.3,x:-65.6,y:4.8},0).wait(1).to({rotation:-14.6,x:-65.7,y:9.6},0).wait(1).to({rotation:-22,x:-65.2,y:14.4},0).wait(1).to({rotation:-29.3,x:-64.1,y:19.1},0).wait(1).to({rotation:-36.6,x:-62.4,y:23.6},0).wait(1).to({rotation:-23.7,x:-65,y:15.5},0).wait(1).to({rotation:-10.8,x:-65.8,y:7.1},0).wait(1).to({rotation:-23.7,x:-65,y:15.5},0).wait(1).to({rotation:-36.6,x:-62.4,y:23.6},0).wait(1).to({rotation:-23.7,x:-65,y:15.5},0).wait(1).to({rotation:-10.8,x:-65.8,y:7.1},0).wait(1).to({rotation:-23.7,x:-65,y:15.5},0).wait(1).to({rotation:-36.6,x:-62.4,y:23.6},0).wait(1).to({rotation:-23.7,x:-65,y:15.5},0).wait(1).to({rotation:-10.8,x:-65.8,y:7.1},0).wait(26).to({regX:76.2,regY:20,scaleX:1,scaleY:1,x:-27.9,y:8.1},0).wait(1).to({regX:39.4,regY:12.4,scaleX:1,scaleY:1,rotation:-23.7,x:-64.6,y:15.8},0).wait(1).to({rotation:-36.6,x:-62,y:23.8},0).wait(1).to({rotation:-23.7,x:-64.6,y:15.8},0).wait(1).to({rotation:-10.8,x:-65.5,y:7.4},0).wait(1).to({rotation:-23.7,x:-64.6,y:15.8},0).wait(1).to({rotation:-36.6,x:-62,y:23.8},0).wait(1).to({rotation:-23.7,x:-64.6,y:15.8},0).wait(1).to({rotation:-10.8,x:-65.5,y:7.4},0).wait(2).to({regX:76.2,regY:20,scaleX:1,scaleY:1,x:-27.9,y:8.1},0).wait(1).to({regX:39.4,regY:12.4,scaleX:1,scaleY:1,rotation:-23.7,x:-64.6,y:15.8},0).wait(1).to({rotation:-36.6,x:-62,y:23.8},0).wait(1).to({rotation:-23.7,x:-64.6,y:15.8},0).wait(1).to({rotation:-10.8,x:-65.5,y:7.4},0).wait(1).to({rotation:-23.7,x:-64.6,y:15.8},0).wait(1).to({rotation:-36.6,x:-62,y:23.8},0).wait(1).to({rotation:-23.7,x:-64.6,y:15.8},0).wait(1).to({rotation:-10.8,x:-65.5,y:7.4},0).wait(17).to({regX:76.4,regY:20.4,rotation:0,x:-27.9,y:8},0).wait(1).to({regX:39.4,regY:12.4,rotation:-7.3,x:-65.6,y:4.8},0).wait(1).to({rotation:-14.6,x:-65.7,y:9.6},0).wait(1).to({rotation:-22,x:-65.2,y:14.4},0).wait(1).to({rotation:-29.3,x:-64.1,y:19.1},0).wait(1).to({rotation:-36.6,x:-62.4,y:23.6},0).wait(1).to({rotation:-23.7,x:-65,y:15.5},0).wait(1).to({rotation:-10.8,x:-65.8,y:7.1},0).wait(1).to({rotation:-23.7,x:-65,y:15.5},0).wait(1).to({rotation:-36.6,x:-62.4,y:23.6},0).wait(1).to({rotation:-23.7,x:-65,y:15.5},0).wait(1).to({rotation:-10.8,x:-65.8,y:7.1},0).wait(1).to({rotation:-23.7,x:-65,y:15.5},0).wait(1).to({rotation:-36.6,x:-62.4,y:23.6},0).wait(1).to({rotation:-23.7,x:-65,y:15.5},0).wait(1).to({rotation:-10.8,x:-65.8,y:7.1},0).wait(26).to({regX:76.2,regY:20,scaleX:1,scaleY:1,x:-27.9,y:8.1},0).wait(1).to({regX:39.4,regY:12.4,scaleX:1,scaleY:1,rotation:-23.7,x:-64.6,y:15.8},0).wait(1).to({rotation:-36.6,x:-62,y:23.8},0).wait(1).to({rotation:-23.7,x:-64.6,y:15.8},0).wait(1).to({rotation:-10.8,x:-65.5,y:7.4},0).wait(1).to({rotation:-23.7,x:-64.6,y:15.8},0).wait(1).to({rotation:-36.6,x:-62,y:23.8},0).wait(1).to({rotation:-23.7,x:-64.6,y:15.8},0).wait(1).to({rotation:-10.8,x:-65.5,y:7.4},0).wait(2).to({regX:76.2,regY:20,scaleX:1,scaleY:1,x:-27.9,y:8.1},0).wait(1).to({regX:39.4,regY:12.4,scaleX:1,scaleY:1,rotation:-23.7,x:-64.6,y:15.8},0).wait(1).to({rotation:-36.6,x:-62,y:23.8},0).wait(1).to({rotation:-23.7,x:-64.6,y:15.8},0).wait(1).to({rotation:-10.8,x:-65.5,y:7.4},0).wait(1).to({rotation:-23.7,x:-64.6,y:15.8},0).wait(1).to({rotation:-36.6,x:-62,y:23.8},0).wait(1).to({rotation:-23.7,x:-64.6,y:15.8},0).wait(1).to({rotation:-10.8,x:-65.5,y:7.4},0).wait(17));

	// R mid
	this.instance_4 = new lib.Rmid();
	this.instance_4.setTransform(-18,34,1,1,0,0,0,19,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:0,regY:0,rotation:-8.3,x:-34.3,y:53.6},0).wait(1).to({rotation:-16.7,x:-31.3,y:55.7},0).wait(1).to({rotation:-25,x:-28,y:57.4},0).wait(1).to({rotation:-33.3,x:-24.5,y:58.6},0).wait(1).to({rotation:-18.5,x:-30.6,y:56.2},0).wait(1).to({rotation:-3.8,x:-35.8,y:52.2},0).wait(1).to({rotation:-18.5,x:-30.6,y:56.2},0).wait(1).to({rotation:-33.3,x:-24.5,y:58.6},0).wait(1).to({rotation:-18.5,x:-30.6,y:56.2},0).wait(1).to({rotation:-3.8,x:-35.8,y:52.2},0).wait(1).to({rotation:-18.5,x:-30.6,y:56.2},0).wait(1).to({rotation:-33.3,x:-24.5,y:58.6},0).wait(1).to({rotation:-18.5,x:-30.6,y:56.2},0).wait(1).to({rotation:-3.8,x:-35.8,y:52.2},0).wait(1).to({rotation:-3.8},0).wait(25).to({regX:18.6,regY:-16.8,x:-17.9,y:34},0).wait(1).to({regX:0,regY:0,rotation:-18.5,x:-30.2,y:55.8},0).wait(1).to({rotation:-33.3,x:-24.3,y:58.2},0).wait(1).to({rotation:-18.5,x:-30.2,y:55.8},0).wait(1).to({rotation:-3.8,x:-35.4,y:51.9},0).wait(1).to({rotation:-18.5,x:-30.2,y:55.8},0).wait(1).to({rotation:-33.3,x:-24.3,y:58.2},0).wait(1).to({rotation:-18.5,x:-30.2,y:55.8},0).wait(1).to({rotation:-3.8,x:-35.4,y:51.9},0).wait(1).to({rotation:-3.8},0).wait(1).to({regX:18.6,regY:-16.8,x:-17.9,y:34},0).wait(1).to({regX:0,regY:0,rotation:-18.5,x:-30.2,y:55.8},0).wait(1).to({rotation:-33.3,x:-24.3,y:58.2},0).wait(1).to({rotation:-18.5,x:-30.2,y:55.8},0).wait(1).to({rotation:-3.8,x:-35.4,y:51.9},0).wait(1).to({rotation:-18.5,x:-30.2,y:55.8},0).wait(1).to({rotation:-33.3,x:-24.3,y:58.2},0).wait(1).to({rotation:-18.5,x:-30.2,y:55.8},0).wait(1).to({rotation:-3.8,x:-35.4,y:51.9},0).wait(1).to({rotation:-3.8},0).wait(17).to({regX:19,regY:-17,rotation:0,x:-18,y:34},0).wait(1).to({regX:0,regY:0,rotation:-8.3,x:-34.3,y:53.6},0).wait(1).to({rotation:-16.7,x:-31.3,y:55.7},0).wait(1).to({rotation:-25,x:-28,y:57.4},0).wait(1).to({rotation:-33.3,x:-24.5,y:58.6},0).wait(1).to({rotation:-18.5,x:-30.6,y:56.2},0).wait(1).to({rotation:-3.8,x:-35.8,y:52.2},0).wait(1).to({rotation:-18.5,x:-30.6,y:56.2},0).wait(1).to({rotation:-33.3,x:-24.5,y:58.6},0).wait(1).to({rotation:-18.5,x:-30.6,y:56.2},0).wait(1).to({rotation:-3.8,x:-35.8,y:52.2},0).wait(1).to({rotation:-18.5,x:-30.6,y:56.2},0).wait(1).to({rotation:-33.3,x:-24.5,y:58.6},0).wait(1).to({rotation:-18.5,x:-30.6,y:56.2},0).wait(1).to({rotation:-3.8,x:-35.8,y:52.2},0).wait(1).to({rotation:-3.8},0).wait(25).to({regX:18.6,regY:-16.8,x:-17.9,y:34},0).wait(1).to({regX:0,regY:0,rotation:-18.5,x:-30.2,y:55.8},0).wait(1).to({rotation:-33.3,x:-24.3,y:58.2},0).wait(1).to({rotation:-18.5,x:-30.2,y:55.8},0).wait(1).to({rotation:-3.8,x:-35.4,y:51.9},0).wait(1).to({rotation:-18.5,x:-30.2,y:55.8},0).wait(1).to({rotation:-33.3,x:-24.3,y:58.2},0).wait(1).to({rotation:-18.5,x:-30.2,y:55.8},0).wait(1).to({rotation:-3.8,x:-35.4,y:51.9},0).wait(1).to({rotation:-3.8},0).wait(1).to({regX:18.6,regY:-16.8,x:-17.9,y:34},0).wait(1).to({regX:0,regY:0,rotation:-18.5,x:-30.2,y:55.8},0).wait(1).to({rotation:-33.3,x:-24.3,y:58.2},0).wait(1).to({rotation:-18.5,x:-30.2,y:55.8},0).wait(1).to({rotation:-3.8,x:-35.4,y:51.9},0).wait(1).to({rotation:-18.5,x:-30.2,y:55.8},0).wait(1).to({rotation:-33.3,x:-24.3,y:58.2},0).wait(1).to({rotation:-18.5,x:-30.2,y:55.8},0).wait(1).to({rotation:-3.8,x:-35.4,y:51.9},0).wait(1).to({rotation:-3.8},0).wait(17));

	// R front
	this.instance_5 = new lib.Rfront();
	this.instance_5.setTransform(10,59,1,1,0,0,0,15,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:0,regY:0,rotation:-7.9,x:-2.6,y:76.9},0).wait(1).to({rotation:-15.9,x:-0.1,y:78.5},0).wait(1).to({rotation:-23.8,x:2.7,y:79.7},0).wait(1).to({rotation:-7,x:-2.9,y:76.7},0).wait(1).to({rotation:9.8,x:-7.5,y:72.2},0).wait(1).to({rotation:-7,x:-2.9,y:76.7},0).wait(1).to({rotation:-23.8,x:2.7,y:79.7},0).wait(1).to({rotation:-7,x:-2.9,y:76.7},0).wait(1).to({rotation:9.8,x:-7.5,y:72.2},0).wait(1).to({rotation:-7,x:-2.9,y:76.7},0).wait(1).to({rotation:-23.8,x:2.7,y:79.7},0).wait(1).to({rotation:-7,x:-2.9,y:76.7},0).wait(1).to({rotation:9.8,x:-7.5,y:72.2},0).wait(26).to({regX:14.8,regY:-15.1,scaleX:1,scaleY:1,x:10.1,y:59},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-7,x:-2.8,y:75.8},0).wait(1).to({rotation:-23.8,x:2.6,y:78.7},0).wait(1).to({rotation:-7,x:-2.8,y:75.8},0).wait(1).to({rotation:9.8,x:-7.1,y:71.3},0).wait(1).to({rotation:-7,x:-2.8,y:75.8},0).wait(1).to({rotation:-23.8,x:2.6,y:78.7},0).wait(1).to({rotation:-7,x:-2.8,y:75.8},0).wait(1).to({rotation:9.8,x:-7.1,y:71.3},0).wait(2).to({regX:14.8,regY:-15.1,scaleX:1,scaleY:1,x:10.1,y:59},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-7,x:-2.8,y:75.8},0).wait(1).to({rotation:-23.8,x:2.6,y:78.7},0).wait(1).to({rotation:-7,x:-2.8,y:75.8},0).wait(1).to({rotation:9.8,x:-7.1,y:71.3},0).wait(1).to({rotation:-7,x:-2.8,y:75.8},0).wait(1).to({rotation:-23.8,x:2.6,y:78.7},0).wait(1).to({rotation:-7,x:-2.8,y:75.8},0).wait(1).to({rotation:9.8,x:-7.1,y:71.3},0).wait(19).to({regX:15,regY:-16,rotation:0,x:10,y:59},0).wait(1).to({regX:0,regY:0,rotation:-7.9,x:-2.6,y:76.9},0).wait(1).to({rotation:-15.9,x:-0.1,y:78.5},0).wait(1).to({rotation:-23.8,x:2.7,y:79.7},0).wait(1).to({rotation:-7,x:-2.9,y:76.7},0).wait(1).to({rotation:9.8,x:-7.5,y:72.2},0).wait(1).to({rotation:-7,x:-2.9,y:76.7},0).wait(1).to({rotation:-23.8,x:2.7,y:79.7},0).wait(1).to({rotation:-7,x:-2.9,y:76.7},0).wait(1).to({rotation:9.8,x:-7.5,y:72.2},0).wait(1).to({rotation:-7,x:-2.9,y:76.7},0).wait(1).to({rotation:-23.8,x:2.7,y:79.7},0).wait(1).to({rotation:-7,x:-2.9,y:76.7},0).wait(1).to({rotation:9.8,x:-7.5,y:72.2},0).wait(26).to({regX:14.8,regY:-15,scaleX:1,scaleY:1,x:10.1,y:59},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-7,x:-2.9,y:75.6},0).wait(1).to({rotation:-23.8,x:2.5,y:78.6},0).wait(1).to({rotation:-7,x:-2.9,y:75.6},0).wait(1).to({rotation:9.8,x:-7.1,y:71.2},0).wait(1).to({rotation:-7,x:-2.9,y:75.6},0).wait(1).to({rotation:-23.8,x:2.5,y:78.6},0).wait(1).to({rotation:-7,x:-2.9,y:75.6},0).wait(1).to({rotation:9.8,x:-7.1,y:71.2},0).wait(2).to({regX:14.8,regY:-15,scaleX:1,scaleY:1,x:10.1,y:59},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-7,x:-2.9,y:75.6},0).wait(1).to({rotation:-23.8,x:2.5,y:78.6},0).wait(1).to({rotation:-7,x:-2.9,y:75.6},0).wait(1).to({rotation:9.8,x:-7.1,y:71.2},0).wait(1).to({rotation:-7,x:-2.9,y:75.6},0).wait(1).to({rotation:-23.8,x:2.5,y:78.6},0).wait(1).to({rotation:-7,x:-2.9,y:75.6},0).wait(1).to({rotation:9.8,x:-7.1,y:71.2},0).wait(19));

	// L back
	this.instance_6 = new lib.Lback();
	this.instance_6.setTransform(-4,-6,1,1,0,0,0,-6,36);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:0,regY:0,rotation:8.1,x:7,y:-40.8},0).wait(1).to({rotation:16.1,x:11.8,y:-38.9},0).wait(1).to({rotation:24.2,x:16.2,y:-36.4},0).wait(1).to({rotation:32.3,x:20.3,y:-33.2},0).wait(1).to({rotation:40.4,x:23.9,y:-29.5},0).wait(1).to({rotation:31.3,x:19.8,y:-33.6},0).wait(1).to({rotation:22.3,x:15.2,y:-37},0).wait(1).to({rotation:31.3,x:19.8,y:-33.6},0).wait(1).to({rotation:40.4,x:23.9,y:-29.5},0).wait(1).to({rotation:31.3,x:19.8,y:-33.6},0).wait(1).to({rotation:22.3,x:15.2,y:-37},0).wait(1).to({rotation:31.3,x:19.8,y:-33.6},0).wait(1).to({rotation:40.4,x:23.9,y:-29.5},0).wait(1).to({rotation:31.3,x:19.8,y:-33.6},0).wait(1).to({rotation:22.3,x:15.2,y:-37},0).wait(1).to({rotation:31.3,x:19.8,y:-33.6},0).wait(1).to({rotation:40.4,x:23.9,y:-29.5},0).wait(24).to({regX:-6,regY:35.6,scaleX:1,scaleY:1,rotation:22.3,x:-4,y:-6},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:31.3,x:19.7,y:-33.4},0).wait(1).to({rotation:40.4,x:23.7,y:-29.3},0).wait(1).to({rotation:31.3,x:19.7,y:-33.4},0).wait(1).to({rotation:22.3,x:15.1,y:-36.7},0).wait(1).to({rotation:31.3,x:19.7,y:-33.4},0).wait(1).to({rotation:40.4,x:23.7,y:-29.3},0).wait(1).to({rotation:31.3,x:19.7,y:-33.4},0).wait(1).to({rotation:22.3,x:15.1,y:-36.7},0).wait(1).to({rotation:31.3,x:19.7,y:-33.4},0).wait(1).to({rotation:40.4,x:23.7,y:-29.3},0).wait(2).to({regX:-6,regY:35.6,scaleX:1,scaleY:1,rotation:22.3,x:-4,y:-6},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:31.3,x:19.7,y:-33.4},0).wait(1).to({rotation:40.4,x:23.7,y:-29.3},0).wait(1).to({rotation:31.3,x:19.7,y:-33.4},0).wait(1).to({rotation:22.3,x:15.1,y:-36.7},0).wait(1).to({rotation:31.3,x:19.7,y:-33.4},0).wait(1).to({rotation:40.4,x:23.7,y:-29.3},0).wait(1).to({rotation:31.3,x:19.7,y:-33.4},0).wait(1).to({rotation:22.3,x:15.1,y:-36.7},0).wait(1).to({rotation:31.3,x:19.7,y:-33.4},0).wait(1).to({rotation:40.4,x:23.7,y:-29.3},0).wait(13).to({regX:-6,regY:36,rotation:0,x:-4,y:-6},0).wait(1).to({regX:0,regY:0,rotation:8.1,x:7,y:-40.8},0).wait(1).to({rotation:16.1,x:11.8,y:-38.9},0).wait(1).to({rotation:24.2,x:16.2,y:-36.4},0).wait(1).to({rotation:32.3,x:20.3,y:-33.2},0).wait(1).to({rotation:40.4,x:23.9,y:-29.5},0).wait(1).to({rotation:31.3,x:19.8,y:-33.6},0).wait(1).to({rotation:22.3,x:15.2,y:-37},0).wait(1).to({rotation:31.3,x:19.8,y:-33.6},0).wait(1).to({rotation:40.4,x:23.9,y:-29.5},0).wait(1).to({rotation:31.3,x:19.8,y:-33.6},0).wait(1).to({rotation:22.3,x:15.2,y:-37},0).wait(1).to({rotation:31.3,x:19.8,y:-33.6},0).wait(1).to({rotation:40.4,x:23.9,y:-29.5},0).wait(1).to({rotation:31.3,x:19.8,y:-33.6},0).wait(1).to({rotation:22.3,x:15.2,y:-37},0).wait(1).to({rotation:31.3,x:19.8,y:-33.6},0).wait(1).to({rotation:40.4,x:23.9,y:-29.5},0).wait(24).to({regX:-6,regY:35.6,scaleX:1,scaleY:1,rotation:22.3,x:-4,y:-6},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:31.3,x:19.7,y:-33.4},0).wait(1).to({rotation:40.4,x:23.7,y:-29.3},0).wait(1).to({rotation:31.3,x:19.7,y:-33.4},0).wait(1).to({rotation:22.3,x:15.1,y:-36.7},0).wait(1).to({rotation:31.3,x:19.7,y:-33.4},0).wait(1).to({rotation:40.4,x:23.7,y:-29.3},0).wait(1).to({rotation:31.3,x:19.7,y:-33.4},0).wait(1).to({rotation:22.3,x:15.1,y:-36.7},0).wait(1).to({rotation:31.3,x:19.7,y:-33.4},0).wait(1).to({rotation:40.4,x:23.7,y:-29.3},0).wait(2).to({regX:-6,regY:35.6,scaleX:1,scaleY:1,rotation:22.3,x:-4,y:-6},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:31.3,x:19.7,y:-33.4},0).wait(1).to({rotation:40.4,x:23.7,y:-29.3},0).wait(1).to({rotation:31.3,x:19.7,y:-33.4},0).wait(1).to({rotation:22.3,x:15.1,y:-36.7},0).wait(1).to({rotation:31.3,x:19.7,y:-33.4},0).wait(1).to({rotation:40.4,x:23.7,y:-29.3},0).wait(1).to({rotation:31.3,x:19.7,y:-33.4},0).wait(1).to({rotation:22.3,x:15.1,y:-36.7},0).wait(1).to({rotation:31.3,x:19.7,y:-33.4},0).wait(1).to({rotation:40.4,x:23.7,y:-29.3},0).wait(13));

	// L mid
	this.instance_7 = new lib.Lmid();
	this.instance_7.setTransform(14,16,1,1,0,0,0,-23,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:0,regY:0,rotation:6.5,x:38.8,y:1.7},0).wait(1).to({rotation:12.9,x:40.2,y:4.6},0).wait(1).to({rotation:19.4,x:41.3,y:7.6},0).wait(1).to({rotation:25.8,x:42.1,y:10.8},0).wait(1).to({rotation:13,x:40.2,y:4.7},0).wait(1).to({rotation:0.2,x:37.1,y:-0.9},0).wait(1).to({rotation:13,x:40.2,y:4.7},0).wait(1).to({rotation:25.8,x:42.1,y:10.8},0).wait(1).to({rotation:13,x:40.2,y:4.7},0).wait(1).to({rotation:0.2,x:37.1,y:-0.9},0).wait(1).to({rotation:13,x:40.2,y:4.7},0).wait(1).to({rotation:25.8,x:42.1,y:10.8},0).wait(1).to({rotation:13,x:40.2,y:4.7},0).wait(1).to({rotation:0.2,x:37.1,y:-0.9},0).wait(1).to({rotation:13,x:40.2,y:4.7},0).wait(1).to({rotation:25.8,x:42.1,y:10.8},0).wait(24).to({regX:-22.7,regY:16.8,rotation:0.1,x:14,y:16},0).wait(1).to({regX:0,regY:0,rotation:13,x:39.9,y:4.7},0).wait(1).to({rotation:25.8,x:41.7,y:10.7},0).wait(1).to({rotation:13,x:39.9,y:4.7},0).wait(1).to({rotation:0.2,x:36.8,y:-0.7},0).wait(1).to({rotation:13,x:39.9,y:4.7},0).wait(1).to({rotation:25.8,x:41.7,y:10.7},0).wait(1).to({rotation:13,x:39.9,y:4.7},0).wait(1).to({rotation:0.2,x:36.8,y:-0.7},0).wait(1).to({rotation:13,x:39.9,y:4.7},0).wait(1).to({rotation:25.8,x:41.7,y:10.7},0).wait(2).to({regX:-22.7,regY:16.9,rotation:0.1,x:14,y:16},0).wait(1).to({regX:0,regY:0,rotation:13,x:39.9,y:4.6},0).wait(1).to({rotation:25.8,x:41.8,y:10.6},0).wait(1).to({rotation:13,x:39.9,y:4.6},0).wait(1).to({rotation:0.2,x:36.8,y:-0.9},0).wait(1).to({rotation:13,x:39.9,y:4.6},0).wait(1).to({rotation:25.8,x:41.8,y:10.6},0).wait(1).to({rotation:13,x:39.9,y:4.6},0).wait(1).to({rotation:0.2,x:36.8,y:-0.9},0).wait(1).to({rotation:13,x:39.9,y:4.6},0).wait(1).to({rotation:25.8,x:41.8,y:10.6},0).wait(14).to({regX:-23,regY:16.9,rotation:0,x:14,y:16},0).wait(1).to({regX:0,regY:0,rotation:6.5,x:38.8,y:1.7},0).wait(1).to({rotation:12.9,x:40.2,y:4.6},0).wait(1).to({rotation:19.4,x:41.3,y:7.6},0).wait(1).to({rotation:25.8,x:42.1,y:10.8},0).wait(1).to({rotation:13,x:40.2,y:4.7},0).wait(1).to({rotation:0.2,x:37.1,y:-0.9},0).wait(1).to({rotation:13,x:40.2,y:4.7},0).wait(1).to({rotation:25.8,x:42.1,y:10.8},0).wait(1).to({rotation:13,x:40.2,y:4.7},0).wait(1).to({rotation:0.2,x:37.1,y:-0.9},0).wait(1).to({rotation:13,x:40.2,y:4.7},0).wait(1).to({rotation:25.8,x:42.1,y:10.8},0).wait(1).to({rotation:13,x:40.2,y:4.7},0).wait(1).to({rotation:0.2,x:37.1,y:-0.9},0).wait(1).to({rotation:13,x:40.2,y:4.7},0).wait(1).to({rotation:25.8,x:42.1,y:10.8},0).wait(24).to({regX:-22.7,regY:16.9,rotation:0.1,x:14,y:16.1},0).wait(1).to({regX:0,regY:0,rotation:13,x:39.9,y:4.7},0).wait(1).to({rotation:25.8,x:41.8,y:10.7},0).wait(1).to({rotation:13,x:39.9,y:4.7},0).wait(1).to({rotation:0.2,x:36.8,y:-0.8},0).wait(1).to({rotation:13,x:39.9,y:4.7},0).wait(1).to({rotation:25.8,x:41.8,y:10.7},0).wait(1).to({rotation:13,x:39.9,y:4.7},0).wait(1).to({rotation:0.2,x:36.8,y:-0.8},0).wait(1).to({rotation:13,x:39.9,y:4.7},0).wait(1).to({rotation:25.8,x:41.8,y:10.7},0).wait(2).to({regX:-22.7,regY:17,rotation:0.1,x:14,y:16},0).wait(1).to({regX:0,regY:0,rotation:13,x:39.9,y:4.5},0).wait(1).to({rotation:25.8,x:41.8,y:10.6},0).wait(1).to({rotation:13,x:39.9,y:4.5},0).wait(1).to({rotation:0.2,x:36.8,y:-0.9},0).wait(1).to({rotation:13,x:39.9,y:4.5},0).wait(1).to({rotation:25.8,x:41.8,y:10.6},0).wait(1).to({rotation:13,x:39.9,y:4.5},0).wait(1).to({rotation:0.2,x:36.8,y:-0.9},0).wait(1).to({rotation:13,x:39.9,y:4.5},0).wait(1).to({rotation:25.8,x:41.8,y:10.6},0).wait(14));

	// L front
	this.instance_8 = new lib.Lfront();
	this.instance_8.setTransform(35,41,1,1,0,0,0,-20,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:0,regY:0,rotation:9.2,x:56.7,y:32.3},0).wait(1).to({rotation:18.4,x:57.8,y:35.9},0).wait(1).to({rotation:27.6,x:58.3,y:39.6},0).wait(1).to({rotation:14.5,x:57.4,y:34.4},0).wait(1).to({rotation:1.5,x:55.3,y:29.5},0).wait(1).to({rotation:14.5,x:57.4,y:34.4},0).wait(1).to({rotation:27.6,x:58.3,y:39.6},0).wait(1).to({rotation:14.5,x:57.4,y:34.4},0).wait(1).to({rotation:1.5,x:55.3,y:29.5},0).wait(1).to({rotation:14.5,x:57.4,y:34.4},0).wait(1).to({rotation:27.6,x:58.3,y:39.6},0).wait(1).to({rotation:14.5,x:57.4,y:34.4},0).wait(1).to({rotation:1.5,x:55.3,y:29.5},0).wait(1).to({rotation:14.5,x:57.4,y:34.4},0).wait(1).to({rotation:27.6,x:58.3,y:39.6},0).wait(24).to({regX:-19.6,regY:12,rotation:1.3,x:35,y:41},0).wait(1).to({regX:0,regY:0,rotation:14.5,x:56.9,y:34.3},0).wait(1).to({rotation:27.6,x:57.9,y:39.4},0).wait(1).to({rotation:14.5,x:56.9,y:34.3},0).wait(1).to({rotation:1.5,x:54.8,y:29.5},0).wait(1).to({rotation:14.5,x:56.9,y:34.3},0).wait(1).to({rotation:27.6,x:57.9,y:39.4},0).wait(1).to({rotation:14.5,x:56.9,y:34.3},0).wait(1).to({rotation:1.5,x:54.8,y:29.5},0).wait(1).to({rotation:14.5,x:56.9,y:34.3},0).wait(1).to({rotation:27.6,x:57.9,y:39.4},0).wait(2).to({regX:-19.4,regY:12.2,rotation:1.3,x:35,y:41.1},0).wait(1).to({regX:0,regY:0,rotation:14.5,x:56.8,y:34.1},0).wait(1).to({rotation:27.6,x:57.8,y:39.2},0).wait(1).to({rotation:14.5,x:56.8,y:34.1},0).wait(1).to({rotation:1.5,x:54.7,y:29.4},0).wait(1).to({rotation:14.5,x:56.8,y:34.1},0).wait(1).to({rotation:27.6,x:57.8,y:39.2},0).wait(1).to({rotation:14.5,x:56.8,y:34.1},0).wait(1).to({rotation:1.5,x:54.7,y:29.4},0).wait(1).to({rotation:14.5,x:56.8,y:34.1},0).wait(1).to({rotation:27.6,x:57.8,y:39.2},0).wait(15).to({regX:-20,regY:12,rotation:0,x:35,y:41},0).wait(1).to({regX:0,regY:0,rotation:9.2,x:56.7,y:32.3},0).wait(1).to({rotation:18.4,x:57.8,y:35.9},0).wait(1).to({rotation:27.6,x:58.3,y:39.6},0).wait(1).to({rotation:14.5,x:57.4,y:34.4},0).wait(1).to({rotation:1.5,x:55.3,y:29.5},0).wait(1).to({rotation:14.5,x:57.4,y:34.4},0).wait(1).to({rotation:27.6,x:58.3,y:39.6},0).wait(1).to({rotation:14.5,x:57.4,y:34.4},0).wait(1).to({rotation:1.5,x:55.3,y:29.5},0).wait(1).to({rotation:14.5,x:57.4,y:34.4},0).wait(1).to({rotation:27.6,x:58.3,y:39.6},0).wait(1).to({rotation:14.5,x:57.4,y:34.4},0).wait(1).to({rotation:1.5,x:55.3,y:29.5},0).wait(1).to({rotation:14.5,x:57.4,y:34.4},0).wait(1).to({rotation:27.6,x:58.3,y:39.6},0).wait(24).to({regX:-19.5,regY:12.1,rotation:1.3,x:35,y:41.1},0).wait(1).to({regX:0,regY:0,rotation:14.5,x:56.9,y:34.2},0).wait(1).to({rotation:27.6,x:57.8,y:39.3},0).wait(1).to({rotation:14.5,x:56.9,y:34.2},0).wait(1).to({rotation:1.5,x:54.8,y:29.5},0).wait(1).to({rotation:14.5,x:56.9,y:34.2},0).wait(1).to({rotation:27.6,x:57.8,y:39.3},0).wait(1).to({rotation:14.5,x:56.9,y:34.2},0).wait(1).to({rotation:1.5,x:54.8,y:29.5},0).wait(1).to({rotation:14.5,x:56.9,y:34.2},0).wait(1).to({rotation:27.6,x:57.8,y:39.3},0).wait(2).to({regX:-19.4,regY:12.2,rotation:1.3,x:34.9,y:41},0).wait(1).to({regX:0,regY:0,rotation:14.5,x:56.8,y:34},0).wait(1).to({rotation:27.6,x:57.8,y:39.1},0).wait(1).to({rotation:14.5,x:56.8,y:34},0).wait(1).to({rotation:1.5,x:54.6,y:29.3},0).wait(1).to({rotation:14.5,x:56.8,y:34},0).wait(1).to({rotation:27.6,x:57.8,y:39.1},0).wait(1).to({rotation:14.5,x:56.8,y:34},0).wait(1).to({rotation:1.5,x:54.6,y:29.3},0).wait(1).to({rotation:14.5,x:56.8,y:34},0).wait(1).to({rotation:27.6,x:57.8,y:39.1},0).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159.7,-171.6,318,341.2);


// stage content:



(lib.FWW_TilesAll_v01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Stonefly
	this.instance = new lib.Stonefly("synched",0);
	this.instance.setTransform(1806,1356.7,1.117,1.117,-157.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-9.8,regY:13.3,scaleX:1.12,scaleY:1.12,x:1811.7,y:1314.6,startPosition:1},0).wait(1).to({x:1801.5,y:1281.9,startPosition:2},0).wait(1).to({x:1791.4,y:1249.2,startPosition:3},0).wait(1).to({x:1781.3,y:1216.5,startPosition:4},0).wait(1).to({x:1771.2,y:1183.8,startPosition:5},0).wait(1).to({x:1761,y:1151.1,startPosition:6},0).wait(1).to({x:1750.9,y:1118.5,startPosition:7},0).wait(1).to({x:1740.8,y:1085.8,startPosition:8},0).wait(1).to({x:1730.6,y:1053.1,startPosition:9},0).wait(1).to({x:1720.5,y:1020.4,startPosition:10},0).wait(1).to({x:1710.4,y:987.7,startPosition:11},0).wait(1).to({x:1700.3,y:955,startPosition:12},0).wait(1).to({x:1690.1,y:922.4,startPosition:13},0).wait(1).to({x:1680,y:889.7,startPosition:14},0).wait(1).to({x:1669.9,y:857,startPosition:15},0).wait(1).to({x:1659.8,y:824.3,startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:30},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({rotation:-177.3,x:1655.6,y:819.4,startPosition:39},0).wait(1).to({rotation:-197.4,x:1649.9,y:816.3,startPosition:40},0).wait(1).to({rotation:-197,x:1635.2,y:803.5,startPosition:41},0).wait(1).to({rotation:-196.5,x:1620.5,y:790.7,startPosition:42},0).wait(1).to({rotation:-196,x:1605.8,y:777.8,startPosition:43},0).wait(1).to({rotation:-195.6,x:1591.1,y:765,startPosition:44},0).wait(1).to({rotation:-195.1,x:1576.5,y:752.2,startPosition:45},0).wait(1).to({rotation:-194.6,x:1561.7,y:739.4,startPosition:46},0).wait(1).to({rotation:-194.2,x:1547,y:726.5,startPosition:47},0).wait(1).to({rotation:-193.7,x:1532.3,y:713.7,startPosition:48},0).wait(1).to({rotation:-193.3,x:1517.6,y:700.9,startPosition:49},0).wait(1).to({rotation:-192.8,x:1502.9,y:688.1,startPosition:50},0).wait(1).to({rotation:-192.3,x:1488.2,y:675.2,startPosition:51},0).wait(1).to({rotation:-191.9,x:1473.5,y:662.5,startPosition:52},0).wait(1).to({rotation:-191.4,x:1458.8,y:649.6,startPosition:53},0).wait(1).to({rotation:-190.9,x:1444.1,y:636.8,startPosition:54},0).wait(1).to({rotation:-190.5,x:1429.4,y:624,startPosition:55},0).wait(1).to({rotation:-190,x:1414.7,y:611.2,startPosition:56},0).wait(1).to({rotation:-189.5,x:1400,y:598.4,startPosition:57},0).wait(1).to({rotation:-189.1,x:1385.3,y:585.6,startPosition:58},0).wait(1).to({rotation:-188.6,x:1370.6,y:572.8,startPosition:59},0).wait(1).to({rotation:-188.2,x:1355.9,y:560,startPosition:60},0).wait(1).to({rotation:-187.7,x:1341.2,y:547.2,startPosition:61},0).wait(1).to({rotation:-187.2,x:1326.5,y:534.4,startPosition:62},0).wait(1).to({rotation:-186.8,x:1311.8,y:521.6,startPosition:63},0).wait(1).to({startPosition:64},0).wait(1).to({startPosition:65},0).wait(1).to({startPosition:66},0).wait(1).to({startPosition:67},0).wait(1).to({startPosition:68},0).wait(1).to({startPosition:69},0).wait(1).to({startPosition:70},0).wait(1).to({startPosition:71},0).wait(1).to({startPosition:72},0).wait(1).to({startPosition:73},0).wait(1).to({startPosition:74},0).wait(1).to({startPosition:75},0).wait(1).to({rotation:-186.7,x:1288.2,y:503.3,startPosition:76},0).wait(1).to({x:1264.7,y:485,startPosition:77},0).wait(1).to({rotation:-186.6,x:1241.1,y:466.6,startPosition:78},0).wait(1).to({x:1217.5,y:448.3,startPosition:79},0).wait(1).to({rotation:-186.5,x:1193.9,y:429.9,startPosition:80},0).wait(1).to({rotation:-186.4,x:1170.4,y:411.6,startPosition:81},0).wait(1).to({x:1146.8,y:393.3,startPosition:82},0).wait(1).to({rotation:-186.3,x:1123.2,y:374.9,startPosition:83},0).wait(1).to({x:1099.6,y:356.6,startPosition:84},0).wait(1).to({rotation:-186.2,x:1076.1,y:338.3,startPosition:85},0).wait(1).to({x:1052.5,y:319.9,startPosition:86},0).wait(1).to({rotation:-186.1,x:1028.9,y:301.6,startPosition:87},0).wait(1).to({x:1005.4,y:283.3,startPosition:88},0).wait(1).to({rotation:-186,x:981.8,y:265,startPosition:89},0).wait(1).to({x:958.2,y:246.6,startPosition:90},0).wait(1).to({rotation:-185.9,x:934.6,y:228.3,startPosition:91},0).wait(1).to({x:911.1,y:210,startPosition:92},0).wait(1).to({rotation:-185.8,startPosition:93},0).wait(1).to({startPosition:94},0).wait(1).to({rotation:-185.7,startPosition:95},0).wait(1).to({x:911.2,startPosition:96},0).wait(1).to({rotation:-185.6,y:210.1,startPosition:97},0).wait(1).to({startPosition:98},0).wait(1).to({rotation:-185.5,startPosition:99},0).wait(1).to({rotation:-185.4,startPosition:100},0).wait(1).to({startPosition:101},0).wait(1).to({rotation:-185.3,startPosition:102},0).wait(1).to({x:911.3,startPosition:103},0).wait(1).to({rotation:-185.2,startPosition:104},0).wait(1).to({startPosition:105},0).wait(1).to({rotation:-185.1,startPosition:106},0).wait(1).to({y:210.2,startPosition:107},0).wait(1).to({rotation:-185,startPosition:108},0).wait(1).to({startPosition:109},0).wait(1).to({rotation:-184.9,x:911.4,startPosition:110},0).wait(1).to({startPosition:111},0).wait(1).to({rotation:-184.8,startPosition:112},0).wait(1).to({startPosition:113},0).wait(1).to({rotation:-184.7,startPosition:114},0).wait(1).to({rotation:-202.4,x:890.4,y:208,startPosition:115},0).wait(1).to({rotation:-220.2,x:868.9,y:207.5,startPosition:116},0).wait(1).to({rotation:-220.1,x:817.4,y:202.1,startPosition:117},0).wait(1).to({rotation:-220,x:765.9,y:196.6,startPosition:118},0).wait(1).to({x:714.4,y:191.2,startPosition:119},0).wait(1).to({rotation:-219.9,x:662.8,y:185.8,startPosition:120},0).wait(1).to({x:611.3,y:180.5,startPosition:121},0).wait(1).to({rotation:-219.8,x:559.9,y:175.1,startPosition:122},0).wait(1).to({rotation:-219.7,x:508.4,y:169.6,startPosition:123},0).wait(1).to({x:456.8,y:164.2,startPosition:124},0).wait(1).to({rotation:-219.6,x:405.3,y:158.8,startPosition:125},0).wait(1).to({x:353.8,y:153.4,startPosition:126},0).wait(1).to({rotation:-219.5,x:302.3,y:148,startPosition:127},0).wait(1).to({rotation:-219.4,x:250.8,y:142.5,startPosition:128},0).wait(1).to({x:199.2,y:137.1,startPosition:129},0).wait(1).to({rotation:-219.3,x:147.8,y:131.7,startPosition:130},0).wait(1).to({x:96.3,y:126.3,startPosition:131},0).wait(1).to({rotation:-219.2,x:44.7,y:120.9,startPosition:132},0).wait(1).to({rotation:-219.1,x:-6.8,y:115.5,startPosition:133},0).wait(1).to({x:-58.2,y:110.1,startPosition:134},0).wait(1).to({rotation:-219,x:-109.8,y:104.7,startPosition:135},0).wait(1).to({x:-161.3,y:99.3,startPosition:136},0).wait(1).to({rotation:-218.9,x:-212.8,y:93.9,startPosition:137},0).wait(1).to({rotation:-218.8,x:-264.3,y:88.5,startPosition:138},0).to({_off:true},1).wait(101));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2633.7,1737.4,244.7,361.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;