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


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFEEE","#F3F4E9","#D7DADE","#DCD8D4"],[0.004,0.286,0.749,0.875],0,0,0,0,0,3.7).s().p("AgYAaQgLgLAAgPQAAgOALgKQAKgLAOAAQAPAAALALQAKAKAAAOQAAAPgKALQgLAKgPAAQgOAAgKgKg");
	this.shape.setTransform(3.7,3.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7.4,7.4);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFEEE","#F3F4E9","#D7DADE","#DCD8D4"],[0.004,0.286,0.749,0.875],0,0,0,0,0,3.7).s().p("AgYAaQgLgLAAgPQAAgOALgKQAKgLAOAAQAPAAAKALQALAKAAAOQAAAPgLALQgKAKgPAAQgOAAgKgKg");
	this.shape.setTransform(3.7,3.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7.4,7.4);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").ss(0.2,0,0,4).p("ABgiGQhDA2g1A9QhuB4BAAi");
	this.shape.setTransform(87.9,37.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AgThDIgDA+QAGA9ArAH");
	this.shape_1.setTransform(77.4,24.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AA4hhIAHAaQAFAggFAbQgRBXhyAT");
	this.shape_2.setTransform(39.7,37.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AA9iTQgCBKgSBJQgiCShIgD");
	this.shape_3.setTransform(58.5,33.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AgNAnIAbhM");
	this.shape_4.setTransform(147,20.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AgbBCIA4iD");
	this.shape_5.setTransform(124,39.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AgnBMIBPiX");
	this.shape_6.setTransform(134,35.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AAzAlIhlhJ");
	this.shape_7.setTransform(110.8,36.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AAtAhIhZhB");
	this.shape_8.setTransform(133.5,24.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AAuAwIhbhf");
	this.shape_9.setTransform(95.7,31.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AAcAcIg3g3");
	this.shape_10.setTransform(117.9,21.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#231F20").ss(0.2,0,0,4).p("ABGAWQgbgOgfgKQg7gYgTAI");
	this.shape_11.setTransform(153.4,17.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AAMAfIgWg9");
	this.shape_12.setTransform(128.6,11.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AAYAPIgvgd");
	this.shape_13.setTransform(143,15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AARAaIghgz");
	this.shape_14.setTransform(109.1,6.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AAeAQIg7gf");
	this.shape_15.setTransform(146.1,3.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AA2AZIhqgx");
	this.shape_16.setTransform(182.5,2.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AAmALIhLgV");
	this.shape_17.setTransform(206.3,1.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AGpjWQhCAJhHAPQiPAegbAeQiTAniNBAQkbB8AmB5");
	this.shape_18.setTransform(134.5,29.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#231F20").ss(0.2,0,0,4).p("Aw4gfQBmiWIHAAQEEAADtAeQAtgTEMgQQCFgJB9gEQBSASCvgXQBogXBfgKQhPARhhANQgMACgLABQgOADgOAEQjuA4g5BTQlRBSiABUQgxAhgbAmQgLASgVAu");
	this.shape_19.setTransform(108.2,25.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#231F20").ss(0.2,0,0,4).p("ACqhpQhOAYhSAnQigBMgPBM");
	this.shape_20.setTransform(25.1,25.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#231F20").ss(0.2,0,0,4).p("ADxhzQgtAeg8AdQh4A4hJgHQgegDgmANQhLAcgmBX");
	this.shape_21.setTransform(42.3,29.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AImhcQgRAbhAAWQiAArjtgaQhrgdiJABQkSACiICQ");
	this.shape_22.setTransform(57,19.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AJbjVQjAAWjSAjQmiBFhWA8Qg8AOhDAjQiGBLgiB5");
	this.shape_23.setTransform(126.3,28.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E3EFDE").s().p("AoyDaQicAPiOg2QhHgbgogeQioiOBxhVQBbhEEKgcQEwggFtAUQImgsE8AGQCfACAwAMIgJANQgFAIgGABQkoAZgvAJQgpAHgUAMQgSAKgOAWQjZFUn2AmQhGAFhDAAQitAAiWgjg");
	this.shape_24.setTransform(107.4,25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.8,216.7,53.6);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").ss(0.2,0,0,4).p("ABdg1Ii5Br");
	this.shape.setTransform(41.6,95.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AhEglICJBM");
	this.shape_1.setTransform(58.4,67.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#231F20").ss(0.2,0,0,4).p("ADghDQhaAJhlAWQjIAqg0BA");
	this.shape_2.setTransform(34.5,64.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AB1ARIjpgi");
	this.shape_3.setTransform(105.4,48);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AgXgXIAvAv");
	this.shape_4.setTransform(81,60.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AA2hWIhrCt");
	this.shape_5.setTransform(134.1,68.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AgjggIBHBB");
	this.shape_6.setTransform(56.9,57.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AAehiIg7DF");
	this.shape_7.setTransform(37.7,76.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AgahAIA1CB");
	this.shape_8.setTransform(62.6,90);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#231F20").ss(0.2,0,0,4).p("ABPh9IgjAeQgnAlgbAjQhaBsA8Ap");
	this.shape_9.setTransform(21.3,82.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#231F20").ss(0.2,0,0,4).p("ACdAAQgzgShBgGQh/gKhEA+");
	this.shape_10.setTransform(70.7,83.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#231F20").ss(0.2,0,0,4).p("ABWA6QgkAAgngPQhMgegPhK");
	this.shape_11.setTransform(142.7,54.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AA2gCQgRAOgWAGQgrALgagz");
	this.shape_12.setTransform(158.2,40.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AlRDuQiPhtGdjAQDMhhDrhLIADAIQABALgGARQgWA2heBaQg9AogrAoQhVBTBeAI");
	this.shape_13.setTransform(85.8,77);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AIZixQj8AYkFA5QoGBwgmCm");
	this.shape_14.setTransform(54.9,72.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#231F20").ss(0.2,0,0,4).p("ANlnzQjSCRj3CYQnrEui5AiQiuA8ihBMQlCCYBEBP");
	this.shape_15.setTransform(111.7,50.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AE8jfQAigbAkgfQBshdBOhSQhcBFhcBaQgoAnggAjgApDHXQgliDE5jKQCchlCihIQCBgxCsiLQhxCBAABSQiVBDiJBTQkXCmA1BE");
	this.shape_16.setTransform(141.4,46.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E3EFDE").s().p("AvbGBQgMgiAUgnIAXgfQAohqDJhOQBkgoBcgSQJxhTH7jyQD+h5CAhpQAHAkgqAuQgbAchKA4QhRA9geAdQg4A0gLAuQhbFdpaDEQkvBikcAcQlagUgmhsg");
	this.shape_17.setTransform(99.3,51.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.3,199.7,103);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AhfiGIAoAiQAwArAgAmQBuB4hAAh");
	this.shape.setTransform(126.8,37.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AAUhDIADA+QgGA9grAH");
	this.shape_1.setTransform(137.4,24.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#231F20").ss(0.2,0,0,4).p("Ag3hhIgHAaQgFAfAFAcQARBXByAT");
	this.shape_2.setTransform(175,37.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#231F20").ss(0.2,0,0,4).p("Ag8iTIADAuQAGA3ALAuQAiCSBIgD");
	this.shape_3.setTransform(156.3,33.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AAOAnIgbhM");
	this.shape_4.setTransform(67.8,20.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AAcBCIg4iD");
	this.shape_5.setTransform(90.8,39.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AAoBMIhPiX");
	this.shape_6.setTransform(80.8,35.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AgyAlIBlhJ");
	this.shape_7.setTransform(103.9,36.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AgsAhIBZhB");
	this.shape_8.setTransform(81.3,24.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AgtAwIBbhf");
	this.shape_9.setTransform(119.1,31.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AgbAcIA3g3");
	this.shape_10.setTransform(96.9,21.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AhFAWIA6gYQA7gYATAI");
	this.shape_11.setTransform(61.4,17.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AgLAfIAWg9");
	this.shape_12.setTransform(86.2,11.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AgXAPIAvgd");
	this.shape_13.setTransform(71.7,15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AgQAaIAhgz");
	this.shape_14.setTransform(105.7,6.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AgdAQIA7gf");
	this.shape_15.setTransform(68.7,3.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#231F20").ss(0.2,0,0,4).p("Ag0AZIBqgx");
	this.shape_16.setTransform(32.3,2.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AglALIBLgV");
	this.shape_17.setTransform(8.5,1.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AmojWICKAYQCPAeAaAeIBcAcQBsAjBYAoQEbB8gmB5");
	this.shape_18.setTransform(80.3,29.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AthjMQAOADAOAEQDvA4A4BTQFRBSCABUQAxAhAbAmQALASAVAuAQ5gfQhmiWoHAAQkDAAjuAeQgtgTkLgQQiGgJh9gEQhSASivgXQgLgBgMgCQhggNhQgRQBfAKBoAX");
	this.shape_19.setTransform(106.5,25.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AiphpIAyARQA7AWAzAYQCgBMAPBM");
	this.shape_20.setTransform(189.7,25.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AjwhzIBpA7QB4A4BJgHIAUABQAYACAYAHQBLAcAmBX");
	this.shape_21.setTransform(172.5,29.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AolhcIAQARQAYATAoANQCAArDtgaIBIgOQBXgOBWABQESABCHCR");
	this.shape_22.setTransform(157.8,19.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#231F20").ss(0.2,0,0,4).p("ApajVQDAAWDSAjQGiBFBWA8IAnAMQAuAPAqAWQCGBLAiB5");
	this.shape_23.setTransform(88.5,28.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E3EFDE").s().p("ABnD4Qn2gmjZlUQgOgWgSgKQgUgMgpgHQgvgJkogZQgGgBgFgIQgFgJgEgEQAwgMCfgCQE8gGImAsQFtgUEwAgQEKAcBbBEQByBVipCOQgoAehHAbQiOA2icgPQiWAjitAAQhDAAhGgFg");
	this.shape_24.setTransform(107.3,25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-0.9,216.7,53.7);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").ss(0.2,0,0,4).p("Ahcg1IC5Bq");
	this.shape.setTransform(157.1,95.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#231F20").ss(0.2,0,0,4).p("ABFgmIiJBN");
	this.shape_1.setTransform(140.3,67.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AjfhDIA6AHQBGAKA/AOQDIAqA0BA");
	this.shape_2.setTransform(164.2,64.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#231F20").ss(0.2,0,0,4).p("Ah0ARIDpgi");
	this.shape_3.setTransform(93.4,47.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AAYgWIguAu");
	this.shape_4.setTransform(117.7,60.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#231F20").ss(0.2,0,0,4).p("Ag0hWIBqCt");
	this.shape_5.setTransform(64.6,68.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AAkgfIhHA/");
	this.shape_6.setTransform(141.8,57.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AgdhiIA7DF");
	this.shape_7.setTransform(161.1,76.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AAbhAIg1CB");
	this.shape_8.setTransform(136.1,90);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AhOh9IAjAeQAoAmAaAiQBaBsg8Ap");
	this.shape_9.setTransform(177.4,82.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AicgBIAhgJQAqgLApgDQB/gKBEA9");
	this.shape_10.setTransform(128.1,83.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AhVA6IAXgCQAcgEAYgJQBMgeAPhK");
	this.shape_11.setTransform(56,54.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#231F20").ss(0.2,0,0,4).p("Ag2gCIALAHQAOAJAOAEQArALAagz");
	this.shape_12.setTransform(40.6,40.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AFSDuQCPhtmdjAQh/g8ipg+IiPgyIgDAIQgBALAHARQAVA2BeBbIAkAZQApAdAbAaQBVBTheAH");
	this.shape_13.setTransform(112.9,77);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AoYixQD8AYEFA5QIGBwAmCm");
	this.shape_14.setTransform(143.8,72.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AtknzQDSCRD3CYQHrEuC5AiIBrAnQCAAyBkAvQFCCYhEBP");
	this.shape_15.setTransform(87,50.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#231F20").ss(0.2,0,0,4).p("AJEHXQAliDk4jKQidhliihIQiAgxisiKQBwCAAABSQCVBDCJBTQEXCmg1BEAk6jeQgjgbgkggQhshdhOhSQBcBFBdBaQAoAnAgAkg");
	this.shape_16.setTransform(57.3,46.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E3EFDE").s().p("AARGDQpbjEhaldQgMgtg3g1QgfgdhRg9QhKg4gbgdQgqgtAHgkQCABpD+B5QH7DyJxBUIA7AOQBHASA/AZQDIBOApBpQAyAygTA3QgmBslaAUQkdgckuhig");
	this.shape_17.setTransform(99.4,51.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.3,199.7,103);


(lib.damselfly_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// wing-r-upper
	this.instance = new lib.Group_1();
	this.instance.setTransform(5,-107,1,1,0,0,0,0.1,0.1);
	this.instance.alpha = 0.559;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:106.5,regY:25.8,rotation:-37.3,x:105.2,y:-151.1,alpha:0.56},0).wait(1).to({rotation:-11,x:114.4,y:-102.1},0).wait(1).to({rotation:15.3,x:100.8,y:-54.1},0).wait(1));

	// wing-r-lower
	this.instance_1 = new lib.Group();
	this.instance_1.setTransform(6.1,-97.9,1,1,0,0,0,1.2,0.7);
	this.instance_1.alpha = 0.559;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:98.6,regY:50.9,rotation:-19.4,x:114.6,y:-82.9,alpha:0.56},0).wait(1).to({rotation:-38.8,x:113.4,y:-119.9},0).wait(1).to({rotation:17.3,x:84.1,y:-21},0).wait(1));

	// wing-l-upper
	this.instance_2 = new lib.Group_3();
	this.instance_2.setTransform(-4,-107,1,1,0,0,0,215.6,0);
	this.instance_2.alpha = 0.559;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:108.2,regY:25.8,rotation:35.6,x:-106.3,y:-148.4,alpha:0.56},0).wait(1).to({rotation:10,x:-114.2,y:-100.2},0).wait(1).to({rotation:-15.5,x:-100.5,y:-53.4},0).wait(1));

	// wing-l-lower
	this.instance_3 = new lib.Group_2();
	this.instance_3.setTransform(-5,-96.9,1,1,0,0,0,198.5,0.8);
	this.instance_3.alpha = 0.559;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:100.2,regY:50.9,rotation:19.9,x:-114.5,y:-83.3,alpha:0.56},0).wait(1).to({rotation:39.8,x:-112.5,y:-121.4},0).wait(1).to({rotation:-17.8,x:-83.3,y:-19.2},0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#202020").s().p("AA9BIIACgBQgBAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAgBQABAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAIgCAAIAGgCIABgCIgGADIABgBQgBAAAAAAQgBAAgBAAQAAAAAAAAQAAAAAAAAIgBgEIABgBIgCABIgCgBQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAQgFgCgBgCIACgBIABgBIAAgBIgEACQACgDgGACIACgBQgBAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAIAAgCIACgCIgFABQAAAAgBgBQAAAAAAgBQAAAAABgBQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBgBAAAAQgBgBAAAAQgBAAAAAAQAAAAgBAAIACgCQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAgBgBAAQAAgBAAAAQgBAAAAAAQAAAAgBAAIAEgDQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAABIgDACIgBgBQAAgBAAAAQAAAAAAAAQAAAAAAgBQAAAAABAAIgDAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAIABgBQAAgBAAAAQAAAAgBAAQAAAAgBABQAAAAgBABQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIgCACQAAgBAAgBQAAgBAAAAQAAgBgBAAQAAAAgBAAIACgBIgCABQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIAAgDQgCAAgCgDIgDgDIABgBQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQAAAAgBABIACgCQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAIgBgBIgBgBIACAAIgBAAIgBAAIAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBgBAAAAIgFgCQACgBABgBQABgBAAgBQAAAAAAAAQAAAAgBAAIgBABQABgCAAAAQABgBAAAAQAAgBAAAAQAAAAgBABIgDACIABgDQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAgBAAIACgBQgEAAgEACIgPgJQgKgHgCgGQAAgBAAgBQAAgBAAAAQAAgBAAAAQgBAAAAAAIABgBQAAAAgBAAQAAAAAAAAQgBABAAAAQgBAAAAABIgGgDQABgBAAAAQABgBAAAAQAAAAAAAAQAAAAAAAAIgDADQgDAAgDgFQgDgFgDgBQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAgBAAQgDgLgGABIACgEQACgEACAAQACgEADACQAAABABAAQABAAAAAAQABAAAAAAQABAAAAAAIgBADQAHgGABAMIAAABQAAAAAAAAQAAAAAAAAQABgBAAAAQABAAAAgBIgBACQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIgBAEIABgCQABgBAAAAQABgBAAAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAIgBABIAFAAIAEABIgDACQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAAABABAAIABgBIABABQAAAAAAAAQAAAAAAAAQAAAAABAAQAAgBAAAAIgBACQABgBAAABQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAAABIABAAIgCADQAEgBAGAFIgCADIADgBIgBACIACgBIgCACIADgBIgBABQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAAAAAIgBABQAAAAAAABQAAAAAAAAQAAAAAAAAQAAgBABAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAABIAAAAIACACIgBADIACgBIACgCQAAAAAAABQAAAAABABQAAAAAAAAQAAAAABAAIgEADIgBACQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBABIACAAIAHgDIgEADIAHgEIgBABQgBAAAAAAQAAABAAAAQAAAAAAAAQAAAAABAAIABgBIAAABIAAACIgCABIABAAQAAABAAAAQABAAAAAAQAAgBAAAAQAAgBABAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAIgDACIAFgBIgBABQAAAAAAAAQAAAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABgBAAIACgBIgBACIABAAQABAAABAAQAAAAABABQAAAAAAABQAAAAAAABIACgCIABAAIgBABIAAABIAAABIAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBABIgCACIACgBIABAAIACgBQABAAAAAAQAAAAAAAAQgBAAAAABQgBAAAAABIgCACIAEgCIgBABQABgBAAAAQABgBAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAIADABIgCAAIABABIgCADIAEgDQAAABAAAAQgBAAAAAAQAAABABAAQAAAAAAAAQABgBAAAAQAAAAAAABQAAAAAAAAQAAAAAAABIgDACQgCABACgBQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIADgCQAAAAABAAQAAAAAAAAQAAAAgBABQAAAAgBABIACgBIABADQAAAAAAAAQAAAAAAABQAAAAgBABQAAAAgBABIACAAIgCABQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAABAAQABgBAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIgBACIADgBIgFADQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAIgCAAIABAAQgBAAABAAIACAAIACAAIgBAAIACAAIgBAAIAAAAQgHADAGgCIABAAIgBABIACgBIgBABQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAABIAAACIgBAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIACAAIgFAEQACACADgEIABABQABAAAAAAQAAAAAAABQAAAAAAAAQAAABgBAAIACgBIACACQAAAAAAAAQAAAAAAABQAAAAAAABQgBAAAAABIgDACQABgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAABIACgDQABAAAAAAQABAAAAABQAAAAAAABQAAAAgBABIACgBQgBAAAAABQgBAAAAAAQAAABAAAAQAAAAABAAIACgBQABAAgBABIgBABQABAAAAgBQABAAAAAAQABAAAAAAQAAABAAAAIgCACIACgBQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABQAHgCABADIgBABIABAAIgEADQAAAAAAAAQAAAAABAAQAAAAABgBQABAAABAAIABgBIACAAIgEADIABgBIgJAFIABAAQgBAAgBABQAAAAgBAAQAAAAgBABQAAAAAAABIAGgEIADgBIABABIABAAIAEgCIgCACIADgCQABgBABAAQAAgBAAAAQAAAAAAABQAAAAAAAAQgFADgBACIAHgEIgEADQAFgCgFADIADgBIgDACIACAAIgBABIADgBIAAgBIACgBIgBABIACAAIgCABIACgBQABAAAAAAQAAAAgBABQAAAAAAAAQgBABgBABIgCAAIAAABIAFgDIAAABIAAAAIgCABIgCABIAAACIAEgDQAAAAAAABQAAAAAAAAQgBAAAAABQgBAAAAAAIADgBIgEAEIgDABIAAABIgEACIABAAQAEgDAGgCIgDADQgDACAEgBQABgBAAAAQABgBAAAAQABAAAAAAQAAAAgBAAQABgBABAAQABgBAAAAQAAAAAAAAQAAABAAAAQgDADgDABQABgBgBAAIgDADQAAAAAAAAQABAAAAAAQAAAAABAAQAAgBABAAIABgBIABABIABgBIAEgDIABAAIgCABQAAAAAAABQAAAAABAAQAAAAABgBQAAAAABAAIgCACQAAgBAAAAQgBAAAAAAQgBAAAAABQgBAAgBABIACAAIgBAAIgCACIgBABIgCABIgFAEIACAAIAEgDQAAAAAAABQAAAAABAAQAAAAABAAQAAAAABAAIgCACIAAACQABgBABAAQAAAAABgBQAAAAABAAQAAAAAAABQABgDAEgBIgCACIgBAAIAAABIgCABIgEADIgBABQAAAAABAAQABAAAAAAQAAAAABAAQAAAAABAAQgBAAAAABQAAAAAAAAQAAABAAAAQAAAAABAAIACABIgFAEIACgBIAAABIACAAIgCABIgCACQAAAAgBAAQAAAAAAAAQAAAAAAAAQABABAAAAIABAAIACgCQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIgEACIABAAIgEACIAAABIgBAAIgBgBgABHAwIgDAAIACgCIADABQAAAAAAAAQAAAAgBABQAAAAAAAAQgBABgBAAIABgBgAAVAcIABAAIgBABgAAWAcgAAlADIAAAAIAAAAIAAAAIAAAAgAAcgGIAAABIgBAAg");
	this.shape.setTransform(-17.1,-153);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#202020").s().p("AhGBSQAEgBgFgBIAAAAIgEgBIAAABIgCgDIADABQgBAAgBAAQgBgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAgBgBAAIgBgBIAGACIABgBIgFgCIACAAQgBAAgBgBQgBAAAAAAQAAgBAAAAQAAAAAAAAIACgEIACAAIgCgCQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAQABAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQABAAAAAAQgCgFACgCIADABIABAAIgEgDQABAAAAAAQAAgBAAAAQAAgBgBgBQAAAAgBgBIABAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAAAABAAIACgBIADAAIgEgEQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABAAQgCgCABgEIABgEIACABQgCgDACgDQAAgBAAAAQABgBAAgBQAAAAAAgBQAAAAAAAAIAEABQABAAAAAAQAAAAAAAAQgBgBgBAAQgBgBgBgBIAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBIADABQAAAAAAgBQAAAAAAAAQAAgBgBAAQgBgBgBAAQABAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBABAAIgCgBQABAAAAgBQABAAABgBQAAAAAAAAQAAAAAAAAIACAAIgCgBQAAAAAAAAQAAgBABAAQAAgBAAAAQABAAABgBQABAAAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQAAgDACgDIAFgEIAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABgBQAAAAAAAAQAAAAAAgBQAAAAgBgBIACABQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAIACgBIABABIAAgBQAAAAAAgBQAAAAAAAAQAAAAABABQAAAAAAAAIgBgBQACgBACgDIADgFQACAAACADQABABAAgCIgBgBQABABABABQABABAAAAQAAAAAAAAQABAAgBgBIgBgDIADABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIABABQACgDgCgFIAQgPIAKgFQAGgDAEgBIADADQABAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBIAAACQABAAAAgBQAAAAAAAAQAAgBAAgBQAAAAgBgBIAHgDIABACIAAgCIABABIgBgDQADgDAGgBQAIAAADgCQABAAADgCQAMADAEgFQADAIgBADQAAAEgDAAQgBABgBAAQAAAAgBAAQAAABgBAAQAAABAAABIgCgDQAAAHgLgEIAAgCQAAABAAABQAAAAAAABQgBAAAAAAQAAABAAAAIgBgCQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABIgCgDIAAACQABABAAABQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAIAAgBQgBAFgFACIgBgDQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAgBgBIAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgBgCQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAAAgBIgBAAIAAABIgCgDQgBAEgIADIgCgCIAAACIgBgBQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAACIgBgDIgBADIAAgBQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAIAAABIgBgCQAAAAgBAAQAAAAAAAAQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAIgBgCQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIgBACIgBgBIgCACQAAgBgBgBQAAAAAAgBQgBAAAAAAQAAAAgBAAIABADQAAAAAAABQAAAAAAAAQAAAAABABQAAAAAAAAQAAAAgBABQgBAAAAAAQAAAAgBAAQAAAAAAAAIgCgEIgBgBIgBgCQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAIACAHIgDgEIACAHIgBgBIABACQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAgBAAIAAAAIAAABIABACIABAAIgBACIgBgCIAAAFIAAgCQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAIABABIgCgBIAAACIgBgBIAAACQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAABABABQAAAAAAABQAAAAAAAAQAAAAAAAAIgBgCIgBABIgBgBQAAABAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIgCgCIABACIAAABIABACQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBgBAAgBIgCgCIACAEIgBgBQABABAAAAQAAABABAAQAAABgBAAQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAgBgBQAAAAgBAAQABAAAAABQAAAAAAABQAAAAAAAAQAAAAgBAAIAAgBIgBAAIAAABIgDgCIADAEQgBAAAAgBQAAAAAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAIACACQABAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgBAAIACABQgBgBAAAAQAAAAgBABQAAAAAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAIABABIABAAIABABIgEgCQAAgBAAAAQAAABAAAAQAAAAAAAAQABABAAABIABACQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAAAAAAAIABACIgFgDIABACIgDgCIABABQgBAAAAAAQAAAAAAAAQAAAAAAABQAAAAABAAIACABIABADIgBgBIgBAAIACACIgBAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgCgCIgBAAIABABIgBAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAIgCAAIAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAABAAIgFgCIABACIADACQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIABABIgBACQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBgBIgDgBIABABIAEABQABAEgDgBIABABQgBgBgBAAQAAgBgBAAQAAAAAAABQAAAAAAABIACACIgCgBQABAAAAABQAAAAABABQAAAAAAAAQAAAAgBAAIgCAAIACABIgFAAQAGAEgDAEIgBgBQAAABABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgEgBQAAAAgBAAQAAAAAAAAQAAAAABAAQAAAAAAAAIACACIABABIAAAAIAAAAIgDgBIABABQgFgDgEgBIAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIAGADQAHADgBABQAAAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAABQABAAAAABQABAAABAAQAAAAABABQAAAAABABIgDgBIADACQABAAABAAQAAAAAAABQABAAgBAAQAAAAAAAAQgGgDgBABIAGADIgDgBQAAAAABAAQAAABAAAAQAAAAgBAAQgBgBgBAAIACABIgCAAIAAABIgBgBQAAABAAAAQAAAAAAAAQABABAAAAQABAAAAAAIABAAIABAAQgCAAABAAIABABIABACIgCgBIACABQAAAAAAAAQAAAAgBAAQAAAAgBAAQgBAAgBAAIgBgCIgBAAIAFAEIgBAAIABAAIgCgBIgCgBIgCAAIACACIAAAAIABAAIgBAAIADABIgGAAIgDgCIAAABIgFgCIABABQAFABAFADIgEAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAABABAAQABABABAAQABAAAAAAQAAAAAAAAQABAAgBgBQABABABAAQABABAAAAQAAAAAAABQAAAAgBAAIgGgDQAAABAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIgFgBQAAAAAAABQABAAAAAAQAAABABAAQAAAAABAAIACAAIgBABIACABQAAAAAAAAQAAAAABAAQAAAAABAAQABAAABABIABABIgCgBIACACIgDAAIgBgBIgCgCQABAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAIgBgBIgDAAIgBAAIACABIgBAAQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIgCAAQAAAAgGgCIABABIAFACQgBAAAAAAQAAAAAAABQABAAAAABQABAAABAAIgEgBQABABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQABABABAAQAAAAABAAQAAAAABABQAAAAAAABQACgCADADIgCgBQABABgCAAQgBgBABABIgHgDQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAgBgBIACAEQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAAAABIABABIgGgBQABABAAAAQABAAAAAAQABAAgBAAQAAAAAAAAIgBAAIAAABIACABIgDgBIAAABIgDgBQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAIABABIADABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABgBAAgAgcAKIgBgBQABAAgBAAIgBgBIABABIAAAAIABABgAgfANIAAAAIAAABIAAgBg");
	this.shape_1.setTransform(14.7,-153.8);

	this.instance_4 = new lib.Path_2();
	this.instance_4.setTransform(-9,-139.4,1,1,0,0,0,3.6,3.6);
	this.instance_4.alpha = 0.82;

	this.instance_5 = new lib.Path_3();
	this.instance_5.setTransform(20.5,-139.4,1,1,0,0,0,3.6,3.6);
	this.instance_5.alpha = 0.82;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#0D004C","#0C0048","#0A003C","#070028","#02000C","#000000","#070718","#111138","#1A1A53","#202068","#252577","#27277F","#282882"],[0,0.11,0.22,0.329,0.439,0.478,0.514,0.569,0.631,0.698,0.773,0.863,1],0,0,0,0,0,10.7).s().p("AhLBMQgggeAAgqIAAgHQAAgqAggdQAggeArAAQAsAAAgAeQAgAdAAAqIAAAHQAAAqggAeQggAdgsAAQgrAAgggdg");
	this.shape_2.setTransform(-14.9,-136.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#0D004C","#0C0048","#0A003C","#070028","#02000C","#000000","#070718","#111138","#1A1A53","#202068","#252577","#27277F","#282882"],[0,0.11,0.22,0.329,0.439,0.478,0.514,0.569,0.631,0.698,0.773,0.863,1],0,0,0,0,0,10.7).s().p("AhLBLQgggdAAgqIAAgIQAAgpAggeQAggdArAAQAtAAAgAdQAfAeAAApIAAAIQAAAqgfAdQggAegtAAQgrAAgggeg");
	this.shape_3.setTransform(15.1,-135.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#282882","#27277F","#252577","#202068","#1A1A53","#111138","#070718","#000000","#030014","#08002C","#0B003E","#0C0049","#0D004C"],[0,0.137,0.227,0.302,0.369,0.431,0.486,0.522,0.58,0.675,0.773,0.878,1],0,0,0,0,0,2.3).s().p("AgMAUQgGgIAAgMQAAgKAGgJQAFgJAHAAQAIAAAFAJQAGAJAAAKQAAAMgGAIQgFAJgIAAQgHAAgFgJg");
	this.shape_4.setTransform(2.1,-95.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#282882","#27277F","#252577","#202068","#1A1A53","#111138","#070718","#000000","#030014","#08002C","#0B003E","#0C0049","#0D004C"],[0,0.137,0.227,0.302,0.369,0.431,0.486,0.522,0.58,0.675,0.773,0.878,1],0,0,0,0,0,2.3).s().p("AgFApQgIgBgEgNQgEgNADgQQADgRAHgLQAIgLAGABQAIABAEANQADANgCAQQgCARgJALQgGAKgFAAIgCAAg");
	this.shape_5.setTransform(10.6,-97.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#282882","#27277F","#252577","#202068","#1A1A53","#111138","#070718","#000000","#030014","#08002C","#0B003E","#0C0049","#0D004C"],[0,0.137,0.227,0.302,0.369,0.431,0.486,0.522,0.58,0.675,0.773,0.878,1],0,0,0,0,0,2.3).s().p("AgHAfQgIgLgDgRQgDgPAEgNQADgNAIgCQAGgBAIALQAIALADARQADAPgEANQgDANgIACIgCAAQgFAAgHgKg");
	this.shape_6.setTransform(-11.6,-98);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#282882","#27277F","#252577","#202068","#1A1A53","#111138","#070718","#000000","#030014","#08002C","#0B003E","#0C0049","#0D004C"],[0,0.137,0.227,0.302,0.369,0.431,0.486,0.522,0.58,0.675,0.773,0.878,1],0,0,0,0,0,2.3).s().p("AgMAUQgGgIAAgMQAAgKAGgJQAFgJAHAAQAIAAAFAJQAGAJAAAKQAAAMgGAIQgFAJgIAAQgHAAgFgJg");
	this.shape_7.setTransform(-1.7,-95.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#282882","#27277F","#252577","#202068","#1A1A53","#111138","#070718","#000000","#030014","#08002C","#0B003E","#0C0049","#0D004C"],[0,0.137,0.227,0.302,0.369,0.431,0.486,0.522,0.58,0.675,0.773,0.878,1],0,0,0,0,0,1.8).s().p("AgJAPQgEgGAAgJQAAgIAEgGQAEgHAFAAQAGAAAEAHQAEAGAAAIQAAAJgEAGQgEAHgGgBQgFABgEgHg");
	this.shape_8.setTransform(1.3,-100.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#282882","#27277F","#252577","#202068","#1A1A53","#111138","#070718","#000000","#030014","#08002C","#0B003E","#0C0049","#0D004C"],[0,0.137,0.227,0.302,0.369,0.431,0.486,0.522,0.58,0.675,0.773,0.878,1],0,0,0,0,0,1.8).s().p("AgJAPQgEgGAAgJQAAgIAEgGQAEgHAFAAQAGAAAEAHQAEAGAAAIQAAAJgEAGQgEAHgGgBQgFABgEgHg");
	this.shape_9.setTransform(-1.6,-100.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#282882","#27277F","#252577","#202068","#1A1A53","#111138","#070718","#000000","#030014","#08002C","#0B003E","#0C0049","#0D004C"],[0,0.137,0.227,0.302,0.369,0.431,0.486,0.522,0.58,0.675,0.773,0.878,1],0,0,0,0,0,3.6).s().p("AgUAcQgJgMAAgQQAAgPAJgMQAJgMALAAQAMAAAJAMQAJAMAAAPQAAAQgJAMQgJAMgMAAQgLAAgJgMg");
	this.shape_10.setTransform(5.5,-96.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#282882","#27277F","#252577","#202068","#1A1A53","#111138","#070718","#000000","#030014","#08002C","#0B003E","#0C0049","#0D004C"],[0,0.137,0.227,0.302,0.369,0.431,0.486,0.522,0.58,0.675,0.773,0.878,1],0,0,0,0,0,3.8).s().p("AgXAcQgKgMAAgQQAAgPAKgLQAKgMANgBQAOABAKAMQAKALAAAPQAAAQgKAMQgKALgOAAQgNAAgKgLg");
	this.shape_11.setTransform(-5.9,-96.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#282882","#27277F","#252577","#202068","#1A1A53","#111138","#070718","#000000","#030014","#08002C","#0B003E","#0C0049","#0D004C"],[0,0.137,0.227,0.302,0.369,0.431,0.486,0.522,0.58,0.675,0.773,0.878,1],0,0,0,0,0,4.7).s().p("AgaAlQgLgQAAgVQAAgVALgPQALgQAPAAQAPAAAMAQQALAPAAAVQAAAVgLAQQgMAQgPAAQgPAAgLgQg");
	this.shape_12.setTransform(5.2,-105.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["#282882","#27277F","#252577","#202068","#1A1A53","#111138","#070718","#000000","#030014","#08002C","#0B003E","#0C0049","#0D004C"],[0,0.137,0.227,0.302,0.369,0.431,0.486,0.522,0.58,0.675,0.773,0.878,1],0,0,0,0,0,5).s().p("AgcAoQgLgRgBgXQABgWALgRQAMgRAQAAQAQAAANARQAMARgBAWQABAYgMAQQgNARgQAAQgQAAgMgRg");
	this.shape_13.setTransform(-5.7,-104.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3F3B3C").s().p("AC2CeQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBgBAAAAIgCABQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgBgBIACABQABgBgBAAIgBgBIgDAAIgDAAIABgBQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIAAAAIgBgBIgCAAIAAAAIgGgBIgDgCIgCAAIgEgEQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBgBIgCAAIAAgBIgBAAIgBgBIgCgBQgEgDAEAEIgBAAQAAAAAAAAQAAAAAAAAQgBAAgBAAQAAgBgBAAIACgBIgCgBIAAAAIAAABIgBgBIAAAAIgCgCIAAABIAAgBQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgBgCIgBAAQgBgBAAAAQgBAAAAAAQAAAAAAAAQAAAAAAABIgDgCIABABIgBAAIABACQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAIgCgCIAAAAIADABQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIACABIgCgDIgBAAIAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAgBAAIAAgBIAAgBIgCgBIgBAAIAAgBQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIAAgBIgCgBIgCgFIgBgBIAAgCQAAgBgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAIgBgCIAAgBQAAgBgBgBQAAgBgBAAQAAgBgBAAQAAAAAAAAIABAAIgBgCIgBgCQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAQgBgBAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAIgBgEIgBgCIAAgCIgBgCIgBgCIABAAIgBgCIgBABQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAQAAAAABAAIgCgCIgBgDIgDgEQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIgBgGQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIgBgBIACgBIgBgDIgBAAQABAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBgBIABgDIgBgCIABABIAAgCIgBgBQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAABAAAAIAAgCIABAAIgBgEIgBAAIAAgDIAAgCQAAAAABABQAAAAAAAAQAAAAAAgBQAAAAAAAAIgCgHQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAAAgBAAIAAgDIABABIAAgDQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAAAIgCgGIAAAAIAAgGIgBAAIgBABIAAgBQABAAAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAIAAgFQAAABAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIgBABIgBgCQABAAAAABQAAAAAAgBQAAAAAAAAQAAAAAAgBIABABIABgDIgBgEIABgBIgBgBIgBABIAAgCIgBAAIAAgCIACACQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBIgCABIAAgCIAAgFIAAAAIAAgEIAAABIAAgDQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAABgBIAAACIAAgEIABABIgBgEIABgBIgBAAIABgCIgBgEIAAgJIgBgCQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAIgBgCQABgDgCgDIgBgGIABABIgBgDIgBgIQABAEAAgFIAAgBIAAAAIgBgCIACAAQgBgFgCgBQAAgKgGgNQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBIABAAIgDgGIgBAAIAAgCQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAgBgBIACABIgCgCIABAAIgBgDIgCgCIAAABIgHgHIABAAIgCgBIABgBIgBgBIgBABQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIAAgCIgLgCIgBgBIgBAAQgHgDAGADIACABIgFgBIgBAAIAAAAIgQABIgGgBIgJABIgDAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIgCABIAAgBIgCAAIAAABIgGABIAAAAIgCAAIAAAAQgEABgGABIgLABIgFABQgEABgCgBIgBABIgmAHIgcAEIgEABIABAAQgOAEgGgBIAAABQgHgBgFACQABAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAAAQgEABgGAAIgJAAIABgBIgDABIAAAAIgDABIgDAAIgCAAIABAAIgFABIAAgBIgCAAIgCAAIgBABIAAAAIgCAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgBAAIACgBIgCAAIAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBAAAAAAIgDACIgDAAIAAABQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAIgBgBIADgBIABgCQAUgMBYgPIAEgBIADABIAEgCIAAABIAFgCIABAAQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQAKgBAKgDQABABAHgBIAAAAIACgBIADABIAAgBIABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABIAJgDIAAAAIACAAIADAAQAGgCAJABIACgBIABAAIAMgCIANABQAJAAAEACIABgBIACABQAAAAABAAQAAAAAAAAQAAAAABAAQAAgBAAAAIABABQABgBAGADQACACADAAIACACIACABIADADIADADIAAgBIAAABQAAABABABQAAAAAAAAQABABAAAAQAAAAABgBIgBgBIAFAGIAAABIADACIAAACIAAAAIAAAAIACACQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAAAIAAgBIACADIgBAAIAFAMIAAAAQABADACACIADARIABABIgBAAQACAFgBAKIABAAQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAIACAIIgBADQACACgBAEIAAgBIAAAEIAAAEIAAACIABADQAAAAAAAAQAAAAAAAAQAAABAAABQAAABAAABIgBgBIAAACIAAAGIAAAJIAAgBIABAEIgBAAIAAACIAAAAQABACgCAGIAAAAIgBADQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABIgBgBIAAABIAAAAIAAACQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIAAAFIAAgBIAAADIAAgBQABAFgBABIABABIAAAEIgBAAIAAACIAAgBIAAAGIAAAAIABAHIgBAAIABAEIAAAAIABACIgBAAIAAAIQAAAFACADIAAgBIAAAFIAAABIAAAAIABABIgBAAIABABIgBAAIABADIAAACIAAAAIABAGIgBAAIABACIAAABIABABIgBABIACAEQAAAAAAgBQAAAAAAAAQgBAAAAABQAAAAAAAAIACAEQAAAAAAABIABABIAAgCQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABIABAAQAAABAAAAQABABAAAAQAAAAgBAAQAAAAAAAAIABACIAAgBIACAFIgBAAIAAABIACADIABADIABgBIAAABIABABIACAEIACACIAAADIAFAFIgBAAIAFAFIABgBIAAACIAAABIABgBIACACQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABABIAAAAQAAABAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIABABIAAgBIABACIADABQgBgBAAAAQgBAAAAAAQAAABAAAAQAAAAABABIADABQAAAAABABQAAAAAAAAQAAAAgBAAQAAAAgBAAIAHADQAAABAAAAQAAAAABABQAAAAABABQABAAABAAIAAABIADABIAAAAIAAABIADAAIgCABIACAAIACABIgBAAQgBAAABABIACAAIgBAAQAGAAABABIgCABIABABIABgBQAAAAABAAQAAAAAAABQAAAAAAAAQAAAAgBABIACAAQAAAAABAAQAAAAAAAAQAAABAAAAQgBAAAAAAIADAAIAGADQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAIACACgABhAnIAAAAIAAAAg");
	this.shape_14.setTransform(27.1,-79);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3F3B3C").s().p("AiRDhIgCAAIgDABQABAAAAgBQABAAAAAAQAAAAAAAAQAAAAgBAAIgCAAIABAAQgFACgDgBIADgBIgCgBIAAABIgBgBIAAgBIgDABIAAgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBABIgGgCQABgBABAAQAAAAABAAQABAAAAAAQABAAAAABQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAIgBgBIABAAQAAABABAAQAAAAAAAAQAAABABAAQAAAAAAAAIACgBQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAIABABIgCAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAGgBQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAQgBAAABABIACAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABABIAAAAIAAAAQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAgBgBQAKgBABABIAAgBIABAAIAFAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAAAIACgCIABABIABgBIAAAAIADgBIgCgBIACAAIADgCIgBACIACAAQAAAAAAAAQABgBAAAAQgBAAAAAAQAAAAgBAAIACAAIAAAAIADAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAgBAAQABAAAAAAQABAAAAABQAAAAAAAAQAAAAgBAAQABABAAAAQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIACgCIgBAAIAAgBIgCABQABgBABAAQAAAAABAAQAAAAAAAAQAAAAAAABIADgCQgBABABgBIgDADQADgCgBADIADgBIAAgBIABAAIACgBQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAIABgBIABAAIAAAAIADgCIABAAIAAgBIABAAIABgCIAFgCIABgBQAAAAABAAQAAABAAAAQABAAAAAAQAAAAAAgBIADgDIACgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIADgEIABABIABgCIACgBQABAAAAAAQAAgBABAAQAAAAAAAAQAAABAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAIAEgCIACgDIABAAIAEgDIAAABIACgCIgCAAIAEgDQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAIACgDIgBABQADgCACgFQgBAAAAAAQAAABgBAAQAAAAAAgBQAAAAAAAAIAEgEQAAABAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIABAAIABgCIABAAIADgCIAAgBIAEgDIABgCIAAABIACgBQAAAAAAAAQgBAAAAAAQAAAAABAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIACgDIAAACIADgDIAAgBIgBAAIACgDQAAABAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAABAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIABgBIABABIAEgIQABAAAAgBQABAAAAgBQAAAAAAgBQABAAgBAAIACgDIAAACIACgDQAAABAAAAQgBABAAAAQAAAAAAAAQAAAAAAAAIAEgFIgBgBIAEgEIAAgCIgBACIABgCIACgBIADgDQABgCgBABQABAAAAgBQAAAAABAAQAAAAAAAAQAAAAAAAAIAAgBIAAAAIABgDIABgBIAAABIAEgDIgBABIACgEQAAABAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBIAAgBIgBAAIABgBIAAAAIABgCIAAADIgBACQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBIACgCIgCABIABgDIAAABIAEgGIAAABIACgEIAAABIABgDIgBABQAAgBAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAIAAACIACgEIAAABIACgDIABgBIAAgBQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBQAAgBAAAAIAFgFIABgDQABgBAAAAQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIABgDIACgGIADgGIABABIABgDIAEgIQAAABAAABQAAAAAAAAQABAAAAgBQABAAAAgCIAAgBIABAAIAAgBIACAAIACgHIANgYQACgCAAgDIABAAIADgFIgBAAIACgDQAAAAAAAAQAAAAAAAAQAAgBAAgBQABgBAAgBIAAADIABgEIAAABQACgCABgEIgBABQADgHABgFIAAABIAAgDQAAABAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIABgCQAAgBgBABQAAAAAAAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQABABAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQACgHABgIIABgBIAAgBQABgBAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAIAAgDIABAAIAAgCIgBAAIACgSIACgHIgBgKQABgBAAgFIAAgCIAAAAIAAgCIgBAAIAAgIIAAgDIABAAIgBgMIgBgMIAAgGQAAgEABgCIgBgCIAAAAIgCg+QALgMAFADIAGADIAEABIAAAAQAPAIAFAHIAAgBIAEAGIAEAEQgBgBAAABQAGAGAGAMIgBgBIACACQAAABAAAAQAAAAAAAAQAAAAAAAAQgBAAAAgBQAAABABAAQAAABABAAQAAABAAAAQABAAAAAAIACADIABABIAAAAIADAEQABACgBgCQAAABAAAAQAAABAAAAQABABAAAAQABAAAAABIACABIAAAAIABACIAAABIgBgBIABACIAAAAIABACIgBgBIACACIACAAIACADIAAgBQABABAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAIAAABIgCgCQAAABAAAAQAAAAAAAAQgBAAAAgBQgBAAgBAAQgHgDgRgRQgUgVgIgGIgKgFIAAAOQAAAAAAAAQAAAAAAABQAAAAAAABQgBABAAABIABAFIAAgBIABAGIgBABIABAFQAAAOACAJIAAAJIgBABIABABIgBADIABABQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAgBAAIACALIAAgBQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAIABADQABAKgCAJIAAADIABgEIgBAEIAAAOIgFAcIABACIgBABIABACIgBACIgBADQAAAAAAABQAAAAAAABQgBAAABABQAAAAAAAAQgBABAAABQAAAAgBABQAAAAAAABQAAAAAAABIgBABIAAADIgCAEIAAgBIgBAFIABABIgBgBQAAABgBABQAAAAAAABQAAAAAAABQABAAAAAAIAAgBIgCAHQAAgBgBAAIAAABIgBAFIgBAAIAAABIAAAAIgBACQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAAAAAIAAAAIgBACIAAAAIgGANIAAgBIgCAGIgJAQIAAABIgBAAIgJANIAAABIgCACIgEAJIgCACQAAADgDACIgCADIAAAAIgDAEIgBACIgBADIgDADIAAgBIgBACIgEAFIAAAAIgFAJIgBgBIgBAEIAAgBIgCACIAAAAQgBADgGAEIgCADIgBADIAAgCIgBACIAAgBIgBACIAAABQgBABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAIgDAFIAAAAIgBABQgDAFAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAIgDAEIAAgCIgBADIAAgCIgFAGIABAAIgHAHIgBADQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIgBACIAAAAQgCACgFAEIgGAHIABAAQgDADgCAAIAAABIgCAAIAAACIAAgBIgBABIAAAAIgCACIgCACIAAgBIgGAFIAAgBIgCADIABAAIgCAAIgBABIAAAAIgEAEQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIgEADIgBABIgCABIgBACIABgBQAAABgBAAQgBAAAAABQAAAAAAgBQAAAAAAAAIgDACIABAAIgEADIAAgBIgBABIAAAAQgEAEgDAAIAAAAIgCACIgEACIgCACIgEABIgHAEIABgBQgEADgEABIgCAAIAAABIgDABIgBAAIgBABQgBAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAAAIgBAAIAAABIgDgBIgBABIAAAAQABAAAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQABAAABgBQAAAAAAAAQAAAAgBAAQAAAAgBAAIgIADQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBAAgBAAIgDABIAAAAIgFAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAgBgBAAIgDACgAhNDAIAAAAgACpiZIABAAIABABg");
	this.shape_15.setTransform(-31.1,-73.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3F3B3C").s().p("AkHDvIAEAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAIgDAAQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABABIADAAIABgBQAAgBAAAAQAAAAAAAAQABAAAAAAQABgBABAAIAAABIgCAAQAAABAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIABAAQADAAAEgDQAAAAAAABQABAAAAAAQgBAAAAABQgBAAAAAAIABAAIAAAAIACABQAAAAABgBQAAAAAAAAQABAAAAAAQgBAAAAgBIANgCQABAAgBAAIABgBIAHgBQgBAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAIADgCIABABIABgBIABAAIACgBIABgBIgCAAIACgBQgBAAAAAAQAAAAABAAQAAgBABAAQABAAABgBIgBACIADAAQAAAAAAAAQABgBgBAAQAAAAAAAAQAAAAgBAAIADAAIgBAAIADAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAQABAAABAAQAAAAABAAQAAAAAAABQAAAAgBAAIACAAIABgBQABAAABgBQABAAAAAAQAAAAAAgBQAAAAAAAAIADgCIgBAAIAAgBIgCAAQAAAAABAAQABAAAAAAQABAAAAAAQAAAAAAABIAEgCIAAAAIgEADQAEgCgCADIAEAAIAAgCIABABQABAAABAAQAAAAABgBQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIABgCIABABIAAAAIAEgCIABAAIAAgBIABAAIACgCIAHgCIAAgBIADAAQAEgCAAgBIADAAQAAAAAAgBQABAAAAAAQAAAAAAAAQABABAAAAIADgCIACgBIAAAAIACgCIADAAQAAgBAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAIAFgDIADgCIACAAQAAgCAFgBIAAABIACgCIgCAAIAFgDQABAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAIADgDQAEgCADgEQgBAAAAAAQgBABAAAAQAAAAAAgBQgBAAABAAIAGgEQAAABAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIABAAIACgDIABACIADgCIAAgBQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAABgBIADgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIgBABIACgBIABgBQAAgBAAAAQABAAAAAAQAAAAAAAAQgBAAAAAAIADgCIAAABIAEgDQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAIADgCIADAAIABgBQADgFADgCIADgCQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAgBIAAABIADgDIgCACIAFgDIgCACIAFgFIAAgBIAGgEIAAgCIACAAIAFgEQAAAAAAAAQABgBAAAAQAAAAgBAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAIABgCIgBAAIADgDQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIAAABQABAAAEgEIAAABQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIACgCIAAgBIACgCIgBAFIgCABQAEgCABgDIgBAAIABgCIAGgGIAAABIADgEIgBACIADgDIgBAAIAFgFIgBABIADgEQAAABAAAAQAAAAABAAQAAAAAAgBQAAAAABAAIgBgBQABgBAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIABgFIAFgFIADgDQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAgBQgBABAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIACgDIAFgGIAEgGIAAABIACgEIAHgIQgBABAAABQAAAAAAAAQABAAAAgBQABgBABgBIAAgBIABAAIABgCIABABIAFgIQAIgJAMgSIAEgEIAAAAIAHgIIgBAAIACgBIADgEIgCADIADgEIAAABQADgDACgEIgBABIAIgNIAAABIABgDQAAABABAAIABgCQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAgBABgBIAJgPIACgBIABgCIAAABQABgCABgBQABgBAAgBQAAAAgBAAQAAAAgBABIABgCIABgBIAAgBIALgTQAEgHABAAIAEgLIACgEIACgCIABgDIAAAAIACgCIgBgBIAEgIIACgDIAAAAQAIgRADgJIADgHQACgEACgCIAAgCIAAAAQAMghAFgQIAJgcQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIAPgFIABACIACADIAAgCIABACIgBAAIAEADIgBgBIAKAKIAJAKIAAAAIAFAGIAEAFQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAHAGAIAPIgCgBIADACQAAABAAAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQADADACABIACADIACACIgBAAIAEAEQABACgCgCIACADQAAAAAAAAQAAABABAAQAAAAAAAAQAAABAAAAIADACIgBAAIACABQgBABAAAAQAAAAAAAAQAAAAAAAAQAAABABAAIABABIgDgCIACACIgBgBIAAACIAAAAIAAAAIAAAAIABABQAAAAAAABQABAAAAAAQABABAAAAQABAAABAAIABADIABgBQABABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgBgBQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIgBABIgCgCQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBAAgBgBQgHgFgTgTIgjgjIgFgFIAAAAIgGATIgCAFQAAgBAAAAQgBAAAAABQAAAAAAABQgBABAAABIgCAGIAAAAIgBAGIgCACIgBAGIgKAaIgFAJIAAAAIAAADIgDACIABABQgBABAAAAQAAABAAAAQAAABgBgBQAAAAAAAAIgEANIAAgBIgCADIgBAEIgKATIgCADIADgDIgDAEIAAAAIgHAPIgSAcIABABQgBAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAQgBABAAAAQAAABAAAAQAAAAAAABQAAAAABAAIgCABQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABIgCADIgBACIgCADIgCABIAAADIgEAEIAAgBIgCAFQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgBABIAAgBQgBABAAAAQAAABgBAAQAAABAAAAQAAAAABABIgEAFIgBAAIgCAEIgCABIAAAAIAAAAIgBADQgBAAAAABQgBAAAAAAQgBABAAAAQAAABAAAAIABgBIgCAEIgBgBIgJANIgEAHIgNAQIgBACIAAAAIgOAOIABAAQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAIgGAKIgEACQAAADgEACIgDADIAAAAIgEAFQAAgBAAAAQAAAAgBABQAAAAgBAAQAAABAAAAIgCAEIgEADIgBABIgGAGIgGAIIAAgBIgDAEIAAAAIgCABQgBACgDACIgFADIgEADQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAABIAAgCIgBACIgCABIgBABIgEAEIgFAEIAAAAIgCACIAAgBQgEAFgCAAQAAAAgBAAQAAABAAAAQAAAAAAAAQAAAAABAAIgGAEIABgBIgDACIABgBIgGAFIgJAIQABgBAAAAQAAgBAAAAQABAAgBAAQAAAAAAAAIgEAEQAAAAABAAQAAgBAAAAQAAAAAAAAQgBAAAAAAIgCADIAAgBIgKAGQgGADgCADIAAABQgEACgCAAIAAABIgCAAIAAACIAAgBIgCABIAAAAIgCACIgDABIAAAAIgIAEIABgBIgEACIABAAIgCABIgBABIgBgBIgFAEQABgCgCABIgFADIAAAAIgCACIgCABIgBABIABgBIgDABQgBABABgBIgEACIACAAIgGADIAAgBIgCABIgEABQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgDACIgFACIgDACIgEAAIgJAFIABgCQgFAEgEAAIAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAABIAAAAIgEABIgBAAIAAAAIgBABIAAgBIgCACIgCAAIAAAAIgDAAIgBABIgCABQABAAAAgBQABAAAAAAQAAgBgBAAQAAAAgBAAIgEACQAEgBgFAAIgJAEQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgEACIgBgBIgFABQABAAAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAIgDACIABgCIgCABIgDAAQABAAAAAAQAAgBAAAAQABAAgBAAQAAAAAAAAIgDABIABgBQgGAEgDgBIACgBIABgBIgCAAIAAACIgCgBIAAgBIgCABIgBAAIgDABIgIABIACgCgAhMCeIAAgBIAAAAIAAABIAAAAg");
	this.shape_16.setTransform(-38.7,-88.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3F3B3C").s().p("AC3CaQAAgBAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAABAAAAQAAAAgBAAQAAABgBgBQgBAAgBAAIACAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAIgFAAQAAAAgBAAQAAAAAAgBQAAAAABAAQAAAAAAAAIABAAIgBAAQAAAAABAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgCABQAAgBAAABQgGAAgCgDIAAAAIgBAAIgEgCIgBgBIgCAAIAAgBIgBAAIgBAAIgBAAIAAgBQgBAAAAAAQgBAAAAAAQAAAAABAAQAAABABABIgBgBQAAABAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAIACgBIgCgBIAAAAIAAABIgBgCIAAABIgBgCIAAABIgBgBQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIgCgBIgBAAQgBAAAAgBQAAAAgBABQAAAAAAAAQAAAAAAAAIgCAAIAAAAIAAAAIAAACQAAgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIgCAAQABAAgBgBIADABQgBgBAAAAQAAgBAAAAQAAAAAAAAQABAAABAAIgCgCIgCAAIABgBIgCAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIAAgBIAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAAAAAABIgBgBIgBAAIAAAAIgCgBIgDgDIgBAAIAAgCQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAAAAAIgBgBQAAgBgBAAQAAAAAAAAQAAAAAAgBQABAAAAAAIgEgCIAAAAIgBgBIgBgCIAAgBIgCAAQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBgBIgCgBIAAgBIgDgDIABAAIgBgCIgBACIgCgDQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAIgCgBIgBAAIgCgCIgDgCQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAgBQgBgBAAAAQAAgBgBAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAgBIgCAAIABgBIgBgDQAAABgBAAIgCgEIgBgCIABABIgBgCQAAABAAAAQAAAAAAAAQgBAAAAgBQAAAAgBAAIgBgCIABAAIgCgCIgBAAIgCgCIAAgCIABgBIgGgEIgBgCIgCgCIABAAIgBgDIgCgCIgBAAIgCgEIgBAAIAAABIgBgBIABgCIgCgDQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIABgCIgBgBIgBAAQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIABAAIgCgEIABABIgCgCQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIgBAAIAAAAIgBgBIgBAAIgBgCIADABIABABIgBgCIgBgCIgBACIgCgBIABAAIgDgFIABAAIgCgDIABABIgCgCIAAABIgBgBIgCgDIABAAIgCgCIAAgBIAAAAIAAgCIgDgCIgBgFIgCgCQAAgBAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAIABABIAAABIgBgCIAAAAIgDgEIgDgCIAAAAIgBgCIgDgGQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIgBgCIgCgCIABgBIgDgEIgLgTQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAAAAAgBIAAAAIgDgGIAAABIgBgDQAAABAAAAQAAAAAAgBQAAAAgBgBQAAAAgBgBIACABIgCgCIABAAQAAgDgDgCIAAABQgCgGgBgCIAAAAIAAgCIAAAAIAAgCQAAABAAAAQAAAAAAABQAAAAgBgBQAAAAgBAAQABAAAAgBQAAAAAAAAQAAAAAAgBQAAAAgBgBIgHgJQABAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIgBgBIABAAQgBgBgBgBQAAgBgBAAQAAAAAAAAQABABAAABIABACIgCgEIAAAAIgBgBIAAABIgJgLIgDgFQgBgDgEgCQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBgBIgBgBIgBgBIgBAAIgGgFIABgBIgHgEQgEgEgDgBQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAIgEgDIgBAAIABABQgRgGgNACIgXACIAAgBIgDACIABAAQgMADgFAAIAAAAQgGgBgEACIABgBIgIABIgJAAIABgBIgCABIAAgBIgBABIgCAAIgDAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQABAAgBAAIgDABIgBgBIAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgCABIAAgBIgBAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAABAAAAQABAAgCAAIACgBIgBAAIgCgBIgCACIgCAAIAAABIgCAAIABgBIAAgBIgBgBIACAAIABgCQAMgGApgJQAogKABADQABAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAIADABIAJAAIABABIAEAAIAUAGQAAACAGADIgBAAIACAAIACACIAAAAQABAAAAAAQABABAAAAQAAAAAAAAQAAAAgBABIAIAEIgBAAQABAAAAAAQAAABABAAQAAAAAAAAQAAABAAAAIACACQAEACAGAIIACACIgBgDIACADIgBAAIAIAIIAKASIABAAIAAACQAAAAABAAQAAAAAAABQAAAAABgBQAAAAAAAAIAAACIACACIACACQgBABAAAAQAAAAAAABQABAAAAAAQAAABABAAIAAABIAAABIACABIABADIgBAAIACADIAAAAIAAAAQAAABAAAAQABAAAAABQAAAAAAAAQABAAAAAAIACAEIAAABIADACIgBABIACACQAAABAAAAQAAAAAAABQAAAAAAAAQABAAAAABIAAgBIABACIAAAAIAFAJIADAEIAFANIABAAIAAAAIAEAMIABAAIAAABIAAABIAFAGIAAACQAAAAABABQAAAAABAAQAAABAAAAQAAABAAABIACABIgBAAIACADIABABIACACIAAABIABACIgBAAIABABIAAAAIACAEIAAAAQADAFABACIACACIgBAAIABACQACABAAAFIABADQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAABIgBgBIABABIAAACQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAIADAEIgBAAIABABIADAEIABABIACADIgBAAIABABIgBAAIADAEIAAAAIAEAGIgBgBIAAABIADACIgBAAIACABIgBAAIAEAHQACAEACABIABgBIABAEIAAAAIAAABIACAAIgBABIABAAIgBABQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABIAAAAIADAEIgBAAIACACIAAABIABAAIADADIgBABIADADQAAgBAAABQAAABAAAAQABAAAAAAQAAAAAAAAQAAAAAAgBIAAAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIABAAIAAAAQABABAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIACACIAAgBIADADIgBABIABAAIAAAAIACADIACACIAAgBIACABIACADIACABQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABIAFADIgBAAQABACAEACIABgBIAAABQAAABABAAIAAgBIACACQABABgBgBIABABIAAAAIACAAIAAABIABgBIABACIABAAIABABQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAABABIADABQAAAAAAAAQABABAAAAQAAAAgBAAQAAAAgBAAIAGACQAAAAAAAAQAAABABAAQAAAAABAAQABABABAAIAAAAIADABIAAABIACAAIgBABIADABIgBABIACAAIACgBIADABIgCABQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIABgBIABABIgBAAIACAAQACABgBAAIACAAIAFACIgCAAIgCgBIAAABIABABg");
	this.shape_17.setTransform(33.1,-97);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#202020").s().p("AAmAjQAAAAAAgBQAAAAgBAAQAAAAgBAAQgBAAgBAAIAGgDQgHADABgCIAGgKIACgBIgFACIAEgDIgGAEIAGgGIgFAEQgFAEABgCQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBAAAAABIACgDQgGAFgDgBIAEgFIgFAFQgBABgBAAQgBABAAAAQAAAAAAAAQAAAAAAgBQgBABAAAAQgBABAAAAQAAAAAAAAQAAAAAAgBIADgDQgFAGAEgHIgBABIAAgBIABAAIgBAAIgBABIAFgGQgEACgCAAIgCgBIADgFIgDADIABgCQgBABgBABQAAABAAAAQgBAAAAAAQAAgBABAAIADgFIgEAEIACgDQgBABAAABQgBABAAAAQgBAAABAAQAAgBAAgBIACgDQgFAHABgDIADgDIgFAFIAAgBIAAgBIgCABIAEgHIgGAKQADgIgEAGIAJgPIgDABIgHAMIAEgIIgHAMIABgEIgBAEIABgFIACgEIgCADIgBAFIAAgCIgCAFIACgFIgFAJIACgEQAAgBAAAAQAAAAAAAAQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIgBACIABgDIgBACIAAgBQgFAMADgLIgDAGIACgEIAAgBQgBAAAAABQAAAAAAAAQAAAAAAgBQAAAAABgBIABgGIgBADIgBACIgCAEIACgFIABgFIgDAIQAAABgBABQAAABAAAAQgBABAAAAQAAgBAAAAIACgGQgBACgBABQAAABgBAAQAAABAAAAQAAgBAAgBIABgDIAAgBIgBACIADgIIgEAKQABgBAAAAQAAgBAAAAQAAAAAAAAQAAAAgBABQAAAAAAABQAAAAAAAAQAAAAAAgBQAAAAAAgBIABgFQAAABAAABQAAAAAAAAQgBAAAAAAQAAAAAAgBIgBAHQAAABgBAAQAAAAAAAAQAAAAAAgBQAAgBABgCIgBAEQgBAAAAABQAAAAAAgBQAAAAAAgBQAAgBAAgCIAAgBIAAABIgBACIAAgDIgBAFIACgMIgBAEIAAgGIAAADIAAgBIgBABIAAAFIgCAEIABgEIgBAEIAAgEIAAABQABgEABgCQAAgCAAAAQAAAAAAABQgBABgBACIAAACIAAACIAAgCIgBAGIAAgEQAAgBAAAAQAAAAAAAAQAAAAgBABQAAABAAABIAAgBIgBADIABgLIgBALIAAAAIABABIgBAAIAAgBIAAABIgBAAIAFAEIgBgBIACABIAAAAIAAAAIgGgEIAAAAIAAAAIAAACIAAAAIgBgBIABAAIAAgCIgBAAIAAABIAAgBIAAAAIAAACIABABIAAABIgBgBIAAAAIAAgBIAAAAIAAAAIAAgBIAAABIAAAAIAAABIAAgBIAAAAIAAAAIgBgDIAAAAIAAAAIAAAAIAAgBIABABIgBAAIABAAIAAABIAAAAIABAAIAAAAIgBgBIAAAAIAAAAIgBgBIAAAAIgCgBIgBAAIACABIABABIgCgBIAAAAIAAAAIAAAAIgBgBIgFgDIABABQABABAAAAQAAAAAAAAQAAAAgBAAQAAgBgBAAIADACIgFgDIgFgBIAIADQgBAAgBAAQgBAAAAAAQAAAAAAAAQAAAAAAAAIABABIgGgCQAAABABAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIgBgBQABABgBAAIgHgBIgCAAIADABIAFAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAABABIgFgBIgDgBIACAAIgKgCIAAABQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAAAAAgBIADABQgCgBgBAAQgBAAgBAAQAAAAAAgBQABAAABAAQABAAAAAAQABABAAgBQAAAAAAAAQAAAAgBAAIgCgCIALAEIACAAIgLgFIADACIgGgEQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBIADACIgEgDIgBgCQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAgBQgBAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQgEgFADgBIAFACQABABAAAAQABAAAAABQAAAAAAAAQABAAAAgBIgIgEQAFACgFgIIADADQgBgBAAgBQAAAAAAgBQgBAAABAAQAAAAAAAAIAEABQABABABABQAAABABAAQAAABAAAAQAAAAAAgBQgCgDgCgGQACgBADADQgBgGACgCIAEgFIABAEQAAgFADAAQAAAAABAAQABAAAAgBQABAAAAAAQAAgBAAAAIACAIQACAFgCgNQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAABABQABACgBgHQABABAAAAQABABAAAAQABAAAAAAQABgBAAAAIAAAFIACgBIAAgHQAAABAAAAQAAABAAAAQABAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABABAAAAQAAABAAABIABgFIACACQAAABAAAAQABAAAAAAQAAAAAAgBQAAAAABgBIAAAFIAAgFQAAgBABAAQAAAAAAAAQABAAAAAAQABABAAABIACAEQACgDADAAIAEABIgBACQABgBAAgBQAAAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAQABABAAgBQAAAAABgBQAAgBABgBIgBAEQAAAAAAAAQABgBAAAAQAAAAAAABQAAAAABAAQAAABAAAAQAAAAAAAAQAAAAAAAAQABAAAAgBQAAABAAAAQAAABAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAAADQAAABAAAAQAAAAAAAAQAAAAAAAAQAAgBAAgBIAAADIAAgEQAAAAAAABQAAAAABAAQAAAAABAAQAAAAABAAIAEgDIgCAJQgBACACgCIABgCQgDAKACgEIACgGQAAABAAACQgBABAAAAQAAABABAAQAAAAAAAAIgBACQADgDAFgIIAJgBQAGgBADABIAHAFQAEACABAEIgDAGIACAAIgBACIAEgFQACADAEABIgEAEIADgDIgBACQADgCABgDQAGABAAAGQAAAGACACQAAADAFACIgFAMQgCAEAGACQgRAFgEAAIgGABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBgAgbAYIAAAAIAAAAIAAAAIAAgDIAAADIAAAAgAgcAXIABAAIgBAAgAggAVIAAAAIAAgBIAAAAIgEgCIAEADIAAgBgAgcAeIAAAAIAAABgAgcAdIAAAAIAAgBIgBgBIABABIgBgBIAAgBIgBgBIgBgCIACADIAAgDIAAAAIABAEIAAAAIAAAAIAAABIAAAAIABACgAgdAbIAAABIAAABgAgcAbIABABIAAAAgAgaAZIACABIAAAAIACACIgEgDgAgZAZIgBAAIABAAIAAAAIADACgAgcAagAgiAVIADABIAAAAgAgfAWgAgzAVIAAAAIAAAAgAgzAVg");
	this.shape_18.setTransform(0.6,135.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#202020").s().p("Ag9ApQABgBAAAAQAAgBAAAAQAAAAAAAAQAAAAgBABQgBAAAAABQgBAAAAAAQAAAAAAAAQgBAAAAAAIAJgIIABgCIgJAJIACgDIgGADIgBgFIAEgCQgFACgBAAIgCgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBgBAAAAQgBgBAAAAQAAgBAAAAQABgBAAAAQABAAAAgBQgDgBgCgEQgBgEACgEIAFADQgCgBACAAIADAAIgFgBIgDgDQABAAAAgBQABAAAAAAQAAgBAAAAQABgBgBAAIgDgGIAEACQgBgBAAgBQgBAAAAgBQAAAAAAgBQAAAAABAAIAEABIAEADIgEgIQACgBADACQgCgFADgCQADgDAAgCIACAEQgBgGADAAQABgBAAAAQABAAAAAAQABgBAAAAQAAAAAAgBIADAIQADAEgFgMIABAAQABgBAAAAQAAAAAAABQAAAAABABQAAAAAAABQABABgBgGIACABIABgBIABAFIABgBIgCgHQABABAAAAQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAgBQABAAAAAAQAAABABAAQAAABAAABIgBgFIADACQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIABAFIgBgFQABgBAAgBQAAAAAAAAQABAAAAAAQABABAAABIADACQABgDADgBIAEgBIAAACQAAgBABgBQAAAAAAAAQAAAAAAAAQABABAAABQAAAAABAAQAAAAAAAAQAAgBAAAAQAAgBAAgCIABAFQAAgBAAAAQAAgBAAAAQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAQABAAAAABQAAAAAAABIAAADQABAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBIAAgBIAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABgBIADgFQACADAAAGQAAADABgDIAAgCQABALABgFIAAgHIABAFQABABAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAADQAAgEABgKIAJgFQAFgDAFAAQAEACAJAAQAJACAGAHIgBAHIAEABIAAAAIACAAQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAABgBIAGAGIAGAGIgFADIAEgBIgBABQADAAACgDQAIAIgBAKIgDAPQgCACADAFIgLAGQgEADAEAEQgRgEgEgCQgIgDACgCQABAAAAgBQAAAAAAAAQgBgBAAAAQgBgBgBAAIAGAAQgHgCACgCIAKgEIACAAIgCgBIgDgBIACAAIgBAAIgDgBIAIgBIgGAAQgHABACgBQABgBAAAAQAAAAAAgBQAAAAAAAAQgBAAgBAAIAEgBQgFABgDgBIgDgBIAGgEIgHAEQgBAAgBABQAAAAgBAAQAAAAAAAAQAAAAABAAIABgBQgBABgBAAQgBABAAAAQAAAAAAAAQAAAAAAAAIADgDQgGAFAFgGIgBABQAAAAAAABQAAAAAAAAQAAgBAAAAQAAAAAAgBIgCACIAGgHQgEACgCAAIgCgBIABgFIgCAEIAAgEQAAACAAABQgBABAAAAQAAABAAAAQgBAAAAgBIACgEIgDAEIABgEQAAABAAABQAAABgBAAQAAAAAAAAQAAAAAAgBIAAgCIgBADIAAgDQgBAGgCAAIABgCIgBAAIgBACIAAgGIgCAJQAAgBAAgBQgBAAAAgBQAAAAAAABQAAAAgBABIABgIIAAgFIABgCIgCACIgCALIAAgHIgBAMIAAgEIgBAFQgBACAAgHIABgFIgBADIAAgBQgBgCAAAJIgBAEIAAgGQAAAHgCADIABgEQAAgBAAAAQAAAAgBAAQAAAAAAAAQAAABAAABQAAAAgBAAQAAABAAAAQAAgBAAAAQAAgBAAAAIAAAEIAAgEIAAACIAAACQAAAAAAABQgBAAAAAAQAAgBAAAAQAAAAgBgBIAAAHIAAgFIAAAAIAAgBIAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAQAAgBAAAAIgBgGIAAADIAAACIAAAFIgBgFIgBgGIABAIIgBgCQABAJgBgDQgBAAgBgGQAAACAAABQAAABAAAAQAAABAAAAQAAAAAAgBIgBgDIAAACIgCgJIABALQAAgBAAgBQAAgBAAAAQAAAAAAAAQAAABgBABQAAAAAAABQAAAAAAAAQAAAAAAgBQAAAAgBgBIAAgHQgBgEAAAEQABABAAABQAAAAAAABQAAAAgBAAQAAAAAAAAIABAHQAAABAAAAQAAAAAAAAQAAAAAAgBQAAgBgBgCIAAAFQAAgBAAgBQAAAAAAAAQgBAAAAgBQAAAAgBABIgBgCIAAgBIAAADIgBgEIAAgBIAAgBIgBgCQACAMgBgDIgBgCIABgCIgBAAIAAACIAAAAIAAgBIAAgBIgBAAIABACIgCAAIAAgBIAAgBIgCgBIgBAAIgBAAQgBAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAIABAFIgBAAIgBgDIgEAAIACgBQABgBAAAAQAAAAAAAAQAAgBAAAAQAAAAgBAAIgCABIgFAAQgEgBADgBIAHgBIAFgEQgCgCgGADQABAAABAAQABAAAAAAQAAAAAAAAQAAABAAAAQgBACgEABIgDAAIgEACIgCgBIgBAAIAAAAIAAAAIAAAAIgBAAIgFAHIACgCIAAAAIABgBIgBABIAAABIACgCIgCADIAAgBIgEAFQgDAEAFgEIADgEIABAAQAAABAAgBIgCAEIABgCIgCAEIgHAHIAGgHQAHgJgIAJIAAAAIgFAHIAAAAIgDACIADgEIgEAEIAAgBgAgtATIAAABIABgCgAglAiIABABIgCgEIACADIgBAAIABABIADACIAAABIgCgCIAAAAIgBAAIAAAAIABADIABABIAAABgAgkAmIABABIABACgAghAkIAEAEIgFgEIgBgEIgFgDIgBgCIAGACIgBgBIABABIgBgCIAAAAIAAAAIgGgCIAAgBIAFABIAEABIAAgBIAAgBQgBgFABAFIABAAIABAAIACAAQAAAAAAAAQAAAAAAABQABAAAAAAQABAAABABIABADQAAgBAAAAQAAAAgBAAQAAAAAAAAQAAAAAAABIgCgDIABADIgBgBIgCgBIgCAAIgBAAIABACIAAAAIAAABIABABIABAAIgBgBIAAgBIACABIAAABIAAABQABAAAAAAQAAABABAAQAAAAAAAAQAAAAgBABIgDgCIAAAAIAAAAQAAABAAABQAAAAABAAQAAABgBAAQAAgBAAAAIgBgDIAAAAIABAFIAEAEQgFgEgBAAgAghAeIABAAIgBAAgAgjAngAglAkIAAAAIACADgAgiAnIgBgCIACABIAAABIgBAAgAgmAkIABAAIABACgAgjAlIAAgBIAAABgAgdAeIABABIABgBIgBABIAAAAIgBgBgAgYAfIgDgBIAAAAIAAgBIAFABQABAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgCAAgAgWAZIABAAIAAgCIABAAIAAACIAAAAIAAAAIgBABIAAAAIgBgBgAgYAaIAAgBIAAAAQgBgEABADIAAABIABABIgBAAgAgYAaIAAgBIAAABgAgWAZIAAgCIAAAAIAAACgAgSAXg");
	this.shape_19.setTransform(0,115.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#202020").s().p("AgXAsIgCgBIACAAIADADIABAAIgCgBIACACgAgSAtIAAAAIgHgFIgBgCIgBAAIAAABIgGgFIgBAAIgIgHQgBAAAAAAQgBAAABAAQAAAAABABQABAAABABIANALIAAAAIgCgCIgEgCIACABIACACIACACIAAAAIgBgBIABACIAAgBIgWgNIACACIAIAFIAFADIgGgDQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAgBIAHAEIADACIACABIgOgHQABAAAAAAQAAABAAgBQgBAAgBAAQgBgBgCgBIAGAEQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAIACACIgIgDQABAAABAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgBgBIgBAAIAGADIgIgDIgEgBIgCAAIADABIAEABQAAABABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAABIgEgCIgBAAIgKgDIAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBAAAAIAEABQgCAAgBgBQgBAAgBAAQAAgBAAAAQAAAAABAAQAHACgIgEIALAFIADAAIgMgFIAEABQgIgDACgBIADgBIAEABIgEgDIgBgCQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAABABQgDgHADAAIAEADIADABIgIgGQAGADgIgIIAEADQgBgBgBgBQAAAAgBgBQAAAAAAAAQABAAAAAAIAEABIAEADIgHgIQAAgBABAAQAAAAABAAQAAABABAAQABAAABABQgDgDABgCQACgCgBgDIADAEQgDgGADAAQAAAAABgBQAAAAABAAQAAgBAAAAQAAgBAAAAIAFAGQAEAFgIgMQABABAAgBQAAgBAAAAQAAAAAAABQABAAAAAAQABABAAABQACAAgDgFQAAAAABAAQAAABAAAAQABgBAAAAQAAAAABgBIACAEQADABgGgIQABABAAAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAAAAAAAQABAAAAABQABAAAAABIgCgFIADABQAAAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAgBIACAEIgCgEQgBgBABAAQAAgBAAAAQAAAAABAAQABABABAAIADACQABgDACgBIAEgCIABACQgBgEACADQABAAAAAAQAAABAAgBQAAAAAAgBQAAgBAAgCIACAEQgBAAABgBQAAAAAAAAQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAABABQAAAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAABABIAAADQAAABAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBIABACIgBgEQAAAAABAAQAAABAAAAQABAAAAgBQABAAAAgBIADgFQADAPAAgHIAAgBQADAKgBgFIAAgHIACAFQAAABAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBIABAEIAAgHQABgDAAgFIAGgFQAGgEAEAAIAKABQAGAAADAEIABAHQAAAAAAAAQAAAAAAAAQAAAAABgBQAAAAABgBIgBADIACgDIABgDQADACAFAAIgCAFIABgCQACgBABgEQAGgBAEAGQAEAJACABQAAABAAAAQAAABAAAAQAAAAABABQAAAAABAAIAEABIgCAMQAAAFAGAAQgOAIgFABQgHAFAAgCQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBAAgBABIAEgFQgGAFAAgDIADgJIgCACIAAgBIgCABIAEgHIgDAFQgEAEAAgBQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIABgCQgFAEgDABIADgFQgCADgCACQgBABAAABQgBAAAAABQAAAAAAgBQAAAAAAgBIgBADIABgFQgDAIACgIIAAABQgBABAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBIAAAAIAAAAIAAAAIACgEQgCACgCAAIgDAAIAAgEIgCADIABgCQgBACAAABQAAAAAAAAQgBAAAAAAQAAAAAAAAIABgFQgBAFgBAAIABgDQgBABAAABQAAABAAAAQAAAAAAAAQgBAAAAgBQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAgCIgBACIgBABIAAgBIgBAAIgBABIAAgGIgBAKQAAgBAAgBQgBAAAAgBQAAAAAAAAQAAAAAAABIAAgIIgBgEIABgDIgBACIgBAMIgBgIIAAANIAAgDIAAAEQgBACgBgIIAAgCIAAABIAAgBQgCgCACAJIAAAAIgBAEIAAgGIAAAIIAAgCQAAgBgBAAQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAAAAAQAAgBAAgBIAAAEIAAgEIAAACQAAAHgBgFIAAAEIAAgCIgBgBQAAABAAAAQAAAAAAAAQAAAAgBgBQAAAAAAgBIgBgGIAAAEIAAACIABAEIgBgFIgCgFIABAGQACAIgBgCIgCgGIAAAEIgBgDQgBgCAAAAQAAgBAAAAQAAAAAAABQAAABABADIgDgIIADAKIgBgBQAAABAAAAQAAAAAAAAQAAAAAAAAQAAgBgBgBIgCgGQgBgFABAFIAAACIADAHIgBAAIgBgDIABAFQAAAEgFgMIABADIgCgEQAEALgBgCIgCgDIACAFIgFgLIABADIgBgDIAAACIgBgCIAAABIADAFIABADIgCgDIABAEIgBgDIgCgDQAGALgDgFIgCgEIgCgDIACAFIgBgCIADAGIgCgDIAAgBQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIABABIAAABIgBgCIABAEIgFgKQgBABAGAJQAAABAAAAQAAABAAAAQAAgBgBAAQgBgBAAgCIABAEIAAABIgDgDIgEgGIAGAJQAAABAAAAQAAAAAAAAQAAAAgBAAQAAgBgBgBIACAEIgDgEIACADIgCgDIACAFIgDgFIADAFIgGgHQAHALgCAAIgGgIIADAFIgNgPIAAABIgGgHQAEAHAFADIAFAGIABACIAGAGIgFgEIgCgCIAKALIgHgHIAEAEIgEgEQABACAAAAQABABAAAAQAAAAgBgBQgBgBgBgBIAEAEIADACIACACIgDgCIADADIAAAAIAAAAgAgTAtIgDgDIAEADgAgTAtIgEgEIAEAEgAgXArIgEgCIAAgBIADACIgDgCIAAgBIAGAEIABABIABABgAgaArIgBgBIAAAAIACABgAgbAqIAAgBIACACgAgXApIgBgBIACACIgBgBgAgaAmIADADgAgaAmIABACIABAAgAgaAhIACACIABABIABABIABABgAgNATIAAgBIABADgAABANIAAAAg");
	this.shape_20.setTransform(-0.1,92.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#202020").s().p("AgtAyQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAIgCgEQAAABAAABQAAAAAAABQAAAAAAAAQgBAAAAgBIgBgBIgDgFQgCgEABAFIADAGIABAFQgBAAgDgGQAAABABAAQAAAAAAABQABAAAAAAQAAAAAAgBQABgBgCgEIgBgDQAAAAAAAAQAAAAAAgBQAAAAgBgBQAAgBAAgBIgIgLIABADIAFAIQgCAAADAHQgEgEAAgCQAAAAAAAAQgBABAAAAQAAAAgBgBQAAAAgBAAQAEAHgBABQAEAFABAFIgCgFQAAAAAAAAQAAABAAAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAAAABIgFgNIgCgEIAAAIQgBgBAAgBQAAAAgBAAQAAgBAAABQAAAAgBAAIgBADIgDgLQAAACABABQAAABAAABQAAAAAAAAQAAAAAAgBIgBgBIAAAAQgBAAABAGIgCgGIAAgBIgBgFQAAgBAAAAQgBgBAAAAQAAAAAAAAQAAAAgBAAIAAADIACAEQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAAAAAQAAAAAAABIgBgFQAAACABAAQAAABAAgBQAAAAAAgBQAAgCgBgCIAAAAIgBgIIAAgBIAAgDIABAGQgCgIABACQABACAAAAQAAABAAAAQAAgBAAgBQAAgBAAgCIACAMIACACIgDgNIABAEIgCgHQABABAAAAQABAAAAABQAAAAABAAQAAAAABAAIABAEIgBgHQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBIACACQgBgGACABIADAFIACACIgFgJQAFAFgGgIIACACQAAAAgBAAQAAgBAAgBQAAAAAAAAQAAAAAAAAIADACIAEACIgGgHQABAAAAAAQABABAAAAQABAAAAABQABAAABABQgDgFABgCQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAEAEQgDgFACgBQAAAAABAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIAFAHQADACgHgJIAAgBQAAAAABAAQAAgBAAABQAAAAABABQAAAAABABQAAAAAAAAQABgBgBAAQAAgBgBgBQAAAAgBgCIACABIAAgCIAEAEQADABgHgHQABAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQAAAAABAAQAAABABAAIgCgEQAFADgCgFQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABABIAFABQgBgEADgCIAGgDIABACQgCgEADACQABABAAAAQAAAAAAgBQAAAAAAgBQAAgBgBgBIADAEIAAAAIAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQAAgBAAAAQAAgBAAgBIABABQAAABAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAAAABIABADQAAABAAAAQABAAAAAAQAAgBAAAAQAAgBgBAAQAAgBABAAQAAAAAAAAQAAAAAAABQABABAAABIgBgEQACABADgDIAFgGQACADABAGQAAABAAAAQAAABAAAAQAAAAAAgBQAAAAAAgBIAAgCQABAAAAAAQAAAAAAAAQAAABABABQAAAAAAACQAAABAAAAQABABAAAAQAAABAAgBQAAAAAAAAIgBgHIACAFQABABAAAAQAAAAAAAAQABAAAAgBQAAAAAAgBIABADIABgGIABgIIAPgCQAIgBAGABIAMAFQAHAEADAGIgCAGIADAAIgCACIADgCIACgCQACADAGAEIgEAEIADgDIgBACIAGgEQAGACABALIADAPQgBACABADIACAFIgJAMQgFAGADAGIgTgJQgIgDACgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQgBgBgBAAQAIAAgCgBQgHAAABgDIAJgHIACgBQgHABABgBIAFgBQgEgBgDACIAHgEIgFACQgHADACgCQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAgBABIAEgCQgFACgDgBIgDAAIAFgDIgHADQACgBgDAAIgCABIABgBQgBABAAABQgBABAAAAQgBAAAAAAQAAAAABgBIACgCQgGAFAGgFIgCAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABgBIgBAAIAEgFQgEADgCgBIgDgBIADgGIgEAEIACgEQgBACgBABQAAABgBAAQAAABAAgBQAAAAAAAAIADgGIgEAFIABgCIgBAAQAAAAAAAAQAAgBAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAABgBIABgEQgDAGgBAAIAAgCIgBAAIgCABIADgHIgFAKQAAAAAAgBQAAgBAAAAQgBAAAAAAQAAAAAAAAQACgIABgBIAAgEQABAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAgBIgBACIgFANIACgJIgEANIABgEIgCAFIAAgFIACgFIgCADIAAgBIgBAHIAAgCIgBAFIAAgFIgBAIIAAgCQAAgDAAADQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIAAACIAAgBIAAAAQgBAEAAgEIAAAFIAAgCIgBgBIAAgBIAAgBQAAABAAABQAAABAAAAQAAAAgBAAQAAgBAAgBIgBgEIAAADIAAABIABAEQAAABAAAAQAAAAAAAAQAAgBgBAAQAAgBAAgBIgBgCQACAJgBgDIgDgFIABAEIgBgDQAAgCAAAAQAAgBAAABQAAAAAAAAQAAABAAACIgDgGIADAHQAAgBAAAAQAAgBgBAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQAAAAgBAAQAAgBAAgBIgDgEQgCgEACAEIAAABIADAGQAAABAAABQABAAgBAAQAAgBAAgBQgBgBAAgBIABAEQAAAEgGgLIABADIACADIgCgDQADAGgBgBIAAABIgGgKIABAEIgDgFIABACIAAABIACAEIACAEIgCgDIACAEIgDgEQACACgBgCQgBgBgBgBQAAgBgBAAQAAAAAAAAQAAAAABABIADAGIgCgEIAAABIgBgBIADAGIgCgDIAAAAQgBgBgBgBQAAAAAAAAQAAAAAAABQABABABACIAAgBIABADIgHgJQgBAAAHAJQAAABAAABQAAAAAAAAQAAAAgBgBQgBgBgBgBIACADIAAACQAAABgBgBQAAAAAAAAQgBAAgBgBQgBAAgBgBIgEgGIABADIAGAFQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIgDgCIADAEQgEgFgCgCQgCgCAAgBQgBAAABABQABACADADIACADIgDgDQACACABABQAAABABAAQAAABAAAAQAAAAgBgBIgDgDQABACABABQABABAAABQAAAAAAAAQAAAAgBAAIgDgEQAAAAAAABQAAAAABABQAAAAAAAAQABABAAABIgFgGQAIAMgFABIgGgHIADAFIACACIgBAAIgEgEIABACQgGgKgGgGIAAABIgFgHIAIALQAJALgBAAIgDgEQgCgCABACIABABIACADIgBAAIAFAGQABACABABQAAABABAAQAAABAAgBQgBAAAAAAQgIgKgCgCIAJAMIgGgHQAFAIgGgIIADAEIgEgEIABADIgCgDIADAFIABACIAAAAIACAEIgCgDIACAEIgDgEIACAEQACACgGgHIgCgDIgCgCIAHALIgBgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIgCgEQgEgGgBABIAGAIQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAgBgBAAIADAEIgIgIIgKgPQAAgBgBAAQAAAAAAAAQAAAAABABQAAABABACQAGAHAGALIgFgGQgEgFADAFIgGgHQAAACACADIAEAEIgCgBQAAAAAAAAQAAABAAAAQAAAAAAABQABABABABQAAgBAEAHIABADIgCgDQAAgBAAAAQAAAAAAABQAAAAAAAAQAAABAAABIABADgAgoAyQgGgHgBgFQAAABAAAAQAAABABAAQAAAAAAgBQAAAAAAAAIABABQAEAIgBgDIADAGIgBgBg");
	this.shape_21.setTransform(-0.4,62.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#202020").s().p("AgiAyIgEgEIgEgFIAFAFIACADIAAgBIACACIgBAAgAgjAvIgKgKIACABIgBgBIgGgGIAEAFIACADIAAgBIABACIABACIgFgFIAEAFIAEAEIgGgFQABACABAAQABAAgBAAQAAAAgBgBQgBgBgCgCQACAAgGgGIgKgJIACACIAHAHQgCAAAGAFIgGgFQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAgBAAIAHAGIADADIgLgKIgEgDIAFAGQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAAAAAABIACACIgHgFQABABAAAAQABAAAAABQAAAAAAAAQgBAAAAgBIgBAAIgBAAIADACIgFgDIACABIgGgDIgBgBIACACIAEACQAAABAAAAQABAAAAAAQAAABAAAAQAAAAgBAAIgBAAIgDgCIACACIgEgCIgJgGIAJAFQAGADgHgEIABABIgIgFIgBAAIABAAIgDgDIAFADQgGgEACAAQABABABAAQAAAAAAAAQAAAAAAAAQAAgBgBAAQAAgBgBAAQAAgBgBAAQAAAAAAgBQAAAAAAAAIAKAIIACAAIgKgIIAEADQgHgGACAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABgBIADADIgDgFIgBgCQABABAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABABQgCgHADgBIAEAFIACACIgGgIQAEADgFgHIADABQgBgBAAAAQgBAAAAAAQAAAAAAAAQABAAAAAAIADAAIAEADIgFgHQABAAAAAAQABAAAAAAQABABAAAAQABABABAAQgCgFABgCQACgCAAgDIACAEQgBgFACgBQABAAABAAQAAgBABAAQAAAAAAgBQAAAAAAgBIAEAIQAEAEgHgMQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAgBIACACQABABgCgGQABABAAAAQABAAAAAAQABAAAAAAQAAAAAAgBIACAFIABgCIgDgGQABABAAAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAgBQAAAAABAAQAAAAAAABQABAAAAABIgBgFQAEAEgBgEIACADIgBgEQAAAAAAgBQAAAAABAAQAAAAABAAQAAAAABABIADACQABgEADgBIAEgCIABACQgBgDACACQABABAAAAQAAAAABAAQAAgBgBgBQAAgBAAgBQAAAAABABQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAABABQAAAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAABIAAADQAAABABAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIABACIgBgEQAAAAABAAQAAABABAAQAAgBABAAQAAAAABgBIAEgFIACAJQABACAAgDIAAgBQAAgBAAAAQAAAAAAABQABAAAAABQAAABAAABIABACIgBgHIACAFQABABAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBIABADIABgGIAAgIIAKgEQAHgEAFABIANADQAJACAEAFIgBAHIADAAIABgBQABAAAAAAQAAAAABAAQAAAAAAgBQABAAAAgBQADADAHADIgEAEIADgCIgBABQADgBACgDQAHADACAKIAEAPQgCACAGACIgIALQgDAFAFADQgRACgEgBQgJAAABgCQABgBAAAAQAAgBgBAAQAAAAgBgBQgBAAgBAAQAIgCgCAAQgIABABgDIAIgIIACgBQABgBgHACIAEgCIgFABIAGgEIgFACQgGAEABgCQABAAAAgBQAAAAAAAAQgBAAAAAAQAAAAgBAAIACgCIgGACIgEAAIAFgEIgGAEQABgCgCACQAAAAgBABQAAAAgBAAQAAAAAAAAQAAAAAAAAIABgBQABgBAAAAQAAAAgBAAQAAAAgBABQAAABgCABIADgDIgBABQAAgBAAAAQABgBAAAAQAAAAgBAAQAAAAAAAAIgBABQAAAAABgBQAAAAgBAAQAAAAAAAAQAAAAAAAAIAAAAIAAAAIgDADIAGgHQgEADgCAAIgDgBIABgFIgCADIABgDQgBACAAABQgBABAAAAQAAABAAAAQAAAAAAgBIABgGIgCAFIABgEQAAABgBABQAAAAAAAAQAAABAAAAQAAAAgBgBQAAgBAAABIABgDQAAgBAAAAQAAAAAAAAQgBAAAAABQAAABAAABIgBADIABgFQgCAHgCAAIABgCIgBAAIgCACQACgJgBABIgCAJIgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIABgJIAAgEIAAgDIAAABIgBABIgCAOIAAgKIgBAMIgBgCIAAADQgBACAAgFIAAgEIgBACIAAAEQAAABAAAAQAAABAAABQAAAAAAAAQAAABgBAAIAAgEIAAAIIgBgEQAAAAAAgBQAAAAAAAAQAAAAAAABQAAAAgBABQAAABAAAAQAAAAAAAAQAAAAAAAAQgBgBAAgBIABAEIgBgDQgBgDAAADIAAABQAAAHAAgFIAAAHIAAgFIgBgBQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAgBgBIgBgGIAAADIABACIAAAFQAAACgBgHIgCgGIACAJQAAABAAABQAAABAAAAQAAABAAAAQAAAAAAgBQgCAAgBgFQAAABAAABQABACAAAAQAAABgBgBQAAAAAAAAIgBgDQAAgCgBgBQAAgBAAAAQAAABAAABQABABAAACIgDgIIADAJQgBAAAAgBQAAAAAAAAQAAAAAAAAQAAABAAAAQAAABAAABQAAAAAAAAQAAAAAAgBQgBAAAAgBIgCgHQgBgEABAEIAAADIACAHQAAABAAAAQAAAAAAAAQAAAAgBgBQAAgBgBgCIABAEIgCgBQgBAAgCgHIAAADIgBgDQADALgBgCIgCgEIABAFIgEgLIABAEIgBgDIAAACIgBgBQAAgCAAACIACAEIABAFIgCgDIABADIgBgDQABACgBgCQAAgBAAgBQgBgBAAAAQAAgBAAAAQgBAAAAABIACAGIgBgDIgBgBIACAGIgCgDQAAgBAAAAQAAAAAAAAQAAAAAAABQAAABAAABIAAgBIAAADIgFgKIAEAKQABAFgDgHIABAEIgBACQAAAAAAAAQAAAAgBgBQAAAAgBgBQAAgBgBgBIgDgGQABACgBgCIABADIAEAGQAAABAAABQAAAAgBAAQAAAAgBgBQAAgBgBgBIACAEQgBgCgBgCQAAgBgBAAQAAgBAAAAQAAABAAABIACAEIgCgEIACAEIgCgDIABAFIgDgFIADAFIgFgHQAFAMgCAAIgCgDIgEgFIADAGIABACIABACIgEgHIABACIgLgRIAAABQgDgGgCgCIAIAMIAHAMIgDgFIgBAAIABABIAEAGIgDgDIAFAHQABABAAABQABABAAABQAAAAAAAAQAAAAgBgBIgIgMIAIAMIgFgHQAFAIgGgIIADAEIgEgEQAEAGgFgHIADAFIACACIAAABIACACIAAAAIAAABIgFgFIgCgDIgBgBIAHAKIAAAAIgDgFIgFgFIAGAIIgDgEIAEAGIgHgIIgFgGIAAAAIgHgIIACADIAOAQIgGgFQgEgFAEAFIAFAFIAEAFIgBgBgAgOAQIAAgCIABADIgBgBgAgPAOIAAgBIABADIAAAAIgBgCgAgOAQIAAAAg");
	this.shape_22.setTransform(0.2,33.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#202020").s().p("AgbAnIgBgBIAAAAIgGgFQABACgBgBIgBgBIgFgDIAKAHIgHgEIACABIgEgDIgQgMIACACIAIAFIAEAFIgGgFQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIAHAFIgJgFIgEgCIAGAFQgBgBAAAAQgBAAAAAAQgBAAAAAAQAAAAABAAIABACIgKgEIAEACIgCgBIAAAAIABABIgDgBIAAAAIgEgCQgBAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIACACIAEABQABABAAAAQABAAAAABQAAAAgBAAQAAAAgBAAIgEgCQABAAAAAAQABAAgBAAQAAAAgBgBQgBAAgCgBIAAAAIgHgDIgBABIgCgDIAFADQgHgEACAAQABABAAAAQABAAAAAAQAAAAAAAAQAAgBgBAAIgCgCIALAGIADAAIgMgGIAEACIgGgFIAEgBIAEACQgFgDABgBIgBgCQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAABABQgDgHACgBIAFAEQAAAAABABQAAAAABAAQAAAAAAAAQAAAAAAAAIgHgHQABABAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAIgCgDIADACQgBgBgBAAQAAgBAAAAQAAgBAAAAQAAAAABAAIADACIAEACIgFgIQACgBADADQgCgGACgCQACgDgBgCIADAEQgBgGADgBQAAAAABAAQABAAAAgBQAAAAAAAAQABgBAAAAIADAHQAEAGgGgOIABAAQAAgBABAAQAAAAAAAAQABABAAAAQAAABABABQABABgCgGQABAAAAABQABAAAAAAQABAAAAAAQABAAAAgBIACAFQACABgDgJQAAAAAAABQABAAAAAAQAAAAABAAQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABABQAAAAABABIgBgFIACACQAAAAABAAQAAAAAAAAQABgBAAAAQAAgBAAAAIABAFIAAgFQAAgBAAgBQABAAAAAAQAAAAABAAQABABAAABIAEADQACgEADAAIAFAAIAAACQAAgBAAgBQAAAAAAAAQABAAAAAAQAAAAABABQAAABAAAAQAAAAAAAAQABAAAAgBQAAgBAAgCIABAFQAAgBAAAAQABgBAAAAQAAAAAAABQAAAAABAAQAAABAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAABAAAAQABAAAAAAQAAABAAAAQABgBAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAABABAAIgBAEQAAAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAABQAAAAAAABQAAAAAAACIAAgEQAAAAABABQAAAAABAAQAAAAABAAQAAAAABgBIADgDIAAAJQgBADABgDIABgCQgBALABgFIACgHQAAAIABgDIgBADQADgDAEgKIALgBQAGgBAEABQACACAHACQAGACACAFIgCAHIACgBQAAAAABgBQABgBAAAAQAAAAABAAQAAAAAAAAQACACAFACIgEAEIADgDIgBABQADgBABgDQAGgBABAIQACAJACABQgBABAFABIgDAMQgBAFAFAAQgPAIgEABQgHAEAAgCQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBAAgBABQAHgFgCAAQgHAEABgDIAEgKIACgBQABgCgFAEIADgDIgFADIAFgGIgEAEQgFAFABgCQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBAAAAABIACgDIgGADIgEABIADgEIgEAEQACgDgDADQgBAAAAABQAAAAgBAAQAAAAAAAAQAAAAAAAAIABgBQAAgBAAAAQAAgBAAABQAAAAgBABQgBABgBABIADgEIgBABIAAgBIgBABQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAgBQAAAAAAAAQAAgBAAAAQAAAAAAABQgBAAAAAAIAEgFQgDADgDgBIgDgBIADgGIgDAEIABgDQgBABgBABQAAABgBABQAAAAAAAAQAAAAAAgBIADgFIgEAEIACgDIgBABQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAABIACgEQAAAAAAgBQAAAAAAAAQgBAAAAABQAAAAAAABIgDAEIgCABIAAgBQAAgBAAAAQAAAAgBAAQAAAAAAABQgBAAAAABQAEgJgCABQgCAHgDAEQAAgBAAgBQAAgBAAAAQAAAAAAAAQgBAAAAAAIAEgJIABgCIACgCQgBAAAAABQgBAAAAAAQAAAAAAAAQAAAAAAAAIgGALIADgIIgGAMIABgEIgCAEIABgFIACgEIgCACIAAgBQAAgDgCAKQgBABAAABQAAAAAAAAQgBABAAAAQAAAAAAAAIACgFIgDAJIAAgEQAAAAAAgBQAAAAAAAAQAAAAAAABQAAAAAAABQgBACABgDIgBADIAAgDIAAgBIgBACIABgBQgDAGAAgEIgCAHIABgFIAAAAIAAgBIAAgCQAAACAAAAQgBABAAAAQAAAAAAAAQAAgBAAgBIABgGIgBAGIgBAEQgBACABgHIgBACIAAgCIgBAGQgBgBABgFIgCADIABgDIAAAAIgBACIAAgJIgBALQAAABgBABQAAAAAAAAQAAAAAAgCQAAgBAAgCIABgGQAAgFgBAEQAAABAAABQAAABAAAAQAAABgBAAQAAAAAAgBIAAAIQAAABAAAAQAAAAAAAAQAAAAAAgBQAAgBAAgCIgBAEQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAAAIgBgHIAAACIAAAEIAAgCIgBAEIAAgEIAAAFIgBgLIgBAEIAAgEIAAABQgBgCAAACQAAAEABABIAAAEIgBgEIAAAEIAAgEIAAgDQgBgCAAADIABAGIgBgFIAAgCIAAAEIAAgCIAAAHIgBgEIAAAAQgBgDAAAEIABADIgDgLIACALQAAABAAABQAAAAAAAAQgBAAAAgBQAAgCgBgBIABAEQABAFgDgIIgCgHIAAADIADAHQABAGgDgHIACAEIgCgFIABAEIgCgEIACAFIgCgEQADAJgCgEIgEgIQAEALgBAAIgEgIQgCgBAAgBQgBgBAAABQAAAAABABQABACACACIABADIgLgSIAAABIgEgIIAHAMIAFAIIgBgBIAAABIAFAIIAEAFIgBgBIgEgFIACACIgEgEQABABAAABQABAAAAAAQAAAAgBAAQgBgBgBgCIAEAFIACACIAAABIAAAAIACACIgFgFIABABIgFgFIAAABIAFAFIAAgBIACADIgUgTIACACIAQAPIgGgFIAFAFIAEAEIAAAAgAgeAgIgDgFgAgdAfIgDgFIACADIABACIAAAAg");
	this.shape_23.setTransform(0.5,1.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#202020").s().p("AAAACIAAgEIAAAEg");
	this.shape_24.setTransform(1.6,-76.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#202020").s().p("AhTAyIAHgKIgBgCIAAAAIABgBQgBAAAAAAQgBABAAAAQAAAAAAAAQAAAAAAAAIABAAQgEAIgDABIACgDIgDADIgBAAIAAAAIAAABIgFgQIgBAAIAAgBQACAAACgDIAEACQgEgCAAgBQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAgBAAQABAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAQABAAABABQgEgHADgCIAFADIACABIgHgGQAEACgGgIIADADQgBgBAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAIAEAAIAFADIgHgIQAAAAAFAAQgDgDACgCQADgDgBgDIADAEQgCgGADgBQAEgCAAgDIAEAHQAGAEgJgLQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQABABAAAAQAAABABAAQABABgCgGIADAAIABgBQAAABAAABQABAAAAABQAAAAABABQAAAAAAAAIABgBQAAgBgDgFQAAAAABABQAAAAABAAQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABABQAAAAABABIgCgFIAEABQAAAAABAAQAAAAAAAAQAAAAAAgBQAAAAAAgBIACAEIgBgEQAAgBAAgBQABAAAAAAQABAAAAAAQABAAABABIAEABQACgEADgBIAGgBIABABQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABABQAAAAABABQAAAAAAgBQAAAAAAgBQABgBgBgCIACAFQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQABAAAAAAQAAAAAAAAQAAAAABgBQAAABAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAgBAAABQABAAAAAAQAAAAAAABIAAADQAAAAAAAAQAAAAAAAAQAAAAABAAQAAgBAAgBQAAAAAAAAQAAgBAAABQAAAAAAABQABABAAABIgBgEQACACADgDIAFgFQACADAAAGQAAABAAAAQAAAAAAAAQAAAAAAAAQABAAAAgBIAAgCQAAgBAAABQAAAAAAAAQABABAAABQAAAAAAACIAAACIABgHIABAFQABABAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAADQAAgEABgDIACgHIALgEQAIgCAEAAIAKACQAHABADAEIAAAHIADgCIAAABIABgBIABgDQACACAGAAIgCAFIACgEIgBACIADgGQAFgBAEAGQAFAIADAAQAAACAGAAIACANQABAFAGgCQgKAMgEACQgFAHgCgDQAAAAAAgBQgBAAgBAAQAAAAgBABQAAAAgBABQAEgIgCACQgFAGgBgDQgBgCAAgHIABgDQgDAGAAgCIABgEIgDAFIACgHIgCAFQgDAEgBgBQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAIACgCQgDACgDAAIgEACIADgEIgEAEQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBAAAAABQgBABAAAAQAAABAAAAQAAAAgBAAQAAAAAAgBQAAABAAABQgBABAAAAQAAAAAAAAQAAAAAAgBIABgEQAAABgBAAQAAABAAAAQAAAAAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAIAAACQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAgBAAIABgBIgBABIABgFQgDAEgDAAIgEAAIABgGIgCAEIAAgEQgBACAAABQAAABgBABQAAAAAAAAQAAAAAAgBIABgGIgDAFIABgDIgBACQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAgBABIABgEQAAAAAAAAQAAgBAAAAQAAABAAAAQAAABgBABIgBADIABgEQgCAGgCAAIAAgBQAAgBAAAAQAAAAgBAAQAAAAAAABQgBAAAAABQABgJgBABIgBAFIgBAEQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIABgJIAAgEIABgDIgCACQgDANgBAAIABgJIgCAMIAAgCIgBADIgBgBIAAgDIABgEIgCADIAAgBIgBAFIABgCQgBAFgBAAIABgFIgDAKIAAgFQAAAAAAgBQAAAAAAAAQAAAAAAABQAAAAgBABQAAAAAAABQAAAAAAAAQAAAAAAgBQAAAAAAgBIAAAEIAAgEIgBACIAAgCQgBAIgCgFIAAAHIAAgFIgBgBQAAABAAAAQAAAAAAAAQAAAAAAAAQgBgBAAgBIAAgGIgBAEIAAACIAAAFQgBACAAgIIAAADIgBgCQABAJgBgDQgCAAAAgGQAAACAAABQAAABAAAAQAAABgBAAQAAAAAAAAIAAgDQAAgBAAAAQAAgBgBABQAAAAAAAAQAAABAAABIgCgIIABAJQAAgBAAAAQAAgBAAAAQAAAAAAABQgBAAAAABQAAABAAAAQAAAAAAAAQAAAAAAgBQAAAAgBgBIAAgHQgBgEAAAEIAAADIABAHQAAABAAAAQAAABAAgBQgBAAAAgBQAAgBAAgCIgBABIABAEQAAgBAAAAQgBAAAAgBQAAAAAAAAQgBAAAAAAQgBAAgCgHIAAADQABAEAAgEIAAADIgCgHQAAgBAAAAQAAAAAAABQAAAAAAABQAAABAAACQACAGgBgBIgBgDIABAFIgEgLIABAEIgCgFIAAACQAAgCAAACIACAFIAAAEIgBgDIABAEIgDgGIACAGIgDgHIACAEIgBgCIABAHIgBgDIgBgBQgEgMAEAOIABADIgFgLQgCACAGAJQAAAAgBAAQAAgBAAAAQAAABAAAAQAAAAAAAAIgCgCIABAEIgBABQAAAAAAAAQAAAAgBgBQAAAAgBgBQAAgBgBgBIgDgGIABADIAEAGQABAEgCgCIABABIgCgCIABABQgCgDAAgBQgBgBgBAAQAAgBAAABQABABAAABIACAEQABABAAAAQAAABAAAAQAAAAAAAAQAAgBgBAAQABABABABQAAABAAAAQAAAAAAAAQgBgBgBgBIgGgGQAHALgCAAIgGgHIADAGIACABIACADIgGgHIABACIgNgPIAAABIADAEQAKAKgBAAIgEgEQgCgCACACIAAABIAFAFIgDgDIAGAGIACADIgLgKIALAKIgHgGQACABAAABQABABAAAAQAAAAAAAAQgBAAgBgBIACABIgFgEIACACIgDgCIAFAEIACACIgBgBIACABIgBAAIADACIgDgCIADADQACACgIgFIgCgDIgCgBIABABIgBAAIAIAGIgFgDIAGAEIgKgFIgFgEIgBAAIAMAIIgHgDQgGgEAGAEQAIAFgCgCQAHAFgDgBIgKgGIgBAAIACABIABABIAAAAQABABAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIgBgBIgFgCIgCgBIgDgCIgKgFIgCgGIgDAEIABgCIgBADIgDADIgGAFIAEgBIAAAAIACAAIgBABIAAAAIAAAAIgBAAIAAAAIgBABIACAAIABAAIgBAAIAAAAIAJgCIAAgBIABAAIgBgEIAJAEQgEAAAJAEQgFgBgCgBQAAAAAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAHACAAABQAGACAFADIgEgCIgCgBIgOgGQACACgCgBIAAABIgBAAIABABIgBAAIAAABIAAADQABgGgDADQgBABgBABQAAAAgBAAQAAABAAAAQgBgBAAAAQABAIgKgBQABgEgCACIgDACIAAAAgAgsAiIADADIABAAgAhEAdIACABIAAABIgCgCg");
	this.shape_25.setTransform(-0.1,-75.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#202020").s().p("AAAACIAAgDIAAADg");
	this.shape_26.setTransform(0.9,-30.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#202020").s().p("AhEA5IAAgBQABgDgDABQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAAAAAIAJgIIABgCIgBAAQgGAGgDAAIADgCQgDgFgEAAIgCAAIACgEIAEAAQgFgBAAAAIgCgCQABAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQgBAAABAAQAAgBAAAAQAAAAABAAQABAAABgBQgHgEADgDIAFACQgCgCACABIADAAIgJgDQAEAAgIgEIAEABQgBgBgBAAQAAgBgBAAQAAAAAAgBQAAAAABAAIADgCIAFABIgJgFQABgBAEAAQgEgEABgDQABgEgBgBIAFABQgEgEACgCQADgDAAgCIAGAGQAAAAABAAQAAAAAAAAQAAAAAAAAQgBgBAAAAIgFgGQAAABAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAABABQACAAgEgFIADAAIABgCIADAEIAAgCQAAgBgEgEQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAgBQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABIgDgEQAGACgBgEIADADIgDgEQAAgBAAAAQABgBAAAAQABAAAAAAQABAAABAAIAFABQABgEADgCIAGgCIAAABQAAAAAAgBQAAAAAAAAQABgBAAABQABAAAAABQABAAAAAAQABAAAAAAQAAgBAAgBQAAgBgBgBIACAEQAAgBAAAAQABAAAAgBQAAAAAAAAQABABAAAAQABAAAAAAQAAABAAgBQABAAAAAAQAAAAAAgBQAAABAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAAAAAQAAABABAAIAAADQAAABAAAAQABAAAAAAQAAgBAAAAQAAgBAAgBIAAAAIAAgBQACABADgCIAEgGIADAJQAAABAAAAQAAABAAAAQAAAAAAgBQABAAAAgBIgBgCQAAAAABAAQAAAAAAAAQAAABAAAAQABABAAABQAAACAAAAQAAABABAAQAAAAAAAAQAAAAAAgBIgBgGIACAEQABABAAAAQAAAAAAAAQAAAAAAgBQABAAAAgBIAAADQAAgEABgCIABgHIAKgFQAHgDAFAAIANABQAHACAFAFIAAAHIADgBIgBACIACgDIACgDQADADAHACIgCACIgBACIADgCIgBABQACgBACgEQAIAAAFAMIAIASQAAADACADIAEAFIgIAOQgEAGADAGQgQgFgEgDQgIgBACgDQABgDgEAAQAIgBgCgBQgIAAABgDIAGgGIACgCQABgBgGADIADgDIgDABIgCABIAFgGIgEAEQgFAFAAgDQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBABAAAAIACgCIgHADIgEAAIAEgHIgFAHQABgDgCADQAAABgBAAQAAABgBAAQAAAAAAAAQAAAAAAgBIABgBQAAgBAAAAQAAAAAAAAQAAAAgBABQgBABgBACIACgDQgCADABgDQAAgBABAAQAAgBAAAAQAAAAAAAAQgBAAAAABIAAABQgBABAAgBIAAgCIAAABIACgHQgDADgDABIgEgBIABgGIgCAEIAAgDQAAABgBABQAAABAAABQAAAAgBAAQAAAAAAgBIACgFIgDAFIABgEQAAABAAAAQAAABgBAAQAAAAAAAAQAAAAAAAAIgBgBQAAABAAABQAAABgBAAQAAAAAAAAQAAAAAAgBIAAgBQgBAEgCAAIABgCIgBAAQAAAAgBAAQAAAAAAABQAAAAAAAAQgBABAAAAIAAgIQAAAHgCAFQAAgBAAgBQgBAAAAAAQAAgBAAABQgBAAAAAAIABgKIAAgEIAAgDQAAABAAAAQAAABgBAAQAAAAAAAAQAAAAAAAAIgCAOIgBgGIAAALIgBgEIAAAEQgBACAAgHIAAgEIAAACIAAgBQgBgDABAKIAAADIgBgEIgBAIIAAgEQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAIAAAEIgBgEQAAAAAAAAIAAABIgBADQAAAAAAABQgBAAAAAAQAAAAAAgBQAAAAgBgBQACAIgBgBIgBgFIAAAAIAAgBIgBAAQABAEgCgEIgBgEIAAACIABACIAAAEQAAADgCgIIgBgEIABAGQABACAAABQAAABAAABQAAAAAAAAQAAAAgBAAQgBgBgBgFIAAAEIgBgDIAAACIgDgHIACAIQAAAAgBgBQAAAAAAAAQAAAAAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAAAAAgBQAAgBgBgBIgCgGQgBgCABACQAAABAAABQAAABAAAAQAAAAAAAAQAAAAAAAAIACAHQABABAAAAQAAAAgBAAQAAgBAAgBQgBgBAAgCIABAFQgBgBAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgEgGIABABIgCgCQAAgBAAAAQAAAAAAABQAAAAAAABQABABAAABIACAGQgBgCAAgBQAAAAgBgBQAAAAAAAAQAAAAAAABIACAEIgGgKIACAEIgDgFIABADIAAgBIgBgBIAAABIADAFIACAEIgDgDIACADIgBgBQAAABAAAAQABABAAAAQAAAAAAAAQAAAAgBgBIgCgEIgCgCIABACIADAGIgCgDIAAAAQgBgCgBAAQgBgBAAAAQAAABABABQABABABACIABACIgHgJIAGAJQAAAAAAABQAAAAAAAAQAAABgBgBQAAAAAAAAQgBgBgBgBIADAEIgBABQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAgBgBgBIgFgFIACACIAFAGIABACIgCgCIgBAAQgBgBAAgBQAAAAgBAAQAAAAAAAAQABABAAABIADACIgDgCQAMAKgJgGIgHgFIAIAJIgCgCIACACIgIgFIAFAEIACABIgFgDIACACIgRgLIAAABIAFADIALAHIgFgEQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIACABIAIAFIgGgDIALAFIgIgDIADACIgFgCIgBAAIAMAFIgMgDIALADIgcgGIADABIAVAFIgIgCQgIgBAJACQAKADgEgCIAFABIgLgCIgCAAIAFABIAHABIABABIADABIgGgCIgHgBQABABABAAQAAAAABAAQAAAAAAAAQAAAAgBAAIgCAAIgEAAIgHgBIgEAAIgBgBIAAABIgBAAIgHAGIgCADIAAABIgBAAIAAABIAIgBIADgBQAAAAAAABQAAAAABAAQAAABAAABQAAABAAABQAAgBgBgBQAAAAgBAAQAAgBAAABQgBAAAAABIgCABQAAAAABAAQAAABAAAAQAAABAAABQAAABgBAAQgCAFgGABIgFgBgAhDAsIACAAIAAAAIAAAAIAAgBIABgBIAAgBgAg7ApIABgBIADgGgAgyAqIgDgCIgCgBQACAAABAAQABAAABAAQAAAAAAAAQAAAAgBAAIACAAIgBgEIADAAQgIAAAPACIgIgBQABAAAAAAQAAABAAAAQAAAAAAAAQgBABgBAAQAIAAABABIgJAAIAAABQABABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgBgBgAgXAGIAAACIAAAAIAAgCgAAAgDIAAgBIAAACIAAgBg");
	this.shape_27.setTransform(-0.1,-29.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#231F20").s().p("AgUYYQAHAFAHgRIAGgBQARArAShiIAPhrQACgKgBgHQASANgHAeIgNBrQgTBigSgrIgGABQgGAOgEAAQgIAAgIgcgAgrXVIgOhrQgHgfASgNQgJgIAAgOIABgMQAFgigBgvIgDgnQgEgeAKgKQAEAQAPAHQgSAGAHAlIACAoQABAugEAiIgCAMQAAAOAKAIQgTAOAHAeIAPBrQAEAZAFAQQgLgGgMg9gAAmU9QAHgIAAgNIgBgLQgFgiACgvIACgoQAGgkgRgHQARgIACgTIgBgQQgGgmgCg6IgBgzQAGgjgPgLQARgJACgUIgCgRQgHgrAGgzIAGgrQAFgZgKgsIgFgUQAJAEAJAqQAKAsgEAZIgHArQgGA0AGAqIACARQgBAUgRAJQAOALgFAjIACAzQABA6AGAmIACAQQgDATgRAIQARAIgFAjIgDAoQgCAvAGAiIABALQAAANgIAIQgBgQgMgKgAAHSaIAAAAIAAAAgAgvR8IAAgEIAAgDIAGAEIgGADIAAAAgAg9ReIACgRQAGgmgGg6IgGgyQgGgfAKgMQAEAPAOAIQgPAJAFAlIAHAyQAFA6gFAmIgBAOQgMgIgCgPgAg9OQIgBgHIAGAEIgFADIAAAAgAhKNvIABgRQAHgqABg0IABgrQgFgeABgmQAAgZADgMQgEgHgCgKQAFAEAHADQgEACgCAIQAGAKAMAGQgIADAAAsQAAAnAEAdIgBArQgCA0gFAqIgDARQgLgJgBgRgAAfJjQAWgLACgWIgCgVQgHgvAEhQIAFhGQAFgkgKgPIADgEQAHgLgBgXIgFgUQAEgEABAYIAAAYQAHgTgCgaIgDgXQgGgiAChSIAChLIABgNQgHgEgMgBQALgDAHgEQACAGgBAGQATAKgIAdIgCBLQAAAyACAfQgCAAgDAJQAHAsgFAGIADAVQADAWgIALIgEAEQAMAPgGAkIgFBGQgDBQAGAvIACAVQgDAWgVALQgGgXgHgDgAhUJBIACgVQAGgvAAhQIgBhGQgGgjAKgPIgEgEQgIgLADgXIACgQIAEAQIACALQgDgOACgSIACgXQAGgigEhSIgEhLQgIggAWgHIgBgJIAAAAQAHAEAHACQgHABgGACQADAJAFAEIAFADIANAFQglAEAKAoIAFBLQAEBSgGAiIgGgVIgCASQgCAYAEADIgEAVQgCAWAHALIAEAEQgKAPAGAjIABBGQABBQgGAvIgDAVQgLgJgCgRgABHDaQACAAABALQABAKAAAOQgDgOgBgVgAAdgGQAPgEAHgGQALgIgBglIgDgjQgQhTABgpIAEgYQAUg6gVgTQAVgNgQhtIgUhqQgJgNACgQIADgNQAYg0gGgoQAXgYAHgaIABgVQgFghAHgDQAEgBAEAFQAlhFgVg7IgGgMIADABQAPALAJARQAaA0gxBVQgFgFgDABQgIADAFAhIgBAVQgGAagXAYQAFAogXA0IgEAOQgCAQAJAMIATBrQARBtgVANQAVASgUA6IgDAYQgBApAPBTIAEAjQABAjgMAIIgFADQgFgPgZgCgAhCgOQgLgJABgkIADgjQAPhTgBgpIgEgZQgUg6AWgTQgVgLALhuIAQhsQAJgNgCgQIgEgNQgTgsAAgoQgEgHgCgIIAHAHIgBAIQAGAKAJAJQgFAoAXAzIADAOQACAQgJAMIgPBsQgMBuAWALQgWATATA6IAEAZQACApgQBTIgDAjQAAAMABAJgAhcrcIAHgWIABgHIABABIAJgDQAHADgGAgIgGAWQAAAIACAIQgQgUABgWgAhUr5Qg0gqAOg1QAFAgAVAmIAIgDQAHADgDAZIAAAAgAhzuXQAGgOAJgKQgNgMgJgZQAQAXAYgBIgMAJIgGAGQANAMASgBQgHAFgJAKQgTAUgKAUQgFALgDAKQgFgjAMgcgABWulIAHAAIgKgOIgLgMQAsACARhJIAIhJQAXhOgSgzIAFAJQAfA2gbBcIgIBJQgQBDgmAEIADAHgAiPwGIgIhJQgcheAig4QAIgLAKgKQhdAHgWhEIgBgDQArAiBVgNIANAFQAQAFAWgDQgnAMgYAYIAMgCIBBgIQg5AQgYApQgjA4AdBeIAIBJQADAOAEAKQgNgRgIghgABL0CQAQACAbAFQAMAMAIAOIAIARQgYgigvgQgAB2z7QgWgVgjgMQAjAEBOATQBAgGAShBQAEgVABgYIgBgUIgFgOQAMATAGAVIAAAUQgBAYgGAUQgTBBg8AHIhFgQgAj51AQgNgNgGgRIgEgPQAAg1A0gsQAagWAZgLQAagEANALQAPANADAAQBFhvBDAdQAsASAfA8QAQgEAlAAQAoAAAJAFIAXATQAVAVAKAbQgHgLgKgLIgYgTQgJgFgnAAQgmAAgQAEQgfg8gngPQg/gbhFBvQhDgMgMAGQgOACgRAJQgiASgKAkIgDAXQgBAbAFAVIgGgGg");
	this.shape_28.setTransform(-0.1,3.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#0066BB","#086CBD","#1F7BC3","#4594CC","#78B6D9","#A6D5E4","#75B7D1","#4C9EC1","#2B8AB4","#137CAA","#0573A5","#0070A3"],[0,0.059,0.149,0.267,0.396,0.502,0.592,0.682,0.769,0.855,0.933,1],-15.9,0,16,0).s().p("AglVdIgPhsQgHgeATgNQgJgIgBgOIACgMQAEgigBgvIgCgnQgGglASgHQgSgIgCgSIABgRQAGgmgGg6IgGgyQgGglAPgJQgRgKgBgUIACgRQAFgqACg0IABgrQgFgeABgmQABgsAIgDQgWgKgDgXIACgVQAHgvgBhQIgBhGQgGgjAKgPIgEgEQgIgLADgXIADgQIADAQIADALQgDgOABgSIADgXQAFgigDhQIgFhLQgKgoAmgEIgTgIQgLgJABgkIADgjQAQhTgCgpIgEgZQgUg6AWgTQgVgLAMhuIAPhsQAJgNgCgQIgDgNQgYg0AFgoQgXgXABgaIAGgWQAGgggIgDIgIADQgihUAUg0QAHgRALgLQAFgGAFgCQgsABgQhJIgIhJQgniCBNg2QArgfA/gBIAAgBIAfADQAmAGAdAQQBbA1gqCLIgIBJQgQBJgsgCIAUAWQAWAaAMAYQAnBMhPAZQgFgFgEABQgHADAFAhIgBAVQgGAagXAYQAFAogXA0IgEANQgBAQAIANIAUBqQAQBtgVANQAVATgUA6IgDAYQgBApAPBTIADAjQABAlgLAIQgIAGgRAEQArACgKAqIgCBLQgBBQAFAiIADAXQACAagGATIgBgYQgBgYgDAEIAEAUQACAXgIALIgDAEQALAOgGAkIgFBHQgDBQAGAvIACAVQgCAWgWALQAJAEAJAqQAKAsgEAZIgHArQgFAzAGArIACARQgCAUgRAJQAPAKgGAkIABAzQACA6AGAmIABAQQgCATgSAIQASAHgGAkIgCAoQgBAvAEAiIACALQAAANgIAIQATANgHAfIgPBrQgSBigTgrIgEABQgFANgGAAQgNAAgMhEg");
	this.shape_29.setTransform(-0.8,15.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#0066BB","#086CBD","#1F7BC3","#4594CC","#78B6D9","#A6D5E4","#75B7D1","#4C9EC1","#2B8AB4","#137CAA","#0573A5","#0070A3"],[0,0.059,0.149,0.267,0.396,0.502,0.592,0.682,0.769,0.855,0.933,1],-11.7,0,11.7,0).s().p("AgFCZQhagLgRhkQgFgfACgiIAEgeQBQiLBQA3QApAcAZA4QAGA2gNA2QgXBjhNAAIgNgBg");
	this.shape_30.setTransform(0.1,-137.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#3F3B3C").s().p("AB9BnIACAAQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgEABQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAABAAIAAAAIgBAAQAAAAABgBQAAAAAAAAQAAAAgBAAQAAgBAAAAIgCABIAAABIgEAAIgDgBIgBABIgEgBIgBgBQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgBAAIgBAAIAAgBIgCABQAAAAgBAAQAAAAAAAAQAAAAAAAAQABAAAAABIgBAAIgDAAIACgBIgCgBQgBAAABABIAAAAIgBAAIABAAIgCgCIAAABIgBAAIABgBIgCgBIgBAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAAAAAIgCAAIAAABIAAAAIABABIgBgCIgDgBQABAAAAAAIACAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIgBgBIgBAAIAAgBQgBAAAAgBQgBAAAAAAQAAAAAAAAQgBABAAAAQABAAAAABQAAAAAAAAQAAAAgBABQAAAAgBAAIgBgBIABAAIgCgBIgBAAIgBAAIAAAAIgCAAIgDgEIgBAAIgBgCQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBAAAAABQAAgBAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAIAAgBQgBgBAAAAQgBgBAAAAQgBAAAAAAQAAAAgBAAIABAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBIgBgBIAAgCQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAABQgBgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAIgDgCIAAgBIgBgDIAAAAIgBgBIgBACIgBgEQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAAAAAIgBgCIAAABQgDgCgCgDQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIgBgBIABgBIAAgCIgBAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAgBAAIAAgCQAAgBAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAIABABIAAgCIgBAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgBgBIABAAIgBgDIgBAAIAAgDQgBABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIABAAIAAgBIAAAAIABgBQgDgBgBgEQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBgBAAIAAgCIABACIgBgEIABACIgBgFIgBABIgBgFIAAAAIAAgCIAAgDQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAIgBgBIAAAAIgBgCIABgBIAAABQABgBAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAIAAAAIgBgBQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAgBAAIABAAIgBgCIAAgCIgBABIgBgCIAAgEIAAAAIgBgDIABABIAAgDIgBABIgBgCIABABIgBgDIABABIgBgDIABgBIgBAAIABgBIgCgDIABgFIgBgCIgCgBQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBABIAAgCIgCgEQAAgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIAAABIAAgDIgBgFQAAAAAAABQAAAAABAAQAAgBAAAAQAAgBAAgBIgBAAIABAAIgBgCIABAAIgCgFIgGgRQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAAAAIgBgEIgBABIgBAAIgIAHIgBAAIgBABIAAABIABgBQgBABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIAAAAIgBABIABAAIgIAJIgEACIgFAFQgBABAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAIgBACIAAgBIgCACIABAAIgFAEIAAAAIgBABIAAAAIgGAFIgGAGIgEACIgDADQgBAAAAAAQAAABAAAAQAAAAAAAAQABAAAAAAIgWAVQgMAKgEACIAAAAIgCADIABgBQgHAJgFACIABABQgFACgBADIAAgBIgGAFIgGAFQAAgBAAAAQABAAAAAAQAAgBgBAAQAAAAAAAAIgBACIAAgBQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgCABIgBACIAAgBIgCADQgBABAAgCQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgBACIgBABIAAAAIAAgBIgBABIgBAAIAAAAIgBADIgCABIABABIgBABIAAgBIgBAAQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIABgBIAAgDQACgMAZgeQAZgaABABIACgBQAAAAABAAQAAAAAAAAQAAAAABgBQAAAAABAAIACgDIAAAAIACgDIABAAIADgDIALgLIAFgEIAAAAIABgBIACgBIAAAAIABgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIAEgGIgBABIADgCIACgBIAJgIIABgBIgCABIADgCIAAAAIAHgGIAPgLIgBgCIADABIAAgCIABAAIABgCQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBIABABIABgBIABgCIACgBIAAABIACgDIABABQABgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIACgCQABAAgCAAIAOACIABACIgBAAIAAAAIADADIgBABIABAAIAAAAIABABQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAAAIAAgBIACADIgBAAIAFANQACAEACAJIABAAIgBAAIABAMIABAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAIACAGIgBADQABAAAAAAQABABAAAAQAAABAAAAQAAABgBAAIAAABIABACIgBAAIABADIAAACIABACIAAADIAAgBIAAACIAAAEIAAAAIABAHIgBAAIACADIgBgBIAAACIAAAAQABACgBAFIAAgBIgBABQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABIgBgBIAAABIAAABQAAABAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAIACAEIgBAAIABABQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAABABAAIgBAAIAAACIAAgBIAAAFIABAAIABAGIgBgBIABACIAAABIABABIgBAAIABAGQABAEABACIABgBQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABIABAAIgBABIACAAIgBAAIABABIgBAAIABACIAAACIAAAAQAAAAAAABQABAAAAAAQAAABABABQAAAAAAABIgBAAIACACIAAAAIABABIgBAAIACADQgBAAAAAAIACADIAAAAQAAABABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAgBQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAAAIABAAIAAAAQAAABAAAAQABAAAAABQAAAAgBAAQAAAAAAAAIACABIAAgBIABADIAAABIAAAAIACACQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAIACABIACACIACABIAAACIAGACIgBAAIADABIACABIAAAAIABABIAAAAIADAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAIAAABIABgBIABABIAAgBQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAAAIABAAIAAABIABABIACgBIABABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIAFAAQAAAAAAAAQAAABABAAQAAAAABAAQABAAABAAIAAAAIADAAIAAABIAAAAIACgBIgBABIADAAIgBABIACAAIgBAAIAGgBIgCABIABABIABgBQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIACAAIAAABQABAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAIAFABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAgBIAAABIAAAAIAAABIgDgBQABAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAIgCAAgAAiAAIAAgBIgBgBIAAgBIACACQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIAAAAIgBAAg");
	this.shape_31.setTransform(28,-123.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#3F3B3C").s().p("AimCaIgBgBIgBAAIABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAIACgBIABAAIgCABQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQACgBACgDQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIgBABIACgBQgBAAAAABQAAAAAAAAQAAAAAAAAQAAAAABAAIABABQAAgBABAAQAAAAAAgBQAAAAAAAAQAAAAgBAAQAIgFACAAIAAgBIAFgCQAAABAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIACgCIABAAIABAAIABAAIABgCQAAAAABAAQAAAAAAAAQAAgBgBAAQAAAAgBAAIABAAQAAAAAAAAQAAgBAAAAQAAAAABAAQABgBABAAIgBACIACgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAIACAAIAAAAIACAAQABgBgBAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAgBAAIACgBQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQAAgBAAAAQAAAAgBAAIACgCIgBAAIAAgBIACABIABgCIABAAIgCACQABAAAAAAQAAAAABAAQAAAAAAABQAAAAgBABIADgBIABgCIAAABQABgBAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIAAgCIACABIAAAAIACgCIABgBIAAgBIABAAIAAgCIAFgCIABgBIACABIADgEIACgBQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAABgBQAAAAABgBQAAAAAAgBQAAAAAAAAIABAAQAAAAgBAAQAAAAABgBQAAAAAAAAQABAAAAAAIAEgBQABAAAAgBQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQAAgBAAAAQAAAAAAgBIABAAIAEgDIAAABIABgCIgCAAIAEgDQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAABIABgDQACgCACgFQAAABgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQADgEABAAQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAAAAAIABAAQABAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIABACIADgCQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAgBIADgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAAAIgBABIACgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAABAAIAAABIACgDIgBgBIACgCQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAgBABAAIABAAIABgBIAAABIABAAIAAgEIACgDQABgBABAAQAAgBAAAAQABgBAAAAQAAgBAAAAIABgCIAAABIACgCIgBACIADgGIAAAAIADgEIAAgBIgBABIAAgBIADgBIADgDQAAAAgBAAQAAAAAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIAAgCIgBAAIACgCIABgBIAAABIADgEIAAgDQAAAAABABQAAAAAAAAQAAAAAAgBQAAAAAAAAIAAgBIgBAAIABgCIgBgBQAAAAABAAQAAAAAAAAQAAAAAAgBQAAAAAAgBIABAEIAAACIABgDIABgDIgCABIABgCIAAAAIADgFIABgEIAAABQABAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAIgBAAIAAgBIACgEIAAABIACgBIABgBIgBAAIACgBIAAgEIACgGIAAgDIAAgCQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAIAAgCQAAgDAAgDIAAgGIABAAIAAgDIACgHQAAABAAAAQAAAAAAAAQABAAAAAAQAAgBABgBIgBgBIABAAIAAgCIABAAIABgHIACgZQAAAAABgBQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAAAIACgIIgBAAIABgDIgBgDIABACIAAgDIABAAQABgDgBgEIgBACQABgHgBgFIAAABIAAgCIABAAIAAgCIgBAAIgBgBQAAAAAAAAQABAAAAAAQAAgBAAAAQAAgBAAgBIgCgOIACgBIgBgBIAAgCIgBAAIAAACIAAgFIABAAIAAgBIgBAAIAAgEIgBgDIAAAAIAQgJIAAABIABAAIAHAFIAFAFQADAEAEACQAFADgBABIACAAIAAABIACABIAAAAIAGAFIACABIAAABQAHADAKAKQABACAEACQADACABADIABABIAAgBQALAIAUAUIATAXIADADIAAgBIAGAJIAGAJIAAAAQADADADAHIgBgBQAAAAAAABQAEAGADANIgBgCIABADIgBgBQAAABABABQAAAAAAABQABAAAAAAQAAABABAAIAAABIABACIAAAAIABAEQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAgBIABACQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIABACIgBAAIABACIgBAAIAAAAIAAACIAAgBIgBACQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIgBACIABAAQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIgBABIAAgCIgCgCQgDgOgfgkQgdgmgCACIgCgDQABAAAAgBQAAAAAAAAQgBAAAAgBQgBAAgBgBIgEgDIABAAIgEgDIgBgBIgEgDQgIgJgIgEQAAgCgGgEIABgBIgCAAIgBgDIgBAAIgBAAIAAgCIgJgEIABAAIgCgCQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQgHgEgGgHIgCgBIACACIgDgDIAAAAIgEgCIAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABIAAADQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIAAACIABACIgBAEIAAgBIABAFIAAgBQAAABAAABQAAAAAAAAQAAAAAAAAQgBAAAAgBQAAABAAAAQAAABAAAAQAAABAAAAQABAAAAAAIAAAGIAAABIABAEIgBABIAAAAIAAAAIAAACQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAIABgBIAAADIgBAAIgBAMIAAAGIgCARIAAACIgBAAIgFAOIABAAQAAABAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAIgBAKIgCACQABADgCADIAAgBIgBAEIAAAAIgBAEIgCACIABADIgCACIAAgBIgBACIgDAFIAAAAIgEAJIgBAAIgBADIAAAAIAAACQAAADgEAEIAAAAIgCADQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABIAAgCIgBACIAAAAIgBABQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQgBABAAABQAAAAAAABQgBAAAAABQAAAAgBAAIgCAEIgBAAIAAABQgDAFgBAAIAAACIgEADIAAAAIgBABIAAgBIgEAGIABAAIgGAHIgBADQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgBACIgBAAQgBADgEADIgGAGIABABIgFADIAAAAIgBAAIgBACIAAgBIgBABIAAAAQgBAAAAABQAAABgBAAQAAABgBAAQAAAAgBAAIAAAAIgFAEIAAAAIgCACIABAAIgCAAIgBACIAAgBIgDAEQAAAAgBAAIgDADQAAAAgBAAIgBABIgBACIAAAAIAAABQgBAAAAAAQgBABAAAAQAAAAAAgBQAAAAAAAAIgDACIACAAIgFADIAAgBIgBABIAAgBIgDACQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIAAABIgCABIgEACIgBACIgEABIgGAFIABgBQgEADgDABIABAAIgDABIABAAIgDACQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIgBABIgBABIgBAAIAAABIgCAAIgCABIAAAAIAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAAAAAAAIgDACQADgBgEAAIgGAEQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAABIgDACIgBgBIgDACQABAAAAAAQAAAAAAgBQAAAAgBAAQAAAAgBAAIgCACIABgCIgBABIgCABQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAIgCABIAAAAQgDADgCABIABgCIgBAAIAAABQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgBgBIgCABIAAABIAAgBIgCACIgGACQAAgBABgBQAAAAAAgBQABAAABAAQAAAAABAAgAhFBoIAAAAg");
	this.shape_32.setTransform(-33.1,-116.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_5},{t:this.instance_4},{t:this.shape_1},{t:this.shape}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-219.6,-162.1,439.3,324.3);


// stage content:



(lib.FWW_TilesAll_v01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Damselfly
	this.instance = new lib.damselfly_all("synched",0);
	this.instance.setTransform(-207.8,1099.6,1.203,1.203,70.2,0,0,1.2,-138.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:-37.8,scaleX:1.2,scaleY:1.2,rotation:70,x:-161.3,y:1084.2,startPosition:1},0).wait(1).to({rotation:69.8,x:-0.6,y:1029.1,startPosition:2},0).wait(1).to({rotation:69.7,x:160.1,y:974,startPosition:3},0).wait(1).to({rotation:69.5,x:320.8,y:919,startPosition:0},0).wait(1).to({rotation:69.4,x:481.6,y:863.9,startPosition:1},0).wait(1).to({rotation:69.2,x:642.3,y:808.8,startPosition:2},0).wait(1).to({scaleX:1.21,scaleY:1.21,rotation:69.1,x:803.1,y:753.7,startPosition:3},0).wait(1).to({scaleX:1.2,scaleY:1.2,rotation:68.9,x:963.8,y:698.7,startPosition:0},0).wait(1).to({rotation:68.8,x:1124.5,y:643.6,startPosition:1},0).wait(1).to({rotation:68.6,x:1285.2,y:588.5,startPosition:2},0).wait(1).to({rotation:68.5,x:1446,y:533.4,startPosition:3},0).wait(1).to({scaleX:1.21,scaleY:1.21,rotation:68.3,x:1606.7,y:478.3,startPosition:0},0).wait(1).to({scaleX:1.2,scaleY:1.2,rotation:30.5,x:1697.2,y:444.7,startPosition:1},0).wait(1).to({scaleX:1.21,scaleY:1.21,rotation:-7.3,x:1739.6,y:370.3,startPosition:2},0).wait(1).to({scaleX:1.2,scaleY:1.2,rotation:-45.2,x:1715.2,y:300.1,startPosition:3},0).wait(1).to({rotation:-83,x:1648,y:221.4,startPosition:0},0).wait(1).to({scaleX:1.21,scaleY:1.21,rotation:-87,x:1546.2,y:216.9,startPosition:1},0).wait(1).to({scaleX:1.2,scaleY:1.2,rotation:-91.1,x:1444.4,y:219.5,startPosition:2},0).wait(1).to({rotation:-95.1,x:1342.6,y:227.5,startPosition:3},0).wait(1).to({rotation:-99.1,x:1241.2,y:240.2,startPosition:0},0).wait(1).to({rotation:-103.1,x:1140.5,y:258.9,startPosition:1},0).wait(1).to({rotation:-102.2,x:973.2,y:279.9,startPosition:2},0).wait(1).to({rotation:-101.3,x:804.7,y:291.6,startPosition:3},0).wait(1).to({rotation:-100.4,x:636.5,y:307.4,startPosition:0},0).wait(1).to({rotation:-99.5,x:469.1,y:331.2,startPosition:1},0).wait(1).to({rotation:-98.6,x:303.8,y:367,startPosition:2},0).wait(1).to({rotation:-97.7,x:142.9,y:420.1,startPosition:3},0).wait(1).to({scaleX:1.21,scaleY:1.21,rotation:-101,x:-9.1,y:488.8,startPosition:0},0).wait(1).to({scaleX:1.2,scaleY:1.2,rotation:-104.4,x:-138.4,y:591.6,startPosition:1},0).wait(1).to({rotation:-107.7,x:-224,y:730.2,startPosition:2},0).wait(1).to({rotation:-111.1,x:-254,y:890.2,startPosition:3},0).wait(1).to({rotation:-84.6,x:365.2,y:1583.1,startPosition:0},0).wait(1).to({rotation:-58.1,x:1314.5,y:1642,startPosition:1},0).wait(1).to({rotation:-31.6,x:2214.4,y:1443.5,startPosition:2},0).wait(1).to({rotation:-38.4,x:2344.6,y:1344.4,startPosition:3},0).wait(1).to({rotation:-45.2,x:2400.6,y:1195.8,startPosition:0},0).wait(1).to({rotation:-52,x:2358,y:1045.9,startPosition:1},0).wait(1).to({rotation:-58.8,x:2272.5,y:917.1,startPosition:2},0).wait(1).to({rotation:-65.6,x:2169.3,y:802.2,startPosition:3},0).wait(1).to({rotation:-72.4,x:2056.6,y:696,startPosition:0},0).wait(1).to({rotation:-79.2,x:1940.4,y:591.6,startPosition:1},0).wait(1).to({x:1875.9,y:543.6,startPosition:2},0).wait(1).to({rotation:-79.3,x:1805.9,y:503.8,startPosition:3},0).wait(1).to({x:1733.5,y:468.5,startPosition:0},0).wait(1).to({x:1659,y:437.7,startPosition:1},0).wait(1).to({rotation:-79.4,x:1582.6,y:412.3,startPosition:2},0).wait(1).to({x:1504.1,y:394.6,startPosition:3},0).wait(1).to({x:1423.8,y:389.5,startPosition:0},0).wait(1).to({rotation:-79.5,x:1346,y:408.2,startPosition:1},0).wait(1).to({rotation:-81.4,x:1259.4,y:420.4,startPosition:2},0).wait(1).to({scaleX:1.21,scaleY:1.21,rotation:-83.3,x:1171.5,y:402,startPosition:3},0).wait(1).to({rotation:-85.3,x:1086.5,y:370.2,startPosition:0},0).wait(1).to({scaleX:1.2,scaleY:1.2,rotation:-87.2,x:1003.8,y:331.7,startPosition:1},0).wait(1).to({rotation:-89.1,x:922.5,y:289.8,startPosition:2},0).wait(1).to({rotation:-91.1,x:841.1,y:247.8,startPosition:3},0).wait(1).to({rotation:-93,x:755.5,y:220.4,startPosition:0},0).wait(1).to({scaleX:1.21,scaleY:1.21,rotation:-95,x:658.5,y:273,startPosition:1},0).wait(1).to({scaleX:1.2,scaleY:1.2,rotation:-97,x:561.9,y:326.8,startPosition:2},0).wait(1).to({rotation:-99,x:464.9,y:379.9,startPosition:3},0).wait(1).to({scaleX:1.21,scaleY:1.21,rotation:-101,x:367.1,y:432.2,startPosition:0},0).wait(1).to({scaleX:1.2,scaleY:1.2,rotation:-103.1,x:268.6,y:483.4,startPosition:1},0).wait(1).to({rotation:-105.1,x:169,y:533.1,startPosition:2},0).wait(1).to({rotation:-107.1,x:68.2,y:580.6,startPosition:3},0).wait(1).to({rotation:-109.1,x:-34.2,y:625.3,startPosition:0},0).wait(1).to({rotation:-111.1,x:-139,y:665.2,startPosition:1},0).wait(1).to({rotation:-113.1,x:-247.3,y:695.3,startPosition:2},0).wait(1).to({rotation:-115.1,x:-358.3,y:687,startPosition:3},0).wait(1).to({rotation:-84.8,x:-404.2,y:645.1,startPosition:0},0).wait(1).to({rotation:-54.5,x:-468.5,y:593.2,startPosition:1},0).wait(1).to({rotation:-24.2,x:-540.8,y:516.5,startPosition:2},0).wait(1).to({rotation:6.1,x:-598.5,y:407.6,startPosition:3},0).wait(1).to({rotation:36.4,x:-614.3,y:274.1,startPosition:0},0).wait(1).to({rotation:66.7,x:-573.4,y:137,startPosition:1},0).wait(1).to({rotation:97.1,x:-479.9,y:14.6,startPosition:2},0).wait(1).to({rotation:127.4,x:-342.6,y:-81.9,startPosition:3},0).wait(1).to({rotation:126.8,x:-242.9,y:-44,startPosition:0},0).wait(1).to({rotation:126.2,x:-143.1,y:-6.1,startPosition:1},0).wait(1).to({rotation:125.6,x:-43.1,y:31.8,startPosition:2},0).wait(1).to({rotation:125.1,x:56.7,y:69.6,startPosition:3},0).wait(1).to({rotation:124.5,x:156.7,y:107.3,startPosition:0},0).wait(1).to({rotation:123.9,x:256.6,y:145.1,startPosition:1},0).wait(1).to({rotation:123.3,x:356.6,y:182.8,startPosition:2},0).wait(1).to({rotation:122.7,x:456.6,y:220.4,startPosition:3},0).wait(1).to({rotation:122.2,x:556.7,y:258,startPosition:0},0).wait(1).to({rotation:121.6,x:656.8,y:295.5,startPosition:1},0).wait(1).to({rotation:121,x:756.9,y:332.9,startPosition:2},0).wait(1).to({rotation:120.4,x:857.1,y:370.4,startPosition:3},0).wait(1).to({rotation:119.8,x:957.3,y:407.6,startPosition:0},0).wait(1).to({rotation:119.3,x:1057.6,y:444.9,startPosition:1},0).wait(1).to({rotation:118.7,x:1157.9,y:482,startPosition:2},0).wait(1).to({rotation:118.1,x:1258.2,y:519,startPosition:3},0).wait(1).to({rotation:117.5,x:1358.6,y:555.9,startPosition:0},0).wait(1).to({rotation:117,x:1459.1,y:592.7,startPosition:1},0).wait(1).to({rotation:116.4,x:1559.7,y:629.3,startPosition:2},0).wait(1).to({rotation:115.8,x:1660.3,y:665.5,startPosition:3},0).wait(1).to({rotation:115.2,x:1761,y:701.6,startPosition:0},0).wait(1).to({rotation:114.6,x:1862,y:737.4,startPosition:1},0).wait(1).to({rotation:114.1,x:1963,y:772.5,startPosition:2},0).wait(1).to({rotation:113.5,x:2064.4,y:806.9,startPosition:3},0).wait(1).to({rotation:112.9,x:2166.3,y:839.6,startPosition:0},0).wait(1).to({rotation:112.3,x:2257,y:854.3,startPosition:1},0).to({_off:true},1).wait(138));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(411.3,1410.5,377.4,510.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;