(function (libPhone, img, cjs, ssPhone) {

var p; // shortcut to reference prototypes

// libPhonerary properties:
libPhone.properties = {
	width: 360,
	height: 640,
	fps: 45,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(libPhone.PhoneBitmap1 = function() {
	this.spriteSheet = ssPhone["phone_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(libPhone.PhoneBitmap3 = function() {
	this.spriteSheet = ssPhone["phone_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(libPhone.top = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#181616").s().p("AIMZxQAAjkihihQihihjiAAQjkAAihChQihChAADkIzIAAMAAAgzhMA4NAAAMAAAAzhg");
	this.shape.setTransform(180,165);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,360,329.9);


(libPhone.nothin = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AolH8IAAv3IRKAAIAAP3g");
	this.shape.setTransform(55,50.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.4,110,101.7);


(libPhone.icon = function() {
	this.initialize();

	// Layer 1
	this.instance = new libPhone.PhoneBitmap3();
	this.instance.setTransform(27.6,26.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2E2E2E").s().p("AmDGEQiiihAAjjQAAjjCiigQCgiiDjAAQDjAAChCiQChCgAADjQAADjihChQihChjjAAQjjAAigihg");
	this.shape.setTransform(55,55);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,110,110);


(libPhone.hider = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(26));

	// top
	this.instance = new libPhone.top();
	this.instance.setTransform(180.1,494.8,1,1,0,180,0,180,165);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:164.9,y:495.1},0).wait(1).to({y:495.9},0).wait(1).to({y:497.4},0).wait(1).to({y:499.6},0).wait(1).to({y:502.7},0).wait(1).to({y:507},0).wait(1).to({y:512.9},0).wait(1).to({y:520.9},0).wait(1).to({y:532},0).wait(1).to({y:548.3},0).wait(1).to({y:575},0).wait(1).to({y:634.1},0).wait(1).to({y:715},0).wait(1).to({y:749.1},0).wait(1).to({y:768.1},0).wait(1).to({y:780.6},0).wait(1).to({y:789.4},0).wait(1).to({y:795.7},0).wait(1).to({y:800.3},0).wait(1).to({y:803.7},0).wait(1).to({y:806},0).wait(1).to({y:807.5},0).wait(1).to({y:808.3},0).wait(1).to({regY:165,y:808.5},0).wait(2).to({regY:164.9,y:808.4},0).wait(1).to({y:807.6},0).wait(1).to({y:806.3},0).wait(1).to({y:804.2},0).wait(1).to({y:801.3},0).wait(1).to({y:797.3},0).wait(1).to({y:791.8},0).wait(1).to({y:784.4},0).wait(1).to({y:774.2},0).wait(1).to({y:759.5},0).wait(1).to({y:735.8},0).wait(1).to({y:684.1},0).wait(1).to({y:590},0).wait(1).to({y:553.8},0).wait(1).to({y:534.7},0).wait(1).to({y:522.3},0).wait(1).to({y:513.7},0).wait(1).to({y:507.5},0).wait(1).to({y:502.9},0).wait(1).to({y:499.7},0).wait(1).to({y:497.4},0).wait(1).to({y:496},0).wait(1).to({y:495.1},0).wait(1).to({regY:165,y:494.8},0).wait(1));

	// top
	this.instance_1 = new libPhone.top();
	this.instance_1.setTransform(180,165,1,1,0,0,0,180,165);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:164.9,y:164.7},0).wait(1).to({y:163.9},0).wait(1).to({y:162.3},0).wait(1).to({y:160},0).wait(1).to({y:156.7},0).wait(1).to({y:152.1},0).wait(1).to({y:145.9},0).wait(1).to({y:137.4},0).wait(1).to({y:125.7},0).wait(1).to({y:108.4},0).wait(1).to({y:80.1},0).wait(1).to({y:17.4},0).wait(1).to({y:-68.3},0).wait(1).to({y:-104.4},0).wait(1).to({y:-124.5},0).wait(1).to({y:-137.8},0).wait(1).to({y:-147.1},0).wait(1).to({y:-153.8},0).wait(1).to({y:-158.7},0).wait(1).to({y:-162.2},0).wait(1).to({y:-164.7},0).wait(1).to({y:-166.3},0).wait(1).to({y:-167.2},0).wait(1).to({regY:165,y:-167.4},0).wait(2).to({regY:164.9,y:-167.2},0).wait(1).to({y:-166.4},0).wait(1).to({y:-165},0).wait(1).to({y:-162.8},0).wait(1).to({y:-159.7},0).wait(1).to({y:-155.4},0).wait(1).to({y:-149.7},0).wait(1).to({y:-141.8},0).wait(1).to({y:-131},0).wait(1).to({y:-115.4},0).wait(1).to({y:-90.3},0).wait(1).to({y:-35.5},0).wait(1).to({y:64.2},0).wait(1).to({y:102.5},0).wait(1).to({y:122.8},0).wait(1).to({y:135.9},0).wait(1).to({y:145},0).wait(1).to({y:151.6},0).wait(1).to({y:156.4},0).wait(1).to({y:159.9},0).wait(1).to({y:162.3},0).wait(1).to({y:163.8},0).wait(1).to({y:164.7},0).wait(1).to({regY:165,y:165},0).wait(1));

	// icon
	this.instance_2 = new libPhone.icon();
	this.instance_2.setTransform(177.5,329.9,1,1,0,0,0,55,55);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleX:1,scaleY:1,rotation:0.3,alpha:0.999},0).wait(1).to({scaleX:1,scaleY:1,rotation:1.2,alpha:0.997},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:2.8,x:177.4,alpha:0.992},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:5.3,alpha:0.985},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:8.9,alpha:0.975},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:13.9,x:177.5,alpha:0.961},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:20.6,alpha:0.943},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:29.8,x:177.4,alpha:0.917},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:42.5,x:177.5,alpha:0.882},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:61.2,x:177.4,alpha:0.83},0).wait(1).to({scaleX:0.78,scaleY:0.78,rotation:91.9,x:177.5,alpha:0.745},0).wait(1).to({scaleX:0.62,scaleY:0.62,rotation:159.8,x:177.4,alpha:0.556},0).wait(1).to({scaleX:0.4,scaleY:0.4,rotation:252.6,alpha:0.298},0).wait(1).to({scaleX:0.3,scaleY:0.3,rotation:291.7,x:177.5,alpha:0.19},0).wait(1).to({scaleX:0.25,scaleY:0.25,rotation:313.5,x:177.4,alpha:0.129},0).wait(1).to({scaleX:0.21,scaleY:0.21,rotation:327.8,alpha:0.089},0).wait(1).to({scaleX:0.19,scaleY:0.19,rotation:337.9,x:177.5,alpha:0.061},0).wait(1).to({scaleX:0.17,scaleY:0.17,rotation:345.2,x:177.4,alpha:0.041},0).wait(1).to({scaleX:0.16,scaleY:0.16,rotation:350.5,x:177.5,alpha:0.026},0).wait(1).to({scaleX:0.15,scaleY:0.15,rotation:354.4,x:177.4,alpha:0.016},0).wait(1).to({scaleX:0.14,scaleY:0.14,rotation:357,x:177.5,alpha:0.008},0).wait(1).to({scaleX:0.14,scaleY:0.14,rotation:358.8,x:177.4,alpha:0.003},0).wait(1).to({scaleX:0.14,scaleY:0.14,rotation:359.7,x:177.5,alpha:0.001},0).wait(1).to({scaleX:0.14,scaleY:0.14,rotation:360,alpha:0},0).wait(2).to({scaleX:0.14,scaleY:0.14,rotation:359.7,alpha:0.001},0).wait(1).to({scaleX:0.14,scaleY:0.14,rotation:358.9,alpha:0.003},0).wait(1).to({scaleX:0.14,scaleY:0.14,rotation:357.3,x:177.4,alpha:0.007},0).wait(1).to({scaleX:0.15,scaleY:0.15,rotation:355,x:177.5,alpha:0.014},0).wait(1).to({scaleX:0.16,scaleY:0.16,rotation:351.6,x:177.4,alpha:0.023},0).wait(1).to({scaleX:0.17,scaleY:0.17,rotation:347,x:177.5,alpha:0.036},0).wait(1).to({scaleX:0.18,scaleY:0.18,rotation:340.7,x:177.4,alpha:0.054},0).wait(1).to({scaleX:0.2,scaleY:0.2,rotation:332.3,alpha:0.077},0).wait(1).to({scaleX:0.23,scaleY:0.23,rotation:320.6,x:177.5,alpha:0.11},0).wait(1).to({scaleX:0.27,scaleY:0.27,rotation:303.7,x:177.4,alpha:0.157},0).wait(1).to({scaleX:0.34,scaleY:0.34,rotation:276.4,x:177.5,alpha:0.232},0).wait(1).to({scaleX:0.48,scaleY:0.48,rotation:217.1,x:177.4,alpha:0.397},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:109.1,alpha:0.697},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:67.6,x:177.5,alpha:0.812},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:45.7,x:177.4,alpha:0.873},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:31.5,alpha:0.913},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:21.6,alpha:0.94},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:14.4,alpha:0.96},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:9.2,alpha:0.974},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:5.5,x:177.5,alpha:0.985},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:2.9,alpha:0.992},0).wait(1).to({scaleX:1,scaleY:1,rotation:1.2,alpha:0.997},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.3,alpha:0.999},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,360,659.8);


(libPhone.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.instance = new libPhone.nothin();
	this.instance.setTransform(1.3,-0.9,1.136,1,0,0,0,1.1,-1.3);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.281},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125,101.7);


// stage content:



(libPhone.phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stagePhone.enableMouseOver(20);
		var hider = this.hider;
		var speaker = this.speaker;
		var statement = "This is a long statement in order to debug whether or not the animation is a suitable option for this particular platform, and because i need an adaquate test senetence, this one will have to be kinda of long";
		var state_i = 0;
		
		var open = true;
		
		var btns = new Array(
						this.btn_1,
						this.btn_2,
						this.btn_3,
						this.btn_4,
						this.btn_5,
						this.btn_6,
						this.btn_7,
						this.btn_8,
						this.btn_9,
						this.btn_11,
						this.btn_10,
						this.btn_12,
						this.btn_13,
						this.btn_14
					);
		hider.addEventListener("click", reveal);
		btns[12].addEventListener("click", reveal);
		btns[13].addEventListener("click",commitChanges);
		function commitChanges(event){
			var quests =  exportRoot.quests;
			var converted = new Array();
			for(var i=0; i<quests.length; i++){
				var obj = {};
				obj.id = ""+(quests[i].id+1);
				obj.Question = quests[i].question;
				var kids = new Array();
				for(var j=0; j<quests[i].keyVals.length; j++){
					var child = {};
					child.Link = ""+(quests[i].keyVals[j].value.id+1);
					kids.push(child);
				}
				obj.Children = kids;
				converted.push(obj);
			}
			
			
			createMyJsonAndGetFromServer(converted,function confirmed(phoneNum){
				alert("Changes committed. You can test it by calling "+phoneNum);
			});
			
			
		}
		
		function createMyJsonAndGetFromServer(jsonInCorrectFormat, callback){
			console.log("stringfyed: "+JSON.stringify(jsonInCorrectFormat));
			$.ajax({
				url:"https://api.myjson.com/bins",
				type:"POST",
				data:JSON.stringify(jsonInCorrectFormat),
				contentType:"application/json; charset=utf-8",
				dataType:"json",
				success: function(data, textStatus, jqXHR){
					$.ajax({
						url:"http://www.my-arbitrio.co/getNumber/"+data.uri.substring(data.uri.length-5, data.uri.length),
						type:"GET",
						contentType:"application/json; charset=utf-8",
						dataType:"json",
						success: function(data2, textStatus2, jqXHR2){
							callback(data2);
						}
					});
					
					console.log("pinging http://www.my-arbitrio.co/getNumber/"+data.uri.substring(data.uri.length-5, data.uri.length))
				}
			});  
		}
		
		function changeStatement(rootQuest){
			statement = rootQuest.question;
			state_i = 0;
			console.log(rootQuest.keyVals);
			for(var i=0; i<rootQuest.keyVals.length; i++){	
					var btn = btns[rootQuest.keyVals[i].key];
					var test = Number(i);
					
					addClickHandler(btn, rootQuest, test);
			
			}
		}
		
		
		function addClickHandler(btn, rootQuest, test) {
			btn.addEventListener('click', function(e) {
						console.log(test);
						console.log(rootQuest);
						console.log(rootQuest.keyVals);
						console.log(rootQuest.keyVals[i]);
						for(var j=0; j<btns.length-2; j++){
							btns[j].removeAllEventListeners("click");
						}
						changeStatement(rootQuest.keyVals[test].value);
			}, false);
			console.log("added event listener to value:"+i);
		}
		
		
		function reveal(event){
			hider.play();
			if(open){
				sacredJSON = exportRoot.generate();
				var rootQuest = sacredJSON[0];
				changeStatement(rootQuest);
			}
			open = !open;
		}
		
		for(var i=0; i<btns.length; i++){
			btns[i].addEventListener("mouseover", over);
			btns[i].addEventListener("rollout", out);
		}
		
		console.log(this.btn_1);
		function over(event){
			//console.log("lel");
			event.currentTarget.gotoAndStop(1);
		}
		
		function out(event){
			//console.log("lel2");
			event.currentTarget.gotoAndStop(0);
		}
		
		
		 createjs.Ticker.addEventListener("tick", handleTick);
		 function handleTick(event) {
		     if(state_i<statement.length){
				 state_i++;
				 var prompt = statement.substring(0,state_i);
				 speaker.text = prompt;
			 }
		 }
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 4
	this.hider = new libPhone.hider();
	this.hider.setTransform(180,321.2,1,1,0,0,0,180,321.2);

	this.timeline.addTween(cjs.Tween.get(this.hider).wait(1));

	// Layer 8
	this.btn_14 = new libPhone.button();
	this.btn_14.setTransform(271,586.8,1.44,0.708,0,0,0,63.2,26.7);

	this.btn_13 = new libPhone.button();
	this.btn_13.setTransform(91,586.8,1.44,0.708,0,0,0,63.2,26.7);

	this.btn_12 = new libPhone.button();
	this.btn_12.setTransform(299.2,502,0.92,0.846,0,0,0,63.1,26.7);

	this.btn_11 = new libPhone.button();
	this.btn_11.setTransform(181.8,502,0.92,0.846,0,0,0,63.1,26.7);

	this.btn_10 = new libPhone.button();
	this.btn_10.setTransform(63.1,502,0.92,0.846,0,0,0,63.1,26.7);

	this.btn_7 = new libPhone.button();
	this.btn_7.setTransform(63.4,407,0.92,0.846,0,0,0,63.1,26.7);

	this.btn_8 = new libPhone.button();
	this.btn_8.setTransform(180.9,407,0.92,0.846,0,0,0,63.1,26.7);

	this.btn_9 = new libPhone.button();
	this.btn_9.setTransform(299.6,407,0.92,0.846,0,0,0,63.1,26.7);

	this.btn_3 = new libPhone.button();
	this.btn_3.setTransform(299.6,227.6,0.92,0.846,0,0,0,63.1,26.7);

	this.btn_1 = new libPhone.button();
	this.btn_1.setTransform(63.1,227.6,0.92,0.846,0,0,0,63.1,26.7);

	this.btn_2 = new libPhone.button();
	this.btn_2.setTransform(181.8,227.6,0.92,0.846,0,0,0,63.1,26.7);

	this.btn_6 = new libPhone.button();
	this.btn_6.setTransform(299.3,317.3,0.92,0.846,0,0,0,63.1,26.7);

	this.btn_4 = new libPhone.button();
	this.btn_4.setTransform(63.1,317.3,0.92,0.846,0,0,0,63.1,26.7);

	this.btn_5 = new libPhone.button();
	this.btn_5.setTransform(181.1,317.3,0.92,0.846,0,0,0,63.1,26.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_5},{t:this.btn_4},{t:this.btn_6},{t:this.btn_2},{t:this.btn_1},{t:this.btn_3},{t:this.btn_9},{t:this.btn_8},{t:this.btn_7},{t:this.btn_10},{t:this.btn_11},{t:this.btn_12},{t:this.btn_13},{t:this.btn_14}]}).wait(1));

	// Layer 5
	this.speaker = new cjs.Text("Epic textbox is epic", "15px 'Verdana'", "#CCCCCC");
	this.speaker.name = "speaker";
	this.speaker.lineHeight = 17;
	this.speaker.lineWidth = 334;
	this.speaker.setTransform(10.5,16.3);

	this.timeline.addTween(cjs.Tween.get(this.speaker).wait(1));

	// Layer 3
	this.instance = new libPhone.PhoneBitmap1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(180,320,364,659.8);

})(libPhone = libPhone||{}, imagesPhone = imagesPhone||{}, createjs = createjs||{}, ssPhone = ssPhone||{});
var libPhone, imagesPhone, createjs, ssPhone;