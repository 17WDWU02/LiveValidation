$(document).ready(function(){

	var ValidFirstName = false;
	var ValidLastName = false;
	var ValidEmail = false;
	var ValidPassword = false;
	var ValidConfirmPassword = false;

	//When the submit button is pressed
	$("#submitButton").click(function(event){
		event.preventDefault();
	});


	$("#firstName")
		.focus(function(){
			if(required($(this))){
				ValidFirstName = false;
				return;
			} else if(minLen($(this), 5)){
				ValidFirstName = false;
				return;
			}
			ValidFirstName = true;
		}).blur(function(){

		}).keyup(function(){
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

	//Validate Email
	$("#email")
		.focus(function(){

		}).blur(function(){

		}).keyup(function(){

		});

	//Validate Password
	$("#password")
		.focus(function(){

		}).blur(function(){

		}).keyup(function(){

		});

	//Validate Confirm Password
	$("#confirmPassword")
		.focus(function(){

		}).blur(function(){

		}).keyup(function(){

		});


});

function required(element){
	if(element.val().length === 0){
		element.parent().find('span.input-errors').text('This field is required');
		return true;
	} else {
		element.parent().find('span.input-errors').empty();
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














