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


(lib.mouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().bs(img.NewPatternSwatch6).ss(5,0,0,4).p("AqekkQBHAQCZgnQAggICkgzQAZgIAUAKQANAGARAUQARATAIAEQAPAHASgLQARgMATAbQAIAMAdA8QAcA4AWAgQAkAxArATQAYALA2AaQAzAZAmANQBvAkBhgbQAqgKAvg1QA0g5AfgOQAQgIBEgQQBFgRBFgbQBGgaAnhZQAohYAWABQAXACgOBCQgZB9ggBhQg3CihAAtQmbEliZg3Qg8gViAgEQiDgDg5gRQgkgKgxgVQhGgegDgBQgjgOgUAAQgYABgJATQgJASATAkQAFALAiA0QAWAigBANQgCARgqgKQhKgPmJljQgoghg1g7QhAhGgsg9Qh4ioBcgMQBUgKBbAhQAZAKAyAUQAsATAiAIg");
	this.shape.setTransform(-7.7,8.4,0.999,0.999,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0)","rgba(231,207,141,0)","#E7CF8D","#E8D6A9","#E9DBBF","#EADECE","#EBE0D7","#EBE1DA"],[0,0.471,0.471,0.514,0.561,0.612,0.671,0.757],-50.7,69.1,33.4,-129).s().p("AoEKsQh9gaqepcQhDg6hbhkQhth4hKhoQjNkeCcgUQCPgSCbA6QArAQBUAjQBNAfA5ANQB5AdEFhDQA2gOEYhXQAqgOAiASQAWAKAdAhQAdAhAOAHQAZANAegUQAegUAgAtQAOAVAxBmQAwBhAmA2QA9BSBKAhQApASBbAuQBXApBBAWQC+A/ClguQBIgSBQhaQBXhhA2gZICUg+QBZglA2geQChhWBoiQQBLhmAmADQAmADgWBvQgrDXg3CkQhdEVhtBNQq9HykDhdQhngkjagGQjhgFhhgdQg9gShUgjIh7g1Qg9gXghAAQgpAAgQAiQgPAfAgA9QAJARA5BZQAmA7gCAVQgCATgfAAQgRAAgZgGg");
	this.shape_1.setTransform(-7.7,8.3,0.587,0.587,12.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#57350E","#654319","#8E6F3A","#B19356","#CCAF6B","#DFC37B","#EACF84","#EED387","#E6C14C","#E1B724","#E3BE42","#E5C76A","#E7CF8D","rgba(231,207,141,0)","rgba(0,0,0,0)"],[0,0.008,0.031,0.051,0.075,0.098,0.122,0.145,0.247,0.365,0.388,0.427,0.471,0.471,1],-50.7,69.1,33.4,-129).s().p("AoEKsQh9gaqepcQhDg6hbhkQhth4hKhoQjNkeCcgUQCPgSCbA6QArAQBUAjQBNAfA5ANQB5AdEFhDQA2gOEYhXQAqgOAiASQAWAKAdAhQAdAhAOAHQAZANAegUQAegUAgAtQAOAVAxBmQAwBhAmA2QA9BSBKAhQApASBbAuQBXApBBAWQC+A/ClguQBIgSBQhaQBXhhA2gZICUg+QBZglA2geQChhWBoiQQBLhmAmADQAmADgWBvQgrDXg3CkQhdEVhtBNQq9HykDhdQhngkjagGQjhgFhhgdQg9gShUgjIh7g1Qg9gXghAAQgpAAgQAiQgPAfAgA9QAJARA5BZQAmA7gCAVQgCATgfAAQgRAAgZgGg");
	this.shape_2.setTransform(-7.7,8.3,0.587,0.587,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.5,-52.2,209.1,104.5);


(lib.Path_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkLAMIIXg0QgvAKgjAdQgRAMgMAQIgJAOg");
	this.shape.setTransform(26.9,4.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.6,53.7,8.3);


(lib.Path_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#202020").s().p("AhID/QgJgBgMAAQgMABAJABQgLgBAGgBQAaAAgBgBIgZgCQgPAAAEgCIAEAAIAGABQALABgDgBIAHAAQAGgBgMgCQgOgCgBgBQAMAAAHABIANABIgDgBQAIACAWgCQgBgCgcAAIgJgFQgCgCAMgBIgIgBQAGAAABgCIADgCQAQABgDgCIgPgCIAOAAIgIgBIAJgBIgNgBIADAAQgCgCgWACIABgBQgOABgGgEIAgABQAHABgBgCIgUAAIAIgCIAEABIAPgCIgUAAIAQgBQAKAAAHABIAHgBQAAAAAAAAQAAAAAAAAQgBgBgBAAQgBAAgBAAQgHABgIgCQgIgCgOABQAHgBgUgCIgGgCIgJgBIAMAAIASADQgBgCATABQATAAABABQAPgBgDgBIgVgBIAUgBQABAAAAAAQABAAAAAAQgBAAAAAAQgBgBgBAAIgLgBQgGABgUgBIgYgBIATAAIAMAAQAHgCgWgBIABgBIgQAAIAJgBIgUgBIAIgDIAMgCIgJAAIARgBQAMAAgBgBQgJAAgEgBQgEgCgMAAQAQAAgCgCQgCgBARABIgHgDIgNgBIAKAAIgGgBIACgBQAGAAACgCQACgBAQAAIgbgBIANgBQABAAAAgBQAAAAAAAAQgBAAgBgBQgBAAgCAAQgGgDgIAAIAPgBQgDAAgCAAQgCAAAAAAQgBgBABAAQABAAABAAQAKgCgDAAIAHAAIgDgCIgfABQgDgCARgBQAPgCAPABIgSgDIgEABQADgBgSgCQgVgCgCgCIgMABQgEABgHgBQgBAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAAAQACgCAJAAQALAAAIgBIAQAAIgKgBIgQgBIAmAAIABgCQgNAAgDgBIAJgBQAAAAABAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAGAAAFgCIgKgBQgCAAAAAAQgBAAAAAAQABAAABgBQACAAACAAIAFABIAKgBQgJAAgHgBIgKgBQgOAAAIgCQgBABARAAIABgCQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAIgWgBIACgCIgJAAQgGAAgDgBIATAAQAMgBgCgBIAIABIgEAAIAQAAIgdgCQgQgCAAgCQgBAAAAgBQAAAAAAAAQABAAABgBQABAAABAAQAEgBgJAAIgEgDQAHAAgBABIAGABQAAgBABAAQAAAAAAAAQAAgBAAAAQAAAAgBAAQgBgBAGgBIACACIAMAAQADgBgIgBIgMgDQgGgBgEABQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAgBgBIgCgCIgQgBQgMABAHABQAHABgGABQgJAAABgCQAAAAAAgBQABAAAAAAQAAgBgBAAQAAAAgBAAIAegCQgEgBAFgBIAGgBQgFABgHgCQgDgBAdAAIALAAIgOgCIgOABQAGgDgIAAQABAAABAAQABAAABAAQAAgBAAAAQABAAgBAAIAHAAIgEAAIALABQAOAAACgCIADgCIAEABQABgBAAAAQABAAAAAAQgBAAgBAAQAAgBgCAAIgMgBQARAAgGgBIALAAQAGgCgPgBQgNgBAKgBIgXABIgLgBIAGgDQAEgCgKgBIAGAAQABAAAAAAQABAAAAgBQAAAAgBAAQAAAAgBAAIgKgCIAMABQACAAABAAQABAAABAAQAAAAAAAAQgBgBgBAAIgGgBIgMAAIgIAAQgZgBATgBQgBABAAAAQgBAAABAAQAAAAACAAQABAAADAAIABgBQAAAAAAgBQAAAAAAAAQgBAAAAgBQgBAAgBAAIAMABQAFgBgGgBIgIgBQAKAAACgBIgNgBQAGgBARAAQgBgBgMgBIgQgBQAJgBACgCQADgCAGAAIgGgBQgEgBAFgBQgHgBgVgBQgIABALABQACAAABAAQAAAAAAAAQgBABgCAAQgBAAgEAAIgHgDIABABQAGgCgcgDQgagDAKgCQAJgBAGABQADgBgJAAIgJgBIAAgHQALACAEgCIAJgCIgQAAQAJgBAFABIgIgCIAaAAIgGgDIgSgDQADgDgJgHIgNgKQgCAAAMgBQAJgBgKgBIALAAQACgFAHgCIgQABQAOgCgCgBQgJABgEgBQgBgBgBAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAGACQADABAJgBQACAAABAAQABAAAAgBQAAAAAAAAQAAAAgBAAIgMgCIAMABQgGgBAKgCQAJgBgJgCIgGABIgGAAQgHgBAIgDQAIgDgHgCIAHAAIgCgCIARAAIAFAAIgCgBIgWAAQgKAAgFgBQANAAABgBQABgBAGAAQADgDgJgDQgMgEgBgCIAfgBIgIgBIADAAQAGgBgIgBQgIAAgFABIAEABIgHAAQAFAAgFgCQgEgBAKgBIAHAAIgBgBIgQAAQAEgFgHgJIAHgEQAEgCAIAAQAEgCgOgFQAEgBgDgCQgCgCAOAAIgOgCIAIAAQgBAAgBAAQgBAAAAAAQAAgBAAAAQABAAAAAAIAFgBIgPAAQABAAAAAAQABAAAAgBQAAAAgBgBQAAAAgBgBQgBAAgBgBQAAAAgBgBQAAAAAAAAQABgBAAAAIAEAAQgDAAgBAAQgCgBAAAAQgBAAAAAAQABAAABgBIANAAQgTgDAHgGQAIgGgGgDQAOgCgHgDQgIgDAYgCQAFgBgMAAQgNAAABABQgEgFAHgMQAHgLgEgGQACgBAKgMQAGgIAQgDIgNABQgCgBAIAAIANAAIgRgDIgHABQAEgCACgHQACgGATgDIgKAAQgBgBAUgEQARgDgJgCIAHABIAKAAQgIgDAagFQAhgFAGgDIAQABIgEgDQAMgBACACQAFgBgMAAQgMgBAHgBQAKAAACgCIAFgBIgGgBQgFAAAFgBIACABIAFAAIgCgEIAKgBQAEAAADABQAMgBgHgBQgHgBAOgBIgLgCIAKAAIgBgBQAUAAgBgBQgCgBgGABQgEAAADgBQASABgIABIAMgBQATAAgBgCIACABQAHgBgigCQAMgBAEgBIgTAAQABAAAAAAQABAAAAAAQAAgBAAAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQABAAABAAIADABIAagBQASAAAEgBQAGABgGAAQgHABACABQAPgBAUACQBWALAEArQACAWgPATIgMACQgFABAFAAQgOAAgBADQAJAAAAACIAAACIgEAAQgGAAAIACIAMABIgPACQACADALABQgFAGAAADQABAFAMADQgQABgBACIABAEIgNAAIAQACIgUACIANAAQgCAAAAAAQgBAAAAAAQgBABABAAQAAAAABAAQAEABgRAAQARADAQAFIgJgBQAJACgQABQgPABAQABQAJAEgFAEQgDACgMAEIAIACIAMgCIgHADIgEAAQgCACAGADIALAFQgLAEgEAHQgDAHgQADIAbABIgcABQAFACAWAAIgPABQAMAAgHACQgHADARAAQgJAAgDACQAAAAgBAAQAAABABAAQAAAAACAAQABABACAAIgLAAQgJAAADABQANgBADABIAGACIgJABQgKABADABIgFgBQgBAAgBABQAAAAgBAAQAAAAAAAAQABABAAAAQADABAGABIANAAIgWAAQgFABAFABQAGABAJgBIAGAAIgFAFIgGAAIgHABQAQAAAHADIgQABIAGAAIgFAAIAOACQgcABATACIAKgBIgGABQgDABAJABIgNAAQgFACACADQACACAHABIgCAAQgEABAVADQAAAGgLAIIAOABIgNAAQADACgOAEQgOAEABACIAMAAQAMACgYAAIAUAIQgJAAgCABIgFABQARABgGABQgHACAGABIgDgBIAHADIgHAAQgBAAAAAAQAAAAAAABQAAAAAAAAQABAAABABIAEACIgKAAQgGAAABACIAYACQABAAAAAAQAAAAgBAAQAAAAgBAAQgCABgCAAQgLABAJABIgHAAIAAACIgDgBQADABgEABQgEACAGABIgEAAQAGAGgDACIgHAAIARADIgLgBIgBACIgFAAQANABgOACQgRADADABIgEAAIgJABIgFACQAZABADABIgOgBIABACIgCgBIgHABQABAAgBAAQAAAAAAABQAAAAgBAAQgBAAgBAAQACABAGgBIAEABQgBAAgCAAQgBAAAAAAQgBAAAAABQABAAAAAAQAEACgMAAIAMAEIgJAAQASACgHABQgBgBgFAAQgGAAAIACQAGACgLAAQgCACAOAAQgBAAgBAAQgBAAAAAAQgBAAAAABQAAAAAAAAIACADIgNgBQABAAABAAQABAAAAAAQABAAAAABQAAAAAAAAIgCABIgKgBIgBADQgBAAAAAAQAAABABAAQAAAAABABQAAAAABAAIAGAAQgKACAQAGQgKgCgFAAQACACAJAAIAOACQgIgBgMABIARACIgOgBQAHACgRAGQgPAEAVACIASAAQgJABgCABQgCACgPAAIAHABIgOAAIAVABIgPAAIAHABIgLAAQALACgJAAQgJABAIABIgHAAQAJABgHACQgHABACABIgKAAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAAAABAAIADACIgGAAIAIACIgHgBQAGACgBABQgBAAAAAAQABAAAAABQABAAAAAAQABAAACABQgLgCgGACQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAABAAQAAABABAAIgJAAQgCABASAAQgLABACABIAIAAQgGAAABACQAAABgKgBQgEAAAEABIAGABIAKgBIgDAFIgQgBIAFACIgDgBQgMABAJACQAIACgOABIAHAAQABAAABAAQABABAAAAQAAAAAAAAQAAAAAAAAQgBAAAAABQAAAAABAAQAAAAABAAQABAAABAAQgHAAAAACQAAAAAAAAQAAABAAAAQgBAAAAAAQgBABAAAAQAMAAABACIgMACIgUAAQAJABADADIAEADIgOgBQgFAAAIADQAIACgMABIAMAAQAAABgMAAQgKAAAFABIALAAQABAAAAABQABAAAAAAQAAABAAAAQABAAgBABIgIAAQgCABgFgBIADABIgDAAQABACAKAAIgJAAIAQABIgVABIALABIgEAAIAHACIgOgBIgRAAQAXACgIABQgEgBgIABQgJABgJgBIAHADIAMADQgWAAAIACIAJADIgJAAIAEADQgEgBgGAAIgKABIARACIgXgCQgHABAGABIgCAAIABACIgKgBIgKAAIAHACIgFgBIAXADQALACgMABQgCgBgZgBQAGABgOAAIAWABQgDABgLgBIgRAAIACABQABABAGAAIgEAAIgKAAQgEABAXABQgNACgBABQgBABgMABQgfgEAYAAgAh0BTIgNAAQABAAAAAAQAAAAAAgBQgBAAgBAAQgBgBgCAAIATACIAdABIgGAAIgKAAIgQABIABgCgACiBPIAAAAg");
	this.shape.setTransform(20.9,28.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#202020").s().p("AgDAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQABABABAAIgGgBg");
	this.shape_1.setTransform(9.8,49.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,2.4,41.8,51.9);


(lib.Path_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiiifIEgDHIADAyQAIAmAaAgg");
	this.shape.setTransform(16.4,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32.8,32.1);


(lib.Path_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#58595B").s().p("AiZA2QgjgngXhbQAVAvArAnQBXBSBxgbQAjgRAlggQBKg+AKhJQAIA7gRA7QgjB1h+ADIgLABQh7AAg6hCg");
	this.shape.setTransform(21.2,12);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.4,24);


(lib.Path_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AArIVQhIhwgShjIgRkJIiDqqQAsDMBADbQCSHzCJBiIgPANQgSARgOAXQgtBJAKBpQgigkglg5g");
	this.shape.setTransform(20.8,68.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.2,5.9,39.3,125.4);


(lib.Path_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgwjDIBhESIgTArQgKAlAEAlg");
	this.shape.setTransform(4.9,19.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9.9,39.4);


(lib.Path_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AglBHQgEgegnAQIChihIh5DRQAGgSgDgQg");
	this.shape.setTransform(8.1,10.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.1);


(lib.Path_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB6mRQAEBRBOAcQAnANAmgCIiNA6QhJALjOFmQhKCAhDB/g");
	this.shape.setTransform(33.4,40.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.3,0,56.4,80.4);


(lib.Path_12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D1D3D4","#CCCED0","#B1B3B6","#A7A9AC","#58595B"],[0.004,0.051,0.337,0.506,1],-94.2,0,94.2,0).s().p("AgMHxQiHgBjlhNQjyhRhkhXQgqglg3gkIhLgxQghgXgLgVQgMgYAKghQBphMCKhTQEUimCngWQBWgMB7gjQBFgVCOgtQEBhPBvATQB6AWCBArQBAAWAoARIAbASQAZAagEApQgNCEkwDhQiqCWh9BlQjuDAhnAAIAAAAg");
	this.shape.setTransform(94.2,49.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,188.5,99.5);


(lib.Path_12_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E3D1C").s().p("ArjXrQi2j2h0ngQgnijgZkaQgck1ALjpIGus4QA6hIBahVQCzisCghGQBRgkCJgLQBUgGDLgIQGzgYGAieQhVBShPBlQieDKAeBfQgtAYgrAtQhYBaAHBqQg2AqgvA3QhcBuAmBBQgsAqgsBBQhZCDACBzQgrAignA0QhNBnAUBbIgdAUQghAdgaAfQhUBlAZBdIgXATQgZAZgVAcQhFBaAQBYIgWAJQgbANgVAVQhFBDAHB2IgUANQgYATgTAaQg/BUACB/QgIgBgMADQgXAFgTAPQg8AwAMCDQgHgCgKAAQgTAAgPALQgwAkALCEIgLATQgOAZgJAdQgfBgAQBvQhEgbhch7g");
	this.shape.setTransform(112.3,166.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,224.6,333.1);


(lib.Path_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah6BoIBHlGQAaA6BYAjQAtARAoAHIh2ArQhagBg1COIgJAZIgZB3QAGg7ATg8g");
	this.shape.setTransform(14.9,22.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29.8,44.6);


(lib.Path_11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(143,145,148,0.267)","rgba(107,111,113,0.494)","rgba(63,69,70,0.765)","rgba(36,43,43,0.933)","#1A2121","#5A5B5D"],[0.2,0.341,0.537,0.686,0.776,1],-57.7,-7.8,66.2,14).s().p("AhtMjQhJgGhAgRQhBgRhEgeQg/gcgziDIgzhmQgvhYgLgzQgNg6AQhGQALgsAZg4IAtheQA3hygFhaQgBgIgRhtQgMhIALgzQAJgnAhg6IA2hfIArhgQAeg3AngTQAmgTBPAJQApAEBKAQQBhAWBVB1QA+BVA0CBQAOAkAaBKQAZBCAZAsQAWAkBMBfQBBBRAZA4QBLCuAHCMQAJC6h3BhQh7BmikAjQhaAThrAAQg6AAhCgGg");
	this.shape.setTransform(69,81);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.1,0,121.9,161.9);


(lib.Path_11_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("ArMC5IgEguQArAGBBgCQCBgGBrgtIDRhZQCqhFCNgsQGliECcBfQhAgIhgAGQjCAKimBCQkLBpjrBJQkMBThvAAQgUAAgQgDg");
	this.shape.setTransform(72.2,18.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144.3,37.7);


(lib.Path_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkuFkQCcjfFtokQAeBPAzAhQAaARATAAIhcByQhOgjk2FtQhPBdhgB6IgiAqg");
	this.shape.setTransform(34.6,41.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,69.1,83.2);


(lib.Path_10_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("ApqA1QGng0CeghQCpgnCVgEQDagHB4BHQhBgGhYgCQivgEhzAUQlcA6guAGQh+AQheAAQhyAAhCgYg");
	this.shape.setTransform(61.9,7.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,123.8,15.5);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADTkHQAcBaAuAnQAXAUASABIhVBNQh8gukCDBQhjBKhVBPg");
	this.shape.setTransform(37.8,26.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.2,0,65.2,52.9);


(lib.Path_9_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AAlAlQntgzg/gUIADg0QDXAPDtAeQHYA4BwBIQjrgXj4gbg");
	this.shape.setTransform(52,8.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104,17.5);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhvBBQAagVAYgRIjYDIQBJhWBdhMgADUjiQAFBAAfAVQAQALAOgCIhwBmQhRgviSBog");
	this.shape.setTransform(27.9,22.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55.8,45.6);


(lib.Path_8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#202020").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIgBABg");
	this.shape.setTransform(111.1,261.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#202020").s().p("AAAgBIAAAAIAAADg");
	this.shape_1.setTransform(111.7,254.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#202020").s().p("AgCACQACgCADgBIgDACIAAABIgCAAg");
	this.shape_2.setTransform(85,178.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#202020").s().p("AgDgBQADABAEgBIAAADg");
	this.shape_3.setTransform(96,206.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#202020").s().p("AIqWdQgHgHAKgHQgJgBgHAHQgGAFADAEIgDgEQgDgEACgCIANgEQAHgEgEgIQgFgEgQAEQgLACgBgNIACgCIADAEQABADAEAAQAJgBgEgEQgDgEAIAAQACgIgLgFQgOgHgBgEQAHgHAHAFQAIAFAEgEIgEgIQAGAHAGgHQAGgHADgBQgJABgCgEQgBgDgLAFQgLgSgDgJQgGgQAOgKQgGgBgCADQgBACgFgEQAEgFgBgJIgCgOQANAAgEgIQgEABgDgBQgFgBgCgGQAGgCAFgFQgBgFgHACIAGgGIgMgHIACAAQgDgJgGAFIgJALIgBgHQgHAGgGgGIgGgNQACAEAJgBIAPgBQAEAAgBgEQgBgGABgBQgDgEgEAEQgGAEgCAAIAEgKIADACIAHgHQAEgFgCgDQgDgCgFAEQgEAFgDgBQAEAAAIgJQAGgHAHAEQAFgBgBgFQgBgEgDAAQgFAEgJgJQgIgIgKAHQACgCgGgEIgJgGQgIACgBAEIgEgBIgJAKQADgIAEgEQAEgDAKgCQgCgGgEgBQgFgBgEgFQAJAEAAgFIAJAEQAGADADAFQgDgKAPgCQAPgCACAFIAFgJQAEgFgDgDIgRgCIAPgGQABgEgEgDQgEgDgFACQgDAIgRgCQgSgCgBABIAIgEQAFgCAAgCQAGACADgEQgDgCgBgIQgBgEgKACIAAgFQgDAEgEgCIgGgDIAGgFIgSgEIAEgRQACgKAEgEIgHgCIANgFQAIgEgBgEQgIAAgFgIQgFgIgJABQALgFgDgIQgDgGAOgCQgFgKgEgEQgGgHgNACIAOgCQgFABAAgEQABgFgBgCQAFgBgBgJQAAgKANgDQgFgJgRAMQAHgIABgDQACgGgHgGIgGgHQgFgFgEAAIgIAGIASgPQgJABAEgIQAFgKgDgEQAEACACgCIgFgKQgGAAgHAGQgHAGgDAAQgFgLALgNQALgLALgBIgJgEIgIgHIgDAFQABgJgQgGQgTgHgFgKQgFABgCAGQgCAGgGgBQgFgGgBgIQAAgJAGgFQAJABAFgGQAFgGAHAAQgBgFgIABQgLAAgDgBQAEACAZgKIgCgPIgHACQgEACgCgCQAEgCABgFQABgFgDgBQADgBABgGIABgIIgJgEQgGgCAHgEQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAIADACIAFgLQgGAFgIgHQgGgHgDAGQgGgBgCgDQgBgEABgEQABAEAEgBIAIgDIgBgKQgBgEgCgEQgFgDgEACIgIAFIgDgPQgDgCgEAEQgEAEgEgFQAGACAIgHQAJgHgDgFIAGAAQACAAgEAFQAHAAAFgGIgagIQgPgEgEgMQgDgDACgKQACgGgKABIACgBIgHgMQAFgBABAFQABAFAFgCQAAgGgDgGQgCgEADgGIAEAHQADAEAHgEQAAgIgIgFQgMgIgCgDQgFABgDADQABgFgEgIQgGgKgBgDIgNAAQgGAKAGAEQAIAEgDAHQgIAAgCgJQgCgKgDgCQAIgDAGgFIAGgJQgFgFACgGIADgLQgEgCgBAEQAAADgGgEQgFgHAWgHQAIgDAAgBQAAgCgNgCIgKAGQgBgOgIAAQAGgCgDgEQgCgEAHACIgDABQAAAAAAABQABAAAAAAQAAABABAAQABAAAAAAIAHgBQAKgFgBgIIgCgNQAAAAAAAAQABABAAAAQABAAAAAAQABABABAAQAAgHgEAAQgIAAgFgFIADgBQAIgEgFgEQgFgCgFAEQgIAFgDABIgDgIIgNADQABAAAAAAQAAgBABAAQAAAAgBgBQAAAAAAgBQgBgDgFgDQAGADAMgBIAYgDQgDAEADABQAEACAEgCQACgJgOgEQgMgEAGgHIgKAFQgEACgBAFQAAgBgGgBQgHgBgCgBIADABIgCgSQgBgJgJgBIAFgCQgBgIgCgBQgGgBgGgDIALABQAGgEgGgDQgHgEAAgCQgHABgCAEIgEAGQAAgBgJgBQgHgBAGgHQgBAJAHgDIgDgMQgCgEgEgDIALABQABgHgGgBQgHgCgCgDIAFgCQACgCgBgFIgKADQABgFACgCQAGgCAEgGQgDgFgLAAQgMAAgDgBQAFgHgDgKQgCgLACgGIgHgEQgFgCABgFQgFADgFgCQgGgDgIAEQgEAHAKgBQAHAAgIAGQgBAAgEgDQgDgEgEgBIADABQgCgNgbgDQgZgCAAgQQADgDADABQADAAACgCQAAgFgHABQgJACgBgEIgTgeQAMADgBgIQgBgMACgBIgNAEQABgFAEABQADABACgDIgLgEIARgMIgNgLQgJgGgLACQgKgVgggkQgkgsgJgOQgFgGAFgLQAEgJgKgBIAIgDIgKgVQgFgNABgJQgEgBgDAEIgEAGIAEgJQACgHgEgDQgFAGgHgGQgHgFgCgIQADACAGAFQAFAEAGgEQABgJgFgCIgMgEIALgBQgIgGADgMQADgLgMgHQgEABABAFQABAEgDABQgKgIgCgUQgCgWgKgIQAFACABgCIgGgJQACABAEgDQAEgEADAAQAEgCgCgDIgEgFQgHgBgJAIQgGAHgIgHQAMgCgDgIQgDgJAEgBQgDgQgPgQQgTgVgEgJQAFgCAFgFIALgIIgJgDIADgBQACgIgHgBQgHgBgDAGIAFAEQACACgFAFQADgEgHgIQgHgHAGgGQACAAAEgCIgEgHIgMAFQgIgggagwIgCgVQgBgMAFgEQgBgKgJgLIgOgQQACgEgHgLQgGgKAKgEIgOgEIAGgCQgFgDACgCQACgEgCgDIgKAEQABgEgIgKQgIgKgBgHIADgBIgGgEQgDgBABgEIAJgFQgWgKgJgeQgKgjgLgLQAFgNgOgNQgNgLALgTQABgGgKADQgJAEAEAGQgOgUgihCQgeg4gYgdQgEgNgfg6QgWgqABgWQgDABgBAEIgCAGQgFgEAFgEIAJgGIgKgFQgGgDgFAAIgDAHQgDgKgXgmQgSgcADgYIgHAFQgGgIADgZQACgWgPgIIAJADQAEABADgGQgRgNADgjQAEgtgDgOQABACAEgBQAEAAAFgCIgLgLQADgFADADQAEAEADgDQAAgIgKACQgKADAAgKQAIgEgDgHQgCgIABgCIgGgBQgGAAACgEQAFADACgEIgNgTQADgBADgFQACgDAFADQAIgIgJgEQgJgEAJgHIgOgGQABgBAAgBQABAAAAgBQABAAAAAAQABAAAAAAQABADAEgCIgGgJIAJgEQAFgDgDgDQgDgEgDAFQgCAEgBgHQgDgEAJACQAIADgBAFIAEgMIABACIAHgFQAFgEgDgFIADACQACgKgMABQgPACgEAAQAGgHAAgJIgQAHQAFgCgEgDQgBAAgBgBQAAAAAAgBQgBAAABAAQAAgBAAAAIAGAEQADgHAOgGQANgFAAgGQAFgBgDAFQgDAHAEACQAFgFAJAAIAQAAQBWAYCODQQBHBoA4BpIgCANQAAAKAIgEQgFAEgCAFQgBAGAEAHQAIAAAEAGIAHAKIgDABQgCAHAJADIAPAGIgFAOQALAPAKAAIAbA0QARAeATALQgKAJAHAPIANAUIgJAGIAPACQgEABgBAHIgCAMIAKgDQgFABAGAFQAGAEgNAFQAPAIALAJIAVASIgJABQAKAEgHAMQgJAKAQAEQANAQAGAZQAEAPACAcQABACADADIAGAEIADgSIADAWIgDgBQADAOAMAQIAUAZQgBAWAOAsQAMAogEAXIAWgEIgKAFQgGAEgCAFQAFAGARgGIgIAMQAKgDgBAOQAAAOANgCQgGAEABAIQABAIAHAAQAAABgIAEQgGADAEAEQAJgFADACIAJAGQABADgFAIQgFAIAEADIgFgBQgCADAEAGQAFAFAGACQADAAADgEQADgEAEABIgIAIQgFAFgGgCQgCAFAGADQAGAEAGgEIADgHIAJAgQAAgBgBAAQAAgBgBABQAAAAgBAAQgBABAAAAIgEAGQAIgBAIAEIAJAFIgKAKIAFgBIgDAEIAOADQgFAFgBAFQgBAHAIAAIAEgIQABACgBAHQAAAFAFAAIgCABIgFACQAEAXAaAYIgCAAQABAHAJADQAFADAKACQARAfAOAjIAMgCIgIAGQAJALAGAaQAFAeAGAJIAJgGQgCAHAGACQADABgIAHIASARQALAKAJAGQgGAEABAGIACALQAPgBgBAIQgBALAIADIgEgBIAIAHIAHAGIgGADQABAIAGAEQAGAEACAEQAAAEgGADQgDACADAHQAFgBAHACIAMAEIgBAGQgEANAJACIgGAAIAFALIgDgBQAGAFAAAIQABAIAIAHIgEgBQAUAkACAKIgFACIAUANIgJAAIAEAMQAAAAAAgBQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAgBAAQANAEgFARQgGAVAEAGIgDgBQgFADABAHQABAJgBADQAHgCAHABQAIABADAEIgMgBIAEAIIgCgBQgGACACAEQADAEgDACQAEAGADgFQADgEABAEQgGABAGAJQAGAKgIAFIARAWIgHABIAKAEQAFADgBAFIgCgCQgDgEgDAAQgCAHAKAKQAIAIgIAFQABAEAFAAQAEAAAEgCQgGAEAEAIIAFAOIgKgBQAEABAAAEIAAAGQgEgEgEABIADARQACAKAFAEQAAAAAAAAQABAAAAAAQABAAAAgBQABAAABAAQgEAOAWAcIgHgFQgEgDgDAGQAEAHAIABQAJABAEAFQgCABgFgCQgEgBgEAEIAQAIIgMADQAJALgEAiQgFAeATAIIAOgFQgGAGABAKQABAJgLAGIAGABIgLAHIASABIgLACIAHAFQgGADgDAAQAKAFgFAHQgGAHAIAFQgFgDgBACQAIAGgDAKQgDALADAGIgIAAQgBAEACAEIAEAHIAGgFIgKALIAIAFIgFABQAGAHAAAEQAAAEAGAIQgDgCgEABQgEABgCADQADACABAIQACAJACAEQgCgDgFAFQABAEAFABQAGACAEgDIgBgGQAGADgGAFQgIAFADAFIAJgCQABABACAFIgFgEQgFACADAIQABAGgJgDQgCAEAEAEIAGAGIAHgHIAEAbIgHABQgEgBgCABIAFAFIgDgCQgIAJAJAKQAJAKgJAJIAJgDIgEACQAEABAAAFQgBAEAFAAQgGABACAIQACALgBADQAHABACABQACACACAFQgDAJgEAEIgPAIQAJAFAFAMIAHARQgIAEgEgGQgEAGAJALQAJALgHAKIAKgDQABAFgKACQgHABAFAHIAIgEQAFAKABAGQgFgBgBAFQgBAEgEgDIADAHIgCAAQAEAKAHgEIgGAHIANgBQAAAEgFACQgHACgDAEIAKAFIgDABIAIAGQgFgEgIABQgJAAgDAGQABACAJAEQAHADgCAFQgEgGgFAJQgFAJgIgFIAKASQAEAJAJAHQgRACAIAJIAMAPIgHACIAHASQgEgFgEAFQgGAGgCAAIARAJIgVgDQgGADAIAEIgCABIAEAMQgCABgHgDQgGgDgBAFIADAFQACADADABIgGgBQAGAEARAGQAMAHgIALQgEgGgGAAIgOABQAFAFgFABQgHADgBABIAWgEQgBAHgJACIgNACQABABACAGQACAFAFgDIgDAGQgCACgGgDQgCAIAIABIAMAAQgHAMABAGQABAHgGAMQgJgCgGgGgAJXUFIAAAAgAJdUCIgGADQABgJAFAGgACLENIABAAg");
	this.shape_4.setTransform(65.3,144.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#202020").s().p("AgFgCQALACgBACQgIAAgCgEg");
	this.shape_5.setTransform(92.2,188.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#202020").s().p("AAAgBIABABIgBACg");
	this.shape_6.setTransform(5.7,3.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#202020").s().p("AgCABIgBgFQADgBAAAFQAAAEAEABIgBAAQgEAAgBgEg");
	this.shape_7.setTransform(111.7,262.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.7,0,121.2,289.1);


(lib.Path_8_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("ACQDOQk1i1jwkOIAmhWQBuB+CYCTQEtEjDSBjQhrgkibhag");
	this.shape.setTransform(40.7,33.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,81.4,66.5);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AChBkQhChJihAgQhRAQhEAeIF6jvIAWB9IAcBiQAIAugPAAQgOAAgfgjg");
	this.shape.setTransform(21.7,13.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.3,27);


(lib.Path_7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("ABOHEQi6oTANiYQAWjyiZlsIBSgMQARBDASBgQAlC+ALCPQAOCvB7HtQBbFrA8CsQhLi9hKjRg");
	this.shape.setTransform(22.8,85.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45.6,170.1);


(lib.Path_7_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E3D1C").s().p("ABUMnQiOhzjCk9Qg9hjg6hsIgvhXQA/lag+AsQgfAWgrBbQA3ieg4AMQgcAGgoAmQAGggANgsQAbhYAog7QAog7g3gVQgbgKgkABQAPg3BFicQAihOAghDQDKCMDPCfQGiE+AjBcQAdBKAQCUQARCaAbBNQAWA/gUB9QgWCGg3BqQhCB8haAgQgeALgfAAQhSAAhbhIg");
	this.shape.setTransform(56.1,88);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112.3,175.9);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABkBaQhCgtiFARQhEAIg2ARIEli5QALAsAlAWQASALAQABQAeBCAmA1g");
	this.shape.setTransform(22.3,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,44.6,20);


(lib.Path_6_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E3D1C").s().p("AgMHxQiHgBjlhNQjxhRhlhXQgqglg3gkQg3gjgUgOQghgYgLgUQgMgYAKghQBphMCKhTQEUimCngWQBWgMB7gjQBFgVCOgtQEChQBuAUQB6AWCBArQBAAWAoARIAbASQAZAagEApQgNCEkwDhQiqCWh9BlQjuDAhnAAIAAAAg");
	this.shape.setTransform(94.2,49.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,188.5,99.5);


(lib.Path_6_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E3D1C").s().p("AHAKFQgjgJg2gUQhrgnhcgyQhSgtiAi+QhGhpglg0Qg/hZgzgzQhihohikCQgxiBgehtQARgvBBAEQAUABA2AFQA3AFAvgCQBugGDHBJQC+BFBZBHQBGA3A7EAQAfCEAkDAQBVE6g6BgQgWAkggAAQgKAAgLgEg");
	this.shape.setTransform(54.7,65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,109.5,130);


(lib.Path_6_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AhphXQhckag5j2IAjgbQAUAbBDDSQAuCPA3C7QAfBkCCE/QBBCgA8CLQiyiri2ovg");
	this.shape.setTransform(25.6,64.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.1,128.6);


(lib.Path_6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E3D1C").s().p("AhOLOQgSgVgagkQgyhHglhMQghhEgDjRQgFkFgLhJQgUh9AskBQAViAAahoQAdgjAnAZIArAhQAgAXAeAOQBFAiBeCGQBaB/AbBcQAVBIhCDwQgjB/g3CyQhKEthJA+QgTAQgPAAQgOAAgLgOg");
	this.shape.setTransform(26.9,73.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.2,53.8,146.6);


(lib.Path_6_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AhWi6IBWAsIBXFJg");
	this.shape.setTransform(8.8,18.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17.6,37.6);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABOhUQDDARAwBCQAYAfgQAdIjEAAQhUhCjMAoQhhAUhSAgg");
	this.shape.setTransform(34.6,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.1,0,67.1,17.1);


(lib.Path_5_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AnwFHIH4h4IIYgpIoMBiInWBqgAn1FCIgogmQBnhACxhAQGViSHoAMQjDAVjxAxQnRBgjoCGIAFAFIgUAEIAPgJgApPD/IhghEQAJgHAQgJIgdgbQBOgrBWgrQDIhjA5gGQA5gGIChAIH5hAIxJDHQhUAfhcAlQiNA4g2AdIB5BxIgeAUgAodEcgAsJBQIALgGIgnglQBOgzBgg2QDBhsBegFQAsgDCiglIFDhLQHJhjCSAjQnwBfiuArQg0ANhfAQQhxASg6ALQjUAlhYA0QiLBQh/BFIBLBGIgZANg");
	this.shape.setTransform(80.6,37.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,161.3,74.1);


(lib.Path_5_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#202020").s().p("AAAAAIABAAIgBAAg");
	this.shape.setTransform(10.3,67.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#202020").s().p("AhbF1QgKgDgMAAQgJgBACABQgGgCAGAAQAaAEgBgDQgFgCgUgDQgOgDAEgCIADAAIABACIAFACQALACgCgCQgDgBAJACQAGgBgLgEQgOgEAAgBQALAAAHADQAHADAGAAIgCgCQAEACAKABIANABQgKgCgBgCQgBgBgOgBQgHgGgBgCQgBgEAMABIgJgDQAGAAACgBIADgDQAPADgCgDQgOgCgBgCIAPABQAAgBgIgBIAJAAIgNgEIAEABQgCgDgWAAIABgCQgQgBgEgFQADACAdAEQAHABgBgCQgCgCgGAAIgMgBIAJgBIADABQAQAAAAgBIgLgBIgJgBIAQABQAJAAAIADIAHAAQAAgBgBAAQAAAAAAAAQgBgBgBAAQAAAAgBAAQgHgBgIgDQgHgEgNAAQADgBgRgEIgMgBIgEgBIgOAAQAHgCAXADQgBgBgEgBIgJgDQAKACABgBIASAGQAAgCASADQATACABACQAPAAgDgCIgVgEIAUACQABAAAAAAQABAAAAgBQAAAAgBAAQAAgBgBAAIgLgCQgGABgUgEIgYgEIAUABIALACQgBgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgNgCIACgBIgJgBIgHgCIAJABIgUgEIAJgDQAFgCAHABIgJgCIARABQAMABgBgBQgJgBgDgCQgEgDgMgCQAQACgCgCQgCgCARACQgDgDgDgBQgEgCgKgCIAJABIgFgBIADgBQAGABACgCQADgCAQACQgDgDgYgBIANgBQADAAgGgDQgGgEgIgBIAOAAQgLgBAHgBQAKgBgDgBIAHABIgDgDIgRgBIgOgBQgCgDARAAQAQgBAOACQgLgCgHgDIgEAAQADgBgRgEQgVgFgCgDIgMAAQgDABgIgBQgBgBgBAAQAAgBAAAAQgBgBAAAAQAAgBABAAQACgCAJABQALACAHgBQAIAAAIABQABgBgKgBIgQgDIAmAEIABgEIgQgBQAGAAADgBQABAAAAAAQAAAAAAgBQAAAAAAAAQgBAAgBAAQAGAAAFgCIgJgDQgCAAgBgBQAAAAAAAAQABAAABAAQACAAACAAQgCABAHABIAKgBQgJAAgGgDQgGgCgFABQgOgCAJgCQgBABAQABIACgCQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAIgWgCIACgDIgJgBQgGAAgDgCQAGACANAAQAMAAgBgCIAHABQABAAAAAAQAAAAgBAAQAAABgBAAQgBAAgCAAIARABIgdgGQgRgDABgDQgBgBAAAAQAAAAAAgBQABAAABAAQABgBACAAQAEgBgMgBIACAAIgDgDQAGAAgBABQAAACAGAAQABgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBgBAGgBIACACQACACAJAAQADgBgHgDIgMgEIgLgBQABAAABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBgBgBgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIgQgCQgLABAGACQAHACgGAAQgJgBABgCQABgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAIAeAAQgEgCAFgBIAIgBIgHgBQgCABgFgCQgDgCAdACIALABIgNgDIgPgBQAAAAABAAQAAgBABAAQAAAAAAAAQAAgBAAAAQgBgBgGgBQAJABgBgBQgBgBAHABIgDAAQgCABAMABQAOAAADgBQACgDACAAIADABQAEgCgGAAIgNgDQASACgGgDQgFgBgIAAIgQgBQABAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIgOgBQAAAAAAAAQAAAAAAgBQgBAAgBAAQgBgBgBAAIAxAGQgLAAATACQAGgBgPgDQgNgDAKAAQgTgBgEABIgOgDIADAAIAHgDQADgCgKgCIAHABQABgBAAAAQABAAAAgBQAAAAgBAAQAAgBgBAAIgLgCIANACQACAAABgBQABAAABAAQAAAAAAAAQgBgBgBAAIgGgCIgMAAIgIAAQgYgCASgBQgBAAAAABQgBAAABAAQAAABACAAQABAAADAAIABgCQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIANACQAEgBgGgBIgHgCIAHAAIAEgBIgNgBIAIgBIAPAAQgBgBgLgCIgRgDQAJAAADgCQADgDAGgBIgGgBQgEgCAFAAQgIAAgEgCIgQgBQgIABALABQACAAAAAAQABAAAAAAQgBAAgCABQgCAAgDAAQgCgCgHgCIADABQAGgDgbgEQgagEAKgDIAOABQADgBgIgBQgKgBAAgBIAAgIQALACAFgBIAJgDIgQgBQAHgBAFABIgGgCIAaAAIgHgEQgFgCgNgBQAEgFgJgJQgKgJgDgEQgCgBAMgCQAJgBgKgBIALAAQACgHAHgCIgRABIAKgBQABgBABAAQABAAAAAAQAAgBAAAAQAAAAgBAAQgIABgFgCQgBAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIAGACQAEABAJAAQAGgCgEgBIgLgBIAMAAQgGgBAJAAQAJgCgJgCIgGABQgBABgEAAQgIgCAIgEQAIgFgHgCIAHABIgCgCIARgBIAFgBIgCgBQgIgBgOACQgLABgFgCQAOAAABgBQABgCAFAAQAEgEgKgDQgMgFgBgCIAfgDIgJgBIAEAAQAFgBgHgBIgOABIAEABQACABgIABQAFgBgFgCQgFgBAKgCIAHAAIgBgCIgQABQAFgHgJgKIAHgFQAEgCAIgBQADgCgFgDIgKgEQAFAAgDgDQgDgCAOgCIgNAAIAHgBQgFAAADgBIAEgCIgOACQABgBAAAAQABAAgBgBQAAAAAAAAQgBgBgBAAQgBgBgBgBQAAAAgBgBQAAAAAAgBQABAAAAAAIAEgBQgKAAAFgCIANgBQgUgCAGgHQAHgJgGgCQAOgEgIgDQgIgCAYgGQAEgCgMACQgMACAAABQgEgFAFgPQAEgOgFgGQACgCAGgPQAEgKAQgHIgNAEQgDgBAIgCIANgDIgRABIgHACQAEgDAAgIQAAgGARgJIgKADQgBgBASgJQAQgJgKABIAHgBQADAAAHgDQgJgCAXgNQAegRAFgGQgBABAQgEIgFgCQAFgDACABQACAAAFgCQAEgDgMAEQgMADAGgEQAKgDACgDIADgDIgGABQgEABAEgCIAGgCIgDgEIAJgEQAEgCAEAAQAMgGgHABQgHABAMgFIgLABQAHgEACAAIgBgBQATgHgCgBQgCAAgGADQgDACACgDQAQgFgFADIAKgFIAAAAQAQgHgCgCIACABQAHgGgNAEIgTAHQALgGACgDIgPAGQAAAAAAAAQABgBAAAAQAAAAgBAAQAAAAAAAAQgBAAgBAAQAAAAAAAAQAAAAAAAAQAAgBABAAIAEABQAGgEAQgHQAQgHADgDQAGgCgFADQgGAFACAAQANgHAVgEQBagMAZBKQAMAlgJAlIgKAEQgGADAHAAQgPACAAAFQAIAAABACIABADIgEAAQgFADAHAAIANACIgPAFQAEAEAKAAQgDALABAFQACAIANAEQgQADgBAEQAAADACADIgNACIAQAAIgKADIgIADIALgBQgFABAEABQAEABgRACQATADAQAGIgKAAQALABgQAEQgPADAQABQAKAEgFAHQgDAEgLAIQAAABAIACIAMgGIgHAHIgDgBQgCAEAGAFIAMAHQgLAGgDAMQgCAMgPAGIAagBQgUACgHACQAFACAVgBIgPADQANgBgHAEQgHAEARAAQgJABgDACQgDACAIABIgLAAQgJABADABIAQAAIAHACQAAABgKACQgJACADABIgGgBQgBAAAAABQgBAAAAAAQAAABAAAAQAAABABAAQACACAHABIAJgBIAJAAQgWACgFgBQgFABAFACQAGABAJAAIAGgCIgFAJQgCgBgEABIgHABQAQABAIAEIgRABIAHABIgGAAIAOACQgVACAMABIAKgBIgFACQgDACAIAAIgMAAQgIAHANAJIgBgBQgEADAVAFQgBAJgKAMIAOACIgNAAQADADgOAGQgOAHAAACIANABQgHABAFABQACABgMAAQALAIAIAEQgJgBgCACQgCACgDAAQARACgGABQgHACAGACIgDgBQABACAGADIgHAAQgEABAEACQAFACAAABIgKAAQgGAAAAACIAYAEIgEABQgMACAJACIgHgBIAAADIgDgBQAEACgFACQgEABAGADIgEgBQAFAKgCACIgHAAIAQAFIgLgBIgBADQAAgBgFAAQANADgOADQgRADACACIgDgBQgIAAgBACIgGACQAYACAEADIgOgDIABACIgCAAQgIAAABABQAAAAAAAAQAAAAAAAAQgBAAgBABQAAAAgBAAQABABAGAAQAGAAgBABQgHgBADADQADADgMgBIAMAHIgJgBQAOAEgDABIgBgBIgFgBQgGABAIADQAGADgMAAQAAABAQACQgJgBABACIACAEIgNgCQABAAABABQABAAAAAAQABAAAAABQAAAAAAAAIgDABQgDgBgGgBIgCAEQAAABAAAAQAAABAAAAQAAABABAAQABABABAAIAFABQgJACAPAJIgGgCQgEgBgGAAQACACAJACIAOADIgIgBQgFgBgGAAIAQAFIgOgCQAHAEgRAGQgQAGAUAFIASABQgJAAgCACQgCACgPAAIAHABIgPgBIAVAEIgOgCIAHADIgMgCQALADgJABQgJAAAIADIgHgCQAIADgGACQgIABACACIgKgCQgBAAAAABQgBAAAAAAQAAABAAAAQAAAAABABIADACIAJAAIgPAAIAIADIgHgBQAFADgBAAQgBABAFADQgLgDgGABQABAAAAABQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABABAAIgJgBQgBABAHABIALACIgBAAQgLAAACABIALACIACACIgEgCQgHgBABACQAAACgKgCQgEAAADACIAGACIAKAAIgDAGIgQgCIAEACIgDgBQgMAAAJAEQAIAEgPAAIAHAAQABAAABABQABAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQABABAAAAQAAAAABAAQAAAAABAAQgFAAgBACQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQANADAAACQgIABgYgCQAJADADADIADAFQgLgBgDgCQgGABAIAEQAHAEgMAAIANACQgBABgMgBQgJgCAEACIALACQABAAAAABQABABAAAAQAAABAAAAQAAAAAAABIgIgBQgCABgFgCIADADIgEgBQACADAKABIgKAAIAQACQgBABgHgBIgNAAIAKADIgDgBIAFACQgQgFgNABIALADQAHADgEAAQgEgCgHAAQgKABgGgDIAFAGQABADAJADQgTgEAGAEIAIAFIgIgBIADAFQgDgBgHgBIgLgBIASAGIgYgFIgFAAIAEABIgCAAIAAADQgDAAgHgDQgGgCgDABIAHADIgGgBQAEACASAFQAMAFgOgBQgCgCgHgBIgQgDQABAAAAAAQAAAAAAAAQgBABgBgBQgBAAgBAAIgLgBIAbAFQgDABgLgCIgRgDIACACQABABAGABQgIAAgGgCQgGABAJACIAPADQgNAAgBACQgBABgMAAQgggJAaADgAhuEjIAAAAgABUEUIABgBQAFABgEAAIgCAAgABUEUIAAAAgAhPkfIAAAAIAAAAg");
	this.shape_1.setTransform(20.1,37.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#202020").s().p("AgCAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABABABAAQAAAAACAAQgHgBABAAg");
	this.shape_2.setTransform(7.9,68.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40.3,75.9);


(lib.Path_5_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AAFDeIivjeQhXhtgcgaQg7g0hJiwQgjhXgZhNIAsgEQAxBxAyCBQAgBRB4CLIC2DOQBbB5EYFHQh0g2j6k1gACtCjIlUldQgkgihQiuQgjhLgehGIAigDQgHgPgCgIIBhAEIAngXIAKAeIAugFQBUDWECE4QCGCeB2B2QlIj4jBk7QhUiIgjhiIiJAMQAUAxBABwQAqBJAoBCIJtLLIksk2gACSjTIkQlcIA0gFIEBFBIEnFWgAm1oeIBQgTIAJAWIhVAIIgEgLgAlcobIAAAAgAiJo9IALAOIgFAAIgGgOgAh+ovg");
	this.shape.setTransform(47.9,58.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,95.7,117.1);


(lib.Path_5_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#58595B").s().p("ADIBKQgTgZgZgYQhMhFhPgIQhNgHhLA2QgmAZgWAdQAphLAggZQBCg0B4AMQB1ALAhBaQAQArgCApQgCgFgKgPg");
	this.shape.setTransform(21.3,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.6,19);


(lib.Path_5_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhdgpQE+iBCeB2IhHBbQgqgUg+gLQh9gUhpAtIloBMQCBhYCgg+g");
	this.shape.setTransform(38.3,10.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.1,76.7,22);


(lib.Path_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AiVC9IgUj9QgJh/gHgfQgPhDAaixQAMhYAQhLIAdAMQgQBzgUCBQgNBRATCiIAdDyQAICJApF9QgxhXgfligAgVDEQg/l7gIgrQgIgpAVizQAIhNAKhHIg4gXIACgKIA5ALIgDAWIAWAKQgHAxgFB3IgGCVIBfNFIg7l2gAAckuQADiTAShiIhYglIAEgYIA5AmIAhgGIgGAdIAeANQgiDWAjFmQATC7AZCOQhmlMAGlRgABviIIgdmNIAjAPIAeFwIAtGOgABPoWIACgPIABAQgABPoWgAh1ppg");
	this.shape.setTransform(19.2,63.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38.5,126.1);


(lib.Path_5_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("ACECVQhGpkACgKIjEMmICUtUIlLGLIEfmyIgngwIlAFbIEUl8IgHgGIGHEqIhzhGIAtSbIhHplgAEXlXIBJA4IBaPSgAkPr5IBOA7Ij5FlgAjBq+IAEgGIBHA/g");
	this.shape.setTransform(44.3,76.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88.6,152.6);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFtA+QAeAOAdAOQgkgNgXgPgAEYAbQiYg2gkAcIjpgBIkaAKII4hjIBNACQBaACBBAGQgjAbgMAiQgPAuAyAiQgpgSgsgRg");
	this.shape.setTransform(42.5,9.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84.9,18.1);


(lib.Path_4_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag0AAQHZheBYgBImJBfIpxBgQDcgwDtgwg");
	this.shape.setTransform(51,9.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102,19.3);


(lib.Path_4_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#202020").s().p("AAAAAIABAAIgBAAg");
	this.shape.setTransform(16.1,71.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#202020").s().p("AgoGKQgFgDAOABIgVgDIgHAAQgFgBAEAAQAbAEgCgDIgZgEQgOgCADgCIAEAAIABACIAFABQALABgCgBQgDgBAJABQAGAAgMgDIgOgEQALAAAHACQAHACAHAAIgDgCQAFACAJAAIAOAAQgLgBgBgBIgPgCQgHgEgCgCQgBgDAOAAQgFgBgFgBQAFgBACgBIACgEQAPACgCgCQgPgCAAgBIAPAAQAAgCgJAAIAKAAIgOgDIAEAAQgDgDgVADIABgBQgQABgFgFQAEABAdABQABAAAAAAQABAAABAAQAAAAABgBQAAAAAAAAIACgBIgIgBIgMABIAIgCIAEABIAKgCQAFAAAAgBIgLAAIgJAAIAQgBQAKgBAHABQAHAAAAgBQAAAAAAAAQAAgBgBAAQAAAAgBAAQgBAAgBAAQgHABgIgDQgIgCgNABQAEgBgSgCIgeACQAKgDAUAAQgBgBgFAAIgJgCQAJABACgBIASADQAAgCATAAQASAAACACQANgCgDgCIgUgBIATgBQABAAAAAAQAAAAAAgBQAAAAAAAAQgBAAgBAAIgJgBQgGACgVgCIgXgBIAMAAIAHgBIAMAAQgBAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAAAQAAgCgNABIABgBIgQgBIAKgBIgVgBIAJgEQAFgCAGgBIgIgBQAcgCgBgBQgJABgEgCQgEgCgMAAQAPgBgCgCQgBgBARgBIgHgDQgGgCgQABIAOgBQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAAAIACgBQAGgBACgCQABgCARgBQgDgCgYADIANgDQADgCgHgBIgFgCQgFgBgFAAIgFABIAUgDQgLAAAHgCQAJgDgDgBIAGABIgCgDIgSACIgOABQgCgCARgEQAPgDAOAAQgKgBgIgCIgEACQADgDgSgBQgVgBgDgCIgLACQgEABgHAAQgBAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQABgCAKgCQALABAIgCQAHgCAIAAQAAgCgJABIgRAAIAmgDIABgEQgNACgDgBQAGAAACgCQABAAAAAAQAAgBAAAAQAAAAgBAAQAAAAgBAAQAGgBAFgDIgKgBQgBgBgBAAQgBAAABAAQAAAAACgBQABAAADAAQgDABAHAAIAKgDQgIACgIgCQgGgBgFABQgGABgCgBQAAgBAAAAQAAAAAAAAQAAgBABAAQABAAABAAQgBABAQgCIABgDQABAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAQgFgBgQACIABgEQgEAAgGABQgFACgEgCQAHABAMgDQAMgCgBgBIAHAAQABAAAAAAQAAAAgBAAQAAAAgBAAQgBABgBAAIAQgCIgegBQgQAAgBgEQAAAAAAAAQAAgBAAAAQAAAAABgBQABAAACgBQADgCgLABIACAAIgEgDQAHgBgBACQAAABAGgBQAAAAABgBQAAAAAAAAQAAgBAAAAQgBgBAAAAQgBgBAGgCIACACQACABAJgBQADgCgIgBIgMgDIgKABQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAgBgBQgBgBAAAAQgBgBAAAAQAAgBgBAAQAAAAABAAIgQAAQgMADAHABQAHABgGACQgJAAABgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAgBAAQAOgCAQgEQgEgBAFgCIAIgDIgHABQgDABgFgBQgDgCAdgDIALgBIgOgBIgPACQABAAABgBQAAAAAAAAQAAgBABAAQAAAAgBAAQAAgCgGABQAIgBgCgBQAAAAAAAAQABAAAAgBQAAAAABAAQABAAABAAQgCABANgBQAOgCABgCIADgDIAEAAQADgCgFAAQgKABgDgBQASgCgHgBQgEgBgJACIgPACIAAgCIgQABQAFgBgIgBIAVAAIAcgCQgHACAQgBQAGgDgQAAQgNgBALgCQgSACgFACIgPgBIAEAAIAGgFQACgCgJAAIAGgBQABgBAAAAQAAgBAAAAQAAAAAAAAQgBAAgBAAIgLgBIANAAQAJgCgGgBIgGgBIgMACIgIACQgYABARgEQgDACAJAAIABgEQAAAAAAAAQAAgBgBAAQAAAAgBAAQgBgBAAAAIALAAQAFgCgGAAQgIAAAAgBQAKgBABgCIgMABIAHgCIAOgCQAAgCgLAAIgRAAQAJgCABgDQADgDAGgCIgHgBQgDAAAEgCIgMABQgFgBgMACQgHACAMgBQABAAABAAQABAAgBAAQAAAAgCABQgCAAgDABIgDgBIgGgBIADAAQAFgEgcAAQgagBAJgFIAPgBQADgBgKAAQgJABAAgBIgBgKQAKABAGgCIAIgEIgQABQAEgCAEABIAGgBIgJgBIAagEIgIgEQgFgBgNAAQADgGgKgIQgMgJgDgFQgCgBALgDQAJgDgKAAIAKgBIACgGQACgDAEgDIgJACIgHACIAJgDQABgBABAAQABgBAAAAQABAAgBgBQAAAAgBAAQgIACgFgBQgBgBgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIAHABQAEABAJgCQAFgCgDAAIgMAAIAMgBQgGgBAJgEQAJgDgKgBIgGABIgFACQgHgBAHgGQAHgEgHgBIAHgBIgDgCQACAAAPgDQACAAABAAQABgBAAAAQABAAAAAAQAAgBAAAAIgDgBQgHABgOADQgKADgGgCQAOgBABgCQAAgDAGAAQADgEgKgEQgNgEgCgCQATgFAMgCIgIAAIADAAQAFgDgHABQgIAAgGACIAFABQACAAgJACQAFgBgGgCQgEgBAKgDIAHgBIgCgCIgQADQAEgIgKgMIAGgGQAEgDAIgCQAEgEgRgFQABgBABAAQABgBAAAAQAAgBAAgBQgBAAgBgBQgCgCAOgCIgPAAIAIgCQgBAAgBAAQAAAAgBAAQAAAAAAgBQABAAABAAIADgCIgOADQABgBAAAAQAAgBAAAAQAAgBgBAAQgBgBgBAAQgBgBAAgBQgBAAAAgBQgBAAABgBQAAAAAAgBIAEAAIgFgBQgBAAAAgBQgBAAAAAAQAAAAABAAQAAgBABAAIAMgCQgTgBAFgJQAGgLgGgDQAOgFgJgDQgIgDAXgHQAFgCgNACQgMACABABQgFgGAEgSQADgSgGgHQACgDAFgSQAFgNAOgHIgMAEQgDgBAIgCIANgDQgHgBgKABIgHADQADgEAAgKQAAgIASgJIgKADQgCgCATgJQAQgIgLgBIAIAAIAKgDQgJgCAYgNQAfgRAFgFQgBABAQgDIgFgCQAGgDABABQACABAFgCQAEgDgLADQgMACAGgDQAKgDABgDQADgCACgBIgGABQgFAAAEgBQgCgBAJgBIgEgFIAKgDQAEgCAEABQAMgFgHAAQgHAAAMgEIgMAAQAJgDACAAIgCgBQATgGgBgBQgCgBgGADQgDACACgDQARgDgGADIAKgFIAAABQASgGgBgCIABAAQAHgEgLADIgWAEQAJgDAFgFIgTAGQABgBABAAQABAAAAgBQABAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQABAAAAAAIAEABQAHgEASgFQAPgEADgDQAGgCgFADQgIADADABQAJgEAJgBIARgDQBZgCAUBEQALAjgJAhIgLAFQgFACAHAAQgPACAAAFQAIAAABACIABADIgEAAQgGADAJAAIAMABIgPAFQAEAEAKgBQgDALABAFQACAIANACQgPAEAAAEQgBACADAEIgNACIAQgBIgKADIgJAEIAMgCQgFABAEABQAEABgRADQATACARAEIgKABQALABgQAEQgPAEAQAAQAKADgEAHQgDAFgKAIIAJACIALgGIgHAHIgDAAQgCADAHAEIAMAGQgKAHgCAMQgBAMgOAHIAbgDIgcAGQADACAXgEIgOAFQAMgCgGAFQgHAEASgCQgJACgDACQgCADAHAAIgLACQgIABACABQANgCADAAIAIACIgJAEQgKACADABIgFAAQgBAAgBABQAAAAAAAAQgBAAABABQAAAAAAABQADABAHABIABAAIgLABQgDACAEABQAGAAAJgBIAGgDIgEAKQgBgBgEACIgHACQAKgBAHABIAGABIgPAEIAGgBIgFACIAOAAQgZAGARAAIAJgDIgFADQgDACAJgBIgNACQgHAHAPAIIgBAAQgDACAHABIAOACQABAGgKAPIAPgBIgNACQADADgNAIQgMAJABACIAMgCQAMACgXADQALAGAJADQgIABgDACIgDADQARgBgGADQgHADAHABIgEAAQABACAHABIgIABQgDADAFAAQAEABAAABQgCACgIABQgFABAAABIAZABIgEABQgLAEAIABIgGAAIAAADIgDAAQAEABgEACQgEADAGABIgEAAIAFAGQABAEgBACIgHABIARADIgLAAIAAADQAAgBgGACQANAAgNAFQgQAHACABIgDAAQgHABgCACIgEADQAWgCAGACIgPABIABACIgBgBQgIABABABQAAAAAAABQAAAAAAAAQAAAAgBABQgBAAgBAAQACACAGgCQAEgBAAABQgGAAADADQADACgLACIAMAFIgJABQAQABgEABIgBAAIgGgBQgGACAJADQAHACgLABQgBADAMgCQgBAAgBAAQAAABgBAAQAAAAAAABQAAAAAAABIACADIgMABQABAAAAAAQABAAABAAQAAAAAAAAQABAAgBABIgBABQgDgBgHABIgBAEQAAABAAAAQAAABAAABQAAAAABAAQABABABAAIAFAAQgJAEARAHIgGgCQgEAAgGACQACACAKgBQAKAAAEACQgJgCgLADIARABIgOACQAIACgQAKQgPAIAVACIASgCQgJACgCADQgBACgPACIAHAAIgOACIAVAAIgPABIAHABIgLABQALABgJACQgJADAJABIgHgBQAIACgGADQgHADACACIgKAAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAAAABABIADACIAJgCIgPADIAJABIgHABQAGACgCABQgBABAGACQgJgCgHADQAAAAABAAQAAAAAAABQABAAAAAAQAAABgBABQAAAAAAAAQAAABAAAAQAAABABAAQAAAAAAABQgCgBgGACQAAABAGAAIALAAIABgCQAHABgJABQgKACABABIAKAAQgIAAABADQACABgLgBQgFABAFABIAGACIAKgCIgCAIIgQAAIAFABIgEAAQgMACAKADQAIACgPADIAOgBIgGABQABAAABAAQABAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABABAAQAAAAABAAQABAAACAAQgIABABACQAAAAAAABQgBABAAAAQAAABgBAAQAAAAgBABQAMAAABADQgIADgXABQAIACADADIAFAFQgLABgDgCQgGABAIAEQAIADgLACIAMAAQAAACgMAAQgDgBgBAAQgCAAAAABQgBAAAAAAQABABABAAIALAAQABAAAAABQABABAAAAQAAABAAAAQAAABAAAAQgFAAgDABQgCABgFgBIADACIgDAAQABADAKgBIgKABIARABQgCABgGAAIgNABIAKACIgEAAIAIACQgPgEgQADQAWADgIACQgEgCgHACQgJACgJgDIAHAGQADADAIACQgVgBAHADIAJAEIgIAAIADAFQgEgBgGAAIgMAAIATAFIgZgEQgIAAAHACIgCAAIABADQgOgEgGACIAIADIgHgCIAXAGQANAEgOABQgDgCgHgBIgRgDQACABAAAAQAAAAAAABQgBAAgBAAQgCAAgCAAIASACQgDABgLgBIgPgCIACACQAAABAHAAQgIAAgGgBQgFABAIABIANADQgLAAgBABQgBACgLAAIgQgEg");
	this.shape_1.setTransform(20.8,39.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#202020").s().p("AgDAAIABAAQACAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABABAAAAQABAAACAAQgHgBAAAAg");
	this.shape_2.setTransform(13.9,73.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,41.5,79.6);


(lib.Path_4_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghgbQiEieh5iVIFrGKIDSESQg6gvkGk6g");
	this.shape.setTransform(28.8,33.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57.5,67);


(lib.Path_4_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AloBcQC+gxBJgrQBhg5CdggQCwgkBcAjIiVCDIilgvIoXBzIBAgRg");
	this.shape.setTransform(53.7,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.2,-0.1,85.1,21.9);


(lib.Path_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJgjQgSi3gOirIBAHUIATE3QgRg+gilrg");
	this.shape.setTransform(4.3,39.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.6,78.1);


(lib.Path_4_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhNkeICbF5QgzAhgTBVQgIAqAAAkg");
	this.shape.setTransform(7.9,28.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.7,57.5);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKgHImkgmILOAAIAAABQgDACAIAGQAZAVBxA5IkVAEg");
	this.shape.setTransform(43.2,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,86.4,9.3);


(lib.Path_3_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhIgHIEDgOIF+htQgUANgMATQgaAkAiAZIxZCog");
	this.shape.setTransform(56.9,13.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113.9,26.3);


(lib.Path_3_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#202020").s().p("AhmE5QgBgCgGgDIgQgHQAEADgKgEIASAIQgDAAgKgEIgQgHIACACQAAABAGADIgFgBIgJgFQgHgBAYALQgNgDgCABIgNgCQgIgEgEgEQgFgEANAFQgJgFgLgDQgHgDABACQgGgFAGACQAYAKgBgCQgEgEgSgHQgOgGAEgBIAEABIABABIAEADQAKAFgCgCQgCgCAJAEQAFABgKgHQgMgHAAgBQALADAFAEQAGAFAHACIgCgDQADADAKADIAOAFQAAgDgZgKQgGgHAAgCQgBgEAMADIgIgEQAGACACgCIAEgCQANAHgBgDQgNgGAAgCIAOAFIgHgEIAJADIgMgIIADACQAAgCgIgDIgOgEIABgBQgPgFgCgHQABACAKAFIASAIIAEABIACgBQgCgCgFgCIgLgEIAIACIADACQAQAEAAgBIgIgDIAEABQAJADAHAEIAGACQAAgBAAAAQAAAAAAgBQAAAAgBAAQgBgBgBAAQgGgCgHgGQgGgFgNgFQAFACgQgKIgcgKQAHABAVAJQAAgCgFgCIgHgFQAJAFABgBIAPALQABgCARAIQARAHABACQAOAEgCgCIgTgKIATAIQABAAAAAAQABAAAAgBQAAAAgBAAQAAgBgBAAQgDgDgHgCQgGgBgTgKIgVgKIASAGQAEADAHACQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQABgBgMgFIACAAIgOgIIAIAEIgSgKIAKAAQAFAAAGACIgHgEIAQAGQAKAEAAgBQgIgEgDgDQgDgEgLgFQAPAGgCgCQgBgDAQAIIgEgGQgFgEgLgFIALAFIgEgCIADgBQAGADACgBQADgBAPAGQgCgDgXgIQAUAGgJgHQgEgFgIgEIAOAFQgLgFAIABQAJACgCgCIAGADIgBgDIgegMQgBgDAQAFQAPAEANAHQgJgGgGgFIgEgBQAEAAgQgJQgSgLgBgDIgLgEQgEgBgGgDQgBgBAAgBQgBAAAAgBQAAAAAAgBQAAAAABAAQACgBAIACIARAIQAIACAIAEQABgBgKgEIgMgHQAIAEAYALIADgDIgOgHIAIADQAAAAABgBQAAAAAAAAQAAAAAAgBQgBAAAAAAIAGACIAFAAIgJgGQgBgBAAAAQgBAAABAAQAAAAACAAQABABACABIACABIACACIAKACQgIgDgGgEQgFgEgEgBIgHgFQAAgBAAAAQAAAAAAAAQABAAAAAAQABAAABAAQgBABAPAHIACgCQAAAAABgBQAAAAAAAAQAAAAgBgBQAAAAAAAAIgUgJIADgDIgJgEQgFgCgCgCQAFADAMAEQAMAFgBgCIAEACIAAgBIAAgBIgLgGQgOgJABgCQgBgBAAAAQAAAAABAAQAAgBACAAQABAAABABQAEAAgIgEIgCgFQAFADgBABQgBAAAGADQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAQgBgCAHACIAAACIACACIADAAIAEgBIgBAAIgEgDIgGgFQgFAEgFAAIAHgGIgHgDQAEABgBgDIgBgEIgOgIQgLgDAFAEQAGAEgHgBQgIgFACgBQABAAAAgBQABAAAAAAQAAgBAAAAQAAgBgBAAIAcALQgCgDAFABIAAAAIgBgDIACABIAEABIgCgDIANAGIACgBIAAAAIgOgGQAFgBgFgDQABAAABAAQABABABAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAABQABAAABABQgCAAALAFIAAAAIACgBQAAAAABAAQAAABAAAAQABAAAAAAQABAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAQgBABAAAAIgFgCIgDADIAEACIACgBIACgCQAIAEACgBIAFgBIADADQAEAAgFgDIgLgHQAQAIgFgFIgLgGIgPgGIACgCIgPgHQAFACgGgFIArAYQgHgCAOAHQAGABgNgIQgLgHAKADIgVgJIgNgIIADACQABgBAHAAQADAAgIgGIAGADQABAAAAAAQABAAAAgBQAAAAAAAAQAAgBgBAAIgJgGIAKAGQACABABAAQACABAAAAQABAAgBgBQAAAAgBgBIgEgEIgMgFIgHgDIgIgFQgGgEAKAEQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAABIAFADIADgCQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBAAIALAGQAEABgFgEIgGgFQAIAFADgBIgLgGQAGABAPAHQAAgBgKgGIgOgJQAIADAEgBQADgBAGACIgFgEQgDgDAFABIgLgGIgOgIQgHgCAJAFQACABABAAQAAABAAAAQgBAAgCgBQgBgBgDgBIgDgCIgCgDIAAAAQAHAAgXgNIgMgIIgCAEQgDAMAMAIQAIAIgIALQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAIAGAAQABAMADAMQgGADgDAEIAEAAQADAAgHAFQAEgDgHgBQgGgBAIgGIAHgEIgDgCIgOAIQgCgLgQgQIAEgKQACgFAHgEQABgEgGgBIgLgCQAEgDgEgDQgEgCANgGIgOADIAHgDQgEABACgCQABgBABgBQABAAAAgBQAAAAAAAAQABgBgBAAIgNAGQACgCgEgDQgGgCACgDIADgBIgFAAQAAAAgBgBQAAAAAAAAQAAAAAAgBQABAAAAAAIAMgFQgUABADgLQAEgPgHgCQANgHgJgCQgIgDAWgKQAEgDgMAEQgMADABACQgGgIACgUQABgTgGgIQACgDAFgTQADgNAQgIIgNAEQgDgBAIgBIANgDQgHgCgKABIgHADQADgEAAgKQABgIASgJIgLADQgBgDATgIQAQgHgKgCIAHAAQADABAHgCQgJgEAZgLQAhgOAEgEIAQgBIgFgDQAGgCABABIAHAAQAFgDgMACQgMACAGgDQAKgCACgCIAFgDIgGAAQgFAAAEgBIAHgBIgCgEIAJgDQAEgBAEABQANgDgHgBQgHAAANgDIgMAAIALgCIgBgCQAUgDgCgBIgIABQgEABADgCQAQgBgFACIAKgEIAAABQAUgDgBgCIABABQAGgDgLABIgWACQAMgDADgCIgOACQAIgDASgDIATgEQAGgBgFACQgIACADABQAOgEAVAAQBXAAANAvQAHAXgKAXIgLAFQgHADANgDQgTAFgBADQAJgBAAABIABACIgEAAQgFADAIgBIAMgBIgOAFQADADAKgCQgDAHABADQACAFANgBQgPAFgBADQAAAAAAABQAAAAAAABQABAAAAAAQABABAAAAIgMAFIAPgEIgRAIIAMgEQgCABgBAAQgBAAAAAAQAAABAAAAQABAAABAAQAEgBgQAGIAigFIgKADQALgCgPAGQgPAGAQgEQAJAAgDAEIgMAKQAAABAIgCIAKgHIgGAGIgDABQgBACARgDQgJAHgCAFQgCAEgMAJIASgMIgBABIgFAEIAGgEIgBABIgEACIAEgCIAAAFIgEADIgFAGQANgMAJABIgKAOIAFgEIgDAEIAPgEQgEAKABAHQABAJAKAAIAEgLQABACABALQADAJAJAFIgEABQgEACgCAAQANAmAEAiIAFAwIgCgBQgEAFAFALQADAGAGAJQgIAXgQAJIAMAHIgMgFQABAFgPAAQgQABAAACIALAFQAKAHgWgJIANASQgIgEgDAAIgFAAQAPAJgGgCQgHgBAFADIgDgBQAAACAFAEIgGgDQgEAAADADIADAEIgJgEQgFgCgBABIAVAOIgFgBQgLgEAHAFIgGgDIAAACIgDgCQACADgEAAQgEgBAEAFIgDgCQABAJgCABIgHgDIANAKIgJgFIgCACQABgBgGgBQALAHgNgEQgRgEACADIgDgCQgHgDgCAAIgGAAQAVAKADAEIgMgHIAAACIgBAAQgHgEAAABQAAAAAAABQAAAAAAAAQgBAAgBAAQAAgBgBAAQABACAFACIAFACQgCgBgBAAQgBgBgBAAQAAAAAAABQAAAAAAABQACAEgLgFIAJAKIgIgEQAOAJgFgBQgBgCgFgDQgFgBAGAGQAFAFgLgFQgBABALAFQgBAAAAAAQgBgBgBABQAAAAAAAAQAAAAAAABIAAADIgKgFQADACgEAAIgIgFIgDACQgBAAAAABQAAAAAAABQAAAAABABQAAAAABABIAFADQgKgCAMANIgFgEQgDgCgGgCQACADAIAEQAJAFADADQgHgFgLgEIAOAKIgNgHQAGAGgTgBQgPgBARALIARAHQgJgDgDABQgCABgOgFIAHADIgOgFIATAKIgOgHIAGAFIgKgFQAJAGgIgDQgIgCAGAEIgGgDQAGAFgGgBQgIgBACACIgJgFQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAABIACACIAJAEIgPgFIAIAFIgHgDQAFAEgCAAQAAAAAAAAQAAABAAAAQAAABABAAQABABABABQgJgFgGgBQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAABQAAAAAAABQAAAAAAABQAAAAABABIgJgEQgBABARAIIgCgBQgKgDACABQALAFABACIgEgDQgHgCAAACQAAABgIgFQgFgBADADIAFAEIAKACIgFAFIgPgHIAEADIgDgCQgJgDAFAGQAHAFgMgEIAKAFIgFgCQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAABABQAAAAABAAQABABABABQgHgDAAACQAAAAAAAAQAAABAAAAQAAAAgBAAQgBAAAAAAQAJAGAAACQgHgBgWgJQAIAFACAEIACAFIgMgHQgGgBAGAGQAGAFgLgCIALAEQAAABgMgFQgCgBgBgBQgCAAAAAAQgBAAABAAQAAABABABIAKAEQAAAAABABQAAABAAAAQAAABAAAAQAAABgBAAQgFgDgCAAQgDAAgEgCIADACIgEgBQABADAJADIgJgCIAPAGQgCABgFgDIgNgEIAJAFIgDgBIAGAEIgNgHIgQgGIAKAHQAHAEgFgBQgCgDgIgCQgJgCgIgFIAFAHQACADAHAFQgUgJAGAGIAIAHIgJgEIACAGQgDgDgGgCIgLgEIAQAKIgWgLQgJgEAIAFIgCgBIgBADIgJgFQgFgDgDAAIAGAEIgGgCIAUAMQAHAEgDAAIgHgBgAheBxQAGgJgJAGIgEAEQAFgCgCADIgHAJIAIgJQgRAdAUgfgAhwBtQAAgBAAAAQABAAAAAAQAAAAAAgBQAAAAgBAAIABAAIgCgEIgBABIACADIgCgBIgFAAIAHADgAh5BbIAHAGIABAAIgEgDQABAAAEgEIAFgFIgCAAIgDgCIgJAIgAh9BVIACgDIAAAAIgFgBIADAEgAiigXIALAGQAEAAgIgEIgGgEIgBACgAh5gUIgFgFQgEgEgLgGQAEABgHgGQgHgCgGAKQAHAFAFABIAIACIgOgIIALAEIgEgCIAXAKIAAAAgACLh3IADgCIgCACIAFgEIgDACIACgCgAAdEEIABgCQABABAAAAQABAAAAABQAAAAAAAAQAAAAAAAAIgDAAgAiJBJQgQgCgDgDIAQgOIAHAQIABAEIgFgBgAiOAvIACgBQAHgCgDAFIgDACIAIgDIgJAGIgCgHgAiOAvIAAAAgAhrkAIAAAAIAAAAg");
	this.shape.setTransform(22.1,32.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#202020").s().p("AAAAAIgBABQABgBAAAAQACAAAAAAQABAAgBAAQgBAAgBAAg");
	this.shape_1.setTransform(38,15.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#202020").s().p("AgCAAQABAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAQABAAgBAAQAAAAAAAAQAAAAAAAAQAAABABAAQABABABAAIgFgCg");
	this.shape_2.setTransform(4.3,55.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1,44.2,63);


(lib.Path_3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABgBxIijiQIkAlmIKHK/QgjAAgCAlQAAATAGAUg");
	this.shape.setTransform(32.4,39);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64.9,78);


(lib.Path_3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACuAKIqCAAQBygZCJgaQEQg0BvAFQBvAFBrAqQA2AVAfATIhnBag");
	this.shape.setTransform(47,9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94,18);


(lib.Path_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAACJIgri2IgPmPIB0NDQgUgNgRAgQgIARgEASg");
	this.shape.setTransform(5.9,44.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,11.8,89.1);


(lib.Path_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhgmCIDBLpQgigng6AdQgbAPgWAXg");
	this.shape.setTransform(9.8,38.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.6,77.4);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACoAYQgcgTgkgOQhIgggjAKIlnghII6geQgBAEABAGQABANAJAMQAdAoBcATQgSAHgHAPQgNAfA+Aqg");
	this.shape.setTransform(36.4,9.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,72.8,19.2);


(lib.Path_2_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABGglQD/gsDoggQgzAWgCAqQgBAVAJARIiggRQhjgKmeBKQjPAmi8AoQB1hBH9hWg");
	this.shape.setTransform(55.8,11.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,111.6,22.9);


(lib.Path_2_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#202020").s().p("AAAAAIABAAIgBABg");
	this.shape.setTransform(9.4,86.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#202020").s().p("Ag4HjQgCgDgGgCIgQgGQAEADgLgDIATAHQgDABgKgEIgRgGQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAABAGACIgEgBQgEAAgFgDQgGAAAIAEIAOAGQgNgCgBABQgCACgMgCQgcgPAYAHQgJgEgLgDQgIgCABACIgCgCQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAZAJgBgEQgEgDgUgHQgNgEAEgDIAEABIAAACIAFADQALAEgDgDQgCgCAJAEQAGAAgLgGQgNgHAAgBQAMACAGAEQAGAEAGABIgBgDQADAEAKABIAOAEQgLgEgBgCQAAgBgOgEQgGgHAAgDQgBgEANACQgFgCgDgDQAGABACgCIADgDQAOAFgBgDQgOgEAAgDIAPADQABgBgJgCIAJABIgMgGIADABQgBgDgWgDIABgCQgQgCgCgHQACACAcAIQABABABAAQAAAAABAAQAAAAABAAQAAAAAAgBIADgBQgDgCgFgBIgMgCIAJAAIADACQAQABAAgBIgLgCIgJgCQAFABALABQAKABAHAEQAGABABgBQAAAAAAAAQAAgBgBAAQAAAAgBAAQgBgBgBAAQgHgBgHgFQgGgFgNgCQACgBgPgGIgMgCIgFgCIgNgBQAKgCAUAGQgBgCgEgCIgIgEQAJAEABgBIARAJQAAgDASAFQASAFABACQAQABgDgDIgUgGIAUAEQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAIgLgEQgGABgUgHIgVgGIAKACQAHABAAgBQAEACAIABQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgCgMgDIABgBIgJgCIgGgCIAJABIgTgHIAJgCQAFgCAHABIgIgDIARADQALACAAgBQgKgCgDgEQgDgDgMgDQAQADgCgDQgCgCARAEQgCgEgDgCQgFgDgMgDIAMADQgBAAgBgBQgBAAgBAAQAAgBAAAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAQAAAAAAgBQAGACACgCQACgDAQADQgCgEgXgBIAMAAQAEgBgHgEQgFgFgIgCIAPABQgLgCAHgBQAJAAgCgCIAHABIgDgDQgHgCgKgBIgOgBQgCgEARAAQAQABAOADIgRgIIgEABQAEgCgSgGQgUgGgCgEIgLAAQgEABgIgCQgBgBAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQADgCAJABQALACAHAAQAIAAAIACQABgBgKgCIgQgEIAlAGIADgEQgNgCgDgBQAGAAADgBQAAAAABAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQAGABAFgDIgJgDQgHgCAKABQgCABAHACIAKgCQgJAAgGgDQgGgDgEAAQgOgDAIgCQAAABAGABIAKACIACgDQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBIgJgCIgMgBIACgEQgDgBgGAAQgGAAgDgCQAGACANAAQAMAAgBgBIAHABQABAAAAAAQAAAAgBAAQAAAAgBABQgBAAgCAAIARABIgdgIQgQgEABgEQgDgBAHgCQAEgBgMgCIADAAIgEgEQAGABAAABQgBACAHAAQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgCAGAAIABACQADACAJAAQADgBgHgDIgMgGIgLgBQABAAABAAQAAgBAAAAQABgBgBAAQAAgBAAAAQgBgBAAgBQgBgBAAAAQAAgBAAAAQAAAAAAgBIgQgDQgLABAGADQAGACgGABQgJgCACgCQAAAAAAgBQABgBAAAAQAAgBgBAAQAAAAgBgBIAeABQgDgDAFgBIAIgCQgFgBgCABQgCAAgFgCQgDgDAdADIALABIgNgDIgPgBQAAAAABgBQABAAAAAAQAAgBAAAAQAAAAAAgBQAAgBgFgBQAHAAgBgBQgBgBAIACIgEgBQgDABANABQAPABACgCIAEgDIADABQAEgBgFgBQgJgCgEgCQASACgGgDQgFgBgIgBIgQgBIABgCIgRgBQAIAAgKgEQAKADAnAFQgJABARACQAHgCgPgDQgNgEAKAAQgTgBgEABIgFgCIgFgBIAGgFQADgCgJgCIAGAAQABAAABgBQAAAAAAAAQAAgBAAAAQgBAAAAAAIgLgEIAMADQACAAABAAQACAAAAgBQABAAgBAAQAAAAgBgBQgHgCABgBIgNAAIgHAAIgJgCQgIgBALgBQgHACALABIACgEQAAAAAAAAQAAgBgBAAQAAgBAAAAQgBAAgBgBIAMADQAFgCgGgBQgIgCAAgBQAKABACgCIgNgBQAEgBAEAAIAPAAQgBgCgLgCIgRgDQAJgBADgCQADgDAGgBIgGgDQgEgBAFgBQgIAAgEgCQgFgBgLgBQgIABALACQACAAABAAQAAAAAAABQgBAAgCAAQgCAAgDAAIgDgCIgGgCIADAAQAGgDgbgFQgagFAKgEQAJAAAFABQAEgBgJgBQgKgBABgBIAAgLQAKADAFgCIAJgDIgQgBQAFgBADABQADABAEgBIgJgDIAaAAIgHgFQgFgCgMgCQADgGgIgKIgPgRQgCgBANgDQAJgBgKgBIAKgBIACgFQACgEAFgCIgJABIgHABIAJgCQAGgCgDgBQgJACgFgCQgBgBAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIAHACQADABAJAAQAGgCgEgBIgLgCIAMABQgGgCAJgDQAJgDgJgCQgFAAgBABQgBACgFAAQgHgCAIgEQAIgFgIgDIAHABIgCgDQADABAPgCQABAAABAAQABgBABAAQAAAAAAAAQAAAAAAgBIgCgBIgWACQgKABgFgBQANgBABgCQABgDAFAAQADgEgKgEQgMgGgBgCIAfgFIgJAAIAEgBQAFgCgHAAQgIAAgGACIAEABQACAAgIACQAFgCgGgCQgEgBAKgCIAHgBIgBgCIgRACQAFgJgKgMIAHgGQADgEAIgBQAEgFgQgFQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAgBgBQgDgDAOgCIgOAAIAHgBQgEgBADgBIAEgCIgOADQAAgBABAAQAAAAAAgBQgBAAAAgBQgBgBgBAAQgEgDACgCIAEgBQgKAAAFgCIANgDQgUgBAFgJQAFgKgGgDQAOgFgJgDQgIgCAXgJQAEgCgMACQgMADABABQgFgGACgSQABgQgGgHQADgEACgRQACgMAOgKIAFgCIgGAAIgLADIgGADQADgEgCgJQgBgHAPgMIgKAFQgBgCAQgNQAMgJgGgBQAFgBAJgFQgKgBAUgTQAZgYADgHIAOgHIgGgBQAFgEABABQADAAAEgDQADgFgLAGQgKAGAEgFQAJgGABgDIACgFQgMAHAFgFQAEgBADgDIgFgEIAHgHQAEgDAEAAQAKgJgHADQgHABALgIIgMAEQAHgGABAAIgCgCQAQgLgBgBQgCAAgFAEQgDADACgDQgCgBAIgDQAHgDgDAEIAIgJIAAAAIAJgGQAGgGgCgBIACAAQAGgHgMAGIgTALQAIgIACgFIgPAMQABgBAAAAQABgBAAAAQAAAAAAAAQgBAAAAAAQgEABADgDIAEAAQAFgGAPgLQAOgKACgEQAEgEgDAFQgFAGADAAQAGgHAJgEIAPgIQAtgRAqAYQAjAVAVApQAXAxAAAvIgKAHQgGAFAKgCQgQAEAAAHQAJgBABACIABAEIgDABQgFAEAIAAIANABIgOAHQAEAGAKgBQAAAQABAFQAEALANAEQgPAFAAAFQAAADADAFIgNADIAQAAQgFABgEACIgJAFIAMgCQgFABAEACQAEABgRADQAUADARAIIgKABQALABgPAFQgPAFAQAAQAKAFgEAKQgCAFgKALIAIADIAMgIIgHAJIgDAAQgCAFAHAGIAMAJQgJAIgCAQQgCAPgPAIIAbgBQgUACgHADQADACAXgBIgPAEQANgBgGAFQgHAGARgBQgJABgDADQgDADAIABIgLABQgIABACACIAQgBIAHADQABABgKADQgJACADACIgGgBQgBAAAAAAQgBABAAAAQAAABAAAAQAAABABAAQACADAHABQADAAAGgBQAGgCADABQgTAEgIgBQgFABAFACQAGABAJAAIAGgCIgFAMQgBgBgEABIgIABQAKABAHACIAHADIgQACIAHAAIgGABIAOABQgIABgEACQgFACAIABIAKgCQAAABgFACQgDACAJABIgNAAQgIAIAOAMIgCAAQgCACAHADIANAEQgBANgKAQIAOACIgNAAQADAEgOAIQgOAJAAADIANAAQgGACAEABQADACgNAAQAJAIAKAHQgIgBgDACIgFAEQARACgGACQgHADAGACIgDgBQABADAGADIgHgBQgEADAEACQAFACAAABIgLABQgFAAAAACIAYAGQAAAAAAAAQABAAgBABQAAAAgCAAQgBAAgBABQgMACAIACIgGgBIAAAEIgDgBQADACgEADQgFACAGADIgDgBQAFANgDADIgHgBIAQAIIgLgCIgBAEIgCgBIgEAAQANAEgOADQgRAEACADIgDgBQgIgBgBACQgDADgDAAQAXACAFAFIgOgDIABADIgCgBQgIgBABACQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQABACAGAAQAFgBAAACQgHgBACADQADAEgMAAIAMAJIgJgBIAKADQAFACgEABIgCgBQgCgCgDAAQgFABAHAFQAHAEgMgBQgBADANABQgBAAgBAAQgBAAgBABQAAAAAAAAQAAABAAAAIABAFIgNgCQABAAABAAQABABAAAAQABAAAAAAQAAABAAAAIgDACQgDgCgGgBIgCAFQgCADAEACIAFABQgKADAPAMIgGgDQgDgCgGABQACADAJACQAKACADADIgIgCQgFgCgGABIAQAGIgOgCQAHAFgSAIQgQAGATAHIASACQgJAAgDADQgCADgPgBIAHACIgPgCIAVAGIgOgDIAGADIgLgBQAKAEgIAAQgKAAAIAEIgHgCQAIAEgHABQgHACACADIgLgDQAAABgBAAQAAAAAAAAQgBABAAAAQABAAAAABIACADIAKAAIgQAAIAIAEIgHgCQAFAEgBABQgCABAFAEQgLgEgFABQABABAAAAQABAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAABAAAAQAAABAAAAQAAABABAAQgCgBgHAAQAAABAGACIALACIABgCQAHADgJgBQgLgBACACIALADQAAAAAAAAQABAAAAABQAAAAAAAAQABABAAAAIgFgCQgHgBABADQAAACgKgEQgEABADACIAGADIAKAAIgFAIIgPgDIAEACIgDgBQgMAAAIAFQAIAGgPgBIAMACIgFgBQABABAAAAQABAAAAABQABAAAAAAQAAABgBAAQAAAAAAAAQAAABAAAAQABAAABABQAAAAACAAQgHgBgBACQAAABAAABQAAAAgBABQAAAAgBABQgBAAAAAAQALAEABADQgIABgZgEQAJAEACAFIADAHQgLgCgCgDQgHAAAHAGQAHAGgMgBIAMADQgBACgLgDQgKgDAEAEIALACQACAEgBABQgFgBgDAAQgCABgFgCIADADIgEgBQABADAKACIgKgBIAQAFQgCABgGgBIgNgDIAJAFIgDgBIAHAFIgOgGQgJgDgGgBIALAGQAFADgFABQgBgDgIAAQgJAAgIgFQACACADAGQACAEAHAFQgUgHAGAFIAIAIIAAAAIAAAAQAFgBAEADIgSgEIACAGQgDgCgGgBIgMgDIARAKIgXgKIgFgBIADADIgBgBIgBAEIgJgEQgGgDgDAAQABADAEABIgFgCQAEAEARAIQAJAGgHAAIgFgBgAh7laIAAAAIAAAAg");
	this.shape_1.setTransform(20.5,48.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#202020").s().p("AgCAAQAAAAABAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABABAAQABABABAAQgFgCAAAAg");
	this.shape_2.setTransform(6.7,87.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41.1,96.9);


(lib.Path_2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAPA/QkilIgthqQBoB/B2CHQDpENBIAuIBxBKQgOAGgKAPQgVAdAXAqQiJiQiSilg");
	this.shape.setTransform(32.1,37.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64.2,74.5);


(lib.Path_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AESBEQAAhKhGANQhFAQhHgmQgXgMgTgQIgQgOImQhYQChgECzANQFlAaBcBWIiICrQAOgpABgmg");
	this.shape.setTransform(39.5,14.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79.1,29.5);


(lib.Path_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfA/QgwmBAPhrQAOCSASCeQAiE7AaBAIApBoIgYAKQgZASgCAsQgZitgYjCg");
	this.shape.setTransform(6.9,43);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.8,86.1);


(lib.Path_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAgFeQgrhYg2AJIABrFICCNtQgLgugXgrg");
	this.shape.setTransform(6.7,43.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.4,87.8);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAgAOIkVhOIGwAXIAIAWQAPAcAkAhIh5AWg");
	this.shape.setTransform(24.6,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49.3,13);


(lib.Path_1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABcglQC4gcCagQQgbAbgNAYIgHATIi9ALIpvBRQCZg/Fwg3g");
	this.shape.setTransform(43.1,8.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,86.2,16.4);


(lib.Path_1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#202020").s().p("AAAAAIABAAIgBABg");
	this.shape.setTransform(5.5,92.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#202020").s().p("AgDgBIAIACIgDABg");
	this.shape_1.setTransform(5.3,75.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#202020").s().p("Ah1IFQgBgDgGgDIgQgHQAEAEgMgFIAUAJQgEABgKgFIgQgHQAAABABAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAACAHACIgFgBQgDAAgGgEQgFAAAHAEIAOAHQgNgCgCABQgBACgMgCQgJgGgEgDQgEgFANAEQgJgFgLgDQgIgCACACQgGgFAGACQAZAKgBgEQgEgDgTgIQgNgFAEgDIAEABIABACIAEADQAKAFgCgDQgCgCAIAEQAHABgLgHQgMgJAAgBQALADAGAFQAGAEAGACIgBgEQADAEAKADIAOAEQgLgFAAgCQgBgBgNgFQgFgIAAgDQgBgGATAGQgFgDgEgBIgFgDQAFABADgCIAEgDQAOAHgCgEIgIgEQgFgDAAgCIAPAEQAAgBgIgDIAJACIgMgIIAEACQgBgDgIgCIgOgDIABgBQgPgEgCgIQACADAbAKQAEACABgBIACgCQgCgCgFgBIgMgDIAJAAIADACQARADgBgCQgDgCgHgBQgHgBgCgCIAQAEQAJACAHAEQAGACABgCQAAAAAAAAQAAAAgBgBQAAAAgBAAQgBgBgBAAQgHgCgGgGQgGgFgOgDQAGABgRgKQgKgDgCABIgEgCIgOgDQAKAAAUAHQAAgCgFgCQgFgDgCgDQAIAFACgBIAJAFQAGADABACQAAgCASAGQASAGAAACQAQADgDgDIgTgJIATAGQABAAAAAAQABAAAAgBQAAAAgBgBQAAAAgBgBIgKgEQgGAAgUgIIgVgJIALADQAHACAAgBQAHAEAFAAQgBAAgBgBQAAAAAAgBQgBAAAAgBQAAAAABgBQABgBgNgEIACgBQgFgBgEgCIgGgDIAJACIgSgJIAJgCQAGgBAGABIgIgEQAcAIAAgCQgJgDgDgEQgCgDgMgEQAPAEgBgEQgBgCAQAFQgCgEgDgCQgEgEgNgEIALADQgBAAgBAAQAAgBAAAAQgBAAAAAAQAAAAABgBIADgBQAGACACgCQADgDAQAFQgBgCgZgHIANABQAEAAgGgEQgFgGgIgDIgDgBIASADQgLgDAHAAQAKAAgCgDIAGADIgBgEQgIgDgKgBIgNgDQgCgEARABQAQACAOAEQgLgEgFgFIgFAAQAEgCgQgHQgTgJgCgFQgGgCgFABQgEABgHgDQgDgDACgCQACgDAJACQAKAEAIABQAIAAAIADQABgCgKgDIgKgDQAJADAWAFIADgFQgNgCgDgCIAJAAQABAAAAAAQAAAAAAAAQAAgBAAAAQgBgBAAAAIAGAAIAFgBIgJgFQgBAAgBgBQAAAAAAAAQABAAABAAQACAAACABQAAAAAAAAQAAAAAAABQAAAAABAAQAAAAABAAIACACIALgBQgJgBgGgEQgFgEgFAAQgNgFAIgBQAAABAGACIAJACIADgCQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQgFgDgEgBIgMgCIADgEQgDgCgGgBQgGAAgDgDQAGADANACQAMABgBgCIAHADIgEAAQAHADAJAAIgbgLQgPgHABgEQgDgCAHgBQAFgBgMgDIADABIgDgGQAGACgBABQgBACAGABQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBQgBgBAHAAIABADQABACAKACQADgCgGgEIgMgIQgGgCgEAAQABAAAAAAQABAAAAgBQAAAAAAgBQAAgBAAgBQgCgEAAgBIgPgFQgLAAAGADQAGAEgHAAQgIgDACgCQAAgBAAAAQABgBAAAAQAAgBgBAAQAAgBAAAAQALACATACQgDgDAFgBIAIgBQgEgCgDABQgCAAgFgDQgCgDAcAGIALACIgNgFIgOgDQAAAAABAAQABAAAAgBQAAAAABAAQAAgBAAAAQgBgCgGgCQAJACgBgCQgBgBAHADIgDgBIAKAEQAOACACgCIAEgCIAEABQAEgCgFgBQgJgDgDgDQARAFgGgEQgEgCgIgCIgQgDIACgCIgRgEQAIACgJgGQAEACArANQgFAAAEABIAJADQAHgBgPgGQgMgFALABQgRgEgGABIgOgHIADACIAIgEQADgCgJgEIAHACQABgBAAAAQABAAAAgBQAAAAgBgBQAAAAgBAAIgKgFIAMAEQAIABgEgDIgGgDQgHgCgFAAIgIgBIgJgDQgHgDALABQgGABAKACIACgDQAAAAAAgBQAAAAAAAAQAAgBgBAAQgBgBAAgBIALAEQAFgBgGgCQgHgDABgBIAHACQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBIgMgCQAHgCAPADQAAgCgLgDIgQgGQAJAAADgCQAEgDAGAAIgFgEQgEgCAFAAIgMgEQgEgCgLgCQgIAAALADQAHACgMgCQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBgBIgFgDIADABQAGgDgagKQgYgJAKgDIAOADQAEAAgJgDQgJgCAAgBIACgMQAKAFAFgCIAJgCIgPgDQAFgBADACQADABADAAIgHgEIAZADIgGgGQgFgEgMgDQAFgHgHgNQgJgOgCgGQgBgCAMgBQAJAAgKgDIALACIADgGQACgEAGgBIgKAAIgDAAQANAAgEgCQgJAAgEgDQgBgBgBAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAGADQAEACAIAAQAHgBgEgBIgLgEIAMADQgGgEAKgBQAJgBgJgEQgEgBgCABQgBABgEgBQgHgDAIgFQAJgEgHgEIAHABIgCgDQADABAPAAQABABABAAQABAAABAAQAAgBAAAAQAAAAAAAAIgBgCQgIgCgOAAQgLAAgEgDQANACABgCQABgDAGABQADgEgJgHQgLgHgBgDIAgAAIgJgCIAEAAQAGgCgIgBQgHgBgGABIAEABQABABgIAAQAFAAgFgDQgEgDAKAAIAHAAIgBgCIgQgBQAFgIgGgRIAHgFQAEgDAIAAQADgDgEgEIgJgGQAEAAgDgEQgCgEAOAAIgNgCIAHAAQgFgBAEgBQABAAABAAQAAAAABAAQAAAAABgBQAAAAAAAAIgPgBQABAAAAAAQABgBAAAAQAAgBgBAAQAAgBgBgBQgEgEACgCIAEAAIgFgBQgBAAAAAAQAAgBAAAAQAAAAAAAAQABAAABgBIAMAAQgTgFAHgJQAHgLgGgDQAOgEgIgEQgHgEAYgFQAEgCgMABQgNAAABACQgDgHAFgTQAEgRgGgHQAEgEAFgRQADgLAPgIIAGgBIgHgBIgKABIgHADQADgDAAgKQAAgIARgJIgLADQgBgBARgLQAPgJgKAAIAHgBIAKgEQgJgBAUgRQAbgVAEgIQgBABAQgHIgGgCQAFgDACAAQACAAAEgCQADgEgLAFQgKAFAEgFQAJgFABgDQABgEABgBIgFACQgFACADgDQAEgBADgCIgFgFIAHgGQAEgDAEgBQAKgIgHACQgHABALgIIgMADIAEgDQABABAEgDIgCgCIAKgIQAFgEgBAAQgCgBgFAFQgDACACgDQAPgJgFAHIAIgKIAAABIAIgHQAFgFgCgCIACAAQAFgIgKAHIgTALQAJgJACgFIgTAOQAHgFgDABQgBAAgBAAQAAAAAAAAQAAAAAAgBQAAAAABgBIAEAAQAFgGAPgLQALgLACgEQAFgEgDAFQgFAHADAAQAGgHAJgEIAPgHQAygPAuAkQApAgAPAyQANAmABAoQABAUgDANIgKAFQgGAEAIAAQgGABgEACQgGADAAADQAJAAAAADIABAFQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgGADAIACIANADIgPAGQAEAHAKABQgEAOABAIQABAMANAHQgQACgBAGQAAAEACAFIgNABIAQADQgFgBgFADIgJADIAMAAQgGABAEACQAFACgSAAQATAHAQALIgLgBQALADgQADQgQACAQADQAPAMgaATQAAABAAAAQAAAAABABQAAAAAAAAQABABABAAIAFACIAMgGIgHAIIgEgBQgCAFAGAIIAKALQgLAHgFARQgEAPgQAGIAbAEIgOgBIgOABQAEAEAWABIgPACQAMACgHAEQgHAEARACQgJAAgDADQgEACAIACIgLAAQgJgBADADQANAAACACIAHAEQAAABgKABQgKABADACIgFgCQgFABADACQACABAGADIAJAAQAGAAADABIgNABQgIAAgGgDQgFABAFADQAFACAJABIAGgBIgGAMQgCgCgEAAIgHABQAQADAHAGIgRAAIAGACIgFAAIANAFQgJAAgDABQgFACAIACIAKgBIgGADQgDABAIACIgMgCQgJAIAMAPIgCgBQgDACAGAEIANAHQgDANgNAOIAOAEIgNgCQACAFgPAHQgPAHAAADIAMACQgGABAEACQACABgMgBQAJAMAHAGQgIgBgDABIgFADQAQAFgGABQgIACAGADIgDgCQAAADAGAFIgHgCQgEACAEADQAEADAAABIgLgBQgFgBAAADQAEABATAIIgFABQgMABAIADIgGgCIgBAEIgDgBQADADgEACQgFABAFAEIgDgBQADAOgDADIgHgCIAOAKIgKgDIgCAEIgFgCQANAFgPACQgRACABADIgDgCQgHgBgCACQgDADgDAAQAVAEAFAGIgNgFIAAADIgBgBQgIgCABACQAAAAAAABQAAAAgBAAQAAAAgBAAQgBABgBgBQABADAGAAQABAAABAAQABAAABAAQAAAAABABQAAAAAAAAQgHgBACADQACAFgLgCIAKALIgJgDIAKAFQAEADgEAAQgBgCgFgCQgGABAHAGQAGAEgMgCQgBADANADQgFgBAAADIABAFIgMgEQABAAABABQAAAAABABQAAAAAAAAQAAABAAAAIgDABQgCgCgGgCIgDAFQgCADADADIAFABQgKACANAPIgFgEQgEgCgGAAQABADAJADQAKAEADADIgIgDQgEgCgHgBIAPAIIgOgEQAHAGgUAGQgQAFASAKIASAEQgJgBgDADQgCACgPgCIAHACIgPgCIAUAHIgOgEIAGAEIgKgDQAJAFgJAAQgJgBAHAFIgGgDQAHAFgHABQgIABACADIgKgEQgBABAAAAQgBAAAAAAQAAABAAAAQAAAAAAABIACADIAKACIgQgCIAIAEIgHgCQAEAFgBABQgCABAFAEQgKgFgGABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgCADACACIgJgCQAAABAFADIALADIABgCQAHAEgJgCQgLgCACACIAKAEIACADIgEgDQgHgCAAADQAAACgJgEQgEgBADADIAFAEIAKABIgFAIQgKgEgFgBIAEADIgDgBQgKgCAHAHQAFAGgMgCIAKADIgEgBQABABAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABABAAQAAAAACABQgFgCgBACQgBAEgDAAQAJAFABADQgHABgYgGQAIAFACAFIACAHIgEgBQgIgDgBgCQgGAAAGAGQAGAHgMgBIANAEQgBACgMgFQgJgDAEAEIAKADQACAEgBACQgGgCgCAAQgDABgEgDIACADIgDgBQABAEAJADIgJgCIAPAGQgCABgGgCIgNgDIAJAGIgEgCIAHAGQgFgEgJgEQgKgEgGAAIAKAGQAHAEgFAAQgCgDgIgBQgKAAgHgFIAEAIQABAFAHAFQgTgIAFAGQAJAJgBAAIgJgDIABAHQgDgDgGgCIgLgDIAPALIgWgLQgBAAgBgBQgBAAAAAAQgBAAAAAAQAAAAAAAAIADADIgCgBIgBAEIgJgFQgFgDgEAAQADADAEADIgGgEIATAOQAIAGgFAAIgGgBgACPDnIAAAAg");
	this.shape_2.setTransform(21.7,51.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#202020").s().p("AgCAAQABAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAABABQABAAABAAQgFgCAAAAg");
	this.shape_3.setTransform(2.7,93.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,43.3,103.6);


(lib.Path_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAnBKQjVjohFh8IFxGAIB2BtIgFAQQgDAXAEAhQhdhchsh1g");
	this.shape.setTransform(24.5,28.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.9,56.7);


(lib.Path_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag4DjIgljwIjRlYQBWB3B3B4QDrDwCkAMQgfAIgfAhQhABAgCB3g");
	this.shape.setTransform(30.3,35.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60.6,71.7);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSBOQgnkTAIiEIBHHPIAeCHIgKANQgLASgLAdQgUhwgSiLg");
	this.shape.setTransform(5.2,33);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,10.4,66);


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdCmQgShOgwgIIC/lCIh1HlQABgmgJgng");
	this.shape.setTransform(9.6,24.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.3,48.7);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AASBBIg0hiIi2hfIGwB9QgcADgOATQgbAmBGBIg");
	this.shape.setTransform(21.8,13);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.5,25.9);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah5gxIDzBDIhXAgg");
	this.shape.setTransform(12.3,5.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.5,10.1);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E3D1C").s().p("AUOdkIh0hEQgNgMgRANQgJAHgXAbQgrAygWgZQgMgOgWh6QgXh7gNgQQhyiOjWkrQigjihWh4QiXjSh5ifQjqk2jWjqQj3kPjwjGQiXh8iahiIhAgoQheg7hKghIgsgVQhDgfhNgfQBGjRBCidQBcjcBBhJIANApQARAyAYAnQBKB/BqgOQA4gIA/hVQAng1BFiAQBIiFAhguQA6hSAxgDQgCANABATQACAlAPAaQAwBVCegzIgDAoQgBAvALAnQAmB+CUgHQgGAIgHAMQgPAZgHAZQgRA4AcAnQAkA0BwAPIgKAWQgKAcgFAaQgPBVAxAvQAiAiBDALIgTAjQgUArgEAmQgOB3CQAQQgKAKgKARQgWAggHAcQgXBbCAAPQgIAGgJAJQgSATgIATQgbA9BUAkIAiAMQgIAIgKAOQgTAbgFAYQgTBMB3ASQgIAKgIAQQgQAegDAbQgKBUB6AMIgdAsQgVAyAnAeQAfAWBFALIAFAFQAIAHATAIQA8AZCMAWIBVAcQBnAoBeA7QEuC/BfE+QBpFcAEHFQACC2gSB6QgRB6gcAEIgKABQgwAAhwg8g");
	this.shape.setTransform(152.6,195.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,305.2,390.5);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.NewPatternSwatch3, null, new cjs.Matrix2D(1.083,0,0,1.083,84.7,61.9)).s().p("AmQhMIgXhEINOEhg");
	this.shape.setTransform(249.1,336.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.NewPatternSwatch3, null, new cjs.Matrix2D(1.083,0,0,1.083,85.1,57.7)).s().p("Amgg/IgihBIOFEBg");
	this.shape_1.setTransform(248.6,307.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(img.NewPatternSwatch3, null, new cjs.Matrix2D(1.083,0,0,1.083,85.1,60.3)).s().p("AmdAGIhXheIPpCxg");
	this.shape_2.setTransform(237.8,283.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(img.NewPatternSwatch3, null, new cjs.Matrix2D(1.083,0,0,1.083,86.7,62.9)).s().p("AnTgaIOmAuIt1AHg");
	this.shape_3.setTransform(225.4,259.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(img.NewPatternSwatch3, null, new cjs.Matrix2D(1.083,0,0,1.083,83.9,59.2)).s().p("An8gTIP5AQIvTAXg");
	this.shape_4.setTransform(217.3,241.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.bf(img.NewPatternSwatch3, null, new cjs.Matrix2D(1.083,0,0,1.083,81.2,56)).s().p("Am0AfINphmItDCOg");
	this.shape_5.setTransform(198.3,223);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.bf(img.NewPatternSwatch3, null, new cjs.Matrix2D(1.083,0,0,1.083,89.1,58.5)).s().p("AjyBfIHljzInGEpg");
	this.shape_6.setTransform(168.8,198.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.bf(img.NewPatternSwatch3, null, new cjs.Matrix2D(1.083,0,0,1.083,86.1,56.9)).s().p("AkOCgIIdlTInqFng");
	this.shape_7.setTransform(150.2,167.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.bf(img.NewPatternSwatch3, null, new cjs.Matrix2D(1.083,0,0,1.083,81.1,63.5)).s().p("AlAC8IKBmkIpCHRg");
	this.shape_8.setTransform(133.5,139.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.bf(img.NewPatternSwatch3, null, new cjs.Matrix2D(1.083,0,0,1.083,90.7,66.1)).s().p("Al5EeILzpbIqtJ7g");
	this.shape_9.setTransform(113,104.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.bf(img.NewPatternSwatch3, null, new cjs.Matrix2D(1.083,0,0,1.083,91.7,57.1)).s().p("AmEFtIMJr9Iq8Mhg");
	this.shape_10.setTransform(90.3,81);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.bf(img.NewPatternSwatch3, null, new cjs.Matrix2D(1.083,0,0,1.083,86.8,62.6)).s().p("Al3IJILvwiIqyQzg");
	this.shape_11.setTransform(73.6,53.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.bf(img.NewPatternSwatch3, null, new cjs.Matrix2D(1.083,0,0,1.083,82.9,57.8)).s().p("AiADqIEBoKIjRJBg");
	this.shape_12.setTransform(34.2,69.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.bf(img.NewPatternSwatch3, null, new cjs.Matrix2D(1.083,0,0,1.083,82.6,63.2)).s().p("Ah/E/ID/qEIizKKg");
	this.shape_13.setTransform(12.9,53.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,293.8,350.9);


(lib.tailFin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_16();
	this.instance.setTransform(24.7,137.3,0.587,0.587,0,0,0,20.8,68.5);
	this.instance.alpha = 0.449;

	this.instance_1 = new lib.Path_1_2();
	this.instance_1.setTransform(42.5,111.2,0.587,0.587,0,0,0,30.3,35.9);
	this.instance_1.alpha = 0.449;

	this.instance_2 = new lib.Path_2_2();
	this.instance_2.setTransform(56.6,81.4,0.587,0.587,0,0,0,39.5,14.7);
	this.instance_2.alpha = 0.449;

	this.instance_3 = new lib.Path_3_2();
	this.instance_3.setTransform(65.4,59.3,0.587,0.587,0,0,0,46.9,9);
	this.instance_3.alpha = 0.449;

	this.instance_4 = new lib.Path_4_2();
	this.instance_4.setTransform(81,39.1,0.587,0.587,0,0,0,53.6,10.8);
	this.instance_4.alpha = 0.449;

	this.instance_5 = new lib.Path_5_2();
	this.instance_5.setTransform(92.6,20.6,0.587,0.587,0,0,0,38.2,10.8);
	this.instance_5.alpha = 0.449;

	this.instance_6 = new lib.Path_6_2();
	this.instance_6.setTransform(26.2,118.5,0.587,0.587,0,0,0,25.6,64.3);
	this.instance_6.alpha = 0.578;

	this.instance_7 = new lib.Path_7_1();
	this.instance_7.setTransform(13.6,135.3,0.587,0.587,0,0,0,22.8,85);
	this.instance_7.alpha = 0.578;

	this.instance_8 = new lib.Path_8_0();
	this.instance_8.setTransform(42.9,90.4,0.587,0.587,0,0,0,40.6,33.2);
	this.instance_8.alpha = 0.578;

	this.instance_9 = new lib.Path_9_0();
	this.instance_9.setTransform(54.1,67.4,0.587,0.587,0,0,0,52,8.7);
	this.instance_9.alpha = 0.578;

	this.instance_10 = new lib.Path_10_0();
	this.instance_10.setTransform(62,49.9,0.587,0.587,0,0,0,61.9,7.7);
	this.instance_10.alpha = 0.578;

	this.instance_11 = new lib.Path_11_0();
	this.instance_11.setTransform(70.2,36.2,0.587,0.587,0,0,0,72.1,18.8);
	this.instance_11.alpha = 0.578;

	this.instance_12 = new lib.Path_12_0();
	this.instance_12.setTransform(66,97.9,0.587,0.587,0,0,0,112.3,166.6);
	this.instance_12.alpha = 0.73;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,131.9,195.6);


(lib.sideFin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_20();
	this.instance.setTransform(-1.9,17.2,0.587,0.587,0,0,0,26.8,4.7);
	this.instance.alpha = 0.449;

	this.instance_1 = new lib.Path_1_5();
	this.instance_1.setTransform(3.5,5.6,0.587,0.587,0,0,0,43.1,8.2);
	this.instance_1.alpha = 0.449;

	this.instance_2 = new lib.Path_2_5();
	this.instance_2.setTransform(2.8,-3.8,0.587,0.587,0,0,0,55.8,11.4);
	this.instance_2.alpha = 0.449;

	this.instance_3 = new lib.Path_3_5();
	this.instance_3.setTransform(6.4,-13.9,0.587,0.587,0,0,0,56.9,13.1);
	this.instance_3.alpha = 0.449;

	this.instance_4 = new lib.Path_4_5();
	this.instance_4.setTransform(4.7,-23,0.587,0.587,0,0,0,51,9.7);
	this.instance_4.alpha = 0.449;

	this.instance_5 = new lib.Path_5_6();
	this.instance_5.setTransform(-5.8,-3.1,0.587,0.587,0,0,0,80.5,37.1);
	this.instance_5.alpha = 0.578;

	this.instance_6 = new lib.Path_6_4();
	this.instance_6.setTransform(-2.7,-2.9,0.587,0.587,0,0,0,94.2,49.8);
	this.instance_6.alpha = 0.73;

	this.instance_7 = new lib.Path_12_1();
	this.instance_7.setTransform(2.7,2.9,0.587,0.587,0,0,0,94.2,49.8);
	this.instance_7.alpha = 0.391;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-32.1,116.1,64.2);


(lib.Bass = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("Al1MpQh+gehGhCQgmgjgQgvQgSgzAOgxQAGAxAbAkQAWAdAnAXQBAAmByAbQB1AaBvgFQC8gJBwhnQBohdBUiUQAqhJAWgyQAagvAehOQA8ibANiPQATiZhpifQg+hnhUhFQhRhChPgvQgzgghug6QB2AOBEAYQBcAgBdBJQAkAdAlApQAzA4AnBAQAfA1AMAXQAXAtAOArQAZBVgIBuQgOCdhACkQggBSgbAyQgYAygqBMQgsBMgmA0Qg6BPhCA4QhHA/hiAjQhaAhhZAAIgdAAQhyAAhpgYg");
	this.shape.setTransform(-127.6,-157,0.587,0.587);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AmTL7IhmgcQh1grhUg2QhDgshYhRQCwBLDNBJQBCAUAcAGQBJAPBBgFQBDgBBNg9QAuglBdheQAUgQAVgPIAggVIAAgBIARgFIACAAIAJgBQAvgFAmgIQBJgOBGgcQAxgUArgYQAWgMALgIIAggVQAogeAmglQB6h5ApiVQAbhSgFhgQgFhYgehOQgVhAgvg3IhFhEQhfhYhDgrQhIgvhmgiQBvgEBZAiQBeAkBfBYQBCBBAJAKQA6BCAZBMQAiBaAFBkQAGBugfBeQguCoiJCHQgqAqguAhIgjAYIgkAWQgwAbg2AWQhJAdhUARQgrAJgyAFIgBAAIgVAOQgSANgRAOQgVASgvAuQgsAtgcAXQgoAigxAVQgyAVgvAEIgmABQg+AAg/gOg");
	this.shape_1.setTransform(-108.3,-147.4,0.587,0.587);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().bs(img.NewPatternSwatch6).ss(5,0,0,4).p("AHsgyQhahBjZkBQjDjqhHggQgMgFhtg9QhXgwg6gQQiyg0hMC2QgXA6hbB3QhABmBDAwQAmAcAUgdQAJgNAZhNQA4ivCAg6QAXgLA6AlQA7AlBDBFQCnCoA+C0QBZEDAgBqQA4C1AABDQAABWAjA8QAuBMByA+QByA/BVgnQBDgeBPhyQAigwgEheQgDhZgjhpQgihqg4hYQg7hdhEgxg");
	this.shape_2.setTransform(-199.5,-175.6,0.587,0.587);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(0,0,0,0)","rgba(191,151,31,0)","#BF971F","#A47D1A","#815C15","#57350E","#42210B"],[0,0.737,0.737,0.812,0.89,0.965,1],-46,-78.9,50.1,81).s().p("AF0LmQhyg+guhMQgjg8AAhWQAAhDg4i1QgghqhZkDQg+i0inioQhDhFg7glQg6glgXALQiAA6g4CvQgZBNgJANQgUAdgmgcQhDgwBAhmQBbh3AXg6QBMi2CyA0QA6AQBXAwQBtA9AMAFQBHAgDDDqQDZEBBaBBQBEAxA7BdQA4BYAiBqQAjBpADBZQAEBegiAwQhPByhDAeQghAPglAAQg7AAhGgng");
	this.shape_3.setTransform(-199.5,-175.6,0.587,0.587);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#57350E","#654319","#8E6F3A","#B19356","#CCAF6B","#DFC37B","#EACF84","#EED387","#E6C14C","#E1B724","#DDB323","#D2A922","#BF971F","rgba(191,151,31,0)","rgba(0,0,0,0)"],[0,0.008,0.031,0.051,0.075,0.098,0.122,0.145,0.302,0.49,0.576,0.655,0.737,0.737,1],-46,-78.9,50.1,81).s().p("AF0LmQhyg+guhMQgjg8AAhWQAAhDg4i1QgghqhZkDQg+i0inioQhDhFg7glQg6glgXALQiAA6g4CvQgZBNgJANQgUAdgmgcQhDgwBAhmQBbh3AXg6QBMi2CyA0QA6AQBXAwQBtA9AMAFQBHAgDDDqQDZEBBaBBQBEAxA7BdQA4BYAiBqQAjBpADBZQAEBegiAwQhPByhDAeQghAPglAAQg7AAhGgng");
	this.shape_4.setTransform(-199.5,-175.6,0.587,0.587);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(42));

	// mouth
	this.instance = new lib.mouth();
	this.instance.setTransform(-58,-139,1,1,1.5,0,0,102.6,-5.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-7.7,regY:8.4,x:-168.5,y:-127.7},0).wait(5).to({rotation:-0.5,x:-168.1,y:-123.8},0).wait(1).to({rotation:-2.6,x:-167.5,y:-119.8},0).wait(1).to({rotation:-4.6,x:-166.7,y:-116},0).wait(1).to({rotation:-6.7,x:-165.9,y:-112},0).wait(1).to({rotation:-8.7,x:-164.8,y:-108.2},0).wait(1).to({rotation:-10.7,x:-163.7,y:-104.4},0).wait(1).to({rotation:-12.8,x:-162.4,y:-100.7},0).wait(30));

	// side fin
	this.instance_1 = new lib.sideFin("synched",0);
	this.instance_1.setTransform(-58,-74.9,1,1,0,0,0,-58.8,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0,regY:0,rotation:1.6,x:0.8,y:-73.8},0).wait(1).to({rotation:3.2,x:0.7,y:-72.2},0).wait(1).to({rotation:4.8,x:0.6,y:-70.5},0).wait(1).to({rotation:6.4,x:0.5,y:-68.9},0).wait(1).to({rotation:8,x:0.3,y:-67.3},0).wait(1).to({rotation:9.6,x:0.1,y:-65.7},0).wait(1).to({rotation:11.2,x:-0.2,y:-64},0).wait(1).to({rotation:12.8,x:-0.6,y:-62.4},0).wait(1).to({rotation:10.8,x:-0.2,y:-64.5},0).wait(1).to({rotation:8.8,x:0.2,y:-66.5},0).wait(1).to({rotation:6.8,x:0.4,y:-68.5},0).wait(1).to({rotation:4.8,x:0.6,y:-70.6},0).wait(1).to({rotation:2.8,x:0.8,y:-72.6},0).wait(1).to({rotation:0.8,y:-74.7},0).wait(1).to({rotation:-1.3,y:-76.7},0).wait(1).to({rotation:-3.3,x:0.7,y:-78.8},0).wait(1).to({rotation:-1.5,x:0.8,y:-77},0).wait(1).to({rotation:0.2,y:-75.3},0).wait(1).to({rotation:1.9,y:-73.5},0).wait(1).to({rotation:3.6,x:0.7,y:-71.7},0).wait(1).to({rotation:5.4,x:0.6,y:-70},0).wait(1).to({rotation:7.1,x:0.4,y:-68.2},0).wait(1).to({rotation:8.8,x:0.2,y:-66.4},0).wait(1).to({rotation:10.5,x:-0.1,y:-64.7},0).wait(1).to({rotation:7.9,x:0.3,y:-67.4},0).wait(1).to({rotation:5.2,x:0.6,y:-70.1},0).wait(1).to({rotation:2.6,x:0.8,y:-72.8},0).wait(1).to({rotation:-0.1,y:-75.5},0).wait(1).to({rotation:-2.7,x:0.7,y:-78.2},0).wait(1).to({rotation:-5.4,x:0.5,y:-80.9},0).wait(1).to({rotation:-8,x:0.2,y:-83.6},0).wait(1).to({rotation:-10.7,x:-0.3,y:-86.3},0).wait(1).to({rotation:-13.3,x:-0.9,y:-89},0).wait(1).to({rotation:-11.6,x:-0.5,y:-87.3},0).wait(1).to({rotation:-10,x:-0.2,y:-85.6},0).wait(1).to({rotation:-8.3,x:0.1,y:-84},0).wait(1).to({rotation:-6.7,x:0.4,y:-82.3},0).wait(1).to({rotation:-5,x:0.5,y:-80.6},0).wait(1).to({rotation:-3.3,x:0.7,y:-78.9},0).wait(1).to({rotation:-1.7,x:0.8,y:-77.2},0).wait(1).to({rotation:0,y:-75.4},0).wait(1));

	// Layer 1
	this.instance_2 = new lib.Path_18();
	this.instance_2.setTransform(-36.4,10.6,0.587,0.587,0,0,0,16.4,16.1);
	this.instance_2.alpha = 0.449;

	this.instance_3 = new lib.Path_1_3();
	this.instance_3.setTransform(-38.2,20.8,0.587,0.587,0,0,0,24.4,28.4);
	this.instance_3.alpha = 0.449;

	this.instance_4 = new lib.Path_2_3();
	this.instance_4.setTransform(-43,26.7,0.587,0.587,0,0,0,32.1,37.1);
	this.instance_4.alpha = 0.449;

	this.instance_5 = new lib.Path_3_3();
	this.instance_5.setTransform(-45.4,35.4,0.587,0.587,0,0,0,32.4,39);
	this.instance_5.alpha = 0.449;

	this.instance_6 = new lib.Path_4_3();
	this.instance_6.setTransform(-52.1,40.7,0.587,0.587,0,0,0,28.7,33.5);
	this.instance_6.alpha = 0.449;

	this.instance_7 = new lib.Path_5_4();
	this.instance_7.setTransform(-50.8,26.2,0.587,0.587,0,0,0,47.9,58.5);
	this.instance_7.alpha = 0.578;

	this.instance_8 = new lib.Path_6_3();
	this.instance_8.setTransform(-50.2,28.4,0.587,0.587,0,0,0,54.6,65);
	this.instance_8.alpha = 0.73;

	this.instance_9 = new lib.Path_19();
	this.instance_9.setTransform(87.5,-76.2,0.587,0.587,0,0,0,20.9,28.2);
	this.instance_9.alpha = 0.559;

	this.instance_10 = new lib.Path_1_4();
	this.instance_10.setTransform(39.4,-121.5,0.587,0.587,0,0,0,21.7,51.9);
	this.instance_10.alpha = 0.559;

	this.instance_11 = new lib.Path_2_4();
	this.instance_11.setTransform(14.3,-141.1,0.587,0.587,0,0,0,20.5,48.5);
	this.instance_11.alpha = 0.559;

	this.instance_12 = new lib.Path_3_4();
	this.instance_12.setTransform(69.4,-106.1,0.587,0.587,0,0,0,22.1,32.5);
	this.instance_12.alpha = 0.559;

	this.instance_13 = new lib.Path_4_4();
	this.instance_13.setTransform(-17.3,-158.3,0.587,0.587,0,0,0,20.8,39.9);
	this.instance_13.alpha = 0.559;

	this.instance_14 = new lib.Path_5_5();
	this.instance_14.setTransform(-46.8,-168,0.587,0.587,0,0,0,20.1,38);
	this.instance_14.alpha = 0.559;

	this.instance_15 = new lib.Path_8_1();
	this.instance_15.setTransform(131,10.3,0.587,0.587,0,0,0,65.3,144.6);
	this.instance_15.alpha = 0.559;

	this.instance_16 = new lib.Path_17();
	this.instance_16.setTransform(-155.5,-193,0.587,0.587,0,0,0,21.2,12);
	this.instance_16.alpha = 0.988;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhUAQQgLgjARgcICoARIifBOQgJgOgGgSg");
	this.shape_5.setTransform(-159,-198.1,0.587,0.587);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AhfBUQgpgjAAgxQAAgwApgjQAogjA3AAQA4AAApAjQAoAjAAAwQAAAxgoAjQgpAjg4AAQg3AAgogjg");
	this.shape_6.setTransform(-155.8,-198.7,0.587,0.587);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF799").s().p("AiBBxQg2gvABhCQgBhBA2gvQA2gvBLAAQBMAAA2AvQA2AvAABBQAABCg2AvQg2AvhMAAQhLAAg2gvg");
	this.shape_7.setTransform(-155.8,-198.6,0.587,0.587);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AiTCBQg+g1AAhMQAAhKA+g2QA9g2BWAAQBXAAA9A2QA+A2AABKQAABMg+A1Qg9A2hXAAQhWAAg9g2g");
	this.shape_8.setTransform(-155.8,-198.7,0.587,0.587);

	this.instance_17 = new lib.Path_5_3();
	this.instance_17.setTransform(-155.7,-204.7,0.587,0.587,0,0,0,21.3,9.5);
	this.instance_17.alpha = 0.988;

	this.instance_18 = new lib.Path_11_1();
	this.instance_18.setTransform(-215.3,-169.7,0.587,0.587,0,0,0,65,81);
	this.instance_18.alpha = 0.781;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#3F622E","#557C3E","#8DAB4F","#A9C358","#C7C95E","#F9D467","#F9D672","#FADD8E","#FCE8BC","#FCE9C0"],[0.047,0.157,0.259,0.314,0.416,0.6,0.627,0.678,0.745,0.753],141.8,-203.9,-71.4,89.6).s().p("EAvUAvkQgegZgUhjQgKg1gUihQgUiagRhPQgbh7gog8QgshCikiBQifh7jSiIQn0lCkChAIwujyQtKi+irg/Qhlglk8jiQkbjLltkfQlikWkEjgQkWjwgmhAQghg5iZihQjKjRhuh0QmxnHgsicQgShBAdiBQAbh3Alg+QAzhVAVhDQAhhugehiQgfhpBMjKQAghTAlg9QAng/AbgLIAzgXQAbgNAWgDQA6gJBhAwQCLBGBgAjQCGAyBvAKQClAPAiAAQBRAAAygeQA1gfB8ADQB0ADAlAZQAZARC7gEQDIgEAXAGQAGACDmAQQESAUDjAcQL6BdFYC6QCgBWDpBsQEZCCBGAjQF6C/DmD4QFBFbEUGUQDoFUCBEPICUEtQBwDhBGCYQDdHhATC9QATC5AxDPQAaBuApCeQAJAoASArIAcBFQAdBSgJB+QgMCnhfDsQhkD6hsBhQhIBBg1CXQgTA2gNAMQgHAHgKAAQgNAAgTgPg");
	this.shape_9.setTransform(-41.7,-41,0.587,0.587);

	this.instance_19 = new lib.Path_14();
	this.instance_19.setTransform(66.2,63.8,0.587,0.587,0,0,0,8.1,10.6);
	this.instance_19.alpha = 0.449;

	this.instance_20 = new lib.Path_1_0();
	this.instance_20.setTransform(74.4,84.3,0.587,0.587,0,0,0,9.6,24.4);
	this.instance_20.alpha = 0.449;

	this.instance_21 = new lib.Path_2_0();
	this.instance_21.setTransform(89.9,100.5,0.587,0.587,0,0,0,6.7,43.9);
	this.instance_21.alpha = 0.449;

	this.instance_22 = new lib.Path_3_0();
	this.instance_22.setTransform(105,103.5,0.587,0.587,0,0,0,9.8,38.6);
	this.instance_22.alpha = 0.449;

	this.instance_23 = new lib.Path_4_0();
	this.instance_23.setTransform(114.4,102.8,0.587,0.587,0,0,0,7.9,28.8);
	this.instance_23.alpha = 0.449;

	this.instance_24 = new lib.Path_5_0();
	this.instance_24.setTransform(87.6,86.2,0.587,0.587,0,0,0,44.3,76.2);
	this.instance_24.alpha = 0.578;

	this.instance_25 = new lib.Path_6_0();
	this.instance_25.setTransform(113.8,89.5,0.587,0.587,0,0,0,8.8,18.8);
	this.instance_25.alpha = 0.578;

	this.instance_26 = new lib.Path_7_0();
	this.instance_26.setTransform(88.8,86,0.587,0.587,0,0,0,56.1,88);
	this.instance_26.alpha = 0.73;

	this.instance_27 = new lib.Path_15();
	this.instance_27.setTransform(-88.7,19.7,0.587,0.587,0,0,0,4.9,19.7);
	this.instance_27.alpha = 0.449;

	this.instance_28 = new lib.Path_1_1();
	this.instance_28.setTransform(-93.8,27.8,0.587,0.587,0,0,0,5.3,33);
	this.instance_28.alpha = 0.449;

	this.instance_29 = new lib.Path_2_1();
	this.instance_29.setTransform(-99,31.1,0.587,0.587,0,0,0,6.9,43);
	this.instance_29.alpha = 0.449;

	this.instance_30 = new lib.Path_3_1();
	this.instance_30.setTransform(-104.1,37.7,0.587,0.587,0,0,0,6,44.6);
	this.instance_30.alpha = 0.449;

	this.instance_31 = new lib.Path_4_1();
	this.instance_31.setTransform(-111.3,40.1,0.587,0.587,0,0,0,4.2,39);
	this.instance_31.alpha = 0.449;

	this.instance_32 = new lib.Path_5_1();
	this.instance_32.setTransform(-101,28.4,0.587,0.587,0,0,0,19.2,63.1);
	this.instance_32.alpha = 0.578;

	this.instance_33 = new lib.Path_6_1();
	this.instance_33.setTransform(-99.4,30.1,0.587,0.587,0,0,0,26.8,73.4);
	this.instance_33.alpha = 0.73;

	this.instance_34 = new lib.Path_0();
	this.instance_34.setTransform(154.6,-20.1,0.587,0.587,0,0,0,12.2,5);
	this.instance_34.alpha = 0.449;

	this.instance_35 = new lib.Path_1();
	this.instance_35.setTransform(152.1,-33.8,0.587,0.587,0,0,0,21.7,13);
	this.instance_35.alpha = 0.449;

	this.instance_36 = new lib.Path_2();
	this.instance_36.setTransform(149.9,-48.9,0.587,0.587,0,0,0,24.6,6.5);
	this.instance_36.alpha = 0.449;

	this.instance_37 = new lib.Path_3();
	this.instance_37.setTransform(139,-65.1,0.587,0.587,0,0,0,36.4,9.6);
	this.instance_37.alpha = 0.449;

	this.instance_38 = new lib.Path_4();
	this.instance_38.setTransform(134.2,-79.1,0.587,0.587,0,0,0,43.1,4.6);
	this.instance_38.alpha = 0.449;

	this.instance_39 = new lib.Path_5();
	this.instance_39.setTransform(126.5,-92.6,0.587,0.587,0,0,0,42.5,9.1);
	this.instance_39.alpha = 0.449;

	this.instance_40 = new lib.Path_6();
	this.instance_40.setTransform(111.3,-107,0.587,0.587,0,0,0,34.6,8.5);
	this.instance_40.alpha = 0.449;

	this.instance_41 = new lib.Path_7();
	this.instance_41.setTransform(88.8,-126.6,0.587,0.587,0,0,0,22.2,10);
	this.instance_41.alpha = 0.449;

	this.instance_42 = new lib.Path_8();
	this.instance_42.setTransform(78.4,-146.3,0.587,0.587,0,0,0,21.7,13.5);
	this.instance_42.alpha = 0.449;

	this.instance_43 = new lib.Path_9();
	this.instance_43.setTransform(65.6,-164.6,0.587,0.587,0,0,0,27.9,22.8);
	this.instance_43.alpha = 0.449;

	this.instance_44 = new lib.Path_10();
	this.instance_44.setTransform(58.6,-180.4,0.587,0.587,0,0,0,37.8,26.5);
	this.instance_44.alpha = 0.449;

	this.instance_45 = new lib.Path_11();
	this.instance_45.setTransform(44.5,-194.1,0.587,0.587,0,0,0,34.6,41.6);
	this.instance_45.alpha = 0.449;

	this.instance_46 = new lib.Path_12();
	this.instance_46.setTransform(11.6,-195.9,0.587,0.587,0,0,0,14.8,22.3);
	this.instance_46.alpha = 0.449;

	this.instance_47 = new lib.Path_13();
	this.instance_47.setTransform(36.2,-210.4,0.587,0.587,0,0,0,33.4,40.2);
	this.instance_47.alpha = 0.449;

	this.instance_48 = new lib.Group();
	this.instance_48.setTransform(78.8,-125.3,0.587,0.587,0,0,0,146.9,175.4);
	this.instance_48.alpha = 0.609;

	this.instance_49 = new lib.Path();
	this.instance_49.setTransform(79,-124.1,0.587,0.587,0,0,0,152.6,195.2);
	this.instance_49.alpha = 0.73;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.shape_9},{t:this.instance_18},{t:this.instance_17},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(42));

	// tail
	this.instance_50 = new lib.tailFin();
	this.instance_50.setTransform(156,107.1,1,1,0,0,0,19.9,63.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(1).to({regX:65.9,regY:97.8,scaleX:1.01,skewX:-1.3,skewY:4.3,x:203.3,y:144.5},0).wait(1).to({scaleX:1.03,scaleY:1,skewX:-2.7,skewY:8.6,x:204.4,y:148.1},0).wait(1).to({scaleX:1.04,skewX:-4,skewY:12.8,x:205.1,y:151.5},0).wait(1).to({scaleX:1.06,skewX:-5.3,skewY:17.1,x:205.6,y:155.2},0).wait(1).to({scaleX:1.05,scaleY:1,skewX:-6.7,skewY:11.9,x:207,y:150.7},0).wait(1).to({scaleX:1.03,skewX:-8,skewY:6.7,x:208,y:146.2},0).wait(1).to({scaleX:1.02,skewX:-9.3,skewY:1.5,x:208.6,y:141.7},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:-10.7,skewY:-3.8,x:208.8,y:137.3},0).wait(1).to({scaleX:1,skewX:-12,skewY:-9,x:208.7,y:133},0).wait(1).to({skewX:-12.4,skewY:-9.4,x:208.9,y:132.6},0).wait(1).to({skewX:-12.8,skewY:-9.8,x:209,y:132.3},0).wait(1).to({skewX:-13.2,skewY:-10.2,x:209.3,y:131.9},0).wait(1).to({skewX:-13.6,skewY:-10.6,x:209.4,y:131.5},0).wait(1).to({regX:19.9,regY:63.8,scaleX:1,scaleY:1,skewX:0,skewY:0,x:156,y:107.1},0).wait(1).to({regX:65.9,regY:97.8,scaleX:1.01,skewX:-1.3,skewY:4.3,x:203.3,y:144.5},0).wait(1).to({scaleX:1.03,scaleY:1,skewX:-2.7,skewY:8.6,x:204.4,y:148.1},0).wait(1).to({scaleX:1.04,skewX:-4,skewY:12.8,x:205.1,y:151.5},0).wait(1).to({scaleX:1.06,skewX:-5.3,skewY:17.1,x:205.6,y:155.2},0).wait(1).to({scaleX:1.05,scaleY:1,skewX:-6.7,skewY:11.9,x:207,y:150.7},0).wait(1).to({scaleX:1.03,skewX:-8,skewY:6.7,x:208,y:146.2},0).wait(1).to({scaleX:1.02,skewX:-9.3,skewY:1.5,x:208.6,y:141.7},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:-10.7,skewY:-3.8,x:208.8,y:137.3},0).wait(1).to({scaleX:1,skewX:-12,skewY:-9,x:208.7,y:133},0).wait(1).to({skewX:-12.4,skewY:-9.4,x:208.9,y:132.6},0).wait(1).to({skewX:-12.8,skewY:-9.8,x:209,y:132.3},0).wait(1).to({skewX:-13.2,skewY:-10.2,x:209.3,y:131.9},0).wait(1).to({skewX:-13.6,skewY:-10.6,x:209.4,y:131.5},0).wait(1).to({regX:19.9,regY:63.8,scaleX:1,scaleY:1,skewX:0,skewY:0,x:156,y:107.1},0).wait(1).to({regX:65.9,regY:97.8,scaleX:1.01,skewX:-1.3,skewY:4.3,x:203.3,y:144.5},0).wait(1).to({scaleX:1.03,scaleY:1,skewX:-2.7,skewY:8.6,x:204.4,y:148.1},0).wait(1).to({scaleX:1.04,skewX:-4,skewY:12.8,x:205.1,y:151.5},0).wait(1).to({scaleX:1.06,skewX:-5.3,skewY:17.1,x:205.6,y:155.2},0).wait(1).to({scaleX:1.05,scaleY:1,skewX:-6.7,skewY:11.9,x:207,y:150.7},0).wait(1).to({scaleX:1.03,skewX:-8,skewY:6.7,x:208,y:146.2},0).wait(1).to({scaleX:1.02,skewX:-9.3,skewY:1.5,x:208.6,y:141.7},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:-10.7,skewY:-3.8,x:208.8,y:137.3},0).wait(1).to({scaleX:1,skewX:-12,skewY:-9,x:208.7,y:133},0).wait(1).to({skewX:-12.4,skewY:-9.4,x:208.9,y:132.6},0).wait(1).to({skewX:-12.8,skewY:-9.8,x:209,y:132.3},0).wait(1).to({skewX:-13.2,skewY:-10.2,x:209.3,y:131.9},0).wait(1).to({skewX:-13.6,skewY:-10.6,x:209.4,y:131.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-266.6,-238.7,534.6,477.6);


// stage content:



(lib.FWW_TilesAll_v01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Large Mouth Bass
	this.instance = new lib.Bass("synched",17);
	this.instance.setTransform(1611.6,1330.3,0.655,0.655,37.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).wait(1).to({regX:5.2,regY:17.1,scaleX:0.68,scaleY:0.68,rotation:34.6,x:1572.5,y:1229.4,startPosition:18},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:32,x:1530.1,y:1120.3,startPosition:19},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:29.3,x:1482,y:1013.7,startPosition:20},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:26.7,x:1429.8,y:909.8,startPosition:21},0).wait(1).to({scaleX:0.76,scaleY:0.76,rotation:24.1,x:1374,y:808,startPosition:22},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:21.5,x:1315.4,y:708.2,startPosition:23},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:18.9,x:1254.6,y:610.8,startPosition:24},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:16.3,x:1193,y:517,startPosition:25},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:13.8,x:1129.9,y:425.6,startPosition:26},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:11.2,x:1068.9,y:341.2,startPosition:27},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:7.3,x:1020.6,y:277.3,startPosition:28},0).wait(1).to({scaleX:0.88,rotation:1.5,x:1015.2,y:270.7,startPosition:29},0).wait(1).to({scaleY:0.88,rotation:-4.2,x:1009.3,y:264.5,startPosition:30},0).wait(1).to({rotation:-9.9,x:1003,y:258.9,startPosition:31},0).wait(1).to({scaleX:0.88,rotation:-15.6,x:996.2,y:253.9,startPosition:32},0).wait(1).to({scaleY:0.88,rotation:-21.2,x:989,y:249.6,startPosition:33},0).wait(1).to({rotation:-26.8,x:981.4,y:246,startPosition:34},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:-32.4,x:973.7,y:243.1,startPosition:35},0).wait(1).to({rotation:-37.9,x:965.7,y:240.9,startPosition:36},0).wait(1).to({rotation:-43.4,x:957.6,y:239.3,startPosition:37},0).wait(1).to({scaleX:0.88,rotation:-49.2,x:946.8,y:243.4,startPosition:38},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:-58.1,x:906.3,y:303.4,startPosition:39},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:-66.9,x:865.9,y:363,startPosition:40},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-75.6,x:825.4,y:422.5,startPosition:41},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:-84.3,x:785,y:481.7,startPosition:0},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:-91.8,x:744.7,y:541.1,startPosition:1},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:-93.3,x:705.1,y:601.7,startPosition:2},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:-94.7,x:666.1,y:662,startPosition:3},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:-96.2,x:627.2,y:722,startPosition:4},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:-97.7,x:588.7,y:781.7,startPosition:5},0).wait(1).to({scaleX:0.78,scaleY:0.78,rotation:-99.1,x:550.8,y:840.9,startPosition:6},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:-100.6,x:513.3,y:899.8,startPosition:7},0).wait(1).to({scaleX:0.76,scaleY:0.76,rotation:-102,x:476.1,y:958.5,startPosition:8},0).wait(1).to({scaleX:0.75,scaleY:0.75,rotation:-103.5,x:439.2,y:1016.9,startPosition:9},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:-104.9,x:402.8,y:1075.3,startPosition:10},0).wait(1).to({scaleX:0.73,scaleY:0.73,rotation:-106.3,x:366.7,y:1133.5,startPosition:11},0).wait(1).to({scaleX:0.72,scaleY:0.73,rotation:-107.7,x:331.2,y:1191.4,startPosition:12},0).wait(1).to({scaleX:0.71,scaleY:0.72,rotation:-109.1,x:296.2,y:1249.2,startPosition:13},0).wait(1).to({scaleX:0.7,scaleY:0.71,rotation:-110.4,x:262,y:1307,startPosition:14},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:-111.1,x:247.4,y:1332.1,startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).to({_off:true},1).wait(179));

	// water splash
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BEDAEE").s().p("AeVEGQhZAAgtgCQhEAAgrgCQg9gCgxgIQgygJgigNQgsgRgcgbIgXgaQgNgQgKgIQgfgcg2gPQhKgVh6gCQikgCgjgEQgtgFgUgLQgPgJgKgOQgKgPAAgOQgQAMgVAfQgWAhgNAMQgTASgZAIQgZAHgYgGQgagHgQgWQgRgVACgZQADgaAYgZQAOgQAggdQAPgRAigzQAdgtAXgVQAYgVAkgOQAbgLAqgKQAggHAUAAQAdgBAUAMQAiAUAFAvQAEAqgTApICfAGQBgADA8ASQAfAKBKAjQAwAZAWAPQAlAcAKAjQB7AUCYAEQBkADCxgFIAwgDQAagDATgHQAZgKAvgaQATgIATgBQAWgBAQAJQAVANAGAbQAGAZgLAZQgQAog2AcQhGAnhkALQg2AHhjAAIgcAAgAsrDLQgNgHgVgQQgXgTgKgGQgZgPglgIQgWgEgtgEQg9gHgiAPQgNAGgVAPQgWAQgLAFQgSAJgZADQgOACgeAAQg9gChVgKIiSgSQiUgPi3ADQh3ACjVAOIg3AAQgfgCgWgKQgagNgOgZQgPgbAKgZQAPgrBYgIQCwgOBwgFQCegICDAFQCIAHB9ASQBDAKAfABQA2ACAogPQAKgDAOgHIAXgKQBggsB/ATQAyAGA9ASQAlALBIAXQAmAOASAMQAdASAIAaQAFARgDAUQgEATgLAPQgYAkgsALQgQAFgQAAQgaAAgYgNg");
	this.shape.setTransform(1543.6,1068);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BEDAEE").s().p("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");
	this.shape_1.setTransform(1527.8,1060.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BEDAEE").s().p("ACTJ6QgdgIgZgTQgYgSgSgaQgYgggQg1IgggKQg4gUhGgtIgEgDIiyAAIiUAAQgdAAgPAFQgRAGgPAQQgRAVgKAKQgmArgvAFQgZACgXgMQgYgNgHgVQgGgTAHgWQAFgOAOgWIALgSQgNgFgRgDIgxgFQgtgFgaAKQgKAEgQAKQgQALgJAEQgNAGgTACIggACQgvgBg+gGIg9gHIgygFQg/gFg/gCQg6gCg+gBIg8gBIiugEIgHAAQgcgBgKgCQgWgDgPgJQgRgLgJgSQgKgUAHgTIABgBQAMgiA+gIQB8gRBZgGIBKgDQBLgCBCABQBlAEBdAMQAxAHAYAAQAoABAfgKIASgHIARgIQAOgGAPgEQAAgNAEgQQAIgsgBgQIh2gwQgRgGgJgGQgOgJgHgLQgOgVAIgbIACgGQALggAcgWQgOgGghgHQgggIgPgFQg4gUgSgqQgLgZAHgcQAIgeAZgPQAMgHATgEIAigDQDigJDGAhQBZAPBUAXQACgcANgUQAPgYAYgCQAMAAAPAGIAZAOQAjAUBEAgQBlAvBiAzQAGgMAKgLQAIgKALgIQgOgFgggHIgugKQg5gPgVgkQgNgVAFgZQAEgRAKgKQAGgHAHgEQALgGARgBQAJABAWgBQBJAHA/ALQCMAECUAaQAUgiANgQQA/hZBPgTIAGgCQAggGAeAKIALAFQAVAMAHATQAFAPgFAQQgCAHgEAHQgGANgVAZIgDAEIAUAMIAcAOQgSAbgbAyQgNAWgXAsIgKASIgCAEQgZAEgeAKIAJgiQgWgFgagCQg5gEgLgCQADgPgGgQQgFgQgPgIQgJgFgNAAQgJgBgOACIgLACIgTADQgPAEgLAGQgMAFgOAOQgPAQgMAGIgTAMQgLAIgEAHIAAAEQADAGAGAGQAJAIALADIAIACIgPAOQgFgBgHAAIgUACIgZAHQgOAFgJAHQgHAFgHAJIgGAIQgNARgGAGIgRAPIgFAEQgEAEAAAFIgUAFIgOgEQgngMgogLQANgDAKgHQAFgEADgGQgBgIgEgGQgFgKgNgHQgKgFgQgFIgxgQQgbgIgXgEQg3gLgtALIgKADIgLADQgTADgXgCIgsgHQg4gLg8gHQg8gGhEgCQg2gDhTABQgeACgKALIACAAQAAAJAIAKQAHAJAMAFQAKAEAOABIAYABQBaAAA6AEQBPAEBDALIAaAEIgdALQgfAJgPAOQADAJAHAJIgSADIgSAGQgQAFgUgCIglgFIg0gGIgsgCQgwAAg6ADQgrABhAAEQggACgHAPIADAAQgCAJAGAJQAGAJAJAEQAJAEALABIAVAAQBNgEAtAAQBEAAA2AGIA2AIQAfADAYABIAQAAQAJgBAGgDIAMgHIANgHQAOgEAWACQAPACAJACQANADAJAFIANAIQAHAGAGACQAOAHAQgEQAJgCAHgFQAEgDAEgFQAEgFABgHQABgGgCgGIgCgFQAwAHAmAIIAFACQA/AKBBAWIAtAOQAfAOAgAJIgegBIhCgEQgfgCgdAAQglAAgjADQgIACgGAAIgOABQgYABgdgFIg5gPQgzgQgsgKQgHAKgOAKQgIAHgLAHQgbASgtANQgWAGgXAEQgXAEgaACQghADg/ADIgXACQgwADgRASIABABQAAALAMAMQAKALAQAIQANAFASADIATADQgSALgFARIAAABQgHATAKAUQAKATASALQAQAJAWADIARACIAXACIB+AAIB5gDIAagBICIgGIBSgCIBMABIAdAAQA9AAArgCIAQgCIAPACIANgBQALgNAegGIAMgDIAMgEQAIgCALgBQAVgBAeAFIAEAAQAdAEARADQAQAEAOAFIgLATQgIANgFAKIAZAAQBOgCBDAEIApADIAXACQAkADAcAAIATAAQALgBAHgDIAPgHIACgBIBLAAQgKAQgQARQAHAPgDAQQgGAYgeAQQgMAGgPAEQgQAEgSADIgjAEIgYANIiRBNQg5AfgnALQgfAJgcAAQgWAAgTgFgARxJlQgcgJgagTQgZgTgSgaQgZghgQg2QgTgFgQgGQg5gUhHguIgEgCIhNgBIhZAAIABAAIAIgRQAOAAAKADQAGAAAJAFQAIAEAGABQAPADASgHIAMgGQAEgFACgGIABgDQACgFgBgHQgBgHgDgGIA5ABQAzABAoAGQAeAEAZAGQAoALAYASQAIAGAKALIASARQAWATAhAMQAaAIAkAGQAlAGAtACIBRACIACAAQAkABBAgBIAoAAQA7gBAjgFQATgDARgEQABgNgHgMIAIgIQALgMAIgMQAQgaAGgcQATADAvADIApACIALABQgHALgMAKQgIAOgNAMQgNALgSAKQglAWgtAKIgIACIgBADQgDALgIAJQgJAKgQAGQgXAKgiABIgCAAIgiACIgYALIgeAPIhwA1Qg6AcgoAJQgSAFgSACIgUABQgXAAgWgGgAKaF1IAAAAgAS7DwQgcgNgNgDIgVgEIgPgCIARABIAIABIAbACIAdAAIAEAJQADAHAAAHIgLgFgAArCMIACgBIADgCIACAFIgHgCgAPyg3IgBgEQgCgLgKgDQgGgCgIAAQheg4hZgvQhBgjhEgfIhOgnIALgOIAigqQAGgGAVgYIAKgLIBVhaQAlgpAbgWQAcgYAvgkIAQgNQAOgKAJgFQAXgOAXgCQAagDAYAMQAZAOAEAWQAEASgLATQgGANgQASQgdAggbAhQgyBFgyBOIAEABQAbALAQAVQAbAhgHAtQgEAcgOAWQgIAMgLALQAqgFAoAEIAIABQAkACARAPQANALAHARIAAABIACAHQAEAPgCAQIgBAGIgKABQgyACgEAEQAGgMgCgMg");
	this.shape_2.setTransform(1486,1046.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BEDAEE").s().p("ADMORQgmgLgigcQgfgcgVgmQgcgwgQhQQgYgHgUgIQhJgehdhEIgGgEIm1gBQgoAAgTAIQgVAIgUAZQgWAfgMAOQgwBBg/AHQgiAEgfgTQgfgTgIghQgFgcAPghQAKgWAZghIAVgbQgSgIgWgEQgWgFgtgDQg9gIgiAPQgNAGgVAPQgWAQgLAGQgSAJgZADQgOABgeAAQg9gBhVgKIiSgTQiUgPi3AEQh3ACjVANIg3ABQgfgCgWgKQgagNgOgZQgPgbAKgZQAPgsBYgHQCwgQBwgGQCegICDAGQCIAGB9AUQBDALAfABQA2ACAogPQAKgEAOgHIAXgMQATgIAUgHQgCgSADgYQAGhCgGgYIjKhGQgcgKgRgIQgXgNgNgRQgbgiAMgyQALgsAlghQgagJg1gLQg2gLgagIQhegdglhAQgVglAGgqQAHgtAhgWQAQgLAagFIAugFQG5gSFnBsQAAgqAPgeQASglAggCQARgBATAJIAhAUQAsAdBeAwQD8CADwCbQAQgqAjguQAjgwBLhfQAagnAjhKQAnhUASggQBTiKBugUQAsgIAoASQArATAIAnQAGAhgWAmQgOAWgkAnQiECMhCC2QApgOAigGIANggIAqhjQArhjAWgnQARgdAagkIAvg+IBsiKQAwhAAggiQAignA+g3QAkggARgMQAfgWAegFQAjgGAgASQAiATACAgQADAagTAcQgNASgcAaQiWCHh8ClQApAOAXAfQAiAtgNA+QgNA8gvAlQBEgPBDAAQA4gDAcATQAWANALAZQALAYgCAbQgBAwgpArQAYAAAWAPQAVAMAMAWQAVAogGA6QBZAAB6AGQAcABAQAEQAZAFAPAMQAXAVgBAiQAAAigZATQgQANgZAEQgPADgfAAIhRAAQApAFAfAKQAfAKBKAjQAwAYAWASQAlAcAKAjQB7AUCYAEQBkACCxgFIAwgDQAagDATgGQAZgKAvgbQATgIATgBQAWgBAQAJQAVANAGAbQAGAagLAYQgQAog2AdQhGAmhkAMQg9AHh4gBQhZAAgtgBQhEAAgrgCQg9gDgxgIQgygJgigMQgsgRgcgcIgXgZQgNgQgKgJQgfgbg2gPQhKgVh6gCQicgCgogEQgCAtgUAqQgMAZgVAaQAOAWgCAZQgFAlgpAYQghAUgxAGIgvAGIggAWQhAAqh/BLQhNAugyARQgsAPgmAAQgcAAgZgIgAHrHEQgdAOgjAbIgpAjQBvgBBqgHIAIgIIAjgmIgHgCQgagHgQgVQgFgHgEgHQg4ADgpATgAEVEgIgSAUQgTASgJAKQgKALgJATIgPAiIAHAHQAjgaASgTQAMgLAQgSQAIgIAGgJQAHgOgCgUIgHgBQgKAAgKAHgAsIDUQgFAcgcASQgYAQgiAEQgMACgxABQgmABgWAGQATAQA+ASQAqANAUATQAeAJA1ASIAVgKQAmgPAzgFQAegDA9AAIB+ABQgIgMgFgLQgKgaAAgiQAAgVAFgqQhDAlhNgIQgsgFg2gXIheguIgBAAQATAagFAcgAPyEHIAmACQgOgGgMgIIgFgFIgHARgAnHglQgPAIgQADQAoANAYAJQBAAVAuAaQAdARArAfIBHAxQAUANBjA6QApAYAdAVQAKgQANgRQgQgKgWgSQjIikjohoQgGAWgWAOgAK0CDQAeAMAQAbIAFAJIANgNQAJgIAKgHQgngFgYgPQgZgTgFggQgGgjAXgSQg8AWg9AJIgGBFQAsgFARAAIAGAAQAfAAAWAJgACFBMIgBALQAPANAKAMQAUgSAMgNIATgWIgHgHQgegjAFgmQgkARgHBQgAwhA2Ig4gVQgVAGgXgCIBkARIAAAAgAu3imIEfBWQiVg6icghIASAFg");
	this.shape_3.setTransform(1543.6,1031.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BEDAEE").s().p("AnNNEQgdgIgbgVQgYgVgSgcQgLgTgKgYQgIgYgHgdQgTgFgRgHQg6gWhJgzIgEgDIiZAAIi8gBQgfAAgPAGQgRAGgQATQgRAXgKALQgmAwgxAFIgQAAQgTgCgQgJQgYgPgHgYQgFgWAKgZQAHgRASgYIAPgVQgOgGgRgDQgSgEgigDQgvgGgbAKQgKAFgRALQgRALgJAEQgOAGgTACQgLABgXgBQgwgChBgJIhvgSQhZgMhngEIg8gCQhagDigAFIgpgBQgXgCgRgIQgTgLgLgTQgLgVAIgUIAAgBQAMgiBDgIQCFgPBWgJQB5gJBkAAQBoACBgAMQA0AGAYAAQApAAAggMIASgJIARgJQAPgHAPgFIAAgDIACgeQAGgzgEgTIiTg5QgVgHgMgHQgRgKgJgNQgUgbALgmQAJgkAcgaQgSgHgngHQgogKgTgHQhEgXgagxQgPgdAGghQAGgiAZgRQANgJATgEIAkgFQFUgWEXBKQAAggAMgXQAOgcAagDQAMgBAQAHQAFACAUAMQAjAUBIAjQDEBbC7BuQAQgeAagkIBXhuIAHgKIACgEQgNgYAKghQALgkAdgZQgRgGgmgJQgngIgSgHQhCgVgYgxQgOgbAHggQAHgiAagQQANgJAUgEIAlgEQBqgEBjAFQCyAICdAkQAjgrAYgXQAagbAvgoIAMgKQATgPAJgGQAYgQAWgDQAbgDAYAPQAZAPABAZQACAVgOAVQgKAPgVAUIgeAcQAjAUA8AdQDKBiDBB3QAPgdAaggIBdhsQAWgdAdg2QAgg+ARgWQBEhlBXgMQAjgFAfAOQAiAQAIAfQAGAZgQAeQgHAMgQAUIgNAQQhdBvguCSQAfgJAagCIAIgVIACgDIAghGQAhhGAPgZQANgUATgaIAigrIAbgjIA5hAQAngvAagZQAcgbAxgoQAdgXANgHQAZgQAXgDQAPgBANADQANACAMAHQAaAQADAZQACAVgNAWQgJAPgVAUQhPBQhJBcIg2BHQAdAMAQAZQAYAjgMAxQgEARgIAPQAYAAAWAKIAFADQAQAJAKAMQAaACAOALQAQAKAHATQAFAMAAANIApgxQAkgqAYgaIACgCQAagYAsglQAcgWAMgHQAYgOAWgDQANgBANADQAMADAMAIQAZAQACAaQACAVgPAWQgKAQgWAUIgkAkQhMBNhGBXIgiAsQAdAMAPAZIAFAIIAwACQAUABALADQARADALAIQAQAPgCAaQgCAagUANQgNALgUADQgMABgZAAIgmAAIgDAFIAbAHQAPAFAgAPQAgABARAOQANAJAHAPIAHAGQAaAVAGAaQA9ALBHAFIA9ACQBEACCAgFQAYgBAKgBQASgDAOgFIADgBQARgJAegSQANgGAOgBQAQgBALAGQAPAJAEAUQADATgJARQgPAdgpAUQgYALgaAHQgmAKgtADQgwAChagFQgzgDgggDIgSgBQgzgDgggEQgtgEgkgJIgCAAIgVgGIgHgNIgEgFQgHgDgIAAIAGgHIAAgBQgGgGgIgGIgOgKQghgSgOgGIgbgOIgBgBQgWgXgngNQgZgJghgFQgVgcgjgQIgVgIIgVgHQgtgSgagFIgYgIIgDgBQgPgCgNADIgEgDIgEgBQgGgCgHAAQAwh2BThgQAbggAKgSQARgegFgbQgDgPgJgMIgSAAQgwgBgwAKQAYgSANgZIgNABQhTAHhABhQgOAUgfA7QgbA0gUAbIhWBgIgWAbQgXgIgUgEQgJgDgGAAQgJgBgLAGIgDACQiJhaiRhQIgtgYQhJgmgkgZIgbgQQgPgIgNAAIgFAAQgWADgOAYQgNAWgCAeQg5gSg8gPQhtgch0gPQiHgSiTABIgbA4IgfA/IgQgEIgkgHIgCAEIACADIASAFIAdAKIgJAWIgHABIgLACQADATgHAyQgDAQAAAOQgQAFgPAGIglASQgRAGgTACQgSADgUgBIgCAAQADgHACgIIAeAEIgZgLIgDgBQABgJgBgIQgBgLgFgKQgIgCgLABQgKAAgMAEQgJAGgMAJQgSAPgQASQhbgLhigDQhFAAhNAEIhSAFIgeACIgwAGIiTATQhDAIgMAjIgBACQgGATAKAUQAHAPAMAKQgBAMgFAMQgLAcgcAUQgaATgsAPQgSAIgdAHQgjALgTANIAAAAQAIASAdATQAMAKASAIIATAKIAwAYIA2AMIAmAJIAIgDIAQgGIAegKQAWgIAUgJIAPgHIATgJQANgIAOgGIALgFIAKgDQAxgPA2gJQgCgMABgLIACgNQAAgRAJgXQAJgPAGgYIAHgUQgHABgHAAQgKgBgNgCIA/AAIAgABIAmAMIABABQAVAHAOAAQAXAGAGgCQAGgDANAGQAFAAAHAHQAYgBAgAGQAkAHAiAIIALADQAJgLANgMIAIgHIAOgDIAFAAIAbADIBEAGIAMAJIAKADIgMAIIgMAIIgeAZQgcAXgXAhIgLAOQgTAagIAaIAAAAQAAAHAEAIIAGAGIABACQAHAFAKACQAJABANgBIAYgGIACAAIAmABQAsACApADIgNAMQgeAfgPAXQAIAJALAJQAMAKAQAFQANAEARABIAhAAIAdAAQAQgBANgDQANgEAKgIQAKgHAFgHQAHgIABgGQACgGAAgCQAMgIANgGIALgKIABgCIAPACQBDAKAxADIAhAAQAUgCAOgGQAIgDAPgJIABgKIAPAAIgNAHIgDADQgFAegNAcQgJATgQAVIABADQAJAPgCASQgEAdgfATQgXAPgmAGIgkAGIgZARQgwAghfA4IgFADQg8AkgnANQgjAMgfAAQgVAAgTgFgA1wAqQgKABgMAEQgRAGgPAHQgmAWghAaQgWASgJAOQACALAIAKQAGAKAKAGQAJAEAMACIAWABIAVABQALAAAIgDQAJgDAFgHQAGgGABgHQABgHgDgFQgCgGgFgBQAXgUAggKIASgEQAIgEAEgFQADgFAAgIQABgIgDgIQgEgJgIgHQgIgGgJgDQgGgBgHAAIgJAAgAyghGQhYALhPAXIgmAMIgSAIIAAAAQAIAMAMAKQAMAMARAHQAOAGASADQANADAVACIAeAEQARACANgCQANgBALgFQAKgFAGgEQAGgFACgEIACgDQAngNAxgCQALABARgBQAIgBAHgDQgCgIgFgJQgEgKgIgJQgJgKgNgIQgMgIgOgEQgPgEgRABIgGAAQgNAAgPACgAlAh8IAkAIIABgDIgBgEIgngIIgpgDIgOgBQAfAEAbAHgAELJnQgZgPgHgaQgGgWAKgaQAGgRASgZIAOgWQgOgGgSgEIgDgBQAygBAoAEQAZAEAVAGQApAJAWAUQAIAFAKAMIALANIgBAAQgRAGgQASQgSAWgKAKQgnAugyADIgHABQgYAAgVgOgAKfJCQgtAAgkgFQglgGgZgIQgggMgVgTIgFgFQAQgEAeAAIAwACIBJAFIATAOIAHAFIAAABQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBIgBAAIAAgBIACAAIAKgOIABgCIAMgTIADgFQALgRAOggIAJgSIAGAAIgEgGIAqACIAaACQBAADBmgBIAKAAIAjgCQATgBAOgFQAMgEAVgLIATgLQAOgFAOgBIAFABQANAAAKAGQAPALAEAUQAEAUgIATQgNAfgpAXQggASgnALQgaAIgfAEQgWADgiACQggACgrAAIhiABIhNABIgDAAgAQIHBIgqAXQAIAIAJAGQALAIANAFIAEgDQAMgGANgJIAPgMIgCgaIAAgRIgpAXgAHWILIAAAAgABzG+QAcgKAvAHIAOABIAmAHIgKAAIiEACQAIgFAHgCgADyHDIAAAAgAIADyIgBgBIAJAAIgEADIgEgCgAH5DwIgEAAIgEgBIAIAAIAAAAIAAAAIACACIgCgBg");
	this.shape_4.setTransform(1525.6,1038.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BEDAEE").s().p("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");
	this.shape_5.setTransform(1539.1,1047);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BEDAEE").s().p("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");
	this.shape_6.setTransform(1536.9,1062.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BEDAEE").s().p("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");
	this.shape_7.setTransform(1551.4,1071.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BEDAEE").s().p("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");
	this.shape_8.setTransform(1547.7,1075.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BEDAEE").s().p("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");
	this.shape_9.setTransform(1545.6,1071.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BEDAEE").s().p("AMSEdQgpgFgegOQgSgJgagTIgqggQgjgXgzgPQgfgKg+gNQiFgchEgJQhwgRhbAEQhUADhuAWQgpAIiYAlQj2A7iOgMQhugIgYg+IgBgCIgOgJQgZgQglgHQgWgFgtgDQg9gIgiAPQgNAGgVAPQgWAQgLAGQgSAJgZADQgOABgeAAQg9gBhVgKIiSgTQiUgPi3AEQh3ACjVANIg3ABQgfgCgWgKQgagNgOgZQgPgbAKgZQAPgqBYgHQCwgQBwgGQCegICDAGQCIAGB9AUQBDALAfAAQA2ABAogNQAKgEAOgHIAXgMQBggrB/ASQAyAHA9ASQAjAJBDAYQATgEAVgBIBWAAQCGAACWgkIB/ghQBNgUAygJQCBgVCcARQB4AMClAoIBwAaIALgNQAOgPAggdQAPgRAig0QAdgtAXgUQAYgVAkgPQAbgKAqgKQAggHAUgBQAdAAAUALQAiAVAFAuQAEArgTAoICfAGQBgADA8ATQAfAKBKAjQAwAYAWASQAlAaAKAjQB7AUCYAEQBkACCxgFIAwgDQAagDATgGQAZgKAvgbQATgIATgBQAWgBAQAJQAVANAGAbQAGAagLAYQgQAog2AdQhGAmhkAMQg9AHh4gBQhZAAgtgBQhEAAgrgCQg9gDgxgIQgygJgigMQgsgRgcgcIgXgZQgNgQgKgJQgfgbg2gPQhKgVh6gCQiagCgpgEQBOANBCAEQBMAFATADQA1AIAjAWQApAZAPAxQAQAzgfAiQgTAWglAIQgYAGgqAAIklABQgyAAgZgCgAMAAJQAvAKAsAIQgMgDgIgEQgPgJgKgMQgKgPAAgQQgQANgUAcg");
	this.shape_10.setTransform(1543.6,1070.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BEDAEE").s().p("AZYDVQgdgEgbgFIgOgEQgkgKgcgPQgIgDgOgLQgMgIgKgFQgfgQgrgJQgrgJg1gFQAMgFALgLQALgQgGgVQgGgUgRgOQgPgLgWgFQgNgEgbgCQixgWiigWIiHgSIh0gQQhBgIgygDQg0gFhQAAIgIAAIAJgHQARgHAZgOQANgGAQgNIAWgPQAcgWAagJQAXgKAdgGQAYgFAhgEQAZgDASABQARAAAOADIALAEQAbALATAZQAOAWAGAWQAaADBmAGIANAAQBCAFAzALQAiAHA2ATIA/AYQAfAQATATQBoAPB4AEQBdAGCEADIAoAAQAUgBARgCQAZgEAkgKQAPgDAQAAQARABAOAFQATAFALAOQALAOADANQAHAWgLAQIgLAMQAAANgVAHIgBABQgCAIgZAKQgGAGgLAHQgNAJgMALIgfAUQgQAJgSAHQgVAHgVAEQgXADgYAAQgVAAgWgCgAPIDEIiugHIhDgDQgmgBgWgCQgigEgZgIQgTgFgSgLIgGgCQgVgMgLgDQghgNgngJIhMgNIgrgHQhHgKg1gFQhNgIhIAAIgTABQhBABheAMQggADg/AKIhAAKQi8AfiDgFQhRgEglgfIgBgBIgMgFQgXgHgcgEIg2gDQgugEggAIQgMADgRAHQgRAIgMADQgPAFgTABIgkABQg2gBhBgEQhJgGgvgDQiDgGiKACQg3ABhBADIhuACIgigBQgdgCgPgDQgOgDgMgFQgJgDgHgFQgUgMgMgUQgMgVADgUIAAgBQACgpA4gSIAFgCQAzgQBCgHQBCgHAqgJIAPgEQAkgKAigWQAkgWAjgIQATgFAUgDQAXgCAZACQAwAEApAQQAgANAbASIAMAHQAcAQAMAOIAQAKQAbgBAYgGQAJgBALgEIATgGQBWgWBiAJQArADAwAIQAiAFAyALIAhgCIBFgBQByAAB1gTQAdgCBLgPIA4gJIgFANQgIAWgJAJQgMALgiAGQgiAFgMANQgNAPAFAXQAHAUATAMQAQAKAYADQAOACAdAAIJKgEIBwAAQA+AAAyAEQAoACA1AFIBdAKIEBAdIB3ANIhEgFQAQADAKAAIARABQAKACADAJQAFALgHAXQgHAYgdAPQgUAKgcADIgZABIgdgBgAiRhuQgEgMgHgKQBigHBiAHIAUABQBjAGBrASQApAFAxAIIgLAAInpATQADgSgEgRgAFkheIADAAIgBAAIgCAAg");
	this.shape_11.setTransform(1604.9,1089);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BEDAEE").s().p("AXFD7IvLhtIizgSQhmgKhPgEQhggGh2AAQhHAAiRACQr8AKl2AGQg4AAgbgDQgvgHgfgUQgkgXgMgrQgMgsAbgdQAXgYBCgJQBDgKAXgWQARgQAQgrQAQgtAQgQQAZgYAnAEQAmADAaAaQAYAYAJAlQAIAigGAlQKDgKE7gDQC9gFB1AFQBjADCBAMIDjAXQGzAxHuA0QA2AHAXAFQArALAcAVQAiAZALAoQALArgXAeQgUAcgrAHQgOACgTAAQgUAAgbgDg");
	this.shape_12.setTransform(1680.1,1102.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},11).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[]},2).to({state:[]},78).wait(137));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;