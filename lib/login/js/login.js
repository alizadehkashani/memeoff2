let logon = async () => {
	let user = document.getElementById("input_user").value;
	let password = document.getElementById("input_password").value;
	let remember = document.getElementById("input_remember").checked;

	let logondata = {
		user: user,
		password: password,
		remember: remember,
	};

	console.log(logondata);

	let response = await fetch("/api/login/logon", {
		method: 'POST',
		headers: {
			'Accept': 'application/json'
		},
		body: JSON.stringify(logondata),
	});

	let login_response = await response.json()

	console.log(login_response);
	console.log(login_response.LoginSuccessfull);

	if (login_response.LoginSuccessfull) {
		console.log("redirect");
		document.cookie = "UserToken=" + login_response.UserToken;
	} else {
		let message_div = document.getElementById("message");
		message_div.innerHTML = login_response.Message;
	}

	console.log(document.cookie);
	console.log(getCookieValue("UserToken"));

}

let auto_logon = async () => {
	console.log(getCookieValue("UserToken"));

	let user_token = {
		UserToken: getCookieValue("UserToken"),
	}

	let response = await fetch("/api/login/auto_logon", {
		method: 'POST',
		headers: {
			'Accept': 'application/json'
		},
		body: JSON.stringify(user_token),
	});

	let auto_logon_response = await response.json();

	console.log(auto_logon_response);

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
