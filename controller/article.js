// 获取所有文章
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
        res.send("get /articles/:slug")
    } catch (err) {
        next(err);
    }
}

// 创建文章
exports.createArticle = async (req, res, next) => {
    try {
        res.send("post /articles")
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
