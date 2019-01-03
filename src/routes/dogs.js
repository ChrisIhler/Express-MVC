const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/dogs')


router.get('/', ctrl.getAll)
router.get('/:id', ctrl.getID)
router.post('/', ctrl.create)
router.put('/:id', ctrl.update)
router.delete('/:id', ctrl.deleteID)

module.exports = router