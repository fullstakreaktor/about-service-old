const connection = require('./connection.js');

const selectHostInfo = (id, callback) => {
  const theQuery = `select * from hosts where id = ${id}`;
  connection.query(theQuery, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  });
};

const reviewsForHost = (callback) => {
  const theQuery = 'select * from reviews where user_id = 86';
  connection.query(theQuery, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result.length);
    }
  });
};

module.exports = {
  selectHostInfo, reviewsForHost,
};

// selectHostInfo();
// reviewsForHost((err, result) => {
//   console.log(result.length);
// });
