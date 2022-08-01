const router = require("express").Router();
const {getAllTags} = require("../controller/tag");

// 获取所有tags
router.get("/tags", getAllTags);

module.exports = router;
