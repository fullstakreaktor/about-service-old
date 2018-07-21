const connection = require('./connection.js');

const features = ['market', 'hiking', 'shopping mall', 'castro', 'snowboarding', 'dog park', 'historic'];

const thingsToDo = ["Stores, coffee shops, restaurants, and pubs are great here.", "chinatown is a must go", "Windy Ocean beach", "welcome to foggy city"];

const locations = [[-17.8336363, 48.4088007], [32.993182, 110.425983], [50.7480989, 20.2540479]];

const hostGuidebooks = ['https://www.airbnb.com/things-to-do/rooms/2736358', 'https://www.airbnb.com/things-to-do/rooms/1345358', 'https://www.airbnb.com/things-to-do/rooms/1345663'];

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};


const listingDataGenerator = () => {
  for (let i = 0; i < 100; i += 1) {
    const featuresInt = getRandomInt(features.length);
    const thingsToDoInt = getRandomInt(thingsToDo.length);
    const locationLatLon = getRandomInt(locations.length);
    const hostGuidebooksInt = getRandomInt(hostGuidebooks.length);

    const theQuery = `INSERT INTO listings (features, things_to_do, lat_location, lon_location, host_guidebook) VALUES ('${features[featuresInt]}', '${thingsToDo[thingsToDoInt]}', ${locations[locationLatLon][0]}, ${locations[locationLatLon][1]}, '${hostGuidebooks[hostGuidebooksInt]}')`;

    connection.query(theQuery, (err, result) => {
      if (err) {
        console.log(err)
      } else {
        console.log('inserted listing data');
      }
    });
  }
};

listingDataGenerator();
