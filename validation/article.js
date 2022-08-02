const {body} = require("express-validator");
const validate = require("../middleware/validate");
const {Article, User} = require("../model");

// 创建文章的验证器
exports.createArticleValidator = validate([
    body("article.title").notEmpty().withMessage("标题不能为空"),
    body("article.description").notEmpty().withMessage("文章摘要不能为空"),
    body("article.body").notEmpty().withMessage("文章内容不能为空")
])

// 更新文章的验证器
exports.updateArticleValidator = [
    // 1. 确保文章存在
    async (req, res, next) => {
        const slug = req.params.slug
        const article = await Article.findOne({
            where: {id: slug},
            include: {
                model: User,
                attributes: {exclude: ['password']}
            }
        })
        req.article = article
        if (!article) {
            return res.status(404).json({
                msg: "文章id不存在"
            })
        }
        next()
    },
    // 确保删除文章的作者是写这篇文章的作者
    async (req, res, next) => {
        if(req.user.id !== req.article.userId) {
            return res.status(403).json({
                msg: "你无法修改别人的文章"
            })
        }
        next()
    }
]

// 删除文章验证
exports.deleteArticleValidator = [
    // 1. 确保文章存在
    async (req, res, next) => {
        const article = await Article.findOne({
            where: {id: req.params.slug},
            include: {
                model: User,
                attributes: {exclude: ['password']}
            }
        })
        req.article = article
        if(!article) {
            return res.status(404).json({
                msg: "文章id不存在"
            })
        }
        next()
    },
    // 2. 确保删除文章的作者是当前登录用户并且是用户写的这篇文章
    async (req, res, next) => {
        if(req.user.id !== req.article.userId) {
            return res.status(403).json({
                msg: "你无法删除别人的文章"
            })
        }

        next()
    }
]
