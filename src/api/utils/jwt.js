const jwt = require('jsonwebtoken');
const { jwtconfig } = require('../../config/config');

exports.jwtToken = (userName) => {
  return token = jwt.sign({ userName }, jwtconfig.secret, {
    expiresIn: 1800
  });
}

exports.verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ message: 'not authorized!' });

    jwt.verify(token, jwtconfig.secret);

    next();
  } catch (error) {
    return res.status(401).json({ message: 'not authorized!' });
  }
}