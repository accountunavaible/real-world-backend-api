// 获取所有文章
const {Article, User} = require("../model");
exports.getAllArticles = async (req, res, next) => {
    try {
        res.send("get /articles")
    } catch (err) {
        next(err);
    }
}

// 获取用户关注的作者文章列表
exports.getFeedArticles = async (req, res, next) => {
    try {
        res.send("get /articles/feed")
    } catch (err) {
        next(err);
    }
}


// 获取一篇文章
exports.getArticle = async (req, res, next) => {
    try {
        const article = await Article.findOne({
            where: {id: req.params.slug}
        })
        const user = (await article.getUser()).toJSON()
        delete user.password
        article.userId = user
        if(!article) {
            return res.status(404).json({
                msg: "没有此文章"
            })
        }

        res.status(200).json({
            article
        })
    } catch (err) {
        next(err);
    }
}

// 创建文章
exports.createArticle = async (req, res, next) => {
    try {
        // 处理请求
        const article = await Article.create({
            ...req.body.article,
            userId: req.user.id
        });
        article.userId = await User.findOne({
            where: {id: req.user.id},
            attributes: {exclude: ['password']}
        })
        res.status(201).json({
            article
        })
    } catch (err) {
        next(err);
    }
}

// 更新文章
exports.updateArticle = async (req, res, next) => {
    try {
        res.send("put /articles/:slug")
    } catch (err) {
        next(err);
    }
}

// 删除文章
exports.deleteArticle = async (req, res, next) => {
    try {
        res.send("delete /articles/:slug")
    } catch (err) {
        next(err);
    }
}

// 创建文章评论
exports.articlesComments = async (req, res, next) => {
    try {
        res.send("post /articles/:slug/comments")
    } catch (err) {
        next(err);
    }
}

// 获取文章评论
exports.getCommentsForArticle = async (req, res, next) => {
    try {
        res.send("get /articles/:slug/comments")
    } catch (err) {
        next(err);
    }
}

// 删除评论
exports.deleteComment = async (req, res, next) => {
    try {
        res.send("delete /articles/:slug/comments/:id")
    } catch (err) {
        next(err);
    }
}

// 喜欢文章
exports.likeArticle = async (req, res, next) => {
    try {
        res.send("delete /articles/:slug/favorite")
    } catch (err) {
        next(err);
    }
}

// 取消喜欢文章
exports.unLikeArticle = async (req, res, next) => {
    try {
        res.send("delete /articles/:slug/favorite")
    } catch (err) {
        next(err);
    }
}
