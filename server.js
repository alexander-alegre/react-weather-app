let express = require('express');
// make app
let app = express();
// public folder
app.use((req, res, next) => {
    if (req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url);
    } else {
        next();   
    }
});
app.use(express.static('public'));
// start server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`);
});


// npm i foundation-sites@6.2.0 --save-exact --save-dev