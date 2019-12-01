
const _ = require('lodash')
const bcrypt = require('bcryptjs')

const users = [
    {
        id: 1,
        username: "Daniel Marbach",
        password: bcrypt.hashSync("1234", parseInt(process.env.BCRYPT_ROUNDS))

    },
    {
        id: 2,
        username: "Luismi",
        password: bcrypt.hashSync("1234", parseInt(process.env.BCRYPT_ROUNDS))

    }
]

let service = {
    findUser: (user) => {
        return _.find(users, u => u.username == user.username);
    },
    findById: (id) => {
        return _.find(users, u => u.id == id);
    },
    insertUser : (user) => {
        users.push({
            id: users.length,
            username: user.username,
            password: user.password
        });
    }
}

module.exports = service