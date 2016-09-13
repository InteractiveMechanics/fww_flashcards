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


(lib.BullFrogbody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#222010").s().p("AgMAOQgPgEACgJQADgJAcgIIATAHQAEAQgPAHQgGADgIAAQgEAAgIgDg");
	this.shape.setTransform(146.3,81.3,1.17,1.17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#222010").s().p("AgMAVQgPgHACgNQADgMAbgMIAUAKQAEAYgPAJQgGAEgIAAQgEAAgIgDg");
	this.shape_1.setTransform(130.5,92.9,1.17,1.17);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#222010").s().p("AgMAGQgBgGANgIIAKgBQAMARgZACIgDAAQgGAAAAgEg");
	this.shape_2.setTransform(162.9,61.6,1.17,1.17);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#222010").s().p("AgMAFQgBgFANgJIAKAAQAGAIgGAEQgFAGgHABIgCAAQgHAAgBgFg");
	this.shape_3.setTransform(174.8,50.5,1.17,1.17);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#222010").s().p("AgMAGQgCgGANgMIAKABQAHALgFAHQgFAGgHAAQgJAAgCgHg");
	this.shape_4.setTransform(175.3,60.4,1.17,1.17);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#222010").s().p("AgTAJQgBgJAUgNIAQgBQAIANgJAHQgIAIgLABIgEAAQgKAAgBgGg");
	this.shape_5.setTransform(151,55,1.17,1.17);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#222010").s().p("AgDAUQgOgBgCgKQgCgKATgSIAQABQALASgJAKQgGAKgLAAIgCAAg");
	this.shape_6.setTransform(130.5,72.7,1.17,1.17);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#222010").s().p("AgMAOQgPgFACgIQADgJAbgIIAUAHQAEAQgPAHQgGADgIAAQgEAAgIgDg");
	this.shape_7.setTransform(148.5,67,1.17,1.17);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#222010").s().p("AgMAGQgBgGANgIIAKgBQAMARgZACIgDAAQgGAAAAgEg");
	this.shape_8.setTransform(239.5,125.1,1.17,1.17);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#222010").s().p("AgMAGQgBgGANgJIAKAAQAMARgZACIgDAAQgGAAAAgEg");
	this.shape_9.setTransform(251.4,114,1.17,1.17);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#222010").s().p("AgBANQgJAAgCgHQgCgGANgMIAKAAQAHAMgFAGQgFAHgGAAIgBAAg");
	this.shape_10.setTransform(242.6,114.1,1.17,1.17);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#222010").s().p("AgTAJQgBgJAUgOIAQAAQAIAMgJAIQgIAIgLABIgEAAQgKAAgBgGg");
	this.shape_11.setTransform(227.6,118.5,1.17,1.17);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#222010").s().p("AgTAJQgCgKATgSIAQABQALASgJALQgHAJgMAAQgOAAgCgLg");
	this.shape_12.setTransform(225.2,133.8,1.17,1.17);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#222010").s().p("AgMAOQgPgFACgIQADgJAbgIIAUAHQAEAQgPAHQgGADgIAAQgEAAgIgDg");
	this.shape_13.setTransform(210.7,143.1,1.17,1.17);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#222010").s().p("AgMAVQgPgHACgNQADgMAbgMIAUAKQAEAYgPAJQgGAEgIAAQgEAAgIgDg");
	this.shape_14.setTransform(195.9,137.3,1.17,1.17);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#222010").s().p("AgSAWQgXgHADgOQAEgNArgMIAeAKQAFAZgWAKQgKAEgMAAQgHAAgLgDg");
	this.shape_15.setTransform(180,151.1,1.17,1.17);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#222010").s().p("AgSAWQgXgIADgNQAEgNArgMIAeAKQAFAZgWAKQgKAEgMAAQgHAAgLgDg");
	this.shape_16.setTransform(112.8,84.3,1.17,1.17);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#222010").s().p("AgSAfQgXgKADgTQAEgUAqgRIAeAPQAFAkgWAOQgJAGgMAAQgHAAgLgFg");
	this.shape_17.setTransform(153.1,158.4,1.17,1.17);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#222010").s().p("AgSAfQgXgKADgTQAEgUArgRIAeAPQAFAkgWAOQgKAGgMAAQgIAAgKgFg");
	this.shape_18.setTransform(112.8,103.8,1.17,1.17);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#020100").s().p("AgSAWQAEgeACgLQAEgSAbgEQgKAugbAlg");
	this.shape_19.setTransform(15.8,171.2,1.17,1.17);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#020100").s().p("AgzAOIACgOIADgmQBEAdAeAQQgNAQgTAHQgNAFgaAEg");
	this.shape_20.setTransform(39.3,199.7,1.17,1.17);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#222010").s().p("AnxErQgSgEANgUQA6hXCNgzQAngOBQgaQBHgXArgXQA2geBYg8QBjhFArgZICJhEQBSgpApgvQAPgRANALQAOALgQASQgmAthCAkQgmAVhRAmQg4AdhQA3IiEBYQhmBCiPAsQhbAdgkARQhHAighAyQgKAOgNAAIgHgBg");
	this.shape_21.setTransform(184.7,125.5,1.17,1.17);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#222010").s().p("AoeFsQAEgWARgFQCTgnCdhdQBuhACih9QCyiFBNgzQBZg8AYgUQA+g1ARg6QAGgTAUgCQAVgCgHAXQgTBAg7A4QgmAlhNA0QhdA9i3CJQipCBhxBDQijBgiZAoIgHABQgNAAADgRg");
	this.shape_22.setTransform(150.1,94.6,1.17,1.17);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#87835C","#54541F","#575723","#464012"],[0,0.475,0.475,1],14.5,10.9,-12.4,-5.5).s().p("AhNDEQhTgLgYgXQgRgRAlgxQA8hNADgFQA4hfAMgdQARgpgSgwIAiABQArADAjANQByAqgCB4QgBBTg8A5QggAeg7AiQgTAQgsAAQgXAAgdgEg");
	this.shape_23.setTransform(49,132.1,1.17,1.17);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#87835C","#54541F","#575723","#464012"],[0,0.475,0.475,1],-4.2,-16.2,2.3,12.3).s().p("AjLBNQgjhkBXhTQA+g7BSADQAqACBCASQAlAFAoA+QAkA5AAAhQAAAWhHgMQhYgQgYAHQhaAaglAjQgZAXgeA/QgjgjgRgzg");
	this.shape_24.setTransform(85.1,177.4,1.17,1.17);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#222010").s().p("ACYBHQghhAg2gZQg4gbhDASQg/AQgxAeQgUANgCgVQgBgSAQgLQBHgvBTgLQBFgJA4AfQA3AeAhBAQAIAPgTAQQgJAIgHAAQgHAAgEgIg");
	this.shape_25.setTransform(135,169,1.17,1.17);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["#999939","#6D7025"],[0.086,1],0,0,0,0,0,6.9).s().p("AgvAxQgUgVAAgcQAAgcAUgUQAUgVAbAAQAcAAAUAVQAUAUAAAcQAAAcgUAVQgUAUgcABQgbgBgUgUg");
	this.shape_26.setTransform(135.2,186.8,1.17,1.17);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["#89744C","#574109","#3A2600"],[0,0.498,1],0,0,0,0,0,15.5).s().p("AhrBuQgtguAAhAQAAhAAtgtQAtgtA+gBQBAABAsAtQAtAtAABAQAABAgtAuQgtAtg/AAQg+AAgtgtg");
	this.shape_27.setTransform(135.2,186.8,1.17,1.17);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#EAC82E").ss(1,0,0,4).p("AgTAzQgMgHAKggQAFgOASgaQATgYADABQAGADgFAWQgFAWgLAQQgNAagCAEQgJAMgEgDg");
	this.shape_28.setTransform(36.5,126.8,1.17,1.17);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgTAzQgMgHAKggQAFgOASgaQATgYADABQAGADgFAWQgFAWgLAQIgPAeQgIAKgEAAIgBgBg");
	this.shape_29.setTransform(36.5,126.8,1.17,1.17);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["#DFC494","#C6973C","#B47C26"],[0,0.498,1],0.2,-0.3,0,0.2,-0.3,13.9).s().p("Ag7CVQgjgUAeheQAPgtA3hKQA3hIAKAGQAPAJgOBAQgOA/geAxQgsBPgGAIQgTAdgNAAQgDAAgCgCg");
	this.shape_30.setTransform(36.6,126.3,1.17,1.17);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#EAC82E").ss(1,0,0,4).p("AA4gTQAAAhghATQgQAJgfgKQgfgKAAgKQAAgOAWgRQAVgRASAAQAgAAADAAQAPADAAAOg");
	this.shape_31.setTransform(87.2,191.7,1.17,1.17);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgYAgQgfgKAAgKQAAgOAWgRQAVgRASAAIAjAAQAPADAAAOQAAAhghATQgIAEgMAAQgKAAgRgFg");
	this.shape_32.setTransform(87.2,191.7,1.17,1.17);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.rf(["#DFC494","#C6973C","#B47C26"],[0,0.498,1],0,0,0,0,0,13.9).s().p("AhIBeQhagdAAgdQAAgsA+gyQA/gzA4AAQBbAAALACQAqAIAAAoQAABkhgA4QgXANghAAQgiAAgxgQg");
	this.shape_33.setTransform(86.4,192.2,1.17,1.17);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#464012","#54541F","#87835C"],[0,0.553,1],-139.5,83.2,134.9,-88.3).s().p("AwgOxQjegJhbhOQg5gwgXh4QgaiCAxhOQBQh9CTjLQC1j6A0glQA9gsCShUQCThVBCgeQAygWA5hEQBIhXApghQBAgzDhhXQCEg1CTgxQAsgOBnAJQBvALBIgQQB1gZD6gpQEIgsAxAAQAsAABABZQAjAxA5BcQAeArhnBoQh/BxgeAoQgJAMguAmQg+AxgcAbQh7BwgOBaQgOBbhjBmQg2A4hlBbQhzCBjBBiQiIBEhMAPQgTAEg1A8Qg/BFhMAnQheAvjoA+Qi9AziYAcQiCAZiIAAIhAgCg");
	this.shape_34.setTransform(170.8,110.8,1.17,1.17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,341.6,221.6);


(lib.BFfrontLegtop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#464012","#54541F","#87835C"],[0,0.553,1],-33.6,0,33.7,0).s().p("AA0CxQgVgOgcgsQgagtgWgOQgXgOg0gJQg/gJgfgHQhygXgHhTQgEg+A7gfQAkgTBOgKQA6gIBeAVQBhAXBUArQBgAxArA9QAxBEgfBNQgeBHhdAKQgRACgQAAQhBAAgzghg");
	this.shape.setTransform(39.4,24.7,1.17,1.17);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78.8,49.3);


(lib.BFfrontLegfoot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#464012","#54541F","#87835C"],[0,0.553,1],-37.9,-0.1,37.9,-0.1).s().p("AgTCPIBJhrQAng6AMgqQhhgliRAtIh2AkQhEARg2gDQAugXBQgaQBdggAagLQB/g1AYhkQAGgYgVgLQgLgHgmgHQgogHgPgHQgagNAAgYQB+AAASACQB/ANAPA7QAIAiAQAOQAMAKAXAEQBCAJAiAjIAbAUQhmBaARCDQAQB6BlBdQhuAPgrh3QgehPADh+QgrAYgoA4QgWAggtBTQgoBNgYAiQgpA2gwAQQgKhKBgiHg");
	this.shape.setTransform(44.4,41.3,1.17,1.17);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88.7,82.6);


(lib.BFfronLegmid = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#464012","#54541F","#87835C"],[0,0.553,1],-25,0,25.1,0).s().p("AjMDcQhFgKAlhVQAhhMBhheQBhhgBbgwQBog2ArApQArApgsBNQgmBChbBMQhUBHhXAwQhSAsgpAAIgJgBg");
	this.shape.setTransform(29.3,25.9,1.17,1.17);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.6,51.8);


(lib.BFbackLegtop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#4E4D24","#656333","#76723E","#A29A74"],[0,0.498,0.8,1],-47.6,18.1,41.5,-29.3).s().p("AgqGdQi/iHhkg7QiBhOh1iqQhSh5glhjQgVg4AahQQAXhIAogqQAQgRAmAPQAaALA7AlQCVBfBKATQA7AOCfBTQCWBPCrBmQGmD7AOBHQANBCjbBcQhTAjhYAbQhTAZglADIgMAAQhaAAiWhgg");
	this.shape.setTransform(124.3,109.7,1.17,1.17,0,0,0,35.4,42.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,165.8,119.3);


(lib.BFbackLegmid = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#4E4D24","#656333","#76723E","#A29A74"],[0,0.498,0.8,1],-76.6,37.7,73.6,-42.2).s().p("AszDxQgsgOAEhDQACgsAXhBQANgmDZhDQBsgiDbg7QBZgYDxgCQEXgDAJgBQA2gGBJgZIBxgnQAcgIA0AAQA4AAAwAKQB9AagnBIQgnBHjUBgQidBIhmAdQg3AQjgAsQjkAuhlAOQhqAPjHAAIgMAAQi+AAgtgPg");
	this.shape.setTransform(16.4,50,1.17,1.17,0,0,0,-72.1,17.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,201.5,60.1);


(lib.BFbackLegfoot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#4E4D24","#656333","#76723E","#A29A74"],[0,0.498,0.8,1],-35.2,22.1,36.4,-16).s().p("AHIH/QgdgNg5ghQgdgQgSg3QgRg+gKgUQgNgrgHgPQgLgXgdAVQgmAhgMAIQgRALgNgZQgHgPANgnQALgfgegWQgggYhiATIiAAZQgiAAANggQAYgpAKgUQALgWAxADQAPAAgCgBIghgOQgxgTiCgWQiAgVgKgDQgbgLgDgMQgEgQAigbQAfgZCZArQBNAWBGAaQgjgRgygUQhkgohLgMQgcgFgWgIQhIgXhKg0QhAgtgeglQgtg4gSgzQgYhFA5gEQgXAnAhAmQASAVAqAgQAMAMBGgFQBGgFAcAcQAeAeCNBNIAOAIQg6gjhRg8QhnhNgrgrQgfgfAMg/QAGgfANgZQABARAJAZQARAyAlAmQAtAtBTAuQBSAuBMAXQA+ASCmBSIFbCoQAjAQBXC+QBBCNAfBVQAMAigXAJIhyAZIgNABQgbAAgsgTg");
	this.shape.setTransform(131.2,122.1,1.17,1.17,0,0,0,45.2,51.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,156.7,124.2);


(lib.bullfrogfrontLegL_stop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BF-frontLeg-top
	this.instance = new lib.BFfrontLegtop("synched",0);
	this.instance.setTransform(43,11.1,0.999,0.999,-28.8,0,0,8,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:39.4,regY:24.7,scaleX:1,scaleY:1,rotation:-19.2,x:76.8,y:13.2},0).wait(1).to({rotation:-9.6,x:76.1,y:19.1},0).wait(1).to({rotation:0,x:74.4,y:24.8},0).wait(1));

	// BF-fronLeg-mid
	this.instance_1 = new lib.BFfronLegmid("synched",0);
	this.instance_1.setTransform(108.2,1.9,0.999,0.999,-158.2,0,0,43.5,10.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:29.3,regY:25.9,scaleX:1,scaleY:1,rotation:-105.4,x:124.7,y:21.8},0).wait(1).to({rotation:-52.7,x:107.4,y:43.7},0).wait(1).to({rotation:0,x:87.1,y:49.1},0).wait(1));

	// BF-frontLeg-foot
	this.instance_2 = new lib.BFfrontLegfoot("synched",0);
	this.instance_2.setTransform(153.8,-18.7,0.99,0.929,0,-150.4,162,65.6,19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:44.4,regY:41.3,scaleX:1,scaleY:0.95,skewX:-100.1,skewY:228.1,x:182.3,y:47.3},0).wait(1).to({scaleX:1,scaleY:0.98,skewX:-50,skewY:294,x:115.4,y:101.7},0).wait(1).to({scaleX:1,scaleY:1,skewX:0,skewY:360,x:44.6,y:87.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(35.5,-79.7,189.5,102.6);


(lib.bullfrogfrontLegL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BF-frontLeg-top
	this.instance = new lib.BFfrontLegtop("synched",0);
	this.instance.setTransform(43,11.8,1,1,0,0,0,8,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:39.4,regY:24.7,rotation:-9.6,x:76.1,y:19},0).wait(1).to({rotation:-19.2,x:76.9,y:13.2},0).wait(1).to({rotation:-28.8,x:76.8,y:7.2},0).wait(1));

	// BF-fronLeg-mid
	this.instance_1 = new lib.BFfronLegmid("synched",0);
	this.instance_1.setTransform(101.3,33.4,1,1,0,0,0,43.6,10.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:29.3,regY:25.9,rotation:-52.7,x:107.4,y:43.8},0).wait(1).to({rotation:-105.4,x:124.8,y:21.9},0).wait(1).to({rotation:-158.1,x:127.3,y:-7.4},0).wait(1));

	// BF-frontLeg-foot
	this.instance_2 = new lib.BFfrontLegfoot("synched",0);
	this.instance_2.setTransform(65.8,65.7,1,1,0,0,0,65.8,19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:44.4,regY:41.3,scaleX:1,scaleY:0.98,skewX:-50,skewY:-66,x:115.3,y:101.9},0).wait(1).to({scaleX:1,scaleY:0.95,skewX:-100.1,skewY:-131.9,x:182.4,y:47.4},0).wait(1).to({scaleX:0.99,scaleY:0.93,skewX:-150.1,skewY:-197.9,x:183.9,y:-42.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,116.3,128.4);


(lib.bullfrogbackLegR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.BFbackLegtop("synched",0);
	this.instance.setTransform(131.5,258.7,1,1,0,0,0,131.5,111.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:82.9,regY:59.6,rotation:29.6,x:114.7,y:189.8},0).wait(1).to({rotation:59.2,x:150.9,y:190.5},0).wait(1).to({rotation:88.8,x:182,y:209},0).wait(1).to({rotation:71.1,x:164.4,y:195.9},0).wait(1).to({rotation:53.3,x:143.7,y:188.9},0).wait(1).to({rotation:35.5,x:121.8,y:188.5},0).wait(1).to({rotation:17.8,x:100.9,y:194.8},0).wait(1).to({rotation:0,x:82.9,y:207.2},0).wait(1));

	// Layer 3
	this.instance_1 = new lib.BFbackLegfoot("synched",0);
	this.instance_1.setTransform(193.2,120.7,1,1,0,0,0,144.1,120.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:78.3,regY:62.1,rotation:11.3,x:221.2,y:44.8},0).wait(1).to({rotation:48.8,x:322.3,y:-10.2},0).wait(1).to({rotation:86.3,x:423.2,y:-28.8},0).wait(1).to({rotation:69,x:366.2,y:-4.6},0).wait(1).to({rotation:51.8,x:306.4,y:27.1},0).wait(1).to({rotation:34.5,x:244.1,y:31.3},0).wait(1).to({rotation:17.3,x:183.7,y:43.4},0).wait(1).to({rotation:0,x:127.4,y:62.1},0).wait(1));

	// Layer 4
	this.instance_2 = new lib.BFbackLegmid("synched",0);
	this.instance_2.setTransform(15.1,159,1,1,0,0,0,10.7,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:100.7,regY:30,rotation:11.5,x:184.6,y:117.1},0).wait(1).to({rotation:-4.3,x:245.6,y:102.9},0).wait(1).to({rotation:-20.1,x:300,y:90.7},0).wait(1).to({rotation:-3.2,x:260.7,y:100.1},0).wait(1).to({rotation:13.8,x:213.7,y:111.7},0).wait(1).to({rotation:9.2,x:178.1,y:120.7},0).wait(1).to({rotation:4.6,x:141.9,y:129.8},0).wait(1).to({rotation:0,x:105.1,y:139},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,205.8,266.8);


(lib.BullFrogswimming_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BullFrog-body
	this.instance = new lib.BullFrogbody("synched",0);
	this.instance.setTransform(199.3,341.3,1,1,0,0,0,170.8,110.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

	// bullfrog-frontLeg-L
	this.instance_1 = new lib.bullfrogfrontLegL("synched",0,false);
	this.instance_1.setTransform(183.6,427,1,1,0,0,0,49.6,15.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

	// bullfrog-FrontLeg-R
	this.instance_2 = new lib.bullfrogfrontLegL("synched",0,false);
	this.instance_2.setTransform(90.5,330,1,1,0,115.7,-64.3,47.6,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100));

	// bullfrog-backLeg-R
	this.instance_3 = new lib.bullfrogbackLegR("synched",0);
	this.instance_3.setTransform(319,250.7,1,1,0,0,0,128.7,250.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(100));

	// bullfrog-backLeg-L
	this.instance_4 = new lib.bullfrogbackLegR("synched",0);
	this.instance_4.setTransform(343.2,285,1,1,0,100.4,-79.6,128.6,250.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.4,0,597.8,539.8);


(lib.BullFrogstop_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BullFrog-body
	this.instance = new lib.BullFrogbody("synched",0);
	this.instance.setTransform(199.3,341.3,1,1,0,0,0,170.8,110.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6));

	// bullfrog-frontLeg-L
	this.instance_1 = new lib.bullfrogfrontLegL_stop("synched",0,false);
	this.instance_1.setTransform(183.6,427,1,1,0,0,0,49.6,15.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6));

	// bullfrog-FrontLeg-R
	this.instance_2 = new lib.bullfrogfrontLegL_stop("synched",0,false);
	this.instance_2.setTransform(90.5,330,1,1,0,115.7,-64.3,47.6,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6));

	// bullfrog-backLeg-R
	this.instance_3 = new lib.bullfrogbackLegR("synched",3);
	this.instance_3.setTransform(319,250.7,1,1,0,0,0,128.7,250.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6));

	// bullfrog-backLeg-L
	this.instance_4 = new lib.bullfrogbackLegR("synched",3);
	this.instance_4.setTransform(343.2,285,1,1,0,100.4,-79.6,128.6,250.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(28.5,-109.6,730.3,561.8);


// stage content:
(lib.FWW_TilesAll_v01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Bullfrog
	this.instance = new lib.BullFrogswimming_mc("synched",0);
	this.instance.setTransform(2226.9,-241.2,1,1,0,0,0,254.7,230.7);

	this.instance_1 = new lib.BullFrogstop_mc("synched",0,false);
	this.instance_1.setTransform(1002.9,489.9,1,1,0,0,0,254.7,230.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:348,regY:234.3,x:2269.3,y:-206,startPosition:1},0).wait(1).to({x:2218.4,y:-174.5,startPosition:2},0).wait(1).to({x:2167.6,y:-143,startPosition:3},0).wait(1).to({x:2116.7,y:-111.5,startPosition:4},0).wait(1).to({x:2065.8,y:-80,startPosition:5},0).wait(1).to({x:2015,y:-48.5,startPosition:6},0).wait(1).to({x:1964.1,y:-17,startPosition:7},0).wait(1).to({x:1913.3,y:14.5,startPosition:8},0).wait(1).to({x:1862.4,y:46,startPosition:9},0).wait(1).to({x:1773.4,y:100.5,startPosition:10},0).wait(1).to({x:1684.5,y:155,startPosition:11},0).wait(1).to({x:1595.5,y:209.6,startPosition:12},0).wait(1).to({x:1569.8,y:232.1,startPosition:13},0).wait(1).to({x:1544,y:254.6,startPosition:14},0).wait(1).to({x:1518.3,y:277.1,startPosition:15},0).wait(1).to({x:1492.5,y:299.6,startPosition:16},0).wait(1).to({x:1466.8,y:322.2,startPosition:17},0).wait(1).to({x:1441,y:344.7,startPosition:18},0).wait(1).to({x:1415.3,y:367.3,startPosition:19},0).wait(1).to({x:1273.6,y:430.4,startPosition:20},0).wait(1).to({x:1131.9,y:493.5,startPosition:21},0).to({_off:true},1).wait(30).to({_off:false,regX:254.1,regY:231,rotation:4.3,x:661.7,y:594,startPosition:0},0).wait(1).to({regX:348,regY:234.3,x:643.9,y:656,startPosition:1},0).wait(1).to({x:532.8,y:707.6,startPosition:2},0).wait(1).to({x:421.7,y:759.3,startPosition:3},0).wait(1).to({x:359.3,y:801.2,startPosition:4},0).wait(1).to({x:297,y:843.1,startPosition:5},0).wait(1).to({x:234.6,y:885,startPosition:6},0).wait(1).to({x:172.2,y:926.9,startPosition:7},0).wait(1).to({x:109.8,y:968.8,startPosition:8},0).wait(1).to({x:-21.2,y:1067.7,startPosition:9},0).wait(1).to({x:-152.2,y:1166.5,startPosition:10},0).wait(1).to({x:-283.2,y:1265.3,startPosition:11},0).wait(1).to({x:-414.2,y:1364.1,startPosition:12},0).to({_off:true},1).wait(182));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22).to({_off:false},0).wait(1).to({regX:348.2,regY:234.2,rotation:0.1,x:1072.2,y:499.9,startPosition:1},0).wait(1).to({rotation:0.3,x:1048.1,y:506.4,startPosition:2},0).wait(1).to({rotation:0.4,x:1023.9,y:513,startPosition:3},0).wait(1).to({rotation:0.6,x:999.7,y:519.5,startPosition:4},0).wait(1).to({rotation:0.7,x:975.5,y:526,startPosition:5},0).wait(1).to({rotation:0.9,x:951.4,y:532.5},0).wait(1).to({rotation:1,x:927.2,y:539},0).wait(1).to({rotation:1.2,x:903,y:545.6},0).wait(1).to({rotation:1.3,x:878.9,y:552.1},0).wait(1).to({rotation:1.5,x:873,y:554.3},0).wait(1).to({rotation:1.6,x:867.2,y:556.6},0).wait(1).to({rotation:1.8,x:861.4,y:558.9},0).wait(1).to({rotation:1.9,x:855.5,y:561.1},0).wait(1).to({rotation:2.1,x:849.6,y:563.4},0).wait(1).to({rotation:2.2,x:843.8,y:565.6},0).wait(1).to({rotation:2.4,x:837.9,y:567.9},0).wait(1).to({rotation:2.5,x:832.1,y:570.2},0).wait(1).to({rotation:2.7,x:826.2,y:572.5},0).wait(1).to({rotation:2.8,x:820.3,y:574.8},0).wait(1).to({rotation:3,x:814.5,y:577.1},0).wait(1).to({rotation:3.1,x:808.7,y:579.3},0).wait(1).to({rotation:3.3,x:802.8,y:581.5},0).wait(1).to({rotation:3.4,x:796.9,y:583.8},0).wait(1).to({rotation:3.6,x:791,y:586.1},0).wait(1).to({rotation:3.7,x:785.2,y:588.4},0).wait(1).to({rotation:3.9,x:779.4,y:590.6},0).wait(1).to({rotation:4,x:773.5,y:592.9},0).wait(1).to({rotation:4.2,x:767.7,y:595.2},0).wait(1).to({rotation:4.3,x:761.7,y:597.4},0).to({_off:true},1).wait(195));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2913.7,68.1,597.8,539.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;