const { Router } = require('express');
const router = Router();

const user = require('./userRouter')
const login = require('./loginRouter')

router.get('/', async (req, res) => {
  res.status(200).send({
    title: 'Node Express API',
    version: '0.0.1'
  });
});

router.use('/users', user);
router.use('/login', login);

module.exports = router;