const router = require("express").Router()
const {getUserProfile, followUser, unfollowUser} = require("../controller/profile")

// 获取用户资料
router.get("/:username", getUserProfile)
// 关注用户
router.post("/:username/follow", followUser)
// 取消关注用户
router.delete("/:username/follow", unfollowUser)

module.exports = router;
