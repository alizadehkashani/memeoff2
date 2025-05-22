let addEventListeners = () => {
	console.log("add events listeners");

	//login button
	document.getElementById("button_login").addEventListener("click", () => {
		console.log("button clicked");
		test_req_get();

	});

}	

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



document.addEventListener("DOMContentLoaded", () => {
	addEventListeners();	
});

