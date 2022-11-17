const {Schema, model, Types} = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
    {
        //Custom Reaction ID to differentiate from parent Thought_ID
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
        get: createdAtVal => dateFormat(createdAtVal)
      }
    },
    {
        toJSON: {
            getters: true
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
       },

       // Reactions associated with Thoughts to validate data for reactions
       reactions: [ReactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);

//Get total count of reactions
ThoughtSchema.virtual('reactionCount').get(function() {
return this.reactions.length
});


//Create Thought Model from ThoughtSchema
const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;