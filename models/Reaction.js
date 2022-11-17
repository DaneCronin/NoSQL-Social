const {Schema, model, Types} = require('mongoose');

const ReactionSchema = new Schema(
    {
      reactionBody: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
      },
      username: {
        type: String,
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
    }
);


// Create Reactions Model from ReactionSchema
const Reaction = model('Reaction', ReactionSchema);

module.exports = Reaction;