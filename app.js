const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const router = require("./router/index")
const errorHandler = require("./middleware/error-handler")
require("./model/index")

const app = express()


// 中间件
app.use(morgan("tiny"))
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(cors())

// 端口号
const PORT = process.env.PORT || 3000

// 挂载路由
app.use("/api", router)

// 挂载统一服务端错误中间件
app.use(errorHandler())

// 监听端口
app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`)
})
