const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
  username:{
    type:String,
    required:[true, 'User must have a name'],
    lowercase:true,
    unique:true
  },
  email:{
    type:String,
    required:[true, 'User must have an email'],
    unique:[true, 'Cannot register with this email'],
    lowercase:true,
    validate:[validator.isEmail, 'is not email'],
  },
  role:{
    type:String,
    default:'client',
    select:false,
    enum:['client','admin'],
  },
  password:{
    type:String,
    select:false,
    required: [true, 'Please provide a password'],
    minlength: 8,
  },
  passwordConfirm:{
    type:String,
    required:[true, 'Please confirm your password'],
    minlength:8,
    validate:{
      validator: function(el){
        return el === this.password
      },
      message:'Passwords are not the same'
    }
  },
  passwordChangedAt:Date,
  passwordResetToken:String,
  passwordResetExpires:Date,
  active:{
    type:Boolean,
    default:true,
    select:false
  },
  createdAt:{
    type:Date,
    default:Date.now(),
    immutable:true,
  },
  modifiedAt:{
    type:Date,
    default:Date.now(),
    select:false
  },
});
// saves password as hash
userSchema.pre('save', async function (next){
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

// compares jwt token
userSchema.methods.changedPasswordAfter = function (JWTTimestamp){
  if (this.passwordChangedAt){
    const changedTimestamp = parseInt(this.passwordChangedAt.getTime() / 1000.10)
    return JWTTimestamp < changedTimestamp;
  };
};

// compares login password to user password
userSchema.methods.correctPassword = async (candidatePassword, userPassword) =>{
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model('Users', userSchema);

module.exports = User;