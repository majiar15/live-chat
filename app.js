let express = require('express');
let app = express();
let port = process.env.PORT || 3000;

app.use('/', (req, res) => {

});

app.listen(port, () => {
    console.log("server conecet");
});