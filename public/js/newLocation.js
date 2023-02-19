const newFormHandler = async (event) => {
	event.preventDefault();

	const surf_spot = document.querySelector("#surf-spot-name").value.trim();
	const location = document.querySelector("#location").value.trim();
	const Type = document.querySelector("#type").value.trim();
	const optimal_swell_direction = document
		.querySelector("#optimal-swell-direction")
		.value.trim();
	const optimal_wind = document.querySelector("#optimal-wind").value.trim();
	const optimal_swell_size = document
		.querySelector("#optimal-swell-size")
		.value.trim();
	const optimal_tide = document.querySelector("#optimal-tide").value.trim();

	if (
		surf_spot &&
		location &&
		Type &&
		optimal_swell_direction &&
		optimal_wind &&
		optimal_swell_size &&
		optimal_tide
	) {
		const response = await fetch(`/api/locations`, {
			method: "POST",
			body: JSON.stringify({
				surf_spot,
				location,
				Type,
				optimal_swell_direction,
				optimal_wind,
				optimal_swell_size,
				optimal_tide,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});
		console.log(response);
		if (response.ok) {
			document.location.replace("/locations");
		} else {
			alert("Failed to create a new location");
		}
	}
};

document
	.querySelector(".new-location-form")
	.addEventListener("submit", newFormHandler);










