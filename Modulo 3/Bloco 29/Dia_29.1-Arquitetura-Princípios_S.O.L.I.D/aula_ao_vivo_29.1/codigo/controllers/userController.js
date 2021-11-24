const User = require("../models/User");
const userValidation = require("../validations/userValidation");

exports.createUser = async (req, res) => {
  const { username, email, password, role } = req.body;

  if (userValidation.validateUser(email, password, role, ["user"])) {
    await User.create(username, email, password, role);
    res.status(200).json({
      message: "Usuário criado com sucesso!",
    });
  } else {
    res.status(400).json({
      message: "Dados inválidos.",
    });
  }
};
