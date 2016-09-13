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


(lib.Path_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4,0,0,4).p("AFtheQg0ALiGgBQh/AAg+AQQhIAShsA5QiABGguAR");
	this.shape.setTransform(37.2,11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,0,77,23);


(lib.Path_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#BCD7DD","#CFE1E6","#D6E5E9","#C1DBE4","#9BC8DB","#8DC1D7"],[0.004,0.278,0.471,0.6,0.863,1],0,0,0,0,0,38.5).s().p("AkPEQQhwhxgBifQABieBwhwQBxhyCeAAQCfAABwByQBxBwABCeQgBCfhxBxQhwBxifAAQieAAhxhxg");
	this.shape.setTransform(38.5,38.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,77,77);


(lib.Path_12_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFEEE","#F3F4E9","#D7DADE","#DCD8D4"],[0.004,0.286,0.749,0.875],0,-0.5,0,0,-0.5,93.1).s().p("AJmRLQhFgEhZicQgxhViFktQhzkChBhWQmkoshFhUQjOj8hxguQAjgNAlgeQBIg8AGhXQAHhYgog8QgNgTgNgMQCWBvCwCZQFwFACPDhQCTDmCZGcQBiEHA0DBQAIAbAVBCQASA8ADAlQAJBkhhAAIgMAAg");
	this.shape.setTransform(71.5,111.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1.2,143.1,219.9);


(lib.Path_11_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFEEE","#F3F4E9","#D7DADE","#DCD8D4"],[0.004,0.286,0.749,0.875],-0.6,0,0,-0.6,0,72.3).s().p("AF3GkQhHg/hphQQhhhJhLgyQiVhkjcjIQhVhOgpgeQg7grgsgHQAZgIAagQQA0ggABgoQACgigYgXQBeA3BtBDQEMClBzBcQB/BjCTCWQCDCFAYArQAGAMATAcQAQAaAEARQAKAvhRAFIgEAAQgyAAhHg+gAoSnhQAQAFAQAMIAJAHIgpgYg");
	this.shape.setTransform(57.3,48.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,114.5,96.5);


(lib.Path_10_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFEEE","#F3F4E9","#D7DADE","#DCD8D4"],[0.004,0.286,0.749,0.875],-0.2,0,0,-0.2,0,47).s().p("ADrECQgugnhBgxQg+gvgvgeQhdg/iKh6QhlhbgsgIQARgEARgJQAigTACgYQACgUgPgOQA8AiBFAqQCqBoBHA5QBQA8BcBdQBRBSAPAaIAbAyQAGAdg1ABIAAAAQgiAAgtgngAlLkoQALADAKAHIAGAFIgbgPg");
	this.shape.setTransform(36.3,29.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,72.5,59.6);


(lib.Path_9_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFEEE","#F3F4E9","#D7DADE","#DCD8D4"],[0.004,0.286,0.749,0.875],-0.2,0,0,-0.2,0,49.8).s().p("AErECQhJhDgqglQhNhEgogSQhpgwi+hvQiahcgrgIQARgEARgJQAjgSACgYQAAgNgFgKQAzAnA9ApQCkByBWAfQDPBGBrBbQAwAqAhA6QAbAxAAACQAGAcg1ABIgCAAQghAAgsgngAmKkoQALADAKAHQAJAIAFAJIgjgbg");
	this.shape.setTransform(42.6,29.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85.3,59.6);


(lib.Path_8_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFEEE","#F3F4E9","#D7DADE","#DCD8D4"],[0.004,0.286,0.749,0.875],-1,0,0,-1,0,49.8).s().p("AF9BCQhigUg3gKQhlgSgsAFQhxAOjdABQi0AAgoAQQAMgMAKgRQAUgfgLgWQgFgLgKgGQBAAHBJAFQDHAMBbgTQDWgtCJAXQBBALA4AhIAyAbQAUAVgtAdQgSALgeAAQgSAAgWgEgAnzgyQAKgDANABQAMACAJAFIgsgFg");
	this.shape.setTransform(50.1,7.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100.1,14.2);


(lib.Path_7_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4,0,0,4).p("AIDmfQgfBFjFBfQhtAygyAYQhXAqgpAeQiUBjhIAzQh/Beg+BbQhABfAAABQgeAzgLA4");
	this.shape.setTransform(53.5,42.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.2,107,89);


(lib.Path_6_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4,0,0,4).p("AHCnPQgaAyhKDxQg+DJg5BDQhMBaj0BqQhCAciBA4QhqAwg7Ap");
	this.shape.setTransform(46.2,47.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,-1.1,94,97);


(lib.Path_6_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFEEE","#F3F4E9","#D7DADE","#DCD8D4"],[0.004,0.286,0.749,0.875],0,0,0,0,0,320.2).s().p("EAMFA7EQgvhkjrihQi/iCinhPQkth/jZhqQmbjKhgiRQgVgfi5j3Qi6j3h/i/Qmjp1hLmpQgsj5gal1QgZljgCluQgCl3AXkJQAakgAyhXQAshLAtiRQAzivAchaQAxifAzhiQBCiBBWhFQBfhLCchgID6iZQCEhVBGhFQBWhVAVhXQAKgqglhkQgPgphGiiQg7iIgXhNQghhvARg9QAqiWBbhfQBphtCEAOQBfAKDPACQC5ALB5BDQDaB4FLDuQGkEtCXC/QCVC7BUDzQA1CbAOB9QAFAqBwDVQBxDZAKBEQAJA4gUBmQgQBSAbA8QAwBpAaBrQAhCGgbA2QgYAxAqCWIAkB4QAUBFAGAgQAPBPAmOoQAlOZAADeQAACjoiQcQiJEIjxHLQitFOgDAmQgGBLADCMQABBGACA3g");
	this.shape.setTransform(200.4,406.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,400.8,812.2);


(lib.Path_5_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4,0,0,4).p("ACPqSQAFB1h1DfQhWCngFAKQgwBjgRBDQgbB2AOC9QASDogFBM");
	this.shape.setTransform(16.5,66);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.9,32.9,134);


(lib.Path_5_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#BBAC8E","#ECD5AA","#F4E7CE"],[0.004,0.498,0.988],0,0,0,0,0,279.6).s().p("EgCAA1jQishSjmjNQhqhfDSoRQAchHCKlDQBWjLALg5QjYgGgOgCQhzgNhdg5QgigUg4gsQg0gogbgOQhZgxh6ApQBcgUBaAvQBRArArBMQAsBNgaA+QgdBGhtAQQiHAVhoh2QhfhsgOiWQgPidBbhTQBphfDTA3QAlAJBsApQBXAhAvAFQBFAIAsglQAzgqAchsQAdhvgsi6Qg8jOgShYQgfgIgxgGQgugGgfgBQAOCZipAYQgvAGhnAAQhhAAgmAHIgBC1QgGBrgdBFQgqBkg6AnQg1Akg0gVQgygVgehBQgghFAChdQAFikBYh+QBTh3CYhNQgch5BWhEQAZgVA9ghQBAgjAcgVQArggAjgxQAkg0AKgzQAah+iPglQgwA8hTAgQg6AWhlAQQASArABBIQAABIgSBJQgrCvhiAYQAJBLgiA9QgVAnhDBEQglAnhEA4QhBA1gZAbIgNAOIgEAhQgHA2gdE/IgEgRQgWhZgChIQgEiLBIhZQAejVA0iAQAJgYAugrQAoglACgcQABgZgkgwQgog3gFgYQgWhmANhWQARhrBHgtQgehGAag6QArhDATgtQAXhEAXgnQAig6AxgQQhCAKhJgJQhbgLhEgkQiDhGAIh9QAFhVBXimQBKiPBug2QBWgrC0gNQglgThIhRQg6hBg9gJQifgXiJDCQg3BNgmBfQgjBXgIBGQgIBDAIB8QAMCnAAAnQADD2iEBmQhMiSASjSQAOimBHi/QBfj9B1jOQCVkHCah9QBhhPBngVQBKgQBuAMQCfARAbABQBuACBhgnQgfhehMgpQheglg2gpQiZhyBAhjQA6hZDDghQCfgbFDAaQCfANCCASIkWhQQlHBKi+inQjLiygynLQgajsBzhyQBjhiDCgEQCigDDLA8QCsA0CEBLQFjDJDlDuQDiDrDAFuQBECABJDGIB6FNQAvB2BpDkQBSDLAGCiQADBSgHBwIgNC6QgLDdAtCeIA2CzQAfBoAPBEQApDBgjCrQAChzhBh8Qg9h1hrhlQhohkh7g7Qh/g/hzgFQgVBdADCDQACBNAICYQAECFgRBYQgYBzhCBXQg6BLgVCZQgOBkgCDNQgDDhgJBYQgPClgwBZQgmBFAVC/QANBxApEJQAeDwgVCQQgbDBh3BVQj3Cwg8AlQiYBbh6AOQgZADgaAAQh5AAiEhAgA35aSQgXhvAKh4IABgMQAMAsAcBgQA8DIgKB2Qg4hsgWhrg");
	this.shape.setTransform(185.5,349.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,371,698.3);


(lib.Path_4_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4,0,0,4).p("ADNrsQgCBUgyBnQglBKhPByQhvCkgPAXQhDBqgZBPQgsCMAoDeQALA9AXB6QASBqAABQ");
	this.shape.setTransform(22.7,75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.2,-2,45.1,152);


(lib.Path_4_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#6EA07D","#007D49","#004E29"],[0.016,0.498,1],-91,0,91.1,0).s().p("EgEhA0WQibgHirj8QhniZhOi8Qg4iFgli/QgvjwA8guQA4gsA3ASQAcAIARASIAqA3QApBGAABLQAABdBfDOQBhDSBUBRQBJBFBThZQAZgaAqg9QAsg+ATgVQAxg2AJnOIADlVQABirAGgqIA8mxQAtlagHhlQgDg6glnEQgimpgFhxQgVkHgIidQgOkiArhkQAnhcBqg7QA2geAagPQAqgaAWgcQAxg+gfkFQgbjlg9jGQgriPiKAHQgkABhWASQhSARgrAAQh7AAipiNQiuiSgriZQgqiQBPjHQAghPAog7QAog6AfgLQAxgTA/AHQAgAEAVAIQgGgtAKguQAThdBSgGQBRgHBAA1QAlAfBLBTQA5AygXBaQgLAtgXAjQgfAGgFgLQgDgGAHgXQAHgXgFgKQgIgPgmACQhAACAAAzIABAsQgCAbgQAQQgaAZg8AAQhIAAgvAZQhDAjgPBKQgOBFApAgQAgAZAOAoQAJAUAAAPIAshuQAQgnD0g+QD3hABmAPQBfANCpCoQCKCICACtQBYB4AAFAQAABpgKCQIgOC/QgHB3hAB5QguBYhdByIiOCxQhGBdgNBEQgeCgApIMQAoIUA8CiQAxCJhEEqQglCdhBDaQgUBhguJnQgrJOgCCKQgBA6g/BGQg6BChiA8QhhA7hnAiQhlAhhSAAIgQAAg");
	this.shape.setTransform(91.1,335);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,182.2,670.1);


(lib.Path_3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4,0,0,4).p("AGbjJQhQAsh9A0QiSA5hGAeQkMBsiBB1");
	this.shape.setTransform(42.2,22);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.6,-0.2,86,45);


(lib.Path_3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#61191B","#751A1D","#961C1F"],[0,0.431,1],0,0,0,0,0,24.3).s().p("AkCBnQgMgwAYg5QAVg4AvgzQBqhyB2AFQCNAGA+DAQAuCKhsA8QhKApiIAAQjOAAgdh0g");
	this.shape.setTransform(26.3,22);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52.7,44);


(lib.Path_2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4,0,0,4).p("ANdBqQhKAMhUgfQg8gWhdg5Qh5hJgggQQhYgthIgJQiBgQjLBMQjkBehnAhQiRAthQASQiIAfhagK");
	this.shape.setTransform(88,15.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.8,0,178,31.9);


(lib.Path_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#BCD7DD","#CFE1E6","#D6E5E9","#C1DBE4","#9BC8DB","#8DC1D7"],[0.004,0.278,0.471,0.6,0.863,1],0,0,0,0,0,42).s().p("AknEpQh7h7gBiuQABisB7h7QB7h7CsgBQCtABB8B7QB6B7AACsQAACuh6B7Qh8B6itAAQisAAh7h6g");
	this.shape.setTransform(42,42);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84,84);


(lib.Path_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4,0,0,4).p("AlUhDQBHAQBsAHQA8ADB3AGQDZARBxBZ");
	this.shape.setTransform(34.6,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,0,73,18);


(lib.Path_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#BCD7DD","#CFE1E6","#D6E5E9","#C1DBE4","#9BC8DB","#8DC1D7"],[0.004,0.278,0.471,0.6,0.863,1],0,0,0,0,0,38.5).s().p("AkPEQQhwhxgBifQABieBwhwQBxhyCeAAQCfAABwByQBxBwABCeQgBCfhxBxQhwBxifAAQieAAhxhxg");
	this.shape.setTransform(38.5,38.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,77,77);


(lib.blackout = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E2435").s().p("EhP/A8AMAAAh3/MCf/AAAMAAAB3/g");
	this.shape.setTransform(0,0,1.212,1.057);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-620.6,-405.7,1241.2,811.4);


(lib.bosminaarm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_15();
	this.instance.setTransform(117.5,68.1,1,1,0,0,0,37.2,11.5);
	this.instance.alpha = 0.559;

	this.instance_1 = new lib.Path_1_3();
	this.instance_1.setTransform(166.6,35.6,1,1,0,0,0,35,9);
	this.instance_1.alpha = 0.559;

	this.instance_2 = new lib.Path_2_3();
	this.instance_2.setTransform(87.1,46.9,1,1,0,0,0,87.2,15.9);
	this.instance_2.alpha = 0.559;

	this.instance_3 = new lib.Path_3_3();
	this.instance_3.setTransform(141.1,82,1,1,0,0,0,42.4,22.2);
	this.instance_3.alpha = 0.559;

	this.instance_4 = new lib.Path_4_3();
	this.instance_4.setTransform(242.5,193.6,1,1,0,0,0,22.7,74);
	this.instance_4.alpha = 0.559;

	this.instance_5 = new lib.Path_5_3();
	this.instance_5.setTransform(204.5,157.5,1,1,0,0,0,16.4,65);
	this.instance_5.alpha = 0.559;

	this.instance_6 = new lib.Path_6_3();
	this.instance_6.setTransform(215,132.1,1,1,0,0,0,46.1,47.4);
	this.instance_6.alpha = 0.559;

	this.instance_7 = new lib.Path_7_2();
	this.instance_7.setTransform(167.5,92.1,1,1,0,0,0,53.5,43.3);
	this.instance_7.alpha = 0.559;

	this.instance_8 = new lib.Path_8_2();
	this.instance_8.setTransform(94.9,7.1,1,1,0,0,0,50.1,7.1);
	this.instance_8.alpha = 0.27;

	this.instance_9 = new lib.Path_9_2();
	this.instance_9.setTransform(182.3,29.8,1,1,0,0,0,42.6,29.8);
	this.instance_9.alpha = 0.27;

	this.instance_10 = new lib.Path_10_2();
	this.instance_10.setTransform(248.4,66.4,1,1,0,0,0,36.2,29.8);
	this.instance_10.alpha = 0.27;

	this.instance_11 = new lib.Path_11_2();
	this.instance_11.setTransform(311.3,119.1,1,1,0,0,0,57.2,48.2);
	this.instance_11.alpha = 0.27;

	this.instance_12 = new lib.Path_12_2();
	this.instance_12.setTransform(413.5,236.7,1,1,0,0,0,71.5,111.1);
	this.instance_12.alpha = 0.27;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,0,487.1,346.6);


(lib.bosmina = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.Path_14();
	this.instance.setTransform(136.3,222.3,1,1,0,0,0,38.5,38.5);
	this.instance.alpha = 0.922;

	this.instance_1 = new lib.Path_1_2();
	this.instance_1.setTransform(148.3,145.3,1,1,0,0,0,38.5,38.5);
	this.instance_1.alpha = 0.922;

	this.instance_2 = new lib.Path_2_2();
	this.instance_2.setTransform(89.3,190.8,1,1,0,0,0,42,42);
	this.instance_2.alpha = 0.922;

	this.instance_3 = new lib.Path_3_2();
	this.instance_3.setTransform(-49.5,-303.3,1,1,0,0,0,26.3,21.9);
	this.instance_3.alpha = 0.809;

	this.instance_4 = new lib.Path_4_2();
	this.instance_4.setTransform(38.1,18.8,1,1,0,0,0,91.1,335.1);
	this.instance_4.alpha = 0.789;

	this.instance_5 = new lib.Path_5_2();
	this.instance_5.setTransform(3.6,15.8,1,1,0,0,0,185.5,349.2);
	this.instance_5.alpha = 0.73;

	this.instance_6 = new lib.Path_6_2();
	this.instance_6.setTransform(1.9,72.7,1,1,0,0,0,200.4,406.1);
	this.instance_6.alpha = 0.27;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(15));

	// bosmina-arm copy 2
	this.instance_7 = new lib.bosminaarm("synched",0);
	this.instance_7.setTransform(94.2,-242.2,0.818,1,0,0,180,468.6,270.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:242.4,regY:173.3,x:279.2,y:-339},0).wait(1).to({regX:468.4,regY:270.1,x:94.2,y:-242.1},0).wait(1).to({regX:242.4,regY:173.3,skewX:8.4,skewY:188.4,x:291.1,y:-311},0).wait(1).to({skewX:16.7,skewY:196.7,x:299,y:-281.6},0).wait(1).to({skewX:4.3,skewY:184.3,x:285.7,y:-324.9},0).wait(1).to({skewX:-8.2,skewY:171.8,x:263.3,y:-364.2},0).wait(1).to({skewX:-20.6,skewY:159.4,x:233.1,y:-397.8},0).wait(1).to({skewX:-4,skewY:176,x:271.8,y:-351.7},0).wait(1).to({skewX:12.6,skewY:192.6,x:295.7,y:-296.4},0).wait(1).to({skewX:29.2,skewY:209.2,x:302.7,y:-236.6},0).wait(1).to({skewX:21.9,skewY:201.9,x:301.8,y:-263.1},0).wait(1).to({skewX:14.6,skewY:194.6,x:297.4,y:-289.3},0).wait(1).to({skewX:7.3,skewY:187.3,x:289.8,y:-314.7},0).wait(1).to({skewX:0,skewY:180,x:279,y:-339},0).wait(1));

	// bosmina-arm copy 3
	this.instance_8 = new lib.bosminaarm("synched",0);
	this.instance_8.setTransform(120.7,-232.2,0.595,1.002,0,18.4,-166.4,467.7,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:242.4,regY:173.3,scaleX:0.6,scaleY:1,skewX:5.6,skewY:-179.4,x:264.3,y:-326.8},0).wait(1).to({skewX:-7.6,skewY:-192.6,x:238.9,y:-357},0).wait(1).to({skewX:-20.7,skewY:-205.7,x:207.4,y:-380.7},0).wait(1).to({skewX:12.8,skewY:-172.2,x:274.9,y:-308.1},0).wait(1).to({skewX:46.3,skewY:-138.7,x:291.2,y:-210.3},0).wait(1).to({skewX:79.8,skewY:-105.2,x:250.8,y:-119.8},0).wait(1).to({skewX:45.7,skewY:-139.3,x:291.5,y:-212.1},0).wait(1).to({skewX:11.6,skewY:-173.4,x:273.4,y:-311.2},0).wait(1).to({skewX:-22.5,skewY:-207.5,x:202.8,y:-383.3},0).wait(1).to({skewX:-14.3,skewY:-199.2,x:223.6,y:-369.9},0).wait(1).to({skewX:-6,skewY:-191,x:242.3,y:-353.8},0).wait(1).to({skewX:2.2,skewY:-182.8,x:258.5,y:-335},0).wait(1).to({skewX:10.5,skewY:-174.5,x:271.8,y:-314.2},0).wait(1).to({skewX:18.7,skewY:-166.3,x:282,y:-291.7},0).wait(1));

	// bosmina-arm copy
	this.instance_9 = new lib.bosminaarm("synched",0);
	this.instance_9.setTransform(-80.1,-162.3,1,1,0,0,0,468.9,270.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:242.4,regY:173.3,x:-306.6,y:-259.1},0).wait(1).to({regX:468.9,regY:270.1,x:-80.1,y:-162.3},0).wait(1).to({regX:242.4,regY:173.3,rotation:-12.4,x:-321.7,y:-206.7},0).wait(1).to({rotation:-24.8,x:-325.5,y:-152.2},0).wait(1).to({rotation:-37.2,x:-317.7,y:-98.1},0).wait(1).to({rotation:-17.8,x:-323.7,y:-179.3},0).wait(1).to({rotation:1.5,x:-301.8,y:-258},0).wait(1).to({rotation:20.9,x:-254.6,y:-324.9},0).wait(1).to({rotation:-1.4,x:-305.8,y:-243.6},0).wait(1).to({rotation:-23.6,x:-323,y:-148.7},0).wait(1).to({rotation:-45.9,x:-303.4,y:-54.1},0).wait(1).to({rotation:-30.6,x:-320.1,y:-116},0).wait(1).to({rotation:-15.3,x:-319.4,y:-180.1},0).wait(1).to({rotation:0,x:-301.5,y:-241.9},0).wait(1));

	// bosmina-arm
	this.instance_10 = new lib.bosminaarm("synched",0);
	this.instance_10.setTransform(-19.8,-171.7,1,1,0,0,0,468.9,270.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:242.4,regY:173.3,rotation:-9.3,x:-258.9,y:-230.6},0).wait(1).to({rotation:-18.6,x:-265.3,y:-191.1},0).wait(1).to({rotation:-27.9,x:-265.2,y:-151.1},0).wait(1).to({rotation:-37.2,x:-258.7,y:-111.8},0).wait(1).to({rotation:-17.8,x:-265,y:-194.4},0).wait(1).to({rotation:1.5,x:-243.6,y:-274.5},0).wait(1).to({rotation:20.9,x:-196.8,y:-342.9},0).wait(1).to({rotation:-1.4,x:-248.5,y:-263},0).wait(1).to({rotation:-23.6,x:-266.1,y:-169.5},0).wait(1).to({rotation:-45.9,x:-246.9,y:-76.3},0).wait(1).to({rotation:-30.6,x:-264,y:-139.6},0).wait(1).to({rotation:-15.3,x:-263.8,y:-205.2},0).wait(1).to({rotation:0,x:-246.3,y:-268.5},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-551,-512.3,1030.4,991.1);


// stage content:



(lib.FWW_TilesAll_v01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Bosmina
	this.instance = new lib.bosmina("synched",0);
	this.instance.setTransform(-159.4,1198.2,0.491,0.491,59.9,0,0,0,0.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).wait(1).to({regX:-29,regY:-75.6,scaleX:0.49,scaleY:0.49,x:-73.6,y:1124.4,startPosition:1},0).wait(1).to({rotation:59.8,x:-13.1,y:1081.7,startPosition:2},0).wait(1).to({rotation:59.7,x:47.4,y:1039.1,startPosition:3},0).wait(1).to({rotation:59.6,x:107.9,y:996.4,startPosition:4},0).wait(1).to({x:168.4,y:953.7,startPosition:5},0).wait(1).to({rotation:59.5,x:228.9,y:911,startPosition:6},0).wait(1).to({rotation:59.4,x:289.4,y:868.4,startPosition:7},0).wait(1).to({rotation:59.3,x:349.9,y:825.7,startPosition:8},0).wait(1).to({rotation:59.2,x:410.4,y:783,startPosition:9},0).wait(1).to({rotation:59.1,x:415.5,y:771.5,startPosition:10},0).wait(1).to({x:420.5,y:759.9,startPosition:11},0).wait(1).to({rotation:59,x:425.6,y:748.2,startPosition:12},0).wait(1).to({rotation:58.9,x:430.7,y:736.7,startPosition:13},0).wait(1).to({rotation:58.8,x:435.7,y:725.1,startPosition:14},0).wait(1).to({rotation:58.7,x:440.8,y:713.4,startPosition:0},0).wait(1).to({x:445.8,y:701.8,startPosition:1},0).wait(1).to({rotation:58.6,x:450.9,y:690.2,startPosition:2},0).wait(1).to({rotation:58.5,x:503.8,y:663.3,startPosition:3},0).wait(1).to({rotation:58.4,x:556.7,y:636.3,startPosition:4},0).wait(1).to({rotation:58.3,x:609.6,y:609.3,startPosition:5},0).wait(1).to({x:662.5,y:582.4,startPosition:6},0).wait(1).to({rotation:58.2,x:715.4,y:555.5,startPosition:7},0).wait(1).to({rotation:58.1,x:768.3,y:528.5,startPosition:8},0).wait(1).to({rotation:58,x:821.1,y:501.5,startPosition:9},0).wait(1).to({rotation:57.9,x:874,y:474.5,startPosition:10},0).wait(1).to({rotation:57.8,x:926.9,y:447.6,startPosition:11},0).wait(1).to({x:979.8,y:420.6,startPosition:12},0).wait(1).to({rotation:57.7,x:1032.7,y:393.6,startPosition:13},0).wait(1).to({rotation:57.6,x:1085.6,y:366.7,startPosition:14},0).wait(1).to({rotation:57.5,x:1138.5,y:339.7,startPosition:0},0).wait(1).to({rotation:57.4,x:1142.8,y:340.7,startPosition:1},0).wait(1).to({x:1147,y:341.6,startPosition:2},0).wait(1).to({rotation:57.3,x:1151.3,y:342.5,startPosition:3},0).wait(1).to({rotation:57.2,x:1155.5,y:343.4,startPosition:4},0).wait(1).to({rotation:57.1,x:1159.8,y:344.4,startPosition:5},0).wait(1).to({rotation:57,x:1164.1,y:345.3,startPosition:6},0).wait(1).to({x:1168.3,y:346.2,startPosition:7},0).wait(1).to({rotation:56.9,x:1172.6,y:347.1,startPosition:8},0).wait(1).to({rotation:56.8,x:1176.8,y:348.1,startPosition:9},0).wait(1).to({rotation:56.7,x:1181.1,y:349,startPosition:10},0).wait(1).to({rotation:56.6,x:1185.4,y:350,startPosition:11},0).wait(1).to({rotation:56.5,x:1189.7,y:350.9,startPosition:12},0).wait(1).to({x:1193.9,y:351.8,startPosition:13},0).wait(1).to({rotation:56.4,x:1198.2,y:352.7,startPosition:14},0).wait(1).to({rotation:56.3,x:1202.4,y:353.7,startPosition:0},0).wait(1).to({rotation:56.2,x:1206.6,y:354.6,startPosition:1},0).wait(1).to({rotation:56.1,x:1210.9,y:355.6,startPosition:2},0).wait(1).to({x:1215.2,y:356.5,startPosition:3},0).wait(1).to({rotation:56,x:1219.5,y:357.4,startPosition:4},0).wait(1).to({rotation:55.9,x:1223.7,y:358.3,startPosition:5},0).wait(1).to({rotation:55.8,x:1228,y:359.2,startPosition:6},0).wait(1).to({rotation:55.7,x:1232.2,y:360.2,startPosition:7},0).wait(1).to({x:1236.5,y:361.1,startPosition:8},0).wait(1).to({rotation:55.6,x:1240.8,y:362,startPosition:9},0).wait(1).to({rotation:55.5,x:1245,y:363,startPosition:10},0).wait(1).to({rotation:55.4,x:1249.3,y:363.9,startPosition:11},0).wait(1).to({rotation:55.3,x:1253.6,y:364.8,startPosition:12},0).wait(1).to({rotation:55.2,x:1257.8,y:365.8,startPosition:13},0).wait(1).to({x:1262.1,y:366.7,startPosition:14},0).wait(1).to({rotation:55.1,x:1266.3,y:367.6,startPosition:0},0).wait(1).to({rotation:55,x:1270.5,y:368.5,startPosition:1},0).wait(1).to({rotation:54.9,x:1274.8,y:369.4,startPosition:2},0).wait(1).to({rotation:54.8,x:1279.1,y:370.4,startPosition:3},0).wait(1).to({x:1283.4,y:371.4,startPosition:4},0).wait(1).to({rotation:54.7,x:1287.6,y:372.3,startPosition:5},0).wait(1).to({rotation:54.6,x:1291.9,y:373.2,startPosition:6},0).wait(1).to({rotation:54.5,x:1296.1,y:374.1,startPosition:7},0).wait(1).to({rotation:54.4,x:1300.4,y:375.1,startPosition:8},0).wait(1).to({rotation:54.3,x:1304.6,y:376,startPosition:9},0).wait(1).to({x:1308.9,y:376.9,startPosition:10},0).wait(1).to({rotation:54.2,x:1313.1,y:377.9,startPosition:11},0).wait(1).to({rotation:54.1,x:1317.4,y:378.8,startPosition:12},0).wait(1).to({rotation:54,x:1321.7,y:379.7,startPosition:13},0).wait(1).to({rotation:53.9,x:1325.9,y:380.6,startPosition:14},0).wait(1).to({x:1330.2,y:381.6,startPosition:0},0).wait(1).to({rotation:53.8,x:1334.4,y:382.5,startPosition:1},0).wait(1).to({rotation:53.7,x:1338.7,y:383.5,startPosition:2},0).wait(1).to({rotation:47.4,x:1414,y:326.5,startPosition:3},0).wait(1).to({rotation:41.1,x:1489.2,y:270,startPosition:4},0).wait(1).to({rotation:34.8,x:1564.1,y:213.9,startPosition:5},0).wait(1).to({rotation:28.5,x:1638.9,y:158.3,startPosition:6},0).wait(1).to({rotation:22.1,x:1728.6,y:29.3,startPosition:7},0).wait(1).to({rotation:15.8,x:1818.3,y:-99.1,startPosition:8},0).wait(1).to({rotation:9.5,x:1908,y:-227,startPosition:9},0).wait(1).to({rotation:3.2,x:1997.8,y:-354.5,startPosition:10},0).wait(1).to({startPosition:11},0).to({_off:true},1).wait(187));

	// darkening
	this.instance_1 = new lib.blackout("synched",0);
	this.instance_1.setTransform(959.9,552.7,1.637,1.446,0,0,0,0.1,0.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0,regY:0,x:959.7,y:552.5,alpha:0.074},0).wait(1).to({alpha:0.149},0).wait(1).to({alpha:0.223},0).wait(1).to({alpha:0.298},0).wait(1).to({alpha:0.372},0).wait(1).to({alpha:0.447},0).wait(1).to({alpha:0.521},0).wait(1).to({alpha:0.596},0).wait(1).to({alpha:0.67},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.609},0).wait(1).to({alpha:0.548},0).wait(1).to({alpha:0.487},0).wait(1).to({alpha:0.426},0).wait(1).to({alpha:0.365},0).wait(1).to({alpha:0.305},0).wait(1).to({alpha:0.244},0).wait(1).to({alpha:0.183},0).wait(1).to({alpha:0.122},0).wait(1).to({alpha:0.061},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(176));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(903.8,505.9,2031.9,1173.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;