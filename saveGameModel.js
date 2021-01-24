var mongoose = require('mongoose');
// Setup schema
var saveGameSchema = mongoose.Schema({
    playerLevel: {
        type: Number,
        required: true
    },
    selectedHero: {
        type: String,
        required: true
    },
    lastEnergyTimestamp: {
        type: Date,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Contact model
var SaveGame = module.exports = mongoose.model('saveGame', saveGameSchema);
module.exports.getLatest = function (callback, limit) {
    SaveGame.findOne({}, {}, { sort: { 'create_date' : -1 } }, callback);
}
module.exports.list = function (callback, limit) {
    SaveGame.find(callback).limit(limit);
}
