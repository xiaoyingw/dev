var Mongoose = require('mongoose');

exports.BlogSchema = new Mongoose.Schema({
    title: { type: String, required: true },
    text: { type: String, required: true },
    date_created: { type: Date, required: true },
    last_modified: { type : Date, required: true }
});
