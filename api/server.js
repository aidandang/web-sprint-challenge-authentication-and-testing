const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const jokesRouter = require('../jokes/jokes-router.js');
const userRouter = require('../users/user-router.js');
const errorController = require('../controllers/errorController');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/jokes', authenticate, jokesRouter);
server.use('/api/users', authenticate, userRouter);

// the root route or no routes found
server.use('/', (req, res) => {
  res.json({ message: 'Web API:Node Sprint.' })
});

// global error controller
server.use("/", errorController);

module.exports = server;
