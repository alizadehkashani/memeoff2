let addEventListeners = () => {
	console.log("add events listeners");

	//login button
	document.getElementById("button_login").addEventListener("click", () => {
		console.log("button clicked");

	});

}

document.addEventListener("DOMContentLoaded", () => {
	addEventListeners();	
});

