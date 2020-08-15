exports.validateUserRegister = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(404).json({
      status: 'fail',
      message: 'username and password fields are missing.'
    })
  }
  
  if (username.length === 0 || password.length === 0) {
    res.status(404).json({
      status: 'fail',
      message: 'username and password are required.'
    })
  } 
  
  if (username.length > 255) {
    res.status(404).json({
      status: 'fail',
      message: 'username is no more than 255 characters.'
    })
  } 
  
  next();
};
