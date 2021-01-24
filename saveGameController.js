SaveGame = require('./saveGameModel');

exports.getLatest = function (req, res) {
    SaveGame.getLatest(function (err, saveGame) {
        if (err) {
            res.json({
                status: "error",
                success: false,
                message: err
            });
        }
        res.json({
            status: "success",
            success: true,
            message: "SaveGame retrieved successfully",
            data: saveGame
        });
    });
};

exports.list = function (req, res) {
    SaveGame.list(function (err, saveGame) {
        if (err) {
            res.json({
                status: "error",
                success: false,
                message: err
            });
        }
        res.json({
            status: "success",
            success: true,
            message: "SaveGame retrieved successfully",
            data: saveGame
        });
    });
};

exports.new = function (req, res) {
    var saveGame = new SaveGame();
    saveGame.playerLevel = req.body.playerLevel;
    saveGame.selectedHero = req.body.selectedHero;
    saveGame.lastEnergyTimestamp = req.body.lastEnergyTimestamp;
    
    saveGame.save(function (err) {
        if (err)
        {
            res.json(err);
            return;
        }
        else
        {
            res.json({
                message: 'save game saved',
                data: saveGame
            });
        }
    });
};

exports.isLatest = function (req, res) {
    var saveGame = new SaveGame();
    SaveGame.getLatest(function (err, saveGame) {
        if (err) {
            res.json({
                status: "error",
                isLatest: true // if there is an error the deveice should continue with the one it has
            });
        }
        var lastDate = new Date(req.body.latestCreateDate)
        res.json({
            status: "success",
            isLatest: saveGame.create_date.getTime() == lastDate.getTime()
        });
    });
    
};