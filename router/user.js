const router = require("express").Router()
// 验证规则和检测
const {registerValidator, loginValidator} = require("../validation/user");


const {
    register,
    login,
    getCurrentUser,
    updateCurrentUser
} = require("../controller/user");


// 用户登录
router.post("/users/login",loginValidator ,login)
// 用户注册
router.post("/users", registerValidator ,register)
// 获取当前用户
router.get("/user", getCurrentUser)
// 更新用户
router.put("/user", updateCurrentUser)

module.exports = router;
