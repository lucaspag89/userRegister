const userRepository = require('../repository/userRepository');
const { hashPassword } = require('../services/userService');

exports.create = async (req, res, next) => {
  try {
    let data = await req.body;
    data.password = await hashPassword(data.password);

    const user = await userRepository.create(data);

    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
}

exports.findAll = async (req, res, next) => {
  try {
    const users = await userRepository.findAll();

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
}

exports.findById = async (req, res, next) => {
  try {
    const id = await req.params.id;
    const user = await userRepository.findById(id);

    if (!user) {
      return res.status(404).send({ message: 'User not found!' });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
}

exports.update = async (req, res, next) => {
  try {
    const id = await req.params.id;
    let data = await req.body;
    data.password = await hashPassword(data.password);

    const user = await userRepository.update(id, data);

    if (!user) {
      return res.status(404).send({ message: 'User not found!' });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
}

exports.delete = async (req, res, next) => {
  try {
    const id = await req.params.id;
    const user = await userRepository.delete(id);

    if (!user) {
      return res.status(404).send({ message: 'User not found!' });
    }

    return res.status(204).send();
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
}