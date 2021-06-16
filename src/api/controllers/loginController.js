const { authenticate } = require('../services/loginService');

exports.login = async (req, res, next) => {
  try {
    const data = await req.body;
    const authToken = await authenticate(data);

    if (!authToken) {
      return res.status(400).json({ message: 'username or password is not correct!' })
    }

    return res.status(200).json({ authToken: authToken });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
}