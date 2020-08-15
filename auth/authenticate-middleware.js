/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

module.exports = (req, res, next) => {
  let token = null;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }
  
  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({
          status: 'fail',
          message: 'Token is invalid.'
        })
      } else {
        req.decodedJwt = decodedToken;
        next();
      }
    })
  } else {
    res.status(401).json({
      status: 'fail',
      message: 'Token is not included.'
    })
  }
}