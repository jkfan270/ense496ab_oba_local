// Registration
$(document).on('submit', '#signup', function(){
    let email = $('#email').val()
    let role = $('#role').val()
	let password = $('#password').val()
	const faculty = $('#faculty').val()

    let json_data_register = {email, role, password, faculty};

    $.ajax({
		type:'POST', 
		data: JSON.stringify(json_data_register), 
		dataType: 'json', 
    	contentType: 'application/json',
    	url: baseUrl + "/users", 
    	success: function(result){
			setTimeout(function() {
				window.location.href = "login.html";
			}, 500);
		  },
		  error: function(err){
    		window.alert("Signup failed, please try again.");
    	}
	});
	return false;
  });

// Login
$(document).on('submit', '#login', function(){
    let email = $('#email').val()
    let password = $('#password').val()

    let json_data_login = {"user": {"email" : email, "password": password}};

    $.ajax({
		type:'POST', 
		data: JSON.stringify(json_data_login), 
		dataType: 'json', 
    	contentType: 'application/json',
    	url: baseUrl + "/users/login", 
    	success: function(result){
			let user_name = result.result.email;
			let user_role = result.result.role;
			window.localStorage.setItem('oba-token', result.result.token)
            setTimeout(function(){
            window.location.href = "dashboard.html";
			}, 500);
			$('#user_name').append(user_name);
			$('#user_role').append(user_role);
		  },
		  error: function(err){
    		window.alert("Login failed, please try again.");
    	}
	});
	return false;
  });
  
  // Get all indicators
  // Get all graduate attributes
  // Get all questions