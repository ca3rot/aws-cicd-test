const express = require('express');
const app = express();

app.get('/', funcion(req, res) {
    res.send('Hello MZC!');
});

app.listen(3000, function() {
    console.log('Listening on port 3000');
});


