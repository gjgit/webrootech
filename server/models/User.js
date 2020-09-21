const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  createdAt: String,
  role: String,
  packages: [String],
  transactions: [
    {
      amount: String
    }
  ]
});

module.exports = model('User', userSchema);
