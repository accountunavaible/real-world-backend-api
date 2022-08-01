const validator = require("../middleware/validate");
const {User} = require("../model/index");
const {body} = require("express-validator");
const {hashMyPassword} = require("../util/hashpassword");

// 注册时用的验证规则
exports.registerValidator = validator([
    body("user.username")
        .notEmpty().withMessage("用户名不能为空")
        .custom(async username => {
            const res = await User.findOne({where: {username}})
            if(res) {
                return Promise.reject("用户名已存在")
            }
        }),
    body("user.password").notEmpty().withMessage("密码不能为空"),
    body("user.email")
        .notEmpty().withMessage("邮箱不能为空")
        .isEmail().withMessage("邮箱格式不正确")
        .bail()
        .custom(async email => {
            const res = await User.findOne({where: {email}})
            if(res) {
                return Promise.reject("邮箱已存在")
            }
        })
])

// 登录验证规则
exports.loginValidator = [
    validator([
        body("user.email").notEmpty().withMessage("邮箱不能为空"),
        body("user.password").notEmpty().withMessage("密码不能为空")
    ]),
    validator([
        body("user.email").custom(async (email, { req }) => {
            const user = await User.findOne({where: {email}})
            if(!user) {
                return Promise.reject("用户不存在")
            }

            req.user = user;
        })
    ]),
    validator([
        body("user.password").custom(async (password, {req}) => {
            if(hashMyPassword(password) !== req.user.password) {
                return Promise.reject("密码错误")
            }
        })
    ])
]
