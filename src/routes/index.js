const express = require('express')
const router = express.Router()
const ctrl = require('../controller')

router.get('/', ctrl.getAllFloors)
router.get('/:id', ctrl.getOneFloor)

module.exports = router