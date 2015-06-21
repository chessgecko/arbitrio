(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1000,
	height: 800,
	fps: 45,
	color: "#444560",
	manifest: []
};



// symbols:



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["saveMe_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["saveMe_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.minus_simbol = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("-", "35px 'Arial'", "#242432");
	this.text.lineHeight = 37;
	this.text.lineWidth = 21;
	this.text.setTransform(4.5,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4.5,0,25,43.1);


(lib.lightPurpPane = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#686892").s().p("AkIEJIAAoRIIRAAIAAIRg");
	this.shape.setTransform(26.5,26.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,53,53);


(lib.green_square = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B7E36").s().p("AksEoIAApPIJZAAIAAJPg");
	this.shape.setTransform(30.2,29.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60.4,59.4);


(lib.arrow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A1A29").ss(3,1,1).p("AhkhJIBqCTIBfiTg");
	this.shape.setTransform(10.1,7.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1A1A29").s().p("AhkhJIDJAAIhfCSg");
	this.shape_1.setTransform(10.1,7.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,23.3,17.8);


(lib.transition = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
		this.parent.makeChild(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(23).call(this.frame_23).wait(25));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AjECJIAAkRIGJAAIAAERg");
	var mask_graphics_1 = new cjs.Graphics().p("AjECcIAAk3IGJAAIAAE3g");
	var mask_graphics_2 = new cjs.Graphics().p("AjECcIAAk3IGJAAIAAE3g");
	var mask_graphics_3 = new cjs.Graphics().p("AhCGSIgCgpIAAgFQgMAGgPAAQgMAAgugrIgGAAQgfAAgOgZQgHgOAAgQIAAgCIgGgGQAAghAdgNIANgFIAAqFIGJAAIAAKeIhAAAIgHALQgkAzgVARQgHAFgKAXIgVAtQgfA7gkABQgpAAgKgog");
	var mask_graphics_4 = new cjs.Graphics().p("Ag/HNQgQAEgQAAQgkAAgMgdIgFgeQAAgcA/guIgKABQgMAAgugrIgGAAQgfAAgOgZQgHgOAAgQIAAgDIgGgFQAAghAdgNIANgFIAAqGIGJAAIAAKfIg8AAQAAAJgHAJQACAGAAAHQAAATgPAWQgOAUgVAFIAAAGQgCAYgUALQgFADgHAHQgFAZgJAZQgcBIg6AAQgTAAgNgKg");
	var mask_graphics_5 = new cjs.Graphics().p("Ag/HNQgQAEgQAAQgkAAgMgdIgFgeQAAgcA/guIgKABQgMAAgugrIgGAAQgfAAgOgZQgHgOAAgQIAAgDIgGgFQAAghAdgNIANgFIAAqGIGJAAIAAKfIg8AAQAAAJgHAJQACAGAAAHQAAAIgCAIQANAkAAA3IAABEQgJA6gtAAQgsAAgJg9IAAgLIgCAGQgcBIg6AAQgTAAgNgKg");
	var mask_graphics_6 = new cjs.Graphics().p("Ag/HNQgQAEgQAAQgkAAgMgdIgFgeQAAgcA/guIgKABQgMAAgugrIgGAAQgfAAgOgZQgHgOAAgQIAAgDIgGgFQAAghAdgNIANgFIAAqGIGJAAIAAKfIg8AAQAAAJgHAJQACAGAAAHQAAAIgCAIQANAkAAA3IAABEQgJA6gtAAQgsAAgJg9IAAgLIgCAGQgcBIg6AAQgTAAgNgKg");
	var mask_graphics_7 = new cjs.Graphics().p("Ag/HNQgQAEgQAAQgkAAgMgdIgFgeQAAgcA/guIgKABQgMAAgugrIgGAAQgfAAgOgZQgHgOAAgQIAAgDIgGgFQAAghAdgNIANgFIAAqGIGJAAIAAKfIg8AAQAAAJgHAJQACAGAAAHQAAAIgCAIQANAkAAA3IAABEQgJA6gtAAQgsAAgJg9IAAgLIgCAGQgcBIg6AAQgTAAgNgKg");
	var mask_graphics_8 = new cjs.Graphics().p("Ag/HNQgQAEgQAAQgkAAgMgdIgFgeQAAgcA/guIgKABQgMAAgugrIgGAAQgfAAgOgZQgHgOAAgQIAAgDIgGgFQAAghAdgNIANgFIAAqGIGJAAIAAKfIg8AAQAAAJgHAJQACAGAAAHQAAAIgCAIQANAkAAA3IAABEQgJA6gtAAQgQAAgLgHQgfAHgqAAIgKgBQgNAHgSAAQgTAAgNgKg");
	var mask_graphics_9 = new cjs.Graphics().p("AA8HwQgIgOAAgOQAAgEAMg4QgeAHgmAAIgKgBQgPAGgRABQgUAAgMgKQgQAEgQAAQgkAAgMgdIgFgeQAAgcA+guIgJABQgMAAgvgsIgFABQggAAgNgaQgIgNAAgQIAAgDIgFgFQAAgiAcgMIAOgFIAAqGIGIAAIAAJgQAfAUAAAnQAAAxglCSQgtCzguAAQgfAAgOgZg");
	var mask_graphics_10 = new cjs.Graphics().p("AAfHwQgIgOAAgOQAAgEALg4QgeAHglAAIgKgBQgPAGgSABQgTAAgNgKQgQAEgQAAQgkAAgMgdIgFgeQAAgcA/guIgKABQgMAAgugsIgGABQgfAAgOgaQgHgNAAgQIAAgDIgGgFQAAgiAdgMIANgFIAAqGIGJAAIAAJgQAfAUAAAnIgBARQAWAVAPAeQAXAsAAAtQAAAsgOAyQgWBQgtAAQgjAAgMgdIgBgCQgdBKgdAAQggAAgNgZg");
	var mask_graphics_11 = new cjs.Graphics().p("AglHwQgHgOAAgOQgBgEAMg4QgeAHgoAAIgKgBQgOAGgSABQgUAAgMgKQgQAEgQAAQgkAAgMgdIgFgeQAAgcA+guIgJABQgMAAgugsIgGABQggAAgNgaQgIgNAAgQIAAgDIgFgFQAAgiAdgMIANgFIAAqGIGIAAIAAJgQAVAOAHAVQAdADAnASQA0AYAnAlQAqAnAAAfQAAAngZAfQgnAwhXABIgBAEQgWBQgtAAQgjAAgMgdIgBgCQgdBKgeAAQgdAAgOgZgADAEXIAIABIACgDIgMgHIACAJg");
	var mask_graphics_12 = new cjs.Graphics().p("AkmHwQgIgOAAgOQAAgEAMg4QgeAHgoAAIgKgBQgPAGgRABQgUAAgNgKQgPAEgQAAQgkAAgMgdIgFgeQAAgcA+guIgJABQgNAAgugsIgFABQggAAgNgaQgIgNAAgQIAAgDIgFgFQAAgiAcgMIAOgFIAAqGIGKAAIAAJgQAVAOAHAVQAdADAnASQARAIARAKQA3AFB0AYIAWgEICIgCQAKgHACgHQAIgEAsAAQAHgPASgJQAbgOAmADQAmAEAaATQAdAXAAAjIAAAMQAUACAPAHQgDASAAAUIAAAXQgMAFgKAIQgVARAAAVIAAABIgOACQgGAcgOAjQgkBdg/AAQgkAAgMgdQgFgLAAgVQAAgWANgTIAcgfQAJgKAGgLQg2gChTgMIhfgQIh0gBQgGANgJAMQgoAwhUABIgBAEQgWBQgtAAQgjAAgMgdIgBgCQgeBKgdAAQgfAAgOgZg");
	var mask_graphics_13 = new cjs.Graphics().p("ApPHwQgIgOAAgOQAAgEALg4QgdAHgoAAIgKgBQgPAGgRABQgUAAgNgKQgPAEgQAAQglAAgMgdIgEgeQAAgcA+guIgJABQgNAAgugsIgFABQggAAgNgaQgIgNAAgQIAAgDIgGgFQABgiAcgMIAOgFIAAqGIGKAAIAAJgQAVAOAHAVQAdADAmASQASAIAQAKQA6AFBzAYIAXgEICGgCQAKgHABgHQAJgEAsAAQAHgPASgJQAbgOAlADQAnAEAaATQAdAXAAAjIgBAMQANABAKAEIGJAAQgFgSAAgMQABgzAfgMQAdgKApAWQApAWAdApQAIAMAGAMQAhAOAAAhQAAARgKANQgGAHgKAGQgMASgcAdQg2A0gjAAQgkAAgLgdIgGgdQAAgMANgUIm8AAQgBAFAAAGIAAABIgOACQgGAcgOAjQgkBdg/AAQglAAgLgdQgFgLAAgVQAAgWANgTIAcgfQAJgKAGgLQg2gChRgMIhfgQIh0gBQgGANgKAMQgnAwhWABIgCAEQgVBQgtAAQgkAAgLgdIgCgCQgdBKgdAAQggAAgNgZg");
	var mask_graphics_14 = new cjs.Graphics().p("AqcHwQgIgOAAgOQAAgEALg4QgeAHgnAAIgKgBQgPAGgSABQgTAAgNgKQgQAEgQAAQgkAAgMgdIgFgeQAAgcA/guIgKABQgMAAgugsIgGABQgfAAgOgaQgHgNAAgQIAAgDIgGgFQAAgiAdgMIANgFIAAqGIGLAAIAAJgQAUAOAHAVQAeADAmASQASAIAQAKQA5AFB0AYIAWgEICIgCQAKgHACgHQAJgEAsAAQAFgPASgJQAbgOAlADQAnAEAaATQAdAXAAAjIgBAMQAMABALAEIGJAAQgFgSAAgMQAAgzAggMQAcgKAqAWQAcAPAXAZQAIgQAMgKQAdgYAuAPQAqAOAiAkQAJAKAHAJQAiAKAAAnQAAAOgVATQgHAYgSAcQgoBAhFAAQgwAAgUgvQg1AzgiAAQgkAAgMgdIgFgdQAAgMANgUIm8AAQgBAFAAAGIAAABIgPACQgFAcgOAjQgkBdg/AAQgkAAgKgdQgFgLAAgVQAAgWANgTIAZgfQAJgKAHgLQg0gChTgMIhfgQIh0gBQgGANgKAMQgnAwhXABIgBAEQgWBQgtAAQgjAAgMgdIgBgCQgdBKgdAAQggAAgNgZg");
	var mask_graphics_15 = new cjs.Graphics().p("ArfHwQgHgOAAgOQgBgEAMg4QgeAHgoAAIgKgBQgOAGgSABQgUAAgMgKQgQAEgQAAQgkAAgMgdIgFgeQAAgcA+guIgJABQgMAAgugsIgGABQggAAgNgaQgIgNAAgQIAAgDIgFgFQAAgiAdgMIANgFIAAqGIGKAAIAAJgQAVAOAHAVQAdADAnASQASAIAQAKQA5AFB0AYIAWgEICIgCQAKgHACgHQAIgEAtAAQAHgPARgJQAbgOAkADQAnAEAaATQAdAXAAAjIgBAMQAMABAKAEIGKAAQgFgSAAgMQAAgzAfgMQAdgKAqAWQAcAPAXAZQAIgQAMgKQAYgUAlAIQAogHBIATQA8APAyAaQAyAaAAAPQAAAQgLAIQgGAFgXAGIgNAFQgJAMgOAOQgdAfgdAKQgOAVgMAPQgfAmgmgBQgUAAgNgHQgMADgNAAQgxAAgUgvQg0AzgiAAQgkAAgMgdIgFgdQAAgMANgUIm8AAQgBAFAAAGIAAABIgPACQgGAcgNAjQgkBdg9AAQglAAgLgdQgGgLAAgVQAAgWANgTIAcgfQAJgKAGgLQg1gChUgMIhfgQIh0gBQgGANgJAMQgnAwhXABIgBAEQgWBQgtAAQgjAAgMgdIgBgCQgdBKgeAAQgfAAgOgZg");
	var mask_graphics_16 = new cjs.Graphics().p("Ar/HwQgIgOAAgOQAAgEALg4QgdAHgoAAIgKgBQgPAGgRABQgUAAgNgKQgPAEgQAAQglAAgMgdIgEgeQAAgcA+guIgJABQgNAAgugsIgFABQggAAgNgaQgIgNAAgQIAAgDIgGgFQABgiAcgMIAOgFIAAqGIGKAAIAAJgQAVAOAHAVQAdADAmASQASAIAQAKQA6AFBzAYIAXgEICIgCQAKgHABgHQAJgEAsAAQAHgPASgJQAbgOAlADQAlAEAaATQAdAXAAAjIgBAMQANABAKAEIGJAAQgFgSAAgMQABgzAfgMQAdgKApAWQAcAPAXAZQAIgQAMgKQAZgUAlAIQAngHBJATQAqALAlAQQA6gnAlgGQAzgHgBA7QAAAOh8BoQh9BqgRAAIgBAAQgNAEgNAAQgUAAgNgHQgMADgOAAQgwAAgUgvQg0AzgjAAQgkAAgLgdIgGgdQAAgMANgUIm8AAQgBAFAAAGIAAABIgOACQgGAcgOAjQgkBdg9AAQglAAgLgdQgFgLAAgVQAAgWANgTIAbgfQAKgKAGgLQg2gChTgMIhfgQIh0gBQgGANgKAMQgnAwhWABIgCAEQgVBQgtAAQgkAAgLgdIgCgCQgdBKgdAAQggAAgNgZg");
	var mask_graphics_17 = new cjs.Graphics().p("Ar/HwQgIgOAAgOQAAgEALg4QgdAHgoAAIgKgBQgPAGgRABQgUAAgNgKQgPAEgQAAQglAAgMgdIgEgeQAAgcA+guIgJABQgNAAgugsIgFABQggAAgNgaQgIgNAAgQIAAgDIgGgFQABgiAcgMIAOgFIAAqGIGKAAIAAJgQAVAOAHAVQAdADAmASQASAIAQAKQA6AFBzAYIAXgEICIgCQAKgHABgHQAJgEAsAAQAHgPASgJQAbgOAlADQAlAEAaATQAdAXAAAjIgBAMQANABAKAEIGJAAQgFgSAAgMQABgzAfgMQAdgKApAWQAcAPAXAZQAIgQAMgKQAZgUAlAIQAngHBJATQAqALAlAQQA6gnAlgGQAzgHgBA7QABADgHAIIABAQQAAAQh3BlQh4BlgWAAQgfAAgQgTQgHgBgGgEQgMADgOAAQgwAAgUgvQg0AzgjAAQgkAAgLgdIgGgdQAAgMANgUIm8AAQgBAFAAAGIAAABIgOACQgGAcgOAjQgkBdg9AAQglAAgLgdQgFgLAAgVQAAgWANgTIAbgfQAKgKAGgLQg2gChTgMIhfgQIh0gBQgGANgKAMQgnAwhWABIgCAEQgVBQgtAAQgkAAgLgdIgCgCQgdBKgdAAQggAAgNgZg");
	var mask_graphics_18 = new cjs.Graphics().p("Ar/HwQgIgOAAgOQAAgEALg4QgdAHgoAAIgKgBQgPAGgRABQgUAAgNgKQgPAEgQAAQglAAgMgdIgEgeQAAgcA+guIgJABQgNAAgugsIgFABQggAAgNgaQgIgNAAgQIAAgDIgGgFQABgiAcgMIAOgFIAAqGIGKAAIAAJgQAVAOAHAVQAdADAmASQASAIAQAKQA6AFBzAYIAXgEICIgCQAKgHABgHQAJgEAsAAQAHgPASgJQAbgOAlADQAlAEAaATQAdAXAAAjIgBAMQANABAKAEIGJAAQgFgSAAgMQABgzAfgMQAdgKApAWQAcAPAXAZQAIgQAMgKQAZgUAlAIQAngHBJATQAqALAlAQQA6gnAlgGQAzgHgBA7QABADgHAIIABAQQAAAQh3BlQh4BlgWAAQgfAAgQgTQgHgBgGgEQgMADgOAAQgwAAgUgvQg0AzgjAAQgkAAgLgdIgGgdQAAgMANgUIm8AAQgBAFAAAGIAAABIgOACQgGAcgOAjQgkBdg9AAQglAAgLgdQgFgLAAgVQAAgWANgTIAbgfQAKgKAGgLQg2gChTgMIhfgQIh0gBQgGANgKAMQgnAwhWABIgCAEQgVBQgtAAQgkAAgLgdIgCgCQgdBKgdAAQggAAgNgZg");
	var mask_graphics_19 = new cjs.Graphics().p("Ar/HwQgIgOAAgOQAAgEALg4QgdAHgoAAIgKgBQgPAGgRABQgUAAgNgKQgPAEgQAAQglAAgMgdIgEgeQAAgcA+guIgJABQgNAAgugsIgFABQggAAgNgaQgIgNAAgQIAAgDIgGgFQABgiAcgMIAOgFIAAqGIGKAAIAAJgQAVAOAHAVQAdADAmASQASAIAQAKQA6AFBzAYIAXgEICIgCQAKgHABgHQAJgEAsAAQAHgPASgJQAbgOAlADQAlAEAaATQAdAXAAAjIgBAMQANABAKAEIGJAAQgFgSAAgMQABgzAfgMQAdgKApAWQAcAPAXAZQAIgQAMgKQAZgUAlAIQAngHBJATQAqALAlAQQA6gnAlgGQAzgHgBA7QABADgHAIIABAQQAAAQh3BlQh4BlgWAAQgfAAgQgTQgHgBgGgEQgMADgOAAQgwAAgUgvQg0AzgjAAQgkAAgLgdIgGgdQAAgMANgUIm8AAQgBAFAAAGIAAABIgOACQgGAcgOAjQgkBdg9AAQglAAgLgdQgFgLAAgVQAAgWANgTIAbgfQAKgKAGgLQg2gChTgMIhfgQIh0gBQgGANgKAMQgnAwhWABIgCAEQgVBQgtAAQgkAAgLgdIgCgCQgdBKgdAAQggAAgNgZg");
	var mask_graphics_20 = new cjs.Graphics().p("AsKHwQgHgOAAgOQgBgEAMg4QgeAHgoAAIgKgBQgOAGgSABQgUAAgMgKQgQAEgQAAQgkAAgMgdIgFgeQAAgcA+guIgJABQgMAAgugsIgGABQggAAgNgaQgIgNAAgQIAAgDIgFgFQAAgiAdgMIANgFIAAqGIGKAAIAAJgQAVAOAHAVQAdADAnASQASAIAQAKQA5AFB0AYIAWgEICIgCQAKgHACgHQAIgEAtAAQAHgPARgJQAbgOAmADQAlAEAaATQAdAXAAAjIgBAMQAMABAKAEIGKAAQgFgSAAgMQAAgzAfgMQAdgKAqAWQAcAPAXAZQAIgQAMgKQAYgUAlAIQAogHBIATQArALAlAQQA5gnAlgGQAzgHAAA7QAAADgHAIIABAQQABAFgMANQAJAJAIANQAVAjAAAqQAAAgghArQgtA6hFAAQgkAAg2g8QgnAcgMAAQgfAAgPgTQgIgBgGgEQgMADgNAAQgxAAgUgvQg0AzgiAAQgkAAgMgdIgFgdQAAgMANgUIm8AAQgBAFAAAGIAAABIgPACQgGAcgNAjQgiBdg/AAQglAAgLgdQgGgLAAgVQAAgWANgTIAcgfQAJgKAGgLQg1gChUgMIhfgQIh0gBQgGANgJAMQgnAwhXABIgBAEQgWBQgtAAQgjAAgMgdIgBgCQgdBKgeAAQgfAAgOgZg");
	var mask_graphics_21 = new cjs.Graphics().p("AsKHwQgHgOAAgOQgBgEAMg4QgeAHgoAAIgKgBQgOAGgSABQgUAAgMgKQgQAEgQAAQgkAAgMgdIgFgeQAAgcA+guIgJABQgMAAgugsIgGABQggAAgNgaQgIgNAAgQIAAgDIgFgFQAAgiAdgMIANgFIAAqGIGKAAIAAJgQAVAOAHAVQAdADAnASQASAIAQAKQA5AFB0AYIAWgEICIgCQAKgHACgHQAIgEAtAAQAHgPARgJQAbgOAmADQAlAEAaATQAdAXAAAjIgBAMQAMABAKAEIGKAAQgFgSAAgMQAAgzAfgMQAdgKAqAWQAcAPAXAZQAIgQAMgKQAYgUAlAIQAogHBIATQArALAlAQQA5gnAlgGQAzgHAAA7QAAADgHAIIABAQQABAFgMANQAJAJAIANQAVAjAAAqQAAAgghArQgcAjgkAOQgNANgYAAQgKAAgMgFQghgHgwg0QgnAcgMAAQgfAAgPgTQgIgBgGgEQgMADgNAAQgxAAgUgvQg0AzgiAAQgkAAgMgdIgFgdQAAgMANgUIm8AAQgBAFAAAGIAAABIgPACQgGAcgNAjQgiBdg/AAQglAAgLgdQgGgLAAgVQAAgWANgTIAcgfQAJgKAGgLQg1gChUgMIhfgQIh0gBQgGANgJAMQgnAwhXABIgBAEQgWBQgtAAQgjAAgMgdIgBgCQgdBKgeAAQgfAAgOgZg");
	var mask_graphics_22 = new cjs.Graphics().p("ANCHyIgnhjQAAgWAGgPQgLAGgFAAQgfAAgPgTQgIgCgGgDQgMACgNAAQgxAAgUguQg0AzgiAAQgkAAgMgdIgFgdQAAgMANgUIm8AAQgBAFAAAFIAAACIgPABQgGAdgNAjQgiBdg/AAQglAAgLgdQgGgLAAgVQAAgWANgTIAcgfQAJgKAGgLQg1gChUgMIhfgQIh0gBQgGANgJAMQgnAwhXAAIgBAFQgWBQgtAAQgjAAgMgdIgBgCQgdBKgeAAQgfAAgOgZQgHgOAAgOQgBgEAMg4QgeAHgoAAIgKgBQgOAGgSAAQgUAAgMgJQgQAEgQAAQgkAAgMgdIgFgeQAAgcA+guIgJAAQgMAAgugrIgGAAQggAAgNgZQgIgOAAgQIAAgCIgFgGQAAghAdgNIANgEIAAqGIGKAAIAAJgQAVAOAHAVQAdADAnASQASAIAQAKQA5AFB0AYIAWgFICIgCQAKgGACgHQAIgEAtgBQAHgOARgKQAbgOAmAEQAlADAaAUQAdAXAAAjIgBAMQAMABAKADIGKAAQgFgRAAgMQAAgzAfgMQAdgLAqAXQAcAPAXAZQAIgQAMgKQAYgUAlAIQAogHBIATQArALAlAQQA5gnAlgGQAzgHAAA7QAAADgHAIIABAQQABAFgMANQAJAJAIANQAVAiAAAqQAAAhghArQgPATgRAMQALAGAGAJQAFAKAAAlQhDCggyAAQgjAAgshhg");
	var mask_graphics_23 = new cjs.Graphics().p("ANCHyIgnhjQAAgWAGgPQgLAGgFAAQgfAAgPgTQgIgCgGgDQgMACgNAAQgxAAgUguQg0AzgiAAQgkAAgMgdIgFgdQAAgMANgUIm8AAQgBAFAAAFIAAACIgPABQgGAdgNAjQgiBdg/AAQglAAgLgdQgGgLAAgVQAAgWANgTIAcgfQAJgKAGgLQg1gChUgMIhfgQIh0gBQgGANgJAMQgnAwhXAAIgBAFQgWBQgtAAQgjAAgMgdIgBgCQgdBKgeAAQgfAAgOgZQgHgOAAgOQgBgEAMg4QgeAHgoAAIgKgBQgOAGgSAAQgUAAgMgJQgQAEgQAAQgkAAgMgdIgFgeQAAgcA+guIgJAAQgMAAgugrIgGAAQggAAgNgZQgIgOAAgQIAAgCIgFgGQAAghAdgNIANgEIAAqGIGKAAIAAJgQAVAOAHAVQAdADAnASQASAIAQAKQA5AFB0AYIAWgFICIgCQAKgGACgHQAIgEAtgBQAHgOARgKQAbgOAmAEQAlADAaAUQAdAXAAAjIgBAMQAMABAKADIGKAAQgFgRAAgMQAAgzAfgMQAdgLAqAXQAcAPAXAZQAIgQAMgKQAYgUAlAIQAogHBIATQArALAlAQQA5gnAlgGQAzgHAAA7QAAADgHAIIABAQQABAFgMANQAJAJAIANQAVAiAAAqQAAAhghArQgPATgRAMQALAGAGAJQAFAKAAAlQhDCggyAAQgjAAgshhg");
	var mask_graphics_24 = new cjs.Graphics().p("ANCHyIgnhjQAAgWAGgPQgLAGgFAAQgfAAgPgTQgIgCgGgDQgMACgNAAQgxAAgUguQg0AzgiAAQgkAAgMgdIgFgdQAAgMANgUIm8AAQgBAFAAAFIAAACIgPABQgGAdgNAjQgiBdg/AAQglAAgLgdQgGgLAAgVQAAgWANgTIAcgfQAJgKAGgLQg1gChUgMIhfgQIh0gBQgGANgJAMQgnAwhXAAIgBAFQgWBQgtAAQgjAAgMgdIgBgCQgdBKgeAAQgfAAgOgZQgHgOAAgOQgBgEAMg4QgeAHgoAAIgKgBQgOAGgSAAQgUAAgMgJQgQAEgQAAQgkAAgMgdIgFgeQAAgcA+guIgJAAQgMAAgugrIgGAAQggAAgNgZQgIgOAAgQIAAgCIgFgGQAAghAdgNIANgEIAAqGIGKAAIAAJgQAVAOAHAVQAdADAnASQASAIAQAKQA5AFB0AYIAWgFICIgCQAKgGACgHQAIgEAtgBQAHgOARgKQAbgOAmAEQAlADAaAUQAdAXAAAjIgBAMQAMABAKADIGKAAQgFgRAAgMQAAgzAfgMQAdgLAqAXQAcAPAXAZQAIgQAMgKQAYgUAlAIQAogHBIATQArALAlAQQA5gnAlgGQAzgHAAA7QAAADgHAIIABAQQABAFgMANQAJAJAIANQAVAiAAAqQAAAhghArQgPATgRAMQALAGAGAJQAFAKAAAlQhDCggyAAQgjAAgshhg");
	var mask_graphics_25 = new cjs.Graphics().p("ANCHyIgnhjQAAgWAGgPQgLAGgFAAQgfAAgPgTQgIgCgGgDQgMACgNAAQgxAAgUguQg0AzgiAAQgkAAgMgdIgFgdQAAgMANgUIm8AAQgBAFAAAFIAAACIgPABQgGAdgNAjQgiBdg/AAQglAAgLgdQgGgLAAgVQAAgWANgTIAcgfQAJgKAGgLQg1gChUgMIhfgQIh0gBQgGANgJAMQgnAwhXAAIgBAFQgWBQgtAAQgjAAgMgdIgBgCQgdBKgeAAQgfAAgOgZQgHgOAAgOQgBgEAMg4QgeAHgoAAIgKgBQgOAGgSAAQgUAAgMgJQgQAEgQAAQgkAAgMgdIgFgeQAAgcA+guIgJAAQgMAAgugrIgGAAQggAAgNgZQgIgOAAgQIAAgCIgFgGQAAghAdgNIANgEIAAqGIGKAAIAAJgQAVAOAHAVQAdADAnASQASAIAQAKQA5AFB0AYIAWgFICIgCQAKgGACgHQAIgEAtgBQAHgOARgKQAbgOAmAEQAlADAaAUQAdAXAAAjIgBAMQAMABAKADIGKAAQgFgRAAgMQAAgzAfgMQAdgLAqAXQAcAPAXAZQAIgQAMgKQAYgUAlAIQAogHBIATQArALAlAQQA5gnAlgGQAzgHAAA7QAAADgHAIIABAQQABAFgMANQAJAJAIANQAVAiAAAqQAAAhghArQgPATgRAMQALAGAGAJQAFAKAAAlQhDCggyAAQgjAAgshhg");
	var mask_graphics_26 = new cjs.Graphics().p("AsKHwQgHgOAAgOQgBgEAMg4QgeAHgoAAIgKgBQgOAGgSABQgUAAgMgKQgQAEgQAAQgkAAgMgdIgFgeQAAgcA+guIgJABQgMAAgugsIgGABQggAAgNgaQgIgNAAgQIAAgDIgFgFQAAgiAdgMIANgFIAAqGIGKAAIAAJgQAVAOAHAVQAdADAnASQASAIAQAKQA5AFB0AYIAWgEICIgCQAKgHACgHQAIgEAtAAQAHgPARgJQAbgOAmADQAlAEAaATQAdAXAAAjIgBAMQAMABAKAEIGKAAQgFgSAAgMQAAgzAfgMQAdgKAqAWQAcAPAXAZQAIgQAMgKQAYgUAlAIQAogHBIATQArALAlAQQA5gnAlgGQAzgHAAA7QAAADgHAIIABAQQABAFgMANQAJAJAIANQAVAjAAAqQAAAgghArQgcAjgkAOQgNANgYAAQgKAAgMgFQghgHgwg0QgnAcgMAAQgfAAgPgTQgIgBgGgEQgMADgNAAQgxAAgUgvQg0AzgiAAQgkAAgMgdIgFgdQAAgMANgUIm8AAQgBAFAAAGIAAABIgPACQgGAcgNAjQgiBdg/AAQglAAgLgdQgGgLAAgVQAAgWANgTIAcgfQAJgKAGgLQg1gChUgMIhfgQIh0gBQgGANgJAMQgnAwhXABIgBAEQgWBQgtAAQgjAAgMgdIgBgCQgdBKgeAAQgfAAgOgZg");
	var mask_graphics_27 = new cjs.Graphics().p("AsKHwQgHgOAAgOQgBgEAMg4QgeAHgoAAIgKgBQgOAGgSABQgUAAgMgKQgQAEgQAAQgkAAgMgdIgFgeQAAgcA+guIgJABQgMAAgugsIgGABQggAAgNgaQgIgNAAgQIAAgDIgFgFQAAgiAdgMIANgFIAAqGIGKAAIAAJgQAVAOAHAVQAdADAnASQASAIAQAKQA5AFB0AYIAWgEICIgCQAKgHACgHQAIgEAtAAQAHgPARgJQAbgOAmADQAlAEAaATQAdAXAAAjIgBAMQAMABAKAEIGKAAQgFgSAAgMQAAgzAfgMQAdgKAqAWQAcAPAXAZQAIgQAMgKQAYgUAlAIQAogHBIATQArALAlAQQA5gnAlgGQAzgHAAA7QAAADgHAIIABAQQABAFgMANQAJAJAIANQAVAjAAAqQAAAgghArQgtA6hFAAQgkAAg2g8QgnAcgMAAQgfAAgPgTQgIgBgGgEQgMADgNAAQgxAAgUgvQg0AzgiAAQgkAAgMgdIgFgdQAAgMANgUIm8AAQgBAFAAAGIAAABIgPACQgGAcgNAjQgiBdg/AAQglAAgLgdQgGgLAAgVQAAgWANgTIAcgfQAJgKAGgLQg1gChUgMIhfgQIh0gBQgGANgJAMQgnAwhXABIgBAEQgWBQgtAAQgjAAgMgdIgBgCQgdBKgeAAQgfAAgOgZg");
	var mask_graphics_28 = new cjs.Graphics().p("Ar/HwQgIgOAAgOQAAgEALg4QgdAHgoAAIgKgBQgPAGgRABQgUAAgNgKQgPAEgQAAQglAAgMgdIgEgeQAAgcA+guIgJABQgNAAgugsIgFABQggAAgNgaQgIgNAAgQIAAgDIgGgFQABgiAcgMIAOgFIAAqGIGKAAIAAJgQAVAOAHAVQAdADAmASQASAIAQAKQA6AFBzAYIAXgEICIgCQAKgHABgHQAJgEAsAAQAHgPASgJQAbgOAlADQAlAEAaATQAdAXAAAjIgBAMQANABAKAEIGJAAQgFgSAAgMQABgzAfgMQAdgKApAWQAcAPAXAZQAIgQAMgKQAZgUAlAIQAngHBJATQAqALAlAQQA6gnAlgGQAzgHgBA7QABADgHAIIABAQQAAAQh3BlQh4BlgWAAQgfAAgQgTQgHgBgGgEQgMADgOAAQgwAAgUgvQg0AzgjAAQgkAAgLgdIgGgdQAAgMANgUIm8AAQgBAFAAAGIAAABIgOACQgGAcgOAjQgkBdg9AAQglAAgLgdQgFgLAAgVQAAgWANgTIAbgfQAKgKAGgLQg2gChTgMIhfgQIh0gBQgGANgKAMQgnAwhWABIgCAEQgVBQgtAAQgkAAgLgdIgCgCQgdBKgdAAQggAAgNgZg");
	var mask_graphics_29 = new cjs.Graphics().p("Ar/HwQgIgOAAgOQAAgEALg4QgdAHgoAAIgKgBQgPAGgRABQgUAAgNgKQgPAEgQAAQglAAgMgdIgEgeQAAgcA+guIgJABQgNAAgugsIgFABQggAAgNgaQgIgNAAgQIAAgDIgGgFQABgiAcgMIAOgFIAAqGIGKAAIAAJgQAVAOAHAVQAdADAmASQASAIAQAKQA6AFBzAYIAXgEICIgCQAKgHABgHQAJgEAsAAQAHgPASgJQAbgOAlADQAlAEAaATQAdAXAAAjIgBAMQANABAKAEIGJAAQgFgSAAgMQABgzAfgMQAdgKApAWQAcAPAXAZQAIgQAMgKQAZgUAlAIQAngHBJATQAqALAlAQQA6gnAlgGQAzgHgBA7QABADgHAIIABAQQAAAQh3BlQh4BlgWAAQgfAAgQgTQgHgBgGgEQgMADgOAAQgwAAgUgvQg0AzgjAAQgkAAgLgdIgGgdQAAgMANgUIm8AAQgBAFAAAGIAAABIgOACQgGAcgOAjQgkBdg9AAQglAAgLgdQgFgLAAgVQAAgWANgTIAbgfQAKgKAGgLQg2gChTgMIhfgQIh0gBQgGANgKAMQgnAwhWABIgCAEQgVBQgtAAQgkAAgLgdIgCgCQgdBKgdAAQggAAgNgZg");
	var mask_graphics_30 = new cjs.Graphics().p("Ar/HwQgIgOAAgOQAAgEALg4QgdAHgoAAIgKgBQgPAGgRABQgUAAgNgKQgPAEgQAAQglAAgMgdIgEgeQAAgcA+guIgJABQgNAAgugsIgFABQggAAgNgaQgIgNAAgQIAAgDIgGgFQABgiAcgMIAOgFIAAqGIGKAAIAAJgQAVAOAHAVQAdADAmASQASAIAQAKQA6AFBzAYIAXgEICIgCQAKgHABgHQAJgEAsAAQAHgPASgJQAbgOAlADQAlAEAaATQAdAXAAAjIgBAMQANABAKAEIGJAAQgFgSAAgMQABgzAfgMQAdgKApAWQAcAPAXAZQAIgQAMgKQAZgUAlAIQAngHBJATQAqALAlAQQA6gnAlgGQAzgHgBA7QABADgHAIIABAQQAAAQh3BlQh4BlgWAAQgfAAgQgTQgHgBgGgEQgMADgOAAQgwAAgUgvQg0AzgjAAQgkAAgLgdIgGgdQAAgMANgUIm8AAQgBAFAAAGIAAABIgOACQgGAcgOAjQgkBdg9AAQglAAgLgdQgFgLAAgVQAAgWANgTIAbgfQAKgKAGgLQg2gChTgMIhfgQIh0gBQgGANgKAMQgnAwhWABIgCAEQgVBQgtAAQgkAAgLgdIgCgCQgdBKgdAAQggAAgNgZg");
	var mask_graphics_31 = new cjs.Graphics().p("Ar/HwQgIgOAAgOQAAgEALg4QgdAHgoAAIgKgBQgPAGgRABQgUAAgNgKQgPAEgQAAQglAAgMgdIgEgeQAAgcA+guIgJABQgNAAgugsIgFABQggAAgNgaQgIgNAAgQIAAgDIgGgFQABgiAcgMIAOgFIAAqGIGKAAIAAJgQAVAOAHAVQAdADAmASQASAIAQAKQA6AFBzAYIAXgEICIgCQAKgHABgHQAJgEAsAAQAHgPASgJQAbgOAlADQAlAEAaATQAdAXAAAjIgBAMQANABAKAEIGJAAQgFgSAAgMQABgzAfgMQAdgKApAWQAcAPAXAZQAIgQAMgKQAZgUAlAIQAngHBJATQAqALAlAQQA6gnAlgGQAzgHgBA7QAAAOh8BoQh9BqgRAAIgBAAQgNAEgNAAQgUAAgNgHQgMADgOAAQgwAAgUgvQg0AzgjAAQgkAAgLgdIgGgdQAAgMANgUIm8AAQgBAFAAAGIAAABIgOACQgGAcgOAjQgkBdg9AAQglAAgLgdQgFgLAAgVQAAgWANgTIAbgfQAKgKAGgLQg2gChTgMIhfgQIh0gBQgGANgKAMQgnAwhWABIgCAEQgVBQgtAAQgkAAgLgdIgCgCQgdBKgdAAQggAAgNgZg");
	var mask_graphics_32 = new cjs.Graphics().p("ArfHwQgHgOAAgOQgBgEAMg4QgeAHgoAAIgKgBQgOAGgSABQgUAAgMgKQgQAEgQAAQgkAAgMgdIgFgeQAAgcA+guIgJABQgMAAgugsIgGABQggAAgNgaQgIgNAAgQIAAgDIgFgFQAAgiAdgMIANgFIAAqGIGKAAIAAJgQAVAOAHAVQAdADAnASQASAIAQAKQA5AFB0AYIAWgEICIgCQAKgHACgHQAIgEAtAAQAHgPARgJQAbgOAkADQAnAEAaATQAdAXAAAjIgBAMQAMABAKAEIGKAAQgFgSAAgMQAAgzAfgMQAdgKAqAWQAcAPAXAZQAIgQAMgKQAYgUAlAIQAogHBIATQA8APAyAaQAyAaAAAPQAAAQgLAIQgGAFgXAGIgNAFQgJAMgOAOQgdAfgdAKQgOAVgMAPQgfAmgmgBQgUAAgNgHQgMADgNAAQgxAAgUgvQg0AzgiAAQgkAAgMgdIgFgdQAAgMANgUIm8AAQgBAFAAAGIAAABIgPACQgGAcgNAjQgkBdg9AAQglAAgLgdQgGgLAAgVQAAgWANgTIAcgfQAJgKAGgLQg1gChUgMIhfgQIh0gBQgGANgJAMQgnAwhXABIgBAEQgWBQgtAAQgjAAgMgdIgBgCQgdBKgeAAQgfAAgOgZg");
	var mask_graphics_33 = new cjs.Graphics().p("AqcHwQgIgOAAgOQAAgEALg4QgeAHgnAAIgKgBQgPAGgSABQgTAAgNgKQgQAEgQAAQgkAAgMgdIgFgeQAAgcA/guIgKABQgMAAgugsIgGABQgfAAgOgaQgHgNAAgQIAAgDIgGgFQAAgiAdgMIANgFIAAqGIGLAAIAAJgQAUAOAHAVQAeADAmASQASAIAQAKQA5AFB0AYIAWgEICIgCQAKgHACgHQAJgEAsAAQAFgPASgJQAbgOAlADQAnAEAaATQAdAXAAAjIgBAMQAMABALAEIGJAAQgFgSAAgMQAAgzAggMQAcgKAqAWQAcAPAXAZQAIgQAMgKQAdgYAuAPQAqAOAiAkQAJAKAHAJQAiAKAAAnQAAAOgVATQgHAYgSAcQgoBAhFAAQgwAAgUgvQg1AzgiAAQgkAAgMgdIgFgdQAAgMANgUIm8AAQgBAFAAAGIAAABIgPACQgFAcgOAjQgkBdg/AAQgkAAgKgdQgFgLAAgVQAAgWANgTIAZgfQAJgKAHgLQg0gChTgMIhfgQIh0gBQgGANgKAMQgnAwhXABIgBAEQgWBQgtAAQgjAAgMgdIgBgCQgdBKgdAAQggAAgNgZg");
	var mask_graphics_34 = new cjs.Graphics().p("ApPHwQgIgOAAgOQAAgEALg4QgdAHgoAAIgKgBQgPAGgRABQgUAAgNgKQgPAEgQAAQglAAgMgdIgEgeQAAgcA+guIgJABQgNAAgugsIgFABQggAAgNgaQgIgNAAgQIAAgDIgGgFQABgiAcgMIAOgFIAAqGIGKAAIAAJgQAVAOAHAVQAdADAmASQASAIAQAKQA6AFBzAYIAXgEICGgCQAKgHABgHQAJgEAsAAQAHgPASgJQAbgOAlADQAnAEAaATQAdAXAAAjIgBAMQANABAKAEIGJAAQgFgSAAgMQABgzAfgMQAdgKApAWQApAWAdApQAIAMAGAMQAhAOAAAhQAAARgKANQgGAHgKAGQgMASgcAdQg2A0gjAAQgkAAgLgdIgGgdQAAgMANgUIm8AAQgBAFAAAGIAAABIgOACQgGAcgOAjQgkBdg/AAQglAAgLgdQgFgLAAgVQAAgWANgTIAcgfQAJgKAGgLQg2gChRgMIhfgQIh0gBQgGANgKAMQgnAwhWABIgCAEQgVBQgtAAQgkAAgLgdIgCgCQgdBKgdAAQggAAgNgZg");
	var mask_graphics_35 = new cjs.Graphics().p("AkmHwQgIgOAAgOQAAgEAMg4QgeAHgoAAIgKgBQgPAGgRABQgUAAgNgKQgPAEgQAAQgkAAgMgdIgFgeQAAgcA+guIgJABQgNAAgugsIgFABQggAAgNgaQgIgNAAgQIAAgDIgFgFQAAgiAcgMIAOgFIAAqGIGKAAIAAJgQAVAOAHAVQAdADAnASQARAIARAKQA3AFB0AYIAWgEICIgCQAKgHACgHQAIgEAsAAQAHgPASgJQAbgOAmADQAmAEAaATQAdAXAAAjIAAAMQAUACAPAHQgDASAAAUIAAAXQgMAFgKAIQgVARAAAVIAAABIgOACQgGAcgOAjQgkBdg/AAQgkAAgMgdQgFgLAAgVQAAgWANgTIAcgfQAJgKAGgLQg2gChTgMIhfgQIh0gBQgGANgJAMQgoAwhUABIgBAEQgWBQgtAAQgjAAgMgdIgBgCQgeBKgdAAQgfAAgOgZg");
	var mask_graphics_36 = new cjs.Graphics().p("AglHwQgHgOAAgOQgBgEAMg4QgeAHgoAAIgKgBQgOAGgSABQgUAAgMgKQgQAEgQAAQgkAAgMgdIgFgeQAAgcA+guIgJABQgMAAgugsIgGABQggAAgNgaQgIgNAAgQIAAgDIgFgFQAAgiAdgMIANgFIAAqGIGIAAIAAJgQAVAOAHAVQAdADAnASQA0AYAnAlQAqAnAAAfQAAAngZAfQgnAwhXABIgBAEQgWBQgtAAQgjAAgMgdIgBgCQgdBKgeAAQgdAAgOgZgADAEXIAIABIACgDIgMgHIACAJg");
	var mask_graphics_37 = new cjs.Graphics().p("AAfHwQgIgOAAgOQAAgEALg4QgeAHglAAIgKgBQgPAGgSABQgTAAgNgKQgQAEgQAAQgkAAgMgdIgFgeQAAgcA/guIgKABQgMAAgugsIgGABQgfAAgOgaQgHgNAAgQIAAgDIgGgFQAAgiAdgMIANgFIAAqGIGJAAIAAJgQAfAUAAAnIgBARQAWAVAPAeQAXAsAAAtQAAAsgOAyQgWBQgtAAQgjAAgMgdIgBgCQgdBKgdAAQggAAgNgZg");
	var mask_graphics_38 = new cjs.Graphics().p("AA8HwQgIgOAAgOQAAgEAMg4QgeAHgmAAIgKgBQgPAGgRABQgUAAgMgKQgQAEgQAAQgkAAgMgdIgFgeQAAgcA+guIgJABQgMAAgvgsIgFABQggAAgNgaQgIgNAAgQIAAgDIgFgFQAAgiAcgMIAOgFIAAqGIGIAAIAAJgQAfAUAAAnQAAAxglCSQgtCzguAAQgfAAgOgZg");
	var mask_graphics_39 = new cjs.Graphics().p("Ag/HNQgQAEgQAAQgkAAgMgdIgFgeQAAgcA/guIgKABQgMAAgugrIgGAAQgfAAgOgZQgHgOAAgQIAAgDIgGgFQAAghAdgNIANgFIAAqGIGJAAIAAKfIg8AAQAAAJgHAJQACAGAAAHQAAAIgCAIQANAkAAA3IAABEQgJA6gtAAQgQAAgLgHQgfAHgqAAIgKgBQgNAHgSAAQgTAAgNgKg");
	var mask_graphics_40 = new cjs.Graphics().p("Ag/HNQgQAEgQAAQgkAAgMgdIgFgeQAAgcA/guIgKABQgMAAgugrIgGAAQgfAAgOgZQgHgOAAgQIAAgDIgGgFQAAghAdgNIANgFIAAqGIGJAAIAAKfIg8AAQAAAJgHAJQACAGAAAHQAAAIgCAIQANAkAAA3IAABEQgJA6gtAAQgsAAgJg9IAAgLIgCAGQgcBIg6AAQgTAAgNgKg");
	var mask_graphics_41 = new cjs.Graphics().p("Ag/HNQgQAEgQAAQgkAAgMgdIgFgeQAAgcA/guIgKABQgMAAgugrIgGAAQgfAAgOgZQgHgOAAgQIAAgDIgGgFQAAghAdgNIANgFIAAqGIGJAAIAAKfIg8AAQAAAJgHAJQACAGAAAHQAAAIgCAIQANAkAAA3IAABEQgJA6gtAAQgsAAgJg9IAAgLIgCAGQgcBIg6AAQgTAAgNgKg");
	var mask_graphics_42 = new cjs.Graphics().p("Ag/HNQgQAEgQAAQgkAAgMgdIgFgeQAAgcA/guIgKABQgMAAgugrIgGAAQgfAAgOgZQgHgOAAgQIAAgDIgGgFQAAghAdgNIANgFIAAqGIGJAAIAAKfIg8AAQAAAJgHAJQACAGAAAHQAAAIgCAIQANAkAAA3IAABEQgJA6gtAAQgsAAgJg9IAAgLIgCAGQgcBIg6AAQgTAAgNgKg");
	var mask_graphics_43 = new cjs.Graphics().p("Ag/HNQgQAEgQAAQgkAAgMgdIgFgeQAAgcA/guIgKABQgMAAgugrIgGAAQgfAAgOgZQgHgOAAgQIAAgDIgGgFQAAghAdgNIANgFIAAqGIGJAAIAAKfIg8AAQAAAJgHAJQACAGAAAHQAAATgPAWQgOAUgVAFIAAAGQgCAYgUALQgFADgHAHQgFAZgJAZQgcBIg6AAQgTAAgNgKg");
	var mask_graphics_44 = new cjs.Graphics().p("AhCGSIgCgpIAAgFQgMAGgPAAQgMAAgugrIgGAAQgfAAgOgZQgHgOAAgQIAAgCIgGgGQAAghAdgNIANgFIAAqFIGJAAIAAKeIhAAAIgHALQgkAzgVARQgHAFgKAXIgVAtQgfA7gkABQgpAAgKgog");
	var mask_graphics_45 = new cjs.Graphics().p("AjECcIAAk3IGJAAIAAE3g");
	var mask_graphics_46 = new cjs.Graphics().p("AjECcIAAk3IGJAAIAAE3g");
	var mask_graphics_47 = new cjs.Graphics().p("AjECJIAAkRIGJAAIAAERg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:1.6,y:-7.4}).wait(1).to({graphics:mask_graphics_1,x:1.6,y:-6.1}).wait(1).to({graphics:mask_graphics_2,x:1.6,y:-6.1}).wait(1).to({graphics:mask_graphics_3,x:-0.5,y:21}).wait(1).to({graphics:mask_graphics_4,x:-0.5,y:23.9}).wait(1).to({graphics:mask_graphics_5,x:-0.5,y:23.9}).wait(1).to({graphics:mask_graphics_6,x:-0.5,y:23.9}).wait(1).to({graphics:mask_graphics_7,x:-0.5,y:23.9}).wait(1).to({graphics:mask_graphics_8,x:-0.5,y:23.9}).wait(1).to({graphics:mask_graphics_9,x:1.1,y:28.9}).wait(1).to({graphics:mask_graphics_10,x:4,y:28.9}).wait(1).to({graphics:mask_graphics_11,x:11,y:28.9}).wait(1).to({graphics:mask_graphics_12,x:36.7,y:28.9}).wait(1).to({graphics:mask_graphics_13,x:66.4,y:28.9}).wait(1).to({graphics:mask_graphics_14,x:74.1,y:28.9}).wait(1).to({graphics:mask_graphics_15,x:80.8,y:28.9}).wait(1).to({graphics:mask_graphics_16,x:84,y:28.9}).wait(1).to({graphics:mask_graphics_17,x:84,y:28.9}).wait(1).to({graphics:mask_graphics_18,x:84,y:28.9}).wait(1).to({graphics:mask_graphics_19,x:84,y:28.9}).wait(1).to({graphics:mask_graphics_20,x:85.1,y:28.9}).wait(1).to({graphics:mask_graphics_21,x:85.1,y:28.9}).wait(1).to({graphics:mask_graphics_22,x:85.1,y:36.3}).wait(1).to({graphics:mask_graphics_23,x:85.1,y:36.3}).wait(1).to({graphics:mask_graphics_24,x:85.1,y:36.3}).wait(1).to({graphics:mask_graphics_25,x:85.1,y:36.3}).wait(1).to({graphics:mask_graphics_26,x:85.1,y:28.9}).wait(1).to({graphics:mask_graphics_27,x:85.1,y:28.9}).wait(1).to({graphics:mask_graphics_28,x:84,y:28.9}).wait(1).to({graphics:mask_graphics_29,x:84,y:28.9}).wait(1).to({graphics:mask_graphics_30,x:84,y:28.9}).wait(1).to({graphics:mask_graphics_31,x:84,y:28.9}).wait(1).to({graphics:mask_graphics_32,x:80.8,y:28.9}).wait(1).to({graphics:mask_graphics_33,x:74.1,y:28.9}).wait(1).to({graphics:mask_graphics_34,x:66.4,y:28.9}).wait(1).to({graphics:mask_graphics_35,x:36.7,y:28.9}).wait(1).to({graphics:mask_graphics_36,x:11,y:28.9}).wait(1).to({graphics:mask_graphics_37,x:4,y:28.9}).wait(1).to({graphics:mask_graphics_38,x:1.1,y:28.9}).wait(1).to({graphics:mask_graphics_39,x:-0.5,y:23.9}).wait(1).to({graphics:mask_graphics_40,x:-0.5,y:23.9}).wait(1).to({graphics:mask_graphics_41,x:-0.5,y:23.9}).wait(1).to({graphics:mask_graphics_42,x:-0.5,y:23.9}).wait(1).to({graphics:mask_graphics_43,x:-0.5,y:23.9}).wait(1).to({graphics:mask_graphics_44,x:-0.5,y:21}).wait(1).to({graphics:mask_graphics_45,x:1.6,y:-6.1}).wait(1).to({graphics:mask_graphics_46,x:1.6,y:-6.1}).wait(1).to({graphics:mask_graphics_47,x:1.6,y:-7.4}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A1A29").ss(3,1,1).p("At0mxIAAI6IbpAAIAAEp");
	this.shape.setTransform(88.5,43.5);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(48));

	// arrow
	this.instance = new lib.arrow();
	this.instance.setTransform(0,0,1,1,0,0,0,10.1,7.4);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:1.9},0).wait(1).to({y:17.7},0).wait(1).to({y:55.1},0).wait(1).to({y:57.3},0).wait(1).to({rotation:-45},0).wait(1).to({regY:7.5,rotation:-90,x:7.2},0).wait(1).to({regY:7.4,x:7.6},0).wait(1).to({x:9.5},0).wait(1).to({x:13.5},0).wait(1).to({x:20.9},0).wait(1).to({x:35.9},0).wait(1).to({x:88.3},0).wait(1).to({x:147.1},0).wait(1).to({x:162.7},0).wait(1).to({x:170.4},0).wait(1).to({x:174.4},0).wait(1).to({x:176.4},0).wait(1).to({regY:7.5,x:177.1},0).wait(1).to({rotation:-30,x:174.8,y:59.6},0).wait(1).to({regY:7.4,rotation:0,x:177,y:68.6},0).wait(1).to({y:69.9},0).wait(1).to({y:85.1},0).wait(1).to({y:87},0).wait(1).to({y:68.6},3).wait(1).to({regY:7.5,rotation:-30,x:174.8,y:59.6},0).wait(1).to({rotation:-90,x:177.1,y:57.3},0).to({x:7.2},12).wait(1).to({regY:7.4,rotation:-45,x:0},0).wait(1).to({rotation:0},0).to({y:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.6,-8.9,33,15.3);


(lib.dark_square = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if(this.doOnce){
			this.doOnce = false;
		
			this.green.visible = false;
			this.stop();
			this.addEventListener("mouseover", over);
			this.addEventListener("rollout", out);
		
			function over(event){
				event.currentTarget.gotoAndStop(1);
			}
		
			function out(event){
				event.currentTarget.gotoAndStop(0);
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 3
	this.green = new lib.green_square();
	this.green.setTransform(30.2,29.7,1,1,0,0,0,30.2,29.7);

	this.timeline.addTween(cjs.Tween.get(this.green).wait(2));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B2B3F").s().p("AksEoIAApPIJZAAIAAJPg");
	this.shape.setTransform(30.2,29.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#43435A").s().p("AksEoIAApPIJZAAIAAJPg");
	this.shape_1.setTransform(30.2,29.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60.4,59.4);


(lib.buttons = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var selected = false;
		var up;
		var up_arrow;
		var btns = new Array(
			this.one_btn,
			this.two_btn,
			this.three_btn,
			this.four_btn,
			this.five_btn,
			this.six_btn,
			this.seven_btn,
			this.eight_btn,
			this.nine_btn,
			this.ten_btn,
			this.eleven_btn,
			this.twelve_btn
		);
		
		
		var btn_arrows = new Array(
			this.one,
			this.two,
			this.three,
			this.four,
			this.five,
			this.six,
			this.seven,
			this.eight,
			this.nine,
			this.ten,
			this.eleven,
			this.twelve
		);
		
		for(var i=0; i<btns.length; i++){
			btns[i].doOnce=true;
			btns[i].addEventListener("click", playArrow);
			
		}
		
		
		function playArrow(event){
			
			if(up_arrow === event.currentTarget){
					console.log("ewfefe");
					var index = btns.indexOf(event.currentTarget);
					event.currentTarget.parent.parent.focusParent(index);
			}
			
			if(up){
				up.play();
				console.log(this);
				console.log(this.parent);
				console.log(this.parent.parent);
				var index = btns.indexOf(event.currentTarget);
				event.currentTarget.parent.parent.killChild(index);
			}
			var index = btns.indexOf(event.currentTarget);
			event.currentTarget.green.visible = true;
			btn_arrows[index].play();
			up = btn_arrows[index];
			up_arrow = event.currentTarget;
			//event.currentTarget.displayObject.removeAllEventListeners("rollover");
			//event.currentTarget.displayObject.removeAllEventListeners("rollout");
		}
		
		this.makeChild = makeChild;
		function makeChild(mc){
			var index = btn_arrows.indexOf(mc);
			this.parent.makeChild(index,selected);
			selected = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9797C2").s().p("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");
	this.shape.setTransform(369.1,28.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.twelve_btn = new lib.dark_square();
	this.twelve_btn.setTransform(703.4,27.9,0.951,0.942,0,0,0,30.3,29.6);

	this.eleven_btn = new lib.dark_square();
	this.eleven_btn.setTransform(641.8,27.9,0.951,0.942,0,0,0,30.2,29.6);

	this.ten_btn = new lib.dark_square();
	this.ten_btn.setTransform(580.7,27.9,0.951,0.942,0,0,0,30.2,29.6);

	this.nine_btn = new lib.dark_square();
	this.nine_btn.setTransform(520.1,27.9,0.951,0.942,0,0,0,30.1,29.6);

	this.eight_btn = new lib.dark_square();
	this.eight_btn.setTransform(458.5,27.9,0.951,0.942,0,0,0,30.1,29.6);

	this.seven_btn = new lib.dark_square();
	this.seven_btn.setTransform(397.4,27.9,0.951,0.942,0,0,0,30.1,29.6);

	this.six_btn = new lib.dark_square();
	this.six_btn.setTransform(336.5,27.9,0.951,0.942,0,0,0,30.1,29.6);

	this.five_btn = new lib.dark_square();
	this.five_btn.setTransform(275,27.9,0.951,0.942,0,0,0,30.2,29.6);

	this.four_btn = new lib.dark_square();
	this.four_btn.setTransform(213.8,27.9,0.951,0.942,0,0,0,30.1,29.6);

	this.three_btn = new lib.dark_square();
	this.three_btn.setTransform(152,27.9,0.951,0.942,0,0,0,30.1,29.6);

	this.two_btn = new lib.dark_square();
	this.two_btn.setTransform(90.4,27.9,0.951,0.942,0,0,0,30.1,29.6);

	this.one_btn = new lib.dark_square();
	this.one_btn.setTransform(29.4,27.9,0.951,0.942,0,0,0,30.2,29.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.one_btn},{t:this.two_btn},{t:this.three_btn},{t:this.four_btn},{t:this.five_btn},{t:this.six_btn},{t:this.seven_btn},{t:this.eight_btn},{t:this.nine_btn},{t:this.ten_btn},{t:this.eleven_btn},{t:this.twelve_btn}]}).wait(1));

	// Layer 2
	this.twelve = new lib.transition();
	this.twelve.setTransform(791.8,91.2,1,1,0,0,0,88.5,43.5);

	this.eleven = new lib.transition();
	this.eleven.setTransform(730.6,91.2,1,1,0,0,0,88.5,43.5);

	this.ten = new lib.transition();
	this.ten.setTransform(673.3,91.2,1,1,0,0,0,88.5,43.5);

	this.nine = new lib.transition();
	this.nine.setTransform(610.9,91.2,1,1,0,0,0,88.5,43.5);

	this.eight = new lib.transition();
	this.eight.setTransform(551.2,91.2,1,1,0,0,0,88.5,43.5);

	this.seven = new lib.transition();
	this.seven.setTransform(488.8,91.2,1,1,0,0,0,88.5,43.5);

	this.six = new lib.transition();
	this.six.setTransform(428,91.2,1,1,0,0,0,88.5,43.5);

	this.five = new lib.transition();
	this.five.setTransform(365.6,91.2,1,1,0,0,0,88.5,43.5);

	this.four = new lib.transition();
	this.four.setTransform(304.4,91.2,1,1,0,0,0,88.5,43.5);

	this.three = new lib.transition();
	this.three.setTransform(242,91.2,1,1,0,0,0,88.5,43.5);

	this.two = new lib.transition();
	this.two.setTransform(181.2,91.2,1,1,0,0,0,88.5,43.5);

	this.one = new lib.transition();
	this.one.setTransform(118.8,91.2,1,1,0,0,0,88.5,43.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.one},{t:this.two},{t:this.three},{t:this.four},{t:this.five},{t:this.six},{t:this.seven},{t:this.eight},{t:this.nine},{t:this.ten},{t:this.eleven},{t:this.twelve}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.6,0,881.2,136.2);


(lib.newNode = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
		exportRoot.addChildren(new Array("lel"));
		
		this.makeChild = makeChild;
		function makeChild(index,selected){
			exportRoot.makeChild(index,this,selected);
		}
		
		
		this.killChild = killChild;
		function killChild(index){
			exportRoot.killChild(this,index);
		}
		
		
		
		this.focusParent = focusParent;
		function focusParent(index){
			exportRoot.focusParent(index,this);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_14 = new cjs.Graphics().p("Eg5HAEJIAAoRMByPAAAIAAIRg");
	var mask_graphics_15 = new cjs.Graphics().p("Eg5HAELIAAoVMByPAAAIAAIVg");
	var mask_graphics_16 = new cjs.Graphics().p("Eg5HAETIAAolMByPAAAIAAIlg");
	var mask_graphics_17 = new cjs.Graphics().p("Eg5HAEjIAApFMByPAAAIAAJFg");
	var mask_graphics_18 = new cjs.Graphics().p("Eg5HAE9IAAp5MByPAAAIAAJ5g");
	var mask_graphics_19 = new cjs.Graphics().p("Eg5HAFnIAArNMByPAAAIAALNg");
	var mask_graphics_20 = new cjs.Graphics().p("Eg5HAGpIAAtRMByPAAAIAANRg");
	var mask_graphics_21 = new cjs.Graphics().p("Eg5HAIeIAAw7MByPAAAIAAQ7g");
	var mask_graphics_22 = new cjs.Graphics().p("Eg5HANlIAA7JMByPAAAIAAbJg");
	var mask_graphics_23 = new cjs.Graphics().p("Eg5HAV+MAAAgr7MByPAAAMAAAAr7g");
	var mask_graphics_24 = new cjs.Graphics().p("Eg5HAYHMAAAgwNMByPAAAMAAAAwNg");
	var mask_graphics_25 = new cjs.Graphics().p("Eg5HAZLMAAAgyVMByPAAAMAAAAyVg");
	var mask_graphics_26 = new cjs.Graphics().p("Eg5HAZyMAAAgzjMByPAAAMAAAAzjg");
	var mask_graphics_27 = new cjs.Graphics().p("Eg5HAaIMAAAg0PMByPAAAMAAAA0Pg");
	var mask_graphics_28 = new cjs.Graphics().p("Eg5HAaTMAAAg0lMByPAAAMAAAA0lg");
	var mask_graphics_29 = new cjs.Graphics().p("EhQaA4fMAAAhwzMCg1AAAMAAABwzg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_graphics_14,x:26,y:26.5}).wait(1).to({graphics:mask_graphics_15,x:26,y:26.7}).wait(1).to({graphics:mask_graphics_16,x:26,y:27.6}).wait(1).to({graphics:mask_graphics_17,x:26,y:29.2}).wait(1).to({graphics:mask_graphics_18,x:26,y:31.8}).wait(1).to({graphics:mask_graphics_19,x:26,y:35.9}).wait(1).to({graphics:mask_graphics_20,x:26,y:42.5}).wait(1).to({graphics:mask_graphics_21,x:25.9,y:54.2}).wait(1).to({graphics:mask_graphics_22,x:25.9,y:86.9}).wait(1).to({graphics:mask_graphics_23,x:25.8,y:140.6}).wait(1).to({graphics:mask_graphics_24,x:25.8,y:154.3}).wait(1).to({graphics:mask_graphics_25,x:25.8,y:161.1}).wait(1).to({graphics:mask_graphics_26,x:25.8,y:165}).wait(1).to({graphics:mask_graphics_27,x:25.8,y:167.2}).wait(1).to({graphics:mask_graphics_28,x:25.8,y:168.4}).wait(1).to({graphics:mask_graphics_29,x:175.8,y:361.5}).wait(1));

	// Layer 3
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(-206.9,238.4,0.156,0.156);

	this.instance_1 = new lib.Bitmap1();
	this.instance_1.setTransform(331.6,10.5,0.042,0.042);

	this.text = new cjs.Text("Question:", "25px 'Arial'", "#242432");
	this.text.lineHeight = 27;
	this.text.lineWidth = 116;
	this.text.setTransform(-297.9,47.6);

	this.text_1 = new cjs.Text(" 1", "25px 'Arial'", "#242432");
	this.text_1.lineHeight = 27;
	this.text_1.lineWidth = 116;
	this.text_1.setTransform(352.1,9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9797C2").s().p("EgqaAQmIAAk9MBU1AAAIAAE9gEgqaAJdIAA6CMBU1AAAIAAaCg");
	this.shape.setTransform(92.4,157.5);

	this.instance.mask = this.instance_1.mask = this.text.mask = this.text_1.mask = this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.text_1},{t:this.text},{t:this.instance_1},{t:this.instance}]},14).wait(16));

	// Layer 6
	this.instance_2 = new lib.buttons();
	this.instance_2.setTransform(-340.2,81,0.994,1,0,0,0,0,27.9);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).wait(1).to({regX:446.6,regY:71.8,x:103.9,y:125.8},0).wait(1).to({y:127.7},0).wait(1).to({y:131},0).wait(1).to({x:104,y:136.2},0).wait(1).to({x:104.1,y:144.5},0).wait(1).to({x:104.3,y:158},0).wait(1).to({x:104.7,y:184.8},0).wait(1).to({x:106,y:273.8},0).wait(1).to({x:106.6,y:316.9},0).wait(1).to({x:106.9,y:333.5},0).wait(1).to({x:107,y:342.6},0).wait(1).to({x:107.1,y:348.1},0).wait(1).to({y:351.3},0).wait(1).to({y:352.9},0).wait(1).to({regX:0,regY:27.9,x:-336.9,y:309.5},0).wait(1));

	// Layer 1
	this.text_2 = new cjs.Text("+", "35px 'Arial'", "#242432");
	this.text_2.lineHeight = 37;
	this.text_2.lineWidth = 21;
	this.text_2.setTransform(16,6.3);

	this.instance_3 = new lib.minus_simbol();
	this.instance_3.setTransform(26.5,27.8,1,1,0,0,0,12.5,19.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2,p:{x:16,y:6.3,text:"+"}}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.text_2,p:{x:-320.1,y:8,text:"-"}}]},1).to({state:[{t:this.text_2,p:{x:-320.1,y:8,text:"-"}}]},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(1).to({regX:16.9,x:29.9,y:27.7},0).wait(1).to({x:26.7},0).wait(1).to({x:20},0).wait(1).to({x:8.3},0).wait(1).to({x:-13.1},0).wait(1).to({x:-61.5},0).wait(1).to({x:-219.9,y:27.6},0).wait(1).to({x:-268.4,y:27.5},0).wait(1).to({x:-287.8},0).wait(1).to({x:-297.4},0).wait(1).to({x:-301.9},0).wait(1).to({regX:12.5,x:-307.6},0).to({_off:true},1).wait(16));

	// Layer 2
	this.instance_4 = new lib.lightPurpPane();
	this.instance_4.setTransform(26.5,26.5,1,1,0,0,0,26.5,26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({scaleX:1.04,x:26.6},0).wait(1).to({scaleX:1.16},0).wait(1).to({scaleX:1.42,x:26.8},0).wait(1).to({scaleX:1.87,x:27.1},0).wait(1).to({scaleX:2.69,x:27.6},0).wait(1).to({scaleX:4.54,x:28.9},0).wait(1).to({scaleX:10.61,x:32.9},0).wait(1).to({scaleX:12.47,x:34.1},0).wait(1).to({scaleX:13.21,x:34.6},0).wait(1).to({scaleX:13.58,x:34.9},0).wait(1).to({scaleX:13.75,x:35},0).wait(1).to({regX:27.2,scaleX:13.8,x:35.7},0).wait(1).to({regX:26.5,regY:0,x:26,y:0},0).wait(1).to({regY:26.5,scaleY:1.01,y:26.7},0).wait(1).to({scaleY:1.03,y:27.4},0).wait(1).to({scaleY:1.08,y:28.7},0).wait(1).to({scaleY:1.16,y:30.7},0).wait(1).to({scaleY:1.28,y:34},0).wait(1).to({scaleY:1.48,y:39.3},0).wait(1).to({scaleY:1.84,y:48.7},0).wait(1).to({scaleY:2.82,y:74.8},0).wait(1).to({scaleY:4.44,y:117.6},0).wait(1).to({scaleY:4.85,y:128.6},0).wait(1).to({scaleY:5.06,y:134},0).wait(1).to({scaleY:5.17,y:137.1},0).wait(1).to({scaleY:5.24,y:138.9},0).wait(1).to({scaleY:5.27,y:139.8},0).wait(1).to({regY:0,scaleY:5.28,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53,53);


// stage content:



(lib.saveMe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		stage.enableMouseOver(20);
		var rootNode = this.rootNode;
		rootNode.addEventListener("click", expand);
		rootNode.gotoAndStop(30);
		
		var nodes = new Array(this.rootNode);
		var depths = new Array();
		var tabbing = new Array();
		var oldi = 0;
		depths.push(0);
		tabbing.push(580);
		function expand(event){
			if(event.currentTarget.currentFrame === 0){
				event.currentTarget.play();
			}
		}
		
		function addChildren(children){
			for(var i=0; i<children.length; i++){
				//myMC = new lib.newNode();
				//console.log(myMC);
				//stage.addChild(myMC);
			}
		}
		
		
		this.focusParent = focusParent;
		function focusParent(i, node){
			var index = nodes.indexOf(node);
			var depth = depths[index];
			var yshift = 0;
			if(depth!=0){
				yshift = -200;
			}
			console.log(depth);
			createjs.Tween.get(stage)
		         .wait(200)
		         .to({y:stage.y-yshift, x: stage.x+i*30}, 1000)
		         .call(handleComplete);
		    function handleComplete() {
		        //Tween complete
		    }
		}
		
		this.addChildren = addChildren;
		this.killChild = killChild;
		function killChild(node,i){
			var index = nodes.indexOf(node);
			var depth = depths[index];
				createjs.Tween.get(node.child)
		         .to({scaleY:.01, alpha:0}, 200)
		         .call(handleComplete);
				function handleComplete() {
					stage.removeChild(node.child);
				}
			
			console.log("Deleted Child");
		}
		function makeChild(i,node,selected){
			
			var index = nodes.indexOf(node);
			var depth = depths[index];
			console.log("index: "+index+" depth:"+ depth);
			var newNode = new lib.newNode();
			newNode.scaleX = .5;
			newNode.scaleY = .5;
			newNode.y = 225 + depth*220;
			newNode.x = tabbing[index]+ i*30;
			stage.addChild(newNode);
			nodes.push(newNode);
			depths.push(depth+1);
			tabbing.push(tabbing[index]+i*30);
			node.child = newNode;
			var keep = i;
			if(selected){
				console.log("i:"+i+"old:"+oldi);
				i-=oldi;
				console.log(i);
			}
			createjs.Tween.get(stage)
		         .wait(200)
		         .to({y:depth*-200, x: stage.x-i*30}, 1000)
		         .call(handleComplete);
		    function handleComplete() {
		        //Tween complete
		    }
			oldi= keep;
			
		}
		
		this.makeChild = makeChild;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.rootNode = new lib.newNode();
	this.rootNode.setTransform(523.6,25.5,0.472,0.472,0,0,0,26.5,26.5);

	this.timeline.addTween(cjs.Tween.get(this.rootNode).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1011.1,413,25,25);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;