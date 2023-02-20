# The-Ocean-Pulse: Break Finder

## Table of Contents:

- [Description](#description)
- [Usage](#usage)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#testing)
- [Mockup](#mockup)
- [Credits](#credits)
- [License](#license)

## Description

This project was the creation of a full stack website that utilizes specific technologies to render a workable and polished website that responds to a real world problem with a intuitive solution. <br>
The Website functionality allows a user to view API data on surfing locations thought the Bay Area and California. The website utilized express.js and Node.js to render the Routes functionality of the pages. It also utilizes sequelize and MYSQL to render the API created API information. Finally, the website utilized Bootstrap 5.3 and Handlebars to render the front end of the website. A user API as well as a surf locations API were created to allow the the use of databases through router.get and router.put aspects.

## Usage

As a User, I want to be able to view the most righteous surf spots on the "Best" Coast So that I can find the ultimate wave. I also want to let the World know about my sweet secret surf spot so that others can share those sick waves by posting my own surfing locations and having them put on the website.

## Acceptance Criteria

GIVEN a surf website that I'm able to find the best surf spots on the best coast<br>
WHEN I open the website<br>
THEN I am landed on the home page with the option to login or signup.<br>
WHEN I click the signup option<br>
THEN I am taken to the signup page and allowed to enter my information.<br>
WHEN i enter that information<br>
THEN i am taken to the login page where I can renter my information and sign up.<br>
When I am logged in<br>
THEN I can select the locations page and view the API of provided surf locations and its details.<br>
WHEN I click the "add location" button<br>
THEN I am taken to a page where I can create my own surf location with details<br>
WHEN I submit that location<br>
THEN the new location will be rendered onto the locations page with the rest of the data.<br>
WHEN I click the logout button<br>
THEN I will be logged out and will no longer be able to see the locations page.<br>

## Installation

A user would first need to initialize the package.json file by entering <b>npm instal</b> in the terminal. This will add the required modules for the functionality of the website.<br>

A user would first need to initiate the SQL aspects of the page though the terminal. The user should simply log into their MySQL through <b>MySQL -uroot -p</b> and enter their information. Once logged in, the user should initiate the SQL by entering <b>SOURCE ./db/schema.sql</b>. <br>

Next the user would need to enter the provided seeds into the databases. This is done by entering <b>npm run seed</b> in the terminal. This will fill the created databases with the seeded information and allow for the user to log in and see provided surf locations.

## Usage

This project can be initiated by entering by first logging in with an email and password, or signing up with a name, email, and password and then logging in with the newly created login. Once a user is logged in, they can progress to the locations page and viewing the provided surfing spots. The user can then click the add location button and render the add location page. The user will then enter in the required information and submit it. The user will then see the new information rendered on the locations page. The user may also logout and end the session at any time by selecting the logout button.

## Contribution

## Testing

No testing was utilized for this project

## Mockup

![Alt text](./public/css/assets/Screen%20Shot%202023-02-19%20at%204.08.58%20PM.png)

## Credits

### Team Members:

- James Baxley | Github: [Kaneknah](https://github.com/Kaneknah)
- Vinícius Teixeira | [Vinni99](https://github.com/Vinni99)
- William Massie | [AltB22](https://github.com/AltB22)
- Beau Ben-Rhouma | Github: [BRhouma](https://github.com/BRhouma)

### Technologies utilized:

#### Front End

-Bootstrap 5.3<br>
-Handlebars<br>

#### Back End

-Node.js<br>
-Express.js<br>
-Sequelize<br>
-MySQL<br>

#### code creation

-Heroku<br>
-Insomnia<br>
-VS Code<br>

### GitHub Link: <https://github.com/Vinni99/The-Ocean-Pulse.git>

## License

N/A
