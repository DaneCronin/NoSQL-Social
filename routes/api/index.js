const router = require('express').Router();
const thoughtRoutes = require('./thought-routes');
const userRoutes = require('./user-routes');

// Adds prefix of /thoughts to routes created in thought-routes
router.use('/thoughts', thoughtRoutes);

//Adds prefix of /users to routes created in user-routes
router.use('/users', userRoutes);

module.exports = router;