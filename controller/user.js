const {User} = require("../model/index");
const jwt = require("../util/jwt");
const {jwtSecretKey} = require("../config/config.default");

// 登录
exports.login = async(req, res, next) => {
    try {
        // 生成token
        const user = req.user.toJSON()
        delete user.password;

        const token = await jwt.sign({
            userId: user.id,
        }, jwtSecretKey, { expiresIn: 1800 })
        // 过期可以这样弄 , { expiresIn: 30 }

        // 返回响应
        res.status(200).json({
            ...user,
            token
        })
    } catch (err) {
        next(err)
    }
}

// 注册
exports.register = async(req, res, next) => {
    try {
        // 数据库存储
        const user = (await User.create(req.body.user)).toJSON()
        // 不显示password
        delete user.password;
        // 4. 发送成功响应
        res.status(201).json({
            user
        })
    } catch (err) {
        next(err)
    }
}

// 获取当前用户
exports.getCurrentUser = async(req, res, next) => {
    try {
        res.status(200).json({
            user: req.user
        })
    } catch (err) {
        next(err)
    }
}

// 更新用户
exports.updateCurrentUser = async(req, res, next) => {
    try {
        // 处理请求

        res.send("put /user")
    } catch (err) {
        next(err)
    }
}
