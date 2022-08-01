// 获取用户资料
exports.getUserProfile = async(req, res, next) => {
    try {
        res.send("post /profiles/:username")
    } catch (err) {
        next(err);
    }
}

// 关注用户
exports.followUser = async(req, res, next) => {
    try {
        res.send("post /profiles/:username/follow")
    } catch (err) {
        next(err);
    }
}

// 取消关注用户
exports.unfollowUser = async(req, res, next) => {
    try {
        res.send("post /profiles/:username/follow")
    } catch (err) {
        next(err);
    }
}
