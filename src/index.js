const express = require('express');
const app = express();

const port = 3000;
const address = '0.0.0.0';

app.listen(port, address, () => {
  console.log(`App is listening at ${address}:${port}`);
});
