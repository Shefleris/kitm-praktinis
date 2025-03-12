const User = require('../models/userSchema');
const jwt = require('jsonwebtoken');
const {promisify} = require('util');

exports.protect = async (req, res, next) => {
  let token;

  try {
    if (req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ){
      token = req.headers.authorization.split(' ')[1]
    };

    if (!token) {
      throw new Error('User not authenticated')
    };

    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
      throw new Error('User not found')
    };
    if (currentUser.changedPasswordAfter(decoded.iat)) {
      throw new Error('User recently changed password! Please log in again')
    };
  
    res.locals.user = currentUser;
    next()
  } catch (err){
    res.status(400).json({
      status:'Failed',
      message: err.message
    })
  };
};