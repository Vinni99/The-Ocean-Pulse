
const locationData = [
	{
		surf_spot: "Ocean Beach",
		location: "San Francisco, CA",
		type: "Beach - sand bottom with shifting peaks",
		optimal_swell_direction: "NW, W, SW",
		optimal_wind: "light to none - up to 10mph NE",
		optimal_swell_size:
			"Waist high to double-overhead (note: can handle much bigger but becomes impossible to paddle out)",
		optimal_tide: "All-tides",
	},

	{
		surf_spot: "Mavericks",
		location: "Half Moon Bay, CA",
		type: "Reef - rock bottom",
		optimal_swell_direction: "NW, W, SW",
		optimal_wind: "light to none - up to 10mph NE",
		optimal_swell_size:
			"Minimum size triple overhead.  Can handle and routinely sees days up to 5-6x overhead",
		optimal_tide: "Low to Mid",
	},
	{
		surf_spot: "Malibu",
		location: "Malibu, CA",
		type: "Point - Sand Bottom",
		optimal_swell_direction: "S, SW, WSW",
		optimal_wind: "N, NW",
		optimal_swell_size: "Waist High to Double Overhead",
		optimal_tide: "Mid",
	},
	{
		surf_spot: "The Wedge",
		location: "Newport Beach, CA",
		type: "Beach - Sand Bottom",
		optimal_swell_direction: "SW, SSW, S, SSE",
		optimal_wind: "NE, E, SE",
		optimal_swell_size: "Double overhead to 5x overhead",
		optimal_tide: "Low to Mid",
	},
	{
		surf_spot: "Pismo Beach Pier",
		location: "Pismo Beach, CA",
		type: "Reef - rock bottom",
		optimal_swell_direction: "Shorter period W or NW or long period SW",
		optimal_wind: "E, NE, or none",
		optimal_swell_size: "Waist high to overhead",
		optimal_tide: "Low to Mid",
	},
	{
		surf_spot: "Rincon",
		location: "Santa Barbara, CA",
		type: "Point / Rivermouth - cobblestone",
		optimal_swell_direction: "W, WSW, WNW",
		optimal_wind: "N, NE",
		optimal_swell_size: "Head high to double overhead",
		optimal_tide: "Low",
	},
	{
		surf_spot: "Huntington Beach Pier",
		location: "Huntington Beach, CA",
		type: "Beach - sand bottom",
		optimal_swell_direction: "SSE, S, SW, WSW, W, WNW",
		optimal_wind: "NE Santa Anas",
		optimal_swell_size: "Shoulder hight to 3 ft. overhead",
		optimal_tide: "Mid",
	},
	{
		surf_spot: "San Onofre Beach",
		location: "San Clemente, CA",
		type: "Beach - cobblestone & sand",
		optimal_swell_direction: "NW, W, SW",
		optimal_wind: "NE or none",
		optimal_swell_size: "Waist high to overhead",
		optimal_tide: "Low to Mid",
	},
	{
		surf_spot: "Asilomar Beach",
		location: "Pacific Grove, CA",
		type: "Beach - sand with some rocks",
		optimal_swell_direction: "NW, W, SW, N",
		optimal_wind: "E, SE",
		optimal_swell_size: "Waist high - 2x overhead",
		optimal_tide: "Low to Mid",
	},
	{
		surf_spot: "Cardiff Reef",
		location: "San Diego, CA",
		type: "Reef - rock bottom",
		optimal_swell_direction: "NW, W",
		optimal_wind: "light to none - E if any wind",
		optimal_swell_size: "Waist high to a few feet overhead",
		optimal_tide: "Low to Mid",
	},
	{
		surf_spot: "Oceanside Pier",
		location: "San Diego, CA",
		type: "Beach/Pier - sand bottom",
		optimal_swell_direction: "SSW, SW, W, WNW",
		optimal_wind: "E, NE",
		optimal_swell_size: "Shoulder high to 3 ft. overhead",
		optimal_tide: "Mid",
	},
	{
		surf_spot: "Doheny Beach",
		location: "Dana Point, CA",
		type: "Beach - mix of rocks and sand",
		optimal_swell_direction: "SSE, S, SW",
		optimal_wind: "NE",
		optimal_swell_size: "Waist to head high",
		optimal_tide: "Mid",
	},
	{
		surf_spot: "Lower Trestles",
		location: "San Clemente, CA",
		type: "Beach/Rivermouth - mix of sand and rocks",
		optimal_swell_direction: "S, SW",
		optimal_wind: "E, NE",
		optimal_swell_size: "Shoulder high to double overhead",
		optimal_tide: "Mid",
	},
	{
		surf_spot: "Blacks Beach",
		location: "San Diego, CA",
		type: "Beach - sand bottom",
		optimal_swell_direction: "NW, W, SW",
		optimal_wind: "E, SE",
		optimal_swell_size: "chest high to 3x overhead",
		optimal_tide: "Low to Mid",
	},
	{
		surf_spot: "Windandsea Beach",
		location: "La Jolla, CA",
		type: "Beach - mix of sand and rocks",
		optimal_swell_direction: "NW, WNW, SW, SSW,",
		optimal_wind: "E",
		optimal_swell_size: "Chest high to double overhead",
		optimal_tide: "All",
	},
	{
		surf_spot: "Swamis",
		location: "Encinitas, CA",
		type: "Beach - mix of sand and rocks",
		optimal_swell_direction: "W, NW",
		optimal_wind: "none or E",
		optimal_swell_size: "Waist high to double overhead",
		optimal_tide: "Low to Mid",
	},
	{
		surf_spot: "Pleasure Point",
		location: "Santa Cruz, CA",
		type: "Point - rock/reef and sand mix",
		optimal_swell_direction: "SSW, SW, W, WNW",
		optimal_wind: "NE, N, NW, or none",
		optimal_swell_size: "Chest high to double overhead",
		optimal_tide: "All - best on mid incoming",
	},
	{
		surf_spot: "Steamer Lane",
		location: "Santa Cruz, CA",
		type: "Beach - mix of sand and rocks",
		optimal_swell_direction: "W, S, NW",
		optimal_wind: "NE, N, NW or none",
		optimal_swell_size: "Waist high to double overhead",
		optimal_tide: "Low to Mid",
	},
	{
		surf_spot: "Ventura Point",
		location: "Ventura, CA",
		type: "Point - rock/reef",
		optimal_swell_direction: "W, NW",
		optimal_wind: "E",
		optimal_swell_size: "Overhead to triple overhead",
		optimal_tide: "Low",
	},
	{
		surf_spot: "Pacifica / Linda Mar Beach",
		location: "Pacifica, CA",
		type: "Beach - mix of sand and rocks",
		optimal_swell_direction: "W, NW, WNW",
		optimal_wind: "E",
		optimal_swell_size: "Waist high to overhead",
		optimal_tide: "Mid to high",
	},
];

module.exports = locationData;


// [
// 	{
// 		"surf_spot": "Ocean Beach",
// 		"location": "San Francisco, CA",
// 		"type": "Beach - sand bottom with shifting peaks",
// 		"optimal_swell_direction": "NW, W, SW",
// 		"optimal_wind": "light to none - up to 10mph NE",
// 		"optimal_swell_size":
// 			"Waist high to double-overhead (note: can handle much bigger but becomes impossible to paddle out)",
// 		"optimal_tide": "All-tides"
// 	},

// 	{
// 		"surf_spot": "Mavericks",
// 		"location": "Half Moon Bay, CA",
// 		"type": "Reef - rock bottom",
// 		"optimal_swell_direction": "NW, W, SW",
// 		"optimal_wind": "light to none - up to 10mph NE",
// 		"optimal_swell_size":
// 			"Minimum size triple overhead.  Can handle and routinely sees days up to 5-6x overhead",
// 		"optimal_tide": "Low to Mid"
// 	},
// 	{
// 		"surf_spot": "Malibu",
// 		"location": "Malibu, CA",
// 		"type": "Point - Sand Bottom",
// 		"optimal_swell_direction": "S, SW, WSW",
// 		"optimal_wind": "N, NW",
// 		"optimal_swell_size": "Waist High to Double Overhead",
// 		"optimal_tide": "Mid"
// 	},
// 	{
// 		"surf_spot": "The Wedge",
// 		"location": "Newport Beach, CA",
// 		"type": "Beach - Sand Bottom",
// 		"optimal_swell_direction": "SW, SSW, S, SSE",
// 		"optimal_wind": "NE, E, SE",
// 		"optimal_swell_size": "Double overhead to 5x overhead",
// 		"optimal_tide": "Low to Mid"
// 	},
// 	{
// 		"surf_spot": "Pismo Beach Pier",
// 		"location": "Pismo Beach, CA",
// 		"type": "Reef - rock bottom",
// 		"optimal_swell_direction": "Shorter period W or NW or long period SW",
// 		"optimal_wind": "E, NE, or none",
// 		"optimal_swell_size": "Waist high to overhead",
// 		"optimal_tide": "Low to Mid"
// 	},
// 	{
// 		"surf_spot": "Rincon",
// 		"location": "Santa Barbara, CA",
// 		"type": "Point / Rivermouth - cobblestone",
// 		"optimal_swell_direction": "W, WSW, WNW",
// 		"optimal_wind": "N, NE",
// 		"optimal_swell_size": "Head high to double overhead",
// 		"optimal_tide": "Low"
// 	},
// 	{
// 		"surf_spot": "Huntington Beach Pier",
// 		"location": "Huntington Beach, CA",
// 		"type": "Beach - sand bottom",
// 		"optimal_swell_direction": "SSE, S, SW, WSW, W, WNW",
// 		"optimal_wind": "NE Santa Anas",
// 		"optimal_swell_size": "Shoulder hight to 3 ft. overhead",
// 		"optimal_tide": "Mid"
// 	},
// 	{
// 		"surf_spot": "San Onofre Beach",
// 		"location": "San Clemente, CA",
// 		"type": "Beach - cobblestone & sand",
// 		"optimal_swell_direction": "NW, W, SW",
// 		"optimal_wind": "NE or none",
// 		"optimal_swell_size": "Waist high to overhead",
// 		"optimal_tide": "Low to Mid"
// 	},

// 	{
// 		"surf_spot": "Asilomar Beach",
// 		"location": "Pacific Grove, CA",
// 		"type": "Beach - sand with some rocks",
// 		"optimal_swell_direction": "NW, W, SW, N",
// 		"optimal_wind": "E, SE",
// 		"optimal_swell_size": "Waist high - 2x overhead",
// 		"optimal_tide": "Low to Mid"
// 	},
// 	{
// 		"surf_spot": "Cardiff Reef",
// 		"location": "San Diego, CA",
// 		"type": "Reef - rock bottom",
// 		"optimal_swell_direction": "NW, W",
// 		"optimal_wind": "light to none - E if any wind",
// 		"optimal_swell_size": "Waist high to a few feet overhead",
// 		"optimal_tide": "Low to Mid"
// 	},
// 	{
// 		"surf_spot": "Oceanside Pier",
// 		"location": "San Diego, CA",
// 		"type": "Beach/Pier - sand bottom",
// 		"optimal_swell_direction": "SSW, SW, W, WNW",
// 		"optimal_wind": "E, NE",
// 		"optimal_swell_size": "Shoulder high to 3 ft. overhead",
// 		"optimal_tide": "Mid"
// 	},
// 	{
// 		"surf_spot": "Doheny Beach",
// 		"location": "Dana Point, CA",
// 		"type": "Beach - mix of rocks and sand",
// 		"optimal_swell_direction": "SSE, S, SW",
// 		"optimal_wind": "NE",
// 		"optimal_swell_size": "Waist to head high",
// 		"optimal_tide": "Mid"
// 	},
// 	{
// 		"surf_spot": "Lower Trestles",
// 		"location": "San Clemente, CA",
// 		"type": "Beach/Rivermouth - mix of sand and rocks",
// 		"optimal_swell_direction": "S, SW",
// 		"optimal_wind": "E, NE",
// 		"optimal_swell_size": "Shoulder high to double overhead",
// 		"optimal_tide": "Mid"
// 	},
// 	{
// 		"surf_spot": "Blacks Beach",
// 		"location": "San Diego, CA",
// 		"type": "Beach - sand bottom",
// 		"optimal_swell_direction": "NW, W, SW",
// 		"optimal_wind": "E, SE",
// 		"optimal_swell_size": "chest high to 3x overhead",
// 		"optimal_tide": "Low to Mid"
// 	},
// 	{
// 		"surf_spot": "Windandsea Beach",
// 		"location": "La Jolla, CA",
// 		"type": "Beach - mix of sand and rocks",
// 		"optimal_swell_direction": "NW, WNW, SW, SSW,",
// 		"optimal_wind": "E",
// 		"optimal_swell_size": "Chest high to double overhead",
// 		"optimal_tide": "All"
// 	},
// 	{
// 		"surf_spot": "Swamis",
// 		"location": "Encinitas, CA",
// 		"type": "Beach - mix of sand and rocks",
// 		"optimal_swell_direction": "W, NW",
// 		"optimal_wind": "none or E",
// 		"optimal_swell_size": "Waist high to double overhead",
// 		"optimal_tide": "Low to Mid"
// 	},
// 	{
// 		"surf_spot": "Pleasure Point",
// 		"location": "Santa Cruz, CA",
// 		"type": "Point - rock/reef and sand mix",
// 		"optimal_swell_direction": "SSW, SW, W, WNW",
// 		"optimal_wind": "NE, N, NW, or none",
// 		"optimal_swell_size": "Chest high to double overhead",
// 		"optimal_tide": "All - best on mid incoming"
// 	},
// 	{
// 		"surf_spot": "Steamer Lane",
// 		"location": "Santa Cruz, CA",
// 		"type": "Beach - mix of sand and rocks",
// 		"optimal_swell_direction": "W, S, NW",
// 		"optimal_wind": "NE, N, NW or none",
// 		"optimal_swell_size": "Waist high to double overhead",
// 		"optimal_tide": "Low to Mid"
// 	},
// 	{
// 		"surf_spot": "Ventura Point",
// 		"location": "Ventura, CA",
// 		"type": "Point - rock/reef",
// 		"optimal_swell_direction": "W, NW",
// 		"optimal_wind": "E",
// 		"optimal_swell_size": "Overhead to triple overhead",
// 		"optimal_tide": "Low"
// 	},
// 	{
// 		"surf_spot": "Pacifica / Linda Mar Beach",
// 		"location": "Pacifica, CA",
// 		"type": "Beach - mix of sand and rocks",
// 		"optimal_swell_direction": "W, NW, WNW",
// 		"optimal_wind": "E",
// 		"optimal_swell_size": "Waist high to overhead",
// 		"optimal_tide": "Mid to high"
// 	}
// ]
