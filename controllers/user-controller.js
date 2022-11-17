const { User } = require('../models');
const { db } = require('../models/Thought');

const userController = {
    //Get all users
    getAllUser(req, res) {
        User.find({})
        
        //sort in descending order of id value
        .sort({_id: -1})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },


//Get one User by ID
getUserById({params}, res) {
    User.findOne({_id: params.id})
    
    .then(dbUserData => {
        //If no user is found send error with 'no user found'
        if(!dbUserData) {
            res.status(404).json({message: 'No User found with this ID!'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
},


//Create a User
createUser ({body}, res) {
    User.create(body)
    .then(dbUserData => res.json(dbUserData))
    .catch(err => res.status(400).json(err));
},

//Update User by ID
updateUser({params, body}, res) {
    User.findOneAndUpdate({_id: params.id}, body, {new: true, runValidators: true})
    .then(dbUserData => {
        //If no user is found send error with 'no user found'
        if(!dbUserData) {
            res.status(404).json({message: 'No User found with this ID!'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
},


//Delete User by ID
deleteUser({params}, res) {
    User.findOneAndDelete({_id: params.id})
    .then(dbUserData => {
        //If no user is found send error with 'no user found'
        if(!dbUserData) {
            res.status(404).json({message: 'No User found with this ID!'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
},

//Add Friend
addFriend({params}, res) {
    User.findOneAndUpdate({_id: params.id},
        {$pull: {friends: params.friendId}},
        {new: true})
        .then(dbUserData => {
            //If no user is found send error with 'no user found'
            if(!dbUserData) {
                res.status(404).json({message: 'No User found with this ID!'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
},

//Remove Friend
removeFriend({params}, res) {
    User.findOneAndUpdate(
        {_id: params.id},
        {$pull: {friends: params.friendId}},
        {new: true}
    )
    .then(dbUserData => {
        //If no user is found send error with 'no user found'
        if(!dbUserData) {
            res.status(404).json({message: 'No User found with this ID!'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => res.json(err))
}

};

module.exports = userController;


