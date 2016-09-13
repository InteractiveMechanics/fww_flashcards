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


(lib.RlegBack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAqguQgDAegZAZQgVAZgiANg");
	this.shape.setTransform(18.1,4.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AA+gmQgpAfgVAMQghAXgcALg");
	this.shape_1.setTransform(29.8,6.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgwAhIBhhBQgPAdgbARQgZATgaAAIgEAAg");
	this.shape_2.setTransform(39.6,9.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAfglQgRAogsAkg");
	this.shape_3.setTransform(58.9,24);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAYgzQgMA9gjAqg");
	this.shape_4.setTransform(128.4,19.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAggjQgJATgTASQgJAMgaAWg");
	this.shape_5.setTransform(113,23.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAzg3QggBThFAcg");
	this.shape_6.setTransform(96.5,26);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("ABKhQQgGA1gtAqQgiAjg+Afg");
	this.shape_7.setTransform(83.5,26.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AlUBYQhsgWgCgiQgBgdCAgEQBdgFBJAGQARAADwg1QDvg3A9AJQBDAJgVAdQgLAOgYANQgwAUjCAsQjCAvh+AUQgfAEgiAAQg6AAhCgNg");
	this.shape_8.setTransform(110.1,31.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgWA9QkQhigTgYQgPgUAMghQANghAdABQApACD7BaQECBZATAZQAZAhACAKQADAUgjAUQgFAEgNAAQg+AAjohWg");
	this.shape_9.setTransform(32.3,23.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155.3,42.1);


(lib.RfrontLeg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTgHQATgpAmgcIhJCZQgGgrAWgpg");
	this.shape.setTransform(180,32.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgBgFQAigqAggYIiBCPQApg3AWgWg");
	this.shape_1.setTransform(164.8,34.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgOgQQAcgkAkgGIhjB1QAHgrAcggg");
	this.shape_2.setTransform(151.4,33.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgIgCQAKgcAXgeIgxB5QADgiANgdg");
	this.shape_3.setTransform(122,19.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AANhMIgYCZQgHhWAfhDg");
	this.shape_4.setTransform(35.7,46.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGgBQAIgRAagnIg3BzQAEgcARgfg");
	this.shape_5.setTransform(53.7,36.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAthaIhaC1QALh6BPg7g");
	this.shape_6.setTransform(73.7,27.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgggMQAgg4BCg+IiAEFQgLhIAphHg");
	this.shape_7.setTransform(89.8,23.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AokDIQAFgOAPgRIAOgPQA2gqDlh2QDnh5CXhBQBlgqCOgDQCQgDANAsQALAnifAvQh2AjhdANQgVADkdCRQkbCQhQAHIgYABQg9AAAOgmg");
	this.shape_8.setTransform(55.2,25.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAABSQlngtgfgbQgrgjgGgNQgKgZAkgmQAkgmGEA2QCUAUB9AZQB8AXAMALQAaAUgEAvQgFAwglAHQgJACgTAAQhXAAkdgkg");
	this.shape_9.setTransform(155.5,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,199.8,54.4);


(lib.RbackLeg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLgDQAGgjAUgWIgWB6QgKgiAGgfg");
	this.shape.setTransform(97.5,90.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgDACQgCgWAAgzIALCOQgHgcgCgpg");
	this.shape_1.setTransform(89.9,82.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIADQgBgfAMgcIAGBxQgQgUgBgig");
	this.shape_2.setTransform(80.9,77.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAMguIgXBdQAAg2AXgng");
	this.shape_3.setTransform(58.6,72.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAagyIgzBlQALg1Aogwg");
	this.shape_4.setTransform(20.9,17.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgDgBQADgaAIgSIgQBbQACggADgPg");
	this.shape_5.setTransform(26.7,31.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAQhIIgZCRQgVhHAuhKg");
	this.shape_6.setTransform(34.3,45.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgUgGQAHg+AkglIgmDTQgLhDAGgtg");
	this.shape_7.setTransform(41.6,55.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AB3FDQhQhCgnhHQg6hqhQiuQhQitgMgxQgFgaAFgRQAKghAvAsQAsAoBjDVQBjDVALALQAxAzAzBJQBIBjgYASQgHAEgJAAQgeAAg/gzg");
	this.shape_8.setTransform(23.4,37.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AghAyQj4iQgEgmQgEgmARgLQAJgFApgCQAdgBDgCIQDdCEAaAdQASAUgTAfQgSAdgYABIgBAAQgfAAjsiLg");
	this.shape_9.setTransform(75,92.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,103.7,111.2);


(lib.LfrontLeg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhTALICngeQgdAcgwAIQgOADgRAAQgdAAgegJg");
	this.shape.setTransform(28.2,8.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgCAGQg4gEgogJIDEAPQhHAAgdgCg");
	this.shape_1.setTransform(39.5,18.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgCAMQgvgCgcgWICbAJQgiAQgoAAIgGgBg");
	this.shape_2.setTransform(47.3,31);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag/AQIB/gfQgdAQggAIQgaAHgjAAIgFAAg");
	this.shape_3.setTransform(55.7,61.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ABEghQhAA2hHAOg");
	this.shape_4.setTransform(133.1,112.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AA/gKQgYALglAGQgTACgtACg");
	this.shape_5.setTransform(113.3,104.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhjANIDHgiQhIArhCAAQgfAAgegJg");
	this.shape_6.setTransform(93.9,94.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AiPAVIEfg0QgxAyhUAKQgSADgYAAQgxAAg/gLg");
	this.shape_7.setTransform(79.8,84.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AHUE+IgUgCQhFgRjxhtQj0huiUhQQhjg0hfhtQhghvAZglQAXggCMBhQBnBHBIBCQAQAOErCIQEoCIA6A7QA/BAgtANQgKADgQAAIgMAAg");
	this.shape_8.setTransform(105.2,109.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ADHGEQg1gFjTlRQhQh9g/hxQg/hvAAgQQABghAmgYQApgZAeAZQApAjDBEsQDHEwAAApQgBA3gGAMQgLATgjAAIgUgCg");
	this.shape_9.setTransform(27.2,39);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,157.7,141);


(lib.Path_41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464538").s().p("AgLAlQjDhThnhJIGTAPQBxgJA7A8QA9A8gZBtQgOAEgUAAQhaAAi9hTg");
	this.shape.setTransform(36,17.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,62,24.2);


(lib.Path_40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D5E4BE").s().p("AgtHFQiVgtg0h/Qg6iNgbikQgkjaA9haIDSiHQCcgEBiBTQBZBMAwCdQA1CngCCEQgDC8hzBQQhQA5hdAAQgyAAgygQg");
	this.shape.setTransform(39.5,51.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,69.2,93.8);


(lib.Path_39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#947753").s().p("AiPGHQiYg+g7icQg1iNAsibQAtifB3hRQCFhbCsAwQCyAyBDCjQA8CTgyCnQgzCriCBRQhQAyhcAAQhHAAhQggg");
	this.shape.setTransform(43.3,47.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.9,5,76.9,84.8);


(lib.Path_38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E9EFE5").s().p("AjsCyQAThYAJghQAUhHAYgsIDQhaQBfguBiATQgOCLgWBCQgZBLgwAiQgvAghYAIQgiADg2AAQg6AAhTgEg");
	this.shape.setTransform(28.8,23.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,47.6,36.5);


(lib.Path_37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E9EFE5").s().p("ABCE4QhKgYASgnQAmgtgBgWQiigOiiAZQgwhsgDhFQgEg+AkgzQAcgoBKg5ICbh3ICjBLQCVgbApBWQAjBHgtCBQgoB2hLBdQhCBSgsAAQgGAAgHgCg");
	this.shape.setTransform(38,36.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,66,63);


(lib.Path_36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E9EFE5").s().p("AgTEXQiIgnhOhOQhThUAAhxQgBh+BjiXIBpCWQBVAlB+ArIDcBIQg4C5ALCKIgfAAQiQAAh1gig");
	this.shape.setTransform(36.8,36.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,63.6,62.8);


(lib.Path_35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A59063").s().p("Ak3FzQhJgwgXgfQgUgdALgeQAGgMAkg1QAkgzATgwQBXjcCliDQC6iUDrAUQAoBlARBuQARBwgLBrIl3DwQhkB1hGAbQgcAKgdAAQg7AAhDgrg");
	this.shape.setTransform(47.2,46.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.1,5,84.3,82.9);


(lib.Path_34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#322C40").s().p("AAQCkQioglidAEQAoiFgLigQA8gCB6AaQCGAcBnAqQB9AzAiA1QApBBhiA/g");
	this.shape.setTransform(36.1,21.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,62.2,32.8);


(lib.Path_33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#322C40").s().p("AiBEjQifgwhEhqQg+hiAhhsQAghvBuhEQB4hKClAKQCXAJBhBSQBZBLAQBtQAPBrhBBbQhHBjiOAnQg2APg6AAQhGAAhPgXg");
	this.shape.setTransform(44.8,36.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,79.6,62.9);


(lib.Path_32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5E4B39").s().p("AiuCnQAGhAAxhwQAthogBg9ICyAAQALAEAZAAQAWgBAPALQgBDNhIBJQg4A5h4AAQguAAg3gIg");
	this.shape.setTransform(22.6,22.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,35.2,35.1);


(lib.Path_31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464538").s().p("AjJCKQgMiZCChiIDQgeQAKAEAaAFQAaAEALAFQAeCviLA+QhIAghvAAQgxAAg6gGg");
	this.shape.setTransform(25.3,19.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,40.7,29);


(lib.Path_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#322C40").s().p("AiRHSQhNghgwhWQgxhYgFh8QgEhQAeh1QAliEANhAIE5jhQAjBgBFAaQBHAbBNg6IAHC2QAEB1gGBVQgQDvhiBsQhaBkhhAfQgoAOgnAAQgtAAgqgSg");
	this.shape.setTransform(37.6,53.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,65.3,96.9);


(lib.Path_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#947753").s().p("AiaJiQghgLgjg5Qgkg7gXhVQg3jTA9jIIAyitQAehpAchDQBRi8CLhDIDDFZQAKBxAsCMQAXBxhGCEQhCB+hnBQQh3Bgh4gUQAAAJALAXIAUAnQAPAfgYAAQgIAAgPgEg");
	this.shape.setTransform(35.7,66.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.9,5,61.7,123);


(lib.Path_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D5E4BE").s().p("AkCHbQk9hVBDkfQAzjVDrkJIGih4QDngaBABcQA0BNgoDRQhDFdioCjQiKCFjFAAQhZAAhmgbg");
	this.shape.setTransform(57,55.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5.1,104.2,100.4);


(lib.Path_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#322C40").s().p("AnaQOQiAhFhIj5QgoiHAxj6QAujsBwkTQBxkWCQjpQCbj5CXiDIHXAAQDwCYhsHYQgiCVhNDQIhcD6IhPEMQgtCQgyBeQh/DwkEBoQiIA2hlAAQhMAAg4geg");
	this.shape.setTransform(74.3,111.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,138.7,213.7);


(lib.Path_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#947753").s().p("AjVBkQhVhvgOi6IENgeQAtAHBJAFQBeAIA2gCQBHA9AQBOQANBGghBEQgfBCg9AsQg/AthGAEIgbABQieAAhdiAg");
	this.shape.setTransform(36.4,27.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,62.8,45.7);


(lib.Path_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A59063").s().p("AgcEvQiugvgWjZQgQifA/jCIEqC0QA9A4AcBWQAcBWgPBNQgQBTg8AkQgoAZg2AAQgmAAgrgMg");
	this.shape.setTransform(27.8,36.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,45.7,63.1);


(lib.Path_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464538").s().p("AjCEQQithODPjNQBChBB0hcICShyIBpA8QAHA4guBiQgtBdhIBYQhPBfhMAsQg4AfgvAAQgcAAgZgLg");
	this.shape.setTransform(32.5,33.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.1,5,54.9,56.7);


(lib.Path_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D5E4BE").s().p("AmpGYQAbiuBJh2QA6hfBthTQBAgzCPhjQCHhhBchnICWBpQgKBphdCJQhYCAiGB1QiHB3iHA+QhyA0hZAAQgbAAgagFg");
	this.shape.setTransform(47.6,46.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,85.3,82.8);


(lib.Path_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464538").s().p("AiuCJQg2hgCHh5QAugrBIgxQApgbBAgpIA8C0QgMAzgjBBQgpBQgvAwQg3A5gwAAQhEAAg6hog");
	this.shape.setTransform(24.1,29.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,38.2,48.3);


(lib.Path_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#322C40").s().p("AgJEEQhJgCg+hSQgwg/AMhOQALhEA3hGQAyhABEgsQBHgsA8gEIAeClQAeBJgTBVQgSBSg0A5Qg0A5g8AAIgDAAg");
	this.shape.setTransform(23.4,31);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,36.8,52.1);


(lib.Path_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A59063").s().p("AnoD+QAEhpAwhiQAwhfBRhFQBUhIBngaIBajDQBGg2BWAAQBOABBNAuQBIArA1BHQA1BIATBPQAeCFg2BEQgsA5hwAYQgmAIi1AWQiLAPhJAfQiOA7gvAgQheA+geBiQguhhAEhug");
	this.shape.setTransform(54,51.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,97.9,92.3);


(lib.Path_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#322C40").s().p("Ag3CeQhLgfgwggQAAilBJiCIDfClQALAIAVAHQAVAIAIAHQgIAvgfA8QggA8gmAnQg8gPhBgcg");
	this.shape.setTransform(22.9,25.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,35.9,40.3);


(lib.Path_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#947753").s().p("AkyD2QgJgkgChKQgChTAKhMQAbjSBdgbQBagZB/BGQBBAjAuAoQADAAAagTQAdgVAVgGQBIgUAbCBQAPBJhcBMQhNBDiHA4Qh3AyhmAQQglAGgZAAQguAAgFgVg");
	this.shape.setTransform(36.9,31.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,63.9,53.6);


(lib.Path_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#947753").s().p("Al0EOIFJmEQA3geCIhNQB9g8BlAFQhZCjgsBIQhJB6hFBEQiHCIjTAAQg8AAhBgLg");
	this.shape.setTransform(42.4,33.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,74.8,56.4);


(lib.Path_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5E4B39").s().p("AmBBwQAPhkDJhwQCOhQDdhSQBvgpBTgZQgUCMg7BgQguBIhbBHQhiBKg0ArQhaBNg/BVQkRheATh8g");
	this.shape.setTransform(43.8,38);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,77.6,66);


(lib.Path_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464538").s().p("AhiCMQg2gXgfgtQgegtAGgyQAHg4AygwIDugdQBOAJAcAwQAaAqgTA5QgSA5gwAsQgyAug8AIQgSACgPAAQgvAAgrgRg");
	this.shape.setTransform(26,20.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,42,31.6);


(lib.Path_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5E4B39").s().p("AhFD0QhHgXhChHQhAhFgXhJQgahNAmgoQAqgvB1AWQgMgWANgZQAag0B5gVQB9gWAfAjQALALARAnQAUAtAUAfQA4BTgCBRQgBBNgzA5QgyA4hTASQghAHgiAAQg5AAhAgUg");
	this.shape.setTransform(35.5,31.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5.1,61,52.9);


(lib.Path_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5E4B39").s().p("AAQHwQhVgRgqg8QgigxgIhXQgEgpACh4QAChngKgyIkRm8QBVADCHAAQCsAABVAQQCBAXBWBEQBkBQBECbQAtBmAbBgQAmCMgaA0QgVApjRBmQjBBeg7AAIgKgBgAoGngQAPgNATAAQAcAAAIgDIAMAVQgxgCghgDg");
	this.shape.setTransform(56.9,54.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,103.9,99.5);


(lib.Path_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E9EFE5").s().p("AnTErQgngsAzhoQAfg+BeiBQBWh4AOgkIFmiHQCFAwBLAsQBxBBAkBQQhIAchpBCQgpAbiUBoQjxCrhtATQhGALgyAAQhWAAgeghg");
	this.shape.setTransform(53.6,38.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.1,5,97.1,66.6);


(lib.Path_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#322C40").s().p("Ah7DYQgvgpgcg/Qgcg+AAg/IEqjwQgWgKgQgEIgQgCQAmgHA1AIQAhAFA/ANQAAAoALBfQALBeAAAtQgBCjhtA6Qg3AcgzAAQhGABhAg6gAgFkMQALgCAMABIgHABQgFADgEAAQgDAAgEgDgAASkNIAAAAg");
	this.shape.setTransform(27.7,32.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,45.5,54.8);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5E4B39").s().p("AixDCQg3gogLhwQAQgvAjg2QBEhtBbgbQCDgoBYApQBnAvhRCGQgtBJhIA9QhJA/hEAWQgfAKgbAAQgnAAgegWg");
	this.shape.setTransform(29.4,26.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,4.8,48.9,43.2);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D5E4BE").s().p("Ah1CvIiSgRQBEhoCYhtQCmh7CNgaQABA9gaBlQgcBvgEAzQh/A5g5ARQgjALgdAAQgwAAgcgeg");
	this.shape.setTransform(31.5,25.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,52.9,41.2);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D5E4BE").s().p("ACfEaQAgiXhUhGQgdgZg9gdQhagpgRgJQhrg7hVg1QhWg3hnhKIFoAPQEYgGCWB3QCwCLgaErQhYADhOAAQhNAAhDgDg");
	this.shape.setTransform(52.3,33.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,94.6,57.1);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#947753").s().p("AjdB7QgLhAAQg6QAPg3AmgrIDQgeQAYgLA2gBQA5gBArAMQAaCminBGQhEAdhTADIgVAAQhGAAg9gRg");
	this.shape.setTransform(27.7,19.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,45.4,28.2);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5E4B39").s().p("AgLg3Qheg5jsgKIEchsQB7goBwA/QBkA6ArBrQArBrgvBSQg2BciWAHQAHjdiDhQg");
	this.shape.setTransform(39.2,29.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,4.9,68.4,49.4);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5E4B39").s().p("AkIDjQgJgqAggrQARgXA6g0QA4gyAWgeQAkgzgDg3IBJi0QCBgXBCA7QA5A0gDBmQgEBfg2BcQg4BjhTAvQhrA+hPAQQgZAFgVAAQhUAAgShQg");
	this.shape.setTransform(31.7,35.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,53.5,61.5);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D5E4BE").s().p("Ag2C5Qg2gEglgeQgngggKgyQgLg2AYg9QAOgjA4glQA3gkA/gSQBGgTAxAMQA3APAMA3QASBagrBKQgmBChKAmQgzAagxAAIgKAAg");
	this.shape.setTransform(24.9,23.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,39.8,37.1);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5E4B39").s().p("AhMDAQg6g0gZhqQgXhiAShYQAThdA1gTQA+gWBWBbIAaAcQA3A+AXBmQAWBggSBOQgTBUg6AMQgJACgJAAQg+AAhThNg");
	this.shape.setTransform(22.3,32);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,34.6,54);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A59063").s().p("AioDSQhpgtg5ggQhng7AJg8QALhHBkhNQBlhOBlgKIFmCHQgZgBBTAWQBSAVAmAGQgJCgkJBHQhhAahjAEIgiABQhAAAgZgNg");
	this.shape.setTransform(47.6,27.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,85.2,44.7);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464538").s().p("AhiB7QhRg9g0gwQAhgqAzhMIBTh4ICjBaQAxAlAkA5QAjA1ANA6QgcAYhDAzQhCAyggAdIiJhmg");
	this.shape.setTransform(28.2,27.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,46.5,45.2);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FCEAF2","#F6E9F2","#F9F0F1","#FFFDEF","#FBFAEF","#F0F2F1","#DDE4F3","#DBE3F3","#FDE8DE"],[0,0.114,0.231,0.353,0.475,0.592,0.706,0.714,1],5.8,2.5,-5.3,-4.5).s().p("AAAB1QgVgDgqgVQgbgPgFg0QgFg4AigsQAggqAggBQAPAAAiARQAdAQAPA7QAQBAghArQgbAkgmAAIgJgBg");
	this.shape.setTransform(10.3,12.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.7,1.1,19.4,23.7);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FCEAF2","#F6E9F2","#F9F0F1","#FFFDEF","#FBFAEF","#F0F2F1","#DDE4F3","#DBE3F3","#FDE8DE"],[0,0.114,0.231,0.353,0.475,0.592,0.706,0.714,1],6.7,1,-6.6,-0.9).s().p("AgUB4QgcgDgNgnQgNglAJgwQAJgyAaghQAaghAZAEQAcADANAmQANAmgJAvQgJAygaAiQgXAdgXAAIgFAAg");
	this.shape.setTransform(7,12.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.1,24.2);


(lib.caddisfly = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Path_41();
	this.instance.setTransform(187.1,-299.6,1,1,0,0,0,36,17.1);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",1,1,6);

	this.instance_1 = new lib.Path_1();
	this.instance_1.setTransform(134.1,-223.1,1,1,0,0,0,28.2,27.6);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",1,1,6);

	this.instance_2 = new lib.Path_2();
	this.instance_2.setTransform(77.3,-132,1,1,0,0,0,47.6,27.3);
	this.instance_2.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",1,1,6);

	this.instance_3 = new lib.Path_3();
	this.instance_3.setTransform(361.5,-248,1,1,0,0,0,22.2,31.9);
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",1,1,6);

	this.instance_4 = new lib.Path_4();
	this.instance_4.setTransform(378,-327.4,1,1,0,0,0,24.9,23.5);
	this.instance_4.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",1,1,6);

	this.instance_5 = new lib.Path_5();
	this.instance_5.setTransform(406.2,-278.6,1,1,0,0,0,31.7,35.8);
	this.instance_5.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",1,1,6);

	this.instance_6 = new lib.Path_6();
	this.instance_6.setTransform(318.3,-347.5,1,1,0,0,0,39.2,29.6);
	this.instance_6.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",1,1,6);

	this.instance_7 = new lib.Path_7();
	this.instance_7.setTransform(284.2,-333.3,1,1,0,0,0,27.7,19.1);
	this.instance_7.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",1,1,6);

	this.instance_8 = new lib.Path_8();
	this.instance_8.setTransform(271,-286.2,1,1,0,0,0,52.3,33.5);
	this.instance_8.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",1,1,6);

	this.instance_9 = new lib.Path_9();
	this.instance_9.setTransform(223.6,-345.9,1,1,0,0,0,31.4,25.6);
	this.instance_9.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",1,1,6);

	this.instance_10 = new lib.Path_10();
	this.instance_10.setTransform(246.5,-200.6,1,1,0,0,0,29.4,26.4);
	this.instance_10.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",1,1,6);

	this.instance_11 = new lib.Path_11();
	this.instance_11.setTransform(207.3,-229.3,1,1,0,0,0,27.7,32.4);
	this.instance_11.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",1,1,6);

	this.instance_12 = new lib.Path_12();
	this.instance_12.setTransform(245.3,-127.1,1,1,0,0,0,53.6,38.2);
	this.instance_12.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",1,1,6);

	this.instance_13 = new lib.Path_13();
	this.instance_13.setTransform(123,-65.6,1,1,0,0,0,56.9,54.7);
	this.instance_13.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",1,1,6);

	this.instance_14 = new lib.Path_14();
	this.instance_14.setTransform(161,-136.2,1,1,0,0,0,35.5,31.5);
	this.instance_14.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",1,1,6);

	this.instance_15 = new lib.Path_15();
	this.instance_15.setTransform(178.6,-192.4,1,1,0,0,0,25.9,20.8);
	this.instance_15.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",1,1,6);

	this.instance_16 = new lib.Path_16();
	this.instance_16.setTransform(71.1,-233,1,1,0,0,0,43.8,38);
	this.instance_16.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",1,1,6);

	this.instance_17 = new lib.Path_17();
	this.instance_17.setTransform(3,-169.4,1,1,0,0,0,42.4,33.1);
	this.instance_17.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",1,1,6);

	this.instance_18 = new lib.Path_18();
	this.instance_18.setTransform(62.6,-75.6,1,1,0,0,0,36.9,31.8);
	this.instance_18.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",1,1,6);

	this.instance_19 = new lib.Path_19();
	this.instance_19.setTransform(-58.3,-14.1,1,1,0,0,0,22.9,25.2);
	this.instance_19.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",1,1,6);

	this.instance_20 = new lib.Path_20();
	this.instance_20.setTransform(-23.7,-88.1,1,1,0,0,0,54,51.1);
	this.instance_20.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",1,1,6);

	this.instance_21 = new lib.Path_21();
	this.instance_21.setTransform(-179.9,11.2,1,1,0,0,0,23.4,31);
	this.instance_21.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",1,1,6);

	this.instance_22 = new lib.Path_22();
	this.instance_22.setTransform(-136,-52.2,1,1,0,0,0,24.1,29.1);
	this.instance_22.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",1,1,6);

	this.instance_23 = new lib.Path_23();
	this.instance_23.setTransform(-81.5,-117.2,1,1,0,0,0,47.6,46.4);
	this.instance_23.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",1,1,6);

	this.instance_24 = new lib.Path_24();
	this.instance_24.setTransform(-103.8,1.5,1,1,0,0,0,32.5,33.3);
	this.instance_24.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",1,1,6);

	this.instance_25 = new lib.Path_25();
	this.instance_25.setTransform(-69,24.2,1,1,0,0,0,27.9,36.5);
	this.instance_25.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",1,1,6);

	this.instance_26 = new lib.Path_26();
	this.instance_26.setTransform(-126,57.5,1,1,0,0,0,36.4,27.8);
	this.instance_26.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",1,1,6);

	this.instance_27 = new lib.Path_27();
	this.instance_27.setTransform(-27.2,132.6,1,1,0,0,0,74.3,111.9);
	this.instance_27.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",1,1,6);

	this.instance_28 = new lib.Path_28();
	this.instance_28.setTransform(-140.9,135.4,1,1,0,0,0,57.1,55.2);
	this.instance_28.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",1,1,6);

	this.instance_29 = new lib.Path_29();
	this.instance_29.setTransform(-248.3,120.2,1,1,0,0,0,35.7,66.5);
	this.instance_29.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",1,1,6);

	this.instance_30 = new lib.Path_30();
	this.instance_30.setTransform(-204.5,74.2,1,1,0,0,0,37.6,53.5);
	this.instance_30.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",1,1,6);

	this.instance_31 = new lib.Path_31();
	this.instance_31.setTransform(-141.4,-13.9,1,1,0,0,0,25.4,19.4);
	this.instance_31.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",1,1,6);

	this.instance_32 = new lib.Path_32();
	this.instance_32.setTransform(-91.2,-55.7,1,1,0,0,0,22.6,22.6);
	this.instance_32.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",1,1,6);

	this.instance_33 = new lib.Path_33();
	this.instance_33.setTransform(161,-266,1,1,0,0,0,44.8,36.4);
	this.instance_33.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",1,1,6);

	this.instance_34 = new lib.Path_34();
	this.instance_34.setTransform(344.9,-302.6,1,1,0,0,0,36.1,21.4);
	this.instance_34.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",1,1,6);

	this.instance_35 = new lib.Path_35();
	this.instance_35.setTransform(312.4,-196.8,1,1,0,0,0,47.2,46.5);
	this.instance_35.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",1,1,6);

	this.instance_36 = new lib.Path_36();
	this.instance_36.setTransform(250.1,-257.8,1,1,0,0,0,36.8,36.4);
	this.instance_36.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",1,1,6);

	this.instance_37 = new lib.Path_37();
	this.instance_37.setTransform(98.6,-184.2,1,1,0,0,0,38,36.5);
	this.instance_37.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",1,1,6);

	this.instance_38 = new lib.Path_38();
	this.instance_38.setTransform(24.1,-142.4,1,1,0,0,0,28.8,23.2);
	this.instance_38.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",1,1,6);

	this.instance_39 = new lib.Path_39();
	this.instance_39.setTransform(62.5,1.6,1,1,0,0,0,43.3,47.4);
	this.instance_39.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",1,1,6);

	this.instance_40 = new lib.Path_40();
	this.instance_40.setTransform(-17,-24.8,1,1,0,0,0,39.6,51.9);
	this.instance_40.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",1,1,6);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#F3F3F3","#C8C7C7","#A09F9F","#7E7C7D","#625F60","#4B4748","#393536","#2C2929","#252122","#231F20"],[0,0.012,0.055,0.106,0.157,0.216,0.278,0.349,0.435,0.549,0.8],-103.8,-115.1,101.2,89.9).s().p("EgWJAxYQhUgEgigGQhFgOgggmQgXgbgRhJQgQhFghggQgXgVg3gqQgygmgZgaQgugxgZgSQgkgZg1gLQgxgKhOgGIiCgLQibgShbg8QgqgbgjgxQgJgOguhLQhDhvhYgbQh1gjhxAkQgXAHhMAQQhCAPghANQgECNg7ABQg3ABhChwQg1hXgShaQgRhXALhsQAIifALhEQARhvBJhdQCBijCDiIIB4hQQgYgfDDjbICUijQBMhTAQgYQAggxAphRIBEiEQBVicBnhHQBFgvAXgTQApgiAlgzQBPhrBZhRQAYgWBUg/QBCgxAcgkQAUgbA6hnQArhPAxgpQAYgUBohNQBQg6AqguIBKhZQArg1ApgeQAngcBPgwQBGgsAlgvQAJgMA5hYQAog8AmghQAvgoBGgdQAigOBggfQCsg4BLhNQAUgVAxg8QAogxAggcQAcgYAgg0QAgg0AagWQAggcBHgNQBcgPAVgJQC3hLA5g3QAPgOA7hTQAog5A6gaQAxgVBFgVQA4gUAugtQBPhOCmhNQDJhdA+gqQAvghA5g6QAhggA/hDQBGhHBUglQA8gaB5gdQBAgPA6gaQAZgLBagwQBQgqA9AEQAtADBcAoQBBAdBDAPQAuALBbANQBBAJA6AjIBvBEQA3AeBMAVQAqAMBOATQCFAoBBBzQAgA5AZBRQAOAuAaBhQAPAuAlBIQAnBMAMAkQAnBxhRCKQgaAqg1BHQg6BNgSAdQgpA/hEAvQgZAShtA7Qg9AigyA4Qg5BHgiAoQhNBbioCEQi5CShEBHQgWAXg4BJQgtA7gkAdQgtAkhNApIiCBEQgwAbhPAgQhpAqgVAJQiPBBg3BhQgiA7g1AkQhEAmgrAaQhAAngjArQgcAigkBKQhJCahcB2QhcB3iCBqQg6AwgZASQguAiguAUQgOAHhcAbQhGAUgeAaQglAhgnBNQgqBYgTAjQgzBlgbAxQgvBXgvA1QgeAihhBJQhXBAggAxQgnA6gEBqIgBBYQAAA0gGAhQgeC+h6CjQhnCKivC5IkkEzQgfAihEBYQg7BLglAlQhtBqiUAAIgRAAg");
	this.shape.setTransform(71.1,-65.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(16));

	// Layer 3
	this.instance_41 = new lib.Path_0();
	this.instance_41.setTransform(-166,218.1,1.505,1.034,-22.3,0,0,8.8,12.5);
	this.instance_41.alpha = 0.641;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#9A8B7E","#3F3120"],[0,1],23.6,17.3,-25.3,-13.6).s().p("AlOGOQhegxASiPQAVifCejMQCqjdB6gqQBbgfB3A+QCWBOgICBQgHByiGCsQiQC8iOBSQhjA5haAAQhEAAg/ghg");
	this.shape_1.setTransform(-125,209.3,1.349,1,6.7);

	this.instance_42 = new lib.Path();
	this.instance_42.setTransform(-226.5,198.5,1.349,1,6.7,0,0,5.8,12.7);
	this.instance_42.alpha = 0.641;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#9A8B7E","#3F3120"],[0,1],26.9,3.8,-27.9,-4.3).s().p("Ag6GgQh1gOhBhnQhNh9AmjRQAqjqBshaQBWhICFAQQCkAUAfCBQAVBVgmDTQgnDWgyBNQhABih/AAQgWAAgYgDg");
	this.shape_2.setTransform(-197,187.2,1.349,1,6.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0A0B1B").s().p("AjcJiIjzhCQhVgXgVhsQgJgvgGj1IgPm9QBBijDOhQQBWgiBZgJQBWgIA/ARIDyBCQCkAtBoBhQCJCAg/CcIlOF2QjODUg3AwQhqBYhIAAQgOAAgNgDg");
	this.shape_3.setTransform(-153.1,205.9,1.349,1,6.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.instance_42},{t:this.shape_1},{t:this.instance_41}]}).wait(16));

	// R-legBack
	this.instance_43 = new lib.RlegBack();
	this.instance_43.setTransform(-53.5,220.2,1.398,1,0,0,0,4.5,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(1).to({regX:77.6,regY:21,rotation:26.8,x:20.4,y:277.9},0).wait(1).to({rotation:53.6,x:-26.7,y:315},0).wait(1).to({rotation:80.4,x:-85.2,y:333.3},0).wait(1).to({rotation:51.4,x:-27.5,y:313.1},0).wait(1).to({rotation:22.4,x:16.1,y:271.4},0).wait(1).to({rotation:-6.5,x:36.8,y:218},0).wait(1).to({rotation:-35.5,x:31.9,y:165.2},0).wait(1).to({rotation:-26.6,x:39.6,y:180.1},0).wait(1).to({rotation:-17.8,x:45.1,y:196.1},0).wait(1).to({rotation:-8.9,x:48.1,y:212.5},0).wait(1).to({rotation:0,x:48.7,y:229.2},0).wait(5));

	// L-frontLeg
	this.instance_44 = new lib.LfrontLeg();
	this.instance_44.setTransform(-75.4,231.4,1.458,1.199,0,0,0,2.9,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(1).to({regX:78.9,regY:70.5,scaleX:1.46,rotation:26.4,x:-22.7,y:354.7},0).wait(1).to({rotation:52.7,x:-93.8,y:368.4},0).wait(1).to({rotation:79.1,x:-164.9,y:353.1},0).wait(1).to({scaleX:1.46,rotation:46.5,x:-79.7,y:366.3},0).wait(1).to({rotation:13.9,x:0.5,y:335.9},0).wait(1).to({scaleX:1.46,rotation:-18.7,x:53.2,y:271.5},0).wait(1).to({scaleX:1.46,rotation:-51.3,x:64.4,y:193.3},0).wait(1).to({scaleX:1.46,rotation:-38.5,x:67.3,y:225},0).wait(1).to({rotation:-25.6,x:63.4,y:257},0).wait(1).to({rotation:-12.8,x:52.6,y:287.5},0).wait(1).to({rotation:0,x:35.5,y:315.2},0).wait(5));

	// R-backLeg
	this.instance_45 = new lib.RbackLeg();
	this.instance_45.setTransform(-220.3,142.4,1.308,1.09,0,0,0,103.8,110.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(1).to({regX:51.8,regY:55.6,rotation:-13.5,x:-300.8,y:107.5},0).wait(1).to({rotation:-27,x:-308.9,y:135},0).wait(1).to({rotation:-40.5,x:-312.1,y:163.8},0).wait(1).to({rotation:-18.6,x:-304.2,y:123.9},0).wait(1).to({rotation:3.3,x:-284.3,y:89.1},0).wait(1).to({rotation:25.1,x:-255.1,y:63.5},0).wait(1).to({rotation:47,x:-220.8,y:49.8},0).wait(1).to({rotation:35.3,x:-239.7,y:52.6},0).wait(1).to({rotation:23.5,x:-257.8,y:59.2},0).wait(1).to({rotation:11.8,x:-274.2,y:69.3},0).wait(1).to({rotation:0,x:-288.4,y:82.3},0).wait(5));

	// R-frontLeg
	this.instance_46 = new lib.RfrontLeg();
	this.instance_46.setTransform(-219.1,155.7,1.37,1,0,0,0,202.8,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(1).to({regX:99.9,regY:27.2,rotation:-13.1,x:-348.4,y:197.1},0).wait(1).to({rotation:-26.2,x:-329.7,y:229.5},0).wait(1).to({rotation:-39.3,x:-304.6,y:258.4},0).wait(1).to({rotation:-14.5,x:-337.1,y:204.6},0).wait(1).to({rotation:10.4,x:-344.7,y:143.1},0).wait(1).to({rotation:35.2,x:-326.3,y:85.1},0).wait(1).to({rotation:60.1,x:-285.9,y:41},0).wait(1).to({rotation:45.1,x:-316.4,y:63.8},0).wait(1).to({rotation:30,x:-339.8,y:93.1},0).wait(1).to({rotation:15,x:-354.6,y:126.8},0).wait(1).to({rotation:0,x:-360,y:162.7},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-496.8,-381.6,941.4,781.4);


// stage content:



(lib.FWW_TilesAll_v01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.caddisfly("synched",0);
	this.instance.setTransform(2147.1,465.8,0.315,0.315,46.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-29.2,regY:64.7,scaleX:0.32,scaleY:0.32,x:2123.2,y:483.4,startPosition:1},0).wait(1).to({x:2120.4,y:493.6,startPosition:2},0).wait(1).to({x:2117.7,y:503.9,startPosition:3},0).wait(1).to({x:2070,y:492.6,startPosition:4},0).wait(1).to({x:2022.4,y:481.4,startPosition:5},0).wait(1).to({x:1974.8,y:470.1,startPosition:6},0).wait(1).to({x:1927.2,y:458.9,startPosition:7},0).wait(1).to({x:1879.6,y:447.6,startPosition:8},0).wait(1).to({x:1832,y:436.4,startPosition:9},0).wait(1).to({x:1784.4,y:425.2,startPosition:10},0).wait(1).to({x:1736.8,y:413.9,startPosition:11},0).wait(1).to({x:1730.6,y:431.1,startPosition:12},0).wait(1).to({x:1724.4,y:448.2,startPosition:13},0).wait(1).to({x:1718.2,y:465.4,startPosition:14},0).wait(1).to({x:1712,y:482.6,startPosition:15},0).wait(1).to({x:1705.8,y:499.7,startPosition:0},0).wait(1).to({x:1699.6,y:516.9,startPosition:1},0).wait(1).to({x:1693.4,y:534.1,startPosition:2},0).wait(1).to({x:1687.2,y:551.3,startPosition:3},0).wait(1).to({x:1600.8,y:498.3,startPosition:4},0).wait(1).to({x:1514.5,y:445.3,startPosition:5},0).wait(1).to({x:1428.1,y:392.3,startPosition:6},0).wait(1).to({x:1341.8,y:339.4,startPosition:7},0).wait(1).to({x:1336.7,y:353.2,startPosition:8},0).wait(1).to({x:1331.6,y:367.1,startPosition:9},0).wait(1).to({x:1326.5,y:380.9,startPosition:10},0).wait(1).to({x:1321.4,y:394.8,startPosition:11},0).wait(1).to({x:1316.3,y:408.6,startPosition:12},0).wait(1).to({x:1311.2,y:422.5,startPosition:13},0).wait(1).to({x:1306.1,y:436.3,startPosition:14},0).wait(1).to({x:1301.1,y:450.2,startPosition:15},0).wait(1).to({x:1296,y:464,startPosition:0},0).wait(1).to({x:1290.9,y:477.9,startPosition:1},0).wait(1).to({x:1285.8,y:491.7,startPosition:2},0).wait(1).to({x:1280.7,y:505.6,startPosition:3},0).wait(1).to({x:1236.8,y:480.2,startPosition:4},0).wait(1).to({x:1193,y:454.7,startPosition:5},0).wait(1).to({x:1149.1,y:429.3,startPosition:6},0).wait(1).to({x:1105.2,y:403.9,startPosition:7},0).wait(1).to({x:1061.3,y:378.4,startPosition:8},0).wait(1).to({x:1017.5,y:353,startPosition:9},0).wait(1).to({x:1009.3,y:366.2,startPosition:10},0).wait(1).to({x:1001.1,y:379.4,startPosition:11},0).wait(1).to({x:993,y:392.5,startPosition:12},0).wait(1).to({x:984.8,y:405.7,startPosition:13},0).wait(1).to({x:976.7,y:418.9,startPosition:14},0).wait(1).to({x:968.5,y:432.1,startPosition:15},0).wait(1).to({x:960.4,y:445.2,startPosition:0},0).wait(1).to({x:952.2,y:458.4,startPosition:1},0).wait(1).to({x:944.1,y:471.6,startPosition:2},0).wait(1).to({x:935.9,y:484.8,startPosition:3},0).wait(1).to({x:927.8,y:498,startPosition:4},0).wait(1).to({x:856.7,y:449.8,startPosition:5},0).wait(1).to({x:785.6,y:401.6,startPosition:6},0).wait(1).to({x:714.6,y:353.5,startPosition:7},0).wait(1).to({x:643.5,y:305.3,startPosition:8},0).wait(1).to({x:636.9,y:319.2,startPosition:9},0).wait(1).to({x:630.3,y:333,startPosition:10},0).wait(1).to({x:623.7,y:346.9,startPosition:11},0).wait(1).to({x:617.1,y:360.8,startPosition:12},0).wait(1).to({x:610.5,y:374.7,startPosition:13},0).wait(1).to({x:604,y:388.5,startPosition:14},0).wait(1).to({x:597.4,y:402.4,startPosition:15},0).wait(1).to({x:590.8,y:416.3,startPosition:0},0).wait(1).to({x:584.2,y:430.2,startPosition:1},0).wait(1).to({x:577.6,y:444,startPosition:2},0).wait(1).to({x:571,y:457.9,startPosition:3},0).wait(1).to({x:510.7,y:420.9,startPosition:4},0).wait(1).to({x:450.5,y:383.9,startPosition:5},0).wait(1).to({x:390.2,y:346.9,startPosition:6},0).wait(1).to({x:329.9,y:309.9,startPosition:7},0).wait(1).to({x:269.7,y:272.9,startPosition:8},0).wait(1).to({x:257.3,y:295.7,startPosition:9},0).wait(1).to({x:244.9,y:318.6,startPosition:10},0).wait(1).to({x:232.5,y:341.5,startPosition:11},0).wait(1).to({x:220.1,y:364.4,startPosition:12},0).wait(1).to({x:207.7,y:387.3,startPosition:13},0).wait(1).to({x:195.3,y:410.2,startPosition:14},0).wait(1).to({x:91.3,y:372.5,startPosition:15},0).wait(1).to({x:-12.6,y:334.9,startPosition:0},0).wait(1).to({x:-116.5,y:297.2,startPosition:1},0).wait(1).to({x:-220.5,y:259.5,startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).to({_off:true},1).wait(146));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2957.3,929.1,326.1,197.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;