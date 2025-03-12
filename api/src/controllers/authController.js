const User = require('../models/userSchema');
const jwt = require('jsonwebtoken');

const signToken = (id) => {
  return jwt.sign({id:id}, process.env.JWT_SECRET,{
    expiresIn: process.env.JWT_EXPIRES_IN
  })
};

exports.login = async (req, res) => {
  try {
    const {email, password} = req.body;
    
    if (!email || !password) throw new Error('Please provide email and password');
    
    const user = await User.findOne({email}).select('password');
    if (!user || !(await user.correctPassword(password, user.password))) throw new Error('Incorrect email or password');
    
    const token = signToken(user._id);

    res.status(202).json({
      status:'Success',
      data:{
        id:user._id,
        name:user.name,
        email:user.email
      },
      token
    })
  } catch (err){
    res.status(400).json({
      status:'Failed',
      message: err.message
    })
  };
};


exports.signup = async (req, res) =>{
  try {
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
      role: req.body.role
    })

    const token = jwt.sign(
      {id:newUser._id},
      process.env.JWT_SECRET,
      {expiresIn: process.env.JWT_EXPIRES_IN}
    )

    res.status(201).json({
      status:'Success',
      data: newUser,
      token
    })
  } catch (err){
    res.status(400).json({
      status:'Failed',
      message: err.message
    })
  };
};