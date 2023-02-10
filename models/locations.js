
const router = require('express').Router();
const surfSpots = [
    {
      surf_spot: 'Ocean Beach',
      type: 'Beach - sand bottom with shifting peaks',
      optimal_swell_direction: 'NW, W, SW',
      optimal_wind: 'light to none - up to 10mph NE',
      optimal_swell_size: 'Waist high to double-overhead (note: can handle much bigger but becomes impossible to paddle out)',
      optimal_tide: 'All-tides',
    },
    {
      surf_spot: 'Mavericks',
      type: 'Reef - rock bottom',
      optimal_swell_direction: 'NW, W, SW',
      optimal_wind: 'light to none - up to 10mph NE',
      optimal_swell_size: 'Minimum size triple overhead.  Can handle and routinely sees days up to 5-6x overhead',
      optimal_tide: 'Low to Mid',
    },
   
  ];
  
  //get all dishes
  router.get('/', async (req, res) => {
    res.render('all');
  });
  
  //get one dish
  router.get('/surfSpots/:num', async (req, res) => {
    // This method renders the 'dish' template, and uses params to select the correct dish to render in the template, based on the id of the dish.
    return res.render('surfSpot', dishes[req.params.num - 1]);
  });

  //get all dishes
router.get('/', async (req, res) => {
    res.render('all');
  });
  
  //get one dish
  router.get('/surfSpot/:num', async (req, res) => {
    // This method renders the 'dish' template, and uses params to select the correct dish to render in the template, based on the id of the dish.
    return res.render('surfSpot', dishes[req.params.num - 1]);
  });
  
  module.exports = router;