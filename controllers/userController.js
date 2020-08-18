const User = require('../models/user-model');
const catchAsync = require('../utils/catchAsync');

exports.readUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  if (users.length > 0) {
    res.status(200).json({
      status: 'success',
      users
    })
  }
  else {
    res.status(404).json({
      status: 'fail',
      message: 'No users found.'
    })
  }
})