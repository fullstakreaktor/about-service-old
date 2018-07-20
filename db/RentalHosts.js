const connection = require('./connection.js');

const features = ['market', 'hiking', 'shopping mall', 'castro', 'snowboarding', "farmer's market", 'dog park', 'historic'];

const thingsToDo = ["Stores, coffee shops, restaurants, and pubs are great here."];

const latLocation = [[-17.8336363, 48.4088007], [32.993182, 110.425983], [50.7480989, 20.2540479]];

const hostGuidebooks = ['https://www.airbnb.com/things-to-do/rooms/2736358', 'https://www.airbnb.com/things-to-do/rooms/1345358', 'https://www.airbnb.com/things-to-do/rooms/1345663'];

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const listingData = () => {
  // for (let i = 0; i < 100; i += 1) {
  //   connection.query('INSERT INTO listings SET ?', )
  // }
};
