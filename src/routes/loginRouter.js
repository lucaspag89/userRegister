const { Router } = require('express');
const router = Router();
const loginController = require('../api/controllers/loginController');

router.post('/', loginController.login);

module.exports = router;