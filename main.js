// Values
var zero = document.querySelector('#zero');
var one = document.querySelector('#one');
var two = document.querySelector('#two');
var three = document.querySelector('#three');
var four = document.querySelector('#four');
var five = document.querySelector('#five');
var six = document.querySelector('#six');
var seven = document.querySelector('#seven');
var eight = document.querySelector('#eight');
var nine = document.querySelector('#nine');


function addvalue(number){
	var addinput = document.querySelector("#mydisplay");
	addinput.value += number;
};


zero.addEventListener("click", function(){
	if (document.querySelector("#mydisplay").value != 0){
		addvalue('0');
	}
});
one.addEventListener("click", function (){
	addvalue('1');
});
two.addEventListener("click", function(){
	addvalue('2');
});
three.addEventListener("click", function(){
	addvalue('3');
});
four.addEventListener("click", function(){
	addvalue('4');
});
five.addEventListener("click", function(){
	addvalue('5');
});
six.addEventListener("click", function(){
	addvalue('6');
});
seven.addEventListener("click", function(){
	addvalue('7');
});
eight.addEventListener("click", function(){
	addvalue('8');
});
nine.addEventListener("click", function(){
	addvalue('9');
});


// Operations
var clear = document.querySelector("#clear");
var divide = document.querySelector("#divide");
var multiply = document.querySelector("#multiply");
var add = document.querySelector("#add");
var subtract = document.querySelector("#subtract");
var dot = document.querySelector("#dot");
var rightp = document.querySelector("#rightp");
var leftp = document.querySelector("#leftp");


clear.addEventListener("click", function(){
	var remover = document.querySelector("#mydisplay");
	remover.value = "";
});

divide.addEventListener("click", function(){
	addvalue('/');
});
multiply.addEventListener("click", function(){
	addvalue('*');
});
add.addEventListener("click", function(){
	addvalue('+');
});
subtract.addEventListener("click", function(){
	addvalue('-');
});
dot.addEventListener("click", function(){
	addvalue('.');
});
leftp.addEventListener("click", function(){
	addvalue('(');
});
rightp.addEventListener("click", function(){
	addvalue(')');
});


// Result
var equals = document.querySelector("#equals");

 equals.addEventListener("click", function(){
	var total = document.querySelector("#mydisplay");
	var result = eval(total.value);
	document.querySelector("#mydisplay").value = result;
});






