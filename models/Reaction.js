const {Schema, model, Types} = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
    {
      reactionId: {
        type: Schema.Types.ObjectId,
        default: new Types.ObjectId
      },
      reactionBody: {
        type: String,
        required: 'Please enter a message',
        maxLength: 280
      },
      username: {
        type: String,
        required: 'Must have a username'
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
      }
    }
);


// Create Reactions Model from ReactionSchema
const Reaction = model('Reaction', ReactionSchema);

module.exports = Reaction;