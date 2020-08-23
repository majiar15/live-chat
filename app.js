let express = require('express');
let app = express();
let port = process.env.PORT || 3000;

app.use('/', (req, res) => {
    res.json({ "message": "hola jejej" });
});

app.listen(port, () => {
    console.log("server conecet");
});