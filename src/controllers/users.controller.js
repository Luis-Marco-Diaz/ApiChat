const {Users} = require('../models');
const bcrypt = require('bcrypt');

const createUser = async ( req, res, next) => {
  
  try {
    const { username, email, password } = req.body(); 
    // Encriptar la contraseña
    const hashed = await bcrypt.hash(password, 10);
    await Users.create({ username, email, password: hashed });
    res.status(200).send(hashed);
  } catch(error) {
    res.status(400).json(error);
  }
};

/* const loginUser = async ( req, res, next) => {
  try {
    const {email, password } = req.body();
    const user = await Users.findOne({ where: {email} })
    res.json(user);
  } catch(error) {
    res.status(400).json(error)
  }
}*/

module.exports = {
  createUser,
};
