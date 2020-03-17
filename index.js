const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send ('Hi  this is JAY, welcome to pathshaala');
});

app.listen(8002, () => {
    console.log('Listening on port 8002')
});

