let logon = async () => {

	//get the div for the messages to the user
	let message_div = document.getElementById("message");
	//set it to empty
	message_div.innerHTML = "";

	//get the user inputs from the html page
	let user = document.getElementById("input_user").value;
	let password = document.getElementById("input_password").value;
	let remember = document.getElementById("input_remember").checked;

	//create an object for the login data
	let logondata = {
		user: user,
		password: password,
		remember: remember,
	};


	//check the parameters
	if (!logondata.user) {//if no user name was provieded
		message_div.innerHTML = "Please enter User";
	} else if (!logondata.password) {//if no password was provided
		message_div.innerHTML = "Please enter password";
	}

	//send the logon data to the server
	let response = await fetch("/api/login/logon", {
		method: 'POST',
		headers: {
			'Accept': 'application/json'
		},
		body: JSON.stringify(logondata),
	});

	//get the response from the server
	let login_response = await response.json()

	if (login_response.LoginSuccessfull) {//if login is successfull, redirect the user
		console.log("redirect");
		document.cookie = "UserToken=" + login_response.UserToken;
	} else {//else write the reponse from the server into the message div
		message_div.innerHTML = login_response.Message;
	}

}

let auto_logon = async () => {

	//try to get the user token from the cookies
	let user_token = {
		UserToken: getCookieValue("UserToken"),
	}

	//if there is no token, leave the function
	if (!user_token.UserToken) {
		return;
	}

	//send the token to the sever to check for auto logon
	let response = await fetch("/api/login/auto_logon", {
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

let addEventListeners = () => {
	console.log("add events listeners");

	//login button
	document.getElementById("login_button").addEventListener("click", () => {
		console.log("button clicked");
		logon();

	});

}	

document.addEventListener("DOMContentLoaded", () => {
	addEventListeners();	
	auto_logon();
});
