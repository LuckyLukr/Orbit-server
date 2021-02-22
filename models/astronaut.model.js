const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const astronautSchema = new Schema({
     firstName: { type: String, required: true},
     lastName: { type: String, required: true },
     birth: { type: String, required: true },
     superpower: { type: String, required: true },
}, {
    timestamps: true
});

const Astronaut = mongoose.model('Astronaut', astronautSchema);

module.exports = Astronaut;