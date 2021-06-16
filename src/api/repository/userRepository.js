const { User } = require('../models');

exports.create = async (data) => {
  const user = await User.create({
    name: data.name,
    userName: data.userName,
    email: data.email,
    password: data.password
  });

  return user;
}

exports.findAll = async () => {
  return users = await User.findAll();
}

exports.findById = async (id) => {
  return user = await User.findByPk(id);
}

exports.update = async (id, data) => {
  const user = await User.findByPk(id);

  if (user) {
    await user.update({
      name: data.name,
      userName: data.userName,
      email: data.email,
      password: data.password
    });
  }

  return user;
}

exports.delete = async (id) => {
  const user = await User.findByPk(id);

  if (user) {
    user.destroy();
  }

  return user;
}

exports.findByUsername = async (userName) => {
  return user = await User.findOne({
    where: {
      userName: userName
    }
  });
}