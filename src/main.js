function getPassword() {
	var chars = "0123456789ABCDEFGHIJKLMNOPRSTUVWXYZbcdefghijklmnopqrstuvwxyz!@#$%&*(){}[]=<>/,.";
	var passwordLength = 10;
	var password = "";

	for (var i = 0; i < passwordLength; i++){
		var randomNumber = Math.floor(Math.random() * chars.length);
		password += chars.substring(randomNumber,randomNumber + 1);

	}
	document.getElementById("password").value = password;
}

// ig-click redirect
let igAction = document.querySelector(".igAction");
igAction.addEventListener("click", () => {
	location.href = "https://www.instagram.com/psycodes/";
});