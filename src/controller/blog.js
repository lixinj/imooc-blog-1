const { exec } = require('../db/mysql')

const getList = (author, keyword) => {
    let sql = `select * from blogs where 1=1 `
    if( author ) {
        sql += `and author = '${author}' `
    }
    if( keyword ) {
        sql += `and title like '%${keyword}%' `
    }
    
    sql += `order by createtime desc;`
    
    return exec(sql);
}

const getDetail = (id) => {
    return {
        id: 1,
        title: '标题A',
        content: '内容A',
        createTime: 1607430861141, 
        author: 'zhangsan'
    }
}

const newBlog = (blogData = {}) => {
    //blogData 是一个博客对象，包含 title content 属性
    console.log('newBlogData', blogData)
    return {
        id: 3 //表示新建博客，插入到数据表里面的id
    }
}

const updateBlog = (id, blogData) => {
        //blogData 是一个博客对象，包含 title content 属性
        console.log('id newBlogData', id, blogData)
        return true
}

const delBlog = (id) => {
    return true
}
module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}