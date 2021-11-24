const validateEmail = (email) => {
  const emailRegex =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  const passwordRegex = /^\d+$/; /* Senha pode ter apenas números */
  return passwordRegex.test(password);
};

const validateRole = (role, validRoles) => validRoles.includes(role);

const validateUser = (email, password, role, validRoles) => {
  return (
    validateEmail(email) &&
    validatePassword(password) &&
    validateRole(role, validRoles)
  );
};

module.exports = {
  validateEmail,
  validatePassword,
  validateRole,
  validateUser,
};
