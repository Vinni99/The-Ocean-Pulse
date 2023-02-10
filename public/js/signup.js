const signupFormHandler = async (event) => {
<<<<<<< HEAD
    event.preventDefault();
    const name = document.querySelector("#name-signup").value.trim();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();
    if (name && email && password) {
        const response = await fetch("/api/user/signup", {
            method: "POST",
            body: JSON.stringify({ name, email, password }),
            headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
            document.location.replace("/login");
        } else {
            alert(response.statusText);
        }
    }
=======
	event.preventDefault();

	const name = document.querySelector("#name-signup").value.trim();
	const email = document.querySelector("#email-signup").value.trim();
	const password = document.querySelector("#password-signup").value.trim();

	if (name && email && password) {
		const response = await fetch("/api/user/signup", {
			method: "POST",
			body: JSON.stringify({ name, email, password }),
			headers: { "Content-Type": "application/json" },
		});

		if (response.ok) {
			document.location.replace("/login");
		} else {
			alert(response.statusText);
		}
	}
>>>>>>> f09f7aeca3376a1b9c4516358cc2071ef8bb9578
};
document
    .querySelector(".signup-form")
    .addEventListener("submit", signupFormHandler);
