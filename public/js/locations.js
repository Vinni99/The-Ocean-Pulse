const addLocationFormHandler = async (event) => {
	event.preventDefault();
	document.location.replace("/addlocation");


document
	.querySelector("location-btn")
	.addEventListener("submit", addLocationFormHandler);