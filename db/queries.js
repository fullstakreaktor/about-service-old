const connection = require('./connection.js');

const selectHostInfo = (callback) => {
  const theQuery = 'select * from hosts where id = 1';
  connection.query(theQuery, (err, result) => {
    if (err) {
      callbaack(err);
    } else {
      callback(null, JSON.stringify(result));
    }
  });
};

module.exports = {
  selectHostInfo,
};

// selectHostInfo();
