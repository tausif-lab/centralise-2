const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// GET user by userId
router.get('/:userId', userController.userProfile);
// PUT update user profile
router.put('/:userId', userController.updateUserProfile);
module.exports = router;