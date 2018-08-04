const connection = require('./connection.js');
const mockData = require('./mockdata.js');

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
};


const listingDataGenerator = () => {
  for (let i = 0; i < 100; i += 1) {
    const featuresInt = getRandomInt(mockData.features.length);
    const thingsToDoInt = getRandomInt(mockData.thingsToDo.length);
    const locationLatLon = getRandomInt(mockData.locations.length);
    const hostGuidebooksInt = getRandomInt(mockData.hostGuidebooks.length);

    const theQuery = `INSERT INTO listings (features, things_to_do, lat_location, lon_location, host_guidebook) VALUES ('${mockData.features[featuresInt]}', '${mockData.thingsToDo[thingsToDoInt]}', ${mockData.locations[locationLatLon][0]}, ${mockData.locations[locationLatLon][1]}, '${mockData.hostGuidebooks[hostGuidebooksInt]}')`;

    connection.query(theQuery, (err, result) => {
      if (err) {
        console.log(err)
      } else {
        console.log('inserted listing data');
      }
    });
  }
};

const hostsDataGenerator = () => {
  for (let i = 0; i < 100; i += 1) {
    const firstNameInt = getRandomInt(mockData.firstNames.length);
    const lastNameInt = getRandomInt(mockData.lastNames.length);
    const citiesInt = getRandomInt(mockData.cities.length);
    const statesInt = getRandomInt(mockData.states.length);
    const countriesInt = getRandomInt(mockData.countries.length);
    const joinedInDateInt = getRandomInt(mockData.joinInDates.length);
    const descriptionInt = getRandomInt(mockData.descriptions.length);
    const emailInt = getRandomInt(mockData.emails.length);
    const urlsInt = getRandomInt(mockData.urls.length);

    const theQuery = `INSERT INTO hosts (first_name, last_name, city, state, country, joined_in_date, description, email, photo_url) VALUES ('${mockData.firstNames[firstNameInt]}', '${mockData.lastNames[lastNameInt]}', '${mockData.cities[citiesInt]}', '${mockData.states[statesInt]}', '${mockData.countries[countriesInt]}', '${mockData.joinInDates[joinedInDateInt]}', '${mockData.descriptions[descriptionInt]}', '${mockData.emails[emailInt]}', '${mockData.urls[urlsInt]}')`;

    connection.query(theQuery, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log('inserted hosts data');
      }
    });
  }
};

const reviewsDataGenerator = (users, lists) => {
  for (let i = 0; i < 100; i += 1) {
    const userIdInt = getRandomInt(users) + 1;
    const listIdInt = getRandomInt(lists) + 1;
    const ratingInt = getRandomInt(5);

    const theQuery = `INSERT into reviews (user_id, list_id, rating) VALUES (${userIdInt}, ${listIdInt}, ${ratingInt})`;

    connection.query(theQuery, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log('inserted reviews data');
      }
    });
  }
};


listingDataGenerator();
hostsDataGenerator();
reviewsDataGenerator(100, 100);
