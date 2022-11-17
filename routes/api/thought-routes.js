const router = require('express').Router();

//Import
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    deleteThought,
    updateThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

//Set up get all Thoughts
router
.route('/')
.get(getAllThoughts)
.post(createThought)

//Set up get Thoughts by ID
router
.route('/:id')
.get(getThoughtById)
.put(updateThought)
.post(addReaction)
.delete(deleteThought);

//Set up api for reaction id to thoughts to delete
router
.route('/:id/:reactionId')
.delete(removeReaction);

module.exports = router;