const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes');

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Microservice listening at http://localhost:${port}`);
});
