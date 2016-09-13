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


(lib.sturgeonwhiskers = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7E0E0").s().p("AAcAWQgKgWgtheIgthaQAAgVASgTIATgPIAcBYQAeBdAVAhQAWAeAFB4QADA9gBA2Qgfi0gOgmg");
	this.shape.setTransform(22.4,51.2,1.627,1.627);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7E0E0").s().p("AAbAWQgJgWgtheIgthZQgBgXATgSIASgPIAcBYQAeBeAWAgQAVAeAGB4QADA9gBA2Qgfi0gPgmg");
	this.shape_1.setTransform(32.7,52.8,1.627,1.627);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7E0E0").s().p("AAZAcQgIgcgnh1IgohvQABgZAUgTIATgNIAWBpQAaBzATApQAUAmgCCNQgBBGgFA9QgTjUgNgug");
	this.shape_2.setTransform(10.4,46.7,1.627,1.627);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7E0E0").s().p("AAHAcQgDgcgVh6IgVh0QAEgZAXgPIAUgLIAFBtQAIB1ANArQANAqgZCKQgMBFgMA8QANjVgFgwg");
	this.shape_3.setTransform(10.1,62.5,1.627,1.627);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,44.8,109.7);


(lib.sturgeonTopFin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D2D2D2").s().p("AhPAcQAGgOAKgFIA5gZQAAgDAagFQAdgFAHABQAKgBAOAHQgMAMgKABQgKAAgYAEQgYAFAAAAQAAAAg2AaQgFADgIAAIgMgBgAAAAAIAAAAIAAAAg");
	this.shape.setTransform(156.4,98.9,1.627,1.627);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D2D2D2").s().p("AhaAwQAIgPAMgHQALgFA0ggQgCgBAdgRQAfgSALAAQAOgDAPAHQgMAMgNADQgJAAgcAQQgbANAAACQgzAkgMAFQgJAFgLAAIgJgBg");
	this.shape_1.setTransform(144.5,95.6,1.627,1.627);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D2D2D2").s().p("AhYAdIBRgqQgBgCAkgRQAngSAMAAQAJgDAKABQAGABALADQgPAMgQAEQgKABgmARQgkAOAAACQhBAmgOAGQgOAHgVAAQAMgRAOgHg");
	this.shape_2.setTransform(132.8,91.5,1.627,1.627);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D2D2D2").s().p("AhYAdIBRgqQAAgBAjgSQAogSALAAQAKgDAJABQAGABALADQgPAMgQAEQgKABgmARQgjAPAAABQhCAmgOAGQgOAHgVAAQAMgRAOgHg");
	this.shape_3.setTransform(123.1,86.4,1.627,1.627);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D2D2D2").s().p("Ah5AkIA/ghIAxgYQgBgCAzgUQA3gVAPAAQAZgDAXANIgtAKQgNgBg1AUQgxAUABACIhwA4QgUAKgaADQASgUATgKg");
	this.shape_4.setTransform(115.8,77.6,1.627,1.627);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D2D2D2").s().p("AiMAxQAPgKA5ghQA4gfABABQgCgCA6gbQA+gcASgBQAOgFAPABIAbAEQgLAGgOAEIgaAJQgQABg9AbQg4AaABACQgBgBg3AfQg4AggPAKQgWAPgdAHQATgYAVgOg");
	this.shape_5.setTransform(104.2,70.8,1.627,1.627);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D2D2D2").s().p("AihBAQAPgOBBgrQBAgnABABQgCgCBEghQBGgiAVgEQARgGAQgBIAgAAQgRAJgrARQgSADhGAiQhCAgABACQAAgBhAAnQhAAqgPANQgVASgiAQQAVgeAXgTg");
	this.shape_6.setTransform(99.3,65,1.627,1.627);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D2D2D2").s().p("AjdBxQALgOARgQQAQgSBOg2QBMgzABACQgBgCBQgqQBVgrAXgGQAlgNApABQgwAWgXAIQgXAGhTArQhPApABACQgBgChLAyQhMA2gQARQgYAUgmAaQALgTAKgMg");
	this.shape_7.setTransform(99.9,56.7,1.627,1.627);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D2D2D2").s().p("Aj4CHQAMgQATgTQARgVBXhAQBVg8ACADQgCgCBbgxQBfg0AbgHQAogQAugDQgxAZgeAMQgaAIheAyQhZAxABACQgCgDhTA8QhWA+gRAVQgaAYgoAhQAMgXAKgOg");
	this.shape_8.setTransform(96.5,47,1.627,1.627);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D2D2D2").s().p("AkgClQAOgUAVgWQAUgaBlhLQBjhIADAFQgCgDBpg8QBvg8AegLQAdgMAWgHQAVgFAcgEQg+AhgeANQgeAKhtA8QhpA7ACADQgCgDhiBFQhkBLgTAZIhKBHQAOgbALgQg");
	this.shape_9.setTransform(90.6,41.1,1.627,1.627);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#F3E5CE","#DACCC1","#C6B8B7"],[0,0.463,0.922],-55.1,0,55.2,0).s().p("AitEDQkqhPhPADIBcgtQBjgzAdgbQApgmCDhjQCOhtAsgZQBMgqB8gtQCXg4AQAaQALAUgjCOQgmCZAFArQAHBCBoBUIBHA2QAfAaAAAKQAAAnhGAIQgxAFkcAPIgBAAQgdAAkjhOg");
	this.shape_10.setTransform(89.7,54.9,1.627,1.627);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,179.5,109.8);


(lib.sturgeonTailFin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D2D2D2").s().p("AAtAVIgvgLIgUgFIgbgGQgJgEgGgMQANgFAIACIAZAIIATAFIAvAJQAJACAIALQgKAHgHAAIgDgBg");
	this.shape.setTransform(248.7,14.5,1.627,1.627);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D2D2D2").s().p("AAuAWIgvgNIgygLQgIgDgHgMQANgGAIACIAcAIIASAFIAyALQAIACAHAMQgIAFgIAAIgEAAg");
	this.shape_1.setTransform(236.8,18.6,1.627,1.627);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D2D2D2").s().p("AAsAVIgtgLIgVgFIgbgGQgHgDgHgMQANgGAHACIAaAIIATAFIAvAJQAHACAIALQgKAGgHAAIgDAAg");
	this.shape_2.setTransform(225,24.4,1.627,1.627);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D2D2D2").s().p("AA7AbIh6gjQgMgDgIgNQAOgGALADIB6AkQALAEAJAMQgJAEgIAAIgIgCg");
	this.shape_3.setTransform(215.9,29.8,1.627,1.627);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D2D2D2").s().p("ABDAcIhFgSIhFgSQgMgEgMgNQARgEAMADQBEAVAAgCIAeAHIAnAIQAKACAOAMQgKAGgLAAIgHAAg");
	this.shape_4.setTransform(206.6,35.7,1.627,1.627);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D2D2D2").s().p("ABGAfIiRgqQgNgEgLgOQAJgCAGAAQAHgBAIACICRAqQAMAEAMAOQgJADgJAAIgMgCg");
	this.shape_5.setTransform(198.1,40.3,1.627,1.627);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D2D2D2").s().p("ABPAbQgKAAglgHIgigHQhEgPgNgEQgPgFgMgNQAKgDAGAAQAHAAAJACIAtAMIAhAJIAjAFQAlAHAJAAQAMABASAKQgOAJgNAAIgFgBg");
	this.shape_6.setTransform(190.6,47.9,1.627,1.627);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D2D2D2").s().p("ABXAgIhZgVQhKgRgPgFQgPgFgPgOQAUgEAPAEICxArQANADASAMQgNAFgMAAIgKgBg");
	this.shape_7.setTransform(181.3,54,1.627,1.627);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D2D2D2").s().p("ABaAfQgLgBgqgJIgngJQhNgRgPgFQgQgEgPgPQAVgEAPAFIAzANIAnAKIAoAHQApAIALABQAOADATALQgOAGgOAAIgIAAg");
	this.shape_8.setTransform(170.4,61.3,1.627,1.627);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D2D2D2").s().p("ABgAhIhigUQhTgTgQgFQgQgEgSgQQAWgDASAEQAPAFBQAVIBjARQARADATAMQgOAFgOAAIgLAAg");
	this.shape_9.setTransform(164.2,69.2,1.627,1.627);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D2D2D2").s().p("ABmAnIjQg6QgRgFgTgQQAXgDASAFIDQA6QARAFATAPIgTACQgMAAgKgDg");
	this.shape_10.setTransform(158.3,76.9,1.627,1.627);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D2D2D2").s().p("ABgAkIhigZQhSgVgRgFQgRgFgQgPQAVgEASAFIDEAzQARAEARAOQgLADgIAAIgDAAQgIAAgJgCg");
	this.shape_11.setTransform(150.3,84.1,1.627,1.627);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D2D2D2").s().p("ABgAmIjEg4QgSgFgRgQQAXgDARAFIDEA4QASAGAQAOIgSACQgLAAgKgDg");
	this.shape_12.setTransform(143.4,90.3,1.627,1.627);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D2D2D2").s().p("ABsAlIhugZQhdgVgTgGQgRgFgVgQQAXgDAVAFIA+ARIAuAMIBxAXQASADAVAOQgOADgOAAIgQgBg");
	this.shape_13.setTransform(136.2,98.5,1.627,1.627);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D2D2D2").s().p("ABzAmIh1gaQhigWgTgGQgUgGgVgQIAXgBQAKABANADQATAGBfAYIA0AKIBCAOQAUADAXAPIgWADIgEAAQgKAAgKgCg");
	this.shape_14.setTransform(128.7,104.5,1.627,1.627);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D2D2D2").s().p("AB/AmQgPgCg7gLIg3gLQhsgWgUgHQgWgGgXgRIAYAAQALAAAOAEIBIASQA2ANABgBQgBABA5AJQA5ALAQACQAVAEAZANQgRADgPAAIgRgBg");
	this.shape_15.setTransform(123.5,111.8,1.627,1.627);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D2D2D2").s().p("ACuA1QgMgBgRgEIiTglQh7gegYgIQgagHgagSQAfgBAaAHIBTAXIA/ARICTAjQAbAHAaAQIgWABIgGAAg");
	this.shape_16.setTransform(119.3,121,1.627,1.627);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D2D2D2").s().p("ADHA7QgPgBgSgEIingrQiOgigbgJQgcgHgggUQAkAAAdAJIBeAaIBIASIBKARIBfAYQAdAHAgARIgSABIgOgBg");
	this.shape_17.setTransform(114.7,129.4,1.627,1.627);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D2D2D2").s().p("ADDBAQgXABhbgUQhWgUAAgCQAAABhWgYQhXgZgXgIQgggJglgWQApADAiAKIBuAhQBVAXAAgBQAAACBVATQBaAUAWAAIBKAKQgUAHgPACIgWABIgTgBg");
	this.shape_18.setTransform(114.9,138.2,1.627,1.627);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D2D2D2").s().p("ADjBNQgcgBhpgYQhlgWABgCQjAg0gmgQQgogOgngaQAyAJAkANQAZAKBmAfQBkAbAAgBQAAACBkAWQBpAXAaACQAgAFA3AMQgZAFgSAAIgFABQgTAAgWgEg");
	this.shape_19.setTransform(117.7,149.7,1.627,1.627);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D2D2D2").s().p("AElBeQgWAAgdgEQgcgDhzgZQhsgYAAgCQAAAChtgiQhwghgZgOQgbgLgSgMQgPgKgXgRQAzAQAnAQQAaANBuAjQBrAhABgDQAAACBsAYQBxAZAdACQAqAHAzAPQgXACgRAAIgGAAg");
	this.shape_20.setTransform(119.6,160.6,1.627,1.627);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D2D2D2").s().p("AFPB6QgagBgggGQghgDiEgiQh+ghABgCQgBAEh8gtQiAgsgdgSQgdgPgWgOQgSgMgYgVQBFAcAgAQQAdARB/AvQB7ApABgDQgBADB9AgQCDAhAhAEQAxAJA7ARIgeABIgYgBg");
	this.shape_21.setTransform(118.4,168.5,1.627,1.627);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D2D2D2").s().p("AFtCYQgcgDgkgIQglgFiQgsQiKgpABgDQgBADiHg1QiMg5gfgVQgggSgXgRQgUgPgYgYIBsA5QAeAVCLA4QCGA1ACgDQgBACCJAqQCPArAlAFQA6AOA8ATQgjAAgYgDg");
	this.shape_22.setTransform(117.2,176.7,1.627,1.627);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D2D2D2").s().p("AFTCnQgqgHijg2QicgyABgEQgBAFiZhAQiehEgigaQgkgVgZgUQgVgRgbgeQA5AlA+AiQAhAZCdBEQCXA/ACgEQgBADCbAzQCiA1ApAHQBDASBDAYQhKgGhAgRg");
	this.shape_23.setTransform(116.3,185.5,1.627,1.627);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#F3E5CE","#DACCC1","#C6B8B7","#A3999B","#756F75"],[0,0.345,0.69,0.831,1],-76.9,-23,73.1,3.4).s().p("ADVK0QhlgPi5g3Qh0gih6g5Qhmgxh5hJQiUhZirhGIBVgVQBggdA4goQBPg3Bzh/QB2iEBKg2IFHjvQCuh5BogqQBSggCqgjQDLgqAWAjQAMAUg0AlQhYA5hDAvQkfDNjeE9Qg5BQBRBtQAvBACDB9QBBBIAkA8QA1BbgdArQgmA6h4AAQguAAg6gJg");
	this.shape_24.setTransform(139,114.1,1.627,1.627);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,278,228.3);


(lib.sturgeonmidFin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D2D2D2").s().p("ACfBRQgUAAhNgaQhIgaABgCQgBABhGgfQhGgggVgKQgcgOgbgXQAiAFAeAOIBaArQBGAeAAgBQAAACBGAZQBMAaATAAIBAAKQgSAIgOACIgPABQgKAAgLgCg");
	this.shape.setTransform(86.6,20.3,1.627,1.627);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D2D2D2").s().p("ACfBjQgWgChOghQhIgfAAgDQgBAChHgmQhIgogSgMQgbgRgagcQAlANAaAPQAaASCHBFQAAADBHAfQBNAfAUADQAVAGArAOQgSADgOAAQgRABgUgFg");
	this.shape_1.setTransform(76.1,29.6,1.627,1.627);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D2D2D2").s().p("ADdCFQgTgCgXgHQgZgEhZgoQhUgnABgDQgBAChRgwQhTgzgTgQQgSgOgNgOQgKgKgPgUQAnAUAdAWQASAQBSAzQBQAvABgCQgBACBTAnQBYAnAYAFQAeAJAsATIgRAAIgVgBg");
	this.shape_2.setTransform(69.9,36.5,1.627,1.627);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D2D2D2").s().p("AEECoQgWgDgbgKQgdgGhrgzQhlgyACgDQgCADhgg9QhihAgVgWQgVgSgQgRQgLgOgRgXQAvAgAeAZQAVAVBhBAQBfA8ABgDQgBADBkAxQBpAzAcAGQAlANA1AWQgbgBgUgDg");
	this.shape_3.setTransform(70.6,46.5,1.627,1.627);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D2D2D2").s().p("AELDGQgYgFgcgLQgfgJhvg+Qhqg7ADgDQgDADhihJQhkhMgUgZQgXgVgOgUQgMgPgPgaQAyAqAbAaQAUAYBkBMQBgBHADgDQgDAEBoA6QBtA9AfAJIBeApQgdgDgUgEg");
	this.shape_4.setTransform(70.7,58,1.627,1.627);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D2D2D2").s().p("AEXDrQgagIgegOQgigLh1hKQhwhJADgEQgDAFhmhXQhphagUgdQgWgZgPgXQgMgRgPgeQAqApAkAoQAVAcBnBaQBlBVADgDQgDAEBvBHQB0BKAgAKIBlAzQgggFgVgGg");
	this.shape_5.setTransform(69.4,65.3,1.627,1.627);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#F3E5CE","#DACCC1","#C6B8B7","#A39899","#575257"],[0,0.224,0.443,0.631,1],-16.3,16.2,38.4,-22).s().p("AFSFOQgrgEh5hCQhtg7glgfQgQgNhihcQhghXgggaQgPgMhhhEQhKg0gOgVQgOgXAZgXQAOgNAfgVQAsgnB4gSQA4gIBsAGQBwAGATAQQAMALgHAJQgGAJAVAOQAbASBVAXQBHAUAvAGQAnAFAMAJQAOAKAEAdQACAUgUA9QgWBFgCAkQgCAuARBZIAZB8QAGAogTAFIgEABQgNAAgygGg");
	this.shape_6.setTransform(68.4,55.3,1.627,1.627);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,136.9,110.7);


(lib.sturgeonfrontFin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D2D2D2").s().p("ADjBcQgcAChsgZQhngXABgEQgBADhmglQhmgkgagOQgYgMgRgMQgPgJgTgRQAtAOAnASQAXAOBnAmQBkAjABgDQAAADBlAXQBrAYAcgBIBZALQgZAHgSACIgUAAIgdgBg");
	this.shape.setTransform(90.1,28,1.627,1.627);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D2D2D2").s().p("AE5CfQgZgCgggJQghgFh8gxQh2gvABgDQgBADhzg5Qh3g9gagUQgbgRgUgQQgPgNgXgXQA2AbApAZQAbAUB1A8QByA5ABgDQgBADB1AvQB8AwAfAFQArAMA9AUIgQAAQgUAAgQgCg");
	this.shape_1.setTransform(91.5,40.2,1.627,1.627);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D2D2D2").s().p("AFJDYQgbgGgigOQgkgKiFhEQiAhCACgDQgCADh4hPQh9hTgbgaQgcgXgTgUQgRgRgVgcQA6ApAoAgQAaAaB7BSQB4BOACgDQgCADB+BCQCEBDAkAKIBwAvQghgDgZgGg");
	this.shape_2.setTransform(90.8,51.9,1.627,1.627);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D2D2D2").s().p("AFoEJQgfgJgmgQQgpgNiThUQiOhSADgEQgDAEiDhhQiHhmgcghQgegbgVgaQgQgTgYgiQBBA4AnAkQAbAgCHBmQCCBgADgEQgDAECMBRQCTBTAoANIB+A4QgngGgagHg");
	this.shape_3.setTransform(94.8,66.4,1.627,1.627);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D2D2D2").s().p("AFtEyQgggLgogUQgrgPiYhjQiShfAEgFQgEAFiFhxQiJh3gbglQgegggTgcQgRgXgVglQA0A2AxA1QAaAkCIB2QCEBwAEgEQgDAECQBfQCXBiAqAPICEBCQgpgJgbgJg");
	this.shape_4.setTransform(93.4,82,1.627,1.627);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D2D2D2").s().p("AF6FmQgjgPgqgXQgugTigh1QiZhyAEgEQgEAFiKiFQiNiLgbgqQgeglgTghQgQgagVgpIBlB9QAbAqCMCJQCICDAEgEQgDAECYBxQCfB0AtATICMBPQgsgNgdgLg");
	this.shape_5.setTransform(90.5,91.7,1.627,1.627);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#F3E5CE","#DACCC1","#C6B8B7","#C1B4B3","#B4A8A8","#9E9394","#7F7779","#575257","#575257"],[0,0.184,0.369,0.478,0.604,0.733,0.863,1,1],-36.9,10.9,44,-15.4).s().p("AF1HwQhQgFhngxQhUgnjMjNQjEjCgvhMQheibgfg2QhSiPAAgZQAAgcAegLQAWgIAtAAQAXABAPAFQASAFAiATQAaAQCFAKQCZAMAcAGQA+AOCIAtQCRAwAtAaQAmAWAcBdIBGD2QAxCVgEBUQgDBAgqBJQgfA3hSAAIgRgBg");
	this.shape_6.setTransform(89.3,80.9,1.627,1.627);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,178.7,161.8);


(lib.sturgeonbackFin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D2D2D2").s().p("ACKBAQgRAAhDgUQg9gUAAgCIg9gWIhPghQgXgKgYgVQAfADAYAKIBOAhIA9AWQAAACA8ATQBBAUAQAAIA2AKQgOAHgMACIgPABIgQgBg");
	this.shape.setTransform(92.1,18.4,1.627,1.627);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D2D2D2").s().p("ACKBNQgSgBhDgZQg/gYABgCQgBABg+gcQg+gfgQgKQgYgNgWgXQAdAFAaAOQARAKA9AeQA9AcABgBQgBACA9AYQBCAYARABIAdAIQAOAEAMAGQgUAEgIAAIgIAAQgMAAgLgDg");
	this.shape_1.setTransform(83.1,25.5,1.627,1.627);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D2D2D2").s().p("ACbBhQgVgChMgfQhIgeAAgDQgBAChFgkQhJgogQgNQgagRgYgeQAiANAbASQAQAMBHAnQBFAlABgCQgCACBIAeQBLAeAVADQAsAOASAJIghACQgRgBgSgGg");
	this.shape_2.setTransform(77.8,30.8,1.627,1.627);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D2D2D2").s().p("ADhCDQgTgCgXgHQgYgEhbgnQhXgmABgDQgBADhUgvQhVgygSgRQgUgOgNgOQgLgMgNgTQAlAVAfAWQASARBVAxQBSAuABgCQgCACBWAmQBaAmAYAFQAcAIAvAUIgOABQgOAAgLgCg");
	this.shape_3.setTransform(78.4,38.4,1.627,1.627);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D2D2D2").s().p("ADMCOQgbgGhnguQhigtACgCQgCADhdg3Qhgg7gTgUQgWgRgOgRQgMgNgOgWQArAdAfAZQATAUBfA5QBbA3ACgEQgCADBhAsQBlAtAbAHQAgALA1AXQgvgBgsgPg");
	this.shape_4.setTransform(74.8,47.3,1.627,1.627);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D2D2D2").s().p("AEPC2QgXgFgcgLQgegIhwg3Qhqg2ABgDQgCAEhlhBQhohGgUgYQgXgTgPgUQgMgPgPgZIBNBAQAUAYBnBEQBkBAACgDQgCADBqA1QBuA2AeAJQAiAOA7AcQgdgDgUgFg");
	this.shape_5.setTransform(71.9,52.9,1.627,1.627);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#F3E5CE","#DACCC1","#C6B8B7","#A39899","#575257"],[0,0.224,0.443,0.631,1],-18.3,18,35.3,-19.6).s().p("AEtEVQgggFkOigQkPiegjgjQgUgUhAgmQgrgZAVgDQAzgIB4gsICVg3QAugNAmAEQArAFAwAdQAjAWBkAFQBkAFAZAQQAkAXAHBEQAEA2gOBDQgLAvASBAQALAkAZBJQANAvgwAGIgKABQgYAAgwgIg");
	this.shape_6.setTransform(68.5,46.4,1.627,1.627);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137.1,92.9);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#58595B").s().p("AAAgTQgcgDgdAVQgOAIgIALQAPgbANgKQAZgTAsAEQAsAEANAhQAGARgBAQQgggzgwgEg");
	this.shape.setTransform(8.1,3.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.2,7.3);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#58595B").s().p("Ag5AUQgNgOgJgiQAIASARANQAhAgApgLQAOgGAOgMQAcgWADgcQADAWgGAWQgNAsgwABIgGAAQgsAAgWgZg");
	this.shape.setTransform(8,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.1,9.1);


(lib.sturgeonbody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfAGQgEgMAGgLIA/AGIg7AdQgEgFgCgHg");
	this.shape.setTransform(160.8,124,1.627,1.627);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgjAgQgQgNAAgTQAAgRAQgNQAPgOAUAAQAVAAAPAOQAQANAAARQAAATgQANQgPANgVAAQgUAAgPgNg");
	this.shape_1.setTransform(164.2,123.4,1.627,1.627);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF698").s().p("AgwArQgVgSABgZQgBgXAVgTQAVgSAbAAQAcAAAVASQAUATAAAXQAAAZgUASQgVARgcABQgbgBgVgRg");
	this.shape_2.setTransform(164.2,123.4,1.627,1.627);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("Ag3AxQgYgUABgdQgBgbAYgVQAXgUAgAAQAhAAAXAUQAYAVAAAbQAAAdgYAUQgXAUghAAQggAAgXgUg");
	this.shape_3.setTransform(164.2,123.3,1.627,1.627);

	this.instance = new lib.Path();
	this.instance.setTransform(176.3,143,1.627,1.627,0,0,0,15.5,12.9);
	this.instance.alpha = 0.988;

	this.instance_1 = new lib.Path_5();
	this.instance_1.setTransform(176.7,130.1,1.627,1.627,0,0,0,15.5,11.8);
	this.instance_1.alpha = 0.988;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(87,82,87,0.176)","rgba(163,152,153,0.741)","#C6B8B7","#D6C8BF","#EBDDCA","#F3E5CE"],[0,0.384,0.58,0.694,0.878,1],-5.1,-4.3,5.2,3.7).s().p("AACAqQgdgbgHgFQgLgHABgWQAEgagBgJQgBgKAqAXQAmAWAEAHQADAHAAATQgBAZgIAQQgBADgEAAQgIAAgVgQg");
	this.shape_4.setTransform(1381.7,163.6,1.627,1.627);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(87,82,87,0.176)","rgba(163,152,153,0.741)","#C6B8B7","#D6C8BF","#EBDDCA","#F3E5CE"],[0,0.384,0.58,0.694,0.878,1],-5.5,-4.5,5.5,4.1).s().p("AADAuQgdgfgIgFQgLgHABgZQADgdgBgJQgBgLAqAaQAnAZAEAIQAEAHgBAWQAAAbgIARQgBADgEAAQgIAAgVgSg");
	this.shape_5.setTransform(1360.4,164.4,1.627,1.627);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(87,82,87,0.176)","rgba(163,152,153,0.741)","#C6B8B7","#D6C8BF","#EBDDCA","#F3E5CE"],[0,0.384,0.58,0.694,0.878,1],-5.5,-4.5,5.5,4.1).s().p("AADAuQgdgfgIgFQgLgHABgZQADgdgBgJQgBgLAqAaQAnAZAEAIQAEAHgBAWQAAAbgIARQgBADgEAAQgIAAgVgSg");
	this.shape_6.setTransform(1334.1,164.3,1.627,1.627);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(87,82,87,0.176)","rgba(163,152,153,0.741)","#C6B8B7","#D6C8BF","#EBDDCA","#F3E5CE"],[0,0.384,0.58,0.694,0.878,1],-5.5,-4.1,5,4.1).s().p("AgBAvQgcgigGgGQgLgHAEgaQAGgcAAgJQAAgMAlAfQAnAdACAIQADAHgCAWQgEAbgJAQQgCADgDAAQgIAAgSgVg");
	this.shape_7.setTransform(1306.9,162.6,1.627,1.627);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(87,82,87,0.176)","rgba(163,152,153,0.741)","#C6B8B7","#D6C8BF","#EBDDCA","#F3E5CE"],[0,0.384,0.58,0.694,0.878,1],-5.5,-4.1,5,4.1).s().p("AAAAuQgcgigHgFQgLgHAEgaQAHgcAAgKQAAgLAlAeQAmAeACAIQADAHgCAWQgEAbgJAQQgCADgDAAQgIAAgRgWg");
	this.shape_8.setTransform(1286.7,164.3,1.627,1.627);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(87,82,87,0.176)","rgba(163,152,153,0.741)","#C6B8B7","#D6C8BF","#EBDDCA","#F3E5CE"],[0,0.384,0.58,0.694,0.878,1],-6.9,-5.4,6.5,5.1).s().p("AgBA5QgngpgJgHQgPgJAGgfQAKgjAAgLQAAgOAzAkQA1AkAEAKQADAJgEAbQgEAhgOATQgCADgEAAQgMAAgYgZg");
	this.shape_9.setTransform(1262,164.3,1.627,1.627);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(87,82,87,0.176)","rgba(163,152,153,0.741)","#C6B8B7","#D6C8BF","#EBDDCA","#F3E5CE"],[0,0.384,0.58,0.694,0.878,1],-6.9,-5.4,6.5,5.1).s().p("AgBA5QgngpgJgHQgPgJAGgfQAJgjAAgLQABgOAzAkQA1AkAEAKQADAJgEAbQgEAhgOATQgCADgEAAQgMAAgYgZg");
	this.shape_10.setTransform(1237.3,164.3,1.627,1.627);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(87,82,87,0.176)","rgba(163,152,153,0.741)","#C6B8B7","#D6C8BF","#EBDDCA","#F3E5CE"],[0,0.384,0.58,0.694,0.878,1],-7.9,-5.8,7.1,5.9).s().p("AgBBDQgngxgKgIQgPgKAGgmQAJgpAAgNQAAgQA0AsQA1AqAEAMQAEAKgDAgQgFAmgNAXQgCAEgEAAQgMAAgZgeg");
	this.shape_11.setTransform(1207.3,164,1.627,1.627);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(87,82,87,0.176)","rgba(163,152,153,0.741)","#C6B8B7","#D6C8BF","#EBDDCA","#F3E5CE"],[0,0.384,0.58,0.694,0.878,1],-7.8,-5.8,7.1,5.9).s().p("AgBBDQgngxgJgIQgPgKAFgmQAJgoAAgNQAAgRA0AsQA2ArADALQAEAKgDAgQgFAngNAWQgCAEgEAAQgMAAgZgeg");
	this.shape_12.setTransform(1179.2,164.1,1.627,1.627);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(87,82,87,0.176)","rgba(163,152,153,0.741)","#C6B8B7","#D6C8BF","#EBDDCA","#F3E5CE"],[0,0.384,0.58,0.694,0.878,1],-7.5,-5.4,6.5,5.6).s().p("AgJBDQgig1gIgJQgOgMAKgkQAOgoABgNQACgQAvAxQAwAwADAMQACAKgHAgQgJAmgPAVQgDADgDAAQgMAAgWgig");
	this.shape_13.setTransform(1154.9,162.2,1.627,1.627);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(87,82,87,0.176)","rgba(163,152,153,0.741)","#C6B8B7","#D6C8BF","#EBDDCA","#F3E5CE"],[0,0.384,0.58,0.694,0.878,1],-8,-5.8,7,5.9).s().p("AgJBKQgig6gIgKQgOgOAKgpQAOgrABgPQACgSAvA3QAwA2ADANQACALgHAjQgJAqgQAXQgCAEgEAAQgLAAgWgmg");
	this.shape_14.setTransform(1128.7,164,1.627,1.627);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(87,82,87,0.176)","rgba(163,152,153,0.741)","#C6B8B7","#D6C8BF","#EBDDCA","#F3E5CE"],[0,0.384,0.58,0.694,0.878,1],-7.7,-5.5,6.6,5.7).s().p("AgPBJQgdg8gIgKQgMgPAMgoQAQgqADgOQADgSArA5QAtA5ABAMQACANgKAiQgLAqgRAWQgDADgDAAQgMAAgUgpg");
	this.shape_15.setTransform(1102,166.6,1.627,1.627);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(87,82,87,0.176)","rgba(163,152,153,0.741)","#C6B8B7","#D6C8BF","#EBDDCA","#F3E5CE"],[0,0.384,0.58,0.694,0.878,1],-8.2,-5.8,6.9,6).s().p("AgPBPQgdhBgIgLQgMgQAMgrQARgtACgQQAEgTArA9QAsA9ABAOQACANgKAlQgMAsgRAZQgDADgDAAQgMAAgTgrg");
	this.shape_16.setTransform(1075.7,167.6,1.627,1.627);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(87,82,87,0.176)","rgba(163,152,153,0.741)","#C6B8B7","#D6C8BF","#EBDDCA","#F3E5CE"],[0,0.384,0.58,0.694,0.878,1],-8.1,-5.8,7,6).s().p("AgPBPQgdhAgIgMQgMgQAMgqQARguADgQQADgTArA+QAsA9ABANQACANgKAmQgMAsgRAYQgDADgDAAQgMAAgTgrg");
	this.shape_17.setTransform(1052.2,162.6,1.627,1.627);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(87,82,87,0.176)","rgba(163,152,153,0.741)","#C6B8B7","#D6C8BF","#EBDDCA","#F3E5CE"],[0,0.384,0.58,0.694,0.878,1],-8.9,-6.3,7.5,6.5).s().p("AgRBVQghhGgJgMQgOgRAOguQATgxADgQQADgVAxBDQAyBBABAOQACAOgLAoQgMAwgUAaQgCADgEAAQgNAAgXgug");
	this.shape_18.setTransform(1022.8,160.3,1.627,1.627);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(87,82,87,0.176)","rgba(163,152,153,0.741)","#C6B8B7","#D6C8BF","#EBDDCA","#F3E5CE"],[0,0.384,0.58,0.694,0.878,1],-8.6,-6.1,7.2,6.3).s().p("AgVBUQgehHgIgMQgNgSAQgtQAVgwADgRQAEgUAuBEQAvBEABANQABAPgNAoQgPAvgUAZQgDADgDAAQgNAAgVgwg");
	this.shape_19.setTransform(998.2,161,1.627,1.627);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["rgba(87,82,87,0.176)","rgba(163,152,153,0.741)","#C6B8B7","#D6C8BF","#EBDDCA","#F3E5CE"],[0,0.384,0.58,0.694,0.878,1],-8.6,-6.1,7.2,6.3).s().p("AgVBUQgehHgIgMQgNgSAQgtQAVgwADgRQAFgUAtBFQAvBDABANQABAQgMAnQgQAvgUAZQgDADgDAAQgNAAgVgwg");
	this.shape_20.setTransform(970.9,155.6,1.627,1.627);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(87,82,87,0.176)","rgba(163,152,153,0.741)","#C6B8B7","#D6C8BF","#EBDDCA","#F3E5CE"],[0,0.384,0.58,0.694,0.878,1],-9.5,-6.7,7.9,6.9).s().p("AgYBcQghhOgJgNQgPgUASgxQAXg0AEgSQAEgWA0BLQA0BJACAPQABARgOArQgRAzgXAbQgDADgEAAQgOAAgYg0g");
	this.shape_21.setTransform(944.1,155.6,1.627,1.627);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(87,82,87,0.176)","rgba(163,152,153,0.741)","#C6B8B7","#D6C8BF","#EBDDCA","#F3E5CE"],[0,0.384,0.58,0.694,0.878,1],-9.5,-6.7,7.9,6.9).s().p("AgYBcQghhOgJgNQgPgUASgxQAXg0AEgSQAEgWA0BLQA0BJACAPQABARgOArQgRAzgXAbQgDADgEAAQgOAAgYg0g");
	this.shape_22.setTransform(917.6,159.2,1.627,1.627);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(87,82,87,0.176)","rgba(163,152,153,0.741)","#C6B8B7","#D6C8BF","#EBDDCA","#F3E5CE"],[0,0.384,0.58,0.694,0.878,1],-10.8,-7.6,8.9,7.8).s().p("AgbBnQgnhXgLgPQgQgXAUg3QAag7AFgUQAFgZA8BVQA8BTACAQQABATgQAxQgTA5gaAfQgDAEgFAAQgQAAgcg8g");
	this.shape_23.setTransform(885.5,147.1,1.627,1.627);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["rgba(87,82,87,0.176)","rgba(163,152,153,0.741)","#C6B8B7","#D6C8BF","#EBDDCA","#F3E5CE"],[0,0.384,0.58,0.694,0.878,1],-12.2,-8.6,10.2,8.9).s().p("AgfB+QgkhpgKgSQgQgcAWhDQAchJAFgZQAGgeA5BlQA7BjABAVQAAAYgRA7QgVBGgbAmQgDAGgFAAQgPAAgchIg");
	this.shape_24.setTransform(854.5,147,1.627,1.627);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(87,82,87,0.176)","rgba(163,152,153,0.741)","#C6B8B7","#D6C8BF","#EBDDCA","#F3E5CE"],[0,0.384,0.58,0.694,0.878,1],-12.2,-8.6,10.3,8.9).s().p("AgfB+QgkhpgKgSQgQgbAWhEQAchJAFgYQAGgfA5BlQA7BjABAVQABAXgSA8QgVBGgbAmQgDAFgFAAQgPAAgchHg");
	this.shape_25.setTransform(827,151.9,1.627,1.627);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["rgba(87,82,87,0.176)","rgba(163,152,153,0.741)","#C6B8B7","#D6C8BF","#EBDDCA","#F3E5CE"],[0,0.384,0.58,0.694,0.878,1],-12.2,-8.6,10.3,8.9).s().p("AgfB+QgkhpgKgSQgQgcAWhDQAchJAFgZQAGgeA5BlQA7BjABAVQABAXgSA8QgVBGgbAmQgDAGgFAAQgPAAgchIg");
	this.shape_26.setTransform(797.9,147,1.627,1.627);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["rgba(87,82,87,0.176)","rgba(163,152,153,0.741)","#C6B8B7","#D6C8BF","#EBDDCA","#F3E5CE"],[0,0.384,0.58,0.694,0.878,1],-11.1,-7.9,9.3,8.1).s().p("AgcBtQgmhcgKgQQgRgYAVg6QAag/AFgVQAFgaA8BYQA8BYABARQABAUgQA0QgUA9gaAgQgEAFgEAAQgQAAgcg/g");
	this.shape_27.setTransform(765.7,142.9,1.627,1.627);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["rgba(87,82,87,0.176)","rgba(163,152,153,0.741)","#C6B8B7","#D6C8BF","#EBDDCA","#F3E5CE"],[0,0.384,0.58,0.694,0.878,1],-12.2,-8.6,10.2,8.9).s().p("AgfB4QgqhlgLgRQgSgbAWhAQAehFAFgXQAGgdBBBhQBCBgABAUQACAWgSA5QgWBCgdAkQgEAFgEAAQgSAAgfhFg");
	this.shape_28.setTransform(736.5,140.7,1.627,1.627);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["rgba(87,82,87,0.176)","rgba(163,152,153,0.741)","#C6B8B7","#D6C8BF","#EBDDCA","#F3E5CE"],[0,0.384,0.58,0.694,0.878,1],-12.3,-8.6,10.2,8.9).s().p("AgfB4QgqhlgLgSQgSgaAWhAQAehFAEgXQAHgdBBBhQBCBgABAUQACAWgSA4QgWBDgdAkQgEAFgFAAQgRAAgfhFg");
	this.shape_29.setTransform(702.4,136.9,1.627,1.627);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["rgba(87,82,87,0.176)","rgba(163,152,153,0.741)","#C6B8B7","#D6C8BF","#EBDDCA","#F3E5CE"],[0,0.384,0.58,0.694,0.878,1],-13.2,-9.3,11.1,9.7).s().p("AghCIQgphxgLgUQgSgdAYhJQAfhOAFgbQAHghBABtQBABrABAXQABAZgTBAQgWBMgeAoQgEAGgFAAQgQAAgfhNg");
	this.shape_30.setTransform(665.2,133.3,1.627,1.627);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["rgba(87,82,87,0.176)","rgba(163,152,153,0.741)","#C6B8B7","#D6C8BF","#EBDDCA","#F3E5CE"],[0,0.384,0.58,0.694,0.878,1],-13.2,-9.4,11.1,9.6).s().p("AghCIQgphxgLgUQgSgdAYhJQAfhOAFgbQAHghBABtQBABrABAXQABAZgTBAQgWBLgeApQgEAGgFAAQgQAAgfhNg");
	this.shape_31.setTransform(623.1,126.4,1.627,1.627);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["rgba(87,82,87,0.176)","rgba(163,152,153,0.741)","#C6B8B7","#D6C8BF","#EBDDCA","#F3E5CE"],[0,0.384,0.58,0.694,0.878,1],-12.6,-8.9,10.5,9.1).s().p("AggB9QgphogMgTQgSgbAXhDQAehIAFgYQAHgeBABlQBCBjABAVQABAXgSA7QgWBFgdAlQgDAFgFAAQgRAAgghHg");
	this.shape_32.setTransform(582.2,123.3,1.627,1.627);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["rgba(87,82,87,0.176)","rgba(163,152,153,0.741)","#C6B8B7","#D6C8BF","#EBDDCA","#F3E5CE"],[0,0.384,0.58,0.694,0.878,1],-14.7,-10.4,12.3,10.7).s().p("AglCVQguh8gNgWQgUghAbhQQAihWAGgdQAHgkBJB4QBJB2ABAZQACAcgWBGQgZBTghAtQgFAGgFAAQgTAAgjhVg");
	this.shape_33.setTransform(545.8,122,1.627,1.627);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["rgba(87,82,87,0.176)","rgba(163,152,153,0.741)","#C6B8B7","#D6C8BF","#EBDDCA","#F3E5CE"],[0,0.384,0.58,0.694,0.878,1],-17,-9.4,7.1,9.5).s().p("AgnB5QADiPgDgJQgUhBgKgwQgShVAWANQAiATA2BRQA2BOABAXQABAVghBOQgjBTghAvQgEAFgDAAQgNAAADhig");
	this.shape_34.setTransform(508.6,122.6,1.627,1.627);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["rgba(87,82,87,0.176)","rgba(163,152,153,0.741)","#C6B8B7","#D6C8BF","#EBDDCA","#F3E5CE"],[0,0.384,0.58,0.694,0.878,1],-17.1,-9.5,7.4,9.6).s().p("AgkB5QABiPgDgJQgVhCgLguQgThVAXAMQAiASA3BRQA3BNABAXQACAVggBOQgiBUggAvQgEAFgDAAQgNAAABhhg");
	this.shape_35.setTransform(478,123.5,1.627,1.627);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["rgba(87,82,87,0.176)","rgba(163,152,153,0.741)","#C6B8B7","#D6C8BF","#EBDDCA","#F3E5CE"],[0,0.384,0.58,0.694,0.878,1],-16.9,-10.4,9.6,10.3).s().p("AgbCAQgVh/gHgPQgPglgNhSQgOhcAYALQAkAPA+BMQA9BIADAXQAEAXgZBOQgbBWgeAzQgEAGgEAAQgNAAgRhYg");
	this.shape_36.setTransform(447.2,120.4,1.627,1.627);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["rgba(87,82,87,0.176)","rgba(163,152,153,0.741)","#C6B8B7","#D6C8BF","#EBDDCA","#F3E5CE"],[0,0.384,0.58,0.694,0.878,1],-16.9,-10.7,10.3,10.5).s().p("AgPCBQgaiIgBgDQgTgogThPQgWhdAZAJQAjAPBBBJQBABGAEAXQAEAWgWBQQgZBXgcAzQgEAHgEAAQgMAAgPhWg");
	this.shape_37.setTransform(413.4,123.4,1.627,1.627);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["rgba(87,82,87,0.176)","rgba(163,152,153,0.741)","#C6B8B7","#DACCC1","#F3E5CE"],[0,0.482,0.733,0.867,1],-2.4,6.5,2.5,-7.9).s().p("AACA/QhCgCgsgiQgRgNgEgLQgEgKAMgDQBJgRBHgeQAsgOAgAZQAfAXABAJQABALgdAgQgeAig/AAIgIAAg");
	this.shape_38.setTransform(1033.4,88.7,1.627,1.627);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["rgba(87,82,87,0.176)","rgba(163,152,153,0.741)","#C6B8B7","#DACCC1","#F3E5CE"],[0,0.482,0.733,0.867,1],-2,7.7,3.1,-7.2).s().p("AAPA+QhLgCgqgMQgrgNAPgRQAdgeBGgeQBRgjAjAcQApAfAFAJQAMASgaAfQgQATgcADIgTABIgngBg");
	this.shape_39.setTransform(976.1,75.8,1.627,1.627);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["rgba(87,82,87,0.176)","rgba(163,152,153,0.741)","#C6B8B7","#DACCC1","#F3E5CE"],[0,0.482,0.733,0.867,1],-2.7,6.6,2.5,-8.5).s().p("AgJBGQhGgZghgZQgigXAKgVQARglBbgMQBZgMAoAfIAlAeQAFAKgSAjQgSAngsAMQgSAFgRAAQgUAAgRgHg");
	this.shape_40.setTransform(931.9,69.2,1.627,1.627);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["rgba(87,82,87,0.176)","rgba(163,152,153,0.741)","#C6B8B7","#DACCC1","#F3E5CE"],[0,0.482,0.733,0.867,1],-2.6,7.2,2.9,-8.8).s().p("AADBGQhMgMgqgSQgtgUAJgUQASgkBogZQBpgYAnAeIAlAdQAGALgTAjQgRAmgtAKQgRAFgUAAQgRAAgUgDg");
	this.shape_41.setTransform(879.5,59.2,1.627,1.627);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["rgba(87,82,87,0.176)","rgba(163,152,153,0.741)","#C6B8B7","#DACCC1","#F3E5CE"],[0,0.482,0.733,0.867,1],-2.3,6.8,3.3,-9.4).s().p("AAABKQhegfgkgQQg7gZAJgSQARgmBpgYQBpgYAnAeQAUAPAyAbQAmAagRAhQgWAtgiALQgOAFgTAAQgkAAg0gQg");
	this.shape_42.setTransform(816.5,47.8,1.627,1.627);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["rgba(87,82,87,0.176)","rgba(163,152,153,0.741)","#C6B8B7","#DACCC1","#F3E5CE"],[0,0.482,0.733,0.867,1],-3,8.2,3.1,-9.5).s().p("AhrAvQg9gpALgYQAPglBugTQBtgTAiAeQARAPAZATQAOASgPAhQgRAngPAGQgGADhWALQgNACgMAAQg4AAg2gkg");
	this.shape_43.setTransform(743.1,35.7,1.627,1.627);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["rgba(87,82,87,0.176)","rgba(163,152,153,0.741)","#C6B8B7","#DACCC1","#F3E5CE"],[0,0.482,0.733,0.867,1],-3.5,8.1,3.7,-12.8).s().p("AhhA1Qhug1ALgZQAPglCVgbQCTgaAiAeQARAPAZATQAPASgQAhQgMAygJAQQgQAahCAJIgVABQhCAAhhgxg");
	this.shape_44.setTransform(665.1,30.7,1.627,1.627);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["rgba(87,82,87,0.176)","rgba(163,152,153,0.741)","#C6B8B7","#DACCC1","#F3E5CE"],[0,0.482,0.733,0.867,1],-3.4,9.7,4.7,-13.8).s().p("AhgBJQiIgqAJgXQAQgjCngxQCogxAhAdQARAPAhAVQAWAUgPAjQgLAagKAsQgQAghCAJQgOACgQAAQhHAAhugjg");
	this.shape_45.setTransform(586.8,23.3,1.627,1.627);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["rgba(87,82,87,0.176)","rgba(163,152,153,0.741)","#C6B8B7","#DACCC1","#F3E5CE"],[0,0.482,0.733,0.867,1],-4.2,10.4,3.9,-13.9).s().p("AhwBEQglgYgYgYQgXgWAEgLQAQgmCIgqQCHgqAiAdQARAPAiAVQAWAUgPAjQgdBGgIAKQgfArhDAJIgUACQg+AAhSgzg");
	this.shape_46.setTransform(512.4,19.6,1.627,1.627);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["rgba(87,82,87,0.176)","rgba(163,152,153,0.741)","#C6B8B7","#DACCC1","#F3E5CE"],[0,0.482,0.733,0.867,1],-3.9,10.7,4.4,-13.6).s().p("AhbBRQhUgxAIgbQAKglB1g0QB0g2AgAbQAQANAfASQAVASgKAkQgWBJgFALQgYAsg6APQgPAEgPAAQgyAAhEgog");
	this.shape_47.setTransform(447.5,19.7,1.627,1.627);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["rgba(87,82,87,0.176)","rgba(163,152,153,0.741)","#C6B8B7","#DACCC1","#F3E5CE"],[0,0.482,0.733,0.867,1],-3.9,10.3,4.1,-12.9).s().p("AhbBNQhTgxAHgbQALglCFgzQCEgygGApQgCAKAMAGIAaAHQAkAKgJAgQgUBIgGAMQgYAsg7APQgOAEgQAAQgyAAhEgng");
	this.shape_48.setTransform(388.9,27.5,1.627,1.627);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["rgba(87,82,87,0.176)","rgba(163,152,153,0.741)","#C6B8B7","#DACCC1","#F3E5CE"],[0,0.482,0.733,0.867,1],-4,10.1,4.3,-14.1).s().p("AhcBLQhTgxAHgaQAJggBpgoQBXgiA5gHQAsgFAVAWQAWAWgMAqQgVBJgGAKQgXAtg7APQgOAEgQAAQgyAAhEgog");
	this.shape_49.setTransform(328.4,44,1.627,1.627);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#2C2A2D").s().p("AgpAiQAIgYAZgTQAXgVAbgFQABAfgdAVQgUATgXAAQgGAAgGgCg");
	this.shape_50.setTransform(115.4,123.8,1.627,1.627);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#2C2A2D").s().p("Ag6A8QABggAlghQArglAQgSIAOgHQASA5gjAtQgZAhggAAQgRAAgUgIg");
	this.shape_51.setTransform(127.8,140.8,1.627,1.627);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#2C2A2D").s().p("AgyE0QA4hGASg1QALggAXgtQAfg+AEgLQAnhUgIhRQgJhthXhPQhXhShvADQAvgGAmAFQAdAEA4ARQB1AlAnB8QAjBygvBxQg/CdgwBJQhLB4hmAoQAsghAyg8g");
	this.shape_52.setTransform(327.7,164.1,1.627,1.627);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#E6E4E1","#F3E5CE","#C6B8B7","#B6A9A9","#948A8B","#797174","#666064","#5B555A","#575257"],[0.141,0.286,0.49,0.518,0.576,0.643,0.706,0.773,0.843],-3.9,87,1.9,-79.4).s().p("Egl1ALPQlzgziTgTQj1ggg+AAQkoAAotiGQkdhEkfhRQhygXhqg8QiRhSABhjQABg9B1g1QBggtBLgGQCVgKDqhUQB2gqB3gvQAXgEDFhOQDGhNAkgIQBLgQCFgeQBsgZAvgJQA2gKBFgnIBQgvIBtgsQBYghARAHQAHADAQAMQAGAGAOgIQAXgNB1gpQB8gsAQAFIAmAPQAbALAWAEQAPACB5grQB3grAfAHQAhAIAPAKQATAMAKADQARAGCcgVQCggVAKACQAOACAZAVQAcAXARAFQAbAJA8gBQBCAAAogLQAugNBXAAQBcAAAWAQIAsAjQAbASAZAAQAVAAB7gLQCDgLAggCQAsgCAPAKQADADASAbQAMATAvAMQAuALAwgCQAfgCBRgTQBKgRAVABQARABAuAnQAvAoA5ADQAaACCPgCQCFAAAWAPQATAMAmAfQAjAZAcAEQAXADB2gLQBvgKAMAFQAJAEAvAmQAsAkANACQAGABBmgIQBegIALAIQAKAHAKAUQAKAUAKAGQAJAGBuACQBrABALALQAJAKgDAbQgDAWAOABQAPACB/gFICagHQAaAAAKAMIAWAbQAUAPBkAHQBjAGAzgKQApgICJAOQBIAIBqANQAmADB0AzQCQA+AgAKQBzAnELAbQEqAeCNgdQCAgbCyhPQBfgqCAg+QE8iFCFgzQFKh/CagWQCigYByASQAtAHAWAMQAUALgKAJQgEAEg9AFQhUAHg/ALQjuApi0B9Ik1DZQkBC8hQBnQgzBFgZAeQgqA0ggATQg4AihQARQhyAZhpgaQh5geigADQiiAEifAlQlgBShRAQQltBHmFAbQhOAGhaAeQhuAkgSAEQnDBXu+A6QrgAtm7ABIgFAAQj2AArshlg");
	this.shape_53.setTransform(819.3,137.1,1.627,1.627);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_1},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1638.7,270.7);


(lib.Sturgeon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sturgeon-midFin
	this.instance = new lib.sturgeonmidFin("synched",0);
	this.instance.setTransform(973.3,227.7,1,1,0,0,0,24.8,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:68.4,regY:55.3,skewX:-0.1,x:1017,y:277.9},0).wait(1).to({skewX:-0.3,skewY:0.1,x:1017.1,y:278},0).wait(1).to({skewX:-0.4,x:1017.3},0).wait(1).to({scaleY:1,skewX:-0.5,x:1017.4,y:278.1},0).wait(1).to({skewX:-0.7,skewY:0.2,x:1017.5,y:278.2},0).wait(1).to({skewX:-0.8,x:1017.6,y:278.3},0).wait(1).to({skewX:-1,x:1017.7,y:278.4},0).wait(1).to({scaleX:1,skewX:-1.1,skewY:0.3,x:1017.8},0).wait(1).to({skewX:-1.2,x:1018,y:278.5},0).wait(1).to({skewX:-1.4,y:278.6},0).wait(1).to({skewX:-1.5,skewY:0.4,x:1018.2},0).wait(1).to({scaleY:1,skewX:-1.6,x:1018.3,y:278.7},0).wait(1).to({skewX:-1.8,x:1018.4,y:278.8},0).wait(1).to({skewX:-1.9,skewY:0.5,x:1018.5},0).wait(1).to({skewX:-2,x:1018.7,y:279},0).wait(1).to({skewX:-1.9,x:1018.5,y:278.8},0).wait(1).to({skewX:-1.8,skewY:0.4},0).wait(1).to({skewX:-1.7,x:1018.4,y:278.7},0).wait(1).to({skewX:-1.6,x:1018.3},0).wait(1).to({scaleY:1,skewX:-1.5,x:1018.2,y:278.6},0).wait(1).to({skewX:-1.4,skewY:0.3,x:1018},0).wait(1).to({skewX:-1.3,y:278.5},0).wait(1).to({skewX:-1.1,x:1017.9},0).wait(1).to({scaleX:1,skewX:-1,x:1017.8,y:278.4},0).wait(1).to({skewX:-0.9,skewY:0.2,x:1017.7,y:278.3},0).wait(1).to({skewX:-0.8,x:1017.5},0).wait(1).to({skewX:-0.7,y:278.2},0).wait(1).to({skewX:-0.6,skewY:0.1,x:1017.4,y:278.1},0).wait(1).to({scaleY:1,skewX:-0.5,x:1017.3},0).wait(1).to({skewX:-0.3,x:1017.2,y:278},0).wait(1).to({skewX:-0.2,x:1017.1,y:277.9},0).wait(1).to({skewX:-0.1,skewY:0,x:1017},0).wait(1).to({skewX:0,x:1016.9,y:277.8},0).wait(1));

	// sturgeon-frontFin
	this.instance_1 = new lib.sturgeonfrontFin("synched",0);
	this.instance_1.setTransform(342.4,217.5,1,1,0,0,0,0.7,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:89.3,regY:80.9,skewX:0.3,skewY:0.4,x:430.6,y:298.2},0).wait(1).to({skewX:0.6,skewY:0.8,x:430.2,y:298.8},0).wait(1).to({skewX:0.9,skewY:1.2,x:429.7,y:299.4},0).wait(1).to({skewX:1.2,skewY:1.6,x:429.3,y:300.1},0).wait(1).to({skewX:1.5,skewY:2,x:428.8,y:300.6},0).wait(1).to({skewX:1.8,skewY:2.4,x:428.3,y:301.3},0).wait(1).to({skewX:2.1,skewY:2.8,x:427.9,y:301.9},0).wait(1).to({skewX:2.4,skewY:3.2,x:427.4,y:302.5},0).wait(1).to({skewX:2.7,skewY:3.6,x:427,y:303.1},0).wait(1).to({skewX:3,skewY:4,x:426.5,y:303.7},0).wait(1).to({skewX:3.4,skewY:4.4,x:426,y:304.2},0).wait(1).to({skewX:3.7,skewY:4.8,x:425.6,y:304.8},0).wait(1).to({skewX:4,skewY:5.2,x:425.1,y:305.4},0).wait(1).to({scaleX:1,skewX:4.3,skewY:5.6,x:424.6,y:306},0).wait(1).to({skewX:4.6,skewY:6,x:424.1,y:306.6},0).wait(1).to({skewX:4.3,skewY:5.7,x:424.5,y:306.1},0).wait(1).to({skewX:4.1,skewY:5.3,x:424.9,y:305.6},0).wait(1).to({scaleX:1,skewX:3.8,skewY:5,x:425.3,y:305.1},0).wait(1).to({skewX:3.6,skewY:4.7,x:425.7,y:304.7},0).wait(1).to({skewX:3.3,skewY:4.3,x:426.1,y:304.1},0).wait(1).to({skewX:3,skewY:4,x:426.5,y:303.7},0).wait(1).to({skewX:2.8,skewY:3.7,x:426.9,y:303.2},0).wait(1).to({skewX:2.5,skewY:3.3,x:427.2,y:302.7},0).wait(1).to({skewX:2.3,skewY:3,x:427.6,y:302.2},0).wait(1).to({skewX:2,skewY:2.7,x:428.1,y:301.7},0).wait(1).to({skewX:1.8,skewY:2.3,x:428.4,y:301.2},0).wait(1).to({skewX:1.5,skewY:2,x:428.8,y:300.6},0).wait(1).to({skewX:1.3,skewY:1.7,x:429.2,y:300.1},0).wait(1).to({skewX:1,skewY:1.3,x:429.5,y:299.7},0).wait(1).to({skewX:0.8,skewY:1,x:429.9,y:299.1},0).wait(1).to({skewX:0.5,skewY:0.7,x:430.3,y:298.6},0).wait(1).to({skewX:0.3,skewY:0.3,x:430.7,y:298.1},0).wait(1).to({skewX:0,skewY:0,x:431,y:297.6},0).wait(1));

	// body
	this.instance_2 = new lib.sturgeonbody("synched",0);
	this.instance_2.setTransform(0,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:819.3,regY:135.3,x:819.3,y:135.1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// sturgeon-backFin
	this.instance_3 = new lib.sturgeonbackFin("synched",0);
	this.instance_3.setTransform(1218.3,194.8,0.859,1.019,0,-2.5,1.5,13.8,8.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:68.5,regY:46.4,skewX:-2,skewY:1.6,x:1266.5,y:234.4},0).wait(1).to({skewX:-1.4,x:1266.1},0).wait(1).to({skewX:-0.8,x:1265.6,y:234.5},0).wait(1).to({skewX:-0.3,x:1265.1},0).wait(1).to({skewX:0.3,x:1264.7},0).wait(1).to({skewX:0.9,x:1264.2},0).wait(1).to({skewX:1.5,x:1263.7},0).wait(1).to({skewX:2.1,skewY:1.5,x:1263.2,y:234.4},0).wait(1).to({skewX:2.7,x:1262.7},0).wait(1).to({skewX:3.2,x:1262.2},0).wait(1).to({skewX:3.8,x:1261.8},0).wait(1).to({skewX:4.4,x:1261.3,y:234.3},0).wait(1).to({scaleY:1.02,skewX:5,x:1260.8},0).wait(1).to({skewX:5.6,x:1260.3},0).wait(1).to({skewX:6.2,x:1259.8,y:234.2},0).wait(1).to({skewX:5.7,x:1260.2},0).wait(1).to({skewX:5.2,x:1260.6,y:234.3},0).wait(1).to({scaleY:1.02,skewX:4.7,x:1261},0).wait(1).to({skewX:4.2,x:1261.4,y:234.4},0).wait(1).to({skewX:3.7,x:1261.8},0).wait(1).to({skewX:3.2,x:1262.2},0).wait(1).to({skewX:2.8,x:1262.6},0).wait(1).to({skewX:2.3,x:1263.1},0).wait(1).to({skewX:1.8,skewY:1.6,x:1263.5},0).wait(1).to({skewX:1.3,x:1263.9,y:234.5},0).wait(1).to({skewX:0.8,x:1264.3},0).wait(1).to({skewX:0.3,x:1264.7},0).wait(1).to({skewX:-0.2,x:1265.1},0).wait(1).to({skewX:-0.6,x:1265.5},0).wait(1).to({skewX:-1.1,x:1265.8,y:234.4},0).wait(1).to({skewX:-1.6,x:1266.2},0).wait(1).to({skewX:-2.1,x:1266.6},0).wait(1).to({skewX:-2.6,x:1267},0).wait(1));

	// sturgeon-TailFin
	this.instance_4 = new lib.sturgeonTailFin("synched",0);
	this.instance_4.setTransform(1496.7,154.9,1,1,0,0,0,136.2,114.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:139,regY:114.1,scaleY:0.99,skewX:0.4,x:1498.7,y:153.4},0).wait(1).to({scaleY:0.99,skewX:0.9,x:1497.9,y:152.6},0).wait(1).to({scaleY:0.98,skewX:1.3,x:1497.1,y:151.9},0).wait(1).to({scaleY:0.97,skewX:1.8,x:1496.3,y:151.1},0).wait(1).to({scaleY:0.97,skewX:2.2,x:1495.5,y:150.3},0).wait(1).to({scaleY:0.96,skewX:2.6,x:1494.6,y:149.5},0).wait(1).to({scaleY:0.95,skewX:3.1,x:1493.8,y:148.7},0).wait(1).to({scaleY:0.95,skewX:3.5,x:1493,y:148},0).wait(1).to({scaleY:0.94,skewX:3.9,x:1492.2,y:147.2},0).wait(1).to({scaleY:0.94,skewX:4.4,x:1491.4,y:146.4},0).wait(1).to({scaleY:0.93,skewX:4.8,x:1490.6,y:145.6},0).wait(1).to({scaleY:0.92,skewX:5.3,x:1489.8,y:144.8},0).wait(1).to({scaleY:0.92,skewX:5.7,x:1489,y:144.1},0).wait(1).to({scaleY:0.91,skewX:6.1,x:1488.1,y:143.2},0).wait(1).to({scaleY:0.9,skewX:6.6,x:1487.3,y:142.5},0).wait(1).to({scaleY:0.91,skewX:6.2,x:1488,y:143.1},0).wait(1).to({scaleY:0.91,skewX:5.8,x:1488.7,y:143.8},0).wait(1).to({scaleY:0.92,skewX:5.5,x:1489.4,y:144.4},0).wait(1).to({scaleY:0.92,skewX:5.1,x:1490,y:145.1},0).wait(1).to({scaleY:0.93,skewX:4.8,x:1490.7,y:145.7},0).wait(1).to({scaleY:0.94,skewX:4.4,x:1491.4,y:146.4},0).wait(1).to({scaleY:0.94,skewX:4,x:1492.1,y:147},0).wait(1).to({scaleY:0.95,skewX:3.7,x:1492.7,y:147.7},0).wait(1).to({scaleY:0.95,skewX:3.3,x:1493.4,y:148.3},0).wait(1).to({scaleY:0.96,skewX:2.9,x:1494.1,y:149},0).wait(1).to({scaleY:0.96,skewX:2.6,x:1494.8,y:149.7},0).wait(1).to({scaleY:0.97,skewX:2.2,x:1495.5,y:150.3},0).wait(1).to({scaleY:0.97,skewX:1.8,x:1496.1,y:151},0).wait(1).to({scaleY:0.98,skewX:1.5,x:1496.8,y:151.6},0).wait(1).to({scaleY:0.98,skewX:1.1,x:1497.5,y:152.2},0).wait(1).to({scaleY:0.99,skewX:0.7,x:1498.1,y:152.9},0).wait(1).to({scaleY:1,skewX:0.4,x:1498.8,y:153.5},0).wait(1).to({scaleY:1,skewX:0,x:1499.5,y:154.2},0).wait(1));

	// sturgeon-TopFin
	this.instance_5 = new lib.sturgeonTopFin("synched",0);
	this.instance_5.setTransform(1176.6,111.2,1,1,0,0,0,84,100.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:89.7,regY:54.9,skewX:0.4,x:1182.6,y:65.3},0).wait(1).to({scaleY:1,skewX:0.8,x:1183},0).wait(1).to({skewX:1.2,x:1183.4},0).wait(1).to({skewX:1.6,x:1183.8},0).wait(1).to({scaleY:1,skewX:2,x:1184.2},0).wait(1).to({skewX:2.4,x:1184.5},0).wait(1).to({scaleY:1,skewX:2.8,x:1184.9},0).wait(1).to({skewX:3.2,x:1185.3},0).wait(1).to({skewX:3.6,x:1185.7},0).wait(1).to({scaleY:1,skewX:4,x:1186.1},0).wait(1).to({skewX:4.4,x:1186.4},0).wait(1).to({skewX:4.8,x:1186.8},0).wait(1).to({scaleY:1,skewX:5.2,x:1187.2},0).wait(1).to({skewX:5.6,x:1187.6},0).wait(1).to({skewX:6,x:1188},0).wait(1).to({skewX:5.6,x:1187.7},0).wait(1).to({skewX:5.3,x:1187.3},0).wait(1).to({skewX:5,x:1187},0).wait(1).to({scaleY:1,skewX:4.6,x:1186.7},0).wait(1).to({skewX:4.3,x:1186.4},0).wait(1).to({skewX:4,x:1186.1},0).wait(1).to({scaleY:1,skewX:3.6,x:1185.7},0).wait(1).to({skewX:3.3,x:1185.4},0).wait(1).to({skewX:3,x:1185.1},0).wait(1).to({scaleY:1,skewX:2.6,x:1184.8},0).wait(1).to({skewX:2.3,x:1184.5},0).wait(1).to({skewX:2,x:1184.2},0).wait(1).to({skewX:1.7,x:1183.8},0).wait(1).to({scaleY:1,skewX:1.3,x:1183.5},0).wait(1).to({skewX:1,x:1183.2},0).wait(1).to({skewX:0.7,x:1182.9},0).wait(1).to({scaleY:1,skewX:0.3,x:1182.6},0).wait(1).to({skewX:0,x:1182.3,y:65.4},0).wait(1));

	// sturgeon-whiskers
	this.instance_6 = new lib.sturgeonwhiskers("synched",0);
	this.instance_6.setTransform(62.9,184.4,1,1,0,0,0,19.5,29.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:22.4,regY:54.8,scaleY:1,skewX:-0.7,x:66.4,y:210.1},0).wait(1).to({scaleY:1,skewX:-1.3,x:67.1},0).wait(1).to({scaleY:1,skewX:-2,x:67.7,y:210.2},0).wait(1).to({scaleY:1,skewX:-2.7,x:68.3},0).wait(1).to({scaleY:1,skewX:-3.3,x:69},0).wait(1).to({scaleY:1.01,skewX:-4,x:69.6},0).wait(1).to({scaleY:1.01,skewX:-4.7,x:70.3},0).wait(1).to({scaleY:1.01,skewX:-5.3,x:70.9},0).wait(1).to({scaleY:1.01,skewX:-6,x:71.5},0).wait(1).to({scaleY:1.01,skewX:-6.7,x:72.1},0).wait(1).to({scaleY:1.01,skewX:-7.3,x:72.8},0).wait(1).to({scaleY:1.01,skewX:-8,x:73.4},0).wait(1).to({scaleY:1.01,skewX:-8.7,x:74.1,y:210.1},0).wait(1).to({scaleY:1.01,skewX:-9.3,x:74.7},0).wait(1).to({scaleY:1.01,skewX:-10,x:75.4},0).wait(1).to({skewX:-9.4,x:74.8},0).wait(1).to({scaleY:1.01,skewX:-8.9,x:74.3,y:210.2},0).wait(1).to({scaleY:1.01,skewX:-8.3,x:73.8,y:210.1},0).wait(1).to({scaleY:1.01,skewX:-7.8,x:73.2,y:210.2},0).wait(1).to({scaleY:1.01,skewX:-7.2,x:72.7},0).wait(1).to({scaleY:1.01,skewX:-6.7,x:72.1},0).wait(1).to({scaleY:1.01,skewX:-6.1,x:71.7},0).wait(1).to({skewX:-5.5,x:71.1},0).wait(1).to({scaleY:1.01,skewX:-5,x:70.6},0).wait(1).to({scaleY:1.01,skewX:-4.4,x:70},0).wait(1).to({scaleY:1.01,skewX:-3.9,x:69.5},0).wait(1).to({scaleY:1,skewX:-3.3,x:69},0).wait(1).to({scaleY:1,skewX:-2.8,x:68.4},0).wait(1).to({scaleY:1,skewX:-2.2,x:67.9},0).wait(1).to({skewX:-1.7,x:67.4,y:210.1},0).wait(1).to({scaleY:1,skewX:-1.1,x:66.8,y:210.2},0).wait(1).to({scaleY:1,skewX:-0.6,x:66.3,y:210.1},0).wait(1).to({scaleY:1,skewX:0,x:65.8},0).wait(1));

	// sturgeon-midFin
	this.instance_7 = new lib.sturgeonmidFin("synched",0);
	this.instance_7.setTransform(965.5,236.4,1,1,-3.3,0,0,12.6,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:68.4,regY:55.3,rotation:0,skewX:-3.7,skewY:-3.5,x:1023.5,y:267.3},0).wait(1).to({skewX:-4,x:1023.8},0).wait(1).to({skewX:-4.3,x:1024,y:267.2},0).wait(1).to({scaleY:1,skewX:-4.5,x:1024.3},0).wait(1).to({skewX:-4.8,x:1024.6,y:267.3},0).wait(1).to({skewX:-5.1,x:1024.8},0).wait(1).to({skewX:-5.3,x:1025.1,y:267.2},0).wait(1).to({skewX:-5.6,x:1025.3},0).wait(1).to({skewX:-5.9,x:1025.6},0).wait(1).to({scaleY:1,skewX:-6.2,x:1025.9},0).wait(1).to({skewX:-6.4,x:1026.1},0).wait(1).to({skewX:-6.7,x:1026.4,y:267.1},0).wait(1).to({skewX:-7,x:1026.7,y:267.2},0).wait(1).to({skewX:-7.2,x:1027},0).wait(1).to({skewX:-7.5,x:1027.2,y:267.1},0).wait(1).to({skewX:-7.3,x:1027},0).wait(1).to({skewX:-7.1,x:1026.8,y:267.2},0).wait(1).to({skewX:-6.8,x:1026.5},0).wait(1).to({skewX:-6.6,x:1026.3},0).wait(1).to({skewX:-6.4,x:1026.1},0).wait(1).to({skewX:-6.2,x:1025.9},0).wait(1).to({scaleY:1,skewX:-5.9,x:1025.6},0).wait(1).to({skewX:-5.7,x:1025.4},0).wait(1).to({skewX:-5.5,x:1025.2},0).wait(1).to({skewX:-5.3,x:1025},0).wait(1).to({skewX:-5,x:1024.8,y:267.3},0).wait(1).to({skewX:-4.8,x:1024.6},0).wait(1).to({skewX:-4.6,x:1024.3,y:267.2},0).wait(1).to({skewX:-4.4,x:1024.1},0).wait(1).to({scaleY:1,skewX:-4.1,x:1023.9,y:267.3},0).wait(1).to({skewX:-3.9,x:1023.7},0).wait(1).to({skewX:-3.7,x:1023.5},0).wait(1).to({rotation:-3.5,skewX:0,skewY:0,x:1023.3},0).wait(1));

	// sturgeon-frontFin
	this.instance_8 = new lib.sturgeonfrontFin("synched",0);
	this.instance_8.setTransform(348.1,220.5,1,1,-3.3,0,0,-2.4,24.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:89.3,regY:80.9,rotation:0,skewX:-3.5,skewY:-3.3,x:443.1,y:271.3},0).wait(1).to({skewY:-3.1,y:271.7},0).wait(1).to({skewY:-2.9,y:271.9},0).wait(1).to({skewY:-2.8,y:272.2},0).wait(1).to({skewY:-2.6,y:272.5},0).wait(1).to({skewY:-2.4,x:443.2,y:272.8},0).wait(1).to({skewY:-2.2,y:273.1},0).wait(1).to({scaleY:1,skewY:-2.1,y:273.3},0).wait(1).to({skewY:-1.9,y:273.6},0).wait(1).to({skewY:-1.7,y:273.9},0).wait(1).to({skewY:-1.5,y:274.2},0).wait(1).to({skewY:-1.4,x:443.3,y:274.5},0).wait(1).to({skewY:-1.2,y:274.8},0).wait(1).to({skewY:-1,y:275},0).wait(1).to({skewY:-0.8,y:275.4},0).wait(1).to({skewY:-1,y:275.1},0).wait(1).to({skewY:-1.1,y:274.8},0).wait(1).to({skewY:-1.3,y:274.6},0).wait(1).to({skewY:-1.4,x:443.2,y:274.4},0).wait(1).to({skewY:-1.6,y:274.2},0).wait(1).to({skewY:-1.7,y:273.9},0).wait(1).to({skewY:-1.9,y:273.7},0).wait(1).to({skewY:-2,y:273.4},0).wait(1).to({skewY:-2.2,y:273.2},0).wait(1).to({scaleY:1,skewY:-2.3,y:273},0).wait(1).to({skewY:-2.4,y:272.8},0).wait(1).to({skewY:-2.6,x:443.1,y:272.5},0).wait(1).to({skewY:-2.7,y:272.3},0).wait(1).to({skewY:-2.9,y:272},0).wait(1).to({skewY:-3,y:271.8},0).wait(1).to({skewY:-3.2,y:271.6},0).wait(1).to({skewY:-3.3,y:271.3},0).wait(1).to({rotation:-3.5,skewX:0,skewY:0,y:271.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.2,1638.7,378.7);


// stage content:



(lib.FWW_TilesAll_v01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Sturgeon
	this.instance = new lib.Sturgeon("synched",0);
	this.instance.setTransform(1950.1,518.7,1,1,0,0,-1.3,8.9,157.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:819.3,regY:198.2,x:2723.1,y:539.5,startPosition:1},0).wait(1).to({skewY:-1.4,x:2685.8,y:538.3,startPosition:2},0).wait(1).to({x:2648.4,y:537.2,startPosition:3},0).wait(1).to({skewY:-1.5,x:2611.1,y:536.1,startPosition:4},0).wait(1).to({x:2573.8,y:535,startPosition:5},0).wait(1).to({x:2536.4,y:533.8,startPosition:6},0).wait(1).to({scaleX:1,skewY:-1.6,x:2499,y:532.7,startPosition:7},0).wait(1).to({x:2461.7,y:531.6,startPosition:8},0).wait(1).to({skewY:-1.7,x:2424.3,y:530.4,startPosition:9},0).wait(1).to({x:2387,y:529.3,startPosition:10},0).wait(1).to({skewY:-1.8,x:2349.7,y:528.2,startPosition:11},0).wait(1).to({x:2312.3,y:527.1,startPosition:12},0).wait(1).to({x:2274.9,y:525.9,startPosition:13},0).wait(1).to({skewY:-1.9,x:2237.6,y:524.8,startPosition:14},0).wait(1).to({x:2200.2,y:523.7,startPosition:15},0).wait(1).to({skewY:-2,x:2162.9,y:522.5,startPosition:16},0).wait(1).to({x:2125.5,y:521.4,startPosition:17},0).wait(1).to({x:2088.2,y:520.2,startPosition:18},0).wait(1).to({skewY:-2.1,x:2050.8,y:519.1,startPosition:19},0).wait(1).to({x:2013.5,y:518,startPosition:20},0).wait(1).to({skewY:-2.2,x:1976.1,y:516.8,startPosition:21},0).wait(1).to({x:1938.8,y:515.7,startPosition:22},0).wait(1).to({x:1901.4,y:514.6,startPosition:23},0).wait(1).to({skewY:-2.1,x:1864.1,y:516.1,startPosition:24},0).wait(1).to({skewY:-1.9,x:1826.8,y:517.6,startPosition:25},0).wait(1).to({skewY:-1.8,x:1789.5,y:519.1,startPosition:26},0).wait(1).to({skewY:-1.7,x:1752.1,y:520.6,startPosition:27},0).wait(1).to({skewY:-1.5,x:1714.8,y:522.1,startPosition:28},0).wait(1).to({skewY:-1.4,x:1677.4,y:523.6,startPosition:29},0).wait(1).to({skewY:-1.2,x:1640.1,y:525,startPosition:30},0).wait(1).to({skewY:-1.1,x:1602.8,y:526.6,startPosition:31},0).wait(1).to({skewY:-0.9,x:1565.4,y:528,startPosition:32},0).wait(1).to({skewY:-0.8,x:1528.1,y:529.6,startPosition:33},0).wait(1).to({skewY:-0.6,x:1490.7,y:531.1,startPosition:0},0).wait(1).to({skewY:-0.5,x:1453.3,y:532.5,startPosition:1},0).wait(1).to({skewY:-0.3,x:1416,y:534.1,startPosition:2},0).wait(1).to({skewY:-0.2,x:1378.6,y:535.5,startPosition:3},0).wait(1).to({scaleX:1,skewY:-0.1,x:1341.2,y:537,startPosition:4},0).wait(1).to({skewY:0.1,x:1303.8,y:538.5,startPosition:5},0).wait(1).to({skewY:0.2,x:1266.4,y:540,startPosition:6},0).wait(1).to({skewY:0.4,x:1229,y:541.5,startPosition:7},0).wait(1).to({skewY:0.5,x:1191.6,y:543,startPosition:8},0).wait(1).to({skewY:0.7,x:1154.2,y:544.5,startPosition:9},0).wait(1).to({skewY:0.8,x:1116.8,y:546,startPosition:10},0).wait(1).to({skewY:1,x:1079.4,y:547.5,startPosition:11},0).wait(1).to({skewY:1.1,x:1041.9,y:549,startPosition:12},0).wait(1).to({skewY:1,x:1042.3,y:545.7,startPosition:13},0).wait(1).to({skewY:0.9,x:1042.6,y:542.5,startPosition:14},0).wait(1).to({skewY:0.8,x:1043,y:539.2,startPosition:15},0).wait(1).to({x:1043.3,y:536,startPosition:16},0).wait(1).to({skewY:0.7,x:1043.7,y:532.8,startPosition:17},0).wait(1).to({skewY:0.6,x:1044,y:529.6,startPosition:18},0).wait(1).to({skewY:0.5,x:1044.3,y:526.3,startPosition:19},0).wait(1).to({skewY:0.4,x:1044.7,y:523.1,startPosition:20},0).wait(1).to({skewY:0.3,x:1045,y:519.8,startPosition:21},0).wait(1).to({skewY:0.2,x:1045.3,y:516.6,startPosition:22},0).wait(1).to({skewY:0.1,x:1045.6,y:513.3,startPosition:23},0).wait(1).to({x:1045.9,y:510.1,startPosition:24},0).wait(1).to({skewY:0,x:1046.3,y:506.8,startPosition:25},0).wait(1).to({skewY:-0.1,x:1046.6,y:503.6,startPosition:26},0).wait(1).to({skewY:-0.2,x:1046.9,y:500.3,startPosition:27},0).wait(1).to({skewY:-0.3,x:1047.2,y:497.1,startPosition:28},0).wait(1).to({skewY:-0.4,x:1047.5,y:493.9,startPosition:29},0).wait(1).to({skewY:-0.5,x:1047.9,y:490.7,startPosition:30},0).wait(1).to({skewY:-0.6,x:1048.2,y:487.4,startPosition:31},0).wait(1).to({x:1048.5,y:484.2,startPosition:32},0).wait(1).to({skewY:-0.7,x:1048.8,y:480.9,startPosition:33},0).wait(1).to({skewY:-0.8,x:1049.1,y:477.7,startPosition:0},0).wait(1).to({skewY:-0.9,x:1049.4,y:474.4,startPosition:1},0).wait(1).to({skewY:-1,x:1049.7,y:471.2,startPosition:2},0).wait(1).to({skewY:-1.1,x:1050,y:467.9,startPosition:3},0).wait(1).to({skewY:-1.2,x:1050.3,y:464.7,startPosition:4},0).wait(1).to({x:1050.5,y:461.4,startPosition:5},0).wait(1).to({skewY:-1.3,x:1050.7,y:463.2,startPosition:6},0).wait(1).to({y:464.9,startPosition:7},0).wait(1).to({x:1050.8,y:466.6,startPosition:8},0).wait(1).to({x:1050.9,y:468.3,startPosition:9},0).wait(1).to({x:1051,y:470,startPosition:10},0).wait(1).to({x:1051.1,y:471.8,startPosition:11},0).wait(1).to({skewY:-1.4,x:1051.2,y:473.5,startPosition:12},0).wait(1).to({x:1051.3,y:475.2,startPosition:13},0).wait(1).to({x:1051.4,y:476.9,startPosition:14},0).wait(1).to({x:1051.5,y:478.6,startPosition:15},0).wait(1).to({x:1051.6,y:480.4,startPosition:16},0).wait(1).to({x:1051.7,y:482.1,startPosition:17},0).wait(1).to({skewY:-1.5,y:483.8,startPosition:18},0).wait(1).to({x:1051.8,y:485.5,startPosition:19},0).wait(1).to({x:1051.9,y:487.2,startPosition:20},0).wait(1).to({x:1052,y:489,startPosition:21},0).wait(1).to({x:1052.1,y:490.7,startPosition:22},0).wait(1).to({x:1052.2,y:492.4,startPosition:23},0).wait(1).to({skewY:-1.6,x:1052.3,y:494.1,startPosition:24},0).wait(1).to({x:1052.4,y:495.8,startPosition:25},0).wait(1).to({y:497.6,startPosition:26},0).wait(1).to({x:1052.6,y:499.3,startPosition:27},0).wait(1).to({y:501,startPosition:28},0).wait(1).to({x:1052.7,y:502.7,startPosition:29},0).wait(1).to({skewY:-1.7,x:1052.8,y:504.4,startPosition:30},0).wait(1).to({skewY:-1.6,x:1025.8,y:508.2,startPosition:31},0).wait(1).to({skewY:-1.5,x:998.8,y:512,startPosition:32},0).wait(1).to({skewY:-1.4,x:971.8,y:515.8,startPosition:33},0).wait(1).to({skewY:-1.3,x:944.8,y:519.6,startPosition:0},0).wait(1).to({skewY:-1.2,x:917.8,y:523.4,startPosition:1},0).wait(1).to({skewY:-1.1,x:890.8,y:527.2,startPosition:2},0).wait(1).to({skewY:-1,x:863.7,y:531,startPosition:3},0).wait(1).to({skewY:-0.9,x:836.8,y:534.8,startPosition:4},0).wait(1).to({skewY:-0.8,x:809.8,y:538.6,startPosition:5},0).wait(1).to({skewY:-0.7,x:782.8,y:542.4,startPosition:6},0).wait(1).to({skewY:-0.6,x:755.7,y:546.2,startPosition:7},0).wait(1).to({skewY:-0.5,x:728.7,y:550.1,startPosition:8},0).wait(1).to({skewY:-0.4,x:701.7,y:553.8,startPosition:9},0).wait(1).to({skewY:-0.3,x:674.6,y:557.6,startPosition:10},0).wait(1).to({skewY:-0.2,x:647.6,y:561.5,startPosition:11},0).wait(1).to({skewY:-0.1,x:620.6,y:565.3,startPosition:12},0).wait(1).to({skewY:0,x:593.5,y:569,startPosition:13},0).wait(1).to({skewY:0.1,x:566.5,y:572.8,startPosition:14},0).wait(1).to({skewY:0.2,x:539.5,y:576.7,startPosition:15},0).wait(1).to({skewY:0.3,x:512.4,y:580.5,startPosition:16},0).wait(1).to({skewY:0.4,x:485.3,y:584.2,startPosition:17},0).wait(1).to({skewY:0.5,x:458.3,y:588.1,startPosition:18},0).wait(1).to({x:431.2,y:591.9,startPosition:19},0).wait(1).to({skewY:0.6,x:404.2,y:595.7,startPosition:20},0).wait(1).to({skewY:0.7,x:372,y:595.5,startPosition:21},0).wait(1).to({skewY:0.8,x:339.8,y:595.4,startPosition:22},0).wait(1).to({skewY:0.9,x:307.6,y:595.2,startPosition:23},0).wait(1).to({skewY:1,x:275.4,y:595,startPosition:24},0).wait(1).to({skewY:1.1,x:243.2,y:594.9,startPosition:25},0).wait(1).to({skewY:1.2,x:211,y:594.7,startPosition:26},0).wait(1).to({skewY:1.3,x:178.7,y:594.5,startPosition:27},0).wait(1).to({skewY:1.4,x:146.6,y:594.4,startPosition:28},0).wait(1).to({skewY:1.5,x:114.3,y:594.2,startPosition:29},0).wait(1).to({skewY:1.6,x:82.1,y:594.1,startPosition:30},0).wait(1).to({skewY:1.7,x:49.9,y:593.9,startPosition:31},0).wait(1).to({skewY:1.8,x:17.7,y:593.8,startPosition:32},0).wait(1).to({skewY:1.9,x:-14.6,y:593.6,startPosition:33},0).wait(1).to({skewY:2,x:-46.8,y:593.4,startPosition:0},0).wait(1).to({skewY:2.1,x:-79,y:593.3,startPosition:1},0).wait(1).to({x:-111.2,y:591.8,startPosition:2},0).wait(1).to({x:-143.4,y:590.3,startPosition:3},0).wait(1).to({x:-175.6,y:588.8,startPosition:4},0).wait(1).to({x:-207.7,y:587.3,startPosition:5},0).wait(1).to({x:-239.9,y:585.8,startPosition:6},0).wait(1).to({x:-272.1,y:584.2,startPosition:7},0).wait(1).to({x:-304.3,y:582.7,startPosition:8},0).wait(1).to({x:-336.5,y:581.2,startPosition:9},0).wait(1).to({x:-368.7,y:579.7,startPosition:10},0).wait(1).to({x:-400.9,y:578.2,startPosition:11},0).wait(1).to({x:-433.1,y:576.7,startPosition:12},0).wait(1).to({x:-465.2,y:575.2,startPosition:13},0).wait(1).to({x:-497.4,y:573.7,startPosition:14},0).wait(1).to({x:-529.6,y:572.2,startPosition:15},0).wait(1).to({x:-561.8,y:570.7,startPosition:16},0).wait(1).to({x:-594,y:569.2,startPosition:17},0).wait(1).to({x:-626.2,y:567.6,startPosition:18},0).wait(1).to({x:-658.4,y:566.1,startPosition:19},0).wait(1).to({x:-690.6,y:564.6,startPosition:20},0).wait(1).to({x:-722.7,y:563.1,startPosition:21},0).wait(1).to({x:-754.9,y:561.6,startPosition:22},0).wait(1).to({x:-787.1,y:560.1,startPosition:23},0).wait(1).to({x:-819.3,y:558.6,startPosition:24},0).wait(1).to({x:-851.5,y:557.1,startPosition:25},0).to({_off:true},1).wait(78));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2901.2,884.1,1638.5,384.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;