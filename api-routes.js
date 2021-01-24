let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
        status: 'success',
        message: 'save game route open'
    });
});

// Import SaveGame controller
var saveGameController = require('./saveGameController');
// SaveGame routes
router.route('/getLatest')
    .get(saveGameController.getLatest)
router.route('/addNew')
    .post(saveGameController.new);
router.route('/list')
    .get(saveGameController.list);
router.route('/isLatest')
    .post(saveGameController.isLatest);

module.exports = router;