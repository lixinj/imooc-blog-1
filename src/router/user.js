const { login } =require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleUserRouter = (req,res) => {
    const method = req.method

    // 登陆
    if(method === "POST" && req.path === "/api/user/login"){
        const { username, password } = req.body
        const result = login(username, password)
        return result.then(data => {            
            if ( data.username ){                                

                return new SuccessModel('登陆成功')
            } 
            return new ErrorModel('登陆失败')            
        })
    }

    // 登陆验证
    if(method === 'GET' && req.path === '/api/user/login-test'){
        if(req.cookie.username){
            return Promise.resolve(new SuccessModel('已登录'))
        }
        return  Promise.resolve(new ErrorModel('未登录'))
    }
}

module.exports = handleUserRouter