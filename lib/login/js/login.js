
//TEST
let test_req_get = async () => {


	let response = await fetch("/api/gettest?id=hi&user=tim", {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
		},
	});

}

//TEST

let logon = async () => {
	//let user = document.getElementById("input_user").value;
	//let password = document.getElementById("input_password").value;
	let user = "ramin";
	let password = "ramin";

	let logondata = {
		user: user,
		password: password
	};

	await fetch("/api/login/logon", {
		method: 'POST',
		headers: {
			'Accept': 'application/json'
		},
		body: JSON.stringify(logondata),
	});

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
