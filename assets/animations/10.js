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


(lib.WaterDip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#D5EAFF","rgba(255,255,255,0)","#E4F1FF","rgba(255,255,255,0)","rgba(230,242,255,0.89)","rgba(251,253,255,0)"],[0,0.165,0.318,0.471,0.647,0.851],0,0,0,0,0,52.4).s().p("Ah3H4QjRgyhwi3Qhxi4AyjOQAyjRC4hwQC3hxDOAyQDRAyBwC3QBxC3gyDPQgyDRi3BwQh/BOiLAAQg8AAhAgPg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(213,234,255,0.969)","rgba(255,255,255,0)","rgba(228,241,255,0.969)","rgba(255,255,255,0)","rgba(230,242,255,0.863)","rgba(251,253,255,0)"],[0,0.165,0.318,0.471,0.647,0.851],0,0,0,0,0,55.1).s().p("Ah9ISQjbg1h3jAQh2jBA0jZQA2jbDAh3QDAh2DZA0QDbA1B3DAQB2DBg0DZQg1DcjAB2QiFBSiTAAQg/AAhDgQg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(213,234,255,0.941)","rgba(255,255,255,0)","rgba(228,241,255,0.941)","rgba(255,255,255,0)","rgba(230,242,255,0.835)","rgba(251,253,255,0)"],[0,0.165,0.318,0.471,0.647,0.851],0,0,0,0,0,57.7).s().p("AiEIrQjlg3h8jKQh8jKA3jkQA3jmDKh8QDKh7DkA3QDlA3B8DJQB8DKg3DkQg3DnjKB7QiLBWiZAAQhDAAhHgRg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["rgba(213,234,255,0.91)","rgba(255,255,255,0)","rgba(228,241,255,0.91)","rgba(255,255,255,0)","rgba(230,242,255,0.808)","rgba(251,253,255,0)"],[0,0.165,0.318,0.471,0.647,0.851],0,0,0,0,0,60.4).s().p("AiKJFQjwg6iCjSQiCjUA6jvQA7jwDSiCQDTiCDvA6QDwA6CCDSQCBDUg5DuQg6DyjSCBQiTBaigAAQhGAAhKgSg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(213,234,255,0.878)","rgba(255,255,255,0)","rgba(228,241,255,0.878)","rgba(255,255,255,0)","rgba(230,242,255,0.78)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],0,0,0,0,0,63).s().p("AiQJeQj7g8iHjcQiIjdA9j5QA8j7DdiHQDciID5A9QD7A8CHDcQCIDdg9D4Qg7D9jdCGQiYBeioAAQhIAAhOgTg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["rgba(213,234,255,0.847)","rgba(255,255,255,0)","rgba(228,241,255,0.847)","rgba(255,255,255,0)","rgba(230,242,255,0.757)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],0,0,0,0,0,65.7).s().p("AiWJ4QkGg/iNjlQiMjmA+kEQA/kGDmiNQDmiMEDA+QEGA/CNDlQCMDmg+EEQg+EGjmCNQifBhivAAQhLAAhRgTg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["rgba(213,234,255,0.82)","rgba(255,255,255,0)","rgba(228,241,255,0.82)","rgba(255,255,255,0)","rgba(230,242,255,0.729)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],0,0,0,0,0,68.4).s().p("AidKRQkQhBiSjvQiSjvBBkPQBBkQDviSQDviTEPBBQEQBBCSDvQCSDvhBEOQhAESjwCSQikBmi2AAQhPAAhVgVg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["rgba(213,234,255,0.788)","rgba(255,255,255,0)","rgba(228,241,255,0.788)","rgba(255,255,255,0)","rgba(230,242,255,0.702)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],0,0,0,0,0,71).s().p("AiiKrQkbhDiZj4QiYj5BEkZQBEkbD4iYQD5iZEYBEQEbBECZD4QCYD4hEEZQhDEcj4CYQisBpi9AAQhSAAhXgVg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["rgba(213,234,255,0.757)","rgba(255,255,255,0)","rgba(228,241,255,0.757)","rgba(255,255,255,0)","rgba(230,242,255,0.675)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],0,0,0,0,0,73.7).s().p("AipLFQklhGiekCQiekBBGkkQBHkmECieQEBieEkBGQElBHCeEBQCeEChGEjQhGEnkCCdQiyBtjDAAQhWAAhbgVg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["rgba(213,234,255,0.725)","rgba(255,255,255,0)","rgba(228,241,255,0.725)","rgba(255,255,255,0)","rgba(230,242,255,0.647)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],0,0,0,0,0,76.3).s().p("AivLfQkvhKilkKQijkLBIkvQBKkvELilQELijEuBIQEvBKClEKQCjELhIEuQhJExkLCkQi5BxjLAAQhYAAhegWg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["rgba(213,234,255,0.698)","rgba(255,255,255,0)","rgba(228,241,255,0.698)","rgba(255,255,255,0)","rgba(230,242,255,0.62)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],0,0,0,0,0,79).s().p("Ai1L4Qk6hMiqkUQipkUBLk5QBMk7EUipQEUipE5BLQE6BLCqEUQCpEVhLE4QhLE8kVCpQi+B1jSAAQhcAAhhgXg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["rgba(213,234,255,0.667)","rgba(255,255,255,0)","rgba(228,241,255,0.667)","rgba(255,255,255,0)","rgba(230,242,255,0.592)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],0,0,0,0,0,81.7).s().p("Ai7MSQlFhOiwkdQivkeBPlEQBOlFEdivQEeivFDBNQFFBPCwEdQCvEehPFDQhMFGkfCvQjFB5jZAAQheAAhlgYg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["rgba(213,234,255,0.635)","rgba(255,255,255,0)","rgba(228,241,255,0.635)","rgba(255,255,255,0)","rgba(230,242,255,0.565)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],0,0,0,0,0,84.3).s().p("AjBMrQlPhQi2knQi1knBRlOQBRlPEni2QEmi0FOBQQFPBRC2EmQC1EnhRFOQhQFQkmC1QjNB9jfAAQhiAAhogZg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["rgba(213,234,255,0.608)","rgba(255,255,255,0)","rgba(228,241,255,0.608)","rgba(255,255,255,0)","rgba(230,242,255,0.541)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],0,0,0,0,0,87).s().p("AjHNFQlahTi7kwQi7kwBTlZQBTlaExi7QEwi6FYBSQFaBTC7EwQC7ExhUFYQhSFbkwC6QjSCBjnAAQhlAAhrgZg");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["rgba(213,234,255,0.576)","rgba(255,255,255,0)","rgba(228,241,255,0.576)","rgba(255,255,255,0)","rgba(230,242,255,0.514)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],0,0,0,0,0,89.6).s().p("AjONeQlkhVjBk6Qi/k5BUlkQBWlkE6jBQE6jAFiBVQFlBWDAE5QDAE6hUFiQhVFmk6DAQjZCGjvAAQhnAAhvgbg");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["rgba(213,234,255,0.545)","rgba(255,255,255,0)","rgba(228,241,255,0.545)","rgba(255,255,255,0)","rgba(230,242,255,0.486)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],0,0,0,0,0,92.3).s().p("AjUN4QlvhYjGlCQjGlDBYluQBYlwFDjGQFDjGFuBYQFvBYDGFDQDGFDhYFtQhXFxlEDFQjfCJj1AAQhrAAhygbg");

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["rgba(213,234,255,0.514)","rgba(255,255,255,0)","rgba(228,241,255,0.514)","rgba(255,255,255,0)","rgba(230,242,255,0.459)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],0,0,0,0,0,94.9).s().p("AjZOSQl6hbjNlMQjLlMBal4QBcl6FLjMQFMjMF4BaQF6BbDMFMQDMFMhaF4QhbF7lLDMQjmCMj9AAQhuAAh0gbg");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["rgba(213,234,255,0.486)","rgba(255,255,255,0)","rgba(228,241,255,0.486)","rgba(255,255,255,0)","rgba(230,242,255,0.431)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],0,0,0,0,0,97.6).s().p("AjgOrQmEhdjSlVQjRlVBdmEQBdmEFWjSQFWjRGCBdQGEBdDSFVQDRFWhdGCQhcGGlWDRQjsCRkDAAQhyAAh4gdg");

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["rgba(213,234,255,0.455)","rgba(255,255,255,0)","rgba(228,241,255,0.455)","rgba(255,255,255,0)","rgba(230,242,255,0.404)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],0,0,0,0,0,100.2).s().p("AjmPFQmPhgjYleQjWlfBgmOQBgmPFejXQFfjXGNBfQGPBgDXFfQDXFehgGNQheGRlfDXQjyCUkLAAQh0AAh8gdg");

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["rgba(213,234,255,0.424)","rgba(255,255,255,0)","rgba(228,241,255,0.424)","rgba(255,255,255,0)","rgba(230,242,255,0.376)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],0,0,0,0,0,102.9).s().p("AjsPeQmahijdlnQjcloBimZQBjmaFojdQFojcGXBhQGaBjDdFoQDcFohiGYQhhGblpDcQj4CZkRAAQh4AAh/gfg");

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["rgba(213,234,255,0.392)","rgba(255,255,255,0)","rgba(228,241,255,0.392)","rgba(255,255,255,0)","rgba(230,242,255,0.349)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],0,0,0,0,0,105.6).s().p("AjyP4QmkhljklxQjilxBlmjQBlmkFxjjQFyjiGiBkQGkBlDjFxQDjFxhlGjQhkGllxDjQkACckYAAQh7AAiCgfg");

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["rgba(213,234,255,0.365)","rgba(255,255,255,0)","rgba(228,241,255,0.365)","rgba(255,255,255,0)","rgba(230,242,255,0.325)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],0,0,0,0,0,108.2).s().p("Aj5QSQmvhnjnl7Qjpl6BnmuQBomvF7joQF6joGuBmQGvBoDnF6QDpF7hnGtQhnGwl7DoQkGCgkfAAQh+AAiGgfg");

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["rgba(213,234,255,0.333)","rgba(255,255,255,0)","rgba(228,241,255,0.333)","rgba(255,255,255,0)","rgba(230,242,255,0.298)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],0,0,0,0,0,110.9).s().p("Aj+QrQm6hpjumEQjumEBqm4QBqm6GEjuQGEjtG3BpQG6BqDuGEQDuGDhqG4QhpG7mEDtQkMClknAAQiBAAiIghg");

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["rgba(213,234,255,0.302)","rgba(255,255,255,0)","rgba(228,241,255,0.302)","rgba(255,255,255,0)","rgba(230,242,255,0.271)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],0,0,0,0,0,113.5).s().p("AkERFQnFhsjzmNQj0mNBtnDQBsnEGOj0QGNj0HBBsQHFBtDzGNQD0GNhtHCQhrHFmND0QkTCoktAAQiFAAiLghg");

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["rgba(213,234,255,0.275)","rgba(255,255,255,0)","rgba(228,241,255,0.275)","rgba(255,255,255,0)","rgba(230,242,255,0.243)","rgba(251,253,255,0)"],[0,0.165,0.318,0.486,0.647,0.851],0,0,0,0,0,116.2).s().p("AkLReQnPhuj5mXQj5mWBvnOQBvnOGWj6QGXj5HNBuQHPBwD5GWQD5GWhvHNQhtHQmXD5QkZCtk1AAQiIAAiPgjg");

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["rgba(213,234,255,0.243)","rgba(255,255,255,0)","rgba(228,241,255,0.243)","rgba(255,255,255,0)","rgba(230,242,255,0.216)","rgba(251,253,255,0)"],[0,0.165,0.318,0.486,0.647,0.851],0,0,0,0,0,118.9).s().p("AkRR4QnZhxj/mgQj/mgBxnYQBynZGgj/QGgj/HXBxQHZByD/GfQD/GghxHXQhxHbmgD/QkfCwk8AAQiLAAiSgjg");

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["rgba(213,234,255,0.212)","rgba(255,255,255,0)","rgba(228,241,255,0.212)","rgba(255,255,255,0)","rgba(230,242,255,0.188)","rgba(251,253,255,0)"],[0,0.165,0.318,0.486,0.647,0.851],0,0,0,0,0,121.5).s().p("AkXSSQnkh0kFmpQkEmpBznjQB1nkGpkFQGpkEHiBzQHkB1EFGpQEEGphzHhQh0HmmpEEQkmC0lDAAQiOAAiVgjg");

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["rgba(213,234,255,0.18)","rgba(255,255,255,0)","rgba(228,241,255,0.18)","rgba(255,255,255,0)","rgba(230,242,255,0.161)","rgba(251,253,255,0)"],[0,0.165,0.318,0.486,0.647,0.851],0,0,0,0,0,124.2).s().p("AkdSrQnvh2kKmyQkLmzB3ntQB3nuGzkLQGykKHsB1QHvB4EKGyQEKGyh2HtQh1HvmzELQktC4lJAAQiRAAiZglg");

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.rf(["rgba(213,234,255,0.153)","rgba(255,255,255,0)","rgba(228,241,255,0.153)","rgba(255,255,255,0)","rgba(230,242,255,0.133)","rgba(251,253,255,0)"],[0,0.165,0.318,0.486,0.647,0.851],0,0,0,0,0,126.8).s().p("AkkTFQn4h5kRm8QkQm7B5n4QB6n5G7kRQG8kPH4B4QH4B6ERG7QEQG8h5H3Qh4H6m9EQQkyC8lRAAQiUAAidglg");

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.rf(["rgba(213,234,255,0.122)","rgba(255,255,255,0)","rgba(228,241,255,0.122)","rgba(255,255,255,0)","rgba(230,242,255,0.11)","rgba(251,253,255,0)"],[0,0.165,0.318,0.486,0.647,0.851],0,0,0,0,0,129.5).s().p("AkpTeQoEh7kWnFQkVnFB7oCQB8oEHFkWQHFkVIBB6QIEB8EWHFQEVHFh7ICQh7IFnEEVQk6DAlYAAQiXAAifgmg");

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["rgba(213,234,255,0.09)","rgba(255,255,255,0)","rgba(228,241,255,0.09)","rgba(255,255,255,0)","rgba(230,242,255,0.082)","rgba(251,253,255,0)"],[0,0.165,0.318,0.49,0.647,0.851],0,0,0,0,0,132.1).s().p("AkwT4QoOh+kcnOQkbnOB/oNQB9oPHPkbQHPkbIMB9QIOB+EcHPQEbHOh/IMQh8IQnPEbQk/DElfAAQibAAijgng");

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.rf(["rgba(213,234,255,0.059)","rgba(255,255,255,0)","rgba(228,241,255,0.059)","rgba(255,255,255,0)","rgba(230,242,255,0.055)","rgba(251,253,255,0)"],[0,0.165,0.318,0.49,0.647,0.851],0,0,0,0,0,134.8).s().p("Ak2USQoYiBkinXQkhnYCBoXQCAoZHZkiQHXkhIXCAQIYCBEiHYQEhHXiBIXQh/IanYEhQlGDIlnAAQidAAimgng");

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["rgba(213,234,255,0.031)","rgba(255,255,255,0)","rgba(228,241,255,0.031)","rgba(255,255,255,0)","rgba(230,242,255,0.027)","rgba(251,253,255,0)"],[0,0.165,0.318,0.49,0.647,0.851],0,0,0,0,0,137.5).s().p("Ak8UrQojiDkonhQkmngCDojQCDojHhknQHiknIhCCQIjCEEoHhQEmHhiDIhQiCIlniEnQlMDMltAAQihAAipgpg");

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.rf(["rgba(213,234,255,0)","rgba(255,255,255,0)","rgba(228,241,255,0)","rgba(255,255,255,0)","rgba(230,242,255,0)","rgba(251,253,255,0)"],[0,0.165,0.318,0.49,0.647,0.851],0,0,0,0,0,140.1).s().p("AlCVFQouiGktnqQksnqCFotQCHouHqktQHqksIsCFQIuCGEtHqQEsHqiFIsQiFIwnqEsQlTDQl1AAQijAAitgpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},11).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).wait(1));

	// Layer 1
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.rf(["#D5EAFF","rgba(255,255,255,0)","#E4F1FF","rgba(255,255,255,0)","rgba(230,242,255,0.89)","rgba(251,253,255,0)"],[0,0.165,0.318,0.471,0.647,0.851],0,0,0,0,0,52.4).s().p("Ah3H4QjRgyhwi3Qhxi4AyjOQAyjRC4hwQC3hxDOAyQDRAyBwC3QBxC3gyDPQgyDRi3BwQh/BOiLAAQg8AAhAgPg");

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.rf(["rgba(213,234,255,0.969)","rgba(255,255,255,0)","rgba(228,241,255,0.969)","rgba(255,255,255,0)","rgba(230,242,255,0.863)","rgba(251,253,255,0)"],[0,0.165,0.318,0.471,0.647,0.851],0,0,0,0,0,55.1).s().p("Ah9ISQjbg1h3jAQh2jBA0jZQA2jbDAh3QDAh2DZA0QDbA1B3DAQB2DBg0DZQg1DcjAB2QiFBSiTAAQg/AAhDgQg");

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.rf(["rgba(213,234,255,0.941)","rgba(255,255,255,0)","rgba(228,241,255,0.941)","rgba(255,255,255,0)","rgba(230,242,255,0.835)","rgba(251,253,255,0)"],[0,0.165,0.318,0.471,0.647,0.851],0,0,0,0,0,57.7).s().p("AiEIrQjlg3h8jKQh8jKA3jkQA3jmDKh8QDKh7DkA3QDlA3B8DJQB8DKg3DkQg3DnjKB7QiLBWiZAAQhDAAhHgRg");

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.rf(["rgba(213,234,255,0.91)","rgba(255,255,255,0)","rgba(228,241,255,0.91)","rgba(255,255,255,0)","rgba(230,242,255,0.808)","rgba(251,253,255,0)"],[0,0.165,0.318,0.471,0.647,0.851],0,0,0,0,0,60.4).s().p("AiKJFQjwg6iCjSQiCjUA6jvQA7jwDSiCQDTiCDvA6QDwA6CCDSQCBDUg5DuQg6DyjSCBQiTBaigAAQhGAAhKgSg");

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.rf(["rgba(213,234,255,0.878)","rgba(255,255,255,0)","rgba(228,241,255,0.878)","rgba(255,255,255,0)","rgba(230,242,255,0.78)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],0,0,0,0,0,63).s().p("AiQJeQj7g8iHjcQiIjdA9j5QA8j7DdiHQDciID5A9QD7A8CHDcQCIDdg9D4Qg7D9jdCGQiYBeioAAQhIAAhOgTg");

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.rf(["rgba(213,234,255,0.847)","rgba(255,255,255,0)","rgba(228,241,255,0.847)","rgba(255,255,255,0)","rgba(230,242,255,0.757)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],0,0,0,0,0,65.7).s().p("AiWJ4QkGg/iNjlQiMjmA+kEQA/kGDmiNQDmiMEDA+QEGA/CNDlQCMDmg+EEQg+EGjmCNQifBhivAAQhLAAhRgTg");

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.rf(["rgba(213,234,255,0.82)","rgba(255,255,255,0)","rgba(228,241,255,0.82)","rgba(255,255,255,0)","rgba(230,242,255,0.729)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],0,0,0,0,0,68.4).s().p("AidKRQkQhBiSjvQiSjvBBkPQBBkQDviSQDviTEPBBQEQBBCSDvQCSDvhBEOQhAESjwCSQikBmi2AAQhPAAhVgVg");

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.rf(["rgba(213,234,255,0.788)","rgba(255,255,255,0)","rgba(228,241,255,0.788)","rgba(255,255,255,0)","rgba(230,242,255,0.702)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],0,0,0,0,0,71).s().p("AiiKrQkbhDiZj4QiYj5BEkZQBEkbD4iYQD5iZEYBEQEbBECZD4QCYD4hEEZQhDEcj4CYQisBpi9AAQhSAAhXgVg");

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.rf(["rgba(213,234,255,0.757)","rgba(255,255,255,0)","rgba(228,241,255,0.757)","rgba(255,255,255,0)","rgba(230,242,255,0.675)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],0,0,0,0,0,73.7).s().p("AipLFQklhGiekCQiekBBGkkQBHkmECieQEBieEkBGQElBHCeEBQCeEChGEjQhGEnkCCdQiyBtjDAAQhWAAhbgVg");

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.rf(["rgba(213,234,255,0.725)","rgba(255,255,255,0)","rgba(228,241,255,0.725)","rgba(255,255,255,0)","rgba(230,242,255,0.647)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],0,0,0,0,0,76.3).s().p("AivLfQkvhKilkKQijkLBIkvQBKkvELilQELijEuBIQEvBKClEKQCjELhIEuQhJExkLCkQi5BxjLAAQhYAAhegWg");

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.rf(["rgba(213,234,255,0.698)","rgba(255,255,255,0)","rgba(228,241,255,0.698)","rgba(255,255,255,0)","rgba(230,242,255,0.62)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],0,0,0,0,0,79).s().p("Ai1L4Qk6hMiqkUQipkUBLk5QBMk7EUipQEUipE5BLQE6BLCqEUQCpEVhLE4QhLE8kVCpQi+B1jSAAQhcAAhhgXg");

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.rf(["rgba(213,234,255,0.667)","rgba(255,255,255,0)","rgba(228,241,255,0.667)","rgba(255,255,255,0)","rgba(230,242,255,0.592)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],0,0,0,0,0,81.7).s().p("Ai7MSQlFhOiwkdQivkeBPlEQBOlFEdivQEeivFDBNQFFBPCwEdQCvEehPFDQhMFGkfCvQjFB5jZAAQheAAhlgYg");

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.rf(["rgba(213,234,255,0.635)","rgba(255,255,255,0)","rgba(228,241,255,0.635)","rgba(255,255,255,0)","rgba(230,242,255,0.565)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],0,0,0,0,0,84.3).s().p("AjBMrQlPhQi2knQi1knBRlOQBRlPEni2QEmi0FOBQQFPBRC2EmQC1EnhRFOQhQFQkmC1QjNB9jfAAQhiAAhogZg");

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.rf(["rgba(213,234,255,0.608)","rgba(255,255,255,0)","rgba(228,241,255,0.608)","rgba(255,255,255,0)","rgba(230,242,255,0.541)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],0,0,0,0,0,87).s().p("AjHNFQlahTi7kwQi7kwBTlZQBTlaExi7QEwi6FYBSQFaBTC7EwQC7ExhUFYQhSFbkwC6QjSCBjnAAQhlAAhrgZg");

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.rf(["rgba(213,234,255,0.576)","rgba(255,255,255,0)","rgba(228,241,255,0.576)","rgba(255,255,255,0)","rgba(230,242,255,0.514)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],0,0,0,0,0,89.6).s().p("AjONeQlkhVjBk6Qi/k5BUlkQBWlkE6jBQE6jAFiBVQFlBWDAE5QDAE6hUFiQhVFmk6DAQjZCGjvAAQhnAAhvgbg");

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.rf(["rgba(213,234,255,0.545)","rgba(255,255,255,0)","rgba(228,241,255,0.545)","rgba(255,255,255,0)","rgba(230,242,255,0.486)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],0,0,0,0,0,92.3).s().p("AjUN4QlvhYjGlCQjGlDBYluQBYlwFDjGQFDjGFuBYQFvBYDGFDQDGFDhYFtQhXFxlEDFQjfCJj1AAQhrAAhygbg");

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.rf(["rgba(213,234,255,0.514)","rgba(255,255,255,0)","rgba(228,241,255,0.514)","rgba(255,255,255,0)","rgba(230,242,255,0.459)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],0,0,0,0,0,94.9).s().p("AjZOSQl6hbjNlMQjLlMBal4QBcl6FLjMQFMjMF4BaQF6BbDMFMQDMFMhaF4QhbF7lLDMQjmCMj9AAQhuAAh0gbg");

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.rf(["rgba(213,234,255,0.486)","rgba(255,255,255,0)","rgba(228,241,255,0.486)","rgba(255,255,255,0)","rgba(230,242,255,0.431)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],0,0,0,0,0,97.6).s().p("AjgOrQmEhdjSlVQjRlVBdmEQBdmEFWjSQFWjRGCBdQGEBdDSFVQDRFWhdGCQhcGGlWDRQjsCRkDAAQhyAAh4gdg");

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.rf(["rgba(213,234,255,0.455)","rgba(255,255,255,0)","rgba(228,241,255,0.455)","rgba(255,255,255,0)","rgba(230,242,255,0.404)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],0,0,0,0,0,100.2).s().p("AjmPFQmPhgjYleQjWlfBgmOQBgmPFejXQFfjXGNBfQGPBgDXFfQDXFehgGNQheGRlfDXQjyCUkLAAQh0AAh8gdg");

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.rf(["rgba(213,234,255,0.424)","rgba(255,255,255,0)","rgba(228,241,255,0.424)","rgba(255,255,255,0)","rgba(230,242,255,0.376)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],0,0,0,0,0,102.9).s().p("AjsPeQmahijdlnQjcloBimZQBjmaFojdQFojcGXBhQGaBjDdFoQDcFohiGYQhhGblpDcQj4CZkRAAQh4AAh/gfg");

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.rf(["rgba(213,234,255,0.392)","rgba(255,255,255,0)","rgba(228,241,255,0.392)","rgba(255,255,255,0)","rgba(230,242,255,0.349)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],0,0,0,0,0,105.6).s().p("AjyP4QmkhljklxQjilxBlmjQBlmkFxjjQFyjiGiBkQGkBlDjFxQDjFxhlGjQhkGllxDjQkACckYAAQh7AAiCgfg");

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.rf(["rgba(213,234,255,0.365)","rgba(255,255,255,0)","rgba(228,241,255,0.365)","rgba(255,255,255,0)","rgba(230,242,255,0.325)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],0,0,0,0,0,108.2).s().p("Aj5QSQmvhnjnl7Qjpl6BnmuQBomvF7joQF6joGuBmQGvBoDnF6QDpF7hnGtQhnGwl7DoQkGCgkfAAQh+AAiGgfg");

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.rf(["rgba(213,234,255,0.333)","rgba(255,255,255,0)","rgba(228,241,255,0.333)","rgba(255,255,255,0)","rgba(230,242,255,0.298)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],0,0,0,0,0,110.9).s().p("Aj+QrQm6hpjumEQjumEBqm4QBqm6GEjuQGEjtG3BpQG6BqDuGEQDuGDhqG4QhpG7mEDtQkMClknAAQiBAAiIghg");

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.rf(["rgba(213,234,255,0.302)","rgba(255,255,255,0)","rgba(228,241,255,0.302)","rgba(255,255,255,0)","rgba(230,242,255,0.271)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],0,0,0,0,0,113.5).s().p("AkERFQnFhsjzmNQj0mNBtnDQBsnEGOj0QGNj0HBBsQHFBtDzGNQD0GNhtHCQhrHFmND0QkTCoktAAQiFAAiLghg");

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.rf(["rgba(213,234,255,0.275)","rgba(255,255,255,0)","rgba(228,241,255,0.275)","rgba(255,255,255,0)","rgba(230,242,255,0.243)","rgba(251,253,255,0)"],[0,0.165,0.318,0.486,0.647,0.851],0,0,0,0,0,116.2).s().p("AkLReQnPhuj5mXQj5mWBvnOQBvnOGWj6QGXj5HNBuQHPBwD5GWQD5GWhvHNQhtHQmXD5QkZCtk1AAQiIAAiPgjg");

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.rf(["rgba(213,234,255,0.243)","rgba(255,255,255,0)","rgba(228,241,255,0.243)","rgba(255,255,255,0)","rgba(230,242,255,0.216)","rgba(251,253,255,0)"],[0,0.165,0.318,0.486,0.647,0.851],0,0,0,0,0,118.9).s().p("AkRR4QnZhxj/mgQj/mgBxnYQBynZGgj/QGgj/HXBxQHZByD/GfQD/GghxHXQhxHbmgD/QkfCwk8AAQiLAAiSgjg");

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.rf(["rgba(213,234,255,0.212)","rgba(255,255,255,0)","rgba(228,241,255,0.212)","rgba(255,255,255,0)","rgba(230,242,255,0.188)","rgba(251,253,255,0)"],[0,0.165,0.318,0.486,0.647,0.851],0,0,0,0,0,121.5).s().p("AkXSSQnkh0kFmpQkEmpBznjQB1nkGpkFQGpkEHiBzQHkB1EFGpQEEGphzHhQh0HmmpEEQkmC0lDAAQiOAAiVgjg");

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.rf(["rgba(213,234,255,0.18)","rgba(255,255,255,0)","rgba(228,241,255,0.18)","rgba(255,255,255,0)","rgba(230,242,255,0.161)","rgba(251,253,255,0)"],[0,0.165,0.318,0.486,0.647,0.851],0,0,0,0,0,124.2).s().p("AkdSrQnvh2kKmyQkLmzB3ntQB3nuGzkLQGykKHsB1QHvB4EKGyQEKGyh2HtQh1HvmzELQktC4lJAAQiRAAiZglg");

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.rf(["rgba(213,234,255,0.153)","rgba(255,255,255,0)","rgba(228,241,255,0.153)","rgba(255,255,255,0)","rgba(230,242,255,0.133)","rgba(251,253,255,0)"],[0,0.165,0.318,0.486,0.647,0.851],0,0,0,0,0,126.8).s().p("AkkTFQn4h5kRm8QkQm7B5n4QB6n5G7kRQG8kPH4B4QH4B6ERG7QEQG8h5H3Qh4H6m9EQQkyC8lRAAQiUAAidglg");

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.rf(["rgba(213,234,255,0.122)","rgba(255,255,255,0)","rgba(228,241,255,0.122)","rgba(255,255,255,0)","rgba(230,242,255,0.11)","rgba(251,253,255,0)"],[0,0.165,0.318,0.486,0.647,0.851],0,0,0,0,0,129.5).s().p("AkpTeQoEh7kWnFQkVnFB7oCQB8oEHFkWQHFkVIBB6QIEB8EWHFQEVHFh7ICQh7IFnEEVQk6DAlYAAQiXAAifgmg");

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.rf(["rgba(213,234,255,0.09)","rgba(255,255,255,0)","rgba(228,241,255,0.09)","rgba(255,255,255,0)","rgba(230,242,255,0.082)","rgba(251,253,255,0)"],[0,0.165,0.318,0.49,0.647,0.851],0,0,0,0,0,132.1).s().p("AkwT4QoOh+kcnOQkbnOB/oNQB9oPHPkbQHPkbIMB9QIOB+EcHPQEbHOh/IMQh8IQnPEbQk/DElfAAQibAAijgng");

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.rf(["rgba(213,234,255,0.059)","rgba(255,255,255,0)","rgba(228,241,255,0.059)","rgba(255,255,255,0)","rgba(230,242,255,0.055)","rgba(251,253,255,0)"],[0,0.165,0.318,0.49,0.647,0.851],0,0,0,0,0,134.8).s().p("Ak2USQoYiBkinXQkhnYCBoXQCAoZHZkiQHXkhIXCAQIYCBEiHYQEhHXiBIXQh/IanYEhQlGDIlnAAQidAAimgng");

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.rf(["rgba(213,234,255,0.031)","rgba(255,255,255,0)","rgba(228,241,255,0.031)","rgba(255,255,255,0)","rgba(230,242,255,0.027)","rgba(251,253,255,0)"],[0,0.165,0.318,0.49,0.647,0.851],0,0,0,0,0,137.5).s().p("Ak8UrQojiDkonhQkmngCDojQCDojHhknQHiknIhCCQIjCEEoHhQEmHhiDIhQiCIlniEnQlMDMltAAQihAAipgpg");

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.rf(["rgba(213,234,255,0)","rgba(255,255,255,0)","rgba(228,241,255,0)","rgba(255,255,255,0)","rgba(230,242,255,0)","rgba(251,253,255,0)"],[0,0.165,0.318,0.49,0.647,0.851],0,0,0,0,0,140.1).s().p("AlCVFQouiGktnqQksnqCFotQCHouHqktQHqksIsCFQIuCGEtHqQEsHqiFIsQiFIwnqEsQlTDQl1AAQijAAitgpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34}]}).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[]},1).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-52,104,104);


(lib.R4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#AA863B","#8C6F2D","#42210B"],[0.078,0.725,0.992],-61.2,0,61.3,0).s().p("AIPCyQhYgYgTgDQgbgEghgPQghgOgUgQQhLgRgmgUQibgyglgWQgXgEgdgIQg8gPgagVQgcgCgigGQhFgMgegPQgIADgLABQgVADgOgHQiNgXgUgFIhhgMQgJgcAjgZIBigFQAbgCASAGIAcgCQAjABAnATIAjAIQAkAHAJgCIBAAPQBQAYBSAwQDkBHgEAGIEpBwQB/AxgEANQgCAEgNAAQgVAAgxgLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.2,-19,122.5,38);


(lib.R3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#AA863B","#8C6F2D","#42210B"],[0.078,0.725,0.992],-61.9,0,62,0).s().p("ApqD+QAHgeCZg5QBNgdBLgWQAjgZB+hDIBugfQAVAAA+ggQAggQAbgQQBFg1AngLQATgGAGAFIAtgeQA2glAtgLQAXgGAMABQBHgeA+gNQA8gMAHANQAGAKhjApIhjAnIgmAXQgRAUg5AXIg2ATIglAaQgKAMhyA3IgkAQQgRABgwAUIgvAUQgsANhhArIhYAoQhZAnhXAfQhrAngmAAQgYAAAEgPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62,-26.9,124,53.9);


(lib.R2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#AA863B","#8C6F2D","#42210B"],[0.078,0.725,0.992],-38.6,0,38.7,0).s().p("Al9HaQgZgcB9hTQA/gpBEgkQACgQAshGQAVgiAWggQgKgVA5hUQAagpAfgmQgKgPA3g0QAbgaAdgXQgEgMA3g6QAcgdAdgaQAZg4Ang9QAvhMATADQARADgyBuQgZA3gdA2QAGASg6A0Ig7AwQADATg2BFIg2A+QACASguBJIgsBFQgUAvg4A/QgBApiEBcQhkBGgqAAQgOAAgHgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.6,-48.3,77.4,96.6);


(lib.R1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#AA863B","#8C6F2D","#42210B"],[0.078,0.725,0.992],-16.3,0,16.4,0).s().p("AidInQgXgPBYisQArhWAxhTIAwigQADjLgBghQAAgUAIgiIAIgeQgIgmAVgsQAKgWANgOQAEgmAHglQAPhLARABQARAAABBUQAAArgEAqIghCHQgLAMgBAPQAAAHACAFQAMALgOCWQgHBJgKBIQAGATguBtQgWAzgHAOIAEgJIgRAhQggBEgJALQgZAtgcAqQgvBJgYAAQgEAAgDgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.3,-55.4,32.7,110.8);


(lib.L4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#AA863B","#8C6F2D","#42210B"],[0.078,0.725,0.992],41.6,-44.2,-45,42.4).s().p("Ak+IqQgMgGA3h8ICDkiQgHgBBvjUQAYhcAlhKIAjg4QANgHAjg7QAOgpAYgaIAVgRQAJgSAUgRIBJhBQAqgJAOAbIg9BNQgKAShTB0QgFAPgRANQgJAHgHADQgLAggoA5QgUAcgSAWQgEAhgfA1QgOAbgPAUQgJAohKCSQgNAogpBBQgCAagOAhQgNAigQAXQgLAPguBPQgoBBgNAAIgCAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.1,-55.4,64.3,111);


(lib.L3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#AA863B","#8C6F2D","#42210B"],[0.078,0.725,0.992],43.8,-43.4,-43.8,44.2).s().p("ApuD/QgEgOAzghQA1gjBIgdQAHgKAUgMQApgYA/gMIA2gKQAAgIASgJQAjgUBWgLIBBgTQBCgVAOgPIBmg3IBJgVQBPgXAbgFICPhHQCVhDAaAQQAiAVioBPIiuBLQikA7hCAhIgvATQgvAWgNALIglAOQh5AogQgBIgsAHQgXANgcALQg5AYgagBIgsAKQgwAXgxAUQhNAggTAAQgFAAgBgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.4,-25.8,124.8,51.6);


(lib.L2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#AA863B","#8C6F2D","#42210B"],[0.078,0.725,0.992],27.6,-30.8,-27,23.8).s().p("AEGBlQgVgBgbgEQg3gIgdgMQgogHgqgJQhRgTgMgOQgpgCgrgFQhWgLgMgNQgkAEgnABQhNAFgKgPQg6gSg5gWQhxgqAKgOQALgPBXAUQBIAQA4AVIBPgBQBQACAGAMIBKgFQBLgCAFASIBgAPQBkATAIAUIBNAQQBQASANAKICTglQCUgdACAkQACArihAcQhBAMg1AAIgJAAQgxAAgMgLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.9,-11.3,121.9,22.6);


(lib.L1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#AA863B","#8C6F2D","#42210B"],[0.078,0.725,0.992],11.3,-11.5,-11.8,11.5).s().p("AGJEaQhjgaAAABQgOgBhIgXIgkgMIAJAEIhBgaQhugsgIgSQg6gsg6gwQh0heABgRQgCgEgGgFQgLgKgQgBIh3hIQgggbgegeQg7g8AMgNQAMgMA/AqQAgAWAdAXIAqAKQAuAQAVAhIAbAPQAeATAOAOQAWAXCTCNICTBOIC5A2QC3A8gFAbQgDAPggAAQgaAAgtgKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.9,-29.2,99.9,58.5);


(lib.body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCAAQgBgEADgBQADAAABAFQAAAFgEAAIAAABQgCAAAAgGg");
	this.shape.setTransform(30.4,44.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFAAQAAgCAFgBQAGABAAACQAAADgGAAQgFAAAAgDg");
	this.shape_1.setTransform(28.1,46.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCAAQgBAAAAAAQAAAAABAAQAAgBAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAQAAgBAAAAQADAAABAFQAAAFgEAAIAAABQgCAAAAgGg");
	this.shape_2.setTransform(25.8,37.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgFAAQAAgCAFgBQAFABABACQgBADgFAAQgFAAAAgDg");
	this.shape_3.setTransform(23.7,38.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgDAAQAAgFADAAQADABAAAEQABAGgEAAQgDgBAAgFg");
	this.shape_4.setTransform(22.8,32.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEAAQAAgCAEAAQAGAAgBACQABADgGABQgEgBAAgDg");
	this.shape_5.setTransform(21,33.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgEAAQAAgGAEgBQAFAAAAAHQABAHgGABQgDAAgBgIg");
	this.shape_6.setTransform(19.8,26.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHAAQAAgEAHAAQAIAAAAAEQAAAFgIAAQgHAAAAgFg");
	this.shape_7.setTransform(16.7,28.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAKAPQgFABgFgBQgMgDgEgLQgEgJAFgFQADgEAIAAQAOAAAGATQAFAQgFAAQgCAAgEgDg");
	this.shape_8.setTransform(17.8,14.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgDAlQgagLgJgOQgIgMAEgNQADgPAOgJQAMgIALADQAGABAUANQAOAIAFAZQAFAbgNAJQgFADgIAAQgLAAgOgHg");
	this.shape_9.setTransform(17.3,13.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAAAQQgDgBgEgEQgHgHACgIQABgJAGgCQAFgCADAEQAMAHgCAMQgCALgIAAIgDgBg");
	this.shape_10.setTransform(9.4,2.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgDAQQgOgIAEgLQADgLAKgDIAIAGQAJAIgCAJQgCAKgHACIgDAAQgDAAgDgCg");
	this.shape_11.setTransform(8.9,19.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgOAuQgHgFgOgVQgKgNAHgaQAGgcAQgDQAPgDAUAXQAUAWADAPQACAPgJAMQgKANgQADIgJABQgIAAgGgFg");
	this.shape_12.setTransform(8.9,19.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgDAPQgLgHAEgOQAFgRAFALIAGAFQAHAHgBAHQgCAIgFACIgDAAQgCAAgDgCg");
	this.shape_13.setTransform(1.5,6.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgRAcQgTgVgDgOQgCgPAKgMQAJgLAQgDQANgCAJAHQAHAFANAUQAIANgHAYQgHAcgPACIgCAAQgNAAgRgVg");
	this.shape_14.setTransform(8.9,2.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgWAkQgIgMAAgRQAAglARgQQAKgHAQATQASAUAAAOQAAAQgHAPQgJASgPAAQgMAAgKgNg");
	this.shape_15.setTransform(1.7,6.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#6E3F12","#AD6830","rgba(201,135,85,0.173)","rgba(207,141,93,0)"],[0,0.51,0.776,0.859],-16.1,-3,16.6,2.7).s().p("AAuBaIhLh8QgQgGgRABQgKAAAAgEQAAgIANgIQALgIgEgMQgGgQgNgXQgOgYgJgJIgSgMQgLgHgGgFIgEgCQgCgMASgLQASgMAGAIIAIgBQADAGACANQACAMADAHIARAkQAQAeANAHQADABAWADQANADADAIQABAEgJAIQgGAHACAIQCTD2gOAOIgBAAQgNAAhJh2g");
	this.shape_16.setTransform(11.3,16.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgGAUIgBgDIgBgCIABACIAAADIgBgEIABACIgBgDIgBgEIAAAEIgBgEIAAgBIABAFIAAABIAAABIgCgJIAAADIgBgBIAAACIgBgEIAAACIAAgCIgBgDIAAgBIAAgEIAAAAIgBgCIABABIAAgBIABABIAAgCIABADIAAAAIgBgHIABACIgBgBIABABIAAgCIABACIgBgFIABACIAAgCIAAgBIAAABIABABIAAgDQAAABAAgBIAAgBQAAABAAAAQABAAAAAAQAAABAAgBQAAAAAAAAIgBgCIABABIAAgBQgBAAAAgBQAAAAABAAQAAAAAAAAQAAABABAAIABACIAAgDIABABIAAABQABABAAgCQAAABAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBIAAgCIACAEIAAgBIABADIgBgEIABADIABABIgDgHIABgFIABgBIABACIAAABIAAgBIAAgBIAAABIABAAIgBgBIADAEIAEADIACAEIABAAIAAAAIgBAAIABABIgCgCIADADIgBgBIAAAAQABABABABQAAABAAAAQAAABAAAAQAAAAgBgBIgBgCIACAFIgBgCIABADIAAABIAAgBIABACIgBgBQAAABgBgBIAAgBIABACIgDgFQAAABAAABQABAAAAABQAAAAgBAAQAAABAAAAIgBgDIAAACQAAAAAAAAQAAABABAAQAAAAgBAAQAAAAAAAAIgBgBIABABIgBAAIABACIgBgBIAAABIgCgDIACADIAAAAIAAAAIgDgFIgBgCIAAACIADAFIABACIgBgCIgBAAIAAAAIABACIAAgBIABADQABADgCgDIAAABIAAgBQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIAAAAIAAABQAAAAgBgBIABACIgBgCIABADIgCgCIABABIgBgBIAAAAIAAAAIgCgDIACAEQAAABAAABQAAAAAAAAQAAAAAAgBQAAAAgBgBIgBgCIAAAAIACADIAAABQAAABgBAAQAAAAAAgBQAAAAgBgBQAAgBgBgBIABABIgBgCIABAEIgBgCIABADIgCgEIAAgCIACAFIgBgBIAAAAIAAABIAAABIgBgCIABAAIgBgBIAAABIABACIgBgBIAAgBIAAACIAAABQAAAAAAABQAAAAAAAAQAAAAAAgBQAAAAAAgBIAAACQAAABAAAAQAAAAAAAAQAAAAAAgBQAAgBAAgBIgBgDIAAABIABAEQAAABAAgBIAAACIAAgDIAAADIAAgCIAAACIgBgCIABACIgCgEIABAGIAAgBIAAABIAAABIgCgFIAAACIgBgDIAAABIACAFQAAABAAAAQABABAAAAQAAABgBgBQAAAAAAAAIgBgEQABADgBgCIgBgBIAAgBIABAEIABABIgBAAIAAgBIAAgBIAAACIAAABIgBgFIgBAAIABACIgBgCIABAEIgBgDIABAEIgCgFIABADIgBgDIgCgFIABAFIAAAAIACAGIAAAAIAAACgAAFAGIABAAIgBgBgAgKgMIABADIgBgDgAgHAPIABABIAAAAIABADIAAADgAgDAUIAAAAgAgGAQgAgPAFIAAgFIABAFIgBAAIAAAAgAAOgIIgEgDIADABQABAAABAAQAAABABAAQAAAAAAAAQAAAAgBAAIgDgBIACADIAAgBg");
	this.shape_17.setTransform(28.7,33.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAAARIAAACIAAgLIAAAIIAAABIAAgCIAAADIAAgDQAAABAAgBIAAACIAAgDQAAABAAgBIAAgCIAAgDIAAACIgBgDIAAADIABAEIgBgBIAAgHIgBABIAAgEIAAgEIAAgFIAAACIAAgDIAAAAIAAABIAAABIABABIgBgCIAAgDIAAgBIAAAAIAAgBIAAgBIAAAAIAAABIgBgBIAAAAIABAAIgBAAIAAAAIgEgHIABAAIABABIAAABIAAABIAAAAIABABIAAgBIAAAAIgBgBIAAAAQABABABABQABABAAAAQABAAAAAAQAAAAgBAAIAIALIgBgBQAFAFgHgGIgBgBIAAgBIAAABIAAAAIAAAAQABABABABQABABAAAAQAAABAAAAQAAgBgBAAIACACIABABIgBgBIAAAAIgBAAIAAAAIgCgCIACACIgBAAIAAAAIgBgBIABABIAAAAIgBgBIABABIABACIAAgBIgBgBIgCgBIgBgCIgBgBIAEAFIgBgBIABABIgBgBIABACIABAAIABADIgBgCIACAEIgBgCIAAABIABABIgBAAIABABIgBgCIAAABIAAAAIAAgBIgBgCIAAACIABABIABACIgCgCIACADIgCgDIABACIgBgBIAAAAIgBgEIABAEIgBgCIACAEIAAAAIgBgCIABADIgBgCIgBgBIAAgBIAAACIABACIgCgGIAAABIABACIAAACIAAgBIAAACIAAgBIgBAAIABABQAAABAAAAQAAAAAAAAQAAAAAAgBQgBAAAAgBIAAACQABACgBgCIAAABIgBgCIABADIgBgDIAAADIgBgFIABAGIAAABIgBgEIAAACIgBgEIABACIAAADIgBgDIABAEIAAACIgBgEIABAAIAAABIgBgCIAAABIAAgBIABAGgAAAANIAAAAIAAAAgAAEAJIAAgBIABACgAAFAIIAAAAIABABg");
	this.shape_18.setTransform(30.3,40.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgFAXQgHgHgEgKQgEgIABgGQABgFAGgJQAEgHAKAEQANAEAEALQAEAKgGAMQgFANgGACIgDAAQgDAAgFgEg");
	this.shape_19.setTransform(30.4,40.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAAAMIAAAAIAAgEIgBAFQAAAAAAAAQAAABAAgBQAAAAAAAAQAAgBABgBIAAgCIAAABIAAABIgCACQAAAAAAAAQAAAAAAAAQAAgBABgBQAAAAABgCIAAAAIgBABIgBACIABgBIgCACIADgFIAAAAIAAAAIAAAAIgBACIgCACIABgCIAAABIAAgBIAAgBIAAABIAAgBIgCADIABgCIAAABIAAgBIgBABQgBABAAAAQAAAAAAAAQAAgBAAAAQABgBAAAAIgBABQgBABAAAAQAAAAAAAAQAAAAAAgBQABAAAAgBIADgDIgBABIgDADIABgBIgCABIACgCIgCACIABgCIgCACIACgCIABgBQgFAEAAgBIgBAAIAEgEIAAAAIgEADIACgCIgCACIACgCQgDACADgDIgCACIgBABIgBABIgBAAIAEgEIgEADIADgCIgDACIAEgDIAHgFIgBAAIgJAHIABgBIACgCIAAAAIABgBIgBABIAEgDIgDACIgBABIgBAAIABAAIgCABIgDACIgBABIABgBIgCABIADgCIADgCIACgBIgCAAIABAAIADgCIAGgDIgCAAIgEADIABgBIgBAAIACgBIABgBIgDACIABgBIgBAAIADgBIgCAAIAFgBIABAAIgBAAIAAAAIgBAAIgBABIgBAAIAAAAIACgBIABAAIACgCIACgBIgDACIgBABIAEgDIABAAIABgBIgBABIABAAIABgBIABAAIgCACIADgDIABgBIABgBIAAAAIABAAIAAgBIABAAIAAAAIgBABIACgCIgCAEIAAAAIACgEIADgDIAAACIgBADIABgBIgBABIACgDIgBACIACgEIgBADQAAABABgBIgCAFQAAACABgCIgEAIQAAACgBABQAAABAAAAQgBABAAAAQAAgBAAAAIABgDQgEAJAEgLIABgBIgBACIgBAAIABgBIAAgCIgCAFIABgCIgDAEIAAABQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAIgBABIABgDIgBACIAAgCIAAABIAAgBIAAABIAAgBIAAAAIAAAAIAAAAIgBABIABgCIgBACIABgDIABgCIgEAGIACgEIgDAFIAAAAIgBACIABgCIgDAEIABgCIgBACIAAAAIAAAAIAAAAIAAgBIABgCIgBABIAAADIAAgCIAAADgAADgDIgBABIACgCgAgNAMIAFgEIgDADIgCABIAAAAgAAEAIIADgFIgDAGgAgGACIgBAAIgBABIACgBg");
	this.shape_20.setTransform(22.9,44.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgNATQgEgCgKgHQgGgFAGgKQAHgMALgCQAKgBAOAHQAOAIABAFQABAFgIAGQgIAGgMACIgIABIgIgBg");
	this.shape_21.setTransform(23.5,44.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgOASIABgGIAAABIAAAAIAAgBIgBABIABgDIAAACIAAgBIACgFIgBABIgBADIABgEQAAABAAgBIgBACIAAgCIAAAAIAAgBIAAABIABgDIAAgBIgBADIABgFIABAAIAAAAIABgEIACgDIAAABIgBACIABgDIAAACIACgDIgBADIABgCQgBACAAABQAAABAAgBQAAAAAAgBQABgBAAgCIABgCIAAACQgBABAAAAQAAABAAAAQAAABAAAAQAAAAAAgBIACgFIgBADIACgFIAAADIABgDIAAABIAAAAIABgCIgBADIABgEIAAACIABgCIAAAAIAAACIAAgCIAAABQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAAAgBQAAABAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBIAAACIACgCIAAAEIAAABIAAACIABgHIAEgDIACAAIABACIAAACIAAgCIACAAIAAgCQAAAAABAAQAAAAAAAAQAAAAAAAAQAAABAAAAIABADIABgBQgBAIABgCIgDAIQgDAHAAgDIABgCQgBACAAAAQAAAAAAAAQAAgBAAgBQAAgBABgBIAAAAIgBAAIAAAAIABgCIgCACIgCAEIAAABIgBABIAAgCIAAABIABgDIgCACIAAgBIAAAAQgBACAAgBIABgDIgBACIABgBIgBABQAAABAAgBIgBACIABgEIgBAEIgBAAIACgFIAAAAIgCAFIAAgBIgBADIAAgBIAAAEIAAAAIAAgBIAAABIAAABIAAgBIgBAEIABgDIAAgBIgBACIABgCIAAgDIgBAEIAAgBIAAADIAAgDIgBACQAAABAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBIgBACIAAgDIAAABIAAgBIgBACIABgFIgBAFIAAgCIgBACIAAgCIAAABIAAgBIAAACIAAgBIgBACIABgGIgBAFIAAgBIAAACQAAABgBAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIAAAAIABgDIgBABIAAACIgBABIAAAAIABgBIgBABIAAgEQgCAIAAgDIAAgBIAAABIgBABIABgEIgCAFIABgCIAAgDIAAAAIgBADIAAACIgBABIABgBIAAgBIgBAAIABgCIAAABIgBABIAAACIABgGIgBAEIABgEIgBADIgBADIAAAAgAgLAPIAAgCIAAAAgAgMAKIgBACIAAAAIABgBIAAAAIABgEgAgGAJIAAABIAAgCgAgNAGIACgDIgBACIgBABgAgNAQgAgDALIAAAAIAAAAgAgMAAIABAAIgBAAgAgJgGIAAABIAAgBIgBACgAgGgIIAAAAIAAABIAAgBgAgGgIg");
	this.shape_22.setTransform(17.4,38.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgHASIgCABQABAAAAgBQAAgBABAAQAAgBAAAAQAAAAgBAAIACgBIAAgBIgCACQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIgEAEIACgCIgDACIADgFIADgCIAAgBIAEgDIgCABIgHAFQAGgFgFADIgDACIgCABIAGgEIgBAAIAEgCIgDABIgCABIAAAAIgCAAIgDADIgBAAIgBgBIACgCQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIADgBQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAgBIABAAIAEgCIAAAAIgCAAIgDACIgDgBIADgBIAAABIADgBIABgBIAAgBIAAgCIgBAAIAAgBIAAAAQAAgBAAgBQgBgBAAgBQAAAAAAABQAAAAAAACIgBgKQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAgBIAAAEQAAgBAAgBQABAAAAgBQAAAAAAAAQAAAAAAAAIABAFIAAABIABgDIAAABIABgDIAAACIACgFIgBAEIABgEIABgBIAAABQAAgCAAACIAAAAIABgCIgBAFQABgBAAAAQAAgBABAAQAAAAAAAAQABAAAAgBIgBADIABgCIAAACIAAgBIAAACIABgCIAAAAIAAABIAAAAIABgCIAAABIAAgBIAAABIABgCIAAABIgBAEIAAACIACgFIgCAEIAEgGIAAAAIgBACIgBABIACgBIADgCIgCACIAEgDIgCABQADgBgCACIABgBIgBABIABAAIgBABQABAAABAAQAAAAABAAQAAAAAAAAQAAAAgBAAIABAAIAAABIAAAAQACAAgCAAIgDACIACgBIABAAIACgBIgCACIABgBIgBACIADgCQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBABIACAAIgBAAQgCAAACABIgEABIAFgBQgCAAACABQACgBgCABIgEAAQABAAABABQAAAAABAAQAAAAAAAAQgBAAAAAAIADgBQABABAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAIACAAQABABAAAAQAAAAgBABQAAAAgBAAQgBAAgCAAIADAAIgEAAIAFABIgCAAIADABIgGAAIACABIABAAIACAAIgCAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAABIABAAIADABIgCAAQgBgBABABIABAAIABAAIgGAAIAGAAQAAAAABAAQAAAAAAAAQgBAAAAAAQgBAAgBAAIACAAQABABAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAgBIACABIgDgBIACABIgCAAIADACIgDgBIACABIgEgBQAHADgCABIgEgBIACABIABAAIACABIgEgBIABAAIgCAAIABAAIgDgBIAAABIABAAIAEACIgDgCIAEACIABABIgGgDIAGAEIgDgCIAAABIABAAIgUAHIABgBIgCABIABgCIgBABIABgCIgCADIgBABIgBABgAgIADIAAAAIAAAAIAAAAgAgHAAIAAAAIACAAIgCAAgAADAAIAAAAIABAAIABAAIgCAAIAAAAIABAAIABAAIgBAAIABgBIAAAAIgFAAIACABIAAAAgAAOgBQABgBgBAAIACABg");
	this.shape_23.setTransform(26.2,25.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgLATIABgEIAAAAIgBACIABgDIAAAAIgCACIgBACIgBABIABgCIgCACIABgCIgBACIABgDIACgCIAAgBIgEAGIAAgBIACgCIACgDIgDAEIABgCIgCADIACgFIAGgIIgBABIgHAJIAAAAIgCACIAEgGIAAAAIADgEIgDADIAAABIgCACIgCADIAAABIAAgCIgBACIABgDIACgCIACgCIAAgBIACgCIAAAAQAAAAgBgBQAAAAAAABQAAAAgBAAQAAABgBABIACgDIgBgBIgCADIAFgGIgEADIABgBIgCAAIAEgEIAAAAIgBABIAAgBIgBABIABgBQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIACAAIABgBIgBABIAAgBIAAAAIAAgBIABgCQAAgBAAAAQAAAAAAAAQAAAAAAAAQgBAAAAABQAGgIgEADIAHgIQABAAAAgBQABAAAAgBQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIAAACQAFgGgFAJIgBABIABgBIgBABIABgBIgBACIABgBIAAgBIAFgBIgDACIAEgCQgBAAAAABQAAAAAAAAQAAAAAAAAQABgBABAAIgBAAIACgBIgCACIABgBIAAABIABAAIgEACQABAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAIgCABIACAAIgBABIgBAAIADgBIgCABQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAgBAAIgBABIACgBIgBABIACgBIABABIgDABIAFgBIgBABIgEABIgDABIABAAIAGgBIgEABIAHgBIgCABIACgBQAAABAAAAQAAAAAAAAQAAAAgBAAQgBAAgBAAIgCAAIACABIACAAIABAAIACAAIgDAAIAFABIgCAAQABAAAAAAQABAAAAABQAAAAgBAAQAAAAgBAAIACAAIgCAAIABABIgBAAQABAAAAABQABAAAAAAQAAAAAAAAQAAAAgBAAIADAAIgCAAIgBAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIgCAAIABAAIABABIACAAIgBABIgCgBIgCgBIADACQABABABAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgDAAQABAAABABQAAAAAAAAQAAAAAAAAQAAAAgBAAIgBgBQAAAAAAAAQgBABAAAAQAAAAABAAQAAAAAAAAIgDgBIADADQgBgBABABQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIgCgCQgDgCACACQAAAAABABQAAAAAAAAQAAAAAAAAQAAABAAgBIADACQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAgBgBIAAAAIABACQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQgBABAAgBQAAAAgBAAQAAAAgBgBQAAAAgBgBIAAABIgBgBQABABABABQAAABAAABQABAAgBAAQAAABAAgBIgBgBIABACIgEgEIABACIgBgDIAAACIAAAAQgBgBABABIABACIAAACIgBgBIABACIgBgCIAAgCIAAABQAAABAAABQAAABAAAAQAAAAAAAAQAAAAAAAAIAAgDIgBgBIABACIgBgBIABAEIgBgCIAAAAQgBgBAAABIAAACIgCgFIABAFQAAABgBAAQAAAAAAAAQAAAAgBgBQAAAAAAgBIAAACIgCABIAAgDIAAgDIAAABIAAAEIAAABIAAgCIAAABIgBgBIAAACQgBABAAgBIABgCQgBABAAABQAAAAgBABQAAAAAAAAQAAAAAAgBIABgDIgBADIAAgFQgCAGgCgBIABgEIgCADIAAABIAAABIABgEIgBABIADgGIgDAFIABgCIAAgBIgBABIgBAEIABgDIgCAEIgBACIAAgBgAgKgBIACgBIACgDgAgNASIABgBIAAABgAgNASIAAAAgAALAKIgBgBIACACgAAAgOIABgBIgBABg");
	this.shape_24.setTransform(11.7,31.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAAAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_25.setTransform(16,1.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AB2EFQgEgEADgJQACgJgDgEIACgBQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQgGgIAHgXIABAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQgBAAAAgBIgCgCIACAAIgCgCIgBgDIAEgCIgDAAQgEgCABgEQABgFgCgBIACAAQgDgEgBgHIgCgMQAAAAABAAQAAABABAAQAAAAAAgBQABAAAAAAQgCAAgCgEQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIABAAIgBgCQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAAAIACgCQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAgBIgBAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAIAAgBIAAgDQAAAAgBgBQAAAAAAAAQAAAAgBAAQAAAAAAAAIACAAQAAABAAAAQABAAAAAAQAAAAABAAQAAAAABgBQgEgGgEgXIACgCQgBgEgCgBIACgBQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAIgDgDIgBgDIACAAQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAgBAAIACAAQABAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBIACAAQgCgBgBgCIgCgFIAAAAQAAgGgCgCQAEgBgBgCQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAABgBAAQAAgHgBgBIADAAIACAAIACgCIABABIAAAAIgCgFIgFgCQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAQABgBAAAAIgIgCIABgBQABAAAAAAQAAAAAAgBQAAAAAAAAQAAAAgBgBIgCAAIgBgCQAAgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAIABABIABgBIgCgEIAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIACAAIgHgGIADAAQAAgCgCgDQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIgBAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAgBgBQgCgBgBgDQgCgEAAgDIgCAAIgCgBIACAAIAAgCIAAgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAABgBQABAAAAAAQABAAAAAAQAAAAAAAAQABgBgBAAIgCgCIgCAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAAAIgBAAIAAgCQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAAAIADgBIgFgBIABgBQAAABgBAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQgBAAAAAAIgBgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQgEgBAAgCIACAAIgBgDIACgEIgDAAIgCAAQAAAAAAgBQABAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABABABAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAgBQABAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAAAIgDACQAAgBABAAQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAgBABAAQAAAAAAAAQAAAAABgBQAAAAAAgBQgBAAAAAAQgBgBAAABQgBAAgBAAQABgCgCgFQgCgEADgCIgBgBIgCAAIADgCQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBgBQgBAAgBAAQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIgDgBQgBgCAGgCQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIADgDIgCABIgBgBIABAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQgBAAAAgBIgCAEIgCgBIABgCIgBgCIgDgBIABgBIABAAIAAABIABgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQgBAAgBAAQgBABAAAAQgBAAAAgBQAAAAAAgBIADAAIAAgCIgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAIgDgBIAAgEIABAAQAAAAAAgBQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAHgEgDAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAIgDABIgCgEQgBAAAAgBQAAgBgBAAQAAgBAAAAQAAgBABgBIgDAAQgGgHACgEIADgDQAAAAAAAAQAAgBAAAAQgBAAAAAAQgBABgBAAQAAAAgBABQAAAAgBAAQAAABAAAAQAAABAAAAQgDgEABgDIgCABQABgBAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAIgBgBIgCAAIABgCQgBABAAAAQgBAAAAAAQgBAAAAAAQAAgBAAgBIACgBQgGAAABgDIABgCQAAgBgBAAQgBAAAAAAQAAAAgBABQAAAAAAABIABgHQgJAAgHgKIACgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAAAABIgCAAIACgCIACgCQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBAAAAAAIgDAAQAAABAAAAQAAAAAAAAQAAAAAAAAQAAABgBAAQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAABgBAAQAAAAABgBQAAAAAAgBQABAAAAAAQABgBABAAIgCAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQADgBABgDIgBgBQABAAAAAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIgEABIgCACIgEABQgBABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIACgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAIgCgBQAAABAAAAQAAABgBAAQAAABgBAAQgBAAgBAAIABgCQAAAAABAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIgDABIgBABQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQAGgDgBgCIgDABQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBABQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIgCABIABgDIgDAAQAAAAAAAAQgBgBAAAAQAAAAABgBQAAAAAAgBIgBAAQAAAAgBAAQAAAAAAABQAAAAAAAAQgBABAAAAIABABQAAAAABAAQAAAAAAABQAAAAAAAAQgBAAAAABQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAgBAAIgCABIABgBIgDAAIABgCIgCACQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAAAQgBAAAAAAIACgBQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAIgEAEQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIACgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIgBgDQgEACABADQgBgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAgBIgBACIgCABIAAgHIADgCIgBgBQADgCAAgDIgDAAQgBAEgCACQgEACAAABQgCAAABgEQABgEgDACIgBADIgBABIgBABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIABgDQAAgBABgBQAAAAAAgBQAAAAABAAQAAAAABgBQgBABAAAAQAAAAAAABQAAAAABAAQAAAAABAAQACgEgCgBIgCAAIgBABQAAABAAAAQAAAAAAAAQAAABAAAAQAAABgBAAIgCgCQAAAAAAAAQAAAAAAAAQgBAAAAABQAAAAgBAAQABABAAAAQABABAAAAQAAABgBAAQAAABgBABIgCAAIABgBQAAgBAAAAQgBAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAIAAgEQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABgBAAgBIgCAAIgCgBIABAAQACgGgEACIgCABIAAACIgEAAIgCAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAgBQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAgBQgCgBACgGIgCABIgBAEQgEgDgEADIABgCIABgBQgDgBgFgEQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgBAAIABgEQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQgEABgEAAQgBgDgEgBIgFgCQADgFgBgBIgBACQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBgBAAAAIABAAQgCgEgDACIACgCIgCAAIACgCQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIgDgBIgBACIgDgCIgDgDIABgCIgCAAQABAAAAAAQAAgBAAAAQABAAAAAAQAAgBAAAAIgBgBIAGAAIgCACIgCABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAABgBQAAAAAAAAIgCgBIADgBIACgBIAAAAIADABIgBAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQABAAAAAAQABAAAAAAIAEABIgHAEQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAAAIAHgDIgBABIACgBQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAABQACACAHADIgBADQABgBAAAAQABAAAAAAQABAAABAAQAAAAABAAIAEABQABABAEACQABAAABABQAAAAABAAQAAABAAAAQABABAAAAQAPAEAEADIgCACQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAIACgBIADgBQACAFAIgBIgBACQADgBACABIAEAEIAAAEIAIAAQAEACACAEQAFABAGAFIAKAJIgBACQAFACADAGQAGAJACABIgDACQAAAAAAABQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABAAIACACQAAABAAAAQABABAAAAQAAABAAAAQgBABAAAAQABACAEABQABAEADAEQAAAAgBAAQAAAAAAAAQgBAAAAABQABAAAAABIACACQAAAAABABQAAAAAAAAQABAAAAgBQABAAAAgBQAAADAEAEQADAEgBADIADAAIACAGQABADACABIgBABQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAIADAAQADADABAGIACAJQAFAFADAIIAGAOIgBAAQADABAAAFQAAADADAAQAAABAAABQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQABABAAABQAAAEACABIAAgBIABAGQACADAAADIgCgCQAAABAAAAQAAAAAAABQAAAAAAAAQABABAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQABAIALAQQAAAEgDABQgBAAAAAAQAAAAAAABQABAAAAAAQAAABABAAIABAAQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAABQABAAAAAAIgBAFQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABIgBAAQACABADADQACADADAAIALAcIAJAcIAHAdQAEARAAANIgCAFIACAGIgCAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAQAAABABAAQAAABAAAAQAAAAABAAQAAAAAAAAIADAYIgCgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAABIACABIgBAAQABABAAAAQAAAAABABQAAAAAAAAQABgBAAAAQACAJAAASQgBAUABAIIABARIgGAWQgEANAAAKQgIgFAAgGgAhojnIABgBQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgBIABgBQACADgDADIAAgBg");
	this.shape_26.setTransform(22,22.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAg");
	this.shape_27.setTransform(7,32.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_28.setTransform(20.6,45);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAABQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_29.setTransform(23.1,47.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("ACmD6IADgCQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAIACABQgCACgDAAIABABQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAABAAQAAAAAAAAQAAgBABAAQAAAAAAgBQgDADgCgDQAAgBAAAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQAEgDADAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIgHADIABgCIgDABIgCgBIgIgHIABgCQgBAAAAAAQgBABgBAAQAAAAgBgBQAAAAgBAAIgEgCQAAgCgEgCQgDgCAAgCQgOgGgDgEIACgCQgBABABgBQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAgBgBAAQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgEABQgBgFgIAAIABgBQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBIgEgEIAAgEIgIABQgDgDgBgDQgFgBgGgEQgIgFgDgBIABgCQgGgBgGgFIgJgHIADgDQgBgBAAAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAgBAAQAAABAAAAIgDgCQAAgBgBAAQAAAAAAgBQgBAAAAgBQABAAAAgBIgDgBIgDAAIgGgIQAAAAABAAQAAgBAAAAQABAAgBgBQAAAAAAgBIgDgDQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAgCgEgDQgEgEABgCQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgCgHgEgBQABAAAAgBQAAAAABAAQAAAAAAAAQAAgBAAAAIgDABQgDgCgCgFIgEgIQgFgDgGgGIgKgLIAAgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQgBgBAAgBQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAQAAAAgBAAQAAAAAAgBQgBAAAAgBQgBAAAAgBIgEgEQAAgCgDgCQgDgDgBgCIADAAQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAAAABgBIgCACQgCgEgHgGIgLgKQgBgEADgBQABAAAAgBQAAAAgBAAQAAAAAAAAQgBgBAAAAIgBAAQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBAAAAAAIgBgFQAAgBAAAAQAAgBAAAAQgBAAAAAAQgBgBAAAAIABgBQgCAAgEgDQgDgCgDAAIghgwQgSgmgFgTIACgGIgCgFIgBgBQAAgBgBAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIgGgWQABAAAAAAQABABAAAAQABAAAAgBQAAAAAAAAIgDgBIABgBIgBgBQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAABQgEgLAAgSQABgWgBgHQABgCgCgOIAGgVQADgNgBgJIAEACQAEAEABAEQAEAEgCAJQgBAIACAEIgCABQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAGAJgHAWIgBgBQAAAAAAABQAAAAAAABQAAAAAAAAQABABAAAAQABABAAAAQAAABABAAQAAAAAAABQAAAAAAAAIgCAAQAAAAAAAAQAAABABAAQAAAAAAAAQAAABAAAAQAAABABAAQAAAAAAABQAAAAAAAAQAAAAABAAIgEACIADABQAEACgBADQAAAFABACIgCAAQADADACAHIADALIgDABQACAAADAEQgBAAAAAAQAAABAAAAQAAAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAAAAAABQAAAAAAAAIgBAAQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQABAAAAAAIgCABQABAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAIABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAIgBAAIABAEQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBABQAFAHAHAUIgCADIACACIACABIgBACQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQAAAAAAAAQAAAAAAABIgDAAQADABACAEIgCAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQABAAAAAAIgCABQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAABIgCAAQACABACACIADAEIgBAAIAEAHIgBACQgBAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABgBQABAHACABIgDABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAgBAAAAIgBADIgBgBQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIADAEIAFABIAFABQgBAAAAAAQAAAAAAAAQgBABAAAAQAAAAgBABIgCABIAJAAIgBABQAAAAgBABQAAAAAAAAQAAAAAAAAQABAAAAAAIACAAIABACQABABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAIgBAAIgBABIADADIAAAAIABABQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAgBQAAABgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQACAAACADIgCAAIAIAEIgCABQAAACADABQABAAAAAAQABAAAAAAQAAABAAABQAAAAAAABIACgCQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABABAAQAAAAABAAIAAAAIAEADQACADABACQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAABIgCABIABACIAAABIABAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAIgBABIgBABQAAABABAAQAAAAAAABQABAAAAAAQABAAAAgBIABABIACAAIABgBIAAACQABABAAAAQAAAAAAAAQAAAAgBABQAAAAAAAAIgCACIAFgBIgBABQAAAAABAAQAAgBAAAAQABAAAAAAQAAABAAAAQAAAAABAAQAAABAAAAQABAAAAAAQAAAAABAAIACADIAAADQAFABAAACIgCAAIACACIAAAFIAFgCQgBAAAAABQAAAAAAABQABAAAAAAQABABAAAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAQgBAAAAABQAAAAgBAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAABABQAAAAABAAQAAAAABAAQABAAAAAAQAAAAABABQAAAAAAAAIACgDQAAABAAAAQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBABIACABIACgBQAAACAEAEQADADgCADIACABIABgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAIAAAAIABAAQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAQAAABAAAAQABAAAAAAQABAAAAAAQABAAABAAQABAAAAAAQABAAABAAQAAAAABAAQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAAAAAQAAABABAAIADAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBAAIgDADIAEABIgBADQAAgBABAAQAAAAAAAAQAAAAAAAAQABAAAAAAIABABIgBAAQgDABAFAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIACAAIAAACIAAACIABAAIgBACIABABIADgBQAAgBAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIgDABIABADIABgCIAAABIACABQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAIAAAEQAAAAAAABQAAAAABABQAAAAABAAQAAAAABAAIAAABQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAIgDAEQAAAAgBABQAAAAAAAAQAAAAAAABQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAIADgCIADAEQABABAAAAQAAABABAAQAAABAAABQAAAAAAABIACAAIAFAFQADAEgBACIgDACIABABIABgBIACgCQAEABAAAEQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAIgCACQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAABAAIABgBIgBACIACgBQABAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIgBACQAGAAAAABIgBADQAAAAABAAQABAAAAAAQAAgBAAAAQAAAAAAgBIACAHQAIgBAJAIIgBABQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIABAAQgBADgCABQABACAFgCQABgBgBAAIAAgBQAAABABAAQAAABAAAAQABAAAAAAQABAAAAgBIgDAEIACgBQAAABAAAAQAAAAgBABQAAAAgBABQAAAAgBAAQgEACAAACIABABQAAAAgBAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAABAAQAFgBAAgEQAAAAABAAQAAAAABAAQAAAAABAAQABgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABABQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQABAAAAAAIACABIABgCIACgBQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAAAQAAABABAAIACgBQAAgBAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAAAgBIgDAEQAAAAgBABQAAAAAAAAQAAABAAAAQAAAAAAABIADgCQABAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAABAAAAQAAABgBAAIACgCIAAAEIADAAQAAAAAAAAQABAAAAABQAAAAgBAAQAAABAAAAIABABQAAAAABAAQAAAAAAgBQAAAAAAAAQABgBAAAAIgBgBQAAAAgBAAQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAABAAIACAAIgBABQABABAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIgBACIACgCQABAAAAABQAAAAAAAAQAAAAAAABQAAAAgBABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAIgCAAIAAABIABABIAFgEIABABQgBABABAAIgCABIgBACIABACIADgBQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgBACQABAAAAAAQAAAAAAAAQAAAAAAgBQABAAAAAAIACgBIAAAHIgEACIABAAIgCACIgBACQAAABAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAgDADgBQAEgCABgCQABABgBAEQgCAEAEgCQABgBAAAAQABgBAAAAQAAgBAAAAQAAAAAAAAIACgBQAAgBAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBABQAAAAAAABQAAABgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAIgBADQgBAAAAAAQAAABAAAAQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAQABAAAAAAQAAAAABgBQgBAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAIACACIACgBQAAAAgBgBQAAAAAAgBQAAAAABgBQAAAAABgBIACAAIgBABQAAAAAAAAQAAABABAAQAAAAAAAAQABgBAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIgBAEIgCgBQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAABAAAAIACABIACABIgCAAIgBADQAAAAAAABQAAAAABAAQAAABAAAAQABgBAAAAIADgCQADABADAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABIgBABQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQgBAAAAABQgBAAAAAAQAAABgBAAQAAAAAAAAQAAABAAAAQgBgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQACACgEAFIADAAIACgEQADAEAEgCQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBgBQAEADADAEQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAAAAAIACABIgCADQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABgBAAIAAACQAEAAAEABQAAADADABIAFADQAAACgDADIACgBQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIgBABQACAEAEgCIgDACIACAAIgDACQAAABAAAAQAAABAAAAQABAAAAAAQAAABABAAIADAAIAAgCQAEAAACAFIgBACIACAAQgBAAAAAAQAAABAAAAQgBAAAAABQAAAAAAAAIAAABIgFAAIABgBgACTDQQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIAAAAIgCACQgBgFADgBgAABBVIACAAQAAAAAAAAQAAABAAAAQAAAAAAAAQgBABAAAAQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAAAAAAAgAg1BCIABAAIAAAAgAg0BCIAAAAgAg9A3IAAAAIAAAAgAhIABIAAAAIAAAAg");
	this.shape_30.setTransform(10,27.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgRAyQgHgGgPgWQgKgPAIgcQAIgfARgCQAQgDAVAaQAVAYADAQQADAQgLAOQgLAOgSACIgHABQgKAAgIgGg");
	this.shape_31.setTransform(25.6,24.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgQAyQgIgGgPgWQgKgPAIgcQAIgfARgCQAQgDAVAaQAWAYACAQQADAQgLAOQgLANgSADIgIABQgJAAgHgGg");
	this.shape_32.setTransform(11.4,32.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgQAhQgJgGgCgJQgBgGACgQQABgNASgMQAPgMAKAGQAKAHABAXQAAAUgHALQgGAJgLACIgFABQgIAAgIgFg");
	this.shape_33.setTransform(28.3,32.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgQAhQgKgGgBgJQgCgGADgRQABgMARgMQAQgMAKAGQAKAGABAYQAAATgHALQgGAKgMACIgEABQgIAAgIgFg");
	this.shape_34.setTransform(17.3,38.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#2E1000","#47240B"],[0,1],-22.8,-21.1,28.2,18.8).s().p("ABWEjIg5g0IgYgOQhjhWhAhgIgshMQgVg1gEg3QgDgsAIgfQAMgMARgOQAjgbAcgFIAhgaQATgPAuABIAlAfIAUASIAxAuQA6A5AmBVQArBeAFBpIALBSQABBTgwAFIgHADQgMAUgVAAQgXAAghgYg");
	this.shape_35.setTransform(14.8,23.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAg");
	this.shape_36.setTransform(-8.4,-35.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("ABYCrQgDgDACgGQABgGgCgDQABAAABAAQABAAAAAAQAAAAAAAAQAAAAAAgBQgFgFAHgPIACAAQAAgBgDgDIACAAIgCgBIgBgCIADgBIgCgBQgBAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAgBAAIACAAQgDgDgBgEIgCgIIAEAAQgDAAgCgDQABAAAAAAQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIABABIgBgBIAAAAIAAgBIgCgBIADgBQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAIgBAAIAAgBIAAgBIAAAAIAAgDIADAAIgFgJIgEgJIACgCQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAAAAAIABgCIgBAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAAAIADgBIgEgCIACgBQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIgBgCIACAAQAAgBAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAIACgBQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAIgCgDIABAAQgCgDgCgBQABgBABAAQAAgBABAAQAAgBAAAAQAAAAgBgBQAAAAgBABQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQAAAAgBABQAAAAgBAAQAAgEgCgBIADgBIACgBIABgCIABABIABgBIgDgCIgEABIgEgBQABAAAAAAQAAgBABAAQAAAAABgBQABAAAAgBIgHACQAAgBABAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIgCAAIgBgBQAAgBAAAAQAAAAAAAAQAAgBAAAAQABAAAAgBIACgBIgCgBIAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAABQgBAAAAAAIABAAQABgBAAABQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAIACgBQgCAAgFgCIACgBQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBABAAIgCABQABgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAgBAAIgBAAIAAAAQgFgCABgEIgDABIgBAAIACgBIAAAAIgBAAIAAgBQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAgBQAAAAAAAAIgDAAIgBgBQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAABIAAgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABAAIACgCIgEABIABgBQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgBgDQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBIACAAQAAgBAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIACgFQgCAAgCADQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAAAIgDACQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQgBgBAAAAQAAAAgBABQgBAAAAAAQAAAAAAgBQAAAAAAAAQgBgBAAgBQAAAAgBgBQAAgCABgDIgBAAQAAABAAAAQAAAAAAAAIAAABQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBIABgCIgDABQAAgBAEgDIgDgBIACgDIgBABIgBAAIABAAIgBgCQgBAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgDAAIABgBIgBgCIgCABIABgCIABABIABgBIgBgBQgBABgBAAQAAAAgBABQAAAAgBgBQAAAAAAAAIADgBIAAgCIgCABIABAAIgCAAQAAgBgBAAQAAAAAAAAQAAAAgBAAQAAAAAAABIAAgDIAAAAQAAgBAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAIgCgBQAGgFgDABQgBgCgEAEIgCgDQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgCAAIgDgDQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAAAQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAAAgBABIgCADQgFgCACgDIgCABQABgBABgBQABAAAAgBQAAAAgBgBQAAAAgBAAIgCABIACgBIgCAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIACgCQgCAAgBAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIACgCQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAABAAAAQAAgDABgCQgHABgFgGIACgBQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIgBAAIADgDQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgDAAIgBABQAAAAAAgBQAAAAAAAAQgBAAAAAAQgBAAAAABIADgDIgBAAIAEgDQADgBABgCIgBAAQABAAABgBQABAAAAAAQABgBAAAAQAAgBAAAAQgFABgBADIgEACQAAAAgBAAQAAABgBAAQAAAAAAAAQgBgBAAAAIABAAIACgBQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAAAgBAAIgCACIgCAAQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAIgEACQAAAAAAABQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAFgDAAgCQgEABgCADQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAABAAQAAgBAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQABgBAAAAIgCABIACgDIgCAAQgBAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAgBIgBAAIgCABQABAAAAAAQAAAAAAABQAAAAAAAAQAAABgBABQABgBAAAAQAAgBgBAAQAAAAgBABQAAAAgBAAIABgBIgDAAIACgBIgCABQgBAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAQABAAAAAAQgBgBAAAAIACAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAIgFAEIAAgBIgBgBIACAAIACgCIAAgCIgDAAIgBABIgCABIACgGIADgCIAAAAQADgBABgDIgDAAQgBACgDACIgFADQAAAAAAgBQAAAAAAAAQAAgBABgBQAAAAABgBQACgDgDABIgCACIgBABIgBAAQgBABAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIADgCIADgDQgBABAAAAQAAAAAAAAQAAABAAAAQABAAAAAAQABgBAAgBQABAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAABABQAAAAgBAAQAAAAAAABQgBAAAAAAIgBgBIgCABQAAAAAAAAQAAAAAAABQAAAAgBABQAAABgBAAIgCAAIACgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAABgBAAIgCAAIACgDQAAAAABAAQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABgBAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBIACAAIABgCQAAgBAAAAQABAAgBgBQAAAAAAAAQgBAAAAAAIgDADIgEgCIAAgBIACgCQgBABAAAAQAAAAAAABQAAAAABAAQAAABAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAABgBIADgFIgBAAIgEADQgBgCgEABQAAgBABAAQAAgBAAAAQABAAAAAAQABAAAAAAQgDgCgBgDQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAIgBAAIADgDQgBAAAAgBIABgCQgDABgDgCQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBgBAAAAIgDgCIADgEQAAAAgBABQAAAAgBAAQAAAAAAAAQAAAAAAgBIABAAQAAgBgBAAQAAgBAAAAQgBAAgBAAQAAAAgBAAIADgBIgCAAIADgCQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAgBAAIgCAAIgBACIgCgCIgCgCIACgCIgCAAIACgCIAAAAIAFgBIgEADIAAABQAAAAAAABQABAAAAAAQAAAAAAAAQABgBAAAAIgBAAQAAgBABAAQAAAAABgBQAAAAABAAQABAAAAAAIAAgBIADABIgBABQABAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABIgGACQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAIAGgCIgBABIADgBQAAAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAIAEAGIgBACQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABIACABQAAABAAAAQABAAAAABQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQAJAGABACIgCACQAAAAAAAAQABgBAAABQAAAAAAAAQAAAAgBABIACgBIADAAQgBADAHAAIgCABQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIABADIgBADIAGgBQACACAAAEQAEAAAEADIAGAFIgBACQAEABADAEIAGAGIgDADQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAABAAIADgBIACACQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAABAAQAAABABAAQAAgBABAAQABADACACIABAAIAAABIgBgBIgCACIACACQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAABgBQAAABAAAAQAAABAAAAQABABAAAAQABABAAAAQABABAAAAQABABAAAAQAAABAAAAQAAABAAAAIACAAIAAADQAAABAAAAQAAABABAAQAAAAAAAAQABABAAAAIgCABIADgBQACABABAEIADAGIAHAHIAGAIIgBAAQABAAAAAAQABABAAAAQAAAAAAABQABABAAAAQAAABAAAAQAAABAAAAQABAAAAAAQABAAABAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAABABAAQAAABAAAAQAAAAABAAQAAABAAAAIACADIACADIgCAAQAAAAAAABQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAABgBAAIACgBQABAEAEAEIAHAGQAAADgDACQAAAAAAAAQAAAAAAAAQAAAAAAAAQABABAAAAIABgBQAAAAABABQAAAAAAAAQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAIgBAEQAAAAAAABQAAAAAAAAQABAAAAAAQAAABABAAIgCABIAFAAQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAIAYAgIAJATQAGALABAJIgDAFIACAEIgBAAIACABQAAAAABAAQAAABAAAAQAAAAABAAQAAAAAAAAIAEAQIgCAAIgBAAIACABIgBAAQABABAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQADAGgCAMIAAATQgBACABAKIgGAPQgDAIABAHQgIgEgCgEgAhfiRQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIAAAAIACgBIgBACIgCACg");
	this.shape_37.setTransform(-0.3,-23.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.rf(["#FFFFFF","#D7D7D7","#979797","#616161","#373737","#191919","#070707","#000000"],[0,0.059,0.165,0.267,0.361,0.447,0.518,0.569],0,0,0,0,0,1).s().p("AgGAHQgDgDAAgEQAAgCADgEQADgDADAAQAEAAADADQADAEAAACQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_38.setTransform(-18.5,-39.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.rf(["#FFFFFF","#D7D7D7","#979797","#616161","#373737","#191919","#070707","#000000"],[0,0.059,0.165,0.267,0.361,0.447,0.518,0.569],0,0,0,0,0,1).s().p("AgGAHQgDgDAAgEQAAgDADgDQAEgDACAAQAEAAADADQADADAAADQAAAEgDADQgEADgDAAQgCAAgEgDg");
	this.shape_39.setTransform(-16.3,-40.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.rf(["#FFFFFF","#D7D7D7","#979797","#616161","#373737","#191919","#070707","#000000"],[0,0.059,0.165,0.267,0.361,0.447,0.518,0.569],0,0,0,0,0,1.1).s().p("AgGAHQgDgDAAgEQAAgCADgEQADgDADAAQAEAAADADQADAEAAACQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_40.setTransform(-21.5,-37.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.rf(["#FFFFFF","#D7D7D7","#979797","#616161","#373737","#191919","#070707","#000000"],[0,0.059,0.165,0.267,0.361,0.447,0.518,0.569],0,0,0,0,0,1.1).s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQADAAAEADQADADAAADQAAAEgDADQgEADgDAAQgDAAgDgDg");
	this.shape_41.setTransform(-22.6,-35.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.rf(["#FFFFFF","#D7D7D7","#979797","#616161","#373737","#191919","#070707","#000000"],[0,0.059,0.165,0.267,0.361,0.447,0.518,0.569],0,0,0,0,0,1.6).s().p("AgKALQgFgFAAgGQAAgFAFgFQAFgFAFAAQAGAAAFAFQAFAFAAAFQAAAGgFAFQgFAFgGAAQgFAAgFgFg");
	this.shape_42.setTransform(-15.7,-37.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.rf(["#FFFFFF","#D7D7D7","#979797","#616161","#373737","#191919","#070707","#000000"],[0,0.059,0.165,0.267,0.361,0.447,0.518,0.569],0,0,0,0,0,2.1).s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_43.setTransform(-12,-36.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.rf(["#FFFFFF","#D7D7D7","#979797","#616161","#373737","#191919","#070707","#000000"],[0,0.059,0.165,0.267,0.361,0.447,0.518,0.569],0,0,0,0,0,1.6).s().p("AgKALQgFgFABgGQgBgFAFgFQAFgEAFgBQAGABAFAEQAFAFgBAFQABAGgFAFQgFAFgGAAQgFAAgFgFg");
	this.shape_44.setTransform(-18.9,-35.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.rf(["#FFFFFF","#D7D7D7","#979797","#616161","#373737","#191919","#070707","#000000"],[0,0.059,0.165,0.267,0.361,0.447,0.518,0.569],0,0,0,0,0,2.1).s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_45.setTransform(-20.5,-31.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_46.setTransform(-25.9,-27.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("ABSCzQgFgDgDABQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAAAgBAAQgJAFgJgPIABgBIgDABIgCAAIABgCQgBABAAAAQAAAAgBABQAAAAgBAAQgBAAAAgBIAAgEIgBADQgBAAAAABQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBQgBAAAAAAQgBgBAAABQgBAAAAAAIABgCQgEABgFgCIgIgCIACgDQAAABgBAAQAAAAgBAAQgBABAAAAQgBAAgBgBQABAAAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAAAAAAAIABgBQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAABgBAAIABgCQAAAAAAAAQgBABAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAAAAAAAIgBABIgBgBIAAgBIAAgBIgCgBIgCABIACgBIACgCQgFgBgEgFIgFgIIABgDIgDgCIABgBIgCgBQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIADgBIgEgDIACAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAAAAAIACgBQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAgBIACAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAIgDgDIABAAQgBgEgCgBQABAAAAgBQABAAAAgBQABAAAAAAQAAgBgBAAIgDgBQAAAAAAAAQgBAAAAAAQAAAAgBABQAAAAgBAAIgBgFIAEgCIACgBIABAAIgCgDQgGAAgCgCQABAAAAAAQABAAAAAAQABAAABgBQAAAAABgBIgIAAQABAAAAAAQABAAAAgBQAAAAAAAAQAAAAgBgBIgCABIAAgCQAAAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBIgCgCIABAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAAAgBAAIgCABIgDgCIADgBQgDAAgEgDIADAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIgBAAQAAgBABAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIgCgBIABAAQgGgEACgDIgCAAIgCgBIACgBIAAgBIABgBIgBAAQgBAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAABAAQABAAAAAAQAAgBABAAQAAAAAAAAIgDgCIgBAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAABIAAgCQAAAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAIADgBIgEgBIABAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAIAAgDQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQgBgBAAAAQgBgBAAAAQgBAAAAgBQAAAAAAAAIACAAIgBgCIADgEIgFABQAAAAABgBQAAAAAAAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAQABABAAAAQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBIgEACQABAAAAgBQAAAAAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAgBAAAAQgBAAAAAAQgBAAgBAAQABgBgBgEQAAgDADgBIgCgBIACgBQAAAAAAAAQAAAAAAgBQAAAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAIgDgBQAAAAAAgBQAAAAABAAQAAAAAAAAQABgBAAAAIAEgBIgDgBIACgCIgBAAIAAgBQAAAAABAAQAAAAAAAAQAAAAgBgBQAAAAAAAAIgCACIgDgBQABAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAgBIAAAAIABgBIgBgBQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAABgBIADAAIAAgBIgCAAIABAAIgCgBQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAAAgBAAIACgDIAAABQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAgBgBIABAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBgBAAAAQAIgCgDgBIgDAAIgDAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBIgCAAIgCgEQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBIAEgBQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAgBAAIgEACQgDgDADgCIgCAAIACgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBgBAAIgBAAIABgBIgCAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQABAAAAgBIACAAQgBgBgBAAQgBgBAAAAQgBAAAAgBQAAAAAAAAIADgCIgDAAQABgEACgBQgJgCAAgKIACgBQAAAAAAAAQAAAAAAAAQgBgBAAAAQgBAAAAAAIAFgBQAAAAAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAIgDgBQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAIAEAAIgBgBQABgBAEABQADABACgBIAAgBQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIgDgBIgEABQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAgBAAIAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQgBgBAAAAIgBgBQgBAAAAABQAAAAgBAAQAAAAgBAAQgBgBgBAAQABAAABAAQAAAAABAAQAAgBAAAAQAAAAAAgBIgEABQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAgBAAAAIAEAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAgBQgDgBgEABQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAAAIgBgBQgBAAAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIgCAAIACgCIgBgBQAAAAgBgBQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQABABAAAAQAAAAAAAAQAAAAAAABQgBAAAAAAIAAgBIgDgBIACAAIgDgBIADgBIgDAAIACgBQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAAAgBIACABQABAAAAAAQAAAAAAgBQABAAAAAAQgBAAAAAAIgGgBQAAAAABAAQAAAAAAAAQAAAAAAAAQgBgBAAAAIADABQABAAAAgBQABAAAAAAQABgBAAAAQAAAAAAgBIgDgBQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgCgBIAFgDIAEABIgBgBQADAAADgBIgBgBIgBAAQgCABgEgBIgFAAQAAAAAAgBQAAAAAAAAQABgBABAAQABAAABgBQABAAAAAAQAAAAAAgBQAAAAAAAAQgBAAgBgBIgCABIgBAAIgCgBQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIADAAQABAAAAgBQABAAAAAAQABAAAAAAQABABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAABAAQABAAABAAQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBAAAAAAIgBAAIgBABIAAgCIgCgBIgEACIgBgBIACAAQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAAAIADgCQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAIgBgBIgBgBIABAAQAGgBgDgCIgEAAIgDgDQABAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAQgBABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABAAQAAABABAAIACAAQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAABgBIAEgBIgCgBIgEACQABgEgFgBQAAAAABAAQABgBAAAAQABAAAAABQAAAAABAAQgCgDABgEQAAABgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBIgBAAIAEgBQAAAAgBgBQAAAAAAAAQAAAAABAAQAAAAAAAAIACgBIgFgEQABgBAAAAQAAAAAAgBQABAAAAgBQgBgBAAAAIgCgDIAGgCQAAAAAAgBQgBAAAAAAQAAAAAAAAQgBABAAAAQgBAAAAgBIABAAIAAgCIgBgBIACAAIgBgBIADgBQAAAAABAAQAAgBAAAAQAAgBgBAAQAAAAgBgBIgDABIgBgCIAAgDIACAAIgBgBIACgBIAAAAIAFABQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAAABAAQAAABAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIgCgBQADgBADABIAAAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIgBABQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAAAQAAABAAAAQABAAAAABIACACQgEAAgDgCIAAADQAFAAABABIgCAAIADACQABAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAAAIIgCAAQABAAAAABQABAAAAAAQABAAAAABQAAAAAAAAIACADIAAAFQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAEAKAAAEIgDgBQABAAAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQgCADAFAEIgCAAQABABAAAAQABAAAAABQAAAAAAAAQAAABAAAAIgBAEIgCACQADABACACQABACgCADQADADABAFQABAGACACIgCABQADACABAFQAAAFACACIgEABQgBAAAAAAQAAABAAAAQABAAAAAAQAAABABAAIADgBQAAABAAAAQAAAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQAAABABAAQAAAAABAAQAAABABAAQAAADACADQgBAAAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAIABACQABABAAAAQAAAAABAAQAAAAABAAQAAAAABgBQgBACACADQAAABAAABQABAAAAABQAAABgBAAQAAABAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAIAAAEQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAIgCABIACAAQACADAAAEIgBAGQADAEABAGIADAJIgBAAQAAAAABAAQAAAAAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAABAAQABAAAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAABgBAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAQAAABAAAAQABAAAAAAIgBAAIABAEQAAAAAAABQABAAAAABQAAAAAAABQAAAAgBAAIgBAAIABABQAAAAAAABQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAEADAFIAFAIQgBAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABABAAIABAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAABgBAAQAAABAAAAQgBAAAAAAQAAABAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAAAAAAAAIgBAEQAAAAAAABQAAAAAAAAQAAAAAAABQABAAAAAAIgBABQAAAAABAAQAAAAABAAQAAABABAAQAAABABAAQACACADAAQALAXAFAMQACAHAGAJIAIAOIAAAEIADABIgBABIACgBIACAAIAKAGIgBABIgBACIACgCIAAABQAAAAABAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAGABAJAHQAKAIAGACQADACAHABQAPAPAKABQgEAHgFAAIgEABQgDAAgDgBgAhCgMIABAAIgBAAgAhDgNIABAAIAAABIgBAAIAAgBgAhBgMgAhiiSIACgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIABAAIACAAIgCABIgCABIgBAAg");
	this.shape_47.setTransform(-16.3,-16.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#2E1000","#47240B"],[0,1],-21,0.5,21,-0.7).s().p("Ag+DZQgmgagGgFQgbgZgTgwQgkhagKgoQgThVAdgzIAMgNQAPgOAMgIQASgMAUgPQAOgJAPgBIAYgCQAHgBAXAFQAcAGA5A3QA7A5AbAwQBTCVgZAlQhsBQghAIQgQAFgHABQgXAFgXAAIgDAAQgiAAgQgLg");
	this.shape_48.setTransform(-7.6,-20.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#42210B","#8C6F2D","#AA863B"],[0.008,0.275,0.922],7.8,-2,-6.6,2).s().p("AA2CuQg5gtgZgqQgSgdgHg6IgDg2QgThEgOgQQgNgXACgRQACghBDAdIAhAaQAbAbgrAHQAMBLgHASQAFADAIASQAMARACANQACAMAGAOQgDABAEANQAEANgCABQATAWAyBJQAJAagNAAQgLAAgdgXg");
	this.shape_49.setTransform(-27.5,-23.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#42210B","#8C6F2D","#AA863B"],[0.008,0.275,0.922],-5.9,1.4,7.4,-1.3).s().p("ABiCqQgghNgGgYQgCAAgJgMQgJgMgDABQgJgOgJgKQgKgKgJgSQgIgSABgEQgNgHgjgiIghghQgkAMgGgfIAAgiQAUgxAgAYQAPANAMAWQAGASAtA9IAvArQAxAuAPAfQAUAqAAA6QAAAjgLAAQgIAAgOgTg");
	this.shape_50.setTransform(-2.1,-36.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.7,-55.1,75.4,110.3);


(lib.FishingSpider = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.body();
	this.instance.setTransform(-3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(64));

	// L-2
	this.instance_1 = new lib.L2();
	this.instance_1.setTransform(-6.9,-2,1,1,0,0,0,62,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0,regY:0,rotation:-3.8,x:-68.8,y:2.2},0).wait(1).to({rotation:-7.6,x:-68.4,y:6.3},0).wait(1).to({rotation:-11.4,x:-67.7,y:10.3},0).wait(1).to({rotation:-15.3,x:-66.8,y:14.3},0).wait(1).to({rotation:-19.1,x:-65.5,y:18.3},0).wait(1).to({rotation:-8.3,x:-68.3,y:7},0).wait(1).to({rotation:2.5,x:-68.9,y:-4.7},0).wait(1).to({rotation:-2.2,y:0.5},0).wait(1).to({rotation:-7,x:-68.5,y:5.6},0).wait(1).to({rotation:-11.8,x:-67.6,y:10.7},0).wait(1).to({rotation:-16.6,x:-66.4,y:15.7},0).wait(1).to({rotation:-17.8,x:-66,y:17},0).wait(1).to({rotation:-19.1,x:-65.5,y:18.3},0).wait(4).to({regX:61.8,regY:-0.3,scaleX:1,scaleY:1,rotation:-19,x:-6.9,y:-2},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-8.3,x:-68,y:7.2},0).wait(1).to({rotation:2.5,x:-68.7,y:-4.4},0).wait(1).to({rotation:-2.2,y:0.7},0).wait(1).to({rotation:-7,x:-68.2,y:5.8},0).wait(1).to({rotation:-11.8,x:-67.4,y:10.9},0).wait(1).to({rotation:-16.6,x:-66.1,y:15.9},0).wait(1).to({rotation:-17.8,x:-65.7,y:17.2},0).wait(1).to({rotation:-19.1,x:-65.2,y:18.5},0).wait(3).to({regX:61.8,regY:-0.3,scaleX:1,scaleY:1,rotation:-19,x:-6.9,y:-2},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-8.3,x:-68,y:7.2},0).wait(1).to({rotation:2.5,x:-68.7,y:-4.4},0).wait(1).to({rotation:-2.2,y:0.7},0).wait(1).to({rotation:-7,x:-68.2,y:5.8},0).wait(1).to({rotation:-11.8,x:-67.4,y:10.9},0).wait(1).to({rotation:-16.6,x:-66.1,y:15.9},0).wait(1).to({rotation:-17.8,x:-65.7,y:17.2},0).wait(1).to({rotation:-19.1,x:-65.2,y:18.5},0).wait(3).to({regX:61.6,regY:-0.2,scaleX:1,scaleY:1,rotation:-19,x:-6.9,y:-1.9},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-19.1,x:-65,y:18.4},0).wait(24));

	// L-3
	this.instance_2 = new lib.L3();
	this.instance_2.setTransform(-6,4,1,1,0,0,0,63,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:0,regY:0,rotation:-3.9,x:-67.2,y:33.2},0).wait(1).to({rotation:-7.7,x:-65.1,y:37.2},0).wait(1).to({rotation:-11.6,x:-62.7,y:41.2},0).wait(1).to({rotation:-15.5,x:-60.1,y:44.9},0).wait(1).to({rotation:-19.3,x:-57.2,y:48.4},0).wait(1).to({rotation:-23.2,x:-54.1,y:51.8},0).wait(1).to({rotation:-27.1,x:-50.7,y:54.9},0).wait(1).to({rotation:-9,x:-64.3,y:38.6},0).wait(1).to({rotation:9,x:-72.1,y:18.8},0).wait(1).to({rotation:0.9,x:-69.4,y:28},0).wait(1).to({rotation:-7.2,x:-65.4,y:36.7},0).wait(1).to({rotation:-15.2,x:-60.2,y:44.7},0).wait(1).to({rotation:-23.3,x:-53.9,y:51.9},0).wait(1).to({rotation:-25.2,x:-52.4,y:53.4},0).wait(1).to({rotation:-27.1,x:-50.7,y:54.9},0).wait(2).to({regX:62.9,regY:-24.5,scaleX:1,scaleY:1,rotation:-19.3,x:-6,y:4},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-23.2,x:-54.1,y:51.3},0).wait(1).to({rotation:-27.1,x:-50.9,y:54.4},0).wait(1).to({rotation:-9,x:-64.3,y:38.1},0).wait(1).to({rotation:9,x:-71.9,y:18.4},0).wait(1).to({rotation:0.9,x:-69.3,y:27.5},0).wait(1).to({rotation:-7.2,x:-65.3,y:36.2},0).wait(1).to({rotation:-15.2,x:-60.2,y:44.2},0).wait(1).to({rotation:-23.3,x:-54,y:51.4},0).wait(1).to({rotation:-25.2,x:-52.5,y:52.9},0).wait(1).to({rotation:-27.1,x:-50.9,y:54.4},0).wait(1).to({regX:62.9,regY:-24.5,scaleX:1,scaleY:1,rotation:-19.3,x:-6,y:4},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-23.2,x:-54.1,y:51.3},0).wait(1).to({rotation:-27.1,x:-50.9,y:54.4},0).wait(1).to({rotation:-9,x:-64.3,y:38.1},0).wait(1).to({rotation:9,x:-71.9,y:18.4},0).wait(1).to({rotation:0.9,x:-69.3,y:27.5},0).wait(1).to({rotation:-7.2,x:-65.3,y:36.2},0).wait(1).to({rotation:-15.2,x:-60.2,y:44.2},0).wait(1).to({rotation:-23.3,x:-54,y:51.4},0).wait(1).to({rotation:-25.2,x:-52.5,y:52.9},0).wait(1).to({rotation:-27.1,x:-50.9,y:54.4},0).wait(1).to({regX:62.9,regY:-25.1,scaleX:1,scaleY:1,x:-5.9,y:4},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-50.6,y:54.9},0).wait(24));

	// L-4
	this.instance_3 = new lib.L4();
	this.instance_3.setTransform(-5,9.1,0.999,0.999,-12.8,0,0,31.3,-53.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-13.6,x:-22.9,y:68.3},0).wait(1).to({rotation:-14.4,x:-22,y:68.6},0).wait(1).to({rotation:-15.2,x:-21.2,y:68.8},0).wait(1).to({rotation:-16.1,x:-20.3,y:69},0).wait(1).to({rotation:-16.9,x:-19.4,y:69.2},0).wait(1).to({rotation:-17.7,x:-18.6,y:69.4},0).wait(1).to({rotation:-18.5,x:-17.7,y:69.6},0).wait(1).to({rotation:-19.3,x:-16.8,y:69.8},0).wait(9).to({regX:31.4,regY:-53.9,scaleX:1,scaleY:1,rotation:-16.8,x:-4.9,y:9},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-17.7,x:-18.5,y:69.9},0).wait(1).to({rotation:-18.5,x:-17.6,y:70.1},0).wait(1).to({rotation:-19.3,x:-16.8,y:70.2},0).wait(8).to({regX:31.4,regY:-53.9,scaleX:1,scaleY:1,rotation:-16.8,x:-4.9,y:9},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-17.7,x:-18.5,y:69.9},0).wait(1).to({rotation:-18.5,x:-17.6,y:70.1},0).wait(1).to({rotation:-19.3,x:-16.8,y:70.2},0).wait(8).to({regX:31.4,regY:-53.6,scaleX:1,scaleY:1,x:-5.1,y:9},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-17,y:69.9},0).wait(24));

	// L-1
	this.instance_4 = new lib.L1();
	this.instance_4.setTransform(-11.9,-1,1,1,6,0,0,53.5,27.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:0,regY:0,rotation:3.8,x:-63.6,y:-31.9},0).wait(1).to({rotation:1.5,x:-64.8,y:-29.8},0).wait(1).to({rotation:-0.8,x:-65.9,y:-27.7},0).wait(1).to({rotation:1.2,x:-64.9,y:-29.5},0).wait(1).to({rotation:3.1,x:-63.9,y:-31.3},0).wait(1).to({rotation:5.1,x:-62.9,y:-33},0).wait(1).to({rotation:7,x:-61.7,y:-34.7},0).wait(1).to({rotation:0.4,x:-65.3,y:-28.8},0).wait(1).to({rotation:-6.3,x:-68.2,y:-22.4},0).wait(1).to({rotation:-4.9,x:-67.6,y:-23.7},0).wait(1).to({rotation:-3.5,x:-67.1,y:-25.1},0).wait(1).to({rotation:-2.2,x:-66.5,y:-26.4},0).wait(1).to({rotation:-0.8,x:-65.9,y:-27.7},0).wait(4).to({regX:53.2,regY:27.6,rotation:3,x:-12,y:-1},0).wait(1).to({regX:0,regY:0,rotation:5.1,x:-62.6,y:-33.2},0).wait(1).to({rotation:7,x:-61.5,y:-34.9},0).wait(1).to({rotation:0.4,x:-65.1,y:-28.9},0).wait(1).to({rotation:-6.3,x:-67.9,y:-22.6},0).wait(1).to({rotation:-4.9,x:-67.4,y:-23.9},0).wait(1).to({rotation:-3.5,x:-66.8,y:-25.3},0).wait(1).to({rotation:-2.2,x:-66.2,y:-26.6},0).wait(1).to({rotation:-0.8,x:-65.6,y:-27.8},0).wait(3).to({regX:53.2,regY:27.6,rotation:3,x:-12,y:-1},0).wait(1).to({regX:0,regY:0,rotation:5.1,x:-62.6,y:-33.2},0).wait(1).to({rotation:7,x:-61.5,y:-34.9},0).wait(1).to({rotation:0.4,x:-65.1,y:-28.9},0).wait(1).to({rotation:-6.3,x:-67.9,y:-22.6},0).wait(1).to({rotation:-4.9,x:-67.4,y:-23.9},0).wait(1).to({rotation:-3.5,x:-66.8,y:-25.3},0).wait(1).to({rotation:-2.2,x:-66.2,y:-26.6},0).wait(1).to({rotation:-0.8,x:-65.6,y:-27.8},0).wait(3).to({regX:53.3,regY:27.9,x:-12,y:-0.9},0).wait(1).to({regX:0,regY:0,x:-65.7,y:-28.1},0).wait(24));

	// R-2
	this.instance_5 = new lib.R2();
	this.instance_5.setTransform(4,-3.9,1,1,0,0,0,-39,49);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:0,regY:0,rotation:4.7,x:46.9,y:-49.6},0).wait(1).to({rotation:9.3,x:50.4,y:-46},0).wait(1).to({rotation:14,x:53.7,y:-42.1},0).wait(1).to({rotation:18.7,x:56.6,y:-37.9},0).wait(1).to({rotation:23.3,x:59.2,y:-33.5},0).wait(1).to({rotation:9.1,x:50.3,y:-46.1},0).wait(1).to({rotation:-5,x:38.5,y:-56.2},0).wait(1).to({rotation:-0.1,x:42.9,y:-53},0).wait(1).to({rotation:4.9,x:47,y:-49.5},0).wait(1).to({rotation:9.8,x:50.8,y:-45.6},0).wait(1).to({rotation:14.8,x:54.2,y:-41.4},0).wait(1).to({rotation:19.1,x:56.8,y:-37.5},0).wait(1).to({rotation:23.3,x:59.2,y:-33.5},0).wait(4).to({regX:-38.6,regY:48.1,scaleX:1,scaleY:1,x:4.1,y:-3.9},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:9.1,x:49.8,y:-45.3},0).wait(1).to({rotation:-5,x:38.3,y:-55.3},0).wait(1).to({rotation:-0.1,x:42.6,y:-52.1},0).wait(1).to({rotation:4.9,x:46.6,y:-48.6},0).wait(1).to({rotation:9.8,x:50.3,y:-44.8},0).wait(1).to({rotation:14.8,x:53.7,y:-40.6},0).wait(1).to({rotation:19.1,x:56.2,y:-36.8},0).wait(1).to({rotation:23.3,x:58.5,y:-32.9},0).wait(3).to({regX:-38.6,regY:48.1,scaleX:1,scaleY:1,x:4.1,y:-3.9},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:9.1,x:49.8,y:-45.3},0).wait(1).to({rotation:-5,x:38.3,y:-55.3},0).wait(1).to({rotation:-0.1,x:42.6,y:-52.1},0).wait(1).to({rotation:4.9,x:46.6,y:-48.6},0).wait(1).to({rotation:9.8,x:50.3,y:-44.8},0).wait(1).to({rotation:14.8,x:53.7,y:-40.6},0).wait(1).to({rotation:19.1,x:56.2,y:-36.8},0).wait(1).to({rotation:23.3,x:58.5,y:-32.9},0).wait(3).to({regX:-38.6,regY:48,scaleX:1,scaleY:1,x:4,y:-4},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:58.4,y:-32.8},0).wait(24));

	// R-3
	this.instance_6 = new lib.R3();
	this.instance_6.setTransform(7,-3,1,1,0,0,0,-63,25.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:0,regY:0,rotation:3.3,x:71.4,y:-25.3},0).wait(1).to({rotation:6.7,x:72.6,y:-21.5},0).wait(1).to({rotation:10,x:73.5,y:-17.6},0).wait(1).to({rotation:13.3,x:74.3,y:-13.8},0).wait(1).to({rotation:16.6,x:74.8,y:-9.8},0).wait(1).to({rotation:20,x:75.1,y:-5.9},0).wait(1).to({rotation:23.3,y:-1.9},0).wait(1).to({rotation:4.2,x:71.7,y:-24.2},0).wait(1).to({rotation:-14.8,x:61.3,y:-44.2},0).wait(1).to({rotation:-6.7,x:66.5,y:-36.1},0).wait(1).to({rotation:1.4,x:70.6,y:-27.4},0).wait(1).to({rotation:9.5,x:73.4,y:-18.3},0).wait(1).to({rotation:17.5,x:74.9,y:-8.8},0).wait(1).to({rotation:20.4,x:75.1,y:-5.3},0).wait(1).to({rotation:23.3,y:-1.9},0).wait(2).to({regX:-62.8,regY:25.2,scaleX:1,scaleY:1,rotation:16.5,x:7,y:-3},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:20,x:74.6,y:-5.3},0).wait(1).to({rotation:23.3,y:-1.4},0).wait(1).to({rotation:4.2,x:71.4,y:-23.5},0).wait(1).to({rotation:-14.8,x:61.2,y:-43.4},0).wait(1).to({rotation:-6.7,x:66.4,y:-35.4},0).wait(1).to({rotation:1.4,x:70.3,y:-26.7},0).wait(1).to({rotation:9.5,x:73,y:-17.6},0).wait(1).to({rotation:17.5,x:74.4,y:-8.1},0).wait(1).to({rotation:20.4,x:74.6,y:-4.8},0).wait(1).to({rotation:23.3,y:-1.4},0).wait(1).to({regX:-62.8,regY:25.2,scaleX:1,scaleY:1,rotation:16.5,x:7,y:-3},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:20,x:74.6,y:-5.3},0).wait(1).to({rotation:23.3,y:-1.4},0).wait(1).to({rotation:4.2,x:71.4,y:-23.5},0).wait(1).to({rotation:-14.8,x:61.2,y:-43.4},0).wait(1).to({rotation:-6.7,x:66.4,y:-35.4},0).wait(1).to({rotation:1.4,x:70.3,y:-26.7},0).wait(1).to({rotation:9.5,x:73,y:-17.6},0).wait(1).to({rotation:17.5,x:74.4,y:-8.1},0).wait(1).to({rotation:20.4,x:74.6,y:-4.8},0).wait(1).to({rotation:23.3,y:-1.4},0).wait(1).to({regX:-62.6,regY:26.2,scaleX:1,scaleY:1,x:6.9,y:-3},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:74.8,y:-2.4},0).wait(24));

	// R-4
	this.instance_7 = new lib.R4();
	this.instance_7.setTransform(10.1,-4,1,1,9.2,0,0,-59.7,-17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:0,regY:0,rotation:10.1,x:65.7,y:23.7},0).wait(1).to({rotation:10.9,x:65.3,y:24.5},0).wait(1).to({rotation:11.7,x:64.9,y:25.3},0).wait(1).to({rotation:12.5,x:64.5,y:26.1},0).wait(1).to({rotation:13.3,x:64,y:26.8},0).wait(1).to({rotation:14.2,x:63.6,y:27.6},0).wait(1).to({rotation:15,x:63.1,y:28.4},0).wait(1).to({rotation:15.8,x:62.7,y:29.1},0).wait(9).to({regX:-59.3,regY:-17.7,scaleX:1,scaleY:1,rotation:13.3,x:10,y:-4},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:14.2,x:63.2,y:27.6},0).wait(1).to({rotation:15,x:62.7,y:28.3},0).wait(1).to({rotation:15.8,x:62.2,y:29.1},0).wait(8).to({regX:-59.3,regY:-17.7,scaleX:1,scaleY:1,rotation:13.3,x:10,y:-4},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:14.2,x:63.2,y:27.6},0).wait(1).to({rotation:15,x:62.7,y:28.3},0).wait(1).to({rotation:15.8,x:62.2,y:29.1},0).wait(8).to({regX:-59.5,regY:-17.1,scaleX:1,scaleY:1,x:10,y:-4.1},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:62.6,y:28.5},0).wait(24));

	// R-1
	this.instance_8 = new lib.R1();
	this.instance_8.setTransform(2,-10,1,1,-5.3,0,0,-14.6,53.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:0,regY:0,rotation:-3.9,x:12.9,y:-64.7},0).wait(1).to({rotation:-2.6,x:14.2,y:-64.4},0).wait(1).to({rotation:-1.2,x:15.4,y:-64.1},0).wait(1).to({rotation:-2.8,x:14,y:-64.4},0).wait(1).to({rotation:-4.3,x:12.5,y:-64.7},0).wait(1).to({rotation:-5.8,x:11.1,y:-65},0).wait(1).to({rotation:-7.3,x:9.6,y:-65.2},0).wait(1).to({rotation:-2.7,x:14.1,y:-64.4},0).wait(1).to({rotation:2,x:18.5,y:-63.3},0).wait(1).to({rotation:1.2,x:17.7,y:-63.5},0).wait(1).to({rotation:0.4,x:17,y:-63.7},0).wait(1).to({rotation:-0.4,x:16.2,y:-63.9},0).wait(1).to({rotation:-1.2,x:15.4,y:-64.1},0).wait(4).to({regX:-14.5,regY:53.6,rotation:-4.3,x:2.1,y:-10},0).wait(1).to({regX:0,regY:0,rotation:-5.8,x:11,y:-64.8},0).wait(1).to({rotation:-7.3,x:9.5,y:-65},0).wait(1).to({rotation:-2.7,x:14,y:-64.3},0).wait(1).to({rotation:2,x:18.4,y:-63.1},0).wait(1).to({rotation:1.2,x:17.6,y:-63.3},0).wait(1).to({rotation:0.4,x:16.9,y:-63.5},0).wait(1).to({rotation:-0.4,x:16.1,y:-63.7},0).wait(1).to({rotation:-1.2,x:15.4,y:-63.9},0).wait(3).to({regX:-14.5,regY:53.6,rotation:-4.3,x:2.1,y:-10},0).wait(1).to({regX:0,regY:0,rotation:-5.8,x:11,y:-64.8},0).wait(1).to({rotation:-7.3,x:9.5,y:-65},0).wait(1).to({rotation:-2.7,x:14,y:-64.3},0).wait(1).to({rotation:2,x:18.4,y:-63.1},0).wait(1).to({rotation:1.2,x:17.6,y:-63.3},0).wait(1).to({rotation:0.4,x:16.9,y:-63.5},0).wait(1).to({rotation:-0.4,x:16.1,y:-63.7},0).wait(1).to({rotation:-1.2,x:15.4,y:-63.9},0).wait(3).to({regX:-14.1,regY:54.2,rotation:-1.1,x:2,y:-10},0).wait(1).to({regX:0,regY:0,rotation:-1.2,x:14.9,y:-64.5},0).wait(24));

	// Layer 19
	this.instance_9 = new lib.WaterDip();
	this.instance_9.setTransform(2,4.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(64));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.4,-121.5,263.4,250.8);


// stage content:
(lib.FWW_TilesAll_v01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Fishing Spider
	this.instance = new lib.FishingSpider("synched",0);
	this.instance.setTransform(1274.1,-187.4,1.248,1.248,-143.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:2.5,regY:4.5,scaleX:1.25,scaleY:1.25,rotation:-142.4,x:1265.5,y:-164.9,startPosition:1},0).wait(1).to({rotation:-141.1,x:1256.1,y:-136,startPosition:2},0).wait(1).to({rotation:-139.8,x:1246.7,y:-107.1,startPosition:3},0).wait(1).to({rotation:-138.4,x:1237.2,y:-78.2,startPosition:4},0).wait(1).to({rotation:-137.1,x:1227.8,y:-49.4,startPosition:5},0).wait(1).to({rotation:-135.8,x:1218.4,y:-20.5,startPosition:6},0).wait(1).to({rotation:-134.5,x:1209,y:8.4,startPosition:7},0).wait(1).to({rotation:-133.2,x:1199.5,y:37.3,startPosition:8},0).wait(1).to({rotation:-131.9,x:1190.1,y:66.2,startPosition:9},0).wait(1).to({rotation:-130.6,x:1180.7,y:95.1,startPosition:10},0).wait(1).to({rotation:-130.1,x:1178.7,y:101.5,startPosition:11},0).wait(1).to({rotation:-129.6,x:1176.8,y:107.8,startPosition:12},0).wait(1).to({rotation:-129,x:1174.8,y:114.2,startPosition:13},0).wait(1).to({rotation:-128.5,x:1172.8,y:120.6,startPosition:14},0).wait(1).to({rotation:-128,x:1170.9,y:127,startPosition:15},0).wait(1).to({rotation:-127.5,x:1168.9,y:133.3,startPosition:16},0).wait(1).to({rotation:-126.9,x:1156.4,y:152.3,startPosition:17},0).wait(1).to({rotation:-126.4,x:1144,y:171.3,startPosition:18},0).wait(1).to({rotation:-125.9,x:1131.4,y:190.2,startPosition:19},0).wait(1).to({rotation:-125.4,x:1119,y:209.2,startPosition:20},0).wait(1).to({rotation:-124.8,x:1106.4,y:228.2,startPosition:21},0).wait(1).to({rotation:-124.3,x:1094,y:247.1,startPosition:22},0).wait(1).to({rotation:-123.8,x:1081.5,y:266,startPosition:23},0).wait(1).to({rotation:-123.3,x:1069,y:285,startPosition:24},0).wait(1).to({rotation:-122.7,x:1056.5,y:304,startPosition:25},0).wait(1).to({rotation:-122.2,x:1044,y:322.9,startPosition:26},0).wait(1).to({rotation:-121.7,x:1031.5,y:341.9,startPosition:27},0).wait(1).to({rotation:-121.2,x:1027.2,y:352,startPosition:28},0).wait(1).to({rotation:-120.6,x:1022.8,y:362.1,startPosition:29},0).wait(1).to({rotation:-120.1,x:1018.5,y:372.1,startPosition:30},0).wait(1).to({rotation:-119.6,x:1014.1,y:382.2,startPosition:31},0).wait(1).to({rotation:-119,x:984.9,y:413.1,startPosition:32},0).wait(1).to({rotation:-118.5,x:955.7,y:444.1,startPosition:33},0).wait(1).to({rotation:-117.9,x:926.4,y:475.1,startPosition:34},0).wait(1).to({rotation:-117.4,x:897.2,y:506.1,startPosition:35},0).wait(1).to({rotation:-116.8,x:868,y:537.1,startPosition:36},0).wait(1).to({rotation:-116.3,x:838.8,y:568.1,startPosition:37},0).wait(1).to({rotation:-115.2,x:836.2,y:572.1,startPosition:38},0).wait(1).to({rotation:-114.1,x:833.6,y:576.2,startPosition:39},0).wait(1).to({rotation:-113,x:831,y:580.3,startPosition:40},0).wait(1).to({rotation:-111.9,x:828.4,y:584.4,startPosition:41},0).wait(1).to({rotation:-110.8,x:825.8,y:588.5,startPosition:42},0).wait(1).to({rotation:-109.7,x:823.2,y:592.5,startPosition:43},0).wait(1).to({rotation:-108.6,x:820.6,y:596.6,startPosition:44},0).wait(1).to({rotation:-107.5,x:818,y:600.6,startPosition:45},0).wait(1).to({rotation:-106.4,x:815.4,y:604.7,startPosition:46},0).wait(1).to({rotation:-105.4,x:812.7,y:608.8,startPosition:47},0).wait(1).to({rotation:-104.3,x:810.2,y:612.9,startPosition:48},0).wait(1).to({rotation:-103.2,x:807.6,y:617,startPosition:49},0).wait(1).to({rotation:-102.1,x:804.9,y:621.1,startPosition:50},0).wait(1).to({rotation:-101,x:802.3,y:625.2,startPosition:51},0).wait(1).to({rotation:-99.9,x:799.7,y:629.3,startPosition:52},0).wait(1).to({rotation:-98.8,x:797,y:633.4,startPosition:53},0).wait(1).to({rotation:-97.7,x:794.5,y:637.5,startPosition:54},0).wait(1).to({rotation:-96.6,x:791.9,y:641.6,startPosition:55},0).wait(1).to({rotation:-95.5,x:789.2,y:645.7,startPosition:56},0).wait(1).to({rotation:-94.4,x:786.6,y:649.8,startPosition:57},0).wait(1).to({rotation:-93.3,x:783.9,y:653.8,startPosition:58},0).wait(1).to({rotation:-92.2,x:781.3,y:658,startPosition:59},0).wait(1).to({rotation:-91.1,x:778.7,y:662.1,startPosition:60},0).wait(1).to({rotation:-90,x:776,y:666.2,startPosition:61},0).wait(1).to({rotation:-88.9,x:773.4,y:670.3,startPosition:62},0).wait(1).to({rotation:-87.8,x:770.7,y:674.4,startPosition:63},0).wait(1).to({rotation:-86.7,x:768.2,y:678.5,startPosition:0},0).wait(1).to({rotation:-89.7,x:753.6,y:686.4,startPosition:1},0).wait(1).to({rotation:-92.6,x:739.1,y:694.4,startPosition:2},0).wait(1).to({rotation:-95.5,x:724.7,y:702.3,startPosition:3},0).wait(1).to({rotation:-98.5,x:710.1,y:710.2,startPosition:4},0).wait(1).to({rotation:-101.4,x:695.6,y:718.2,startPosition:5},0).wait(1).to({rotation:-104.3,x:676.4,y:749.1,startPosition:6},0).wait(1).to({rotation:-107.2,x:657.1,y:780.1,startPosition:7},0).wait(1).to({rotation:-110.2,x:637.9,y:811.1,startPosition:8},0).wait(1).to({rotation:-113.1,x:618.6,y:842.1,startPosition:9},0).wait(1).to({rotation:-116,x:599.4,y:873.1,startPosition:10},0).wait(1).to({rotation:-118.9,x:580.1,y:904.1,startPosition:11},0).wait(1).to({rotation:-121.9,x:560.8,y:935.1,startPosition:12},0).wait(1).to({rotation:-124.8,x:541.5,y:966.2,startPosition:13},0).wait(1).to({rotation:-127.7,x:522.2,y:997.2,startPosition:14},0).wait(1).to({rotation:-130.6,x:502.9,y:1028.4,startPosition:15},0).wait(1).to({rotation:-133.6,x:483.6,y:1059.4,startPosition:16},0).wait(1).to({rotation:-136.5,x:464.3,y:1090.5,startPosition:17},0).wait(1).to({rotation:-139.4,x:445,y:1121.6,startPosition:18},0).wait(1).to({x:441.2,y:1131.9,startPosition:19},0).wait(1).to({x:437.5,y:1142.1,startPosition:20},0).wait(1).to({x:433.8,y:1152.4,startPosition:21},0).wait(1).to({x:430.1,y:1162.6,startPosition:22},0).wait(1).to({x:426.4,y:1172.9,startPosition:23},0).wait(1).to({x:422.7,y:1183.1,startPosition:24},0).wait(1).to({x:419,y:1193.4,startPosition:25},0).wait(1).to({x:415.3,y:1203.6,startPosition:26},0).wait(1).to({x:411.6,y:1213.9,startPosition:27},0).wait(1).to({x:407.9,y:1224.1,startPosition:28},0).wait(1).to({x:404.2,y:1234.4,startPosition:29},0).wait(1).to({x:400.5,y:1244.6,startPosition:30},0).wait(1).to({x:396.8,y:1254.9,startPosition:31},0).wait(1).to({x:393.1,y:1265.1,startPosition:32},0).wait(1).to({x:389.4,y:1275.4,startPosition:33},0).wait(1).to({x:385.7,y:1285.6,startPosition:34},0).wait(1).to({x:382,y:1295.9,startPosition:35},0).wait(1).to({x:378.3,y:1306.1,startPosition:36},0).wait(1).to({x:374.6,y:1316.4,startPosition:37},0).wait(1).to({x:370.9,y:1326.6,startPosition:38},0).wait(1).to({x:367.2,y:1336.9,startPosition:39},0).wait(1).to({x:363.5,y:1347.1,startPosition:40},0).wait(1).to({x:359.8,y:1357.4,startPosition:41},0).wait(1).to({x:356.1,y:1367.6,startPosition:42},0).wait(1).to({x:352.4,y:1377.9,startPosition:43},0).wait(1).to({x:348.7,y:1388.1,startPosition:44},0).wait(1).to({x:345,y:1398.3,startPosition:45},0).to({_off:true},1).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2060.6,209.8,345.9,291.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;