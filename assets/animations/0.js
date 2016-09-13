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


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#58595B").s().p("AAAgFQgLgCgKAMQAEgHAEgDQAGgGALABQAMACAEAIQACAGgBAFQgJgPgMgBg");
	this.shape.setTransform(2.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.4,2.3);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#58595B").s().p("AgOAGQgEgFgCgJQACAGAEADQAJAJAKgDQAPgHABgNQABAHgCAGQgDANgNABIgCAAQgLAAgFgIg");
	this.shape.setTransform(2.2,1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.4,2.9);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().bs(img.NewPatternSwatch7_1).ss(1,0,0,4).p("ABMAwQgUAHghgOQgUgIgcgUQgagOgKgMQgPgRABgZ");
	this.shape.setTransform(42.6,14.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().bs(img.NewPatternSwatch7_1).ss(1,0,0,4).p("AAAhmQgsAjgVAUQgmAjAHAtQADAYAXAMQAOAHAiAMQATAJAsACIA+AD");
	this.shape_1.setTransform(39.3,10.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AABgCIAkgMIAGADIhVAaQAHgGAkgLg");
	this.shape_2.setTransform(18.5,25.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AAEgDIA4gHIAAAFIh3AQQAHgHA4gHg");
	this.shape_3.setTransform(15.1,24.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AAFgDIBBgDIgBAFIiKAIQAKgHBAgDg");
	this.shape_4.setTransform(14.1,22.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("ABRgCIgCADIifADQAXgJCKADg");
	this.shape_5.setTransform(13.6,20.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AhgAAQARgIBZAFQAtACAqABIgDAGg");
	this.shape_6.setTransform(12.5,18.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AhdgGQAWgIBUAKQArAEAmAFIgEAGg");
	this.shape_7.setTransform(13.8,16.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(66,33,11,0.557)","rgba(76,47,16,0.757)","rgba(85,60,21,0.937)","#584017","#61551D","#6D7025"],[0,0.071,0.169,0.259,0.588,0.941],-7.7,6.1,8.8,-8.7).s().p("AgiBCQgHgDgugcQhfg6BMgmQAYgMAugDQASgCAwAAQATAAAhALQAaAIAIAFQACAAgQAUQgRAWAGAMQAGAOARAEQAJADASABQhFAmgqAPQgJAEgKAAQgTAAgagNg");
	this.shape_8.setTransform(14.1,20.6);

	this.instance = new lib.Path();
	this.instance.setTransform(68.9,5.9,1,1,0,0,0,2.2,1.4);
	this.instance.alpha = 0.988;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHACQgCgDACgDIAQACIgPAHIgBgDg");
	this.shape_9.setTransform(68.2,4.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AgJAKQgDgFAAgFQAAgEADgEQAFgFAEAAQAFAAAFAFQADAEAAAEQAAAFgDAFQgFAEgFAAQgEAAgFgEg");
	this.shape_10.setTransform(68.8,4.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF698").s().p("AgMANQgGgFAAgIQAAgGAGgGQAGgGAGAAQAIAAAFAGQAGAGAAAGQAAAIgGAFQgFAGgIAAQgGAAgGgGg");
	this.shape_11.setTransform(68.8,4.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AgNAPQgHgGAAgJQAAgHAHgHQAGgGAHAAQAIAAAHAGQAGAHAAAHQAAAJgGAGQgHAGgIAAQgHAAgGgGg");
	this.shape_12.setTransform(68.8,4.7);

	this.instance_1 = new lib.Path_5();
	this.instance_1.setTransform(68.8,3.6,1,1,0,0,0,2.2,1.2);
	this.instance_1.alpha = 0.988;

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().bs(img.NewPatternSwatch8).ss(1,0,0,4).p("ABZAAQgegMg7AGQgqAEgvAL");
	this.shape_13.setTransform(72.2,12.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().bs(img.NewPatternSwatch8).ss(1,0,0,4).p("AhLgOQAaAcAxABQA2ABAWgh");
	this.shape_14.setTransform(69.5,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.instance_1},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.instance},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1,82.2,29.5);


(lib.eel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// top layer
	this.instance = new lib.Symbol1();
	this.instance.setTransform(226,6,1,1,0,0,0,80.4,13.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:40.7,regY:14,rotation:0.7,x:186.8,y:6.2},0).wait(1).to({rotation:1.4,x:187.3},0).wait(1).to({rotation:2,x:187.8,y:6.3},0).wait(1).to({rotation:2.7,x:188.3},0).wait(1).to({rotation:3.4,x:188.9},0).wait(1).to({rotation:4.1,x:189.4},0).wait(1).to({rotation:3.6,x:189},0).wait(1).to({rotation:3,x:188.6},0).wait(1).to({rotation:2.5,x:188.2},0).wait(1).to({rotation:2,x:187.8},0).wait(1).to({rotation:1.5,x:187.5,y:6.2},0).wait(1).to({rotation:1,x:187.1},0).wait(1).to({rotation:0.5,x:186.7},0).wait(1).to({rotation:0,x:186.3,y:6.1},0).wait(1));

	// cover-up
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666600").s().p("Aj/A8QhdgbAthJQAHgNAQgCIAHgBQBMAiBQAJIABgGQAGhABDgDQAPABANAIQAJAFAGAJIBhAIQALgVAZgBQAygBAqgIQA0AQgEAjIAYADQAMABAFAMQAUA5hAAMQg3ALg2gIQgogGgoACQgIAWgZAEQg8AMg9AAQhcAAhagbg");
	this.shape.setTransform(184.9,3.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(15));

	// body
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666600").s().p("AJVGeIiwgbQiggZiZgvQhHgWhEgaQh2gRhtgyQgHgEgEgGIgCgDQi/hdjIhJQhPgbhQgYIgFgEIgDgDQhZgjhdgYQhQgWhRgMIgHgBIgEgBQjtgkjzAoQiOAXiJAqQh2AlhyApQgiAOghgLIgFgEIgLgMIgDgCIgBgDQgCgLAAgLIABgMIABgHQAGgVAOgRQAHgJAKgGIADgEQADgGAHgFIAEgEQAKgIAIgKIAFgCQAJgDAJAAIAHABIAGACQA7gsBAgmQBHgoBLgfQAbgLAYgNQC8hlDWAEQAPAAAKgGQCGADCEAQQBhAMBeAbQDJA4DMArQDNAsC8BZQC5BYDFA9QArAOAvACQC/AKC+gSQDOgUDLguQDKgwDNgjICkgbQDOgkDKAwQAlAJAlAEQA8AFAhArQANASgNAUQgFAJgJAGQgRAegjAKQiyAwi4AJQgZACgYAKIinBIQi5BNjGApQg+ANg9ASQjBA5jDAqQgkAHgkAAQgZAAgZgDgAfZghQAhAAAhgGQgfgHgggFg");
	this.shape_1.setTransform(2.3,5.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666600").s().p("AJHFeIiwgPQhBgGhBgJQhdgNhbgUQhHgQhEgTQgggDgggFQhUgNhRgcQgGgDgFgFIgCgDQhRgehTgbIgXgIIiug1IgjgLIgSgFQhHgThHgQIgFgDIgDgCIg3gQQhAgQhCgOQhQgShRgMIgHAAIgEgBIgzgHQhTgJhTgFIhmgFIgGAAIhRACIhIADIgIABIhQAHIguAGQhHAHhGAMIg4ALIhNAOIhbATQgfAFgegMIgEgFIgKgMIgCgDIgBgEQgCgLAAgLIABgGIAAgFIACgFIAAgCIACgGQAHgPAMgLIACgBIABgBQAIgGAJgEIADgDQADgFAHgDIAFgDQAKgGAJgIIAFgBQAIgCAJABIAHACIAFACQA8ghBBgbQAngQAqgOQAhgMAhgKQAbgIAZgKQAcgMAdgJQAbgKAcgIQBBgQBFgIIAIAAQBBgIBDAAIASAAQAOAAALgFQCHADCFANQBPAHBOAPIAjAIQBNAQBNAPQBpATBoAPIAsAFQCkAWCcAwIBLAZQBYAfBYAZQBmAeBpAXIAeAGQAdAEAfAAIBPAAQCXgCCXgRQBIgIBIgLQBOgLBNgPQA4gKA4gLQC2gkC4gbIAsgGIBBgIIBjgLQB+gPB9AIQA8AIA8AMIACABIAkAIQAYAGAYAFIAZAEQAUAEAQAIIAGADQAHAFAHAGIAEAEQALALAHANQAFAKgCAJQgBAIgHAIQgGAIgJAGQgTAdgkAJQgnAKgnAGQiNAciQAKQgaABgXAKQhVAihVAdIgaAIQgcAJgdAIIhEAUQh1Agh4AXQg+AMg+ARIgiAKQixAxizAoIghAHQgbADgcAAIghgBgAeehKQAVAAAkgFIg0gLIgFAQg");
	this.shape_2.setTransform(1.9,10.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666600").s().p("AI4EeIivgEQhCgChBgEQhcgGhbgMQhIgKhFgNQggAAgggDQhVgHhRgTQgGgCgFgEIgDgCQhSgVhUgUIgYgFQhWgShZgUIgjgJIgTgEIiPgYIgFgCIgDgCIg3gLQhBgOhDgLQhRgOhRgLIgHgBIgEAAIg0gHIimgQIhlgMIgGgBQgogCgogBIhHgDIgIgBQgoABgngBIguAAQhEgDhFADIg3ADQgjAAgnACQgvADgoAAQgdABgagSIgEgFIgIgMIgCgDIgBgEQgCgLABgLIAAgBIABgFIAAgFIACgFIAAgCIADgFQAIgOAOgJIABAAIACgBQAIgEAJgCIADgBQAEgEAGgCIAGgCIAUgIIAEgBQAJgBAIACIAHACIAFACQA9gUBBgSIBSgTIBDgNQAbgFAZgHIA7gPQAbgHAcgGQBBgJBEgEIAIABQBCgGBDAAIASABQAPAAALgFQCHAECGAIQBQAGBOAKIAkAGQBNAMBOAJQBpANBoAGIAsACQCkAICdAgQAnAHAlAJQBZAVBYAPQBnATBpANQAOADAPABQAeACAfgCIBOgDQCXgICYgTQBIgKBHgLQBPgMBOgOQA4gIA5gJQC4gfC5gVIAsgFIBAgEIBkgGQB/gIB9AIIB3AWIACABIAkAJQAYAHAYAFIAYAHQATAEAQAKIADAEIALAMIADADQAIANAEANQADAJgDAIQgDAHgHAIQgHAHgJAFQgWAagjAJQgoAJgoAHQiOAZiQAMQgZABgYAIQhXAghXAWIgaAGIg5ANIhFAQQh2Aah5AVQg/AMg+AQIgiAJQizAwiyArIghAGQgnAHgnAAIgLAAgAdjh1QAUABAkgDQgUgFgegFIgGAMg");
	this.shape_3.setTransform(1.5,15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666600").s().p("AA/ECQhGgDhIgGQggABgfAAQhVgBhSgLQgHgBgFgDIgDgCIiogXIgYgDQhYgJhagOIgjgGIgTgDIiQgNIgFgBIgDgBIg4gIIiFgRIikgVIgHAAIgEgBIg0gGQhUgJhSgOQgzgIgxgLIgGgBIhQgJQgjgEgigGIgIgBQgogDgngFIgtgFQhCgMhDgHIg3gFQgggGgmgCQgvgFglgIQgbgGgVgVIgEgFIgHgNIgBgDIgBgEQgCgLABgLIAAgBIABgFIABgFIACgEIAAgCIADgFQAKgMAOgGIACgBIACAAQAIgCAJAAIAEAAQAEgDAGgBIAGAAIAVgEIAFAAIAQADIAHACIAFADQA9gJBCgHIBSgHIBEgGQAbgCAagEIA7gJIA4gIQBCgCBEABIAIABQBCgDBDAAIASABQAOAAAMgEQCIAECHAFQBQADBPAGIAkAEQBOAHBOAEQBqAGBngDIAtgBQCjgGCfAQIBNAIQBZALBZAFQBnAHBpAEIAeABQAdgBAfgDIBOgGQCXgOCYgVICQgWICdgbQA5gGA5gHQC5gYC7gQIAsgDIBBgCQAxABAzgBQB+gCB+AIQA6APA9AKIACABIAkAKIAwANIAXAIQASAHAPALIACAEIAHAOIABADQAGAOAAAMQABAJgFAHQgEAGgHAHQgHAGgKAFQgYAWgkAJQgnAJgoAGQiQAWiRAPQgZACgYAIQhYAbhYAQIgbAEIg6AJIhGAMIjxAnQg/ALg/APIgiAJQi0AvizAsIghAIQgrAIgtACIiuAHQhCADhCABIgUAAQhSAAhSgEgAcniBQATABAkAAQgTgGgcgFIgIAKg");
	this.shape_4.setTransform(1.2,16.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666600").s().p("AlJEXIgLgCIgEgBIiqgGIgYgCQhZABhbgJIgjgEIgUgBQhHABhJgCIgGgBIgDgBIg5gDIiGgKIilgQIgHAAIgEgBIg0gGQhVgJhSgSQgygLgxgPIgGgCIhOgPQgkgGghgKIgHgCQgpgGgmgJQgWgGgWgFQhAgVhDgRIg1gMQgegOglgJQgvgMghgRQgZgKgSgZIgCgFIgGgNIgBgEIgBgDQgBgLABgLIAAgCIABgEIABgFIACgEIABgCIADgEQALgLAQgEIACABIABgBIATACIAEABIAKgBIAGABIAWABIAEABIAQAFIAHACIAFADICAAGIBUAFIBDACQAcABAagBIA8gDIA5gDQBBAEBFAGIAHABQBDAABDABIASAAQAPABAMgDIEQAEQBRABBQADIAkABQBPADBOgBQBqgBBogMIAsgFQCjgTChAAIBNgBQBaABBZgEIDRgLIAdgCQAegCAegFIBOgKQCYgTCYgYQBIgLBHgNICfgZIBzgKQC6gSC8gLIAtgBQAgAAAgACIBkAFQB/AEB/AIQA6ARA8ALIACAAIAkALIAvAOIAXALQARAIAOAMIABAFIADAQIAAACQADAPgDAMQgBAIgHAHQgFAFgHAFQgIAGgKAEQgbAUgjAHQgoAJgpAFQiQAUiRARQgZADgYAHQhaAXhbAKIgbADIg7AEIhHAIQh5ANh6ATQg/AJg/APIgiAJQi1AtizAvIghAIQgsAJgsAFIiuASQhCAIhCAFQhdAIhbADQhHADhJABIhAAFQg4ADg4AAIg4AAgAbqiFQASACAkABQgSgGgbgEIgJAHg");
	this.shape_5.setTransform(1.1,17.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666600").s().p("Av0FDQhEAAhEgCQhTgEhTgIIgHAAIgEgBIg0gFQhVgKhSgWQgygOgwgUIgGgBIhOgVQgjgJgggOIgHgDQgpgJglgOIgsgPQg+gfhBgbIg1gTQgbgVglgPQgugTgegYQgWgSgOgdIgCgFIgEgOIgBgDIgBgDQgBgLABgMIAAgBIABgFIACgEIACgEIABgBIADgEQANgKAQgBIADABIABAAIATAGIAFABIAKACIAGACIAXAGIAFACIAPAGIAHADIAEADQA/APBDANIBUARIBEAKQAcAEAbACIA9ADIA5ACICGAVIAIACICGAEIASAAQAOAAANgBQCKACCHgCICjgDIAkgBQBQgCBPgGQBqgIBngUIAtgJQCjggCigRIBOgIQBZgKBbgOIDSggIAdgEIA7gLIBOgOQCYgYCYgbICQgZICggZIBzgHQC8gLC9gGQAXAAAWABQAhABAgAEQAyAGAyAEQB/ALCAAHQA4AVA9AKIACABIAkAMIAvAPIAWAMQAQAKANANIgBAGQgBAIAAAJIgBACQABAQgHAMQgDAHgIAGIgOAJQgJAFgKAEQgdAQgkAHQgnAIgpAFQiSAQiSAUQgZADgYAGQhbAXhcAEIgcAAQgeABgegBIhIACQh6AHh7ARQhAAJg/AOIgiAIQi2Asi0AxIghAJQgrAKgsAIIitAdQhDAMhCAKQhdAPhcALIiQARIhAAJQhVAMhUAGIgMgBIgFAAIisALIgYABQhaAKhcgDIgjgCIgUAAQhHAHhKAEIgGgBIgDAAIgnABIgTAAgAarihIA0AGQgQgHgbgEIgJAFg");
	this.shape_6.setTransform(1.2,20.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666600").s().p("A1EF6IgHgBIgEAAIg2gFQhVgKhRgaQgygRgvgYIgGgCIhNgaQgjgMgfgRIgIgFQgogLglgTQgVgLgWgKQg8gphAgjQgZgPgagNQgZgcgkgUQgugagbggQgUgZgKghIgBgFIgDgOIgBgDIAAgDQgBgLABgMIAAgCIABgEIACgEIADgEIAAgBIAEgDQAPgIARABIADABIACAAIATAKIAEADIALAEIAHAEIAYALIAEACIAPAIIAHADIAEADQA/AcBDAXQArAOArANQAhALAjAIIA4ALIA+AIIA6AHQBBASBEAOIAIADQBDAEBEACIASABQAOAAAOgBQCJADCJgGQBSgEBRgGIAlgDQBQgGBQgLQBrgPBngbIAsgMQCjguCjghIBQgRQBZgUBbgYQBpgbBqgaIAdgHIA8gOQAmgKAmgHQCYgfCZgcICQgbQBQgOBRgLIB0gDQC+gGC+AAIAuACQAgADAgAGQAyAJAyAHQCAARCAAHQA4AYA9AKIACAAIAkANIAuAQQAMAHAKAHQAOALANAPIgDAHQgDAJgBAJIgDABQgBASgLAMQgFAHgJAEIgQAIIgUAHQgfANgkAHQgoAHgpAEQiTANiSAWIgxAJQhdAVhegDIgcgBIg9gFIhIAAQh8ABh7AQQhBAIg/ANIgjAIQi3Aoi0AzIghAJQgsAMgrAKIitApIiFAgQhdAVhcATIiSAdIhAAOQhVAShVAOIgMACIgFAAIiuAcIgZADQhaAUheADIgjAAIgUABQhIAOhKAIIgGAAIgDABQgeADgdACQhEAFhFAAQhUAAhTgHgAZojPIAzAKQgOgIgagDIgLABg");
	this.shape_7.setTransform(1.6,25.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666600").s().p("A2oG7QhVgKhRgfQgygTgugdIgGgCIhNggQgmgRgigYQgogPglgXIgqgaQhShHhZg8QgWgigkgaQhkhIAFh5IACgEIACgDIACgEIAFgEQARgHASAEIAFACQAjAZAkAXQB0BLB/A2QBbAkBhAVIA7ALQBCAZBEAUIAHADQBEAHBEACQD0AIDygeQBkgMBigUQBsgWBmglQC4hCC8g5QCFgoCBgxQB3gsB5goQBDgWBFgQQDgg1DhgqQBRgPBRgLQD6AAD6AHQA4ACA2ANQCwArC1AJQA3AcA+AJIABAAIBTAfQAaASAUAbIgEAHQgGAKgDAKIgEABQgGAegeAKQhbAfhiAHQitAMirAfQhsAUhvgOQgfgEgegGIhJgDQjRgJjMAtQjJAsjEA6ImJB2QjFA8jHA4Qi3Azi2AtIgaAFQhbAchfAKIg3AEQhqAehuAPQhmAOhmAAQhUAAhUgJgAZDjxQAKAEAKgBQgNgIgTgDIgSgBIAeAJgAOEk5IABAAIgBgBg");
	this.shape_8.setTransform(2,30);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666600").s().p("Ay2GKQhVAAhVgJIgHAAIgEgBIgagCIgbgEQhHgKhEgXIgdgKQgjgOghgSIgFgCIgagJIgGgBIgugSIgfgMQgWgKgUgMIgYgIIgIgDQgXgJgWgMIgfgQIgMgFIgbgTQg8gog+gjIgbgOIgRgTQgTgRgZgOIgRgKQgngZgXghQgRgXgIgeIgCgFIgCgMIgBgDIAAgEQgBgLABgMIAAgBIACgEIABgDIAAgBIADgEIABgBIADgDIACgBQAPgHAPACIADAAIACAAIACABIAQAIIAFADIALAFIAFADIAVAKIAHAFIAEABIAJAFIAGAEIAEADQA/AcBAAYIBVAeIAMADIA3AQQAaAHAbAGQAfAFAhAFIAPABIAnAGIATACQA4ARA7AOIAJABIAKADIAHACQA8AFA8ACIAPAAIACAAIAaABQCLADCKgGQBTgEBTgHIAMAAIAZgCQBRgHBQgMIALgCQBlgPBhgZIAMgEIAfgIQCigwCkgkIAOgDIA+gOQBdgVBagZIAPgFQBhgbBigZIAfgIIAOgEIAqgLIBSgTIANgCQCSgfCSgcICWgbIAFgBQBOgOBOgLIAFgBIBwgDQC/gEDAABIAFAAQAWAAAXADQAeADAeAFIAGACQAzAJAzAHQB6ARB8AGIAPAHQAxATA1AJIACAAIANAFIACABIAkAMIAgAMIAMAHIAUAQQAJAIAHAJIgCAHIgBACIgCAIIgBAIIgEABIAAAEIgCAHQgEAPgMAJQgDADgGADIgGADIgPAHIgUAHQgiAMgkAGQgkAHgkADIgHABQiWANiVAYIgkAGIgOADQhcARhegEIgQgBIgLgBIgygFIgKABIg+gBIgNABQiAAAh+ARQhBAJhBAOIgMADIgVAFQi6Api3A2IgEABIgdAIIhYAXIiwAsIhkAYIghAIIi6ArIiTAfIgcAGIgmAIQhXAThXAQIgKABIgDABIiKAXIgZADIgEABIgXAEQhOAQhQADIgZABIgeABIgHABIgSAEQhHANhJAIIgHABIgEAAIgjADIgZACQg9AEg+AAIgNAAgAZfjWIAaAJQALADAOgCQgOgHgVgEIgQABg");
	this.shape_9.setTransform(1.6,26.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666600").s().p("AyWFTQhTgEhVgIIgHgBIgEAAIgagDIgbgEQhGgKhEgUIgdgIQgjgMghgPIgGgCIgZgHIgGgCIgvgOIgfgLQgWgIgVgJIgZgHIgHgCQgXgIgXgJIgfgMIgMgFIgdgPQg9ggg/gbIgcgLIgSgOQgVgOgZgLIgSgIQgogUgbgZQgTgRgMgbIgCgFIgEgNIAAgDIgBgDQgBgMABgMIAAgBIABgEIAAAAIACgDIAAgBIACgEIACgBIACgDIACgCQANgIAPAAIACAAIACAAIACABIAQAFIAFACIALADIAFACIAVAGIAGADIAEABIAKAEIAGAEIAFACQA9ASBBAQIBUAUIAMACIA3AKQAaAFAbADIA+AGIAQAAQATACAUABIATABIBzAVIAJABIAJACIAIABIB3AFIAPABIACAAQANAAANgBQCLADCJgDICkgFIAMAAIAZgBQBQgDBPgFIALgBQBlgKBigUIALgDIAfgHQCjgkCigWIAOgCIA/gIQBcgMBZgRIAQgDIDCgjIAegGIAPgDIAqgIIBSgQIANgDIEjgzICVgbIAFgBQBOgNBNgLIAFgBIBvgGQC9gJC+gEIAFAAQAXAAAXABQAdACAeAEIAHABQAyAHAzAFQB6AMB7AGIAOAFQAyASA1AJIACAAIANAEIACABIAjAMIAhALIAMAHIAVAOQAKAHAIAIIgBAGIAAADIgBAGIAAAIIgBACIgBADIAAAGQgCAPgIAKIgHAHIgGADIgOAIIgTAJQgfAPglAHQgjAGgkAEIgHABQiVAQiUAVQgSADgRAEIgOADQhbAUhdABIgQAAIgLAAQgYAAgZgCIgLABIg8ADIgOAAQh9AGh9AQQhBAKhAAOIgMADIgVAFQi5Asi3A0IgEABIgdAIQgrALgsAIIiwAiIhkATIghAFQheARhbAOIiTAUIgbAFIgmAGQhWANhWAJIgKgBIgDAAIiKAMIgZABIgEAAIgXADQhNAJhQgBIgYgBIgeAAIgHAAIgSADQhHAIhJAEIgGgBIgEABIgiABIgaAAIgWAAQg4AAg5gCgAaZivQALADAKAEQANACASgBQgQgIgXgDIgNADg");
	this.shape_10.setTransform(1.2,21.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666600").s().p("AlyElIgDAAIiJgBIgZAAIgEAAIgXAAQhNADhPgGIgYgCIgdgCIgHAAIgSABQhIADhIAAIgGgCIgEAAIghgBIgZgBQhDgDhDgFQhTgGhUgJIgHgBIgEgBIgagDIgbgDQhGgJhDgRIgegIQgjgKgigMIgFgBIgagGIgGgBIgugMIgggIIgrgNIgZgGIgIgCQgXgFgXgHIgggJIgMgEIgdgLQg/gYhBgUIgcgHIgUgLQgWgKgagHIgSgFQgqgPgegRQgWgNgPgYIgDgGIgFgMIgBgDIAAgEQgBgLAAgLIAAgCIACgEIAAAAIABgDIAAgCIACgEIABgBIACgDIACgCQAMgJAOgCIACgBIACAAIACABQAHAAAJACIAFABIAKAAIAFACIAVACIAGACIAEABIAKADIAHADIAEACIB+AQIBUAKIAMAAIA3AFQAaACAaABIA+ABIAQgCIAmAAIATAAIBzAOIAJABIAKACIAIABIB1ACIAPAAIACAAQAOABAMgCQCKADCIAAICjABIAMAAIAZAAQBPABBPgDIALAAQBkgEBigOIAMgBIAfgFQCjgZChgHIAOgBIA+gDQBcgDBZgJIAPgBIDCgSIAegEIAQgCIAqgGIBRgNIAOgCQCRgVCRgYICUgZIAFgBICagZIAFgBIBugIQC7gPC9gIIAFAAQAWgBAXABQAdAAAeACIAGABQAzAFAyADIDzAMIAPAFQAyAPA1AKIACAAIANADIACABIAkAMIAgAKIANAGIAWAMQAKAGAJAIIABAFIAAADIABAGIACAHIgBACIAAADIABAGQABAOgGAKQgBAEgEAEIgEAFIgNAJIgSAKQgdARgkAIQgkAHgkAFIgHAAIkmAlQgSADgSAEIgOADQhZAWhbAGIgQABIgLABQgYABgZAAIgKABIg8AGIgNABQh8ALh8ATQhAAKhAAPIgMADIgVAGQi3Asi2AyIgEABIgdAHQgsALgsAFIiwAZIhjAMIghADQheALhdAHIiPAJIgbAEIgmADQhWAJhVABIgKgCgAbRiPQAJADAIADQAPACAVgDQgRgHgYgDIgMAFg");
	this.shape_11.setTransform(0.9,18.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666600").s().p("AlREKIgKgDIgDgBIiJgMIgZgDIgEAAIgXgCQhMgEhOgKIgYgDIgdgEIgHAAIgSgBQhHgChIgFIgGgBIgEgBIgggDIgZgCIiFgOIilgTIgHgBIgEgBIgagCIgagEQhGgJhEgOIgdgGQgkgIgigKIgFgBIgagFIgGgBIgugIIghgGQgXgEgVgFIgZgEIgIgBIgtgIIghgGIgNgDIgegHQhBgQhCgMIgcgEIgWgHQgYgGgagEIgTgDQgrgJgigKQgXgIgTgWIgDgEIgGgNIgCgDIAAgDQgCgMAAgMIACgFIAAAAIABgEIACgFIABgBIABgEIACgBQALgLANgEIACgBIACAAIABAAIARgBIAEAAIAKgCIAGAAQAKAAAJgBIAHABIAEAAIAKADIAHADIAFACIB+gEIBTAAIAMAAIA2gBQAbAAAZgDIA9gFIARgCIAlgDIATgBQA5ACA7AEIAIAAIAKABIAIABQA6gBA6ABIAQAAIACAAQAOABALgDIERAGQBRACBRAEIALABIAZACQBPAFBOABIALAAQBkACBigHIAMgBIAfgCQCjgNChAFIANABIA+AEQBaAFBaAAIAPAAIDBgCIAegBIAQgBIAqgEIBRgKIAPgBQCQgRCRgWICTgXIAFgBICYgZIAFgBIBugMQC5gUC7gMIAFgBIAtgCQAdAAAdABIAHAAQAyADAzAAQB4ACB5AGIAOAEQAzANA1AJIACAAIANAEIACABIAkAKIAhAKIANAFIAWAKIAVAMIADAFIABACIACAGIADAHIABADIAAACIABAFQAEANgCALQgBAFgCAEIgEAFQgEAGgHAFQgIAHgKAEQgaAVgkAHQgjAIglAGIgHABQiRAUiSARQgSACgSAEIgOAEQhZAYhZAMIgPACIgLABIgxAFIgKACIg6AHIgOACQh6ARh7AUQhAAKg/AQIgMADIgVAGIlrBdIgEABIgdAHQgsAJgsADIiwAOQgxAFgxACIgiACQhdAFhdAAQhGAAhIgCIgbACIglACIgyABQg9AAg7gFgAcGiDIANAEQAQABAZgDQgSgGgagEIgKAIg");
	this.shape_12.setTransform(1,17);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666600").s().p("AEVEHIgiAAQhdgChcgGQhGgFhHgIIgbAAQgTABgSgBQhWgDhSgNQgGgCgFgDIgCgCIiJgYIgZgEIgEgBIgXgEQhLgKhNgOIgZgFIgcgFIgHgBIgSgCIiPgRIgGgBIgDgCIgfgFIgZgEIiEgUIikgWIgHgBIgEgBIgagCIgagEQhFgJhEgKIgegFQgjgGgjgHIgFgBIgagEIgGAAIgugFIgigEIgsgFIgZgCIgIgBIgugEIghgDIgNgBIgfgDQhDgHhDgEIgdgBIgYgDIg0gDIgTgBQgsgCglgFQgbgDgWgUIgEgEIgHgMIgCgEIAAgDQgCgLAAgMIACgFIAAgBIAAgEIACgFIABgCIABgDIACgCQAJgMAMgGIADgBIABgBIABAAQAIgDAJgBIAEgBQAEgCAGgCIAFgBQAKgCAKgDIAGABIAFgBIAKACIAHACIAFADQA9gNBAgKIBTgKIAMgCIA2gGQAbgDAZgFIA8gKIARgEIAlgFIASgDQA5gDA7ABIAJAAIAKAAIAIAAQA5gCA6AAIAQAAIACAAQAOABALgEQCJAECGAGQBRAEBQAHIALACIAYADQBPAIBNAGIAMABQBjAHBiAAIAMAAIAgAAQCjgCCfAUIANACIA+AJQBaAOBZAIIAPACQBgAJBhAGIAeABIAQAAQAVAAAVgCIBQgHIAQAAQCQgNCQgUICSgVIAGgBICXgaIAFgBIBsgOQC4gZC5gRIAFgBQAWgCAWgBIA7gCIAGAAQAyAAAzgCQB3gEB4AHIAPADQAzALA1AJIACAAIANAEIACABIAkAJIAhAJIAOAFIAWAIQAMAEALAGIAFAFIABABIADAFIAFAHIACADIABACIACAFQAGAMABAMQABAFgCAFIgCAGQgEAGgHAGQgHAHgJAFQgYAXgkAIQgkAJgkAGIgHABQiQAXiRAPQgSABgSAFIgOAEQhXAahYASIgPADIgLACIgwAIIgKACIg6AKIgNADIjzArQg/ALg+AQIgNAEIgVAFQi0Avi0AtIgEABIgdAGQgsAIgtACIivAEIhKABIgYAAgAc6iEIAJADQARABAdgEQgUgFgbgFIgIAKg");
	this.shape_13.setTransform(1.2,16.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666600").s().p("AI3EoIiwgGQgxgBgwgDIgigDQhdgHhbgNQhIgLhFgNIgagBIglgDQhVgIhSgUQgGgDgFgEIgCgCQhEgThEgRIgZgHIgEAAIgXgGIiXgkIgYgFIgdgHIgHgCIgSgDIiOgaIgFgDIgEgBIgegHIgZgGQhBgOhCgMQhRgPhSgLIgHgBIgEAAIgZgBIgagEIiJgQIgdgDIhHgIIgFgBIgagCIgGgBIgvgCIghgBIgtgCIgaAAIgIAAIguAAIghAAIgNAAIghABQhEgBhFAEIgeACIgYACIg2ADIgUACIhXAFQgcADgagRIgEgFIgJgMIgCgEIgBgDQgCgLABgMIABgFIAAgBIAAgEIACgFIABgCIABgDIABgCQAIgNALgJIACgBIACgBIABAAQAIgFAJgCIAEgCQADgEAGgCIAGgCQAKgEAJgGIAFAAIAGgBIAKABIAHACIAGACQA8gWBBgTQAngLAqgJIANgDIA2gMQAagFAagIQAcgJAegHIASgFIAkgIIATgDQA5gJA7gDIAIAAIAKAAIAIgBQA5gEA6ABIAPAAIACAAQAPAAALgFQCIAECFAJQBQAGBPALIALACIAYAEQBOANBNAKIAMABQBjANBiAHIAMABIAgABQCkAKCdAiIANADIA+APQBZAXBYARIAQADQBfASBhANIAeAEIARABIAqAAIBQgDIAQgBQCPgHCPgSQBJgJBIgMIAHgBQBLgLBKgOIAFgBIBsgRQC2geC3gWIAFgBIAsgFIA6gEIAHgBIBkgGQB3gJB3AHIAOABIBpATIACAAIANADIACABIAkAJIAiAIIANAEIAYAHQANADALAFIAGAEIADACIAEAEIAGAGIAEAEIABABIADAEQAIAMAFANIABALIgCAGQgCAHgHAHQgGAIgKAFQgVAagkAJQgjAIglAHIgHACQiOAZiRAKQgSABgRAGIgOAEQhWAfhXAYIgPAEIgLACIgvALIgKADIg4ANIgOADQh2Abh5AWQg/ALg+ARIgNAEIgVAFQizAxizAqIgEABIgdAGQgkAGglAAIgPAAgAdshvIAFABQATABAggEQgVgGgdgFIgGANg");
	this.shape_14.setTransform(1.5,14.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666600").s().p("AJHFeIiwgPQhBgGhBgJQhdgNhbgUQhHgQhEgTQgggDgggFQhUgNhRgcQgGgDgFgFIgCgDQhRgehTgbIgXgIIiug1IgjgLIgSgFQhHgThHgQIgFgDIgDgCIg3gQQhAgQhCgOQhQgShRgMIgHAAIgEgBIgzgHQhTgJhTgFIhmgFIgGAAIhRACIhIADIgIABIhQAHIguAGQhHAHhGAMIg4ALIhNAOIhbATQgfAFgegMIgEgFIgKgMIgCgDIgBgEQgCgLAAgLIABgGIAAgFIACgFIAAgCIACgGQAHgPAMgLIACgBIABgBQAIgGAJgEIADgDQADgFAHgDIAFgDQAKgGAJgIIAFgBQAIgCAJABIAHACIAFACQA8ghBBgbQAngQAqgOQAhgMAhgKQAbgIAZgKQAcgMAdgJQAbgKAcgIQBBgQBFgIIAIAAQBBgIBDAAIASAAQAOAAALgFQCHADCFANQBPAHBOAPIAjAIQBNAQBNAPQBpATBoAPIAsAFQCkAWCcAwIBLAZQBYAfBYAZQBmAeBpAXIAeAGQAdAEAfAAIBPAAQCXgCCXgRQBIgIBIgLQBOgLBNgPQA4gKA4gLQC2gkC4gbIAsgGIBBgIIBjgLQB+gPB9AIQA8AIA8AMIACABIAkAIQAYAGAYAFIAZAEQAUAEAQAIIAGADQAHAFAHAGIAEAEQALALAHANQAFAKgCAJQgBAIgHAIQgGAIgJAGQgTAdgkAJQgnAKgnAGQiNAciQAKQgaABgXAKQhVAihVAdIgaAIQgcAJgdAIIhEAUQh1Agh4AXQg+AMg+ARIgiAKQixAxizAoIghAHQgbADgcAAIghgBgAeehKIABAAQAVAAAjgFIg0gLIgFAQg");
	this.shape_15.setTransform(1.9,10.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).wait(1));

	// tail fin
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(102,51,0,0.753)").s().p("AI+GOQhZgNhQgtQgogWgogVQhAgQg9gZQi/hNi/hJQgegMgfgCQjNgQjKAWQjOAWjHA1IjSA4QhBASgxgkQgSgNgMgUQg2haBVg9QAMgbAUgZQBfh4CMhDQCUhGCRhKQApgVAwgIQBdgOBcgMQDLgDDJAkQDKAmDKA3QDJA2C8BdQC9BdDOArQC9AmCQB8QBGA7gdBOQgHARgTAEQjLAsjOAhQhsARhsAAQhiAAhjgOg");
	this.shape_16.setTransform(-88.9,-7.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(102,51,0,0.753)").s().p("AJeGBIgogCQg9gFg6gRQgagIgagLIg1gXIgdgMQhAgMg+gVQiUgxiSg0IhegfIgFgCQgbgHgcgEIgCAAQjNgUjJAGIgBAAIg1ABQivAFimAVIglAEQgyAHgwAFIgNABIgyAEIgRABQgyABgkgiQgPgNgJgUIgBgBQgJgTgEgSQgJg/BEgqQAOgYAWgVQAUgSAWgQQBXhEBygoICKgxICgg/QAqgQAwgGIC6gTQCJgBCJAMQBCAGBDAJIAUAEQDBAbDBAmIBAANQBcAVBZAaQBLAWBJAbQAnAOAoANIBNAXQB3AkB8AaQAYAFAXAGQAfAIAYAPQAbAQAVANIAIAGQAvAgAnAoIASAVQALAMAGAOIAFALQARAqgYAzQgHAQgSAFIgIADIiGAmQhYAYhbAUIgLAEIggAMIgbAJQg0AOg6AGQhgAMhiAAIhBgBg");
	this.shape_17.setTransform(-91.7,0.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(102,51,0,0.753)").s().p("AG1FhQgagFgagJIg2gQIgegKQhBgIg/gRQiWgoiUgvIhggaIgGgBQgagHgcgEIgCAAQjOgZjIgJIgBAAQgbgBgZgEQitgLiegGIgkgCQgyABgsgEIgLgBIgtgHIgQgCQgugHgfglQgMgPgHgUIgBgBQgHgRgBgSQABhABEgjQARgUAYgQQAVgPAXgKQBcguBygaQBGgQBGgSQBSgWBRgYQAsgMAwgDIC8gNQCJAACJAKQBDAEBDAGIAUACQDDATDCAYIBAAIQBdAOBaAQQBLAPBKARIBQASIBOAPQB5AdB8AaIAwALQAgAIATASQAWAVAKAMIAFAIQAdAjATAfIAIATQAFALACANQACAEAAAFQAGApgaAwQgIAQgSAGIgHADIiCAvQhWAfhaAaIgJAFIgZARIgZAMQgvAWg8AHQiAAXiCADIgoABQg9AAg7gLg");
	this.shape_18.setTransform(-94.4,8.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(102,51,0,0.753)").s().p("AGnFWQgagCgbgFIg3gLIgfgHQhBgFhAgNQiZgeiWgqIhhgWIgGgBIg3gKIgCAAQjPgdjHgYIgBgBQgagDgYgHQirgdiXgfIgigIQgygFgpgNIgKgEQgSgJgVgIIgPgGQgqgOgZgmQgKgRgFgUIgBgBQgEgUAAgSQANg+BDgdQAUgQAagLQAXgKAYgFQBggZBzgMQBHgIBHgKQBTgNBTgQQAtgIAwgBQBfgDBegEQCKACCKAGICFAGIAUACIGJATIBBAEQBdAGBbAHQBMAHBLAIQAoAFApAEIBOAHQB7AWB9AZIAwALQAhAIAPAXQARAYgBALIACAJQAKAkgBAcIgCAQQAAAKgCAMIgCAJQgDAlgdAtQgKAPgQAHIgHADQg/AehAAcQhUAlhZAeIgGAIQgIAKgMALIgVARQgqAbg/AJQh+AeiCAMIgpAEQgcACgdAAQgfAAgggDg");
	this.shape_19.setTransform(-96.6,17.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(102,51,0,0.753)").s().p("AFJFIIg5gFIgfgEQhCgChBgIQiZgUibgnIhigQIgGgBIg4gJIgCgBQjOghjHgoIgBgBQgagFgXgKQioguiRg6IgggNQgygLglgUIgIgHQgPgOgTgNIgOgJQgmgXgUgrQgHgRgDgVIAAgBQgDgVACgTQAZg7BDgWQAWgOAcgGQAYgFAZAAQBkgDB1ABQBHABBIgDQBVgDBUgIQAugEAxAAQBfACBfgCIEWAHICFACIAUAAQDIABDEgEIBBgBIC6gEQBNgCBLABIBSgCQAogBAnABQB9APB+AZQAYAEAYAGQAiAJAKAaQAMAcgLALIgCAJQgIAmgVAVQgGAGgHAIIgLAUIgFAIQgNAlghArQgKANgPAGIgHAFQg9Aig+AhQhSAshYAjIgEAKQgEAMgKANQgIAMgKAJQglAihBAKQh9AmiCAUIgoAHQg+AJg8ABQgaAAgbgCg");
	this.shape_20.setTransform(-96.2,26.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(102,51,0,0.753)").s().p("ADeFnIgfgBQhDADhCgFQicgLidghIhkgMIgGgBQgcgDgcgFIgCgBQjPgljFg4IgBgBQgagHgXgNQilhAiKhTIgfgUQgxgPgigeIgHgKQgLgUgRgSIgMgMQgjgfgOguQgFgTgBgVIAAgBQgBgUAFgUQAkg5BCgQQAagKAdgBQAaAAAaAFQBoASB2APQBHAJBKAFQBWAFBWAAQAvAAAxADQBgAGBgABQCLAECMAAQBEAABCgDIAUAAQDKgIDFgSIBBgGQBegJBdgLICagTIBSgKQApgFAogDQB/AIB+AYQAYAEAYAHQAjAIAGAeQAHAggWAKQgCAFgDAFQgbAngoAQQgMAEgMAGIgUASIgIAIQgYAjgjAoQgLANgPAJIgHAFQg7Amg8AmQhQAyhXAnIgBAMQgBAPgHAQQgGANgJALQghAohCAMQh9AtiBAdIgpAJQg9ANg9AJQgbACgbABIgdABIgdgBg");
	this.shape_21.setTransform(-95.1,31.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(102,51,0,0.753)").s().p("AAGGNQifgBifgdIhlgIIgHAAQgcgCgcgGIgCAAQjQgqjEhHIgBgBQgagJgVgSQijhQiEhtIgdgYQgxgXgegnQgEgGgBgGQgJgagOgXIgMgQQgegmgIgxQgDgUABgWIAAgBQACgVAGgUQAvg3BCgKQAcgGAgAEQAbAEAcALQBrAoB3AcQBJASBKAMQBYAOBXAIIBiAJQBgAKBhADQCMAHCMgEQBDgCBEgFIAVgCQDKgRDGggIBCgKQBfgQBegVICbgjIBTgUQApgKAogGQCBABB/AYIAxAKQAkAIABAiQACAlggAIQgEAHgFAFQgtAog9AKQgRACgQAGQgPAGgPAKIgMAHIhHBGQgMAMgOAKIgGAGQg6Asg6ApQhOA5hWAsIABAOQADARgFASQgEAQgIAMQgcAwhFANQh7AziBAmIgpAMQg9ASg+AOQgaAGgcAEQgdAEgeACIghACQg9AFg9AAIgLAAg");
	this.shape_22.setTransform(-93.9,36.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(102,51,0,0.753)").s().p("AlyGjIhtgCQgcgBgcgGQjTgvjEhYQgagLgUgVQizhsiGiaQgwgdgcgwIgDgPQgHgqgVgkQgmhCAMhNQAEgVAIgVQBthkCJBLQC0BiDJAzQFzBeF+gTQBNgEBPgKQDugfDng5QBggXBegeQB5gnB4gqQAqgPAogJQCcgHCYAiQAlAJgDAmQgEApgrAGQgFAIgHAFQg/AqhRADQgrACgoASIgPAGQg8Asg4AyQg4Ayg4AvQhMA+hWAxIAFAPQAGAUgDAVQgMBRhbATQh6A6iBAvQhSAehSAcQg5ASg7AJQh8ATh8AAQh6AAh5gSgARVlMIAAABIABgBIgBAAg");
	this.shape_23.setTransform(-92.7,42.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(102,51,0,0.753)").s().p("AkYF9IgugIIg8gEIgFAAIgrgCIgPgBIgCAAQgTgCgTgEQjEgni4hEIgBAAIgYgKQgPgFgNgIQgKgGgJgIQiXhNh7hnIgegaIgSgOQgjgQgagaIgIgIIgLgOQgEgHgBgGIgGgOIgHgPQgJgTgNgTQgRgZgJgbQgHgUgCgWIAAgCQgBgUACgVQADgVAIgUQAigkAqgQQAcgMAegCQAZgBAbAFQAYAFAaAKQBTAhBaAaQBIAWBLAPIA3ALQA9AKA+AHIBfAMQBkANBjAFQCSALCRgDIAlgBQAygCA0gDIAVgCIAggCQDAgSC9ggIBDgLIARgDQBXgQBVgUIAQgDICOgjIBSgUIAPgEQAhgIAfgGIASgDQB8AAB6AWIAzAKIAHABQAgAIAEAcIAAAIQABAbgSAMIgGAEIgIADQgEAHgFAFQgfAcgnAOQgLAEgMADIgRADIgLADIgJADQgYAIgZAOIgNAIIgVASQgNALgOAKIgHAFIg8AuIg6AtIg5AqQg0Amg3AgIgKAGIgeASIgQAIIABANIABABQADASgFASQgLAngeAWQgaAUgpAIQhfAnhiAgIgnAMIgTAHQg0AQg0ANIg5AOIgCABQgdAGgdAFIggAEIgYADQg4AFg3ACIg6ABQiIAAiFgUg");
	this.shape_24.setTransform(-93.8,37.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(102,51,0,0.753)").s().p("ABVFvQihgEihgdIgsgJIg7gGIgFAAIgrgDIgPgCIgCAAQgTgBgTgEQjCgki4g3IgBAAIgYgIQgPgFgNgGIgUgLQiZg/iBhTIgfgVIgTgNQgjgLgbgUIgJgHIgNgMIgHgKIgHgMIgIgMQgLgQgOgRQgTgVgLgaQgIgTgDgWIgBgCQgDgUACgUQACgVAHgUQAegkArgSQAagOAcgFQAZgFAaACQAXABAZAGQBSAUBaARQBHAOBKAIQAbAEAbACQA8AFA9ACQAuACAwAFQBjAIBiAEQCQAICQgBIAlAAQAzAAAygCIAVAAIAfgCQC+gKC7gVIBDgIIARgBQBWgKBUgNIARgCICMgVIBSgNIAPgCQAfgGAggDIASgBQB6AFB4AWIAzALIAGABQAgAIAHAaIABAGQAFAagMAMIgFAEIgFADQgCAHgDAEQgUAcgbARIgQAKIgMAFIgJAEIgHAEQgSALgWARIgLAIIgTAUQgMAMgPAJIgHAEIg+AqIg7AoIg6AlQg0Ajg4AdIgLAGIgeARIgPAIIgBAKIAAACQgBAPgHAQQgOAhggAUQgbARgoAHQhfAihhAaIgoAKIgTAFQg0AMgzAJIg4AIIgCABQgdAEgcABIggACIgYABQglACgkAAIgkAAg");
	this.shape_25.setTransform(-94.9,32.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(102,51,0,0.753)").s().p("AEcFQIgfgBIgYAAQg2AAg2gEQiegNiegiIgsgJIg6gJIgFAAIgqgFIgPgBIgCAAQgSgCgTgDQjBggi4grIgBAAIgYgHQgPgDgNgFIgUgJQicgxiFg/IghgQIgUgJQgjgKgegNIgJgGIgOgIIgIgJIgKgIIgKgKIgcgbQgUgTgNgZQgJgSgFgVIAAgCQgEgUAAgTQABgVAHgUQAaglAsgUQAXgQAbgIQAYgHAZgCQAXgCAYACICpANQBHAHBJABIA1ABQA7AAA8gDQAtgBAwACQBiAFBhABQCPAGCOACIAlABQAzABAxgBIAUABIAggBQC8gDC5gJIBCgEIARAAQBWgEBTgGIAQAAICLgJIBRgEIAPgBQAggDAfgBIASAAQB4ALB3AXIAyAKIAHACQAeAIAKAXIACAGQAJAXgGAMIgCAFIgDADQAAAGgCAFQgJAcgPAUIgJALIgIAIIgFAFIgFAGIgfAhIgJAJIgRAVQgLANgQAIIgHAEIg/AjIg9AkIg7AjQg1Aeg5AaIgKAGIgfAPIgPAIIgDAJIgBACQgEANgJANQgSAcghARQgdAOgmAHQhfAchiAUIgnAHIgTAEQg0AJgzAEQgcACgbABIgCABIgTAAIglgBg");
	this.shape_26.setTransform(-95.8,27.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(102,51,0,0.753)").s().p("AGqFMQgbgBgbgCIgCAAIg3gGIgegDIgYgBQg1gDg2gIQiagWicgmIgrgKIg5gLIgFgBIgqgGIgOgBIgCgBIgmgEQi/gci4gfIgBAAIgYgEQgOgDgOgEQgLgCgKgEQidgkiLgqIghgLIgWgGQgkgGgfgLIgKgDIgQgHIgJgFIgLgHIgMgFQgPgJgQgNQgVgQgQgXQgKgRgGgVIAAgBQgGgUAAgTQgBgVAHgTQAWgmAsgWQAVgSAbgLQAWgLAYgFQAXgFAXgCQBOgHBZgCQBGgCBIgFIA1gEQA6gGA6gHQAtgFAwAAQBgABBggCIEbAKIAkABIBiADIAVABIAfABQC6AEC3ACIBCABIARAAICoAEIAQABQBFABBEADQAoADApAAIAPABQAfAAAgACIARABQB1ARB3AWQAZAFAYAHIAHABQAdAIANAUIADAGQAMAVAAAMIABAFIAAAEIABAJQADAcgEAXIgCAPIgDAJIgDAHIgCAGQgHARgPAWIgIAKIgPAUQgKAOgQAHIgHAEIhBAhIg9AgIg9AeQg2Aag5AXIgLAFIgeAPIgQAGIgGAIIAAACQgHALgMALQgXAXghANQgeAMgmAFQheAYhiAOIgnAFIgTACQgvAFguAAIgKAAg");
	this.shape_27.setTransform(-96.5,21.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(102,51,0,0.753)").s().p("AG2FYQgbgDgagFIgCAAIg2gMIgegGIgYgCQg0gGg1gLQiZgfiYgrIgqgLIg4gNIgFgBIgpgHIgPgCIgCAAIglgEQi9gYi4gTIgBAAIgYgDIgcgEIgWgEQifgWiQgVIgjgGIgXgEQgkgCghgGIgLgCIgQgDIgLgEIgNgDIgOgFQgRgGgRgKQgXgOgRgWQgMgNgHgVIAAgBQgHgUgBgSQgCgVAGgTQATgmAsgZQATgUAZgOQAWgNAXgJQAWgJAWgGQBMgUBZgMQBGgJBGgMIA0gJIBygXQAtgJAwgCQBfgCBfgFQCMADCLAIIAlACIBjAGIASABIAfACQC4AMC2ANIBAAFIASABQBUAIBTAJIAPACQBFAIBDAKQAoAGAoAFIAPACIA/AHIARADIDoAtQAZAFAYAGIAHACQAcAIAPARIAFAGQAQASAGAMIADAFIADAFIADAJQAPAcAIAaIAEAQIACALIAAAJIAAAGQgBAUgLAYIgHALIgNAXQgJAPgRAGIgHAEIhCAcIg/AbIg9AaQg4AXg5ATIgLAFIgfANIgQAGIgHAHIgBABQgLAJgOAJQgaASgjAKQgfAJgkAFQhfAShiAIIgnACIgSACIgWAAQgpAAgogEg");
	this.shape_28.setTransform(-95.4,14.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(102,51,0,0.753)").s().p("AIzFuIgRgBQg0gCgygKQgbgFgagIIgBAAIg1gSIgegJIgYgDQg0gJg0gOQiWgoiVgvIgpgMIg3gPIgFgCIgpgIIgOgCIgCAAIglgEQi8gUi4gGIgBAAIgXgCIgdgBIgWgCQihgIiWgBIgkgBIgYAAIhHAAIgMAAIgSgBIgMgBIgPgCIgPgBQgTgDgSgIQgYgLgUgVQgNgOgIgUIgBgCQgIgTgCgQQgCgVAFgTQAPgmAtgbQARgWAXgRQAVgQAWgNQAVgMAWgKQBKgiBZgVQBFgQBGgTIAzgOIBwghQArgNAwgEIC8gNQCKABCLAKIAkADIBiAIIAUADIAcADQC3ATCzAYIBBAJIARADQBUANBRARIAQADQBEAOBCARQAnAKApAJIAPADIA+ANIARAEQBxAcB0AXQAYAFAYAGIAHACQAbAIATAPIAFAFQAUAQAMAMIAFAGIAGAFIAHAIQAZAcAUAbIALATQAEAGADAHIADAJIACAKQAFAXgJAaIgEAMQgEAMgHAMQgJAQgRAGIgIADIhDAYIhAAXIg/AVQg4ASg5ARIgMAEIgfANIgPAFIgKAFIgCACIgeANQgeAMgkAHQghAHgjADQhfAOhhACIgoAAg");
	this.shape_29.setTransform(-93.6,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16}]}).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_17}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-232,-48.6,460.8,96.4);


// stage content:
(lib.FWW_TilesAll_v01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Eel
	this.instance = new lib.eel("synched",2);
	this.instance.setTransform(-166.4,593.5,2.092,2.092,8.5,0,0,212.7,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-1.8,regY:18.9,scaleX:2.09,scaleY:2.09,rotation:6,x:-582.5,y:559.1,startPosition:3},0).wait(1).to({rotation:3.5,x:-544,y:548.8,startPosition:4},0).wait(1).to({rotation:0,skewX:1,skewY:1.1,x:-504.3,y:542.4,startPosition:5},0).wait(1).to({skewX:-1.5,skewY:-1.4,x:-461.9,y:539.2,startPosition:6},0).wait(1).to({skewX:-4,skewY:-3.9,x:-416.8,y:539.5,startPosition:7},0).wait(1).to({skewX:-6.5,skewY:-6.4,x:-369.5,y:543.6,startPosition:8},0).wait(1).to({skewX:-9,skewY:-8.8,x:-320,y:551.9,startPosition:9},0).wait(1).to({skewX:-11.5,skewY:-11.3,x:-269,y:564.4,startPosition:10},0).wait(1).to({skewX:-14,skewY:-13.8,x:-215.8,y:581.3,startPosition:11},0).wait(1).to({skewX:-10.7,skewY:-10.5,x:-177.2,y:559.1,startPosition:12},0).wait(1).to({skewX:-7.4,skewY:-7.2,x:-137.8,y:541.2,startPosition:13},0).wait(1).to({skewX:-4.1,skewY:-3.9,x:-97.8,y:527.7,startPosition:14},0).wait(1).to({skewX:-0.8,skewY:-0.5,x:-57.4,y:517.7,startPosition:0},0).wait(1).to({skewX:2.5,skewY:2.8,x:-16.2,y:509.3,startPosition:1},0).wait(1).to({skewX:5.8,skewY:6.1,x:26.5,y:500.4,startPosition:2},0).wait(1).to({skewX:9.1,skewY:9.4,x:71.6,y:489.3,startPosition:3},0).wait(1).to({skewX:12.4,skewY:12.7,x:119.3,y:474.8,startPosition:4},0).wait(1).to({skewX:15.6,skewY:16,x:169.3,y:456.4,startPosition:5},0).wait(1).to({skewX:18.9,skewY:19.3,x:221.2,y:434.4,startPosition:6},0).wait(1).to({skewX:15.6,skewY:16,x:263.4,y:459.9,startPosition:7},0).wait(1).to({skewX:12.2,skewY:12.6,x:305.2,y:481.5,startPosition:8},0).wait(1).to({skewX:8.8,skewY:9.2,x:347.9,y:498.3,startPosition:9},0).wait(1).to({skewX:5.4,skewY:5.9,x:390.5,y:509.9,startPosition:10},0).wait(1).to({skewX:2,skewY:2.5,x:432.7,y:516.8,startPosition:11},0).wait(1).to({skewX:-1.4,skewY:-0.8,x:475.3,y:521.2,startPosition:12},0).wait(1).to({skewX:-4.7,skewY:-4.2,x:519.7,y:526.2,startPosition:13},0).wait(1).to({skewX:-8.1,skewY:-7.6,x:567.4,y:534.7,startPosition:14},0).wait(1).to({skewX:-11.5,skewY:-10.9,x:618.6,y:548.9,startPosition:0},0).wait(1).to({skewX:-9.7,skewY:-9.1,x:661.1,y:530,startPosition:1},0).wait(1).to({skewX:-7.9,skewY:-7.3,x:705.4,y:516.5,startPosition:2},0).wait(1).to({skewX:-6.2,skewY:-5.5,x:748.6,y:508.6,startPosition:3},0).wait(1).to({skewX:-4.4,skewY:-3.7,x:791,y:505.9,startPosition:4},0).wait(1).to({skewX:-2.6,skewY:-1.9,x:832.8,y:507.4,startPosition:5},0).wait(1).to({skewX:-0.8,skewY:-0.1,x:873.9,y:511.7,startPosition:6},0).wait(1).to({skewX:1,skewY:1.7,x:915,y:517.2,startPosition:7},0).wait(1).to({skewX:2.8,skewY:3.5,x:956.5,y:522.3,startPosition:8},0).wait(1).to({skewX:4.5,skewY:5.3,x:999.2,y:526.2,startPosition:9},0).wait(1).to({skewX:6.3,skewY:7.1,x:1043.3,y:527.7,startPosition:10},0).wait(1).to({skewX:8.1,skewY:8.9,x:1088.8,y:526,startPosition:11},0).wait(1).to({skewX:9.9,skewY:10.7,x:1135.6,y:520.9,startPosition:12},0).wait(1).to({skewX:11.7,skewY:12.5,x:1183.4,y:512.2,startPosition:13},0).wait(1).to({skewX:13.5,skewY:14.3,x:1232,y:499.8,startPosition:14},0).wait(1).to({skewX:10.3,skewY:11.2,x:1275.1,y:522.8,startPosition:0},0).wait(1).to({skewX:7.1,skewY:8,x:1319.3,y:541.9,startPosition:1},0).wait(1).to({skewX:3.9,skewY:4.8,x:1363.9,y:556.5,startPosition:2},0).wait(1).to({skewX:0.7,skewY:1.6,x:1408.7,y:566.6,startPosition:3},0).wait(1).to({skewX:-2.5,skewY:-1.5,x:1453.2,y:572.4,startPosition:4},0).wait(1).to({skewX:-5.7,skewY:-4.7,x:1497.5,y:574.9,startPosition:5},0).wait(1).to({skewX:-8.9,skewY:-7.9,x:1542.2,y:575.6,startPosition:6},0).wait(1).to({skewX:-12.1,skewY:-11.1,x:1588.5,y:576.4,startPosition:7},0).wait(1).to({skewX:-15.3,skewY:-14.2,x:1637.6,y:580,startPosition:8},0).wait(1).to({skewX:-18.5,skewY:-17.4,x:1690.3,y:588.7,startPosition:9},0).wait(1).to({skewX:-14.9,skewY:-13.8,x:1725.9,y:555.1,startPosition:10},0).wait(1).to({skewX:-11.3,skewY:-10.2,x:1764.3,y:528.4,startPosition:11},0).wait(1).to({skewX:-7.7,skewY:-6.5,x:1803.9,y:506.6,startPosition:12},0).wait(1).to({skewX:-4.1,skewY:-2.9,x:1844.7,y:488.1,startPosition:13},0).wait(1).to({skewX:-0.5,skewY:0.7,x:1886.6,y:472.3,startPosition:14},0).wait(1).to({skewX:3.1,skewY:4.3,x:1929.6,y:458.6,startPosition:0},0).wait(1).to({skewX:6.7,skewY:8,x:1973.7,y:446.7,startPosition:1},0).wait(1).to({skewX:10.3,skewY:11.6,x:2019.1,y:436.4,startPosition:2},0).wait(1).to({skewX:13.9,skewY:15.2,x:2065.7,y:427.7,startPosition:3},0).wait(1).to({skewX:17.5,skewY:18.8,x:2115,y:421.4,startPosition:4},0).wait(1).to({skewX:21.1,skewY:22.5,x:2161.4,y:414.7,startPosition:5},0).wait(1).to({skewX:19.5,skewY:20.8,x:2200.7,y:446.7,startPosition:6},0).wait(1).to({skewX:17.9,skewY:19.2,x:2241.5,y:476,startPosition:7},0).wait(1).to({skewX:16.2,skewY:17.6,x:2283.7,y:502.2,startPosition:8},0).wait(1).to({skewX:14.6,skewY:15.9,x:2327.3,y:524.9,startPosition:9},0).wait(1).to({skewX:13,skewY:14.3,x:2371.9,y:543.6,startPosition:10},0).wait(1).to({skewX:11.3,skewY:12.7,x:2417.2,y:558,startPosition:11},0).wait(1).to({skewX:9.7,skewY:11,x:2462.9,y:567.9,startPosition:12},0).wait(1).to({skewX:8.1,skewY:9.4,x:2508.4,y:573.1,startPosition:13},0).wait(1).to({skewX:6.4,skewY:7.8,x:2553.3,y:573.9,startPosition:14},0).wait(1).to({skewX:4.8,skewY:6.1,x:2597.2,y:570.4,startPosition:0},0).wait(1).to({skewX:3.2,skewY:4.5,x:2639.9,y:563,startPosition:1},0).wait(1).to({skewX:1.5,skewY:2.8,x:2681.2,y:552.2,startPosition:2},0).wait(1).to({skewX:-0.1,skewY:1.2,x:2720.8,y:538.5,startPosition:3},0).wait(1).to({skewX:-1.7,skewY:-0.4,x:2759.2,y:522.1,startPosition:4},0).to({_off:true},1).wait(162));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.8,963.5,955.6,213.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;