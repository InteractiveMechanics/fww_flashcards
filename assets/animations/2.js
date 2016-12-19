(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
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
	this.shape.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.141,0.31,0.651,0.804,1,1],0,10.1,0,-10).s().p("ACHBfQgkgHgzgSIhBgYQhvgkghgPQhYgogZg2QAUAHAvAWQAqAUAYAHQAZAIAoAFIBBAKQAlAIBgAXQBYARAtgTIATAwQgVArhBAAQgYAAgdgFg");
	this.shape.setTransform(7.5,2.7,0.271,0.271);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15,5.5);


(lib.RlgAntenawiggle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-0.5,13.6,0.4,-13.3).s().p("AAeBhQhLgOhogLQg+AAgdgEQgygGgMgmQgEgNgCghQgDgegGgRIgRgiQgJgUAEgSQAqgHA+AUQBcAfAJABQA2ALBHADQAsACBTAAQBEAAAlAIQA5ANAhAlQAPARAIAfQAIAfgEAcQgJBIhBgcIg+APQhPgdhfgSg");
	this.shape.setTransform(52.6,3.9,0.271,0.271);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-0.3,9.6,0.3,-8.5).s().p("AlLBVQAYgogegTQgrgSgOgRQAwgvBkgSQBBgMBnAAQAsAAA9AEIBpAGQAaABBLANQA/ALAkgBIAhBCQAcAHACAYQACAYgWAMQgMAGgjgEIgxgHQgqgEg6gBIhlAAQg1AAiYAKQhQAGg8AAQgjAAgdgCg");
	this.shape_1.setTransform(35.2,2.4,0.271,0.271);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-1.5,45.7,1.6,-45.5).s().p("Al1CVQBChWBuhcQCBhnBBg4QAlggA8gmQBEgrAigXQBEgxAsgaQBSgxAjALIBIAAQAgARhJAvQgmAYhBAhQhlA6hVA4QggAWg/A5Qg7A1glAYQhnA8hmBIQhbBBhWBVQgUAUgOAZQgJAPgOAkIgQA6QgMAogOALQAjinBhh9g");
	this.shape_2.setTransform(13.8,14.2,0.271,0.271);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61.9,26.2);


(lib.Rleg03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-7.7,14.6,6.7,-15).s().p("Ag6CBIg7gDQgLg/AshMQAohFA6gnQAZgQAYgDQAfgEARAWQARAWgPAZQgWAbgIAOQgHALgdBSQgWA9gcAWQgYgKgfgDg");
	this.shape.setTransform(6.4,26.3,0.27,0.27);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-10.1,18.5,9.6,-21.8).s().p("AhjB2QgPg5AYg+QAahFAyhDQBChaAzANQAJAygbBBQgSAtgoA5QggAygOAzQgKAngFBKQgygsgPg3g");
	this.shape_1.setTransform(2.8,34.3,0.27,0.27);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-7.2,15.4,8.3,-16.5).s().p("AhOCAIg1gLQgngJgJgJQghgfAwg2QArgvBTgrQBSgsBBgIQBJgJAKArQAEASgFAZQgGAYgLAPQgTAag8AfQhHAkgSAQQgcAYgJAFQgLAEgNAAQgLAAgMgCg");
	this.shape_2.setTransform(11.1,21,0.27,0.27);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-7.2,15.4,8.3,-16.5).s().p("AhOCAIg1gLQgngJgJgJQghgfAwg2QArgvBTgrQBSgsBBgIQBJgJAKArQAEASgFAZQgGAYgLAPQgTAag8AfQhHAkgSAQQgcAYgJAFQgLAEgNAAQgLAAgMgCg");
	this.shape_3.setTransform(28.1,3.3,0.595,0.537,-30,0,0,16.3,-5.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29.9,40.2);


(lib.Rleg02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-9.4,15,5.2,-14.9).s().p("AgICvIgQgsQgKgdgLgPQgcgogLh0QgLh6AkgGQAggFAnBCQA6BdACACQAaAbgSBOQgRBGggAxQgKAPgJAAQgLAAgJgXg");
	this.shape.setTransform(14.5,28.8,0.27,0.27);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-6.6,7.6,4.9,-16.1).s().p("ABICEIh0gxQhhgqgvgdQg2gggQgnQgNgjAVgWQAVgUgDAFQgIAPAJgBQAKgBBNAFQBTADAugGQA7gHBlAXQBpAYALAdQAJAYgXAKQgnAKgdALQgcALgfBDQgXAvgSAAIgHgBg");
	this.shape_1.setTransform(9.3,24.8,0.27,0.27);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-8,13.6,4.2,-11.3).s().p("AhPCIQgYgHgHg+QgGg4AJg4QAFghgFgbQgCgLALgFQBAgcAuAWQAbAMAmAjQAdAUAGA7QAHA5gWAWQgWAWhBAVQgwARgbgBQgIAAgGgBg");
	this.shape_2.setTransform(4.2,19.8,0.27,0.27);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-15.6,33.4,15.8,-31.1).s().p("AgMGFQhkgThchIQgcgVgRgfQgTgggDgjQgGgzAyj0QA1kFAlgMQBKgZClBMQBHAhAtAiQAwAmgBAaQgCATAHCbQAGCIgLA3QgMA/hBBPQg1BBgiAUQgTALghAAQgaAAgjgHg");
	this.shape_3.setTransform(7.3,10.7,0.27,0.27);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-11.9,25.6,12.1,-23.5).s().p("AhVDrIA1iFQAahEAHghIAIiFQAFhnAcgfQAQgSAMBCIASCBQAJBGgFAcQgHAsgrA/Qg4BTgtAuQgXAagIAAQgJAAAOgkg");
	this.shape_4.setTransform(14.5,37.9,0.27,0.27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17.1,45.2);


(lib.Rleg01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-8.6,16.7,7.7,-16.7).s().p("Aj6BTQgcgjA+gpQA2gjBogeQBjgcBagHQBggHAhAYQgSASglAGIg+AHQg1AGgnALQgwANgnAUQg/AqgsAXQgwAagdAAQgUAAgKgNg");
	this.shape.setTransform(7.4,21.3,0.27,0.27);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-5.4,12.2,6.1,-11.6).s().p("AilBDQhNgnAlgjQAcgbBKgRQB7gcBzAAIA0AhQADAHAJAIQAKAIACAFQAPAbgRAIQgFADgsAGQgVADhaAUQhEAUgmAHQgaAEgVAAQgkAAgZgNg");
	this.shape_1.setTransform(15.6,18.6,0.27,0.27);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-7.2,14.1,6.1,-13.2).s().p("ABbBmIhTgHQgYgBgjACIg8AEQgqACgOgHQgMgFgYggQg0gygQgWQgbgnA6gaQBdgpCNAbQAmAIBNASQBEAOAuABIA5A5QAABXhkALQgQACgUAAQgYAAgdgDg");
	this.shape_2.setTransform(25.6,17,0.27,0.27);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-4.8,8.5,4.4,-10.3).s().p("AgvBTQgmgXgOgZQgOgbASgmQAWgwgBgVIBygFQAYATAfASQASASgMAxQgaBog7ABIgCAAQgZAAgkgWg");
	this.shape_3.setTransform(33.1,15.7,0.27,0.27);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-0.5,6.6,3.2,-1).s().p("AAkBKQgXgCgFgBQgNgEgEgPQgFgRgRgaQgTgegOgFIBNgvQAMAKAUArQATApABAQQABAUgFAIQgGAJgQAAIgDAAg");
	this.shape_4.setTransform(30.6,7.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-6.3,10.5,4.5,-11.8).s().p("Ag4AMQAGg5AqhBQgEgBgCgDIgDgGIAcgKQAFAEAYAGQAUALgCAXQgCALgVAUQgZAYgEAHQgRAcgCAtIABBRQgzgvAHhHg");
	this.shape_5.setTransform(1.6,25.7,0.27,0.27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,37.1,29.2);


(lib.LsmAntena = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#886441","#634522","#735229","#603B0F","#886441","#603B0F","#5F4421"],[0.004,0.141,0.31,0.651,0.804,1,1],0,22.7,0,-22.6).s().p("AAmCoQgagagdgsIgpg5QhGhdgSggQgwhUALg6QAMARAZAtQAXApAQAUQAQAUAdAcIAvAtQAaAbBBBMQA9BAAxALIgMAyQgRAJgSAAQguAAg3g7g");
	this.shape.setTransform(5,6.2,0.271,0.271);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10.1,12.4);


(lib.LlgAntenawiggle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-6.9,9.8,4.7,-7.4).s().p("ACkDlIg6gNQg3g5hHg3Qg6gshSgzQg1gZgWgPQgogaAGglQADgOALgdQALgbACgRIAAgkQAAgVAMgOQAmAMArArQBAA/AHAGQApAfA6AgQAhASBJAlQA5AaAcAXQAqAiANAuQANAxgjA3QgUAegWAAQgTAAgUgYg");
	this.shape.setTransform(53.5,13.1,0.27,0.27);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-6,8.1,6,-9.6).s().p("AD3C5IgmgaQgigVgwgZIhVgpQgsgWiEg2Qhvgtg+gkQAlgZgRgcQgdghgEgVQA8gUBcAaQA6AQBXArQAtAXCABIQAVAMA5AqQAxAjAeANIAABHQAVARgJAWQgIAVgYABIgBAAQgNAAgagRg");
	this.shape_1.setTransform(39.3,5.5,0.27,0.27);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-26.5,42.3,26.9,-36.9).s().p("Al1gCQBbgtCDgiQBMgUCZgkQAtgMBDgIIBxgOIB+gSQBagIAYAYIA8AeQAVAbhRAKIhvAHQhwAIhcANQgkAFhNAWQhIAWgqAEQhyALhxASQhjARhwAlQgaAJgWAPQgOAKgaAYIgnArQgaAegRADQBjiACHhCg");
	this.shape_2.setTransform(16.4,5.5,0.27,0.27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60.8,20);


(lib.Path_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E4E1E").s().p("AhEBhQBUhRAIgNQAdgxAAgvQAAgkgUg7IBlBuQgFAMgBAcQgBAegDALQgLAtguAtQgpApg0AXQglARhFAPQgIgZBIhDg");
	this.shape.setTransform(13.4,18.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,26.8,37.7);


(lib.Path_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E4E1E").s().p("AAWCGQABglgDgUQgDgZgQgiIgbg3QgghGgDgPQgLgyAtgRIAPAEQAFAgAjA/QAhA6ACApQADAwgJAvQgLA2gZAgQgBgOACgqg");
	this.shape.setTransform(6.4,19);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12.8,38.1);


(lib.Path_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E4E1E").s().p("AB4DNQhkgChTgLQgPgCgugVQgygXgpgaQhzhJA5ggIAThHQAPgHAZgiQAcgoAMgLQAqglA3gOQAvgMA9ARQAhAJBIAeQAbALBNAcQA+AegLAsQgDAPgRAiQgNAcgBAXQgBAPAPAtQANAogIATQgNAch9AAIgSAAg");
	this.shape.setTransform(29.2,20.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,0,58.6,41);


(lib.Path_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E4E1E").s().p("AgZF6QgdgJg2gxQgsgpgYgeQgyg7gcgkQgyhDgBgnQgBhbAuhGQA7hIAZgmQAVggCchFQCdhFAmAFQAgAFAjC1QATBgAWCTQAKBAgnCEQgnCCghALQggALhSAAQhTAAgfgLg");
	this.shape.setTransform(30.6,38.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61.2,77.9);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgyB0QgpgigNg6QgNg5AVgwQAVgwAsgKQAqgKAoAiQAoAiAOA6QANA5gVAwQgWAwgrAKQgKACgKAAQgfAAgfgag");
	this.shape.setTransform(11,14.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22,28.5);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E4E1E").s().p("AFJFTQghgKgZgYQgNgMgdgmQglgwhEhCQhdhbgRgSQg5g9gbgbQgvgugtggIgsghQgagSgWgKQgNgHgfgFIgzgKQg6gQAIgzQAFghAmgQQAdgMAogBQAwAAArAWQAhARAtAnQAmAgBKA4QBMA8AiAcQCUB5ArAwQBkBuAGBsQACAngQAJQgGAEgKAAQgQAAgagIg");
	this.shape.setTransform(40.1,34.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80.2,69.4);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E4E1E").s().p("ABTD7QgYgjgOg3QgMgugcg4QgQghgmhAQgMgUgWgfIgigyIgagyQgQgegPgLIAXghQAEgRAigCQAhgDAUALQAUAKATAbQAJALATAjQAbAsAXBFIAkBzQAJAYAyBdQAoBXgcAaQgSARgRAAQgXAAgXghg");
	this.shape.setTransform(17.5,28.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35.1,56.7);


(lib.RlgAntena = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.RlgAntenawiggle();
	this.instance.parent = this;
	this.instance.setTransform(61.9,5.6,1,1,0,0,0,61.9,5.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:30.9,regY:13.1,rotation:-6.1,x:32,y:16.4},0).wait(1).to({rotation:-12.1,x:33.2,y:19.4},0).wait(1).to({rotation:-18.2,x:34.8,y:22.4},0).wait(1).to({rotation:-1.6,x:31.2,y:14},0).wait(1).to({rotation:15,x:30,y:4.9},0).wait(1).to({rotation:31.5,x:31.6,y:-4.2},0).wait(1).to({rotation:15.4,x:30,y:4.7},0).wait(1).to({rotation:-0.8,x:31,y:13.5},0).wait(1).to({rotation:-16.9,x:34.4,y:21.8},0).wait(1).to({rotation:-33,x:40,y:28.8},0).wait(1).to({rotation:-17.2,x:34.5,y:21.9},0).wait(1).to({rotation:-1.3,x:31.1,y:13.9},0).wait(1).to({rotation:14.5,x:30,y:5.2},0).wait(1).to({rotation:0,x:30.9,y:13.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61.9,26.2);


(lib.Rleg05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_7();
	this.instance.parent = this;
	this.instance.setTransform(51.8,23.8,0.27,0.27,0,0,0,50.1,43.6);
	this.instance.alpha = 0.211;

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-6.4,15,9.7,-18.1).s().p("AFJFTQghgKgZgYQgNgMgdgmQglgwhEhCQhdhbgRgSQg5g9gbgbQgvgugtggIgsghQgagSgWgKQgNgHgfgFIgzgKQg6gQAIgzQAFghAmgQQAdgMAogBQAwAAArAWQAhARAtAnQAmAgBKA4QBMA8AiAcQCUB5ArAwQBkBuAGBsQACAngQAJQgGAEgKAAQgQAAgagIg");
	this.shape.setTransform(49.1,21.4,0.27,0.27);

	this.instance_1 = new lib.Path_16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(35.7,14.1,0.27,0.27,0,0,0,35.5,28.9);
	this.instance_1.alpha = 0.211;

	this.instance_2 = new lib.Path_18();
	this.instance_2.parent = this;
	this.instance_2.setTransform(57.8,34.2,0.27,0.27,0,0,0,22.4,26.1);
	this.instance_2.alpha = 0.211;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-5.9,20.2,12.4,-17.3).s().p("AB4DNQhkgChTgLQgPgCgugVQgygXgpgaQhzhJA5ggIAThHQAPgHAZgiQAcgoAMgLQAqglA3gOQAvgMA9ARQAhAJBIAeQAbALBNAcQA+AegLAsQgDAPgRAiQgNAcgBAXQgBAPAPAtQANAogIATQgNAch9AAIgSAAg");
	this.shape_1.setTransform(33.9,11.9,0.27,0.27);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-7.1,21.9,10.9,-15.1).s().p("AhEBhQBUhRAIgNQAdgxAAgvQAAgkgUg7IBlBuQgFAMgBAcQgBAegDALQgLAtguAtQgpApg0AXQglAQhFAPQgIgYBIhDg");
	this.shape_2.setTransform(55.3,32.3,0.27,0.27);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],10.9,76.1,40.4,15.7).s().p("AgiKzIhhg+QgggVh1i2Qhwivh/jiQlAo4AUhWQAMgzBOgMQA2gIB3AKQCNALArgBQBegCAggiIEVMTQANAngGBRQgGBRANAmQAQAsBYgCQAxgBBVgNQAogCCMgpQBzghBBAOQAuALApA3QAXAgAnBAQAsA/gWAyQgVAxhHAPQiSAchuARIjEAeQh2AShOAIIgPABQgtAAgwgag");
	this.shape_3.setTransform(8.2,-0.5,0.27,0.27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_2},{t:this.instance_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-19.8,74,57.2);


(lib.Rleg04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_6();
	this.instance.parent = this;
	this.instance.setTransform(47.6,39.2,0.27,0.27,0,0,0,26.4,35.1);
	this.instance.alpha = 0.211;

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-8.5,18.3,10,-19.6).s().p("ABTD7QgYgjgOg3QgMgugcg4QgQghgmhAQgMgUgWgfIgigyIgagyQgQgegPgLIAXghQAEgRAigCQAhgDAUALQAUAKATAbQAJALATAjQAbAsAXBFIAkBzQAJAYAyBdQAoBXgcAaQgSARgRAAQgXAAgXghg");
	this.shape.setTransform(45.3,37.3,0.27,0.27);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-7.9,14.1,6.2,-14.9).s().p("AAWCGQABglgDgUQgDgZgQgiIgbg3QgghGgDgPQgLgyAtgRIAPAEQAFAgAjA/QAhA6ACApQADAwgJAvQgLA2gZAgQgBgOACgqg");
	this.shape_1.setTransform(49.6,48.4,0.27,0.27);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-4.9,11.1,6.1,-11.4).s().p("AAoCRQg0g1gbgRQgNgIhIgXQg4gSgSgZQgbgjAQg4QAPg3AngWQAugbAwAUQAcALAyAsQAfAbBFAvQA8AsAaArQAZApgXAvQgYAvgvAGIgLABQgoAAgrgng");
	this.shape_2.setTransform(37.4,27.2,0.27,0.27);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-11.2,21.2,11.2,-24.8).s().p("ACNCpQhbgSgcgCQiFAChLgIQiIgNgyg8QhOheDuhRQBUgcBngUQBXgRAlAAIBzgBQBEADAoAXQA8AiAIAgQAJAjgaAFQgkgBgTAEQhAAPgDA8QgBASAAAlQgBAigLAWQgLAWgwAAQgRAAgVgDg");
	this.shape_3.setTransform(27,23.8,0.27,0.27);

	this.instance_1 = new lib.Path_17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(51.6,50.7,0.27,0.27,0,0,0,13.8,27.6);
	this.instance_1.alpha = 0.211;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-17.5,32.7,16.5,-36.9).s().p("ACkHgQhygUhrh8QhOhahFiKQgYgygchGIguh7QgphMgUguQglhUAegmIAYg0QABABAtgUQAxgVAPgDQA/gNBRAIQA+AGBAAvQAaASBQBJQBmBdBBBzQBHB/AGB/QAHCIgtBoQgyB0hiAAQgQAAgSgDg");
	this.shape_4.setTransform(10.4,13.1,0.27,0.27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.instance_1},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.3,53.6);


(lib.LlgAntena = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.LlgAntenawiggle();
	this.instance.parent = this;
	this.instance.setTransform(60.8,19.9,1,1,0,0,0,60.8,19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:30.4,regY:10,rotation:2.1,x:30.8,y:8.9},0).wait(1).to({rotation:5.4,x:31.5,y:7.2},0).wait(1).to({rotation:8.7,x:32.3,y:5.6},0).wait(1).to({rotation:12,x:33.2,y:4},0).wait(1).to({rotation:1.9,x:30.8,y:9.1},0).wait(1).to({rotation:-8.3,x:29.4,y:14.5},0).wait(1).to({rotation:-18.4,x:28.9,y:20.1},0).wait(1).to({rotation:-28.5,x:29.3,y:25.7},0).wait(1).to({rotation:-10,x:29.2,y:15.5},0).wait(1).to({rotation:8.4,x:32.2,y:5.8},0).wait(1).to({rotation:26.8,x:38.2,y:-2.6},0).wait(1).to({rotation:17.9,x:35,y:1.2},0).wait(1).to({rotation:8.9,x:32.3,y:5.5},0).wait(1).to({rotation:0,x:30.4,y:10},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60.8,20);


(lib.Scud_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// R-lgAntena
	this.instance = new lib.RlgAntena();
	this.instance.parent = this;
	this.instance.setTransform(-43.3,-10.8,1,1,0,0,0,61,4.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

	// R-smAntenea
	this.instance_1 = new lib.RsmAntenea();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-43.1,-13.9,1,1,0,0,0,15,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:7.5,regY:2.7,rotation:-7.5,x:-50.7,y:-14.4},0).wait(1).to({rotation:-15,y:-13.4},0).wait(1).to({rotation:1.3,x:-50.5,y:-15.6},0).wait(1).to({rotation:17.6,x:-49.7,y:-17.6},0).wait(1).to({rotation:8.3,x:-50.3,y:-16.5},0).wait(1).to({rotation:-1,x:-50.6,y:-15.3},0).wait(1).to({rotation:14.2,x:-49.9,y:-17.2},0).wait(1).to({rotation:29.4,x:-48.8,y:-18.9},0).wait(1).to({rotation:39.5,x:-47.8,y:-19.8},0).wait(1).to({rotation:49.6,x:-46.8,y:-20.5},0).wait(1).to({rotation:22.2,x:-49.4,y:-18.1},0).wait(1).to({rotation:-5.2,x:-50.7,y:-14.7},0).wait(1).to({rotation:4.9,x:-50.4,y:-16},0).wait(1).to({rotation:15,x:-49.9,y:-17.3},0).wait(1));

	// body/head
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAmQgLgLgHgSQgGgSACgPQACgQAKgEQAKgDALALQALAKAHATQAGASgCAPQgCAPgKAEIgFABQgIAAgIgIg");
	this.shape.setTransform(-38.6,-18.1,0.271,0.271);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFE8D7").s().p("ACiHKQgYgZgXgoQgXgnhQikQhMieABgBQiJkzgNhHQgMg0ADgfQAEgqAfgeQADAbATAlQAVAqAGAbQAMA/CFExQgBABBNCcQBPChAWAoQATAjAJAlQACALAKA/QgngWgXgXg");
	this.shape_1.setTransform(46.9,-21.4,0.27,0.27);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFE8D7").s().p("ADDIaQglgVgjgtQgognhei/Qhci5AGgCQABAAhTi4QhYjEgIg1QgMg2AJgsQAJgrAfglQAFAlAMArQASBAAEAQQAEAoBYDEQBTC4gBABQgGACBZC0QBdC6AiAhQAPASAgAzQAYAlAbAYIgOABQgoAAgigTg");
	this.shape_2.setTransform(37.4,-21.8,0.27,0.27);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFE8D7").s().p("AD+HXIgkgRQgigVgdglQgfgihligQhgiaADgBQgCABhYieQhaijgTgrQgUgqgFgkQgGgiAGgtIA0A4QAZAeASAkQATAqBZChQBWCdACgCQgCACBfCXQBjCdAcAgQASAUAXAtQATAmAVAOQgMAIgOAAQgIAAgKgDg");
	this.shape_3.setTransform(24.5,-21.9,0.27,0.27);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EFE8D7").s().p("ACzGfQgegQgcgfQgigchciQQhaiKAFgEQgFADhEiVQhFicgHgsQgLgsAEggQAEgkAYghQAHAUAWAoQASAiAHAdQAGAoBDCVQBBCRAFgDQgFADBWCFQBZCKAfAZQAYAdAQAeQAIAQAUAvQgqgIgbgPg");
	this.shape_4.setTransform(9.9,-20.8,0.27,0.27);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFE8D7").s().p("ADrG9QgkgMglgfQgagUgtguQg1g3gng0Qgmgvgmg4IgfguQgGADhXihQhZingJgxQgQgxACgjQACgpAYgkQAIAaAWAoQAWAoAJAdQAJAsBVChQBUCcAFgEIAeAtQAkA1AkAtQAmAyAzAzQApArAYATQAdAYAZAeQAPASAgApQgtAAgigLg");
	this.shape_5.setTransform(-0.8,-18.3,0.27,0.27);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EFE8D7").s().p("ACcGBQgegOgagbQgUgVgggnQgogzgcgtQgbgqgbgxIgWgqQgFADg2iOQg3iTgDgoQgJgkAEgfQADgYAOgpQAbAgAMAVQAQAaAJAjQAEAmAzCMQAzCGAFgDIAVAoQAZAuAZAnQAxBOA/BEQAXAZAPAbQAKAUAPAoQgpgHgXgLg");
	this.shape_6.setTransform(-14.9,-15.4,0.27,0.27);

	this.instance_2 = new lib.Path_10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-39.6,-16,0.271,0.271,0,0,0,10.7,14.2);
	this.instance_2.alpha = 0.801;

	this.instance_3 = new lib.Path_13();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-38.8,-14.4,0.271,0.271,0,0,0,30.6,38.9);
	this.instance_3.alpha = 0.32;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#D6B881","#7C6A46"],[0,1],-11.2,34.2,19.8,-38.8).s().p("AgZF6QgdgJg2gxQgsgpgYgeQgyg7gcgkQgyhDgBgnQgBhbAuhGQAbgoA5hGQAVggCchFQCdhFAmAFQAgAFAjC1QATBgAWCTQAKBAgnCEQgnCCghALQggALhSAAQhTAAgfgLg");
	this.shape_7.setTransform(-38.8,-14.4,0.271,0.271);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#D6B881","#D1B37D","#C1A673","#A89062","#85714B","#806D48","#7C6A46"],[0,0.161,0.361,0.58,0.816,0.843,0.925],0,78.4,0,-78.4).s().p("AzvL2QgygXgphEIgfhAQgEANgMANQgaAZgsgEQg4gGgpgSQgsgTgrgnQhJg0gggbQg4gxARgxQAIgXAFhVIAMipQAWjoBCg4IA9g6QAcgbAUgIQA7gZCfg8QDFhLAcgFQAKgBC1hBQCmg8AeAEQAcAEAzgUQA8gYASgDIC6gjQCbgdAZAAQASAACpgrQCngrAnAAIBmACQA3ACAegEQAvgHCFgOQCTgPAmAAQAfAABvAZQBvAZAUAAICtgFQCXgEAwAJQAtAIBZAfQBjAjASAFQAhAIgQCUQgVC2AEAbQAIArASCGQAUB7AaA6QAuBjAlCDQAwCngXAvQggBAhgAmQhrAqhFg2QhVhDhKhAQhGg8gPgVIAAADQACAigjAjQgvAvgnAOQgvARg9gVQgrgOgSAAQgHAAgSgOQgVgSgeAYQgqAogkAZQg9Asg2AWQhEAchLADQhDACgmgdQgJgHgGgJQgHAPgXAcQgpAwhXAaQhOAXhYAAQirAAgygeQgWgOgYgaIgTgXQgrAygrAdQgZAQgygBQhkgDgkACQhPAFhogdIhYgeQAEAFgIAJQgRATg/AWQhMAaiTAAIgGAAQiQAAg5gag");
	this.shape_8.setTransform(12.3,-20.2,0.271,0.271);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-9.5,21.6,11.8,-22.1).s().p("Ah4CvQg4gEgjgNQgKgtBAg3QApgjA+gfQASgJBngoQBNgdAjgfIAig5QAABaglBFQgbAwgRAPQgUAQgwAIQg7AKgKAQQgIAMACAZQACAUgVAKQgUAKgrAAIgbAAg");
	this.shape_9.setTransform(-24.8,1,0.27,0.27);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#C8BDAD","#BA9569","#FFFFFF"],[0,0.49,1],-17.1,31.3,16.2,-36.9).s().p("AmADPQgwgOg4g8Qg5g9gGguQgHgwAugxQApgrAxgQIArg6QA/gYBegDQAxgCByAFQDoAKC8gKQBigFAXAGQA6APAMBLQAJA9goAwQgjAog+AXQgvARg+AAQgfAAhRgIIh1gKQhGgGgtgJQhGgWgpgKQhMgSgnASQgaANABAbQAAAbAZAOQAOAIAsABIA9AAQAnACDyACQDiAMADA3QgjANg9ADQhEACgfADIigAPQhbAIhFAAIh6AIIglABQgzAAghgKg");
	this.shape_10.setTransform(-8.7,3.8,0.27,0.27);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8E6441").s().p("AhpDsQgXgRAJgeQAOggADgOQg9ATgogcQgagSgrhBQgXgjgFgKQgKgYAEgdQADgRAXgfQAVgdAAgPICUhpQAhgBALABQBfAIBWAiQBhAnA8A+QAxAzgPBBQgOA+g7AlQgkAXhMAeQhMAdgkAXQgbARgcAHQgOADgLAAQgUAAgNgKg");
	this.shape_11.setTransform(-34.8,-2.4,0.27,0.27);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#D6B881","#CEB17C","#B09768","#998359","#89754E","#7F6D48","#7C6A46"],[0,0.035,0.196,0.361,0.541,0.741,1],-12,23,9.6,-21.3).s().p("AhpDsQgXgRAJgeQAOggADgOQg8ATgogcQgagSgshBQgXgigFgLQgKgYAEgdQADgRAXgfQAVgdAAgPICUhpQAigBAKABQBfAIBWAiQBhAnA8A+QAxAzgPBBQgNA+g8AlQgkAXhMAeQhMAdgkAXQgbARgcAHQgOADgLAAQgUAAgNgKg");
	this.shape_12.setTransform(-34.7,-2.4,0.27,0.27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.instance_3},{t:this.instance_2},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(15));

	// L-smAntena
	this.instance_4 = new lib.LsmAntena();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-45.5,-14.1,1,1,0,0,0,10.1,12.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:5,regY:6.2,rotation:7.5,x:-49.8,y:-20.8},0).wait(1).to({rotation:15,x:-48.8,y:-21.3},0).wait(1).to({rotation:-8.8,x:-51.5,y:-19.3},0).wait(1).to({rotation:-32.6,x:-53.1,y:-16.5},0).wait(1).to({rotation:-14.4,x:-51.9,y:-18.8},0).wait(1).to({rotation:3.9,x:-50.2,y:-20.5},0).wait(1).to({rotation:10.9,x:-49.3,y:-21},0).wait(1).to({rotation:17.8,x:-48.5,y:-21.4},0).wait(1).to({rotation:-7.7,x:-51.4,y:-19.4},0).wait(1).to({rotation:-33.2,x:-53.1,y:-16.4},0).wait(1).to({rotation:-9.9,x:-51.6,y:-19.2},0).wait(1).to({rotation:13.5,x:-49,y:-21.2},0).wait(1).to({rotation:14.3,x:-48.9,y:-21.3},0).wait(1).to({rotation:15.1,x:-48.8},0).wait(1));

	// L-lgAntena
	this.instance_5 = new lib.LlgAntena();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-43.1,-13.9,1,1,0,0,0,60.1,18.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:33.3,regY:11.8,x:-69.9,y:-20.3},0).wait(4).to({regX:60.1,regY:18.2,x:-43.1,y:-13.9},0).wait(1).to({regX:33.3,regY:11.8,x:-69.9,y:-20.3},0).wait(4).to({regX:60.1,regY:18.2,x:-43.1,y:-13.9},0).wait(1).to({regX:33.3,regY:11.8,x:-69.9,y:-20.3},0).wait(4));

	// R-leg03
	this.instance_6 = new lib.Rleg03();
	this.instance_6.parent = this;
	this.instance_6.setTransform(28.3,-8.4,0.999,0.999,14.5,0,0,27.8,2.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:17.4,regY:19.6,scaleX:1,scaleY:1,rotation:-15,x:24.8,y:10.5},0).wait(1).to({rotation:-8.7,x:24.9,y:9.6},0).wait(1).to({rotation:-2.4,x:25,y:8.5},0).wait(1).to({rotation:3.9,x:25.3,y:7.1},0).wait(1).to({regX:27.9,regY:2.8,rotation:8.1,x:21.5,y:-4.7},0).wait(1).to({regX:17.4,regY:19.6,rotation:-15,x:19.6,y:13.2},0).wait(1).to({rotation:-8.7,x:21.4,y:11.4},0).wait(1).to({rotation:-2.4,x:23.3,y:9.3},0).wait(1).to({rotation:3.9,x:25.3,y:7},0).wait(1).to({regX:27.9,regY:2.9,rotation:6.1,x:22.2,y:-8.4},0).wait(1).to({regX:17.4,regY:19.6,rotation:-15,x:20,y:10.3},0).wait(1).to({rotation:-8.7,x:21.6,y:9.4},0).wait(1).to({rotation:-2.4,x:23.4,y:8.3},0).wait(1).to({rotation:3.9,x:25.2,y:7},0).wait(1));

	// R-leg01
	this.instance_7 = new lib.Rleg01();
	this.instance_7.parent = this;
	this.instance_7.setTransform(7.5,-2.2,1,1,0,0,0,28,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:18.5,regY:14.6,rotation:-15,x:1,y:10},0).wait(1).to({rotation:-7.7,x:-0.5,y:9.1},0).wait(1).to({rotation:-0.4,x:-1.9,y:8},0).wait(1).to({rotation:6.9,x:-3.1,y:6.8},0).wait(1).to({regX:28,regY:4.5,rotation:0,x:7.5,y:-2.2},0).wait(1).to({regX:18.5,regY:14.6,rotation:-15,x:1,y:10},0).wait(1).to({rotation:-7.7,x:-0.5,y:9.1},0).wait(1).to({rotation:-0.4,x:-1.9,y:8},0).wait(1).to({rotation:6.9,x:-3.1,y:6.8},0).wait(1).to({regX:28,regY:4.5,rotation:0,x:7.5,y:-2.2},0).wait(1).to({regX:18.5,regY:14.6,rotation:-15,x:1,y:10},0).wait(1).to({rotation:-7.7,x:-0.5,y:9.1},0).wait(1).to({rotation:-0.4,x:-1.9,y:8},0).wait(1).to({rotation:6.9,x:-3.1,y:6.8},0).wait(1));

	// R-leg02
	this.instance_8 = new lib.Rleg02();
	this.instance_8.parent = this;
	this.instance_8.setTransform(38,-7.5,0.999,0.999,25.6,0,0,10,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:8.5,regY:22.6,scaleX:1,scaleY:1,rotation:8,x:33.6,y:12.8},0).wait(1).to({rotation:-9.7,x:40,y:13.1},0).wait(1).to({rotation:-2.1,x:37.3,y:13.2},0).wait(1).to({rotation:5.5,x:34.5,y:12.9},0).wait(1).to({regX:9.8,regY:2,scaleX:1,scaleY:1,rotation:24.6,x:38,y:-7.5},0).wait(1).to({regX:8.5,regY:22.6,scaleX:1,scaleY:1,rotation:7.5,x:34,y:12.8},0).wait(1).to({rotation:-9.7,x:40.1,y:13.1},0).wait(1).to({rotation:-2.1,x:37.4,y:13.3},0).wait(1).to({rotation:5.5,x:34.7,y:13},0).wait(1).to({regX:9.8,regY:2.2,scaleX:1,scaleY:1,rotation:29.1,x:38,y:-7.5},0).wait(1).to({regX:8.5,regY:22.6,scaleX:1,scaleY:1,rotation:9.7,x:33.3,y:12.5},0).wait(1).to({rotation:-9.7,x:40.1,y:12.9},0).wait(1).to({rotation:-2.1,x:37.5,y:13.1},0).wait(1).to({rotation:5.5,x:34.7,y:12.8},0).wait(1));

	// R-leg04
	this.instance_9 = new lib.Rleg04();
	this.instance_9.parent = this;
	this.instance_9.setTransform(41.6,-8.5,0.426,1,0,0,0,4.5,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:25.7,regY:26.8,scaleX:0.57,rotation:-1.4,x:55.6,y:16.8},0).wait(1).to({scaleX:0.71,rotation:-2.9,x:60.6,y:16},0).wait(1).to({scaleX:0.86,rotation:-4.3,x:65.7,y:15.2},0).wait(1).to({scaleX:1,rotation:6.2,x:59.9,y:19.4},0).wait(1).to({regX:4.5,regY:1.2,scaleX:0.54,rotation:0,x:41.6,y:-8.5},0).wait(1).to({regX:25.7,regY:26.8,scaleX:0.65,rotation:-1.4,x:57.4,y:16.6},0).wait(1).to({scaleX:0.77,rotation:-2.9,x:61.8,y:15.9},0).wait(1).to({scaleX:0.88,rotation:-4.3,x:66.2,y:15.1},0).wait(1).to({scaleX:1,rotation:6.2,x:59.9,y:19.3},0).wait(1).to({regX:4.5,regY:1.2,scaleX:0.43,rotation:0,x:41.6,y:-8.5},0).wait(1).to({regX:25.7,regY:26.8,scaleX:0.57,rotation:-1.4,x:55.7,y:16.7},0).wait(1).to({scaleX:0.72,rotation:-2.9,x:60.6,y:15.9},0).wait(1).to({scaleX:0.86,rotation:-4.3,x:65.6,y:15.1},0).wait(1).to({scaleX:1,rotation:6.2,x:59.8,y:19.3},0).wait(1));

	// R-leg05
	this.instance_10 = new lib.Rleg05();
	this.instance_10.parent = this;
	this.instance_10.setTransform(43.7,-12.1,0.425,1,0,0,0,-6,-17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:23,regY:8.8,scaleX:0.57,rotation:-4.5,x:63.9,y:12.9},0).wait(1).to({scaleX:0.71,rotation:-9,x:71.7,y:10.8},0).wait(1).to({scaleX:0.86,rotation:-13.5,x:79.1,y:7.9},0).wait(1).to({scaleX:1,rotation:3.2,x:71.1,y:15.9},0).wait(1).to({regX:-6,regY:-17.6,scaleX:0.55,rotation:0,x:43.7,y:-12.1},0).wait(1).to({regX:23,regY:8.8,scaleX:0.66,rotation:-4.5,x:66.6,y:12.7},0).wait(1).to({scaleX:0.77,rotation:-9,x:73.4,y:10.5},0).wait(1).to({scaleX:0.89,rotation:-13.5,x:80,y:7.7},0).wait(1).to({scaleX:1,rotation:3.2,x:71.2,y:15.9},0).wait(1).to({regX:-6,regY:-17.6,scaleX:0.42,rotation:0,x:43.7,y:-12.1},0).wait(1).to({regX:23,regY:8.8,scaleX:0.57,rotation:-4.5,x:63.9,y:13},0).wait(1).to({scaleX:0.71,rotation:-9,x:71.6,y:10.8},0).wait(1).to({scaleX:0.86,rotation:-13.5,x:79.1,y:7.9},0).wait(1).to({scaleX:1,rotation:3.2,x:71.1,y:15.9},0).wait(1));

	// tail
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#D6B881","#D0B37D","#C0A572","#A48D60","#7F6C48","#7C6A46"],[0,0.18,0.42,0.69,0.984,1],-26.5,61.9,6.6,-53.5).s().p("AjEJ6QgigfhdjaQhdjaAAguQAAkDABhTQAFkwASgeQAMgUAGgqQAEgbAVgEQAZgFCnBBQCUA5BBAhQA0AaCDBMQCFBOAcAVIAPBOQAJBYgYAsQgXArhZDkIhiD5QglBUgIAOQgkBEgiAKQiKAphHAAQgtAAgRgQg");
	this.shape_13.setTransform(65.7,-20.4,0.271,0.271);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#D6B881","#CFB27C","#BBA16F","#9B855A","#7C6A46"],[0,0.176,0.439,0.749,1],-54.2,38.7,28.7,-28.4).s().p("AmbIjQgbg9gBhOQgChTAegpQAug9BAhpQBNh+AAggQAAg3BAjYQBIjvAygjIA4AWQA9AaAVAYQAVAZAQAcIAUAmQAFAJCHC/QCGDCADAmIAGBQQgCAlgcAcQgfAghLBAQhJBAgeAWIh4BsQhjBagsAMQhmAbhXAJQgdADgZAAQhZAAgRgng");
	this.shape_14.setTransform(76.3,-12.4,0.271,0.271);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#D6B881","#7C6A46"],[0,1],-39,0,39.1,0).s().p("Aj9HJQiUhaANhUQAShxAsiIQA2ihApgTQAmgSDlilIEajMQASgNAJAJQAGAGAaAzQATAkgJA6QgLBPABAIQACAngzDIQgyDGgWAoQgyB1gwBUQhcCihNAAQhoAAiKhUg");
	this.shape_15.setTransform(78,3.7,0.271,0.271);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]}).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.3,-41.5,193,85.5);


// stage content:
(lib._20161214_FWW_TilesAll_v05 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// lg scud
	this.instance = new lib.Scud_mc();
	this.instance.parent = this;
	this.instance.setTransform(2197.4,638.6,2.054,2.054,0,0,0,-7.7,1.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(47).to({_off:false},0).wait(1).to({regX:5.5,regY:-4.3,scaleX:2.06,scaleY:2.06,rotation:2.6,x:2101.1,y:617.5},0).wait(1).to({rotation:5.2,x:1977.6,y:608.6},0).wait(1).to({rotation:7.7,x:1854.1,y:599.7},0).wait(1).to({rotation:10.3,x:1730.5,y:590.8},0).wait(1).to({rotation:12.9,x:1606.9,y:581.9},0).wait(1).to({rotation:15.5,x:1483.2,y:573.1},0).wait(1).to({rotation:-7.4,x:1394.8,y:576.3},0).wait(1).to({rotation:-7.4,x:1310.5,y:590.5},0).wait(1).to({x:1226.2,y:604.8},0).wait(1).to({rotation:-7.3,x:1141.9,y:619.1},0).wait(1).to({x:1057.6,y:633.3},0).wait(1).to({x:973.3,y:647.6},0).wait(1).to({scaleX:2.05,scaleY:2.05,rotation:-7.2,x:889,y:661.9},0).wait(1).to({x:804.7,y:676.1},0).wait(1).to({x:720.4,y:690.4},0).wait(1).to({rotation:-7.1,x:636.1,y:704.7},0).wait(1).to({x:540,y:700},0).wait(1).to({x:443.9,y:695.3},0).wait(1).to({x:347.8,y:690.5},0).wait(1).to({x:251.6,y:685.8},0).wait(1).to({x:155.5,y:681.1},0).wait(1).to({x:59.4,y:676.4},0).wait(1).to({x:-36.6,y:671.7},0).wait(1).to({x:-132.7,y:667},0).wait(1).to({x:-228.8,y:662.3},0).to({_off:true},1).wait(167));

	// Layer 2 copy 6
	this.instance_1 = new lib.Scud_mc("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-78.5,1127.5,0.662,0.662,52.9,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:-0.1,scaleX:0.74,scaleY:0.74,rotation:87.3,x:43.3,y:568.5,startPosition:9},9).to({regY:0.1,scaleX:0.85,scaleY:0.85,rotation:80.4,x:32.2,y:216.2,startPosition:6},12).to({regX:0,regY:0,scaleX:1.08,scaleY:1.08,rotation:52.9,x:-64.6,y:-88.1,startPosition:1},25).to({_off:true},1).wait(193));

	// Layer 2 copy 5
	this.instance_2 = new lib.Scud_mc("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-37.2,1161.7,0.537,0.577,0,-32.3,147.7,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:0.2,scaleX:0.69,scaleY:0.74,skewX:-46.5,skewY:133.5,x:858.9,y:746.7,startPosition:6},21).to({regY:0.1,scaleX:0.88,scaleY:0.94,skewX:5.9,skewY:185.9,x:2013.8,y:471.9,startPosition:1},25).to({_off:true},1).wait(193));

	// Layer 2 copy 4
	this.instance_3 = new lib.Scud_mc("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-84.7,1123,0.615,0.661,0,-47.1,132.9,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:0.2,scaleX:0.79,scaleY:0.85,skewX:-3.9,skewY:176.1,x:964,y:435.8,startPosition:6},21).to({regX:-0.1,regY:0.1,scaleX:1.01,scaleY:1.08,skewX:-47.1,skewY:132.9,x:1456.6,y:-125.2,startPosition:1},25).to({_off:true},1).wait(193));

	// Layer 2 copy 3
	this.instance_4 = new lib.Scud_mc("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-59.6,1159,0.662,0.662,-44.9,0,0,0,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:0.1,scaleX:0.74,scaleY:0.74,rotation:87.5,x:26.7,y:893.1,startPosition:9},9).to({regX:-0.1,regY:0.3,scaleX:0.85,scaleY:0.85,rotation:106.6,x:104.3,y:720.3,startPosition:6},12).to({regX:0,regY:0.1,scaleX:1.08,scaleY:1.08,rotation:108.4,x:403.8,y:-143.1,startPosition:1},25).to({_off:true},1).wait(193));

	// Layer 2 copy 2
	this.instance_5 = new lib.Scud_mc("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-43.2,1156.4,0.664,0.62,0,98.6,-81.4,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:-0.1,scaleX:0.75,scaleY:0.7,skewX:0.2,skewY:-179.8,x:349.1,y:1048.1,startPosition:9},9).to({regX:0,regY:0,scaleX:0.86,scaleY:0.8,skewX:-1.5,skewY:-181.5,x:820.7,y:1001.6,startPosition:6},12).to({scaleX:1.09,scaleY:1.01,skewX:-9.4,skewY:-189.4,x:2070.4,y:1047.8,startPosition:1},25).to({_off:true},1).wait(193));

	// Layer 2 copy
	this.instance_6 = new lib.Scud_mc("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-76.3,1129.7,0.616,0.52,0,-44.9,135.1,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:-0.1,regY:0.4,scaleX:0.6,scaleY:0.58,skewX:2.8,skewY:182.8,x:135.3,y:1050.8,startPosition:9},9).to({regX:0,scaleX:0.72,scaleY:0.67,skewX:-24.6,skewY:155.4,x:417.6,y:1001.2,startPosition:6},12).to({regY:0.1,scaleX:0.84,scaleY:0.85,skewX:-0.7,skewY:179.3,x:2052,y:899.8,startPosition:1},25).to({_off:true},1).wait(193));

	// Layer 2
	this.instance_7 = new lib.Scud_mc("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-61,1115.4,0.477,0.556,0,-17,163,-0.2,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:0.1,scaleX:0.78,scaleY:0.94,skewX:2,skewY:182,x:525.4,y:615.7,startPosition:1},21).to({regY:0,skewX:0.2,skewY:180.2,x:2009.9,y:85.2},25).to({_off:true},1).wait(193));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(829.4,1604.4,143.8,161.8);
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
	],	
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;