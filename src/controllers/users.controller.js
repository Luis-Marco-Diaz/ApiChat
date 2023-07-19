const {Users} = require('../models');
const bcrypt = require('bcrypt');

const createUser = async ( req, res, next) => {
  try {
    const { email, password } = req.body;
    // Encriptar la contraseña
    const hashed = await bcrypt.hash(password, 5);
    // await Users.create({email, password: hashed });
    res.status(200).send(hashed);

  } catch(error) {
    res.status(400).json(error)
  }
}


module.exports = {
  createUSer
};
