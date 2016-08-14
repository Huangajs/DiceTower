var currentUser = 1;

window.onload = function() {
	createDiceButtons();
	createDiceButtons2();
	createNameTags();
}

function createDiceButtons() {
	var body = document.getElementsByTagName("section")[0];
	var i;
	for(i = 1; i < 7; i++){
		var s = document.createElement("input");
		s.src = "static/"+i+".png";
		s.type = "image";
		s.id = i;
		s.onclick = function() {diceClick(this.id)};
		body.appendChild(s);
	}
}

function createDiceButtons2() {
	var body = document.getElementsByTagName("section")[1];
	var i;
	for(i = 1; i < 7; i++){
		var s = document.createElement("input");
		var adjust = i + 6;
		s.src = "static/"+adjust+".png";
		s.type = "image";
		s.id = adjust;
		s.onclick = function() {diceClick(this.id)};
		body.appendChild(s);
	}
}

function createNameTags() {
	var body = document.getElementsByTagName("section")[2];
	var i;
	for(i = 1; i < 6; i++){
		var s = document.createElement("input");
		s.id = "name"+i;
		s.onclick = function() {userFunction(this.id)};
		body.appendChild(s);
	}
	setNames();
	document.getElementById("name1").focus();
}

function setNames(){// temp function
	var userName = ["Alex", "Amy", "Jason", "Jesse", "Jon"];
	var i;
	for( i = 1; i < 6; i++){
		var elementName = "name"+i;
		console.log("set element " + elementName + " to " + userName[i-1]);
		document.getElementById(elementName).value = userName[i-1];
	}
}

var rollCount = diceRolls();

function diceClick(input) {
    document.getElementById("demo").innerHTML = "Rolled a " + input;
	
    var node = document.createElement("LI");
	var curName = "name"+currentUser;
	var text = document.getElementById(curName).value + " rolled a " + input;
    var textnode = document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);		
	
	diceFunction();
	
}

function userFunction(input) {
	// console.log("got this thing " , document.getElementById(input).value);
	var current = input.substr(4,5);
	currentUser = current;
	console.log("user function int " + current);
	document.getElementById(input).focus();
	
}

function diceFunction(){
	// var order = document.getElementById("order").value;
	// document.getElementById("demo").innerHTML = "Test";
	if(currentUser > 4) currentUser = 0;
	currentUser++;

	var curName = "name"+currentUser;
	// console.log("current name is " + test);
	document.getElementById(curName).focus();
	
	// console.log("document.activeElement.value " + document.activeElement.value);
	
}

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
	this.previous;
	this.next;
}

// var diceHistory = {
// 	numOfRolls: 0,
// 	getNumOfRolls: function (){return }
//
// }

function diceRolls(){
	var dice = 0;
	return {
		getRoll: function(){
			return dice;
		},
		increaseRoll: function(){
			return ++dice;
		}
	}
}
