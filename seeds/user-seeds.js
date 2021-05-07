const { User } = require('../models/user');

const userData = [
  {
    username: "James",
    email: "james@mail.com",
    password: "password1"
  },
  {
    username: "Jessie",
    email: "jessie@mail.com",
    password: "password2"
  },
  {
    username: "Ash",
    email: "ash@mail.com",
    password: "password3"
  },
  {
    username: "Patrick",
    email: "ourlawyermadeuschangeouremailsowedontgetsued@mail.com",
    password: "password4"
  },
  {
    username: "Garrett",
    email: "themaine@mail.com",
    password: "password5"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;