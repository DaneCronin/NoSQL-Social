const {Schema, model} = require('mongoose');
const dateFormat = require('../utils/dateFormat');


const ThoughtSchema = new Schema(
    {
       thoughtText: {
        type: String,
        required: 'Please enter a thought',
        maxLength: 280
       },
       createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
       },
       username: {
        type: String,
        required: true
       }

    }
);


//Create Thought Model from ThoughtSchema
const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;