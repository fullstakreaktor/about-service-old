const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(3001, () => {
  console.log('Server started on 3001');
});


// const express = require('express');
// const morgan = require('morgan');
// const path = require('path');
// const app = express();
// const port = process.env.PORT || 3002;
//
// app.use(morgan('dev'));
// app.use(express.static(path.join(__dirname, '../public')));
//
// app.listen(port, () => {
//   console.log(`server running at: http://localhost:${port}`);
// });
