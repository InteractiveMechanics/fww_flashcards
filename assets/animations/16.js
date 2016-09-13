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


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#274B20").s().p("AAOFVQgRgegLgOQgSgYgXgIQgOgGgXgvQgWgugTgEQgngIgtABQgbABg0AGQhGAIglgCQg7gEg7geQh4g8gNhBQgDgQAEgRQAMguA+gvQA+gwBBgMQBbgSDqhDQEHhMBEghQAlgJCBAGQB2AFAsAJQA2ALAWAbQAWAYALA6QAFAbADAYIAHAnIgwAOQgbAJgLACQgNACgTgDQg1gGhEgRQhDgQgUgLIgTgOQgagUgXgJQgogQgqANQhCATgaBJIAFBqQALAYADAtQACAgAYAIQALAEANBPQANBRAMAGQATALAIAIQAOAQAAAZQgMAkgRAGQgfAFgiAJQgWAGgTAAQgvAAgbgkg");
	this.shape.setTransform(-43.7,-25.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2F5326").s().p("ABjHMQhIgJg9g0QgfgdgRgNQgbgWgagKQgQgGgggsQgegpgYgEQgqgIg2AAIhdACQhMACgtgHQhDgLhDglQiDhKgWhKQgFgQABgUQACg7Azg8QAyg6BBgbQAZgfA6gXQA1gWA+gHQBpgNB0gTQCbgaBAgTQCUgrDTgoQA3gDCDALQB7ALApAJQBFAVAgAmQAeAiAPBEQAIAkADAgIAFA1IgNAKQAAADgOAKQgPAKAAACIgfAcQgNALgKAEIgFACQgMAGg7gHIhigPQhMgJgYgIQgYgOgFgBQgzgdgUgJQg4gXgxAFIgoAFQgUACgMAGQgSgCgJAHQgJAHgKATQgEAIAAAIQADADARA2QATA3AMAIIAgBLQAPAjAgANQAZALAfA2QAnBGAFAGQAMAPAVAHQAyAUgcA4QgTAlgoAPIh0AdQg2ANg1AAQgXAAgXgCg");
	this.shape_1.setTransform(-37.4,-21.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#365B2C").s().p("ACZImQh5gDhghAIhKg1QgqgegigOQgRgHgqgoQglgkgcgEQgsgHhAgCIhtgDQhSgEg1gNQhLgShJgsQiNhWgihWQgEgKgFgcQgJhIAqhIQAnhEBAgpQAlg8BcgqQBWgmBdgHQB+gKDOgaQDugfBHgWQBWgZB1gRQBlgOBVgDQBKAFCDARQCAAQAmAJQBVAdArAyQAlAsATBOQAIAjAFAyIAFBDIgLARQAAAGgNAOQgMAPAAAFQgQAWgKAXIgNAeIgBAFQADAShMgHQhfgNgkgCIhJgEQgjgCgagHIgTgIIgUgIQhDgggcgLQhGgcg5gHQhFgKgSACQgcgOgKADQgKACgNAYQgFAJACAKIAkA+QAjA1AaAWQAUAdAdAxQAbAmApATQAmASA4A5QA4A7APAHQAKAFARAEIAaAGQAaAIAEATQAFAZghAoQgaAng/AXQgkANiDAfQhiAXhmAAIgYgBg");
	this.shape_2.setTransform(-31.2,-17.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3D6431").s().p("AhdI3QgVgMhPg0Qg5gngogQQgRgHg2gmQgsgfghgEQgsgGhMgEQhagFgigDQhXgJg+gTQhTgZhQg0QiXhigthgQgGgOgIgdQgThPAkhVQAZg8A+hOQBDhVB0g7QB3g9BzgFQCVgGEmghQFAgkBSgZQBQgZB8gIQBsgIBoAHQBdALCFAWQCCAWAlAKQBkAlA1A+QAvA2AVBXQALAuAFA5IABANIADBEIgJAYQgBAIgKAUQgKATgBAIQgbA/AFApIACAIQAPAhhcgIQh2gRgsAAIhaAAQgsAAghgIQgIgBgRgHIgZgKQhHgdgwgTQhWgjg+gQQhQgWgXgFQgngcgIgBQgNgBgQAcQgGALAEALQAMAVApAuQAwA0AqAjQA2BGAMAMQAnAqAzAYQAsAVBYBAQBJA1AZADIAmADQAXACALACQAgAIAAAXQAAAdgxAwQgiAphWAfQhFAZiVAiQiNAgiZADIgJAAQimAAh/hLg");
	this.shape_3.setTransform(-25.2,-13.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#446C36").s().p("Ah3KRQgkgUhZg5QhJgvgvgTIhSgqQgygagmgFQgkgEhhgHQhWgGg1gHQhcgNhIgZQhagghXg8Qighug5hsQgJgQgKgdQghhdAbhiQAUhLA5hVQBOhyCYhOQCWhNCTgEQCwgFF6gnQGUgpBagcQBLgXCEgBQBzgBB6AQQByASCEAbQCGAbAjALQB0AuA/BJQA4BAAYBhQAOA3AEBCIABAPQACAkAAArIgIAfQAAALgIAYQgIAYgBAKQgYBZASAwQADAGADAFQAeAthugJQiPgSg0ACQhKAEggAAQg1ABgqgJQgJgCgzgRIiOg6QhpgrhBgVIhGgZQghgNgQgJQgwglgMgFQgNgHgSAeQgHANAFANQAMATA7AyQAZAXBdBPQAzA4AhAdQA0AuA8AdQAzAZBnBNQBOA7AegCQAVgBAvAJIA8ANQAmAHgBAmQgCAshAA2QgiAjh6ASQjgAhgzAMQi0Aoi4AGIgkABQjHAAiYhRg");
	this.shape_4.setTransform(-19.5,-9.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4B753B").s().p("AiULtQgygZhmhAQhYg3g2gXQg8gagggNQg3gUgugFIiRgNQhbgHg/gLQhhgRhQggQhjgnhehEQiph5hFh4QgHgMgQgjQhUjDB6jPQBViQC+hgQC1hdC1gDQDKgDHPgsQHnguBkggQBEgWCMAHQB5AGCOAZQCBAaCJAfQCHAgAjANQCEA2BJBVQBABKAcBrQAPA8AFBOIABARQACAmgBA1IgFAlQgBAPgGAcQgGAdAAANQgSBxAcA3QAEAJAFAGQAsA3h/gIQiogTg7ADQhWAHglABQg9ADgzgKQgRgDg2gSQhaghkLhxQhmgpgggZQg4gzgNgJQgQgKgVAjQgIAPAHAPQAMAUBLA2QBrBOAoAjQBtBtB+BAQAsAWCmBuQBzBMAngIIAzBKQg0AsiBAvQiCAvi+AqQjWAwjcALQghABggAAQjnAAiwhYg");
	this.shape_5.setTransform(-13.5,-6.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#517D40").s().p("Ai6NJQg9gdh0hHQhohAg8gZQhxgwhngJIidgNQhhgJhJgPQhmgVhZgnQhqgthlhMQiwiEhUiEQgOgYgOgbQhxjgB3jjQBciuDjhzQDVhtDXgBQDmgCIhgxQI9g0BrgjQA+gUCUAPQB9AMCkAiQCPAgCPAmQCIAkAkAOQCTA/BUBhQBIBUAfB0QASBEAFBYIABAUQABAzgBAyIgEAsQAAARgEAiQgEAhgBAOQgLCNAlA9QAFAJAIAJQAiAngcANQgXALhFgEQjAgVhEAFQhgAKgqADQhHAEg7gLQgfgGgzgRQhKgZhxgvQh2gyhhguQhug2gngiQhAhBgPgLQgTgNgXAnQgKARAJARQAOAUBaA6QB0BJA9A0QBwBoChBSQBTAqCzBoQCTBQAwgOIBTBnQgzAmi/AvImRBYQj8A3j7APQgvADguAAQkHAAjKhhg");
	this.shape_6.setTransform(-6.6,-3.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#588545").s().p("AjdOoQhKgiiBhOQh5hJhCgcQhPghiCgOQibgLhVgKQlCgnj5jAQkkjihLjrQg+jCBZi7QBijMEIiGQD2h8D5AAQD+AAJ4g3QKQg4B0gnQBpgjGpBmQCZAlCXAsQCGAoAmAQQDgBiBfCrQBJCCAGDFQAEBugMDHQAACfA7A/QAqAtgdARQgYANhOgEQjZgXhLAHQiEARg8ACQhhAChpgjQiXgyi1hUQjYhlhAhAQhIhQgRgNQgMgKgKAFQgKAGgPAaQgOAXAXAXQARATA3AfQCxBnBEA5QCWB/EFB4QEgCDBogmQA5gVAzgDQA0gEAUAQQAyAqiwB4Qh9BVlABbQmDBtmWAcQg+AEg8AAQknAAjhhog");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-202.4,-104,404.9,208.1);


(lib.ripple = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.8)").ss(1,1,1).p("AAVgBQAKABAAAAQAAAAgKABQgJABgMAAQgMAAgJgBQgJgBAAAAQAAAAAJgBQAJAAAMAAQAMAAAJAAg");
	this.shape.setTransform(34.1,273.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0.769)").ss(1.1,1,1).p("AhqAAQAAgCAfgDQAggDArAAQAsAAAgADQAfADAAACQAAADgfADQggACgsAAQgrAAgggCQgfgDAAgDg");
	this.shape_1.setTransform(34.4,273.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(255,255,255,0.737)").ss(1.2,1,1).p("Ai3AAQAAgFA2gFQA2gEBLAAQBMAAA2AEQA2AFAAAFQAAAGg2AEQg2AFhMAAQhLAAg2gFQg2gEAAgGg");
	this.shape_2.setTransform(34.7,273.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(255,255,255,0.706)").ss(1.3,1,1).p("AkDAAQAAgIBMgHQBMgGBrAAQBsAABMAGQBNAHAAAIQAAAIhNAHQhMAGhsAAQhrAAhMgGQhMgHAAgIg");
	this.shape_3.setTransform(35,273.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(255,255,255,0.671)").ss(1.3,1,1).p("AlQAAQAAgKBjgJQBigICLAAQCLAABjAIQBjAJAAAKQAAALhjAJQhjAIiLAAQiLAAhigIQhjgJAAgLg");
	this.shape_4.setTransform(35.2,273.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(255,255,255,0.639)").ss(1.4,1,1).p("AmdAAQAAgNB5gLQB5gKCrAAQCrAAB6AKQB5ALAAANQAAAOh5ALQh6AKirAAQirAAh5gKQh5gLAAgOg");
	this.shape_5.setTransform(35.5,273.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(255,255,255,0.608)").ss(1.5,1,1).p("AnqAAQAAgQCQgMQCPgMDLAAQDKAACQAMQCRAMAAAQQAAAQiRANQiQAMjKAAQjLAAiPgMQiQgNAAgQg");
	this.shape_6.setTransform(35.8,273.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(255,255,255,0.576)").ss(1.6,1,1).p("Ao2AAQAAgTCmgOQCmgODqAAQDrAACmAOQCmAOAAATQAAATimAOQimAPjrAAQjqAAimgPQimgOAAgTg");
	this.shape_7.setTransform(36.1,273.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(255,255,255,0.545)").ss(1.7,1,1).p("AqDAAQAAgVC8gRQC9gPEKAAQEKAAC9APQC9ARAAAVQAAAWi9AQQi9AQkKAAQkKAAi9gQQi8gQAAgWg");
	this.shape_8.setTransform(36.4,273.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(255,255,255,0.514)").ss(1.7,1,1).p("ArQAAQAAgYDTgSQDUgSEpAAQEqAADTASQDUASAAAYQAAAZjUASQjTASkqAAQkpAAjUgSQjTgSAAgZg");
	this.shape_9.setTransform(36.7,273.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(255,255,255,0.478)").ss(1.8,1,1).p("AscAAQAAgbDpgUQDqgTFJAAQFKAADpATQDqAUAAAbQAAAbjqAUQjpAUlKAAQlJAAjqgUQjpgUAAgbg");
	this.shape_10.setTransform(36.9,273.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(255,255,255,0.447)").ss(1.9,1,1).p("AtpAAQAAgdEAgWQEAgWFpAAQFqAAEAAWQEAAWAAAdQAAAekAAWQkAAWlqAAQlpAAkAgWQkAgWAAgeg");
	this.shape_11.setTransform(37.2,273.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(255,255,255,0.416)").ss(2,1,1).p("Au2AAQAAggEXgYQEWgXGJAAQGJAAEXAXQEXAYAAAgQAAAhkXAXQkXAYmJAAQmJAAkWgYQkXgXAAghg");
	this.shape_12.setTransform(37.5,273.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(255,255,255,0.384)").ss(2.1,1,1).p("AwCAAQAAgjEsgaQEtgZGpAAQGpAAEtAZQEtAaAAAjQAAAjktAaQktAampAAQmpAAktgaQksgaAAgjg");
	this.shape_13.setTransform(37.8,273.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(255,255,255,0.353)").ss(2.1,1,1).p("AxPAAQAAglFDgcQFEgcHIAAQHJAAFDAcQFEAcAAAlQAAAmlEAcQlDAbnJAAQnIAAlEgbQlDgcAAgmg");
	this.shape_14.setTransform(38,273.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(255,255,255,0.322)").ss(2.2,1,1).p("AycAAQAAgoFageQFagdHoAAQHpAAFaAdQFaAeAAAoQAAAplaAdQlaAenpAAQnoAAlageQlagdAAgpg");
	this.shape_15.setTransform(38.3,273.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(255,255,255,0.286)").ss(2.3,1,1).p("AzoAAQAAgrFwgfQFwggIIAAQIIAAFxAgQFwAfAAArQAAArlwAgQlxAfoIAAQoIAAlwgfQlwggAAgrg");
	this.shape_16.setTransform(38.6,273.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(255,255,255,0.255)").ss(2.4,1,1).p("A01AAQAAgtGHgiQGGghIoAAQIoAAGHAhQGHAiAAAtQAAAumHAiQmHAhooAAQooAAmGghQmHgiAAgug");
	this.shape_17.setTransform(38.9,273.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(255,255,255,0.224)").ss(2.5,1,1).p("A2CAAQAAgwGdgkQGdgjJIAAQJIAAGdAjQGeAkAAAwQAAAxmeAkQmdAjpIAAQpIAAmdgjQmdgkAAgxg");
	this.shape_18.setTransform(39.2,273.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(255,255,255,0.192)").ss(2.5,1,1).p("A3OAAQAAgzGzglQG0glJnAAQJoAAGzAlQG0AlAAAzQAAA0m0AlQmzAlpoAAQpnAAm0glQmzglAAg0g");
	this.shape_19.setTransform(39.4,273.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(255,255,255,0.161)").ss(2.6,1,1).p("A4bAAQAAg1HKgoQHKgnKHAAQKHAAHKAnQHLAoAAA1QAAA2nLAnQnKAoqHAAQqHAAnKgoQnKgnAAg2g");
	this.shape_20.setTransform(39.7,273.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("rgba(255,255,255,0.129)").ss(2.7,1,1).p("A5oAAQAAg4HggpQHhgpKnAAQKnAAHhApQHhApAAA4QAAA5nhApQnhApqnAAQqnAAnhgpQnggpAAg5g");
	this.shape_21.setTransform(40,273.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(255,255,255,0.094)").ss(2.8,1,1).p("A60AAQAAg7H3grQH3grLGAAQLHAAH3ArQH3ArAAA7QAAA8n3AqQn3AsrHAAQrGAAn3gsQn3gqAAg8g");
	this.shape_22.setTransform(40.3,273.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("rgba(255,255,255,0.063)").ss(2.9,1,1).p("A8BAAQAAg9INguQIOgsLmAAQLnAAINAsQIOAuAAA9QAAA+oOAtQoNAtrnAAQrmAAoOgtQoNgtAAg+g");
	this.shape_23.setTransform(40.6,273.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(255,255,255,0.031)").ss(2.9,1,1).p("A9OAAQAAhAIkgvQIkgvMGAAQMGAAIkAvQIlAvAABAQAABBolAvQokAvsGAAQsGAAokgvQokgvAAhBg");
	this.shape_24.setTransform(40.9,273.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("rgba(255,255,255,0)").ss(3,1,1).p("AVgB0Qo6AxsmAAQsmAAo6gxQo6gwAAhEQAAhDI6gxQI6gwMmAAQMmAAI6AwQI7AxAABDQAABEo7Awg");
	this.shape_25.setTransform(41.1,273.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},9).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).wait(23));

	// Layer 2
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(255,255,255,0.8)").ss(1,1,1).p("AAVgBQAKABAAAAQAAAAgKABQgJABgMAAQgMAAgJgBQgJgBAAAAQAAAAAJgBQAJAAAMAAQAMAAAJAAg");
	this.shape_26.setTransform(34.1,273.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("rgba(255,255,255,0.769)").ss(1.1,1,1).p("AhqAAQAAgCAfgDQAggDArAAQAsAAAgADQAfADAAACQAAADgfADQggACgsAAQgrAAgggCQgfgDAAgDg");
	this.shape_27.setTransform(34.4,273.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(255,255,255,0.737)").ss(1.2,1,1).p("Ai3AAQAAgFA2gFQA2gEBLAAQBMAAA2AEQA2AFAAAFQAAAGg2AEQg2AFhMAAQhLAAg2gFQg2gEAAgGg");
	this.shape_28.setTransform(34.7,273.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("rgba(255,255,255,0.706)").ss(1.3,1,1).p("AkDAAQAAgIBMgHQBMgGBrAAQBsAABMAGQBNAHAAAIQAAAIhNAHQhMAGhsAAQhrAAhMgGQhMgHAAgIg");
	this.shape_29.setTransform(35,273.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(255,255,255,0.671)").ss(1.3,1,1).p("AlQAAQAAgKBjgJQBigICLAAQCLAABjAIQBjAJAAAKQAAALhjAJQhjAIiLAAQiLAAhigIQhjgJAAgLg");
	this.shape_30.setTransform(35.2,273.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("rgba(255,255,255,0.639)").ss(1.4,1,1).p("AmdAAQAAgNB5gLQB5gKCrAAQCrAAB6AKQB5ALAAANQAAAOh5ALQh6AKirAAQirAAh5gKQh5gLAAgOg");
	this.shape_31.setTransform(35.5,273.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(255,255,255,0.608)").ss(1.5,1,1).p("AnqAAQAAgQCQgMQCPgMDLAAQDKAACQAMQCRAMAAAQQAAAQiRANQiQAMjKAAQjLAAiPgMQiQgNAAgQg");
	this.shape_32.setTransform(35.8,273.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("rgba(255,255,255,0.576)").ss(1.6,1,1).p("Ao2AAQAAgTCmgOQCmgODqAAQDrAACmAOQCmAOAAATQAAATimAOQimAPjrAAQjqAAimgPQimgOAAgTg");
	this.shape_33.setTransform(36.1,273.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(255,255,255,0.545)").ss(1.7,1,1).p("AqDAAQAAgVC8gRQC9gPEKAAQEKAAC9APQC9ARAAAVQAAAWi9AQQi9AQkKAAQkKAAi9gQQi8gQAAgWg");
	this.shape_34.setTransform(36.4,273.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("rgba(255,255,255,0.514)").ss(1.7,1,1).p("ArQAAQAAgYDTgSQDUgSEpAAQEqAADTASQDUASAAAYQAAAZjUASQjTASkqAAQkpAAjUgSQjTgSAAgZg");
	this.shape_35.setTransform(36.7,273.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("rgba(255,255,255,0.478)").ss(1.8,1,1).p("AscAAQAAgbDpgUQDqgTFJAAQFKAADpATQDqAUAAAbQAAAbjqAUQjpAUlKAAQlJAAjqgUQjpgUAAgbg");
	this.shape_36.setTransform(36.9,273.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("rgba(255,255,255,0.447)").ss(1.9,1,1).p("AtpAAQAAgdEAgWQEAgWFpAAQFqAAEAAWQEAAWAAAdQAAAekAAWQkAAWlqAAQlpAAkAgWQkAgWAAgeg");
	this.shape_37.setTransform(37.2,273.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("rgba(255,255,255,0.416)").ss(2,1,1).p("Au2AAQAAggEXgYQEWgXGJAAQGJAAEXAXQEXAYAAAgQAAAhkXAXQkXAYmJAAQmJAAkWgYQkXgXAAghg");
	this.shape_38.setTransform(37.5,273.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("rgba(255,255,255,0.384)").ss(2.1,1,1).p("AwCAAQAAgjEsgaQEtgZGpAAQGpAAEtAZQEtAaAAAjQAAAjktAaQktAampAAQmpAAktgaQksgaAAgjg");
	this.shape_39.setTransform(37.8,273.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("rgba(255,255,255,0.353)").ss(2.1,1,1).p("AxPAAQAAglFDgcQFEgcHIAAQHJAAFDAcQFEAcAAAlQAAAmlEAcQlDAbnJAAQnIAAlEgbQlDgcAAgmg");
	this.shape_40.setTransform(38,273.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("rgba(255,255,255,0.322)").ss(2.2,1,1).p("AycAAQAAgoFageQFagdHoAAQHpAAFaAdQFaAeAAAoQAAAplaAdQlaAenpAAQnoAAlageQlagdAAgpg");
	this.shape_41.setTransform(38.3,273.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("rgba(255,255,255,0.286)").ss(2.3,1,1).p("AzoAAQAAgrFwgfQFwggIIAAQIIAAFxAgQFwAfAAArQAAArlwAgQlxAfoIAAQoIAAlwgfQlwggAAgrg");
	this.shape_42.setTransform(38.6,273.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("rgba(255,255,255,0.255)").ss(2.4,1,1).p("A01AAQAAgtGHgiQGGghIoAAQIoAAGHAhQGHAiAAAtQAAAumHAiQmHAhooAAQooAAmGghQmHgiAAgug");
	this.shape_43.setTransform(38.9,273.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("rgba(255,255,255,0.224)").ss(2.5,1,1).p("A2CAAQAAgwGdgkQGdgjJIAAQJIAAGdAjQGeAkAAAwQAAAxmeAkQmdAjpIAAQpIAAmdgjQmdgkAAgxg");
	this.shape_44.setTransform(39.2,273.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("rgba(255,255,255,0.192)").ss(2.5,1,1).p("A3OAAQAAgzGzglQG0glJnAAQJoAAGzAlQG0AlAAAzQAAA0m0AlQmzAlpoAAQpnAAm0glQmzglAAg0g");
	this.shape_45.setTransform(39.4,273.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("rgba(255,255,255,0.161)").ss(2.6,1,1).p("A4bAAQAAg1HKgoQHKgnKHAAQKHAAHKAnQHLAoAAA1QAAA2nLAnQnKAoqHAAQqHAAnKgoQnKgnAAg2g");
	this.shape_46.setTransform(39.7,273.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("rgba(255,255,255,0.129)").ss(2.7,1,1).p("A5oAAQAAg4HggpQHhgpKnAAQKnAAHhApQHhApAAA4QAAA5nhApQnhApqnAAQqnAAnhgpQnggpAAg5g");
	this.shape_47.setTransform(40,273.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(255,255,255,0.094)").ss(2.8,1,1).p("A60AAQAAg7H3grQH3grLGAAQLHAAH3ArQH3ArAAA7QAAA8n3AqQn3AsrHAAQrGAAn3gsQn3gqAAg8g");
	this.shape_48.setTransform(40.3,273.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("rgba(255,255,255,0.063)").ss(2.9,1,1).p("A8BAAQAAg9INguQIOgsLmAAQLnAAINAsQIOAuAAA9QAAA+oOAtQoNAtrnAAQrmAAoOgtQoNgtAAg+g");
	this.shape_49.setTransform(40.6,273.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("rgba(255,255,255,0.031)").ss(2.9,1,1).p("A9OAAQAAhAIkgvQIkgvMGAAQMGAAIkAvQIlAvAABAQAABBolAvQokAvsGAAQsGAAokgvQokgvAAhBg");
	this.shape_50.setTransform(40.9,273.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("rgba(255,255,255,0)").ss(3,1,1).p("AVgB0Qo6AxsmAAQsmAAo6gxQo6gwAAhEQAAhDI6gxQI6gwMmAAQMmAAI6AwQI7AxAABDQAABEo7Awg");
	this.shape_51.setTransform(41.1,273.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_26}]},6).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).wait(26));

	// Layer 3
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("rgba(255,255,255,0.8)").ss(1,1,1).p("AAVgBQAKABAAAAQAAAAgKABQgJABgMAAQgMAAgJgBQgJgBAAAAQAAAAAJgBQAJAAAMAAQAMAAAJAAg");
	this.shape_52.setTransform(34.1,273.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("rgba(255,255,255,0.769)").ss(1.1,1,1).p("AhqAAQAAgCAfgDQAggDArAAQAsAAAgADQAfADAAACQAAADgfADQggACgsAAQgrAAgggCQgfgDAAgDg");
	this.shape_53.setTransform(34.4,273.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("rgba(255,255,255,0.737)").ss(1.2,1,1).p("Ai3AAQAAgFA2gFQA2gEBLAAQBMAAA2AEQA2AFAAAFQAAAGg2AEQg2AFhMAAQhLAAg2gFQg2gEAAgGg");
	this.shape_54.setTransform(34.7,273.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("rgba(255,255,255,0.706)").ss(1.3,1,1).p("AkDAAQAAgIBMgHQBMgGBrAAQBsAABMAGQBNAHAAAIQAAAIhNAHQhMAGhsAAQhrAAhMgGQhMgHAAgIg");
	this.shape_55.setTransform(35,273.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("rgba(255,255,255,0.671)").ss(1.3,1,1).p("AlQAAQAAgKBjgJQBigICLAAQCLAABjAIQBjAJAAAKQAAALhjAJQhjAIiLAAQiLAAhigIQhjgJAAgLg");
	this.shape_56.setTransform(35.2,273.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("rgba(255,255,255,0.639)").ss(1.4,1,1).p("AmdAAQAAgNB5gLQB5gKCrAAQCrAAB6AKQB5ALAAANQAAAOh5ALQh6AKirAAQirAAh5gKQh5gLAAgOg");
	this.shape_57.setTransform(35.5,273.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("rgba(255,255,255,0.608)").ss(1.5,1,1).p("AnqAAQAAgQCQgMQCPgMDLAAQDKAACQAMQCRAMAAAQQAAAQiRANQiQAMjKAAQjLAAiPgMQiQgNAAgQg");
	this.shape_58.setTransform(35.8,273.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("rgba(255,255,255,0.576)").ss(1.6,1,1).p("Ao2AAQAAgTCmgOQCmgODqAAQDrAACmAOQCmAOAAATQAAATimAOQimAPjrAAQjqAAimgPQimgOAAgTg");
	this.shape_59.setTransform(36.1,273.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("rgba(255,255,255,0.545)").ss(1.7,1,1).p("AqDAAQAAgVC8gRQC9gPEKAAQEKAAC9APQC9ARAAAVQAAAWi9AQQi9AQkKAAQkKAAi9gQQi8gQAAgWg");
	this.shape_60.setTransform(36.4,273.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("rgba(255,255,255,0.514)").ss(1.7,1,1).p("ArQAAQAAgYDTgSQDUgSEpAAQEqAADTASQDUASAAAYQAAAZjUASQjTASkqAAQkpAAjUgSQjTgSAAgZg");
	this.shape_61.setTransform(36.7,273.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("rgba(255,255,255,0.478)").ss(1.8,1,1).p("AscAAQAAgbDpgUQDqgTFJAAQFKAADpATQDqAUAAAbQAAAbjqAUQjpAUlKAAQlJAAjqgUQjpgUAAgbg");
	this.shape_62.setTransform(36.9,273.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("rgba(255,255,255,0.447)").ss(1.9,1,1).p("AtpAAQAAgdEAgWQEAgWFpAAQFqAAEAAWQEAAWAAAdQAAAekAAWQkAAWlqAAQlpAAkAgWQkAgWAAgeg");
	this.shape_63.setTransform(37.2,273.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("rgba(255,255,255,0.416)").ss(2,1,1).p("Au2AAQAAggEXgYQEWgXGJAAQGJAAEXAXQEXAYAAAgQAAAhkXAXQkXAYmJAAQmJAAkWgYQkXgXAAghg");
	this.shape_64.setTransform(37.5,273.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("rgba(255,255,255,0.384)").ss(2.1,1,1).p("AwCAAQAAgjEsgaQEtgZGpAAQGpAAEtAZQEtAaAAAjQAAAjktAaQktAampAAQmpAAktgaQksgaAAgjg");
	this.shape_65.setTransform(37.8,273.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("rgba(255,255,255,0.353)").ss(2.1,1,1).p("AxPAAQAAglFDgcQFEgcHIAAQHJAAFDAcQFEAcAAAlQAAAmlEAcQlDAbnJAAQnIAAlEgbQlDgcAAgmg");
	this.shape_66.setTransform(38,273.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("rgba(255,255,255,0.322)").ss(2.2,1,1).p("AycAAQAAgoFageQFagdHoAAQHpAAFaAdQFaAeAAAoQAAAplaAdQlaAenpAAQnoAAlageQlagdAAgpg");
	this.shape_67.setTransform(38.3,273.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("rgba(255,255,255,0.286)").ss(2.3,1,1).p("AzoAAQAAgrFwgfQFwggIIAAQIIAAFxAgQFwAfAAArQAAArlwAgQlxAfoIAAQoIAAlwgfQlwggAAgrg");
	this.shape_68.setTransform(38.6,273.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("rgba(255,255,255,0.255)").ss(2.4,1,1).p("A01AAQAAgtGHgiQGGghIoAAQIoAAGHAhQGHAiAAAtQAAAumHAiQmHAhooAAQooAAmGghQmHgiAAgug");
	this.shape_69.setTransform(38.9,273.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("rgba(255,255,255,0.224)").ss(2.5,1,1).p("A2CAAQAAgwGdgkQGdgjJIAAQJIAAGdAjQGeAkAAAwQAAAxmeAkQmdAjpIAAQpIAAmdgjQmdgkAAgxg");
	this.shape_70.setTransform(39.2,273.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("rgba(255,255,255,0.192)").ss(2.5,1,1).p("A3OAAQAAgzGzglQG0glJnAAQJoAAGzAlQG0AlAAAzQAAA0m0AlQmzAlpoAAQpnAAm0glQmzglAAg0g");
	this.shape_71.setTransform(39.4,273.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("rgba(255,255,255,0.161)").ss(2.6,1,1).p("A4bAAQAAg1HKgoQHKgnKHAAQKHAAHKAnQHLAoAAA1QAAA2nLAnQnKAoqHAAQqHAAnKgoQnKgnAAg2g");
	this.shape_72.setTransform(39.7,273.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("rgba(255,255,255,0.129)").ss(2.7,1,1).p("A5oAAQAAg4HggpQHhgpKnAAQKnAAHhApQHhApAAA4QAAA5nhApQnhApqnAAQqnAAnhgpQnggpAAg5g");
	this.shape_73.setTransform(40,273.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("rgba(255,255,255,0.094)").ss(2.8,1,1).p("A60AAQAAg7H3grQH3grLGAAQLHAAH3ArQH3ArAAA7QAAA8n3AqQn3AsrHAAQrGAAn3gsQn3gqAAg8g");
	this.shape_74.setTransform(40.3,273.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("rgba(255,255,255,0.063)").ss(2.9,1,1).p("A8BAAQAAg9INguQIOgsLmAAQLnAAINAsQIOAuAAA9QAAA+oOAtQoNAtrnAAQrmAAoOgtQoNgtAAg+g");
	this.shape_75.setTransform(40.6,273.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("rgba(255,255,255,0.031)").ss(2.9,1,1).p("A9OAAQAAhAIkgvQIkgvMGAAQMGAAIkAvQIlAvAABAQAABBolAvQokAvsGAAQsGAAokgvQokgvAAhBg");
	this.shape_76.setTransform(40.9,273.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("rgba(255,255,255,0)").ss(3,1,1).p("AVgB0Qo6AxsmAAQsmAAo6gxQo6gwAAhEQAAhDI6gxQI6gwMmAAQMmAAI6AwQI7AxAABDQAABEo7Awg");
	this.shape_77.setTransform(41.1,273.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_52}]},3).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).wait(29));

	// Layer 4
	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("rgba(255,255,255,0.8)").ss(1,1,1).p("AAVgBQAKABAAAAQAAAAgKABQgJABgMAAQgMAAgJgBQgJgBAAAAQAAAAAJgBQAJAAAMAAQAMAAAJAAg");
	this.shape_78.setTransform(34.1,273.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("rgba(255,255,255,0.769)").ss(1.1,1,1).p("AhqAAQAAgCAfgDQAggDArAAQAsAAAgADQAfADAAACQAAADgfADQggACgsAAQgrAAgggCQgfgDAAgDg");
	this.shape_79.setTransform(34.4,273.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("rgba(255,255,255,0.737)").ss(1.2,1,1).p("Ai3AAQAAgFA2gFQA2gEBLAAQBMAAA2AEQA2AFAAAFQAAAGg2AEQg2AFhMAAQhLAAg2gFQg2gEAAgGg");
	this.shape_80.setTransform(34.7,273.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("rgba(255,255,255,0.706)").ss(1.3,1,1).p("AkDAAQAAgIBMgHQBMgGBrAAQBsAABMAGQBNAHAAAIQAAAIhNAHQhMAGhsAAQhrAAhMgGQhMgHAAgIg");
	this.shape_81.setTransform(35,273.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("rgba(255,255,255,0.671)").ss(1.3,1,1).p("AlQAAQAAgKBjgJQBigICLAAQCLAABjAIQBjAJAAAKQAAALhjAJQhjAIiLAAQiLAAhigIQhjgJAAgLg");
	this.shape_82.setTransform(35.2,273.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("rgba(255,255,255,0.639)").ss(1.4,1,1).p("AmdAAQAAgNB5gLQB5gKCrAAQCrAAB6AKQB5ALAAANQAAAOh5ALQh6AKirAAQirAAh5gKQh5gLAAgOg");
	this.shape_83.setTransform(35.5,273.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("rgba(255,255,255,0.608)").ss(1.5,1,1).p("AnqAAQAAgQCQgMQCPgMDLAAQDKAACQAMQCRAMAAAQQAAAQiRANQiQAMjKAAQjLAAiPgMQiQgNAAgQg");
	this.shape_84.setTransform(35.8,273.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("rgba(255,255,255,0.576)").ss(1.6,1,1).p("Ao2AAQAAgTCmgOQCmgODqAAQDrAACmAOQCmAOAAATQAAATimAOQimAPjrAAQjqAAimgPQimgOAAgTg");
	this.shape_85.setTransform(36.1,273.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("rgba(255,255,255,0.545)").ss(1.7,1,1).p("AqDAAQAAgVC8gRQC9gPEKAAQEKAAC9APQC9ARAAAVQAAAWi9AQQi9AQkKAAQkKAAi9gQQi8gQAAgWg");
	this.shape_86.setTransform(36.4,273.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("rgba(255,255,255,0.514)").ss(1.7,1,1).p("ArQAAQAAgYDTgSQDUgSEpAAQEqAADTASQDUASAAAYQAAAZjUASQjTASkqAAQkpAAjUgSQjTgSAAgZg");
	this.shape_87.setTransform(36.7,273.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("rgba(255,255,255,0.478)").ss(1.8,1,1).p("AscAAQAAgbDpgUQDqgTFJAAQFKAADpATQDqAUAAAbQAAAbjqAUQjpAUlKAAQlJAAjqgUQjpgUAAgbg");
	this.shape_88.setTransform(36.9,273.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("rgba(255,255,255,0.447)").ss(1.9,1,1).p("AtpAAQAAgdEAgWQEAgWFpAAQFqAAEAAWQEAAWAAAdQAAAekAAWQkAAWlqAAQlpAAkAgWQkAgWAAgeg");
	this.shape_89.setTransform(37.2,273.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("rgba(255,255,255,0.416)").ss(2,1,1).p("Au2AAQAAggEXgYQEWgXGJAAQGJAAEXAXQEXAYAAAgQAAAhkXAXQkXAYmJAAQmJAAkWgYQkXgXAAghg");
	this.shape_90.setTransform(37.5,273.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("rgba(255,255,255,0.384)").ss(2.1,1,1).p("AwCAAQAAgjEsgaQEtgZGpAAQGpAAEtAZQEtAaAAAjQAAAjktAaQktAampAAQmpAAktgaQksgaAAgjg");
	this.shape_91.setTransform(37.8,273.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("rgba(255,255,255,0.353)").ss(2.1,1,1).p("AxPAAQAAglFDgcQFEgcHIAAQHJAAFDAcQFEAcAAAlQAAAmlEAcQlDAbnJAAQnIAAlEgbQlDgcAAgmg");
	this.shape_92.setTransform(38,273.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("rgba(255,255,255,0.322)").ss(2.2,1,1).p("AycAAQAAgoFageQFagdHoAAQHpAAFaAdQFaAeAAAoQAAAplaAdQlaAenpAAQnoAAlageQlagdAAgpg");
	this.shape_93.setTransform(38.3,273.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("rgba(255,255,255,0.286)").ss(2.3,1,1).p("AzoAAQAAgrFwgfQFwggIIAAQIIAAFxAgQFwAfAAArQAAArlwAgQlxAfoIAAQoIAAlwgfQlwggAAgrg");
	this.shape_94.setTransform(38.6,273.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("rgba(255,255,255,0.255)").ss(2.4,1,1).p("A01AAQAAgtGHgiQGGghIoAAQIoAAGHAhQGHAiAAAtQAAAumHAiQmHAhooAAQooAAmGghQmHgiAAgug");
	this.shape_95.setTransform(38.9,273.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("rgba(255,255,255,0.224)").ss(2.5,1,1).p("A2CAAQAAgwGdgkQGdgjJIAAQJIAAGdAjQGeAkAAAwQAAAxmeAkQmdAjpIAAQpIAAmdgjQmdgkAAgxg");
	this.shape_96.setTransform(39.2,273.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("rgba(255,255,255,0.192)").ss(2.5,1,1).p("A3OAAQAAgzGzglQG0glJnAAQJoAAGzAlQG0AlAAAzQAAA0m0AlQmzAlpoAAQpnAAm0glQmzglAAg0g");
	this.shape_97.setTransform(39.4,273.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("rgba(255,255,255,0.161)").ss(2.6,1,1).p("A4bAAQAAg1HKgoQHKgnKHAAQKHAAHKAnQHLAoAAA1QAAA2nLAnQnKAoqHAAQqHAAnKgoQnKgnAAg2g");
	this.shape_98.setTransform(39.7,273.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("rgba(255,255,255,0.129)").ss(2.7,1,1).p("A5oAAQAAg4HggpQHhgpKnAAQKnAAHhApQHhApAAA4QAAA5nhApQnhApqnAAQqnAAnhgpQnggpAAg5g");
	this.shape_99.setTransform(40,273.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("rgba(255,255,255,0.094)").ss(2.8,1,1).p("A60AAQAAg7H3grQH3grLGAAQLHAAH3ArQH3ArAAA7QAAA8n3AqQn3AsrHAAQrGAAn3gsQn3gqAAg8g");
	this.shape_100.setTransform(40.3,273.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("rgba(255,255,255,0.063)").ss(2.9,1,1).p("A8BAAQAAg9INguQIOgsLmAAQLnAAINAsQIOAuAAA9QAAA+oOAtQoNAtrnAAQrmAAoOgtQoNgtAAg+g");
	this.shape_101.setTransform(40.6,273.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("rgba(255,255,255,0.031)").ss(2.9,1,1).p("A9OAAQAAhAIkgvQIkgvMGAAQMGAAIkAvQIlAvAABAQAABBolAvQokAvsGAAQsGAAokgvQokgvAAhBg");
	this.shape_102.setTransform(40.9,273.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("rgba(255,255,255,0)").ss(3,1,1).p("AVgB0Qo6AxsmAAQsmAAo6gxQo6gwAAhEQAAhDI6gxQI6gwMmAAQMmAAI6AwQI7AxAABDQAABEo7Awg");
	this.shape_103.setTransform(41.1,273.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_78}]}).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(30,271.9,8.2,2.5);


(lib.flowerStem = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#87835C","#54541F","#464012"],[0,0.329,1],-12.4,0,12.5,0).s().p("AAuR0QgqgBgjgZQgpgbgLgrQgVhNgGjeQgChDgBhnIAAhxQAAhbgKquQgChkAKjXQAMj0AOg5QAMgwAJhdQAFg3ASgHQAYgIAgAFQAiAFAkASQAhAQAIAZQAGATgJAgQgFARgbAHQgdAIgNAaQgSAngQBOQgPBPADAoIAFKzQAFGwAGC0QADBgADAXQAIA4AHBdQANBXA4ByQAXAvgVAbQgRAWgoAAIgEAAg");
	this.shape.setTransform(0,-4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.4,-118.1,25,228.1);


(lib.flowerHead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A29A74","#76723E","#656333","#4E4D24"],[0,0.498,0.69,1],7.4,0,-7.4,0).s().p("AgYAiQgUgDgKgVIgTgNIAYADQAdABAUgBQAUgBAOgNIAVgTQAMgGAFATQAGATgMAOQgMAPgfAFQgQACgLAAQgKAAgKgBg");
	this.shape.setTransform(13.5,17.7,1.603,1.603);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#A29A74","#76723E","#656333","#4E4D24"],[0,0.498,0.69,1],-8.1,-2.1,9.1,1.9).s().p("AgaBIQgMgEgQgYQgNgVgJgXQgHgRAIgQQAGgOANgGQAIgEAHgMQAIgNAHgFQAJgGAaANQAjAQAGABQANABAJAqQAIAfAAAVIAAAjQgDAVgRACIgHAAQgeAAgxgSg");
	this.shape_1.setTransform(-13.7,1,1.603,1.603);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FCF3DD","#FDEDC1","#FFE18A","#FFCD03","#F7C50D","#E2B124"],[0,0,0,0.549,0.667,1],0,0,0,0,0,12.2).s().p("AAGBwQgRgCgKgUQgLgWgNgEIg3gPQgRgFgIgoQgGgbABgXQAAgcABgCQACgDAUgGQARgIADAAQAGABAGgCQAMgDAMADIAiAJQAQAEALgHQAOgJARABQAUABAHALIACAEIABgFIAAgUQABgJAJAFQANAGAVA7QAWA+gJAiQgIAhgtAQQgcALgeAAIgLAAg");
	this.shape_2.setTransform(7.3,3.6,1.603,1.603);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FCF3DD","#FDEDC1","#FFE18A","#FFCD03","#F7C50D","#E2B124"],[0,0,0,0.549,0.667,1],0,0,0,0,0,8.5).s().p("AgMBRQg5gGgHgTQgGgMgDgPQgGgdAPgMQANgLAVgZQAUgVAYgIQAkgMAcAbQAYAXgDAQQgCANgcBCQgKAagsAAIgPgBg");
	this.shape_3.setTransform(-14.2,-10.3,1.603,1.603);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FCF3DD","#F2E0AF","#E6C978","#E6AD03","#E5A60D","#E29424"],[0,0,0,0.533,0.655,1],0,0,0,0,0,9).s().p("AgzAMQhAhDAWgMQAegPAYAFIArAHQAcAEAEAEQADAEAeATQAdAVACASQACAZgOAYQgRAcgdACIgCAAQgfAAg8hDg");
	this.shape_4.setTransform(1.5,-6,1.603,1.603);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.3,-23.4,56.7,46.9);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#274B20").s().p("AAOFVQgRgegLgOQgSgYgXgIQgOgGgXgvQgWgugTgEQgngIgtABQgbABg0AGQhGAIglgCQg7gEg7geQh4g8gNhBQgDgQAEgRQAMguA+gvQA+gwBBgMQBbgSDqhDQEHhMBEghQAlgJCBAGQB2AFAsAJQA2ALAWAbQAWAYALA6QAFAbADAYIAHAnIgwAOQgbAJgLACQgNACgTgDQg1gGhEgRQhDgQgUgLIgTgOQgagUgXgJQgogQgqANQhCATgaBJIAFBqQALAYADAtQACAgAYAIQALAEANBPQANBRAMAGQATALAIAIQAOAQAAAZQgMAkgRAGQgfAFgiAJQgWAGgTAAQgvAAgbgkg");
	this.shape.setTransform(-43.7,-25.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2F5326").s().p("ABjHMQhIgJg9g0QgfgdgRgNQgbgWgagKQgQgGgggsQgegpgYgEQgqgIg2AAIhdACQhMACgtgHQhDgLhDglQiDhKgWhKQgFgQABgUQACg7Azg8QAyg6BBgbQAZgfA6gXQA1gWA+gHQBpgNB0gTQCbgaBAgTQCUgrDTgoQA3gDCDALQB7ALApAJQBFAVAgAmQAeAiAPBEQAIAkADAgIAFA1IgNAKQAAADgOAKQgPAKAAACIgfAcQgNALgKAEIgFACQgMAGg7gHIhigPQhMgJgYgIQgYgOgFgBQgzgdgUgJQg4gXgxAFIgoAFQgUACgMAGQgSgCgJAHQgJAHgKATQgEAIAAAIQADADARA2QATA3AMAIIAgBLQAPAjAgANQAZALAfA2QAnBGAFAGQAMAPAVAHQAyAUgcA4QgTAlgoAPIh0AdQg2ANg1AAQgXAAgXgCg");
	this.shape_1.setTransform(-37.4,-21.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#365B2C").s().p("ACZImQh5gDhghAIhKg1QgqgegigOQgRgHgqgoQglgkgcgEQgsgHhAgCIhtgDQhSgEg1gNQhLgShJgsQiNhWgihWQgEgKgFgcQgJhIAqhIQAnhEBAgpQAlg8BcgqQBWgmBdgHQB+gKDOgaQDugfBHgWQBWgZB1gRQBlgOBVgDQBKAFCDARQCAAQAmAJQBVAdArAyQAlAsATBOQAIAjAFAyIAFBDIgLARQAAAGgNAOQgMAPAAAFQgQAWgKAXIgNAeIgBAFQADAShMgHQhfgNgkgCIhJgEQgjgCgagHIgTgIIgUgIQhDgggcgLQhGgcg5gHQhFgKgSACQgcgOgKADQgKACgNAYQgFAJACAKIAkA+QAjA1AaAWQAUAdAdAxQAbAmApATQAmASA4A5QA4A7APAHQAKAFARAEIAaAGQAaAIAEATQAFAZghAoQgaAng/AXQgkANiDAfQhiAXhmAAIgYgBg");
	this.shape_2.setTransform(-31.2,-17.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3D6431").s().p("AhdI3QgVgMhPg0Qg5gngogQQgRgHg2gmQgsgfghgEQgsgGhMgEQhagFgigDQhXgJg+gTQhTgZhQg0QiXhigthgQgGgOgIgdQgThPAkhVQAZg8A+hOQBDhVB0g7QB3g9BzgFQCVgGEmghQFAgkBSgZQBQgZB8gIQBsgIBoAHQBdALCFAWQCCAWAlAKQBkAlA1A+QAvA2AVBXQALAuAFA5IABANIADBEIgJAYQgBAIgKAUQgKATgBAIQgbA/AFApIACAIQAPAhhcgIQh2gRgsAAIhaAAQgsAAghgIQgIgBgRgHIgZgKQhHgdgwgTQhWgjg+gQQhQgWgXgFQgngcgIgBQgNgBgQAcQgGALAEALQAMAVApAuQAwA0AqAjQA2BGAMAMQAnAqAzAYQAsAVBYBAQBJA1AZADIAmADQAXACALACQAgAIAAAXQAAAdgxAwQgiAphWAfQhFAZiVAiQiNAgiZADIgJAAQimAAh/hLg");
	this.shape_3.setTransform(-25.2,-13.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#446C36").s().p("Ah3KRQgkgUhZg5QhJgvgvgTIhSgqQgygagmgFQgkgEhhgHQhWgGg1gHQhcgNhIgZQhagghXg8Qighug5hsQgJgQgKgdQghhdAbhiQAUhLA5hVQBOhyCYhOQCWhNCTgEQCwgFF6gnQGUgpBagcQBLgXCEgBQBzgBB6AQQByASCEAbQCGAbAjALQB0AuA/BJQA4BAAYBhQAOA3AEBCIABAPQACAkAAArIgIAfQAAALgIAYQgIAYgBAKQgYBZASAwQADAGADAFQAeAthugJQiPgSg0ACQhKAEggAAQg1ABgqgJQgJgCgzgRIiOg6QhpgrhBgVIhGgZQghgNgQgJQgwglgMgFQgNgHgSAeQgHANAFANQAMATA7AyQAZAXBdBPQAzA4AhAdQA0AuA8AdQAzAZBnBNQBOA7AegCQAVgBAvAJIA8ANQAmAHgBAmQgCAshAA2QgiAjh6ASQjgAhgzAMQi0Aoi4AGIgkABQjHAAiYhRg");
	this.shape_4.setTransform(-19.5,-9.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4B753B").s().p("AiULtQgygZhmhAQhYg3g2gXQg8gagggNQg3gUgugFIiRgNQhbgHg/gLQhhgRhQggQhjgnhehEQiph5hFh4QgHgMgQgjQhUjDB6jPQBViQC+hgQC1hdC1gDQDKgDHPgsQHnguBkggQBEgWCMAHQB5AGCOAZQCBAaCJAfQCHAgAjANQCEA2BJBVQBABKAcBrQAPA8AFBOIABARQACAmgBA1IgFAlQgBAPgGAcQgGAdAAANQgSBxAcA3QAEAJAFAGQAsA3h/gIQiogTg7ADQhWAHglABQg9ADgzgKQgRgDg2gSQhaghkLhxQhmgpgggZQg4gzgNgJQgQgKgVAjQgIAPAHAPQAMAUBLA2QBrBOAoAjQBtBtB+BAQAsAWCmBuQBzBMAngIIAzBKQg0AsiBAvQiCAvi+AqQjWAwjcALQghABggAAQjnAAiwhYg");
	this.shape_5.setTransform(-13.5,-6.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#517D40").s().p("Ai6NJQg9gdh0hHQhohAg8gZQhxgwhngJIidgNQhhgJhJgPQhmgVhZgnQhqgthlhMQiwiEhUiEQgOgYgOgbQhxjgB3jjQBciuDjhzQDVhtDXgBQDmgCIhgxQI9g0BrgjQA+gUCUAPQB9AMCkAiQCPAgCPAmQCIAkAkAOQCTA/BUBhQBIBUAfB0QASBEAFBYIABAUQABAzgBAyIgEAsQAAARgEAiQgEAhgBAOQgLCNAlA9QAFAJAIAJQAiAngcANQgXALhFgEQjAgVhEAFQhgAKgqADQhHAEg7gLQgfgGgzgRQhKgZhxgvQh2gyhhguQhug2gngiQhAhBgPgLQgTgNgXAnQgKARAJARQAOAUBaA6QB0BJA9A0QBwBoChBSQBTAqCzBoQCTBQAwgOIBTBnQgzAmi/AvImRBYQj8A3j7APQgvADguAAQkHAAjKhhg");
	this.shape_6.setTransform(-6.6,-3.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#588545").s().p("AjdOoQhKgiiBhOQh5hJhCgcQhPghiCgOQibgLhVgKQlCgnj5jAQkkjihLjrQg+jCBZi7QBijMEIiGQD2h8D5AAQD+AAJ4g3QKQg4B0gnQBpgjGpBmQCZAlCXAsQCGAoAmAQQDgBiBfCrQBJCCAGDFQAEBugMDHQAACfA7A/QAqAtgdARQgYANhOgEQjZgXhLAHQiEARg8ACQhhAChpgjQiXgyi1hUQjYhlhAhAQhIhQgRgNQgMgKgKAFQgKAGgPAaQgOAXAXAXQARATA3AfQCxBnBEA5QCWB/EFB4QEgCDBogmQA5gVAzgDQA0gEAUAQQAyAqiwB4Qh9BVlABbQmDBtmWAcQg+AEg8AAQknAAjhhog");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-202.4,-104,404.9,208.1);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F5326").s().p("ABiHLQhHgIg9g0IgwgqQgcgWgZgKQgQgGgggsQgegpgYgEQgqgIg2AAIheACQhLACgugHQhDgLhCglQiDhKgXhKQgEgQABgUQACg6Azg9QAyg6BBgbQAZgfA6gXQA1gWA+gHQBpgNB0gTQCagaBBgTQCggvDHgkQA3gDCUALQCPALAoAJQA/ATAUAoQAHANAUBZQAGAdAFAnIAFA1IgNAKQAAADgOAKQgPAKAAACIggAcQgMALgKAEIgFACQgMAGg7gHIhigPQhMgJgYgIQgYgOgFgBQgygdgWgJQg3gXgxAFIgoAFQgVACgLAGQgSgCgJAHQgJAHgKATQgEAHAAAJQADADARA2QATA3AMAIIAgBLQAPAjAgANQAZALAfA2QAnBHAFAFQAMAPAVAHQAyATgcA5QgTAlgoAPIh0AdQg2ANg0AAQgYAAgYgDg");
	this.shape.setTransform(-33.6,-18.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#274B20").s().p("AADFVQgRgdgKgOQgSgYgXgJQgPgFgWgwQgWgugUgEQgngIgtACQgbAAgzAGQhHAJgkgDQg7gEg8gdQh3g8gNhBQgEgPAFgSQALguA+gwQA+gvBBgNQAlgHBcgYQBfgZBmgdQEFhKBGgiQAkgJCTAFQCIAGAtAIQA1AMAXAaQAVAZALA6QACAHgPARQgQAQACAKIAGAnIgwAPIglAKQgOACgTgCQg1gHhDgQQhEgQgUgLIgTgOQgagVgXgIQgogQgqAMQhBATgbBJIAGBrQALAXADAuQABAfAYAIQAMAEAMBPQANBRAMAHQATAKAIAJQAPAPAAAZQgMAkgRAGQggAFghAJQgXAGgTAAQgvAAgbgkg");
	this.shape_1.setTransform(-38.9,-22.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#365B2C").s().p("ACZImQh5gDhghAIhKg1QgqgegigOQgRgHgqgoQglgkgcgFQgsgGhAgDQhIgBglgCQhRgDg2gNQhLgShJgtQiNhVgihWQgGgOgDgYQgJhHAqhJQAmhEBBgpQAlg9BcgpQBVgmBdgHQB/gKDNgaQDvgfBHgWQBTgYCKgSQBwgOBcgDQBmAGBnANQBpANA9APQBPAbAeA0QARAcAWBeQAIAjAFAyIAFBDIgLARQAAAGgNAOQgMAPgBAFQgPAWgKAXIgNAdIgBAGQADAShMgHQhfgNglgCIhIgEQgkgCgZgHIgUgIIgUgIQg/gfgggMQhGgcg4gHQhFgKgSACQgcgOgKACQgKADgNAYQgFAJACAKIAkA+QAjA1AaAWQAUAdAdAxQAbAmApATQAmASA4A5QA4A7APAHQAKAFARAEIAaAGQAaAIAEATQAEAYggApQgaAnhAAXQgjANiEAfQhiAXhlAAIgYgBg");
	this.shape_2.setTransform(-27.4,-14.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3D6431").s().p("AhdI4QgVgMhPg1Qg5gmgpgRQgQgGg2gmQgsgfghgFQgrgFhNgFQhYgFgkgDQhWgIhAgTQhTgZhPg1QiYhigshgQgGgMgIgfQgUhOAkhWQAZg7A+hOQBEhVB0g7QB3g9BzgFQCVgHElghQFAgkBTgZQBPgYCPgJQB9gIBpAHQBMAJCWBCICnBJQB1ArASAPQAgAXASBNQAMAwAEA3IABANQACAiABAhIgKAYQAAAJgKATQgKATgBAIQgbA/AFApIACAJQAPAhhcgJQh2gQgsgBIhaABQgsgBghgHQgIgCgRgHIgagKQhHgdgvgTQhWgig+gQQhRgXgWgFQgogbgIgBQgMgCgQAcQgGALADAMQANAVApAtQAwA1ApAjQA4BGALALQAnAqAzAYQAsAVBYBAQBJA1AZAEIAmADQAXABALADQAfAHAAAYQAAAdgwAwQgiAohWAfQhEAZiWAjQiNAgiZACIgIAAQinAAh/hKg");
	this.shape_3.setTransform(-21.4,-10.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#446C36").s().p("Ah3KIQglgThZg5QhIgvgwgUIhRgpQgygagmgFQgmgFhfgGQhYgGg0gIQhbgMhIgaQhagfhXg9Qightg6hsQgHgNgLggQghhdAahiQAUhMA6hVQBOhyCXhOQCWhNCUgEQCygFGKgmQGmgqBagcQA+gTCRAkQDNA1AgAEQBxASCFAbQCGAbAjALQCAAzAhAbQAoAhAWBXQANAyAFBGIABAQQACAjAAArIgIAfQAAALgIAZQgIAYgBAKQgYBYASAwIAGAMQAdAshugIQiOgSg0ABQhKAEggABQg1ABgqgJQgKgCgTgHIgggLIiNg5QhpgphBgXIhGgZQghgNgQgKQgxglgLgFQgOgHgRAfQgHANAFANQAMATA7AyIB2BlQAyA4AiAeQA0AtA8AeQAzAZBmBNQBOA6AfgCQAVgBAuAJIA8ANQAnAIgCAlQgBAshAA3QgjAih6ASQjfAigzALQiwAoi8AHIgkAAQjHAAiYhRg");
	this.shape_4.setTransform(-15.7,-6.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4B753B").s().p("AiFLmQiDgYiyhKQg9gagfgNQg3gUgugFIiRgNQhbgHg/gLQhhgRhRggQhignhehEQiph5hFh4QgKgQgNgfQhUjDB6jPQBViQC9hgQC2hdC1gDQDNgDHdgsQH7gvBigfQA5gSCYAsQDbBBAsAHQCCAaCIAgQCHAgAjAMQCPA7AsAnQAxArAZBhQAPA8AFBOIABARQACAzgBAoIgFAlQgBAOgGAbQgGAcAAAOQgSBzAbA3IAKAPQAsA3h/gIQiogTg7ADQhWAHglABQg9ADgzgKQgXgEgwgRQhTgekSh0QhmgrgggZQg5gxgNgJQgQgKgUAjQgJANAIAPQAMAUBLA4QBrBOAoAjQBtBuB+A/QAqAVCoBuQBzBNAngIIAzBKQgXAUgsADQgaADhJgEQivgIiCAdQjXAwjaAKQhfAFhUAAQi0AAiBgXg");
	this.shape_5.setTransform(-9.7,-9.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#588545").s().p("AiZM5QhKgiiBhOQh4hJhCgbQhRgjiFAJQihAUhZAHQifAMh6gbQiigkiQhwQkkjihLjqQg+jDBZi6QBhjNEJiGQD2h8D5AAQGpAAHfgNQKsgTBpgjQBqgjGpBmQCZAlCXAsQCGAoAmAQQDhBjBMCAQA3BeAGDAQACBGgXB9QgOBFggCVQgbCBgDBFQgEBdAgAjQArAtgVATQgQAQhAAAQgZAAhmgGIgEADQh9BVlBBbQmDBtmVAcQg+AEg7AAQkoAAjihpgAJ6B7IgBAAQgqgqgmhQQgLgTgGgBQgIgBgPAWQgOAYAXAYQASATA3AgIAnAWIAAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198.6,-93,397.3,186.1);


(lib.blackout = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E2435").s().p("EhP/A8AMAAAh3/MCf/AAAMAAAB3/g");
	this.shape.setTransform(0,0,1.212,1.057);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-620.6,-405.7,1241.2,811.4);


(lib.growingFlower = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_38 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(38).call(this.frame_38).wait(1));

	// Layer 3
	this.instance = new lib.flowerHead();
	this.instance.setTransform(31,261,0.564,0.564,-34.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.58,scaleY:0.58,rotation:-24,x:37.3,y:256.2},0).wait(1).to({scaleX:0.59,scaleY:0.59,rotation:-13.6,x:43.6,y:251.4},0).wait(1).to({scaleX:0.6,scaleY:0.6,rotation:-3.2,x:49.9,y:246.6},0).wait(1).to({scaleX:0.61,scaleY:0.61,rotation:7.2,x:56.3,y:241.8},0).wait(1).to({scaleX:0.62,scaleY:0.62,rotation:17.6,x:62.6,y:237},0).wait(1).to({scaleX:0.63,scaleY:0.63,rotation:28,x:68.9,y:232.2},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:38.3,x:75.2,y:227.4},0).wait(1).to({scaleX:0.66,scaleY:0.66,rotation:24,x:66.9,y:218.7},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:9.6,x:58.5,y:210},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:-4.8,x:50.2,y:201.4},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:-19.2,x:41.8,y:192.7},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:-33.5,x:33.4,y:184},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:-47.9,x:25.1,y:175.4},0).wait(1).to({scaleX:0.73,scaleY:0.73,rotation:-41.2,x:23.7,y:169.7},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:-34.6,x:22.2,y:164.1},0).wait(1).to({scaleX:0.75,scaleY:0.75,rotation:-27.9,x:20.8,y:158.5},0).wait(1).to({scaleX:0.76,scaleY:0.76,rotation:-21.2,x:19.3,y:152.9},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:-14.6,x:17.9,y:147.3},0).wait(1).to({scaleX:0.78,scaleY:0.78,rotation:-10,x:21.2,y:141.8},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:-5.4,x:24.5,y:136.3},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:-0.9,x:27.8,y:130.8},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:3.7,x:31.1,y:125.3},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:8.3,x:34.4,y:119.9},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:12.8,x:37.7,y:114.4},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:17.4,x:41,y:108.9},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:9.6,x:37,y:104.3},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:1.7,x:33,y:99.7},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:-6.1,x:29,y:95.1},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:-13.9,x:25,y:90.5},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:-21.7,x:21,y:85.9},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:-29.5,x:17,y:81.2},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:-37.3,x:13,y:76.6},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:-31.1,x:17.7,y:72},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:-24.9,x:22.3,y:67.4},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:-18.7,x:27,y:62.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:-12.4,x:31.7,y:58.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-6.2,x:36.3,y:53.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:41,y:49},0).wait(1));

	// Layer 2
	this.instance_1 = new lib.flowerStem();
	this.instance_1.setTransform(36,286,1,0.081,0,0,0,0,117.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:-4,scaleY:0.11,rotation:5,x:37.2,y:272.8},0).wait(1).to({scaleX:1,scaleY:0.14,rotation:10,x:38.9,y:269.7},0).wait(1).to({scaleY:0.17,rotation:15,x:41.2,y:266.7},0).wait(1).to({scaleX:1,scaleY:0.19,rotation:20.1,x:44,y:264.1},0).wait(1).to({scaleY:0.22,rotation:25.1,x:47.3,y:261.8},0).wait(1).to({scaleY:0.25,rotation:30.1,x:51.1,y:260},0).wait(1).to({scaleX:1,scaleY:0.28,rotation:35.1,x:55.3,y:258.6},0).wait(1).to({scaleY:0.31,rotation:28.8,x:53.9,y:253.6},0).wait(1).to({scaleY:0.34,rotation:22.5,x:51.5,y:248.5},0).wait(1).to({scaleY:0.36,rotation:16.2,x:48.3,y:243.7},0).wait(1).to({scaleY:0.39,rotation:9.9,x:44.2,y:239.1},0).wait(1).to({scaleY:0.42,rotation:3.5,x:39.2,y:234.9},0).wait(1).to({scaleX:1,scaleY:0.45,rotation:-2.8,x:33.3,y:231.4},0).wait(1).to({scaleX:1,scaleY:0.48,rotation:-3.7,x:32.3,y:228.4},0).wait(1).to({scaleY:0.5,rotation:-4.7,x:31,y:225.3},0).wait(1).to({scaleY:0.53,rotation:-5.7,x:29.7,y:222.4},0).wait(1).to({scaleY:0.55,rotation:-6.6,x:28.3,y:219.4},0).wait(1).to({scaleY:0.58,rotation:-7.6,x:26.7,y:216.5},0).wait(1).to({scaleY:0.6,rotation:-6.6,x:27.6,y:213.8},0).wait(1).to({scaleX:1,scaleY:0.62,rotation:-5.6,x:28.6,y:211.2},0).wait(1).to({scaleY:0.64,rotation:-4.7,x:29.7,y:208.5},0).wait(1).to({scaleY:0.66,rotation:-3.7,x:30.8,y:205.8},0).wait(1).to({scaleY:0.68,rotation:-2.7,x:32,y:203.2},0).wait(1).to({scaleY:0.71,rotation:-1.8,x:33.4,y:200.7},0).wait(1).to({scaleY:0.73,rotation:-0.8,x:34.8,y:198.1},0).wait(1).to({scaleY:0.75,rotation:-1.4,x:33.8,y:195.5},0).wait(1).to({scaleY:0.77,rotation:-2.1,x:32.6,y:193},0).wait(1).to({scaleX:1,scaleY:0.79,rotation:-2.7,x:31.4,y:190.5},0).wait(1).to({scaleY:0.81,rotation:-3.4,x:30.2,y:188},0).wait(1).to({scaleY:0.83,rotation:-4,x:28.9,y:185.6},0).wait(1).to({scaleY:0.85,rotation:-4.7,x:27.5,y:183.1},0).wait(1).to({scaleY:0.87,rotation:-5.3,x:26.2,y:180.7},0).wait(1).to({scaleY:0.9,rotation:-4.4,x:27.6,y:178},0).wait(1).to({scaleY:0.92,rotation:-3.5,x:29.1,y:175.4},0).wait(1).to({scaleX:1,scaleY:0.94,rotation:-2.7,x:30.7,y:172.7},0).wait(1).to({scaleY:0.96,rotation:-1.8,x:32.4,y:170.1},0).wait(1).to({scaleY:0.98,rotation:-0.9,x:34.2,y:167.5},0).wait(1).to({scaleY:1,rotation:0,x:36,y:165},0).wait(1));

	// Layer 8
	this.instance_2 = new lib.ripple();
	this.instance_2.setTransform(37.5,251.5,1,1,0,0,0,41.1,273.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10.4,245.3,40.7,40.1);


(lib.nupharleaf_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween4("synched",0);
	this.instance.setTransform(202.5,104.1);

	this.instance_1 = new lib.Tween6("synched",0);
	this.instance_1.setTransform(202.5,104.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},11).to({state:[{t:this.instance_1}]},12).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.02,skewX:-3.8,skewY:-14.9},11).to({_off:true,scaleX:1,skewX:0,skewY:0},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,404.9,208.1);


(lib.nupharleaf_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(198.7,93);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F5326").s().p("ABiHLQhHgIg9g0IgwgqQgcgWgZgKQgQgGgggsQgegpgYgEQgqgIg2AAIheACQhLACgugHQhDgLhCglQiDhKgXhKQgEgQABgUQACg6Azg9QAyg6BBgbQAZgfA6gXQA1gWA+gHQBpgNB0gTQCagaBBgTQCggvDHgkQA3gDCUALQCPALAoAJQA/ATAUAoQAHANAUBZQAGAdAFAnIAFA1IgNAKQAAADgOAKQgPAKAAACIggAcQgMALgKAEIgFACQgMAGg7gHIhigPQhMgJgYgIQgYgOgFgBQgygdgWgJQg3gXgxAFIgoAFQgVACgLAGQgSgCgJAHQgJAHgKATQgEAHAAAJQADADARA2QATA3AMAIIAgBLQAPAjAgANQAZALAfA2QAnBHAFAFQAMAPAVAHQAyATgcA5QgTAlgoAPIh0AdQg2ANg0AAQgYAAgYgDg");
	this.shape.setTransform(165.1,74.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#365B2C").s().p("ACZImQh5gDhghAIhKg1QgqgegigOQgRgHgqgoQglgkgcgFQgsgGhAgDQhIgBglgCQhRgDg2gNQhLgShJgtQiNhVgihWQgGgOgDgYQgJhHAqhJQAmhEBBgpQAlg9BcgpQBVgmBdgHQB/gKDNgaQDvgfBHgWQBTgYCKgSQBwgOBcgDQBmAGBnANQBpANA9APQBPAbAeA0QARAcAWBeQAIAjAFAyIAFBDIgLARQAAAGgNAOQgMAPgBAFQgPAWgKAXIgNAdIgBAGQADAShMgHQhfgNglgCIhIgEQgkgCgZgHIgUgIIgUgIQg/gfgggMQhGgcg4gHQhFgKgSACQgcgOgKACQgKADgNAYQgFAJACAKIAkA+QAjA1AaAWQAUAdAdAxQAbAmApATQAmASA4A5QA4A7APAHQAKAFARAEIAaAGQAaAIAEATQAEAYggApQgaAnhAAXQgjANiEAfQhiAXhlAAIgYgBg");
	this.shape_1.setTransform(171.2,78.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3D6431").s().p("AhdI4QgVgMhPg1Qg5gmgpgRQgQgGg2gmQgsgfghgFQgrgFhNgFQhYgFgkgDQhWgIhAgTQhTgZhPg1QiYhigshgQgGgMgIgfQgUhOAkhWQAZg7A+hOQBEhVB0g7QB3g9BzgFQCVgHElghQFAgkBTgZQBPgYCPgJQB9gIBpAHQBMAJCWBCICnBJQB1ArASAPQAgAXASBNQAMAwAEA3IABANQACAiABAhIgKAYQAAAJgKATQgKATgBAIQgbA/AFApIACAJQAPAhhcgJQh2gQgsgBIhaABQgsgBghgHQgIgCgRgHIgagKQhHgdgvgTQhWgig+gQQhRgXgWgFQgogbgIgBQgMgCgQAcQgGALADAMQANAVApAtQAwA1ApAjQA4BGALALQAnAqAzAYQAsAVBYBAQBJA1AZAEIAmADQAXABALADQAfAHAAAYQAAAdgwAwQgiAohWAfQhEAZiWAjQiNAgiZACIgIAAQinAAh/hKg");
	this.shape_2.setTransform(177.2,82.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#446C36").s().p("Ah3KIQglgThZg5QhIgvgwgUIhRgpQgygagmgFQgmgFhfgGQhYgGg0gIQhbgMhIgaQhagfhXg9Qightg6hsQgHgNgLggQghhdAahiQAUhMA6hVQBOhyCXhOQCWhNCUgEQCygFGKgmQGmgqBagcQA+gTCRAkQDNA1AgAEQBxASCFAbQCGAbAjALQCAAzAhAbQAoAhAWBXQANAyAFBGIABAQQACAjAAArIgIAfQAAALgIAZQgIAYgBAKQgYBYASAwIAGAMQAdAshugIQiOgSg0ABQhKAEggABQg1ABgqgJQgKgCgTgHIgggLIiNg5QhpgphBgXIhGgZQghgNgQgKQgxglgLgFQgOgHgRAfQgHANAFANQAMATA7AyIB2BlQAyA4AiAeQA0AtA8AeQAzAZBmBNQBOA6AfgCQAVgBAuAJIA8ANQAnAIgCAlQgBAshAA3QgjAih6ASQjfAigzALQiwAoi8AHIgkAAQjHAAiYhRg");
	this.shape_3.setTransform(182.9,86.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4B753B").s().p("AiFLmQiDgYiyhKQg9gagfgNQg3gUgugFIiRgNQhbgHg/gLQhhgRhRggQhignhehEQiph5hFh4QgKgQgNgfQhUjDB6jPQBViQC9hgQC2hdC1gDQDNgDHdgsQH7gvBigfQA5gSCYAsQDbBBAsAHQCCAaCIAgQCHAgAjAMQCPA7AsAnQAxArAZBhQAPA8AFBOIABARQACAzgBAoIgFAlQgBAOgGAbQgGAcAAAOQgSBzAbA3IAKAPQAsA3h/gIQiogTg7ADQhWAHglABQg9ADgzgKQgXgEgwgRQhTgekSh0QhmgrgggZQg5gxgNgJQgQgKgUAjQgJANAIAPQAMAUBLA4QBrBOAoAjQBtBuB+A/QAqAVCoBuQBzBNAngIIAzBKQgXAUgsADQgaADhJgEQivgIiCAdQjXAwjaAKQhfAFhUAAQi0AAiBgXg");
	this.shape_4.setTransform(189,83.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#588545").s().p("AiZM5QhKgiiBhOQh4hJhCgbQhRgjiFAJQihAUhZAHQifAMh6gbQiigkiQhwQkkjihLjqQg+jDBZi6QBhjNEJiGQD2h8D5AAQGpAAHfgNQKsgTBpgjQBqgjGpBmQCZAlCXAsQCGAoAmAQQDhBjBMCAQA3BeAGDAQACBGgXB9QgOBFggCVQgbCBgDBFQgEBdAgAjQArAtgVATQgQAQhAAAQgZAAhmgGIgEADQh9BVlBBbQmDBtmVAcQg+AEg7AAQkoAAjihpgAJ6B7IgBAAQgqgqgmhQQgLgTgGgBQgIgBgPAWQgOAYAXAYQASATA3AgIAnAWIAAAAg");
	this.shape_5.setTransform(198.7,93);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},20).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},13).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-5.8,x:199,y:42.2},20).to({_off:true,rotation:0,x:165.1,y:74.3},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,397.3,186.1);


(lib.Nuphar_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Lotus_1
	this.Lotus_1 = new lib.nupharleaf_01();
	this.Lotus_1.setTransform(-245,409.1,1.016,0.196,0,0,0,198.5,180.5);

	this.timeline.addTween(cjs.Tween.get(this.Lotus_1).wait(1).to({regX:199,regY:57.9,x:-236.2,y:385.1},0).wait(1).to({x:-227.9,y:385},0).wait(1).to({x:-219.7},0).wait(1).to({x:-211.4},0).wait(1).to({x:-203.1,y:384.9},0).wait(1).to({x:-194.9},0).wait(1).to({x:-186.6},0).wait(1).to({x:-178.3,y:384.8},0).wait(1).to({x:-170.1},0).wait(1).to({x:-161.8},0).wait(1).to({x:-153.5,y:384.7},0).wait(1).to({x:-145.3},0).wait(1).to({x:-137,y:384.6},0).wait(1).to({x:-128.8},0).wait(1).to({x:-120.5},0).wait(1).to({x:-112.2,y:384.5},0).wait(1).to({x:-104},0).wait(1).to({x:-95.7},0).wait(1).to({x:-87.4,y:384.4},0).wait(1).to({x:-79.2},0).wait(1).to({x:-70.9},0).wait(1).to({x:-62.6,y:384.3},0).wait(1).to({x:-54.4},0).wait(1).to({x:-46.1},0).wait(1).to({x:-37.9,y:384.2},0).wait(1).to({x:-29.6},0).wait(1).to({x:-21.3},0).wait(1).to({x:-13.1,y:384.1},0).wait(1).to({x:-4.8},0).wait(1).to({x:3.5},0).wait(1).to({x:11.7,y:384},0).wait(1).to({x:20},0).wait(1).to({x:28.3},0).wait(1).to({x:36.5,y:383.9},0).wait(1).to({x:44.8},0).wait(1).to({x:53.1,y:383.8},0).wait(1).to({x:61.3},0).wait(1).to({x:69.6},0).wait(1).to({x:77.8,y:383.7},0).wait(1).to({x:86.1},0).wait(1).to({x:94.4},0).wait(1).to({x:102.6,y:383.6},0).wait(1).to({x:110.9},0).wait(1).to({x:119.2},0).wait(1).to({x:127.4,y:383.5},0).wait(1).to({x:135.7},0).wait(1).to({x:144},0).wait(1).to({x:152.2,y:383.4},0).wait(1).to({x:160.5},0).wait(142));

	// flower2
	this.instance = new lib.growingFlower("synched",0,false);
	this.instance.setTransform(138.9,296.9,0.762,0.762,0,0,0,38.4,149.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(56).to({_off:false},0).wait(1).to({regX:37.5,regY:158.5,x:138.5,y:303.3,startPosition:1},0).wait(1).to({x:138.8,y:302.9,startPosition:2},0).wait(1).to({x:139,y:302.5,startPosition:3},0).wait(1).to({x:139.3,y:302.1,startPosition:4},0).wait(1).to({x:139.6,y:301.7,startPosition:5},0).wait(1).to({x:139.8,y:301.3,startPosition:6},0).wait(1).to({x:140.1,y:300.9,startPosition:7},0).wait(1).to({x:140.4,y:300.5,startPosition:8},0).wait(1).to({x:140.6,y:300.1,startPosition:9},0).wait(1).to({x:140.9,y:299.7,startPosition:10},0).wait(1).to({x:141.2,y:299.3,startPosition:11},0).wait(1).to({x:141.4,y:298.9,startPosition:12},0).wait(1).to({x:141.7,y:298.5,startPosition:13},0).wait(1).to({x:142,y:298.1,startPosition:14},0).wait(1).to({x:142.2,y:297.7,startPosition:15},0).wait(1).to({x:142.3,y:298.1,startPosition:16},0).wait(1).to({x:142.4,y:298.4,startPosition:17},0).wait(1).to({y:298.7,startPosition:18},0).wait(1).to({x:142.5,y:299.1,startPosition:19},0).wait(1).to({y:299.4,startPosition:20},0).wait(1).to({x:142.6,y:299.7,startPosition:21},0).wait(1).to({y:300.1,startPosition:22},0).wait(1).to({x:142.7,y:300.4,startPosition:23},0).wait(1).to({y:300.7,startPosition:24},0).wait(1).to({x:142.8,y:301.1,startPosition:25},0).wait(1).to({x:142.9,y:301.4,startPosition:26},0).wait(1).to({y:301.7,startPosition:27},0).wait(1).to({x:143,y:302.1,startPosition:28},0).wait(1).to({y:302.4,startPosition:29},0).wait(1).to({x:143.1,y:302.7,startPosition:30},0).wait(1).to({y:303.1,startPosition:31},0).wait(1).to({x:143.2,y:303.4,startPosition:32},0).wait(1).to({y:303.7,startPosition:33},0).wait(1).to({x:143.3,y:303.3,startPosition:34},0).wait(1).to({x:143.4,y:302.9,startPosition:35},0).wait(1).to({y:302.4,startPosition:36},0).wait(1).to({x:143.5,y:302,startPosition:37},0).wait(1).to({y:301.5,startPosition:38},0).wait(1).to({x:143.6,y:301.1},0).wait(1).to({y:300.6},0).wait(1).to({x:143.7,y:300.2},0).wait(1).to({y:299.7},0).wait(1).to({x:143.8,y:299.3},0).wait(1).to({x:143.9,y:298.9},0).wait(1).to({y:298.4},0).wait(1).to({x:144,y:298},0).wait(1).to({y:297.5},0).wait(1).to({x:144.1,y:297.1},0).wait(1).to({y:296.6},0).wait(1).to({x:144.2,y:296.2},0).wait(1).to({y:295.7},0).wait(1).to({x:143.7,y:295.9},0).wait(1).to({x:143.2,y:296.1},0).wait(1).to({x:142.6,y:296.3},0).wait(1).to({x:142.1,y:296.5},0).wait(1).to({x:141.6,y:296.7},0).wait(1).to({x:141,y:296.8},0).wait(1).to({x:140.5,y:297},0).wait(1).to({x:140,y:297.2},0).wait(1).to({x:139.4,y:297.4},0).wait(1).to({x:138.9,y:297.6},0).wait(1).to({x:138.4,y:297.8},0).wait(1).to({x:137.8,y:297.9},0).wait(1).to({x:137.3,y:298.1},0).wait(1).to({x:136.7,y:298.3},0).wait(1).to({x:136.2,y:298.5},0).wait(1).to({x:135.7,y:298.7},0).wait(1).to({x:135.1,y:298.9},0).wait(1).to({x:134.6,y:299},0).wait(1).to({x:134.8,y:298.5},0).wait(1).to({x:134.9,y:298},0).wait(1).to({x:135.1,y:297.5},0).wait(1).to({x:135.3,y:297},0).wait(1).to({x:135.4,y:296.5},0).wait(1).to({x:135.6,y:296},0).wait(1).to({x:135.8,y:295.5},0).wait(1).to({x:135.9,y:295},0).wait(1).to({x:136.1,y:294.5},0).wait(1).to({x:136.3,y:294},0).wait(1).to({x:136.4,y:293.5},0).wait(1).to({x:136.6,y:293},0).wait(1).to({x:136.8,y:292.5},0).wait(1).to({x:136.9,y:292},0).wait(1).to({x:137.1,y:291.5},0).wait(1).to({x:137.3,y:291},0).wait(1).to({x:137.4,y:290.5},0).wait(1).to({x:137.6,y:290},0).wait(1).to({x:137.4,y:290.4},0).wait(1).to({x:137.1,y:290.8},0).wait(1).to({x:136.9,y:291.2},0).wait(1).to({x:136.7,y:291.5},0).wait(1).to({x:136.5,y:291.9},0).wait(1).to({x:136.2,y:292.3},0).wait(1).to({x:136,y:292.6},0).wait(1).to({x:135.8,y:293},0).wait(1).to({x:135.6,y:293.4},0).wait(1).to({x:135.3,y:293.8},0).wait(1).to({x:135.1,y:294.1},0).wait(1).to({x:134.9,y:294.5},0).wait(1).to({x:134.6,y:294.9},0).wait(1).to({x:134.4,y:295.2},0).wait(1).to({x:134.2,y:295.6},0).wait(1).to({x:134,y:296},0).wait(1).to({x:133.7,y:296.3},0).wait(1).to({x:133.5,y:296.7},0).wait(1).to({x:133.3,y:297.1},0).wait(1).to({x:133.1,y:297.5},0).wait(1).to({x:132.8,y:297.8},0).wait(1).to({x:132.6,y:298.2},0).wait(1).to({y:298},0).wait(1).to({y:297.7},0).wait(1).to({y:297.5},0).wait(1).to({x:132.5,y:297.2},0).wait(1).to({y:297},0).wait(1).to({y:296.8},0).wait(1).to({y:296.5},0).wait(1).to({y:296.3},0).wait(1).to({y:296},0).wait(1).to({x:132.4,y:295.8},0).wait(1).to({y:295.6},0).wait(1).to({y:295.3},0).wait(1).to({y:295.1},0).wait(1).to({y:294.8},0).wait(1).to({y:294.6},0).wait(1).to({x:132.3,y:294.4},0).wait(1).to({y:294.1},0).wait(1).to({y:293.9},0).wait(1).to({y:293.6},0).wait(1).to({y:293.4},0).wait(1).to({y:293.2},0).wait(1).to({x:132.2,y:292.9},0).wait(1).to({y:292.7},0).wait(1).to({y:292.4},0).wait(1).to({y:292.2},0).wait(1));

	// Lotus_1
	this.Lotus_1_1 = new lib.nupharleaf_01();
	this.Lotus_1_1.setTransform(1360.4,240.7,0.709,0.118,0,0,180,198.7,179.8);

	this.timeline.addTween(cjs.Tween.get(this.Lotus_1_1).wait(1).to({regX:199,regY:57.9,scaleX:0.71,x:1346.2,y:226.2},0).wait(1).to({x:1332.2},0).wait(1).to({x:1318.3},0).wait(1).to({x:1304.3},0).wait(1).to({x:1290.3},0).wait(1).to({x:1276.4},0).wait(1).to({x:1262.4,y:226.1},0).wait(1).to({x:1248.4},0).wait(1).to({x:1234.4},0).wait(1).to({x:1220.5},0).wait(1).to({x:1206.5},0).wait(1).to({x:1192.6},0).wait(1).to({x:1178.6},0).wait(1).to({x:1164.6,y:226},0).wait(1).to({x:1150.6},0).wait(1).to({x:1136.7},0).wait(1).to({x:1122.7},0).wait(1).to({x:1108.7},0).wait(1).to({x:1094.8},0).wait(1).to({x:1080.8},0).wait(1).to({x:1066.9,y:225.9},0).wait(1).to({x:1052.9},0).wait(1).to({x:1038.9},0).wait(1).to({x:1025},0).wait(1).to({x:1011},0).wait(1).to({x:997},0).wait(1).to({x:983},0).wait(1).to({x:969.1,y:225.8},0).wait(1).to({x:955.1},0).wait(1).to({x:941.1},0).wait(1).to({x:927.2},0).wait(1).to({x:913.2},0).wait(1).to({x:899.2},0).wait(1).to({x:885.3},0).wait(1).to({x:871.3,y:225.7},0).wait(1).to({x:857.3},0).wait(1).to({x:843.4},0).wait(1).to({x:829.4},0).wait(1).to({x:815.4},0).wait(1).to({x:801.5},0).wait(1).to({x:787.5},0).wait(1).to({x:773.5,y:225.6},0).wait(1).to({x:759.6},0).wait(1).to({x:745.6},0).wait(1).to({x:731.6},0).wait(1).to({x:717.7},0).wait(1).to({x:703.7},0).wait(1).to({x:689.7},0).wait(1).to({x:675.8,y:225.5},0).wait(142));

	// flower
	this.instance_1 = new lib.growingFlower("synched",0,false);
	this.instance_1.setTransform(694.6,167,0.513,0.513,0,0,180,38.4,149.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(61).to({_off:false},0).wait(1).to({regX:37.5,regY:158.5,x:695.1,y:171.4,startPosition:1},0).wait(1).to({y:171,startPosition:2},0).wait(1).to({x:695.2,y:170.7,startPosition:3},0).wait(1).to({y:170.3,startPosition:4},0).wait(1).to({y:169.9,startPosition:5},0).wait(1).to({x:695.3,y:169.5,startPosition:6},0).wait(1).to({y:169.2,startPosition:7},0).wait(1).to({x:695.4,y:168.8,startPosition:8},0).wait(1).to({y:168.4,startPosition:9},0).wait(1).to({y:168,startPosition:10},0).wait(1).to({x:695.5,y:167.7,startPosition:11},0).wait(1).to({y:167.3,startPosition:12},0).wait(1).to({y:166.9,startPosition:13},0).wait(1).to({x:695.6,y:166.5,startPosition:14},0).wait(1).to({y:166.2,startPosition:15},0).wait(1).to({x:695.7,y:165.8,startPosition:16},0).wait(1).to({y:165.4,startPosition:17},0).wait(1).to({x:695.2,y:165.5,startPosition:18},0).wait(1).to({x:694.8,y:165.7,startPosition:19},0).wait(1).to({x:694.3,y:165.8,startPosition:20},0).wait(1).to({x:693.8,y:165.9,startPosition:21},0).wait(1).to({x:693.4,y:166.1,startPosition:22},0).wait(1).to({x:692.9,y:166.2,startPosition:23},0).wait(1).to({x:692.4,y:166.3,startPosition:24},0).wait(1).to({x:692,y:166.5,startPosition:25},0).wait(1).to({x:691.5,y:166.6,startPosition:26},0).wait(1).to({x:691,y:166.7,startPosition:27},0).wait(1).to({x:690.6,y:166.9,startPosition:28},0).wait(1).to({x:690.1,y:167,startPosition:29},0).wait(1).to({x:689.6,y:167.1,startPosition:30},0).wait(1).to({x:689.2,y:167.3,startPosition:31},0).wait(1).to({x:688.7,y:167.4,startPosition:32},0).wait(1).to({x:689,y:167.8,startPosition:33},0).wait(1).to({x:689.3,y:168.2,startPosition:34},0).wait(1).to({x:689.6,y:168.6,startPosition:35},0).wait(1).to({x:689.9,y:169,startPosition:36},0).wait(1).to({x:690.2,y:169.5,startPosition:37},0).wait(1).to({x:690.4,y:169.9,startPosition:38},0).wait(1).to({x:690.7,y:170.3},0).wait(1).to({x:691,y:170.7},0).wait(1).to({x:691.3,y:171.1},0).wait(1).to({x:691.6,y:171.5},0).wait(1).to({x:691.9,y:171.9},0).wait(1).to({x:692.2,y:172.3},0).wait(1).to({x:692.5,y:172.8},0).wait(1).to({x:692.8,y:173.2},0).wait(1).to({x:693.1,y:173.6},0).wait(1).to({x:693.4,y:174},0).wait(1).to({x:693.7,y:174.4},0).wait(1).to({x:693.4,y:174.3},0).wait(1).to({x:693.1},0).wait(1).to({x:692.8,y:174.2},0).wait(1).to({x:692.5},0).wait(1).to({x:692.3,y:174.1},0).wait(1).to({x:692},0).wait(1).to({x:691.7,y:174},0).wait(1).to({x:691.4},0).wait(1).to({x:691.2,y:173.9},0).wait(1).to({x:690.9,y:173.8},0).wait(1).to({x:690.6},0).wait(1).to({x:690.3,y:173.7},0).wait(1).to({x:690},0).wait(1).to({x:689.8,y:173.6},0).wait(1).to({x:689.5},0).wait(1).to({x:689.2,y:173.5},0).wait(1).to({x:688.9},0).wait(1).to({x:688.7,y:173.4},0).wait(1).to({y:173.1},0).wait(1).to({x:688.8,y:172.7},0).wait(1).to({x:688.9,y:172.4},0).wait(1).to({x:689,y:172.1},0).wait(1).to({x:689.1,y:171.7},0).wait(1).to({y:171.4},0).wait(1).to({x:689.2,y:171.1},0).wait(1).to({x:689.3,y:170.8},0).wait(1).to({x:689.4,y:170.4},0).wait(1).to({x:689.5,y:170.1},0).wait(1).to({y:169.8},0).wait(1).to({x:689.6,y:169.4},0).wait(1).to({x:689.7,y:169.1},0).wait(1).to({x:689.8,y:168.8},0).wait(1).to({x:689.9,y:168.4},0).wait(1).to({y:168.1},0).wait(1).to({x:690,y:167.8},0).wait(1).to({x:690.1,y:167.4},0).wait(1).to({x:690.6,y:167.7},0).wait(1).to({x:691.1,y:168},0).wait(1).to({x:691.5,y:168.3},0).wait(1).to({x:692,y:168.5},0).wait(1).to({x:692.5,y:168.8},0).wait(1).to({x:693,y:169.1},0).wait(1).to({x:693.4,y:169.4},0).wait(1).to({x:693.9,y:169.6},0).wait(1).to({x:694.4,y:169.9},0).wait(1).to({x:694.9,y:170.2},0).wait(1).to({x:695.3,y:170.4},0).wait(1).to({x:695.8,y:170.7},0).wait(1).to({x:696.3,y:171},0).wait(1).to({x:696.7,y:171.3},0).wait(1).to({x:697.2,y:171.5},0).wait(1).to({x:697.7,y:171.8},0).wait(1).to({x:697.2,y:171.6},0).wait(1).to({x:696.7,y:171.5},0).wait(1).to({x:696.1,y:171.3},0).wait(1).to({x:695.6,y:171.1},0).wait(1).to({x:695.1,y:170.9},0).wait(1).to({x:694.6,y:170.8},0).wait(1).to({x:694,y:170.6},0).wait(1).to({x:693.5,y:170.4},0).wait(1).to({x:693,y:170.3},0).wait(1).to({x:692.5,y:170.1},0).wait(1).to({x:691.9,y:169.9},0).wait(1).to({x:691.4,y:169.7},0).wait(1).to({x:690.9,y:169.6},0).wait(1).to({x:690.4,y:169.4},0).wait(1).to({x:690.6,y:170.1},0).wait(1).to({x:690.9,y:170.8},0).wait(1).to({x:691.1,y:171.5},0).wait(1).to({x:691.4,y:172.2},0).wait(1).to({x:691.6,y:172.9},0).wait(1).to({x:691.9,y:173.6},0).wait(1).to({x:692.1,y:174.3},0).wait(1).to({x:692.4,y:175},0).wait(1).to({x:692.6,y:175.7},0).wait(1).to({x:692.9,y:176.4},0).wait(1).to({x:693.1,y:177.1},0).wait(1).to({x:693.4,y:177.8},0).wait(1).to({x:693.6,y:178.5},0).wait(1).to({x:693.9,y:179.2},0).wait(1));

	// Lotus
	this.Lotus = new lib.nupharleaf_02();
	this.Lotus.setTransform(1441.6,517.7,1.156,0.205,0,0,0,202.6,182.8);

	this.timeline.addTween(cjs.Tween.get(this.Lotus).wait(1).to({regX:202.5,regY:104,x:1423.7,y:501.5},0).wait(1).to({x:1405.9},0).wait(1).to({x:1388.1},0).wait(1).to({x:1370.3},0).wait(1).to({x:1352.5},0).wait(1).to({x:1334.8},0).wait(1).to({x:1317,y:501.4},0).wait(1).to({x:1299.2},0).wait(1).to({x:1281.4},0).wait(1).to({x:1263.6},0).wait(1).to({x:1245.8},0).wait(1).to({x:1228},0).wait(1).to({x:1210.2},0).wait(1).to({x:1192.5,y:501.3},0).wait(1).to({x:1174.7},0).wait(1).to({x:1156.9},0).wait(1).to({x:1139.1},0).wait(1).to({x:1121.3},0).wait(1).to({x:1103.5},0).wait(1).to({x:1085.7},0).wait(1).to({x:1068,y:501.2},0).wait(1).to({x:1050.2},0).wait(1).to({x:1032.4},0).wait(1).to({x:1014.6},0).wait(1).to({x:996.8},0).wait(1).to({x:979},0).wait(1).to({x:961.3},0).wait(1).to({x:943.5,y:501.1},0).wait(1).to({x:925.7},0).wait(1).to({x:907.9},0).wait(1).to({x:890.1},0).wait(1).to({x:872.3},0).wait(1).to({x:854.5},0).wait(1).to({x:836.7},0).wait(1).to({x:818.9,y:501},0).wait(1).to({x:801.2},0).wait(1).to({x:783.4},0).wait(1).to({x:765.6},0).wait(1).to({x:747.8},0).wait(1).to({x:730},0).wait(1).to({x:712.2},0).wait(1).to({x:694.5,y:500.9},0).wait(1).to({x:676.7},0).wait(1).to({x:658.9},0).wait(1).to({x:641.1},0).wait(1).to({x:623.3},0).wait(1).to({x:605.5},0).wait(1).to({x:587.8},0).wait(1).to({x:569.9,y:500.8},0).wait(142));

	// Lotus_1
	this.Lotus_1_2 = new lib.nupharleaf_01();
	this.Lotus_1_2.setTransform(-168.7,207.6,0.576,0.118,0,0,0,198.3,180.7);

	this.timeline.addTween(cjs.Tween.get(this.Lotus_1_2).wait(1).to({regX:199,regY:57.9,x:-155.4,y:193},0).wait(1).to({x:-142.6},0).wait(1).to({x:-129.8},0).wait(1).to({x:-116.9},0).wait(1).to({x:-104.1},0).wait(1).to({x:-91.2},0).wait(1).to({x:-78.4},0).wait(1).to({x:-65.6},0).wait(1).to({x:-52.7},0).wait(1).to({x:-39.9},0).wait(1).to({x:-27.1},0).wait(1).to({x:-14.2},0).wait(1).to({x:-1.4,y:192.9},0).wait(1).to({x:11.4},0).wait(1).to({x:24.3},0).wait(1).to({x:37.1},0).wait(1).to({x:50},0).wait(1).to({x:62.8},0).wait(1).to({x:75.6},0).wait(1).to({x:88.5},0).wait(1).to({x:101.3},0).wait(1).to({x:114.1},0).wait(1).to({x:126.9},0).wait(1).to({x:139.7},0).wait(1).to({x:152.6},0).wait(1).to({x:165.4},0).wait(1).to({x:178.3},0).wait(1).to({x:191.1},0).wait(1).to({x:203.9},0).wait(1).to({x:216.8},0).wait(1).to({x:229.6},0).wait(1).to({x:242.4},0).wait(1).to({x:255.3},0).wait(1).to({x:268.1},0).wait(1).to({x:280.9},0).wait(1).to({x:293.8},0).wait(1).to({x:306.6,y:192.8},0).wait(1).to({x:319.5},0).wait(1).to({x:332.3},0).wait(1).to({x:345.1},0).wait(1).to({x:358},0).wait(1).to({x:370.8},0).wait(1).to({x:383.6},0).wait(1).to({x:396.5},0).wait(1).to({x:409.3},0).wait(1).to({x:422.1},0).wait(1).to({x:435},0).wait(1).to({x:447.8},0).wait(1).to({x:460.6},0).wait(142));

	// Lotus_1
	this.Lotus_1_3 = new lib.nupharleaf_01();
	this.Lotus_1_3.setTransform(1471.6,357.2,0.656,0.211,0,0,0,198.6,179.6);

	this.timeline.addTween(cjs.Tween.get(this.Lotus_1_3).wait(1).to({regX:199,regY:57.9,x:1457.1,y:331.5},0).wait(1).to({x:1442.3},0).wait(1).to({x:1427.6},0).wait(1).to({x:1412.8},0).wait(1).to({x:1398.1},0).wait(1).to({x:1383.3},0).wait(1).to({x:1368.6},0).wait(1).to({x:1353.9},0).wait(1).to({x:1339.1},0).wait(1).to({x:1324.3},0).wait(1).to({x:1309.6},0).wait(1).to({x:1294.9},0).wait(1).to({x:1280.1},0).wait(1).to({x:1265.4},0).wait(1).to({x:1250.6},0).wait(1).to({x:1235.9},0).wait(1).to({x:1221.1},0).wait(1).to({x:1206.4},0).wait(1).to({x:1191.6},0).wait(1).to({x:1176.9},0).wait(1).to({x:1162.2},0).wait(1).to({x:1147.4},0).wait(1).to({x:1132.7},0).wait(1).to({x:1117.9,y:331.4},0).wait(1).to({x:1103.2},0).wait(1).to({x:1088.4},0).wait(1).to({x:1073.7},0).wait(1).to({x:1059},0).wait(1).to({x:1044.2},0).wait(1).to({x:1029.5},0).wait(1).to({x:1014.7},0).wait(1).to({x:1000},0).wait(1).to({x:985.2},0).wait(1).to({x:970.5},0).wait(1).to({x:955.7},0).wait(1).to({x:941},0).wait(1).to({x:926.2},0).wait(1).to({x:911.5},0).wait(1).to({x:896.8},0).wait(1).to({x:882},0).wait(1).to({x:867.3},0).wait(1).to({x:852.5},0).wait(1).to({x:837.8},0).wait(1).to({x:823},0).wait(1).to({x:808.3},0).wait(1).to({x:793.5},0).wait(1).to({x:778.8},0).wait(1).to({x:764.1},0).wait(1).to({x:749.3,y:331.3},0).wait(142));

	// Lotus_1
	this.Lotus_1_4 = new lib.nupharleaf_01();
	this.Lotus_1_4.setTransform(1234.7,440.1,0.912,0.171,0,0,0,198.7,179.8);

	this.timeline.addTween(cjs.Tween.get(this.Lotus_1_4).wait(1).to({regX:199,regY:57.9,x:1219.2,y:419.1},0).wait(1).to({x:1203.4},0).wait(1).to({x:1187.7},0).wait(1).to({x:1171.9},0).wait(1).to({x:1156.1},0).wait(1).to({x:1140.4},0).wait(1).to({x:1124.6},0).wait(1).to({x:1108.8},0).wait(1).to({x:1093},0).wait(1).to({x:1077.3},0).wait(1).to({x:1061.5},0).wait(1).to({x:1045.7},0).wait(1).to({x:1030},0).wait(1).to({x:1014.2},0).wait(1).to({x:998.4},0).wait(1).to({x:982.7},0).wait(1).to({x:966.9},0).wait(1).to({x:951.1},0).wait(1).to({x:935.3},0).wait(1).to({x:919.6},0).wait(1).to({x:903.8},0).wait(1).to({x:888},0).wait(1).to({x:872.3},0).wait(1).to({x:856.5},0).wait(1).to({x:840.8},0).wait(1).to({x:825},0).wait(1).to({x:809.2},0).wait(1).to({x:793.4},0).wait(1).to({x:777.7},0).wait(1).to({x:761.9},0).wait(1).to({x:746.1},0).wait(1).to({x:730.4},0).wait(1).to({x:714.6},0).wait(1).to({x:698.8},0).wait(1).to({x:683.1},0).wait(1).to({x:667.3},0).wait(1).to({x:651.5},0).wait(1).to({x:635.7},0).wait(1).to({x:620},0).wait(1).to({x:604.2},0).wait(1).to({x:588.4},0).wait(1).to({x:572.7},0).wait(1).to({x:556.9},0).wait(1).to({x:541.1},0).wait(1).to({x:525.4},0).wait(1).to({x:509.6},0).wait(1).to({x:493.8},0).wait(1).to({x:478.1},0).wait(1).to({x:462.3},0).wait(142));

	// Lotus_1
	this.Lotus_1_5 = new lib.nupharleaf_01();
	this.Lotus_1_5.setTransform(-240,493,0.804,0.171,0,0,180,198.6,180.1);

	this.timeline.addTween(cjs.Tween.get(this.Lotus_1_5).wait(1).to({regX:199,regY:57.9,x:-233.7,y:472.1},0).wait(1).to({x:-227},0).wait(1).to({x:-220.4},0).wait(1).to({x:-213.8},0).wait(1).to({x:-207.1},0).wait(1).to({x:-200.5},0).wait(1).to({x:-193.9},0).wait(1).to({x:-187.3},0).wait(1).to({x:-180.6},0).wait(1).to({x:-174},0).wait(1).to({x:-167.4},0).wait(1).to({x:-160.7},0).wait(1).to({x:-154.1},0).wait(1).to({x:-147.5},0).wait(1).to({x:-140.9},0).wait(1).to({x:-134.3},0).wait(1).to({x:-127.6},0).wait(1).to({x:-121},0).wait(1).to({x:-114.4},0).wait(1).to({x:-107.7},0).wait(1).to({x:-101.1},0).wait(1).to({x:-94.5},0).wait(1).to({x:-87.8},0).wait(1).to({x:-81.2},0).wait(1).to({x:-74.6,y:472.2},0).wait(1).to({x:-68},0).wait(1).to({x:-61.3},0).wait(1).to({x:-54.7},0).wait(1).to({x:-48.1},0).wait(1).to({x:-41.4},0).wait(1).to({x:-34.8},0).wait(1).to({x:-28.2},0).wait(1).to({x:-21.5},0).wait(1).to({x:-14.9},0).wait(1).to({x:-8.3},0).wait(1).to({x:-1.6},0).wait(1).to({x:5},0).wait(1).to({x:11.6},0).wait(1).to({x:18.2},0).wait(1).to({x:24.9},0).wait(1).to({x:31.5},0).wait(1).to({x:38.1},0).wait(1).to({x:44.8},0).wait(1).to({x:51.4},0).wait(1).to({x:58},0).wait(1).to({x:64.7},0).wait(1).to({x:71.3},0).wait(1).to({x:77.9},0).wait(1).to({x:84.6},0).wait(142));

	// Lotus_1
	this.Lotus_1_6 = new lib.nupharleaf_01();
	this.Lotus_1_6.setTransform(1415.7,453.3,0.83,0.283,0,0,180,198.5,179.9);

	this.timeline.addTween(cjs.Tween.get(this.Lotus_1_6).wait(1).to({regX:199,regY:57.9,scaleX:0.83,x:1403.7,y:418.7},0).wait(1).to({x:1392.1},0).wait(1).to({x:1380.5},0).wait(1).to({x:1368.9},0).wait(1).to({x:1357.3},0).wait(1).to({x:1345.7},0).wait(1).to({x:1334.1,y:418.6},0).wait(1).to({x:1322.5},0).wait(1).to({x:1310.9},0).wait(1).to({x:1299.3},0).wait(1).to({x:1287.6},0).wait(1).to({x:1276.1},0).wait(1).to({x:1264.4},0).wait(1).to({x:1252.8,y:418.5},0).wait(1).to({x:1241.2},0).wait(1).to({x:1229.6},0).wait(1).to({x:1218},0).wait(1).to({x:1206.4},0).wait(1).to({x:1194.8},0).wait(1).to({x:1183.2},0).wait(1).to({x:1171.6,y:418.4},0).wait(1).to({x:1160},0).wait(1).to({x:1148.4},0).wait(1).to({x:1136.8},0).wait(1).to({x:1125.2},0).wait(1).to({x:1113.6},0).wait(1).to({x:1102},0).wait(1).to({x:1090.4,y:418.3},0).wait(1).to({x:1078.8},0).wait(1).to({x:1067.1},0).wait(1).to({x:1055.5},0).wait(1).to({x:1044},0).wait(1).to({x:1032.3},0).wait(1).to({x:1020.7},0).wait(1).to({x:1009.1,y:418.2},0).wait(1).to({x:997.5},0).wait(1).to({x:985.9},0).wait(1).to({x:974.3},0).wait(1).to({x:962.7},0).wait(1).to({x:951.1},0).wait(1).to({x:939.5},0).wait(1).to({x:927.9,y:418.1},0).wait(1).to({x:916.3},0).wait(1).to({x:904.7},0).wait(1).to({x:893.1},0).wait(1).to({x:881.5},0).wait(1).to({x:869.9},0).wait(1).to({x:858.3},0).wait(1).to({x:846.7,y:418},0).wait(142));

	// Lotus_1
	this.Lotus_1_7 = new lib.nupharleaf_01();
	this.Lotus_1_7.setTransform(-314,236.2,0.627,0.118,0,0,180,198.8,179.4);

	this.timeline.addTween(cjs.Tween.get(this.Lotus_1_7).wait(1).to({regX:199,regY:57.9,x:-301.2,y:221.7},0).wait(1).to({x:-288.4},0).wait(1).to({x:-275.5},0).wait(1).to({x:-262.6},0).wait(1).to({x:-249.7},0).wait(1).to({x:-236.8},0).wait(1).to({x:-224},0).wait(1).to({x:-211.1},0).wait(1).to({x:-198.2},0).wait(1).to({x:-185.3},0).wait(1).to({x:-172.4},0).wait(1).to({x:-159.6},0).wait(1).to({x:-146.7},0).wait(1).to({x:-133.8},0).wait(1).to({x:-121},0).wait(1).to({x:-108.1},0).wait(1).to({x:-95.2},0).wait(1).to({x:-82.4},0).wait(1).to({x:-69.5},0).wait(1).to({x:-56.6},0).wait(1).to({x:-43.7},0).wait(1).to({x:-30.8},0).wait(1).to({x:-18},0).wait(1).to({x:-5.1},0).wait(1).to({x:7.8},0).wait(1).to({x:20.7},0).wait(1).to({x:33.5},0).wait(1).to({x:46.4},0).wait(1).to({x:59.3},0).wait(1).to({x:72.2},0).wait(1).to({x:85.1},0).wait(1).to({x:97.9},0).wait(1).to({x:110.8,y:221.6},0).wait(1).to({x:123.7},0).wait(1).to({x:136.6},0).wait(1).to({x:149.4},0).wait(1).to({x:162.3},0).wait(1).to({x:175.2},0).wait(1).to({x:188.1},0).wait(1).to({x:201},0).wait(1).to({x:213.8},0).wait(1).to({x:226.7},0).wait(1).to({x:239.6},0).wait(1).to({x:252.5},0).wait(1).to({x:265.3},0).wait(1).to({x:278.2},0).wait(1).to({x:291.1},0).wait(1).to({x:304},0).wait(1).to({x:316.9},0).wait(142));

	// Lotus_1
	this.Lotus_1_8 = new lib.nupharleaf_01();
	this.Lotus_1_8.setTransform(1577.9,283.9,0.709,0.118,0,0,0,198.8,180.7);

	this.timeline.addTween(cjs.Tween.get(this.Lotus_1_8).wait(1).to({regX:199,regY:57.9,scaleX:0.71,x:1564.2,y:268.9},0).wait(1).to({x:1550.3,y:268.6},0).wait(1).to({x:1536.5,y:268.2},0).wait(1).to({x:1522.6,y:267.9},0).wait(1).to({x:1508.7,y:267.5},0).wait(1).to({x:1494.9,y:267.2},0).wait(1).to({x:1481.1,y:266.8},0).wait(1).to({x:1467.2,y:266.4},0).wait(1).to({x:1453.3,y:266.1},0).wait(1).to({x:1439.5,y:265.7},0).wait(1).to({x:1425.6,y:265.4},0).wait(1).to({x:1411.8,y:265},0).wait(1).to({x:1397.9,y:264.7},0).wait(1).to({x:1384.1,y:264.3},0).wait(1).to({x:1370.2,y:263.9},0).wait(1).to({x:1356.4,y:263.6},0).wait(1).to({x:1342.5,y:263.2},0).wait(1).to({x:1328.7,y:262.9},0).wait(1).to({x:1314.8,y:262.5},0).wait(1).to({x:1301,y:262.2},0).wait(1).to({x:1287.1,y:261.8},0).wait(1).to({x:1273.3,y:261.4},0).wait(1).to({x:1259.4,y:261.1},0).wait(1).to({x:1245.6,y:260.7},0).wait(1).to({x:1231.7,y:260.4},0).wait(1).to({x:1217.9,y:260},0).wait(1).to({x:1204,y:259.7},0).wait(1).to({x:1190.2,y:259.3},0).wait(1).to({x:1176.3,y:258.9},0).wait(1).to({x:1162.5,y:258.6},0).wait(1).to({x:1148.6,y:258.2},0).wait(1).to({x:1134.8,y:257.9},0).wait(1).to({x:1120.9,y:257.5},0).wait(1).to({x:1107.1,y:257.2},0).wait(1).to({x:1093.2,y:256.8},0).wait(1).to({x:1079.4,y:256.4},0).wait(1).to({x:1065.5,y:256.1},0).wait(1).to({x:1051.7,y:255.7},0).wait(1).to({x:1037.8,y:255.4},0).wait(1).to({x:1024,y:255},0).wait(1).to({x:1010.1,y:254.7},0).wait(1).to({x:996.3,y:254.3},0).wait(1).to({x:982.4,y:253.9},0).wait(1).to({x:968.6,y:253.6},0).wait(1).to({x:954.7,y:253.2},0).wait(1).to({x:940.9,y:252.9},0).wait(1).to({x:927,y:252.5},0).wait(1).to({x:913.2,y:252.2},0).wait(1).to({x:899.3,y:251.8},0).wait(142));

	// Lotus_1
	this.Lotus_1_9 = new lib.nupharleaf_01();
	this.Lotus_1_9.setTransform(1268,292,0.627,0.118,0,0,180,198.5,179.8);

	this.timeline.addTween(cjs.Tween.get(this.Lotus_1_9).wait(1).to({regX:199,regY:57.9,x:1256.3,y:277.5},0).wait(1).to({x:1245},0).wait(1).to({x:1233.6},0).wait(1).to({x:1222.3},0).wait(1).to({x:1210.9},0).wait(1).to({x:1199.5},0).wait(1).to({x:1188.2},0).wait(1).to({x:1176.8},0).wait(1).to({x:1165.4},0).wait(1).to({x:1154},0).wait(1).to({x:1142.7},0).wait(1).to({x:1131.3},0).wait(1).to({x:1120,y:277.4},0).wait(1).to({x:1108.6},0).wait(1).to({x:1097.2},0).wait(1).to({x:1085.9},0).wait(1).to({x:1074.5},0).wait(1).to({x:1063.1},0).wait(1).to({x:1051.8},0).wait(1).to({x:1040.4},0).wait(1).to({x:1029},0).wait(1).to({x:1017.7},0).wait(1).to({x:1006.3},0).wait(1).to({x:994.9},0).wait(1).to({x:983.6,y:277.3},0).wait(1).to({x:972.2},0).wait(1).to({x:960.8},0).wait(1).to({x:949.5},0).wait(1).to({x:938.1},0).wait(1).to({x:926.7},0).wait(1).to({x:915.4},0).wait(1).to({x:904},0).wait(1).to({x:892.7},0).wait(1).to({x:881.3},0).wait(1).to({x:869.9},0).wait(1).to({x:858.5},0).wait(1).to({x:847.2,y:277.2},0).wait(1).to({x:835.8},0).wait(1).to({x:824.5},0).wait(1).to({x:813.1},0).wait(1).to({x:801.7},0).wait(1).to({x:790.4},0).wait(1).to({x:779},0).wait(1).to({x:767.6},0).wait(1).to({x:756.3},0).wait(1).to({x:744.9},0).wait(1).to({x:733.5},0).wait(1).to({x:722.2},0).wait(1).to({x:710.8,y:277.1},0).wait(142));

	// Lotus_1
	this.Lotus_1_10 = new lib.nupharleaf_01();
	this.Lotus_1_10.setTransform(-390.3,329.5,1.208,0.254,0,0,0,198.5,180.1);

	this.timeline.addTween(cjs.Tween.get(this.Lotus_1_10).wait(1).to({regX:199,regY:57.9,x:-374.4,y:298.4},0).wait(1).to({x:-359.2},0).wait(1).to({x:-344},0).wait(1).to({x:-328.7,y:298.3},0).wait(1).to({x:-313.5},0).wait(1).to({x:-298.3},0).wait(1).to({x:-283,y:298.2},0).wait(1).to({x:-267.8},0).wait(1).to({x:-252.5},0).wait(1).to({x:-237.3,y:298.1},0).wait(1).to({x:-222.1},0).wait(1).to({x:-206.9},0).wait(1).to({x:-191.6,y:298},0).wait(1).to({x:-176.4},0).wait(1).to({x:-161.1},0).wait(1).to({x:-145.9},0).wait(1).to({x:-130.7,y:297.9},0).wait(1).to({x:-115.4},0).wait(1).to({x:-100.2},0).wait(1).to({x:-85,y:297.8},0).wait(1).to({x:-69.8},0).wait(1).to({x:-54.5},0).wait(1).to({x:-39.3,y:297.7},0).wait(1).to({x:-24.1},0).wait(1).to({x:-8.8},0).wait(1).to({x:6.4},0).wait(1).to({x:21.6,y:297.6},0).wait(1).to({x:36.9},0).wait(1).to({x:52.1},0).wait(1).to({x:67.4,y:297.5},0).wait(1).to({x:82.6},0).wait(1).to({x:97.8},0).wait(1).to({x:113,y:297.4},0).wait(1).to({x:128.3},0).wait(1).to({x:143.5},0).wait(1).to({x:158.8,y:297.3},0).wait(1).to({x:174},0).wait(1).to({x:189.2},0).wait(1).to({x:204.4},0).wait(1).to({x:219.7,y:297.2},0).wait(1).to({x:234.9},0).wait(1).to({x:250.1},0).wait(1).to({x:265.3,y:297.1},0).wait(1).to({x:280.6},0).wait(1).to({x:295.8},0).wait(1).to({x:311,y:297},0).wait(1).to({x:326.3},0).wait(1).to({x:341.5},0).wait(1).to({x:356.7,y:296.9},0).wait(142));

	// Lotus_1
	this.Lotus_1_11 = new lib.nupharleaf_01();
	this.Lotus_1_11.setTransform(-293.2,210.3,0.709,0.118,0,0,180,198.8,179.8);

	this.timeline.addTween(cjs.Tween.get(this.Lotus_1_11).wait(1).to({regX:199,regY:57.9,scaleX:0.71,x:-283.8,y:195.8},0).wait(1).to({x:-274.2},0).wait(1).to({x:-264.7},0).wait(1).to({x:-255.1},0).wait(1).to({x:-245.6},0).wait(1).to({x:-236},0).wait(1).to({x:-226.5},0).wait(1).to({x:-216.9},0).wait(1).to({x:-207.4},0).wait(1).to({x:-197.8},0).wait(1).to({x:-188.2},0).wait(1).to({x:-178.7},0).wait(1).to({x:-169.1},0).wait(1).to({x:-159.6},0).wait(1).to({x:-150},0).wait(1).to({x:-140.5},0).wait(1).to({x:-131,y:195.7},0).wait(1).to({x:-121.4},0).wait(1).to({x:-111.9},0).wait(1).to({x:-102.3},0).wait(1).to({x:-92.7},0).wait(1).to({x:-83.2},0).wait(1).to({x:-73.6},0).wait(1).to({x:-64.1},0).wait(1).to({x:-54.5},0).wait(1).to({x:-45},0).wait(1).to({x:-35.4},0).wait(1).to({x:-25.9},0).wait(1).to({x:-16.3},0).wait(1).to({x:-6.7},0).wait(1).to({x:2.8},0).wait(1).to({x:12.4},0).wait(1).to({x:21.9,y:195.6},0).wait(1).to({x:31.5},0).wait(1).to({x:41},0).wait(1).to({x:50.6},0).wait(1).to({x:60.1},0).wait(1).to({x:69.7},0).wait(1).to({x:79.2},0).wait(1).to({x:88.8},0).wait(1).to({x:98.4},0).wait(1).to({x:107.9},0).wait(1).to({x:117.5},0).wait(1).to({x:127},0).wait(1).to({x:136.6},0).wait(1).to({x:146.1},0).wait(1).to({x:155.7},0).wait(1).to({x:165.2},0).wait(1).to({x:174.8,y:195.5},0).wait(142));

	// Lotus_1
	this.Lotus_1_12 = new lib.nupharleaf_01();
	this.Lotus_1_12.setTransform(-224.4,240.5,0.591,0.118,0,0,180,198.7,179.4);

	this.timeline.addTween(cjs.Tween.get(this.Lotus_1_12).wait(1).to({regX:199,regY:57.9,x:-210.7,y:226.4},0).wait(1).to({x:-196.9,y:226.8},0).wait(1).to({x:-183,y:227.1},0).wait(1).to({x:-169.1,y:227.5},0).wait(1).to({x:-155.2,y:227.9},0).wait(1).to({x:-141.3,y:228.2},0).wait(1).to({x:-127.5,y:228.6},0).wait(1).to({x:-113.6,y:229},0).wait(1).to({x:-99.7,y:229.3},0).wait(1).to({x:-85.9,y:229.7},0).wait(1).to({x:-72,y:230},0).wait(1).to({x:-58.1,y:230.4},0).wait(1).to({x:-44.2,y:230.8},0).wait(1).to({x:-30.4,y:231.1},0).wait(1).to({x:-16.5,y:231.5},0).wait(1).to({x:-2.6,y:231.9},0).wait(1).to({x:11.3,y:232.2},0).wait(1).to({x:25.2,y:232.6},0).wait(1).to({x:39,y:233},0).wait(1).to({x:52.9,y:233.3},0).wait(1).to({x:66.8,y:233.7},0).wait(1).to({x:80.7,y:234},0).wait(1).to({x:94.6,y:234.4},0).wait(1).to({x:108.4,y:234.8},0).wait(1).to({x:122.3,y:235.1},0).wait(1).to({x:136.2,y:235.5},0).wait(1).to({x:150.1,y:235.9},0).wait(1).to({x:163.9,y:236.2},0).wait(1).to({x:177.8,y:236.6},0).wait(1).to({x:191.7,y:236.9},0).wait(1).to({x:205.6,y:237.3},0).wait(1).to({x:219.5,y:237.7},0).wait(1).to({x:233.3,y:238},0).wait(1).to({x:247.2,y:238.4},0).wait(1).to({x:261.1,y:238.8},0).wait(1).to({x:275,y:239.1},0).wait(1).to({x:288.9,y:239.5},0).wait(1).to({x:302.7,y:239.9},0).wait(1).to({x:316.6,y:240.2},0).wait(1).to({x:330.5,y:240.6},0).wait(1).to({x:344.4,y:240.9},0).wait(1).to({x:358.2,y:241.3},0).wait(1).to({x:372.1,y:241.7},0).wait(1).to({x:386,y:242},0).wait(1).to({x:399.9,y:242.4},0).wait(1).to({x:413.8,y:242.8},0).wait(1).to({x:427.6,y:243.1},0).wait(1).to({x:441.5,y:243.5},0).wait(1).to({x:455.4,y:243.8},0).wait(142));

	// Lotus_1
	this.Lotus_1_13 = new lib.nupharleaf_01();
	this.Lotus_1_13.setTransform(-250.2,282.3,0.839,0.196,0,0,180,198.6,180.5);

	this.timeline.addTween(cjs.Tween.get(this.Lotus_1_13).wait(1).to({regX:199,regY:57.9,x:-242.5,y:258.2},0).wait(1).to({x:-234.4,y:258.1},0).wait(1).to({x:-226.4,y:258},0).wait(1).to({x:-218.4,y:257.9},0).wait(1).to({x:-210.3,y:257.7},0).wait(1).to({x:-202.3,y:257.6},0).wait(1).to({x:-194.2,y:257.5},0).wait(1).to({x:-186.2,y:257.4},0).wait(1).to({x:-178.2,y:257.3},0).wait(1).to({x:-170.1,y:257.1},0).wait(1).to({x:-162.1,y:257},0).wait(1).to({x:-154.1,y:256.9},0).wait(1).to({x:-146.1,y:256.8},0).wait(1).to({x:-138,y:256.6},0).wait(1).to({x:-130,y:256.5},0).wait(1).to({x:-122,y:256.4},0).wait(1).to({x:-113.9,y:256.3},0).wait(1).to({x:-105.9,y:256.2},0).wait(1).to({x:-97.8,y:256},0).wait(1).to({x:-89.8,y:255.9},0).wait(1).to({x:-81.8,y:255.8},0).wait(1).to({x:-73.7,y:255.7},0).wait(1).to({x:-65.7,y:255.6},0).wait(1).to({x:-57.7,y:255.4},0).wait(1).to({x:-49.6,y:255.3},0).wait(1).to({x:-41.6,y:255.2},0).wait(1).to({x:-33.6,y:255.1},0).wait(1).to({x:-25.5,y:254.9},0).wait(1).to({x:-17.5,y:254.8},0).wait(1).to({x:-9.4,y:254.7},0).wait(1).to({x:-1.4,y:254.6},0).wait(1).to({x:6.6,y:254.5},0).wait(1).to({x:14.7,y:254.3},0).wait(1).to({x:22.7,y:254.2},0).wait(1).to({x:30.7,y:254.1},0).wait(1).to({x:38.8,y:254},0).wait(1).to({x:46.8,y:253.9},0).wait(1).to({x:54.8,y:253.7},0).wait(1).to({x:62.9,y:253.6},0).wait(1).to({x:70.9,y:253.5},0).wait(1).to({x:79,y:253.4},0).wait(1).to({x:87,y:253.2},0).wait(1).to({x:95,y:253.1},0).wait(1).to({x:103.1,y:253},0).wait(1).to({x:111.1,y:252.9},0).wait(1).to({x:119.1,y:252.8},0).wait(1).to({x:127.2,y:252.6},0).wait(1).to({x:135.2,y:252.5},0).wait(1).to({x:143.3,y:252.4},0).wait(142));

	// Lotus
	this.Lotus_2 = new lib.nupharleaf_02();
	this.Lotus_2.setTransform(1224.5,201.2,0.715,0.079,0,1.5,178.2,201.8,180.8);

	this.timeline.addTween(cjs.Tween.get(this.Lotus_2).wait(1).to({regX:202.5,regY:104,scaleY:0.08,skewY:178,x:1214.9,y:195},0).wait(1).to({x:1205.5},0).wait(1).to({x:1196.1},0).wait(1).to({x:1186.8,y:194.9},0).wait(1).to({x:1177.4},0).wait(1).to({x:1168.1,y:194.8},0).wait(1).to({x:1158.7},0).wait(1).to({x:1149.4,y:194.7},0).wait(1).to({x:1140},0).wait(1).to({x:1130.6,y:194.6},0).wait(1).to({x:1121.3},0).wait(1).to({x:1111.9,y:194.5},0).wait(1).to({x:1102.6},0).wait(1).to({x:1093.2},0).wait(1).to({x:1083.9,y:194.4},0).wait(1).to({x:1074.5},0).wait(1).to({x:1065.1,y:194.3},0).wait(1).to({x:1055.8},0).wait(1).to({x:1046.4,y:194.2},0).wait(1).to({x:1037.1},0).wait(1).to({x:1027.7,y:194.1},0).wait(1).to({x:1018.4},0).wait(1).to({x:1009},0).wait(1).to({x:999.6,y:194},0).wait(1).to({x:990.3},0).wait(1).to({x:980.9,y:193.9},0).wait(1).to({x:971.6},0).wait(1).to({x:962.2,y:193.8},0).wait(1).to({x:952.9},0).wait(1).to({x:943.5,y:193.7},0).wait(1).to({x:934.1},0).wait(1).to({x:924.8},0).wait(1).to({x:915.4,y:193.6},0).wait(1).to({x:906.1},0).wait(1).to({x:896.7,y:193.5},0).wait(1).to({x:887.4},0).wait(1).to({x:878,y:193.4},0).wait(1).to({x:868.6},0).wait(1).to({x:859.3,y:193.3},0).wait(1).to({x:849.9},0).wait(1).to({x:840.6,y:193.2},0).wait(1).to({x:831.2},0).wait(1).to({x:821.9},0).wait(1).to({x:812.5,y:193.1},0).wait(1).to({x:803.1},0).wait(1).to({x:793.8,y:193},0).wait(1).to({x:784.4},0).wait(1).to({x:775.1,y:192.9},0).wait(1).to({x:765.7},0).wait(142));

	// Lotus
	this.Lotus_3 = new lib.nupharleaf_02();
	this.Lotus_3.setTransform(1562.8,392,0.739,0.143,0,-0.5,179,199.6,181.8);

	this.timeline.addTween(cjs.Tween.get(this.Lotus_3).wait(1).to({regX:202.5,regY:104,x:1547.8,y:381},0).wait(1).to({x:1535.2},0).wait(1).to({x:1522.5},0).wait(1).to({x:1509.8},0).wait(1).to({x:1497.2},0).wait(1).to({x:1484.5},0).wait(1).to({x:1471.8,y:381.1},0).wait(1).to({x:1459.1},0).wait(1).to({x:1446.5},0).wait(1).to({x:1433.8},0).wait(1).to({x:1421.1},0).wait(1).to({x:1408.5},0).wait(1).to({x:1395.8,y:381.2},0).wait(1).to({x:1383.1},0).wait(1).to({x:1370.4},0).wait(1).to({x:1357.8},0).wait(1).to({x:1345.1},0).wait(1).to({x:1332.4},0).wait(1).to({x:1319.8,y:381.3},0).wait(1).to({x:1307.1},0).wait(1).to({x:1294.4},0).wait(1).to({x:1281.7},0).wait(1).to({x:1269.1},0).wait(1).to({x:1256.4},0).wait(1).to({x:1243.7,y:381.4},0).wait(1).to({x:1231.1},0).wait(1).to({x:1218.4},0).wait(1).to({x:1205.7},0).wait(1).to({x:1193},0).wait(1).to({x:1180.4,y:381.5},0).wait(1).to({x:1167.7},0).wait(1).to({x:1155},0).wait(1).to({x:1142.4},0).wait(1).to({x:1129.7},0).wait(1).to({x:1117},0).wait(1).to({x:1104.3,y:381.6},0).wait(1).to({x:1091.7},0).wait(1).to({x:1079},0).wait(1).to({x:1066.3},0).wait(1).to({x:1053.7},0).wait(1).to({x:1041},0).wait(1).to({x:1028.3,y:381.7},0).wait(1).to({x:1015.6},0).wait(1).to({x:1003},0).wait(1).to({x:990.3},0).wait(1).to({x:977.6},0).wait(1).to({x:965},0).wait(1).to({x:952.3,y:381.8},0).wait(1).to({x:939.6},0).wait(142));

	// bkgr
	this.instance_2 = new lib.blackout();
	this.instance_2.setTransform(512,384);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({alpha:0.006},0).wait(1).to({alpha:0.012},0).wait(1).to({alpha:0.018},0).wait(1).to({alpha:0.024},0).wait(1).to({alpha:0.03},0).wait(1).to({alpha:0.036},0).wait(1).to({alpha:0.042},0).wait(1).to({alpha:0.048},0).wait(1).to({alpha:0.054},0).wait(1).to({alpha:0.06},0).wait(1).to({alpha:0.066},0).wait(1).to({alpha:0.073},0).wait(1).to({alpha:0.079},0).wait(1).to({alpha:0.085},0).wait(1).to({alpha:0.091},0).wait(1).to({alpha:0.097},0).wait(1).to({alpha:0.103},0).wait(1).to({alpha:0.109},0).wait(1).to({alpha:0.115},0).wait(1).to({alpha:0.121},0).wait(1).to({alpha:0.127},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.139},0).wait(1).to({alpha:0.145},0).wait(1).to({alpha:0.151},0).wait(1).to({alpha:0.157},0).wait(1).to({alpha:0.163},0).wait(1).to({alpha:0.169},0).wait(1).to({alpha:0.175},0).wait(1).to({alpha:0.181},0).wait(1).to({alpha:0.187},0).wait(1).to({alpha:0.193},0).wait(1).to({alpha:0.199},0).wait(1).to({alpha:0.205},0).wait(1).to({alpha:0.211},0).wait(1).to({alpha:0.218},0).wait(1).to({alpha:0.224},0).wait(1).to({alpha:0.23},0).wait(1).to({alpha:0.236},0).wait(1).to({alpha:0.242},0).wait(1).to({alpha:0.248},0).wait(1).to({alpha:0.254},0).wait(1).to({alpha:0.26},0).wait(1).to({alpha:0.266},0).wait(1).to({alpha:0.272},0).wait(1).to({alpha:0.278},0).wait(1).to({alpha:0.284},0).wait(1).to({alpha:0.29},0).wait(143));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-630,-21.7,2348.7,811.4);


// stage content:



(lib.FWW_TilesAll_v01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// nuphar-mc
	this.instance = new lib.Nuphar_mc("synched",0,false);
	this.instance.setTransform(1015.1,607.4,1.817,1.817,0,0,0,544.4,383.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},155).wait(85));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158.7,410.5,4267.1,1474.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;