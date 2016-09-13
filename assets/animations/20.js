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


(lib.flwrshort = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#716490").s().p("AgCAvQgBgFAFgbQAEgPgNgHQgMACgCAJQgQgBgKgIQALgFAUgPQARgQAMgEQAGgBABAFQACAGACABQAGABAEgFIAHgJQAKAHgEAMQgGAOAFAIIgHgGQgEgCgDACQgBAGAGAGQAGAFAAAFQAAAHgEAEIgGAIIgSgDQgCAFACAGQABAGgBAEQgFgCgFABIgFACIgCgBgAALADQAAALAGADQAEgGAAgKQABgIgGgEQgFAFAAAJgAAOgZQACADgCAEQAJACAIgDQAJgDgFgHQgGAIgIgHQgIgKgEgCQAAACgJAGQgFAEAEAEQABgDADgCIAIgCQgBADAEADg");
	this.shape.setTransform(23.3,-54.6,1.126,1.126);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#716490").s().p("AgQAbIAKgkQAAgDgDABQgGADgDgDQAKgSASACQgDAMACAJQACAGAIAJQgLgGgHAMQgFANgJAAIgDgBg");
	this.shape_1.setTransform(26.1,-64.5,1.126,1.126);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#313627").s().p("AgJARIgEgCQgCgEgPgCIAVgJQAKgEgBgNQACgCAMABIARAAQgBAKgKAIQgKAFAAALQgNgEgCAHQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_2.setTransform(21.7,-44.6,1.126,1.126);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A19CD4").s().p("AgbARQgBgHADgCIACgIIAGAAQAEAAABgEQAAgKABgBQAEAAABgIIAFgDIADgCIAKAIIgFAHQgDADAAAEQADAEAIABIADAAQAAABAGAEQAGACgCAGQgGgGgJAAQgCAFAEACIAGADQgIAEgJgHQgIgKgIABQgBAMgCAFQgEAIgGAAIgCgMg");
	this.shape_3.setTransform(22.9,-20.2,1.126,1.126);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AABAAA").s().p("AgCACQgFgCAAgDQADABAEgBQADgCAEACQgBADACAFIgKgDg");
	this.shape_4.setTransform(16.2,-67.3,1.126,1.126);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8A80B7").s().p("AgLAdIAEgOQABgFgHgDQAFgFgDgFQAJgBgDgKQgDgMAEgDQAFACADAMQACAKAIABQgSATALACQgFANgIAAIgFgBg");
	this.shape_5.setTransform(21.4,-62.7,1.126,1.126);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#96AA90").s().p("AgCAMQACgOgIgGQACgFAGAEQAEAEAAgHQAAAAAAAAQABAAAAABQAAABAAAAQAAABABABQAAAAAAABQAAAAABABQAAAAABAAQAAABAAAAQgDADgBAGIgCAJg");
	this.shape_6.setTransform(19.7,-20.8,1.126,1.126);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#96AA90").s().p("AgHgEQACgKAFABQACAAAJADQAAAEgHgBIgHgCIABAJIgEAGQgBAJgDAAg");
	this.shape_7.setTransform(22.8,-23.7,1.126,1.126);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A19CD4").s().p("AgFAFQADgHgHABQACgGAGgDQABgBAJgCQADAJgEAGQgDAIgFAEIgCAAQgFAAACgJg");
	this.shape_8.setTransform(13.5,-27.5,1.126,1.126);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8A80B7").s().p("AAHAKIgJgIIgEACIgGADIAEgHIgBgJIAJACQAFACAAgEQAFAEACADIgIgCIgCAHQADAAACADIAEACIgBACg");
	this.shape_9.setTransform(23.5,-23.8,1.126,1.126);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#787B67").s().p("AgFgFIAMADQAAACgEAEQgDgBgFADQgDgGADgFg");
	this.shape_10.setTransform(26.4,-30.9,1.126,1.126);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#809779").s().p("AAAAGQgHgBACgEIACgGIAFABQAEABAAADIgBAEQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAgBAAIgCAAg");
	this.shape_11.setTransform(27,-37.2,1.126,1.126);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#AABAAA").s().p("AgCAJQACgDAAgFQgIgBgCgFIAEgEIADgEQADABABgBIAEgBIAGABIgGAOQgDALgHADQAAgDADgDg");
	this.shape_12.setTransform(8.5,-41.4,1.126,1.126);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#96AA90").s().p("AgFATQAJgNgKgNQAAgEACgDIADgFIACACQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABIADASQACAOgIACg");
	this.shape_13.setTransform(9.8,-45.3,1.126,1.126);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A19CD4").s().p("AAAAWQgJACAAgHQAAgEAFgCQAEgCAAgFQgVgFgFgQQAKgGAWAAQgEANAHADIAPACQAIAFgJAIQgNAOgBACQgCgEgHACgAgBgEQABACAHAFQAGAFAEgHIgKgFQgDgCgDAAQgBAAgBACg");
	this.shape_14.setTransform(32.1,-55.3,1.126,1.126);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5E6F4B").s().p("AAAAKQAAgEgBgDQgDgDAAgBIgHABQgFABgBADQgFgEAHgCQAJgGABgCQAEACAGAIQAHAHAGgHQAGAGgJADQgFACgFAAIgFgBg");
	this.shape_15.setTransform(25.2,-58,1.126,1.126);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C0C6CE").s().p("AgBANQgCgNgCgDQABgEgBgHQgCgGADgFQACABACgDQACgDAFACQgDAJABATQABATgEALQgCgFgBgMg");
	this.shape_16.setTransform(24.7,-73.3,1.126,1.126);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#AABAAA").s().p("AABAIQAAgBgBAAQAAAAAAgBQAAAAAAAAQgBAAAAAAIgDAAQgBgGADgCIACgHIAGABQgDABAAAHIACAKIgEgCg");
	this.shape_17.setTransform(19.3,-18.1,1.126,1.126);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C0C6CE").s().p("AAAAFQgFgDAAgCQABgIAEAFIAGAHQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAIgDgBg");
	this.shape_18.setTransform(29.4,-24.7,1.126,1.126);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#787B67").s().p("AgWAOQADgOAOgEIAXgKIAFACIAAADQgBAAgBAAQAAAAgBAAQAAABAAAAQAAABAAABQAAADABADIgBADQgEgBgEADQgDADgFgBQAAAAgBgBQgBAAAAAAQgBAAAAgBQgBAAAAgBIgCgCIgKAFQgGACgBAGgAAAACQAMAFAAgJIgLgCg");
	this.shape_19.setTransform(20.9,-26.3,1.126,1.126);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3C5619").s().p("AgCAGQgIgIAFgIQAFAAAEAFIAEAIQgDgBgCgDQgCgEgBgBQgEACACAEIACAHQABABADgBIAEgBQgDAFgDAAQgCAAgCgFg");
	this.shape_20.setTransform(16.7,-30,1.126,1.126);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3C5619").s().p("AgWAPQAIgDABgFQADgEgCgIIABgDIADAAQgCALAKgHQAHgHgGgEQADABAGgDQAJgDADADQgDANgGADQgOgCgHAPQAAAGgGABIgDABQgEAAgBgFg");
	this.shape_21.setTransform(15.8,-25,1.126,1.126);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#536F2C").s().p("AALgGQgOAHgHAGQAIgPANACg");
	this.shape_22.setTransform(15.9,-24.4,1.126,1.126);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3C5619").s().p("AgFADQgDgDABgFIAJgDQAGgBAAAHQgEgEgEAAQgDADACADIABAKIgFgHg");
	this.shape_23.setTransform(21.6,-29.4,1.126,1.126);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#5E6F4B").s().p("AAGgMQAAAEgDAIIgDAMQgMgGASgSg");
	this.shape_24.setTransform(23.1,-34.9,1.126,1.126);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#809779").s().p("AgGAAIABgEQAIAAAEAEQABAEgIABQgGAAAAgFg");
	this.shape_25.setTransform(21.1,-38.1,1.126,1.126);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A19CD4").s().p("AgJACQABgIAIADQAHADABgFQAFAFgKADQgDADgDAAQgEAAgCgEg");
	this.shape_26.setTransform(22.9,-40.1,1.126,1.126);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#5E6F4B").s().p("AAAAVIgIABQAIgWgEgVIAGAAIAHADQgFAJABAKIADAVQgFgCgDABg");
	this.shape_27.setTransform(17.4,-39.2,1.126,1.126);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#5E6F4B").s().p("AgDABQADgHgCgEIACADQAAABAAAAQABAAAAABQABAAAAAAQABAAABAAQAFAGgJAJQgHgCAEgHg");
	this.shape_28.setTransform(20.6,-41.7,1.126,1.126);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#96AA90").s().p("AgFAEIACgHQADAAABACIAFABQgCAEgEAAIgFAAg");
	this.shape_29.setTransform(17.2,-49.8,1.126,1.126);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#809779").s().p("AgGARIgDgCQAEgDgBgEQAAgFgHgBQAAgCADgDQADgDAAgEQgBgMAJAFQAAABgBABQAAAAAAAAQAAABAAAAQAAAAAAgBQAAAGgDAFQgEAEAAAEQABABALABQAJABAAAEQgDAGgHABQgEgBgEACQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAgBAAg");
	this.shape_30.setTransform(10.8,-49.3,1.126,1.126);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#5E6F4B").s().p("AgDAQQAAgEACgDIACgEQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABIAEACIgFAHQAAAAgBABQAAAAAAAAQgBAAAAAAQgBABgBAAIgDgCgAAVAIIgGgHQgEgBABgHIALgCQAGgCABAIQgBADABAGQgBADgFAAIgDgBgAgYAAQgIgIAFgJQAIABADAFIAFAKIgBABQgCAFgDAAQgDAAgEgFg");
	this.shape_31.setTransform(19.2,-29.2,1.126,1.126);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#716490").s().p("AgqBiQAAgGAEgDQAFgDAAgFQgNgHgFgFQgKgKAKgLQgBgEgIABQgHABgBgEQACgEAHgEIALgEQACgEgBgFQgCgFACgEIAKgEQAGgCABgGQABgCgHgEQgHgDAAgEQABgNAPgJQAOgJAAgQQAIAEAFgDIAKgFIAAgJQgCgEACgFQAFgGAMAEQAMAFAFgDIADABQAHADACgJQADgKADgBQAGAFABAGQgKAGgEAEQgHAHABANQgKABgRAcQgOAWgRgKQgCAHADAHIAIAHQAAAXgTADQgbADgDAFQADABgCAJQAGAGAUgIQAQgGgEARQAAAAAAABQgBAAAAABQAAABgBAAQAAABgBAAQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAABQAGAFAJAAQADgFAAgJIACgHQABgEACgBQAGAGAKALQAKAJAMADQABgEAGgBQAFgDAEACIgDARQgEgBgFACQgOgEgCAIIgGgCQAHgKgIgJIgRgOQgDACgBAEQAAAHgCAEIgHADQgFACgFgCQgGgMAEgKQgHAAgJABIgQADQAAAHAJAHQAJAIACAGQABAGgGACQgGABgBADgAgLANIgDgUQgBgMAGgJIgIgDIgHAAQAEAXgJAUIAIAAIAEgBIAGACgAAPhLQAEANgMAGIgTAJQAMACADAEQADADgEAKQgCAGAFADQAMgKgGgHQACgIAOAFQABgLAKgIQAKgIABgJIgRgBIgGAAIgLABg");
	this.shape_32.setTransform(19.7,-38.1,1.126,1.126);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#A19CD4").s().p("AgLAWQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABgBAAAAQAAgBABgBQAAAAAAgBQAEgGACgRQACgOAKgCIgEASQgCAKABALQAAAJgFAGQgHgBgGgFg");
	this.shape_33.setTransform(19.3,-33.1,1.126,1.126);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#96AA90").s().p("AgLAWQAEgFABgDQAGABABgDQgDAAAAgEQgCgDAAgHQABgKgBgDIAEgHQAEgEAEgBQAAAFgGADQgDACgBAGQACAGgBAHIAIAGQAFAEAAAFQgLAGgJgEQAAAFACAEQgGgCABgEg");
	this.shape_34.setTransform(31.2,-28.2,1.126,1.126);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#96AA90").s().p("AABAFIgFgBQgGgFAKgDQAKgCgEAJQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgBAAg");
	this.shape_35.setTransform(21.8,-53.2,1.126,1.126);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#5E6F4B").s().p("AgEABQAAgJAEgGQAFAEAAAKQgBAIgEAHQgEgDAAgLg");
	this.shape_36.setTransform(25.2,-54.3,1.126,1.126);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#96AA90").s().p("AgEACQgEgCACgGIAMADQAEAEgGAGIgIgFg");
	this.shape_37.setTransform(19.2,-62.7,1.126,1.126);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C0C6CE").s().p("AgeAJQgBgFAGgIQAFgKgEgIQABgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAFAAgBAHQgBAIADABQAHAKAMgHQASgLAIACQgCAPgRABQAAAXgSAAQgUAAgEgQg");
	this.shape_38.setTransform(31.9,-69.2,1.126,1.126);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#A19CD4").s().p("AAAByQgCgFgCAIIgJgIQgGgEADgIQAHgfgLgaQgFgKgWgeQABgBAGgCQAEAFALAIQgCADAHACQAIABgBgEQADABgCAIQARgFAKgSQgGgCgEAFQgEAGgEgCQAAgFADgGQAFgGABgEQgDgCgLgDQgLgDgBgGIAKgFQAFgFAAgJQgKgFgEgEQgIgFgBgIQACgEAIgEQAHgEABgGQACgIgLgFQgNgFgBgEQAJABAGgCQAGgCAIgIIAHAFQAFACAGAAQgBACgGAEQgFADAEAFQARADAIAFQAKAHgBAMQAAADgFAAQgFABAAAEQAHAAACAJQACAJAHAAQABAFgIAHQgIAHAEAKIgIAZQgEANgJAIQABADAHAFQAHAFAAAFQAAAGgFAFIgBADQgEABgEAEIgGAIQABADgBAJQAAAJACADIgNgDQgIgCABAHIAQAEQgBADgEAFQgBAFAGACIgBAGIgIgJgAAMgpQgJAFgDAKQAGgBAJgFIAQgHQgFgEgGAAQgEAAgEACgAgWhGQAGAHAQADIACgXIgCAAQgRAAgFANg");
	this.shape_39.setTransform(29.2,-38.2,1.126,1.126);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#716490").s().p("AgHAZQgCgGAIgLQAHgJgCgMIgGgFQgGgCABgFIAEgBQADgBAAABQAAADgCACIAGACQAEABAAACQADAMgHAKQgGAMABAFIAHACIAAADg");
	this.shape_40.setTransform(34.2,-59.2,1.126,1.126);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#809779").s().p("AAAAOQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAAAABAAQgDgFACgIQACgLAEAAQAAACgCADIgCAGQACABgBAFQgBAHADABIgBADIgCgBg");
	this.shape_41.setTransform(30.8,-71.5,1.126,1.126);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#AABAAA").s().p("AAEAEQgEgEgGACQADgDADgDQAJACgCAHg");
	this.shape_42.setTransform(19.5,-71.3,1.126,1.126);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#96AA90").s().p("AgCgGQAEgJAHAMQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAgBgBAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAABgBAHQgBAIgFACQAAgLAFgGg");
	this.shape_43.setTransform(17.7,-72.6,1.126,1.126);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#96AA90").s().p("AAFAMIgFgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIgEgCQgGgCACgFIAFgMQAGACgIAKQgBADAGACIAJACIgBAEQAAAAAAABQAAAAgBAAQAAAAAAAAQgBABAAAAIgBgBg");
	this.shape_44.setTransform(16,-67.6,1.126,1.126);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#809779").s().p("AgRBBQABgEgFgFQgGgDAAgFQASgNgHgfQASgTgCgVQAIABAAgFQgBgIABgEIAPgOIAFACQgHAIgDAEQgDAJACAKIgDAAQgCAOgEADQgHAAAAAGIABAKQgDgBgEABIgFAGQAEABgCAFIAAAQQAAAJgFAFIgDgBQgHAGAFAHQAGAKAAACg");
	this.shape_45.setTransform(13.5,-58.7,1.126,1.126);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#96AA90").s().p("AgIAIIAFgGQADgCADABIAAgJQgBgFAHgBQgCAOgCACQgDAHgIAGQABgFgDgCg");
	this.shape_46.setTransform(13.3,-59,1.126,1.126);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#96AA90").s().p("AgBAdQAFgCADgGQAAgEgHgBQgNgBgBgBQAAgEAEgGQADgEAAgEQAAAAABAAQAAAAABAAQAAgBABAAQAAgBAAgBIADABIAEABQAAgCgFgKQgFgHAHgGIABAAIgBAFQgCADAAAEQACAAAEADQAEADAFAAIACADIAAADQgFgBgBADQgEgBgFACIgCAAQgEADgBAGQgBAJAIgBQAKABAAAHQgIAJgCAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAg");
	this.shape_47.setTransform(11.6,-50.5,1.126,1.126);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#8A80B7").s().p("AhwDLQAFgDgBgFIgBgJIAGAEQACAFAGgBIAJgKQAFgHgEgGQgDAAgTAHQgMAFgGgJQADgFAPgIQALgHABgMQgDgEgLABQgMAAgGgDQAAAAAAAAQAAgBABAAQAAAAABAAQABgBABAAQAAAAABAAQABgBAAAAQAAAAAAgBQABAAAAAAQADADAFAAIAJgBQAAgCgGgQQgFgLAFgFQAGgCAAAHQgCAFAEABQASgKAOgDQADgGgCgGIgDgJIANABQAGAAABgIQgJgCgDgEQgFgEACgIQgGgBgEAHQgEAIgEgBQAAgFgFgLQgFgJABgHQACAAACgDQACgDAEABIgDAPQAEAAAIgDQAHgBACAIIAFgHQADgEABgGQAAgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAIAFAEQADACADAAQAKgRACgLQAKADAIgIQAIgGgEgIQgDAJgRAEQgPACAAAHQgBgIgOAAQgNABAAgFQAIAAACgJIACgXQAGgFAPgCQAOgBAEgGQgDgCgGACQgDACAAgEQgBgGAFgDQAFgDAAgFQgFgEgQgBQgMgCgEgIQACgEgBgEQgCgEABgDQAIADABgJQACgJAHgBQAEAGgEAFQgGAHgBADQAzABAVglQgHgHADgRQACgQgFgHQAFgDAJgJQAJgKAGgDQAPACgBANQgBAKgHALIgBgDQgCgIADgMQgUgCgKASQADADAGgDQADgCAAAEIgKAmQALACAIgOQAHgMALAGIgIgNQAFACAGgDQAFgDADAEIgIAOQgGAGgKgDQADAIgIAFQgKAEgEAEIARAJQAIgEAJgIQAEABABAJQAAAHAHAAQAEACAAgHQAAgIAEACQADADALADQAKADABAFIADgSQgVgPgMgFIADgNQADABAEgCQAEgBAEACQgBAFACAEIAFAHQAFACAFgCQAFgDAEABQACgFgDgGQgEgFADgGQAEABAFgDIgCAEQgBAAAAABQAAAAABAAQAAABAAAAQABAAAAABQABAKgDAFQgDAEgIACQgDAAgCABIgEABQgBAEAGACIAIAGQABAMgJALQgIAKACAHQgHgCAEgOQgYAAgKAGQAFAQAVAHQAAAFgEACQgFACAAAEQAAAIAJgCQAJgCACAEQABgDANgOQAJgKgIgEIABgEQADABADgDQAAABAAABQAAABAAAAQABABAAAAQABAAABAAQgBADABADIAAAHQgEABgNAPQgKAKgNgEQgHARAQAJQASAMABAHIgGANQgCAHAJAGIAAADQgHgBgCgIQgCgJgHAAQAAgEAFAAQAFAAAAgCQABgMgKgHQgIgFgRgDQgEgFAFgDQAGgEABgCQgGAAgFgDIgJgEQgIAHgGADQgGACgJgBQABAEANAFQALAFgCAHQgBAHgHADQgIAFgCADQABAGAIAGQAEADAKAGQAAAJgFAEIgKAGQABAFALAEQANADADACQgBAEgFAGQgFAFAAAIQAGACAEgHQAEgGAGACQgKAUgTAFQACgIgDgBIABgGQAFADABgFIACgJQgMgBgGgBIgOgGQgCAGAEAEQADACAIACIgCAIQgLgHgEgHQgGACgBACQAWAeAFALQALAagHAfQgGgEgBgHIADgRQAEgEAAgFIABgDIgJgRQgFgCgFAFQgEAFgGgCIAEgSQADgLgGgIQgUADgEAVQgBAJAQAEQAUAGACAGQgDAFADAHQgFABgCAEQgMgDgJgJQgJgLgFgGQgDABgBAEIgBAHQgCgLADgNIADgSQgKADgCAOQgDATgFAGQAEgRgPAGQgVAIgFgGQACgJgEgBQAEgFAbgDQAUgDgCgXIgHgJQgDgHACgHQASAKAMgWQARgcAKgBQAAgNAHgFQAEgEAKgGQgCgGgGgFQgDABgCAKQgCAJgIgDQABgDAEgCQAEgCgBgEQgWgGgGAJQAEAFANACQgEADgNgFQgLgEgDAGQgCAFABAEIABAHIgLAFQgHADgIgEQAAAQgOAJQgOAJgBANQgBAEAHADQAHAEgBADQgBAHgFACIgLAEQgCAEACAFQACAFgCAEIgLAEQgHAEgDAEQACAEAHgBQAHgBACAEQgKALAJAKQAGAFANAHQAAAFgFADQgFADABAGQAAADgCACIgDADIAAADIgDAAQgEgBgCAFIgFAGQgGgCgEADQgDABgDAEQgFAAgFACIgHAFgAhMCrQgCAKAHgBQAHgEADgHQAEgJgDgJQgKACgCABQgGADgCAGIABAAQAGAAgDAIgAAKCFQAMAIAKAAQACgMgPgFQgTgIgBgDQABALAKAJgAguBqIgMADIgCAJQANACAFgCQAJgCACgIQgGgCgFAAIgEAAgAgJBIQAAAFAIAAQAGgBgBgEQgEgGgIAAgAABA4QAEAHAKgFQALgGgFgEQgBAFgJgDIgEgBQgFAAgBAHgAArAbIgKAEQgDAMAGAEQAAgJAIgDQAKgEABgFIgFgBQgEAAgDACgAgcgRIAAAIQAQABACgQIgSgDQgCAFACAFgAATg5QgHAaABAGQACABAGgCQAFgBAFACQACgEgCgHQgBgFACgFIASADIAGgIQADgEAAgIQAAgEgGgHQgFgGAAgGQAEgCADACIAHAFQgEgHAFgOQAFgMgLgHIgHAJQgEAEgGgBQgCAAgBgHQgCgEgFABQgMAEgSAQQgTAPgLAFQAKAKAPAAQACgKALgCQAPAHgEARgAgrgbQALAEACgHIgFgEQgCgCgEAAgAADhFQgVACARAMIAFABQAEAAABgCIADAAQANgNgSAAIgEAAgABVhrQAJABgBgJIgMgCQgFAKAJAAgAAyilIABgBIABACIgCgBg");
	this.shape_48.setTransform(21.5,-46.2,1.126,1.126);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#8A80B7").s().p("AgBAHQgKgBABgGQAEgLAGgBIgBANIAEABQAAAEAIABIgBAGQgBgDgKgDg");
	this.shape_49.setTransform(35.5,-67.8,1.126,1.126);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#8A80B7").s().p("AgMAHQAEgFAIgCQAHgFADgDIADAAQgEAFgJADIgMAJg");
	this.shape_50.setTransform(33,-70.8,1.126,1.126);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#A19CD4").s().p("Ah8DHQgFgKgBgGIACgPQAIgBADgGQAAgEgGgLQgFgJAFgLQAIgDAEgLIAGgQQAIgCgCgOIgDgUQAFgCAEABQABAIAMgPQABgHgLgBQgBgFABgFQACgEgCgFQAGgCADABIAFAEQABADACABIAHgRQAAgFgKAGQgFAAgEgDQgFgDgDAAQAAgEACgDIADgDQAFgEAAgJIAAgQQALgGADgHQABgDADgOQAIACABgHQACgDgCgJQgCgLADgIQADgFAHgIQABAAAAAAQABAAAAAAQABAAAAgBQAAAAABAAIABgEQgCgGABgDQgFgCgDABQgFACgDgBQAKgKgIgCQAEgFAGgOQAGgCAAgIQABgJACgBQABAAABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAABABQAAAAABAAQABABAAAAQABAAAAAAIADABIACAFIACAFQgFADgDAFIgCgBIgCAJQAFABAEgDIAIgEIADAAQADABADACQABACAEgDQAAABAAAAQAAAAAAABQABAAAAAAQAAABAAAAIADABQgGADAAAKQgCAKAJgBQACgFAAgJQgBgHAFgFQABgHgGgDQABgHgGgIQgEgIABgHQADgEACAAQAAAAAAABQAAABABAAQAAABAAAAQABAAAAAAIADABQAEAAADgCQACABgBAGQAAAFACABQADAFACANQABAMADAFQAFgLgBgTQgBgVADgJIAFgCQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABQgEADgCAOQALgBAHgOIAGABQgIAKAHAPQAFAAAFgDQAGgEAGABQAAAHgEAEIgIAGQgBgBAAAAQgBAAAAABQgBAAAAAAQAAABAAABQADAHgFAKQgGALACAEQAEARATAAQAUgBABgXQAQgBACgRQgIgCgSAMQgOAJgHgMIADAAQAAABAAAAQAAAAAAABQAAAAABAAQAAABAAAAIAFABIADABIANgJQAKgGAEgEQAJAAAGAFQgDAOgDADQgJABgDANQgBAGAKABQALADACADIgCAGQgBADgFgCQgEADgFgBQgDAGAEAFQADAFgCAGQgEgBgFACQgFADgFgCIgEgHQgDgEABgFQgEgCgDABQgFACgDgBIgCAMQAMAGAUAPIgCASQgCgFgJgDQgMgDgDgDQgDgCAAAIQgBAHgEgCQgGAAgBgIQAAgIgFgBQgJAIgIAEIgRgJQAEgEALgEQAHgFgDgIQALADAFgGIAIgOQgDgEgFADQgGADgGgDQAHgMABgKQABgNgPgDQgGAEgJAJQgIAJgGAEQAGAHgDAQQgDAQAHAIQgTAlg1gCQABgCAGgHQAEgFgEgGQgHABgCAJQgBAJgIgEQgBAEACAEQABADgCAEQAFAJALABQAQACAFAEQAAADgFADQgEADAAAGQAAAEAEgCQAFgDADADQgEAGgOABQgPABgGAGIgCAWQgCAKgIAAQAAAGANAAQAOAAABAIQAAgHAQgEQAQgFADgIQAEAIgHAIQgIAIgLgEQgBAMgLARQgDAAgDgCIgEgEQACgFgFgBQgIgBgEgBQgBAFAEADIAIADQgBAFgDAFIgFAHQgCgIgGABQgJADgEAAIADgPQgDgBgDACQgCADgCAAQAAAHAEAKQAFALABAFQADAAAEgHQAEgHAGABQgBAIAEAEQAEADAIADQAAAHgHABIgMgCIACAKQACAGgDAGQgOACgSAKQgDAAABgGQAAgGgFACQgGAFAFALQAHAQgBACIgJABQgFAAgDgEgAgchKIAKAFQAIADgBAFIgEANQAOAEAEgPQgLgDASgUQgIgBgCgLQgCgMgGgBQgEACACAMQADALgIABIgPgDQgCAGAEAEgAADhdIALACQADgJgNgCgABGhgQAJAEABgIQABgIgIAAgABshoQAKAAAEgEQgGAAgFgDQgFgEgEAAQgFAKALABgAAliRQAJAEANgGIAAgOQgCgHgHgCQgKABgDAYg");
	this.shape_51.setTransform(21.9,-53.8,1.126,1.126);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#AABAAA").s().p("AAJAgQgGgPAIgKIgQgDQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAgBAAIgFACQgEgCgDADQgDADgDgBQgCAFABAGQACAHgCAEQgCgBAAgFQAAgGgBgBQACgIgBgLQAAgMADgJQAbgOARAVQARASgCAaQgGgBgGAEQgFADgEAAIgCAAgAgBgOQABAGAJAIQAHAJgFAOIAMACQAGAAABgFQgEgXgMgOQgOgSgYANIgDAPQAHADAGgGQAGgFAEAAIADABg");
	this.shape_52.setTransform(27.2,-77,1.126,1.126);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#716490").s().p("AgVAKIAAgDIAPgKIAJgGQAIgCAJAEQgBADADADQgGgFgJAAIgDgBQgDADgGAEQgJAEgEAEIAAADg");
	this.shape_53.setTransform(33.7,-71,1.126,1.126);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#787B67").s().p("AgEALQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIADgEQADACAAgDIACgEIABgGQgGgBAAgEIAFACQAEABAAACQADAGgEAFQgFAHgEAAIAAgBg");
	this.shape_54.setTransform(36.4,-66.2,1.126,1.126);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#716490").s().p("AgMAVQgPgKAGgOQAOADAIgKQAMgPAFgBIgBgGQgBgEABgDIAFAIQACAEgBAFQgJgBgHAJIgIAPIgIgCQgFgCgEADQgDAUAVAAQACADABAGIADAIIAAADQgBgIgRgLg");
	this.shape_55.setTransform(33.9,-51.7,1.126,1.126);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#C0C6CE").s().p("AgEABQgDgBACgEQAHAAAFAEQgBADgGACIgEgEg");
	this.shape_56.setTransform(25.3,-18.8,1.126,1.126);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#8A80B7").s().p("AAAAIIgEgBQABgHADgDQAAgDAFgBQgBABAAAHQgBAHgDAAIAAAAg");
	this.shape_57.setTransform(20.9,-21.1,1.126,1.126);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#96AA90").s().p("AgEAEQAAgEADgBIADgHIADAAQgEAIAAABQgBAEAFAEQgGgBgDgEg");
	this.shape_58.setTransform(24.1,-21.5,1.126,1.126);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#787B67").s().p("AgDAEQAAgBgBgBQAAgBAAAAQAAgBgBAAQAAAAAAAAIAAgCQAFACADgFIADAAIgBAHQgFABAAADQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAg");
	this.shape_59.setTransform(21,-22.3,1.126,1.126);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#716490").s().p("AgJACQADgDADgBQADgDAFACQADABACACQgBACgGACg");
	this.shape_60.setTransform(12.1,-24.2,1.126,1.126);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#787B67").s().p("AAAAGQgBgDgDgBIAEgEQACgEADAAIgBAIQAAAFgDAAIgBgBg");
	this.shape_61.setTransform(13.3,-25,1.126,1.126);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#716490").s().p("AAAAEQgCgCgDgBIACgGIAHABQAEAFgGAFIgCgCg");
	this.shape_62.setTransform(24.5,-23.6,1.126,1.126);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#8F9E5E").s().p("AAAAJQgFgDACgFIADgJQAAAAAAAAQABABAAAAQABABAAAAQAAABAAABQABAAAAABQAAAAAAABQAAAAABABQAAAAAAAAIgCAKg");
	this.shape_63.setTransform(21.4,-24.1,1.126,1.126);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#313627").s().p("AgFAAQADgEACgCQAMADgLAGQgCAEgCAAQgDAAABgHg");
	this.shape_64.setTransform(15.4,-26.1,1.126,1.126);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#5E6F4B").s().p("AgFADIABgGIAKACQAAAFgGAAIgFgBg");
	this.shape_65.setTransform(21.6,-26.4,1.126,1.126);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#787B67").s().p("AgFAEQAAgDACgBIADgFQAAAAAAAAQAAAAABABQAAAAABAAQAAABABAAIADADIgEAEQgBABAAAAQAAAAgBAAQAAABAAAAQAAAAAAAAIgFgCg");
	this.shape_66.setTransform(19.4,-27.9,1.126,1.126);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#A19CD4").s().p("AgUAnIgJgDIADgSQAMgDAHAAQgHgJgEgQIgGgfIAMACQAGADAKAAQALgBADAEQgBAMgLAHQgNAIgDAFQAGAHAKgFQATgFADAAQAEAEgFAHIgJAKQgGABgCgFIgGgEIABAJQABAFgFADIgKAQQgGAAgFgDg");
	this.shape_67.setTransform(8.5,-26.3,1.126,1.126);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#C0C6CE").s().p("AAEAEIgQgEQAAgFAIACIAMADQAAACAFAAQAAABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgFAAg");
	this.shape_68.setTransform(29.8,-27.1,1.126,1.126);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#8A80B7").s().p("AgHADIABgDQACgFAMAEQgBAFgHAAIgHgBg");
	this.shape_69.setTransform(24.5,-27.9,1.126,1.126);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#313627").s().p("AgCAHIgDgHQgBgEAEgCQACABABAEQACADADABIgBADIgEABIgBAAIgCAAg");
	this.shape_70.setTransform(17,-29.9,1.126,1.126);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#313627").s().p("AgBAIIgDgIQgCgFAFgDQACABAEAEQgBADABAGQAAADgFAAIgBgBg");
	this.shape_71.setTransform(21.9,-29.2,1.126,1.126);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#AABAAA").s().p("AgCACQgEgCACgFIAEgBQADgBADACIgCAMIgGgFg");
	this.shape_72.setTransform(6.6,-34.1,1.126,1.126);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#A19CD4").s().p("AgDAGQgMgHgBgLQACADASAHQAPAEgCALIgCAAQgJAAgJgHg");
	this.shape_73.setTransform(23.1,-31.9,1.126,1.126);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#A19CD4").s().p("AgNAFIACgHIALgDQAGgBAIADQgCAGgJACIgEABIgMgBg");
	this.shape_74.setTransform(16.2,-33.5,1.126,1.126);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#716490").s().p("AALAWQgCgGgRgFQgSgEABgIQAFgUAUgDQAFAIgDALIgCAQQADACAFgFQAEgFAFACIAJARIAAADgAgLAGIAEgMQAEgJgBgDQgTASAMAGg");
	this.shape_75.setTransform(24.3,-34.2,1.126,1.126);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#716490").s().p("AAHAJQABgDgEgBIgGgBQgIgCgDgCQgEgCADgHIAOAHQADABANABIgCAHQAAAAAAABQgBABAAAAQAAAAgBABQAAAAgBAAIgEgBg");
	this.shape_76.setTransform(26.8,-38.4,1.126,1.126);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#96AA90").s().p("AgDACQgEgCABgEQADABAGABQAGABgDADQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAAAABIgGgDg");
	this.shape_77.setTransform(14.6,-43.4,1.126,1.126);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#716490").s().p("AgJgEIAJgEQAFgDAGACQgBAFgKAEQgGACAAAIQgGgEADgKg");
	this.shape_78.setTransform(26.4,-42.1,1.126,1.126);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#8A80B7").s().p("AgBgFQAIgFAJAIIgQAFQgHAEgIABQAFgIAJgFg");
	this.shape_79.setTransform(30.9,-42.3,1.126,1.126);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#716490").s().p("AgHAAQgCgDACgFIAQADQgCAOgOgBIAAgIg");
	this.shape_80.setTransform(19.1,-48.4,1.126,1.126);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#C0C6CE").s().p("AgMABQAGgMATABIgEAVQgPgDgGgHg");
	this.shape_81.setTransform(28.1,-46.4,1.126,1.126);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#AABAAA").s().p("AgDABQABgGACgDIADAAQACAFgBADQgCAEABAFIgCAAQgFAAABgIg");
	this.shape_82.setTransform(11.2,-49.9,1.126,1.126);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#A19CD4").s().p("AACAGQgLgCgEgEQAGgIAUAFQABADgEACQgEACgBACg");
	this.shape_83.setTransform(24.4,-48.2,1.126,1.126);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#8A80B7").s().p("AgCAFIgEgEQACgBAEAAIAAgCIgBgDQAIgGgBAFIgGAPQAAgBgCgDg");
	this.shape_84.setTransform(13.4,-51.3,1.126,1.126);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#8F9E5E").s().p("AgJAAQAFgNAFADQgBAEAGAEQAGACgCAFIgDgBQgJgEABALIgBAAQgLAAAEgLg");
	this.shape_85.setTransform(10.1,-51.9,1.126,1.126);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#A19CD4").s().p("AAAgFQAWgBgOAMIgDgBQAEgIgJACQgLABAGAGQgRgJAWgCg");
	this.shape_86.setTransform(21.9,-53.4,1.126,1.126);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#C0C6CE").s().p("AAAAEQgFgFgDgCQADgEAFAEIAKAFQgDAEgCAAQgDAAgCgCg");
	this.shape_87.setTransform(32.9,-55.5,1.126,1.126);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#716490").s().p("AAAAEQgJAAAGgIIAJACQABAHgHAAIAAgBg");
	this.shape_88.setTransform(31.2,-59,1.126,1.126);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#8A80B7").s().p("AgDAIQADgDABgMIADAAQABAIgBADQgBAEgDAAIgDAAg");
	this.shape_89.setTransform(15,-61.7,1.126,1.126);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#718A50").s().p("AgDAIQgCgCAFgHQAFgKgBAFQgBAEABAGQAAAFgEAAIgDgBg");
	this.shape_90.setTransform(13.9,-64,1.126,1.126);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#AABAAA").s().p("AgFADIACgHQALACgDAHg");
	this.shape_91.setTransform(23,-64.9,1.126,1.126);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#AABAAA").s().p("AgDAFIACgKQAHAAgCAFQgBAGgDAAIgDgBg");
	this.shape_92.setTransform(30.4,-65.4,1.126,1.126);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#C0C6CE").s().p("AgIgEQAFAAADAEQAFABAFAAQgEAEgHAAQgLgBAEgIg");
	this.shape_93.setTransform(34.4,-66.4,1.126,1.126);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#C0C6CE").s().p("AgGADQABgHAFgDQABgEAGgBQgEAFABAHQAAAHgCAGIgBAAQgIAAABgKg");
	this.shape_94.setTransform(22.2,-69,1.126,1.126);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#C0C6CE").s().p("AgHAEIACgHIADABQAEgEAGAGIgIACQgBACgEAAIgCAAg");
	this.shape_95.setTransform(19,-70.6,1.126,1.126);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#AABAAA").s().p("AgDAGQAAAAgBgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQABgCAEgBQACgBgBgFQAGAEgBAEQgGABAAAEIgDgBg");
	this.shape_96.setTransform(22.3,-70.8,1.126,1.126);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#716490").s().p("AgGAGQABgHAFgFIAHABQgBAMgGAAIgGgBg");
	this.shape_97.setTransform(27.3,-71.3,1.126,1.126);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#8F9E5E").s().p("AADAGQgCgGgEAAQAAgDgFgDQACgEADADQADAEACgBIAGABIgBAFQAAAFACABIgDACQgBAAAAgBQgBAAAAAAQAAgBgBgBQAAAAAAgBg");
	this.shape_98.setTransform(20.7,-72.3,1.126,1.126);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#8A80B7").s().p("AgKALQADgWAJgBQAHACABAHIAAAMQgHAEgEAAQgFAAgEgCgAgGAJQALAFABgQIgHgBQgFADAAAJg");
	this.shape_99.setTransform(27.3,-71.7,1.126,1.126);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#8A80B7").s().p("AgCgHIALACQgIAMgIABQABgMAEgDg");
	this.shape_100.setTransform(26.8,-75.5,1.126,1.126);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#C0C6CE").s().p("AAKAYQAFgNgGgKQgJgIgCgGQgGgBgGAGQgGAFgIgCIADgPQAYgNAOASQAMANAEAXQgBAFgGAAIgMgCg");
	this.shape_101.setTransform(27.3,-77.2,1.126,1.126);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["#8FC274","#699A44","#4A7C32"],[0,0.498,1],-17.8,-3.9,16.8,3).s().p("AjMHYQgkgfgMgtQgNgyAbgnQAdiIAHgRQAJgUATgjQAWgnAHgQQAwhkAxg6QANgQAkgoQAhgjARgWQAVgcAWgpIAkhJIAig+QASgiAFgfQBiAQglBhQgNAhgeAuIgrBBIguBFQgbAqgQAeQgLAVgbAoQgbAlgJAVIgcA5QgPAggHAbQgMAuABBkQABBfgPAyQgRA7goAJIgNABQgdAAgdgZg");
	this.shape_102.setTransform(-28.2,81.6,1.126,1.126,0,0,0,-17.8,50.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.3,-80.6,74.6,161.2);


(lib.flrwtall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#313627").s().p("AgEAQQgHAAgCgGQgEgGABgEIAEAAQABAAAAABQABAAAAAAQABAAAAAAQABAAABAAIAHAAQAAgBACgEQACgDgBgFIAFgCQADgCAEABIABAGQACAEAAACQAAADgFAAQgFABABADQAEABgBAIIgEABQgBAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAg");
	this.shape.setTransform(29.5,-86.8,1.126,1.126,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#787B67").s().p("AgDAGQgBgFAEgBQABgDAAgCQgFAAABgJQADABAAACIAEAEQABADgDAEQgBAFADADIAAADIgDABIgBADQAAgJgDAAg");
	this.shape_1.setTransform(35.1,-96.1,1.126,1.126,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#716490").s().p("AgBAHIgGgCIAAgKQAEAAADgDQAHADABAFQABAFgGADIgBABIgDgCg");
	this.shape_2.setTransform(25.4,-122.2,1.126,1.126,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A19CD4").s().p("AAKAUIAAgDQgHgGgLgGIgWgKQgBgIALAAQAMgBACgDQACgDAEAAIAAAGQAAABAAAAQAAABAAAAQAAABAAAAQABAAAAAAQABgEAFgCIACAGQACAEgBACQACAFAIADQAJAFACADIAAAGIgJADIgHABIgFgBg");
	this.shape_3.setTransform(41.1,-81.8,1.126,1.126,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A19CD4").s().p("AgJAAIABgEQAAgBAAAAQAAAAAAgBQABAAAAAAQABAAAAAAQAQABAAAJIgJAAQgCgKgIANg");
	this.shape_4.setTransform(33.1,-89.2,1.126,1.126,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C9CD9D").s().p("AgGAIQACgDgBgFQgBgDADgFQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIABAFQADAAABgCQAGACgFAFQgEAEgCAAIgFgBg");
	this.shape_5.setTransform(29.7,-131.2,1.126,1.126,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C9CD9D").s().p("AgIALQgBgGAFgFQADgBgEgEIgGAAQACgDAFgBIAGgCQgBAFAGACQAGACgCAEIgDABQgBAAAAAAQgBAAAAABQAAAAgBAAQAAABAAAAIgFAFQAAACgEAAIgEgBg");
	this.shape_6.setTransform(29.6,-133.9,1.126,1.126,0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#96AA90").s().p("AgCAMQgBgEgDgBQAEgGgBgGQABgBAAAAQAAAAABAAQAAgBABAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQABAAAAAAQADAEADACIgGAQIgCABIgBAAg");
	this.shape_7.setTransform(22.7,-64.3,1.126,1.126,0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#96AA90").s().p("AgOABIAJAAQAEgBAAgDIAKAAQAFABABADQgFADgKAAIgBAAQgKAAgDgDg");
	this.shape_8.setTransform(11,-65.3,1.126,1.126,0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#787B67").s().p("AgFAPQgHgBgDgFQgDgFAEgEQADACALADQAIACADAEIAAgNQAAgIgDgEQAHABAAAMQABANABADg");
	this.shape_9.setTransform(9.1,-67.9,1.126,1.126,0.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#313627").s().p("AAJAKQgEgBgEgEIgFgEIAAgBQgKAAABgJIANAHQAJAEAGACQAAAGgFAAIgBAAg");
	this.shape_10.setTransform(30.4,-74,1.126,1.126,0.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3C5619").s().p("AAAADQgIgDgCAAIABgCIACgCQAAgGAHADQADACgBAEQAAAIAJgBIAAADQgFgBgGgFg");
	this.shape_11.setTransform(28.4,-74.9,1.126,1.126,0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#809779").s().p("AgBAGQgOgBACgHIAQAAIAEgBQAAAAAAAAQABAAAAgBQAAAAAAAAQABAAAAgBQAAAAABAAQAAABAAAAQABAAAAABQABAAAAABQAAAAABABQAAABAAAAQABAAAAAAQAAAAABAAIAAACQgGAEgJAAIgBAAg");
	this.shape_12.setTransform(9.8,-76,1.126,1.126,0.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#787B67").s().p("AACAJQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgDgEgBQgEgBAAgCIAIgGQACgEAGABIABAKQAAAIgEABg");
	this.shape_13.setTransform(23,-76.1,1.126,1.126,0.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#809779").s().p("AAKAGIgGAAQgDgGgCAAIgOAAIAAgBIAGgDQADgBADABQADAAAEAEQAFABAHgBQAAAGgFAAIgBAAg");
	this.shape_14.setTransform(45.1,-77.4,1.126,1.126,0.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5E6F4B").s().p("AAAADQgFgDgEAAQABgCAEAAQAEgBABgCQgBAFADABQAGACABACIgEABQgEAAgCgDgAABgFIAAAAIAAAAg");
	this.shape_15.setTransform(45.8,-78,1.126,1.126,0.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#787B67").s().p("AACADQACgEgDABQAAABgHAAIAAgBIABgEQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAQgBAGAEgDQAHgFAAAFIgBAFQgCABADAEIgDAAQgEAAACgEg");
	this.shape_16.setTransform(40.4,-78.3,1.126,1.126,0.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#809779").s().p("AgEAJQgDgJAGgFQAEgGADAKIAAABIgDAAIgDgBQABAFgCAFg");
	this.shape_17.setTransform(11.4,-79.4,1.126,1.126,0.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#716490").s().p("AAGAKQgGgCgDABIgDAAIAAgDQgRACAIgLQAHgOAIAKQAAAHABADQAKAAAFgDQgCADAEAFQACADgEABIgDAAQgDAAgEgCg");
	this.shape_18.setTransform(29.2,-79.3,1.126,1.126,0.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#313627").s().p("AgHAFQADgCACgFQACgHADgCQACAAABAEQAAAFADAAIAAACIgEAAQAFAJgJACIgBABQgHAAAAgHg");
	this.shape_19.setTransform(33.1,-80.2,1.126,1.126,0.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#716490").s().p("AgLAAQgBgCACgFIADABIADABIAAADQADACADAAQAEAAADgCIADAAQABAGgHACIgNADIgEgJg");
	this.shape_20.setTransform(24,-82.3,1.126,1.126,0.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#5E6F4B").s().p("AgOAJQAEgJAIgFQAHgIAGAJQAFAAgCAEIgDAGQgEAAgCADg");
	this.shape_21.setTransform(39.6,-85,1.126,1.126,0.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#787B67").s().p("AgFAHQABgFgEgCQAHABADgEQAEgFACAFQABAFgHAAQgFgBABAGg");
	this.shape_22.setTransform(11.2,-85.3,1.126,1.126,0.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#5E6F4B").s().p("AgFAAQAAgCAEgBQADgCAAgCQAEgBAAAGIgBAIQgEgBgDAEQABgJgEAAg");
	this.shape_23.setTransform(31.2,-86.3,1.126,1.126,0.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#313627").s().p("AABAKIgBgIQgBgCgFAAIAAgGQABAAAAAAQABAAAAgBQABAAAAgBQAAAAAAgBQAEADAEAFQAEAFgFAGg");
	this.shape_24.setTransform(22.9,-86.9,1.126,1.126,0.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8F9E5E").s().p("AgDAEQgLgCAJgDQAHgFAIADQABAIgEAAIgKgBg");
	this.shape_25.setTransform(35.4,-87.8,1.126,1.126,0.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A19CD4").s().p("AAKAPIgKgEIgGgFQgDgGgGAAQgIACgBgCIAAgBQAEABgBgHQgBgHAEABQADAAABAFQABAFAEgBQACgCgEgFQgDgEAFgBIAHAKQADAGADAAIADAAQADAFAFAAIAKgCIgHAKQgCAEgDAAIgDgCg");
	this.shape_26.setTransform(38.5,-94.8,1.126,1.126,0.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B4B684").s().p("AgDAAIABgCQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIAEAAIAAAKQgFAAgCgGg");
	this.shape_27.setTransform(17.6,-94.9,1.126,1.126,0.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#787B67").s().p("AAQAGQgCgEgMADQgJACgCgHQAAAHgGgBIgDAAQAAgFgDgCQAEACACgCQACgEAEABQAEAHAIgDQANgDAGADQAAAGgFAAIgBAAg");
	this.shape_28.setTransform(41.2,-95.3,1.126,1.126,0.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#313627").s().p("AgKAHQABgDgCgFQgBgDAFgCQARAFACAIg");
	this.shape_29.setTransform(24.1,-95.7,1.126,1.126,0.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B4B684").s().p("AAAgGQAEgBADADQACAEADAAIAAAEIgMgBIgKAEQgCgQAMADg");
	this.shape_30.setTransform(26.9,-99.4,1.126,1.126,0.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#5E6F4B").s().p("AgDABQgDgBACgFIAFACQABABAEgDIAAAEQAAAEgGADIgDgFg");
	this.shape_31.setTransform(31.9,-101.2,1.126,1.126,0.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#716490").s().p("AgHANQAHACAAgGQgCgHgFgBQAAgCgCgDIgCgFQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAgBQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABAAQAFABADAMQAEAMAEADQgDACgIABIgBAAQgGAAgBgDg");
	this.shape_32.setTransform(23.2,-105.8,1.126,1.126,0.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#C9CD9D").s().p("AgCAEQgDgBAAgGIAFAAQAAACADABQADAAgBAEg");
	this.shape_33.setTransform(18.9,-105.5,1.126,1.126,0.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#787B67").s().p("AADAIIgDgEQAAgEgEgCQgGgCABgFIAKAAQAAALAJAFIAAADIgDAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_34.setTransform(40,-107.3,1.126,1.126,0.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C0C6CE").s().p("AgBANIABgEQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAIgDgIQgDgGACgIIADAAQgCAFADACQAFACABADQABAQgHADQAAgEgBABg");
	this.shape_35.setTransform(33.4,-111.5,1.126,1.126,0.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#716490").s().p("AgPAWIAAgGIAAgGQgBgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAIAAgKQABgGAFAAQADACgCAGQgBADAGACQAEgMASgNQAFAFgEAGIgHAKIgDAAQgBACACADQADAEgBAEIAAADIgKAGQAAgFABgEQgDgBgEAFQgDAFgEAAIgCAAg");
	this.shape_36.setTransform(29.9,-113.2,1.126,1.126,0.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#809779").s().p("AABAFQAAgBAAAAQgBgBAAAAQAAAAAAAAQAAAAAAgBQAAgCgDAAIABgEQAAgBAAgBQAAAAAAAAQABgBAAAAQABAAAAAAQADAAABAFIAAALQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAgBgBg");
	this.shape_37.setTransform(15.4,-113.8,1.126,1.126,0.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#AABAAA").s().p("AgCAFIgIgFQAAgGAGACQAEAGAMgCQAAABgBAAQAAABAAAAQgBABAAAAQgBAAgBAAIgCAAQgDADgDAAIgCgBg");
	this.shape_38.setTransform(38.2,-115.3,1.126,1.126,0.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#AABAAA").s().p("AgBAQQABgLgHgBIgBAEQAAAAAAAAQAAABgBAAQAAAAAAABQgBAAAAAAIAAgGQgBgEACgGQACgIAAgEIADAAQAAADgCAKQAAAFAFABQgBgMAIACIAAAJQACAAABAJQAAAIADACQgGgEgHABg");
	this.shape_39.setTransform(23.7,-121.3,1.126,1.126,0.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#787B67").s().p("AgEgGQADgBACACIAEACIgEAGQgBAEgEAAg");
	this.shape_40.setTransform(27.5,-123,1.126,1.126,0.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#AABAAA").s().p("AAAAAQAAgOABgEIAAAlQgBgFAAgOg");
	this.shape_41.setTransform(32.7,-125.3,1.126,1.126,0.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#809779").s().p("AgCAZIAAgxQACABAAAFIAAAMQAAAGACABQACAFgDAHQgBAGAAAGg");
	this.shape_42.setTransform(33.3,-129.7,1.126,1.126,0.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#AABAAA").s().p("AAEgDQgDgRgIgCQAGgBACAFIAIAIIAAAiIgFgbg");
	this.shape_43.setTransform(31.9,-132.6,1.126,1.126,0.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#5E6F4B").s().p("AgDAIQABgFgEgBIAAgKQADACAEgBQAFAAABACQgDAAgDAJQAAAFgBAAIgDgBg");
	this.shape_44.setTransform(33.8,-132.8,1.126,1.126,0.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#C0C6CE").s().p("AgJAMQABgHAHgGQAFgNAFgBQACAEgDAFQgDAEABADQACAEgEACQgEADAAACQgEAFgCAAQgBAAgBgBQAAAAAAAAQgBgBAAgBQAAAAAAgCg");
	this.shape_45.setTransform(11.9,-61.3,1.126,1.126,0.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#536F2C").s().p("AgEABQgEgGAEgBQABAAAAABQAAABABAAQAAAAABABQAAAAAAAAIAFADQADACgBAFIgDAAQgDAAgEgGg");
	this.shape_46.setTransform(20.1,-66.3,1.126,1.126,0.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#716490").s().p("AAEAUIABgEIACgCQgFgFgDAFQgHAGgEAAIgFgDIgEgDQAAgBAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgJAHgGQAJgIACgFQARgMAOASQAAALgGAEQgEABgIAAQgBADADACIAEAEQgGABAAAIQgBAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAAAg");
	this.shape_47.setTransform(33.2,-65.6,1.126,1.126,0.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#8A80B7").s().p("AAEAJIADAAQAAgGgHgBIgMAAQAFgEgCgIIAJAKQAGAFAHABQgCAEgKABQAAAAAAAAQAAgBABAAQAAAAAAgBQABAAABAAg");
	this.shape_48.setTransform(12.9,-66.9,1.126,1.126,0.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#718A50").s().p("AAAAAQgKgDgFALIgDAAQAAgEAFgCQAEgCAAgCQAEgIAJAFIAPAHIAAAGQgPgIgEAAg");
	this.shape_49.setTransform(34.2,-68.6,1.126,1.126,0.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#536F2C").s().p("AgHABQgCgMAMACQgBAJAHAEIAAAGQgMAAgEgJg");
	this.shape_50.setTransform(15.5,-68.7,1.126,1.126,0.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#96AA90").s().p("AgHAEQgGgDABgFIAZAAQAAADgKgBQgIgBgBADQABABAFABQAEAAAAADQgIAAgDgBg");
	this.shape_51.setTransform(9.5,-70.3,1.126,1.126,0.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#787B67").s().p("AgNAHQgBgEAIABQAHABgBgEQgEABgCgCQgBgDADgDQAEAAADADQAAADAEAAIAIAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAABgBAAQgBAAAAABQgBAAAAABQgBAAAAAAQAAABAAAAQAGABAAACg");
	this.shape_52.setTransform(9.7,-71.8,1.126,1.126,0.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#5E6F4B").s().p("AABAIIgHgHQgDgBAAgDIADAAQgCgHAGABQAEACgBAEQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAgBAAgBQgEABAEAHQADAIAHgDQgCADgCAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_53.setTransform(19.7,-66.3,1.126,1.126,0.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#809779").s().p("AAAgOQAAAAAAABQAAAAAAAAQABAAAAABQAAAAABABQAAABAAAAQABABAAAAQAAABABAAQAAAAAAAAQAAADADAEQgIgCABAMQAAAAAAAAQgBAAAAAAQAAABgBAAQAAABAAAAQAAABgBABQAAAAgBABQAAAAgBAAQAAAAgBABQgDgFAJgYg");
	this.shape_54.setTransform(23,-66.8,1.126,1.126,0.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#787B67").s().p("AgGBGQAFgIgJgKIgOgPQAEgQgQAEQAAgBABgBQAAAAAAgBQABAAAAAAQAAAAABAAIAMAAQACAKAJADQAKAEABgLQADAAAEACQAEACAEgBQACgKgLgDQgKgCAAgGIAAgDIAHAHQAFAFAEgGQABgFgDgDIgHgEQABgDgFgBQgFgCACAGIgDAAQgCgCgEgDIgJgFIAAgMQADgBAAgHQABgIAFABIAAADQAEAAgEAGIAJgBQAFAAgBAEQADAEgBADIgCAIQAFADAKAAIAAgNQABgHgEgBQAGgGACgFQAAgEgCgMIgGAAQgCgEgGgFQgFgGAAgDIAHAAIAHALQAEAGAHABIAFgCQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAIADAAIAAAbQgBAKgFAIQgJAXADAFQABAJgEAGIABARIgBAQQgIgBgBAEQgKAAgCAGQgCgDgFAAg");
	this.shape_55.setTransform(19.3,-67,1.126,1.126,0.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#96AA90").s().p("AAEAFQACgFAAAAQgIgCABAJQgDAAgEgCQgCgBgDADQACgOATABQAAAAAAABQABAAAAABQAAAAABAAQABABABAAIADAAQgCAAgBAEQgBAFgDABIgBAAQgCAAAAAAQgBAAAAAAQgBgBAAAAQAAAAABgBg");
	this.shape_56.setTransform(32.6,-62.5,1.126,1.126,0.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#809779").s().p("AgFAMQAFgHAAgHIgGgEQgFgDABgEQABgNAJAAIAEAFQAEACgCAGQgEgFgCACQgFACAAAGQAKgCAKAIIAAACIgJAAQgDABgDAOQgGAKgIABIAJgOg");
	this.shape_57.setTransform(29.3,-68.4,1.126,1.126,0.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#716490").s().p("AgBAQQABgEgGABIgKAAQAEgFgEgBIAAgDQAIADAIAAQABgHAFABQABgEgGgDQgFgEAAgFQAEAAABACQAEADAEgCIAGAAQADAMgBACQgBAFgHAGQAAADgEAAIgGAAg");
	this.shape_58.setTransform(19.8,-71.7,1.126,1.126,0.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#5E6F4B").s().p("AAIAIIgKgHQgDAFgKgBQgKgCgBgDQABgOgEgEQAFAAAEADIgBADIgCADQADAAAHAEQAJAEAEABIAHADQAEADADABQAGABAAgHIAJAAQACAIgGAEIgLAGQAAgHgGgEg");
	this.shape_59.setTransform(29.7,-73.6,1.126,1.126,0.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#5E6F4B").s().p("AgCADQgFgDABgDQAAgDAHAAQgBADAGADQAEAEgGADIgGgEg");
	this.shape_60.setTransform(17.7,-74.8,1.126,1.126,0.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#787B67").s().p("AgDAFQgMgFAHgEQAAAEAEACIAGADQAGgCgEgDQgEgFAAgDQANABgCAMQgCADgEAAQgFAAgDgDg");
	this.shape_61.setTransform(17.9,-74.6,1.126,1.126,0.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#5E6F4B").s().p("AgSAHIAEgBQABAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQACgEgFgCQgEgCABgFQAFgCAMgBIAOgDIAGAAQgDAEgJABIgQABQAFAIgFAGQgEAIABADQgGgDAAgGg");
	this.shape_62.setTransform(44.1,-74.9,1.126,1.126,0.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#787B67").s().p("AgMA4QAAgNADgEQgCgIgIgBQgFgBgMABQAHgJgHgHQgLgGgEgFIgDAAQgDgDAAgCQAEACAEAAQAFAAAFAAIACAFQABADAAAEQALgBADgDQAFgEgBgMIgDAAQgGgCgBgEQAAgGgFgCQgBgHADgKQACgJgBgIQABAGAKABQAKACADgGIAJAHQAGAFABAGIALgFQAFgFgBgIQACgCAFgBIAIgCQABgEAIgDQAHgCgBgGIAAgDIADAAQABAGgDAIQgCAJABAGQgOAEgfARQABAKgEAFQgIgIgLACQgBgGAFgCQAEgCAEAFQAAgGgBgCIgFgFQgLAAgBANQgBAEAFADIAIAEQgCAJgEAFIgJAOQAIgBAFgKQAGgMACgCIAHAAIAAAIQAEAAAFgCIADAAQgCADgJAJQgHAIAAAIQgEAEgCALIgBAVQAPgHgJgXIABgBIADgBIAEACIAFADQAEABAHgGQAFgGAFAGIgCACIgBADQgWAAgCAPQgBAFAEACQgDAEgHAHIgMAJIAAgVg");
	this.shape_63.setTransform(30.2,-67.4,1.126,1.126,0.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#716490").s().p("AAIABQgEgCgEABQgBADgFACIgJAAQACgFAJgCQAGgEAFAEQAAACAEABQAFABAAADIgBAAQgDAAgEgEg");
	this.shape_64.setTransform(21.1,-75.9,1.126,1.126,0.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#5E6F4B").s().p("AgHAFIgHgJQAGgDAAgDQAGgCACAEQAEAEAEAAQAAAAABABQAAAAAAAAQAAAAABABQAAAAABAAIADABQABAFgEAFQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAABIgFACQgFgBgEgGg");
	this.shape_65.setTransform(21.9,-74.6,1.126,1.126,0.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#A19CD4").s().p("AAOAVQAAgEgFABQgFgFAFgBQAFgDAAgDQgQgCgJgDQgSgEgCgNIAEgCQABgBAAAAQABAAAAAAQABgBAAAAQABAAABABIACAAQABACAEABQAFABgBACQgIAAgBADIAQAIQAHADAGgCQgLgHgFgFQAKABALAIIASANIAAAGIgHADQgGABgBACg");
	this.shape_66.setTransform(31.1,-75.8,1.126,1.126,0.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#787B67").s().p("AABAHQgJAAgBgQQAGgCADAFQADAEAEgEIADAAQgFAGACAHQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgEABg");
	this.shape_67.setTransform(10,-77.6,1.126,1.126,0.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#A19CD4").s().p("AgSAGQgIgHAGgJIgFgBQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBAAIAHAAQAIAAABgDQADgBgDAGQgCAFAIgBQgBADAIAAQAJAAAAgDIANgCQAFAAADAIIgRABQgMABgDACQgBAEADADQAEADgBAFQgMgEgJgIg");
	this.shape_68.setTransform(42.2,-76.4,1.126,1.126,0.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#8A80B7").s().p("AgHALQgCgEgDAAIgBAGQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAIAAgJQAEgBgBgGIgDgCIgDgBIAAgDQAIAAAKgFQAJgDAHgBQgBADADAEQACADgBAFQgIgBgFAFIgJAMQgDAAgBgFg");
	this.shape_69.setTransform(13.7,-75.1,1.126,1.126,0.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#809779").s().p("AgKAGQgJgBABgGIATgDQANgCAFAFIgJAAIgKAAQgCABgBADQAHAAAAADIgIAAIgGAAg");
	this.shape_70.setTransform(8.2,-64.9,1.126,1.126,0.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#8A80B7").s().p("AARAKQgEgCgDAAIgKgEQgFgCgHAAIgMAAQABgGAPACQAOACABgCQgGgDgBgGIABACIADABQAAAGAMACQALABgCAKIgDABQgDAAgCgCg");
	this.shape_71.setTransform(18.3,-64.8,1.126,1.126,0.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#8A80B7").s().p("AgNAHQAHACAEgHQACgEAGACQABgDgCgDIgCgGIgGAHQgGADgEgKQAIAGADgJQACgJAGAAIAGAVQAEALgEAFQgMgCAAAOQgMgFgBgNg");
	this.shape_72.setTransform(14.4,-71.4,1.126,1.126,0.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#8A80B7").s().p("AggAUQAEgIgCgCQAEADAFAAQAGgBAAgFIgOgGQgKgDAAgHQAGgMAbgEQAegGAHgFQgDASAMAAIgIAKQgFAGgCADIgDAAQAEgCgBgIQAEgBgBgIIAAgMQgGgBgEADIgIAHQgFgFgGAEQgJADgCAHQACADAFAGQAFADABAEQgDACgDgDQgEgDgDABQAAAFAGAEQAGADAAAGQgFgCgBAIQgLAAgHgDQgFgBgBAIQAAAHgDABQgDgIAEgJgAghgMQgHAGAMAGQALAEAFgEQACgOgOgBQgIAAgBADg");
	this.shape_73.setTransform(20.7,-73.7,1.126,1.126,0.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#787B67").s().p("AAAAAQgHgCgCgGQAEAEAHADQAIACAAAHQgDgDgHgFg");
	this.shape_74.setTransform(43.5,-81.5,1.126,1.126,0.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#8A80B7").s().p("AAIAKQgJgIgMgBQAFAFALAHQgEAEgJgFIgQgIQABgDAIAAQABgBgFAAQgEAAgBgDQAFAAAGABQAFACAGAAQADAAgCgEQgEgFADgDQAEgIAGgEQgBADgEADQgCACAAAEQAHABADAGQAFAFgGAHQAHABAEAGIAHALg");
	this.shape_75.setTransform(31.8,-77.7,1.126,1.126,0.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#B4B684").s().p("AgGAEIAAgDQADgEADgCQABgBAGADIAAAHQgDACgEAAQgDAAgDgCg");
	this.shape_76.setTransform(24.2,-83.1,1.126,1.126,0.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#A19CD4").s().p("AgNgGIAFAFQAFACACgEQgEgBgDgFIAEAAQAAAEAIgBQALgBAAAEQgBACgDABQgDACAAAFIAAADQgRgCgEgOg");
	this.shape_77.setTransform(11.5,-83.3,1.126,1.126,0.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#8A80B7").s().p("AAAAFIgBgJIAAgJQABAEABAJIABAOQgCgCAAgHg");
	this.shape_78.setTransform(34.5,-79.5,1.126,1.126,0.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#A19CD4").s().p("AAIAoIgEgJQgDgGABgGIgBgRQgBgHgCgEIAAgDQAAgGgGgEQgHgGgCgCQAJACAGgFQAFgGACAAQAAAFAHADQAIACgDAIQgGgFgJACQABAJAJARQAHAQgCAQIAAADIgEABQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_79.setTransform(34.5,-80,1.126,1.126,0.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#809779").s().p("AgIAAQAIAAgEgFIADAAQABAEADgBIADADIACAEQgKgBgGgEg");
	this.shape_80.setTransform(44,-84.2,1.126,1.126,0.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#A19CD4").s().p("AgJAAQgCgIAIgFIAHAAQAHgCgBAHQAAAHgDABIgDAAQgDALgKAEQACgHgCgIg");
	this.shape_81.setTransform(29.6,-83.3,1.126,1.126,0.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#A19CD4").s().p("AgHABQgCgEAFAAIAEgCQAAAAAAgBQAAAAAAAAQABAAAAAAQABAAABAAQgDAGACABIAHADQgDADgEgCQgDgBgDADIgDgGg");
	this.shape_82.setTransform(13.9,-80.6,1.126,1.126,0.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#5E6F4B").s().p("AgIAAIAEgHQAFgCAEAEIAHAFIAAAGQgGgCgGADQgGACgEAAQgBgGADgDg");
	this.shape_83.setTransform(17.9,-83.4,1.126,1.126,0.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#A19CD4").s().p("AgCAOQgFACgDgEIADgKQACgEgFgCIAAgDQgCgGAFgBIAHABIADAAQAAADAEADQAFACAAAEQgKgCABAFIADANQgEgDgEACg");
	this.shape_84.setTransform(21,-84.1,1.126,1.126,0.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#5E6F4B").s().p("AgCAHQAAAAgBAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAgDACAAIAAgGIAHAAIgDAGQgCADAAAEg");
	this.shape_85.setTransform(43.7,-85.7,1.126,1.126,0.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#A19CD4").s().p("AhEBWQABgLAJgJQAMgLACgFQACgDgIAAQgHAAABADIgSAAQAAgDgJAAQABgEAEgCIAKAAQADAEAMAAQALgBAEgDQAAgFgGgBIgMAAQgEABgCgEIAJAAQgBgCgBgPQAAgMgHgBQAAgCgFAAQgGAAgBgCQABgEAKABQAKABAAgEIADAAQAAgCgGgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAABgBQAAAAABAAQAAAAABgBQAAAAAAgBQAAAAAAgBQADAAAAgEIAAgIQABAAAAAAQABAAAAgBQAAAAAAgBQABAAAAgBIAAgGQAEAAABAEQACAFACAAIALgMQAFgHAIABQACgEgDgEQgCgEAAgDQgGABgLAEQgLAEgIAAQAAAAgBAAQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBgBAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBgJAEgGQAEgEgBgIIADACIADABIAEAHQACAEAGgCIAAgGQAGgBAWABIAhAAIAGAAQAGABAAACIgNADQgIACgDAEQAkgGAMgMQAAAKAHACIALADQAAABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgDgBABAIQAAAEADAFQAEAEgBAOQACAIgDAJQgCAKAAAGIABAHQAAAHgEgBQgGgEgJABIgDAEQgCADgBACQAAAAgBAAQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBgBAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQAFgIABgIIAAgbQACgFAFgGIAIgKQgMAAADgSQgHAFggAGQgYAEgHAMQABAIAHAEIAOAGQAAAGgGAAQgFABgDgEQABADgBAHQgEAJACAGIAAAMIgDAAQgGgEAAgKQAEgEgEgNIgGgVQgGAAgEAJQgDAJgIgGQAEAKAGgDIAIgHIACAGQACADgBADQgHgCgDAGQgEAHgHgCQABALAOAFQAFAJANAAQAEABACAFQAEAFADABQADAGAGADQgBACgPgCQgNgCgCAIQAAAAgBAAQAAAAgBABQAAAAAAABQgBAAAAABQgEgBgDAEQgDAEgFgBQABASgHADQgBgEADgFQADgEgCgFQgFACgHANQgFAAgFAGQgEAHgGAAIgBgBgAgdAjIgDABQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQAKgBACgFQgHgBgGgGIgLgLQACAJgFAGIAOAAQAHABAAAFgABAgXQgGADABAGQAGAHAHgIQAHgJgIgFQAAAEgHACg");
	this.shape_86.setTransform(17.2,-69.9,1.126,1.126,0.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#716490").s().p("AAYAPQgGgCgJgGIgOgHQABgCgFgCQgHgDAAAGQgFgEgEABQgDgFAAgEQAFgCABAFQACAGAEAAQAAgDgBgDQgBgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAIANAKQAHADALAAQgCAGAEACIAHAEQAFgBAAAEg");
	this.shape_87.setTransform(29.4,-75.2,1.126,1.126,0.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#A19CD4").s().p("AgMASQgDgFAAgHQACgHAKgJQAHgIAGACIgCADQAAAAAAABQAAAAABAAQAAABAAAAQAAAAABABQABgEAFABIAAAJQAAADgDAEQgIAEgEAIQgCADgJAAIgCAAg");
	this.shape_88.setTransform(31,-80.9,1.126,1.126,0.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#B4B684").s().p("AgEACQgDgCABgGQAGgCACAEIAFAFQgCAFgEABIgFgFg");
	this.shape_89.setTransform(26.2,-82.8,1.126,1.126,0.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#716490").s().p("AABACQgDgCgHAAQACgEAEgDQACgBADAHQADADACgDQgDgCAAgEQADAAADADIAAADIgCADQgBADAAAEIgGgHg");
	this.shape_90.setTransform(18.5,-84.4,1.126,1.126,0.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#5E6F4B").s().p("AgBAKQgEAAgBgDIAKAAIAAgJQgBgHAEAAIAAAJIAAAFQAAAEgDABIgFAAg");
	this.shape_91.setTransform(10.9,-73.1,1.126,1.126,0.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#5E6F4B").s().p("AgBAMIgDgHIAAgDIACAAQgHgPAOgBQAAADgCADQgDAAAAAGIADAEQAAADACADIAAAGIgDABQgCAAgBgDg");
	this.shape_92.setTransform(12.9,-80,1.126,1.126,0.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#809779").s().p("AgBALQAAgEgDgFIAFAAQAEAAABgCQgEgCgJACQgJAAgDgFIgCgDIgBgCQACAAACACIAFADQAGABAHgCQAGgDAGACQAAAEAFADQAFACACAEQgBAAgBAAQgBAAAAAAQAAABAAAAQgBABABABQgEACgOAAg");
	this.shape_93.setTransform(44,-87.9,1.126,1.126,0.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#8A80B7").s().p("AAIAGQACgGgKAAQgLAAAAgEQAFgBAGACQADADAFgBQAEACgBAFg");
	this.shape_94.setTransform(42.3,-87.2,1.126,1.126,0.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#A19CD4").s().p("AgBALQgNgKgFgBIAHAAQAEAAABgBQgEgDgGgBQgIgBAAgBQABgCAIgDQAGgCADgCQgBAFADABIAFADQADAHAJgCQALgCAEADQgBABgEAAIgHAAQgGABgFgBQgEgBgFAAQAAAEAJAAQAMgBgBAHIAAAGIgGACQgGAAgEgGg");
	this.shape_95.setTransform(41.7,-87.6,1.126,1.126,0.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#8A80B7").s().p("AgDAQQAAgEgDABIAAgDIAHAAQgBgFACgDQACgCAAgDIAAgMIADAAIAAAQQABAEgCAEQgDAEABADg");
	this.shape_96.setTransform(29,-88.5,1.126,1.126,0.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#313627").s().p("AgDAEQgEgEgFABQACgFAKgCQAFgBAIAEQAAACgGABQgEABABAGIgBAAQgDAAgDgDg");
	this.shape_97.setTransform(34.1,-90.5,1.126,1.126,0.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#5E6F4B").s().p("AgFAFQgBgEgDAAIAAgBQABgJAIAAQAFAAAFADQgJADgBACQAAABAEAHIgDABIgBACIgBAAQgDAAgBgFg");
	this.shape_98.setTransform(31,-90.2,1.126,1.126,0.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#C0C6CE").s().p("AgNAIQAAgIAIACIAAADQAFgBAFgHQAFgJAEgCQgCAIgHAHIgKANIgBABQgHAAAAgHg");
	this.shape_99.setTransform(15.3,-84.8,1.126,1.126,0.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#A19CD4").s().p("AgUAlIAMgNQAHgJABgIQgDACgFAJQgFAJgHABIAAgDQAWgUgEgLIgMACQgGABgGgDQABAGgHgCQgKgDgFACQAEgPAOgDIADAAIAKgCQAGgCAFABQAFgCgEgGQgEgGADgBQADAEACAAQAEABABABIAAAJQAIAAAHAEIAJAIQACgGAGAAIAKADQABAEgEAFQgFABgDADIgHAGIgEgGQgDgEgFAAQgKAQgGAIQgJAOgMAIg");
	this.shape_100.setTransform(17,-87.3,1.126,1.126,0.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#313627").s().p("AgFALQgFgDABgFQAHgDACgEQAEgHAGgCQABAGgEAHQgFAGACAJIgJgEg");
	this.shape_101.setTransform(24.6,-90.8,1.126,1.126,0.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#716490").s().p("AAHALQgBgHgGgEQgIgHgBgDQACAAACACIAFADIABAAQAAACAGADQAFAEgCAHg");
	this.shape_102.setTransform(12.8,-91.2,1.126,1.126,0.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#A19CD4").s().p("AAFAEQgDgEgCAAQAAACgDAEQgFAEgDgGQgBgEAEgBQADgDAAgCIAFgCQAAgBAAAAQAAABAAAAQABAAAAAAQABABAAABIADAAIAFAGQACAEgBAGQgEgBgCgFg");
	this.shape_103.setTransform(25.1,-85.8,1.126,1.126,0.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#787B67").s().p("AALAJQgCgFgEAFQgCAAgDgFQgBgEgBAFQgBAAAAgBQgBAAgBAAQAAgBgBAAQAAAAgBAAIgEACQgEgEgBgCQgBgEAGgCQAEgCAFAFQACAEACgFQgDAAAAgEQAAgEADAAIAEAHQADAFgBADIAGAAQgBAGAEAGQgDAAgDgFg");
	this.shape_104.setTransform(25.8,-87.4,1.126,1.126,0.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#716490").s().p("AgcAcIgDAAQgCgIAEgFIAHgIQADgFAAgCQAAgDgGgBQgGgCAAgDQAWgGAJgSIADAAIAHgDQAEgDAEAAIAAAPQgFAeARAKQADgBAAAEQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAIgEgCIgGAAQABgFgDgFIgEgGQgFAAAAADQAAAEAFAAQgDAFgDgEQgFgFgCABQgGADABAEQABADAEAFQAAACgEADQgDADABAEQgEAAgBAEQgBAFgDAAQgEgIgIgEgAgWAQQgEABgCAFQAEAAADAFQADAFAFgBIAAgDIADAAQAFgGgEgGQgEgGgGgDQAAABAAABQgBAAAAABQAAAAgBAAQAAAAgBAAgAAAgVQgDAGgHADQgBAGAFADIAJADQgCgIAFgHQAEgIgBgHQgGADgDAGg");
	this.shape_105.setTransform(24.7,-88.9,1.126,1.126,0.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#A19CD4").s().p("AgKgGQAEAAAAgIIgBgKQAHgCAGgHQAAADADADQgJABABAKQACAHAGAGIACADQACABgBADIAAAMQgEAAgCgHQgBgIgFAAQgEAEAAALQAAALAEAEIAAADQgPgKAFgeg");
	this.shape_106.setTransform(28.1,-90.9,1.126,1.126,0.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#787B67").s().p("AAAAPIgHAAQgEgBgBgCQAGgHgCgFQgEgHAAgGQAFgBAEAEIAHAFIAJAEQABADgGAFQgGAEgBAEgAgDAJQAKgBAAgJQgCAAgEgCIgEgBg");
	this.shape_107.setTransform(38.2,-92.7,1.126,1.126,0.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#A19CD4").s().p("AATAOIgLgCIAAgDQgcACgMgYIAMAAQAIgBAIACIAMACIAJAAQABAFAIAFQAHACgBAHQAAABAAABQAAAAAAABQgBAAAAAAQgBAAgBAAQgDACgEAAIgDAAg");
	this.shape_108.setTransform(32.9,-93.1,1.126,1.126,0.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#716490").s().p("AgXAoQADgDAAgHQABgHgHACQAAAAAAgBQAAAAAAgBQABAAAAAAQAAAAABgBIAEAAQAEgEAFABIAAgJQABgHgEABQAAgDgCgBIgBgGQgEgBgDACIgFACIAAgPQADAAABAEQABAFAEAAIADgCIADgBQgFgHABgDQABgCAJgDQgFgCgGgBQgKAAAAAJIgDAAQAAgDgBgCIgCgEQgCgHAAgDQABgEAEgEQAGADALAKQALAIAJgGIALACQAEABAGgDQAAAGgGAEQgGAFAAAGQAFABAEgDIAGgEQAAACAGACQAEADgBAFQgDABgEAJQgEAIgHABQgGgDAAgGIAMABQADgBAAgHIAAgDQgRgGgEAMQgFAPgFABIgCgOQAAgDAEgFIAIAAQAAgLgQgBQgBAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAABIgBAEQgEAFAIANQAHAPgFAHIgBgGQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAEgFgBQADAUgPAHQAAgFADgEgAACgSQAFADAEAAQgCgFAFgDQAFgCABgCQgIgDgIAAQgHACgCAHIABAAQAEAAACADg");
	this.shape_109.setTransform(33.3,-87.8,1.126,1.126,0.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#716490").s().p("AAHAdIgHgLQgDgFgGgCQAFgIgEgEQgEgGgJgBQAAgDAEgDQAFgDAAgDQADgFAAgEIADAAQgBgHAEACIAEAFIAAAJQgBAAAAgFQgBgEgCAAQgDACgDAHQgDAHgDACQABAIAJgCQAHgCgCgKIABAAIACAMQABAFADACQgBAHACAFIAFAJQADABACgCIAEgCQABAHgHACQgIADgBADgAgCAHQACAHAEAAQAAgNgEgDQgEACACAHg");
	this.shape_110.setTransform(34,-78.1,1.126,1.126,0.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#787B67").s().p("AgPgMQAPAFAQAUg");
	this.shape_111.setTransform(39.3,-74.9,1.126,1.126,0.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#787B67").s().p("AgBAIIAAgIQAEgCgFgGQgHgGAFgDQAAAHAEACQAJADgDAPQgCAIgCAAQgCAAgBgKg");
	this.shape_112.setTransform(42.4,-72,1.126,1.126,0.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#716490").s().p("AgDABIADgKIADAEIADAFQgGgBgBAFQAAAAgBAAQAAAAAAABQAAAAgBAAQAAABAAAAIgBAEQgDgDAEgGg");
	this.shape_113.setTransform(40.1,-79.6,1.126,1.126,0.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#716490").s().p("AgIAAQACgHgJgCQAIgFAIADQAJADAGAIQgHgIgIAHQgGADgEALQgBgDACgKg");
	this.shape_114.setTransform(39.1,-85.4,1.126,1.126,0.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#8A80B7").s().p("ACBBhQgEgDgBgDQgQgWgRgFIgDABQgBAAAAAAQgBAAAAAAQAAABAAAAQgBABAAAAIgDAAQACgQgHgQQgJgSgBgKQAJgBAGAEQADgIgIgCQgHAAAAgGQgCAAgHAGQgGAEgJgDQACADAHAFQAGAFAAAFIgGgFQgDgCAAAHIgDAAIAAgJQgEgBgCAEQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAAAIABgEQgFgBgKAHQgKAJgCAJQgIgKgHAOQgGANAPgCIAAADQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBABAAAAIgFACQADAOASAFQAJADASACQAAADgGADQgEABAEAFIgHgEQgDgCABgGQgKABgJgGIgOgKQAAAAgBAAQAAABAAAAQAAAAAAABQAAAAAAABQACAEgBACQgBAAgCgFQgBgFgGABQgBgIADABQABAAABAAQAAAAABgBQABAAAAAAQAAgBAAAAIgLgDQgHgDAAgJQgMAMgkAGQADgEAIgCIANgDQAAgCgGgBQAEgCgGgIQgGgGAIgCQAKAaAOgLQgBgJgMgHQgOgHgDgEIgJAJQgFADgKgDQABAIAKAEQALAFACAEIgjgBQgWAAgGABQgDgDAAgDQAEgDAEABQAFABACgCIgGgDQgFgDAFgGQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBABAAAAIgFACQADgDAAgDQAEgCgBgEIgMAAQgBgFAEgCQADgDAAgCQAAgCgKABQgKAAgBgDQgBgGAHABQAHABgBgIQABAAABgBQAAAAABAAQAAgBAAAAQAAgBAAAAQACgHgEgDIgHgFQAFgCAKADQAHADgBgHQAGADAGgBIAMgCQAGANgYAUQgIgCAAAGQABAGAHAAIAAADQAMgIALgMQAGgIAKgSQAFAAADAEIAEAIIAHgIQADgDAFgBIgGAIQgFAFACAIIgJAAQgFAAACAGQgDgDgDAAQAAAEADACQgCAGgDgGQgEgHgDABQgDADgDAGIgEAFQgDAFABAGIAAADIAPAAQAJAAAAgGIAAgGQAAgEABgBIACgFQAFACgCAEIgDAKQADAEAGgCQAGgCADADIgDgMQAAgGAJACQAAgEgEgCQgEgDgBgDQAJAEADAIQADAAABgFQACgEADAAQADAGAFgEQAEgEAAgEQADABADAFQACAGAEAAQABgFgCgFIgFgIIgDAAQABgFADAEQAEAFABgBQAFAGABAKIAAAPIgFgHQgDgDgHABQgBAGADAEIAHAFIAAAGQAJAEACgJQACgIgDgMQAIAAABgGIADAAQgIAFACAGQADALgDAGQAMgDADgMIADAAQgDAEAAAFQAQgHgEgSQAFABABgEQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABIAAAGQAGgHgIgPQgIgPAEgFIAAAJQAJgPADAMQgFAFABAFIABAOQAHgBAFgOQABACAFABQAAAGAGADQAHgBAEgIQAFgLACgBQACgFgFgDQgFgCgBgCIgGAEQgDADgGgBQAAgGAGgFQAHgEgBgGQABAAABAAQAAAAABgBQAAAAAAgBQAAAAAAgBQABgHgHgEQgIgFgBgFIADgCIADgBQACABAHgBQAGgDADAJQgEgDgFAAQAAAGAEAJQACAGgGAGQABADAEAAIAHAAQgIAIAOAEQAEgEgBgIIgGAAQABgEAGgEQAGgFgBgFQAEAEAFgGIAGgKIgKACQgFAAgDgFQAGABAAgHQACAHALgCQAMgCACADIgDAAQgLATgCAFQgGAQAHAIIACACIABAEIgGgDQgEgBABgFQgCACgHACQgHACgCADQABABAHAAQAHACADADQAAACgEABIgIAAQAFABANAKQALAIAHgEQgCACAAADQAAABAAABQAAAAAAABQABAAAAABQABAAAAAAQAGAGgJAAQgBgGgHADQgIACAHAEQgFAAgBAEQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIgBgEIADgHQACgFgFAAQgGgIgJgDQgKgEgIAGQAJACgCAIQgCALABADIAVAAQgCAAgMACQgLAAABAIIAWALQANAHAHAGIAAADQgCAAgEgBIgGgCIgDgFIgDgEIgFAMQgEAGADADIAAADIgGAAQAAABABAAQAAAAAAABQABAAABAAQAAAAABAAIAFABQgHAKAJAJQAIAHAOAEQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAIgEABQgFACAHAHQAHAGgGADQAAgEgEgCgAgRAdIgBAOQAMAAAAgMQgDgCAAgEIgCAAQgFAAgBAEgAgoANIAEAJIAPgCQAHgDgBgHIgDAAIAAgJQgGgBgDAAQgDABgDAGIgDgCIgDgBQgCAFABAEgAh+gVQADACAFABQAHABAAgEIgIgFIgBgBQgEAAgCAGgAA+gjQAEgNAQAGIAAADQgIgEgJAFIgDADIAAAAg");
	this.shape_115.setTransform(27.2,-83.8,1.126,1.126,0.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#A19CD4").s().p("AgNAOQAAgCAFgFQAFgDgFgCIAAgCQAFAAADgBQAAgEADAAQACAAAEgGQAEgEACAEQgBAZgZAAIgCAAg");
	this.shape_116.setTransform(14.7,-95.2,1.126,1.126,0.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#787B67").s().p("AgKABQADgDAGgBQADABADgCQAEgCADAAIAAADQABADgIAAQgGgBAAACQAEACgDABQgIAAABADQgHgBAEgFg");
	this.shape_117.setTransform(12.2,-94.4,1.126,1.126,0.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#716490").s().p("AAHAFQgBAAAAAAQAAAAgBAAQAAAAAAABQgBAAAAABQgDgHgBAAIgMABQABgLALAGQAJAEAEAHIgGgCg");
	this.shape_118.setTransform(16.9,-92.3,1.126,1.126,0.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#716490").s().p("AgFAAQAAgIAEAAQALAIgHAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAQgBABAAADQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAABIgBADIAAABQgEAAAAgJg");
	this.shape_119.setTransform(17.4,-95.9,1.126,1.126,0.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#A19CD4").s().p("AgLAEQABgDgFgBQgFAAAAgDIAigDQAHABgBAGQgOAFgIABQAAgEgJABg");
	this.shape_120.setTransform(41.7,-97.2,1.126,1.126,0.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#A19CD4").s().p("AgaARQgFgBAAgFQAQgMAbgPIADAAQAAADgKAEQgGADAEAEQAKgHAUgEQAAADgHADQgFACAAADIgEAAQgDAEgPAFQgOAEACAHIgNgBg");
	this.shape_121.setTransform(22.8,-92.5,1.126,1.126,0.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#8A80B7").s().p("AAAAQQgBgJAIgBQgDgDAAgDQgHAHgGACIAAAKQABAHgEABIAAgPQgEgBgEADIgHAEQAAgEAGgCQAGgDAAgDQgTAEgLAIQgGgFAIgDQAKgEAAgDQAEABAEgCQAEgCADAAQgBgDgEgGIgEgKQAFAAAEgDIAGgGQAGAGAGgDQAJgEABABIgFAOQgBAHAGAGIAJAAIAAABIgMAAQAMAaAegCIAAADQgLAFgLgHQgLgKgGgDQgEAEgBAEQAAADACAHQgHgGAAgIgAgLgIQAAALALAAQAAgDgDgDQgEgDABgEIAEgBQAAgBAAAAQABAAAAAAQAAAAAAgBQABAAAAAAQgEgDgCAAQgFAAAAAIg");
	this.shape_122.setTransform(28.4,-94.8,1.126,1.126,0.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#5E6F4B").s().p("AgBAGIgFgFIAGgHQADgGAEAGQgGABgCAFQgDADAFABQAEABgBAFg");
	this.shape_123.setTransform(11.1,-94.1,1.126,1.126,0.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#313627").s().p("AACAIQgCgCgFgGIgJgIIANAAQAJACAHAGIAAACQgDAAgCAEQgCADgDAAIgDgBg");
	this.shape_124.setTransform(13.4,-96.3,1.126,1.126,0.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#5E6F4B").s().p("AgIAAQAIAAABgCQAEgEADAAIAAAHIgIAAQgDAAACAGQgHgDAAgEg");
	this.shape_125.setTransform(11.7,-98.1,1.126,1.126,0.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#8A80B7").s().p("AgHABQAFgIABgEQABAAACAFQACACAFgBQAAAFgGACQgEAFAAAEQgIgDACgHg");
	this.shape_126.setTransform(39.8,-102.4,1.126,1.126,0.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#787B67").s().p("AAFANIAAgDQgFACgCgBQgDAAgDACQAEgDACgKQACgJACgDQAHgBAAALIgBAPg");
	this.shape_127.setTransform(42.2,-101.9,1.126,1.126,0.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#809779").s().p("AgHAAQAEAAACgEIAFAAQAEAAABACIAAAEQgJgBgEAEQgEgCABgDg");
	this.shape_128.setTransform(37.4,-103.5,1.126,1.126,0.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#787B67").s().p("AAHAEIgHgCIgJgCIAAAEQgGgCAAgFQAHgBAGADQAFACAEAAQAIgBABAEg");
	this.shape_129.setTransform(39.5,-96.9,1.126,1.126,0.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#716490").s().p("AhKAyQgDgDABgEIACgIIAAgDQAEABABgFQACgFACAAIAGAHQAEAFACgGQgGgBAEgEQAEgDAEACQAAgDgIgLQgGgIAFgDQAEAGALAAQAPAAADABIAAgHQAAgGADAAQgBAIAMAAQAGgBAIgEIAAgGIAGAAQAFABACgDQADgEACAAIADAAQAEgJgFgFQgIgFgDgFIgBgFQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBIAGACQADACADgBQABAEAIgBIAMAAIgCAFQgBADAAAEQgDADgCgBIgHgCQgCAFAEADIAEAEQAHgCgBgHQACAAADgFQACgDAFACQAAADADADQAAAEgFAFQgEAEAAAFQACAIALADIAOACQgDABgDAFIgEgDQgCgCgDgBQgBAJAHAAQAAACgDADQgEADABAEQAAAAgBgBQgBAAAAAAQgBgBAAAAQgBAAAAAAIgFACQAAABAAABQAAAAAAABQABAAAAABQAAAAABABIABAEIgOgCQgIgCgIABIAAgDIAPAAQABgHAFgCQAEgCgBgHQgFgBgCAGQgCAGgGgCIgBgDIgCgDQAFgLABgFQgKgFgFALQgFAKgBAPQgGgFACgIIAEgNQgBAAgIACQgIADgFgFIgGAFQgDAEgGgBIAFALQADAGABAEQgDAAgEACQgDADgFgCIgDAAQgKAAgMAJQgLAKgLAAIgBgBgAgqATQACAHgBADIAYAAQgCgKgTgFQgFACABADg");
	this.shape_130.setTransform(27.6,-98.2,1.126,1.126,0.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#313627").s().p("AgPARQAAgQAFgIQAGgMAIAFQgBAFgDALIAAACIABAEQAGABACgGQACgDAFAAQAAAFgEACQgEACgBAIg");
	this.shape_131.setTransform(31.4,-97,1.126,1.126,0.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#716490").s().p("AACACQAHgEgIgDIAAgDQgBgEgGABQANgFAAAOQgBAMgMAEQAAgDAIgJg");
	this.shape_132.setTransform(15.3,-101.9,1.126,1.126,0.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#809779").s().p("AgFAHQgDgDgEABIABgEQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIAGAAQABABACgDQADgIAHAFIADAAIAAADIgIAAQgEAAAAACIACADQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBABIgBAAQgDAAgCgBg");
	this.shape_133.setTransform(11.6,-106.7,1.126,1.126,0.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#8A80B7").s().p("AABAEQgHgEgDgGIAJAAIACAFQACABAGAAQAAAHgEAAQgCAAgDgDg");
	this.shape_134.setTransform(40,-106,1.126,1.126,0.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#C0C6CE").s().p("AgQAOQgMgKgBgNIAMAIQAIACAEADQgCgEADgHQACgGgGgFQABgHACgCQADgEAEABQANALALATIADADQABADgBAEIgKgEQgGgCgCAGIAAADQAAADADADQgDAIgJAEIgSgRg");
	this.shape_135.setTransform(19.9,-109.6,1.126,1.126,0.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#96AA90").s().p("AgDAGQgHgGADgIQAHAAACAFIAHAIQgEAEgDAAQgCAAgDgDg");
	this.shape_136.setTransform(25.2,-105.6,1.126,1.126,0.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#716490").s().p("AgVAoQAGgDAAgLQAAgKAGgDQgLABgBgHQAGgEAJABIAAgEQAAgDgEAAIgIAAIgDABIgDACIACgEQAAgBABAAQAAgBAAgBQAAAAAAgBQAAAAAAgBIADAAIADgGQACgEAEABQgCgQgWABIAAgJIgDAAQACgGAKAAIAFAGQABACgDAEQAFABAGgDIAHgEQgBAFAEACQAGACgCAGIgHAAQADAHAHAFQAJAHAAgNIAAgDQAJADgJAMQgJAKAJADQgDAKgGAGQgHAHgGgFQAAAAgBAAQAAAAAAABQgBAAAAABQAAAAAAABQgBABAAAAQgBABAAAAQgBAAAAABQAAAAgBAAIANAEQAHACAIgGQADgCADAAQAFABAEgCIAAADQgCAGABADQABADAGADIAAADIgeADIgHAAQgQAAgFgJgAgDALQgCAIAGADQAAgFAHgEQAFgDAAgGQgEABgCgDQgEgCgCAAQAAACgEAJg");
	this.shape_137.setTransform(39.3,-103.6,1.126,1.126,0.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#313627").s().p("AgSATQABgFAKgJQAHgFAAgJQAAAAABgFQABgEACAAIAJAAQAAADADADQgEgCgFAEQgGADAGABQAAgBABAAQAAgBAAAAQABAAABAAQAAAAABABQADACACgEIABAFQAAABAAABQAAAAAAABQABAAAAABQABAAAAAAIAAAHQgDAAgDAEQgDAFgDAAIAAgGQgBgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAIgBADQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQgIAAgCAGg");
	this.shape_138.setTransform(36.3,-110.8,1.126,1.126,0.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#96AA90").s().p("AgKAEIATAAQAAgCgDgFQgBgEAGABIAAANIgLAAIgDAAQgGAAgBgDg");
	this.shape_139.setTransform(14.5,-107.6,1.126,1.126,0.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#C9CD9D").s().p("AgIAHQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBIAAgHQAGABAEgCIAGgCQAHABgBAGQgDADgDgBIgHgCQAAAGgEAAIgCAAg");
	this.shape_140.setTransform(27.7,-109.1,1.126,1.126,0.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#716490").s().p("AgEAEQgGgEAAgGQADAAACgDIAFAGQAEADAFAAIACAAQgBAHgEADIgKgGg");
	this.shape_141.setTransform(24.6,-111.5,1.126,1.126,0.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#C0C6CE").s().p("AADAFQgQACgKgGQABgBAEAAIAIAAQABACAJgBIALAAQAEAAACgDQABgFAGABIAAANQgFgDgQABg");
	this.shape_142.setTransform(14.5,-106.9,1.126,1.126,0.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#8A80B7").s().p("AgXAUIAGAAQAOgDABgOQABgNgQAFIgDAAIAIgKQAFgGAHABQgBABAAAHQAAAIABgHQAAgKAIABQgEAJAMAFQANAFgJAMQgBgLgOAAIADAHQACAFgCAFQgHAAgJADIgJABIgGgBg");
	this.shape_143.setTransform(16.5,-102.6,1.126,1.126,0.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#8A80B7").s().p("AALAtQgGgEgGAAIAAgJQgBgBgEAAQgEgBgDgEQgEABAEAGQAEAGgEACQgGgBgGACIgJACQACgHgFgEQgGgFAAgCQAMADgDgMIgLAAQgHgBAAAFQAFACABADIgFgDQgCgCgCAAIAAgEQABgEgEgBQgCgEAIAAQAFAAgFgCQgBgFAIACQAJABgBgEQAEABgEAEQgGAEAAADQAdABABgaQgCgFgDAFQgFAFgCAAIAAgDIAJgJIgNgBQgLgBgDACIgPAAQgCgFAFgBIAJAAIAAgLIgFgKQgBgEAGgCIAAAEQAHAAgBAOQAGADAIgFQAHgEADAEQgBABgIADQgGACAAAFIAWAFQAIABAEAJQAAADgDAEIgEAAQgBgFACgBQABAAAAAAQAAAAABAAQAAABAAAAQAAABAAAAQAFAAgLgJQgEAAAAAJQAAAIAEAAQACAGAFAAQABAFAIgFIgCAIQgBADADAEQALAAAMgJQAMgJAKAAQgcAPgRAOQAAAFAGABIAMABQgCgHAPgEQAQgFAEgFQgLARgWAGQAAADAGACQAGABAAAEIgLgDQgGgBgBAGIgKgIgAADAeQgDgIgJgGQgMgFgBAMIAMgBQADAAADAIQAAgBAAgBQABAAAAgBQABAAAAAAQAAAAABAAIAEADIAAAAg");
	this.shape_144.setTransform(18,-94.9,1.126,1.126,0.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#8A80B7").s().p("AgnAkQAEgFAEgPQADgOAEgDQAFAAAGAEQAFAFAIgCIAHgWQAAgEgDgEQgEgEABgGIADAAIACAGQACADgBADIAGAAQAEgFgBgEQgJAAAAgDQALgEABAJIAAAKQACgIAIAEQAIADAAAHIgFgCQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAABQgNgDABAQIALgCIANABQgKACgHABQgLACABgIQgEAAABAEIAAAJQgDgBgNAAQgLAAgEgIQgFAFAGAIQAIALAAADQgFgCgDADQgEAEAGABQgCAGgEgFIgGgHQgDAAgBAFQgBAEgDAAIgBAAg");
	this.shape_145.setTransform(23.7,-98.6,1.126,1.126,0.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#8A80B7").s().p("AAAAJIgGgGQADgDgBgGQgDgGAHgCQgCAKADAJIAGAAQAAABgBAAQAAABAAAAQgBABAAABQAAAAABABIABAEQgEgBgDgEg");
	this.shape_146.setTransform(28.5,-104.6,1.126,1.126,0.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#8A80B7").s().p("AAJAhIgGgKQgEABABAEQAEAFgBADQgDAAAAgFQgBgFgDABQgFgBABAGQACAIgEgCQgEgDACgFQACgGAAgEQACgFAEgBIgPgDQgLgEgBgHQAAgEADgEQAFgFABgDQgEgEAAgDQgFgBgCACQgDAFgBABIAAgEQgBgDABgDIACgGIgLAAQgJABAAgDQALABAKgCIARgFQADAFAEADQgCAFgDgFQgDgIgEACQgDAEAEAJIAEAOQABgEAFgEQAFgEACgCQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBgBgBIgCgDQAAgEAGgCIADgCIABAAQgBAEgDACQgBADAEACQABAIAIgCQgGAEAAAJQAAAKgDADQAEAKAXgCIAfgCIAAACIgkADQAAADAEACQAFABAAADQgEABgIgFQgGgDgGACQgBAGAHADIABADQAAABAAAAQAAAAAAABQAAAAABAAQAAAAABAAQADAFgBAEQgDgCgFgGgAgQgEQgFAMAIABIAEgNQACgHADgFQgIAAgEAMg");
	this.shape_147.setTransform(37,-99.4,1.126,1.126,0.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#8A80B7").s().p("AgeAAQASgUABgHQAEABgBAIQgDAGgBAJQgCAGgDAEIAJgFQAEAAAEAFQgDgNADgDQAAABAAABQAAAAAAABQAAAAABAAQAAAAABAAIAMAAIAAAHQAWgBACAQQgFgBgBADIgDAHIgDAAIABgEIACgCIgKgFQgGgDgFgBQgCAOgNAAQgVAAgEAEQgLgPANgNgAAAAWQAAgCAFgJQAEgFgHgCIgCAHQgBAEgEABIAAgJQgGgBgFAFQgFAFgFAAQgBgFAEgCQAEgDgBgFQgQgCABAUQAGACALgBIAEAAQAIAAAGACg");
	this.shape_148.setTransform(33.8,-107.7,1.126,1.126,0.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#8A80B7").s().p("AgZAQQgEgGABgDIAAgDQADgDAFAAIAKADIAAgDQAFABACAHQADAGgKgCQABAEAJgBQAGgBADgCQgDgDgEgMQgCgMgHgBQgBAAAAAAQAAAAgBABQAAAAAAABQgBAAAAABQAAABgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAgIgGgBIAAgDQAGgEAHAFIAJALIgCgLQAAgEAFgDIAOAUQAIALACAMQgLgEgPAFQgPAJgIACQgBgGgFgGgAAGgGQgDAIAHAGQAHAGAHgHIgHgIQgEgFgGAAIgBAAg");
	this.shape_149.setTransform(23.6,-105.8,1.126,1.126,0.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#C0C6CE").s().p("AgGACIAHAAQABgCgCgBQgDgCAAgCQADgBACADQACADADAAIAAACQABAEgIAAQgHAAABgEg");
	this.shape_150.setTransform(19.4,-105.3,1.126,1.126,0.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#716490").s().p("AgJALQABgEAFgDQAFgDgBgDQADAAAAgFQABgGACgBIADAAQAAAJgHAFQgIAJgBAFIAAABQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAgBg");
	this.shape_151.setTransform(34.9,-110.3,1.126,1.126,0.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#5E6F4B").s().p("AADAFIgBgFQgCADgBgCQAAAAgBgBQgBAAAAAAQgBABAAAAQAAABgBABQgFgBAFgCQAFgEACADQgCgDAAgEIACAAQAAABABAAQAAAAAAABQAAAAABAAQAAAAABABIADABIAAAJQAAAAAAAAQgBAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBg");
	this.shape_152.setTransform(37.8,-111.9,1.126,1.126,0.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#809779").s().p("AgFAIQgEgIAHgEQAFgFAFAHQgHgCgBAEQgBABgBAHg");
	this.shape_153.setTransform(19.4,-112.7,1.126,1.126,0.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#A19CD4").s().p("Ag2BVIAAgMQADgDAAgDQgGgJgIgCIgWgEQABgFAFgCQAIgDABgCQgDgEgHAEQgIAGgGgDQABgPgHAAIAAgDQAIAAABAGQAGACAJgCQALgDAHAAQABgFgCgFIgCgIQAOgBABANQAJgOgNgFQgMgDAEgJQgKgBABAKQgCAFgBgGQABgHACgBQgIgBgFAGIgIAIQgCADgGACQgHACAAgEIAFgJIAEgKQgDABgEgDQgDgCgFABQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIgCgFQAJAGATgCQAQgBAEADIAAgPQgFgBgCAFQgCAFgDAAIAAgPIgMgUQgFgNAIgPQADgBAAAEQgDAJABABQAAAFAIAAIAAgJQAKARALAEQAEgGgBgGIADAAQAGAFgDAGQgDAIADAFQgEgDgIgEIgMgIQABAPAMAKIAUARQAIgEAEgIQgDgDAAgDQAGACAAAHIACAGQACADgBADIAAADIgKgCQgEgBgEADQgDAAgCgEQgCgDgFABIgGAAQAAAJADAAQAAAEAHAAQAHAAABgCQAAACADAFQAGAEAAAGQAIgCARgIQANgEALAEQgCgMgIgMIgMgVQgFADABAEIABALIgKgLQgIgFgGAEQABgGAHACIAKAEQABgEgCgDIgCgFIAAgDQgBAAgBAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAEgCAIAEQADACABgEIgHgFQgEgDgCgEQAAgDACgEQABgCgDgDIAMAAQAAADAEADQAAABAAAAQAAAAABABQAAAAABABQAAAAABAAQABAAAAABQABAAAAABQABAAAAAAQAAABAAAAQgEAAgFgDIgEgGQgDADgDAAQAAAHAHAFIAJAGQAFgCABgKQACAAACgEQACgDADABIAGAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAABABIAAAGQgFACAEAEIAEAGIgIACQgFACgFgBIAAAJQgCAAAAgFQgBgEgDAAQgJAGAMAJQAMALgGgOQAGABAAgHIAIACQAEABADgDIgFAGQgBACADAEQALgCACgHQABgFgCgNQAIAAABgGIAAgDIADAAQgCAKALgHIAAADQgBAHgSAUQgNAQALAOQAFgDAUgBQAQAAABgOQAFABAHADIAJAFIgBADIgCADQAAABAAAAQAAABAAAAQAAABAAABQgBAAAAABIgCAEQgFAAgBAEQgDgDgDgEIgRADQgLADgLgCQgDABgDgCIgGAAIgGAAQgFgLACgKQgHABADAHQABAIgDACIAHAFQAEAEAEABQADAFAIAFQAFAFgEAJIgDAAIAAgGIgGgEQgEgDgFABQABADgDAEQgDAEACAEQAFAAABADIgGAAQgDAAgCgEQgCgDgFABQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAIAFACQAAgHgIgDQgIgEgCAIIAAgKQgBgJgLAEIgEAAQgBAGAEAEQABAEAAAEIgHAYQgIACgFgFQgGgGgFAAQgEAFgDAOQgEAPgEAFIAAADQgEADgCAAQgBAAAAAAQAAAAgBgBQAAAAgBgBQAAAAAAgBgAg6ArIgIAJQAPgEAGgLQgGACgCgEQgDgFgEABQAAADgFABQgEACAAADIAGAAQAGAAgBADgAgqATQASABADgHIgOAAIgBAAQgHAAABAGg");
	this.shape_154.setTransform(24.4,-103.8,1.126,1.126,0.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#96AA90").s().p("AAAAJIgDAAQABgEgDgEQgCgBABgEIADAAQABAEACgDQADgFABABQAFAGgCAHIgEABQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAAAAAIAAAAg");
	this.shape_155.setTransform(31.6,-112.7,1.126,1.126,0.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#8A80B7").s().p("AgBAFQgBAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQABgIADgCQACAAAEADQgCAAgBAFQgBAFgCAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQgBAAAAAAg");
	this.shape_156.setTransform(35.1,-111.4,1.126,1.126,0.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#AABAAA").s().p("AgFAGQgGgFAJgEQAGgFAEAHIgGAAQgCAAAAACQAAAFgCAAg");
	this.shape_157.setTransform(36.5,-112.7,1.126,1.126,0.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#A19CD4").s().p("AgVAgIgJAFQADgEACgIQACgJACgGIADAAQADgBAAAEQAHgDgBgQQgBgDgFgCQgFgCACgFQAEgEACACIAGAFQABgIgEgEIAEgCQABAAABgBQAAAAABAAQAAAAABAAQAAAAABAAIAAAJQAFABADgHQADgIACgBIAIAFQAGACAEgEQgBAEgDAFIgIAGQAGABAAACIgGAAQgEgHgIAGQgHAFACAEIgCgCQgFACgBAIQAAAAAAABQABAAAAAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAABQAAAFgGADQgFACgBAFQgDADADAPQgFgFgEAAg");
	this.shape_158.setTransform(35.3,-111.1,1.126,1.126,0.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#A19CD4").s().p("AAAABQAAgFgGABIAAgDQADABADgDQACgCAFABQgCACABAHQACAJgHABQgBgBAAgIg");
	this.shape_159.setTransform(22.5,-114.3,1.126,1.126,0.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#AABAAA").s().p("AABAVIADABIAAADIgDgEgAANAVQgIgEgEACIAAABQgIgQgLgHQAEAAACgCIADgEQAEgBgBgIQAGgCAAAIQAAAIABABQAHgBgCgJQgBgJACgCIADAAQgCALAIAKIgMAAQADADgBAAQgCADAAAEQACAEAEADIAJAFQAAABAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIgDAAg");
	this.shape_160.setTransform(22.5,-112.6,1.126,1.126,0.5);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#8A80B7").s().p("AAAAIQAAgCgGgBIAGgFQADgDABgFIADAAIAAAIQgDADgDAFg");
	this.shape_161.setTransform(38.4,-113.9,1.126,1.126,0.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#8A80B7").s().p("AgGAMIAEgGQABgGgHgBIgEgHQgEgEAFgBIAAAGQAGABADgGQACgFAFABQgDAEAAAFIAMgGQgBAGgIAAQACAKgBAFQgCAHgJADQgDgEACgCg");
	this.shape_162.setTransform(29.4,-109.6,1.126,1.126,0.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#96AA90").s().p("AAAAOQgFgDgBgDQgIgIACgLQAAgFAQAIQAAABABAAQAAABAAAAQABABAAAAQABAAAAAAIAEAFQADADgBAFQgEAAgFgDIAAAGQgBABAAAAQAAABgBAAQAAABgBAAQgBAAAAAAIAAAAg");
	this.shape_163.setTransform(25.2,-114,1.126,1.126,0.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#809779").s().p("AgDASQAAgBAAAAQAAgBgBAAQAAAAgBgBQAAAAgBgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAAAQAFAAABgDIAAgHQADADAEAAQABgEgDgCIgCgGQABAAADADIAAgMIADAAIAAAJQAEADgBAEQgDAJAAADQgDgBgCACQgCAFAAAAg");
	this.shape_164.setTransform(26.2,-113.7,1.126,1.126,0.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#AABAAA").s().p("AAAATQAAgIgDgBIAAgDQgLAGACgJQADABACgCIAEgCQACgHgFgGQAGgBAAgFIABADQAAABABAAQAAABAAAAQABABAAAAQABAAAAAAQADgDAAgDIADAAQAEAEgBAIIgGgFQgCgCgEAEIgBAAQgBAIABAEIAEAKQAAAAgBAAQAAAAAAABQgBAAAAAAQAAABAAAAIgBAEg");
	this.shape_165.setTransform(32.9,-112.1,1.126,1.126,0.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#8A80B7").s().p("AgYARQgBgDADgIQACgGgEgCIADAAQAEgEAGABIALADQABABACgFQABgFADAAIAIgCQADgBAEADQgBgEACgBQACAAAAAFIAAALQABAEgHABQgCgBgDAFQgDAEgBgFIAHgIQAEgGgFgFQgSALgEAOQgGgBABgFQABgHgCgBQgFAAgBAFIAAAMg");
	this.shape_166.setTransform(29.9,-114.3,1.126,1.126,0.5);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#809779").s().p("AAAAGQgDgGAAgDIAAgIQAAgDADgBIAAAEQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAABAAIAAANIADAAIAAADQABAIgEABQAAgEgBgGg");
	this.shape_167.setTransform(21.2,-115.6,1.126,1.126,0.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#96AA90").s().p("AgDANQgDgDABgHQACgEgDgCIAEgBQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQABgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQABACgFAJQgDAEAEAEQAGABAAACQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABgBAAIgCACg");
	this.shape_168.setTransform(34.3,-115.8,1.126,1.126,0.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#A19CD4").s().p("AAAAFQAAABAAAEQgDgDgEABIgIACIAAgDQADAAAJgEQADgDAEAEQgEgGAFgFQAEgFAHAGIgBAEQgCACAAABQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgEABQAAAAgBABQAAAAAAAAQgBAAAAABQAAABAAAAQgBABAAAAQgBABAAAAQgBABAAAAQAAAAgBAAQAAgFgBAAg");
	this.shape_169.setTransform(32.6,-116.9,1.126,1.126,0.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#8A80B7").s().p("AgPAQQAGAAADgFQABgCACgIIADgJQABgHADgDIAJAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABIgIAJQgFAGgCAHQABADAEABQAFADACACQgJgDgFABQgGAAgIAFg");
	this.shape_170.setTransform(28.9,-118.9,1.126,1.126,0.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#8A80B7").s().p("AgPAKIgDAAIAAgTQAFgBADAGQADAEAHAAIAAgGIAFAGQAEAFAHgBQAAADADADQgSgIAAAFIgBAAQgFgCgDADQgDACgDAAIgBAAg");
	this.shape_171.setTransform(23.5,-116.3,1.126,1.126,0.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#787B67").s().p("AAAAEQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAgBAAAAQgDgBAAgDIAEABQAAABAAAAQAAAAAAAAQABABAAAAQABAAABAAIABgFQAAAAAAgBQAAAAABAAQAAABAAAAQAAABABABIAAAKQgEgDgCAAg");
	this.shape_172.setTransform(26,-115.2,1.126,1.126,0.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#96AA90").s().p("AAAASQgGAAgBgEQADgEgCgKQgDgMACgIQAEAAgBALQgBAJAEAAIAAAJQABABAFABQAFABgBAGIAAADQgBgDgIAAg");
	this.shape_173.setTransform(33.8,-120.7,1.126,1.126,0.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#AABAAA").s().p("AABAQQgBgCgEgDQgEgBgBgDQACgHAFgGIAGgJQgCAHAEAGQAFADgBAGQAAAAAAABQgBAAAAABQAAAAgBABQgBAAgBAAQgDACABAEgAAEgPIAAAAIAAAAg");
	this.shape_174.setTransform(30.3,-118.9,1.126,1.126,0.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#716490").s().p("AAHAQIgFgBQgFABgEgFIgHgIQgEgDACgFQADgIgBgDQAJgCAFAFQAEAGgCAGQgBAEABADQACgEAEABQgEAEAGACQAIABgBAFIgDAAQAAgBAAgBQAAAAgBAAQAAgBAAAAQAAABgBAAIgBAFIgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAgBg");
	this.shape_175.setTransform(25.1,-117.5,1.126,1.126,0.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#716490").s().p("AgEAAQACgFACgEQABADAFADQgBAGgCACQgCAFgFAAQgDgDADgHg");
	this.shape_176.setTransform(27.7,-118.3,1.126,1.126,0.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#96AA90").s().p("AgEAPIgBgEQAEgDABgKQACgLAEgDIAAAFQgDASgEAEIAAAHQgBgBAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBg");
	this.shape_177.setTransform(21.7,-118.8,1.126,1.126,0.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#C0C6CE").s().p("AAAAPQgDgGgFABQAHgFABgRQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBIAAgDQAIAAgCAMQABADgDAGQgCAGAEAEIAAAGIgDAAQgEAAgBgEg");
	this.shape_178.setTransform(22.4,-118.6,1.126,1.126,0.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#AABAAA").s().p("AAAAGIABgFQABAAAAgBQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAgIADQgFAEgEgGQAMgFAFgBQAGAAAIAGQABAAABABQABAAAAAAQAAABAAAAQABABgBAAIgJAAIgEACQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAIgBgBg");
	this.shape_179.setTransform(28.5,-121.6,1.126,1.126,0.5);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#96AA90").s().p("AATA+IAAgPIgNAFQgHACABAIIgDAAIAAgJQAAgEgHgCQgHgBAFgFQgEAAgCADQgBgCABgHQACgFgFgHQgCgCgBgIQAAgJgDgCIAGACQADACADgBQAGgDgBgEQgBgGgHgDIABgLQACgIAJAHQAEgKgDgLIgHgSQACADAJADQAHABABAFQAAAFgDAFQgEAFABAGIAJgCQAHgCAFABIAAADQgJgBgGAEQAAAIADAEQgEADAJADQAJADgCAFIAAACQgIgGgIAAQgGABgJAFQADAGAGgEQAFgEACAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAIgCAFQADABACgCIAEgCQgDADgCAHIgEALQgFgDgBgDQgCAEgCAGQgDAIADADIAAADQAGgEAGgBQAHgBAJADIADAAIAAAMQgCAAgCAFQgBAFgDAAIgBgBgAgGgRIAAAPQAFAAABgEIAEgIIgEgCIgDgBIgDAAg");
	this.shape_180.setTransform(27.6,-121.8,1.126,1.126,0.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#96AA90").s().p("AgBgGIAEAAIAAADQACAJgGABQgDgHADgGg");
	this.shape_181.setTransform(31.8,-121.9,1.126,1.126,0.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#5E6F4B").s().p("AgSAIIAJAAQAJgBANgFQAAgGgGgBIAAgGIADAAQASAJgRAJQgJAFgGAAQgIAAgGgEg");
	this.shape_182.setTransform(42.6,-97.3,1.126,1.126,0.5);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#5E6F4B").s().p("AAAAXQgBgCgDAAQgHgJAGgNQACgGAJgTIADAAQgJATgBAHQgEARAIAJIgDgDg");
	this.shape_183.setTransform(42,-91.6,1.126,1.126,0.5);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#5E6F4B").s().p("AAEALQgEgFgDgBQAAgBAAgBQAAAAABAAQAAgBABAAQAAAAABAAQgBgCgFgDQgGgEAAgEIAGAAQAFAKAOAMIgFABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_184.setTransform(46.9,-87.4,1.126,1.126,0.5);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#5E6F4B").s().p("AgwAcQAEgGgBgJQAfgQAOgDQgBgGABgJQACgIgBgHQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAEgBIAhAbQAAADAFADQAEACAAAEIAAAHQgHgLgFgFQgHADgGgBQgIAAAAgIQADACAFABQAGAAgCgGQgDgJgGAFQgJAGgDABQAAgCAFgKQAEgFgJgBQgFAGAAALQgBAMAJABQgHABgDAEQgGAIgGADQgFABgBgEQgBgFgFACQgKABgFAIQgGAJAJAGQABgEAFgCQAAADgEADQgFADAAADQgFADgEAAg");
	this.shape_185.setTransform(36.6,-71.9,1.126,1.126,0.5);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#5E6F4B").s().p("AgEARQAGgGgCgTIAAgGQAHgIgDAVQgCASgGAAIAAAAg");
	this.shape_186.setTransform(36.4,-66.6,1.126,1.126,0.5);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#96AA90").s().p("AgFADIAAgHIAGAAQAEAAABACIgBAEQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQgCAAgFgCg");
	this.shape_187.setTransform(25.8,-126.2,1.126,1.126,0.5);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#809779").s().p("AgDAHQgDgEAAgGQAGgEAHABIAAAKQgEADgDAAIgDAAg");
	this.shape_188.setTransform(29.3,-124.3,1.126,1.126,0.5);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#787B67").s().p("AAAAQQABgLgDAAIAAgeIACAAQAAAKAAAPQADASgBAJQgCAAAAgLg");
	this.shape_189.setTransform(33.2,-123.8,1.126,1.126,0.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#787B67").s().p("AgCAGQAEgHgBgCIAAgMQAGAGgEAJQgEALABAFQgGgEAEgGg");
	this.shape_190.setTransform(34.7,-116.9,1.126,1.126,0.5);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#AABAAA").s().p("AgCAAQgIgCAEgCQAGAAAEgDQAGABgCAGIgEAJQACgHgIgCg");
	this.shape_191.setTransform(29.7,-122.8,1.126,1.126,0.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#AABAAA").s().p("AgEABQgDgLAGgGQgDAHADAHQAFgBgBgLIAAgCQADAGgBAKQgCALADAHQgIgEgCgNg");
	this.shape_192.setTransform(31.8,-120.8,1.126,1.126,0.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#C0C6CE").s().p("AgaAzQACgJAAgDIAAgDQAGgHAEgRQAFgRADgGIAAgFQABgGAFgJIAEgMQAHgEACgFQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBABAAQAAAAABgBQABAAAAAAQAAAAABgBQAAAAAAgBIAGAAQAEAEgEAEQgFAFACAGIgEgCQgCgCgDABQgCAEADAEQACADAAADIgJAAIAAAOQgBAHgGgDIAAANQAAADgGAEIAAAJQAAADADACQgCAGgCgBIgIgBQAAAOADAEIAAADQgKgCABANQgFgCAAgGg");
	this.shape_193.setTransform(26,-127.9,1.126,1.126,0.5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#AABAAA").s().p("AgjAfIAIABQADABABgFQgDgDAAgDQAFADAEAAQABAAAAAAQABgBAAAAQAAgBAAAAQABgBAAgBIAAgFQAAgDgEAAIgIAAQAIgDAAgEIgCgMQAJADABgIIgBgNIAJAAQABgDgDgEQgCgEABgEQADAAACABIACACQAGABAEgCIAFgFQAHADABgCIAEgHQgBAEACAEQADAEgBADIgGABQgDABAAAEQAAADAGAAQAGAAgDAGQAAACgGACQgGABAAAEQAMgCAAAIQgBADgKACQgIADAEAIQADgCAGAAQAFgBAEgDQACAGgFADQgGADAAADQAGADACADQABADgDAGIgPAAIAAgMQgFgBgGACIgIACQgBgGADgFQACgFAAgFQgBgFgHgBQgJgBgCgDIAHAQQAEAKgFALQgIgIgCAJIgCALQgFADgEAAQgDgEAAgOgAAHgXQAAAFgCADQAIADAFgGQAFgGgGgDQgBADgFAAIAAgGQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQgCAFABAFg");
	this.shape_194.setTransform(28.2,-128.4,1.126,1.126,0.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#C0C6CE").s().p("AgMBMQgBgEAEgCQAAAAABAAQABgBAAAAQABgBAAAAQAAgBAAAAQABgGgEgFQgFgGACgHQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBAAgBAAIAAgDIAEgKQACgGgGgCIAAgDIAPAAQADgGgBgDQgCgDgGgBQAAgDAGgDQADgDAAgGQgEADgFABQgGAAgDACQgEgIAIgDQAKgCABgFQAAgIgMACQAAgEAGgBQAGgCAAgCQADgGgGAAQgGAAAAgDQAAgEADgBIAGgBQABgDgDgEQgCgEABgEIgEAHQgBACgHgDQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAABAAIADgBQACgGgGgCQgGgCABgFIAJAAQALADABARIAEAcIAAAVQgDAEAAAOQAAAOADAFQgBAHADANQACALgEAFQABAEAIgBQAIAAABADIAAAJQAAAAgBAAQAAAAAAABQgBAAAAABQAAAAAAABQgBABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAgDACgCIABgEQgGgGgFAEQgFAFAEAJQgEgEgDACQgJAFgDAAgAgJAsQADAOAHADQgBgHAAgMQACgLgCgGIgGAAQgGAGADANg");
	this.shape_195.setTransform(32.4,-125.7,1.126,1.126,0.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#536F2C").s().p("AgCAMQACgPgCgQQADABABgEQAEAMgGARIgDAQIABgLg");
	this.shape_196.setTransform(21.4,-120,1.126,1.126,0.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#5E6F4B").s().p("AAAADQgGgDgDgEIAJADIAKABQAAAFgEAAIgGgCg");
	this.shape_197.setTransform(11.2,-105.2,1.126,1.126,0.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#718A50").s().p("AgCAMQACgPgCgQQADABABgEQAEAMgGARIgDAQIABgLg");
	this.shape_198.setTransform(21.4,-120,1.126,1.126,0.5);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#718A50").s().p("AgJgDQAGACACgBIAFgEQAHAAgBAGQAAABgDADIgJgCQgFgBgCAGg");
	this.shape_199.setTransform(7.5,-61,1.126,1.126,0.5);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#787B67").s().p("AgGADQAAgDADgEQAHAAADAEIgGAEIgBABIgGgCg");
	this.shape_200.setTransform(7.1,-62,1.126,1.126,0.5);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#8F9E5E").s().p("AgCARQgCgEgEABQABgDAHAAIABgOIgBgRQACABABAEQABABAEgCQABADgEANIgFAUQAAAAgCgDg");
	this.shape_201.setTransform(21.8,-61,1.126,1.126,0.5);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#5E6F4B").s().p("AgEgCQACgLAEgEQABAAABABQABAAAAAAQAAABAAAAQABABgBABIgDABIgCABQALAVgQAHIABgTg");
	this.shape_202.setTransform(29.9,-62.3,1.126,1.126,0.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#716490").s().p("AAAAGQgJgEgBgHQAGgBAFACIAKAEQgCAGgGAAIgDAAg");
	this.shape_203.setTransform(18.1,-63.7,1.126,1.126,0.5);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#96AA90").s().p("AgCAAQACgEAAgGIACAAQACAKgCAIQAAABAAABQgBAAAAABQAAAAAAAAQAAAAgBAAQAAAAgCgLg");
	this.shape_204.setTransform(23.9,-65.8,1.126,1.126,0.5);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#8F9E5E").s().p("AgDADQgBgMAIACQABAGgEAEIAAAGQgBgBgDgFg");
	this.shape_205.setTransform(23.4,-66.1,1.126,1.126,0.5);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#716490").s().p("AAHAIIgDgBQgDgBgCgFQgFgDgDgBIAAgGIADAAIAHAFQAEADACACQAAADADADIAAADIgDgCg");
	this.shape_206.setTransform(17.6,-67,1.126,1.126,0.5);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#5E6F4B").s().p("AgHADIgCgDQALgBAFgIIADAAQABALgFAFQgDACgJABQAAgEgBgDg");
	this.shape_207.setTransform(26.8,-67.2,1.126,1.126,0.5);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#716490").s().p("AgIAKQgEABgFgDQABgCADgDIADgDQAJAAAEACQADABAAgEIAAgJQAEACABAGQABACAFACQgEAIgNABQgDgBgFAAg");
	this.shape_208.setTransform(25.6,-68.8,1.126,1.126,0.5);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#5E6F4B").s().p("AgGAHIACgHQABgDgDgDIAGAAQADgBABgCQAEAAgBAIIAAALIgDAAQgGAAgEgDg");
	this.shape_209.setTransform(20.4,-69,1.126,1.126,0.5);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#C0C6CE").s().p("AgGAFQgBgFAGgCQAFgCAAgEQAHAFgHAHQgEAFgBAAQgDAAgCgEg");
	this.shape_210.setTransform(24.8,-72.2,1.126,1.126,0.5);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#313627").s().p("AgCABQgCgFAEgEQAEAFAAALQgEABgCgIg");
	this.shape_211.setTransform(34,-77.5,1.126,1.126,0.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#716490").s().p("AgEgDQABgGAGACQgBAEAEACQgBAJgJABIAAgMg");
	this.shape_212.setTransform(25.7,-79.9,1.126,1.126,0.5);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#716490").s().p("AADgCQgHACAEAFQAHAHgEACIgFAAQgBgEgMgFQgJgEgBgGQAJAEAFgEIAJgJQACAEANAIQAMAEACAJQgFAEgDAAQgJAAgHgRg");
	this.shape_213.setTransform(21,-80.6,1.126,1.126,0.5);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#716490").s().p("AgLADIAAgDQAFAAAGAAQAFgDAHACQgBADgIABIgOAAg");
	this.shape_214.setTransform(18,-82.4,1.126,1.126,0.5);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#716490").s().p("AgJAXIAAgGQAEgBACgFIgBgPQAAgKgFgGQAEgFACAFQADAGABAAQADAGAGAAQgBAGgIAAQADAMgCAHQgCAHgDAAIgGgBg");
	this.shape_215.setTransform(27.6,-83.9,1.126,1.126,0.5);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#5E6F4B").s().p("AAAADQgCgDgEAAQACgFAEgBQADAAACAEIACAGIAAADIgBAAQgEAAgCgEg");
	this.shape_216.setTransform(22.2,-86.2,1.126,1.126,0.5);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#A19CD4").s().p("AAAAEQgDgBgDgCQACgFAEABIAHAEQAAADgEAAIgDAAg");
	this.shape_217.setTransform(13.8,-86.6,1.126,1.126,0.5);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#C0C6CE").s().p("AgCAPQgGgEAAgLQAAgKAGgEQADAAABAIQACAGAEAAQABACgDAFQgCADABAFg");
	this.shape_218.setTransform(28.5,-89,1.126,1.126,0.5);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#A19CD4").s().p("AgCgFIAHAAQABAGgEAEQgMgEAIgGg");
	this.shape_219.setTransform(38.3,-90.3,1.126,1.126,0.5);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#A19CD4").s().p("AAAAEIgCAAQAAgEgGAAQABgEAHABIAIAAQADAHgIABIgDgBg");
	this.shape_220.setTransform(13,-92.4,1.126,1.126,0.5);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#536F2C").s().p("AgEgGIAEABQADACACAAQABAJgKABg");
	this.shape_221.setTransform(38.3,-92.5,1.126,1.126,0.5);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#5E6F4B").s().p("AgCAFIgBgEQAAgBgBAAQAAAAAAAAQAAAAgBgBQAAAAAAgBIAFgCQAAAAAAAAQAAAAAAAAQABABAAAAQABAAAAABQAEABgBAGg");
	this.shape_222.setTransform(34.3,-95,1.126,1.126,0.5);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#716490").s().p("AgEgBQABgMAIAHQAAAAgBAAQAAABAAAAQAAAAgBAAQAAABAAAAIgDABQAAADACACQAEADgBAFQgJAAAAgLg");
	this.shape_223.setTransform(27.6,-95.6,1.126,1.126,0.5);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#716490").s().p("AgMgCQADgDAJABIANACIgJAHQgEgGgMgBg");
	this.shape_224.setTransform(14.5,-96.9,1.126,1.126,0.5);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#8A80B7").s().p("AAAABQAAgCgKABQgBgDAFgCQAFgBAAgDQACgBADAFQACAEAGgCQgGAJgNAEIAHgJg");
	this.shape_225.setTransform(17.8,-99.1,1.126,1.126,0.5);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#A19CD4").s().p("AgDAAQADgLAGgBQgCAGgCAGIgDANQgHgBAFgMg");
	this.shape_226.setTransform(35.6,-99.9,1.126,1.126,0.5);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#C0C6CE").s().p("AgBAJQgBgEgFABQgCgFADgBQACgEAAgDQAEgCADADIAGAFIAAAEQgDAAgCAEQgCACgCAAIgBAAg");
	this.shape_227.setTransform(29.2,-100.5,1.126,1.126,0.5);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#C0C6CE").s().p("AgJADQgBgFAJAAIALABQgDAEgMAAIgEAAg");
	this.shape_228.setTransform(20.7,-102,1.126,1.126,0.5);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#716490").s().p("AgCAFQABgDgCgCIgCgEIADAAQABADAGAAQABABgEAFg");
	this.shape_229.setTransform(24.9,-101.9,1.126,1.126,0.5);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#3C5619").s().p("AgCgBQABgGAEABIAAADQAEADgEADQgDAEgEAAIACgIg");
	this.shape_230.setTransform(15,-102.2,1.126,1.126,0.5);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#716490").s().p("AgGAAQgDgJACgDQAEgCADAHQABAGACgFIADADQAAABAAABQABAAAAABQABAAAAAAQAAAAABAAQgBABgGAEQgDAEAAAEIgFgNg");
	this.shape_231.setTransform(35.3,-102.3,1.126,1.126,0.5);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#536F2C").s().p("AAAADQgGgDgDgEIAJADIAKABQAAAFgEAAIgGgCg");
	this.shape_232.setTransform(11.2,-105.2,1.126,1.126,0.5);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#716490").s().p("AgDAJQgLAAgGgCQgBgTAQADQABAFgEADQgEABABAEQAFAAAFgEQADgDAGAAIAAAHQAEAAACgEIADgGQAHACgEAEQgGAIAAACQgIgCgJABg");
	this.shape_233.setTransform(32.1,-106.4,1.126,1.126,0.5);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#8A80B7").s().p("AAAAFQgLgIAJgFQACAAAAAEQAAAEACAAQAAAAAAAAQABABAAAAQABABAAAAQAAAAABAAQADAHgCAAQgCAAgEgEg");
	this.shape_234.setTransform(26,-108.6,1.126,1.126,0.5);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#C0C6CE").s().p("AgCACQgBgBADgHQAAAAAAAAQAAAAAAABQAAAAAAAAQABABAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAAAHQgGAAAAgFg");
	this.shape_235.setTransform(15.4,-112.6,1.126,1.126,0.5);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#C0C6CE").s().p("AAAAIIgDgCIAAgKQABgBAAAAQAAAAABAAQAAgBABAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQADADgCAGQgBAEADAEQAAACgDAEQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAgBg");
	this.shape_236.setTransform(33.3,-115,1.126,1.126,0.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#AABAAA").s().p("AAAAEQgFgBgEAEQgBgHAJgBIALgFIAAANIgKgDg");
	this.shape_237.setTransform(28.6,-115.6,1.126,1.126,0.5);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.lf(["#8FC274","#699A44","#4A7C32"],[0,0.498,1],-32.7,0,32.7,0).s().p("AlFOHQgJglB5kwQCBlHAFgZQAKg2BljPQBbi4AthLQAbgtAWh/IAfitQAJgkAUhtQAShjAIgWQALgdAIA1QAJA1gIAnQgqDRgVC5QgHBChDB9Qg0BhgwBBQgaAjgoCEQgwCpgMAeQgoBliMHFQgMAmgoAXQgPAJgMAAQgTAAgHgdg");
	this.shape_238.setTransform(-10.6,30.6,1.126,1.126,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.3,-135.3,96.8,270.7);


(lib.Group_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B6C3A2").ss(1,0,0,4,true).p("AAcA2QgCgBgagyQgegxADgH");
	this.shape.setTransform(12.3,6.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#65803C").ss(1,0,0,4,true).p("AAeA3Qg5hVgBgb");
	this.shape_1.setTransform(6.9,7.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#65803C").ss(1,0,0,4,true).p("AgthBQADAGAZAhQAUAcgCAAQAHAJAWAdQARAYgBAC");
	this.shape_2.setTransform(12.2,21.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#B6C3A2").ss(1,0,0,4,true).p("ABUCNQgPgtgogjQACABgng3Qgsg6gFgNQgHgLgGgPQgNgeAAgV");
	this.shape_3.setTransform(8.4,14.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#65803C").s().p("ABuCNIg3AAIgXgDIgFgHIgUgiQgPgKgLgTQgVgkgigsQgaghgTgpQgRgjACgMQAAAMAfA7QAkBCAIgDQhGhwALgYQgCAJAfA2QAjA9AOgEQg8hpAOgVIADAMQADAMADACIgBgLIAIAPIABAIIgBgNIABgMIgBgEIADgBQgCABAAAEQADAIAMASIAIASQALAXAUAXQACACA8A6QAzAwAcBGQAPACgJAAIgWgBg");
	this.shape_4.setTransform(14.7,14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,29.3,30.4);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B6C3A2").ss(1,0,0,4,true).p("AgiBsQAPgxARg0QAfhlAGgK");
	this.shape.setTransform(16.1,21.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#65803C").ss(1,0,0,4,true).p("AggBpQAwirARgl");
	this.shape_1.setTransform(12.6,15.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#65803C").ss(1,0,0,4,true).p("AAdiwQgIAUgfCVQgJAigFBSQgDApgBAg");
	this.shape_2.setTransform(3,43.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#B6C3A2").ss(1,0,0,4,true).p("AhEE1QANh1APh0QAPg9ARg/QAeiBAHgQQAShHAXgq");
	this.shape_3.setTransform(6.9,30.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#65803C").s().p("AgKExIgfgIIgYgDIgWgIQgEAAALhqQgEgpANg0QAXhbAahgQAyi/AQgSQgEAGgjBvQgkB3ACALIAjhwQAnhwALgLQgEAGgeBnQgfBxAHAOQAOgxATgzQAmhoAOgMIgIAUQgIAVAAAGIAJgQIgIAcIgGAMIAKgRIALgRIADgHIADABQgCABgEAFQgFAPgIAmQgVAugSBVQgiClAHDFIAGAEQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQgEAAgPgFg");
	this.shape_4.setTransform(9.9,33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,21.6,65.1);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B6C3A2").ss(1,0,0,4,true).p("AAeBgQABAAg8jD");
	this.shape.setTransform(13.5,12.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#65803C").ss(1,0,0,4,true).p("AAgBbQgwiXgPgd");
	this.shape_1.setTransform(7.5,10.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#65803C").ss(1,0,0,4,true).p("AhEiUQADARAwCAQARAyBGBp");
	this.shape_2.setTransform(14.8,36.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#B6C3A2").ss(1,0,0,4,true).p("ABtD7QgDgBggg9QgmhFgeg+QABgBgkhpQgnhtgGgOQgag7gIgX");
	this.shape_3.setTransform(10.9,26.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#65803C").s().p("AAwDxQgQgXgbgxQgWgegQgtQACAAg6ijQg5ilgGgHQACgGAkBjIAoBuQABgBgfhiQgfhmgBgGQACgDAjBdQAmBhAKAHIgZhcQgbhfgCgPIAHASQAIATADAFIgDgRIAMAYIADAQIgEgWIgCgTQAFANARAhQAJAtAdBIQA5CRBsCDQAXgHglAQIgxAaIgWAJQgCgBgJgMgAhTjrQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAIgBAHIgCgGg");
	this.shape_4.setTransform(16.6,25.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,33,52.6);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B6C3A2").ss(1,0,0,4,true).p("AgTCGQgBAAASh/QAQiAAGgM");
	this.shape.setTransform(10.6,25.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#65803C").ss(1,0,0,4,true).p("AgSCEQAXjXAOgw");
	this.shape_1.setTransform(6.5,19.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#65803C").ss(1,0,0,4,true).p("AgPjmQgEAOgFBlQgFBlADgDQgCAcAEAmQADAtAKAnQAHAiAQAkQAJASAHAK");
	this.shape_2.setTransform(2.8,56.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#B6C3A2").ss(1,0,0,4,true).p("AAZGKQgGgJgIgSQgOgkgHglQgIgngEg7QgEhFgDgkQgCgCANibQAOifAEgWQABgXAFgcQAJg6APgo");
	this.shape_3.setTransform(3.1,39.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#65803C").s().p("AgdFlQgVgngMhPQgNg1ACg9QgGgFAYjoQAYjsARgdQgFAMgUCJQgVCRADAQQAAgKAViDQAXiLAMgRQgFALgQB+QgSCNALARQAhj3AWgdIgGAZQgFAaAAAJIAHgWIgEAjIgCAJIAFgQIAJgWIACgJQAAAAAAgBQABgBAAAAQAAAAABAAQAAAAAAABIABACQgCABgDAHQgDATgDAvQgQA7gFBoQgDBoAGBSQALBbAGAZQAOBEAeAgQAWgHgkAQIgcAPIgUAPIgTAJQgEgCgLgTg");
	this.shape_4.setTransform(8,40.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,16.7,81.3);


(lib.Group_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B6C3A2").ss(1,0,0,4,true).p("ABTCbQADgBhPiTQhNiQgMgR");
	this.shape.setTransform(22.8,21.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#65803C").ss(1,0,0,4,true).p("ABUCRQADgChKh/QhIh+gagk");
	this.shape_1.setTransform(14.8,17.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#65803C").ss(1,0,0,4,true).p("AiUj7QAOAZA0BnQA4BsgDgCQAqBmArBBQAVAmAmAiQAiAeAAgE");
	this.shape_2.setTransform(35.8,59.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#B6C3A2").ss(1,0,0,4,true).p("AD9GmQgNgJgSgRQgkgjgXgpQgUggglhMQgmhOgXgkQAFgDhdiqQhfisgTgaIgjg1Qgpg+gTgk");
	this.shape_3.setTransform(25.3,42.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#65803C").s().p("AC6GJQgqglgvhYQglg5gdhFIgmhTQgxhlgthRQgphLhGhtQg6hcgDgJQADgBBhCgQBfCfAHASQAEgDhYicQhdimgFgKQACgBBcCVQBgCaAMANQACgChNiPQhTibgIgSIARAdQATAdAHAIIgNgaIAaAlIAEAIIgIgRIgMgdQAMAUAmA1QgCAABpC5IA3BgIBDBwQAYAnAzBcQAwBPAvAbIAGgDQACAAgRASIgTAaIgLAVIgQARQgGAAgVgSgAi2l7QgBgCAAAAQgBgBAAgBQAAAAAAAAQABAAAAAAIADACQAAACADAIIgFgIg");
	this.shape_4.setTransform(29.5,42.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,58,86.8);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B6C3A2").ss(1,0,0,4,true).p("AAPBUQABABgeis");
	this.shape.setTransform(11.3,12.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#65803C").ss(1,0,0,4,true).p("AARBSQABAAgQhHQgPhPgDgN");
	this.shape_1.setTransform(5.7,10.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#65803C").ss(1,0,0,4,true).p("AgliDIAcB+QAIAqAnBe");
	this.shape_2.setTransform(8.2,32.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#B6C3A2").ss(1,0,0,4,true).p("AA8DjQAAAAgRg2QgWhFgRgvQACAAgwjJQgQg0gBgi");
	this.shape_3.setTransform(6.1,23.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#65803C").s().p("AgVCSQgQgbgJgmQADgBggiNQgiiVAAgMIAUBbQAUBcAEAGIgPhYQgQhaADgKIAVBVQAVBWALAGIgMhQQgNhVAEgOIADARQADARADAEIAAgPIAGAWIABAOIAAgTIABgQIAAgGIADgBQgCACgBAFQADALALAeQAEAmASBBQAjB+BKCKQAYAAgnAEIg3AJIgXACQgIgHgVhHg");
	this.shape_4.setTransform(12.3,23.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,24.4,47.9);


(lib.leaftall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#8FC274","#699A44","#4A7C32"],[0,0.498,1],-48.4,21.4,43.3,-21.2).s().p("AjSMgQgXgTBNkUQBUkogBgUQgCgpBPjJQBHizAphOQAYgugHhiIgJiEQACgdgFhUQgFhMAFgTQAGgaAcAdQAcAdABAeQAECiAbCGQAKAwg5B9QgsBhgvBJQgaAogPBvQgUCOgIAcQgYBbg7GBQgGAggxAqQgjAdgYAAQgMAAgJgHg");
	this.shape.setTransform(12.5,45.3,1.173,1.095,0,-14.6,-23.9);

	this.instance = new lib.Group_4();
	this.instance.setTransform(-0.4,-25.7,1.173,1.095,0,-14.6,-23.9,14.1,14.5);
	this.instance.alpha = 0.699;

	this.instance_1 = new lib.Group_3();
	this.instance_1.setTransform(15.2,-50.2,1.173,1.095,0,-14.6,-23.9,9.8,32);
	this.instance_1.alpha = 0.699;

	this.instance_2 = new lib.Group_2();
	this.instance_2.setTransform(-0.7,-40.7,1.173,1.095,0,-14.6,-23.9,16,25.8);
	this.instance_2.alpha = 0.699;

	this.instance_3 = new lib.Group_1();
	this.instance_3.setTransform(-0.7,-68.6,1.173,1.095,0,-14.6,-23.9,7.7,39.6);
	this.instance_3.alpha = 0.699;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#005826","#005C28","#00843E","#009D4C","#00A651","#54B948"],[0,0.02,0.251,0.435,0.545,1],-3.5,63.5,7.5,-62.8).s().p("AkKJJQgfgcgRg1QgQg/gKgeQgXhLgOhqQgHgzAIg4QAMhCAFgnQAFhKAFghQAIg3AjgnQA9hDBBhQQA2hDAXggQByikBngaQAbgHA4AQQA5ARARAYQASAYARAfQAQAgAJAbQAUA+AHBKQAEAvAABcQAAAmAIBUQAJBQAAAoIgGBlQgDA2AJAtQAJAugZBGQgQAugkA+QgcAxgiANQgjAOg3gTQgzgSgPg6QgIgfAAhNQAAg3gKglQgRg/gnAtIAJAYIAOAqQAFASgCAXQgBAJgGAeIgRBaQgNA1gXAcQgrAwhQAIIgWABQhBAAgpgmg");
	this.shape_1.setTransform(-4.6,-65.8,1.173,1.095,0,-14.6,-23.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.9,-140.2,89.9,280.6);


(lib.Symbol1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#54B948","#00A651","#005826"],[0,0.376,1],-27.6,0,27.7,0).s().p("ABeFzQAfhzgjhRQgohdhFhwQg/hlgrgyQgigogshxQgxh/gQgZQgagqBIBRIByCEQAfAkAxAmQAZATAQAMIBvBzQBwB8AKA6QANBSAQA/QAFAcgXAjQgkA4g4A4QhIBIg8AXQAkgoAZhbg");
	this.shape.setTransform(60.3,134.9,1.126,1.126);

	this.instance = new lib.Group_0();
	this.instance.setTransform(54.1,100.8,1.126,1.126,0,0,0,28.4,42.4);
	this.instance.alpha = 0.699;

	this.instance_1 = new lib.Group();
	this.instance_1.setTransform(80.7,127.2,1.126,1.126,0,0,0,11.7,22.9);
	this.instance_1.alpha = 0.699;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#9DBD6A","#7FAE41","#5B822E"],[0.012,0.498,1],-40.9,0,40.9,0).s().p("AGFKkQgEgpgJgUQgLgagYgqIgmhDQgagugnguIhLhWQggglg6gyQhJhAgSgTQhMhKgwhUQgeg3gNg9QgHgegMhbQgFgsgmhGQgthSgJgeQgIgcg2heQgthNAAgwQAqAlAOAZQAJARANANQAJAJATAPQA9AwAnA+QAMATAXAUIAnAjQAZAYAtA0IBuB0QBEBHAoAzQAUAaAVAlIAjBBIAyBYQAfA1AQAkQAkBMARBaQANBJADBgIAGBUQADBdgLAqQgHgSgEgrg");
	this.shape_1.setTransform(46.1,83.1,1.126,1.126);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,93.8,191.5);


(lib.flowersblowing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1copy();
	this.instance.setTransform(81.5,140.9,1,1,0,0,0,85.9,170.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:46.9,regY:95.7,rotation:-0.3,x:42.1,y:66},0).wait(1).to({rotation:-0.7,x:41.7,y:66.2},0).wait(1).to({rotation:-1,x:41.2,y:66.5},0).wait(1).to({rotation:-1.3,x:40.8,y:66.7},0).wait(1).to({rotation:-1.7,x:40.4,y:66.9},0).wait(1).to({rotation:-2,x:39.9,y:67.1},0).wait(1).to({rotation:-2.5,x:39.3,y:67.5},0).wait(1).to({rotation:-3,x:38.7,y:67.9},0).wait(1).to({rotation:-3.5,x:38,y:68.2},0).wait(1).to({rotation:-4,x:37.5,y:68.6},0).wait(1).to({rotation:-4.5,x:36.8,y:69},0).wait(1).to({rotation:-5,x:36.2,y:69.4},0).wait(1).to({rotation:-4.2,x:37.1,y:68.7},0).wait(1).to({rotation:-3.4,x:38.1,y:68.1},0).wait(1).to({rotation:-2.6,x:39.2,y:67.5},0).wait(1).to({rotation:-1.8,x:40.3,y:66.9},0).wait(1).to({rotation:-1,x:41.3,y:66.3},0).wait(1).to({rotation:-2.1,x:39.8,y:67.1},0).wait(1).to({rotation:-3.2,x:38.5,y:67.9},0).wait(1).to({rotation:-4.3,x:37.1,y:68.7},0).wait(1).to({rotation:-5.4,x:35.8,y:69.6},0).wait(1).to({rotation:-4.9,x:36.3,y:69.2},0).wait(1).to({rotation:-4.5,x:36.8,y:68.9},0).wait(1).to({rotation:-4.1,x:37.4,y:68.5},0).wait(1).to({rotation:-3.7,x:37.9,y:68.2},0).wait(1).to({rotation:-3.3,x:38.4,y:67.9},0).wait(1).to({rotation:-2.8,x:38.9,y:67.6},0).wait(1).to({rotation:-2.4,x:39.5,y:67.2},0).wait(1).to({rotation:-2,x:40,y:66.9},0).wait(1).to({rotation:-2.6,x:39.2,y:67.4},0).wait(1).to({rotation:-3.2,x:38.4,y:67.8},0).wait(1).to({rotation:-3.9,x:37.6,y:68.3},0).wait(1).to({rotation:-4.5,x:36.8,y:68.7},0).wait(1).to({rotation:-5.1,x:36.1,y:69.2},0).wait(1).to({rotation:-5.7,x:35.3,y:69.7},0).wait(1).to({rotation:-6.4,x:34.5,y:70.2},0).wait(1).to({rotation:-5.9,x:35.1,y:69.8},0).wait(1).to({rotation:-5.4,x:35.7,y:69.4},0).wait(1).to({rotation:-5,x:36.2,y:69.1},0).wait(1).to({rotation:-4.5,x:36.8,y:68.7},0).wait(1).to({rotation:-4,x:37.5,y:68.3},0).wait(1).to({rotation:-3.2,x:38.5,y:67.7},0).wait(1).to({rotation:-2.4,x:39.5,y:67},0).wait(1).to({rotation:-1.6,x:40.5,y:66.5},0).wait(1).to({rotation:-0.8,x:41.6,y:65.9},0).wait(1).to({rotation:0,x:42.6,y:65.3},0).wait(1).to({rotation:0.8,x:43.6,y:64.8},0).wait(1).to({rotation:0.3,x:43,y:65.1},0).wait(1).to({rotation:-0.2,x:42.4,y:65.4},0).wait(1).to({rotation:-0.6,x:41.8,y:65.7},0).wait(1).to({rotation:-1.1,x:41.3,y:66.1},0).wait(1).to({rotation:-1.5,x:40.7,y:66.3},0).wait(1).to({rotation:-2,x:40,y:66.7},0).wait(1).to({rotation:-2.4,x:39.5,y:67},0).wait(1).to({rotation:-2.9,x:38.9,y:67.3},0).wait(1).to({rotation:-3.4,x:38.3,y:67.6},0).wait(1).to({rotation:-3.8,x:37.7,y:68},0).wait(1).to({rotation:-4.3,x:37.1,y:68.3},0).wait(1).to({rotation:-3.6,x:38.1,y:67.7},0).wait(1).to({rotation:-2.8,x:39,y:67.2},0).wait(1).to({rotation:-2.1,x:39.9,y:66.7},0).wait(1).to({rotation:-1.4,x:40.8,y:66.2},0).wait(1).to({rotation:-0.7,x:41.7,y:65.6},0).wait(1).to({rotation:0,x:42.6,y:65.1},0).wait(1));

	// Layer 2
	this.instance_1 = new lib.flwrshort();
	this.instance_1.setTransform(80.5,140.8,1,1,0,0,0,-21,70);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0,regY:0,rotation:-0.7,x:100.6,y:70.5},0).wait(1).to({rotation:-1.3,x:99.8,y:70.3},0).wait(1).to({rotation:-2,x:99,y:70.1},0).wait(1).to({rotation:-2.7,x:98.1,y:69.9},0).wait(1).to({rotation:-3.4,x:97.3,y:69.6},0).wait(1).to({rotation:-4,x:96.5,y:69.4},0).wait(1).to({rotation:-4.6,x:95.8,y:69.3},0).wait(1).to({rotation:-5.1,x:95.1,y:69.1},0).wait(1).to({rotation:-5.7,x:94.4,y:69},0).wait(1).to({rotation:-6.2,x:93.8,y:68.8},0).wait(1).to({rotation:-6.8,x:93.1,y:68.7},0).wait(1).to({rotation:-7.3,x:92.4,y:68.6},0).wait(1).to({rotation:-6.7,x:93.2,y:68.7},0).wait(1).to({rotation:-6.1,x:93.9,y:68.8},0).wait(1).to({rotation:-5.5,x:94.7,y:69},0).wait(1).to({rotation:-4.8,x:95.5,y:69.1},0).wait(1).to({rotation:-4.2,x:96.3,y:69.3},0).wait(1).to({rotation:-4.9,x:95.4,y:69.1},0).wait(1).to({rotation:-5.5,x:94.6,y:68.9},0).wait(1).to({rotation:-6.2,x:93.8,y:68.7},0).wait(1).to({rotation:-6.8,x:93,y:68.6},0).wait(1).to({rotation:-6.4,x:93.6,y:68.7},0).wait(1).to({rotation:-5.9,x:94.2,y:68.8},0).wait(1).to({rotation:-5.4,x:94.8,y:68.9},0).wait(1).to({rotation:-4.9,x:95.4,y:69},0).wait(1).to({rotation:-4.4,x:96,y:69.1},0).wait(1).to({rotation:-4,x:96.6,y:69.2},0).wait(1).to({rotation:-3.5,x:97.2,y:69.4},0).wait(1).to({rotation:-3,x:97.8,y:69.5},0).wait(1).to({rotation:-3.4,x:97.3,y:69.4},0).wait(1).to({rotation:-3.8,x:96.8,y:69.2},0).wait(1).to({rotation:-4.2,x:96.3,y:69.1},0).wait(1).to({rotation:-4.6,x:95.8,y:69},0).wait(1).to({rotation:-5,x:95.3,y:68.9},0).wait(1).to({rotation:-5.4,x:94.8,y:68.8},0).wait(1).to({rotation:-5.8,x:94.3,y:68.7},0).wait(1).to({rotation:-6.3,x:93.6,y:68.5},0).wait(1).to({rotation:-6.9,x:92.9,y:68.4},0).wait(1).to({rotation:-7.5,x:92.3,y:68.3},0).wait(1).to({rotation:-8,x:91.6,y:68.2},0).wait(1).to({rotation:-8.6,x:90.9,y:68},0).wait(1).to({rotation:-7.3,x:92.5,y:68.3},0).wait(1).to({rotation:-6,x:94,y:68.5},0).wait(1).to({rotation:-4.8,x:95.6,y:68.8},0).wait(1).to({rotation:-3.5,x:97.2,y:69.2},0).wait(1).to({rotation:-2.2,x:98.8,y:69.6},0).wait(1).to({rotation:-1,x:100.3,y:70},0).wait(1).to({rotation:-1.5,x:99.6,y:69.8},0).wait(1).to({rotation:-2.1,x:99,y:69.6},0).wait(1).to({rotation:-2.6,x:98.3,y:69.4},0).wait(1).to({rotation:-3.2,x:97.6,y:69.2},0).wait(1).to({rotation:-3.8,x:96.9,y:69},0).wait(1).to({rotation:-4.3,x:96.2,y:68.9},0).wait(1).to({rotation:-4.9,x:95.5,y:68.7},0).wait(1).to({rotation:-5.4,x:94.8,y:68.6},0).wait(1).to({rotation:-6,x:94.2,y:68.4},0).wait(1).to({rotation:-6.5,x:93.5,y:68.3},0).wait(1).to({rotation:-7.1,x:92.8,y:68.2},0).wait(1).to({rotation:-5.9,x:94.2,y:68.4},0).wait(1).to({rotation:-4.7,x:95.7,y:68.7},0).wait(1).to({rotation:-3.5,x:97.2,y:69},0).wait(1).to({rotation:-2.4,x:98.7,y:69.4},0).wait(1).to({rotation:-1.2,x:100.1,y:69.7},0).wait(1).to({rotation:0,x:101.6,y:70.2},0).wait(1));

	// Layer 5
	this.instance_2 = new lib.flrwtall();
	this.instance_2.setTransform(39.4,142.8,1,1,0,0,0,-36,120.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:0,regY:0.3,rotation:-0.2,x:75,y:22.4},0).wait(1).to({rotation:-0.3,x:74.7,y:22.3},0).wait(1).to({rotation:-0.5,x:74.3,y:22.1},0).wait(1).to({rotation:-0.7,x:74,y:22},0).wait(1).to({rotation:-0.9,x:73.6,y:21.9},0).wait(1).to({rotation:-1,x:73.2,y:21.8},0).wait(1).to({rotation:-1.6,x:72,y:21.5},0).wait(1).to({rotation:-2.2,x:70.8,y:21.1},0).wait(1).to({rotation:-2.8,x:69.5,y:20.8},0).wait(1).to({rotation:-3.4,x:68.3,y:20.5},0).wait(1).to({rotation:-3.9,x:67,y:20.2},0).wait(1).to({rotation:-4.5,x:65.8,y:19.9},0).wait(1).to({rotation:-4,x:67,y:20.2},0).wait(1).to({rotation:-3.4,x:68.2,y:20.4},0).wait(1).to({rotation:-2.9,x:69.4,y:20.7},0).wait(1).to({rotation:-2.3,x:70.5,y:21},0).wait(1).to({rotation:-1.8,x:71.7,y:21.3},0).wait(1).to({rotation:-2.6,x:69.9,y:20.8},0).wait(1).to({rotation:-3.5,x:68,y:20.3},0).wait(1).to({rotation:-4.4,x:66.2,y:19.9},0).wait(1).to({rotation:-5.2,x:64.3,y:19.5},0).wait(1).to({rotation:-6.2,x:62.3,y:19.1},0).wait(1).to({rotation:-7.1,x:60.3,y:18.7},0).wait(1).to({rotation:-8.1,x:58.2,y:18.4},0).wait(1).to({rotation:-9,x:56.1,y:18.1},0).wait(1).to({rotation:-10,x:54.1,y:17.8},0).wait(1).to({rotation:-10.9,x:52,y:17.6},0).wait(1).to({rotation:-11.9,x:49.9,y:17.4},0).wait(1).to({rotation:-12.8,x:47.9,y:17.2},0).wait(1).to({rotation:-12.4,x:48.8,y:17.3},0).wait(1).to({rotation:-11.9,x:49.8,y:17.4},0).wait(1).to({rotation:-11.5,x:50.8},0).wait(1).to({rotation:-11,x:51.7,y:17.5},0).wait(1).to({rotation:-10.6,x:52.7,y:17.6},0).wait(1).to({rotation:-10.2,x:53.7,y:17.7},0).wait(1).to({rotation:-9.7,x:54.6,y:17.8},0).wait(1).to({rotation:-10.3,x:53.4,y:17.6},0).wait(1).to({rotation:-10.8,x:52.2,y:17.5},0).wait(1).to({rotation:-11.4,x:50.9,y:17.4},0).wait(1).to({rotation:-12,x:49.7,y:17.3},0).wait(1).to({rotation:-12.5,x:48.5,y:17.2},0).wait(1).to({rotation:-10.9,x:52.1,y:17.5},0).wait(1).to({rotation:-9.2,x:55.8,y:17.9},0).wait(1).to({rotation:-7.5,x:59.4,y:18.4},0).wait(1).to({rotation:-5.8,x:63,y:19},0).wait(1).to({rotation:-4.2,x:66.6,y:19.7},0).wait(1).to({rotation:-2.5,x:70.2,y:20.6},0).wait(1).to({rotation:-2.8,x:69.5,y:20.4},0).wait(1).to({rotation:-3.2,x:68.7,y:20.2},0).wait(1).to({rotation:-3.5,x:68,y:20},0).wait(1).to({rotation:-3.8,x:67.3,y:19.8},0).wait(1).to({rotation:-4.2,x:66.6,y:19.7},0).wait(1).to({rotation:-4.5,x:65.9,y:19.5},0).wait(1).to({rotation:-4.9,x:65.2,y:19.3},0).wait(1).to({rotation:-5.2,x:64.5,y:19.2},0).wait(1).to({rotation:-5.5,x:63.7,y:19},0).wait(1).to({rotation:-5.9,x:63,y:18.9},0).wait(1).to({rotation:-6.2,x:62.3,y:18.7},0).wait(1).to({rotation:-5.2,x:64.5,y:19.2},0).wait(1).to({rotation:-4.1,x:66.7,y:19.6},0).wait(1).to({rotation:-3.1,x:68.9,y:20.1},0).wait(1).to({rotation:-2.1,x:71.1,y:20.7},0).wait(1).to({rotation:-1,x:73.3,y:21.2},0).wait(1).to({rotation:0,x:75.5,y:21.9},0).wait(1));

	// Layer 4
	this.instance_3 = new lib.leaftall();
	this.instance_3.setTransform(31.5,136.8,1,1,0,0,0,11,123);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:-2.4,regY:-4.4,rotation:-1,x:16,y:9.6},0).wait(1).to({rotation:-1.9,x:13.8,y:9.9},0).wait(1).to({rotation:-2.9,x:11.7,y:10.1},0).wait(1).to({rotation:-3.9,x:9.6,y:10.5},0).wait(1).to({rotation:-4.8,x:7.5,y:10.9},0).wait(1).to({rotation:-5.8,x:5.3,y:11.3},0).wait(1).to({rotation:-6.4,x:4,y:11.6},0).wait(1).to({rotation:-7,x:2.7,y:11.9},0).wait(1).to({rotation:-7.5,x:1.5,y:12.1},0).wait(1).to({rotation:-8.1,x:0.2,y:12.4},0).wait(1).to({rotation:-8.7,x:-1,y:12.7},0).wait(1).to({rotation:-9.3,x:-2.3,y:13.1},0).wait(1).to({rotation:-8.6,x:-0.9,y:12.7},0).wait(1).to({rotation:-8,x:0.5,y:12.3},0).wait(1).to({rotation:-7.3,x:2,y:12},0).wait(1).to({rotation:-6.7,x:3.4,y:11.6},0).wait(1).to({rotation:-6,x:4.8,y:11.3},0).wait(1).to({rotation:-7,x:2.7,y:11.8},0).wait(1).to({rotation:-7.9,x:0.7,y:12.2},0).wait(1).to({rotation:-8.9,x:-1.3,y:12.7},0).wait(1).to({rotation:-9.8,x:-3.3,y:13.2},0).wait(1).to({rotation:-10.2,x:-4.2,y:13.5},0).wait(1).to({rotation:-10.6,x:-5,y:13.8},0).wait(1).to({rotation:-11,x:-5.9,y:14},0).wait(1).to({rotation:-11.4,x:-6.7,y:14.2},0).wait(1).to({rotation:-11.8,x:-7.6,y:14.5},0).wait(1).to({rotation:-12.2,x:-8.5,y:14.8},0).wait(1).to({rotation:-12.6,x:-9.3,y:15},0).wait(1).to({rotation:-13,x:-10.2,y:15.3},0).wait(1).to({rotation:-13.2,x:-10.7,y:15.5},0).wait(1).to({rotation:-13.5,x:-11.1,y:15.6},0).wait(1).to({rotation:-13.7,x:-11.6,y:15.8},0).wait(1).to({rotation:-13.9,x:-12,y:16},0).wait(1).to({rotation:-14.1,x:-12.4,y:16.1},0).wait(1).to({rotation:-14.3,x:-12.9,y:16.3},0).wait(1).to({rotation:-14.5,x:-13.3,y:16.4},0).wait(1).to({rotation:-13.4,x:-10.9,y:15.5},0).wait(1).to({rotation:-12.2,x:-8.5,y:14.7},0).wait(1).to({rotation:-11.1,x:-6,y:13.9},0).wait(1).to({rotation:-9.9,x:-3.5,y:13.1},0).wait(1).to({rotation:-8.8,x:-1,y:12.4},0).wait(1).to({rotation:-8.1,x:0.4,y:12.1},0).wait(1).to({rotation:-7.4,x:1.8,y:11.7},0).wait(1).to({rotation:-6.7,x:3.3,y:11.4},0).wait(1).to({rotation:-6.1,x:4.8,y:11},0).wait(1).to({rotation:-5.4,x:6.3,y:10.7},0).wait(1).to({rotation:-4.7,x:7.7,y:10.4},0).wait(1).to({rotation:-4.5,x:8.3,y:10.3},0).wait(1).to({rotation:-4.2,x:8.9,y:10.2},0).wait(1).to({rotation:-3.9,x:9.5,y:10},0).wait(1).to({rotation:-3.7,x:10.1,y:9.9},0).wait(1).to({rotation:-3.4,x:10.7,y:9.8},0).wait(1).to({rotation:-3.1,x:11.3,y:9.7},0).wait(1).to({rotation:-2.9,x:11.9,y:9.6},0).wait(1).to({rotation:-2.6,x:12.5,y:9.5},0).wait(1).to({rotation:-2.3,x:13,y:9.4},0).wait(1).to({rotation:-2,x:13.6,y:9.3},0).wait(1).to({rotation:-1.8,x:14.2,y:9.2},0).wait(1).to({rotation:-1.5,x:14.9,y:9.1},0).wait(1).to({rotation:-1.2,x:15.5,y:9},0).wait(1).to({rotation:-0.9,x:16.2},0).wait(1).to({rotation:-0.6,x:16.9,y:8.8},0).wait(1).to({rotation:-0.3,x:17.6},0).wait(1).to({rotation:0,x:18.2,y:8.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.4,-126.5,163.2,288.1);


// stage content:



(lib.FWW_TilesAll_v01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Pickerelweed
	this.instance = new lib.flowersblowing("synched",0);
	this.instance.setTransform(1612.4,1630.2,1.322,1.322,0,0,0,60.4,143.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:15.7,regY:16,scaleX:1.49,scaleY:1.49,x:1545.8,y:1363.1,startPosition:1},0).wait(1).to({scaleX:1.66,scaleY:1.66,x:1538.4,y:1264.4,startPosition:2},0).wait(1).to({scaleX:1.83,scaleY:1.83,x:1530.9,y:1165.7,startPosition:3},0).wait(1).to({scaleX:1.99,scaleY:1.99,x:1523.5,y:1067,startPosition:4},0).wait(1).to({scaleX:2.16,scaleY:2.16,x:1516.1,y:968.2,startPosition:5},0).wait(1).to({scaleX:2.33,scaleY:2.33,x:1508.6,y:869.5,startPosition:6},0).wait(1).to({scaleX:2.5,scaleY:2.5,x:1501.2,y:770.8,startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:30},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({startPosition:42},0).wait(1).to({startPosition:43},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:45},0).wait(1).to({startPosition:46},0).wait(1).to({startPosition:47},0).wait(1).to({startPosition:48},0).wait(1).to({startPosition:49},0).wait(1).to({startPosition:50},0).wait(1).to({startPosition:51},0).wait(1).to({startPosition:52},0).wait(1).to({startPosition:53},0).wait(1).to({startPosition:54},0).wait(1).to({startPosition:55},0).wait(1).to({startPosition:56},0).wait(1).to({startPosition:57},0).wait(1).to({startPosition:58},0).wait(1).to({startPosition:59},0).wait(1).to({startPosition:60},0).wait(1).to({startPosition:61},0).wait(1).to({startPosition:62},0).wait(1).to({startPosition:63},0).wait(1).to({startPosition:64},0).to({_off:true},1).wait(175));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2460.2,1813.4,215.8,380.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;