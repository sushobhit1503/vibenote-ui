const express = require('express')
const routes = require('./routes')

const app = express();
const port = 3001;

app.use('/', routes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});