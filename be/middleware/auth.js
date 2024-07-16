const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  const authHeader = req.header('Authorization');
  if (!authHeader) {
    console.log('No Authorization header');
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  const token = authHeader.replace('Bearer ', '');
  console.log('Received token:', token);

  if (!token) {
    console.log('No token');
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    console.log('Token is valid', decoded);
    next();
  } catch (err) {
    console.log('Token is not valid', err);
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
