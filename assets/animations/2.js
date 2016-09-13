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


(lib.RsmAntenea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.141,0.31,0.651,0.804,1,1],0,10.1,0,-10).s().p("ACGBeQgkgHgygRIhBgYQhugkgigOQhYgpgYg2QAUAHAuAWQAqAVAZAHQAZAHAoAGIBAAKQAkAHBhAXQBYARAtgUIATAwQgWAshAAAQgYAAgegGg");
	this.shape.setTransform(7.5,2.7,0.271,0.271);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15,5.5);


(lib.RlgAntenawiggle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-0.5,13.6,0.4,-13.3).s().p("AAdBgQhJgOhogLQg/AAgcgDQgzgHgLglQgEgOgDgfQgCgfgHgRIgRgiQgJgTAEgTQArgHA+AVQBcAeAIACQA3AKBHAEQArACBSgBQBEAAAlAJQA5ANAhAlQAPARAIAdQAIAggDAcQgJBHhBgbIg+AOQhPgchggTg");
	this.shape.setTransform(52.6,3.9,0.271,0.271);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-0.3,9.6,0.3,-8.5).s().p("AlKBUQAYgogegTQgrgSgPgQQAxgvBkgSQBBgLBmAAQAtAAA7ADIBqAGQAaACBKANQBAALAjgCIAiBBQAbAHACAZQADAXgXAMQgMAHgjgFIgwgHQgqgEg6AAIhlAAQg2AAiXAKQhQAFg7AAQgkAAgcgCg");
	this.shape_1.setTransform(35.2,2.4,0.271,0.271);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-1.5,45.7,1.6,-45.5).s().p("Al1CUQBChVBuhbQCChoBBg3QAjggA8gnQBEgqAigXQBEgxAsgbQBSgxAjALIBIAAQAhARhKAvQgmAZhAAgQhlA6hVA5QggAVg/A5Qg7A2glAXQhmA8hmBIQhbBBhWBUQgVAUgOAZQgIAQgOAjIgRA7QgLAngPALQAjinBhh9g");
	this.shape_2.setTransform(13.8,14.2,0.271,0.271);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61.9,26.2);


(lib.Rleg03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-7.7,14.6,6.7,-15).s().p("Ag6CAIg7gCQgLhAAthKQAohGA5gnQAYgQAZgDQAfgDARAWQARAVgPAZQgWAcgJAOQgGALgdBQQgWA9gcAWQgXgKgggDg");
	this.shape.setTransform(6.4,26.3,0.27,0.27);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-10.1,18.5,9.6,-21.8).s().p("AhiB2QgQg5AYg9QAbhFAxhDQBBhaA0AMQAJAygbBBQgTAtgnA4QggAygNA0QgKAmgFBLQgygsgPg3g");
	this.shape_1.setTransform(2.8,34.3,0.27,0.27);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-7.2,15.4,8.3,-16.5).s().p("AhNB/Ig2gKQgngJgJgJQggggAvg2QArguBTgrQBSgrBBgIQBJgKAKArQAEASgGAZQgFAZgLAOQgUAZg8AfQhGAkgTAQQgaAZgKAEQgKAFgOAAQgKAAgMgDg");
	this.shape_2.setTransform(11.1,21,0.27,0.27);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-7.2,15.4,8.3,-16.5).s().p("AhNB/Ig2gKQgngJgJgJQggggAvg2QArguBTgrQBSgrBBgIQBJgKAKArQAEASgGAZQgFAZgLAOQgUAZg8AfQhGAkgTAQQgaAZgKAEQgKAFgOAAQgKAAgMgDg");
	this.shape_3.setTransform(28.1,3.3,0.595,0.537,-30,0,0,16.3,-5.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29.9,40.2);


(lib.Rleg02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-9.4,15,5.2,-14.9).s().p("AgICuIgQgsQgKgdgKgOQgdgpgKhzQgMh6AlgFQAfgFAnBCQA5BcADADQAZAbgSBMQgQBHghAxQgKAPgJAAQgLAAgIgYg");
	this.shape.setTransform(14.5,28.8,0.27,0.27);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-6.6,7.6,4.9,-16.1).s().p("ABICDIhzgxQhigpgvgdQg2gfgPgoQgNgjAVgVQAUgUgDAEQgIAPAKgBQAKAABMAEQBTADAugFQA7gIBlAXQBpAZAKAcQAJAZgWAJQgnAKgdAKQgcAMggBCQgXAwgSAAIgGgCg");
	this.shape_1.setTransform(9.3,24.8,0.27,0.27);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-8,13.6,4.2,-11.3).s().p("AhPCHQgXgGgHg/QgHg3AJg3QAFgigFgaQgCgMALgFQBAgbAuAWQAbAMAmAiQAcAUAHA7QAGA5gWAWQgWAWhBAVQgvAQgaAAQgJAAgGgCg");
	this.shape_2.setTransform(4.2,19.8,0.27,0.27);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-15.6,33.4,15.8,-31.1).s().p("AgLGFQhkgUhdhHQgbgWgSgfQgSgggEgjQgFgzAyjyQA1kGAkgMQBLgYCkBMQBGAgAtAjQAxAlgCAaQgBAUAHCbQAGCGgLA4QgNA/hABPQg1BBgjAUQgSALgiAAQgaAAghgHg");
	this.shape_3.setTransform(7.3,10.7,0.27,0.27);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-11.9,25.6,12.1,-23.5).s().p("AhVDrIA1iFQAbhEAFghIAIiFQAGhmAbgfQAQgSAMBBIASCCQAKBFgFAcQgIArgrA/Qg3BTgsAvQgYAZgHAAQgJAAANgjg");
	this.shape_4.setTransform(14.5,37.9,0.27,0.27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17.1,45.2);


(lib.Rleg01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-8.6,16.7,7.7,-16.7).s().p("Aj6BTQgcgjA+gqQA2giBogdQBigdBagGQBhgHAgAXQgRASglAHIg+AGQg1AHgoALQgvAMgmAUQg/AqgsAXQgxAZgdAAQgUAAgKgMg");
	this.shape.setTransform(7.4,21.3,0.27,0.27);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-5.4,12.2,6.1,-11.6).s().p("AilBDQhMgnAlgjQAbgaBKgRQB7gdByAAIA1AiQADAHAJAIQAKAIACAEQAPAbgRAIQgFACgtAGQgVADhaAVQhDATgmAHQgZAFgVAAQglAAgZgNg");
	this.shape_1.setTransform(15.6,18.6,0.27,0.27);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-7.2,14.1,6.1,-13.2).s().p("ABbBmIhUgHQgXgBgjACIg7AEQgqACgPgHQgLgGgYgfQg0gygQgVQgcgoA7gaQBcgpCOAcQAkAHBNASQBFAPAuABIA5A3QgBBXhjALQgQACgVAAQgXAAgdgCg");
	this.shape_2.setTransform(25.6,17,0.27,0.27);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-4.8,8.5,4.4,-10.3).s().p("AgvBTQgmgXgNgaQgOgaASglQAWgwgBgWIBxgFQAXATAgASQASASgMAxQgaBng7ACIgDAAQgYAAgkgWg");
	this.shape_3.setTransform(33.1,15.7,0.27,0.27);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-0.5,6.6,3.2,-1).s().p("AAkBJQgXgBgGgCQgMgEgEgPQgEgQgRgbQgTgdgOgEIBLgwQAMALAUAqQATAoABARQABAUgFAHQgFAKgQAAIgDgBg");
	this.shape_4.setTransform(30.6,7.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-6.3,10.5,4.5,-11.8).s().p("Ag4ALQAGg3ArhBQgFgBgBgEIgDgFIAagKQAGADAXAHQAUAKgCAXQgBAMgVAUQgaAYgDAGQgQAbgDAtIACBSQg0gvAHhIg");
	this.shape_5.setTransform(1.6,25.7,0.27,0.27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,37.1,29.2);


(lib.LsmAntena = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.141,0.31,0.651,0.804,1,1],0,22.7,0,-22.6).s().p("AAlCoQgZgbgdgrIgog6QhGhcgSgfQgxhUALg6QAMARAaAtQAWApAQAUQARAUAdAbIAvAuQAYAaBBBMQA+BAAxAKIgMAyQgRAJgSAAQguAAg4g6g");
	this.shape.setTransform(5,6.2,0.271,0.271);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10.1,12.4);


(lib.LlgAntenawiggle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-6.9,9.8,4.7,-7.4).s().p("ACjDlIg6gNQg2g5hGg3Qg6gshTg0Qg0gXgXgPQgogaAHgmQACgNAMgdQALgcABgRIAAgkQABgUALgOQAmALAsArQA/BAAIAFQApAgA4AgQAhASBKAkQA4AaAdAXQAqAiAMAtQAOAygkA2QgUAegVAAQgTAAgVgXg");
	this.shape.setTransform(53.5,13.1,0.27,0.27);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-6,8.1,6,-9.6).s().p("AD2C4IglgaQgigVgwgYIhVgqQgrgWiFg0Qhugug+gkQAlgYgSgcQgcghgFgWQA9gUBbAaQA6ARBYAqQAsAXB/BJQAVAMA6AoQAwAkAfANIAABHQAUARgIAWQgIAVgYABIgBAAQgNAAgbgSg");
	this.shape_1.setTransform(39.3,5.5,0.27,0.27);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-26.5,42.3,26.9,-36.9).s().p("Al1gBQBbguCEgiQBLgUCZgkQAtgLBCgIIBxgOIB+gSQBagIAZAXIA8AeQAUAchRAKIhuAGQhwAIhdANQgjAFhNAXQhIAVgrAEQhwALhxARQhkARhwAmQgZAIgWAQQgOAKgbAYIgmArQgbAdgQAEQBjiACGhBg");
	this.shape_2.setTransform(16.4,5.5,0.27,0.27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60.8,20);


(lib.guide = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bkgrtiles, null, new cjs.Matrix2D(2.199,0,0,2.199,-1116.3,-823.4)).s().p("EikFA2PMAAAhsdMFILAABMAAAAgDMAAAA0AQAAMMgHMNg");
	this.shape.setTransform(0,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1050.2,-346.8,2100.6,694.2);


(lib.Path_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E4E1E").s().p("AhEBgQBUhQAHgNQAdgxAAgvQAAgjgTg7IBkBuQgFAMAAAbQgBAfgDAKQgMAtguAtQgoApgzAXQgmAQhFAPQgHgYBHhEg");
	this.shape.setTransform(13.4,18.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,26.8,37.7);


(lib.Path_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E4E1E").s().p("AAVCFQACglgDgUQgEgZgQghIgZg2QgghHgEgPQgKgyAtgRIAOAFQAGAgAhA+QAhA6ADAoQADAxgKAuQgLA2gYAhQgBgPABgqg");
	this.shape.setTransform(6.4,19);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12.8,38.1);


(lib.Path_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E4E1E").s().p("AB4DMQhkgBhSgMQgQgCgtgVQgygXgpgaQhzhJA5ggIAThFQAOgIAZgiQAdgoAMgKQApglA3gPQAvgMA9ARQAgAJBIAeQAcAMBNAcQA9AegKAsQgEAOgQAhQgOAdgBAWQgBAPAQAuQANAngJAUQgMAch+AAIgRgBg");
	this.shape.setTransform(29.2,20.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,0,58.6,41);


(lib.Path_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E4E1E").s().p("AgZF6QgcgKg2gxQgtgogXgeQgzg7gbglQgzhDAAgmQgBhaAuhHQA7hHAZgnQAVgfCbhGQCdhFAmAGQAfAEAkC1QATBgAVCTQALBAgoCDQgnCDggALQggALhTAAQhSAAgfgLg");
	this.shape.setTransform(30.6,38.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61.2,77.9);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgyBzQgogigNg6QgOg4AWgvQAVgwArgKQAqgKAoAiQAoAhANA6QANA4gVAwQgVAwgsAKQgJADgKAAQgfAAgfgbg");
	this.shape.setTransform(11,14.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22,28.5);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E4E1E").s().p("AFJFSQghgKgagXQgNgNgdglQglgwhDhCQhehbgRgTQg3g7gcgbQgvgugsghIgtggQgagSgVgLQgNgGgfgFIgzgKQg7gRAIgyQAGghAmgRQAcgMAoAAQAwgBAsAXQAgAQAuAnQAmAgBJA5QBLA7AjAdQCTB4AsAwQBjBuAGBrQACAngPAKQgGADgLAAQgQAAgZgIg");
	this.shape.setTransform(40.1,34.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80.2,69.4);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E4E1E").s().p("ABTD6QgYgjgPg3QgMgtgcg4QgOghgmhAQgMgUgWgfIgjgxIgagyQgQgfgPgKIAYgiQAEgQAigDQAggCAVALQATAKAUAaQAIAMATAiQAbAtAWBFIAlBxQAJAYAyBeQAnBWgbAaQgSARgRAAQgYAAgWghg");
	this.shape.setTransform(17.5,28.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35.1,56.7);


(lib.RlgAntena = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.RlgAntenawiggle();
	this.instance.setTransform(61.9,5.6,1,1,0,0,0,61.9,5.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:30.9,regY:13.1,rotation:-6.1,x:32,y:16.4},0).wait(1).to({rotation:-12.1,x:33.2,y:19.4},0).wait(1).to({rotation:-18.2,x:34.8,y:22.4},0).wait(1).to({rotation:-1.6,x:31.2,y:14},0).wait(1).to({rotation:15,x:30,y:4.9},0).wait(1).to({rotation:31.5,x:31.6,y:-4.2},0).wait(1).to({rotation:15.4,x:30,y:4.7},0).wait(1).to({rotation:-0.8,x:31,y:13.5},0).wait(1).to({rotation:-16.9,x:34.4,y:21.8},0).wait(1).to({rotation:-33,x:40,y:28.8},0).wait(1).to({rotation:-17.2,x:34.5,y:21.9},0).wait(1).to({rotation:-1.3,x:31.1,y:13.9},0).wait(1).to({rotation:14.5,x:30,y:5.2},0).wait(1).to({rotation:0,x:30.9,y:13.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61.9,26.2);


(lib.Rleg05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_7();
	this.instance.setTransform(51.8,23.8,0.27,0.27,0,0,0,50.1,43.6);
	this.instance.alpha = 0.211;

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-6.4,15,9.7,-18.1).s().p("AFJFSQghgKgagXQgNgNgdglQglgwhDhCQhehbgRgTQg3g7gcgbQgvgugsghIgtggQgagSgVgLQgNgGgfgFIgzgKQg7gRAIgyQAGghAmgRQAcgMAoAAQAwgBAsAXQAgAQAuAnQAmAgBJA5QBLA7AjAdQCTB4AsAwQBjBuAGBrQACAngPAKQgGADgLAAQgQAAgZgIg");
	this.shape.setTransform(49.1,21.4,0.27,0.27);

	this.instance_1 = new lib.Path_16();
	this.instance_1.setTransform(35.7,14.1,0.27,0.27,0,0,0,35.5,28.9);
	this.instance_1.alpha = 0.211;

	this.instance_2 = new lib.Path_18();
	this.instance_2.setTransform(57.8,34.2,0.27,0.27,0,0,0,22.4,26.1);
	this.instance_2.alpha = 0.211;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-5.9,20.2,12.4,-17.3).s().p("AB4DMQhkgBhSgMQgQgCgtgVQgygXgpgaQhzhJA5ggIAThFQAOgIAZgiQAdgoAMgKQApglA3gPQAvgMA9ARQAgAJBIAeQAcAMBNAcQA9AegKAsQgEAOgQAhQgOAdgBAWQgBAPAQAuQANAngJAUQgMAch+AAIgRgBg");
	this.shape_1.setTransform(33.9,11.9,0.27,0.27);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-7.1,21.9,10.9,-15.1).s().p("AhEBgQBUhRAHgMQAdgwAAgwQAAgjgTg7IBkBuQgFAMAAAbQgBAfgDAKQgMAtguAtQgoApgzAWQgmARhFAPQgHgYBHhEg");
	this.shape_2.setTransform(55.3,32.3,0.27,0.27);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],10.9,76.1,40.4,15.7).s().p("AghKzIhhg/QghgUh1i3QhviuiAjjQlAo2AUhWQAMgzBPgMQA1gIB3AJQCOALAqgBQBegBAhgiIETMRQAOAngGBRQgGBRANAmQAPAtBZgCQAwgCBVgMQAogDCMgoQBzgiBBAPQAvAKApA4QAXAfAmBAQAtA/gWAzQgVAxhIAOQiRAdhvAQIjEAfQh1AShPAIIgPAAQgtAAgugZg");
	this.shape_3.setTransform(8.2,-0.5,0.27,0.27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_2},{t:this.instance_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-19.8,74,57.2);


(lib.Rleg04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_6();
	this.instance.setTransform(47.6,39.2,0.27,0.27,0,0,0,26.4,35.1);
	this.instance.alpha = 0.211;

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-8.5,18.3,10,-19.6).s().p("ABTD6QgYgjgPg3QgMgtgcg4QgOghgmhAQgMgUgWgfIgjgxIgagyQgQgfgPgKIAYgiQAEgQAigDQAggCAVALQATAKAUAaQAIAMATAiQAbAtAWBFIAlBxQAJAYAyBeQAnBWgbAaQgSARgRAAQgYAAgWghg");
	this.shape.setTransform(45.3,37.3,0.27,0.27);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-7.9,14.1,6.2,-14.9).s().p("AAVCFQACglgDgUQgEgZgQghIgZg2QgghHgEgPQgKgyAtgRIAOAFQAGAgAhA+QAhA6ADAoQADAxgKAuQgLA2gYAhQgBgPABgqg");
	this.shape_1.setTransform(49.6,48.4,0.27,0.27);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-4.9,11.1,6.1,-11.4).s().p("AAnCRQgyg2gcgRQgMgHhIgXQg5gTgSgYQgagiAQg5QAPg2AmgXQAvgbAvAUQAdAMAxAsQAfAaBFAvQA8AtAaApQAZApgYAvQgYAvgvAGIgLABQgnAAgsgmg");
	this.shape_2.setTransform(37.4,27.2,0.27,0.27);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-11.2,21.2,11.2,-24.8).s().p("ACNCpQhcgTgbgBQiEABhMgHQiIgNgxg8QhPhdDvhRQBTgcBogUQBWgRAkAAIB0gCQBDADApAYQA7AiAJAfQAJAkgaAEQglAAgSAEQhBAOgDA8QgBARABAmQgBAhgLAWQgMAXgwAAQgQAAgVgDg");
	this.shape_3.setTransform(27,23.8,0.27,0.27);

	this.instance_1 = new lib.Path_17();
	this.instance_1.setTransform(51.6,50.7,0.27,0.27,0,0,0,13.8,27.6);
	this.instance_1.alpha = 0.211;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-17.5,32.7,16.5,-36.9).s().p("ACkHgQhzgVhph7QhPhbhEiKQgZgxgbhGIgvh7QgohLgUguQglhUAdgmIAYg1QABABAtgTQAygWAOgDQA/gNBRAIQA+AGA/AvQAaATBQBJQBnBcBAB0QBHB+AGB+QAHCJgsBnQgzB1hiAAQgQAAgRgDg");
	this.shape_4.setTransform(10.4,13.1,0.27,0.27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.instance_1},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.3,53.6);


(lib.LlgAntena = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.LlgAntenawiggle();
	this.instance.setTransform(60.8,19.9,1,1,0,0,0,60.8,19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:30.4,regY:10,rotation:2.1,x:30.8,y:8.9},0).wait(1).to({rotation:5.4,x:31.5,y:7.2},0).wait(1).to({rotation:8.7,x:32.3,y:5.6},0).wait(1).to({rotation:12,x:33.2,y:4},0).wait(1).to({rotation:1.9,x:30.8,y:9.1},0).wait(1).to({rotation:-8.3,x:29.4,y:14.5},0).wait(1).to({rotation:-18.4,x:28.9,y:20.1},0).wait(1).to({rotation:-28.5,x:29.3,y:25.7},0).wait(1).to({rotation:-10,x:29.2,y:15.5},0).wait(1).to({rotation:8.4,x:32.2,y:5.8},0).wait(1).to({rotation:26.8,x:38.2,y:-2.6},0).wait(1).to({rotation:17.9,x:35,y:1.2},0).wait(1).to({rotation:8.9,x:32.3,y:5.5},0).wait(1).to({rotation:0,x:30.4,y:10},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60.8,20);


(lib.Scud_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// R-lgAntena
	this.instance = new lib.RlgAntena();
	this.instance.setTransform(-43.3,-10.8,1,1,0,0,0,61,4.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

	// R-smAntenea
	this.instance_1 = new lib.RsmAntenea();
	this.instance_1.setTransform(-43.1,-13.9,1,1,0,0,0,15,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:7.5,regY:2.7,rotation:-7.5,x:-50.7,y:-14.4},0).wait(1).to({rotation:-15,y:-13.4},0).wait(1).to({rotation:1.3,x:-50.5,y:-15.6},0).wait(1).to({rotation:17.6,x:-49.7,y:-17.6},0).wait(1).to({rotation:8.3,x:-50.3,y:-16.5},0).wait(1).to({rotation:-1,x:-50.6,y:-15.3},0).wait(1).to({rotation:14.2,x:-49.9,y:-17.2},0).wait(1).to({rotation:29.4,x:-48.8,y:-18.9},0).wait(1).to({rotation:39.5,x:-47.8,y:-19.8},0).wait(1).to({rotation:49.6,x:-46.8,y:-20.5},0).wait(1).to({rotation:22.2,x:-49.4,y:-18.1},0).wait(1).to({rotation:-5.2,x:-50.7,y:-14.7},0).wait(1).to({rotation:4.9,x:-50.4,y:-16},0).wait(1).to({rotation:15,x:-49.9,y:-17.3},0).wait(1));

	// body/head
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAlQgMgKgGgTQgHgQADgQQACgPAKgEQAKgEAJALQAMALAGASQAHARgDAPQgCAQgKADIgFABQgHAAgHgIg");
	this.shape.setTransform(-38.6,-18.1,0.271,0.271);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFE8D7").s().p("AChHJQgYgYgWgoQgXgnhQikQhMifACgBQiKkygMhHQgNgzAEggQAEgqAfgeQADAcASAlQAVAqAGAbQAMA+CFEyQgCAABNCbQBPChAXAoQATAkAIAlQADAKAJBAQgmgWgYgYg");
	this.shape_1.setTransform(46.9,-21.4,0.27,0.27);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFE8D7").s().p("ADCIZQglgUgjgtQgognhdjAQhci4AGgCQABgBhTi2QhYjFgHg1QgNg2AKgsQAJgqAfgmQAEAmAMAqQATBAADAQQAEAoBYDEQBTC4gBAAQgFACBXC0QBdC6AjAhQAPATAgAyQAXAmAbAYIgOABQgoAAgigUg");
	this.shape_2.setTransform(37.4,-21.8,0.27,0.27);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFE8D7").s().p("AD+HXIglgSQgigUgcglQgggihligQheiaACgCQgCABhXicQhbijgSgrQgUgrgGgjQgFgjAFgsIA0A3QAaAeASAlQATAqBZChQBWCbACgBQgDACBeCXQBjCcAdAgQASAUAWAuQATAmAVAOQgLAHgOAAQgJAAgJgCg");
	this.shape_3.setTransform(24.5,-21.9,0.27,0.27);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EFE8D7").s().p("ACzGfQgegQgdgfQgigdhbiPQhaiLAGgDQgFADhEiVQhGicgGgsQgLgsADgfQAFglAXghQAHAUAWApQASAhAIAeQAGAnBDCWQBBCPAEgCQgFADBVCFQBaCJAeAaQAYAcAQAeQAJAQATAvQgpgIgbgOg");
	this.shape_4.setTransform(9.9,-20.8,0.27,0.27);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFE8D7").s().p("ADrG9QgkgNglgeQgagUgtguQg2g4gmgzQglgwgng4IgfguQgGADhWigQhaingJgxQgPgwACgkQACgoAYgkQAIAZAWApQAVAnAKAeQAIArBWChQBTCbAGgEIAeAtQAjA2AkAsQAmAyAyAzQApAsAYASQAdAZAZAdQAPASAgAqQgtgBghgKg");
	this.shape_5.setTransform(-0.8,-18.3,0.27,0.27);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EFE8D7").s().p("ACbGAQgdgNgagbQgVgVgggoQgogygagtQgbgqgcgyIgVgpQgGADg2iOQg3iSgDgoQgIgkAEggQADgYANgoQAbAgANAVQAPAaAJAiQAEAnA0CLQAyCGAGgDIAUAnQAYAvAZAnQAxBNBABEQAXAaAOAbQAKAUAPAoQgogIgYgLg");
	this.shape_6.setTransform(-14.9,-15.4,0.27,0.27);

	this.instance_2 = new lib.Path_10();
	this.instance_2.setTransform(-39.6,-16,0.271,0.271,0,0,0,10.7,14.2);
	this.instance_2.alpha = 0.801;

	this.instance_3 = new lib.Path_13();
	this.instance_3.setTransform(-38.8,-14.4,0.271,0.271,0,0,0,30.6,38.9);
	this.instance_3.alpha = 0.32;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#D6B881","#7C6A46"],[0,1],-11.2,34.2,19.8,-38.8).s().p("AgZF6QgcgKg2gxQgtgogXgeQgzg7gbglQgzhDAAgmQgBhaAuhHQAagoA6hGQAVgfCbhGQCdhFAmAGQAfAEAkC1QATBgAVCTQALBAgoCDQgnCDggALQggALhTAAQhSAAgfgLg");
	this.shape_7.setTransform(-38.8,-14.4,0.271,0.271);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#D6B881","#D1B37D","#C1A673","#A89062","#85714B","#806D48","#7C6A46"],[0,0.161,0.361,0.58,0.816,0.843,0.925],0,78.4,0,-78.4).s().p("AzvL1QgxgXgphEIgghAQgDAOgNAMQgZAagtgFQg3gGgpgRQgsgTgsgoQhIgzgggcQg4gwAQgxQAIgXAGhWIAMipQAVjmBCg4IA+g6QAcgbATgJQA7gYCfg9QDGhLAbgEQAKgCC1hBQCng7AdAEQAdAEAygUQA8gZATgCIC6gjQCageAaAAQASAACogrQCmgrAoAAIBlADQA3ABAegEQAvgHCFgOQCTgPAnAAQAeAABvAZQBwAZATAAICtgFQCXgDAxAIQAtAJBZAfQBiAjATAEQAhAJgRCTQgVC3AFAbQAHArASCFQAUB6AbA6QAtBjAmCEQAwCmgYAwQgfA/hgAmQhrAqhFg2QhWhDhKg/QhFg9gQgUIABADQABAigjAjQgvAvgnAOQgvAQg8gUQgrgOgTAAQgGAAgSgPQgWgRgdAYQgqAogkAZQg+Arg2AWQhEAdhKACQhDADgmgeQgJgHgHgIQgGAPgYAcQgoAwhYAaQhNAXhZAAQipAAgygfQgXgNgXgaIgTgYQgrAzgrAcQgZARgygCQhlgCgkACQhOAEhogdIhYgeQAEAFgJAJQgRATg/AWQhMAbiTAAIgFAAQiRAAg5gbg");
	this.shape_8.setTransform(12.3,-20.2,0.271,0.271);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-9.5,21.6,11.8,-22.1).s().p("Ah4CuQg3gEgjgMQgKgtBAg3QApgkA+geQASgJBlgnQBNgdAkgfIAhg6QAABaglBFQgaAwgSAOQgUARgwAIQg7AKgJAQQgIALACAZQACAUgUALQgVAKgqAAIgcgBg");
	this.shape_9.setTransform(-24.8,1,0.27,0.27);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-17.1,31.3,16.2,-36.9).s().p("AmADOQgvgNg4g9Qg5g9gHgtQgHgvAvgyQAogqAxgRIArg5QA/gZBfgDQAwgCByAGQDoAKC7gKQBjgFAXAGQA5APAMBLQAKA9gpAwQgiAng/AXQguARg/AAQgfgBhRgIIh0gJQhHgHgsgJQhGgVgpgLQhMgRgnASQgZANAAAbQABAaAYAOQAPAJArABIA+AAQAmABDyACQDhAMADA4QgiANg9ADQhFACgfADIigAPQhZAHhFAAIh7AIIgkABQgzAAgigKg");
	this.shape_10.setTransform(-8.7,3.8,0.27,0.27);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8E6441").s().p("AhoDsQgXgSAIgdQAPghACgOQg8AUgogcQgagSgshBQgXgkgEgKQgLgWAFgeQACgQAXgfQAWgdgBgPICVhqQAhgBALABQBdAIBXAjQBgAmA8A/QAxAygOBAQgOA/g7AlQglAXhMAdQhMAegkAWQgaARgcAHQgOADgLAAQgUAAgMgJg");
	this.shape_11.setTransform(-34.8,-2.4,0.27,0.27);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#D6B881","#CEB17C","#B09768","#998359","#89754E","#7F6D48","#7C6A46"],[0,0.035,0.196,0.361,0.541,0.741,1],-12,23,9.6,-21.3).s().p("AhoDsQgXgSAIgdQAPghADgOQg9AUgogcQgagSgrhBQgXgigFgMQgLgWAFgeQACgRAXgeQAWgdAAgPICUhqQAhgBALABQBdAIBXAjQBgAnA8A+QAxAygOBAQgOA/g7AlQglAXhMAdQhMAegkAWQgZARgcAHQgOADgMAAQgUAAgMgJg");
	this.shape_12.setTransform(-34.7,-2.4,0.27,0.27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.instance_3},{t:this.instance_2},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(15));

	// L-smAntena
	this.instance_4 = new lib.LsmAntena();
	this.instance_4.setTransform(-45.5,-14.1,1,1,0,0,0,10.1,12.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:5,regY:6.2,rotation:7.5,x:-49.8,y:-20.8},0).wait(1).to({rotation:15,x:-48.8,y:-21.3},0).wait(1).to({rotation:-8.8,x:-51.5,y:-19.3},0).wait(1).to({rotation:-32.6,x:-53.1,y:-16.5},0).wait(1).to({rotation:-14.4,x:-51.9,y:-18.8},0).wait(1).to({rotation:3.9,x:-50.2,y:-20.5},0).wait(1).to({rotation:10.9,x:-49.3,y:-21},0).wait(1).to({rotation:17.8,x:-48.5,y:-21.4},0).wait(1).to({rotation:-7.7,x:-51.4,y:-19.4},0).wait(1).to({rotation:-33.2,x:-53.1,y:-16.4},0).wait(1).to({rotation:-9.9,x:-51.6,y:-19.2},0).wait(1).to({rotation:13.5,x:-49,y:-21.2},0).wait(1).to({rotation:14.3,x:-48.9,y:-21.3},0).wait(1).to({rotation:15.1,x:-48.8},0).wait(1));

	// L-lgAntena
	this.instance_5 = new lib.LlgAntena();
	this.instance_5.setTransform(-43.1,-13.9,1,1,0,0,0,60.1,18.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:33.3,regY:11.8,x:-69.9,y:-20.3},0).wait(4).to({regX:60.1,regY:18.2,x:-43.1,y:-13.9},0).wait(1).to({regX:33.3,regY:11.8,x:-69.9,y:-20.3},0).wait(4).to({regX:60.1,regY:18.2,x:-43.1,y:-13.9},0).wait(1).to({regX:33.3,regY:11.8,x:-69.9,y:-20.3},0).wait(4));

	// R-leg03
	this.instance_6 = new lib.Rleg03();
	this.instance_6.setTransform(28.3,-8.4,0.999,0.999,14.5,0,0,27.8,2.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:17.4,regY:19.6,scaleX:1,scaleY:1,rotation:-15,x:24.8,y:10.5},0).wait(1).to({rotation:-8.7,x:24.9,y:9.6},0).wait(1).to({rotation:-2.4,x:25,y:8.5},0).wait(1).to({rotation:3.9,x:25.3,y:7.1},0).wait(1).to({regX:27.9,regY:2.8,rotation:8.1,x:21.5,y:-4.7},0).wait(1).to({regX:17.4,regY:19.6,rotation:-15,x:19.6,y:13.2},0).wait(1).to({rotation:-8.7,x:21.4,y:11.4},0).wait(1).to({rotation:-2.4,x:23.3,y:9.3},0).wait(1).to({rotation:3.9,x:25.3,y:7},0).wait(1).to({regX:27.9,regY:2.9,rotation:6.1,x:22.2,y:-8.4},0).wait(1).to({regX:17.4,regY:19.6,rotation:-15,x:20,y:10.3},0).wait(1).to({rotation:-8.7,x:21.6,y:9.4},0).wait(1).to({rotation:-2.4,x:23.4,y:8.3},0).wait(1).to({rotation:3.9,x:25.2,y:7},0).wait(1));

	// R-leg01
	this.instance_7 = new lib.Rleg01();
	this.instance_7.setTransform(7.5,-2.2,1,1,0,0,0,28,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:18.5,regY:14.6,rotation:-15,x:1,y:10},0).wait(1).to({rotation:-7.7,x:-0.5,y:9.1},0).wait(1).to({rotation:-0.4,x:-1.9,y:8},0).wait(1).to({rotation:6.9,x:-3.1,y:6.8},0).wait(1).to({regX:28,regY:4.5,rotation:0,x:7.5,y:-2.2},0).wait(1).to({regX:18.5,regY:14.6,rotation:-15,x:1,y:10},0).wait(1).to({rotation:-7.7,x:-0.5,y:9.1},0).wait(1).to({rotation:-0.4,x:-1.9,y:8},0).wait(1).to({rotation:6.9,x:-3.1,y:6.8},0).wait(1).to({regX:28,regY:4.5,rotation:0,x:7.5,y:-2.2},0).wait(1).to({regX:18.5,regY:14.6,rotation:-15,x:1,y:10},0).wait(1).to({rotation:-7.7,x:-0.5,y:9.1},0).wait(1).to({rotation:-0.4,x:-1.9,y:8},0).wait(1).to({rotation:6.9,x:-3.1,y:6.8},0).wait(1));

	// R-leg02
	this.instance_8 = new lib.Rleg02();
	this.instance_8.setTransform(38,-7.5,0.999,0.999,25.6,0,0,10,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:8.5,regY:22.6,scaleX:1,scaleY:1,rotation:8,x:33.6,y:12.8},0).wait(1).to({rotation:-9.7,x:40,y:13.1},0).wait(1).to({rotation:-2.1,x:37.3,y:13.2},0).wait(1).to({rotation:5.5,x:34.5,y:12.9},0).wait(1).to({regX:9.8,regY:2,scaleX:1,scaleY:1,rotation:24.6,x:38,y:-7.5},0).wait(1).to({regX:8.5,regY:22.6,scaleX:1,scaleY:1,rotation:7.5,x:34,y:12.8},0).wait(1).to({rotation:-9.7,x:40.1,y:13.1},0).wait(1).to({rotation:-2.1,x:37.4,y:13.3},0).wait(1).to({rotation:5.5,x:34.7,y:13},0).wait(1).to({regX:9.8,regY:2.2,scaleX:1,scaleY:1,rotation:29.1,x:38,y:-7.5},0).wait(1).to({regX:8.5,regY:22.6,scaleX:1,scaleY:1,rotation:9.7,x:33.3,y:12.5},0).wait(1).to({rotation:-9.7,x:40.1,y:12.9},0).wait(1).to({rotation:-2.1,x:37.5,y:13.1},0).wait(1).to({rotation:5.5,x:34.7,y:12.8},0).wait(1));

	// R-leg04
	this.instance_9 = new lib.Rleg04();
	this.instance_9.setTransform(41.6,-8.5,0.426,1,0,0,0,4.5,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:25.7,regY:26.8,scaleX:0.57,rotation:-1.4,x:55.6,y:16.8},0).wait(1).to({scaleX:0.71,rotation:-2.9,x:60.6,y:16},0).wait(1).to({scaleX:0.86,rotation:-4.3,x:65.7,y:15.2},0).wait(1).to({scaleX:1,rotation:6.2,x:59.9,y:19.4},0).wait(1).to({regX:4.5,regY:1.2,scaleX:0.54,rotation:0,x:41.6,y:-8.5},0).wait(1).to({regX:25.7,regY:26.8,scaleX:0.65,rotation:-1.4,x:57.4,y:16.6},0).wait(1).to({scaleX:0.77,rotation:-2.9,x:61.8,y:15.9},0).wait(1).to({scaleX:0.88,rotation:-4.3,x:66.2,y:15.1},0).wait(1).to({scaleX:1,rotation:6.2,x:59.9,y:19.3},0).wait(1).to({regX:4.5,regY:1.2,scaleX:0.43,rotation:0,x:41.6,y:-8.5},0).wait(1).to({regX:25.7,regY:26.8,scaleX:0.57,rotation:-1.4,x:55.7,y:16.7},0).wait(1).to({scaleX:0.72,rotation:-2.9,x:60.6,y:15.9},0).wait(1).to({scaleX:0.86,rotation:-4.3,x:65.6,y:15.1},0).wait(1).to({scaleX:1,rotation:6.2,x:59.8,y:19.3},0).wait(1));

	// R-leg05
	this.instance_10 = new lib.Rleg05();
	this.instance_10.setTransform(43.7,-12.1,0.425,1,0,0,0,-6,-17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:23,regY:8.8,scaleX:0.57,rotation:-4.5,x:63.9,y:12.9},0).wait(1).to({scaleX:0.71,rotation:-9,x:71.7,y:10.8},0).wait(1).to({scaleX:0.86,rotation:-13.5,x:79.1,y:7.9},0).wait(1).to({scaleX:1,rotation:3.2,x:71.1,y:15.9},0).wait(1).to({regX:-6,regY:-17.6,scaleX:0.55,rotation:0,x:43.7,y:-12.1},0).wait(1).to({regX:23,regY:8.8,scaleX:0.66,rotation:-4.5,x:66.6,y:12.7},0).wait(1).to({scaleX:0.77,rotation:-9,x:73.4,y:10.5},0).wait(1).to({scaleX:0.89,rotation:-13.5,x:80,y:7.7},0).wait(1).to({scaleX:1,rotation:3.2,x:71.2,y:15.9},0).wait(1).to({regX:-6,regY:-17.6,scaleX:0.42,rotation:0,x:43.7,y:-12.1},0).wait(1).to({regX:23,regY:8.8,scaleX:0.57,rotation:-4.5,x:63.9,y:13},0).wait(1).to({scaleX:0.71,rotation:-9,x:71.6,y:10.8},0).wait(1).to({scaleX:0.86,rotation:-13.5,x:79.1,y:7.9},0).wait(1).to({scaleX:1,rotation:3.2,x:71.1,y:15.9},0).wait(1));

	// tail
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#D6B881","#D0B37D","#C0A572","#A48D60","#7F6C48","#7C6A46"],[0,0.18,0.42,0.69,0.984,1],-26.5,61.9,6.6,-53.5).s().p("AjEJ5QgigfhdjaQhdjZAAguQAAkCAChUQAEkwASgeQAMgUAGgpQAEgcAVgEQAagECnBAQCTA6BBAhQA0AaCCBMQCGBOAcAVIAOBOQAKBXgYAtQgXAqhaDjIhiD6QglBUgHAOQglBDghAKQiKAphHAAQgsAAgSgQg");
	this.shape_13.setTransform(65.7,-20.4,0.271,0.271);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#D6B881","#CFB27C","#BBA16F","#9B855A","#7C6A46"],[0,0.176,0.439,0.749,1],-54.2,38.7,28.7,-28.4).s().p("AmaIiQgbg9gChNQgChUAfgoQAug9A/hpQBNh+AAgfQAAg4BBjXQBHjwAygiIA3AVQA9AbAVAYQAVAYARAcIATAmQAFAKCIC+QCGDDADAlIAGBQQgCAlgcAcQgfAfhMBBQhJA/geAWIh3BtQhjBagrALQhmAchXAIQgeADgYAAQhZAAgRgng");
	this.shape_14.setTransform(76.3,-12.4,0.271,0.271);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#D6B881","#7C6A46"],[0,1],-39,0,39.1,0).s().p("Aj9HJQiUhbANhTQAShyAtiHQA1igAqgTQAmgSDjilIEajMQATgNAJAJQAFAFAaAzQATAlgIA6QgLBOAAAJQADAngzDIQgzDFgWAoQgyB1gwBUQhcCihLAAQhpAAiKhUg");
	this.shape_15.setTransform(78,3.7,0.271,0.271);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]}).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.3,-41.5,193,85.4);


// stage content:



(lib.FWW_TilesAll_v01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// scud tile bloacker (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AuDODIAA8GIcGAAIAAcGg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:750.1,y:743.4}).wait(47).to({graphics:null,x:0,y:0}).wait(193));

	// Layer 1
	this.instance = new lib.guide();
	this.instance.setTransform(960.4,532.2,0.917,0.917,0,0,0,0.1,0.1);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},47).wait(193));

	// lg scud
	this.instance_1 = new lib.Scud_mc();
	this.instance_1.setTransform(2197.4,638.2,2.054,2.054,0,0,0,-7.7,1.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(47).to({_off:false},0).wait(1).to({regX:5.5,regY:-4.3,scaleX:2.06,scaleY:2.06,rotation:1.5,x:2150.5,y:621},0).wait(1).to({rotation:3.1,x:2076.4,y:615.7},0).wait(1).to({rotation:4.6,x:2002.3,y:610.3},0).wait(1).to({scaleX:2.05,scaleY:2.05,rotation:6.2,x:1928.2,y:605},0).wait(1).to({scaleX:2.06,scaleY:2.06,rotation:7.7,x:1854.1,y:599.6},0).wait(1).to({rotation:9.3,x:1779.9,y:594.3},0).wait(1).to({rotation:10.8,x:1705.7,y:588.9},0).wait(1).to({scaleX:2.05,scaleY:2.05,rotation:12.4,x:1631.6,y:583.6},0).wait(1).to({rotation:13.9,x:1557.4,y:578.3},0).wait(1).to({scaleX:2.06,scaleY:2.06,rotation:15.5,x:1483.1,y:573},0).wait(1).to({rotation:-7.4,x:1419,y:572.2},0).wait(1).to({rotation:-7.4,x:1358.7,y:582.3},0).wait(1).to({x:1298.5,y:592.5},0).wait(1).to({x:1238.3,y:602.7},0).wait(1).to({rotation:-7.3,x:1178.1,y:612.9},0).wait(1).to({x:1117.8,y:623.1},0).wait(1).to({scaleX:2.05,scaleY:2.05,x:1057.7,y:633.3},0).wait(1).to({scaleX:2.06,scaleY:2.06,x:997.4,y:643.5},0).wait(1).to({rotation:-7.2,x:937.2,y:653.6},0).wait(1).to({scaleX:2.05,scaleY:2.05,x:877,y:663.9},0).wait(1).to({x:816.8,y:674.1},0).wait(1).to({x:756.6,y:684.2},0).wait(1).to({rotation:-7.1,x:696.3,y:694.4},0).wait(1).to({x:636.1,y:704.6},0).wait(1).to({x:557.5,y:700.8},0).wait(1).to({x:478.8,y:696.9},0).wait(1).to({x:400.3,y:693.1},0).wait(1).to({x:321.6,y:689.2},0).wait(1).to({x:242.9,y:685.4},0).wait(1).to({x:164.4,y:681.5},0).wait(1).to({x:85.8,y:677.7},0).wait(1).to({x:7.1,y:673.8},0).wait(1).to({x:-71.5,y:670},0).wait(1).to({x:-150.2,y:666.1},0).wait(1).to({x:-228.8,y:662.3},0).wait(27).to({_off:true},1).wait(130));

	// Layer 2 copy 6
	this.instance_2 = new lib.Scud_mc("synched",0);
	this.instance_2.setTransform(719.6,715.4,0.662,0.662,52.9,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.85,scaleY:0.85,rotation:37.5,x:470.4,y:332.2,startPosition:6},21).to({regX:0,scaleX:1.08,scaleY:1.08,rotation:52.9,x:173.5,y:-124.1,startPosition:1},25).to({_off:true},1).wait(193));

	// Layer 2 copy 5
	this.instance_3 = new lib.Scud_mc("synched",0);
	this.instance_3.setTransform(760.9,749.6,0.537,0.577,0,-32.3,147.7,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:-0.2,regY:0.2,scaleX:0.69,scaleY:0.74,skewX:8.2,skewY:188.2,x:1333.1,y:622.7,startPosition:6},21).to({regX:-0.1,regY:0.1,scaleX:0.88,scaleY:0.94,skewX:-32.3,skewY:147.7,x:2013.8,y:471.9,startPosition:1},25).to({_off:true},1).wait(193));

	// Layer 2 copy 4
	this.instance_4 = new lib.Scud_mc("synched",0);
	this.instance_4.setTransform(713.5,710.9,0.615,0.661,0,-47.1,132.9,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:0.2,scaleX:0.79,scaleY:0.85,skewX:-3.9,skewY:176.1,x:996,y:345.7,startPosition:6},21).to({regX:-0.1,regY:0.1,scaleX:1.01,scaleY:1.08,skewX:-47.1,skewY:132.9,x:1332.6,y:-89.2,startPosition:1},25).to({_off:true},1).wait(193));

	// Layer 2 copy 3
	this.instance_5 = new lib.Scud_mc("synched",0);
	this.instance_5.setTransform(738.6,746.9,0.662,0.662,-44.9,0,0,0,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:-0.1,regY:0.3,scaleX:0.85,scaleY:0.85,x:358.4,y:922.4,startPosition:6},21).to({regY:0.1,scaleX:1.08,scaleY:1.08,x:-94.5,y:1131.1,startPosition:1},25).to({_off:true},1).wait(193));

	// Layer 2 copy 2
	this.instance_6 = new lib.Scud_mc("synched",0);
	this.instance_6.setTransform(755,744.3,0.664,0.62,0,98.6,-81.4,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:0,scaleX:0.86,scaleY:0.8,skewX:41.5,skewY:-138.5,x:952.7,y:939.6,startPosition:6},21).to({scaleX:1.09,scaleY:1.01,skewX:48.8,skewY:-131.2,x:1188.1,y:1171.8,startPosition:1},25).to({_off:true},1).wait(193));

	// Layer 2 copy
	this.instance_7 = new lib.Scud_mc("synched",0);
	this.instance_7.setTransform(721.9,717.5,0.511,0.52,-44.9,0,0,-0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:0.3,scaleX:0.66,scaleY:0.67,rotation:-24.6,x:299.6,y:727.2,startPosition:6},21).to({regY:0.1,scaleX:0.84,scaleY:0.85,rotation:-0.7,x:-86.5,y:807.7,startPosition:1},25).to({_off:true},1).wait(193));

	// Layer 2
	this.instance_8 = new lib.Scud_mc("synched",0);
	this.instance_8.setTransform(737.1,703.3,0.477,0.556,0,-17,163,-0.2,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regY:0,scaleX:0.78,scaleY:0.94,skewX:-22.2,skewY:157.8,x:1321.6,y:413.6,startPosition:1},21).to({skewX:0.2,skewY:180.2,x:2009.9,y:85.2},25).to({_off:true},1).wait(193));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1620.1,1192.3,180,181.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;