const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.port || 5000;

const server = express();
server.use(express.json());

mongoose.connect('mongodb://localhost:27017/rentr')
  .then(() => {
    console.log('DB Connection Successful');
  })
  .catch((err) => {
    console.error(err);
  })

server.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
