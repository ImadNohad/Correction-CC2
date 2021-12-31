var firstname = document.getElementById("txtFirstName");
var lastname = document.getElementById("txtLastName");
var email = document.getElementById("txtEmail");
var password = document.getElementById("txtPassword");
var form = document.getElementById("registerForm");
var btnClaim = document.getElementById("btnClaim");

form.addEventListener("submit", function (e) {
	e.preventDefault();

	if (firstname.value === "") {
		AddError(firstname, "First Name cannot be empty");
	} else {
		AddSuccess(firstname);
	}

	if (lastname.value === "") {
		AddError(lastname, "Last Name cannot be empty");
	} else {
		AddSuccess(lastname);
	}

	if (email.value === "") {
		AddError(email, "Email cannot be empty");
	} else if (!email.value.match(/^[a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]+\.[a-z]{2,}$/)) {
		AddError(email, "Looks like this is not an email");
	} else {
		AddSuccess(email);
	}

	if (password.value === "") {
		AddError(password, "Password cannot be empty");
	} else {
		AddSuccess(password);
	}
});

function AddError(input, message) {
	var small = input.parentElement.querySelector("small");
	small.textContent = message;
	input.parentElement.classList.add("error");
}

function AddSuccess(input) {
	input.parentElement.classList.remove("error");
}
