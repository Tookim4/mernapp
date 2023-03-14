const express = require('express')
const router = express.Router()
const {createUser, loginUser, getUsergoals} = require('../controllers/userControllers')

router.post('/', createUser)
router.post('/login', loginUser)
router.get('/me', getUsergoals)

module.exports = router