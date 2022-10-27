const { login } = require('../models');

const logindata = [
  {
    name: 'sam',
    email_date: 'samham123@gmail.com',
    password_date: 'sam123',
  },
  {
    name: 'john',
    email_date: 'john334@gmail.com',
    password_date: 'john123',
  },
  {
    name: 'henry',
    email_date: 'henry554@gmail.com',
    password_date: 'henry123',
  },
  {
    name: 'jimmy',
    email_date: 'jimmy447@gmail.com',
    password_date: 'jimmy123',
  },
];

const seedlogin = () => login.bulkCreate(logindata);

module.exports = seedlogin;
