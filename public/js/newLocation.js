const newFormHandler = async (event) => {
    event.preventDefault();

    const surfSpot = document.querySelector('#surf-spot-name').value.trim();
    const locationName = document.querySelector('#location-name').value.trim();
    const beachType = document.querySelector('#beach-type').value.trim();
    const optimalSwellDirection= document.querySelector('#optimal-swell-direction').value.trim();
    const optimalWind = document.querySelector('#optimal-wind').value.trim();
    const optimalSwellSize = document.querySelector('#optimal-swell-size').value.trim();
    const optimalTide = document.querySelector('#optimal-tide').value.trim();

    if (surfSpot && locationName && beachType && optimalSwellDirection &&
        optimalWind && optimalSwellSize && optimalTide) {
  
        const response = await fetch(`/api/locations`, {
          method: 'POST',
          body: JSON.stringify({
            surfSpot,
            locationName,
            beachType,
            optimalSwellDirection,
            optimalWind,
            optimalSwellSize
          })
        })
    } }
