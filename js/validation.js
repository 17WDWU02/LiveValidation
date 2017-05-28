$(document).ready(function(){

	var ValidFirstName = false;
	var ValidPassword = false;

	//When the submit button is pressed
	$("#submitButton").click(function(event){
		event.preventDefault();
	});

	//Blur is when you have left an element
	$("#firstName").blur(function(){
		var firstNameErrors = $(this).parent().find('span.input-errors');
		firstNameErrors.empty();
		//This element is required
		if($(this).val().length === 0){
			firstNameErrors.text("This field is required").removeClass("success").addClass("error");
			return;
		}
		//Min Length 5
		if($(this).val().length < 5){
			firstNameErrors.text("This field requires at least 5 characters").removeClass("success").addClass("error");
			return;
		}
		//Max Length 20
		if($(this).val().length > 20){
			firstNameErrors.text("This field cannot be more than 20 characters").removeClass("success").addClass("error");
			return;
		}
		firstNameErrors.text("There are no errors").removeClass("error").addClass("success");
		ValidFirstName = true;
	});












	//Validate Password
	//Focus is when you are actually in an element
	$("#password")
		.focus(function(){
		if($(this).val().length === 0){
			$(this).parent().find('span.input-errors').empty();
			$(this).parent().find('span.input-errors').append("<ul class='error'></ul>");
			$(this).parent().find('span.input-errors ul').append(
					"<li class='required'>This is required</li>"+
					"<li class='min'>Must be at least 6 characters</li>"+
					"<li class='uppercase'>Must include at least 1 Uppercase character</li>"+
					"<li class='numbers'>Must include at least 3 Numbers</li>"+
					"<li class='special'>Must include at least 1 Special Character</li>"

					)
			}
		}).blur(function(){

		}).keyup(function(){
			console.log($(this).val());
			if($(this).val().length !== 0 ){
				$(this).parent().find('span.input-errors .required').remove();
			} else if( ($(this).val().length === 0) && ( $("li.required").length === 0) ) {
				$(this).parent().find('span.input-errors ul').append("<li class='required'>This is required</li>");
			}
		});



















});