const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 255
    },
    email: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 255
    },
    password: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 255
    }
  },
  { 
    timestamps: true 
  }
);  

const User = model('user', userSchema);

modeule.exports = User;