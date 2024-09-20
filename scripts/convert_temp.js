window.addEventListener("DOMContentLoaded", domLoaded);

// When the DOM has finished loading, add the event listeners.
function domLoaded() {
	const ftable = document.getElementById("F_in");
	const ctable = document.getElementById("C_in");
	const submit = document.getElementById("convertButton");
   // TODO: Use addEventListener() to register a click event handler for the convert button.
   // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#add_a_simple_listener
	ftable.addEventListener("click", clearC);
	ctable.addEventListener("click", clearF);
	
	submit.addEventListener("click", update);
	
	
	
   // Add event listeners to handle clearing the box that WAS NOT clicked,
   // e.g., the element C_in listens for 'input', with a callback fn to
   // execute after that event does happen. 
   // You don't send arguments to the event handler function.
   // So, if you want the event handler to call another function that
   // DOES take arguments, you can send that other function as a callback.
   // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#event_listener_with_anonymous_function
   // Here is an example of anonymous event handler fn that calls alert with an argument:
   // document.getElementById("weatherIcon").addEventListener("click", function() {alert("You clicked the icon.")})

}
// TODO: (Part of the above is to write the functions to be executed when the event handlers are invoked.)
function clearC(){
	const ctable = document.getElementById("C_in"); 
	ctable.value = "";
}
function clearF(){
	const ftable = document.getElementById("F_in");
	ftable.value = "";
}
function convertCtoF(C) {
   // TODO: Return temp in °F. 
   // °F = °C * 9/5 + 32
	let F = 0;
  	F = C * 9 / 5 + 32;
	return F;
}

function convertFtoC(F) {
	
   // TODO: Return temp in °C. 
   // °C = (°F - 32) * 5/9
	let C = 0;
   	C = (F - 32) * 5 / 9;
	return C;
}
function update(){
	const ftable = document.getElementById("F_in");
	const ctable = document.getElementById("C_in");
	const message = document.getElementById("message");
	message.innerHTML = "";
	if(ctable.value == ""){
		if(ftable.value == ""){
			
			message.innerHTML = "Please enter a temperature to be converted";
			updateImage(ftable.value);
		}
		else{
			ctable.value = convertFtoC(ftable.value);
			updateImage(ftable.value);
		}
	}
	else{
		ftable.value = convertCtoF(ctable.value);
		updateImage(ftable.value);
	}
	
}
function updateImage(F){
	alert(f)
	const icon = document.getElementById("weatherIcon")
   	if(F = ""){
	   icon.src = "images/C-F.png";
   	}
   	else if(F < -200){
   	   icon.src = "images/dead.png";
   	}
   	else if(F <= 32 && F >= -200){
   	   icon.src = "images/cold.png";
   	}
   	else if(F < 90 && F > 32){
		icon.src = "images/cool.png";
   	}
   	else if(F < 200 && F >= 90){
  	    icon.src = "images/hot.png";
   	}
   	else if(F >= 200){
   	   icon.src = "images/dead.png";
   	}
}
// TODO: write a fn that can be called with every temp conversion
// to display the correct weather icon.
// Based on degrees Fahrenheit:
// 32 or less, but above -200: cold
// 90 or more, but below 200: hot
// between hot and cold: cool
// 200 or more, -200 or less: dead
// both input fields are blank: C-F
