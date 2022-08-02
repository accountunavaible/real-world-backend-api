const router = require("express").Router();
const auth = require("../middleware/auth");
const {createArticleValidator, updateArticleValidator, deleteArticleValidator} = require("../validation/article");
const {getAllArticles, getFeedArticles, getArticle, createArticle, updateArticle, deleteArticle, articlesComments,
    getCommentsForArticle, deleteComment, likeArticle, unLikeArticle
} = require("../controller/article");

// 获取所有文章
router.get("/", getAllArticles)

// 获取相应范围的文章
router.get("/feed", getFeedArticles)

// 获取一篇文章
router.get("/:slug", getArticle)

// 创建文章
router.post("/", auth, createArticleValidator ,createArticle)

// 更新文章
router.put("/:slug",auth,updateArticleValidator, updateArticle)

// 删除文章
router.delete("/:slug", auth, deleteArticleValidator, deleteArticle)

// 创建文章评论
router.post("/:slug/comments", articlesComments)

// 获取文章的评论
router.get("/:slug/comments", getCommentsForArticle)

// 删除评论
router.delete("/:slug/comments/:id", deleteComment)

// 喜欢文章
router.post("/:slug/favorite", likeArticle)

// 取消喜欢文章
router.delete("/:slug/favorite", unLikeArticle)
module.exports = router;
