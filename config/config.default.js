// 默认配置
const dotenv = require("dotenv").config()
module.exports = {
    mysqlConfig: {
        database: "realworld",
        username: "root",
        password: "12345678",
        host: "localhost",
        port: 3306
    },
    passwordSalt: dotenv.parsed.PASSWORD_SALT,
    jwtSecretKey: dotenv.parsed.JWT_SECRET_KEY
}
