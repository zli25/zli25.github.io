$(function(){
	$(".fancy").fancybox({
			maxWidth	: 800,
			closeBtn	: true,
			fitToView	: false,
			width		: '70%',
			height		: 'auto',
			autoSize	: false,
			closeClick	: false,
			openEffect	: 'elastic',
			closeEffect	: 'elastic',


			helpers : {
	    		title : {
	    			type : 'inside'
	    		}
	    	}
		});





	$("#name").blur(function(){
		checkName($(this));

	});

	$("#email").blur(function(){
		checkEmail($(this));

	});

	$("#phone").blur(function(){
		checkPhone($(this));

	});

	$("#message").blur(function(){
		checkMessage($(this));

	});


/*$("#email").blur(function(){

	alert("hello!");
});*/



function checkName($obj){
		if ($obj.val() == "") {
				$obj.nextAll("span").html("* Please enter your name");
				$obj.addClass("warning");
				return false;
			} else {
				$obj.nextAll("span").empty();
				$obj.removeClass("warning");
				return true;
			}
	}



function checkEmail($obj){
		var $email =/^[a-zA-Z0-9]+([._\\-]*[a-zA-Z0-9])*@([a-zA-Z0-9]+[-a-zA-Z0-9]*[a-zA-Z0-9]+.){1,63}[a-zA-Z0-9]+$/
		if ($obj.val()=="") {
			$obj.nextAll("span").html("* Please enter your email");
			$obj.addClass("warning");
			return false;
		} else if ($email.test($obj.val()) == false) {
			$obj.nextAll("span").html("* Invalid email, please enter your valid email");
			$obj.addClass("warning");
			return false;
			return false;
		} else {
			$obj.nextAll("span").empty();
			$obj.removeClass("warning");
			return true;
		}
	}



	function checkPhone($obj){

		$phone = /^\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})$/;
		if ($obj.val() == "") {
			$obj.nextAll("span").html("* Please enter your phone number");
			$obj.addClass("warning");
			return false;
			} else if ($phone.test($obj.val()) == false){
				$obj.nextAll("span").html("* Invalid phone number, please enter your valid phone number");
				$obj.addClass("warning");
				return false;
			}else {
				$obj.nextAll("span").empty();
				$obj.removeClass("warning");
				return true;
			}
	}


	function checkMessage($obj){
		if ($obj.val() == "") {
				$obj.nextAll("span").html("* Please enter your message");
				$obj.addClass("warning");
				return false;
			} else {
				$obj.nextAll("span").empty();
				$obj.removeClass("warning");
				return true;
			}
	}


	$("#contact-submit").click(function(){

		var jsonInfo = {
				"Name":$("#name").val(), 
				"email":$("#email").val(),
				"phone":$("#phone").val(),
				"message":$("#message").val()
			};

		if(checkName($("#name")))
			if(checkEmail($("#email")))
				if(checkPhone($("#phone")))
					if(checkMessage($("#message")))
					{

						$.ajax({
		                    type:"POST",
		                    url:"../logic.php",
		                    data:$('#contact-form').serialize(),
		                    success: function() {
		                    	$("#contact-form .panel").addClass("panel-success"); 
		                       $("#contact-form .panel .panel-heading h3").html("Hi "+jsonInfo.Name.split(' ')[0]+":");
		                       $("#contact-form .panel .panel-body").empty().html("<p style='font-size:1.5em;'>"+"Thank you very much for contacting me, I'll get back to you soon!"+ "</p>");
		                    } 

                		});    

					}
		return false;

	});


	$('#nav a, #introduction a').click(function(e){
		e.preventDefault();

		$('body').scrollTo( $($(this).attr("href")), 1000);
	});
	/*$('#nav a').on('click', function(event) {
    var target = $(this.href);
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }*/


})



