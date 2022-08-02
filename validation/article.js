const {body} = require("express-validator");
const validate = require("../middleware/validate");

exports.createArticleValidator = validate([
    body("article.title").notEmpty().withMessage("标题不能为空"),
    body("article.description").notEmpty().withMessage("文章摘要不能为空"),
    body("article.body").notEmpty().withMessage("文章内容不能为空")
])
