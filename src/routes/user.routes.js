const {Router} = require("express");
const {createUser} = require("../controllers/users.controller");
//const {loginUser} = require("../controllers/")

const router = Router();

router.post("/users", createUser);

// router.post("/login", loginUser);

module.exports = router;