const {Sequelize} = require("sequelize");
const {mysqlConfig: {database, username, password, host}} = require("../config/config.default");

const sequelize = new Sequelize(database, username, password, {
    host,
    dialect: "mysql"
})

// 测试链接
sequelize.authenticate()
    .then(() => {
        console.log("数据库链接成功")
    })
    .catch(err => {
        console.log("数据库链接失败 ", err.message)
    })

// 注册模型
const User = sequelize.define("users", require("./user"))
const Article = sequelize.define("articles", require("./article"))
User.hasMany(Article)
Article.belongsTo(User)

// 同步所有模型模型
// sequelize.sync({force: true}).then(() => {
//     console.log("模型全部同步完毕")
// })

// 导出所有模型
module.exports = {
    User,
    Article
}
