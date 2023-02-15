

const homeBtn = document.querySelector("#home-btn").innerHTML;
const loginBtn = document.querySelector("#login-btn").innerHTML;
const logoutBtn = document.querySelector("#logout-btn").innerHTML;
const locationBtn = document.querySelector("#location-btn").innerHTML;


// function runHome ()
// { Handlebars.compile(homeBtn)
// }

 const response = await fetch(`/comment`, {
    method: 'POST',
    body: JSON.stringify({
      dish_name,
      description,
      guest_name,
      has_nuts,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to add comment');
  }




document
	.getElementById("#home-button")
	.addEventListener("click", async (e) => {
		try {
			let response = await fetch("/home");
			let data = await response.json();
			// document.getElementById("home").innerHTML = data.home;
		} catch (e) {
			console.log(e);
			alert("Request for home page failed.");
		}
	});

    document
			.getElementById("#login-button")
			.addEventListener("click", async (e) => {
				try {
					let response = await fetch("/login");
					let data = await response.json();
					// document.getElementById("home").innerHTML = data.home;
				} catch (e) {
					console.log(e);
					alert("Request for login page failed.");
				}
			});

  document
		.getElementById("#logout-button")
		.addEventListener("click", async (e) => {
			try {
				let response = await fetch("/logout");
				let data = await response.json();
				// document.getElementById("home").innerHTML = data.home;
			} catch (e) {
				console.log(e);
				alert("Request for logout page failed.");
			}
		});  
        
  document
		.getElementById("#locations-button")
		.addEventListener("click", async (e) => {
			try {
				let response = await fetch("/locations");
				let data = await response.json();
				// document.getElementById("home").innerHTML = data.home;
			} catch (e) {
				console.log(e);
				alert("Request for locations page failed.");
			}
		});       