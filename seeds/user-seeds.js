const { User } = require('../models');

const userData = [
    {
        username: "Steve",
        password: "Jobs1"
    },
    {
        username: "Elon",
        password: "Musk2"
    },
    {
        username: "Mark",
        password: "Zuck3"
    },
    {
        username: "Jeff",
        password: "Bezos4"
    }    
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;