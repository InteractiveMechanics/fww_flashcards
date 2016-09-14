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


(lib.Path_38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0C0D10").s().p("ABRN4QgqgPg4ggIhsg9QAEAMAFAiQAEAgAEAJQhYhKhviZQh1ihhRilQhdi8gPiDQgSiZBbg5QAjgWgSg2QgghLgQgxQhDjKCmi9QAyg4DlgbQBygNBngCQBmAAA8A+QAvAxAfBoQASA+AfCIQAfB7AqBHQBgCQAMAVQA6BjARBSQAbBiANBzQASCTgXA6QgZgFgugSIhNgdQgNA2AHBXIAKCIQAABJgdAqQgjA1hYAYQg/AVg7AAQg2AAgzgRg");
	this.shape.setTransform(61.8,90.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,123.6,181.2);


(lib.face = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTAUQgKgIABgMQgBgLAKgJQAIgJALABQAMgBAJAJQAJAJAAALQAAAMgJAIQgJAJgMAAQgLAAgIgJg");
	this.shape.setTransform(104.5,19.4,0.395,0.395);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#FDF4CC","#FCEA9F","#FAE279","#F9DC5C","#F9D848","#F8D53B","#F8D437"],[0,0.141,0.286,0.431,0.576,0.722,0.863,1],0,0,0,0,0,6.7).s().p("AguAvQgUgTAAgcQAAgaAUgUQATgUAbAAQAbAAAUAUQAUAUAAAaQAAAcgUATQgUAUgbAAQgaAAgUgUg");
	this.shape_1.setTransform(104.5,19.4,0.395,0.395);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C0D10").s().p("AhMA9Ig3geQAHglAeggQAdggAngLQAcgKAwAQQA7ATAWAAQANBRhOApQglAUggAAQgmAAgjgZg");
	this.shape_2.setTransform(104.7,19.1,0.395,0.395);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(img.NewPatternSwatch2, null, new cjs.Matrix2D(1.083,0,0,1.083,1432.1,1310.4)).s().p("AonCaQgEgTApgoQAVgTAVgRQAVgHAngUQApgUATgIQAtgQBegeQBcgeAtgSQBaglAdgKQBCgVA+gBQCTgBBxAWQAMACAtAGQAqAHALAOQAaAhghAHQgKACgxgBIAZAFQgNAhhTAJQgaAChcAAQh8AAiNAeQhAAOhUAaIiVAvQhYAhgwANQg2AQgoAAQgZAAgUgGg");
	this.shape_3.setTransform(100,6.3,0.395,0.395);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CF421C").ss(2,0,0,4).p("A2BBPMAsDgCd");
	this.shape_4.setTransform(55.7,28.4,0.395,0.395);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D4840B").s().p("AwXD3QirgShxglQg5gTgWgPQEMhhBLgVQA4gQHvhjQHthlAngEQA2gGGYhLIA2AAIBXBCQBpBDBXAHQBmAIEZA8QEfA7hcAAQnsAAiWBxQgvAjgHAqQgEAVAGAOQijgVjsAFQiOADktATQkyAUiYADIh0ACQi2AAiQgPg");
	this.shape_5.setTransform(55.8,25.2,0.395,0.395);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0C0D10").s().p("AJOC9QsZv2g8goQgegUASARIA7A6QBmBnhHAAQgTAAgygTIhignQiFgzghAZQgrAhhPATQhPATgwgMQghgIgqgvQgtgygfgKQgsgPhqAAQhdAAg4AJQgfAGhCARQhKAUg3ALQhIAPhMgJQgtgGhWgVQgGgOAGgUQALgoA1giQBng/D2hfQEyh1CMAHQCQAHCrBBQCBAwByBEQBKArBqBqQA8A7BxB3QASASLiM0QLBMRDZDDQihhYs7uGQmWm7iZimQj8kVgagJQHHI7IqLnQEVF1C6ECQmCn0mNn8g");
	this.shape_6.setTransform(145,47.3,0.395,0.395);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,214.2,94.7);


(lib.bodycopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A09FB8").s().p("AJKIGQg9g5kPjoQkBjfgCABQnymkhghZQhhhYhthzQB0BfBoBdQBfBZHwGmQABgBEEDeQEODmA/A7QBeBWBwBzQhthXhvhkg");
	this.shape.setTransform(155.1,48.1,0.395,0.395);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A09FB8").s().p("AM8JgQg0hEhihuQh9iMhyhsQhqhnh9hrIhphYQijiIjAiJQjViZkOimQiqhoiYhhQBjAyA9AiQBOArBeA6QBTAyBzBKQCgBpB+BaQB4BVCCBnIBrBWIBpBYQB+BsBqBmQByBtB+COQBiBuA1BEQBEBWAyBLQAmA5A6BgQiEizhih7g");
	this.shape_1.setTransform(144,51,0.395,0.395);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A09FB8").s().p("AH1HjQgcgvg8hSQhLhlhIhPQhChKhPhPIhBhAQABgBjdjOQj4jjgngmQg2g1gpgsQgggjgvg5QBoBfBUBPQAlAlD5DlQDeDNgCADIBCA+QBPBQBDBLQBJBRBKBkQA/BVAaAuQAnBAAaA3QATArAZBHQhBh9g8hig");
	this.shape_2.setTransform(130.3,56.5,0.395,0.395);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A09FB8").s().p("AHpH0QhEgxjwjGQjqjEACgDQhuhfhyhwQhNhLhXhfQhDhJgmguQgxg6gkgxQgcgngohAICnDFQAoAwBCBHQBXBfBLBKQBzBwBuBeQgDADDqDEQDuDFBFAyQBdBKBoBeQh2hQhbhJg");
	this.shape_3.setTransform(174.7,73.7,0.395,0.395);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A09FB8").s().p("AN5RWQgpiugSgzQgWhRhdilQhoi3h4iYQhmiKh8iXIhmh5Qiji/i9jHQh9iEidifQhzh0hOhLQh9htgxgxQhPhPgvhaQA0BSBUBNQAzAuB+BrQBLBJB3B4QCcCdB+CFQC9DICjDAIBnB5QB8CWBnCLQB4CZBpC5QBeCmAWBSQAaBLAcCaQAXB7AoBMQgxhNgbh3g");
	this.shape_4.setTransform(257.5,149.6,0.395,0.395);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A09FB8").s().p("AJRKVQgohIg+hlQhXiMhOhtQhJhmhZhyIhKhbIhNhaQhchuhWhcQiTifjLjGQh0hwh1h4QBJA8AvApQA5AzBGBCQA7A5BUBVQB1B1BbBjQBVBcBdBvIBNBaIBKBaQBaBzBJBnQBPBuBWCMQBCBqAlBEQAuBTAgBHQAZA1AkBbIickhg");
	this.shape_5.setTransform(239.9,137.6,0.395,0.395);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A09FB8").s().p("AHxL9QgchDg9h3QhLiUhIh4QhBhvhQh9IhDhkQABgBjelJQjvljguhIQg1hTgnhFQgfg2gthWIC5EZQAsBIDwFiQDfFLgBAAIBCBkQBQB9BCBwQBIB5BMCVQA9B4AcBCQAnBaAaBLQAUA7AaBfQhBimhAiRg");
	this.shape_6.setTransform(239.6,148.8,0.395,0.395);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A09FB8").s().p("AHfSiQAFhTgJh9QgChOgliiQgri7g8ihQg0iOhDikIg4iDQhVjRhmjhQhwj3ihknIjElcQBBBeApBAQAyBOA5BmQChEnBxD5QBmDhBVDRIA4CDQBECkAzCQQA9CiAqC7QAmClACBOQAJB9gKBWQgJBWghBjQAXhkAFhWg");
	this.shape_7.setTransform(219.8,156.9,0.395,0.395);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A09FB8").s().p("AgiEWQAHgeATh+QARh5gCgBQAVjngBguQABgyALg2QAJA8gBAsQABAvgVDpQABAAgSB6QgSB+gHAfQgJAugWA2QADg6AJgug");
	this.shape_8.setTransform(99.5,81.3,0.395,0.395);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A09FB8").s().p("AgNDEQACgUADhaIADhWQACijAAghQAAglAIgkQAJAoAAAhQABAhgCCjIgDBWQgDBbgDAVQgCAjgKAlQgHgpACghg");
	this.shape_9.setTransform(107.1,80,0.395,0.395);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A09FB8").s().p("AAWFGQAEglgCiVQgCiOgCAAQADAAgRiPQgQiUgLgjQgPg/gHg4IAWA2QALAcAIAiQAKAiARCVQARCRgDAAQACAAACCPQACCVgDAmQgCA2gNBDQgGg/ABg7g");
	this.shape_10.setTransform(117,87,0.395,0.395);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A09FB8").s().p("AA3HSQAAg0gTjUQgUjLgCABQABAAgcjMQgfjPgKg2QgOhPgGheQAZBYAOBSQAPBNA1GEQADAAATDLQAUDWgBA0QACAxgCAqQgBAdgFA1QgKhTgDhag");
	this.shape_11.setTransform(121,85.2,0.395,0.395);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A09FB8").s().p("ABaInQgBgxgHhNQgKhmgPhUQgNhNgThaIgQhIQhonHgFhfQgHg8gCgxQgBgnACg7IAbDMQAGBeBnHIIAQBHQATBaAOBOQAPBVAKBmQAHBRABAvQABA9gFAxQgDAmgLA7QAAhcgChzg");
	this.shape_12.setTransform(131.5,94,0.395,0.395);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A09FB8").s().p("AB2ITQAIiugTiFQgKhNgShWIgQhFQAEgChDjlQhAjUgchTQgbhbgUhqQAnBpAbBXQAaBPBADXQBFDmgEACIAQBFQASBYAKBOQAMBRACBoQABBEgDA5QgFA7gIAvQgHAmgOA4g");
	this.shape_13.setTransform(139,102.9,0.395,0.395);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A09FB8").s().p("ABXKiQgKg0gGg6QgGgugakSQgXj1gCAAQgMh2gXiBQgMhKgbhxQgbhxgCgNQgNhAgEguQgDgsADg4QAFAxAJAxIAWBsIAdB+QAbBwAMBMQAOBPAMBdIAKBLQABAAAYD3QAaERAFAtQAOCGAEBNIgVhig");
	this.shape_14.setTransform(151.3,101.3,0.395,0.395);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A09FB8").s().p("AEaMfQgKg7gIhSIgNikQgMiTgLhgQgKhogZhxIgYhcQgJglgUg3QgnhsgzhcQgyhXhQh1QhPhtgQgaQgvhFgdgyQgcgygdhBQAgA1AlA2IBQB0QARAaBOBtQBQB1AzBZQAzBcApBvQAUA4AJAlQADgCAVBeQAZBzALBpQALBiALCSIAOCjIANCNQAGBGAGA5QgRhHgKg2g");
	this.shape_15.setTransform(175.3,108.9,0.395,0.395);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A09FB8").s().p("AFPJcQgKg/gVhaQgeh8gkhiQghhdguhnIgnhRQhAiChSiGQgxhRhShvIhdh/QguhDgagvQgbgxgYg+QAeA1AhAyIBMBuIBdB/QBSBwAxBSQAzBUA2BjQAaAyAQAgIAoBSQAvBnAgBeQAkBiAfB/QAUBXAMBDQALBJAFA9QACAsABBOQgXiggQhdg");
	this.shape_16.setTransform(171,101.1,0.395,0.395);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A09FB8").s().p("AGdKyQgihTislAQink0gEABQADgBi4krQi+k1g1hKQhPh2hPiGQBjCCBLBvQA1BKC/E1QC4EsgDACQAEgCCnE1QCsFBAjBTQAjBLAcBEIA1CEQhCh6hEiRg");
	this.shape_17.setTransform(197.2,117.5,0.395,0.395);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#A09FB8").s().p("AM2TFQg3hUhCh+QgdgyhejMQiCkXgwhlQhMihhsiqIhciIQgkg2g9hPQh4ifh6iEQiEiRicifQiHiJhCg8QhzhugwhHQg/hbgThvQAbBsBCBWQAtA7B4BzQBDA9CHCJQCbCfCGCSQB5CEB5CgQA9BRAlA1IBcCJQBtCrBMCiQAwBjCCEYQBfDLAcAzQBFCDAvBRQAzBYBBBgQhLhfg1hSg");
	this.shape_18.setTransform(207.4,116.7,0.395,0.395);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A09FB8").s().p("AO7ObQhAhEhShdQgfgil6m+Qk9l0gEADQgngrg8hDQh9iEhzhuQh7h2igiAQh9hlhOg0QhlhFhPgzQhFgthig6QBpAzBFAoQBUAvBkBFQBNA0B/BlQCgCBB8B4QB0BtB9CGQA8BBAnAsQAEgDE+F0IGYHgIEPE5QhRhOg6g9g");
	this.shape_19.setTransform(207.4,91.2,0.395,0.395);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A09FB8").s().p("APeOiQkWlcjSj1Qh9iUiVilIh7iDIh7iDQicigiMiEQiWiOjCihQiRh4hhhIQi5iKjgibQCABMBMAxQBkBBB1BXQBiBJCRB4QDCChCWCPQCNCECcCgQBLBPAwA0IB7CEQCVClB+CUQDsEUD8E+QCRC2CgDbQihi+ifjHg");
	this.shape_20.setTransform(192.1,92.2,0.395,0.395);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A09FB8").s().p("AJvNoQgMhEgdhlQgQhBg4h9QhCiUhMh3QhBhshUh6IhFhgIhHhiQhWh6hNhiQiEipjJjWQh9iGhjhxQBOBIAmAlQA6A4BABFQDMDZCDCnQBMBkBXB5IBGBhIBGBgQBUB6BCBtQBMB5BDCVQA4B/AQBBQAdBkAIBKQAIBFgGBZQgDhWgNhHg");
	this.shape_21.setTransform(207.2,128.2,0.395,0.395);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#A09FB8").s().p("AF/OIQgMhDgKhgIgOjAQgNipgQhxQgRh6goiAQgjhqgEADQhFiih2ibQg8hVhwiMQhkh/gSgZQg5hNgjg7Qgig4gjhMQAnBBAqA7QAfAtBBBYQARAYBlB/QBvCMA9BVQB2CcBHCmQAEgEAjBsQAqCCAQB7QARBzAMCoIAPDAIAQCjQAIBKAMBJQgWhPgMhCg");
	this.shape_22.setTransform(187,126.9,0.395,0.395);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A09FB8").s().p("AISO7QgLhLgYhjQgNhHgxh+Qg8ichIh6Qg/hxhTh9IhFhjQhuibh4iuQjxlcgkhaQgvhbgchHQgZhAgahaQAhBSAfBCQAeBAAyBfQAiBZDxFbQB4CtBuCcIBFBjQBTB+BABxQBJB8A8CdQAyCAANBHQAXBjAHBOQAGBDgEBfQgGhcgKhEg");
	this.shape_23.setTransform(169.3,109.2,0.395,0.395);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#A09FB8").s().p("AE7JUQgKhGgRhQQgah8gghfQgehbgqhlIgkhQIgohRQgxhiguhTQhBhxiIjSQhBhjhChyQBQBmBDBkIBTCBQBGBuAvBVQBOCGA7CBIAlBRQArBmAeBcQAgBhAaB8QASBVAJBCQAJBJACA7QACAugDBJQgPiLgOhtg");
	this.shape_24.setTransform(152.8,104.7,0.395,0.395);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A09FB8").s().p("AFuKzQgEhNgPhlQgUiRgghzQgchugvh2IgqheQgQgmgeg4Qg7hxhBhdQg0hIhyiGQhehwgSgcQg2hNgag4Qgbg8gNhKQAVBFAgA6QAZAwA6BRQARAbBfBwQBxCFA1BJQBBBfA8BxQAeA5ARAnIAqBeQAwB4AcBvQAgBzAVCTQAOBmAFBNQAFBUAABGQAAAzgFBZg");
	this.shape_25.setTransform(155.7,100.3,0.395,0.395);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A09FB8").s().p("AB2JyQAKg5AHhaQAKh3gChjQgBhegKhoQgJhUgCAAQgFghgKg0QgUhngahZQgdhVg1h1Qg1hsgKgaQgghEgQgxQgRgygMg+QAUA3AWAzQAQAmAkBNQALAZA1BtQA1B1AeBXQAaBaAUBoQAKA0AFAiQACAAAJBVQALBoABBgQACBjgKB5QgIBbgJA5QgLBGgOA3QgLAsgVBCQAOhUAXiag");
	this.shape_26.setTransform(135.4,99.8,0.395,0.395);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A09FB8").s().p("ADMJ6QACjQgSisQgKhhgUhqQgRhYgCACQgIgigQg0QgfhpgohYQgmhTg/h2IhKiHQgihAgVg3QgRgtgUhFQA1B2A5BqIBJCGQA/B3AnBVQApBYAfBqQAQA2AHAiQADgBARBXQAUBrAKBiQASCogCDWQAABIgFA8QgDAsgIBKQgEh4ABiCg");
	this.shape_27.setTransform(142.3,96.4,0.395,0.395);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#A09FB8").s().p("AC+H6QACgrgJhOQgMhigXhQQgUhKgfhTIgahCQADgBhgjYQhvj0gOgjQgYg5gNgrQgNgogMg1IBQC5QAMAeBxD5QBgDZgDABIAaBCQAfBUAVBKQAXBSAMBjQAKBQgCAsQgBA9gIAuQgGAmgRA2QAMhbAAhsg");
	this.shape_28.setTransform(131.5,85.2,0.395,0.395);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#A09FB8").s().p("AB2HWQACikgKhxQgEhGgMhPIgKg/QgRhlgghsQgih2g+iMQgnhRglhVQAeAsASAdQAWAlAYAwQA/CQAiB0QAUBEARBPIANBBIAKA/QALBRAFBGQAJBxgCClQgBA3gEAqQgEAjgIAzQgEhoAChPg");
	this.shape_29.setTransform(121.8,85.2,0.395,0.395);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#A09FB8").s().p("AAWF6QAIgsADirQADimgFAAQAGgBgXilQgVirgQgpQgPg4gPhTQARAmAKAZQALAfALAoQAOAqAYCsQAXCngHABQAFAAgDCnQgDCsgIAtQgDApgGAhQgFAagKApQgBhQAGg/g");
	this.shape_30.setTransform(111.7,81,0.395,0.395);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#A09FB8").s().p("AAIFAQAGgpALiOQAKiNgEAAQABhFgIhKQgFgygOg6QgIgtgJgaIgnhzQAVAeALAUQAOAZAJAiQAKAaALAuQANA8AFAzQAIBLgBBGQAEAAgKCOQgKCQgHAoQgGA2gQBBQgDg+AGg7g");
	this.shape_31.setTransform(103.6,70.6,0.395,0.395);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["rgba(143,145,148,0)","rgba(144,145,160,0.471)","#9291AE"],[0.141,0.49,1],-38.5,48.4,30.9,-48).s().p("ALyUGQhVgRiKidQhhhvjBkMQkGlvhWhxQl6nvjum4Qjum5Aph9QAUg+BaAmQBXAkCMB8QEoEHF3HwQBWBxESFSQDHD4BaCIQB/C/ApCVQAvCrgzCbQguCMhRAAQgKAAgKgCg");
	this.shape_32.setTransform(227.6,123,0.395,0.395);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["rgba(143,145,148,0)","rgba(145,145,161,0.51)","rgba(146,145,171,0.878)","#9291AE"],[0,0.204,0.475,0.824],-49.8,40.8,37.3,-40).s().p("AHNWKQhQgghoi1QhKiBiIksQi6mdg9iAQkRoviSneQiTnfBBhzQAgg4BQA3QBPA1BwCUQDvE8EOIxQA9B+DLGDQCSEZA+CYQBWDUALCbQANCwhRCOQg/ByhHAAQgSAAgTgIg");
	this.shape_33.setTransform(224.4,151.4,0.395,0.395);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#9291AE","rgba(146,145,171,0.878)","rgba(145,145,161,0.51)","rgba(143,145,148,0)"],[0,0.369,0.647,0.859],-46,25.1,31.8,-24.2).s().p("AERVdQhIgvhPi4Qg4iChekoQiFmZgth9QjForhYnIQhZnIBJhWQBIhXC/FNQC/FNDDItQAsB8CWGFQBsEaAqCTQA8DPgGCLQgGCfhaBrQg8BHg4AAQgcAAgbgRg");
	this.shape_34.setTransform(218,173.1,0.395,0.395);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#9291AE","rgba(146,145,171,0.878)","rgba(145,145,161,0.51)","rgba(143,145,148,0)"],[0,0.369,0.647,0.859],-43.1,12.9,27.6,-11.9).s().p("AA5WvQg9hIgzjQQgkiTg0lDQhHm8gZiKQhxpkgUnZQgUnZBTg5QBUg4CKGLQCJGJBwJmQAaCKBZGuQBBE5AUCfQAcDfgZCEQgdCWhoBFQgvAggpAAQgwAAgngtg");
	this.shape_35.setTransform(205.9,157,0.395,0.395);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#9291AE","rgba(146,145,171,0.878)","rgba(145,145,161,0.51)","rgba(143,145,148,0)"],[0,0.369,0.647,0.859],-43.1,12.9,27.6,-11.9).s().p("AA5WvQg9hJgzjPQgkiTgzlDQhHm7gaiMQhwpjgVnZQgUnaBTg4QBUg4CLGKQCIGKBxJmQAZCIBaGwQBBE5AUCfQAcDfgaCEQgdCWhoBFQgvAggpAAQgwAAgngtg");
	this.shape_36.setTransform(190.5,149.8,0.395,0.395);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#9291AE","rgba(146,145,171,0.878)","rgba(145,145,161,0.51)","rgba(143,145,148,0)"],[0,0.369,0.647,0.859],-43.1,12.9,27.6,-11.9).s().p("AA5WvQg9hJgzjPQgkiUg0lCQhHm8gZiLQhxpjgUnaQgUnZBTg4QBUg4CKGKQCJGKBwJmQAaCLBZGtQBBE5AUCfQAcDegZCEQgdCWhoBGQgvAggpAAQgwAAgngtg");
	this.shape_37.setTransform(175.5,137.6,0.395,0.395);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#9291AE","rgba(146,145,171,0.878)","rgba(145,145,161,0.51)","rgba(143,145,148,0)"],[0,0.369,0.647,0.859],-44.2,11.8,28.4,-10.8).s().p("ABBaTQhAhdgzj2Qgliug2l5QhLoJgaihQh1rNgXogQgXogBVgyQBUgyCPHYQCMHYB2LQQAaCdBdIAQBDFwAVC5QAeEDgaCSQgdCnhoA/QgnAXgiAAQg7AAguhDg");
	this.shape_38.setTransform(158.5,123,0.395,0.395);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#9291AE","rgba(146,145,171,0.878)","rgba(145,145,161,0.51)","rgba(143,145,148,0)"],[0,0.369,0.647,0.859],-48,11.5,32,-10.3).s().p("AgKbnQg8hjgqkDQgdi4glmMQgyoggTitQhVr0ACo6QACo7BYgyQBXgyB6H0QB3H0BUL1QATClBGIbQAzGEAMDCQASEQggCZQglCuhsA+QgmAVghAAQg9AAgrhJg");
	this.shape_39.setTransform(144.2,113.1,0.395,0.395);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#9291AE","rgba(146,145,171,0.878)","rgba(145,145,161,0.51)","rgba(143,145,148,0)"],[0,0.369,0.647,0.859],-48.3,11.5,31.4,-10.6).s().p("AguYyQhAhSgpjkQgdiigglhQgtnmgRiXQhOqdAOoDQAOoDBig4QBig5B8GzQB6GyBOKgQARCUBDHbQAwFXAJCtQAODzgnCOQgsCih5BGQg0AegrAAQg3AAgrg1g");
	this.shape_40.setTransform(128.8,101.6,0.395,0.395);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#9291AE","rgba(146,145,171,0.878)","rgba(145,145,161,0.51)","rgba(143,145,148,0)"],[0,0.369,0.647,0.859],-45.2,11.3,29,-10.7).s().p("AguVaQhAhAgojCQgciJggkvQgsmggRiCQhNo8AOm/QAOnABhg6QBgg6B7FtQB5FsBNI/QARCCBBGRQAwElAKCVQAODRgnB/QgsCQh4BIQg7AkgwAAQgvAAglgmg");
	this.shape_41.setTransform(111.4,101.6,0.395,0.395);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#9291AE","rgba(146,145,171,0.878)","rgba(145,145,161,0.51)","rgba(143,145,148,0)"],[0,0.369,0.647,0.859],-31.8,2.4,30.4,-2.3).s().p("AjpLCQgrgkABhmQABhIAcidQAnjYAJhDQAokpBfjlQBdjmBegZQBegaAnDBQAmDBgoEsQgJBBgSDSQgNCZgTBNQgbBsg5BAQhBBIhyAgQgzANgmAAQgxAAgcgXg");
	this.shape_42.setTransform(83.2,71.6,0.395,0.395);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#9291AE","rgba(146,145,171,0.878)","rgba(145,145,161,0.51)","rgba(143,145,148,0)"],[0,0.369,0.647,0.859],-31.8,2.4,30.4,-2.3).s().p("AjoLCQgsgkAChlQAAhJAdicQAnjZAJhDQAokpBfjlQBdjlBegaQBegaAmDCQAmDBgoEqQgJBCgSDSQgNCZgTBNQgbBsg5BAQhABIhzAgQgzANglAAQgyAAgbgXg");
	this.shape_43.setTransform(91.3,87.5,0.395,0.395);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#9291AE","rgba(146,145,171,0.878)","rgba(145,145,161,0.51)","rgba(143,145,148,0)"],[0,0.369,0.647,0.859],-32.1,2.4,30.1,-2.3).s().p("AjbObQgtgxgBiFQgBhfAZjNQAikcAHhYQAhmGBakrQBYksBegfQBdggArD/QArD/ghGIQgHBVgNEWQgKDIgRBlQgZCOg3BSQg/BehyAnQgwAQgkAAQg0AAgeghg");
	this.shape_44.setTransform(99.3,101.8,0.395,0.395);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#A09FB8").s().p("AAbU3QAUhXAViAQAPhQAOisQAQjJABixQAEijgHi0QgFiUgDAAQgPjqgnj/QgZiigljTIgxj6QgojHgfjTQA6D1AgChIAvD7QAoDTAYCiQAnEAAQDrQACAAAFCUQAHC2gECiQAACzgRDIQgNCugQBQQgUB9gaBaQgXBSgpBpQAehpAUhVg");
	this.shape_45.setTransform(32.2,91.2,0.395,0.395);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#A09FB8").s().p("AiBQmQAGhOAPhhQAKhQBamhQBSmCgFAAQAJgsAKhIQAViRAEh/QAJiDgUipQgHhBgXiJQgRhtgEhBQgFhLAHhUQACBOAKBQIAaCsQAYCOAHA8QATCsgICEQgFCAgUCSQgLBIgIAtQAEABhTGBQhYGhgLBQQgaClgUCjQABhfAFg+g");
	this.shape_46.setTransform(23.2,73.2,0.395,0.395);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#A09FB8").s().p("ACAJoQgFg0gwkuQgskSAEgBQgLiEgPiRQgdkjgjg5QgYhEgWguQgVgsghg1QAqAxAZAqQAbAuAYBDQAkA9AdEkQAQCSAKCDQgEABAsERQAxEvAEAzQAIBFABA4QAAAtgDBCQgKhigPiHg");
	this.shape_47.setTransform(45.7,98.5,0.395,0.395);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#A09FB8").s().p("AEpMaQgGhEgUh8QgZiagdiBQgah2gjiIIgdhsQgtitg6i8Qhxl4g7hGQgwhTgog6Qgmg1g3hBQBBA+AnAwQAuA5AwBSQA9BKBxF4QA5C9AtCtIAeBsQAjCGAaB5QAeCBAZCbQATB8AHBFQAKBeACBJQACA+gCBZQgMiLgUixg");
	this.shape_48.setTransform(49.8,96.9,0.395,0.395);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#A09FB8").s().p("ACVMKQgVg2gVhFQgbhFhFkjQhBkcAFgBQgCABgykcQgykdgMhSQgShtgNiGQAgCCATBtQALBTAyEdQAyEbACAAQgFABBAEaQBFEjAbBEQAjBxAiB6QgdhBgQgpg");
	this.shape_49.setTransform(47.2,94,0.395,0.395);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#A09FB8").s().p("AFAMzQgHhKgXh8QgciggjiCQgfh7griJIgkhuIgnhvQgxiPgihzQgqiOgziLQgxiGgcgzQgvhegkg3Qgog8g4g8QBBA3ArA5QArA6AuBbQAcAyAxCHQA0COAoCOQAjByAyCOIAmBwIAlBuQArCKAfB6QAjCEAdCgQAWB+AIBKQALBhADBLQACBAgCBbQgMiQgWi1g");
	this.shape_50.setTransform(58.3,99.9,0.395,0.395);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#A09FB8").s().p("ABmE5QgBgpgUiTQgTiQgEAAQgOhFgYhIQgQgxgZg4QgVgpgPgZIhDhpQAcAYAQASQAUAVATAfQAQAYAWAtQAZA4AQAzQAZBJAOBHQAEgBAUCRQAUCUABAqQAFA6gDBDQgQhAgGg8g");
	this.shape_51.setTransform(49.2,63.3,0.395,0.395);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#A09FB8").s().p("ACTB1QgWgDhOghQhKggACgDQgCAEhEgwQhFgwgNgSQgNgOgJgPQgGgJgKgUQAZARAbAbQAMASBEAwQBBAsACgDQgCADBIAfQBNAhAVACQAjAJAdAQIgMAAQggAAgZgGg");
	this.shape_52.setTransform(60.3,39.9,0.395,0.395);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#A09FB8").s().p("AC1CQQgRgFgTgIQgVgIhLgtQhHgtABgCQgBAChCg0QhEg4gOgRQgOgOgLgPIgSgdQAgAUAZAYQAUAZB+BgQgBACBGAsQBKAtAVAHQAfAPAdAXIghgHg");
	this.shape_53.setTransform(54.1,32.8,0.395,0.395);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#A09FB8").s().p("AC9C+QgUgIgTgNQgXgLhNhDQhJhBACgCIhDhFQhEhGgTgWQgagcgYgmQAnAaAaAbIBVBcIBEBEQgBACBHBAQBMBCAWALQAkAXAdAcIglgOg");
	this.shape_54.setTransform(51.9,21.6,0.395,0.395);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#A09FB8").s().p("AB+BIQgQgFg9gYIg4gZQhvgwgUgPQgVgNgTgYQAcAIAWAMQATAOBtAxIA5AYIBMAdQAVAJAZAUQgegCgXgJg");
	this.shape_55.setTransform(51.8,14.7,0.395,0.395);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#A09FB8").s().p("ABuAyQgMgCg1gQIgxgQQhggggSgKQgTgIgSgSQAaABATAHQASAJBcAiIAyAOQA1AQAMACQAVAGAUAPIgSABQgPAAgNgDg");
	this.shape_56.setTransform(49.9,9.8,0.395,0.395);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#A09FB8").s().p("ADlCPQgUgCgYgGQgagDhggnQhcglABgDQgCAEhUg4QhWg4gRgWQgRgRgNgRQgIgKgOgYQAiAXAfAfQAQAUBVA5QBSA1ACgDQgBADBaAkQBfAmAaAEQAnAKAoATIgpgDg");
	this.shape_57.setTransform(51.8,5.8,0.395,0.395);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#A09FB8").s().p("AEtEJQgdgGgjgMQhhgihQgtQgsgXgsggIgmgaQg6grg5g2QglgjgogzQgcgjgTgcQgUgfgNgbQgLgWgLgiQAhAtAnA6QARAaAcAkQAoAxAkAkQA3A0A6ArIAlAZQAsAfAqAXQBOArBgAjQAwARBGAcQgkgEgYgFg");
	this.shape_58.setTransform(51.3,13.2,0.395,0.395);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#A09FB8").s().p("ACODSQgbgNhbhHQhXhGADgDQgogmglgsQgZgfgXgqQgUgigGgTQgLgagDgXQgCgSABgcIAhBYQAGASATAgQAWAoAZAeQAkAsAmAkQgDAEBWBEQBaBGAbANQAlAZAmAhQgwgRgmgYg");
	this.shape_59.setTransform(54.2,41.9,0.395,0.395);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#A09FB8").s().p("ACEEmQgdgbhehuQhbhuADgDQgog1gkhDQgYgtgTg5QgRgwgDgZQgGgiACgeQABgVAHgkQAHBHAJAvQACAYAQAuQATA3AYAsQAiBCAoA0QgEADBbBsQBdBtAeAbQAnApAmA0Qg1gogngng");
	this.shape_60.setTransform(56.3,38,0.395,0.395);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#A09FB8").s().p("ADREoQgZgNgagTIg2grQgvgmgfggQgcgegignIgagfIgYghQgfgogWgkQgZglgbg1Igfg+QgNgdgIgbIgOg0QAeAxAWAzQAKAhBKB0QBHBvADgDIAbAeQAeAnAfAdQAdAfAuAmIA1ArQAyAiAnAkQghgPgQgIg");
	this.shape_61.setTransform(56,48,0.395,0.395);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#A09FB8").s().p("AFqIEQgdgjgiguQghgriIjKIiAi/Qj2lsg8hBQg9hLg7hPQAqAmAZAbQAgAgAkAtQA9BBD3FtQAAACB/C9QCHDJAiAsQA6BQA0BRQgngpgYgcg");
	this.shape_62.setTransform(55.4,58.8,0.395,0.395);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#A09FB8").s().p("AFsKOQgQhFgbhfQgmiHgohpQglhlgxhvIgqhYQgRgkgcg1Qg5hsg5hZQg0hKhgiDQhUhxgQgZQgvhFgeg4QgbgxgdhHQA+BrBXB/QAPAXBVBzQBfCAA2BNQA5BaA5BtQAcA2ARAjIArBZQAyBwAkBlQApBqAmCHQAbBgAQBGQARBPALBBQAHAzAJBQg");
	this.shape_63.setTransform(53,78.7,0.395,0.395);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#A09FB8").s().p("ADfLoQgUhlhKlIQhKlLgEABQgniegziqQgihxgxiIQgjhhgchDQg2iEg2iHQAoBIAYAxQAeA8AgBPQAaA+AmBnQAxCHAiByQAzCrAnCeQADAABLFLQBLFKATBjQAcCEAYCYQgqiTgdiFg");
	this.shape_64.setTransform(57.2,96.3,0.395,0.395);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#A09FB8").s().p("ADWK1QgBhLgFhbQgHiIgQhsQgNhngYh1IgVhdIgZhfQgfhygihiQg8i2hejIQg2hvg9iGQApBDAZArQAgA4AjBHQAgBDAjBVQA0B/AjBoQAjBjAfB0IAZBeIAVBeQAYB1AOBoQAPBuAICJQAFBgABBGQgBBPgEBAQgDAxgKBQg");
	this.shape_65.setTransform(62.2,119.6,0.395,0.395);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#A09FB8").s().p("AEkN0QgehjiFmPQiAmCgBAAIiCmBIirnvQg2ifgwiqQBECpA1CZQAzCTD5LfQABgBCBGBQCFGRAdBiQAuCTAxC4QhBiqgwibg");
	this.shape_66.setTransform(54.7,109.2,0.395,0.395);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#A09FB8").s().p("ADTN5QgBhUgHh8QgJipgQiLQgNiBgXiUIgUh2IgYh4QgeiUghh9QghiGgyijQglhygehTIhzk/QAsBaAYA4QAgBKAiBdQAeBRAlB1QAxCiAiCHQAhB/AeCSQAPBJAJAwIAUB3QAXCUAOCDQAPCKAJCqQAHB8ABBVQACBigEBRQgCA9gIBkIgHlUg");
	this.shape_67.setTransform(50.6,97.3,0.395,0.395);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#A09FB8").s().p("ABjTvQAHhXAPh7IAfj1QAbjVALiXQANibgFiwIgHiOQAFABgUiQQgZisgniZQgmifhAi/QgqiEgohjQhgj0gyiEQA6B3AZA2QAoBaApBpQApBoAqCBQBADAAmCgQAnCZAZCtQAUCRgEAAIAHCPQAECxgNCbQgLCagaDUIggD0IgaDSQgPBvgJBOQADhqAGhVg");
	this.shape_68.setTransform(52.5,110.5,0.395,0.395);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#A09FB8").s().p("AA3PKQgNhFgLhYQgQhYgXlwQgYljAEgBQgbqjgMiHQgKiUgHiXQAOBVAHA3QAJBGAHBYQANCHAaKjQgEABAWFjQAYFvAQBYQATCXAQCTQgUhUgKg3g");
	this.shape_69.setTransform(46.1,116.3,0.395,0.395);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#A09FB8").s().p("ADFThQgUhXgTh0QgWhqgsnoQgonNgCAAIgOiNQgTirgWiVQgYiZgxjDQgLgqg0i+Qg7jJgsiyIA8CxQAfBcAfBpIA/DoQAxDFAWCZQAYCVAUCsIAOCNQACAAAnHNQAsHoAXBpQAmDrAdCXQgfhogRhMg");
	this.shape_70.setTransform(57.5,117.5,0.395,0.395);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#A09FB8").s().p("AhUZQQADhwAJiXQAGh9A3p9QAypQgDAAIAMi0QANjeADi/QAGjQgLj4QgJjFgMhtQgPiXgOhvQgLhmgViGQAdCIARBiQATBxAPCVQANBtAJDGQAKD5gFDQQgEDAgNDeIgLC0QACAAgzJQQg2J9gGB9IgeH0QgDiIAChmg");
	this.shape_71.setTransform(31.4,97.9,0.395,0.395);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#A09FB8").s().p("ACnUOQgMhYgGh/QgFhCACi4QABisAGjIQAFiggFiwQgEiQgDAAQgEg6gKhYQgSixgbicQgZingzjDQgmiagehWQgph4gfhRQgghRgqhiQA2BjAhBKQAmBWAnB0QAfBUAmCcQAyDEAbCoQAbCcASCyQAKBZADA5QADAAAFCSQAECxgECgQgHDIgBCrQgBC3AEBDQAGCGAIBQQAHBbAPBkQgZhpgMhVg");
	this.shape_72.setTransform(36.2,97.9,0.395,0.395);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#A09FB8").s().p("ADGStQgCiChFolQhDoPgEABIgXigQgcjHgmijIhgmNQgyjOgKg/QgaiJgIhhQgIhgACh2QAHBxANBkQAMBXAbCRQAKA9AyDOIBhGNQAlClAdDIIAWCgQAEgBBDIOQBGIlACCDQAJCBACBrQACBOgCCIIgfnAg");
	this.shape_73.setTransform(43.5,97.1,0.395,0.395);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#A09FB8").s().p("AjMO0QANhFAWhWQARhNBoltIBelXQAtiiAni3QAbh6AWiSQARh2AFhCQAMiFAIimQAGBXAAA4QABBHgIBXQgEBBgSB4QgWCTgbB7QgnC2gtCiQABABhfFXQhoFvgRBLIhNEjQANhVAKg4g");
	this.shape_74.setTransform(9,59.8,0.395,0.395);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#A09FB8").s().p("AhVO+QAGhGALhWIA9nCQAvlfgDAAQAUilAKi4QAIh6gBiVQgChwgEhGQgJiIgNiiQARBXAIA2QAKBGAGBVQAFBJABBvQACCWgIB6QgGBwgNCFIgLBpQAEABhuMgQgTCQgYCYQADhYAEg2g");
	this.shape_75.setTransform(16.4,86.6,0.395,0.395);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#A09FB8").s().p("AB2PiQAEhNgDiWQgDi2gLibQgKiNgPikIgNiCIgMiFQgQingXiIQgVh8gujOQgri8gFgjQgWhygJhPQgIhQgBhgQAJBYAPBWQAKA9AZCCQAFAfArC/QArDLAYCBQAXCIAQCoIANCEIANCDQAPCkAJCOQAMCbADC3QADCVgEBPQgFBwgJBTQgIBLgRBjQALiVAIjdg");
	this.shape_76.setTransform(24.9,77.4,0.395,0.395);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#A09FB8").s().p("AB7dMQATgqAPhMQAThpgCiwQADiQgIi7QgMkPgfjaQgZi6glj/IgbjAQgFAAgxp8Qg3qqgeiHQgNhYgpi+QggiUgGhpQALBbApCfQArClAQBxQAfCIA0KrQAzJ7AGgBIAbDBQAkEBAZC4QAgDZAMERQAIDAgDCMQABCxgYBrQgSBKgWAtQghA+g2AkQAzgmAchAg");
	this.shape_77.setTransform(30.3,91,0.395,0.395);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#A09FB8").s().p("AhZS8IAkjDQAPhLAZiZQAbi0AUifQASiRAPikIALiHQARjSADjqQAGiRgQjFQgSi8gDgqQgLh5gBhOQgChUAHhfQACBUAHBfIARDFQADAqATC8QAPDGgGCTQgCDqgSDSQACABgNCHQgOCjgTCTQgUCdgdC3QgXCYgPBMQgTBmgWBcQgIAkgjCLQAMhRARhhg");
	this.shape_78.setTransform(19.8,64.5,0.395,0.395);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#A09FB8").s().p("AidP6QAKhFAXhgIAxi+QAqikASh3QATh4APiMIAMhyIALhxQAOiPAQh3IArkgQAViTAEguQAVjMAHhzQAEBbgBA9QgCBLgKBeQgDAugWCUIgrEfQgPB2gOCQIgLBwIgMBzQgQCOgVB4QgQB3gqClIgxC+QgbBygLAxQgPBJgMBLQAEhUAJhDg");
	this.shape_79.setTransform(8.4,53.4,0.395,0.395);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#A09FB8").s().p("Ag5SNQAdhRAchjQAYhRAZiHQAhixAIiVQAKiKACigIgBiDIgCh/QgDiagEiSQgDiwgGiZQgHijgJg6IgnlpQAWBqALBAQAOBVALBoQAJA6AHCkQAHCYACCyQAFCSADCZIACCAIAACDQgBChgLCLQgICVghCyQgZCKgZBPQgcBmgiBPQgbA/gxBcQAphkAWg8g");
	this.shape_80.setTransform(12.3,52.5,0.395,0.395);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#A09FB8").s().p("AgeKdQAShKAdksQAekkgGgBQAHiKgBiZQABhlgHh9QgEhagGg9QgLh+gIh6QAPBKAHAqQAKA7AGBHQAGA5AFBfQAGB8AABnQABCagICKQAGABgeElQgfEugQBKQgMBFgNA7IgeBxQAQh/AUh2g");
	this.shape_81.setTransform(7,39.4,0.395,0.395);

	this.instance = new lib.Path_38();
	this.instance.setTransform(73.4,48.2,0.395,0.395,0,0,0,87.5,114.2);
	this.instance.alpha = 0.77;

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["#D2D2CD","#C2C7D8","#B4B9CD","#9FA3BD","#9296B3","#8E92B0","#8A8EAA","#7F829A","#6D6F80","#5A5B65"],[0,0.243,0.306,0.424,0.541,0.647,0.702,0.769,0.847,0.91],-120.4,144.9,95.6,-141.8).s().p("EAdIApqQhuA8hegzQg1gdhihwQhrApiGgnQiRgqgnhpQhaAhhKhEQhMhcgzgdQgLgHg8gNQhBgQgUgIQg4gXgTgHQgjgMgqgIQhUgPhKgXQhGgWhLghQiAg5gpgaQhWg6gghUQhaAxijh1QhBgug2g6Qg1g5gUgqQhVAsifhMQiUhHg1hYQhxCwk0j3Qi2iRjKj3QlUmhkHqSIiYl7Qhrj6hPhsQhtiWgXhKQgTg7gLjHQgLh1gBg+QgChrAZhQQBEjaE4iiQi6ixBGjhQAVhDArhEIAfgwQF2hDCIgJQDkgQErAtQFUAzFKC2QBJAoDdCGQDFB3CMBKQEqCcFFDeQDuCiF5EeQCgB6FNGSID8EwQCJCgBWBRQBMBHCuDWQDJD5CdDqQDEEjBDC1QBNDMhgAsQADAEgSACIAPgGIgGgDQgQgFgiACQhoAIhWBJQjchMipiHQg1gqgpgsIgfgiIBRCXQBeCmBEBEQBEBFAlB7QALAiATBKQATBDASAuIAoBeQAVAyAGAgQAQBSg9BMQg7BKhNAvQgkAXgJABIBBBrQAeA5AAA8QgBAigSAyQgXA6gbAMQgqARgPgSIgOgYQgMgQgQgLQg+gpgHAiQgEARAJAaIAfA/QAeBHgIAoQgJAvg4AAQhjAAj3iRg");
	this.shape_82.setTransform(148.6,117.4,0.395,0.395);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["#333333","rgba(54,54,54,0.965)","rgba(63,63,64,0.867)","rgba(79,79,80,0.698)","rgba(101,102,103,0.459)","rgba(129,130,133,0.157)","rgba(143,145,148,0)"],[0.008,0.255,0.447,0.62,0.784,0.933,1],25.3,-14.8,-23.4,8.6).s().p("AHMTNQhLgehlieQhHhxiFkEQi0lmg9hwQkJnmiSmdQiSmdA6hhQA6hgDlEVQDkEVEHHpQA7BtDFFRQCOD1A8CDQBVC4ANCFQAQCXhIB3Qg4BchAAAQgSAAgUgIg");
	this.shape_83.setTransform(279.4,181,0.395,0.395);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["#333333","rgba(54,54,54,0.965)","rgba(63,63,64,0.867)","rgba(79,79,80,0.698)","rgba(101,102,103,0.459)","rgba(129,130,133,0.157)","rgba(143,145,148,0)"],[0.008,0.255,0.447,0.62,0.784,0.933,1],25.7,-13.6,-23.9,8).s().p("AHSUiQhNglhnirQhJh7iHkYQi3mCg+h3QkOoMiUm4QiUm4A8hfQA9hgDpExQDqEwEMIOQA8B2DIFsQCREKA9CMQBXDFANCLQAOCehKB2Qg3BXg/AAQgWAAgXgLg");
	this.shape_84.setTransform(281.2,203.8,0.395,0.395);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["#333333","rgba(54,54,54,0.965)","rgba(63,63,64,0.867)","rgba(79,79,80,0.698)","rgba(101,102,103,0.459)","rgba(129,130,133,0.157)","rgba(143,145,148,0)"],[0.008,0.255,0.447,0.62,0.784,0.933,1],25.5,-15.6,-22.7,9).s().p("AIpT+QhPgghxilQhRh1iYkQQjQl2hEhzQkun6ivmuQivmuA2hjQAbgxBSA0QBOAzB4CIQD7EiEsH8QBEBzDeFeQChEABGCIQBjDAAVCKQAZCchEB7QgzBehCAAQgUAAgUgIg");
	this.shape_85.setTransform(234.3,186.9,0.395,0.395);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["#333333","rgba(54,54,54,0.965)","rgba(63,63,64,0.867)","rgba(79,79,80,0.698)","rgba(101,102,103,0.459)","rgba(129,130,133,0.157)","rgba(143,145,148,0)"],[0.008,0.255,0.447,0.62,0.784,0.933,1],25.5,-15.5,-22.7,9.1).s().p("AIpT/QhPgghxilQhRh1iYkQQjPl1hFh0Qkun7ivmtQivmuA2hjQA3hjD8EhQD8EiEsH8QBEBzDeFeQCgEABGCIQBjDAAVCJQAZCdhDB7Qg0BehCAAQgTAAgVgIg");
	this.shape_86.setTransform(264.3,203.7,0.395,0.395);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["#333333","rgba(54,54,54,0.965)","rgba(63,63,64,0.867)","rgba(79,79,80,0.698)","rgba(101,102,103,0.459)","rgba(129,130,133,0.157)","rgba(143,145,148,0)"],[0.008,0.255,0.447,0.62,0.784,0.933,1],25.9,-12.7,-24.3,7.6).s().p("AGwUvQhNgnhiiuQhGh8iBkbQiumGg6h5QkBoTiJm7QiKm8A/heQA/heDiE2QDiE3D/IUQA6B4C+FxQCKEMA6COQBSDIAJCKQALCehNB1Qg4BUg9AAQgXAAgYgMg");
	this.shape_87.setTransform(250.7,191.6,0.395,0.395);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["#8F9194","#8C8E91","#76787A","#66686A","#5D5E60","#5A5B5D","#57585A","#4E4E50","#434345"],[0,0.012,0.11,0.216,0.333,0.49,0.714,0.886,1],-78.5,207.1,103.1,-165.4).s().p("EAyPAw6QhdgQkDhHQjuhBh3gzQjqhkgth9Qh6A2iphfQgzgdhXg+QhZhAgkgUQiohihkgWQg1gLgRgBQgUAAgFAMQgCAHgCAiQgBAogHAiQjihrg/giQiXhRhwheQijiIhcg9QiahmiKgfQgHAahNAqQhQArhsAiQkeBXjTg2QhhgZiPg3QiZg+hBgYQhtgpgugDQg6gDAHAzQiZhIjWh2Qj0iHijhqQhLgxhGhoQgyhIhFiJQhYiqgZgsQhBhxg9g5Qg+g5hehGQhshOg0goQjAiQhZiIQiykQiVm3Qh3lggJlmQgJlIBTmIQAujdAZhjQAriyAxiDQADgIB+kAQBjjIgQgdICsgTQDVgSDPAFQKVATFYD4QDSCYO1JkQN6JAB9BkQDuC9FdF3QCqC4F2GsIClDDQBmB4BEBIQA9BBC2CeQCdCKBNBfQB9CZCFD2QBNCNCNEcQCFD/BNDkQBNDkAwEWQAPBWAmBwQAWBAAvCAQAaBLAEBYQACA0AABzQg9AjhtAAQhOAAhmgSg");
	this.shape_88.setTransform(171.6,130.7,0.395,0.395);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.instance},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,312.5,256.2);


(lib.Heron_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// face
	this.instance = new lib.face();
	this.instance.setTransform(1148.1,186,1,1,0,0,0,106.1,47.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:106.6,regY:47.3,x:1155.1,y:188.9},0).wait(1).to({x:1161.6,y:192},0).wait(1).to({x:1168.1,y:195.1},0).wait(1).to({x:1174.6,y:198.2},0).wait(1).to({x:1181.1,y:201.3},0).wait(3).to({x:1171.3,y:195.7},0).wait(1).to({x:1161.6,y:190.1},0).wait(1).to({x:1151.9,y:184.6},0).wait(1).to({x:1152.8,y:187.3},0).wait(1).to({x:1153.8,y:190.1},0).wait(1).to({x:1154.8,y:192.9},0).wait(1).to({x:1155.8,y:195.6},0).wait(1).to({x:1156.7,y:198.4},0).wait(1).to({x:1157.7,y:201.2},0).wait(1).to({x:1156.6,y:195.6},0).wait(1).to({x:1155.5,y:190.1},0).wait(1).to({x:1154.4,y:184.5},0).wait(1).to({x:1159.7,y:187.9},0).wait(1).to({x:1165.1,y:191.2},0).wait(1).to({x:1170.4,y:194.6},0).wait(1).to({x:1175.7,y:197.9},0).wait(1).to({x:1181.1,y:201.3},0).wait(1).to({x:1175.7,y:197.9},0).wait(1).to({x:1170.4,y:194.6},0).wait(1).to({x:1165.1,y:191.2},0).wait(1).to({x:1159.7,y:187.9},0).wait(1).to({x:1154.4,y:184.5},0).wait(1).to({x:1152.5,y:185},0).wait(1).to({x:1150.5,y:185.4},0).wait(1).to({x:1148.6,y:185.9},0).wait(10).to({y:193.9},0).wait(1).to({y:202},0).wait(1).to({y:210.1},0).wait(18).to({y:205.3},0).wait(1).to({y:200.4},0).wait(1).to({y:195.6},0).wait(1).to({y:190.7},0).wait(1).to({y:185.9},0).wait(8).to({regX:106.1,regY:47.4,x:1148.1,y:186},0).wait(1).to({regX:106.6,regY:47.3,x:1155.1,y:188.9},0).wait(1).to({x:1161.6,y:192},0).wait(1).to({x:1168.1,y:195.1},0).wait(1).to({x:1174.6,y:198.2},0).wait(1).to({x:1181.1,y:201.3},0).wait(3).to({x:1171.3,y:195.7},0).wait(1).to({x:1161.6,y:190.1},0).wait(1).to({x:1151.9,y:184.6},0).wait(1).to({x:1152.8,y:187.3},0).wait(1).to({x:1153.8,y:190.1},0).wait(1).to({x:1154.8,y:192.9},0).wait(1).to({x:1155.8,y:195.6},0).wait(1).to({x:1156.7,y:198.4},0).wait(1).to({x:1157.7,y:201.2},0).wait(1).to({x:1156.6,y:195.6},0).wait(1).to({x:1155.5,y:190.1},0).wait(1).to({x:1154.4,y:184.5},0).wait(1).to({x:1159.7,y:187.9},0).wait(1).to({x:1165.1,y:191.2},0).wait(1).to({x:1170.4,y:194.6},0).wait(1).to({x:1175.7,y:197.9},0).wait(1).to({x:1181.1,y:201.3},0).wait(1).to({x:1175.7,y:197.9},0).wait(1).to({x:1170.4,y:194.6},0).wait(1).to({x:1165.1,y:191.2},0).wait(1).to({x:1159.7,y:187.9},0).wait(1).to({x:1154.4,y:184.5},0).wait(1).to({x:1152.5,y:185},0).wait(1).to({x:1150.5,y:185.4},0).wait(1).to({x:1148.6,y:185.9},0).wait(9).to({regX:106.1,regY:47.4,x:1148.1,y:186},0).wait(1).to({regX:106.6,regY:47.3,x:1155.1,y:188.9},0).wait(1).to({x:1161.6,y:192},0).wait(1).to({x:1168.1,y:195.1},0).wait(1).to({x:1174.6,y:198.2},0).wait(1).to({x:1181.1,y:201.3},0).wait(3).to({x:1171.3,y:195.7},0).wait(1).to({x:1161.6,y:190.1},0).wait(1).to({x:1151.9,y:184.6},0).wait(1).to({x:1152.8,y:187.3},0).wait(1).to({x:1153.8,y:190.1},0).wait(1).to({x:1154.8,y:192.9},0).wait(1).to({x:1155.8,y:195.6},0).wait(1).to({x:1156.7,y:198.4},0).wait(1).to({x:1157.7,y:201.2},0).wait(1).to({x:1156.6,y:195.6},0).wait(1).to({x:1155.5,y:190.1},0).wait(1).to({x:1154.4,y:184.5},0).wait(1).to({x:1159.7,y:187.9},0).wait(1).to({x:1165.1,y:191.2},0).wait(1).to({x:1170.4,y:194.6},0).wait(1).to({x:1175.7,y:197.9},0).wait(1).to({x:1181.1,y:201.3},0).wait(1).to({x:1175.7,y:197.9},0).wait(1).to({x:1170.4,y:194.6},0).wait(1).to({x:1165.1,y:191.2},0).wait(1).to({x:1159.7,y:187.9},0).wait(1).to({x:1154.4,y:184.5},0).wait(1).to({x:1152.5,y:185},0).wait(1).to({x:1150.5,y:185.4},0).wait(1).to({x:1148.6,y:185.9},0).wait(10).to({y:193.9},0).wait(1).to({y:202},0).wait(1).to({y:210.1},0).wait(18).to({y:205.3},0).wait(1).to({y:200.4},0).wait(1).to({y:195.6},0).wait(1).to({y:190.7},0).wait(1).to({y:185.9},0).wait(8));

	// body
	this.instance_1 = new lib.bodycopy();
	this.instance_1.setTransform(1302.2,475.2,1,1,0,0,0,156.2,128.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:1304.9,y:478.2},0).wait(1).to({x:1307.5,y:481.2},0).wait(1).to({x:1310.2,y:484.2},0).wait(1).to({x:1312.8,y:487.2},0).wait(1).to({x:1315.5,y:490.2},0).wait(3).to({rotation:-1.2,x:1316.6,y:492.4},0).wait(1).to({rotation:-2.5,x:1317.7,y:494.6},0).wait(1).to({rotation:-3.7,x:1318.8,y:496.9},0).wait(1).to({rotation:-4,x:1317.8,y:497},0).wait(1).to({rotation:-4.3,x:1316.8,y:497.1},0).wait(1).to({rotation:-4.6,x:1315.9,y:497.3},0).wait(1).to({rotation:-4.9,x:1314.9,y:497.4},0).wait(1).to({rotation:-5.2,x:1313.9,y:497.5},0).wait(1).to({rotation:-5.5,x:1313,y:497.7},0).wait(1).to({rotation:-4.4,x:1310.2,y:496},0).wait(1).to({rotation:-3.4,x:1307.4,y:494.4},0).wait(1).to({rotation:-2.3,x:1304.6,y:492.7},0).wait(1).to({rotation:-1.8,x:1306.7,y:492.2},0).wait(1).to({rotation:-1.4,x:1309,y:491.7},0).wait(1).to({rotation:-0.9,x:1311.2,y:491.2},0).wait(1).to({rotation:-0.5,x:1313.3,y:490.7},0).wait(1).to({rotation:0,x:1315.5,y:490.2},0).wait(1).to({rotation:-0.5,x:1313.3,y:490.7},0).wait(1).to({rotation:-0.9,x:1311.2,y:491.2},0).wait(1).to({rotation:-1.4,x:1309,y:491.7},0).wait(1).to({rotation:-1.8,x:1306.7,y:492.2},0).wait(1).to({rotation:-2.3,x:1304.6,y:492.7},0).wait(1).to({rotation:-1.5,x:1303.8,y:486.8},0).wait(1).to({rotation:-0.8,x:1303,y:481},0).wait(1).to({rotation:0,x:1302.2,y:475.2},0).wait(43).to({x:1304.9,y:478.2},0).wait(1).to({x:1307.5,y:481.2},0).wait(1).to({x:1310.2,y:484.2},0).wait(1).to({x:1312.8,y:487.2},0).wait(1).to({x:1315.5,y:490.2},0).wait(3).to({rotation:-1.2,x:1316.6,y:492.4},0).wait(1).to({rotation:-2.5,x:1317.7,y:494.6},0).wait(1).to({rotation:-3.7,x:1318.8,y:496.9},0).wait(1).to({rotation:-4,x:1317.8,y:497},0).wait(1).to({rotation:-4.3,x:1316.8,y:497.1},0).wait(1).to({rotation:-4.6,x:1315.9,y:497.3},0).wait(1).to({rotation:-4.9,x:1314.9,y:497.4},0).wait(1).to({rotation:-5.2,x:1313.9,y:497.5},0).wait(1).to({rotation:-5.5,x:1313,y:497.7},0).wait(1).to({rotation:-4.4,x:1310.2,y:496},0).wait(1).to({rotation:-3.4,x:1307.4,y:494.4},0).wait(1).to({rotation:-2.3,x:1304.6,y:492.7},0).wait(1).to({rotation:-1.8,x:1306.7,y:492.2},0).wait(1).to({rotation:-1.4,x:1309,y:491.7},0).wait(1).to({rotation:-0.9,x:1311.2,y:491.2},0).wait(1).to({rotation:-0.5,x:1313.3,y:490.7},0).wait(1).to({rotation:0,x:1315.5,y:490.2},0).wait(1).to({rotation:-0.5,x:1313.3,y:490.7},0).wait(1).to({rotation:-0.9,x:1311.2,y:491.2},0).wait(1).to({rotation:-1.4,x:1309,y:491.7},0).wait(1).to({rotation:-1.8,x:1306.7,y:492.2},0).wait(1).to({rotation:-2.3,x:1304.6,y:492.7},0).wait(1).to({rotation:-1.5,x:1303.8,y:486.8},0).wait(1).to({rotation:-0.8,x:1303,y:481},0).wait(1).to({rotation:0,x:1302.2,y:475.2},0).wait(10).to({x:1304.9,y:478.2},0).wait(1).to({x:1307.5,y:481.2},0).wait(1).to({x:1310.2,y:484.2},0).wait(1).to({x:1312.8,y:487.2},0).wait(1).to({x:1315.5,y:490.2},0).wait(3).to({rotation:-1.2,x:1316.6,y:492.4},0).wait(1).to({rotation:-2.5,x:1317.7,y:494.6},0).wait(1).to({rotation:-3.7,x:1318.8,y:496.9},0).wait(1).to({rotation:-4,x:1317.8,y:497},0).wait(1).to({rotation:-4.3,x:1316.8,y:497.1},0).wait(1).to({rotation:-4.6,x:1315.9,y:497.3},0).wait(1).to({rotation:-4.9,x:1314.9,y:497.4},0).wait(1).to({rotation:-5.2,x:1313.9,y:497.5},0).wait(1).to({rotation:-5.5,x:1313,y:497.7},0).wait(1).to({rotation:-4.4,x:1310.2,y:496},0).wait(1).to({rotation:-3.4,x:1307.4,y:494.4},0).wait(1).to({rotation:-2.3,x:1304.6,y:492.7},0).wait(1).to({rotation:-1.8,x:1306.7,y:492.2},0).wait(1).to({rotation:-1.4,x:1309,y:491.7},0).wait(1).to({rotation:-0.9,x:1311.2,y:491.2},0).wait(1).to({rotation:-0.5,x:1313.3,y:490.7},0).wait(1).to({rotation:0,x:1315.5,y:490.2},0).wait(1).to({rotation:-0.5,x:1313.3,y:490.7},0).wait(1).to({rotation:-0.9,x:1311.2,y:491.2},0).wait(1).to({rotation:-1.4,x:1309,y:491.7},0).wait(1).to({rotation:-1.8,x:1306.7,y:492.2},0).wait(1).to({rotation:-2.3,x:1304.6,y:492.7},0).wait(1).to({rotation:-1.5,x:1303.8,y:486.8},0).wait(1).to({rotation:-0.8,x:1303,y:481},0).wait(1).to({rotation:0,x:1302.2,y:475.2},0).wait(42));

	// neck
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-63.7,0.3,64.6,0.3).s().p("AICaAQgsgni6joQiVi5hDhaQgegqgqipQgkiMgKhcQgFhkAOiEIABgTIAGgoQAok5AZiZIAQhhIAJgpQApiKAxh7IAjhaIAahEQAYhAgEh7QAAhvgEhAQABhOguhSIgPgaIgFgEQglgZgrgMQgfgJgjgEQgcAEjsgSIkQgWQgvgDhBhCQBXABAagrQAkggAbgLQBIAABWh+QATggCCgjQBogfA+gJQAngDBjAuIA5AbQAzAbApAfQAhAbAbBAQAwBqAiBhIAFAOQAeA5AtFOIAIAzQAIA6gTBuQgQBUggBzQgMAqgnBcQgQAtgRA4QgPAzgPA9QgfCTAmDvIAHAwQAJBAAKASQAZAfA3BcQA2BCA+BWQAYAeAWBwQAOBfgcBKQgkA5ASCjQAJCEAJA+QAAAigdBwQgZBLgoAAIgKgBg");
	this.shape.setTransform(1153.8,306.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-62.2,0.3,63.2,0.3).s().p("AH/Z+Qgtgmi+jmQiZi3hEhXQgegqgtioQgniLgLhcQgIhkAMiHIABgTIAGgoQAqk5AfibIAShgIAJgoQAsiLAyh5IAkhZIAchGQAZhAACh8QAEhvgChAQADhOgphRIgOgaIgGgEQgkgagrgNQgegJgjgEQgdADjrgXIkQgaQgvgFg/hDQBVADAcgrQAkgfAcgLQBIACBYh8QAUggCCghQBpgdA+gHQAngDBjAvIA4AdQAzAcAoAgQAhAbAZBBQAuBqAhBjIAEAOQAdA6AhFQIAFA0QAGA6gXBsQgSBTghBxQgNAqgnBbQgSAtgRA4QgQA0gQA8QghCTAiDvIAGAwQAJBBAKAIQAZAeA5BcQA3BBA/BUQAZAeAYBvQAQBggbBKQgjA6AVCiQAMCEAJA+QABAhgbBxQgXBNgpAAIgKgBg");
	this.shape_1.setTransform(1157.6,310);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-60.6,0.3,61.7,0.3).s().p("AH9Z6QgtgljDjiQici0hGhWQgegpgwioQgqiKgNhbQgIhlAHiJIACgTIAFgoQAqk5AqicIARhgIAKgoQAuiKA0h5IAlhYIAehHQAahAAIh9QAIhvAAhAQAGhOglhPIgOgaIgFgEQgkgbgrgOQgegJgjgFQgeADjqgcIkPgfQgvgFg+hFQBWAFAcgrQAlgeAcgKQBIADBbh7QATgfCEgfQBpgbA+gGQAogCBhAxQAdAOAaAQQAzAdAoAgQAfAcAZBBQAsBsAfBkIAEAOQAcA7ATFSIAEAzQAEA8gcBpQgUBSgiBwQgNApgpBbQgSAtgSA3QgRAzgQA9QgkCSAeDwIAFAwQAIBBALgCQAZAeA7BbQA5BABABTQAZAeAaBvQASBegaBLQghA6AXCiQAOCFALA9QACAhgaByQgWBNgpAAIgJgBg");
	this.shape_2.setTransform(1161.4,313.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-59.4,0.2,59.6,0.2).s().p("AH2Z2QgvgkjGjfQifixhIhVQgdgpg1imQgsiJgPhcQgLhjAFiNIACgTIAGgoQApk5AyidIAVhfIAJgpQAwiIA1h4IAnhYIAfhJQAcg+ANiAQAMhuADhAQAJhNgihOIgNgaIgGgEQgjgbgqgPQgfgLgigFQgeACjpgfIkPglQgvgGg9hFQBXAGAcgqQAmgeAbgKQBIAFBeh5QAUgfCEgcQBogZBAgFQAngCBhAzIA3AfQAxAeAoAhQAfAdAYBBQAqBtAdBlIADAOQAaA8AHFTIACA0QACA7ggBnQgVBSgkBuQgNApgqBaQgUAtgSA3QgSAygRA9QgnCSAaDwIAFAxQAHBAALgLQAaAdA9BaQA6A/BBBSQAaAdAcBvQATBegYBLQghA7AbChQAQCEANA+QABAhgXByQgVBPgqAAIgHgBg");
	this.shape_3.setTransform(1165.8,316.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-58.3,0.3,58.5,0.3).s().p("AHuZyQgvgkjKjbQijiuhJhUQgegog4ilQguiJgRhbQgMhkACiPIACgTIAFgoQApk4A7ifIAWheIAMgpQAviHA3h4IAohXIAhhKQAeg+ATiAQAQhuAFhAQAMhNgfhLIgNgbIgFgEQgigbgrgQQgegLgigGQgfABjogjIkOgqQgvgIg7hGQBWAJAegqQAlgdAcgJQBIAFBgh3QAVgeCEgaQBogXBBgEQAngBBgA1IA2AgQAxAfAnAhQAfAeAWBCQAoBtAbBmIADAOQAYA9gFFVIAAAzQAAA7gkBlQgYBRgjBsQgPAqgrBZQgUAsgTA3QgSAygTA9QgpCRAWDxIAEAwQAFBCANgWQAaAdA/BZQA6A+BEBRQAaAcAeBuQAVBegXBMQggA7AeChQATCEANA9QADAhgWByQgUBQgqAAIgHAAg");
	this.shape_4.setTransform(1170.1,319.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-57.1,0.2,57.4,0.2).s().p("AHmZsQgvgjjPjXQilirhJhTQghgng6ilQgyiHgShbQgOhkgBiSIACgSIAGgoQAok4BEigIAXheIANgoQAyiHA4h2IAphXIAjhMQAfg8AZiCQAUhtAIhAQANhMgahJIgNgbIgFgEQgigdgqgQQgegMgigGQgeABjogoIkOgvQgugIg6hIQBWAKAegpQAngdAcgIQBHAHBih1QAWgfCEgXQBqgVA/gCQAogBBfA3QAcAPAZASQAxAgAmAiQAfAeAUBDQAnBtAZBoIACAOQAYA9gTFVIgCA0QgCA7goBiQgaBQgkBrQgPApgtBZQgUAsgUA2QgTAygUA9QgrCRASDwIADAxQAEBBANgfQAbAcBABYQA8A9BFBQQAbAcAgBtQAWBegVBMQgfA8AhCgQAVCEAOA9QADAhgTByQgTBRgrAAIgGAAg");
	this.shape_5.setTransform(1174.5,323.2);
	this.shape_5._off = true;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-59,0.3,59.2,0.3).s().p("AHzZ1QgvgljIjdQigiwhIhVQgegog1imQguiJgPhcQgLhjAEiOIACgTIAFgoQAqk4A1ieIAVhfIAKgoQAwiJA2h3IAnhYIAghJQAdg+APiAQANhuAEhAQAJhNgghNIgNgaIgFgEQgjgcgrgPQgegLgjgFQgeABjpghIkOgmQgvgHg8hGQBWAHAdgqQAmgdAbgJQBIAEBeh4QAVgeCEgcQBogYBAgFQAnAABhAzQAdAPAaAQQAxAeAnAiQAfAcAXBCQAqBtAcBmIADAOQAaA8ADFUIABAzQABA8ghBlQgXBSgjBtQgOAqgrBaQgTAsgTA3QgSAzgRA9QgoCRAYDwIAFAxQAGBAAMgOQAaAcA9BaQA6A/BDBSQAZAcAdBvQAUBegYBLQggA8AcChQAQCEANA9QADAhgXByQgWBQgpAAIgHgBg");
	this.shape_6.setTransform(1167.3,317.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-61,0.3,62.1,0.3).s().p("AH9Z7QgtgljCjjQiai1hGhXQgegpgvioQgpiKgNhcQgIhkAJiJIACgTIAFgoQAqk5AmibIAThgIAKgpQAtiKAzh5IAmhYIAdhHQAag/AGh+QAHhvgBhAQAFhNgnhQIgOgaIgFgEQgkgbgrgNQgegKgjgFQgeADjqgaIkPgeQgvgFg+hFQBVAFAdgrQAlgeAbgLQBIADBah7QAVgfCCgfQBpgcA+gGQAngCBjAwQAcAOAbAQQAzAcAnAgQAhAdAYBAQAtBsAfBjIAEAOQAcA7AYFRIAEA0QAGA7gbBqQgUBTgiBwQgMApgpBbQgSAtgSA3QgRAzgQA9QgkCTAfDvIAGAxQAIBAALABQAZAeA6BbQA5BBA/BTQAZAeAaBvQARBfgaBKQgjA7AXChQAOCFAKA+QABAhgaBxQgXBNgpAAIgIgBg");
	this.shape_7.setTransform(1160.3,312.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-63.6,0.3,64.5,0.3).s().p("AIBaAQgsgni7joQiVi5hDhaQgegqgpipQgliMgKhcQgFhkAOiFIACgSIAGgoQAok6AaiZIAQhgIAJgpQAqiLAxh6IAjhaIAbhEQAXhAgEh7QAAhvgEhAQABhOgthSIgPgaIgGgDQgkgagsgMQgegJgkgEQgcAEjrgTIkRgWQgvgEhAhCQBWABAbgrQAkggAbgLQBIAABXh9QATggCBgjQBpgeA9gJQAngDBkAuQAdANAbAPQAzAbApAfQAhAbAbBAQAwBqAiBhIAEANQAfA6AtFOIAHAzQAJA6gUBuQgRBUggByQgMAqgmBcQgRAtgRA4QgPA0gPA9QggCSAmDvIAHAxQAKBAAJARQAZAfA3BcQA2BCA+BWQAYAeAWBwQANBfgbBKQgkA5ASCjQAICEAKA+QAAAigeBwQgYBLgoAAIgKgBg");
	this.shape_8.setTransform(1153.9,306.9);
	this.shape_8._off = true;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-62.7,0.2,63.8,0.2).s().p("AILZ3QgtgljAjkQibi1hFhYQgegpguioQgpiKgMhcQgIhkAKiHIACgTIAFgoQAnk5AdibIAQhhIAKgpQAriKAyh7IAkhZIAchHQAZg/ADh+QAGhvgChAQAEhOgmhKIgPgZIgGgEQglgYgrgMQgggJgigDQgcAEjtgPIkQgTQgvgDhChBQBXAAAagrQAjggAbgMQBIAABVh/QATggCBglQBnggA+gKQAngEBkAtQAeAMAbAPQAzAaAqAeQAiAbAbA/QAxBqAkBjIAFANQAeA6AcFTIAFA0QAGA6gZBrQgSBTggBxQgNAqgnBbQgSAtgQA4QgQAzgPA8QggCTAlDvIAHAwQAJBAAKAJQAZAeA7BbQA3BBBABUQAZAdAZBwQARBegbBLQgiA6AWCiQANCFAKA9QABAhgaBxQgXBNgpAAIgJgBg");
	this.shape_9.setTransform(1154.2,307.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-62.3,0.2,62.4,0.2).s().p("AIRZuQgugkjGjfQifixhIhWQgegng0inQgsiJgOhcQgLhkAGiKIABgSIAFgoQAjk6AlicIAPhiIAJgoQAsiLA0h6IAkhZIAehKQAbg/ALiAQAKhuABhBQAIhOgghAIgQgZIgFgEQgmgYgrgLQgggIgjgDQgdAFjrgMIkRgPQgvgChChAQBWgBAagsQAighAbgMQBIgBBTiAQASghCBgnQBnghA+gLQAngEBlArIA5AaQA0AaApAdQAiAbAdA/QAzBoAmBlIAEAOQAdA6AMFXIADA0QADA7geBnQgUBSggBvQgNAqgoBbQgSAtgRA3QgQAzgPA8QghCSAkDvIAHAxQAJBAALAAQAaAdA9BaQA5A/BCBSQAaAeAcBuQATBegYBLQghA8AaChQAQCEANA9QABAhgXByQgVBOgqAAIgIAAg");
	this.shape_10.setTransform(1155,308.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-62,0.1,62.2,0.1).s().p("AIVZjQgvgjjMjaQikishKhUQgggng3imQgviHgShcQgNhjACiMIABgTIAEgoQAfk6AqieIAShiIAKgoQApiKA2h6IAmhZIAfhNQAcg+ATiDQAPhuAEhAQALhNgZg3IgQgZIgGgDQgmgYgrgLQgggHgjgCQgeAFjqgJIkRgKQgwgChDg/QBXgCAZgtQAighAagMQBIgDBSiBQARghCAgpQBngiA9gMQAngFBmApIA5AaQA1AZAqAdQAiAZAdA/QA1BoAoBmIAEAOQAcA7gFFbIABAzQABA8gjBjIg2C+QgNAqgpBbQgSAtgRA3QgRAzgPA6QghCTAjDvIAGAwQAJBAAMgIQAaAdA/BYQA8A+BEBQQAaAcAfBuQAWBegXBLQgfA8AfChQATCDAOA+QADAhgVByQgTBQgrAAIgGAAg");
	this.shape_11.setTransform(1156,309.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-61.7,0,62,0).s().p("AIYZXQgwgijSjUQioiohLhSQgigmg7ikQg0iHgThaQgQhjgCiOIABgTIADgoQAck7AvifIAShiIAKgpQAriKA3h5IAmhYIAhhRQAeg9AbiEQAThuAIg/QAOhNgTgtIgRgZIgFgDQgmgXgsgLQgggGgjgCQgeAFjqgFIkSgGQgvgChEg+QBXgDAYgtQAhgiAbgMQBIgEBPiCQARghCAgrQBmgkA9gNQAngFBmAoIA6AYQA0AYArAdQAjAZAeA+QA2BnAqBpIAEANQAaA8gUFdIgCA0QgCA7gnBfIg4C8QgNAqgpBaQgTAtgSA3QgRAzgPA5QgiCTAjDvIAGAwQAJBAALgQQAbAcBCBWQA9A8BGBPQAbAbAiBtQAYBdgUBNQgeA8AjCgQAXCDAQA9QADAhgRBzQgSBRgsAAIgFAAg");
	this.shape_12.setTransform(1157,310.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-61.5,-0.1,61.8,-0.1).s().p("AIbZKQgwghjYjOQisijhOhQQghgmhCiiQg2iFgWhaQgThjgHiQIABgSIADgoQAYk7A1ihIAShjIAKgoQAuiKA3h6IAnhXIAjhUQAfg8AjiGQAZhsAJg/QAShNgOgjIgRgZIgFgDQgmgWgtgKQgfgGgjgBQgeAGjrgCIkRgDQgvAAhFg9QBWgFAYgtQAhgjAagMQBIgFBNiDQARgiB/gsQBmgmA9gNQAmgHBnAnIA6AXQA2AYAqAcQAjAYAgA+QA3BmArBrIAEANQAaA8gmFfIgEA0QgEA7gsBbQgbBRgeBoQgNAqgqBaQgUAtgSA2QgSAzgPA5QghCSAhDvIAGAxQAJBAAMgZQAcAbBDBVQA/A6BIBNQAcAbAkBrQAbBdgSBNQgdA9AoCfQAaCCARA9QAFAggPB0QgPBTgtAAIgEAAg");
	this.shape_13.setTransform(1158,311.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-61.2,-0.2,61.6,-0.2).s().p("AIeY8QgygfjdjIQixighQhNQghglhGigQg7iEgYhZQgVhigLiSIABgTIADgoQATk6A6ikIAThjIALgoQAuiJA5h6IAnhYIAlhWQAhg7AriHQAdhrANg/QAVhLgIgaIgSgYIgFgDQgngWgsgJQgggGgjAAQgeAGjqACIkSABQgvAAhGg8QBXgFAWguQAhgjAagNQBIgGBLiEQARgiB+guQBlgoA9gOQAngHBnAlIA6AXQA2AXArAbQAjAYAhA9QA4BmAuBsIADAOQAZA7g2FhIgHAzQgHA7gwBXQgcBQgeBnQgOApgqBaQgUAsgTA3QgSAzgPA3QgjCSAiDwIAGAwQAIBBALgiQAdAaBGBTQBAA5BKBLQAcAZAoBsQAdBbgQBOQgaA9ArCeQAeCCATA8QAFAhgLBzQgOBVguAAIgCAAg");
	this.shape_14.setTransform(1159.1,312.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-60.8,0,61.1,0).s().p("AIOZaQgwghjRjVQioiphLhSQgfgng9ijQgziHgThbQgQhjgCiRIABgSIAFgoQAik6A8igIAUhbIAKgpQAriJArh4IAjhZIAghWQAeg9AeiIQAVhtAJhAQAPhMgTguIgQgZIgGgDQglgXgsgLQgfgIgkgCQgdAGjrgJIkRgKQgvgChDg/QBWgCAZgtQAighAagMQBIgDBRiBQASghCAgpQBngjA9gLQAngFBmApIA5AZQA1AZAqAdQAiAZAeA/QA0BoAoBpIAEAOQAaA7gaFdIgCA0QgDA7gpBcQgYBRgZBqQgMAqgmBbQgRAugQA3IgiB4QgnCRAZDxIAFAwQAGBBAMgbQAbAcBBBXQA9A8BGBPQAbAcAhBsQAYBegUBMQgeA8AiCgQAXCEAPA8QADAhgRBzQgSBSgrAAIgGgBg");
	this.shape_15.setTransform(1157.8,309.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-60.3,0.2,60.8,0.2).s().p("AH9Z0QgugljFjfQieizhGhWQgggogxinQgriJgOhcQgLhkAHiPIACgTIAGgnQAwk4A8idIAVhTIAKgpQAsiKAbh1IAfhbIAbhVQAZg/AUiIQANhuADhAQAJhOgdhBIgPgZIgGgEQgkgZgsgMQgegJgkgEQgeAEjqgSIkQgWQgvgEhBhCQBXACAagsQAkggAbgLQBIAABXh9QATggCBgjQBpgfA9gJQAngDBkAuQAdAMAbAPQAzAbApAfQAhAbAbBAQAwBqAjBlIAEAOQAbA8AEFXIABAzQABA8ghBgQgSBTgWBrQgJArgiBdQgPAvgNA4IgiCFQgsCQARDxIADAxQAEBAANgTQAZAdA9BbQA5A/BBBTQAZAcAcBvQASBfgZBLQghA6AaCiQAPCFAMA9QABAhgYByQgVBOgrAAIgHgBg");
	this.shape_16.setTransform(1156.7,307.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-60.9,0.3,61.8,0.3).s().p("AHeaJQgrgoi4jqQiUi7hChaQgcgqgpiqQgjiLgJhdQgEhkAOiNIADgSIAIgoQA9k1A+iZQARg7AGgRIAJgpQAriKAMhyIAahcIAWhUQAVhBAJiGQAEhvgBhAQADhOgphUIgOgbIgFgEQgjgagsgPQgegJgjgGQgeADjpgdIkPghQgvgGg+hEQBXAFAcgrQAkgeAcgKQBIADBch5QAVggCCgdQBqgaA+gGQAngCBiAyIA3AeQAyAdAnAgQAhAdAYBBQArBrAeBjIAEAOQAcA6AfFQIAGAzQAGA8gaBjIgeDCQgIArgdBfQgMAvgLA5QgKA1gXBdQgwCPAIDxIABAxQACBBANgNQAYAeA3BfQA1BCA9BWQAYAeAUBxQAOBfgdBKQglA4AQCjQAJCFAIA+QgBAhgeBwQgZBLgoAAIgLgBg");
	this.shape_17.setTransform(1156.8,306.1);
	this.shape_17._off = true;

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-59.9,0.3,60.8,0.3).s().p("AHjaFQgsgni9jnQiYi3hDhZQgdgpgsipQgmiMgLhbQgGhlALiOIADgSIAHgoQA6k1A+ibIAXhQIAKgoQAsiJAVh0IAdhcIAZhSQAXhBAMiFQAIhvAAhAQAGhOgnhSIgNgaIgGgEQgjgbgqgPQgfgKgjgFQgeACjpgfIkPgkQgugGg9hGQBWAHAdgqQAlgfAcgJQBIAEBdh5QAUgfCEgcQBogaA/gFQAogBBhAzIA2AeQAzAeAnAhQAfAcAYBCQAqBsAdBjIAEAOQAbA8AVFRIAEAzQAFA7gdBkIgkDBQgKArggBeQgOAugMA4IgjCMQgwCPALDxIABAxQADBBANgQQAZAdA4BdQA3BCA+BVQAYAeAYBvQAPBggcBJQgjA6AUCiQAKCFAKA+QAAAhgcBxQgZBMgoAAIgJgBg");
	this.shape_18.setTransform(1160.1,309.4);
	this.shape_18._off = true;

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-58.8,0.3,59.9,0.3).s().p("AHnaAQgtgmjBjjQibi0hGhYQgcgpgxinQgpiLgMhcQgIhjAIiQIACgSIAHgoQA2k3A/ibQAPg7AHgZIALgoQAuiJAeh1IAghaIAchRQAZg/APiFQALhuAChAQAIhOgjhQIgOgaIgFgEQgjgcgqgPQgfgLgjgFQgeABjoghIkPgmQgvgHg8hGQBXAHAdgqQAlgdAcgJQBIAEBeh4QAVgeCEgcQBogYBAgEQAngCBhA0IA2AfQAyAfAnAhQAfAdAXBBQApBtAcBlIAEANQAaA8ALFTIADAzQACA8gfBjIgrDAQgKAqgkBdQgPAugPA4IgkCFQgvCPANDxIACAxQADBAANgTQAZAdA7BcQA4BABABUQAZAdAZBvQARBggaBKQgiA6AXCiQANCFALA9QABAhgbByQgWBMgpAAIgJAAg");
	this.shape_19.setTransform(1163.3,312.7);
	this.shape_19._off = true;

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-58.2,0.3,58.5,0.3).s().p("AHoZ6QgvgljFjfQieixhIhWQgdgpg0imQgsiKgOhbQgLhlAGiPIACgTIAHgoQAxk3BCidIAVhXIALgoQAwiJAmh1IAkhZIAehQQAbg+ASiEQAPhuADhAQAKhNgghOIgNgaIgFgEQgjgdgqgPQgfgLgigGQgeACjpgkIkOgpQgvgHg7hHQBWAJAegqQAlgdAcgKQBIAGBfh3QAWgfCEgaQBogWBAgFQAnAABhA0IA2AgQAxAfAmAhQAgAeAWBCQAoBtAbBlIADAOQAaA8ABFUIABA0QABA7giBjIgxC+QgNAqgmBcQgRAugRA3IgkB9QgvCQAPDxIACAxQAEBAANgXQAaAdA8BbQA5A/BCBSQAaAdAbBvQATBegYBLQghA7AaChQAQCFAMA9QABAhgYByQgVBPgpAAIgIgBg");
	this.shape_20.setTransform(1167,316.2);
	this.shape_20._off = true;

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-57.6,0.3,57.8,0.3).s().p("AHnZzQgvgkjKjbQiiiuhJhUQgegog3imQgviIgQhcQgMhjACiRIACgTIAGgoQAtk4BDieIAXhbIALgoQAxiHAvh2IAmhYIAhhOQAdg+AWiCQARhuAFhAQAMhMgdhMIgNgbIgFgEQgjgcgqgQQgegMgigFQgeABjogmIkOgsQgvgIg7hHQBXAJAegpQAlgdAcgJQBIAGBhh2QAWgeCEgZQBogVBAgEQAnAABgA1QAdAPAZASQAxAfAmAiQAfAeAWBCQAnBtAaBnIADAOQAYA9gJFUIAAA0QAAA7glBiIg4C9QgOAqgpBaQgTAtgSA2IgmB3QgtCQAQDxIADAxQAEBAANgbQAbAdA+BZQA6A/BEBQQAZAdAeBuQAVBegXBLQgfA8AdChQASCDANA+QADAhgWByQgUBQgqAAIgHgBg");
	this.shape_21.setTransform(1170.7,319.7);
	this.shape_21._off = true;

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-61.8,0.3,62.6,0.3).s().p("AHqaHQgsgoi5jpQiUi6hChaQgdgqgpiqQgkiLgJhcQgEhlANiKIADgSIAHgoQA3k3AyiaIAUhTIAJgoQAriLAYh1IAdhbIAYhPQAWhBAEiCQAEhugDhBQADhOgrhUIgOgaIgGgDQgkgbgqgOQgfgKgjgEQgcADjrgZIkQgeQgvgFg+hEQBVAEAdgqQAkggAcgJQBHACBbh7QATggCDgfQBpgbA+gHQAngDBjAxIA3AdQAzAdAoAfQAgAdAZBAQAtBrAfBiIAEAOQAeA6AjFPIAGA0QAHA6gYBoQgOBUgWBvQgJArggBeQgOAugNA5IggCHQgrCRASDwIADAxQAFBBALgDQAYAfA3BdQA2BCA9BWQAYAeAVBxQANBfgcBKQgkA4AQCjQAJCFAIA+QAAAhgeBwQgaBLgnAAIgKgBg");
	this.shape_22.setTransform(1155.9,306.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-62.7,0.3,63.6,0.3).s().p("AH1aEQgsgni6jqQiUi5hDhaQgdgqgpipQgkiMgKhcQgFhkAOiHIACgTIAHgoQAvk4AmiaIAShaIAKgoIBOkDIAghaIAahKQAWhAABh/QABhvgDhAQAChOgshTIgPgaIgFgDQgkgagsgNQgegKgjgEQgcAEjsgXIkQgaQgvgEg/hDQBWADAbgrQAkggAbgKQBIABBZh8QATggCDghQBogdA+gIQAngDBjAwIA4AcQAzAcAoAfQAhAcAaBAQAuBrAhBhIAEAOQAeA6AoFPIAHAzQAIA6gWBrQgPBUgbBxQgLArgjBcQgQAugOA4IgfB8QgmCSAcDwIAFAwQAHBBAKAHQAYAeA4BeQA2BCA9BWQAYAeAVBwQAPBggdBJQgkA5ARCiQAJCFAJA/QgBAhgdBwQgaBLgnAAIgKgBg");
	this.shape_23.setTransform(1154.9,306.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-63.5,0.1,63.6,0.1).s().p("AIiZjQgvgjjLjbQiiiuhJhUQgggog2ilQgviJgRhbQgMhjAEiEIABgTIACgoQAQk8AGiZQAEg9AIg3IAKgoQAriKBXiAIAthUQASgiARgbQAeg+AGh4QAKhvACg/QAIhOgghBIgPgZIgGgEQgkgYgsgMQgfgIgjgDQgcAEjtgOIkRgQQgvgDhBhBQBWAAAagsQAjghAbgLQBIgBBUh/QASghCBgmQBoggA9gKQAngFBlAsIA5AbQA0AaApAeQAhAbAdA/QAyBpAlBlIAEANQAcA7ALFXIADA0QACA7geBtQgYBRgwBwQgRAogyBWQgWArgXA1QgWAygIAaQgRCWA8DpIAMAwQAQA/ALAXQAaAcA/BZQA6A/BEBQQAaAcAeBuQAVBegWBMQggA8AeCgQASCEAOA9QACAhgVBzQgUBPgqAAIgHAAg");
	this.shape_24.setTransform(1154.3,309.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-64.4,0,64.7,0).s().p("AI7Y6QgxggjbjLQiuihhPhPQgjgmhCihQg5iEgXhaQgThjgFiBIgBgTIgBgoQgLk8gNiYQgDg8ALhJIAKgoQAsiHB9iBIA4hOQAWggATgXQAlg5AOh1QAVhuAIg/QAPhNgTguIgQgZIgGgDQglgYgsgLQgfgIgjgBQgcAEjtgIIkRgLQgvgChDg/QBWgCAZgtQAighAbgMQBIgDBRiBQASghCAgoQBngjA/gLQAlgFBmApIA5AaQA0AZAqAdQAjAZAdA/QA0BoAoBpIAEAOQAaA7gYFdIgCA0QgDA7goBsQgiBOg+BqQgXAlg7BQQgcAogdAyQgOAXgGgIQgHABgBAWQgCCXBTDiIAQAuQAWA+AOAdQAcAaBFBUQA/A6BJBLQAcAbAmBrQAcBdgRBNQgbA9ApCeQAcCCASA9QAFAggNB0QgPBUgtAAIgDAAg");
	this.shape_25.setTransform(1155.5,312.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-65.5,-0.2,65.7,-0.2).s().p("AE4UuQi6iVhVhIQglgjhOibQhCiAgdhYQgbhhgNiAIgDgSIgFgoQgmk6gfiTQgIg9AMhZIALgnQAWhBBHhJQA9hFA3g1IA/hGQAagcATgSQArg1AYhyQAfhrAOg+QAWhLgJgbIgQgZIgGgDQgmgXgsgKQgfgGgkgCQgbAGjtgEIkRgFQgwAAhEg+QBWgEAYgtQAhgjAbgMQBIgEBPiDQAQghCAgrQBmglA/gNQAlgGBmAoQAeAKAcAOQA1AYArAcQAiAZAfA+QA2BnArBsIADAOQAYA8g7FgIgHAzQgJA6gyBqQgqBKhNBjQgaAihFBIQggAkgkAuQgQAVgFgaQgGgNADASQAMCXBpDZIAUAsIAuBeQAdAYBLBPQBEA1BOBGQAeAYAuBoQAiBagLBOQgXBAA1CbQAlB/AXA7QAHAggEB0QgJBZgwAAQg0gdjoi6g");
	this.shape_26.setTransform(1156.7,316.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-65.5,-0.2,65.7,-0.2).s().p("AE4UuQi6iVhVhIQglgjhOibQhCiAgdhYQgbhhgNiAIgDgSIgFgoQgmk6gfiTQgIg9AMhZIALgnQAWhBBHhJQA9hFA3g1IA/hGQAagcATgSQArg1AYhyQAfhrAOg+QAVhLgIgbIgQgZIgGgDQgmgXgsgJQgfgIgkgBQgbAGjtgEIkRgFQgwAAhEg+QBWgEAYgtQAhgiAbgNQBIgEBOiDQASghB/grQBmglA/gNQAlgGBmAoQAeAKAcAOQA1AYArAcQAiAZAfA+QA2BnArBsIADAOQAYA8g8FgIgHAzQgIA6gyBqQgqBKhNBjQgaAihFBIQggAkgkAuQgQAVgFgaQgGgNADASQAMCXBpDZIAUAsIAtBeQAeAYBLBPQBEA1BOBGQAeAYAuBoQAiBagLBOQgXBAA1CbQAlB/AXA7QAHAggEB0QgJBZgwAAQg0gdjoi6g");
	this.shape_27.setTransform(1156.7,316.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-65.5,-0.2,65.7,-0.2).s().p("AE4UuQi5iVhWhIQglgjhOibQhCiAgdhYQgbhhgNiAIgDgSIgFgoQgmk6gfiTQgIg9AMhZIALgnQAWhBBHhJQA9hFA3g1IA/hGQAagcATgSQArg1AYhyQAfhqANg/QAWhLgIgbIgQgZIgGgDQgmgXgsgJQgggIgjgBQgcAGjsgEIkSgEQgvgBhEg+QBWgDAYguQAhgiAbgMQBIgFBOiCQARgiB/grQBnglA/gNQAlgGBmAoQAeAKAcAOQA1AYAqAcQAkAZAeA+QA3BmAqBtIADAOQAYA8g8FgIgHAzQgIA6gyBqQgqBKhNBjQgaAihFBIQggAkgkAuQgQAVgFgaQgGgNADASQAMCXBpDZIAUAsIAtBeQAeAYBLBPQBEA1BOBGQAeAYAuBoQAiBagLBOQgXBAA1CaQAlCBAXA6QAHAggEB0QgJBZgwAAQg0gdjoi6g");
	this.shape_28.setTransform(1156.7,316.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-65.5,-0.2,65.7,-0.2).s().p("AE4UuQi5iVhVhIQgmgjhOibQhCiAgdhYQgbhhgNiAIgDgSIgFgoQgmk6gfiTQgIg9AMhZIALgnQAWhBBHhJQA9hFA3g0IA/hHQAagcATgSQArg1AYhyQAfhqANg/QAWhLgIgbIgQgYIgGgEQgngXgrgJQgggIgjAAQgcAFjsgDIkSgFQgvgBhEg9QBWgFAYgsQAigjAagMQBIgFBOiCQARghB/gsQBmglBAgNQAkgGBnAoQAeAKAcAOQA0AYArAcQAjAZAfA+QA3BmAqBtIADAOQAYA8g8FgIgHAzQgIA6gyBqQgqBKhNBjQgaAihFBIQggAkgkAuQgQAVgFgaQgGgNADASQAMCXBpDZIAUAsIAtBeQAeAYBLBPQBDA1BPBGQAeAYAuBoQAiBagLBOQgXBAA1CaQAlCBAXA6QAHAggEB0QgJBZgwAAQgzgdjpi6g");
	this.shape_29.setTransform(1156.7,316.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-65.5,-0.2,65.7,-0.2).s().p("AE4UuQi5iVhVhIQgmgjhOibQhCiAgdhYQgbhhgNiAIgDgSIgFgoQgmk6gfiTQgIg9AMhZIALgnQAWhBBHhJQA9hFA3g0IA/hHQAagcATgSQArg1AYhyQAfhqANg/QAWhLgIgbIgQgYIgGgEQgmgXgsgJQgggHgjgBQgcAFjsgDIkSgFQgvAAhEg+QBWgEAYgtQAigjAagMQBIgEBOiDQARghB/gsQBmgkA/gOQAlgGBnAoIA5AYQA2AYAqAcQAjAZAfA+QA3BmAqBtIADAOQAYA8g8FgIgHAzQgIA6gyBqQgqBKhNBjQgaAihFBIQggAkgkAuQgQAVgFgaQgGgNADASQAMCXBpDZIAUAsIAtBeQAeAYBLBPQBDA1BPBGQAeAYAuBoQAiBagLBOQgXBAA1CaQAlCBAXA6QAHAggEB0QgJBZgwAAQgzgdjpi6g");
	this.shape_30.setTransform(1156.7,316.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-65.5,-0.3,65.7,-0.3).s().p("AE4UtQi6iUhUhJQgmgihOicQhCiAgdhYQgbhggNiAIgDgTIgFgoQgmk5gfiUQgIg8AMhaIALgmQAWhBBHhJQA9hGA3g0IA/hGQAagdATgSQArg1AXhxQAghrANg/QAWhLgIgaIgQgZIgGgDQgmgXgsgKQgggGgjgCQgcAGjsgEIkSgEQgvAAhEg+QBWgEAYgtQAhgjAbgMQBHgFBPiCQARgiB/grQBnglA+gNQAlgGBmAnIA6AYQA2AYAqAcQAjAZAfA+QA2BmArBuIADANQAYA8g8FgIgHAzQgIA7gyBpQgqBLhNBiQgaAjhFBHQggAkgkAuQgQAWgFgaQgGgNADASQAMCWBpDaIAUAsIAtBdQAeAYBLBPQBDA2BPBFQAeAYAuBpQAiBagLBOQgXBAA1CaQAlCAAXA6QAHAhgEB0QgJBYgwAAQgzgcjpi7g");
	this.shape_31.setTransform(1156.7,316.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-65.5,-0.2,65.7,-0.2).s().p("AE4UtQi6iUhUhJQgmgihOicQhCiAgdhYQgbhggNiAIgDgSIgFgpQgmk5gfiUQgIg8ANhaIAKgmQAWhBBHhJQA9hFA3g1IA/hGQAZgdAUgSQArg1AXhxQAghrANg/QAWhLgIgaIgRgZIgFgDQgmgXgsgKQgggGgjgCQgcAGjsgDIkSgFQgvAAhEg+QBWgEAYgtQAhgjAagMQBIgEBPiDQAQghCAgsQBmglA/gNQAlgGBmAnIA6AYQA1AYArAcQAiAZAgA+QA2BmArBuIADANQAYA8g8FgIgHAzQgIA7gyBpQgqBLhNBiQgaAjhFBHQggAkgkAuQgQAWgFgaQgGgNADASQAMCWBpDaIAUAsQAbA7ASAiQAeAYBLBPQBDA2BPBFQAeAYAuBpQAiBagLBOQgXBAA1CaQAlCAAXA6QAHAhgEB0QgJBYgwAAQgzgcjpi7g");
	this.shape_32.setTransform(1156.7,316.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-65.5,-0.2,65.7,-0.2).s().p("AE4UtQi6iUhUhJQgmgihOicQhCiAgdhYQgbhggNiAIgDgSIgFgpQgmk5gfiUQgIg8ANhaIAKgmQAWhBBHhJQA9hFA3g1IA/hGQAZgdAUgSQAqg1AYhxQAfhrAOg/QAWhLgIgaIgRgZIgFgDQgmgXgsgJQgggIgjgBQgcAGjsgDIkSgEQgvgBhEg+QBVgDAZguQAhgiAagNQBIgEBPiDQAQghCAgsQBmglA/gNQAlgGBmAoQAeAKAcANQA1AYArAcQAiAZAfA+QA3BmArBuIADANQAYA8g8FgIgHAzQgIA7gzBpQgpBLhNBiQgaAjhFBHQggAkgkAuQgQAWgFgaQgGgNADASQAMCWBpDaQAKAZAKATQAbA7ASAiQAeAYBLBPQBDA2BPBFQAeAYAuBpQAiBagLBOQgXBAA1CaQAlCAAXA6QAHAhgEB0QgJBYgwAAQgzgcjpi7g");
	this.shape_33.setTransform(1156.7,316.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-65.5,-0.2,65.8,-0.2).s().p("AE4UtQi6iUhUhJQgmgihOicQhCiAgdhXQgbhigNh/IgDgSIgFgoQgmk6gfiUQgIg8ANhaIAKgmQAWhBBHhJQA9hFA3g1IA/hGQAZgdAUgSQArg1AXhxQAfhrAOg/QAWhLgIgaIgRgZIgFgDQgmgXgsgJQgggIgjAAQgcAFjsgDIkSgEQgvgBhFg9QBXgFAYgtQAhghAagNQBIgFBOiDQASghB+gsQBngkA/gOQAkgGBnAoQAeAKAcANQA1AYArAcQAiAZAfA+QA3BmArBuIADANQAYA8g8FgIgHAzQgIA7gzBpQgpBLhNBiQgaAjhFBHQggAkgkAvQgQAVgFgaQgGgNADASQAMCWBpDaQAKAZAKATQAbA7ASAiQAeAYBLBPQBDA2BPBFQAeAYAuBpQAiBagLBOQgXBAA1CaQAlB/AXA7QAHAhgEB0QgJBYgwAAQgzgcjpi7g");
	this.shape_34.setTransform(1156.7,316.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-65.5,-0.2,65.8,-0.2).s().p("AE4UtQi6iUhUhJQgmgihOicQhCiAgdhXQgbhigOh/IgCgSIgFgoQgmk6gfiUQgIg8ANhaIAKgmQAWhBBHhJQA9hFA3g1IA/hGQAZgdAUgSQArg1AXhxQAfhrAOg/QAWhLgIgaIgRgZIgFgDQgmgXgsgJQgggIgjAAQgbAFjugDIkRgEQgwAAhEg+QBXgEAXgtQAigjAagMQBIgFBOiDQARghB/grQBmgmA/gMQAlgHBnAoQAeAKAcANQA0AYArAcQAkAZAeA+QA3BmArBtIADAOQAYA8g8FgIgHAzQgIA7gzBpQgqBLhMBiQgaAjhFBHQggAkgkAvQgQAVgFgaQgGgNADASQAMCWBoDaIAVAsQAbA7ASAiQAeAYBLBPQBDA2BPBFQAeAYAuBpQAiBagLBOQgXBAA1CaQAlB/AXA7QAHAhgEB0QgJBYgwAAQgzgcjpi7g");
	this.shape_35.setTransform(1156.7,316.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-65.5,-0.2,65.8,-0.2).s().p("AE4UtQi6iThUhKQgmgihOicQhCh/gdhYQgbhigOh/IgCgSIgFgoQgmk6gfiUQgIg8ANhaIAKgmQAWhBBHhJQA9hFA3g1IA/hGQAZgdAUgSQArg1AXhxQAfhrAOg/QAWhLgIgaIgRgZIgFgDQgmgXgsgJQgggHgjgBQgbAGjugEIkRgEQgwAAhEg+QBXgEAXgtQAhgiAbgNQBIgEBOiDQARgiB/grQBmgmA/gMQAlgHBnAoQAeAKAbAOQA2AXAqAcQAjAZAfA+QA2BmAsBtIADAOQAYA8g8FgIgHAzQgIA7gzBpQgqBLhMBiQgaAjhFBHQggAkgkAvQgQAVgFgaQgGgNADASQAMCXBoDZIAVAsQAbA7ASAiQAeAYBLBPQBDA2BPBFQAeAYAuBpQAiBagLBOQgXBAA1CaQAmB/AWA7QAHAhgEB0QgJBYgwAAQgzgcjpi7g");
	this.shape_36.setTransform(1156.7,316.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-65.5,-0.2,65.8,-0.2).s().p("AE4UtQi6iThUhJQgmgjhOicQhCh/gdhYQgbhhgOiAIgCgSIgFgoQgmk6gfiUQgIg8ANhaIAKgmQAWhBBHhJQA9hFA3g1QAhglAeghQAZgdAUgSQArg1AXhxQAfhrAOg/QAWhLgIgaIgRgZIgFgDQgmgXgtgJQgegHgkgBQgbAGjugDIkRgEQgvgBhFg+QBXgDAXguQAhgiAbgNQBIgEBOiDQARghB/gsQBnglA+gNQAlgGBmAnQAeAKAcAOQA2AXAqAcQAjAZAfA+QA3BmArBtIADAOQAYA8g8FgIgHAzQgIA7gzBpQgqBLhMBiQgaAjhFBHQggAkgkAvQgQAVgFgaQgGgNADASQAMCXBoDZIAVAsIAtBdQAeAYBLBPQBDA2BPBFQAeAYAuBpQAiBagLBOQgXBAA1CaQAmB/AWA7QAHAhgEB0QgJBYgwAAQgzgcjpi7g");
	this.shape_37.setTransform(1156.7,316.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-65.5,-0.2,65.8,-0.2).s().p("AE4UtQi6iThUhJQgmgjhOibQhCiAgdhYQgchhgNiAIgCgSIgFgoQgmk6gfiUQgIg8ANhaIAKgmQAWhBBHhJQA9hFA3g1QAhglAeghQAZgdAUgSQArg1AXhxQAfhrAOg/QAVhLgHgaIgRgYIgFgEQgmgXgtgJQgfgHgjgBQgbAGjugDIkRgEQgvgBhFg9QBXgEAXgtQAhgjAbgMQBIgFBOiDQARghB/gsQBmglA/gNQAlgGBmAnIA6AYQA1AYArAbQAjAZAfA+QA3BmArBtIADAOQAYA8g8FgIgHAzQgIA7gzBpQgqBLhMBiQgaAjhFBHQggAlgkAuQgQAVgFgaQgGgNADASQAMCXBoDZIAVAsIAtBdQAeAYBLBPQBDA2BPBFQAeAYAtBpQAkBagMBOQgXBAA1CaQAmB/AWA7QAHAhgEB0QgIBYgxAAQgzgcjpi7g");
	this.shape_38.setTransform(1156.7,316.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-65.5,-0.2,65.8,-0.2).s().p("AE4UtQi6iThUhJQgmgjhOibQhCiAgehYQgbhhgNiAIgCgSIgFgoQgmk6gfiUQgIg8ANhaIAKgmQAWhBBHhJQA9hFA3g1IA/hGQAZgdAUgSQArg1AXhxQAfhrAOg/QAWhLgIgaIgRgYIgFgEQgmgWgtgKQgfgHgjgBQgcAGjtgDIkRgEQgvAAhFg+QBXgEAXgtQAhgjAbgMQBIgFBOiDQAQghCAgsQBmglA/gNQAlgGBmAnIA6AYQA1AYArAbQAiAZAgA+QA3BmArBtIADAOQAYA8g8FgIgHAzQgIA7gzBpQgqBLhMBiQgaAjhFBIQggAkgkAuQgQAVgFgaQgGgNADASQAMCXBoDZIAVAsIAtBdQAeAYBLBPQBDA2BPBFQAeAYAtBpQAkBagMBOQgXBAA1CaQAmB/AWA7QAHAhgEB0QgIBYgxAAQgzgcjpi7g");
	this.shape_39.setTransform(1156.7,316.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-65.5,-0.3,65.8,-0.3).s().p("AE4UtQi6iUhUhJQgmgihOicQhCiAgehYQgbhggNiAIgDgTIgEgoQgmk5gfiUQgIg8ANhaIAKgmQAWhBBHhKQA9hFA3g0IA/hHQAZgcAUgSQArg1AXhyQAfhqAOg/QAWhLgIgaIgRgZIgFgDQgmgXgtgJQgfgIgjAAQgcAGjtgDIkRgEQgvAAhFg+QBWgEAYgtQAhgjAbgMQBIgFBOiDQAQghB/gsQBmgmBAgMQAkgHBnAnIA6AYQA1AYArAcQAiAZAgA+QA3BmAqBtIAEAOQAYA7g8FhIgHAzQgIA6gzBqQgqBKhMBjQgaAihFBIQggAkgkAuQgQAVgFgaQgGgMADASQAMCWBoDaIAVAsIAtBdQAeAYBLBPQBDA1BPBGQAeAYAtBoQAkBagMBOQgXBAA1CaQAmCAAWA7QAHAggEB0QgIBYgxABQgzgdjpi6g");
	this.shape_40.setTransform(1156.7,316.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-65.5,-0.3,65.8,-0.3).s().p("AE5UtQi6iUhVhJQgmgihNicQhCiAgehYQgbhggNiAIgDgTIgFgoQgmk5gfiUQgIg8ANhaIAKgmQAWhBBHhKQA+hFA2g0IA/hHQAagcATgSQArg1AYhyQAfhqANg/QAWhLgIgaIgQgZIgGgDQgngXgrgJQgggHgjgBQgcAGjsgDIkSgEQgvAAhFg+QBXgEAXgtQAigjAagMQBIgFBOiDQARghB/gsQBmglA/gNQAlgHBmAoQAeAKAcANQA1AYArAcQAjAZAfA+QA3BmArBtIADAOQAYA7g7FhIgHAzQgJA6gyBqQgqBKhMBjQgaAihGBIQggAkgjAuQgRAVgFgaQgFgMACASQAMCWBpDaIAUAsIAtBdQAeAYBLBPQBEA1BOBGQAeAYAuBoQAjBagMBOQgXBAA1CaQAnCAAWA7QAHAggFB0QgIBYgwABQg0gdjoi6g");
	this.shape_41.setTransform(1156.6,316.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-65.5,-0.2,65.8,-0.2).s().p("AE5UtQi6iUhVhJQgmgihNicQhCiAgehYQgbhggNiAIgDgTIgFgoQgmk5gfiUQgIg8ANhaIAKgmQAWhBBHhJQA+hGA2g0IA/hHQAagcATgSQArg1AYhyQAfhqANg/QAWhLgIgaIgQgZIgGgDQgngXgrgJQgggHgjgBQgcAGjsgDIkSgEQgvAAhFg9QBXgFAXgtQAhgiAbgNQBIgFBOiDQAQghCAgsQBmglA/gNQAkgGBnAnQAeAKAcANQA1AYArAcQAjAZAfA+QA3BmArBtIADAOQAYA7g8FhIgGAzQgJA6gyBqQgqBKhMBjQgaAihGBIQggAkgjAuQgRAVgFgaQgFgMACASQAMCWBpDaIAUAsIAtBdQAeAYBLBPQBDA1BPBGQAeAYAuBoQAjBagMBOQgXBAA1CaQAnCAAWA7QAHAggFB0QgIBYgwABQg0gdjoi6g");
	this.shape_42.setTransform(1156.6,316.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-65.5,-0.2,65.8,-0.2).s().p("AE5UtQi6iUhVhJQgmgihNicQhCiAgehYQgbhggNiAIgDgTIgFgoQgmk5gfiUQgIg8ANhaIAKgmQAWhBBHhJQA+hGA2g0IA/hHQAagcATgSQArg1AYhyQAfhqANg/QAWhLgIgaIgQgZIgGgDQgmgXgsgJQgggHgjgBQgcAGjsgDIkSgDQgvgBhFg9QBXgFAXgtQAhgiAbgNQBIgEBOiDQAQgiB/gsQBmglBAgNQAkgGBnAnIA6AXQA1AYArAcQAiAZAgA+QA3BmArBtIADAOQAYA7g8FhIgHAzQgIA6gyBqQgqBKhMBjQgaAihGBIQggAkgjAuQgRAVgFgZQgFgNACASQAMCWBpDaIAUAsIAtBdQAeAYBLBPQBDA1BPBGQAeAYAuBoQAiBagLBOQgXBAA1CaQAnCAAWA7QAHAggEB0QgJBYgwABQg0gdjoi6g");
	this.shape_43.setTransform(1156.6,316.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-64.9,-0.1,65.1,-0.1).s().p("AJGYlQgygejhjFQizichShMQgkgkhGifQg9iDgahZQgWhigJiBIgBgSIgDgpQgWk7gUiWQgEg9ALhQIAKgnQAtiECOiDIA5hLQAYgeATgVQAng4ASh0QAZhsALg/QARhNgOgmIgQgYIgGgEQgmgXgsgKQgfgHgjgCQgcAGjtgGIkRgIQgvAAhEg/QBWgDAYgtQAigiAbgMQBIgEBPiCQASghB/gqQBngkA/gMQAlgGBmAoIA5AZQA2AZAqAcQAiAZAeA+QA2BoApBqIAEAOQAZA7gmFfIgEA0QgFA6gsBsQgmBMhDBoQgYAlg/BMQgeAmggAxQgPAWgFgPQgHgEABAUQADCXBbDfIASAuQAYA8APAfQAeAZBHBSQBAA4BMBJQAdAaApBqQAfBbgPBOQgZA/AuCcQAgCBAUA8QAFAhgJBzQgMBWguAAIgCAAg");
	this.shape_44.setTransform(1156,314.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-64.3,0,64.6,0).s().p("AI3ZCQgyghjXjOQisikhOhPQgigmhAiiQg3iFgWhaQgShjgDiCIgBgTIAAgpQgGk7gJiZQgBg8AKhGIAKgoQAtiHB1iCIA2hPQAVggASgYQAjg6ANh2QAThtAHhAQANhNgVgyIgQgZIgGgDQglgYgsgLQgfgHgjgCQgcAEjtgJIkRgLQgwgBhChAQBWgCAZgsQAighAbgMQBIgDBSiBQARghCAgoQBogjA/gLQAlgFBlAqQAeALAbAOQA1AZAqAdQAiAaAdA/QA1BnAnBpIAEANQAbA8gRFcIgCA0QgBA6gmBtQggBPg8BrQgVAmg5BRQgbApgcAyQgbAwgBgBQgFCWBODkIAPAvQAUA9AOAcQAcAbBDBVQA/A6BIBNQAcAbAkBsQAbBcgTBNQgcA9AnCfQAbCCARA9QAEAhgOBzQgQBUgsAAIgEgBg");
	this.shape_45.setTransform(1155.3,311.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-63.7,0.1,63.9,0.1).s().p("AIoZbQgvgijPjYQilirhKhTQgggng5ilQgxiIgShbQgOhjADiDIAAgTIABgpQAKk7ADiaQADg8AJg7IAJgoQAsiJBeiBIAwhTIAjg8QAgg9AIh3QANhuAChBQAJhNgcg9IgQgZIgFgEQgmgYgrgLQgggIgjgDQgcAEjsgMIkRgPQgwgDhBhAQBWAAAagsQAighAbgMQBIgCBUh/QASggCAgnQBogiA9gKQAngFBlAsIA5AaQA0AaAqAdQAiAbAcA/QAzBoAmBmIAEAOQAcA6ADFZIACA0QACA7ggBtQgaBRgzBuQgTAogzBVQgYAqgYA1QgXAwgGAVQgOCVBADpIANAvQARA/ALAYQAbAcBABYQA8A9BEBQQAbAcAgBtQAWBegVBMQgfA8AgCgQAVCEAOA9QADAhgUByQgSBQgrAAIgGAAg");
	this.shape_46.setTransform(1154.5,309.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-63.1,0.2,63.9,0.2).s().p("AIZZwQgugljFjgQicizhHhWQgggpgxinQgqiKgOhbQgKhkAIiEIABgTIAEgoIAonVQAGg8AIgwIAKgoQAoiLBJh9IAqhXIAfhAQAcg/ACh5QAGhvAAhAQAEhNgkhJIgQgZIgFgEQglgZgsgMQgegIgkgDQgcAEjsgQIkRgSQgvgEhBhBQBXABAagsQAighAcgLQBIAABVh/QATggCBglQBnggA+gJQAngEBkAsQAeANAbAOQA0AbApAeQAiAbAbA/QAxBpAkBkIAEAOQAeA6AYFUIAFAzQAFA7gaBuQgVBSgqBxQgPApgtBZQgUArgVA3QgTAygLApQgXCUAzDsIAKAwQANA/ALAVQAZAeA8BaQA5BABBBSQAZAeAbBuQATBfgZBLQgiA6AZCiQAPCEAMA+QABAhgYBxQgWBOgpAAIgIAAg");
	this.shape_47.setTransform(1153.8,308.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-63.6,0.3,64.5,0.3).s().p("AIBaAQgsgni7joQiVi5hDhaQgegqgpipQgliMgKhcQgFhkAOiFIACgSIAGgoQAok6AaiZIAQhgIAJgpQAqiLAxh6IAjhaIAahEQAYhAgEh7QAAhvgEhAQABhOgthSIgPgaIgGgDQgkgagsgMQgegJgkgEQgcAEjrgTIkRgWQgvgFhAhBQBWABAbgrQAkggAbgLQBIAABXh9QATggCBgjQBpgeA9gJQAngDBkAuIA4AbQAzAcApAfQAhAbAbBAQAwBqAiBhIAEANQAfA6AtFOIAHAzQAJA6gUBuQgRBUggByQgMAqgmBcQgRAtgRA4QgPAzgPA+QggCSAmDvIAHAxQAKBAAJARQAZAfA3BcQA2BCA+BWQAYAeAWBwQANBfgbBKQgkA5ASCjQAICEAKA+QAAAigeBwQgYBLgoAAIgKgBg");
	this.shape_48.setTransform(1153.9,306.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-63.6,0.3,64.5,0.3).s().p("AIBaAQgsgni7joQiVi5hDhaQgegqgpipQgliMgKhcQgFhkAOiFIACgSIAGgoQAok6AaiZIAQhgIAJgpQAqiLAxh6IAjhaIAahEQAYhAgEh7QAAhvgEhAQAAhOgshSIgPgaIgGgDQgkgagsgMQgegJgkgEQgcAEjsgTIkQgXQgvgDhAhCQBWABAbgrQAkggAbgLQBIAABXh9QATggCBgjQBpgeA9gJQAngDBkAuIA4AbQAzAcApAfQAhAbAbBAQAwBqAiBhIAEANQAfA6AtFOIAHAzQAJA6gUBuQgRBUggByQgMAqgmBcQgRAtgRA4QgPAzgPA+QggCSAmDvIAHAwQAKBBAJARQAZAfA3BcQA2BCA+BWQAYAeAWBwQANBfgbBKQgkA5ASCjQAICEAKA+QAAAigeBwQgYBLgoAAIgKgBg");
	this.shape_49.setTransform(1153.9,306.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-63.6,0.3,64.5,0.3).s().p("AIBaAQgsgni7joQiVi5hDhaQgegqgpipQgliMgKhcQgFhkAOiFIACgSIAGgoQAok6AaiZIAQhgIAJgpQAqiLAxh6IAjhaIAahEQAYhAgEh7QAAhvgEhAQAAhOgshSIgPgaIgGgDQgkgagsgMQgegJgkgEQgcAEjsgTIkQgXQgvgDhAhCQBWABAbgrQAjggAcgLQBIAABWh9QAUggCBgjQBpgeA9gJQAngDBkAuIA4AbQAzAcApAeQAhAcAbBAQAwBqAiBhIAEANQAfA6AtFOIAHAzQAJA6gVBuQgPBUghByQgMAqgmBcQgRAtgRA4QgPAzgPA9QggCUAmDuIAHAwQAKBBAJARQAZAfA3BcQA2BCA+BWQAYAeAWBwQANBfgbBKQgkA5ASCjQAICEAKA+QAAAigeBwQgYBLgoAAIgKgBg");
	this.shape_50.setTransform(1153.9,306.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-63.6,0.3,64.5,0.3).s().p("AIBaAQgsgni7joQiVi5hDhaQgegqgpipQgliMgKhcQgFhkAOiFIACgSIAGgoQAok6AZiZIARhgIAJgpQAqiLAwh6IAkhaIAahEQAYhAgEh7QAAhvgEhAQAAhOgshSIgPgaIgGgDQgkgagsgMQgegJgkgEQgcAEjsgTIkQgXQgvgDhAhDQBWADAbgsQAjggAcgLQBIAABWh9QAUggCBgjQBpgeA9gJQAngDBkAuIA4AbQAzAcApAeQAhAbAbBBQAwBqAiBhIAEANQAfA6AtFOIAHAzQAIA6gUBuQgPBUghByQgMAqgmBcQgSAtgQA4QgPAzgPA9QggCUAmDuIAHAwQAKBBAJARQAZAfA3BcQA2BCA+BWQAYAeAWBwQANBfgbBKQgkA5ASCjQAICEAKA+QAAAigeBwQgYBLgoAAIgKgBg");
	this.shape_51.setTransform(1153.9,306.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-63.6,0.3,64.5,0.3).s().p("AIBaAQgsgni7joQiVi5hDhaQgegqgpipQgliMgKhcQgFhkAOiFIACgSIAGgoQAok6AZiZIARhgIAJgpQAqiLAwh6IAjhaIAbhEQAYhAgEh7QAAhvgEhAQAAhOgshSIgPgaIgGgEQgkgZgsgMQgegJgkgEQgcAEjsgTIkQgXQgvgDhAhDQBWADAbgsQAjggAbgLQBJAABWh9QAUggCBgjQBpgeA9gJQAngDBkAuIA4AbQAzAcApAeQAhAbAbBBQAwBqAiBhIAEANQAfA6AtFOIAHAzQAIA6gUBuQgPBUghByQgMAqgnBcQgRAtgQA4QgPAzgPA9QggCUAmDuIAHAwQAKBBAJARQAZAfA3BcQA2BCA+BWQAYAeAWBwQANBfgbBKQgkA5ASCjQAICEAKA+QAAAigeBwQgYBLgoAAIgKgBg");
	this.shape_52.setTransform(1153.9,306.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-63.6,0.3,64.5,0.3).s().p("AIBaAQgsgni7joQiVi5hDhaQgegqgpipQgliMgKhcQgFhkAOiFIACgSIAGgoQAok6AZiZIARhgIAJgpQApiLAxh6IAjhaIAbhEQAYhAgEh7QABhvgFhAQAAhOgthSIgOgaIgGgEQgkgZgsgMQgegKgkgDQgcAEjsgTIkQgXQgvgDhAhDQBWADAbgsQAjggAbgLQBIABBXh+QAUggCBgjQBpgeA9gJQAngDBkAuIA4AbQAzAcApAeQAhAbAbBBQAwBqAhBhIAFANQAeA6AtFOIAIAzQAIA6gUBuQgPBUghByQgMAqgnBcQgRAtgQA4QgPAzgPA9QggCUAmDuIAHAwQAKBBAJARQAZAfA3BcQA2BCA+BWQAYAeAWBwQANBfgbBKQgkA5ASCjQAICEAKA+QAAAigeBwQgYBLgoAAIgKgBg");
	this.shape_53.setTransform(1153.9,306.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-63.6,0.3,64.5,0.3).s().p("AIBaAQgsgni7joQiVi5hDhaQgegqgpipQgliMgKhcQgFhkAOiFIACgSIAGgoQAok6AZiZIARhgIAJgpQApiLAxh6IAjhaIAbhEQAYhAgEh7QABhvgFhAQAAhOgthSIgPgaIgFgEQgkgZgsgMQgegKgkgDQgcADjsgSIkQgXQgvgDhAhDQBWACAbgrQAjggAbgLQBIABBXh+QATggCCgjQBpgeA9gJQAngDBkAuIA4AbQAzAcApAeQAhAbAbBBQAwBqAhBhIAFANQAeA6AtFOIAIAzQAIA6gUBuQgQBUggByQgMAqgnBcQgRAtgQA4QgPAzgPA9QggCUAmDuIAHAwQAKBBAJARQAZAfA3BcQA2BCA+BWQAYAeAWBwQANBfgbBKQgkA5ASCjQAICEAKA+QAAAigeBwQgYBLgoAAIgKgBg");
	this.shape_54.setTransform(1153.9,306.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#FFFAF0","#7E6B71","#61505A"],[0.345,0.714,0.922],-63.6,0.3,64.5,0.3).s().p("AIBaAQgsgni7joQiVi5hDhaQgegqgpipQgliMgKhcQgFhkAOiEIACgTIAGgoQAok6AZiZIARhgIAJgpQApiLAxh6IAjhaIAbhEQAYhAgEh7QAAhvgEhAQAAhOgthSIgPgaIgFgEQgkgZgsgNQgegJgkgDQgcADjsgSIkQgXQgvgEhAhCQBWACAbgrQAjggAbgLQBIAABXh9QATggCCgjQBpgeA9gJQAngDBkAuIA4AbQAzAcApAeQAhAbAbBBQAwBqAhBhIAFANQAeA6AtFOIAIAzQAIA6gUBuQgQBUggByQgMAqgnBcQgRAtgQA4QgPA0gPA8QggCUAmDuIAHAwQAKBBAJARQAZAfA3BcQA2BCA+BWQAYAeAWBwQANBfgbBKQgkA5ASCjQAICEAKA+QAAAigeBwQgYBLgoAAIgKgBg");
	this.shape_55.setTransform(1153.9,306.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(5).to({_off:false},0).wait(2).to({_off:true},1).wait(16).to({_off:false},0).to({_off:true},1).wait(54).to({_off:false},0).wait(2).to({_off:true},1).wait(16).to({_off:false},0).to({_off:true},1).wait(21).to({_off:false},0).wait(2).to({_off:true},1).wait(16).to({_off:false},0).to({_off:true},1).wait(49));
	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(10).to({_off:false},0).to({_off:true},1).wait(21).to({_off:false},0).wait(9).to({_off:true},1).wait(24).to({_off:false},0).wait(7).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(21).to({_off:false},0).to({_off:true},1).wait(18).to({_off:false},0).to({_off:true},1).wait(21).to({_off:false},0).wait(9).to({_off:true},1).wait(24).to({_off:false},0).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(19).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(63).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(30).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(44));
	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(20).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(65).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(32).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(21).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(34).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(46));
	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(22).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(69).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(36).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(23).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(38).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(48));

	// leg L
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AkuCjQAVgaAqgFIAfgCIAXgDQAagIgLAXQgBgHgOgIQAOAIABAHQABAGgIAGQgMAKgMgCQgHADgegBIgEAAQgcgBgTALQghATASAtQggggAigrgAItgTQgOgDgSAFIgEABQgXAIgGgBQgIAFgLgEQgGgCgBgEQgCgGAJgJIAngJIACAAQAdgFAUANQAiAXgPAbQACghgbgGgAokg+QAhgXAxAJIAkAJIAOADIAMACQAgAAgUAWIAAgCQAAgIgMgMQAMAMAAAIIAAACQgBAHgLAEQgRAHgNgHIgGAAIgpgMQgggKgZAGQgsAKAEA3QgYgtA2glgAj1joQAggMAnAQIAYAMIAEACIAUAJQAHALAAAGIgBAEQgCAFgKACQgPACgKgIIgggQIgEgDQgYgOgWAAQgmABgHAvQgLgrAygVgAh4i4IABgEQAAgGgHgLQAcAHgWAOIAAAAgAh+jNIAAAAg");
	this.shape_56.setTransform(1280.9,915.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-48.4,-0.4,48.4,-0.4).s().p("AkQe3QgJgFABgJQAeABAHgDQANACAMgJQAIgGgBgHQALgXgbAJIgWACQA+gwB+gtQBXgXA1heQhwAihRAEQgzAIh7AcQhnAUg9gFQgUgGgHgOQgEgJABgLIAGABQAOAHAQgHQAMgFABgHQAUgWghAAIgMgBQAHgEAHACQDWAnBug0QAygLCVgJQiEgOhAgWIhdghQgsgRADgGIAUgJIAhARQAKAIAPgDQAJgBADgGQAVgOgbgGIgVgJIgEgCQAggJAUALQAeARBkAlQBRAYAsggQATghAkj+QAijoAllCQAiksAYkEQAVjsgEhEQgNhcgMgIQgLgagGgtQgBgTACgNQAMhbAZhDQgEgdhQjlIirnwQjwq+ANgaQAQgiA7gTQAwgPAdAaQAdAzAWBoQAVBXAFAoQANBLCTJCQCLIeAXBQQASBCAQAyQAIAggCAaQgFBCgkBwQACARgiEQIhGJXQhhNdAnAVQAiARBwAJIBKAHQAXADAJAFIgCAAIgmAJQgVABANANQABAEAHADQAKAEAJgFQAGABAXgJIADAAQAAAJgKALQgQAWgSgDIhvgiQhOgWgzgGQhDAAkECtQg5Aug2AEIgJABQgPAAgJgFg");
	this.shape_57.setTransform(1285,735.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("Ak8CfQAYgZAqgBIAfABIAWAAQAdgGgOAWQAAgIgPgIQAPAIAAAIQAAAGgIAFQgNAJgMgEQgIACgegDIgEAAQgbgDgUAJQgiAQANAuQgcgiAlgogAIsAzQgOgEgSAEIgEAAQgYAGgFgBQgJAEgKgFQgHgDgBgFQAAgFAJgIQAJABAfgHIACABQAdgDATAPQAgAZgSAcQAGgjgbgIgAodhXQAjgUAwANIAjAMIANAFIAMACQAMANAAAIIgBACQgCAHgMAEQgRAFgNgIIgFgBIgogPQgggNgZAEQgsAGgBA5QgUgxA5gggAmDg0IABgCQAAgIgMgNQAhAEgWATIAAAAgAmOhLIAAAAgAiNitIgegTIgEgDQgXgQgWgCQgmgDgKAvQgIgsA0gQQAhgKAlAUIAXAOIAEACIATALQAbAJgWAMIABgFQAAgGgGgKQAGAKAAAGIgBAFQgDAFgKABIgEAAQgMAAgJgIgAhnirIAAAAg");
	this.shape_58.setTransform(1279.6,902.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-54.2,-0.5,54.5,-0.5).s().p("Alcd5QgJgGACgIQAeADAIgCQAMAEANgJQAIgFAAgGQANgWgcAGIgWAAQBDgrCAghQBbgPA8hZQhzAYhRgDQg0ADh8ARQhpALg9gLQgSgIgGgOQgEgJADgLIAFABQANAIARgFQAMgDACgIQAWgTghgEIgMgCQAIgDAGACQDSA6BygqQAzgHCVAFQiCgag+gcIhagpQgqgUADgGIAWgHIAeATQAKAJAPgBQAKgBADgFQAWgMgbgJIgTgLIgEgCQAggGATANQAcATBhAuQBOAgAvgdQAWgfA6j6QA2jkBCk9QA9koAukBQAqjpAChEQgEhdgMgJQgJgbgBguQAAgSAEgEQAKhcAKg8QgHgdhnjbIjfnbQk5qhAKgbQANgjA4gaQAvgUAfAXQAvA+A7DSQAVBKDQIvQDDIMAfBNIAvB0QAIAggGAfQgLBCguBsQAAARg6EMIh7JPQisNRAlAYQAgAUBvATIBJANQAXAFAJAGIgCgBQgfAHgJgBQgVgBAMAOQAAAFAIADQAKAFAJgEQAFABAYgGIAEAAQgCAJgKALQgSAUgSgFQi9hPgsgEQhEgGkSCVQg8Apg3AAQgVgBgLgHg");
	this.shape_59.setTransform(1289.8,729.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AlGCaQAZgXAqADIAfAEIAXABQANAKAAAHQAAAGgKAFQgNAHgMgEQgHACgegGIgEgBQgbgGgVAIQgjANAJAvQgaglAqgkgAIoB8QgOgGgTACIgDABIgeACQgJADgKgGQgGgDAAgEQgBgGALgIQAIACAfgEIACABQAeAAARAQQAeAcgUAbQAIgjgZgKgAjACcIAAAAgAjNCLQAbgDgOAUQAAgHgNgKgAoRhvQAlgRAuARIAiAQIANAGIAMADQAJANAAAIIAAADIAAgDQAAgIgJgNQAgAGgXASQgDAHgMACQgSAEgMgJIgGgCIgmgSQgegQgZABQgtADgGA4QgQgyA8gbgAhjiXQgPAAgIgKIgegWIgDgDQgVgSgWgEQglgGgPAtQgEgsA2gMQAhgGAjAXIAWAQIADACIATANQAEAJAAAGQAAAEgBACQABgCAAgEQAAgGgEgJQAaALgXAKQgDAFgJAAIgCAAg");
	this.shape_60.setTransform(1277.9,886.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-62.7,-0.3,63,-0.3).s().p("Amlc1QgWgCgKgJQgIgGADgIQAeAGAHgCQAMAEANgHQAKgFAAgGQAOgVgbAEIgXgBQBGgmCDgVQBcgHBFhTQh2ANhRgKQgzgBh+AGQhpABg7gQQgTgJgEgPQgCgJACgLIAGACQAMAJASgEQAMgCADgHQAXgSgggGIgMgDQAHgDAHADQDMBMB1ggQA0gCCWASQiCglg7ghIhWgxQgogYAEgGIAVgFIAeAWQAIAKAPAAQAKAAAEgFQAXgKgagLIgTgNIgDgCQAggDASAOQAbAWBcA2QBNAnAxgZQAWgdBRjzQBKjfBdk2QBXkhBFj8QA+jlAIhDQAEhdgKgKQgHgcADgtQABgSAGAEQAKhagGg2QgKgch+jPIkPnBQl/p8AHgcQAJgkA1gfQAsgZAiAUQA4A7BQDIQAbBGEKIWQD0HrAsBTQAhA+AaA2QAJAfgMAkQgQBBg3BoQgCAQhREGIivJCQj2M+AiAbQAeAYBtAcIBHATQAXAHAIAHIgCgBQgfAEgIgCQgVgDALAQQAAAEAGAEQAKAGAJgDIAegCIADgBQgCAKgLAJQgUATgRgHQi2hfgrgIQhBgMkgB8Qg4AfgxAAIgNAAg");
	this.shape_61.setTransform(1297.3,721.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AIfC4QgNgGgTAAIgEAAQgYABgGgBQgJACgJgHQgGgEAAgEQAAgGALgGQAIACAggBIACABQAdADAQARQAbAfgWAZQALgigYgNgAlOCIQAbgUApAHIAfAGIAWADQAMALAAAHIAAABQgBAGgKAEQgOAGgLgGQgIABgcgIIgEgBQgbgIgVAFQglAKAFAwQgWgnAtghgAjJCXIAAAAgAjJCWQAAgHgMgLQAcgBgQAUIAAgBgAoBiSQAmgMAtAUIAgASIANAIIALAEQAHAMABAIIgBAEQgDAIgNAAQgRADgMgKIgFgCIglgWQgcgTgagBQgsgBgLA4QgMg0A+gWgAlvhUIABgEQgBgIgHgMQAgAJgZAPIAAAAgAl2hsIAAAAgAhRiTQgPgCgHgKQgHgEgUgVIgEgDQgTgUgVgGQglgJgTAsQAAgtA3gHQAigDAhAaIAUASIADADIARAOQADAIAAAGQAAAFgCACQACgCAAgFQAAgGgDgIQAaANgZAIQgDAEgHAAIgEAAg");
	this.shape_62.setTransform(1276,868.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-70.7,-0.2,71.1,-0.2).s().p("ACubhQishugpgMQhBgSkrBjQhCAdg2gKQgVgEgJgJQgIgHAEgIQAcAJAIgBQALAFAOgGQAKgEAAgGQARgTgcABIgWgEQBJgeCFgKQBcABBMhNQh3ADhQgRQgzgGh+gFQhpgIg5gVQgRgLgDgPQgCgKAEgKIAFACQAMAKARgCQANgBADgHQAZgQgggIIgLgFQAHgCAHAEQDEBeB4gWQAzADCUAfQh+gxg4gmIhRg4QglgbAEgGIAWgDQAUAVAHADQAHALAPABQAKABAEgEQAYgJgZgNIgRgOIgDgDQAgAAARAQQAYAYBXA+QBJAtA0gUQAbgbBjjrQBejXB4ktQBwkYBbj1QBSjeAOhDQANhcgKgLQgEgbAGguQAEgSAIAOQAIhYgVgvQgNgbiTjAIk9mhQnBpQAFgdQAFgkAxglQAqgeAjAQQBAA3BjC8QAkBDE/H3QEoHQA0BMQAnA6AfA4QAJAegQApQgXA/hABjQgDAQhoD+IjhIvQk9MmAgAdQAaAbBqAlIBFAaQAWAJAIAHIgCAAQggABgIgDQgUgFAJARQAAAEAGAFQAJAGAJgCQAGACAYgCIAEAAQgDAKgMAIQgPALgLAAQgGAAgGgDg");
	this.shape_63.setTransform(1304.4,712.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AISDXQgMgIgUgBIgDAAIgegDQgKABgIgHQgFgFAAgEQABgGALgFQAIADAfACIACAAQAeAFAOAUQAYAhgYAWQAOgggXgPgAlUBZQAdgRApAKIAeAJQARAFAFAAQAJAKAAAHIAAADQgBAFgKAEQgOAEgLgGQgHABgdgMIgDgBQgagKgWADQglAHABAwQgTgpAvgdgAjRB0IAAAAgAjRBxQAAgHgJgKQAcACgTASIAAgDgAmNiIIgFgDQgLgGgYgTQgbgVgZgDQgsgFgQA3QgHg1BAgQQAngJAqAYIAfAVIAMAIIALAGQAFALAAAIQAAADgBADQgEAGgMAAIgDAAQgQAAgJgKgAlhiEIAAAAgAlgiKQAAgIgFgLQAfALgbAOQABgDAAgDgAg+iqQgPgDgGgLIgZgbIgDgEQgSgVgUgIQgkgMgXAqQAFgtA2gCQAigBAfAdIASAUIADADIAQAQQAYAPgZAGQADgDAAgHIgCgLIACALQAAAHgDADQgDADgGAAIgFAAg");
	this.shape_64.setTransform(1273.7,850.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-78.1,-0.1,78.6,-0.1).s().p("ABIaTQigh9gqgQQg/gXkyBHQhFAYg1gPQgVgGgIgJQgHgIAEgIQAdAMAHgBQALAGAOgEQAKgEABgFQATgSgcgCQgFAAgRgFQBMgYCFACQBbAJBThGQh3gHhOgYQgygLh9gQQhogRg3gaQgRgNgBgPQgCgKAGgKIAFADQAKALASgBQAMAAAEgGQAbgOgfgLIgLgGQAIAAAFADQC8BvB5gLQAzAICRAsQh6g8g0grIhMg/QgjgfAFgFIAWgBIAZAbQAGALAPADQAKABAEgEQAZgGgYgPIgQgQIgDgDQAhADAPARQAWAbBSBFQBEAzA1gPQAdgYB6jiQBujNCSkiQCJkNBwjsQBnjWAThBQAVhagJgMQgCgcALgtQAEgRALAWQAHhVgkgoQgQgZimiwIlol9Qn8ocABgdQABglAtgqQAmgiAlAMQBDAuB5CzQAqA+F0HTQFTGoBABMQAsA1AkA5QAJAdgUAuQgdA9hIBcQgEAQh/DzIkRIaQmDMGAdAgQAZAeBlAuIBDAgQAVAKAGAIIgCAAQgfgCgIgDQgUgHAIASQAAAEAFAFQAIAHAKgBIAeADIADAAQgDAJgNAHQgOAJgLAAQgHAAgGgEg");
	this.shape_65.setTransform(1310.9,704.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AIBD0QgMgJgTgDIgEgBQgYgDgFgCQgKAAgHgIQgGgFACgFQABgFAMgEQAHAEAfAFIACAAQAdAJAMAUQAWAjgbAUQARgfgVgRgAlWAqQAegPAoAOIAdALQAQAHAFAAQAIALAAAHIAAADQgCAFgKADQgPADgKgHQgIgBgbgNIgDgCQgZgMgWABQgmAEgDAvQgPgqAygYgAjWBQIAAgDQAAgHgIgLQAcAFgUAQIAAAAgAjeA7IAAAAgAlgivQgSgBgJgMIgGgDIgggcQgYgXgZgFQgsgJgVA0QgCg1BBgKQAogGAoAcIAdAYIALAJIAKAHQAEAKAAAHQAAAFgCADQgDAFgKAAIgDAAgAlQi0QACgDAAgFQAAgHgEgKQAdAOgbALIAAAAgAgqjAQgPgFgGgLIgWgdIgDgEQgPgXgUgJQgjgQgaAoQAIgsA3ADQAiACAcAgIAQAVIADADIAPARIABAKQAAAIgEADQAEgDAAgIIgBgKQAWARgZAEQgDADgEAAIgHgBgAlSjNIAAAAg");
	this.shape_66.setTransform(1271,829.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-84.9,0,85.5,0).s().p("AgdY1QiXiLgogTQg9gdk3AsQhHASgzgUQgUgHgHgLQgGgJAEgGQAbANAIABQAKAHAPgDQAKgDACgFQAUgRgcgEQgFAAgQgHQBMgRCFANQBbASBYg/Qh1gRhMgfQgxgPh7gcQhmgag1gfQgPgNAAgQQAAgKAFgJIAGADQAJAMASABQAMABAEgGQAbgLgdgOIgKgHQAHAAAGAEQCxB/B5AAQAzALCMA6Qh0hHgwgvQg7g7gmgxIAWABIAWAdQAGALAPAFQAJACAFgEQAZgEgWgRIgPgRIgDgDQAhAFANATQAUAcBLBNQBAA5A2gLQAfgWCNjVQCAjDCrkTQCgkBCEjhQB5jMAag/QAchYgHgNQAAgcAPgrQAGgRANAfQAGhRgygfQgTgYi4idImOlVQoznjgCgdQgDglApguQAigmAmAIQA1AdBHBOQA+BAAZAhQAxA5GiGoQGCGGBEBBQAyAwApA5QAHAcgYAyQghA6hQBWQgGAPiUDoIlAH/QnFLhAaAiQAWAfBjA4IA/AlQASANAGAIIgCAAQgdgFgHgEQgTgIAGARQgCAEAGAGQAHAIAKAAQAFACAWADIAEABQgFAIgNAHQgLAGgKAAQgJAAgGgFg");
	this.shape_67.setTransform(1316.7,695.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AHqEVQgLgKgSgFIgEgBQgYgFgFgDQgJgBgHgIQgFgGACgFQACgFALgCQAIAEAeAHIACABQAcALAKAWQASAkgcASQAUgdgUgTgAlWgDQAfgMAmAQIAcAOIAVAJQAcAGgWAPIABgEQAAgHgHgKQAHAKAAAHIgBAEQgCAFgLACQgPACgKgIQgHgBgZgRIgEgCQgYgOgWgBQglAAgIAvQgLgrA0gSgAgWjSQgOgFgEgMQgFgGgPgZIgCgEQgNgZgTgLQghgTgeAmQAMgsA2AJQAhAEAaAjIAOAXIADADIANATIAAAFQAAAMgFADQAFgDAAgMIAAgFQASATgXABQgCACgEAAQgDAAgGgCgAlmjtIgEgDIgegfQgWgagYgHQgrgNgaAyQADg1BCgEQAogDAlAhIAbAaIAKAKIAJAIQAdAQgcAIQACgDAAgGQAAgGgDgJQADAJAAAGQAAAGgCADIgSAEQgSgCgIgNg");
	this.shape_68.setTransform(1247.5,826);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-91.6,-0.1,92.1,-0.1).s().p("AiLYwQiJiZgmgXQg6gik6AOQhIALgxgYQgTgJgGgLQgGgKAGgGQAZAQAHABQAKAIAPgCQAKgBADgGQAVgOgbgGIgVgKQBOgJCEAZQBYAaBeg2Qh0gchIgnQgwgTh3gnQhjgjgygkQgOgPABgQQABgJAHgJIAEAEQAIANASACQANADAEgHQAdgIgdgRIgJgHQAHAAAFAFQClCPB5ALQAxARCGBGQhthRgrg0Qg1hAgig1IAWADQAPAaAFAFQAEAMAOAGQAKAEAFgEQAZgCgUgTIgNgSIgDgEQAgAJAMAUQAQAdBEBUQA6A+A3gFQAhgTChjHQCRi2DEkCQC4jxCZjTQCMjAAfg8QAkhWgGgNQADgcATgqQAHgQALAhQAMhPgxgjQgRgYitiqIl3luQoRoIAAgdQAAglAsgsQAkgjAmALQAzAgBBBSQA6BFAWAiQAsA9GGHDQFtGmA5A+QAvA0AkA8QAGAcgdAwQgnA2hXBOQgIAPipDZQiYDGjWEZQoJKzAXAlQATAhBdBAIA8ArQASAPAGAJIgCgBQgegIgIgEQgRgKAEASQgCAEAFAGQAHAJAJAAQAFAEAYAFIAEABQgGAHgOAGQgMAEgJAAQgKAAgHgGg");
	this.shape_69.setTransform(1301.9,695);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AHPE/QgJgLgTgGIgDgBQgXgIgFgDQgJgCgHgJQgEgGACgEQACgGANgBQAHAFAdAKIACABQAbAOAIAWQAOAmgdAPQAWgbgSgVgAkBATQgIgBgXgSIgEgBQgVgRgXgDQglgDgMAsQgHgqA1gPQAggJAlAVIAaAQIAUAKQAFAJAAAHIgBAEQgCAGgLAAIgDAAQgNAAgIgIgAjcAVIABgEQAAgHgFgJQAaAIgWAMIAAAAgAjgABIAAAAgAAAjVQgOgHgDgNQgFgFgMgbIgCgEQgKgagTgNQgegWgiAjQARgqA0ANQAhAJAWAkIAKAYIACAEIAMATQgBARgHADIgEABQgEAAgDgCgAALjUQAHgDABgRQARAUgWAAIgDAAgAALjUIAAAAgAlMkQIgFgEQgJgJgRgYQgUgbgYgKQgpgRgeAwQAIg1BBACQApABAiAkIAYAdIAJALIAJAIIABAMQAAAJgEAEIgRACQgRgEgHgOgAkjkAIAAAAgAkfkNIgBgMQAaATgdAGQAEgEAAgJg");
	this.shape_70.setTransform(1224.6,819.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-97.7,-0.2,97.7,-0.2).s().p("Aj4YgIhHhdQgyg/glgkQg2gnk6gPQhJAEgugdQgTgLgFgLQgFgLAHgFQAXATAIABQAJAJAPgBQALAAADgGQAVgMgagIIgUgMQBPgCCAAmQBVAiBjgtQhwgnhEgtQgugYhzgyQhggsgugoQgMgRACgPQACgKAHgIIAFAEQAHAOARAEQANADAFgFQAcgGgagTIgJgIQAIABAEAFQCWCeB3AWQAwAVB/BSQhlhagmg4QhZiBAOAFIAVAFQAMAbAFAFQADANAOAHQAIAEAFgDQAaABgSgVIgMgTIgCgEQAfALAKAVQAOAfA7BaQA1BEA2gBQAjgPCzi4QCkioDZjuQDNjeCsjEQCei0Akg3QAthSgFgOQAFgbAXgoQAKgPAHAjQAThOgxgmQgPgZihi1IldmHQntoqACgdQACglAvgpQAnggAkANQBBAvBzC3QAoA/FoHdIGEH/QAsA2AgBAQADAcghAuQgsAzhfBDQgIAPi9DJImaG7QpHJ/ATAnQARAiBWBJIA3AxQASAQAEAJIgCgBQgdgKgHgFQgRgMACATQgBAEADAGQAHAJAJACQAFADAXAIIADABQgGAHgOAEQgKADgHAAQgOAAgHgIg");
	this.shape_71.setTransform(1287.3,693.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AHiEjQgKgLgTgFIgDgBQgYgGgFgDQgJgBgHgJQgEgGABgEQACgFAMgCQAHAEAeAJIACABQAcALAKAWQAQAlgcARQAVgdgUgTgAlWgOQAhgLAlASIAbAOQAQAIAFACQAGAKAAAGIgBAFQgCAFgKABQgQACgJgJQgHgBgZgRIgEgCQgXgPgWgCQgmAAgJAuQgKgrA0gRgAjbAmIABgFQAAgGgGgKQAbAHgWAOIAAAAgAjgARIAAAAgAgPjTQgOgGgEgMIgSgfIgCgFQgNgYgTgMQgggVgfAlQAOgqA1AJQAiAGAYAjIANAYIADADIAKASIAAADQAAAPgEADQAEgDAAgPIAAgDQAVAVgZAAQgCACgDAAQgEAAgFgCgAlEjoQgSgDgIgNIgEgEIgdgfQgVgagYgJQgrgOgbAxQAFg0BBgDQAoAAAlAhIAaAbIAJAKIAKAIQAbARgcAIQADgEAAgHQAAgGgCgIQACAIAAAGQAAAHgDAEQgDADgHAAIgHAAg");
	this.shape_72.setTransform(1188.2,855.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-93.7,-0.2,93.7,-0.2).s().p("AivbCIhNhYQg1g8goghQg5gkk6AGQhIAHgwgYQgUgLgFgLQgGgJAGgGQAZAQAHACQAKAIAPgBQAKgBADgGQAWgNgcgIQgFgBgPgJQBPgHCCAdQBXAdBggzQhzgghHgoQgvgVh2gqQhigngxglQgNgPABgQQABgKAHgIIAFADQAIAOARACQANADAFgGQAcgHgcgSIgJgHQAIAAAEAFQChCUB4APQAwASCEBKQhqhUgqg2QgzhBggg2IAWAEIATAfQAEANAOAFQAJAEAFgDQAaAAgUgVIgNgSIgCgEQAfAJALAVQAQAeBBBVQA5BBA3gEQAigSCmjCQCXiyDMj8QC+jqCfjPQCSi+Ahg7QAnhTgGgNQAEgcAUgpQAIgQAEASQAfhRgMgzQgHgdhhjeIjSngQkqqpALgaQAOgjA5gYQAvgTAfAYQAvBDA1DQQATBJDCI1QCzIMAfBTQAYBAARBAQAAAfgcAkQgpA0haBLQgHAPiwDVQieDBjeETQoeKjAWAlQATAhBaBEIA7AtQASAPAFAJIgCgBQgegIgHgFQgSgLAEATQgCAEAEAGQAHAJAKABQAEADAYAGIAEABQgGAIgOAEQgLAEgJAAQgLAAgHgHg");
	this.shape_73.setTransform(1245.4,710.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AHyEGQgKgJgTgEIgEgBQgYgFgFgCQgJAAgIgJQgFgGACgEQACgFALgDQAIAEAeAGIACABQAcAKAMAVQATAkgcATQATgegVgTgAlXAJQAfgKAnANIAcAOIAVAIQAIALAAAGIgBADQgCAGgKACQgPADgKgIQgIgBgagPIgDgCQgYgOgXAAQglABgGAwQgNgrAzgWgAjYAzQAAgGgIgLQAcAGgVAOIABgDgAgdjPQgPgFgFgLIgUgfIgCgEQgOgYgUgKQghgSgdAnQALgsA2AGQAiAEAaAiIAPAWIADADIANASIABAHQAAAKgFAEQAFgEAAgKIgBgHQAUASgYADQgCACgEAAIgIgCgAlUjQQgRgCgJgMIgFgDIgegeQgXgZgZgHQgrgLgYAzQABg1BBgGQAogEAnAfIAbAZIALAKIAKAHQADAJAAAGQAAAGgDAEQADgEAAgGQAAgGgDgJQAcAPgcAKQgDAFgIAAIgGgBg");
	this.shape_74.setTransform(1146.5,874.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-89.3,0.1,89.4,0.1).s().p("AhlcTQiNiUgngWQg7ggk5AZQhIANgygWQgUgJgGgLQgGgJAFgGQAaAPAIABQAKAIAPgDQAKgCACgGQAVgOgcgGIgVgIQBOgNCEAVQBZAXBcg5Qh0gYhKgkQgwgSh5gjQhkgggzgiQgOgOAAgQQABgKAGgIIAFADQAJAMARACQAMACAFgGQAcgKgcgPIgKgHQAHAAAGAFQCpCJB5AHQAxAPCJBBQhvhNgugyQg3g+gjg0IAWACIAUAfQAFALAPAFQAJADAFgDQAagDgWgSIgNgSIgDgDQAgAHAMAUQASAdBGBRQA9A9A2gIQAhgUCajMQCLi7C7kJQCvj2CSjYQCGjHAdg9QAhhXgHgLQADgcARgqQAHgRAFABQArhQAag2QADgdgYjxIgzoKQhHrkATgWQAXgcA+gFQAygEAXAhQAYBLgODZQgFBLAJJVQAHIoAEBaIAEB/QgDAhgVAZQgkA5hVBQQgHAPiiDgQiSDLjMEgQnxLFAYAkQAVAfBeA+IA+AqQATANAFAJIgCgBQgegGgIgEQgSgKAFASQgCAEAFAGQAIAJAJAAQAFACAYAFIAEABQgFAIgOAFQgMAGgKAAQgKAAgHgGg");
	this.shape_75.setTransform(1197.9,719.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AIBDyQgLgIgTgDIgEgBQgYgDgFgCQgKAAgIgIQgEgFABgEQABgGALgEQAIADAfAFIACABQAcAIANAUQAVAjgaAVQARgggWgRgAlWAsQAegPAoANIAdAMQAPAGAGABQAJAKAAAHIgBACQgBAGgLADQgPADgKgHQgIAAgagOIgEgBQgZgNgWACQgmAEgDAvQgPgqAygYgAjWBQIABgCQAAgHgJgKQAcADgUAQIAAAAgAjeA9IAAAAgAlhitQgSgBgJgMIgFgDQgLgHgWgVQgYgXgZgFQgsgJgVA1QgCg1BBgLQAogGAoAcIAdAYIALAJIAKAGQAFALAAAHQAAAEgCADQgEAGgJAAIgEAAgAlOi6QAAgHgFgLQAeAOgbALQACgDAAgEgAgrjAQgPgEgGgLIgWgdIgDgEQgPgXgUgJQgjgQgaAoQAIgsA3ADQAiACAcAfIAQAWIADADIAPARIABAJQAAAJgEADQgDACgEAAIgHgBgAgdjBIAAAAgAgZjNIgBgJQAXARgaAEQAEgDAAgJg");
	this.shape_76.setTransform(1104.5,876);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-109.8,-0.1,109.9,-0.1).s().p("AkWcQIhXhNQg8g1gsgcQg8gck3AtQhHARgzgTQgUgHgIgKQgGgJAFgHQAaANAIABQAKAHAPgEQALgCABgGQAUgQgcgEQgGAAgPgHQBMgSCGANQBaASBYg/Qh1gRhMgfQgygPh6gbQhngZg1gfQgPgOAAgQQAAgJAGgJIAFADQAJAMASAAQANABAEgGQAbgLgegOIgKgGQAIgBAFAEQCxB/B6gBQAyAMCNA4Qh0hFgxgwQg7g7gmgxIAWABIAWAdQAGAMAPAEQAJACAFgEQAagEgXgRIgPgQIgDgEQAhAFANATQAUAcBLBNQBAA4A2gKQAfgWCNjXQCBjDCqkUQCdkBCEjhQB4jPAZg/QAchXgHgMQAAgcAPgsQAGgRAKgQQA1hLA/gtQAMgbA0jsIByoAQCirVAZgPQAfgUA8AOQAxANALAlQAAA8gkBkQgcBUgRAlQgcBHixI5QilISgYBUQgTBDgLAwQgIAfgKAVQghA4hQBWQgGAQiTDqIk7IAQnFLjAaAiQAWAfBjA3IBAAmQATANAHAIIgCgBQgfgFgIgDQgTgJAHASQgBAFAEAFQAIAIAKgBQAFADAYADIAEAAQgFAJgNAGQgNAHgKAAQgJAAgHgFg");
	this.shape_77.setTransform(1175.1,719.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AIMDhQgMgIgTgCIgEAAQgYgCgGgCQgJABgJgIQgFgFABgEQABgGALgEQAIADAfADIACAAQAeAHANATQAXAigZAWQAPgggWgQgAlVBHQAdgQApAMIAdAKQARAFAFAAQAcADgTARIAAgCQAAgHgJgLQAJALAAAHIAAACQgBAGgKADQgPAEgLgHQgIABgbgMIgEgCQgZgLgWADQglAGgBAvQgRgpAwgcgAmHibIgGgEIghgaQgagVgZgEQgtgGgRA1QgFg1BAgOQAngHAqAZIAeAXIAMAIIAKAFQAfANgbANQACgDAAgEQAAgHgGgMQAGAMAAAHQAAAEgCADQgEAGgNAAQgRAAgKgLgAg3izQgPgEgGgLIgYgbIgDgEQgRgWgUgIQgkgOgYAqQAGgtA3AAQAiAAAdAeIASAUIADAEIAQAPIABALQAAAIgEAEQgDACgEAAIgGgBgAgqi0QAEgEAAgIIgBgLQAXARgaAGIAAAAgAgnjLIAAAAg");
	this.shape_78.setTransform(1110.7,880.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-107.3,-0.1,107.4,-0.1).s().p("AjncgIhbhIQhAgygtgZQg+gZk0A9QhGAVg0gQQgVgGgHgKQgHgIAFgIQAbAMAIAAQAKAHAPgEQAKgDACgGQASgRgcgDQgFAAgQgGQBMgVCFAFQBbANBVhDQh3gLhNgbQgygMh8gVQhngUg3gcQgPgMgCgQQAAgLAFgJIAFADQAKAMASAAQAMAAAEgGQAbgNgegNIgLgFQAIgCAFAFQC4B1B5gHQAzAJCPAxQh3hAgzgtIhJhBQgiggAEgFIAWAAIAYAbQAHALAOAEQAJABAFgDQAagFgYgRIgPgQIgDgDQAgAEAPASQAVAbBPBIQBDA1A1gNQAegYCCjdQB2jKCckdQCPkJB3joQBujUAVhBQAYhYgIgMQgBgcAMgsQAFgRALgUQA0hLBDguQAMgbA5jrIB8n9QCwrSAZgPQAggTA8APQAwAOALAmQgDBNhUDKQgdBGi9I2QitIJgbBZQgUBDgMAtQgHAggHAUQgeA8hLBYQgFAQiGDxIkhIRQmeL5AcAhQAZAeBlAyIBCAiQAUALAHAIIgCAAQgggEgHgDQgUgHAHASQAAAEAFAFQAIAHAKAAQAFACAYABIAEABQgEAJgNAHQgNAHgLAAQgIAAgGgEg");
	this.shape_79.setTransform(1177.7,721.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AIVDQQgMgIgUgBIgDAAQgZAAgFgCQgKABgIgHQgFgEAAgFQAAgGAMgFQAHADAgABIACABQAdAFAPATQAZAggYAXQANghgXgOgAlTBkQAcgSAqAJIAeAJIAWAFQAKAKAAAGIAAACQgBAGgKAEQgPAFgLgGQgHAAgcgKIgEgBQgagLgWAFQglAHACAwQgTgoAugegAjPB7IAAAAgAjPB5QAAgGgKgKQAcAAgSASIAAgCgAmRh8IgFgDIgjgYQgbgVgagCQgsgEgPA3QgIg1A/gRQAngLArAZIAgAUIAMAIIAKAFQAHAMAAAHIgBAFQgEAHgNABIgDAAQgPAAgKgKgAlkh6IAAAAgAljh/QAAgHgHgMQAfAKgZAOIABgFgAhCilQgPgDgHgLIgagaIgDgEQgSgVgUgHQgkgMgWArQADgtA3gDQAigCAfAdIATATIADADIAQAQQACAHAAAFQAAAGgCADQACgDAAgGQAAgFgCgHQAYAOgYAHQgDADgGAAIgFAAg");
	this.shape_80.setTransform(1117.1,884.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-104.6,-0.1,104.6,-0.1).s().p("Ai5ctIhfhDQhCgugugXQg/gXkxBOQhEAZg1gNQgVgGgIgJQgIgIAFgIQAcALAHAAQALAGAPgGQAKgDABgGQASgSgcgBIgWgFQBKgZCGgCQBbAIBShHQh3gFhPgXQgygJh9gOQhpgPg3gZQgRgMgCgQQgBgJAFgKIAFACQALALARgBQAOAAADgHQAZgOgfgKIgKgGQAHgBAGAEQC+BrB4gNQA0AGCRApQh6g5g1gqIhNg+QgkgeAEgFIAWgBIAaAaQAHALAPACQAKACAEgEQAYgHgYgPIgQgPIgDgDQAgABAQASQAWAaBTBEQBGAxA0gQQAdgZB1jkQBsjQCNkkQCBkQBrjuQBijbAShBQAThZgJgMQgDgcAKgsQAFgSALgXQAyhMBIgtQANgbA+jqICFn7QC+rOAZgPQAggSA8AQQAwAPAKAmQgEBNhYDIQgfBGjHIyQi6INgaBRQgVBCgMAsQgIAggCATQgbA9hHBcQgEAQh6D4IkEIfQl1MPAeAfQAaAcBnAtIBEAeQAVALAHAHIgCAAQgggBgHgDQgUgGAIARQAAAEAFAFQAIAHAKgCQAFACAZABIADAAQgDAJgNAHQgOAKgLAAQgHAAgGgEg");
	this.shape_81.setTransform(1180.5,722.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AIdC9QgNgGgTAAIgEAAIgegBQgJACgJgHQgGgEAAgFQABgFALgGQAIADAfgBIACABQAeADAQASQAaAfgXAYQAMghgYgOgAlQCAQAcgTAqAHIAeAGIAWAEQAcAAgQASIAAgBQAAgHgMgKQAMAKAAAHIAAABQgBAHgKADQgOAGgMgFQgHABgdgJIgEgCQgagIgWAGQgkAJAEAvQgVgnAsgggAn9icQAlgNAtAWIAgASIANAIIALAEQAHANAAAHIgBAFQgDAHgMABQgSACgLgLIgGgCIgkgWQgcgTgagBQgsgCgMA3QgLg0A/gUgAlthcIAAAAgAlshhQAAgHgHgNQAfAKgZAPIABgFgAhNiXQgPgCgIgLIgbgZIgDgDQgSgUgWgGQglgKgTAsQABgtA2gGQAigDAhAaIAUASIADADIARAPQAZANgZAIQADgDAAgFQAAgFgDgIQADAIAAAFQAAAFgDADQgDAEgHAAIgDAAgAhAibIAAAAg");
	this.shape_82.setTransform(1123.9,887.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-101.6,-0.1,101.6,-0.1).s().p("AiKc4Ihig+QhFgrgvgUQhAgTksBdQhEAdg1gLQgVgEgJgJQgIgIAEgHQAdAJAHgBQAMAFAOgGQAKgEAAgGQARgSgcAAIgWgEQBJgdCFgIQBcADBOhMQh3ABhQgSQgzgHh9gHQhpgKg5gWQgRgLgDgPQgCgKAEgKIAGACQALALASgCQAMgBADgHQAZgQgfgJIgLgEQAHgCAGAEQDEBhB3gUQA0ADCTAiQh9gzg3gnQiAhaAOgBIAWgDIAbAZQAIALAPACQAJABAEgFQAZgIgZgNIgRgPIgDgDQAgABARAQQAYAZBWA/QBIAuA0gTQAbgaBpjqQBhjWB9krQBykXBfjzQBWjfAPhAQAOhcgKgLQgEgcAIgtQAEgSALgaQAxhNBMguQAOgaBCjpICPn4QDLrLAZgOQAhgSA7ASQAwAPAJAmQgFBThcDCQgfBDjSIwIjgJaQgXBBgMAqQgHAfAAATQgXA/hCBfQgDAQhtD+IjnItQlLMgAfAeQAcAbBpAnIBFAbQAWAKAHAHIgCgBQgfABgIgDQgUgFAIAQQAAAFAGAEQAJAHAJgCIAeABIAEAAQgDAJgMAIQgPALgMAAQgGAAgFgDg");
	this.shape_83.setTransform(1183.5,723.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AlGCaQAZgXAqADIAfADIAXACQAcgEgPAVQAAgIgNgJQANAJAAAIQAAAGgKAFQgNAHgMgEQgHACgegGIgEgBQgbgFgVAHQgjANAJAvQgZgkApglgAIoB5QgOgGgTACIgDABQgYAEgGgCQgJADgKgGQgGgDAAgFQAAgFAKgHQAIABAfgDIACAAQAeAAARAQQAeAcgUAbQAIgjgZgKgAoShuQAkgRAvARIAiAPIANAGIAMADQAhAGgYASIABgEQAAgHgKgNQAKANAAAHIgBAEQgCAHgNACQgRAFgMgKIgGgBIgngTQgdgPgaABQgtADgFA4QgQgyA7gbgAl7g+IAAAAgAh7iiIgegVIgDgEQgVgSgWgDQglgGgPAtQgEgsA1gMQAigHAjAXIAWAQIADADIATAMQAEAJAAAGQAAAEgCADQgDAEgKAAQgPAAgIgKgAhXicQACgDAAgEQAAgGgEgJQAbALgZALIAAAAgAhZiyIAAAAg");
	this.shape_84.setTransform(1208.1,906.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-62.1,0.1,62.2,0.1).s().p("AmgeRQgVgCgKgIQgJgGAEgIQAdAGAHgCQAMAEAOgHQAJgFAAgGQAPgVgcAEIgWgCQBGgkCDgXQBbgHBFhUQh1APhSgLQgzgBh+AGQhpACg7gPQgSgJgFgQQgCgJACgKIAGABQAMAKASgFQAMgCACgHQAYgSgggGIgMgDQAHgCAHACQDMBMB1ghQA0gCCWASQiCglg7ghIhWgxQgogXADgHIAWgEIAdAVQAJAKAPAAQAJAAADgEQAZgLgbgLIgSgMIgEgDQAhgDASAPQAaAWBdA1QBNAmAxgYQAWgeBPjzQBKjfBck3QBWkhBEj8QA+jnAHhEQAEhbgLgKQgHgbADguQABgSAFgPQAehXAqg9QACgegZjxIg4oIQhOrjATgXQAXgcA+gGQAygEAXAgQAaBQgNDUQgEBMANJVQANIlAEBcIAIB4QABAggEAYQgRBBg2BmQgCAQhREJIisJCQjzNAAiAaQAfAYBtAbIBHATQAWAIAJAGIgCAAQgfADgJgBQgUgDAKAPQAAAEAHAEQAJAGAJgDQAGACAYgEIAEgBQgCAKgMAJQgUATgQgHIhpg0QhIgjgxgPQhAgLkgB9Qg5AfgwAAIgOgBg");
	this.shape_85.setTransform(1226.9,732);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("Ak1ChQAWgaAqgCIAfgBIAXgBQAagHgLAWQgBgIgOgHQAOAHABAIQABAGgJAGQgNAJgMgCQgHACgegCIgEAAQgcgCgTAKQgiARAQAuQgeghAkgqgAItARQgOgDgSAEIgEABQgYAHgFgBQgJAEgKgEQgHgDgBgEQAAgGAJgIQAIAAAfgGIACAAQAdgDAUAMQAhAYgRAdQAEgkgbgHgAohhLQAigVAxAKIAjALIAOAEIAMACQAMANAAAIIAAACIAAgCQAAgIgMgNQAgACgUAVQgBAHgNAEQgRAGgNgIIgGAAIgogOQgggMgZAFQgsAIACA3QgXguA4gigAjqjnQAggLAmATIAYANIAEACIAUAKQAGAKAAAGIgBAFQgCAFgLABQgPACgJgIIgggSIgEgDQgXgPgWgBQgmgCgJAwQgJgsAzgTgAhvixIAAAAgAhui2QAAgGgGgKQAaAIgVANIABgFg");
	this.shape_86.setTransform(1274.5,910.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-50.1,-0.5,50.2,-0.5).s().p("AkqehQgJgGACgIQAeACAHgCQAMACANgJQAIgGAAgGQALgWgaAHIgXABQBAgtCAgnQBYgTA6hbQhxAchSABQgzAFh8AWQhoAPg9gIQgTgGgHgPQgDgJABgKIAGAAQANAIARgGQANgEABgHQAUgVgggCIgMgCQAHgDAGACQDVAxBwgvQAzgJCVgBQiEgUg/gaIhbglQgrgSADgHIAVgHIAgASQAJAIAPgCQALgBACgFQAVgNgagIIgUgKIgEgCQAggIAUANQAcASBjAqQBPAcAugfQAUggAwj8QAtjmA0lAQAwkqAkkDQAhjrgBhDQgIhdgMgJQgKgagEgtQAAgSADgLQAMhbAVhAQgFgehUjjIi1nrQj/q5ANgaQAQgiA6gVQAwgQAbAaQAoA+AtDaQAOBKCgI/QCTIUAaBWIAlB1QAIAggEAbQgIBDgpBuQAAAQguEPQgqD2g4FdQiJNYAlAWQAhATBwAOIBKAKQAWAEAKAFIgCAAQgfAIgIAAQgVgBAMAPQABAEAHADQAKAEAJgEQAFABAYgHIAEgBQgCAKgJAKQgRAVgSgEQjAhHgtgCQhDgDkMCgQg7Asg2ACQgWAAgLgGg");
	this.shape_87.setTransform(1280.4,733.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AkgCmQATgcAqgIIAegFIAXgEQAagLgKAZQgBgIgPgGQAPAGABAIQABAGgHAGQgLALgNgBQgGADgeACIgEAAQgcABgSANQgfAWAVArQgigdAegugAongnQAfgZAxAEIAlAHIAOACIAMABQAPAMAAAIIgMANQgQAIgOgGIgGAAIgqgIQghgIgYAIQgrAOAJA2QgcgtAzgngAmYgyQAhgDgSAXQAAgIgPgMgAIqhVQgOgBgSAHIgEABQgWAKgGAAQgIAFgLgDQgHgCgBgFQgCgFAIgJQAJgBAdgLIACgBQAdgHAVAMQAkATgNAfQgBgkgbgEgAkGjoQAegPAoANIAZAKIAEACIAVAHQAcAFgUAQIABgDQAAgHgJgLQAJALAAAHIgBADQgCAFgJACQgPAEgLgHQgHgBgagNIgFgCQgYgMgXABQglAEgDAwQgPgrAxgYg");
	this.shape_88.setTransform(1338.7,901.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-62.1,-0.4,61.7,-0.4).s().p("Ah5d3QgJgFAAgIQAegBAHgEQANABALgKQAHgHgBgGQAKgYgbALIgWAEQA6g1B4g3QBXgeAuhiQhvArhRALQgwAMh4AlQhmAcg9AAQgUgFgIgNQgFgIAAgLIAGAAQAOAGAQgJQAMgFAAgIQASgXggADIgMgBQAGgDAHAAQDZAWBng8QAxgPCWgVQiHgDhCgRIhdgaQgtgNACgHIAUgKQAbANAHABQAKAHAPgDQAJgDADgFQAUgQgcgEIgVgHIgEgCQAfgLAVAJQAdAPBnAdQBUARApgkQAQgiAQkAQAQjqALlEQAKkuADkFQACjtgJhDQgUhbgNgHQgNgZgJgtQgCgSACgFQgFhcAAg+QgMgbiJjIIkmmwQmjplAFgcQAHgkA0gjQAqgbAjASQAsApAwBeQArBOAQAmQAgBEEoIGQEPHgAvBNIBBBrQANAegBAfQAABDgbByQADARgMESIgWJbQgcNiAoARQAjAPBxAAIBKABQAXABAKAEIgCAAQgeAMgIAAQgUACANAMQABAFAIACQAKADAJgFQAFAAAXgKIADgBQAAAKgIAMQgOAXgSgDQjIgtgtADQhCAGj4DBQgzAyg2AJIgQABQgKAAgHgDg");
	this.shape_89.setTransform(1329.3,727.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AkgCmQATgcAqgIIAegEIAXgFQAagKgJAXQgCgHgPgGQAPAGACAHQABAHgIAHQgLAKgNgBQgGADgeACIgEAAQgcACgSANQgfAVAVArQgigdAegugAongnQAfgYAxAEIAlAGIAOACIAMABQAOALAAAJIAAAAQAAAIgLAFQgQAJgOgGIgGAAIgqgJQghgHgYAHQgrAOAJA2QgcgtAzgngAmKgeQAAgJgOgLQAhgDgTAXIAAAAgAIqhUQgPgCgRAHIgEABQgWAJgGABQgIAFgLgDQgHgCgBgFQgCgFAJgJQAIAAAdgMIACAAQAdgIAVAMQAkAUgNAeQgBgjgbgEgAkGjoQAfgPAnAOIAZAKIAEABIAWAIQAbADgUARIABgEQAAgGgIgKQAIAKAAAGIgBAEQgCAFgJADQgPADgLgHIghgOIgFgCQgYgMgWACQgmADgDAwQgPgqAxgZg");
	this.shape_90.setTransform(1338.7,901.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-62.1,-0.4,61.7,-0.4).s().p("Ah5d3QgJgFAAgIQAegCAHgDQANABALgKQAIgHgCgGQAJgYgaAKIgWAFQA6g2B4g2QBXgeAuhiQhvArhRALQgwALh4AmQhmAcg9AAQgUgFgIgNQgFgIAAgLIAGAAQAOAGAQgJQALgFABgHQASgYggADIgMgBQAGgEAHABQDZAWBng8QAxgPCWgVQiHgDhCgRIhdgaQgtgNACgHIAUgKIAiAOQAKAHAPgDQAJgDADgFQAUgQgcgEIgVgIIgEgBQAfgLAVAJQAdAPBnAdQBUARApgkQAQgiAQkAQAQjqALlEQAKkuADkFQADjtgKhDQgUhbgMgHQgOgZgJgtQgDgRADgGQgEhcAAg+QgMgbiJjIIkmmwQmkplAFgcQAHgkA0gjQAqgbAjASQAsApAwBeQArBOAQAmQAgBEEoIGQEPHgAvBNIBBBrQANAegBAfQAABDgbByQADARgMESIgWJbQgcNiAoARQAjAPBxAAIBKAAQAXACAKAEIgCAAQgdAMgJAAQgVACAOANQABAEAIACQALADAIgFQAFgBAXgJIADgBQAAAKgIAMQgPAWgRgCQjIgugtAEQhCAGj4DBQgzAyg2AJIgPABQgLAAgHgDg");
	this.shape_91.setTransform(1329.3,727.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AkgCmQAUgcApgIIAfgEIAWgFQAagKgJAYQgCgIgPgGQAPAGACAIQABAGgIAHQgLAKgMgBQgHADgeACIgEAAQgcACgSAMQgfAWAVArQgigdAegugAongnQAfgZAxAFIAlAGIAOACIAMABQAOALAAAJIAAABQAAAHgLAFQgQAIgOgFIgGgBQgNAAgdgIQghgIgYAIQgqAOAIA2QgcgtAzgngAmKgeQAAgJgOgLQAhgDgTAYIAAgBgAIqhUQgPgCgRAHIgDABQgXAJgGABQgIAFgLgDQgGgCgCgEQgCgGAJgJQAIAAAdgMIACAAQAdgIAVAMQAkAUgNAeQAAgjgcgEgAkGjoQAfgPAnAOIAZAKIAEABIAWAIQAbADgUARIABgEQAAgGgIgKQAIAKAAAGIgBAEQgCAFgJADQgPADgLgHIghgOIgEgCQgagMgVACQgmADgDAwQgPgqAxgZg");
	this.shape_92.setTransform(1338.7,901.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-62.1,-0.4,61.7,-0.4).s().p("Ah5d3QgJgFAAgIQAegCAHgDQANABALgKQAIgHgCgGQAJgYgaAKIgWAFQA6g2B4g3QBXgdAuhiQhvArhRAKQgwAMh4AmQhmAcg9AAQgUgFgIgNQgFgJABgLIAGABQAOAFAPgIQALgFABgHQASgYggADIgMgBQAGgEAHABQDZAWBng9QAxgOCWgVQiHgDhBgSIhegZQgtgNACgHIAUgKIAiAOQALAHAOgDQAKgDACgFQAUgQgcgEIgVgIIgEgBQAfgMAVAKQAdAOBnAdQBUASApgkQAQgjAQj/QAQjqALlEQAKkuADkFQADjugKhDQgThagNgIQgOgYgJgtQgDgSAEgFQgFhcAAg+QgMgbiJjIIkmmwQmkplAFgcQAHgkA0gjQAqgbAjASQAsApAwBeQArBOAQAmQAgBEEoIGQEPHgAvBNIBBBrQANAegBAfQAABDgbByQADARgMESIgWJbQgcNiAoARQAjAQBxgBIBKAAQAXACAKAEIgCAAQgdAMgJAAQgVACAPANQABAEAHACQALADAIgFQAFgBAXgJIADgBQAAAKgIAMQgPAWgRgCIhygYQhPgQgzgCQhEAFj3DBQgzAzg2AJIgPABQgLAAgHgDg");
	this.shape_93.setTransform(1329.3,727.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AkgCmQATgcApgIIAfgFIAWgEQAbgKgKAXQgCgHgPgGQAPAGACAHQACAGgIAHQgLALgNgBQgHADgeACIgEAAQgbACgTAMQgfAWAVArQghgdAegugAoognQAggZAxAFIAlAGIAOACIAMABQAOAMAAAIIAAABQAAAHgLAFQgQAIgOgGIgGAAQgOAAgcgIQghgIgYAIQgrAOAJA2QgdgtAzgngAmKgeQAAgIgOgMQAhgDgTAYIAAgBgAIqhUQgOgCgTAHIgDABQgWAJgGABQgIAFgLgDQgHgCgBgEQgCgFAIgKQAJgBAdgLIACAAQAdgIAVAMQAkATgNAfQgBgjgbgEgAkHjoQAfgPAoANIAZAKIAEACIAVAHQAcAFgUAQIABgEQAAgGgJgLQAJALAAAGIgBAEQgCAFgKACQgOAEgLgHQgHgBgbgNIgEgCQgZgMgWACQgmADgCAwQgPgrAwgYg");
	this.shape_94.setTransform(1338.8,901.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-62.2,-0.4,61.8,-0.4).s().p("Ah5d3QgKgFABgIQAegCAHgDQAMABALgLQAJgHgCgGQAJgYgaALIgWAEQA6g1B4g3QBXgdAthjQhvAshQAKQgwAMh4AlQhmAdg9gBQgUgEgIgNQgFgJAAgLIAGAAQAOAGAQgIQALgFABgHQASgYghADIgMgBQAHgEAHABQDZAWBng9QAxgPCWgUQiHgDhCgSQiWgnAOgGIAUgKQAbANAHABQAKAHAPgEQAKgCACgFQAUgQgcgFIgVgHIgFgCQAfgLAVAKQAdAOBoAdQBUASApgkQAQgjAQj/QAPjqAMlEQAKkuADkFQACjugJhDQgUhagNgIQgNgYgJgtQgCgSACgGQgFhaAAg/QgMgbiJjIIkmmwQmkplAGgcQAHgkAzgjQArgbAjASQA8A4BaDCQAhBFEnIGQEPHeAwBPIBBBrQANAdgBAgQAABDgbByQADARgMESIgXJbQgcNiAoARQAkAPBxAAIBJAAQAYACAJAEIgCAAQgdALgIABQgVACAPANQABAEAGACQALADAIgFQAGgBAXgJIADgBQABAKgJALQgPAYgSgDIhygYQhPgQgzgCQhDAFj4DBQgzAzg1AIIgQACQgKAAgHgDg");
	this.shape_95.setTransform(1329.3,727.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AkgCmQATgcApgIIAfgFIAWgEQAbgKgKAXQgCgHgPgGQAPAGACAHQACAGgIAHQgLALgNgBQgHADgeACIgEAAQgbABgTANQgeAWAVArQgigdAegugAoognQAggZAxAEIAlAHIAOACIAMAAQAPAMAAAJIgMANQgQAIgOgGIgGAAIgqgIQghgIgYAIQgrAOAJA2QgdgtAzgngAmYgzQAggCgRAXQAAgJgPgMgAIqhUQgOgCgSAHIgEABQgWAKgGAAQgIAFgLgDQgHgCgBgEQgCgFAIgKQAJgBAdgLIACAAQAdgIAVAMQAkATgNAfQgBgkgbgDgAkGjoQAegPAoANIAZAKIAEACIAVAHQAcAFgUAQIABgEQAAgGgJgLQAJALAAAGIgBAEQgCAFgKACQgOAEgLgHIgigOIgEgCQgYgNgXACQgmAEgCAwQgPgrAxgYg");
	this.shape_96.setTransform(1338.8,901.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-62.2,-0.4,61.7,-0.4).s().p("Ah5d3QgKgFABgIQAegBAHgEQAMABALgKQAIgIgBgGQAJgXgaALIgWAEQA6g1B4g3QBXgeAthiQhuArhRALQgwALh4AmQhmAcg9AAQgUgFgIgNQgFgIAAgLIAGAAQAOAGAQgJQAMgFAAgIQASgXghADIgMgBQAHgDAHAAQDZAWBng8QAxgPCWgVQiHgDhCgRIhdgaQgtgNACgHIAUgKIAiAOQAKAHAPgDQAKgDACgFQAUgQgcgEIgVgHIgFgCQAfgLAWAJQAdAPBnAdQBTARAqgkQAQgiAQkAQAPjqAMlEQAKkuADkFQADjtgKhDQgUhbgMgHQgOgZgJgtQgDgSADgFQgEhcAAg+QgMgbiJjHIknmwQmkplAGgcQAHglAzgiQArgbAjARQA8A5BaDCQAhBEEnIGQESHkAtBJIBBBrQANAegBAfQAABEgbByQADAQgMESIgWJbQgcNiAnARQAkAPBxAAIBJABQAYABAJAEIgCAAQgdAMgIAAQgVADAPAMQABAEAGACQALADAIgFQAGAAAXgKIADgBQAAAKgIAMQgPAXgSgDQjHgtgtADQhDAGj4DBQgzAyg1AJIgPABQgLAAgHgDg");
	this.shape_97.setTransform(1329.3,727.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AkgCmQATgcApgIIAfgEIAWgFQAbgKgKAYQgBgIgQgGQAQAGABAIQABAGgHAHQgLAKgNgBQgHADgeACIgDAAQgcACgTAMQgeAWAVArQgigdAegugAoognQAggZAxAFIAlAGIAOACIAMABQAOALAAAJIAAAAQAAAIgLAFQgQAIgOgFIgGAAIgqgJQghgHgYAHQgrAOAJA2QgcgtAygngAmKgeQAAgJgOgLQAggDgSAXIAAAAgAIqhUQgOgCgSAHIgEABQgWAKgGAAQgIAFgLgDQgHgCgBgEQgCgGAIgJQAJAAAdgMIACAAQAdgIAVAMQAkAUgNAeQgBgjgbgEgAkGjoQAegPAoAOIAZAKIAEABIAVAIQAcADgUARIABgEQAAgGgJgKQAJAKAAAGIgBAEQgCAFgJADQgPADgLgHIgigOIgEgCQgYgMgXACQgmADgCAwQgPgqAxgZg");
	this.shape_98.setTransform(1338.8,901.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-62.2,-0.4,61.7,-0.4).s().p("Ah5d3QgKgFABgIQAegCAHgDQAMABAMgKQAHgHgBgGQAJgYgaAKIgWAFQA6g2B4g2QBXgeAuhiQhvArhRALQgwALh4AmQhmAcg9AAQgUgFgIgNQgFgJAAgKIAGAAQAOAFAQgIQAMgFAAgIQASgXghADIgMgBQAHgEAHABQDZAWBng8QAxgPCWgVQiHgDhCgRIhdgaQgtgNACgHIAUgKIAiAOQAKAHAPgDQAKgDACgFQAUgRgcgDIgVgIIgEgBQAfgLAVAJQAdAPBnAdQBTARAqgkQAQgiAQkAQAPjqAMlEQAKkuADkFQADjtgKhDQgThbgNgHQgOgZgJgtQgDgRAEgGQgFhcAAg+QgMgbiJjHIknmwQmkplAGgcQAHglAzgiQArgbAjARQA8A5BaDCQAhBEEoIGQEQHhAuBMIBBBrQANAegBAfQAABDgbByQADARgMESIgWJbQgcNiAoARQAiAPByAAIBJABQAYABAKAEIgCAAQgeAMgIAAQgVACAOANQACAEAHACQAKADAIgFQAGAAAXgKIADgBQAAAKgIAMQgOAXgTgDQjHgtgtADQhDAGj4DBQgzAxg1AKIgPABQgLAAgHgDg");
	this.shape_99.setTransform(1329.3,727.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AkgCmQATgcAqgIIAegEIAXgFQAZgKgJAYQgCgIgOgGQAOAGACAIQABAGgHAGQgLALgNgBQgGADgeACIgEAAQgcACgSAMQgfAWAVArQgigdAegugAongnQAfgZAxAFIAlAGIAOACIAMABQAPALAAAJIAAAAQgBAIgLAFQgQAIgOgGIgGAAQgNAAgdgIQgggIgZAIQgrAOAJA2QgcgtAzgngAmJgeQAAgJgPgLQAggDgRAXIAAAAgAIqhUQgOgCgSAHIgEABQgWAJgGABQgIAFgLgDQgIgCgBgFQgBgFAIgJQAJAAAdgMIACAAQAdgIAVAMQAkAUgNAeQgBgjgbgEgAkGjoQAegPAoANIAZALIAEABIAVAIQAcAEgUAQIABgDQgBgHgIgKQAIAKABAHIgBADQgCAFgJACQgPAEgLgHIghgOIgFgCQgYgMgXACQglADgDAwQgPgqAxgZg");
	this.shape_100.setTransform(1338.8,901.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-62.2,-0.4,61.7,-0.4).s().p("Ah5d3QgKgFABgIQAegCAHgDQAMABAMgLQAHgHgBgGQAJgXgaAKIgWAFQA6g2B4g3QBXgdAuhiQhvArhRAKQgwAMh4AlQhmAdg9gBQgUgEgIgNQgFgJAAgLIAGAAQAOAGAQgIQAMgFAAgIQASgXggADIgNgBQAHgEAHABQDZAWBng9QAxgOCWgVQiHgDhCgSQiVgnANgGIAUgKIAiAOQAKAHAPgEQAKgCACgGQAUgQgcgDIgVgIIgEgBQAfgMAVAKQAdAOBnAdQBTASAqgkQAQgiAQkAQAQjqALlEQALkuADkFQACjtgKhDQgThbgNgHQgNgZgJgtQgDgSADgFQgFhcAAg+QgMgbiJjHIknmwQmkplAGgcQAHglAzgiQArgbAjARQA8A5BaDCQAhBEEoIGQEQHgAuBNIBBBrQANAegBAfQAABDgaByQACARgMESIgWJbQgcNiAoARQAjAQBxgBIBKAAQAXACAKAEIgCAAQgeAMgIAAQgUACANAMQABAFAIACQAKADAIgFQAGgBAXgJIADgBQAAAKgIAMQgOAWgTgCQjHgugtAEQhDAGj3DAQgzAzg2AJIgPABQgLAAgHgDg");
	this.shape_101.setTransform(1329.3,727.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AkxCiQAWgaAqgEIAfgBQARgBAFgBQAcgIgMAWQgBgHgPgHQAPAHABAHQABAHgJAGQgMAJgMgCQgHADgegCIgEAAQgcgBgTALQghASAQAtQgfggAjgrgAIugEQgOgEgTAFIgDABQgYAGgGgBQgIAFgLgEQgHgDAAgCQgCgGAKgIQAIAAAegJIACAAQAegEAUANQAhAVgPAeQACgkgagEgAojhDQAhgXAxAKIAkAKIAOADIAMACQANAMAAAJIAAABIgOAMQgQAGgOgHIgGAAIgogNQgggLgZAGQgsAJADA3QgYgtA3gkgAmGgrIAAgBQAAgJgNgMQAgABgTAVIAAAAgAmThBIAAAAgAjwjnQAfgMAnARIAYAMIAEADIAUAJQAcAHgWAOIABgFQAAgGgHgKQAHAKAAAGIgBAFQgDAFgJABQgPADgKgJQgHgCgZgPIgEgCQgYgPgWAAQgmAAgIAvQgKgsAzgTg");
	this.shape_102.setTransform(1338.8,880.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-61.9,-0.3,61.9,-0.3).s().p("AiNcSQgJgFABgJQAeACAHgDQANACAMgJQAIgGgBgHQAMgWgbAIQgGABgRABQA/gvB9grQBZgVA3heQhyAhhRACQgyAHh7AaQhnASg9gGQgUgHgGgOQgFgJACgKIAFAAQAOAHARgGQAMgFABgHQAUgVgggBIgMgCQAGgDAHACQDWArBsgyQAzgKCXgGQiGgQhAgYIhagjQgrgRACgHIAVgIQAZAPAHACQAKAJAPgDQAKgBACgFQAWgOgbgHIgVgJIgEgDQAfgIAVAMQAcARBjAnQBSAaAtggQATghApj8QAnjoAqlBQApkrAckEQAZjsgDhEQgKhcgMgJQgLgZgFguQAAgSAHAGQgIhagSgyQgQgZimixIljl+Qn8ofACgdQABglAugqQAmghAkAMQBEAvB3CyQArA/FwHUQFYGzA4BDQAtA1AlAxQANAcgGAoQgGBDglBuQABARgoEQQgiD3gvFeQhwNcAmAVQAiATBwAKIBJAIQAYADAJAFIgCAAQgeAJgJAAQgVAAANAOQABAEAGADQALAEAJgFQAFABAYgIIAEgBQgCAKgJALQgRAWgRgEQjDhBgsgBQhDgCkKCpQg3Asg3AEIgIAAQgPAAgJgFg");
	this.shape_103.setTransform(1329.6,717.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("Ak/CdQAYgXAqAAIAfABIAXABQAOAIAAAIQAAgIgOgIQAbgGgNAWQAAAGgJAFQgNAIgMgDQgHACgegEIgEgBQgbgDgVAIQgiAPAMAvQgcgjAngogAIrBKQgNgFgTAEIgEAAIgdAEQgJAEgKgFQgHgEAAgEQgBgGAKgHQAJABAegGIACABQAegCATAPQAfAbgSAbQAGgjgbgJgAoahfQAkgSAvAOIAjANIAOAFIALADQALAMAAAIIAAADIAAgDQAAgIgLgMQAhAEgWATQgCAHgMADQgSAFgMgIIgGgBIgogRQgegOgaADQgsAGgDA4QgTgxA6gfgAiHipIgegUIgEgDQgWgRgWgCQgmgEgMAuQgGgsA1gPQAggJAlAVIAXAPIADACIAUAMQAaAJgWALIABgFQAAgGgFgJQAFAJAAAGIgBAFQgDAGgLAAIgDAAQgNAAgIgIg");
	this.shape_104.setTransform(1336.9,855);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-69.7,-0.2,69.9,-0.2).s().p("AjfabQgWAAgKgIQgJgGADgIQAeAEAHgCQAMADANgIQAJgFAAgGQANgWgbAGIgXgBQBEgoCCgfQBZgMBAhXQh1AVhQgGQgzACh9AOQhpAIg8gNQgTgIgFgPQgEgJADgKIAGABQAMAIASgFQAMgDACgHQAWgTghgEIgLgDQAHgDAGADQDRBABzgoQAzgFCVAJQiCgdg9geIhYgrQgpgWADgGIAVgGIAeAUQAJAJAPgBQALAAADgGQAWgLgagJIgUgMIgDgCQAggGATAPQAcAUBdAwQBPAiAvgcQAXgeBBj4QA9jjBKk7QBFkmA2kAQAwjoAEhEQgChdgLgJQgIgbAAguQABgSAMAQQgJhWglglQgTgWi+iWImZlEQpInNgDgcQgEglAngwQAhgnAmAHQBJAjCSCfQAyA3GzGYQGNFyBKBCQA0AuAsAwQAOAcgJAuQgNBCgxBrQAAAQhCELIiLJLQjDNMAjAZQAgAWBvAVIBIAPQAXAGAIAGIgCgBQgeAGgJgBQgVgCAMAPQAAAEAHAEQAKAFAJgEIAdgEIAEAAQgCAKgKAJQgUAVgQgHQi7hTgtgGQhCgHkXCNQg8Alg0AAIgEAAg");
	this.shape_105.setTransform(1337.4,704.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AH1EEQgLgJgTgEIgDgBQgYgFgGgCQgJAAgHgJQgFgFABgFQACgFALgDQAIAEAfAGIABABQAdAKALAUQATAkgbATQATgegVgSgAlXAOQAggOAnAQIAcANIAVAJQAHAKAAAHIgBAEIABgEQAAgHgHgKQAcAFgWAQQgCAFgJACQgQACgKgHQgHgBgagPIgEgCQgYgOgWABQgmABgFAwQgNgrAygWgAlVjLQgSgCgIgMIgFgEIgfgdQgXgZgZgGQgrgMgYA0QABg1BBgHQAogEAnAfIAbAZIALAJIAKAHQADAKAAAHQAAAFgCADQgEAFgIAAIgFAAgAgfjNQgOgFgFgLIgVgeIgCgEQgOgYgUgLQgigRgcAnQALgsA2AGQAiAEAaAhIAPAWIADADIAOASIAAAHQAAALgFADQgCACgEAAIgIgCgAgRjNQAFgDAAgLIAAgHQATATgYACIAAAAgAlEjQQACgDAAgFQAAgHgDgKQAdAQgcAJIAAAAgAgMjiIAAAAgAlFjpIAAAAg");
	this.shape_106.setTransform(1218.5,856.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-88.8,-0.2,89,-0.2).s().p("Ahba+QiPiTgngVQg7ggk5AcQhIANgygVQgUgJgGgLQgHgIAGgHQAaAPAHABQAKAHAQgCQAJgCADgFQAVgPgcgGIgVgJQBOgNCEAUQBZAXBcg6Qh1gYhKgjQgwgRh5giQhlgfgzgiQgOgPAAgPQABgJAGgKIAFAEQAIAMASACQANACAEgGQAcgKgdgQIgKgHQAIAAAFAFQCqCIB5AGQAyAOCJBBQhwhNgugyQg3g9gkg0IAWADIAVAeQAFALAOAFQAKAEAEgEQAbgCgWgTIgOgSIgDgDQAhAHAMAUQASAdBHBQQA9A8A2gIQAhgUCYjOQCKi8C5kKQCtj4CQjaQCDjIAdg7QAhhXgHgNQACgcARgrQAHgQAGAUQAWhTgVgwQgKgch8jQIkLnCQl5p/AHgcQAKgkAzgfQAtgYAhATQA1A6BRDKQAcBGEFIZQDuHpAtBXQAgA+AYA9QADAfgaAoQgkA5hVBPQgGAPigDhIlaHvQnsLIAZAkQAVAgBfA9IA+AoQATAPAFAIIgBgBQgfgGgIgEQgSgKAFATQgBAEAFAFQAHAJAJAAQAGACAYAFIADABQgFAIgOAFQgMAGgKAAQgJAAgHgGg");
	this.shape_107.setTransform(1269.2,710);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AF3GhQgHgNgQgLIgDgCQgUgMgEgFQgJgEgEgKQgCgHACgDQAEgFAMABQAGAGAaASIABABQAXAUADAXQAEApggAHQAdgVgNgYgAjnggQgPgDgHgLQgGgDgTgYIgDgDQgRgVgVgIQgjgNgXAqQAEgsA3gCQAigBAeAdIAWAXIAQAPQACAIAAAFQAAAGgDADQgDADgGAAIgFgBgAjZgiQADgDAAgGQAAgFgCgIQAYAQgZAGIAAAAgAjYg4IAAAAgABBjPQAHgCAEgQQAKATgNAAIgIgBgAAzjUQgMgKAAgNQgCgGgGgdIgBgFQgEgbgPgRQgWgdgpAaQAaglAuAaQAeAQAMAoIAHAaIABAFIAGAVQgEAQgHACIgDABQgFAAgGgGgABBjPIAAAAgAjblDQAIgFABgTQAUAYgZAAIgEAAgAjslFQgQgIgDgPIgEgFQgGgLgLgcQgNgfgUgPQgkgbgpAoQAUgxA/ARQAnALAZArIAQAhIAGANIAHAKQgBATgIAFIgRgCg");
	this.shape_108.setTransform(1108.7,814.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-109.4,-0.1,109.3,-0.1).s().p("AoAYgIgvhrQghhKgbgrQgsgzkthaQhIgOgmgmQgPgQgCgMQgCgLAHgEQATAYAGADQAHALAPADQAKACAEgEQAZgGgYgQIgQgPQBNAQBzBDQBLA2BqgUQhjhBg4g8QgnghhkhNQhShCgjgyQgIgSAGgPQAEgJAJgGIAEAFQADAPAQAIQALAGAGgEQAeACgVgaIgHgKQAHADADAGQBsC+BvAyQApAgBnBuQhMhwgXhAQg4iSAMAIIAUAKQAGAdACAGQAAANAMAKQAIAHAGgCQAYAGgNgYIgGgVIgBgFQAbASAEAYQAGAhAlBlQAiBOA1ANQBJgNKKmvQD8inDWiVQDEiJAyguQA+hFgBgPQAMgZAfgiQANgMgCAVQAzhFgDgzQABgdgpjvIhYoEQh8rdARgXQAWgeA9gKQAygGAYAeQAfBOAADVQABBMAzJSQAwIrAKBSQAHBFAABDQgIAdgnAcQg2AnhtAsQgMAMjoCXIn4FLQrPHgAJArQAIAlBCBcIAqA8QANAVACAJIgBgBQgagSgGgGQgOgQgCAUQgCADACAHQAEAKAJAEQAEAFAUAMIADACQgIAGgPAAIgEAAQgXAAgIgOg");
	this.shape_109.setTransform(1189.5,696.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AHFFNQgJgLgSgHIgDgCQgXgIgFgDQgJgCgGgKQgEgGACgEQADgFAMgBQAHAFAdALIABACQAbANAHAXQANAngeAOQAYgbgSgVgAkBAKQgHgCgYgRIgDgDQgVgRgXgDQglgFgNAsQgGgrA2gNQAggIAkAWIAaASIATAMQAFAIAAAGIgBAFQgDAFgLAAQgPAAgIgJgAjcAOIABgFQAAgGgFgIQAbAIgXALIAAAAgAjggFIAAAAgAAFjWQgLgHgDgNIgQghIgBgEQgLgagRgOQgegXgjAiQASgqA0APQAhAKATAlIALAYIACAEIALAUQgBAQgHAEIgEABQgEAAgGgDgAATjUQAHgEABgQQAQAUgUAAIgEAAgAATjUIAAAAgAlDkbIgEgEIgagiQgSgdgYgKQgogTggAwQAJg1BCAEQAoADAhAlIAXAdIAJALIAIAJQAaAUgdAFQAEgEAAgKIgBgLIABALQAAAKgEAEIgRABQgSgEgGgOg");
	this.shape_110.setTransform(1114.5,851.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-102.7,0.2,103.4,0.2).s().p("Ak8a6IhEhfQgvhBgkgkQg1gpk5gZQhKABgtgeQgSgMgFgLQgEgKAGgGQAYAUAHABQAIAKAPAAQALAAADgGQAXgLgbgKIgTgMQBPAAB/AqQBUAlBkgqQhvgqhDgvQgtgZhxg2QhegwgtgpQgMgRADgPQACgLAIgHIAEAEQAGAOASAFQAMADAFgFQAegEgbgVIgIgIQAHABAFAGQCRCjB2AaQAvAWB8BWQhhheglg5Ig1hTQgYgoAGgDIAVAGIAQAhQADAMANAHQAJAFAFgDQAaACgSgWIgLgTIgCgEQAeAMAKAVQANAgA4BbQAyBGA3ABQAjgOC5iyQCpiiDhjoQDUjXCyi/QCjivAng4QAvhQgFgOQAHgbAYglQAKgPADAGQAyhLAWgzQAEgdgNjyIgaoLQgmrmAUgVQAZgcA+gCQAygBAVAhQAUBMgXDZQgIBLgTJUQgSInAABbQgBBFgCA6QgHAggbAaQgtAyhhBCQgJAOjDDEQixCxj3D8QpcJsASAnQAQAkBUBLIA1AzQARAQAEAKIgBgBQgdgLgHgGQgQgMABASQgCAEAEAHQAGAJAJACQAFAEAXAIIADABQgGAIgPADQgJACgHAAQgOAAgIgJg");
	this.shape_111.setTransform(1183,711.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AH/D2QgMgJgTgDIgDAAQgYgEgGgCQgJAAgIgIQgFgFABgEQABgGAMgEQAIADAfAGIACABQAcAIANAVQAUAjgaAUQARgfgVgSgAlXAkQAfgOAoAOIAcAMIAWAHQAcAEgUAQIAAgCQAAgHgIgLQAIALAAAHIAAACQgCAGgKACQgPADgLgHQgHgBgbgNIgDgCQgZgMgWABQgmADgEAwQgOgrAxgYgAlei1QgSgBgJgMIgFgDIgggcQgZgXgZgGQgrgKgVA1QgCg1BBgKQAogGAoAeIAcAXIALAKIAKAGQAEALAAAGQAAAFgCADQgEAGgJAAIgDgBgAlMjCQAAgGgEgLQAeAPgcAKQACgDAAgFgAgojDQgPgFgFgLIgWgdIgDgEQgPgXgUgKQgigQgbAoQAJgsA2ADQAiADAcAgIAQAVIADAEIAOARIABAJQAAAJgEADQgDACgEAAIgHgBgAgajEIAAAAgAgWjQIgBgJQAWASgZADQAEgDAAgJg");
	this.shape_112.setTransform(1127.5,879.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-98.3,0.1,99.2,0.1).s().p("AincjIhWhPQg8g1grgcQg9gek3ApQhHARgzgUQgUgIgIgKQgGgJAFgHQAbAOAHABQALAHAPgDQAKgCACgGQAUgQgcgEIgWgIQBOgRCEAPQBaATBag+Qh2gShLghQgxgPh7gcQhmgcg0gfQgPgOAAgQQAAgJAGgJIAFADQAJAMASABQAMABAEgGQAcgLgegOIgKgHQAIAAAFAEQCxCBB4ABQAzAMCLA7QhzhIgvgwQg7g7glgyIAWABIAWAdQAFAMAPAEQAJAEAFgEQAZgEgWgSIgOgRIgDgDQAgAFAOAUQATAcBKBNQBAA6A2gKQAfgWCQjUQCDjCCskSQCij/CHjgQB7jNAag+QAdhXgHgMQABgcAPgsQAGgQAHgJQAwhPAugyQAIgdAQjyIAioKQAyrmAWgSQAcgZA+AFQAyAFARAkQAMBSgyDQQgQBJhZJPQhSIfgLBcIgOB5QgGAggOAYQghA4hRBVQgGAPiXDoIlEH9QnNLcAZAjQAXAfBiA5IA/AmQATANAHAIIgCgBQgfgFgIgDQgTgJAGASQgBAEAFAFQAIAJAJgBQAGADAYADIADABQgFAJgNAFQgNAHgKAAQgJAAgGgFg");
	this.shape_113.setTransform(1186.8,721.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AIhCwQgMgGgUAAIgDABQgZABgFgBQgKACgJgGQgGgEAAgFQABgGAKgGQAJADAfgCIACAAQAdADARARQAbAegVAZQAKgigZgMgAlNCVQAbgVAqAGIAeAFIAXADQAcgBgQATIAAgBQAAgHgMgKQAMAKAAAHIAAABQgBAGgJAEQgOAHgMgFQgHABgdgIIgEgBQgagIgWAHQgkAKAGAwQgXgmArgigAoGiBQAmgOAtAUIAhASIANAGIALAFQAIAMAAAHIgBAFQgDAHgMABQgSADgLgKIgGgCIglgVQgcgSgaAAQgtAAgJA4QgNg0A9gXgAlzhGIABgFQAAgHgIgMQAgAIgZAQIAAAAgAl6heIAAAAgAhWiNQgPgBgIgKIgbgYIgEgDQgTgUgWgFQglgIgSAsQAAgtA2gIQAigEAhAZIAVARIADADIASAOQADAIAAAGQAAAFgCADQgEADgHAAIgDAAgAhIiQQACgDAAgFQAAgGgDgIQAZANgYAJIAAAAgAhJimIAAAAg");
	this.shape_114.setTransform(1146.3,894.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-90.7,-0.1,90.7,-0.1).s().p("AgSdXIhkg7QhGgogwgSQhBgRkoBqQhDAfg1gJQgWgEgJgIQgIgIAEgHQAdAIAHgBQAMAFAOgHQAJgEABgGQAPgTgbABIgXgDQBJghCEgNQBcAABLhPQh3AHhQgRQg0gEh9gDQhpgFg6gUQgSgKgDgPQgCgKADgKIAGACQALAKASgDQAMgBADgHQAZgQgggIIgLgFQAHgCAHAEQDHBZB2gYQA0ABCUAcQh/gug4glQiEhVAPgCIAWgDIAbAYQAIAKAPABQAKABADgFQAZgJgZgMIgSgOIgDgDQAgAAARAPQAZAYBZA8QBKArAzgVQAagbBgjuQBYjZBvkwQBqkbBVj3QBOjjAMhCQAKhagKgLQgFgcAGguQADgRAJgZQArhQBGgzQALgbAsjvIBgoCQCIrbAYgQQAfgVA9AMQAxALAMAlQACBRhJDLQgZBHidJAQiRISgWBaQgRBDgIAsQgFAggBATQgVBAg9BiQgDAQhjECIjTI1QkqMtAgAdQAdAaBrAjIBGAYQAUAJAIAGIgCAAQgdACgJgDQgUgEAJAQQAAAEAGAFQAJAGAJgCQAEABAZgBIADgBQgDAKgLAIQgPAMgKAAQgGAAgFgCg");
	this.shape_115.setTransform(1194.4,726.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AlFCbQAZgXAqACIAfADIAXABQAcgEgPAVQAAgHgNgKQANAKAAAHQAAAGgJAFQgNAIgNgEQgHACgdgGIgEgBQgbgFgVAIQgkANALAvQgagkAoglgAIpBvQgOgFgTACIgDABQgZAEgFgCQgJAEgKgGQgGgDAAgFQgBgFAKgIQAJACAfgFIACABQAdgBASARQAeAbgTAbQAHgjgZgKgAoUhrQAlgRAvAQIAiAPIANAGIAMADQAJAMAAAIIAAAEQgDAHgMACQgRAEgMgJIgGgBIgngSQgegPgZABQgtAEgFA4QgRgyA7gcgAl8g8IAAAAgAl8hAQAAgIgJgMQAgAFgXATIAAgEgAh+ijQgGgDgXgTIgEgDQgVgSgWgDQgmgGgOAuQgEgsA1gNQAhgHAkAXIAWAPIAEADIASAMQAFAKAAAGQAAADgCACQgDAFgKAAQgPAAgJgJgAhZifIAAAAgAhXikQAAgGgFgKQAbALgYAKQACgCAAgDg");
	this.shape_116.setTransform(1190.7,907.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-69.1,0.1,69.6,0.1).s().p("AnheWQgWgCgKgIQgIgHADgIQAdAGAHgCQANAEANgHQAJgFAAgHQAPgUgcAEIgXgBQBFgmCEgYQBbgIBEhVQh1AQhSgJQgzgBh+AIQhpADg8gPQgSgJgFgPQgDgJAEgLIAGACQAMAJARgEQAMgDADgHQAXgTgggEIgMgEQAHgDAHADQDNBKB0giQA0gDCWAQQiCgkg8ggIhWgvQgogYADgGIAWgFQAXATAGACQAJAKAPAAQAKAAADgFQAYgLgbgKIgSgMIgEgDQAhgEASAPQAaAVBeA1QBNAlAxgZQAYgeBKj0QBHjgBYk4QBTkiBBj9QA7joAHhDQAChbgKgKQgIgcACgtQACgSAGgWQAihUA3g8QAGgdACjyIAHoMQAJrnAVgUQAagaA+ABQAzADASAiQAMA7gOBpQgKBYgJAoQgNBLg4JSQg1IpgFBWQgFBFgBAvIgCA2QgQBBg1BnQgCAQhNEKQhGDwhgFUQjnNCAgAaQAeAYBuAaIBIASQAWAHAJAGIgCAAQgfAEgJgBQgVgDAMAQQAAAEAGADQAKAGAJgDQAFABAZgEIADAAQgCAKgLAJQgUATgRgHIhpgyQhJgigvgPQhCgLkfCBQg5AggxAAIgLAAg");
	this.shape_117.setTransform(1216.3,732.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("Ak6CfQAWgYArgCIAfABIAXgBQAbgGgNAWQAAgIgOgIQAOAIAAAIQABAGgJAGQgNAIgMgDQgHACgegDIgEAAQgcgDgUAJQgiARAOAuQgdgiAmgpgAItAtQgOgEgTAEIgDABIgeAFQgJADgKgEQgHgDAAgFQgBgGAKgHQAIABAfgHIACAAQAegCATAOQAgAZgSAcQAFgjgagIgAoehVQAjgUAwAMIAjAMIAOAFIAMACQALANAAAIIAAACQgCAHgMAEQgRAFgNgIIgGgBQgMgDgcgLQgfgOgZAEQgsAHgBA5QgVgxA5gggAmDgzIAAgCQAAgIgLgNQAgAEgVATIAAAAgAmOhKIAAAAgAiOiuQgHgCgYgRIgEgDQgWgPgWgCQgmgDgKAvQgIgsA0gRQAggJAmATIAWAOIAEACIAUALQAFAKAAAGIgBAFQgDAFgJABIgEAAQgNAAgIgIgAhpisIAAAAgAhoixQAAgGgFgKQAcAIgYANIABgFg");
	this.shape_118.setTransform(1235.8,914.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-53.4,-0.2,53.4,-0.2).s().p("AlSexQgKgGADgIQAeADAHgCQAMADANgJQAJgFgBgHQANgVgbAGIgXAAQBCgrCBgjQBagPA7haQhyAZhSgCQgzAEh8ARQhpAMg9gKQgSgIgGgOQgEgKACgKIAGABQANAIARgGQAMgDACgHQAVgUgggDIgMgDQAHgDAHADQDTA4BxgrQAzgHCVAEQiDgZg+gcIhagoQgqgUADgGIAVgHQAYAQAHADQAKAJAPgCQAJAAADgFQAYgNgcgJIgUgKIgEgCQAhgHATANQAcATBiAtQBOAfAugdQAWgfA4j6QA1jkA/k+QA6kpAtkBQAojsAChCQgFhdgMgJQgJgagBguQgBgSAEgSQAXhYAohBQABgegnjvIhToFQh2reARgXQAWgeA9gJQAygGAYAeQAWA4AEBqQAFBZgCAoQAABMAuJTQArIiAJBeIAPB2QAEAhgCAXQgLBDgtBrQAAAPg4EPIh2JPQimNTAlAXQAfAVBwARIBJANQAXAFAJAFIgCAAQgfAHgIgBQgVgBAMAPQABAEAGADQAKAFAJgEIAegFIADgBQgBAKgLAKQgSAVgRgFIhtgqQhLgdgygKQhDgFkSCXQg8Aog2ABQgWAAgKgHg");
	this.shape_119.setTransform(1245.2,735.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AkuCjQAVgaAqgFIAfgCIAXgDQAagIgLAXQgBgHgOgIQAOAIABAHQABAGgIAGQgMAKgMgCQgHADgegBIgEAAQgcgBgUALQggATARAtQgfggAigrgAItgTQgOgDgSAGIgEABQgXAHgGAAQgIAFgLgEQgGgDgBgEQgCgFAJgJQAJAAAegJIACAAQAdgFAUANQAiAWgPAcQACgigbgGgAokg+QAhgXAxAJIAkAJIAOADIAMACQAMAMAAAIIAAACQgBAHgLAEQgRAHgNgHIgGAAIgpgMQgggKgZAGQgsAKAEA3QgYgtA2glgAmIgoIAAgCQAAgIgMgMQAgAAgUAWIAAAAgAmUg+IAAAAgAj1joQAggMAnAQIAYAMIAEACIAUAJQAHALAAAGIgBAEQgCAGgKABQgPACgKgIIgggQIgEgDQgYgOgWAAQgmABgHAvQgLgrAygVgAh4i4IAAAAgAh3i8QAAgGgHgLQAcAHgWAOIABgEg");
	this.shape_120.setTransform(1280.7,915.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-48.4,-0.4,48.4,-0.4).s().p("AkQe3QgKgFACgJQAeABAHgDQANACAMgJQAIgHgBgGQALgXgbAJIgWACQA+gwB+gtQBXgWA1hfQhwAjhRAEQgzAHh7AcQhnAUg9gFQgUgGgHgOQgEgJABgLIAGABQAOAHAQgHQAMgFABgHQAUgWghAAIgMgBQAHgEAHACQDWAnBug0QAygLCVgIQiEgOhAgXIhdghQgsgRADgGIAUgJIAhARQAKAIAPgDQAJgBADgFQAVgOgbgHIgVgJIgEgCQAggJAUAMQAeARBkAlQBRAYAsghQATghAkj+QAijnAllCQAjktAYkEQAVjsgEhEQgMhcgMgIQgMgagFgtQgCgSADgOQALhbAZhCQgEgehPjlIirnvQjwq/ANgaQAQghA6gUQAxgPAdAaQAdA0AWBnQAUBXAFAoQANBLCUJCQCKIeAXBRQASBCAQAxQAJAhgCAZQgFBDgkBwQABAQgiERIhHJXQhhNdAnAUQAiASBwAIIBKAHQAXADAJAFIgCAAQgeAJgIAAQgVABANAOQABAEAHACQAKAEAJgEQAGAAAXgIIADgBQAAAKgKALQgQAWgSgEQjDg+gtAAQhDAAkECtQg5Atg3AFIgIAAQgQAAgIgEg");
	this.shape_121.setTransform(1284.9,735.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56}]}).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_99},{t:this.shape_98}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_103},{t:this.shape_102}]},1).to({state:[{t:this.shape_105},{t:this.shape_104}]},1).to({state:[{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_115},{t:this.shape_114}]},1).to({state:[{t:this.shape_117},{t:this.shape_116}]},1).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_99},{t:this.shape_98}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_103},{t:this.shape_102}]},1).to({state:[{t:this.shape_105},{t:this.shape_104}]},1).to({state:[{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_115},{t:this.shape_114}]},1).to({state:[{t:this.shape_117},{t:this.shape_116}]},1).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_99},{t:this.shape_98}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_103},{t:this.shape_102}]},1).to({state:[{t:this.shape_105},{t:this.shape_104}]},1).to({state:[{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_115},{t:this.shape_114}]},1).to({state:[{t:this.shape_117},{t:this.shape_116}]},1).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).wait(1));

	// leg R
	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AkwCjQAWgaAqgFIAegCIABAAQAQABAGgDQAagIgLAXQgBgIgOgHQAOAHABAIQABAGgIAHQgMAJgMgCQgHACgegBIgEAAQgdAAgSAKQghATARAtQgfghAigqgAItgJQgOgDgSAFIgDABQgYAGgGAAQgIAEgLgEIgIgGQAAgGAIgHQAJgBAegIIACAAQAegFATAOQAiAVgPAdQACgigbgGgAokhCQAigVAxAJIAjAJIAPAEIAMABQAgAAgUAWIAAgCQAAgIgMgMQAMAMAAAIIAAACQgBAHgMAFQgRAGgNgHIgGAAIgpgMQgggLgZAFQgsAKAEA3QgYgtA2glgAjyjnQAggMAnAQIAXANIAEACQAQAIAFABQAbAHgWAOIABgFQAAgGgGgKQAGAKAAAGIgBAFQgDAFgJACQgPACgJgIIghgRIgEgCQgYgPgWAAQglAAgIAvQgLgrAzgUg");
	this.shape_122.setTransform(1242.3,889.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-48.4,-0.8,48.4,-0.8).s().p("AkTdyQgJgFACgIQAeABAHgDQAMACAMgJQAJgGgBgGQALgXgbAIQgGACgQAAIgBAAQBAgwB9grQBYgVA2heQhwAhhRADQg0AHh6AaQhoATg9gGQgTgGgHgOQgEgJABgLIAGABQANAHARgHQAMgEABgIQAUgVggAAIgMgCQAHgDAGABQDVAqBvgzQAzgKCVgHQiEgQhAgXIhdgiQgrgRADgGIAUgIIAhAQQAJAIAPgCQAKgBACgFQAXgPgcgHQgFAAgQgJIgEgCQAhgIAUAMQAdARBkAmQBQAZAsggQAUghApjyQAmjdAsk0QAokeAdj5QAajigDhDQgLhagTgHQgPgYgHgnIgBgIQgGh+Aug/QgEgdhCi+IiRmoQjNpsAAiJQAAhLBWgHQAfgVAhCMQAeBvATBdQEORhAUBJIAnCbIAAATQgIBDgkBvQABAQglEEIhNI9QhrM2AmAVQAiATBwAKIBJAHQAYAEAJAFIgCAAQgeAHgJABQgTAAAMANIAHAIQALAEAIgEQAGAAAYgHIADgBQgCAKgIAKQgRAWgSgEQjChAgtgBQhDgBkHCqQg5Atg2AEIgIAAQgPAAgKgFg");
	this.shape_123.setTransform(1246.5,716.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AkyCiQAWgaAqgEIAegBIABAAQAQAAAGgCQAbgHgMAWQAAgHgPgIQAPAIAAAHQABAGgIAGQgMAJgNgCQgHACgegBIgEAAQgcgBgTAKQghATAQAtQgeghAjgqgAItAAQgOgCgTADIgDABIgdAHQgJAEgKgFIgIgHQAAgEAIgIQAJABAegJIACABQAegFATAOQAiAVgQAdQADgjgbgGgAojhGQAigVAwAKIAkAJIAPAEIALACQAhAAgVAWIABgBQAAgJgNgMQANAMAAAJIgBABQgBAHgMAEQgRAHgNgHIgGgBIgogNQgggLgZAFQgtAKAEA2QgYgtA3gkgAmHgsIAAAAgAjvjnQAggMAmARIAYANIAEACQAPAJAFAAQAHALAAAGIgBAFQgDAFgKABQgPACgJgIQgIgCgYgPIgEgDQgYgPgWAAQgmgBgIAwQgKgsAzgTgAhyi5QAAgGgHgLQAcAHgWAPIABgFg");
	this.shape_124.setTransform(1242.8,887.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-48.4,-0.9,48.3,-0.9).s().p("AkVdqQgJgFACgIQAeABAHgCQAMACAMgJQAIgGAAgGQALgXgaAHQgGADgRgBIAAAAQBAgvB+gqQBYgTA3heQhwAghSACQgzAGh7AZQhoARg9gGQgTgHgGgNQgFgJACgLIAFAAQAOAHARgGQAMgEABgIQAUgVggAAIgMgCQAHgEAGACQDVAsBvgxQAzgKCVgEQiEgSg/gYQiTg2AOgFIAVgIQAYAPAIACQAKAIAPgBQAJgCADgFQAXgOgcgHQgFgBgQgJIgEgCQAhgHAUAMQAcARBkAnQBPAbAuggQATggAtjyQApjdAvkzQAtkeAgj4QAcjigChDQgKhagRgHQgPgXgIgoIAAgGQgJh+AthAQgEgdhGi9IiYmmQjYpngDiJQgBhLBWgJQAfgWAjCMQAgBuAUBdQEiRbAVBJQAbBeAPA+IAAATQgGBDgoBvQABARgoEDIhVI8Qh1M1AlAWQAiATBwALIBJAIQAXAEAKAFIgCAAQgfAIgIAAQgUAAAMANIAHAIQALAEAIgEIAegHIADgBQgCAKgIALQgRAVgSgEQjChCgtgCQhCgCkJCnQg7Asg1ADIgGABQgRAAgKgGg");
	this.shape_125.setTransform(1246.9,715.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("Ak0ChQAXgZApgEIAfgBIAAAAQARABAGgCQAagIgLAXQgBgHgOgIQAOAIABAHQAAAGgIAGQgMAJgMgCQgHACgegCIgEAAQgdgBgTAJQghATAQAtQgfghAkgqgAItAKQgOgDgSAEIgDABIgeAHQgJADgKgEIgHgHQgCgGAKgGQAIAAAfgHIACAAQAdgFAUANQAhAXgQAdQADgjgbgHgAoihKQAjgVAwALIAjAKIAPAEIAMACQAgABgVAWIAAgCQAAgJgLgMQALAMAAAJIAAACQgBAHgMAEQgRAGgNgIIgGAAIgogNQgggMgZAFQgtAIADA3QgXguA3gjgAmGgtIAAAAgAjsjnQAhgLAmARIAXANIAEADIAUAJQAGAKAAAGIgBAFQgDAFgJACQgPABgJgIQgIgCgYgPIgEgDQgYgPgWgBQgmgBgIAvQgKgrAzgTgAhwi4QAAgGgGgKQAbAIgWANIABgFg");
	this.shape_126.setTransform(1243.1,886.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-49.1,-0.9,49,-0.9).s().p("AkedjQgKgGADgIQAeABAHgCQAMADAMgJQAIgGAAgGQAMgXgbAHQgGADgRgBIAAAAQBBgvB+gnQBZgTA4hdQhwAehSABQg0AGh7AXQhoAQg9gHQgTgHgGgOQgFgJACgLIAGABQANAHARgGQAMgEABgHQAVgWggAAIgMgCQAHgEAGACQDUAvBwgvQAzgKCVgCQiDgUhAgYIhbglQgrgSADgGIAVgIQAYAPAIADQAJAIAPgCQAJgBADgFQAWgOgbgHIgUgKIgEgCQAhgIATANQAdARBjApQBPAbAtgeQAVghAvjxQAsjcA0kyQAwkeAjj4QAgjhgBhDQgJhagRgHQgPgXgHgnIgBgGQgFg/AYgiQAQgqgCgzQgFgdhJi8IigmjQjjpkgFiIQgDhLBZgKQAcgXAmCLQAiBuAWBdQE1RVAXBIQAcBeAQA/IAAATQgGBDgqBwQABARgsEDIhcI6QiAM0AlAWQAhATBwAMIBJAKQAYAEAJAFIgCAAQgfAIgIAAQgUgBAMAOIAHAIQAKAEAJgEIAegHIADgBQgCAKgJALQgSAVgRgFIhugkQhMgZgzgJQhDgDkLCjQg7Arg2ADIgFAAQgRAAgKgFg");
	this.shape_127.setTransform(1248,715);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("Ak2ChQAXgaAqgDIAeAAIABAAQAQABAGgCQAbgHgMAXQgBgIgOgIQAOAIABAIQAAAGgIAGQgMAIgNgCQgHABgegBIgEAAQgcgCgTAJQgiASAPAtQgdghAkgpgAItAVQgOgEgTAEIgDABQgXAHgGAAQgJADgKgEIgIgIQgBgFAKgIQAIAAAfgHIACAAQAdgCATAMQAiAZgRAcQAEgjgbgHgAohhNQAjgUAwALIAjAKIAPAFIALABQAMANAAAIIAAACQgCAHgLAEQgSAGgNgIIgFAAIgpgOQgggMgZAEQgsAIACA3QgWguA3gigAmFgvIAAAAgAmFgxQAAgIgMgNQAhACgVAVIAAgCgAjpjnQAhgKAmASIAXANIAEACQAPAJAFABQAbAIgWANIABgFQAAgGgGgKQAGAKAAAGIgBAFQgDAGgKABQgPABgJgIQgHgDgZgPIgEgDQgYgPgVgBQgmgCgJAvQgJgsAzgSgAhuixIAAAAg");
	this.shape_128.setTransform(1243.5,884.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-50.3,-0.9,50.3,-0.9).s().p("AkudZQgJgFACgIQAeABAHgBQANACAMgIQAIgGAAgGQAMgXgbAHQgGACgQgBIgBAAQBCgtB+gnQBZgRA6hcQhxAdhSgBQgzAGh8AVQhpAPg8gIQgTgIgGgNQgEgJACgLIAFAAQANAIASgGQALgEACgHQAVgVghgCIgLgBQAHgEAGACQDTAyBxguQAzgJCVAAQiDgWg/gZIhbglQgrgTADgHIAVgHQAZAPAHADQAJAIAPgBQAKgBACgGQAXgNgbgIQgFgBgPgJIgEgCQAggHAUANQAcASBjAqQBPAcAtgeQAVggAzjwQAvjcA3kyQA0kdAmj3QAjjhAAhDQgIhagQgHQgOgXgIgnIgBgEQgGg/AXgjQAQgqgDgzQgGgdhMi7IinmgQjvpfgHiJQgEhKBYgMQAcgXAoCKQAkBtAYBcQFJRQAYBIQAeBdASBAIAAATQgHBDgsBxQAAAQgvEDIhkI5QiKMyAlAWQAhAUBwAOIBIAKQAYAFAJAFIgCAAQgfAHgIAAQgUgBALAOIAIAIQAKAEAJgDQAGAAAXgHIADgBQgBAKgJALQgSAVgRgFQjAhHgtgDQhDgDkNCfQg7Arg2ABIgFAAQgSAAgKgGg");
	this.shape_129.setTransform(1249.7,714.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("Ak4CgQAYgZApgDIAfAAIAAAAQARACAGgDQAagGgMAWQAAgIgOgIQAOAIAAAIQABAGgJAGQgMAJgMgDQgIACgdgCIgEgBQgdgCgTAJQgiASAPAuQgegjAlgogAItAfQgOgDgSADIgEABIgdAGQgJAEgKgFIgIgIQAAgFAJgIQAIABAfgHIACAAQAegEATAPQAgAZgRAcQAFgjgbgIgAofhRQAigUAxAMIAjALIAOAEIAMACQALANAAAIIAAACQgCAHgMAEQgRAFgNgHIgFgBIgpgOQgfgNgZAEQgtAIABA4QgVgvA4gigAmEgxIAAAAgAmEgzQAAgIgLgNQAgACgVAVIAAgCgAiQiwQgIgCgYgQIgEgDQgXgQgWgBQgmgCgKAvQgIgsA0gRQAggLAmATIAXAOIAEACQAPAJAFABQAaAIgWANIABgFQAAgGgFgKQAFAKAAAGIgBAFQgDAGgJAAIgFABQgMAAgHgIgAhsivIAAAAg");
	this.shape_130.setTransform(1243.9,882.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-51.6,-1,51.5,-1).s().p("Ak9dQQgJgFADgIQAdACAIgCQAMADAMgJQAJgGgBgGQAMgWgaAGQgGADgRgCIAAAAQBCgsB/glQBbgQA5hbQhyAbhRgBQg0AEh8AUQhoANg9gJQgSgHgGgOQgFgJADgLIAFABQANAHARgFQANgEABgHQAVgVgggCIgMgCQAHgDAGACQDTA0BxgsQAzgICWACQiDgXg/gbQiRg8APgEIAVgHQAYAQAIACQAJAJAPgCQAJgBADgFQAXgNgbgIQgFgBgPgJIgEgCQAggHAUANQAcASBiAsQBPAdAugdQAVggA2jwQAxjbA8kxQA3kcAqj3QAmjhAAhDQgGhZgQgHQgOgXgHgnIgBgEQgIg+AXgkQAPgpgEg0QgGgdhQi5IiumdQj5pbgKiJQgFhKBXgNQAegYAoCKQAmBsAZBcQFeRKAZBHQAfBdATBBIAAASQgGBDgvByQAAAQgzECIhrI4QiVMwAlAXQAhATBvAQIBJAMQAWAFAKAFIgCAAQgfAHgIgBQgUgBALAOIAIAIQAKAFAJgEIAdgGIAEgBQgCAKgKALQgSAVgRgGQi/hKgtgDQhCgEkQCcQg8Aqg1ABQgWAAgLgHg");
	this.shape_131.setTransform(1251.4,713.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("Ak6CgQAYgZApgCIAfAAIAAAAQARACAGgCQAagGgMAVQAAgHgOgIQAOAIAAAHQABAHgJAGQgMAIgNgDQgHACgegDIgEAAQgcgCgTAIQgiARAOAuQgdgiAlgogAIsAqQgNgDgTADIgDABIgeAGQgJADgKgFIgHgIQgBgFAJgIQAIABAggHIACABQAdgEATAPQAhAZgSAcQAFgigbgJgAofhUQAkgUAwANIAiALIAPAFIAMACQALAMAAAIIAAACQgCAIgMADQgSAGgNgIIgFgBIgogPQgggMgZADQgsAHAAA5QgVgwA4ghgAmDgzIAAAAgAmDg1QAAgIgLgMQAgACgVAUIAAgCgAiOiuIgggSIgDgDQgXgRgWgBQgmgDgKAvQgJgsA1gQQAggLAmAUIAWAOIAEACQAPAJAFABQAbAJgXANIACgGQAAgGgGgKQAGAKAAAGIgCAGQgDAFgJABIgDAAQgNAAgIgIgAhqisIAAAAg");
	this.shape_132.setTransform(1244.3,880.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-52.7,-1,52.7,-1).s().p("AlMdHQgJgGADgIQAeADAHgCQAMADANgIQAIgGAAgHQAMgVgbAGQgGACgQgCIgBAAQBDgrCAgjQBbgPA6hbQhyAahRgCQg0AEh8ASQhpAMg8gKQgTgIgGgOQgDgJACgLIAFABQANAIARgGQANgDABgIQAVgUgggCIgLgCQAHgDAGACQDSA3BygrQAzgHCVADQiDgZg+gbIhagnQgqgUADgHIAVgGIAfASQAJAJAPgBQAKgBADgFQAXgNgbgJQgFgBgPgJIgEgCQAhgGATANQAcATBhAsQBOAfAvgdQAVggA5jvQA1jbA/kvQA7kcAtj2QApjhABhCQgFhagPgGQgNgXgIgnIgBgDQgJg+AXgkQAOgqgFg0QgHgdhTi3Ii2maQkDpWgNiJQgGhKBXgPQAdgYArCJQApBsAaBbQFxRDAaBHQAhBcAUBCIAAATQgGBCgxBzQAAARg2EBIhzI2QigMuAlAXQAgAVBwARIBIAMQAXAFAJAGIgCgBQgfAHgIgBQgUgBALAOIAHAIQALAFAIgDIAegGIADgBQgCAKgJAKQgSAVgRgGQi+hMgtgEQhDgFkRCYQg8Aqg3AAQgVAAgLgHg");
	this.shape_133.setTransform(1253,712.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AlBCcQAZgXApAAIAfADIAAAAQARACAGgBQAbgFgOAVQAAgIgNgIQANAIAAAIQABAGgKAGQgNAHgMgDQgHABgegEIgEgBQgbgEgUAIQgkAPAMAuQgbgkAogmgAIqBbQgNgFgTADIgDAAQgYAFgGgBQgJADgKgFIgHgJQAAgFAJgHIAogEIACABQAegCASAQQAfAbgTAbQAGgigagKgAoXhlQAkgRAvAPIAjAOIAOAFIALADQAKAMAAAIIAAADQgCAHgNADQgRAFgNgJIgFgBIgngRQgfgPgZACQgtAFgDA4QgSgxA6gegAl+g9QAAgIgKgMQAfAEgVATIAAgDgAiCimQgIgDgWgSIgEgDQgWgSgWgCQglgFgNAuQgGgsA1gOQAhgIAlAVIAVAQIAEACIATAMQAFAJAAAHIgBAFQgDAFgLABQgPAAgIgJgAhdijIAAAAgAhcioQAAgHgFgJQAaAJgWAMIABgFg");
	this.shape_134.setTransform(1264.7,862.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-58.2,-1.1,58.1,-1.1).s().p("AlvbyQgVgBgLgHQgJgHADgIQAeAFAHgCQAMAEANgIQAKgFgBgHQAOgUgbAEQgGACgRgDIAAAAQBFgnCCgcQBcgJBBhXQh1AThSgHQgzABh9AKQhqAGg7gNQgTgJgFgOQgDgKADgKIAFABQANAIARgEQANgDACgHQAVgTgfgEIgLgDQAHgDAGADQDPBDB0gkQAzgECXAMQiDghg9geIhYgtQgogXADgGIAWgFQAWARAIADQAIAJAPAAQALAAADgFQAWgMgagKIgTgLIgEgDQAhgEATAOQAbAVBeAyQBOAjAvgaQAXgeBHjrQBCjXBRksQBMkXA7j0QA2jdAFhDQAAhagKgEQgJgVgLglIgBAFQgVg7AOgoQAFgrgPgyQgMgbh3ijIkGlsQl4oUgoiDQgVhIBSggQAYgeBIB9QA9BhAtBUQJGPiAnBAQAzBTAiBIIACASQgBBChBB7QgBARhGD9IiUIvQjQMjAkAZQAfAWBuAYIBHARQAYAHAIAFIgCAAIgoAEQgTgDAKAPIAHAIQAKAGAJgDQAGABAYgFIADgBQgCAKgLAKQgTATgRgGQi5hYgtgGQhCgJkZCHQg8AjgzAAIgGAAg");
	this.shape_135.setTransform(1279.3,703.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AlICZQAagWAqADIAeAEIABAAQAQADAGgBQAbgDgOAVIAAgBQgBgIgMgJQAMAJABAIIAAABQgBAGgJAFQgNAGgMgEQgHABgegGIgEgBQgbgGgVAHQgkAMAJAwQgZgmAqgjgAImCLQgNgFgTABIgDABIgfACQgJACgJgGIgGgIQgBgGALgGIAngCIACABQAeAAARARQAdAdgUAaQAJgigagMgAoOh0QAlgQAvASIAhAQIAOAGIALAEQAfAGgXARIAAgEQAAgHgIgMQAIAMAAAHIAAAEQgDAHgMADQgSADgMgJIgFgCIgmgTQgdgRgaABQgtACgHA4QgPgyA8gagAhfiUQgPgBgIgJQgHgDgWgTIgDgDQgWgUgVgEQglgGgQAtQgDgtA2gKQAhgGAkAXIAVARIADACQAOALAFACQAZALgYALQACgDAAgEQAAgGgDgJQADAJAAAGQAAAEgCADQgDAEgIAAIgCAAg");
	this.shape_136.setTransform(1281.9,836.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-63.8,-1,63.5,-1).s().p("AmxZ0QgVgCgKgJQgJgGAEgIQAeAGAHgBQAMAEANgGQAJgFABgGQAPgVgcADQgGABgQgDIgBAAQBIgjCDgUQBcgEBGhTQh1AMhRgMQg0gCh+ADQhpgBg7gQQgSgLgEgOQgDgJAEgLIAFACQAMAJASgDQAMgDADgHQAXgRgfgGIgLgEQAHgCAGADQDKBPB2gdQA0gBCVAVQiAgog7giIhVgyQgngZAEgGIAVgEQAWATAHADQAIAJAPABQAKABADgFQAYgKgZgMQgFgCgOgLIgDgCQAhgCASAPQAZAWBbA3QBMAoAygXQAXgdBVjmQBOjTBjknQBckSBKjvQBDjaAJhCQAFhagFgDQgFgUgNgiIAAAOQghg2AGgqQgEgsgZgtQgRgYiWiHIlIkvQnem8hCh5QgkhBBKgxQARghBgBrQBQBTA9BJQMENVA0A3QBDBHAwBLIACARQACAgglBBQgbA6gNAqQgCAQhUD5QhMDjhpFCQj/MVAiAbQAeAYBsAfIBHAUQAWAJAIAGIgCgBIgnACQgUgEAKAQIAGAIQAJAGAJgCIAfgCIADgBQgDAKgLAJQgVASgQgHQizhigsgKQhAgMkjB2Qg4AdgvAAIgQgBg");
	this.shape_137.setTransform(1302.2,690.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AIgC1QgNgGgTAAIgDAAQgZACgGgCQgJACgJgGIgGgJQAAgGALgGQAIACAgAAIACAAQAdACAQASQAcAfgWAYQAKghgYgNgAlOCOQAcgUApAFIAeAGIABAAQAQAFAGgBQAcgBgRATIAAgBQAAgHgLgKQALAKAAAHIAAABQAAAGgKAEQgOAGgLgFQgIABgcgIIgEgBQgcgIgUAGQglAKAGAwQgWgnArghgAoDiKQAmgNAtAUIAgASIAOAHIALAEQAfAIgZAQIABgEQAAgIgHgMQAHAMAAAIIgBAEQgCAHgNACQgSACgLgKIgGgCIglgVQgcgTgaAAQgtgBgJA4QgMg0A9gWgAlxhOIAAAAgAhTiQQgPgCgHgKQgHgDgVgVIgDgDQgUgVgVgFQglgJgSAtQgBgtA3gHQAhgFAiAaIAUASIADADQANAMAFABQADAJAAAGQAAAEgCADQgDAEgIAAIgDAAgAhFiUQACgDAAgEQAAgGgDgJQAZAOgYAIIAAAAgAhGiqIAAAAg");
	this.shape_138.setTransform(1294.7,805.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-76.2,-0.9,73.8,-0.9).s().p("AD+XeQithtgsgMQg+gQkqBlQhDAeg1gKQgVgDgJgJQgIgHAEgIQAcAJAIgBQALAFAOgGQAKgEABgHQAQgTgcABQgGABgQgEIgBAAQBKggCEgLQBcABBLhOQh2AEhQgQQg0gGh9gEQhqgHg5gUQgRgLgDgOQgCgKADgKIAGABQALAKASgCQANgBADgHQAYgQgfgIIgLgEQAHgCAGADQDFBbB4gWQAzACCUAeQh+gwg5glIhRg4QgmgbAEgFIAWgDQAVAUAHAEQAHAKAPABQAKABAEgFQAYgIgZgNQgFgCgNgMIgDgDQAiAAAQAQQAYAYBYA9QBJAsAzgUQAZgcBijhQBbjOB0kfQBskNBYjoQBQjYANhBIALhcQgBgTgOgeQgCgDAEAYQgrgugDgqQgNgqghgoQgWgUiuhlIl/jlQowlShYhoQgxg5A/g/QAKgkB0BVQBfBBBKA7QB2BUNqJ9QBQA4A9BLIAEAQQAEAdgpBGQgeA8gPArQgDARhjDzIjVIZQktMFAgAdQAcAaBrAkIBFAZQAWAJAIAIIgCgBQggAAgIgBQgUgFAJAQIAGAJQAJAHAJgCQAGABAZgBIADgBQgEAJgLAJQgOAMgMAAQgGAAgGgDg");
	this.shape_139.setTransform(1315.2,675.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AH2ECQgLgJgTgEIgDgBQgYgEgGgDQgJAAgIgIIgDgKQABgGAMgDQAHAEAgAGIABABQAdAJALAVQAUAkgbATQASgegVgSgAlXASQAfgOAnAPIAcANIABAAQAOAIAHABQAHAKAAAGIAAAEQgCAGgLACQgPACgKgHQgHgBgagPIgEgCQgZgNgVAAQgmACgGAwQgMgrAygWgAjYA9IAAgEQAAgGgHgKQAaAEgTAQIAAAAgAjfApIAAAAgAlXjHQgSgCgJgNIgFgDIgfgdQgXgYgZgHQgrgLgXA0QAAg1BBgIQAogDAnAeIAcAYIALALIAKAGQAcAOgbALQADgEAAgFQgBgGgDgKQADAKABAGQAAAFgDAEQgDAFgKAAIgEAAgAghjLQgOgFgFgLQgGgGgPgYIgDgEQgPgYgTgKQghgSgdAnQAKgrA3AFQAiAEAbAgIAPAWIACAEQAKAOAFADIAAAGQAAAMgFAEQgCABgEAAIgIgBgAgTjLQAFgEAAgMIAAgGQAUASgZAEIAAAAgAgOjhIAAAAg");
	this.shape_140.setTransform(1232.4,810.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-85.6,-0.9,85.7,-0.9).s().p("Ag5YPQiQiSgngVQg7ggk5AeQhIAPgygWQgTgIgIgLQgGgJAGgGQAaAOAHABQAKAIAPgDQAKgCACgGQAUgPgagFQgHAAgOgIIgBgBQBPgNCDATQBaAWBbg6Qh1gXhKgjQgxgRh5ghQhlgfgzggQgOgPAAgPQABgKAFgJIAFADQAJAMASACQANACAEgHQAbgKgcgOIgKgHQAIAAAFAEQCqCHB6AFQAyAOCJA/QhwhLgugyQg5g9gjgzIAWADQAPAYAGAFQAFAMAOAFQAJADAFgEQAagDgVgSQgFgDgKgPIgCgDQAgAHANAUQASAcBHBQQA9A8A3gIQAggVCTjEQCGi0Czj9QCnjtCLjQQCAi9Acg9IAghWQAEgSgIghQAAgDgCAZQgig1AGgqQgEgsgZguQgSgYiWiGIlMktQnfm6hCh3QgkhCBKgxQAQghBhBrQBQBSA+BJQMINRA0A2QBEBHAsBXIAAAQQgCAdg3A8QgrA0gZAmQgHAQiZDWIlKHaQnVKqAYAkQAWAgBfA8IA+AoQATAOAGAJIgBgBQgggHgHgEQgSgJAFASIADAKQAIAIAJABQAGADAYAEIADAAQgGAIgMAGQgNAGgJAAQgKAAgHgGg");
	this.shape_141.setTransform(1279.8,680.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AGyFlQgJgLgRgJIgDgBIgcgNQgJgDgFgKIgBgKQADgFALgBQAHAGAdANIABACQAaAPAGAXQALAngfAMQAZgZgQgWgAjqAFQgPgBgIgIQgHgCgWgVIgEgCQgVgTgUgFQgmgGgQAtQgDgtA2gKQAigGAjAYIAYASIAAABQANALAGACQAEAJAAAGQAAADgCABQgDAFgKAAIgBAAgAjcAAQACgBAAgDQAAgGgEgJQAZALgXAIIAAAAgAjegTIAAAAgAARjXQgNgIgCgMIgMgiIgBgEQgJgbgQgPQgdgYgkAfQAUgoAzASQAfAMASAlIAKAZIACAEQAGARADADQARAYgagEQAHgDACgRQgCARgHADIgEABQgEAAgGgEgAkbkaQgRgGgGgOIgEgEIgXgkQgRgdgXgMQgogVgiAtQAMgzBBAHQAoAGAfAmIAVAeIAJANIAIAJQAYAUgdAEQAFgEAAgNIAAgHIAAAHQAAANgFAEIgPABIgCAAg");
	this.shape_142.setTransform(1172.4,797.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-99.2,-1,98.9,-1).s().p("Ak7X1Ig/hiQgshEgignQgygrk4grQhIgEgsgfQgRgNgFgMQgEgKAHgFQAWAUAHADQAIAJAPABQALABAEgGQAWgKgZgLQgGgCgMgLIgBAAQBQAFB7AwQBSArBmglQhsgwhAgzQgsgchug8Qhbg1gqgsQgLgRAEgPQACgJAIgIIAEAEQAGAOARAGQAMAEAGgEQAdgEgZgVIgHgIQAHABAEAFQCHCrB1AhQAtAZB3BdQhbhjgig7QhOiIAOAGIAVAHIAOAhQACANANAIQAIAFAFgCQAbADgRgXQgEgEgGgQIgCgEQAeAOAIAWQALAgAzBeQAuBIA3AFQAkgMC9ieQCtiPDmjOQDZjAC3irQCoicApg1QAyhMACgBQAIgOAAgiIgHAXQgWg7AOgoQAEgsgPgxQgNgbh4iiIkKlpQmAoQgpiDQgVhHBRghQAXgeBJB8QA/BhAtBTQJTPbAoA/QA0BUAaBeIgEAQQgIAahEAuQg2ApghAgQgKANjGCwQizCfj8DiQplIsAQApQANAkBPBQIAzA1QAPASAFAKIgCgBQgdgOgGgFQgPgNAAASIABALQAGAKAJACIAbAOIADABQgHAHgOACIgNACQgRAAgHgLg");
	this.shape_143.setTransform(1239,678.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AFeG8QgGgNgPgMIgDgCQgTgOgEgFQgIgFgDgKIABgLQAEgEAMACQAFAHAYAUIACABQAWAVAAAYQABApggAEQAdgSgKgagAjbgyQgPgFgFgLQgGgFgRgYIgDgDQgQgXgTgKQgjgPgaAoQAIgsA2ADQAiACAdAfIATAYQAKAOAFADQAWAQgYAFQADgEAAgIIgBgJIABAJQAAAIgDAEQgDADgFAAIgHgBgABZjKQAIgBAGgQQAIATgLAAQgEAAgHgCgABMjQQgKgLABgMQgDgIgDgcIgBgFQgCgcgNgSQgWgegpAWQAbgiAuAdQAdATAJAoIAEAbIABAEQADARACAFQgGAQgIABIgBAAQgFAAgHgGgABZjKIAAAAgAi3lUQAIgEACgSQgCASgIAEIgSgDQgPgKgCgPIgDgFIgPgoQgJghgUgQQgigegrAlQAYgvA9AWQAlAOAWAtIANAiIAGAOIAGALQARAWgWAAIgFAAg");
	this.shape_144.setTransform(1116.7,772);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-108.6,-1,108.6,-1).s().p("An7WkQgbAAgHgRQhAjDgaglQgmg2kmhxQhGgUgjgpQgOgQgCgNQgBgLAIgDQARAYAGAFQAFALAPAFQAKADAEgFQAZgFgWgQQgFgDgKgOQBMAWBtBMQBGA8BsgMQhehIgzhAQgkglhdhUQhNhIgfg1QgGgTAHgNQAEgJAKgGIADAFQACAPAPAKQALAHAHgEQAcADgSgZIgGgLQAHAEACAGQBdDEBqA8QAnAiBeB2QhCh1gUhCIgbheQgMgtAHgCIATAMQADAcADAIQgBAMAKALQAHAHAGgBQAZAKgLgbQgCgFgDgRIgBgEQAaAVACAXQAEAhAcBoQAcBRA0ARQAmgEDchuQDJhkEQiTQD/iJDah8QDHhyA0gqQBCg9ADgBQAMgNAGghIgMAVQgKg+AWgkQANgqgFgyQgHgdhWi2Ii9mWQkQpSgOiIQgIhLBXgQQAdgYAvCIQAqBrAcBaQGDQ9AbBFQAjBbAFBjIgHAPQgOAZhMAeQg/AcgnAYQgNAKjpB9QjTBykpCjQrUGQAFArQAGAmA6BgIAlBAQALAVACAKIgCgBQgYgUgFgHQgNgQgDASIgBALQADAKAIAFQAEAFATAOIADACQgIAEgMAAIgDAAg");
	this.shape_145.setTransform(1198.2,669.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AG0FiQgJgMgSgHIgDgCQgWgJgFgEQgJgCgFgKIgBgLQACgFAMAAQAHAFAcAOIACABQAaAPAGAXQALAngeANQAYgagQgWgAjqAGQgPgBgJgHQgGgDgXgUIgDgCQgVgUgVgDQgmgHgQAtQgCgtA1gKQAigGAjAXIAYATIABAAQAMALAGACQAEAJAAAGQAAADgCABQgDAFgJAAIgBAAgAjdABQACgBAAgDQAAgGgEgJQAZALgXAIIAAAAgAjfgSIAAAAgAAQjXQgNgIgCgMQgDgHgKgbIgBgEQgJgbgQgOQgdgZgkAgQATgoA0ARQAgAMARAlIAKAZIACAEQAGAQAEAEQARAXgbgDQAIgDACgRQgCARgIADIgDABQgEAAgGgEgAkdkZQgSgFgFgPIgEgDIgYgkQgRgdgXgMQgogVghAuQAMgzBAAHQAoAEAgAnIAVAeIAJANIAIAIIAAAIQAAAMgFAFQAFgFAAgMIAAgIQAYAVgdAEIgPAAIgCAAg");
	this.shape_146.setTransform(1112.5,819.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-99,-0.6,98.8,-0.6).s().p("Ak2ZeQhsiugigeQgygrk4gpQhJgDgsgfQgRgNgFgMQgEgKAHgFQAXAUAGADQAJAJAPABQAKABADgGQAXgKgZgLQgGgCgMgLIgBAAQBQAEB7AwQBTAqBmglQhtgwhAgzQgsgbhvg7Qhbg1grgrQgKgSADgOQADgKAIgHIAEADQAFAPASAFQAMAEAFgEQAdgEgYgVIgIgIQAHABAEAFQCICqB2AgQAtAZB4BcQhdhigig7IgxhWQgWgpAHgDIAUAHQAKAbAFAHQACAMANAIQAIAFAFgCQAbADgRgXQgEgEgGgQIgCgEQAeAOAIAWQALAgA0BdQAuBIA3AFQAkgNC8ifQCsiQDljPQDYjBC2isQCnieApg1QAxhMgEgFIAMg5QABgDgIANQADh8Azg7QgBgeg0jDIhwmxQifp5AKiJQAGhKBYgBQAhgTAWCPQAWBwALBfQC4RwAOBLQASBgAABVIgHAQQgPAcg/AmQg0AjgfAeQgKAOjFCwQiyCgj6DkQpiIwAQApQAOAjBPBQIAzA1QAPASAFAKIgCgBQgcgOgHgFQgPgNABASIABALQAFAKAJACQAFAEAWAJIADACQgHAGgOADIgNACQgQAAgIgLg");
	this.shape_147.setTransform(1178.8,689.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AH5D+QgLgJgTgEIgDgBQgYgDgGgDQgJAAgIgJIgDgKQABgFALgDQAIADAfAGIACABQAcAJAMAVQAUAkgbATQASgfgVgRgAlXAYQAfgNAoAOIAbAMIABABIAVAIQAHAKAAAHIAAADQgCAGgKACQgPADgKgIQgHAAgbgPIgEgCQgYgNgWABQgmACgFAwQgNgrAygXgAjYBCIAAgDQAAgHgHgKQAbAFgUAPIAAAAgAjfAuIAAAAgAlajBQgSgBgJgNIgEgDQgKgGgWgXQgYgYgYgGQgsgLgWA1QAAg1BAgJQAogEAoAeIAbAYIAMAKIAKAHQADAJAAAHQAAAFgCADQgDAGgJAAIgFgBgAlJjGQACgDAAgFQAAgHgDgJQAcAOgbAKIAAAAgAgkjIQgOgFgFgMQgGgFgQgYIgCgEQgPgYgUgKQghgQgcAnQAJgsA3AFQAiADAbAgIAPAWIADADIAOASIABAIQAAAKgFADQgCACgEAAIgIgBgAgWjJQAFgDAAgKIgBgIQAUASgYADIAAAAgAgSjeIAAAAgAlKjeIAAAAg");
	this.shape_148.setTransform(1115.7,853);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-86.9,-0.3,87.2,-0.3).s().p("Ag/bhQiSiQgngVQg8gek5AiQhHAPgygVQgUgIgHgKQgHgJAGgHQAbAPAHAAQAKAIAPgDQAKgCACgGQAUgPgbgFIgVgIIgBgBQBPgOCDARQBaAVBag8Qh0gVhLgiQgxgQh5gfQhlgeg0ggQgPgPAAgOQAAgLAHgJIAEADQAJANASABQANACAEgHQAbgKgcgOIgKgHQAIAAAFAEQCsCEB6AFQAxANCLA9QhxhKgvgxQg6g8gkgzIAWACQAQAYAGAFQAFAMAOAFQAJADAFgEQAagDgWgSIgOgSIgDgDQAhAHANATQASAcBJBPQA+A7A2gIQAggVCRjHQCDi1CwkAQCkjuCJjSQB9jBAbg9QAdhVgLgJQgDgZAIgnQAAgBAAgBQAAAAAAAAQAAgBAAABQgBAAAAAAQANg+AhgaQAbgiANgyQAEgegPjIIggm/QgqqMAjiEQAThIBXAQQAkgNgECQQABBzgGBfQgZR/AABLQAABigFBHIgGARQgPAcgvArQgnAogVAjQgHAPiWDaQiHDGi9EYQnNKxAZAkQAWAfBgA7IA+AnQATAOAHAIIgCgBQgfgGgIgDQgRgJAFARIADAKQAIAJAJAAQAGADAYADIADABQgFAIgNAGQgNAGgKAAQgJAAgHgGg");
	this.shape_149.setTransform(1164,702.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AlMCWQAbgVAqAFIAeAFIAAAAQAQAEAHgBQAbgBgQATIAAgBQAAgHgLgKQALAKAAAHIAAABQAAAHgKAEQgNAGgMgFQgIABgcgIIgEgBQgcgGgUAFQglALAHAwQgXgmArgigAIiCsQgNgGgTABIgDAAIgfABQgJACgJgHIgGgIQAAgGAKgGQAJACAfgCIACABQAeABAQASQAcAegVAZQAKgigZgMgAoHh/QAmgOAtAUIAhARIAOAHIALAEQAHAMAAAHIAAAFQgDAHgMABQgSADgMgKIgFgCQgLgEgagQQgdgSgaAAQgtAAgJA4QgMg0A8gXgAlzhFIAAAAgAlzhKQAAgHgHgMQAfAHgYARIAAgFgAhXiNQgPgBgHgKIgcgYIgEgDQgUgUgVgFQglgIgSAsQgBgsA2gJQAigEAiAZIAUARIAEADIASANQAZANgZAJQADgDAAgFQAAgFgDgJQADAJAAAFQAAAFgDADQgDAEgIAAIgCAAgAhKiRIAAAAg");
	this.shape_150.setTransform(1126,869.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-83.4,-0.7,85,-0.7).s().p("AA2cXIhjg6QhGgngwgTQhBgPkoBqQhCAfg1gIQgVgDgKgIQgIgIAEgHQAcAHAIAAQAMAEANgGQAKgEAAgGQAQgUgbACQgHABgQgEIAAgBQBJggCDgOQBdgBBJhPQh2AHhQgQQg0gEh9gCQhqgFg6gTQgRgKgEgPQgCgJAEgLIAFACQAMAJASgCQAMgCADgHQAYgRgfgHIgLgEQAHgCAGADQDHBYB3gYQAzAACVAcQh/gug5gkQiEhUAPgCIAWgDIAcAXQAHAKAPABQAKABADgFQAZgJgZgMIgSgOIgEgDQAhAAASAPQAYAXBZA8QBLArAygVQAagcBejjQBXjQBtkiQBnkOBTjtQBMjYAMhCQAJhYgSgPQgLgdAHgoIAEgNQAYg6AlgUQAhgdAWgvQAJgcAVjJIAym8QBNqJA6h8QAhhDBSAfQAlgGgeCNQgUBxgXBcQjpRogNBKIgcCUIgGASQgdA8gwBdQgDARheD3IjLIdQkdMKAgAdQAeAaBpAiIBFAYQAWAJAIAGIgCAAQgfABgJgCQgTgEAJAQIAGAJQAJAGAJgCIAfgBIADAAQgEAJgLAJQgOAMgMAAQgGAAgFgDg");
	this.shape_151.setTransform(1166.8,707);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AlECbQAagXApACIAfACIAAAAQARADAGgBQANAJAAAHQAAgHgNgJQAbgEgOAUQAAAGgJAGQgNAHgMgEQgHACgegFIgEgBQgcgFgUAIQgjAOAKAvQgaglAoglgAIpBpQgOgFgSACIgDABQgZAEgGgBQgJADgKgGIgGgIQgBgGAKgHQAJACAfgEIACAAQAegBASAQQAeAcgTAaQAHgigagKgAoVhpQAkgRAwAQIAhAOIAPAGIALADQAJAMAAAIIAAADQgCAHgMADQgSAEgMgJIgGgBIgngSQgegPgZACQgtAEgEA4QgRgyA6gcgAl9g8IAAgDQAAgIgJgMQAgAEgXATIAAAAgAmGhTIAAAAgAh/ikQgHgDgXgSIgDgDQgWgSgWgDQglgGgOAuQgFgsA1gNQAhgHAlAVIAVAQIAEADIATALQAEAJAAAHQAAADgCADQgDAFgKAAQgPAAgIgJgAhbigQACgDAAgDQAAgHgEgJQAaALgYALIAAAAgAhdi2IAAAAg");
	this.shape_152.setTransform(1168.9,881.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-62.7,-0.5,63.2,-0.5).s().p("AmgdSQgVgCgLgHQgJgHAEgIQAeAGAHgCQAMAEANgIQAJgFAAgGQAOgVgbAEQgGACgRgDIAAAAQBGgmCCgaQBcgIBDhVQh2AQhRgIQg0AAh9AIQhpAEg8gOQgSgJgFgOQgDgKADgKIAGABQAMAJASgEQAMgDACgHQAXgTgggEIgLgEQAHgCAGACQDNBIB1gjQAzgDCXAPQiDgjg8ggIhXgvQgogXAEgGIAVgFQAXASAHADQAIAKAPAAQAKgBADgEQAYgLgagLIgTgMIgEgCQAhgEATAOQAaAVBeA0QBNAlAxgaQAWgeBLjqQBFjVBWkrQBRkWA/jyQA6jfAGhAQAChagTgMQgMgbABgpIACgLQAOg9AigaQAcgiAOgyQAEgdgMjJIgYm/QgfqMAliEQAVhIBWASQAkgNgHCRQAABygIBfQgtR+gBBMIgDCaIgEASQgUBAguBjQgBAQhKD/IidIsQjeMfAjAaQAfAXBuAaIBHARQAWAHAJAGIgCAAQgfAEgJgBQgTgDAKAQIAGAIQAKAFAJgDQAGACAZgFIADAAQgDAJgKAKQgUATgRgHIhpgxQhJgigygPQhAgJkeCCQg5AhgyAAIgKAAg");
	this.shape_153.setTransform(1188.1,713);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("Ak5CgQAXgZAqgCIAfAAIAAAAQARABAGgCQAagGgMAWQAAgIgOgIQAOAIAAAIQABAGgJAGQgMAIgNgCQgHACgegDIgEAAQgcgCgTAIQgiASAOAtQgdgiAlgogAItAlQgOgEgTAEIgDABIgeAGQgIADgLgFIgHgHQgBgGAKgHQAIAAAfgHIACAAQAegDASAPQAhAZgRAcQAEgjgagIgAofhTQAjgTAwAMIAjALIAPAFIALACQAMAMAAAIIAAACQgCAIgMADQgSAGgNgIIgFgBIgogOQgggOgZAFQgtAHABA5QgVgwA4gigAmDgyIAAgCQAAgIgMgMQAgACgUAUIAAAAgAmPhIIAAAAgAiPivIgggSIgEgDQgXgQgWgCQglgCgKAvQgJgsA0gRQAhgKAlATIAXAOIAEACIAUAKQAGAKAAAHIgCAFQgDAFgJABIgDAAQgNAAgIgIgAhritIAAAAgAhpiyQAAgHgGgKQAcAJgYANIACgFg");
	this.shape_154.setTransform(1212.5,888);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-52.2,-0.8,52.2,-0.8).s().p("AlFdpQgJgEADgJQAeACAHgCQAMADANgIQAIgGAAgGQAMgWgbAGQgGABgQgBIgBAAQBDgsB/gjQBbgQA6hbQhyAbhRgCQg0AEh8ATQhpAMg8gJQgTgIgGgNQgEgJACgLIAGABQANAHARgFQANgEABgHQAVgVgggCIgMgCQAHgDAGACQDSA2BygsQAzgHCVACQiCgYg/gaIhagoQgrgTAEgHIAVgGIAfASQAJAJAPgBQAKgBADgGQAXgNgcgIIgUgLIgDgCQAggGAUANQAcATBhArQBOAeAvgdQAVggA4jvQAzjaA+kxQA5kcArj2QAnjjABhBQgGhagSgJQgOgZgEgoIAAgJQAIh+A0g5QAAgegtjEIhhm1QiKp+APiIQAIhKBZADQAhgSARCPQASBxAIBfQCRR1AMBLQAOBhAIA8IgCASQgMBCgpBrQAAAOg0EEIhvI3QibMvAkAYQAhATBwARIBIAMQAXAEAJAGIgCAAQgeAHgJgBQgUgBAMAOIAHAIQAKAFAJgEIAegFIADgBQgCAJgKALQgSAVgRgGIhtgpQhMgbgygKQhDgFkQCZQg8Aqg2ABIgFAAQgSAAgKgHg");
	this.shape_155.setTransform(1220.7,716.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AksCjQAVgaApgGIAfgCIAAAAQARAAAGgDQAagIgKAXQgBgIgPgHQAPAHABAIQABAGgJAHQgLAJgNgCQgHADgegBIgEABQgcAAgTAKQggAUASAtQggggAigsgAomg7QAhgXAxAIIAkAJIAPADIAMABQAgAAgTAWIAAgCQAAgIgNgMQANAMAAAIIAAACQgBAHgMAFQgRAHgNgHIgGAAIgpgLQgggLgZAHQgsALAFA2QgZgsA1gmgAIsgdQgOgDgSAGIgDABQgXAIgGAAQgJAEgKgDIgIgIQgBgFAIgIQAJgBAegJIACAAQAdgGAUAOQAjAWgPAbQABghgbgGgAj4joQAggMAnAPIAYAMIAEACQAPAIAFAAQAIAKAAAHIgBAEQgCAGgKABQgPADgKgIIghgQIgEgCQgYgOgWAAQgmABgGAwQgMgsAygVgAh6i6IABgEQAAgHgIgKQAdAGgWAPIAAAAgAiBjPIAAAAg");
	this.shape_156.setTransform(1256,888.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-48.4,-0.9,48.4,-0.9).s().p("AkOduQgKgFACgJQAeABAHgDQANACALgJQAIgHAAgGQAKgXgaAIQgGADgRAAIAAAAQA/gyB8guQBXgXA0hfQhvAkhSAFQgzAIh6AdQhnAVg9gEQgUgGgGgNQgFgJABgLIAGAAQANAHARgHQAMgFABgHQATgWggAAIgMgBQAHgDAGABQDWAlBug2QAygLCVgLQiEgMhBgWIhdgfQgsgQADgHIAUgJIAhAQQAKAIAPgDQAKgBACgGQAWgPgdgGQgFAAgPgIIgEgCQAggJAUALQAeAQBkAkQBRAYAsghQASgiAkjzQAhjeAkk1QAikfAXj6QAUjigEhDQgOhZgSgHQgPgXgJgnIgBgGQgGg/AXgjQAPgpgDg0QgFgdhNi6IinmfQjvpfgIiIQgEhLBYgMQAegXAoCLQAlBsAXBcQFJRPAYBHQAdBdASA+IABASQgEBDgjBxQABARgfEFIg/I+QhYM5AnAUQAiASBxAHIBJAFQAXAEAKAEIgCAAQgeAJgJABQgTABAMAMIAIAIQAKADAJgEQAGAAAXgIIADgBQgBAKgJALQgQAWgSgEIhwgfQhOgVgzgHQhCABkDCwQg4Aug2AGIgJAAQgPAAgJgEg");
	this.shape_157.setTransform(1260.1,716.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AkdCmQATgcApgJIAegFIABAAQAQgBAGgDQAZgLgIAYQgCgIgPgFQAPAFACAIQABAGgHAHQgLAKgNAAQgHADgeACIgEABQgcACgRAMQgfAWAWArQgjgdAegugAoogjQAfgZAyAEIAkAFIAPACIAMABQAOALAAAJIgLANQgQAIgOgFIgGAAQgMgBgegHQghgHgYAIQgrAOAKA2QgdgsAygogAmKgcIAAAAgAmYgwQAggEgSAYQAAgJgOgLgAIphgQgOgCgSAHIgDACIgdAKQgIAFgLgDIgIgGQgCgGAIgJQAJgBAdgLIACAAQAcgIAWALQAkATgMAfQgCgjgbgEgAkJjoQAegPAoAMIAZAKIAEACQARAGAFAAQAIALAAAHIAAADQgCAFgKADQgPADgKgGIgigNIgEgDQgagMgWACQglAEgCAwQgQgqAxgZgAiIjEIAAgDQAAgHgIgLQAbAEgTARIAAAAgAiQjZIAAAAg");
	this.shape_158.setTransform(1298.5,883.4);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-57,-1,55.6,-1).s().p("AiydUQgKgFABgIQAegCAHgDQANAAALgKQAHgHgBgGQAIgYgZALQgGADgQABIgBAAQA6g2B2g4QBYgfArhjQhtAthPAMQgyAMh4AnQhlAeg9ABQgUgFgIgNQgFgIAAgLIAGAAQAOAFAQgIQAMgGAAgHQARgYggAEIgMgBQAHgEAGABQDYASBpg9QAxgQCUgWQiHgChAgQIhggYQgtgMACgHIAUgKIAiANQAKAGAPgDQAKgDACgFQAUgRgcgEQgFAAgRgGIgEgCQAfgMAWAKQAeAOBmAbQBUARApglQAQgjAPj1QAPjgAKk3QAKkhACj7QACjjgKhDQgVhXgRgEQgRgVgNgmIgCgDQgRg9ASgmQAIgrgLgzQgKgchrirIjnl+QlRougeiGQgRhJBVgaQAagbA/CBQA1BmAnBXQH5QIAjBDQAtBXAcA9IADASQAEBDgcB4QADAQgJEHQgIDvgIFSQgTM+AoARQAjAOBxgCIBJAAQAYABAKAEIgCAAQgdALgJABQgTADANAMIAIAGQALADAIgFIAdgKIADgCQgBAKgHAMQgOAYgTgDIhygWQhPgPg0gCQhCAGjzDFQg1Azg1AKQgJACgIAAQgJAAgHgDg");
	this.shape_159.setTransform(1295,713.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AkhCmQAUgcApgIIAegFIABAAQAQgBAGgDQAPAGACAHQgCgHgPgGQAZgKgIAXIgHAOQgLAKgMgBQgHADgeACIgEAAQgdADgRALQgfAWAVArQgigeAegtgAoogoQAggZAxAFIAkAGIAQADIALAAQAPALAAAJIAAAAIgMAOQgRAIgOgGIgFAAIgqgJQghgIgYAIQgrAOAJA2QgcgsAygogAmJgfQAAgJgPgLQAggDgRAXIAAAAgAIqhRQgOgCgSAHIgDABQgXAKgGAAQgIAFgLgDIgIgHQgCgGAIgIQAIgBAegLIACAAQAegIAUAMQAkAUgNAeQgBgjgbgEgAkFjoQAegPAoANIAZALIAEACQAPAGAGABQAIAKAAAGIAAAEQgDAGgJACQgPADgKgHQgHgBgbgMIgEgCQgZgNgWACQglADgEAwQgPgqAygZgAiFjCIAAgEQAAgGgIgKQAcAEgUAQIAAAAgAiNjWIAAAAg");
	this.shape_160.setTransform(1289.2,885);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-52.2,-1,51.2,-1).s().p("AjjdcQgLgEACgIQAegCAHgDQAMABALgKQAJgIgCgGQAIgXgZAKQgGADgQABIgBAAQA8g1B5g2QBVgdAuhiQhsArhSAKQgyALh4AlQhmAcg9AAQgUgFgHgNQgFgIAAgMIAFAAQAOAGARgIQALgFABgIQARgXggADIgLgBQAHgEAGABQDXAXBqg8QAygPCUgUQiFgEhCgRIhfgaQgsgNACgHIATgKQAbAMAHACQAKAHAPgDQAJgDACgFQAVgQgcgFQgGAAgPgHIgEgCQAfgKAVAJQAfAPBlAdQBTASAqgkQARgiATj1QATjhARk1QAPkiAGj6QAGjkgJhCQgThYgRgEQgRgWgMgmIgBgEQgPg9ATgmQAKgrgKgzQgJgchkivIjZmGQk9o7gZiGQgNhKBVgXQAbgbA6CEQAyBoAjBYQHTQbAhBEQApBYAaA+IADASQACBDgeB2QADARgOEGIgbJBQgiM9AoASQAiAPBxAAIBKABQAXABAKAEIgCABQgeAKgIABQgTACANAMIAIAHQALADAIgEQAGgBAXgJIADgCQgBAKgHAMQgQAYgRgEQjIgugtADQhCAFj3DAQg2Azg1AIIgQABQgKAAgGgDg");
	this.shape_161.setTransform(1290.3,714.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AkkClQAUgcApgHIAfgEIAAAAQARgBAGgDQAZgJgJAXQgCgIgOgGQAOAGACAIQABAGgIAHQgLAKgNgBQgGADgeABIgEAAQgdACgSALQgfAVAUAsQghgeAfgtgAonguQAggYAxAGIAkAGIAQADIALABQAggCgSAXIAAgBQAAgJgOgLQAOALAAAJIAAABQgBAHgLAFQgRAIgOgGIgFAAIgqgJQghgJgYAHQgrANAIA2QgcgrA0gogAIrhDQgPgBgRAGIgDABQgXAJgGAAQgIAFgLgDIgIgHQgBgFAIgJQAIgBAegKIACAAQAdgIAUANQAkAUgOAeQAAgjgbgFgAkBjoQAegOAoANIAZALIAEACQAQAHAFAAQAcAFgVAQIAAgDQAAgHgHgLQAHALAAAHIAAADQgDAGgJACQgPADgKgIQgIgBgZgNIgEgCQgagNgVABQgmADgEAwQgOgrAygXg");
	this.shape_162.setTransform(1279.8,886.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-48.3,-0.9,48.4,-0.9).s().p("AkEdjQgKgEACgIQAegCAGgDQANACALgKQAIgIgBgGQAJgXgZAKQgGADgRAAIAAAAQA8gzB6g0QBWgcAwhhQhuAphRAIQgzALh4AjQhmAag9gCQgUgFgIgNQgFgJABgLIAFAAQAOAHARgIQALgFABgIQASgXggACIgLAAQAGgFAGACQDYAaBrg6QAygOCUgRQiFgGhBgTIhfgbQgtgOADgHIAUgJQAZANAIABQAKAHAPgDQAJgCADgFQAVgQgcgFQgFAAgQgIIgEgBQAfgLAVAKQAeAPBnAgQBRATAqgjQARgiAZj1QAXjfAWk2QAUkhALj6QAKjkgHhCQgRhYgSgFQgQgWgMgnIgBgEQgMg+AUglQALgrgHgzQgIgdheiyIjLmOQknpGgUiIQgLhKBWgTQAcgaA1CGQAuBpAgBaQGsQrAeBFQAnBaAXA+IACASQAABDgfB1QADARgTEGIgmJAQgxM8AnATQAkAQBwABIBJADQAYACAKAEIgCAAQgeALgIAAQgUABANANIAIAHQALAEAIgFQAGAAAXgKIADgBQgBAKgIAMQgPAXgSgEQjGgygtADQhDAEj6C7Qg3Axg1AIIgOABQgMAAgHgEg");
	this.shape_163.setTransform(1283.8,714.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AknCkQAUgbAqgHIAegDIABAAIAWgDQAPAHABAHQgBgHgPgHQAagJgKAXQABAGgIAHQgLAKgNgCQgHADgeABIgEAAQgcABgSALQggAUATAtQgggfAggtgAongzQAhgXAxAGIAkAHIAPADIAMABQAggBgTAWIAAgBQAAgIgNgMQANAMAAAIIAAABIgMANQgRAHgOgGIgFAAIgqgKQgggKgZAHQgrAMAHA3QgbgsA0gngAIsgzQgOgCgTAFIgDABQgXAJgGAAQgIAFgLgEIgIgGQgBgGAIgJQAJAAAegKIACAAQAdgHAUANQAjAVgOAeQABgjgbgFgAmJgkIAAAAgAj+joQAggOAnAPIAYALIAEACIAVAIQAIAKAAAHIgBAEQgDAFgJACQgPADgKgIQgHgBgagOIgEgCQgYgOgXACQglABgFAwQgNgrAxgWgAh/i9IABgEQAAgHgIgKQAdAGgWAPIAAAAgAiGjSIAAAAg");
	this.shape_164.setTransform(1270.3,887.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-48.3,-0.9,48.4,-0.9).s().p("AkIdpQgKgFACgIQAegBAHgDQAMACAMgKQAIgHgBgGQAKgXgbAJIgWADIAAAAQA9gzB7gxQBWgaAyhhQhvAnhRAHQgzAKh5AgQhnAZg9gDQgTgGgIgNQgEgIAAgLIAGAAQAOAGAQgHQAMgFABgIQASgWggABIgLgBQAHgDAGABQDWAeBtg4QAygNCUgOQiFgJhBgUIhegdQgsgPADgHIAUgJQAZAOAIABQAKAIAPgDQAJgCADgFQAVgPgcgGIgVgIIgEgCQAfgKAVALQAeAPBmAhQBRAVArgiQARgiAdj0QAbjfAck1QAakhAQj6QAOjjgGhDQgQhYgSgGQgQgWgKgnIgBgFQgKg+AVglQANgqgGgzQgHgdhXi2Ii8mVQkSpRgPiIQgIhKBXgRQAdgZAwCIQAqBrAcBbQGGQ7AbBGQAjBbAVA+IACASQgCBDggB0QACAQgYEGIgwI/QhBM8AnATQAkAQBwAEIBJAEQAYADAJAEIgCAAQgeAKgIAAQgUACANANIAIAGQALAEAIgFQAGAAAXgJIADgBQgBAKgIAMQgQAWgSgEQjFg1gtABQhDADj9C3Qg4Awg1AHIgMABQgNAAgIgEg");
	this.shape_165.setTransform(1274.4,715.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AkrCkQAVgbAqgGIAegDIABAAIAWgDQAPAHABAIQgBgIgPgHQAagIgKAXQABAGgIAHQgMAJgMgCQgHADgeAAIgEAAQgdAAgSALQggAUASAtQggggAhgrgAomg5QAhgXAxAIIAkAIIAPADIALABQAhAAgTAWIAAgCQAAgIgOgMQAOAMAAAIIAAACQgCAHgLAFQgRAHgNgHIgGAAIgpgKQghgLgZAHQgrALAGA3QgagtA1gmgAIsglQgOgCgSAFIgDACIgdAIQgJAEgKgDIgJgIQgBgFAJgIQAIAAAfgKIACAAQAcgGAVANQAjAWgPAbQABghgbgGgAj6joQAggNAnAPIAYAMIAEACQAQAIAFAAQAHAKAAAHIgBAEQgCAGgKABQgPADgKgIQgHgCgagOIgEgCQgYgOgWABQgmABgGAwQgMgsAygVgAh8i7IABgEQAAgHgHgKQAcAGgWAPIAAAAgAiCjQIAAAAg");
	this.shape_166.setTransform(1260.8,888.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-48.3,-0.9,48.4,-0.9).s().p("AkMdtQgJgFABgIQAegBAHgCQANABAMgJQAIgGgCgHQAKgXgZAJIgXADIAAAAQA+gyB8gwQBXgYAzhfQhvAlhRAFQg0AJh5AeQhnAWg9gDQgUgGgHgNQgFgJABgLIAGAAQAOAHARgIQALgEABgIQATgVggAAIgMgBQAHgEAGABQDXAjBtg2QAygMCVgMQiFgLhBgVIhdgfQgsgQADgGIAUgJQAZANAIACQAKAIAPgCQAJgCADgFQAVgPgcgHQgFAAgQgIIgEgCQAhgJAUALQAdAQBmAjQBQAXAsgiQASghAhj0QAfjfAik0QAfkgAVj6QASjjgFhDQgOhZgSgGQgQgWgJgnIgBgGQgIg/AXgjQAOgqgEg0QgGgdhQi5IiumcQj7pagKiJQgFhLBXgNQAegYAqCKQAnBsAZBcQFdRJAZBHQAgBdATA9IABATQgEBDgiByQACAQgdEFIg6I/QhQM6AnAUQAiAQBxAHIBJAFQAXADAKAEIgCAAQgeAKgJAAQgTABAMANIAIAHQALAEAIgEIAdgJIADgBQgBAKgIALQgRAXgRgFIhwgeQhOgUgzgGQhDABkBCzQg4Aug2AGIgMABQgNAAgIgEg");
	this.shape_167.setTransform(1264.9,716);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AkuCjQAWgaApgGIAfgCIAAAAQARABAGgDQAOAHABAIQgBgIgOgHQAagIgLAXQABAGgIAHQgMAJgMgCQgHADgegBIgEAAQgdAAgSAKQghAUASAsQgfggAhgrgAolg+QAhgVAxAIIAkAIIAPAEIAMABQAgAAgUAWIAAgCQAAgIgMgMQAMAMAAAIIAAACIgMAMQgRAHgOgHIgFgBIgqgLQgggLgZAGQgrALAEA2QgYgsA1gmgAItgVQgOgCgTAEIgDABQgXAIgGAAQgIAEgLgDIgIgIQgBgFAJgIQAIgBAfgIIACAAQAdgGAUANQAiAXgPAbQACghgbgGgAj1jnQAfgNAnAQIAYAMIAEACIAVAJQAHAKgBAHIAAAEQgDAFgJACQgPACgKgIIghgQIgEgCQgYgPgWAAQgmABgGAwQgMgsAzgUgAh4i4IAAgEQABgHgHgKQAcAGgWAPIAAAAgAh+jNIAAAAg");
	this.shape_168.setTransform(1251.2,888.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-48.4,-0.8,48.4,-0.8).s().p("AkQdwQgJgFABgJQAeABAHgDQANACAMgJQAIgHgBgGQALgXgbAJQgGACgQAAIgBAAQA/gxB9gtQBYgWA0hfQhvAjhSAEQgzAIh6AcQhoAUg8gFQgUgGgHgNQgEgJABgLIAGAAQANAHARgHQAMgEABgIQAUgWghABIgLgCQAHgDAGABQDVAnBug0QAzgMCVgIQiFgOhAgWIhdghQgrgQACgHIAVgIIAgAQQAKAIAPgDQAKgBACgGQAWgPgcgGIgVgIIgEgCQAhgJAUALQAdARBlAlQBQAYAsghQATghAmjzQAjjeAnk0QAkkfAZj5QAXjjgEhDQgMhZgSgHQgQgXgIgnIgBgHQgFg/AYgiQAQgqgCgzQgFgdhJi8IigmjQjkpjgFiJQgDhLBYgKQAegXAmCMQAgBtAWBdQE3RVAWBIQAdBeAQA9IABATQgFBDgkBwQACARgiEFIhFI9QhfM4AmAVQAjARBwAJIBJAGQAXADAKAFIgCAAQgeAJgJAAQgTAAAMAOIAHAHQALAEAIgEQAGAAAYgIIADgBQgCAKgIALQgRAWgRgEQjDg9gtgBQhDABkFCtQg5Aug1AFIgLAAQgNAAgJgEg");
	this.shape_169.setTransform(1255.4,716.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AkxCiQAWgaAqgFIAegBIABAAQAQABAGgDQAbgHgLAWQgBgHgPgIQAPAIABAHQABAGgJAHQgMAJgMgCQgHACgegBIgEAAQgdgBgSAKQghATAQAtQgfggAjgrgAItgGQgOgDgTAEIgDABQgXAGgGAAQgJAEgKgEIgIgGQgBgFAJgIQAIAAAfgJIACAAQAdgFAUAOQAiAVgQAdQADghgbgGgAokhDQAigWAxAKIAjAJIAPAEIAMABQAgAAgUAWIAAgCQAAgIgMgMQAMAMAAAIIAAACQgBAHgMAFQgRAGgOgHIgFAAQgMgCgdgLQgggLgZAGQgsAKAEA2QgYgtA2gkgAjxjoQAfgLAnAQIAYANIAEACQAPAIAFABQAHAKAAAGIgBAFQgCAFgLACQgPACgJgIQgHgCgZgPIgEgCQgYgPgWgBQgmAAgIAwQgKgsAzgUgAh1i2IABgFQAAgGgHgKQAcAHgWAOIAAAAgAh7jLIAAAAg");
	this.shape_170.setTransform(1241.6,889.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.lf(["#CF8D5D","#AD6830","#6E3F12"],[0,0.49,1],-48.4,-0.8,48.4,-0.8).s().p("AkTdxQgKgFACgJQAeACAHgDQANACAMgJQAIgGgBgGQALgXgaAIQgGACgRAAIAAAAQBAgwB9grQBYgUA3heQhwAhhSACQg0AHh6AaQhoASg9gGQgTgGgHgOQgEgJABgLIAGABQANAHARgHQAMgEABgIQAVgVghAAIgLgCQAHgDAGABQDUAqBwgxQAygLCVgGQiEgQhAgXIhcgjQgrgRADgGIAUgIQAZAOAIACQAJAIAPgCQAKgBADgGQAVgOgbgHQgFAAgQgJIgEgCQAhgIAUAMQAdARBjAnQBQAZAtgfQATghAqjyQAojeAskzQAqkfAej4QAajjgChDQgLhZgSgHQgQgYgHgnIAAgIQgHh+Aug/QgDgdhDi+IiQmoQjNpsgBiJQAAhLBXgHQAfgVAhCMQAeBvASBdQEPRhATBJIAnCbIAAATQgHBDglBvQABAQgmEEIhPI9QhuM2AmAVQAiATBvAJIBJAIQAYAEAJAFIgCAAQgeAIgJAAQgTAAAMAOIAHAHQALAEAIgEQAGAAAYgHIADgBQgCAKgIALQgRAWgSgFQjChAgtgCQhDAAkHCoQg6Atg2AEIgHAAQgQAAgJgFg");
	this.shape_171.setTransform(1245.8,716.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_123},{t:this.shape_122}]}).to({state:[{t:this.shape_125},{t:this.shape_124}]},1).to({state:[{t:this.shape_127},{t:this.shape_126}]},1).to({state:[{t:this.shape_129},{t:this.shape_128}]},1).to({state:[{t:this.shape_131},{t:this.shape_130}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_135},{t:this.shape_134}]},1).to({state:[{t:this.shape_137},{t:this.shape_136}]},1).to({state:[{t:this.shape_139},{t:this.shape_138}]},1).to({state:[{t:this.shape_141},{t:this.shape_140}]},1).to({state:[{t:this.shape_143},{t:this.shape_142}]},1).to({state:[{t:this.shape_145},{t:this.shape_144}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_149},{t:this.shape_148}]},1).to({state:[{t:this.shape_151},{t:this.shape_150}]},1).to({state:[{t:this.shape_153},{t:this.shape_152}]},1).to({state:[{t:this.shape_155},{t:this.shape_154}]},1).to({state:[{t:this.shape_157},{t:this.shape_156}]},1).to({state:[{t:this.shape_159},{t:this.shape_158}]},1).to({state:[{t:this.shape_161},{t:this.shape_160}]},1).to({state:[{t:this.shape_163},{t:this.shape_162}]},1).to({state:[{t:this.shape_165},{t:this.shape_164}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_169},{t:this.shape_168}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_123},{t:this.shape_122}]},1).to({state:[{t:this.shape_125},{t:this.shape_124}]},1).to({state:[{t:this.shape_127},{t:this.shape_126}]},1).to({state:[{t:this.shape_129},{t:this.shape_128}]},1).to({state:[{t:this.shape_131},{t:this.shape_130}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_135},{t:this.shape_134}]},1).to({state:[{t:this.shape_137},{t:this.shape_136}]},1).to({state:[{t:this.shape_139},{t:this.shape_138}]},1).to({state:[{t:this.shape_141},{t:this.shape_140}]},1).to({state:[{t:this.shape_143},{t:this.shape_142}]},1).to({state:[{t:this.shape_145},{t:this.shape_144}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_149},{t:this.shape_148}]},1).to({state:[{t:this.shape_151},{t:this.shape_150}]},1).to({state:[{t:this.shape_153},{t:this.shape_152}]},1).to({state:[{t:this.shape_155},{t:this.shape_154}]},1).to({state:[{t:this.shape_157},{t:this.shape_156}]},1).to({state:[{t:this.shape_159},{t:this.shape_158}]},1).to({state:[{t:this.shape_161},{t:this.shape_160}]},1).to({state:[{t:this.shape_163},{t:this.shape_162}]},1).to({state:[{t:this.shape_165},{t:this.shape_164}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_169},{t:this.shape_168}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_123},{t:this.shape_122}]},1).to({state:[{t:this.shape_125},{t:this.shape_124}]},1).to({state:[{t:this.shape_127},{t:this.shape_126}]},1).to({state:[{t:this.shape_129},{t:this.shape_128}]},1).to({state:[{t:this.shape_131},{t:this.shape_130}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_135},{t:this.shape_134}]},1).to({state:[{t:this.shape_137},{t:this.shape_136}]},1).to({state:[{t:this.shape_139},{t:this.shape_138}]},1).to({state:[{t:this.shape_141},{t:this.shape_140}]},1).to({state:[{t:this.shape_143},{t:this.shape_142}]},1).to({state:[{t:this.shape_145},{t:this.shape_144}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_149},{t:this.shape_148}]},1).to({state:[{t:this.shape_151},{t:this.shape_150}]},1).to({state:[{t:this.shape_153},{t:this.shape_152}]},1).to({state:[{t:this.shape_155},{t:this.shape_154}]},1).to({state:[{t:this.shape_157},{t:this.shape_156}]},1).to({state:[{t:this.shape_159},{t:this.shape_158}]},1).to({state:[{t:this.shape_161},{t:this.shape_160}]},1).to({state:[{t:this.shape_163},{t:this.shape_162}]},1).to({state:[{t:this.shape_165},{t:this.shape_164}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_169},{t:this.shape_168}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1041,138.6,417.5,800.5);


// stage content:



(lib.FWW_TilesAll_v01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Great Blue Heron
	this.instance = new lib.Heron_mc("synched",0);
	this.instance.setTransform(2170.4,625.2,1.06,1.06,0,0,0,1248.2,538.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:1262.5,regY:538.1,x:2185,y:627.2,startPosition:1},0).wait(1).to({x:2184.6,y:629.4,startPosition:2},0).wait(1).to({x:2184.2,y:631.5,startPosition:3},0).wait(1).to({x:2183.7,y:633.7,startPosition:4},0).wait(1).to({x:2183.3,y:635.8,startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({x:2112.3,y:639.3,startPosition:14},0).wait(1).to({x:2041.3,y:642.8,startPosition:15},0).wait(1).to({x:1970.3,y:646.2,startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({x:1924.6,y:649.2,startPosition:23},0).wait(1).to({x:1878.8,y:652.2,startPosition:24},0).wait(1).to({x:1833,y:655.2,startPosition:25},0).wait(1).to({x:1787.3,y:658.2,startPosition:26},0).wait(1).to({x:1797.1,y:655.2,startPosition:27},0).wait(1).to({x:1807,y:652.2,startPosition:28},0).wait(1).to({x:1816.8,y:649.2,startPosition:29},0).wait(1).to({x:1768.3,y:647.4,startPosition:30},0).wait(1).to({x:1719.8,y:645.6,startPosition:31},0).wait(1).to({x:1671.2,y:643.7,startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({startPosition:42},0).wait(1).to({startPosition:43},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:45},0).wait(1).to({startPosition:46},0).wait(1).to({startPosition:47},0).wait(1).to({startPosition:48},0).wait(1).to({startPosition:49},0).wait(1).to({startPosition:50},0).wait(1).to({startPosition:51},0).wait(1).to({startPosition:52},0).wait(1).to({startPosition:53},0).wait(1).to({startPosition:54},0).wait(1).to({startPosition:55},0).wait(1).to({startPosition:56},0).wait(1).to({startPosition:57},0).wait(1).to({startPosition:58},0).wait(1).to({startPosition:59},0).wait(1).to({startPosition:60},0).wait(1).to({startPosition:61},0).wait(1).to({startPosition:62},0).wait(1).to({startPosition:63},0).wait(1).to({startPosition:64},0).wait(1).to({startPosition:65},0).wait(1).to({startPosition:66},0).wait(1).to({startPosition:67},0).wait(1).to({startPosition:68},0).wait(1).to({startPosition:69},0).wait(1).to({startPosition:70},0).wait(1).to({startPosition:71},0).wait(1).to({startPosition:72},0).wait(1).to({startPosition:73},0).wait(1).to({startPosition:74},0).wait(1).to({x:1671,y:645.4,startPosition:75},0).wait(1).to({x:1670.7,y:647.1,startPosition:76},0).wait(1).to({x:1670.5,y:648.8,startPosition:77},0).wait(1).to({x:1670.2,y:650.5,startPosition:78},0).wait(1).to({x:1670,y:652.2,startPosition:79},0).wait(1).to({startPosition:80},0).wait(1).to({x:1669.9,startPosition:81},0).wait(1).to({startPosition:82},0).wait(1).to({startPosition:83},0).wait(1).to({x:1669.8,startPosition:84},0).wait(1).to({startPosition:85},0).wait(1).to({startPosition:86},0).wait(1).to({x:1669.7,startPosition:87},0).wait(1).to({x:1586.4,y:636.1,startPosition:88},0).wait(1).to({x:1517.3,y:643.7,startPosition:89},0).wait(1).to({x:1448.2,y:651.2,startPosition:90},0).wait(1).to({startPosition:91},0).wait(1).to({startPosition:92},0).wait(1).to({startPosition:93},0).wait(1).to({startPosition:94},0).wait(1).to({startPosition:95},0).wait(1).to({startPosition:96},0).wait(1).to({x:1401.9,y:651.5,startPosition:97},0).wait(1).to({x:1355.7,y:651.7,startPosition:98},0).wait(1).to({x:1309.4,y:652,startPosition:99},0).wait(1).to({x:1263.2,y:662.2,startPosition:100},0).wait(1).to({x:1272.9,y:659.5,startPosition:101},0).wait(1).to({x:1282.7,y:656.7,startPosition:102},0).wait(1).to({x:1258.2,y:647.1,startPosition:103},0).wait(1).to({x:1210.7,y:640.5,startPosition:104},0).wait(1).to({x:1162.9,y:643,startPosition:105},0).wait(1).to({x:1115.1,y:645.5,startPosition:106},0).wait(1).to({startPosition:107},0).wait(1).to({startPosition:108},0).wait(1).to({startPosition:109},0).wait(1).to({startPosition:110},0).wait(1).to({startPosition:111},0).wait(1).to({startPosition:112},0).wait(1).to({startPosition:113},0).wait(1).to({startPosition:114},0).wait(1).to({startPosition:115},0).wait(1).to({y:647.2,startPosition:116},0).wait(1).to({y:648.9,startPosition:117},0).wait(1).to({y:650.6,startPosition:118},0).wait(1).to({y:652.3,startPosition:119},0).wait(1).to({y:654,startPosition:120},0).wait(1).to({startPosition:121},0).wait(1).to({startPosition:122},0).wait(1).to({startPosition:123},0).wait(1).to({startPosition:124},0).wait(1).to({startPosition:125},0).wait(1).to({startPosition:126},0).wait(1).to({startPosition:127},0).wait(1).to({startPosition:128},0).wait(1).to({x:1023.9,y:640.3,startPosition:129},0).wait(1).to({x:955.9,y:649.9,startPosition:130},0).wait(1).to({x:888,y:659.5,startPosition:131},0).wait(1).to({startPosition:132},0).wait(1).to({startPosition:133},0).wait(1).to({startPosition:134},0).wait(1).to({startPosition:135},0).wait(1).to({startPosition:136},0).wait(1).to({startPosition:137},0).wait(1).to({x:845.1,y:659.2,startPosition:138},0).wait(1).to({x:802.2,y:659,startPosition:139},0).wait(1).to({x:759.3,y:658.7,startPosition:140},0).wait(1).to({x:716.5,y:658.5,startPosition:141},0).wait(1).to({startPosition:142},0).wait(1).to({startPosition:143},0).wait(1).to({startPosition:144},0).wait(1).to({x:667.2,y:657.1,startPosition:145},0).wait(1).to({x:617.9,y:655.8,startPosition:146},0).wait(1).to({x:568.6,y:654.4,startPosition:147},0).wait(1).to({startPosition:148},0).wait(1).to({startPosition:149},0).wait(1).to({startPosition:150},0).wait(1).to({startPosition:151},0).wait(1).to({startPosition:152},0).wait(1).to({startPosition:153},0).wait(1).to({startPosition:154},0).wait(1).to({startPosition:155},0).wait(1).to({startPosition:156},0).wait(1).to({startPosition:157},0).wait(1).to({startPosition:158},0).wait(1).to({startPosition:159},0).wait(1).to({startPosition:160},0).wait(1).to({startPosition:161},0).wait(1).to({startPosition:162},0).wait(1).to({startPosition:163},0).wait(1).to({startPosition:164},0).wait(1).to({startPosition:165},0).wait(1).to({startPosition:166},0).wait(1).to({startPosition:167},0).wait(1).to({startPosition:168},0).wait(1).to({startPosition:169},0).wait(1).to({startPosition:170},0).wait(1).to({startPosition:171},0).wait(1).to({startPosition:172},0).wait(1).to({startPosition:173},0).wait(1).to({startPosition:174},0).wait(1).to({startPosition:175},0).wait(1).to({startPosition:176},0).wait(1).to({startPosition:177},0).wait(1).to({startPosition:178},0).wait(1).to({startPosition:179},0).wait(1).to({startPosition:180},0).wait(1).to({startPosition:181},0).wait(1).to({startPosition:182},0).wait(1).to({startPosition:183},0).wait(1).to({startPosition:184},0).wait(1).to({startPosition:185},0).wait(1).to({startPosition:186},0).wait(1).to({startPosition:187},0).wait(1).to({startPosition:188},0).wait(1).to({startPosition:0},0).wait(1).to({y:656.2,startPosition:1},0).wait(1).to({y:658,startPosition:2},0).wait(1).to({y:659.8,startPosition:3},0).wait(1).to({y:661.6,startPosition:4},0).wait(1).to({y:663.4,startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({x:483.4,y:646.3,startPosition:14},0).wait(1).to({x:413.2,y:649.4,startPosition:15},0).wait(1).to({x:350.1,y:664.4,startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({x:304.8,startPosition:23},0).wait(1).to({x:259.5,startPosition:24},0).wait(1).to({x:214.3,startPosition:25},0).wait(1).to({x:169,startPosition:26},0).wait(1).to({x:178.8,y:661.9,startPosition:27},0).wait(1).to({x:188.5,y:659.4,startPosition:28},0).wait(1).to({x:82.8,y:654.8,startPosition:29},0).wait(1).to({x:-22.8,y:650.2,startPosition:30},0).wait(1).to({x:-128.5,y:645.6,startPosition:31},0).wait(1).to({x:-234.2,y:640.9,startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({startPosition:42},0).wait(1).to({startPosition:43},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:45},0).wait(1).to({startPosition:46},0).wait(1).to({startPosition:47},0).wait(1).to({startPosition:48},0).wait(1).to({startPosition:49},0).wait(1).to({startPosition:50},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2910.8,741.6,442.3,848.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;