const menu = {
    list() {
        return [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-present","buttons":["新增","查看","修改","删除"],"menu":"产品分类","menuJump":"列表","tableName":"chanpinfenlei"}],"menu":"产品分类管理"},{"child":[{"appFrontIcon":"cuIcon-addressbook","buttons":["新增","查看","修改","删除","查看评论"],"menu":"热销农产品","menuJump":"列表","tableName":"rexiaonongchanpin"}],"menu":"热销农产品管理"},{"child":[{"appFrontIcon":"cuIcon-service","buttons":["新增","查看","修改","删除"],"menu":"在线客服","tableName":"chat"},{"appFrontIcon":"cuIcon-form","buttons":["查看","修改"],"menu":"关于我们","tableName":"aboutus"},{"appFrontIcon":"cuIcon-flashlightopen","buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"网站公告","tableName":"news"}],"menu":"系统管理"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["删除","查看"],"menu":"已取消订单","tableName":"orders/已取消"},{"appFrontIcon":"cuIcon-circle","buttons":["查看","删除"],"menu":"已退款订单","tableName":"orders/已退款"},{"appFrontIcon":"cuIcon-similar","buttons":["查看","删除"],"menu":"未支付订单","tableName":"orders/未支付"},{"appFrontIcon":"cuIcon-taxi","buttons":["删除","查看"],"menu":"已发货订单","tableName":"orders/已发货"},{"appFrontIcon":"cuIcon-time","buttons":["删除","发货","查看"],"menu":"已支付订单","tableName":"orders/已支付"},{"appFrontIcon":"cuIcon-medal","buttons":["查看","删除","导出","日销额","品销额","类销额"],"menu":"已完成订单","tableName":"orders/已完成"}],"menu":"订单管理"}],"frontMenu":[],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-favor","buttons":["查看","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"}],"frontMenu":[],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}]
    }
}
export default menu;
