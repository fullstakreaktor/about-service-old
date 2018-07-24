const connection = require('./connection.js');

const selectHostInfo = () => {
  const theQuery = 'select * from hosts where id = 1';
  connection.query(theQuery, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(JSON.stringify(result));
    }
  });
};

module.exports = {
  selectHostInfo,
};

selectHostInfo();
