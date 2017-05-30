$(document).ready(function(){

	//By default all of the input fields won't be valid as they would be empty
	//Set all varaibles to false
	var ValidFirstName = false;
	var ValidLastName = false;
	var ValidEmail = false;
	var ValidPassword = false;
	var ValidConfirmPassword = false;

	//When the submit button is pressed
	$("#submitButton").click(function(event){
		event.preventDefault();
		//The form should only submit when all of the input field variables are true
		if(ValidFirstName === true && ValidLastName === true){
			$("#LiveValidation").submit();
		}
	});

	//Validate First name
	//Both the sections in the focus and the keyup function run the same thing
	//even though they are written differentlu
	$("#firstName")
		.focus(function(){
			//For if statements you dont need to give a = value
			//If you leave it then the code will assume you want it to be true
			//if(x=true) and if(x) both mean the same thing and are expecting the value of true
			//This line calls the required function and passes through the current element (Go to required function) 
			if(required($(this))){
				//If the value of true gets returned from the required function then proceed with these lines
				ValidFirstName = false;
				return;
			} else if(minLen($(this), 5)){
				ValidFirstName = false;
				return;
			}
			//If all of the functions return a value of false then it will skip all of the if statements
			//Then we just want to turn ValidFirstName to true;
			ValidFirstName = true;
		}).blur(function(){

		}).keyup(function(){
			//This is another short hand way of writing an if statement.
			//all it says is if the function returns a value of true then to return out of the keyup function
			//does the exact same thing as the if statements above
			if(required($(this))) return;
			if(minLen($(this), 5)) return;
			ValidFirstName = true;
		})

	//Validate LastName
	$("#lastname")
		.focus(function(){
			required($(this));
			minLen($(this), 10);
		}).blur(function(){

		}).keyup(function(){
			minLen($(this), 10);
		})


});

function required(element){
	//the required function is looking for a value to be passed through it
	//we have been passing $(this) which means that whatever value you pass through it becomes element
	if(element.val().length === 0){
		//Check to see if there is anything in the input field
		//If there isnt then add the error code
		element.parent().find('span.input-errors').text('This field is required');
		//Because we are writing a short hand if statement, it is looking for a value of true to be able
		//to continue with the statement.
		//What we are doing is we want to return a value back to it and it should be true or false
		//if we return true then we are saying that there is errors so then whatever is in the if statement will run
		return true;
	} else {
		//If the value is more than 0 characters then we want to empty the span
		element.parent().find('span.input-errors').empty();
		//Because we are writing a short hand if statement, it is looking for a value of true to be able
		//to continue with the statement.
		//What we are doing is we want to return a value back to it and it should be true or false
		//if we return false then we are saying that there are no errors so then whatever is in the if statement won't run
		return false;
	}
}

function minLen(element, value){
	if(element.val().length < value){
		element.parent().find('span.input-errors').text('This field must be more than ' + value);
		return true;
	} else {
		element.parent().find('span.input-errors').empty();
		return false;
	}
}














