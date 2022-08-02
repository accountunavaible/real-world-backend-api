const {jwtSecretKey} = require("../config/config.default");
const jwt = require("../util/jwt");
const {User} = require("../model/index");

module.exports = async (req, res, next) => {
    // 获取从请求头来的token数据
    let token = req.headers["authorization"];
    // 验证token是否有效
    token = token ? token.split(" ")[1] : null
    if(!token) {
        return res.status(401).json({
            err: "请登录后操作"
        })
    }

    try {
        const decodeToken = await jwt.verify(token, jwtSecretKey)
        // 有效-> 把这个用户信息读取出来，挂载到req请求对象上
        req.user = await User.findOne({
            where: {id: decodeToken.userId},
            attributes: {exclude: ['password']}
        })
        next()
    } catch (err) {
        // 无效-> 响应401
        return res.status(401).json({
            err: err.message
        })
    }


}
