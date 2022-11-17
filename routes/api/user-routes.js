const router = require('express').Router();

//Import
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require ('../../controllers/user-controller');

//Set up Get All and Post at API/users
router
.route('/')
.get(getAllUser)
.post(createUser);

//Set up Get by ID, UPDATE and DELETE at api/users/:id
router
.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser)

//Set up Friends of users by friend ID
router
.route('/:id/friends/:friendId')
.post(addFriend)
.delete(removeFriend)


module.exports = router;