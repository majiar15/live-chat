let express = require('express');
let router = express.Router();
const { v4: uuidv4 } = require("uuid");

    
router.get('/', (req, res) => {
    res.redirect(`/room/${uuidv4()}`);
});
    
router.get('/room/:roomId', (req, res) => {
    res.render("room/room", { roomId: req.params.roomId });
});

module.exports = router;
        