const express = require('express');
const path = require('path');
const app = express();

// settings

const hostname = 'tomascoffee.com.ar';
const port = 8000;
app.use(express.static(path.join(__dirname, 'views')));

// server listen

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
  console.log('Petición web')
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});