const { Router } = require('express');
const router = Router();
const userController = require('../api/controllers/userController');
const { verifyToken } = require('../api/utils/jwt');

router.post('/', userController.create);
router.get('/', verifyToken, userController.findAll);
router.get('/:id', verifyToken, userController.findById);
router.put('/:id', verifyToken, userController.update);
router.delete('/:id', verifyToken, userController.delete);

module.exports = router;