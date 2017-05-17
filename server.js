let express = require('express');
// make app
let app = express();
// public folder
app.use(express.static('public'));
// start server
app.listen(3000, () => {
    console.log('http://localhost:3000/');
});