const {Schema, model, Types} = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
    {
        //Custom Reaction ID to differentiate from parent Thougth_ID
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => Types.ObjectId()
      },
      reactionBody: {
        type: String,
        required: 'Please enter a message',
        trim: true,
        maxLength: 280
      },
      username: {
        type: String,
        required: 'Must have a username',
        trim: true
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
      }
    }
);


// Thoughts Schema 
const ThoughtSchema = new Schema(
    {
       thoughtText: {
        type: String,
        required: 'Please enter a thought',
        maxLength: 280,
        trim: true
       },
       createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
       },
       username: {
        type: String,
        required: true,
        trim: true
       }

    }
);


//Create Thought Model from ThoughtSchema
const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;