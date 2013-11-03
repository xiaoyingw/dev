var Mongoose = require('mongoose');

exports.TodoSchema = new Mongoose.Schema({
    description : { type: String, required: true },
    date_finished : { type: Date, required: false },
    done : { type : Boolean, default: false }
});
