const getCookieValue = (name) => {
	return document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || '';
}

set_cookie = () => {
}

auth_user = async () => {
	console.log("auth user");
	
	//try to get the user token from the cookies
	let user_token = {
		UserToken: getCookieValue("UserToken"),
	}

	//if there is no token, leave the function
	if (!user_token.UserToken) {
		window.location.href = "http://alizadehkashani.de:7878/login.html";
		return;
	}

	//send the token to the sever to check for auto logon
	let response = await fetch("/api/auth/auth_user", {
		method: 'POST',
		headers: {
			'Accept': 'application/json'
		},
		body: JSON.stringify(user_token),
	});

	let auto_logon_response = await response.json();


	//if auto logon was successfull, redirect the user
	if (auto_logon_response.AuthenticationSuccessfull) {
		console.log("redirect");
	}


}
