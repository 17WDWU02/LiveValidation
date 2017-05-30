$(document).ready(function(){

	var ValidFirstName = false;
	var ValidLastName = false;
	var ValidEmail = false;
	var ValidPassword = false;
	var ValidConfirmPassword = false;

	$("#submitButton").click(function(event){
		event.preventDefault();
		if(ValidFirstName === true && ValidLastName === true){
			$("#LiveValidation").submit();
		}
	});

	$("#firstName")
		.focus(function(){

		}).blur(function(){

		}).keyup(function(){
			var FirstNameRules = ["required", "min:5", "max:20"];
			ValidFirstName = validate($(this), FirstNameRules);
		})

	$("#lastname")
		.focus(function(){

		}).blur(function(){

		}).keyup(function(){
			var lastNameRules = ["required", "min:2", "max:10"];
			ValidLastName = validate($(this), lastNameRules);
		})
});

function validate(element, rules){
	var valid = true;
	element.parent().find('span.input-errors').empty();
	for (var i = 0; i < rules.length; i++) {
		var pattern = /[:]\w/;
		if(rules[i].match(pattern)){
			var split = rules[i].split(':');
			var rule = split[0];
			var value = parseInt(split[1]);
		} else {
			var rule = rules[i];
		}

		switch(rule){
			case "required":
				if(element.val().length === 0){
					valid = false;
					element.parent().find('span.input-errors').text('This field is required');
					return valid;
				}
			break;
			case "min":
				if(element.val().length < value){
					valid = false;
					element.parent().find('span.input-errors').text('This field must be more than ' + value + ' characters');
					return valid;
				}
			break;
			case "max":
				if(element.val().length > value){
					valid = false;
					element.parent().find('span.input-errors').text('This field must be less than ' + value + ' characters');
					return valid;

				}
			break;
			case "email":

			break;
			case "password":

			break;
		}
	};
	return valid;
}
















