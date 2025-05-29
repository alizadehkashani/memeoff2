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

}

let addEventListeners = () => {
	console.log("add events listeners");

	//login button
	document.getElementById("button_login").addEventListener("click", () => {
		console.log("button clicked");
		logon();

	});

}	

document.addEventListener("DOMContentLoaded", () => {
	addEventListeners();	
});
