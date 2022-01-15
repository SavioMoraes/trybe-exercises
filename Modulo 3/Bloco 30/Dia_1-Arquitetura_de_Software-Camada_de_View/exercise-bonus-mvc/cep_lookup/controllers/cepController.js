const CEP = require('../models/CEP');

const lookupCEP = async (req, res) => {
  try {
    const cep = await CEP.lookup(req.query.cep);
    res.render('cep', { cep, message: null });
  } catch (err) {
    res.render('cep', { cep: null, message: err.message });
  }
};

module.exports = {
  lookupCEP,
}