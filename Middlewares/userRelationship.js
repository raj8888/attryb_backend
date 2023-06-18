const jswt = require("jsonwebtoken");
require('dotenv').config()

const userRelationShip = (req, res, next) => {
  const  token  = req.headers.authorization;
  try {
    jswt.verify(token, process.env.seckey, (error, decoded) => {
      if (decoded) {
        req.body.userId = decoded.id;
        next();
      } else if (error) {
        res.status(400).send({ msg: error });
      }
    });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};
module.exports = { userRelationShip };
