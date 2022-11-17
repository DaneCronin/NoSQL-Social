const {Schema, model} = require('mongoose');


const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },

    }
);

//Create User model using UserSchema
const User = model('UserSchema', UserSchema);

//Export Model
module.exports = User;