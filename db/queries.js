const connection = require('./connection.js');

const selectHostInfo = (callback) => {
  const theQuery = 'select * from hosts where id = 5';
  connection.query(theQuery, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  });
};

module.exports = {
  selectHostInfo,
};

// selectHostInfo();
