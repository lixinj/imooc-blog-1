const getList = (author, keyword) => {
    //先返回假数据（格式是正确）
    return [
        {
            id: 1,
            title: '标题A',
            content: '内容A',
            createTime: 1607430861141,
            author: 'zhangsan'
        },
        {
            id: 1,
            title: '标题B',
            content: '内容B',
            createTime: 1607430903397,
            author: 'lisi'
        }
    ]
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
module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog
}