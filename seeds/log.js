const { User } = require('../models');
const logindata = [
  {
    name: 'sam',
    email: 'samham123@gmail.com',
    password: 'sam123',
  },
  {
    name: 'john',
    email: 'john334@gmail.com',
    password: 'john123',
  },
  {
    name: 'henry',
    email: 'henry554@gmail.com',
    password: 'henry123',
  },
  {
    name: 'jimmy',
    email: 'jimmy447@gmail.com',
    password: 'jimmy123',
  },
];
const usersSeed = () => User.bulkCreate(userData, {individualHooks: true});
module.exports = usersSeed;
