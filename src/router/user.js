const handleUserRouter = (req,res) => {
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]

    if(method === "GET" && url === "/api/user/login"){
        return {
            msg: "这是用户登录接口"
        }
    }
}

module.exports = handleUserRouter