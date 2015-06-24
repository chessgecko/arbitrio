// Load required packages
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var mkdirp = require('mkdirp');

var request = require('request');
var async = require('async');
var parseString = require('xml2js').parseString;
var fs = require('fs');

// Create our Express application
var app = express();

var http = require('http');

var myNumbersJson = "4xxt0";

var server = http.createServer(app).listen(8000, function(){
  console.log('Express server listening on port ' + 8000);
});
app.set("view engine", "ejs");

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
  extended: true
}));
// Add headers
app.use(function (req, res, next) {
  //console.log("here");
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Authorization");
  next();
});

// Create our Express router
var router = express.Router();



app.use(express.static(__dirname + "/public"));
console.log(__dirname + "/public");

router.route('/').get(function(req, res){
	res.send("hello world");
});

router.route('/getNumber/:myjsonid').get(function(req,res){
	//correctly gets the param value
	//res.send(req.param('myjsonid'));
	
	//get the remote json
	console.log('https://api.myjson.com/bins/'+myNumbersJson);
		
			var body = {}
			if(process.cwd().substring(process.cwd().length-13, process.cwd().length)!=='DMVHelperTest'){
				body = JSON.parse(fs.readFileSync('myNumbers.json', 'utf8'));
			} else {
				body = JSON.parse(fs.readFileSync('../../myNumbers.json', 'utf8'));
			}
			var callNumber = "";
			var gitRepo = "";

	
			for(var i = 0; i<body.length; i++){
				if(!body[i].taken){
					callNumber = body[i].number;
					gitRepo = body[i].repo;
					body[i].taken = true;
					console.log("foundTaken");
					break;
				}
			}
			

			console.log(JSON.stringify(body));
			if(process.cwd().substring(process.cwd().length-13, process.cwd().length)!=='DMVHelperTest'){
				fs.writeFileSync('myNumbers.json', JSON.stringify(body));
			} else {
				fs.writeFileSync('../../myNumbers.json', JSON.stringify(body));
			}
			console.log("in return function");
			pushCommit(gitRepo, req.param('myjsonid'), res, callNumber);


			

});



//GITHUB PUSHER
// starting a new repo
function pushCommit(gitRepo, jsonid, res, callNumber){
	//make Directory
		//cd into it

		if(process.cwd().substring(process.cwd().length-13, process.cwd().length)!=='DMVHelperTest'){
			process.chdir('pushFolder/DMVHelperTest');
		}

		//write a file
		fs.readFile('src/main.lua', function read(err, data) {
		    if (err) {
		        throw err;
		    }
		    
		    fs.writeFile("src/main.lua", (""+data).replace(/myJsonId = \"\w*\"/g, "myJsonId = \""+jsonid +"\""), function(err) {
			    if(err) {
			        return console.log(err);
			    }
				console.log("wrote");
				//commit the file
				
				require('simple-git')()
				.add('./*')
				.commit("first commit!")
				.removeRemote('origin')
		     	 .addRemote('origin', gitRepo, function(err, update){
					  if(err){
						  console.log(err);
						  return;
					  }
					  require('child_process').exec('git push -f origin master');
					  console.log("remote added!");
				  });
			

				
				res.send(callNumber);
				
			}); 
		});
}

// Register all our routes with /api
app.use('/', router);
var port = process.env.PORT || 3000;
// Start the server
app.listen(port);