let express = require('express');
// make app
let app = express();
// public folder
app.use((req, res, next) => {
    if (req.headers['x-forwarded-proto'] === 'http') {
        next();
    } else {
        res.redirect('http://' + req.hostname + req.url);
    }
});
app.use(express.static('public'));
// start server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`);
});