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

module.exports = {
    getList,
    getDetail
}