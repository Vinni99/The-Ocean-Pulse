
const router = require('express').Router();
const surfSpots = [
    {
      surf_spot: 'Ocean Beach',
      location: 'San Francisco',
      type: 'Beach - sand bottom with shifting peaks',
      optimal_swell_direction: 'NW, W, SW',
      optimal_wind: 'light to none - up to 10mph NE',
      optimal_swell_size: 'Waist high to double-overhead (note: can handle much bigger but becomes impossible to paddle out)',
      optimal_tide: 'All-tides',
    },
    {
      surf_spot: 'Mavericks',
      location: 'Half Moon Bay',
      type: 'Reef - rock bottom',
      optimal_swell_direction: 'NW, W, SW',
      optimal_wind: 'light to none - up to 10mph NE',
      optimal_swell_size: 'Minimum size triple overhead.  Can handle and routinely sees days up to 5-6x overhead',
      optimal_tide: 'Low to Mid',
    },
   
  ];
  
  
  
  module.exports = router;