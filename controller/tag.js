// 获取所有tags
exports.getAllTags = async (req, res, next) => {
    try {
        res.send("get /tags")
    } catch (err) {
        next(err);
    }
}
